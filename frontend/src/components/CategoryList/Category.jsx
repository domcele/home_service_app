import PropTypes from "prop-types";

const Category = ({ category, url }) => {
  const { name, img } = category;
  const Img = img;
  return (
    <div>
      <Img src={url} />
      <p>{name}</p>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};

export default Category;
