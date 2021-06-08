const fs = require('fs');

module.exports = path => data => {
    fs.appendFile(path, JSON.stringify(data), { flag: 'w' }, err => {
        if (err) throw err;
        console.log(`data saved to ${path}`);
    });
};

