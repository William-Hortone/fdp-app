import React from "react";
import {
  Articles,
  Banner,
  BestProducts,
  Footer,
  Header,
  Presentation,
  Team,
} from "../../containers";

import { Infos, Navbar } from "../../components";

const Home = () => {
  return (
    <div className="app__home">
      <Infos />
      <Navbar cartColor='white' colorBorder='white' colorLink="#ffffff" />
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
