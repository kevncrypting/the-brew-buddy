const Bio = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-brown-200 p-6 rounded-xl">
        <div className="flex flex-col items-center gap-3">
          <img
            src={"/assets/headInCup.png"}
            alt="Picture of a head in a coffee cup"
            className="object-cover h-60 w-60 rounded-full drop-shadow-xl"
          />
          <p className="italic">Head-in-a-cup image courtesy of Zach, and indirectly our AI overlords</p>
        </div>
        <div className="flex flex-col p-6 gap-2">
          <h3 className="font-bold">About the author</h3>
          <p>
            The Brew Buddy &trade; was created by{" "}
            <span className="font-bold text-brown-900">Kevin Prachith</span> as
            a way to spice up his morning brew routine while also providing a
            space to practice morning mindfulness in the form of journaling.
          </p>
          <p>
            You can find some of his other creations on his{" "}
            <a
              href="https://github.com/kevncrypting"
              className="font-bold text-brown-900 hover:underline"
            >
              GitHub
            </a>
            , or follow his professional updates on his{" "}
            <a
              href="https://www.linkedin.com/in/tkprachith/"
              className="font-bold text-brown-900 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>

          <p className="italic">
            (This is Kevin writing this, and I don't know why I didn't just
            refer to myself in first person from the beginning, but &#129335;)
          </p>
        </div>
      </div>
      <p></p>
    </>
  );
};

export default Bio;
