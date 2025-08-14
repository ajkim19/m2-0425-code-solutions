// import express from 'express';
// import pg from 'pg';
// import { ClientError, errorMiddleware } from './lib/index.js';

// type Grade = {
//   gradeId?: number;
//   name: string;
//   course: string;
//   score: number; // A number between 0 and 100
// };

// function validateName(name: any) {
//   if (typeof name !== 'string') {
//     throw new ClientError(400, `Invalid name: ${name}`);
//   }
//   return true;
// }

// function validateCourse(course: any) {
//   if (typeof course !== 'string') {
//     throw new ClientError(400, `Invalid course: ${course}`);
//   }
//   return true;
// }

// function validateScore(score: any) {
//   if (!Number.isInteger(+score) || score < 0 || score > 100) {
//     if (score < 0) {
//       throw new ClientError(
//         400,
//         `Invalid score: ${score}. Score must be greater than 0.`
//       );
//     } else if (score > 100) {
//       throw new ClientError(
//         400,
//         `Invalid score: ${score}. Score must be less than 100.`
//       );
//     } else {
//       throw new ClientError(
//         400,
//         `Invalid score: ${score}. Score must be a number`
//       );
//     }
//   }
//   return true;
// }

// const db = new pg.Pool({
//   connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
//   ssl: { rejectUnauthorized: false },
// });

// const app = express();
// app.use(express.json());

// /////////////////////////////////////////

// app.get('/api/grades', async (req, res, next) => {
//   try {
//     const sql = `select * from grades`;
//     const result = await db.query(sql);
//     res.status(200).json(result.rows);
//   } catch (err) {
//     next(err);
//   }
// });

// app.get('/api/grades/:gradeId', async (req, res, next) => {
//   try {
//     const { gradeId } = req.params;
//     if (!Number.isInteger(gradeId) || +gradeId <= 0) {
//       return res.status(400).json({ error: 'Invalid gradeId' });
//     }
//     const sql = `SELECT * FROM grades WHERE "gradeId" = $1`
//     const params = [cityId];
//     const result = await db.query(sql, params);
//     const city = result.rows[0];
//     if (!city) throw new ClientError(404, `city ${cityId} not found`);
//     res.json(city);
//   } catch (err) {
//     next(err);
//   }
// }

// /////////////////////////////////////////

// app.use(errorMiddleware);

// app.listen(8080, () => {
//   console.log('listening on port 8080');
// })
