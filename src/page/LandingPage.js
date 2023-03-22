import React from "react";
import Populardestinations from "../components/PopularDesination";
import { Search } from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div>
        <Search />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
