import {Router} from 'express';
import {Controller} from '../protocols/controller';
import {UserController} from '../controllers/user-controller';

const userRoutes = Router();

userRoutes.get('/', Controller(UserController));

export {userRoutes};
