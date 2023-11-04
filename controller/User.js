const User = require("../model/User");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const md5 = require('md5');
const nodemailer = require('nodemailer');
const express = require('express');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');

const loginUser =  (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json(info.message);
    }
    req.login(user, async (err) => {
      if (err) return next(err);
      const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
      res.cookie('jwt', token, { maxAge: 86400000, httpOnly: true });
      return res.status(200).json({ email: user.email, id: user.id,imageUrl:user.gravatar });
    });
  })(req, res, next);
}
const createUsers = async (req, res, next) => {
  try {
    // console.log(req.body)
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json('Email already exists' );
    }
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(password, salt, 310000, 32, 'sha256', async function(err, hashedPassword) {
      if (err) { return next(err); }
      const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`;
      const newUser = new User({ email, password: hashedPassword, salt,gravatar });
      // const doc = await newUser.save();
      newUser.save()
      .then((doc) => {
        const token = jwt.sign({ email: doc.email, id: doc.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
        res.cookie('jwt', token, { maxAge: 86400000, httpOnly: true });
        return res.status(200).json({ email: doc.email, id: doc.id, imageUrl: doc.gravatar });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ message: 'Error creating user' });
      });
  });
    // return res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: 'Error creating user' });
  }
}

const logout = async (req, res) => {
  res
    .cookie('jwt', null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .sendStatus(200)
};

// Generate a random reset token and save it to the user's document in the database
const resetPasswordRequest= async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Generate a random reset token
    const resetToken = jwt.sign({ email: user.email}, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    // console.log("resetToken",resetToken)
    // const resetToken = crypto.randomBytes(32).toString('hex');
    // Save the reset token and expiration time to the user document
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000; // Token expires in 1 hour
    await user.save();
    // Send an email with the reset link
    const transporter = nodemailer.createTransport({
      service: 'gmail',
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
      auth: {
        user: 'amarjeetkumarekma@gmail.com',
        pass: process.env.MAIL_PASSWORD,
      },
    });
    // const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
    const resetLink = `https://amarstore-m6r7.onrender.com/reset-password?token=${resetToken}&email=${email}`;
    const mailOptions = {
      from: 'amarjeetkumarekma@gmail.com',
      to: email,
      subject: 'Password Reset Request',
      text: `Click the following link to reset your password: ${resetLink}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to send reset email' });
      }
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Reset email sent' });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error resetting password' });
  }
};

const resetPassword= async (req, res) => {
  const { token, password, confirmPassword } = req.body;

  // Verify that the password and confirmPassword match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }
  try{
      // Find the user by the reset token
  const user = await User.findOne({ resetToken: token });
// console.log(user)
  if (!user) {
    return res.status(404).json({ message: 'Invalid or expired token' });
  }
  // Hash the new password with bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);
  // Update the user's password and reset the token and expiration
  user.password = hashedPassword;
  user.resetToken = null;
  user.resetTokenExpiration = null;
  await user.save();
  // console.log("new user",user)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
       auth: {
         user: 'amarjeetkumarekma@gmail.com',
         pass: process.env.MAIL_PASSWORD,
       },
     });
     const mailOptions = {
       from: 'amarjeetkumarekma@gmail.com',
       to: user.email,
       subject: 'Password Successfully Reset for "AmarStore"',
       text: `Successfully able to Reset Password`,
     };
     transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
         console.log(error);
         res.sendStatus(400);
       }
        res.status(200).json({ message: 'Password reset successful' });
     })
  } catch(err){
    console.log(err)
    return res.status(500).json({ message: 'Error resetting password' });
  }
  // return res.status(200).json({ message: 'Password reset successful' });
};

const checkUser = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user; // Attach the user to the request object for further use
    return res.status(200).json({ email: user.email, id: user.id,imageUrl:user.gravatar });
  })(req, res, next);
};

module.exports = { createUsers, checkUser, loginUser,resetPasswordRequest,resetPassword,logout };
