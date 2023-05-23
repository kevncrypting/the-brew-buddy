import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Bio from "./Bio.jsx";
import Book from "./Book.jsx";
import Buddy from "./Buddy.jsx";
import NoMatch from "./NoMatch.jsx";

function App() {
  return (
    <>
      <header className="flex items-end gap-3 px-6 py-3 border-b">
        <NavLink to="/" className="font-bold">
          <div className="text-3xl font-bold text-brown-700">TBB</div>
        </NavLink>
        <nav className="flex gap-1 text-2xl font-serif">
          <h1 className="font-bold">the brew</h1>
          <NavLink
            to="/book"
            className={({ isActive, isPending }) =>
              isPending ? "bg-red" : isActive ? "font-bold" : ""
            }
          >
            book
          </NavLink>
          <NavLink
            to="/buddy"
            className={({ isActive, isPending }) =>
              isPending ? "bg-red" : isActive ? "font-bold" : ""
            }
          >
            buddy
          </NavLink>
          <NavLink
            to="/bio"
            className={({ isActive, isPending }) =>
              isPending ? "bg-red" : isActive ? "font-bold" : ""
            }
          >
            bio
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/buddy" element={<Buddy />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <header className="font-bold"></header>
    </>
  );
}

export default App;
