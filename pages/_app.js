/** @format */

import "../styles/globals.css";
import { useCallback } from "react";
import { Layout } from "../scenes";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particles } from "../config/particles";

function MyApp({ Component, pageProps }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className="bg-[#000000]">
      <Particles
        className="fixed"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particles}
      />
      <div className="relative">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  );
}

export default MyApp;
