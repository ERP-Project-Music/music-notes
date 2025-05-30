import React, { useState } from 'react';

import { NOTES } from '@site/src/shared/constants';
import { getScale, SCALES, Scale, HarmonicFunction } from './utils';

import './style.css';

const Harmonizer = () => {
  const [tonality, setTonality] = useState('C');
  const [scaleMode, setScaleMode] = useState<Scale>(Scale.Major);

  const scaleData = SCALES[scaleMode];
  const degrees = scaleData.degrees;
  const functions = scaleData.functions;
  const scale = getScale(tonality, scaleMode);

  return (
    <div className="harmonizer box">
      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Tonalidad</label>
            <select
              className="select"
              value={tonality}
              onChange={(e) => setTonality(e.target.value)}
            >
              {NOTES.map((note) => (
                <option key={note} value={note}>
                  {note}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Escala</label>
            <select
              className="select"
              value={scaleMode}
              onChange={(e) => setScaleMode(e.target.value as Scale)}
            >
              {Object.entries(Scale).map(([key, label]) => (
                <option key={key} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Acorde</th>
              {degrees.map((degree, i) => (
                <th key={i}>{degree}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scaleData.items.map(({ type, chords }) => (
              <tr key={type}>
                <td>{type}</td>
                {scale.map((note, i) => {
                  return (
                    <td key={i} className={`chord ${functions[i].toLocaleLowerCase()}`}>
                      {note + chords[i]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="legend">
        <div className="legend-item tonic">Tonic</div>
        <div className="legend-item subdominant">Subdominant</div>
        <div className="legend-item dominant">Dominant</div>
      </div>
    </div>
  );
};

export default Harmonizer;
