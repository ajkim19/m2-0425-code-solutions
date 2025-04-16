# react-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. When does React re-render a component?

- React re-renders a component when:

  - Its state changes via setState or useState.

  - Its props change.

  - Its context values (from useContext) change.

  - Parent component re-renders (which can trickle down).

  - In class components: forceUpdate() is called.

- React uses a virtual DOM diffing algorithm to minimize actual DOM updates, only changing what’s necessary.

2. What are some ways to create a new, modified copy of an object?

- Object.assign()
  - <pre>function copyObject(obj: object): object {
      return Object.assign({}, obj);
    }</pre>
  - <pre>function updateObject(obj: object, fields: object): object {
      return Object.assign({}, obj, fields);
    }</pre>
- Spread operator
  - <pre>function copyObject(obj: object): object {
      return { ...obj };
    }</pre>
  - <pre>function updateObject(obj: object, fields: object): object {
      return { ...obj, ...fields };
    }</pre>
- Deep clone
  - <pre>const newObj = JSON.parse(JSON.stringify(oldObj));</pre>
- Libraries
  - <pre>import _ from 'lodash';
      const newObj = _.cloneDeep(oldObj);</pre>

3. What is a good way to immutably add a value to an array?

- Spread operator
  - <pre>function addItem(arr: Array, item: unknown): Array {
      return arr.concat(item);
    }</pre>
  - <pre>function addItem(arr: Array, item: unknown): Array {
      return [...arr, item];
    }</pre>

4. What is a good way to immutably update a value in an array?

- .map()
  - <pre>function updateItem(arr: Array, item: unknown): Array {
      return arr.map((i) => (i.id === item.id ? item : i));
    }</pre>
  - <pre>const newArray = oldArray.map((item, index) =>
      index === targetIndex ? newValue : item
    );</pre>
  - Or if you're updating a property of an object inside the array:
    <pre>const newArray = oldArray.map((item, index) =>
      index === targetIndex ? { ...item, key: newValue } : item
    );</pre>

5. What is a good way to immutably remove a value from an array?

- .filter()
  - <pre>function removeItem(arr: Array, item: unknown): Array {
      return arr.filter((i) => i.id !== item.id);
    }</pre>
  - <pre>const newArray = oldArray.filter((_, index) => index !== targetIndex);</pre>
  - Or based on a condition:
    <pre>const newArray = oldArray.filter(item => item.id !== targetId);</pre>

## Notes

All student notes should be written here.

How to write Code Examples in markdown

for JS:

javascript
const data = 'Howdy';

for HTML:

html

<div>
  <p>This is text content</p>
</div>

for CSS:

css
div {
width: 100%;
}
