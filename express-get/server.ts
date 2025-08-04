import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `
    select
      count("cities"."cityId") as "cities"
      "cities"."countryId" as "countryId",
      "countries"."name" as "name",
    from "countries"
    join "cities" using ("countryId")
    group by "countryId"
    order by "countryId";
    `;
    const result = await db.query(sql);
    const countries = result.rows;
    res.json(countries);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    console.log('cityId', cityId);
    if (cityId === undefined || typeof Number(cityId) !== 'number') {
      throw new ClientError(400, 'cityId is required and must be a number');
    }
    const sql = `
      select
        "cities"."cityId" as "cityId",
        "countries"."name" as "country",
        "cities"."name" as "name"
      from "cities"
      join "countries" using ("countryId")
      where "cityId" = $1;
    `;
    const params = [cityId];
    const result = await db.query(sql, params);
    const cities = result.rows[0];
    if (!cities) {
      throw new ClientError(404, `film ${cityId} not found`);
    }
    res.send(cities);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
