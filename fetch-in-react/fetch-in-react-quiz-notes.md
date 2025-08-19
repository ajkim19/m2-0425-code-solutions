# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

### 1. What JavaScript function in the browser can be used in React to make HTTP requests to a server?

- fetch()

### 2. What two things need to be done to properly handle HTTP request errors? Why?

- Check response.ok (status code check):

  - fetch won’t throw an error automatically for 4xx/5xx responses, so you must check:

```
if (!response.ok) {
 throw new Error(`HTTP error! Status: ${response.status}`);
}
```

- Wrap in a try/catch block

  - Handles network issues (e.g., no connection, CORS errors).

```
try {
  const res = await fetch(url);
} catch (err) {
  console.error('Network error:', err);
}
```

- This ensures you catch both **server** errors and **network** errors.

### 3. How can `useEffect` be used to load data for a component?

- Write fetch calls inside `useEffect`

### 4. How do you use `useEffect` to load component data just once when the component mounts?

- Provide an empty dependency array []:

```
useEffect(() => {
  fetchData();
}, []); // runs once when component mounts
```

### 5. How do you use `useEffect` to load component data every time the data key changes?

- Include the key in the `useEffect` dependency array

### 6. In a large-scale production app, what are some better alternatives for loading and managing backend data?

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
