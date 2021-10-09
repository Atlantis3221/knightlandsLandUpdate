import React from "react";

import Header from "components/sections/Header/Header";
import MainInfo from "components/sections/MainInfo/MainInfo";
import Army from "components/sections/Army/Army";
import Craft from "components/sections/Craft/Craft";
import Activities from "components/sections/Activities/Activities";
import Footer from "components/sections/Footer/Footer";
import BaseLayout from "components/common/BaseLayout/BaseLayout";
import Roadmap from "components/sections/Roadmap/Roadmap";
import Token from "components/sections/Token/Token";

export default function Home() {
  return (
    <>
      <BaseLayout>
        <Header/>
        <MainInfo/>
      </BaseLayout>

      <Army/>

      <BaseLayout>
        <Craft/>
        <Activities/>
      </BaseLayout>

      <Token/>

      <BaseLayout>
        <Roadmap/>
      </BaseLayout>

      <Footer/>
    </>
  )
}