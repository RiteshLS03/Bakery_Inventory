import PropTypes from "prop-types";
import { useState } from "react";

function IngredientsCard({ item }) {
  const {
    ingredient_name,
    ingredient_unit,
    ingredient_quantity,
    quantity_used,
    purchase_date,
    // purpose_usage  ,
    expiry_date,
    id,
  } = item;
  // console.log(item);
  // console.log(item.ingredient_name);
  // console.log(ingredient_name);
  const [inputOfAdd, setInputOfAdd] = useState("");
  // const ingName = Object.keys(item).includes("ingredient_name");
  // let ingName = "ingredient_name";
  // const response = {
  //   id: item.id,
  //   ingredient_quantity: inputOfAdd,
  // };
  const handleSubmit = async () => {
    fetch("http://localhost:5000/ingredients", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ inputOfAdd, ingredient_quantity, id }),
    });
    // console.log(ingredient_quantity, item.ingredient_quantity + inputOfAdd);
    // console.log(JSON.stringify({ inputOfAdd, ingredient_quantity, id }));
    window.location.reload(true);
  };
  const handleDelete = () => {
    if (confirm(`Do you want to delete ${ingredient_name}`))
      fetch(`http://localhost:5000/ingredients/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id }),
      });
    window.location.reload(true);
  };
  return (
    <tr className="border">
      <td className="border">{ingredient_name}</td>
      <td className="border">{ingredient_unit}</td>
      <td className="border">
        {purchase_date ? purchase_date.slice(0, 10) : "-"}
      </td>
      <td className="border">{expiry_date ? expiry_date.slice(0, 10) : "-"}</td>
      {/* <td className="border">{quantity_used}</td> */}

      <td className="border">
        {ingredient_quantity
          ? ingredient_quantity + ingredient_unit
          : +" " + ingredient_unit}
      </td>
      <td className="border">
        {quantity_used ? quantity_used + ingredient_unit : 0 + ingredient_unit}
      </td>
      <td className="border">
        {ingredient_quantity - quantity_used + " " + ingredient_unit}
      </td>
      <td className="px-2">
        <div>
          <div className="flex">
            <input
              type="number"
              className="border-2 rounded px-1 w-40"
              value={inputOfAdd}
              onChange={(e) => setInputOfAdd(e.target.value)}
              name="addQuantity"
              placeholder="Add quantity"
              minLength={1}
              maxLength={4}
            />
            <button
              type="button"
              className="rounded-xl p-2 bg-theme-color text-[#fff]"
              onClick={() => handleSubmit()}
            >
              Add
            </button>
          </div>
          <button
            type="button"
            className="border rounded text-[1rem] px-2 w-30"
            onClick={() => handleDelete()}
          >
            Remove from inventory
          </button>
        </div>
      </td>
      {/* <td className="border">{}</td> */}
    </tr>
  );
}

IngredientsCard.propTypes = {
  item: PropTypes.any,
};
export default IngredientsCard;
