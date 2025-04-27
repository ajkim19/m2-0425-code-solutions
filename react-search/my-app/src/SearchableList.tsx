import { useState, ChangeEvent } from 'react';
import './SearchableList.css';

export function SearchableList({ quotes }: { quotes: string[] }) {
  const [content, setContent] = useState('');
  const initArr: string[] = [];
  const [includedList, setIncludedList] = useState(initArr);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setIncludedList(initArr);
    const eventTarget = event.target as HTMLInputElement;
    if (!eventTarget) throw new Error('event.target does not exist');
    setContent(eventTarget.value.toLowerCase());
    console.log('content', content);
    const tempList: string[] = [];
    for (let i = 0; i < quotes.length; i++) {
      const isIncluded = quotes[i].toLowerCase().includes(content);
      if (isIncluded) {
        tempList.push(quotes[i]);
      }
    }
    setIncludedList(tempList);
    console.log('includedList', includedList);
  }

  return (
    <>
      <div className="flex searchable-list">
        <input
          type="text"
          value={content}
          onChange={handleChange}
          placeholder="search"
        />
        <ul className="flex included-list">
          {includedList.map((quote, index) => (
            <li className="quote" key={index}>
              {quote}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
