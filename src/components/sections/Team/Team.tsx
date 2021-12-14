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
  { src: '/team/team1.png', name: 'Denis Ermolin', role: 'CEO, Senior Software Engineer', url: 'https://www.linkedin.com/in/imyourm8', description: '10 years of experience with previous notable stints at Animoca Brands and Polygon, developer by trade but a gamer at heart.' },
  { src: '/team/team5.png', name: 'Hamilton Gilpin', role: 'CMO', url: "https://www.linkedin.com/in/hamilton-gilpin-470538171/", description: '6 years of experience in Crypto Marketing in projects like eSports Org Management and Altcoin Investment. Built and runs Bitcoin Beats YouTube channel with successful conversion funnels. Heavily involved in the low cap altcoin space as a marketing advisor' },
  { src: '/team/team2.png', name: 'Andrey Pavlychev', role: 'Head of Design', url: 'https://linkedin.com/in/drawnpro', description: '14 years of experience being a 2D and User Interface artist, specializing in artwork production for mobile and social network games, ex-Gameloft.' },
  { src: '/team/team6.png', name: 'Vitaly Mikhailovsky', role: 'Project Lead', url: "https://www.linkedin.com/in/snekflimes/", description: '5 years of project management for software development for business process optimization. 6 years of work as a game designer, level designer, as well as experience in project development management in the gaming industry.' },
  { src: '/team/team7.png', name: 'Martin Isla', role: 'Game Developer', url: null, description: '7 years of experience making video games that range from tiny experiences to MMOs for mobile, PC and VR platforms. Passionate about gameplay programming and making things feel good.' },
  { src: '/team/team8.png', name: 'Joaquin Gaviot', role: 'Game Developer', url: null, description: 'Computer Engineer with over 3 years as a game developer. Problem solving expert, experienced in VR and complex algorithmics' },
  { src: '/team/team9.png', name: 'Dmitry Gontarev', role: 'Senior Game Designer', url: "https://www.linkedin.com/in/dmitry-gontarev-388423155/", description: 'Four years of experience in mobile games development. Worked on such games as Shadow Fight 3, The secret society' },
  { src: '/team/team10.png', name: 'Matias Paredes', role: 'Game Developer', url: null, description: '6 years of game design experience working in 2D, 3D and VR games for mobile and PC platforms' },
  { src: '/team/team3.png', name: 'Denis Savin', role: 'Fullstack Developer', url: 'https://www.linkedin.com/in/uniwertz/', description: '13 years of experience working with web technologies. Both with frontend and backend systems.' },
  { src: '/team/team4.png', name: 'Yan Sean', role: 'Community growth', url: null, description: 'Community builder by trade with a passion for DeFi, Games, and NFTs. His experience includes doing research and community growth for Coin98 Finance.' }
];

const Team = () => {
  return (
    <div data-aos="fade-up" className="flex flex-col justify-start w-full pb-36 huge:pb-20" id={HeaderLink.TEAM}>
      <Text type="h2" className="w-full justify-center text-center mb-10">Team</Text>
      <div className="flex sm:flex-wrap justify-center md:justify-around  xl:justify-center mx-auto flex-col w-full items-center sm:flex-row">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col w-80 md:w-48 xl:w-52 md:self-start items-center text-center mb-10 sm:mx-2">
            <div className="relative">
              <img src={item.src} className="mb-6" />
              {item.url && (
                <a href={item.url} target="_blank" className="flex w-full absolute justify-center cursor-pointer bottom-0">
                  <img src="/team/linkedin.svg" />
                </a>
              )}
            </div>
            <Text type="h4" className="mb-2 uppercase font-bold">{item.name}</Text>
            <Text type="h5" className="mb-2 flex justify-start ">{item.role}</Text>
            <Text fontSize={13} lineHeight="20px" color="white" className="min-h-20 md:h-40">{item.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Team);
