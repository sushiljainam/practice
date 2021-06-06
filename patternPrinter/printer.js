const matrixOp = require('./matrixOp');

const letterJson = require('./config/samples/E.json');

function processLengths(length) {
    switch (length) {
        case 'N':
            return 3;
        case '5*N':
            return 15;
        case '2*N':
            return 6;
        case '2*N-2':
            return 4;
        case '2':
            return 2;
        default:
            return 3;
    }
}

function processFillTypes(fill) {
    switch (fill) {
        case 'P':
            return '+';
        default:
            return '_';
    }
}


function addElementToMatrix(element, matrix) {
    let { type } = element;
    if (type == 'item') {
        const { width, height, fill } = element;
        return matrixOp.by({
            width: processLengths(width),
            height: processLengths(height),
            fill: processFillTypes(fill),
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
            // console.log('childMat', childMat);
            tempResult = matrixOp(tempResult)
                .addMatrixRight(childMat)
                .toMatrix();
            // console.log(tempResult);
        }
        // add tempResult to main matrix
        return matrixOp(matrix).addMatrixRight(tempResult).toMatrix();
    } else if (type == 'column') {
        const { width } = element;
        // process col
        // // initial code
        // // process childern via same function
        var tempResult = [];
        for (let i = 0; i < element.children.length; i++) {
            const childElement = element.children[i];
            const childMat = addElementToMatrix(
                Object.assign(
                    {},
                    childElement,
                    { width },
                ), []);
            // console.log('childMat', childMat);
            tempResult = matrixOp(tempResult)
                .addMatrixDown(childMat)
                .toMatrix();
            // console.log(tempResult);
        }
        // add tempResult to main matrix
        return matrixOp(matrix).addMatrixRight(tempResult).toMatrix();
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
    const M = letterJsonToMatrix(letterJson);
    for (let i = 0; i < M.length; i++) {
        console.log(M[i].join(''));
    }
}
test();