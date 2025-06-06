import { ResistorColor } from './types';

const colorMap: Record<ResistorColor, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedValue(colors: ResistorColor[]): number {
  const [first, second] = colors;
  return colorMap[first] * 10 + colorMap[second];
}
