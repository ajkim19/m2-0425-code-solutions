import express from 'express';
// import { ClientError, errorMiddleware } from './lib/index.js';
import { errorMiddleware } from './lib/index.js';

const app = express();

// Add new code here

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
