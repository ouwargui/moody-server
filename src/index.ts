import express from 'express';
import {routes} from './routes';
import {errorHandler} from './middlewares/error';

const app = express();

app.use(express.json());
app.use('/api/v1', routes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
