import { useState } from 'react';
import Categories from './components/Categories';
import Meals from './components/Meals';
import Title from './components/Title';
import menu from './data';

const App = () => {
  const [meals, setMeals] = useState(menu);

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories />
        <Meals menu={menu} />
      </section>
    </main>
  );
};
export default App;
