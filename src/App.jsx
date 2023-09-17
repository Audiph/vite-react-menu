import { useState } from 'react';
import Categories from './components/Categories';
import Meals from './components/Meals';
import Title from './components/Title';
import menu from './data';

const categories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [meals, setMeals] = useState(menu);

  const filterMenu = (category) => {
    if (category === 'all') {
      setMeals(menu);
      return;
    }
    const newMenu = menu.filter((meal) => meal.category === category);
    setMeals(newMenu);
  };

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories categories={categories} filterMenu={filterMenu} />
        <Meals menu={meals} />
      </section>
    </main>
  );
};
export default App;
