import { useEffect, useState } from "react";

const Book = () => {
  const [imageGallery, setImageGallery] = useState([]);

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=coffee&per_page=15`, {
      headers: {
        Authorization: `${process.env.REACT_APP_PEXELS_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setImageGallery(data.photos);
      });
  });

  const changeImage = (event) => {
    event.preventDefault();
    console.log(imageGallery);

  }

  return (
    <>
      <div>Book</div>
      <button onClick={changeImage}>Refresh Image</button>
      <a href="https://www.pexels.com">Photos provided by Pexels</a>
    </>
  );
};

export default Book;
