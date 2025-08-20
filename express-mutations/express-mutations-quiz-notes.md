# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

### 1. What is the significance of an HTTP request's method?

- The HTTP method helps route the request properly and enforce rules around data manipulation.

### 2. What is the significance of an HTTP response's status?

- The HTTP status is used to inform clients of their request’s overarching result.
  - 1xx: Informational – Communicates transfer protocol-level information.
  - 2xx: Success – Indicates that the client’s request was accepted successfully.
  - 3xx: Redirection – Indicates that the client must take some additional action in order to complete their request.
  - 4xx: Client Error – This category of error status codes points the finger at clients.
  - 5xx: Server Error – The server takes responsibility for these error status codes.
- REST is an acronym for REpresentational State Transfer and an architectural style for distributed hypermedia systems.
  - Its data and functionality are considered resources and are accessed using Uniform Resource Identifiers (URIs).

### 3. What does the express.json() middleware do and when would you need it?

- `express.json()` is a built-in Express middleware that parses incoming JSON payloads in the request body and makes them available as `req.body`.
- You need it when you're expecting the client to send JSON data in a request.

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
