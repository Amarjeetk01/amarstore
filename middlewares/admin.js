
import { User } from '../models/index.js';
import CustomErrorHandler from '../services/CustomErrorHandler.js';

const admin = async (req, res, next) => {
    try {
        let id=req.user.id
        const user = await User.findById(id);
        if (user.role === 'admin') {
            next();
        } else {
            return next(CustomErrorHandler.unAuthorized());
        }
    } catch (err) {
        return next(CustomErrorHandler.serverError(err.message));
    }
};

export default admin;