import { useState } from 'react';
import Categories from './components/Categories';
import Meals from './components/Meals';
import Title from './components/Title';
import menu from './data';

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
        <Categories filterMenu={filterMenu} />
        <Meals menu={meals} />
      </section>
    </main>
  );
};
export default App;
