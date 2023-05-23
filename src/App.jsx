import { NavLink, Route, Routes } from "react-router-dom";
import Bio from "./Bio.jsx";
import Book from "./Book.jsx";
import Buddy from "./Buddy.jsx";
import NoMatch from "./NoMatch.jsx";

function App() {
  return (
    <>
      <header className="flex gap-1">
        <h1>the brew </h1>
        <nav className="flex gap-1">
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : undefined)}
            to="/book"
          >
            book
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : undefined)}
            to="/buddy"
          >
            buddy
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : undefined)}
            to="/bio"
          >
            bio
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/book" element={<Book />} />
        <Route path="/buddy" element={<Buddy />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
