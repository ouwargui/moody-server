import type {Express} from 'express';
import {Router} from 'express';
import FastGlob from 'fast-glob';

export default (app: Express): void => {
  const router = Router();
  app.use('/api/v1', router);

  FastGlob.sync(['**/src/routes/**routes.ts']).map(
    async (file) => (await import(`../../${file}`)).default(router), // eslint-disable-line
  );
};
