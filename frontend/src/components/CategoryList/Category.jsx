import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { name, url } = category;
  return (
    <div>
      <img src={url} alt={name} />
      <p>{name}</p>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Category;
