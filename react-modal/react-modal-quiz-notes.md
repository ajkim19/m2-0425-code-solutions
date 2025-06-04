# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. What is the `<dialog>` element used for?

- The `<dialog>` element is used to create modal or non-modal dialogs—such as popups, confirmation boxes, or forms that require user interaction.

2. How do you show and hide a modal dialog?

- .show() – Displays the dialog as a non-modal popup.
- .showModal() – Displays it as a modal (user can’t interact with the rest of the page until it’s closed).
- .close() – Hides the dialog.

3. How do you manipulate child components in React? Why will that not work for the `<dialog>` element?

- The `<dialog>` element requires imperative control (e.g. `showModal()`), which doesn't sync well with React's declarative rendering model.
- React doesn’t know you’ve opened or closed the dialog unless you track it in state manually or use refs.

4. How do you call the dialog element's functions in React?

- You do this by utilizing the JSX ref

5. How can you render nested components or JSX elements in React?

- By making use of the children prop

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
