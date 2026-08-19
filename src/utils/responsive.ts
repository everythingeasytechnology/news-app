import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// iPhone 13/14-class width used as the design baseline; smaller screens
// scale everything down proportionally instead of staying pixel-fixed.
const BASE_WIDTH = 390;
const MIN_SCALE = 0.78;
const MAX_SCALE = 1.15;

const rawScale = SCREEN_WIDTH / BASE_WIDTH;
export const scaleFactor = Math.min(Math.max(rawScale, MIN_SCALE), MAX_SCALE);

export function scale(size: number) {
  return Math.round(PixelRatio.roundToNearestPixel(size * scaleFactor));
}

export function scaleFont(size: number) {
  return Math.round(PixelRatio.roundToNearestPixel(size * scaleFactor));
}
