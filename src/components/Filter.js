import React from 'react';
import './filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder } from '../redux/AllDataSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.allData.filters.sort);

  const handleSortChange = (event) => {
    const selectedSortOrder = event.target.value;
    dispatch(setSortOrder(selectedSortOrder));
  };

  return (
    <div className="sort-filter">
      <label>Sort By: </label>
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </div>
  );
};
export default Filter;