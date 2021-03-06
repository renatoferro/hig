import { variants } from "../constants";

function borderStyles({ variant }, themeData) {
  const defaults = {
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: themeData["INPUT.BORDER_WIDTH"]
  };

  return variant === variants.BOX
    ? {
        ...defaults,
        borderColor: themeData["INPUT.BORDER_COLOR"]
      }
    : defaults;
}

function borderBottomStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    borderBottomStyle: "solid",
    borderBottomColor: themeData["INPUT.BORDER_BOTTOM_COLOR"],
    borderBottomWidth: themeData["INPUT.BORDER_BOTTOM_WIDTH"]
  };

  if (isDisabled) {
    return {
      ...defaults,
      borderBottomColor: themeData["INPUT.DISABLED.BORDER_BOTTOM_COLOR"],
      color: themeData["INPUT.DISABLED.FONT_COLOR"]
    };
  }
  if (hasFocus) {
    return {
      ...defaults,
      borderBottomColor: themeData["INPUT.FOCUS.BORDER_BOTTOM_COLOR"]
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      borderBottomColor: themeData["INPUT.HOVER.BORDER_BOTTOM_COLOR"]
    };
  }
  return defaults;
}

function haloStyles({ isDisabled, hasFocus, hasHover }, themeData) {
  const defaults = {
    height: 0,
    backgroundColor: themeData["INPUT.HALO.COLOR"],
    transitionProperty: "height, color",
    transitionDuration: "0.3s, 0.3s"
  };

  if (isDisabled) {
    return {};
  }
  if (hasFocus) {
    return {
      height: themeData["INPUT.FOCUS.HALO.WIDTH"],
      backgroundColor: themeData["INPUT.FOCUS.HALO.COLOR"],
      transitionDuration: "0.1s, 0.1s"
    };
  }
  if (hasHover) {
    return {
      ...defaults,
      height: themeData["INPUT.HOVER.HALO.WIDTH"],
      transitionDuration: "0.1s, 0.1s"
    };
  }
  return defaults;
}

export default function(props, themeData) {
  return {
    wrapper: {
      position: "relative",
      ...borderStyles(props, themeData),
      ...borderBottomStyles(props, themeData)
    },
    halo: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      ...haloStyles(props, themeData)
    }
  };
}
