import React from "react";

import Header from "components/sections/Header/Header";
import MainInfo from "components/sections/MainInfo/MainInfo";
import Army from "components/sections/Army/Army";
import Craft from "components/sections/Craft/Craft";
import Activities from "components/sections/Events/Events";
import Footer from "components/sections/Footer/Footer";
import Container from "components/common/Container/Container";
import Roadmap from "components/sections/Roadmap/Roadmap";
import Token from "components/sections/Token/Token";
import Layout from "components/Layout";
import Team from "components/sections/Team/Team";
import Partners from "components/sections/Partners/Partners";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full">
        <Header/>

        <Container>
          <MainInfo/>
        </Container>

        <Army/>

        <Container disableVerticalPadding={true}>
          <Craft/>
          <Activities/>
        </Container>

        <Token/>

        <Container disableVerticalPadding={true}>
          {/*<Roadmap/>*/}
          <Team/>
          <Partners/>
        </Container>

        <Footer/>
      </div>
    </Layout>
  )
}