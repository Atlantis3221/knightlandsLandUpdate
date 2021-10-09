import React, { useCallback, useMemo, useState } from "react";
import styles from "./styles.module.css";
import Button, { ButtonType } from "components/common/Button/Button";
import { useMatchMediaQuery } from "common/helpers/useMediaQuery";
import { Breakpoints } from "common/constants/Breakpoints";
import BaseLayout from "components/BaseLayout/BaseLayout";
import Supported from "components/Supported/Supported";
import FleshToken from "components/Token/parts/FleshToken";
import KLToken from "components/Token/parts/KLToken";
import { PLAY_TO_EARN } from "common/constants/HeaderLinks";

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
      <div className="flex justify-center col-start-1 col-span-full row-start-1" id={PLAY_TO_EARN}>
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => changeSection(Section.FLESH)}
            type={sectionType === Section.KL ? ButtonType.TERTIARY : ButtonType.PRIMARY}
            className="flex mr-2 items-center px-4 pt-2.5 pb-2.5"
            style={{width: 'max-content'}}
          >
            <img src="/flesh.png" className="mr-2.5" style={{width: 32, height: 32}}/>
            FLESH TOKEN
          </Button>

          <Button
            onClick={() => changeSection(Section.KL)}
            type={sectionType === Section.FLESH ? ButtonType.TERTIARY : ButtonType.PRIMARY}
            className="flex mr-2 items-center px-4 pt-2.5 pb-2.5"
            style={{width: 'max-content', color: '#000'}}
          >
            <img src="/kl.png" className="mr-2.5" style={{width: 32, height: 32}}/>
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
      <div className={styles.root + ' justify-center items-center flex self-center'}>
        <BaseLayout disableVerticalPadding={true}>
          {buttons}
          {section}
          <Supported/>
        </BaseLayout>
      </div>
    )
  }
  return (
    <div className="justify-center items-center flex self-center py-48">
      <BaseLayout disableVerticalPadding={true}>
        <div className="flex flex-col">
          {buttons}
          {section}
        </div>
        <Supported/>
      </BaseLayout>
    </div>
  )
}

export default Token;