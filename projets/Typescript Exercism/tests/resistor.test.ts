import { describe, it, expect } from 'vitest';
import { decodedValue } from '../src/resistor';

describe('decodedValue', () => {
  it('brown-black => 10', () => {
    expect(decodedValue(['brown', 'black'])).toBe(10);
  });

  it('yellow-violet => 47', () => {
    expect(decodedValue(['yellow', 'violet'])).toBe(47);
  });

  it('brown-green-violet => 15', () => {
    expect(decodedValue(['brown', 'green', 'violet'])).toBe(15);
  });
});
