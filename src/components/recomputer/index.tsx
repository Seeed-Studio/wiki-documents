import React, { useState } from 'react';
import HardwarePage from './hardware'
import SoftwarePage from './software'

const computerPageA = () => {
  return (
    <div>
      

      <div id="NVIDIA_index_hardware" style={{ textAlign: "center", color: "#8DC215", fontSize: "3.2rem", fontWeight: "bold" }}>Jetpack Flash and Hardware Usage</div>
      Most of our reComputer Jetson products come with NVIDIA JetPack system pre-installed on the device. However, if you want to flash these devices again or flash other devices 
      which do not come with JetPack system, you can follow the below links for step-by-step guidance. We have also included guidance on how to use different hardware peripherals
      on these NVIDIA Jetson powered devices. 
      <div style={{ color: "#8DC215", fontStyle: 'italic'}}>
      Note: Hover your mouse over the product name on the left hand side and click it to enter the relevant wiki pages. Also hover your mouse over the product series name
      on the right hand side to have a glimpse of the products included in that series. 
      </div> 
      <HardwarePage></HardwarePage>
      <div id="NVIDIA_index_software" style={{ textAlign: "center", color: "#8DC215", fontSize: "3.2rem", fontWeight: "bold" }}>AI Developer Tools</div>
      After you have access to an NVIDIA Jetson device, you can start developing different AI applications to suite different scenarios. The very first step of an AI project is to 
      obtain data for training. Then you need to label the data and train an AI model. After that, you can optimize this model to make sure the model runs the best on the selected
      device. Finally, you deploy this AI model to the NVIDIA Jetson device so that you can start building applications. You can also manage these applications remotely so that,
      you can track the device performance metrics to ensure the device is performing well in the field.
      We have prepared wiki guides that covers the entire AI workflow as explained above using different software providers and tools. 
      <div style={{ color: "#8DC215", fontStyle: 'italic'}}>
      Note: Hover your mouse over the software tool on the left hand side and click it to enter the relevant wiki pages. Also, hover your mouse over the task on the    
      right hand columns
      to have a glimpse of the software providers and tools relevant for that task.
      </div>
      <SoftwarePage></SoftwarePage>
      Updates to this page are in <a href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=30495963">in progress</a>. Stay tuned!
    </div>
  );
};

export default computerPageA;