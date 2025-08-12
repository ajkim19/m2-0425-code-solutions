// import express from 'express';
// import pg from 'pg';
// import { ClientError, errorMiddleware } from './lib/index.js';

// type Grade = {
//   gradeId?: number;
//   name: string;
//   course: string;
//   score: number; // A number between 0 and 100
// };

// function validateGradeInput(name: any, course: any, score: any) {
//   if (typeof name !== 'string') return false;
//   if (typeof course !== 'string') return false;
//   if (!Number.isInteger(score) || score < 0 || score > 100) return false;
//   return true;
// }

// const db = new pg.Pool({
//   connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
//   ssl: { rejectUnauthorized: false },
// });

// const app = express();
// app.use(express.json());

// app.use(errorMiddleware);

// app.listen(8080, () => {
//   console.log('listening on port 8080');
// });
