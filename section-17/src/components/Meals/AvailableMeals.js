import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        "https://dev1-301218-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();

      setMeals(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={+meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>{<ul>{mealsList}</ul>}</Card>
    </section>
  );
};

export default AvailableMeals;
