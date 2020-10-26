import { COLORS } from "../constants";

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]

export default getRandomColor;