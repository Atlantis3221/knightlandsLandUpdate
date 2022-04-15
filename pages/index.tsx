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
import Sequel from "components/sections/Sequel/Sequel";
import Prizes from "components/sections/MainInfo/Prizes/Prizes";
import Classes from "components/sections/MainInfo/Classes/Classes";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full">
        <Header />
        <div className="relative top-0 left-0">
          <img src="/common/background.png" className="absolute z-1"/>
        </div>
        <div className="relative bottom-0 left-0">
          <img src="/common/background2.png" className="absolute z-0"/>
        </div>
        <div className=" overflow-hidden">
          <Container>
            <MainInfo />
          </Container>
        </div>

        <div className=" m-0">
        <Classes />
        </div>

        <Token />
        <Sequel />
        <Container disableVerticalPadding={true}>
          <Prizes />
        </Container>

        <Army />

        <Container disableVerticalPadding={true}>
          <Craft />
          {/* <Activities /> */}
        </Container>

        <Container disableVerticalPadding={true}>
          <Roadmap />
          <Team />
          <Partners />
        </Container>

        <Footer />
      </div>
    </Layout>
  )
}