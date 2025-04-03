# react-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. What is a React component?

- Components in React can be thought of as functions that typically take in data in the form of a props object, and use that data to create reusable UI elements that contain the HTML, CSS, and JavaScript necessary to provide all the functionality for that portion of the website.

2. How do you define a component in React?

- A component in React is an exported function that returns HTML, CSS, and/or JavaScript code

3. How is a component "rendered" (made visible on the browser page)?

`const root = ReactDOM.createRoot(document.getElementById('root')); // Get the DOM element where you want to render the component
root.render(<MyComponent />); // Render the component into the DOM element`

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
