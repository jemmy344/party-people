import React from "react";
import { Search } from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

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
