// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
const fizzBuzz = (start, finish) => {
    for (let i = start; i <= finish; i++) {
        if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

const fizzBuzz2 = (start, finish) => {
    while (start <= finish) {
        console.log(getDivisibleString(start))
        start++
    }
}

const fizzBuzzRecursive = (start, finish) => {
    if (start > finish) {
        return 'finished FizzBuzz'
    }

    console.log(getDivisibleString(start))

    return fizzBuzzRecursive(start + 1, finish)
}

const fizzBuzzMapSolution = (start, finish) => {
    const fizzBuzzMap = {
        'divBy3': (numToDiv) => numToDiv % 3 === 0 && 'Fizz',
        'divBy5': (numToDiv) => numToDiv % 5 === 0 && 'Buzz',
        'divBy3and5': (numToDiv) => numToDiv % 3 === 0 && numToDiv % 5 === 0 && 'FizzBuzz'
    }

    for (let i = start; i <= finish; i++) {
        let output = fizzBuzzMap['divBy3and5'](i)
            || fizzBuzzMap['divBy3'](i)
            || fizzBuzzMap['divBy5'](i)
            || i
        console.log(output)
    }
}

const fizzBuzzSwitch = (start, finish) => {
    for (let i = start; i <= finish; i++) {
        console.log(switchDivisibilityOutput(i))
    }
}

const switchDivisibilityOutput = (num) => {
    switch (true) {
        case num % 3 === 0 && num % 5 === 0:
            return 'FizzBuzz'
        case num % 3 === 0:
            return 'Fizz'
        case num % 5 === 0:
            return 'Buzz'
        default:
            return num
    }
}

const getDivisibleString = (num) => {
    // put this into a fizzBuzzMap if ya want
    const divBy3 = (numToDiv) => numToDiv % 3 === 0 
    const divBy5 = (numToDiv) => numToDiv % 5 === 0 
    const divBy3and5 = (numToDiv) => numToDiv % 3 === 0 && numToDiv % 5 === 0
    
    if (divBy3and5(num)) {
        return 'FizzBuzz'
    } else if (divBy3(num)) {
        return 'Fizz'
    } else if (divBy5(num)) {
        return 'Buzz'
    } else {
        return num
    }
}