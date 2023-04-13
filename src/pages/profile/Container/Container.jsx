import React from "react";
import AboutMe from "./AboutMe";
import CipherMap from "./CipherMap";
import OnTheWeb from "./OnTheWeb";
import ProfessionalInformation from "./ProfessionalInformation";
import Password from "./Password";
import Interests from "./Interests";

const Container = () => {
  return (
    <div>
      <AboutMe />
      <CipherMap />
      <OnTheWeb />
      <ProfessionalInformation />
      <Password />
      <Interests />
    </div>
  );
};

export default Container;
