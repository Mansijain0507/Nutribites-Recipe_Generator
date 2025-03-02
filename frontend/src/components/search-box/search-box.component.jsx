import React from 'react';
import './search-box.styles.css';
import toogle_search from '../../assets/search.svg'

export const SearchBox = ({ search, updateSearch, placeholder }) => (
  <div>
    <input
      type="text"
      className="search-bar"
      value={search}
      onChange={updateSearch}
      placeholder={placeholder}
    />
    <button type="submit" className='search-icon'>
      <img src={toogle_search} alt="Search" />

    </button>
  </div>
);
