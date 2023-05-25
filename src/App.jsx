import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home.jsx";
import Bio from "./Bio.jsx";
import Book from "./Book.jsx";
import NewBookEntry from "./NewBookEntry.jsx";
import Buddy from "./Buddy.jsx";
import NoMatch from "./NoMatch.jsx";

function App() {
  return (
    <BrowserRouter>
      <header className="flex items-end gap-3 px-6 py-3 border-b bg-brown-200">
        <NavLink to="/" className="font-bold">
          <div className="text-3xl font-bold text-brown-700">TBB</div>
        </NavLink>
        <nav className="flex gap-1 text-2xl font-serif">
          <h1 className="font-bold">the brew</h1>
          <NavLink
            to="/book"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "font-bold" : ""
            }
          >
            book
          </NavLink>
          <NavLink
            to="/buddy"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "font-bold" : ""
            }
          >
            buddy
          </NavLink>
          <NavLink
            to="/bio"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "font-bold" : ""
            }
          >
            bio
          </NavLink>
        </nav>
      </header>
      <main className="flex flex-col items-center px-3 py-6 max-w-2xl w-auto md:m-auto">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/new" element={<NewBookEntry />} />
          <Route path="/buddy" element={<Buddy />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
