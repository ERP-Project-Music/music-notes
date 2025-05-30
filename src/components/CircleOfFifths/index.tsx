import React, { useState } from 'react';

import { CIRCLE_OF_FIFTHS_KEYS, getCircleIndices } from './utils';
import './style.css';

const CircleOfFifths = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  return (
    <div className="circle-container">
      <div className="circle-lines">
        {CIRCLE_OF_FIFTHS_KEYS.map((_, i) => {
          const angle = (360 / CIRCLE_OF_FIFTHS_KEYS.length) * i - 90;
          const activeIndices = activeKey ? getCircleIndices(activeKey) : [];
          const isActive = activeIndices.includes(i);

          return (
            <div
              key={`line-${i}`}
              className={`circle-line ${isActive ? 'highlight' : ''}`}
              style={{ transform: `rotate(${angle}deg)` }}
            />
          );
        })}
      </div>
      {CIRCLE_OF_FIFTHS_KEYS.map(([label, relative], i) => {
        const angle = (360 / CIRCLE_OF_FIFTHS_KEYS.length) * i;

        const activeIndices = activeKey ? getCircleIndices(activeKey) : [];
        const isActive = activeIndices.includes(i);

        return (
          <div
            key={label}
            className={`circle-key ${isActive ? 'highlight' : ''}`}
            style={{
              transform: `rotate(${angle}deg) translate(12rem) rotate(-${angle}deg)`,
            }}
            onMouseEnter={() => setActiveKey(label)}
            onMouseLeave={() => setActiveKey(null)}
          >
            <strong>{label}</strong>
            <span className="minor">{relative}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CircleOfFifths;
