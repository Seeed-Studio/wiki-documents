import React, { useState } from 'react';
import HardwarePage from './hardware'
import SoftwarePage from './software'

const computerPageA = () => {
  return (
    <div>
      Updates to this page is <a href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=30495963">in progress</a>, you can check this page with <a href="#NVIDIA_index_hardware">Jetpack Flash and Series Guideline</a> and <a href="#NVIDIA_index_software">Software wit AI Methods</a>
      <div id="NVIDIA_index_hardware" style={{ textAlign: "center", color: "#8DC215", fontSize: "3.2rem", fontWeight: "bold" }}>Jetpack Flash and Series Guideline</div>
      <HardwarePage></HardwarePage>
      <div style={{ textAlign: "center", fontSize: "1.2rem", fontWeight: "bold"  }}>
        More Information:
      </div>
      <div id="NVIDIA_index_software" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold"  }}>
        For other carrier boards jetpack flash: <a href="https://wiki.seeedstudio.com/reComputer_A603_Flash_System/">A603</a>, <a href="https://wiki.seeedstudio.com/reComputer_A607_Flash_System/">A607</a>, <a href="https://wiki.seeedstudio.com/reComputer_A203_Flash_System/">A203</a>, <a href="https://wiki.seeedstudio.com/reComputer_A205_Flash_System/">A205</a>, <a href="https://wiki.seeedstudio.com/Jetson-Mate/">Jetson Mate</a> carrier board.
      </div>
      <div id="NVIDIA_index_software" style={{ textAlign: "center", fontSize: "1rem", fontWeight: "bold"  }}>
        For discontinued products jetpack flash: <a href="https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/">reComputer J1010</a>, <a href="https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/">reComputer J1020 v1</a>
      </div>
      <div style={{ textAlign: "center", color: "#8DC215", fontSize: "3.2rem", fontWeight: "bold" }}>Software with AI Methods</div>
      <SoftwarePage></SoftwarePage>
    </div>
  );
};

export default computerPageA;