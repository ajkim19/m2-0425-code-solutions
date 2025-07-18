# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?

- Create POST Submits data to the server to create a new resource.
- Read GET Retrieves data from the server without modifying it.
- Update PUT or PATCH PUT replaces a resource entirely, PATCH partially updates it.
- Delete DELETE Removes a resource from the server.
- No. This mapping is by convention only and there is nothing in the HTTP specification that requires this mapping.

2. What is Express middleware?

- It is a function that fulfills the requested action.
- It has access to the req (request), res (response), and next objects.
- It's part of the request–response lifecycle and can:
  - Modify the request/response
  - End the request
  - Call next() to pass control to the next middleware

3. What is Express middleware useful for?

- Logging (e.g., request details)
- Authentication and Authorization
- Parsing request bodies (express.json(), express.urlencoded())
- Error handling
- Serving static files
- Setting headers or CORS

4. How do you mount a middleware with an Express application?

- `app.use([path,] callback [, callback...])`

5. Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

- Middleware receives these arguments:
- `function (req, res, next) { ... }`
  - `req`: The request object (contains URL, headers, body, etc.)
  - `res`: The response object (used to send responses)
  - `next`: A callback to move to the next middleware or route handler

6. How do you specify and retrieve route parameters?

- You specify route parameters in the path using : syntax:

  `app.get('/users/:id', (req, res) => {`

  `  const userId = req.params.id; // retrieve`

  `  res.send(`User ID is ${userId}`);`

  `});`

- `:id` is a route parameter
- `req.params` holds all route parameters as an object

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
