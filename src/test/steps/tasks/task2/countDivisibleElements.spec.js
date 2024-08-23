import { test, expect } from '@playwright/test';
import { countDivisibleElements } from '../task1/countDivisibleElements.js';


test.describe('Verify countDivisibleElements implementation', () => {
  
  const testScenarios = [
    { input: [4, 6, 8, 12, 15, 18], expected: 5 },
    { input: [1, 2, 3, 5, 7, 11], expected: 0 },
    { input: [], expected: 'Array must not be empty' },
    { input: [4, '6', 8, null, 12, 'test', undefined, 18], expected: 4 },
    { input: [Infinity, NaN, 4, 6, 8], expected: 3 },
    { input: 12345, expected: 'Input must be an array' },
    { input: [-12, -4, 0, 5, 7], expected: 2 },
    { input: [4, 6, 24, 35, 48, -36, 72, 11, 23, '12', 60, 9, -18], expected: 8 },
    { input: [0],  expected: 0 },
    { input: [4, 4, 6, 6, 4, 6], expected: 6}
  ];

  testScenarios.forEach(({ input, expected }) => {
    test(`should return "${expected}" for input "${input}"`, async () => {
      expect(countDivisibleElements(input)).toBe(expected);
    });
  });
});
