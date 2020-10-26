import getRandom from "../helpers/getRandom";
import { ROWS_COUNT, COLUMNS_COUNT, COLORS } from "../constants";

const itemsCount = ROWS_COUNT*COLUMNS_COUNT;

export const dataToStore = () => {
    const data = Array.from(Array(ROWS_COUNT), ()=> []);
    for(let i=0; i < itemsCount; i++) { 
        const color = getRandom(COLORS);
        const rowNr = [Math.floor(i/COLUMNS_COUNT)];
        data[rowNr].push(color);
    }
    return data
}