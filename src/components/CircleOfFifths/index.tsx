import React, { useState } from 'react';

import { CIRCLE_OF_FIFTHS_KEYS, getMajorFamily } from './data';

import './style.css';

const CircleOfFifths: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  return (
    <div className="circle-container">
      <div className="circle-lines">
        {CIRCLE_OF_FIFTHS_KEYS.map((_, i) => {
          const angle = (360 / CIRCLE_OF_FIFTHS_KEYS.length) * i;
          return (
            <div
              key={`line-${i}`}
              className="circle-line"
              style={{ transform: `rotate(${angle}deg)` }}
            />
          );
        })}
      </div>
      {CIRCLE_OF_FIFTHS_KEYS.map((key, i) => {
        const angle = (360 / CIRCLE_OF_FIFTHS_KEYS.length) * i;
        const isActive = activeKey && getMajorFamily(activeKey).includes(key.label);

        return (
          <div
            key={key.label}
            className={`circle-key ${isActive ? 'highlight' : ''}`}
            style={{
              transform: `rotate(${angle}deg) translate(12rem) rotate(-${angle}deg)`,
            }}
            onMouseEnter={() => setActiveKey(key.label)}
            onMouseLeave={() => setActiveKey(null)}
          >
            <strong>{key.label}</strong>
            <span className="minor">{key.relative}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CircleOfFifths;
