import Category from "../CategoryList/Category";

const CategoryList = () => {
  const categories = [
    {
      name: "cleaning",
      url: `https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000`,
    },
    {
      name: "repair",
      url: "https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000",
    },
    {
      name: "painting",
      url: "https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000",
    },
    {
      name: "shifting",
      url: "https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000",
    },
    {
      name: "plumbing",
      url: "https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000",
    },
    {
      name: "electric",
      url: "https://img.icons8.com/?size=100&id=V2mXDW29kocg&format=png&color=000000",
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
