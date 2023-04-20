import {Router} from 'express';
import {authenticateUser} from '../middlewares/auth';
import {Middleware} from '../protocols/middleware';
import {userRoutes} from './user.routes';

const routes = Router();

routes.use('/user', Middleware(authenticateUser), userRoutes);

export {routes};
