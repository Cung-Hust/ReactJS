// import uuidv4 from 'uuid/v4';

// const { v4: uuidv4 } = require('uuid');

import { v4 as uuidv4 } from 'uuid';

const Items = [
    {
        id: uuidv4(),
        name: "Content 1",
        level: 2 // high
    },
    {
        id: uuidv4(),
        name: "Content 2",
        level: 0 // low
    },
    {
        id: uuidv4(),
        name: "Content 3",
        level: 1 // medium
    },
    {
        id: uuidv4(),
        name: "Content 4",
        level: 0 // low
    },
    {
        id: uuidv4(),
        name: "Content 5",
        level: 2 // high
    },
    {
        id: uuidv4(),
        name: "Content 6",
        level: 1 // medium
    }
];

export default Items;