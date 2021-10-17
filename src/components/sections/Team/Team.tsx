import React, { memo } from "react";
import Text from "components/common/Text/Text";
import { HeaderLink } from "common/constants/HeaderLinks";

const data = [
  {src: '/team/team1.png', name: 'Denis Ermolin', description: '10 years of experience. Animoca Brands. Coins & Steel. Polygon Technology'},
  {src: '/team/team2.png', name: 'Andrey Pavlychev', description: '14 years of experience. Gameloft. Coins & Steel'},
  {src: '/team/team3.png', name: 'Denis Savin', description: ''},
  {src: '/team/team4.png', name: 'Matvei', description: ''},
  {src: '/team/team5.png', name: 'Yan Sean', description: ''},
];

const Team = () => {
  return (
    <div className="flex flex-col justify-start w-full py-36" id={HeaderLink.TEAM}>
      <Text type="h2" className="w-full justify-center text-center mb-10">Team</Text>
      <div className="flex w-full justify-center sm:flex-wrap md:justify-start flex-col items-center sm:flex-row">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col w-80 md:w-52 items-center text-center mb-10 sm:mx-2">
            <img src={item.src} className="mb-6" />
            <Text type="h4" className="mb-2 uppercase">{item.name}</Text>
            <Text type="h5" className="h-20">{item.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Team);