import { useEffect, useState } from "react";
import { createClient } from "pexels";


const Book = () => {
    const [imageGallery, setImageGallery] = useState([]);

    const client = createClient(
        `${process.env.REACT_APP_PEXELS_API_KEY}`
    );

    const query = "Coffee";
    
    client.photos.search({ query, per_page: 5 }).then((photos) => {
      setImageGallery(photos.photos);
    });

  //   useEffect(() => {
  //     fetch(`https://api.pexels.com/v1/search?query=coffee&per_page=15`, {
  //       headers: {
  //         'Access-Control-Allow-Origin': 'https://the-brew-buddy.onrender.com/',
  //         'Authorization': `${process.env.PEXELS_API_KEY}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setImageGallery(data.photos);
  //       });
  //   });

  const changeImage = (event) => {
    event.preventDefault();
    console.log(imageGallery);
  };

  return (
    <>
      <div>Book</div>
      <button onClick={changeImage}>Refresh Image</button>
      <a href="https://www.pexels.com">Photos provided by Pexels</a>
    </>
  );
};

export default Book;
