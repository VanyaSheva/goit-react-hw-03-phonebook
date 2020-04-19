import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ good, neutral, bad }) => (
  <Fragment>
    <button type="button" onClick={good}>
      good
    </button>
    <button type="button" onClick={neutral}>
      neutral
    </button>
    <button type="button" onClick={bad}>
      bad
    </button>
  </Fragment>
);

FeedbackOptions.propTypes = {
  good: PropTypes.func,
  neutral: PropTypes.func,
  bad: PropTypes.func,
};

export default FeedbackOptions;
