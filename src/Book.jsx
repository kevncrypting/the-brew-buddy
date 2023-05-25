import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";

const Book = () => {
  const [journalEntries, setJournalEntries] = useState([{}, {}]);

  useEffect(() => {
    setJournalEntries(JSON.parse(localStorage.getItem("bookEntryHistory")))
  }, [journalEntries])

  return (
    <div>
      <Link to="/book/new">
        <Button buttonName="add a thought" />
      </Link>
      <div>
        {journalEntries.map((journalEntry) => (
          <Card
            title={journalEntry.title}
            thoughts={journalEntry.thoughts}
            key={journalEntry.savedImageUrl}
            url={journalEntry.savedImageUrl}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Book;
