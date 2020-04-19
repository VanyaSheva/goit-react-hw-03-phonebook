import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => (
  <Fragment>
    <h1>{message}</h1>
  </Fragment>
);

Notification.defaultProps = {
  message: "No feedback given",
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
