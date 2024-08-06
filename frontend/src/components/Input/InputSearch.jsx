import PropTypes from "prop-types";

const InputSearch = ({ label, type, id, name, placeholderText, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholderText}
        required={required}
      />
    </div>
  );
};

InputSearch.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholderText: PropTypes.string,
  required: PropTypes.bool,
};

export default InputSearch;
