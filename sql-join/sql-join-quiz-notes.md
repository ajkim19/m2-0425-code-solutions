# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. What is a foreign key?

- A foreign key is a column (or set of columns) in one table that references the primary key in another table.

2. How do you join two SQL tables? (Provide at least two syntaxes.)

- By using the JOIN and USING keywords
  `select *`
  `  from "table_name1"`
  `  join "table_name2" using ("supplierId");`

  `select *`
  `  from "table_name1"`
  `  join "table_name2" using ("supplierId");`

3. How do you temporarily rename columns or tables in a SQL statement?

- The AS keyword is used to create an alias
  `select "products"."name" as "product",`
  `       "suppliers"."name" as "supplier"`
  `  from "products"`
  `  join "suppliers" using ("supplierId");`

4. How do you create a one-to-many relationship between two tables?

- By using one with a primary key and the other with a foreign key referencing it.
  `select "products"."name" as "product",`
  `       "suppliers"."name" as "supplier"`
  `  from "products"`
  `  join "suppliers" using ("supplierId");`

5. How do you create a many-to-many relationship between two tables?

- By introducing a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table.
  `select "p"."name" as "product",`
  `       "p"."category",`
  `       "s"."name" as "supplier",`
  `       "s"."state"`
  `  from "products" as "p"`
  `  join "suppliers" as "s" using ("supplierId")`
  ` where "p"."category" = 'cleaning'`
  `   and "p"."price"    < 20;`
  `);`

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
