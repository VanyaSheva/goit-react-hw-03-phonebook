import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ value, onFilter, contacts }) => (
  <>
    {contacts.length >= 2 && (
      <label className={styles.label}>
        Find contact by name:
        <input
          type="search"
          name="filter"
          value={value}
          onChange={onFilter}
        ></input>
      </label>
    )}
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
