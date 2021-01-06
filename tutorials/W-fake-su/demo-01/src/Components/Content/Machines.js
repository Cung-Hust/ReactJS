import { v4 as uuidv4 } from 'uuid';

const Machines = [
    {
        id: uuidv4(),
        name: "B54",
        st: Math.random()*(4-1)+1 // running
    },
    {
        id: uuidv4(),
        name: "B53",
        st: Math.random()*(4-1)+1 // stoppped
    },
    {
        id: uuidv4(),
        name: "B47",
        st: Math.random()*(4-1)+1 // planned stop
    },
    {
        id: uuidv4(),
        name: "46",
        st: Math.random()*(4-1)+1 // not connect
    },
];

export default Machines;