import React from 'react';
import Category from './Category';

const Categories = () => {
  const categories = ['all', 'breakfast', 'lunch', 'shakes'];
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return <Category title={category} />;
      })}
    </div>
  );
};

export default Categories;
