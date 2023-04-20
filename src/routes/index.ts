import {Router} from 'express';
import {authenticateUser} from '../middlewares/auth';
import {Middleware} from '../protocols/middleware';
import {loginRoutes} from './login.routes';

const routes = Router();

routes.use('/login', Middleware(authenticateUser), loginRoutes);

export {routes};
