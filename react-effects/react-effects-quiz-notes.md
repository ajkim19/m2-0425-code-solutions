# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. When is a component "mounted" to the DOM?

- A React component is mounted after the component's initial render.
  - Mounting is part of the component's lifecycle (the first phase, after initialization).

2. What is a React Effect?

- <ins>Effects</ins> let you run some code after rendering so that you can synchronize your component with some system outside of React.

3. When should you use an Effect and when should you not use an Effect?

- Use Effect
  - Synchronize with external systems.
- Don't Use Effect
  - Transform data for rendering
  - Handle user events

4. When do Effects run?

- It runs after every render.

5. What function is used to declare an Effect?

- `useEffect()`

6. What are Effect dependencies and how do you declare them?

- An array that specifies when to skip re-running the Effect
- You declare them by passing a dependency array as the second argument to `useEffect`.

7. Why would you want to clean up from an Effect?

- Prevent unwanted side effects
- Close various connections

8. How do you clean up from an Effect?

- Inside `useEffect`, return a function that handles the cleanup

9. When does the cleanup function run?

- The cleanup function runs before the component is unmounted.
- It also runs before the Effect is re-executed when dependencies change.

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
