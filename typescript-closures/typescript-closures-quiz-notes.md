# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. In JavaScript, when is scope determined?

- Parse time

2. What allows JavaScript functions to "remember" variables from their surroundings?

- <ins>Closures</ins>; even after the outer function has finished executing.

3. What values does a closure contain?

- A closure contains <ins>all variables from its outer scope</ins> that were in use at the time the closure was created, including function parameters and local variables.

4. When is a closure created?

- A closure is created <ins>when a function is defined inside another function</ins> and that inner function <ins>accesses variables from the outer function</ins>.

5. How can you tell if a function will be created with a closure?

- (similar to the answer above) If a <ins>function is defined inside another function</ins> and <ins>references any variable from the outer function</ins>, a closure will be created.

6. In React, what is one important case where you need to know if a closure was created?

- One important case is <ins>inside event handlers or effects</ins> (`useEffect`, `useCallback`, etc.), where closures might <ins>capture stale values of props or state</ins>.
  - This can lead to unexpected behavior unless you manage dependencies correctly.

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
