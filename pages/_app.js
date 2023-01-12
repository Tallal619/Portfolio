/** @format */

import "../styles/globals.css";
import { useCallback } from "react";
import { Layout } from "../scenes";
import { Header, Footer } from "../components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particles } from "../config/particles";

function MyApp({ Component, pageProps }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="bg-[#434242]">
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
