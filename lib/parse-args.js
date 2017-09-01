'use strict';

module.exports = (argsArr) => {
    // console.log("argar", argsArr)
    const dieNumbers = {};
    dieNumbers.count = argsArr[1] ? argsArr[0] : 1;
    dieNumbers.sides = argsArr[1] || argsArr[0] || 6;
    // console.log("nums", dieNumbers);
    return dieNumbers
};