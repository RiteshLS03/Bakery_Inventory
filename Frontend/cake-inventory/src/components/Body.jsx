import { useState, useEffect } from "react";
import { IngredientsCard } from "./index";
const Body = () => {
  const [ingredients, setIngredients] = useState([]);
  const [addIngredient, setAddIngredient] = useState({
    addName: "",
    addUnit: "",
    addPurchaseDate: "",
    addExpiryDate: "",
    addQuantity: "",
  });
  // console.log(ingredients);

  function handleAdd() {
    console.log(addIngredient);
    try {
      fetch("http://localhost:5000/ingredient", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(addIngredient),
      });
      window.location.reload(true);
    } catch (error) {
      throw new Error(error);
    }
  }

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
  }
  useEffect(() => {
    getIngredients();
  }, []);
  console.log(ingredients);
  return (
    <>
      {!ingredients ? (
        <div>
          <h1>Wait Until Data Loading</h1>
        </div>
      ) : (
        <div className="flex justify-center font-nunitoSans">
          <table className="table-auto border text-[20px]">
            <thead className="border">
              <tr className="border text-center">
                <td className="border">Ingredient Name</td>
                <td className="border">Unit</td>
                <td className="border">Purchased on</td>
                <td className="border">Expiring on</td>
                <td className="border">Stock Quantity</td>
                <td className="border">Used Quantity</td>
                <td className="border">Current Quantity</td>
                <td className="border">Add</td>
              </tr>
            </thead>
            <tbody className="table-auto text-center">
              {ingredients.map((item, i) => {
                return <IngredientsCard key={i} item={item} />;
              })}
              <tr className="border">
                <td className="border">
                  <input
                    value={addIngredient.addName}
                    name="addName"
                    onChange={(e) => {
                      setAddIngredient((prevIngredient) => ({
                        ...prevIngredient,
                        addName: e.target.value,
                      }));
                    }}
                    type="text"
                    placeholder="Ingredient name"
                  />
                </td>
                <td className="border">
                  <input
                    value={addIngredient.addUnit}
                    name="addUnit"
                    onChange={(e) => {
                      setAddIngredient((prevIngredient) => ({
                        ...prevIngredient,
                        addUnit: e.target.value,
                      }));
                    }}
                    type="text"
                    placeholder="Ingredient Unit"
                    maxLength={6}
                  />
                </td>
                <td className="border">
                  <input
                    value={addIngredient.addPurchaseDate}
                    name="addPurchaseDate"
                    onChange={(e) => {
                      setAddIngredient((prevIngredient) => ({
                        ...prevIngredient,
                        addPurchaseDate: e.target.value,
                      }));
                    }}
                    type="date"
                    maxLength={10}
                    placeholder="Purchase Date"
                  />
                </td>
                <td className="border">
                  <input
                    value={addIngredient.addExpiryDate}
                    name="addExpiryDate"
                    onChange={(e) => {
                      setAddIngredient((prevIngredient) => ({
                        ...prevIngredient,
                        addExpiryDate: e.target.value,
                      }));
                    }}
                    type="date"
                    maxLength={10}
                    placeholder="Expiry Date"
                  />
                </td>
                <td className="border">
                  <input
                    value={addIngredient.addQuantity}
                    name="addQuantity"
                    onChange={(e) => {
                      setAddIngredient((prevIngredient) => ({
                        ...prevIngredient,
                        addQuantity: e.target.value,
                      }));
                    }}
                    type="number"
                    placeholder="Ingredient Quantity"
                    maxLength={3}
                  />
                </td>
                <td className="border">-</td>
                <td className="border">-</td>
                <td className="border">
                  <button type="button" onClick={() => handleAdd()}>
                    Add Ingredient
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Body;
