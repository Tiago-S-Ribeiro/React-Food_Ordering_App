import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Beef Wellington',
      description: 'Beef fillet steak, coated in pâté and mushroom duxelles.',
      price: 42.99,
    },
    {
      id: 'm2',
      name: 'Gua Bao',
      description: 'Slices of pork belly meat dressed with pickled mustard greens.',
      price: 25.50,
    },
    {
      id: 'm3',
      name: 'Texas Burger',
      description: 'American beef mixed with onions, garlic, lettuce and delicious cheddar.',
      price: 8.99,
    },
    {
      id: 'm4',
      name: 'Maki Sushi',
      description: 'Rice and filling wrapped in seaweed.',
      price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => {
        return <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
    });

    return(
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;