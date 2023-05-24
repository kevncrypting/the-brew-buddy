const CoffeeCategory = ({ categoryTitle, categoryInfo }) => {
  return (
    <div className="border-b px-6 py-3">
        <h3>{categoryTitle}</h3>
        <span>{categoryInfo}</span>
    </div>
  )
}

export default CoffeeCategory