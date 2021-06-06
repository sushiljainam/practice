function addMatrixRight(first, second) {
    const third = new Array();
    for (let i = 0; i < first.length; i++) {
        const rowOfThird = first[i].concat(second[i]);
        third.push(rowOfThird);
    }
    return third;
}
function addMatrixDown(first, second) {
    // const third = new Array();
    const third = first.concat(second);
    return third;
}

const main = function matrixOp(arr) {
    const returnOp = {};
    returnOp.first = arr;
    returnOp.addMatrixRight = (second) => {
        returnOp.first = addMatrixRight(returnOp.first, second);
        return returnOp;
    };
    returnOp.addMatrixDown = (second) => {
        returnOp.first = addMatrixDown(returnOp.first, second);
        return returnOp;
    };
    returnOp.toMatrix = () => returnOp.first;
    return returnOp;
}

main.by = function matrixBy({ width = 0, height = 0 }) {
    const a = new Array(height);
    for (let i = 0; i < a.length; i++) {
        a[i] = new Array(width);
    }
    return a;
}

module.exports = main;

function test() {
    console.log(__filename);
    console.log(main.by({}));
    console.log(main.by({ width: 1, height: 1}));
    console.log(main.by({ width: 1, height: 5}));
    console.log(main.by({ width: 6, height: 1}));

    console.log(
        main(main.by({ width: 2, height: 2 }))
            .addMatrixRight(main.by({ width: 2, height: 2 }))
            .toMatrix()
    );
    console.log(
        main(main.by({ width: 2, height: 2 }))
            .addMatrixDown(main.by({ width: 2, height: 2 }))
            .toMatrix()
    );
}
test();
