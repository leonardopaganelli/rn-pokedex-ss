import { Dimensions, Platform } from "react-native";

const isMobile = Platform.OS === "android" || Platform.OS === "ios";
const dimensionProperty = isMobile ? "screen" : "window";

const width = Dimensions.get(dimensionProperty).width;
const height = Dimensions.get(dimensionProperty).height;

export default {
  window: {
    width,
    height,
  },
  isMobile,
  isSmallDevice: width < 400,
  isMediumDevice: width < 510,
  isXSmallDevice: width < 350,
};
