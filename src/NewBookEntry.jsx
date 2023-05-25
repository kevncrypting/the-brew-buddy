import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBookEntry = () => {
  const url = "https://cataas.com/";
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookEntry = { title, thoughts };
    console.log(bookEntry);
    navigate("/book");
  };

  const handleImageSave = () => {};

  const handleImageRefresh = () => {};

  useEffect(() => {
    fetch(`${url}cat?json=true`)
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.url);
      });
  }, []);

  return (
    <>
      <h3>
        This was initially planned to produce a random coffee-related picture to
        be used as your journal entry thumbnail, but due to budget constraints
        the MVP was delivered with a free cat picture instead.
      </h3>
      <div className="flex justify-evenly bg-brown-100 mb-3 rounded-xl p-6">
        <img
          src={url + imageUrl}
          alt="A cat picture"
          className="object-cover h-48 w-48"
        />
        <div className="flex flex-col gap-3 justify-center">
          <button
            onClick={handleImageSave}
            className="text-xl px-6 py-3 rounded-lg bg-brown-500 text-brown-50 hover:bg-brown-700 hover:drop-shadow"
          >
            Save Thumbnail
          </button>
          <button
            onClick={handleImageRefresh}
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
      </form>

      <h3>Journal Preview</h3>
      <div className="flex bg-brown-100 gap-3 px-3 py-6 rounded-xl">
        <img src="" alt="" />
        <section>

        </section>
      </div>
    </>
  );
};

export default NewBookEntry;