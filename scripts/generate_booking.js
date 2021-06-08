const uuid = require('../src/libs/uuid');
const outputFileFn = require('../src/libs/outputFile');
const fetch = require('isomorphic-fetch');
const moment = require('moment');

const path = process.env.OUTPUT_PATH || 'booking.json';
const num = process.env.NUM || 8;

const outputFile = outputFileFn(path);

const checkinout = () => {
    return {
        checkin: moment().millisecond(0).second(0).minute(0).hour(0).valueOf(),
        checkout: moment().add(3, 'days').millisecond(0).second(0).minute(0).hour(0).valueOf()
    };
};

const generateGuests = () => {
    return {
        adults: 2,
        children: 0,
    };
};

const accommodation = () => {
    return {
        type: 'Private', // Private, Pod, Bed,
        number: 2
    };
}

fetch(`https://randomuser.me/api/?results=${num}`)
.then(resp => resp.json())
.then(({ results }) => results)
.then( results => {
    return {
        booking: results.map(person => {
            return {
                id: uuid(),
                name: person.name,
                source: 'booking.com',
                ...checkinout(),
                accommodation: accommodation(),
                cost: 200
            };
        })
    }
})
.then(outputFile)
.catch(exception => {
    console.error(exception);
});