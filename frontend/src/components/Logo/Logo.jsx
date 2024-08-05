import CompanyLogo from "../../assets/companylogo.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={CompanyLogo} alt="Company logo" />
    </div>
  );
};

export default Logo;
