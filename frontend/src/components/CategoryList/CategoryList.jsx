import Category from "../CategoryList/Category";
import styles from "../CategoryList/CategoryList.module.scss";

const CategoryList = () => {
  const categories = [
    {
      name: "cleaning",
      url: `https://img.icons8.com/?size=100&id=rIZLZqJ58yR5&format=png&color=000000`,
    },
    {
      name: "repair",
      url: "https://img.icons8.com/?size=100&id=20544&format=png&color=000000",
    },
    {
      name: "painting",
      url: "https://img.icons8.com/?size=100&id=FE7nt2VY1B8i&format=png&color=000000",
    },
    {
      name: "shifting",
      url: "https://img.icons8.com/?size=100&id=11910&format=png&color=000000",
    },
    {
      name: "plumbing",
      url: "https://img.icons8.com/?size=100&id=13255&format=png&color=000000",
    },
    {
      name: "electric",
      url: "https://img.icons8.com/?size=100&id=D0IEiSc1Ssn1&format=png&color=000000",
    },
  ];
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
