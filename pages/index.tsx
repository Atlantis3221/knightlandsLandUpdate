import React from "react";

import Header from '../components/Header/Header';
import MainInfo from '../components/MainInfo/MainInfo';
import Army from "../components/Army/Army";
import Craft from "../components/Craft/Craft";
import Activities from "../components/Activities/Activities";
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.root + " flex flex-col self-center sm:max-w-8xl"}>
      <Header/>
      <MainInfo/>
      <Army/>
      <Craft/>
      <Activities/>
    </div>
  )
}