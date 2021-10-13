import { useCallback, useEffect, useState } from "react";
import { HeaderLink, HeaderLinks } from "common/constants/HeaderLinks";

const initialState = [
  {id: HeaderLink.MAIN, isShow: true},
  {id: HeaderLink.GAMEPLAY, isShow: false},
  {id: HeaderLink.PLAY_TO_EARN, isShow: false},
  {id: HeaderLink.ROADMAP, isShow: false},
]

export function useVisibleSection() {
  const [allSection, setAllSection] = useState<typeof initialState>(initialState);
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);

  const checkSection = useCallback((element: any) => {
    const targetPosition = {
        top: window.scrollY + element.getBoundingClientRect().top,
        left: window.scrollX + element.getBoundingClientRect().left,
        right: window.scrollX + element.getBoundingClientRect().right,
        bottom: window.scrollY + element.getBoundingClientRect().bottom
      },

      windowPosition = {
        top: window.scrollY,
        left: window.scrollX,
        right: window.scrollX + document.documentElement.clientWidth,
        bottom: window.scrollY + document.documentElement.clientHeight
      };

    if (targetPosition.bottom > windowPosition.top &&
      targetPosition.top < windowPosition.bottom &&
      targetPosition.right > windowPosition.left &&
      targetPosition.left < windowPosition.right) {
      setCurrentSectionId(element.id);
      setAllSection(allSection.map(item => element.id === item.id ? ({id: element.id, isShow: true}) : ({id: item.id, isShow: false})));
    }
  }, [allSection, setAllSection]);

  useEffect(() => {
    window.addEventListener('scroll', function() {
      HeaderLinks.map((link) => {
        const section = document.getElementById(link.id);
        checkSection(section)
      }, []);
    })
  }, []);

  return {currentSectionId}
}