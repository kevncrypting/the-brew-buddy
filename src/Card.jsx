const Card = ({ title, thoughts, url }) => {
  return (
    <div className="flex bg-brown-400 rounded p-6 my-2 gap-3">
      <img
        src={`https://cataas.com/${url}`}
        alt="A cat picture"
        className="object-cover h-48 w-48 rounded-xl"
      />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{thoughts}</p>
      </div>
    </div>
  );
};

export default Card;
