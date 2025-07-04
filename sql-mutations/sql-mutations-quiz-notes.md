# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. What are the SQL _CRUD_ operations?

- Create - `INSERT`
- Read - `SELECT`
- Update - `UPDATE`
- Delete - `DELETE`

2. How do you add a row to a SQL table?

`INSERT INTO table_name (column_name1, column_name2)`
`VALUES (value1, value2);`

3. How do you add multiple rows to a SQL table at once?

`INSERT INTO table_name (column_name1, column_name2)`
`VALUES`
`  (value1a, value1b),`
`  (value2a, value2b),`
`  (value3a, value3b);`

4. How do you update rows in a database table?

`UPDATE table_name`
`SET column_name1 = value1, column_name2 = value2`
`WHERE condition;`

5. How do you delete rows from a database table?

`DELETE FROM table_name`
`WHERE condition;`

6. Why is it important to include a `where` clause in your `update` and `delete` statements?

- `UPDATE` would modify every row in the table
- `DELETE` would remove all data, potentially causing irreversible data loss

7. How do you accidentally delete or update all rows in a table?

- By using `DELETE` or `UPDATE` without a `WHERE` clause

8. How do you get back the modified row without a separate `select` statement?

- Use the `RETURNING` clause
  `UPDATE table_name`
  `SET column_name = value`
  `WHERE condition`
  `RETURNING *;`

9. Why did you get an error when trying to delete certain films?

-

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
