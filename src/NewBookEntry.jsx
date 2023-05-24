import { useState } from "react";

const NewBookEntry = ({ addJournalEntry }) => {
  const [journalEntry, setJournalEntry] = useState({ title: "", thoughts: "" });

  const handleChange = (event) => {
    setJournalEntry({
      ...journalEntry,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addJournalEntry(journalEntry);
    setJournalEntry({ title: "", thoughts: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={journalEntry.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="thoughts"
          placeholder="thought"
          value={journalEntry.thoughts}
          onChange={handleChange}
        />
      </div>
      <div>
        <button>
            add journal entry
        </button>
      </div>
    </form>
  );
};

export default NewBookEntry;
