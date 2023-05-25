const Button = ({ buttonName }) => {
  return (
    <>
        <button className={"text-3xl px-6 py-3 rounded-lg bg-brown-500 text-brown-50 hover:bg-brown-700 hover:drop-shadow"}>
            {buttonName}
        </button>
    </>
  );
};

export default Button;
