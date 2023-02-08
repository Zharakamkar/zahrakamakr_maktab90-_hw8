'use strict';


const elemCreator = (tag, style) => {
    const newElement = document.body.appendChild(document.createElement(tag));
    style(newElement)
};

const callback = function (elem) {
    elem.style.backgroundColor = 'red'
    elem.style.width = '5rem'
    elem.style.height = '5rem'
}

elemCreator('p', callback)