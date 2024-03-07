import PropTypes from "prop-types";

function IngredientsCard({ children, ing }) {
  return (
    <div>
      <h1>{children[0].ingredient_name}</h1>
      <h1>{ing[0].ingredient_unit}</h1>
    </div>
  );
}

export default IngredientsCard.propTypes = {
  children: PropTypes.node,
  ing: PropTypes.node,
};
