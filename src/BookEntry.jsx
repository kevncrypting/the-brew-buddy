import Book from "./Book"

const BookEntry = ({ title, thoughts }) => {
  return (
    <div className="bg-brown-400 rounded p-6">
        <h3>{title}</h3>
        <p>{thoughts}</p>
    </div>
  )
}

export default BookEntry