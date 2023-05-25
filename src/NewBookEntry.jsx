import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBookEntry = () => {
  const url = "https://cataas.com/";
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [savedImageUrl, setSavedImageUrl] = useState("");
  const [imageRefreshCounter, setImageRefreshCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookEntry = { title, thoughts };
    console.log(bookEntry);
    navigate("/book");
  };

  const handleImageSave = () => {
    setSavedImageUrl(imageUrl);
  };

  const handleImageRefresh = () => {
    setImageRefreshCounter(imageRefreshCounter + 1);
    console.log(`Image has been refreshed ${imageRefreshCounter} times`);
  };

  useEffect(() => {
    fetch(`${url}cat?json=true`)
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.url);
      });
  }, [imageRefreshCounter]);

  return (
    <>
      <p>
        This was initially planned to produce a random coffee-related picture to
        be used as your journal entry thumbnail, but due to budget constraints
        the MVP was delivered with a free cat picture instead.
      </p>
      <div className="flex justify-evenly bg-brown-100 mb-3 mt-3 rounded-xl p-6">
        <img
          src={url + imageUrl}
          alt="A cat picture"
          className="object-cover h-48 w-48"
        />
        <div className="flex flex-col gap-3 justify-center">
          <button
            onClick={() => handleImageSave()}
            className="text-xl px-6 py-3 rounded-lg bg-brown-500 text-brown-50 hover:bg-brown-700 hover:drop-shadow"
          >
            Save Thumbnail
          </button>
          <button
            onClick={() => handleImageRefresh()}
            className="text-xl px-6 py-3 rounded-lg bg-brown-500 text-brown-50 hover:bg-brown-700 hover:drop-shadow"
          >
            New <span className="line-through">Coffee</span> Cat
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-brown-100 gap-3 px-3 py-6 mb-3 rounded-xl"
      >
        <label className="flex flex-col">
          title
          <input
            required
            type="text"
            placeholder="enter title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 bg-brown-50"
          />
        </label>
        <label className="flex flex-col">
          thoughts
          <textarea
            required
            placeholder="enter thoughts here..."
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            className="p-3 bg-brown-50"
          ></textarea>
        </label>
        <button
          type="submit"
          className="text-3xl px-6 py-3 rounded-lg bg-brown-500 text-brown-50 hover:bg-brown-700 hover:drop-shadow"
        >
          add journal entry
        </button>
        <h3 className="border-t-2">Journal Preview</h3>
        <div className="flex bg-brown-100 gap-3 px-3 py-6 rounded-xl">
          {savedImageUrl !== "" ? (
            <img
              src={url + savedImageUrl}
              alt="A cat picture"
              className="object-cover h-48 w-48"
            />
          ) : null}
          <section>
            <h4 className="text-xl font-bold">{title}</h4>
            <p>{thoughts}</p>
          </section>
        </div>
      </form>
    </>
  );
};

export default NewBookEntry;
