import { CHORD_MAP } from './chord-mapping';
import { getDegreesFromNotes } from './get-degrees';

import { Chord } from '../types';

const getNotesFromSelected = (selectedNotes: (string | null)[][]): string[] => {
  const result = [];

  const currentNotes = [...selectedNotes].reverse();
  const firstNote = currentNotes[0][0];

  let firstNoteFound = false;

  for (const notes of currentNotes) {
    for (const note of notes) {
      if (!note) {
        continue;
      }

      if (note === firstNote) {
        if (!firstNoteFound) {
          firstNoteFound = true;
        } else {
          continue;
        }
      }

      result.push(note);
    }
  }

  return result;
};

export const getChord = (selectedNotes: (string | null)[][]): Chord => {
  const notes = getNotesFromSelected(selectedNotes);

  const root = notes[0];
  const degrees = getDegreesFromNotes(root, notes);
  const quality = CHORD_MAP[degrees.join('-')];

  console.info('chord', {
    root,
    degrees,
    quality,
  });

  if (quality !== undefined) {
    return {
      name: `${root}${quality}`,
      formula: degrees.join('-'),
    };
  }

  return null;
};
