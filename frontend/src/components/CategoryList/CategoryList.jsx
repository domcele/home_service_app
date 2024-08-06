import Category from "../CategoryList/Category";

const CategoryList = () => {
  const categories = [
    {
      name: "cleaning",
      img: `https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000`,
    },
    {
      name: "repair",
      img: "https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000",
    },
    {
      name: "painting",
      img: "https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000",
    },
    {
      name: "shifting",
      img: "https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000",
    },
    {
      name: "plumbing",
      img: "https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000",
    },
    {
      name: "electric",
      img: "https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000",
    },
  ];
  return (
    <div>
      {categories.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
