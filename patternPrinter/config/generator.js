var fs = require('fs');

var list = ['E', 'S'];

list.forEach(val => {
    const letterCode = require(`./samples/${val}`);
    fs.writeFileSync(`${val}.json`, JSON.stringify(letterCode, null, 4));
});
