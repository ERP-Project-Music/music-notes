import { NOTES } from '@site/src/shared/constants';

import { Scale, Chord, HarmonicFunction, ChordTypes } from './types';

export const SCALES: Record<Scale, Chord> = {
  [Scale.Major]: {
    degrees: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
    functions: [
      HarmonicFunction.Tonic,
      HarmonicFunction.Subdominant,
      HarmonicFunction.Tonic,
      HarmonicFunction.Subdominant,
      HarmonicFunction.Dominant,
      HarmonicFunction.Tonic,
      HarmonicFunction.Dominant,
    ],
    items: [
      { type: ChordTypes.Triads, chords: ['', 'm', 'm', '', '', 'm', 'dim'] },
      { type: ChordTypes.Sevenths, chords: ['Maj7', 'm7', 'm7', 'Maj7', '7', 'm7', 'm7b5'] },
    ],
  },
  [Scale.Minor]: {
    degrees: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
    functions: [
      HarmonicFunction.Tonic,
      HarmonicFunction.Subdominant,
      HarmonicFunction.Tonic,
      HarmonicFunction.Subdominant,
      HarmonicFunction.Dominant,
      HarmonicFunction.Tonic,
      HarmonicFunction.Dominant,
    ],
    items: [
      { type: ChordTypes.Triads, chords: ['m', 'dim', 'Maj', 'm', 'Maj', 'Maj', 'dim'] },
      { type: ChordTypes.Sevenths, chords: ['m7', 'm7b5', 'Maj7', 'm7', '7', 'Maj7', 'm7b5'] },
    ],
  },
  [Scale.HarmonicMinor]: {
    degrees: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
    functions: [
      HarmonicFunction.Tonic,
      HarmonicFunction.Subdominant,
      HarmonicFunction.Tonic,
      HarmonicFunction.Subdominant,
      HarmonicFunction.Dominant,
      HarmonicFunction.Tonic,
      HarmonicFunction.Dominant,
    ],
    items: [
      { type: ChordTypes.Triads, chords: ['m', 'dim', 'aug', 'm', 'Maj', 'Maj', 'dim'] },
      { type: ChordTypes.Sevenths, chords: ['mMaj7', 'm7b5', 'Maj7#5', 'm7', '7', 'Maj7', 'dim7'] },
    ],
  },
  [Scale.MelodicMinor]: {
    degrees: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'],
    functions: [
      HarmonicFunction.Tonic,
      HarmonicFunction.Subdominant,
      HarmonicFunction.Tonic,
      HarmonicFunction.Subdominant,
      HarmonicFunction.Dominant,
      HarmonicFunction.Dominant,
      HarmonicFunction.Dominant,
    ],
    items: [
      { type: ChordTypes.Triads, chords: ['m', 'm', 'aug', 'Maj', 'Maj', 'dim', 'dim'] },
      { type: ChordTypes.Sevenths, chords: ['mMaj7', 'm7', 'Maj7#5', '7', '7', 'm7b5', 'm7b5'] },
    ],
  },
};

export function getScale(root: string, mode: Scale): string[] {
  const intervalsMap: Record<Scale, number[]> = {
    [Scale.Major]: [0, 2, 4, 5, 7, 9, 11],
    [Scale.Minor]: [0, 2, 3, 5, 7, 8, 10],
    [Scale.HarmonicMinor]: [0, 2, 3, 5, 7, 8, 11],
    [Scale.MelodicMinor]: [0, 2, 3, 5, 7, 9, 11],
  };

  const rootIndex = NOTES.indexOf(root);
  return intervalsMap[mode].map((i) => NOTES[(rootIndex + i) % 12]);
}
