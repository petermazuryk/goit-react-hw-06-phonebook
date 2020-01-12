import React from 'react';
import T from 'prop-types';
import styles from './Filter.module.css';

const FilterSearch = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        className={styles.Input}
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        id="search"
        autoComplete="off"
        placeholder={'Search'}
      />
      Search contact
    </div>
  );
};

FilterSearch.propTypes = {
  filter: T.string.isRequired,
  setFilter: T.func.isRequired,
};

export default FilterSearch;
