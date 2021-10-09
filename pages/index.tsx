import React from "react";

import Header from "components/Header/Header";
import MainInfo from "components/MainInfo/MainInfo";
import Army from "components/Army/Army";
import Craft from "components/Craft/Craft";
import Activities from "components/Activities/Activities";
import Footer from "components/Footer/Footer";
import BaseLayout from "components/BaseLayout/BaseLayout";
import Roadmap from "components/Roadmap/Roadmap";
import Token from "components/Token/Token";

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