import React from "react";

import Header from "components/sections/Header/Header";
import MainInfo from "components/sections/MainInfo/MainInfo";
import Army from "components/sections/Army/Army";
import Craft from "components/sections/Craft/Craft";
import Activities from "components/sections/Activities/Activities";
import Footer from "components/sections/Footer/Footer";
import Container from "components/common/Container/Container";
import Roadmap from "components/sections/Roadmap/Roadmap";
import Token from "components/sections/Token/Token";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Header/>
        <MainInfo/>
      </Container>

      <Army/>

      <Container>
        <Craft/>
        <Activities/>
      </Container>

      <Token/>

      <Container>
        <Roadmap/>
      </Container>

      <Footer/>
    </Layout>
  )
}