# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. What is an "event" in React?

- Events in React are similar to events in the DOM (like click, submit, change, etc.), but they are normalized and wrapped in a synthetic event system for cross-browser compatibility.

2. What is an "event handler"? Which component declares the handler?

- In React, the event handler is usually a function that’s passed down to a component or defined within the component itself.

3. How do you pass an event handler to a React component?

- You can pass an event handler to a React component as a prop.

4. What is the naming convention for event handlers?

- The naming convention for event handlers in React is to use a camelCase format, starting with `handle` followed by the event name. Examples:
  - `handleClick` for a click event
  - `handleChange` for a change event
  - `handleSubmit` for a form submit event

5. What is an "event handler prop"? Which component declares the prop?

- An event handler prop is a prop that is passed to a component in order to handle a specific event (such as a `click` or `change` event).
- This prop is typically declared by the _**parent component**_, which owns the logic for handling the event. The child component receives the event handler as a prop and binds it to an event in the UI.

6. What are some custom event handler props a component may wish to define?

- `onSubmit`: A custom handler for when a form is submitted.
- `onChange`: A custom handler for when the value of a field changes.
- `onItemSelect`: A custom handler when an item in a list or dropdown is selected.
- `onFocusChange`: A custom handler for when a form field receives or loses focus.

7. What is the naming convention for custom event handler props?

- The naming convention for custom event handler props follows the same pattern as built-in event handlers. You should prefix the handler with `on` followed by a descriptive, camelCased name that represents the action. For example:
- `onItemSelect`: for selecting an item.
- `onFormSubmit`: for submitting a form.
- `onInputChange`: for changes in an input field.

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
