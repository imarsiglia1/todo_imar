import { CARD_COLORS } from "../../constants/colors";

export const getTaskColor = (index: number) => {
  //   console.log(index % 5);
  const mIndex = index % 6;
  return CARD_COLORS[mIndex];
};
