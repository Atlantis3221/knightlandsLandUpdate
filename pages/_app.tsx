import React, { useEffect } from "react";
import "styles/globals.css";
import "tailwindcss/tailwind.css";

interface IProps {
  Component: React.ComponentType;
  pageProps: any;
}

const MyApp = (props: IProps) => {
  const {Component, pageProps} = props;

  useEffect(() => {
    // if(typeof document !== 'undefined') {
    //   document.body.style.overflowX = 'hidden';
    // }
    const appHeight = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }
    window.addEventListener("resize", appHeight)
    appHeight()
    return () => {
      window.removeEventListener("resize", appHeight)
    }
  }, [])

  return <Component {...pageProps} />
};

export default MyApp;
