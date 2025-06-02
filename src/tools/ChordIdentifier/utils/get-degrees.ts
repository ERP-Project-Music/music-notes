import { NOTES } from '@site/src/shared/constants';

export const getDegreesFromNotes = (root: string, notes: string[]): string[] => {
  if (notes.length === 0) return [];

  const rootIndex = NOTES.indexOf(root);

  const degreeMap: Record<number, string> = {
    0: '1',
    1: 'b2',
    2: '2',
    3: 'b3',
    4: '3',
    5: '4',
    6: 'b5',
    7: '5',
    8: 'b6',
    9: '6',
    10: 'b7',
    11: '7',
  };

  const extensionMap: Record<number, string> = {
    1: 'b9',
    2: '9',
    3: '#9',
    5: '11',
    6: '#11',
    8: 'b13',
    9: '13',
  };

  const degrees: Set<string> = new Set(['1']);

  notes.forEach((note) => {
    if (note === root) return;

    const noteIndex = NOTES.indexOf(note);
    let interval = noteIndex - rootIndex;

    if (interval < 0) interval += 12;

    let degree = degreeMap[interval];

    if (!degree) return;

    if (isTriad([...degrees]) || isTetrad([...degrees])) {
      const ext = extensionMap[interval];
      if (ext) degree = ext;
    }

    degrees.add(degree);
  });

  const sortOrder = [
    '1',
    'b2',
    '2',
    '#2',
    'b3',
    '3',
    '4',
    '#4',
    'b5',
    '5',
    '#5',
    'b6',
    '6',
    'bb7',
    'b7',
    '7',
    'b9',
    '9',
    '#9',
    '11',
    '#11',
    'b13',
    '13',
  ];

  return [...degrees].sort((a, b) => sortOrder.indexOf(a) - sortOrder.indexOf(b));
};

const isTriad = (degrees: string[]): boolean => {
  const has1 = degrees.includes('1');
  const has3 = degrees.includes('3') || degrees.includes('b3');
  const has5 = degrees.includes('5') || degrees.includes('b5') || degrees.includes('#5');

  return has1 && has3 && has5;
};

const isTetrad = (degrees: string[]): boolean => {
  if (degrees.length < 3) return false;

  const has1 = degrees.includes('1');
  const has7 = degrees.includes('7') || degrees.includes('b7');
  const has3 = degrees.includes('3') || degrees.includes('b3');
  const hasSus = degrees.includes('2') || degrees.includes('4');

  return has1 && has7 && (has3 || hasSus);
};
