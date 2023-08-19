import React, { useState } from 'react';
import HeroSection from './hero'
import FamilyValueSection from './value'
import ProjectsPage from './projects'

const rpiPage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FamilyValueSection></FamilyValueSection>
      
      <div id="rpi_index_hardware" style={{ textAlign: "center", color: "#8DC215", fontSize: "3.2rem", fontWeight: "bold" }}>Browse RPi Projects</div>
      The Raspberry Pi platform boasts a large user base full of open-source and DIY enthusiasts, ranging from DIY beginners to career professionals.
      View our collection of Raspberry Pi contributor project guides below.
      <div style={{ color: "#8DC215", fontStyle: 'italic'}}>
      Note: Hover your mouse over the project category on the left hand side and click it to enter the relevant wiki pages. You can also hove your mouse over the project series name
      on the right hand side to have a glimpse of the products included in that series. 
      </div>
      <ProjectsPage></ProjectsPage>
      
      Updates to this page are in <a href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=30495963">in progress</a>. Stay tuned!
    </div>
  );
};

export default rpiPage;