import React from 'react';

const Category = ({ name, filterMenu }) => {
  return (
    <button className="btn" type="button" onClick={() => filterMenu(name)}>
      {name}
    </button>
  );
};

export default Category;
