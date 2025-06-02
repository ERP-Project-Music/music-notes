import React, { useState } from 'react';

import { Chord } from './types';
import { fretboardSelectedNotes, fretboardNotes } from './data';
import { getChord } from './utils/get-chord';

import './style.css';

const ChordIdentifier = () => {
  const [selectedNotes, setSelectedNotes] = useState<(string | null)[][]>(fretboardSelectedNotes);
  const [chord, setChord] = useState<Chord | null>(null);

  const handleClick = (string: number, fret: number) => {
    setSelectedNotes((prev) => {
      const newSelected = prev.map((row) => [...row]);
      const isSelected = newSelected[string][fret] !== null;
      const totalSelected = prev.flat().filter((n) => n !== null).length;

      if (isSelected) {
        newSelected[string][fret] = null;
      } else {
        const noteOnString = newSelected[string].some((n) => n !== null);
        if (noteOnString || totalSelected >= 5) {
          return prev;
        }

        newSelected[string][fret] = fretboardNotes[string][fret];
      }

      const result = getChord(newSelected);
      setChord(result || null);

      return newSelected;
    });
  };

  const resetFretboard = () => {
    setSelectedNotes(fretboardSelectedNotes.map((row) => [...row]));
    setChord(null);
  };

  const isNoteSelected = (string: number, fret: number) => {
    return selectedNotes[string][fret] !== null;
  };

  const maxFrets = fretboardNotes[0].length;

  return (
    <>
      <div className="chord-identifier">
        <table className="chord-identifier-table">
          <tbody>
            {fretboardNotes.map((stringNotes, stringIdx) => (
              <tr key={stringIdx} className="chord-identifier-row">
                {Array.from({ length: maxFrets }).map((_, fretIdx) => {
                  const note = stringNotes[fretIdx];
                  const selected = isNoteSelected(stringIdx, fretIdx);
                  return (
                    <td
                      key={fretIdx}
                      className={`chord-identifier-note fret-${fretIdx} ${
                        selected ? 'selected' : ''
                      }`}
                      onClick={() => handleClick(stringIdx, fretIdx)}
                    >
                      <span>{note}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="chord-help">
        <div className="chord-help-warning">
          ⚠️ Esta herramienta está en modo experimental, puede no ser exacta.
        </div>

        {selectedNotes.flat().some((n) => n !== null) && (
          <div className="chord-help-reset">
            <a className="button is-info" onClick={resetFretboard}>
              Click aquí
            </a>{' '}
            para reiniciar el fretboard.
          </div>
        )}
      </div>

      {chord && (
        <div className="chord-result box">
          <div className="columns">
            <div className="column">
              <div className="chord-name">{chord.name}</div>
            </div>
            <div className="column">
              <div className="chord-formula">
                <h3>Fórmula</h3>
                <span className="tag">{chord.formula}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChordIdentifier;
