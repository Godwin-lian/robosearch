import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
       className='pa3 ba b--red bg-lightest-blue rounded-lg br-pill shadow-5 neon-red'
        type='search'
        placeholder='Search For Robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;