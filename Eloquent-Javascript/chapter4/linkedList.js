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
        } else {
            list.rest = {
                value: arr[i],
                rest: list.rest || null
            }
        }
    }
    return list
}

console.log(arrayToList([1,2,3]))

// -> {
    // value: 1,
    // rest: {
    //     value: 2,
    //     rest: {
    //         value: 3,
    //         rest: null
    //     }
    // }
// Also write a listToArray function that produces an array from a list. Then add a helper function prepend,
// which takes an element and a list and creates a new list that adds the element to the front of the input list,
const listToArray = (list) => {
    const arr = []
    for (let node = list; node; node = node.rest) {
        arr.push(node.value)
    }
    return arr
}

console.log(listToArray(arrayToList([1,2,3])))

//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

const prepend = (el, list) => {
    const arr = listToArray(list)
    arr.unshift(el)

    return arrayToList(arr)
}

console.log(prepend(10, prepend(20, null)))

// and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element)
// or undefined when there is no such element.

// To get element N + 1, you take the Nth element of the list that’s in this list’s rest property.

//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

const nth = (list, num) => {
    for (let node = list, i = 0; node; node = node.rest, i++) {
        if (i === num) {
            return node.value
        }
    }
}

const nthRecursive = (list, num, index = 0) => {
    if (index === num) {
        return list.value
    }

    return nthRecursive(list.rest, num, index + 1)
}

// If you haven’t already, also write a recursive version of nth.