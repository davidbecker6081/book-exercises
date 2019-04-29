const logTriangleWithXRowsUpsideDown = (numOfRows) => {
    if (numOfRows === 0) {
        return
    }
    console.log(constructTriangleRow(numOfRows))
    return logTriangleWithXRows(numOfRows - 1)
}

const logTriangleWithXRows = (numOfRows, row = 1) => {
    if (row > numOfRows) {
        return
    }
    console.log(constructTriangleRow(row))
    return logTriangleWithXRows(numOfRows, row + 1)
}

const constructTriangleRow = (curr) => {
    let stringRow = ''
    for (let i = 0; i < curr; i++) {
        stringRow += '#'
    }
    return stringRow
}

logTriangleWithXRows(7)
// -> #
// -> ##
// -> ###
// -> ####
// -> #####
// -> ######
// -> #######


const logTriangleWithXRows2 = (numOfRows) => {
    let rowOutput = ''
    for (let i = 0; i < numOfRows; i++) {
        rowOutput += '#'
        console.log(rowOutput)
    }
}

const logTriangleWithXRows3 = (numOfRows) => {
    let rowOutput = ''
    let row = 1
    while (row <= numOfRows) {
        rowOutput += '#'
        row++
        console.log(rowOutput)
    }
}