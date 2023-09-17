import React from 'react';

const Category = ({ title }) => {
  return (
    <button className="btn" type="button">
      {title}
    </button>
  );
};

export default Category;
