import React from "react";
import {
  Header,
  Articles,
  Banner,
  BestProducts,
  Footer,
  Presentation,
  Team,
} from "../../containers";

import { Navbar, Infos } from "../../components";

const Home = () => {
  return (
    <div className="app__home">
      <Infos />
      <Navbar />
      <Header />
      <Presentation />
      <BestProducts />
      <Articles />
      <Team />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
