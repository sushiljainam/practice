const matrixOp = require('./matrixOp');
const by = matrixOp.by;

module.exports.addPadding = (block, {
    fill = '_',
    // left = true,
    // right = true,
    // top = true,
    // bottom = true,
    size = 1,
}) => {
    const blockHeight = block.length;
    const blockWidth = blockHeight ? block[0].length : 0;
    return matrixOp(
        by({
            width: blockWidth+2*size,
            height: size,
            fill,
        })
    )
    .addMatrixDown(
        matrixOp(
            by({
                width: size,
                height: blockHeight,
                fill,
            })
        )
        .addMatrixRight(block)
        .addMatrixRight(
            by({
                width: size,
                height: blockHeight,
                fill,
            })
        ).toMatrix()
    )
    .addMatrixDown(
        matrixOp(
            by({
                width: blockWidth+2*size,
                height: size,
                fill,
            })
        )
        .toMatrix()
    )
    .toMatrix();
};
