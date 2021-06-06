const matrixOp = require('./matrixOp');
const { addPadding } = require('./beautify');

const letterJson = require('./config/samples/E.json');
const letterJson_S = require('./config/samples/S.json');

function processLengths(length) {
    const N = 3; // used inside eval
    return eval(length);
}

function processFillTypes(fill) {
    switch (fill) {
        case 'P':
            return '#';
        default:
            return '.';
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
    const M1 = letterJsonToMatrix(letterJson);
    // for (let i = 0; i < M1.length; i++) {
    //     console.log(M1[i].join(''));
    // }
    const M2 = letterJsonToMatrix(letterJson_S);
    // for (let i = 0; i < M2.length; i++) {
    //     console.log(M2[i].join(''));
    // }
    let M3 = matrixOp(M1)
        .addMatrixRight(matrixOp.by({
            width: 9,
            height: 15,
            fill: '.',
        }))
        .addMatrixRight(M2)
        .toMatrix();
    M3 = addPadding(M3, { size: 6, fill: '.' });
    for (let i = 0; i < M3.length; i++) {
        console.log(M3[i].join(''));
    }
}
test();
