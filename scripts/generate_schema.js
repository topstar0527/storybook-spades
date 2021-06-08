const fs = require('fs');
const uuid = require('../src/libs/uuid');


const [,,...argumentList] = process.argv;
let units = 0,
floors = 0,
path = './schema.json',
hotelTitle = 'YOUR_HOTEL_NAME_HERE',
floorTitle = 'Floor ',
unitTitle = 'Unit ';
for (let index = 0; index < argumentList.length; index++) {
    const flag = argumentList[index];
    switch(flag) {
        case flag.startsWith('--unit'):
        units = parseInt(flag.substr(6));
        break;
        case flag.startsWith('--floor'):
        floors = parseInt(flag.substr(7));
        break;
        case flag.startsWith('--hotel-title'):
        hotelTitle = flag.substr(13);
        break;
        case flag.startsWith('--floor-title'):
        floorTitle = flag.substr(13);
        break;
        case flag.startsWith('--unit-title'):
        unitTitle = flag.substr(12);
        break;
        default:
        break;
    }
}

let data = {
    units: [],
    groups: [
        {
            id: b(),
            type: 'HOTEL',
            title: hotelTitle,
            children: []
        }
    ]
};

for (let i = 0; i < floors; i++) {
    const f = {
        id: b(),
        type: 'FLOOR',
        title: `${floorTitle}${i + 1}`,
        children: []
    };
    data.groups.push(f);
    data.groups[0].children.push({id: f.id});
    for (let j = 0; j < units; j++) {
        const u = {
            id: b(),
            title: `${unitTitle}${j + 1}`,
            type: 'PRIVATE'
        };
        data.units.push(u);
        f.children.push({
            id: u.id,
            isUnit: true
        });
    }
}

fs.writeFile(path, JSON.stringify(data), err => {
    if(err) throw err;
    console.log(`saved at ${SCHEMA_PATH}`);
});
