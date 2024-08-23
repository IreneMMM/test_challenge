import { test, expect } from '@playwright/test';
import { isPalindrome } from '../task1/isPalindrome.js';


test.describe('Verify isPalindrome implementation', () => {

    const testScenarios = [
        { input: 'A man a plan a canal Panama', expected: true },
        { input: '12321', expected: true },
        { input: '12madam21', expected: true },
        { input: 'Madam, I\'m Adam', expected: true },
        { input: ' ma dam ', expected: true },
        { input: 'a', expected: true },
        { input: 'hello', expected: false },
        { input: 'race a car', expected: false },
        { input: '123hello21', expected: false },
        { input: 'Аргентина', expected: false },
        { input: '.!№№!.', expected: false },
        { input: '', expected: false },
        { input: '   ', expected: false },
        { input: 123, expected: false },
        { input: null, expected: false }
    ];

    testScenarios.forEach(({ input, expected }) => {
        test(`should return "${expected}" for input "${input}"`, async () => {
            expect(isPalindrome(input)).toBe(expected);
        });
    });
});
