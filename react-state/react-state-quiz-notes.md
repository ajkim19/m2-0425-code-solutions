# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. What are _hooks_ in React?

- Hooks are special functions that allow components to have access to state and other React features.
- They are also used to add state into a component that will be persisted across component calls and used to schedule component re-renders.

2. What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

- The function name must start with `use` followed by an uppercase letter
  - so `user()` would not be a valid hook name, but `useState` and `useCallback` would be valid
- Hooks can only be called by React components and other hooks
- All hooks in a component must always be called at the top level of a component, and in the same order
  - This means you cannot call hooks in nested functions or conditional statements

3. What is the purpose of state in React?

- It allows React to create dynamic components that have the ability to respond to user input and update what is being displayed to the DOM based on user interactions or variable value changes.

4. Why can't we just maintain state in a local variable?

- In JavaScript, the values contained in a function's local variables do not persist between function calls, because each time a function is called new local variables are allocated.
- When a React component is rendered, its component function gets called. Therefore, new local variables will be allocated for it. Those variables will have no relation to previous invocations of that component function, so all prior local variable data is lost.

5. What two actions happen when you call a `state setter` function?

- Updates and assigns the value of state to a variable
- Creates and assigns a setter function to a variable

6. When does the local `state variable` get updated with the new value?

- It is updated during the re-rendering process after the execution of the state setter function.

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
