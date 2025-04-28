# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. What are the phases in the React design process?

- Starting from a <ins>UI mockup, identify pieces that would make good components</ins>.
  - Implement static versions of these components
  - Verify that they correctly reproduce the mockup (though you may wish to write the CSS later)
- <ins>Determine the UI state that must be held in the components and where that state should live</ins>.
  - Remember that state can only flow from parent to child, as props.
  - Add calls to useState with default values and pass the values as props to the children that need it
  - Verify that the components correctly alter their display when their props change (by changing the default useState values)
- <ins>Determine the events (actions) that need to modify state, which child components they originate in, and how parent components should respond to them</ins>.
  - Events in a child component trigger changes to state in their parents by calling "event handler props"
  - These props are declared in child components (their names usually start with "on")
  - Parents pass handler functions to these props; these handlers update state (their names often start with "handle")
  - Declare the props in child components and call the props in response to events
  - Implement the handler functions in parent components and pass them to the props
  - Verify that the components correctly update their display in response to events

2. How does data flow in React?

- Data flows from <ins>parent to child, as props</ins>.

3. How can children components modify state in their parents?

- By calling <ins>event handler props</ins>

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
