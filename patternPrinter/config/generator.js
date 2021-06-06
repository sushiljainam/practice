var fs = require('fs');

var list = ['E', 'S', 'C'];

list.forEach(val => {
    const letterCode = require(`./samples/${val}`);
    fs.writeFileSync(`${val}.json`, JSON.stringify(letterCode, null, 4));
});
