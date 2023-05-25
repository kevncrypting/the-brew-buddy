import { Link } from "react-router-dom";
import Button from "./Button";

const Book = () => {
  return (
    <div>
      <Link to="/book/new">
        <Button buttonName="add a thought" />
      </Link>
      {/* <button onClick={changeImage}>Refresh Image</button> */}
      <a href="https://www.pexels.com">Photos provided by Pexels</a>
    </div>
  );
};

export default Book;
