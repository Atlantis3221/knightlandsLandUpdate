import React from "react";

import Header from "../src/components/Header/Header";
import MainInfo from "../src/components/MainInfo/MainInfo";
import Army from "../src/components/Army/Army";
import Craft from "../src/components/Craft/Craft";
import Activities from "../src/components/Activities/Activities";
import Footer from "../src/components/Footer/Footer";
import BaseLayout from "../src/components/BaseLayout/BaseLayout";
import Supported from "../src/components/Supported/Supported";
import Roadmap from "../src/components/Roadmap/Roadmap";

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
        <Supported/>
        <Roadmap/>
      </BaseLayout>
      <Footer/>
    </>
  )
}