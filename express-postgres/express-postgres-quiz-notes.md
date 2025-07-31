# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

### 1. What is the purpose of the `pg` NPM package?

- It is used for interfacing with your PostgresSQL database.
  - It is a non-blocking PostgreSQL client for Node.js

### 2. How do you tell `pg` which database to connect to?

- When using the CLI (`psql`), the -d option is used to specify the database name.

  `psql -h <hostname> -p <port> -U <username> -d <database_name>`

- A connection string (`connectionString`) can also be used to manage your connections.

  `const { Client } = require('pg');`
  `const client = new Client({`
  `  connectionString: 'postgres://username:password@localhost:5432/database_name'`
  `});`
  `client.connect();`

- Alternatively, you can use environment variables for better security

  `const client = new Client({`
  `  connectionString: process.env.DATABASE_URL,`
  `});`

### 3. How do you send SQL to PostgreSQL from your Express server?

- You call the `.query()` method on a `pg` client or pool instance

  `client.query('SELECT * FROM users WHERE id = $1', [userId], (err, result) => {`
  `  if (err) {`
  `    console.error(err);`
  `  } else {`
  `    console.log(result.rows);`
  `  }`
  `});`

### 4. How do you access the rows that get returned from the SQL query?

- The `.query()` method returns a `pg.Result` object. The actual data rows are in `result.rows`.

  `const result = await client.query('SELECT * FROM users');`
  `console.log(result.rows);  // Array of row objects`

### 5. What must you always remember to put around your asynchronous route handlers? Why?

- Since we are using `await`, is mandatory to use `try/catch` to catch the thrown error.
- Then, use error handling middleware to report the error.

  `app.use(errorMiddleware);`

- Why?
  - To guarantee that we always return a response to the client, even if an error occurs

### 6. What is a SQL Injection Attack and how do you avoid it in `pg`?

- They might attempt to grant the attacker admin access to the database

  - `pg` avoids SQL injection when you use **PARMETERIZED** queries — placeholders like $1, $2, etc., with values in a separate array.

    `const result = await client.query('SELECT * FROM users WHERE name = $1', [userInput]);`

- 💀 **NEVER EVER** just put user inputs directly into your query with string concatenation or template literals 💀

  - Vulnerable example:

    ` const result = await client.query(` `` `SELECT * FROM users WHERE name = '${userInput}'` `` `); `

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
