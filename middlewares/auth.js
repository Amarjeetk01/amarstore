import CustomErrorHandler from "../services/CustomErrorHandler.js";
import JwtService from "../services/JwtService.js";

const auth = async (req, res, next) => {

  // let authHeader = req.headers.authorization;
  // console.log(authHeader)
    // if (!authHeader) {
    //     return next(CustomErrorHandler.unAuthorized());
    // }

    // const token = authHeader.split(' ')[1];

  const token = req.cookies.access_token;
  if (!token) {
    return next(CustomErrorHandler.unAuthorized());
  }

  try {
    const { id } = await JwtService.verify(token);
    const user = {
      id,
    };
    req.user = user;
    next();
  } catch (err) {
    return next(CustomErrorHandler.unAuthorized());
  }
};

export default auth;
