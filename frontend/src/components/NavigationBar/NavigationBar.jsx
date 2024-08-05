import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { navigationBarLinks } from "../../routes/consts";
import styles from "./NavigationBar.module.scss";
import Button from "../Button/Button";

const NavigationBar = () => {
  return (
    <header className={styles.navContainer}>
      <Logo />
      <nav className={styles.nav}>
        <div className={styles.leftNavSide}>
          {navigationBarLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.title}
            </Link>
          ))}
        </div>
        <Button />
      </nav>
    </header>
  );
};

export default NavigationBar;
