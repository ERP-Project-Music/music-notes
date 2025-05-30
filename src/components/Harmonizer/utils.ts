import { NOTES } from '@site/src/shared/constants';

export enum Scale {
  Major = 'Mayor',
  Minor = 'Menor natural',
  HarmonicMinor = 'Menor armónica',
  MelodicMinor = 'Menor melódica',
}

export enum ChordTypes {
  Triads = 'Triadas',
  Add9 = '+Add9',
  Sevenths = 'Séptimas',
  Ninths = 'Novenas',
}

export enum HarmonicFunction {
  Tonic = 'Tonic',
  Subdominant = 'Subdominant',
  Dominant = 'Dominant',
}

export type Chord = {
  degrees: string[];
  functions: HarmonicFunction[];
  items: { type: ChordTypes; chords: string[] }[];
};

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
      { type: ChordTypes.Triads, chords: ['Maj', 'm', 'm', 'Maj', 'Maj', 'm', 'dim'] },
      {
        type: ChordTypes.Add9,
        chords: ['MajAdd9', 'mAdd9', 'mAdd9', 'MajAdd9', 'MajAdd9', 'mAdd9', 'dim'],
      },
      { type: ChordTypes.Sevenths, chords: ['Maj7', 'm7', 'm7', 'Maj7', '7', 'm7', 'm7b5'] },
      { type: ChordTypes.Ninths, chords: ['Maj9', 'm9', 'm9', 'Maj9', '9', 'm9', 'm7b5'] },
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
      { type: ChordTypes.Triads, chords: ['m', 'dim', 'Maj', 'm', 'm', 'Maj', 'Maj'] },
      {
        type: ChordTypes.Add9,
        chords: ['mAdd9', 'dim', 'MajAdd9', 'mAdd9', 'mAdd9', 'MajAdd9', 'MajAdd9'],
      },
      { type: ChordTypes.Sevenths, chords: ['m7', 'm7b5', 'Maj7', 'm7', 'm7', 'Maj7', '7'] },
      { type: ChordTypes.Ninths, chords: ['m9', 'm7b5', 'Maj9', 'm9', 'm9', 'Maj9', '7'] },
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
      { type: ChordTypes.Sevenths, chords: ['mMaj7', 'm7b5', 'Maj7#5', 'm7', '7', 'Maj7', 'dim7'] },
      { type: ChordTypes.Ninths, chords: ['mMaj9', 'm7b5', 'Maj9#5', 'm9', '9', 'Maj9', 'dim7'] },
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
      { type: ChordTypes.Sevenths, chords: ['mMaj7', 'm7', 'Maj7#5', '7', '7', 'm7b5', 'm7b5'] },
      { type: ChordTypes.Ninths, chords: ['mMaj9', 'm9', 'Maj9#5', '9', '9', 'm7b5', 'm7b5'] },
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
