import React, { memo } from "react";
import Text from "components/common/Text/Text";
import { HeaderLink } from "common/constants/HeaderLinks";

const data = [
  {src: '/team/team1.png', name: 'Denis Ermolin', description: '10 years of experience. Animoca Brands. Coins & Steel. Polygon Technology'},
  {src: '/team/team2.png', name: 'Andrey Pavlychev', description: '14 years of experience. Gameloft. Coins & Steel'},
];

const Team = () => {
  return (
    <div className="flex flex-col justify-start w-full px-12" id={HeaderLink.TEAM}>
      <Text type="h2" className="w-full justify-center text-center mb-10">Team</Text>
      <div className="flex w-full justify-center flex-col items-center lg:justify-start md:flex-row">
        {data.map((item, i) => (
          <div key={i} className={"flex flex-col items-center text-center w-64 md:w-72 mb-10 md:mr-4" + (i === 0 ? ' md:mr-4' : '')}>
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