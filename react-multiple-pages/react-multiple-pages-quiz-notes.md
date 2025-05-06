# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?

- The URL does not change

2. What NPM package can be used to make navigating a React app behave as users expect?

- React Router

3. Which React Router component(s) can be used to set up your app's navigation?

- BrowserRouter, Routes, Route

4. How does React Router match the browser URL to one of your app's React components?

- It compares the current browser URL to the paths defined in `<Route>` components inside `<Routes>`.

5. What is the purpose of React Router's `Outlet` component?

- It is a placeholder for rendering child routes in a nested routing setup.
  - It tells React Router where to render the matched nested route’s component.

6. What React component is used to statically navigate to another page? What HTML element does it render to?

- Link, which renders to an anchor tag

7. What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?

- useParams()

8. What React Router hook is used to navigate programmatically?

- useNavigate()

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
