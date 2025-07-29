# ds-list-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. Briefly describe the List data structure.

- A list is a data structure that holds its data in a contiguous block of memory.

2. What are some examples of when you would use a List?

- Linked List
- Queue
- Stack

3. How do you read an element of a List given its index? What is its time complexity?

- Any element in a list can be read from memory in constant time, if you know its index.
  - Because lists use contiguous memory, the index allows direct access.
  - An element in a list can be located in memory by multiplying the index by the element size and adding the memory location of the first element in the list.
- `list[index]`
- O(1)

4. How do you add an element into a List at a given index? What is its time complexity?

- All elements with indexes greater than the target index must be shifted right/upwards to fill the removed location
- `array.splice(index, 0, element)`
- O(n)

5. How do you update an element in a List at a given index? What is its time complexity?

- Direct index access, because allows immediate replacement.
- `array[index] = newValue`
- O(1)

6. How do you remove an element from a List at a given index? What is its time complexity?

- All elements with indexes greater than the target index must be shifted left/downwards to fill the removed location
- array.splice(index, 1)
- array.pop()
- array.shift()

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
