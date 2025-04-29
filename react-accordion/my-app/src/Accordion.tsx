import { useState, MouseEvent } from 'react';
import { Topic } from './App';
import './Accordion.css';

export function Accordion({ topics }: { topics: Topic[] }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleClick(event: MouseEvent) {
    const eventTarget = event.target as HTMLDivElement;

    if (Number(eventTarget.id) === activeTab) {
      setActiveTab(0);
    } else {
      setActiveTab(Number(eventTarget.id));
    }
  }

  return (
    <>
      <div className="flex accordion">
        {topics.map((topic) => (
          <div className="flex topic">
            <div
              className="title"
              id={topic.id.toString()}
              onClick={handleClick}>
              {topic.title}
            </div>
            {activeTab === topic.id ? (
              <div className="content">{topic.content}</div>
            ) : (
              <div className="content hidden">{topic.content}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
