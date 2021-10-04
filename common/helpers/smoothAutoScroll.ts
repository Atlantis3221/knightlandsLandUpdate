export const smoothAutoScroll = (id: string) => {
  return document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
};