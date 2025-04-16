# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. When would we want to programmatically create a list of React components?

- If the number or content of items is unknown

2. Why is it important for React components to be data-driven?

- They become reusable and scalable
- They automatically update when data changes (thanks to React’s re-rendering logic)
- You avoid manual DOM manipulation, keeping everything declarative and maintainable

3. What `Array` method is commonly used to create a list of React components?

- .map()

4. Why do components in a list need to have unique keys?

- Track which items have changed, been added, or removed
- Efficiently re-render lists without redrawing every single item
- Without keys (or with non-unique keys), React can get confused during updates, which can cause bugs, poor performance, or unexpected UI behavior.

5. What is the best value to use as a "key" prop when rendering lists?

- a unique identifier

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
