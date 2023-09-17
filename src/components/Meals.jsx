import React from 'react';
import Meal from './Meal';

const Meals = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((menu) => {
        return <Meal key={menu.id} {...menu} />;
      })}
    </div>
  );
};

export default Meals;
