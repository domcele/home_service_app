import styles from "./Hero.module.scss";
import InputSearch from "../Input/InputSearch";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1>
        Find Home <span className={styles.span}>Service/Repair</span> Near You
      </h1>
      <p>Explore Best Home Service & Repair near you</p>
      <div className={styles.searchContainer}>
        <InputSearch
          type="search"
          id="search"
          name="search"
          placeholderText="Search"
        />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Hero;
