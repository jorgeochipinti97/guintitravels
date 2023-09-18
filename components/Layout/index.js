import Head from "next/head";
import React from "react";



export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="icon" type="image/x-icon" href="/favicon.png"/>

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>Guinti Travel</title>
      </Head>


      <main className="w-screen">{children}</main>
    </>
  );
};
