import Button from "./Button";

const Home = () => {
  return (
    <>
    <div className="flex flex-col gap-2">
      <Button buttonName="add a thought" path="book"/>
      <Button buttonName="generate a recipe"/>
      <Button buttonName="about the project"/>
    </div>
    </>
  );
};

export default Home;
