import getRandomColor from "./getRandomColor";
import { ROWS_COUNT, COLUMNS_COUNT } from "../constants";

const itemsCount = ROWS_COUNT*COLUMNS_COUNT;

const generateItems = () => {
    const data = Array.from(Array(COLUMNS_COUNT), ()=> []);
    for(let i=0; i < itemsCount; i++) { 
        const color = getRandomColor();
        const colIndex = [Math.floor(i/ROWS_COUNT)];
        data[colIndex].push(color);
    }
    return data
}

export default generateItems;