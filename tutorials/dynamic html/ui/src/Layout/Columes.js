import { v4 as uuidv4 } from 'uuid';

const c_x = 30;
const c_y = 80;

const Columes = [
    {
        id: uuidv4(),
        name: " C1 ",
        width:  c_x + 'vw',
        height: c_y + 'vh'
    },
    {
        id: uuidv4(),
        name: " C2 ",
        width: c_x + 'vw',
        height: c_y + 'vh'
    },
    {
        id: uuidv4(),
        name: " C3 ",
        width: c_x + 'vw',
        height: c_y + 'vh'
    },
];


export default Columes;