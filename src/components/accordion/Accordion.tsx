import React, { useState } from 'react';
import './styles.css';
import Data from './data.ts'; // Changed from data.js to data.ts

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

const Accordion:React.FC<object> = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [multipleSelected, setMultipleSelected] = useState<string[]>([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const handleSingleSelection = (getCurrentId: string) => {
    setSelectedId(getCurrentId === selectedId ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId: string) => {
    const cpyMultipleSelected = [...multipleSelected];
    const findIndexOfCurrentId = cpyMultipleSelected.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      setMultipleSelected([...cpyMultipleSelected, getCurrentId]);
    } else {
      setMultipleSelected(cpyMultipleSelected.filter((id) => id !== getCurrentId));
    }
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordion">
        {Data.map((item: AccordionItem) => (
          <div className="item" key={item.id}>
            <div
              onClick={enableMultiSelection
                ? () => handleMultiSelection(item.id)
                : () => handleSingleSelection(item.id)}
              className="title"
            >
              <h2>{item.question}</h2>
              <span>
                {enableMultiSelection
                  ? multipleSelected.indexOf(item.id) !== -1 ? '-' : '+'
                  : selectedId === item.id ? '-' : '+'}
              </span>
            </div>
            {enableMultiSelection
              ? multipleSelected.indexOf(item.id) !== -1 && (
                  <div className={`acc-content ${multipleSelected.indexOf(item.id) !== -1 ? 'acc-content--active' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                )
              : selectedId === item.id && (
                  <div className={`acc-content ${selectedId === item.id ? 'acc-content--active' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
