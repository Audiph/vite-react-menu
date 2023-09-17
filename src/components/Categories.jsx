import React from 'react';
import Category from './Category';

const Categories = ({ filterMenu }) => {
  const categories = [
    { id: 1, name: 'all' },
    { id: 2, name: 'breakfast' },
    { id: 3, name: 'lunch' },
    { id: 4, name: 'shakes' },
  ];
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <Category key={category.id} {...category} filterMenu={filterMenu} />
        );
      })}
    </div>
  );
};

export default Categories;
