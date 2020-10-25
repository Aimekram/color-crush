import getRandom from "../helpers/getRandom";
import { ROWS_COUNT, COLUMNS_COUNT, COLORS } from "../constants";

const itemsCount = ROWS_COUNT*COLUMNS_COUNT;

export const dataToStore = Array.from(Array(ROWS_COUNT), ()=> []);

export const generateItems = () => {
    const items = [];
    for(let i=0; i < itemsCount; i++) { 
        const color = getRandom(COLORS);
        items.push({ key: `boardItem-${i}`, color });
        dataToStore[Math.floor(i/COLUMNS_COUNT)].push(color);
    }
    return items
}