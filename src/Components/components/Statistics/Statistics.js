import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Statistics = ({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) => (
  <Fragment>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {countTotalFeedback()}</p>
    {countTotalFeedback() !== 0 && (
      <p>
        Positive feedback:
        {countPositiveFeedbackPercentage().toFixed(2)}
      </p>
    )}
  </Fragment>
);
Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
};
export default Statistics;
