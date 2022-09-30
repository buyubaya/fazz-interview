import { describe, expect, test } from '@jest/globals';
import { renderWithFallback } from './renderWithFallback';

describe('renderWithFallback helpers', () => {
  test('renderWithFallback(N/A)(Hello) should be Hello', () => {
    expect(renderWithFallback('N/A')('Hello')).toBe('Hello');
  });

  test('renderWithFallback(N/A)() should be N/A', () => {
    expect(renderWithFallback('N/A')('')).toBe('N/A');
  });
});
