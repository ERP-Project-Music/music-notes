export const CIRCLE_OF_FIFTHS_KEYS = [
  { label: 'C', relative: 'Am' },
  { label: 'G', relative: 'Em' },
  { label: 'D', relative: 'Bm' },
  { label: 'A', relative: 'F#m' },
  { label: 'E', relative: 'C#m' },
  { label: 'B', relative: 'G#m' },
  { label: 'F#', relative: 'D#m' },
  { label: 'C#', relative: 'A#m' },
  { label: 'Ab', relative: 'Fm' },
  { label: 'Eb', relative: 'Cm' },
  { label: 'Bb', relative: 'Gm' },
  { label: 'F', relative: 'Dm' },
];

export const getMajorFamily = (tonic: string): string[] => {
  const MAP: Record<string, string[]> = {
    C: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'B°'],
    G: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#°'],
    D: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#°'],
    A: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#°'],
    E: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#°'],
    B: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#°'],
    'F#': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#°'],
    'C#': ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#°'],
    F: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'E°'],
    Bb: ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'A°'],
    Eb: ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'D°'],
    Ab: ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'G°'],
    Db: ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'C°'],
    Gb: ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'F°'],
    Cb: ['Cb', 'Dbm', 'Ebm', 'Fb', 'Gb', 'Abm', 'Bb°'],
  };

  return MAP[tonic] || [];
};
