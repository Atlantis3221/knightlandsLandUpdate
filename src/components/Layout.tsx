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
        <meta property="og:title" content="Win group raids, craft items and earn crypto" />
        <meta name="description" content="Online browser role-playing game with integrated blockchain technology" />
        <meta property="og:description" content="Online browser role-playing game with integrated blockchain technology" />
        <meta name="og:keywords" content="Crypto, online browser role-playing game, integrated blockchain technology"/>
        <meta name="og:image" content="https://knightland.vercel.app/meta.png" />
      </Head>
      {children}
    </>
  );
};

export default Layout;