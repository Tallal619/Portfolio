/** @format */

import Head from "next/head";
import { Fade } from "react-reveal";
import { Intro } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full h-screen justify-center items-center">
        <Fade bottom>
          <Intro />
        </Fade>
      </div>
    </div>
  );
}