const letterJson = require('./config/samples/E.json');

function addElementToMatrix(element, matrix) {
    if (type == 'row') {
        // process row
        // // initial code
        // // process childern via same function
        var tempResult = addElementToMatrix(element.children[i], []);
        // add tempResult to main matrix
    } else if (type == 'column') {
    }
}

function letterJsonToMatrix(json) {
    var matrix = [];
    matrix = addElementToMatrix(json, matrix);
    return matrix;
}
