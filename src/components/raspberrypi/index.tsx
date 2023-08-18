import React, { useState } from 'react';
import ProjectsPage from './projects'
import SoftwarePage from './software'

const rpiPage = () => {
  return (
    <div>
      

      <div id="rpi_index_hardware" style={{ textAlign: "center", color: "#8DC215", fontSize: "3.2rem", fontWeight: "bold" }}>Browse RPi Projects</div>
      The Raspberry Pi platform boasts a large user base full of open-source and DIY enthusiasts, ranging from DIY beginners to career professionals.
      View our collection of Raspberry Pi contributor project guides below.
      <div style={{ color: "#8DC215", fontStyle: 'italic'}}>
      Note: Hover your mouse over the project category on the left hand side and click it to enter the relevant wiki pages. You can also hove your mouse over the project series name
      on the right hand side to have a glimpse of the products included in that series. 
      </div>
      <ProjectsPage></ProjectsPage>
      {/* <div id="rpi_index_software" style={{ textAlign: "center", color: "#8DC215", fontSize: "3.2rem", fontWeight: "bold" }}>AI Developer Tools</div>
      After you have access to an rpi Jetson device, you can start developing different AI applications to suite different scenarios. The very first step of an AI project is to 
      obtain data for training. Then you need to label the data and train an AI model. After that, you can optimize this model to make sure the model runs the best on the selected
      device. Finally, you deploy this AI model to the rpi Jetson device so that you can start building applications. You can also manage these applications remotely so that,
      you can track the device performance metrics to ensure the device is performing well in the field.
      We have prepared wiki guides that covers the entire AI workflow as explained above using different software providers and tools. 
      <div style={{ color: "#8DC215", fontStyle: 'italic'}}>
      Note: Hover your mouse over the software tool on the left hand side and click it to enter the relevant wiki pages. Also, hover your mouse over the task on the    
      right hand columns
      to have a glimpse of the software providers and tools relevant for that task.
      </div>
      <SoftwarePage></SoftwarePage> */}
      Updates to this page are in <a href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=30495963">in progress</a>. Stay tuned!
    </div>
  );
};

export default rpiPage;