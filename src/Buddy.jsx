import { useState } from "react";
import CoffeeCategory from "./CoffeeCategory.jsx";
import Button from "./Button.jsx";

const Buddy = () => {
  const [userSavedValue, setUserSavedValue] = useState(Array(7).fill(null));
  const [refreshCounter, setRefreshCounter] = useState(0);
  const [coffeeAmount, setCoffeeAmount] = useState([15, 16, 17, 18]);
  const [brewRatio, setBrewRatio] = useState([12, 15, 16, 17]);
  const [temperature, setTemperature] = useState([170, 180, 195, 205, 212]);
  const [grindSize, setGrindSize] = useState(["medium", "medium-fine", "fine"]);
  const [orientation, setOrientation] = useState(["standard", "inverted"]);
  const [bloomTime, setBloomTime] = useState([30, 45, 60]);
  const [stirring, setStirring] = useState([
    "1 time",
    "2 times, with the second stir 30 seconds after bloom",
  ]);
  const [brewTime, setBrewTime] = useState([120, 150, 180, 210, 240]);

  let randomizer = (arrayName) => {
    return arrayName[Math.floor(Math.random() * arrayName.length)];
  };

  let staticBrewRatio = randomizer(brewRatio);
  let staticCoffeeAmount = randomizer(coffeeAmount);

  const handleClick = () => {
    setRefreshCounter(refreshCounter + 1);
  };

  return (
    <>
      <div className="px-6 py-3">
        <p>
          Welcome to The Brew Buddy! This tool is aimed towards the indecisive
          and the adventurous AeroPress coffee brewer, providing randomized
          recipes for you to keep your morning cup ever-changing. Who knows, you
          may accidentally stumble upon greatness! Click below to generate a
          random recipe.
        </p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={handleClick}
          className="text-2xl px-6 py-3 rounded-lg bg-brown-500 text-brown-50 hover:bg-brown-700 hover:drop-shadow"
        >
          generate a recipe
        </button>
        <div className="odd:bg-brown-50">
          <CoffeeCategory
            categoryTitle={`grind size/brew ratio`}
            categoryInfo={`${randomizer(grindSize)}, 1:${staticBrewRatio}`}
          />
          <CoffeeCategory
            categoryTitle={`coffee:water ratio`}
            categoryInfo={`${staticCoffeeAmount} grams of coffee : ${
              staticBrewRatio * staticCoffeeAmount
            } mL of water`}
            addClasses={`bg-brown-50`}
          />
          <CoffeeCategory
            categoryTitle={`temperature`}
            categoryInfo={`${randomizer(temperature)} degrees Fahrenheit`}
          />
          <CoffeeCategory
            categoryTitle={`orientation/bloom time`}
            categoryInfo={`${randomizer(orientation)}, bloom for ${randomizer(
              bloomTime
            )} seconds then stir`}
            addClasses={`bg-brown-50`}
          />
          <CoffeeCategory
            categoryTitle={`stirring`}
            categoryInfo={`Stir ${randomizer(stirring)}`}
          />
          <CoffeeCategory
            categoryTitle={`brew time`}
            categoryInfo={`Total brew time should be ${randomizer(
              brewTime
            )} seconds`}
            addClasses={`bg-brown-50`}
          />
        </div>
        <div className="p-6">
          {" "}
          {/* This div conditionally displayed messages based on how many times the user has regenerated a new recipe */}
          {refreshCounter !== 0 ? (
            <span>You have refreshed the recipe {refreshCounter} times! </span>
          ) : null}
          {refreshCounter > 5 ? (
            <span>Are you feeling indecisive today? </span>
          ) : null}
          {refreshCounter > 15 ? (
            <span className="text-red-500">
              A little click happy aren't you...{" "}
            </span>
          ) : null}
          {refreshCounter > 30 ? (
            <span>
              Alright maybe you should decide soon, I'm worried about you!
            </span>
          ) : null}
          {refreshCounter > 60 ? (
            <h4 className="text-2xl font-bold">
              Listen, there aren't any high scores here!
            </h4>
          ) : null}
          {refreshCounter > 75 ? (
            <h5 className="text-3xl font-bold">
              There aren't any more messages for you...
            </h5>
          ) : null}
          {refreshCounter > 100 ? (
            <h6 className="text-4xl font-bold">YOU CAN STOP NOW!!</h6>
          ) : null}
        </div>
        <button
          onClick={handleClick}
          className="text-2xl px-6 py-3 rounded-lg bg-brown-500 text-brown-50 hover:bg-brown-700 hover:drop-shadow"
        >
          add a thought with this recipe
        </button>
      </div>
    </>
  );
};

export default Buddy;
