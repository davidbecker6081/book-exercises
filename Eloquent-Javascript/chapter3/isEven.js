// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a whole number) and return a Boolean. Do not use the modulo operator

// recursive subract 2 until you reach 1 or 0
const isEven1 = (num) => {
    let absNum = Math.abs(num);
    if (absNum === 0) { 
        return true
    }

    if (absNum === 1) {
        return false
    }

    return isEven1(absNum - 2);
}

const isEven2 = (num) => Math.abs(num) <= 1 ? Math.abs(num) === 0 : isEven2(Math.abs(num) - 2)

// recursive take last number and then subtract that by 2 until you reach 1 or 0
// could use .shift() here as well to keep things a bit more immutable
const isEven3 = (num) => {
    let absNum = Math.abs(num);
    if (absNum > 9) {
        const numAsString = String(Math.abs(num));
        const onesDigitAsString = numAsString[numAsString.length - 1];
        const onesDigitAsNum = Number(onesDigitAsString);
        return onesDigitAsNum <= 1 ? onesDigitAsNum === 0 : isEven3(onesDigitAsNum)
    }

    return absNum <= 1 ? absNum === 0 : isEven3(absNum - 2)
}

// pop off last number and then check that against an array of even numbers
const isEven4 = (num) => {
    const evenArray = [0, 2, 4, 6, 8];
    const numAsString = String(Math.abs(num));
    const onesDigitAsString = numAsString[numAsString.length - 1];
    return evenArray.includes(Number(onesDigitAsString));
}