import React from "react";
import Header from "../components/Header";
import Main from "../components/Home/Main";
import CalltoActionSection from "../../../frontend/src/components/homeComponents/CalltoActionSection";
import Sidebar from "./../components/sidebar";

const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <CalltoActionSection />
        <Main />
      </main>
    </>
  );
};

export default HomeScreen;
