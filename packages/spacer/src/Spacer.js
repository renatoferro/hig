import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/themes";
import { AVAILABLE_SPACINGS } from "@hig/theme-data-poc/build/index.es";

import { cx, css } from "emotion";

import stylesheet from "./stylesheet";

export default class Spacer extends Component {
  static propTypes = {
    /** Used for passing custom values to the spacer, in lieu of a fixed amount */
    size: PropTypes.string,
    /** Sets the size of the spacer */
    spacing: PropTypes.oneOf(AVAILABLE_SPACINGS)
  };

  static defaultProps = {
    spacing: "m"
  };

  render() {
    const { size, spacing } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ themeData }) => {
          const styles = stylesheet({ size, spacing }, themeData);
          return <div className={cx(css(styles.spacer), "hig__spacer-v1")} />;
        }}
      </ThemeContext.Consumer>
    );
  }
}
