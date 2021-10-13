export enum HeaderLink {
  MAIN = "0",
  GAMEPLAY = "1",
  PLAY_TO_EARN = "2",
  ROADMAP = "3"
}

interface IHeaderLink {
  id: string;
  title: string;
  paddingTop?: string;
  isVisible?: boolean;
}

export const HeaderLinks: IHeaderLink[]  = [
  {id: HeaderLink.MAIN, title: '', paddingTop: '-200px'},
  {id: HeaderLink.GAMEPLAY, title: 'Gameplay', paddingTop: '-140px', isVisible: true},
  {id: HeaderLink.PLAY_TO_EARN, title: 'Play to earn', paddingTop: '-20px', isVisible: true},
  {id: HeaderLink.ROADMAP, title: 'Roadmap', paddingTop: '-140px', isVisible: true},
];
