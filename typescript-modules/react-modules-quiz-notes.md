# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are modules?

Modules are collections of code in an external file which performs a specific task or function.

- What is the difference between named and default imports?

Named Imports

- Syntax: You import specific members of a module by their name, and the name must match the name of the export.
- Usage: When you want to import only specific elements (variables, functions, components, etc.) from a module.

Default Imports

- Syntax: You import the default export from a module. There's no need to use curly braces.
- Usage: When a module exports a single value or entity as the default.

Key Point: You can only have one default export per file/module, and you can choose any name to import the default value.

- What is the difference between named and default exports?

Named Exports

- Syntax: You explicitly export individual components, variables, or functions by their name.
- Usage: When you want to export multiple values from a module and let the consumer import only the ones they need.

Default Exports

- Syntax: You export a single value, object, or function as the default from a module.
- Usage: When a module is focused on exporting a single entity (like a class, function, or object).

Key Point: A module can have only one default export, but it can have many named exports. A default export can be imported with any name (doesn’t have to match the exported name).

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
