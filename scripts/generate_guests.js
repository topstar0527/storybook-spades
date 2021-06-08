const fs = require('fs');
const uuid = require('../src/libs/uuid');
const fetch = require('isomorphic-fetch');

const path = '../src/guests.json';

const outputFile = path => data => {
    fs.appendFile(path, JSON.stringify(data), { flag: 'w' }, err => {
        if (err) throw err;
        console.log(`data saved to ${path}`);
    });
};

fetch('https://randomuser.me/api/?results=50', {
    method: 'GET',
    dataType: 'application/json'
})
.then(resp => resp.json())
.then(({info, results}) => {
    return {
        guests: results.map(r => ({...r, id: uuid() }))
    };
}).then(outputFile(path));
