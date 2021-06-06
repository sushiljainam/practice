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
                fillWithZ({ height: 'N' }),
                {
                    type: 'row',
                    height: 'N',
                    children: [
                        fillWithP({ width: '2*N-2' }),
                        fillWithZ({ width: '2' }),
                    ],
                },
                fillWithZ({ height: 'N' }),
                fillWithP({ height: 'N' }),
            ],
        }
    ],
};
