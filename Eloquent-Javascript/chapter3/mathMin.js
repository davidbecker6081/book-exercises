// The previous chapter introduced the standard function Math.min that returns its smallest argument.
// We can build something like that now. Write a function min that takes two arguments and returns their minimum.
const getMin = (x, y) => {
    if (x === y) {
      return 'equal'
    }
    return x > y ? y : x
}

const getMinOfAllNums = (...args) => {
    if (args.length < 2) {
        return 'Cannot get min with 1 number'
    }

    return args.reduce((min, num) => {
        if (num < min) {
            min = num
        }
        return min
    }, Infinity)
}