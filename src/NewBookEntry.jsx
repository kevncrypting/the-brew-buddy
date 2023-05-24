import { useState } from "react";

const NewBookEntry = () => {
  const [title, setTitle] = useState("");
  const [thoughts, setThoughts] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookEntry = { title, thoughts };
    console.log(bookEntry);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-brown-100 gap-3 px-3 py-6 rounded-xl"
      >
        <label>title</label>
        <input
          required
          type="text"
          placeholder="enter title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 bg-brown-50"
        />
        <label>thoughts</label>
        <textarea
          required
          placeholder="enter thoughts here..."
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          className="p-3 bg-brown-50"
        ></textarea>
        <button>add journal entry</button>
        <p>{title}</p>
        <p>{thoughts}</p>
      </form>
    </>
  );
};

export default NewBookEntry;
