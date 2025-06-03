export enum Scale {
  Major = 'Mayor',
  Minor = 'Menor natural',
  HarmonicMinor = 'Menor armónica',
  MelodicMinor = 'Menor melódica',
}

export enum ChordTypes {
  Triads = 'Triadas',
  Sevenths = 'Séptimas',
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
