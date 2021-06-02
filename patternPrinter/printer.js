const letterJson = require('./config/samples/E.json');

function addElementToMatrix(element, matrix) {
    switch (type) {
        case 'row':
            // process row
            // // initial code
            // // process childern via same function
            var tempResult = addElementToMatrix(element.children[i], []);
            // add tempResult to main matrix
            break;
        case 'column':
            break;
        default:
            break;
    }
}

function letterJsonToMatrix(json) {
    var matrix = [];
    matrix = addElementToMatrix(json, matrix);
    return matrix;
}
