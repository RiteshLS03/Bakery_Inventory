import { useState, useEffect } from "react";
import { IngredientsCard } from "./index";
const Body = () => {
  const [ingredients, setIngredients] = useState([]);
  // console.log(ingredients);

  useEffect(
    () =>
      async function getIngredients() {
        try {
          const response = await fetch("http://localhost:5000/ingredients");
          const json = await response.json();
          // console.log(json);
          setIngredients(json);
        } catch (error) {
          // throw new Error(error);
          console.log(error);
        }
      },
    []
  );
  console.log(ingredients);
  return (
    <>
      {!ingredients ? (
        <div>
          <h1>Wait Until Data Loading</h1>
        </div>
      ) : (
        <div className="flex justify-center">
          <table className="table-auto border text-[2rem]">
            <thead className="border">
              <tr className="border">
                <td className="border">Ingredient Name</td>
                <td className="border">Unit</td>
                <td className="border">Purchased on</td>
                <td className="border">Expiring on</td>
                <td className="border">Used Quantity</td>
                <td className="border">Stock Quantity</td>
                <td className="border">Current Quantity</td>
                <td className="border">Add</td>
              </tr>
            </thead>
            <tbody className="table-auto">
              {ingredients.map((item, i) => {
                return <IngredientsCard key={i} item={item} />;
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Body;
