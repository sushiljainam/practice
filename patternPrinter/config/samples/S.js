const { fillWithP, fillWithZ } = require('../util');

module.exports = {
    type: 'column',
    width: '3*N',
    children: [
        fillWithP({ height: 'N' }),
        {
            type: 'row',
            height: 'N',
            children: [
                fillWithP({ width: 'N' }),
                fillWithZ({ width: '2*N' }),
            ],
        },
        fillWithP({ height: 'N' }),
        {
            type: 'row',
            height: 'N',
            children: [
                fillWithZ({ width: '2*N' }),
                fillWithP({ width: 'N' }),
            ],
        },
        fillWithP({ height: 'N' }),
    ],
};
console.log(JSON.stringify(module.exports));
