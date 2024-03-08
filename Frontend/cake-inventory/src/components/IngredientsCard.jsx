import PropTypes from "prop-types";
import { useState } from "react";

function IngredientsCard({ item }) {
  const {
    ingredient_name,
    ingredient_unit,
    ingredient_quantity,
    quantity_used,
    purchase_date,
    // purpose_usage,
    expiry_date,
    id,
  } = item;
  // console.log(item);
  // console.log(item.ingredient_name);
  // console.log(ingredient_name);
  const [inputOfAdd, setInputOfAdd] = useState("");
  const handleSubmit = async (itemId, item) => {
    fetch("http://localhost:5000/ingredients", {
      method: "POST",
      headers: "application/json",
      body: inputOfAdd,
    });
  };
  return (
    <tr className="border">
      <td className="border">{ingredient_name}</td>
      <td className="border">{ingredient_unit}</td>
      <td className="border">{purchase_date.slice(0, 10)}</td>
      <td className="border">{expiry_date.slice(0, 10)}</td>
      {/* <td className="border">{quantity_used}</td> */}
      <td className="border">{quantity_used + ingredient_unit}</td>
      <td className="border">{ingredient_quantity + ingredient_unit}</td>
      <td className="border">
        {ingredient_quantity - quantity_used + ingredient_unit}
      </td>
      <td className="px-4">
        <div>
          <input
            type="text"
            value={inputOfAdd}
            onChange={(e) => setInputOfAdd(e.target.value)}
            name="addQuantity"
            placeholder="Add quantity"
            maxLength={4}
          />
          <button
            className="border-4"
            type="button"
            onClick={() => handleSubmit(id, item)}
          >
            Add+
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
