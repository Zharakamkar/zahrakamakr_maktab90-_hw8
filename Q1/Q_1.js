"use strict";

let obj = {}

function setterGenerator(key) {
    return function (value) {
        this[key] = value;
        return this
    }
}

const nameSetter = setterGenerator('name')
console.log(nameSetter.call(obj, 'zahra'))
console.log(nameSetter.call(obj, 'ali'))