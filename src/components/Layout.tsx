import React from "react";
import Head from "next/head";

const Layout = ({children}: React.PropsWithChildren<any>) => {

  return (
    <>
      <Head>
        <title>Knight Lands</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        {/*<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />*/}
        <meta property="og:title" content="Own Land,Craft Weapons, Earn Crypto" />
        <meta name="description" content="Get Ready For The Worlds First MMORPG On Terra" />
        <meta property="og:description" content="Get Ready For The Worlds First MMORPG On Terra" />
        <meta name="og:keywords" content="Crypto, MMORPG, Terra, NFT, Token"/>
        <meta name="og:image" content="/meta.png" />
        <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"/>
        {/*<script src="https://unpkg.com/aos@next/dist/aos.js"/>*/}
      </Head>
      {children}
    </>
  );
};

export default Layout;