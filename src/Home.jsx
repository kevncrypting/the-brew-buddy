import Button from "./Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Link to="/book/new">
          <Button buttonName="add a thought" />
        </Link>
        <Link to="/buddy">
          <Button buttonName="generate a recipe" />
        </Link>
        <Link to="/bio">
          <Button buttonName="about the project" />
        </Link>
      </div>
    </>
  );
};

export default Home;
