export const CIRCLE_OF_FIFTHS_KEYS: [string, string][] = [
  ['C', 'Am'],
  ['G', 'Em'],
  ['D', 'Bm'],
  ['A', 'F#m'],
  ['E', 'C#m'],
  ['B', 'G#m'],
  ['F#', 'D#m'],
  ['C#', 'A#m'],
  ['Ab', 'Fm'],
  ['Eb', 'Cm'],
  ['Bb', 'Gm'],
  ['F', 'Dm'],
];

export function getCircleIndices(centerLabel: string): number[] {
  const index = CIRCLE_OF_FIFTHS_KEYS.findIndex(([label]) => label === centerLabel);
  if (index === -1) return [];

  const total = CIRCLE_OF_FIFTHS_KEYS.length;

  const left = (index - 1 + total) % total;
  const right = (index + 1) % total;

  return [left, index, right];
}
