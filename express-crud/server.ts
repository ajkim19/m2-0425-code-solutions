// import express from 'express';
// import pg from 'pg';
// import { ClientError, errorMiddleware } from './lib/index.js';

// type Grade = {
//   gradeId?: number;
//   name: string;
//   course: string;
//   score: number; // A number between 0 and 100
// };

// function validateGrade(name: any, course: any, score: any): void {
//   if (typeof name !== 'string') {
//     throw new ClientError(400, `Invalid name: ${name}`);
//   }
//   if (typeof course !== 'string') {
//     throw new ClientError(400, `Invalid course: ${course}`);
//   }
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
//     const sql = `
//       select * from grades
//       where "gradeId" = $1`;
//     const params = [gradeId];
//     const result = await db.query(sql, params);
//     const grade = result.rows[0];
//     if (!grade) throw new ClientError(404, `Grade ID ${gradeId} not found`);
//     res.json(grade);
//   } catch (err) {
//     next(err);
//   }
// });

// app.post('/api/grades', async (req, res, next) => {
//   try {
//     const { name, course, score } = req.body;
//     validateGrade(name, course, score);
//     const sql = `
//       insert into "grades" ("name", "course", "score")
//       values ($1, $2, $3)
//       returning *;
//     `;
//     const params = [name, course, score];
//     const result = await db.query(sql, params);
//     const grade = result.rows[0];
//     res.status(201).json(grade);
//   } catch (err) {
//     if (err instanceof Error && err.message.startsWith('Invalid')) {
//       return res.status(400).json({ error: err.message });
//     }
//     next(err);
//   }
// });

// /////////////////////////////////////////

// app.use(errorMiddleware);

// app.listen(8080, () => {
//   console.log('listening on port 8080');
// });
