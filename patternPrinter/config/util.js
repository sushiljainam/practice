const fillWithP = (addItemProps) => Object.assign(
    {},
    {
        type: 'item',
        fill: 'P',
    },
    addItemProps,
);
const fillWithZ = (addItemProps) => Object.assign(
    {},
    {
        type: 'item',
        fill: 'Z',
    },
    addItemProps,
);

module.exports.fillWithP = fillWithP;
module.exports.fillWithZ = fillWithZ;
