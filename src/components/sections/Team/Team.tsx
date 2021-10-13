import React, { memo } from "react";
import Text from "components/common/Text/Text";

const Team = () => {
  return (
    <div className="flex flex-col justify-start w-full px-12">
      <Text type="h2" className="w-full justify-center text-center mb-10">Team</Text>
      <div className="flex w-full justify-center flex-col items-center lg:justify-start md:flex-row">
        <div className="flex flex-col items-center text-center w-64 md:w-72 mb-10 md:mr-4">
          <img src="/team/team1.png" className="mb-6" />
          <Text type="h4" className="mb-2 uppercase">Denis Ermolin</Text>
          <Text type="h5" className="h-20">10 years of experience. Animoca Brands. Coins & Steel. Polygon Technology</Text>
        </div>
        <div className="flex flex-col items-center text-center w-64 md:w-72 mb-10">
          <img src="/team/team2.png" className="mb-6" />
          <Text type="h4" className="mb-2 uppercase">Andrey Pavlychev</Text>
          <Text type="h5" className="h-20">14 years of experience. Gameloft. Coins & Steel</Text>
        </div>
      </div>
    </div>
  );
};

export default memo(Team);