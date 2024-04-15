import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 800;
export const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

export const screenHeight = (percentage) => {
    return (percentage / 100) * height;
};
export const screenWidth = (percentage) => {
    return (percentage / 100) * width;
};