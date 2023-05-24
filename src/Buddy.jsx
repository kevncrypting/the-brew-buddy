import { useState } from "react";
import CoffeeCategory from "./CoffeeCategory.jsx";

const Buddy = () => {
  const [coffeeWaterRatio, setCoffeeWaterRatio] = useState("test");
  const [temperature, setTemperature] = useState();
  const [grindSizeBrewRatio, setGrindSizeBrewRatio] = useState();
  const [orientationBloomTime, setOrientationBloomTime] = useState();
  const [stirring, setStirring] = useState();

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
      <CoffeeCategory
        categoryTitle={`coffee:water ratio`}
        categoryInfo={coffeeWaterRatio}
      />
      <CoffeeCategory
        categoryTitle={`temperature`}
        categoryInfo={temperature}
      />
      <CoffeeCategory
        categoryTitle={`grind size/brew ratio`}
        categoryInfo={grindSizeBrewRatio}
      />
      <CoffeeCategory
        categoryTitle={`orientation/bloom time`}
        categoryInfo={orientationBloomTime}
      />
      <CoffeeCategory categoryTitle={`stirring`} categoryInfo={stirring} />
    </>
  );
};

export default Buddy;
