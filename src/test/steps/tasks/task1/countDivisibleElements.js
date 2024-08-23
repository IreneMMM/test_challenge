// Create a function that takes an array of numbers as a parameter and returns the number of values that are a multiplier of either 4 or 6 (or, of course, both).

export function countDivisibleElements(arr) {
    if (!Array.isArray(arr)) {
        console.log('Input is not an array');
        return 'Input must be an array';
    }
    if (arr.length === 0) {
        console.log('Array is empty');
        return 'Array must not be empty';
    }

    const arrFiltered = arr.filter(element => {
        if (typeof element !== 'number' || !Number.isFinite(element)) {
            console.warn(`Skipping non-numeric or non-finite value: ${element}`);
            return false;
        }
        return element !== 0 && (element % 4 === 0 || element % 6 === 0);
    });

    return arrFiltered.length;
}
