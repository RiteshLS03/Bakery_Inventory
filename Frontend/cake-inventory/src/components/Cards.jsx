// import React from "react";
import { FaStar } from "react-icons/fa6";
// import { ReactPropTypes } from "react";
import PropTypes from "prop-types"; // ES6

const Cards = ({ item, index }) => {
  const handleAddToCart = (item) => {
    try {
      fetch("http://localhost:5000/ingredients", {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ingredients: item }),
      });
      // window.location.reload(true);
    } catch (error) {
      throw new Error(error);
    }
    console.log(item.ingredients);
    console.log(JSON.stringify({ ingredients: item.ingredients }));
  };
  return (
    <div
      key={index}
      className="flex-wrap mx-10 my-2 font-nunitoSans font-bold rounded p-2 shadow-lg"
      style={{ width: "200px", height: "auto" }}
    >
      <div className="">
        <img
          src={item?.imgLink}
          alt={"product-img"}
          width={"200px"}
          // height={"100px"}
          className="rounded-xl h-40"
        />
      </div>
      <div className="px-2 py-2">
        <p className="text-theme-color">{item.name}</p>
        <div className="flex justify-between pt-2">
          <p>
            {item.price}₹{/* <span style="font-size:100px;"></span> */}
          </p>
          <p className="flex justify-center items-center gap-1">
            {item.rating} <FaStar color="green" />
          </p>
        </div>
        <div className="py-2">
          <p className="relative text-[#02060c99] text-sm">
            {item.description}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="rounded-3xl p-2 bg-theme-color text-[#fff]"
            onClick={() => {
              handleAddToCart(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  item: PropTypes.any,
  index: PropTypes.any,
};

export default Cards;
