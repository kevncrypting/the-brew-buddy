const CoffeeCategory = ({ addClasses, categoryTitle, categoryInfo, onButtonClick }) => {
    return (
    <div className={`border-b px-6 py-3 ${addClasses}`}>
      <h3 className="font-bold">{categoryTitle}</h3>
      <div className="flex justify-between">
        <span>{categoryInfo}</span>
        <button disabled onClick={onButtonClick} className="px-6 py-3 rounded-lg bg-brown-500 text-brown-50 hover:bg-red-800 hover:drop-shadow">
          Save Values
        </button>
      </div>
    </div>
  );
};

export default CoffeeCategory;
