// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
// -> {
    // value: 1,
    // rest: {
    //     value: 2,
    //     rest: {
    //         value: 3,
    //         rest: null
    //     }
    // }
const arrayToList = (arr) => {
    const list = {}
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === 0) {
            list.value = arr[i]
        }
        if (i < arr.length - 1 && i !== 0) {
            list.rest = {
                value: arr[i],
                rest = list.rest
            }
        }
        if (i === arr.length - 1) {
            list.rest = {
                value: arr[i],
                rest: null
            }
        }
    }
    return list
}

console.log(arrayToList([1,2,3, 4, 5, 6]))

// Also write a listToArray function that produces an array from a list. Then add a helper function prepend,
// which takes an element and a list and creates a new list that adds the element to the front of the input list,
// and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element)
// or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.