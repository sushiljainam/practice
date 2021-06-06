const { fillWithP, fillWithZ } = require('../util');

module.exports = {
    type: 'row',
    height: '5*N',
    children: [
        fillWithP({ width: 'N' }),
        {
            type: 'column',
            width: '2*N',
            children: [
                fillWithP({ height: 'N' }),
                fillWithZ({ height: '3*N' }),
                fillWithP({ height: 'N' }),
            ],
        }
    ],
};
