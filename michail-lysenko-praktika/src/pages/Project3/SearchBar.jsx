import React from 'react';

const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Ieškoti pagal vardą"
        className="form-control"
        value={value}
        onChange={onChange}
      />
      <button className="btn btn-secondary mt-2" onClick={onClear}>Valyti paiešką</button>
    </div>
  );
};

export default SearchBar;
