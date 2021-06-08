import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();


  useEffect(() => { //useEffect can't return a Promise, can't be async
    const fetchMeals = async () => {
      const response = await fetch('https://food-app-b74f3-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      
      if(!response.ok){
        throw new Error('Something went wrong!'); //throwing an error inside a promise, causes it to be rejected. so must use .catch on the function with the promise. in this case, when calling fetchMeals
      }

      const responseData = await response.json();
      console.log(responseData)
      const loadedMeals = [];

      for(const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []); 

  if(isLoading){
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if(httpError){
    return(
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
  });

  return(
    <section className={classes.meals}>
      <Card> <ul>{mealsList}</ul> </Card>
    </section>
    );
}

export default AvailableMeals;