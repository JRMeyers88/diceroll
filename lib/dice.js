'use strict';

const {randomInt} = require('./math');

module.exports.roll = (diceNotation) => {
    // console.log("not", diceNotation);
    let [rollCount, sides] = diceNotation.split("d");
    // console.log("roll+sides", rollCount, sides);
    let diceTotal = 0;
    for (let i = 0; i < rollCount; i++) {
        diceTotal += randomInt(1, sides);
    }
    // console.log('dice', diceTotal);
    return diceTotal;
};

module.exports.toDiceNotation = (count, sides) => `${count}d${sides}`;
