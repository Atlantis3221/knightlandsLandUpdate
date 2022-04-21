import React from "react";
import Slider from "./Slider/Slider/Slider";
import Item from "./Slider/Item/Item";

const movies = [
  {
    id: 1,
    image: "/army/Ice-creature.png",
    imageBg: "/army/Ice-creature.png",
    title: "1983",
  },
  {
    id: 2,
    image: "/army/Ice-creature.png",
    imageBg: "/army/Ice-creature.png",
    title: "Russian doll",
  },
  {
    id: 3,
    image: "/army/Ice-creature.png",
    imageBg: "/army/Ice-creature.png",
    title: "The rain",
  },
  {
    id: 4,
    image: "/army/Archer.png",
    imageBg: "/army/Ice-creature.png",
    title: "Sex education",
  },
  {
    id: 5,
    image: "/army/Ice-creature.png",
    imageBg: "/army/Ice-creature.png",
    title: "Elite",
  },
  {
    id: 6,
    image: "/army/Mushroom-knight.png",
    imageBg: "/army/Mushroom-knight.png",
    title: "Black mirror",
  },
];

const ArmySlider = () => {
  return (
    <div className="app">
      <Slider>
        {movies.map((movie) => (
          <Item movie={movie} key={movie.id}>
            item1
          </Item>
        ))}
      </Slider>
    </div>
  );
};

export default ArmySlider;
