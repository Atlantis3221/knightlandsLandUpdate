export enum HeaderLink {
  MAIN = "0",
  GAMEPLAY = "1",
  PLAY_TO_EARN = "2",
  ROADMAP = "3",
  TEAM = "4",
  PARTNERS = "5"
}

interface IHeaderLink {
  id: string;
  title: string;
  paddingTop?: string;
  isVisible?: boolean;
}

export const HeaderLinks: IHeaderLink[]  = [
  {id: HeaderLink.MAIN, title: '', paddingTop: '-200px'},
  {id: HeaderLink.GAMEPLAY, title: 'Gameplay', paddingTop: '-200px', isVisible: true},
  {id: HeaderLink.PLAY_TO_EARN, title: 'Play to earn', paddingTop: '-80px', isVisible: true},
  {id: HeaderLink.ROADMAP, title: 'Roadmap', paddingTop: '-200px', isVisible: true},
  {id: HeaderLink.TEAM, title: 'Team', paddingTop: '-300px', isVisible: true},
  {id: HeaderLink.PARTNERS, title: 'Partners', paddingTop: '-140px', isVisible: true},
];
