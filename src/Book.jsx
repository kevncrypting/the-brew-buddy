import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";

const Book = () => {
  const [journalEntries, setJournalEntries] = useState([
    { id: 1, title: "test title 1", thoughts: "test thoughts 1" },
    { id: 2, title: "test title 2", thoughts: "test thoughts 2" },
    { id: 3, title: "test title 3", thoughts: "test thoughts 3" },
    { id: 4, title: "test title 4", thoughts: "test thoughts 4" },
  ]);

  return (
    <div>
      <Link to="/book/new">
        <Button buttonName="add a thought" />
      </Link>
      <div>
        {journalEntries.map(journalEntry => (
          <Card
            title={journalEntry.title}
            thoughts={journalEntry.thoughts}
            key={journalEntry.id}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Book;
