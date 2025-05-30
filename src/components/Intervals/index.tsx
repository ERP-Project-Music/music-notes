import { useState } from 'react';

import { INTERVALS, NOTES } from '@site/src/shared/constants';

function getSemitoneDistance(from: string, to: string): number {
  const i1 = NOTES.indexOf(from);
  const i2 = NOTES.indexOf(to);
  return (i2 - i1 + 12) % 12;
}

export default function IntervalVisualizer() {
  const [note1, setNote1] = useState('C');
  const [note2, setNote2] = useState('G');
  const [direction, setDirection] = useState<'asc' | 'desc'>('asc');

  const ascending = getSemitoneDistance(note1, note2);
  const descending = getSemitoneDistance(note2, note1);

  const semitones = direction === 'asc' ? ascending : descending;
  const intervalName = INTERVALS[semitones];
  const labelDirection = direction === 'asc' ? 'Ascendente ↑' : 'Descendente ↓';

  const swapNotes = () => {
    setNote1(note2);
    setNote2(note1);
  };

  return (
    <div className="box">
      <h2>Visualizador de Intervalos</h2>

      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Nota 1</label>
            <select className="select" value={note1} onChange={(e) => setNote1(e.target.value)}>
              {NOTES.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="column">
          <div className="field">
            <label className="label">Nota 2</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <select className="select" value={note2} onChange={(e) => setNote2(e.target.value)}>
                {NOTES.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              <button onClick={swapNotes} className="button is-light" title="Intercambiar notas">
                ↔
              </button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="field">
            <label className="label">Tipo</label>
            <select
              className="select"
              value={direction}
              onChange={(e) => setDirection(e.target.value as 'asc' | 'desc')}
            >
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Tipo</label>
            <span className="has-text-weight-bold">{labelDirection}</span>
          </div>
        </div>

        <div className="column">
          <div className="field">
            <label className="label">Semitonos</label>
            <span className="has-text-weight-bold">{semitones}</span>
          </div>
        </div>

        <div className="column">
          <div className="field">
            <label className="label">Intervalo</label>
            <span className="has-text-weight-bold has-text-primary">{intervalName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
