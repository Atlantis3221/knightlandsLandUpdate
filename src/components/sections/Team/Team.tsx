import React, { memo } from "react";
import Text from "components/common/Text/Text";
import { HeaderLink } from "common/constants/HeaderLinks";

interface ITeamMember {
  src: string;
  name: string;
  role: string;
  url: string | null;
  description: string;
}

const data: ITeamMember[] = [
  {src: '/team/team1.png', name: 'Denis Ermolin', role: 'CEO', url: 'https://www.linkedin.com/in/imyourm8', description: '10 years of experience with previous notable stints at Animoca Brands and Polygon, developer by trade but a gamer at heart.'},
  {src: '/team/team2.png', name: 'Andrey Pavlychev', role: 'Head of Design', url: 'https://linkedin.com/in/drawnpro', description: '14 years of experience being a 2D and User Interface artist, specializing in artwork production for mobile and social network games, ex-Gameloft.'},
  {src: '/team/team3.png', name: 'Denis Savin', role: 'Fullstack Developer', url: 'https://www.linkedin.com/in/uniwertz/', description: '13 years of experience working with web technologies. Both with frontend and backend systems.'},
  {src: '/team/team4.png', name: 'Matvei', role: 'Lead Game Designer', url: 'https://www.linkedin.com/in/matvey-bobkov-a7970b223/ ', description: '5 years of production experience with CrazyLabs and Gameloft on Dungeon Hunter 5.'},
  {src: '/team/team5.png', name: 'Yan Sean', role: 'Community growth', url: null, description: 'Community builder by trade with a passion for DeFi, Games, and NFTs. His experience includes doing research and community growth for Coin98 Finance.'},
];

const Team = () => {
  return (
    <div data-aos="fade-up" className="flex flex-col justify-start w-full pb-36" id={HeaderLink.TEAM}>
      <Text type="h2" className="w-full justify-center text-center mb-10">Team</Text>
      <div className="flex w-full justify-center sm:flex-wrap lg:flex-nowrap md:justify-start flex-col items-center sm:flex-row">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col w-80 md:w-52 md:self-start items-center text-center mb-10 sm:mx-2">
            <div className="relative">
              <img src={item.src} className="mb-6" />
              {item.url && (
                <a href={item.url} target="_blank" className="flex w-full absolute justify-center cursor-pointer bottom-0">
                  <img src="/team/linkedin.svg" />
                </a>
              )}
            </div>
            <Text type="h4" className="mb-2 uppercase">{item.name}</Text>
            <Text type="h5" className="mb-2 flex justify-start ">{item.role}</Text>
            <Text fontSize={13} lineHeight="20px" color="#8A978C" className="h-20 md:h-40">{item.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Team);
