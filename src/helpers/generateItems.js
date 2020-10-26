import getRandom from "../helpers/getRandom";
import { ROWS_COUNT, COLUMNS_COUNT, COLORS } from "../constants";

const itemsCount = ROWS_COUNT*COLUMNS_COUNT;

export const dataToStore = () => {
    const data = Array.from(Array(COLUMNS_COUNT), ()=> []);
    for(let i=0; i < itemsCount; i++) { 
        const color = getRandom(COLORS);
        const colIndex = [Math.floor(i/ROWS_COUNT)];
        data[colIndex].push(color);
    }
    return data
}