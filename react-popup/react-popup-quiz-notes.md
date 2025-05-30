# typescript-popup-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. What is a React Portal?

- A React Portal is a mechanism to render a component or JSX subtree outside of the main React component hierarchy, while still preserving the React context and event handling.
  - `ReactDOM.createPortal(child, container)`

2. Where does a Portal get rendered in the DOM?

- A portal renders its content into a DOM node outside of the current component’s parent hierarchy
- html

  - `<body>`
  - `  <div id="root"></div>`
  - `  <div id="modal-root"></div> <!-- Portal content will go here -->`
  - `</body>`

- tsx

  - `ReactDOM.createPortal(`
  - `  <ModalContent />,`
  - `  document.getElementById('modal-root')`
  - `);`

3. When might you want to use a Portal?

- Use a Portal when you want to visually break out of the parent DOM structure, especially for UI elements like:
  - Modals or dialogs
  - Tooltips
  - Dropdowns
  - Popovers
- Why?
  - Because these components often:
    - Need to overlay other elements
    - Must not be restricted by CSS styles like overflow: hidden or z-index
    - Should render near the end of `<body>` to avoid layout bugs

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
