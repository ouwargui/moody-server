import {Router} from 'express';
import {Controller} from '../protocols/controller';

const loginRoutes = Router();

loginRoutes.get(
  '/',
  Controller(async (req, res) => {
    return res.send('Hello World!');
  }),
);

export {loginRoutes};
