import React from 'react';
import Category from './Category';

const Categories = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <Category key={category} name={category} filterMenu={filterMenu} />
        );
      })}
    </div>
  );
};

export default Categories;
