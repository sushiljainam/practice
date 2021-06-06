const matrixOp = require('./matrixOp');

const letterJson = require('./config/samples/E.json');

function processLengths(length) {
    switch (length) {
        case 'N':
            return 3;
        case '5*N':
            return 15;
        default:
            return 3;
    }
}

function addElementToMatrix(element, matrix) {
    let { type } = element;
    if (type == 'item') {
        const { width, height, fill } = element;
        return matrixOp.by({
            width: processLengths(width),
            height: processLengths(height),
            fill,
        });
    } else if (type == 'row') {
        const { height } = element;
        // process row
        // // initial code
        // // process childern via same function
        var tempResult = [];
        for (let i = 0; i < element.children.length; i++) {
            const childElement = element.children[i];
            const childMat = addElementToMatrix(
                Object.assign(
                    {},
                    childElement,
                    { height },
                ), []);
            matrixOp(tempResult).addMatrixRight(childMat);
        }
        // add tempResult to main matrix
        return matrixOp(matrix).addMatrixRight(tempResult).toMatrix();
    } else if (type == 'column') {
        return matrix;
    } else if (type == 'overlap') {
        return matrix;
    }
}

function letterJsonToMatrix(json) {
    var matrix = [];
    matrix = addElementToMatrix(json, matrix);
    return matrix;
}

function test() {
    console.log(letterJsonToMatrix(letterJson));
}
test();