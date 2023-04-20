import express from 'express';
import {routes} from './routes';
import {errorHandler} from './middlewares/error';
import {logger} from './middlewares/logger';

const app = express();

app.use(express.json());
app.use(logger);
app.use('/api/v1', routes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
