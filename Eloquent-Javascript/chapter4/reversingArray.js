// For this exercise, write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
const reverseArray = (arr) => {
    const reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArray.push(arr[arr.length - 1 - i]);
    }

    return reversedArray;
}

// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
// Neither may use the standard reverse method.

const reverseArrayInPlace = (arr) => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let swap = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = swap;
    }

    return arr
}