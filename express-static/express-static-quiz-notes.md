# express-static-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

### 1. What is the purpose of the Express Static middleware?

- The `express.static` middleware is used to **serve static files** such as:
  - images
  - CSS stylesheets
  - JavaScript files
  - fonts
  - HTML documents

### 2. What does `express.static()` return?

- `express.static(path)` returns a middleware function that Express can use to handle HTTP requests for static files in the given directory.

### 3. What are several examples of static files?

- `.html` → Static web pages
- `.css` → Stylesheets
- `.js` → Client-side JavaScript
- `.png`, `.jpg`, `.svg`, `.gif` → Images
- `.woff`, `.ttf`, `.eot` → Fonts
- `.ico` → Favicon

### 4. What is a good way to serve application images using Express?

1. Place your images in a dedicated static folder (e.g. `static/images/`)

2. Use `express.static()` to serve that folder by specifying a mount path for the static directory:

- `app.use('/images', express.static('static/images'));`

3. Now, an image at `static/images/avatar.png` can be accessed via:

- `http://localhost:3000/images/avatar.png`

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
