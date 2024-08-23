// Write a function that tests if a string is a palindrome

export function isPalindrome(str) {
        if (typeof str !== 'string') {
            console.error('Input is not a string');
            return false;
        }
        str = str.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

        if (str.length === 0) {
            console.log('The string contains no characters to check for a palindrome');
            return false;
        }

        let reversedString = str.split('').reverse().join('');

        if (reversedString === str) {
            console.log('The string is a palindrome');
            return true;
        } else {
            console.log('The string is not a palindrome');
            return false;
        }
}
