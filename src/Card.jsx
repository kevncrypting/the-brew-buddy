const Card = ({ title, thoughts, id }) => {
  return (
    <div className="bg-brown-400 rounded p-6 my-2">
        
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{thoughts}</p>
    </div>
  )
}

export default Card