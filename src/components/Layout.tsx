import React from "react";
import Head from "next/head";

const Layout = ({children}: React.PropsWithChildren<any>) => {

  return (
    <>
      <Head>
        <title>Knightland</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <meta property="og:title" content="Win group raids, craft items and earn crypto" />
        <meta name="description" content="Online browser role-playing game with integrated blockchain technology" />
        <meta property="og:description" content="Online browser role-playing game with integrated blockchain technology" />
        <meta name="og:keywords" content="Crypto, online browser role-playing game, integrated blockchain technology"/>
        <meta name="og:image" content="https://knightland.vercel.app/meta.png" />
        <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"/>
        <script src="https://unpkg.com/aos@next/dist/aos.js"/>
      </Head>
      <script>
        AOS.init();
      </script>
      {children}
    </>
  );
};

export default Layout;