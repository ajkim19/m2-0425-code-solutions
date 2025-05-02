import { useState, ChangeEvent } from 'react';
import './SearchableList.css';

export function SearchableList({ quotes }: { quotes: string[] }) {
  const [content, setContent] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const eventTarget = event.target as HTMLInputElement;
    if (!eventTarget) throw new Error('event.target does not exist');
    setContent(eventTarget.value.toLowerCase());
  }

  const tempList: string[] = [];
  for (let i = 0; i < quotes.length; i++) {
    const isIncluded = quotes[i].toLowerCase().includes(content);
    if (isIncluded) {
      tempList.push(quotes[i]);
    }
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
        {tempList.length === 0 ? (
          <div>No items match the filter</div>
        ) : (
          <ul className="flex included-list">
            {tempList.map((quote, index) => (
              <li className="quote" key={index}>
                {quote}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
