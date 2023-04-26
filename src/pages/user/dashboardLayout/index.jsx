import React from "react";
import Home from "../home";
import Navbar from "../../../components/navbar/index.jsx";
import Footer from "../../../components/footer";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
