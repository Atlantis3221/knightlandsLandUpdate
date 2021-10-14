import React, { useCallback, useMemo, useState } from "react";
import styles from "./styles.module.css";
import Button, { ButtonType } from "components/common/Button/Button";
import { useMatchMediaQuery } from "common/helpers/useMediaQuery";
import { Breakpoints } from "common/constants/Breakpoints";
import Container from "components/common/Container/Container";
import Supported from "components/sections/Token/parts/Supported";
import FleshToken from "components/sections/Token/parts/FleshToken";
import KLToken from "components/sections/Token/parts/KLToken";
import { HeaderLink } from "common/constants/HeaderLinks";
import TokenBackground from "components/svg/TokenBackground/TokenBackground";

enum Section {
  FLESH,
  KL
}

const Token = () => {
  const isXl = useMatchMediaQuery(`(min-width: ${Breakpoints.xl}px)`)

  const [sectionType, setSectionType] = useState(Section.FLESH);

  const changeSection = useCallback((section: Section) => {
    setSectionType(section);
  }, [setSectionType]);

  const buttons = useMemo(() => {
    return (
      <div className="flex justify-center relative col-start-1 col-span-full row-start-1" id={HeaderLink.PLAY_TO_EARN}>
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => changeSection(Section.FLESH)}
            type={sectionType === Section.KL ? ButtonType.TERTIARY : ButtonType.PRIMARY}
            className="flex mr-2 items-center"
            style={{width: 'max-content'}}
          >
            <img src="/common/flesh.png" className="mr-2.5" style={{width: 32, height: 32}}/>
            FLESH TOKEN
          </Button>

          <Button
            onClick={() => changeSection(Section.KL)}
            type={sectionType === Section.FLESH ? ButtonType.TERTIARY : ButtonType.PRIMARY}
            className="flex items-center"
            style={{width: 'max-content'}}
          >
            <img src="/common/kl.png" className="mr-2.5" style={{width: 32, height: 32}}/>
            KL TOKEN
          </Button>
        </div>
      </div>
    )
  }, [sectionType]);

  const section = useMemo(() => {
    if(sectionType === Section.FLESH) {
      return <FleshToken/>
    }

    return <KLToken/>
  }, [sectionType]);

  if(isXl) {
    return (
      <div className={'justify-center relative items-center flex self-center'}>
        <TokenBackground/>
        <Container disableVerticalPadding={true}>
          {buttons}
          {section}
          <Supported/>
        </Container>
      </div>
    )
  }
  return (
    <div className="justify-center items-center flex self-center py-36">
      <Container disableVerticalPadding={true}>
        <div className="flex flex-col">
          {buttons}
          {section}
        </div>
        <Supported/>
      </Container>
    </div>
  )
}

export default Token;