import { select, text } from "@storybook/addon-knobs/react";

import { AVAILABLE_SPACINGS } from "@hig/theme-data-poc";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  size: "Size",
  spacing: "Spacing",
  display: "Display"
};

export default function getKnobs(props) {
  const { size, spacing, display, ...otherProps } = props;

  return {
    ...otherProps,
    size: text(knobLabels.size, size, knobGroupIds.basic),
    spacing: select(knobLabels.spacing, AVAILABLE_SPACINGS, "m"),
    display: text(knobLabels.display, display, knobGroupIds.basic)
  };
}
