import PropTypes from "prop-types";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Topbar = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div>{children}</div>
    </>
  );
};

Topbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Topbar;
