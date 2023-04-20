import {Router} from 'express';
import {Controller} from '../protocols/controller';
import {CreateOrGetUserUseCase} from '../usecases/user/CreateOrGetUserUseCase';
import {CreateUserProfileUseCase} from '../usecases/user/CreateUserProfileUseCase';
import {GetUserProfileUseCase} from '../usecases/user/GetUserProfileUseCase';

const userRoutes = Router();

userRoutes.get('/', Controller(CreateOrGetUserUseCase));
userRoutes.get('/profile', Controller(GetUserProfileUseCase));
userRoutes.post('/profile', Controller(CreateUserProfileUseCase));

export {userRoutes};
