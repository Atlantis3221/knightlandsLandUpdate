import React from "react";

import Header from '../components/Header/Header';
import MainInfo from '../components/MainInfo/MainInfo';
import Army from "../components/Army/Army";
import Craft from "../components/Craft/Craft";
import Activities from "../components/Activities/Activities";

export default function Home() {
  return (
    <div className="flex flex-col self-center w-4/5" style={{padding: '36px 0'}}>
      <Header/>
      <MainInfo/>
      <Army/>
      <Craft/>
      <Activities/>
    </div>
  )
}