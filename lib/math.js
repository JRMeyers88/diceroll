'use strict';

const randomInt = (min, max) => {
    if(!max) max = 6;
    return Math.floor((Math.random() * +max) + min);    
};

module.exports = {randomInt};