import { useState, ChangeEvent } from 'react';

export function SearchableList({ quotes }: { quotes: string[] }) {
  const [content, setContent] = useState('');
  const includedList: string[] = [...quotes];

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const eventTarget = event.target as HTMLInputElement;
    if (!eventTarget) throw new Error('event.target does not exist');
    setContent(eventTarget.value);
    // for (let i = 0; i < quotes.length; i++) {
    //       console.log(quotes[i]);
    //       const quoteArray = quotes[i].split(' ');
    //       let isIncluded = false;
    //       for (let j = 0; j < quoteArray.length; j++) {
    //         for (let k = 0; k < content.length; k++) {
    //           if (k === content.length - 1 && content[k] !== quoteArray[j][k]) {
    //             isIncluded = true;
    //           }
    //         }
    //       }
    //       if (isIncluded) {
    //   includedList.push(quotes[i]);
    //       }
    // }
    // console.log('includedList', includedList);
  }

  return (
    <>
      <div className="searchable-list">
        <input
          type="text"
          value={content}
          onChange={handleChange}
          placeholder="search"
        />
        <ul>
          {includedList.map((quote) => (
            <li className="quote">{quote}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
