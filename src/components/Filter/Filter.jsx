import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import { getFilter } from '../redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <div>
      <label className={css.filterLabel}>
        Filter contacts by name:
        <input
          className={css.filterName}
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
