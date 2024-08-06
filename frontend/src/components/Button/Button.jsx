import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
