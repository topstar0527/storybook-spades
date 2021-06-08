import React from "react";
import uuid from "../libs/uuid";

function generateSchema() {
    return {
        units: generateUnits(),
        groups: generateGroups()
    };
}

function generateUnits(count = 4) {
    let result = {};
    for (let index = 0; index < count; index++) {
        const unit = {
            id: uuid(),
            name: '',
            type: 'A'
        };
        result[unit.id] = unit;
    }
    return result;
}

function generateGroups(count = 2) {
    let result = {};
    for (let index = 0; index < count; index++) {
        const group = {
            id: uuid(),
            name: '',
            units: []
        }
    }
}

const Schema = {
    units: {
        a: {
            type: '1'
        },
        b: {
            type: '1'
        },
        c: {
            type: '1'
        },
        d: {
            type: '1'
        },
        e: {
            type: '2'
        },
        f: {
            type: '2'
        },
        g: {
            type: '3'
        }
    },
    groups: {
        x: {
            cost: 100,
            units: ['a', 'b', 'c', 'd']
        },
        y: {
            cost: 50,
            units: ['e']
        },
        z: {
            cost: 50,
            units: ['f']
        },
        s: {
            cost: 75,
            units: ['g']
        }
    }
};

let status = {};

const req1 = {
    guests: 1,
    unitType: '1',
    checkin: '3/1',
    checkout: '3/3'
};

const req2 = {
    guests: 2,
    unitType: '1',
    checkin: '3/2',
    checkout: '3/3'
};

const req3 = {
    guests: 1,
    unitType: '2',
    checkin: '3/4',
    checkout: '3/5'
};

const req4 = {
    guests: 2,
    unitType: '3',
    checkin: '3/1',
    checkout: '3/5'
};

// Test case 0: guest should get assigned only to free unit
const req0 = {
    guests: 4,
    unitType: '1',
    checkin: '3/1',
    checkout: '3/2'
};
const req00 = {
    guests: 1,
    unitType: '1',
    checkin: '3/1',
    checkout: '3/3'
};

// Test case 1.1: 2 guests request type '1' unit should get assigned to type '1' group
// Test case 1.2: A single guest requests type '1' unit should get automatically upgraded to type '2' if type '1' group is empty
// Test case 1.3: A single guest requests type '1' unit should get assigned to type '1' unit if type '1' group is not empty
// Test case 1.4: A single guest requests type '1' unit should never get assigned to type '3' unit
// Test case 1.5: 
// Test case 2.1: 

// Test case 3.1: If guest requests type '3' unit, ignore number of guests
export default () => {
    return (
        <div>
            <h1>Welcome</h1>
            <p>Hello</p>
        </div>
    );
};
