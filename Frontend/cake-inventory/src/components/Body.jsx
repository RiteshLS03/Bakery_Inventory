import { useState, useEffect } from "react";
import IngredientsCard from "./IngredientsCard";
const Body = () => {
  const [ingredients, setIngredients] = useState({
    ingredient_name: "flour",
    ingredient_unit: "Kg",
    purchase_date: "2024-03-06T18:30:00.000Z",
    expiry_date: "2024-09-06T18:30:00.000Z",
    quantity_used: 90,
    purpose_usage: "chocolate cake",
    ingredient_quantity: 100,
  });
  useEffect(
    () =>
      async function getIngredients() {
        const ingredients = await fetch("http://localhost:5000/ingredients");
        const json = await ingredients.json();
        console.log(json);
        setIngredients(json);
      },
    []
  );
  return (
    <div>
      {/* <IngredientsCard></IngredientsCard> */}
      <h1>{ingredients.ingredient_name}</h1>
      <h1>{ingredients.ingredient_unit}</h1>
    </div>
  );
};

export default Body;
