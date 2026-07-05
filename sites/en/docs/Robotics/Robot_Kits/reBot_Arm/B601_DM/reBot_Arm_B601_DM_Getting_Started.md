---
description: This guide helps you safely get started with the reBot Arm B601-DM, including kit selection, power checks, assembly, motor ID setup, calibration, and MotorBridge configuration.
title: reBot Arm B601-DM Quick Start
keywords:
  - reBot
  - B601-DM
  - Robotic Arm
  - Robot
  - LeRobot
  - Pinocchio
  - 6 DOF
slug: /rebot_b601_dm_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-07-04
  author: ZhuYaohui
createdAt: '2026-04-13'
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/
---

# Getting Started with reBot Arm B601-DM

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Bring reBot Arm B601-DM online safely, from unboxing to calibration</h2>
    <p>This guide is organized around the real first-time setup flow: identify your kit type, check the power supply, assemble the arm if needed, write motor IDs, calibrate the zero position, and run your first MotorBridge test.</p>
    <div className="hero-actions">
      <a href="#start-path">Choose your setup path</a>
      <a href="#motorbridge">Jump to MotorBridge</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Recommended reading path</strong>
    <span>Pre-assembled kit: skip assembly and motor ID setup. Start from Step 3.</span>
    <span>DIY kit: follow Step 1 → Step 2 → Step 3 in order.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Warning: Clear the Robot Workspace Before Running</strong>
    <p>
      Before running any program that moves the robotic arm, clear all valuable items,
      fragile objects, tools, cables, and unrelated objects within a <strong>1-meter radius</strong>
      of the robot workspace. During debugging and operation, personnel must stay outside
      the robot motion range.
    </p>
    <ul>
      <li>Do not touch joints, motors, links, the gripper, or the end effector after the robotic arm is powered on.</li>
      <li>Before calibration, teleoperation, IK control, trajectory control, gravity compensation, ROS2 / MoveIt execution, or visual grasping, make sure the arm base is firmly fixed.</li>
      <li>If abnormal motion, noise, vibration, loose cables, poor power contact, or communication loss occurs, stop the program immediately and power off the system before inspection.</li>
      <li>Always power off the system before plugging or unplugging motor cables, CAN cables, USB2CAN / PCAN-USB adapters, XT30 connectors, or power connectors.</li>
    </ul>
  </div>
</div>


<div className="quick-note">
  <strong>Safety reminder:</strong> reBot Arm setup involves a 24V power supply, enabled motors, and moving mechanical joints. Work on a stable desk, keep at least 1 meter away during debugging, and always power off before plugging or unplugging motors or XT30 connectors.
</div>

<nav className="doc-nav" aria-label="reBot B601-DM quick navigation">
  <a href="#start-path">Setup Path</a>
  <a href="#power">Power Check</a>
  <a href="#assembly">Step 1 Assembly</a>
  <a href="#motor-id">Step 2 Motor IDs</a>
  <a href="#motorbridge">Step 3 Calibration</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="start-path" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>First, identify which kit you have</h2>
    <p>Different kit configurations require different setup steps. Choosing the correct path first helps avoid repeated work and prevents unsafe operations.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#motorbridge">
      <b>I purchased a pre-assembled kit</b>
      <span>Skip Step 1 and Step 2. Check the harness and power supply, then go directly to Step 3 for zero-point calibration and the first motion test.</span>
      <em>Start from Step 3</em>
    </a>
    <a className="path-card" href="#assembly">
      <b>I purchased a DIY kit or need to assemble it myself</b>
      <span>Assemble the mechanical structure first, then write each motor CAN ID / Master ID, and finally run zero-point calibration.</span>
      <em>Follow Step 1 → 2 → 3</em>
    </a>
  </div>

  <div className="tip-box">Virtual machines have been verified to have insufficient performance for running the demo and may introduce configuration issues. We recommend using a physical Ubuntu machine to control the robotic arm.</div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>Project and purchasing options</h2>
    <p>The reBot Arm project is open-sourced on <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank">GitHub</a>. This guide walks you through the basic B601-DM workflow, from assembly to operation.</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM" />
  </div>

  <div className="badge-row">
    <span>Python 3.10+</span>
    <span>Linux / Ubuntu</span>
    <span>Pinocchio</span>
    <span>MotorBridge</span>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">Get reBot Arm B601-DM</a>
  </div>

  | Configuration | Body | Gripper | Motors | Structure | Recommended for |
  |:---|:---:|:---:|:---:|:---:|:---|
  | **Complete Kit** | ✅ | ✅ | ✅ | ✅ | Users who want the full robotic arm experience |
  | **Gripper Only** | ❌ | ✅ | ❌ | ❌ | Users who already have an arm and only need an end effector |
  | **Body Only (Structure)** | ✅ | ❌ | ❌ | ✅ | Users who already have motors and want to build the structure |
  | **Body Only (Motors)** | ✅ | ❌ | ✅ | ❌ | Users who need the motorized arm body |
</section>

<section id="power" className="section-card warning-section">
  
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<div className="section-title">
    <span>Before Power On</span>
    <h2>Power supply: check this before powering on</h2>
    <p>The robotic arm may not include a power supply by default. Use a reliable 24V power supply and set the voltage selector according to your local mains voltage.</p>
  </div>

  <div className="danger-box">Do not use unbranded or unsafe power supplies. Always disconnect power before wiring, plugging, or unplugging XT30 connectors or motor cables.</div>

  <div className="power-grid">
    <div>
      <h4>220V regions</h4>
      <p>Set the power supply selector to <strong>230V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="230V switch" />
    </div>
    <div>
      <h4>110V regions</h4>
      <p>Set the power supply selector to <strong>115V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="115V switch" />
    </div>
  </div>

  <p>You can purchase the open-source <a href="https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html" target="_blank">24V 14.6A MeanWell power adapter kit</a>, or use a compatible MeanWell LRS-350-24 supply from a trusted retailer. The open-source enclosure BOM is available in the GitHub repository and is recommended only for developers with power supply assembly experience.</p>

  <details className="video-details">
    <summary>View power supply enclosure assembly video</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/DHFA2UfQzUo?si=GYy-Z38qTUW6KPqq" title="Power supply assembly video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="assembly" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>Assemble the robotic arm</h2>
      <p>This step is only required for DIY kits. If you purchased a pre-assembled kit, skip this step.</p>
    </div>
  </div>

  <div className="tip-box">If you purchased the pre-assembled version, skip this step and proceed directly to <a href="#motorbridge">Step 3: Calibration and first run</a>.</div>

  <div className="checklist-grid">
    <div><strong>Check carefully</strong><span>The kit contains many screws and similar-looking parts. Verify each part specification and orientation before fastening.</span></div>
    <div><strong>Tool recommendation</strong><span>An electric screwdriver is recommended. Set torque to a low-to-medium range, around 3–6 kgf·cm.</span></div>
    <div><strong>Operate safely</strong><span>Watch out for pinching or impact injuries. Children should only assemble the kit under adult supervision.</span></div>
  </div>

  <div className="warning-box">In the assembly video, the D4 × 7 screw between Motor 5 and Motor 6 does not need to be installed. For the DIY kit, the 7 provided D4 × 7 screws are enough to complete the assembly.</div>

  <details className="content-details" open>
    <summary>Open assembly video</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="reBot Arm B601-DM assembly video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="motor-id" className="section-card step-section">
  
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>Write motor IDs and zero positions</h2>
      <p>This step is only required for DIY kits. It configures the CAN ID and Master ID for each joint motor.</p>
    </div>
  </div>

  <div className="tip-box">If you purchased the pre-assembled version, skip this step and proceed directly to <a href="#motorbridge">Step 3</a>.</div>

  <div className="danger-list">
    <strong>Before motor reset</strong>
    <ul>
      <li>Prepare 2 tooling clamps, preferably 3 inches or larger.</li>
      <li>Use a reliable 24V 15A XT30-output switching power supply.</li>
      <li>Keep at least 1 meter away during debugging and operation.</li>
      <li>Do not hot-plug motors. Power off before plugging or unplugging XT30 2+2 connectors.</li>
      <li>Do not overload or overspeed the motors. Check wiring and fasteners before startup.</li>
      <li>Use reasonable control parameters and an emergency stop strategy to prevent uncontrolled motion.</li>
    </ul>
  </div>

  <details className="content-details">
    <summary>AI Agent helper prompt</summary>
    <div className="warning-box">This section is in beta. Follow all safety precautions. If the AI suggestion conflicts with this guide, follow this guide and contact our engineers for support.</div>
    <p>Copy the prompt below to your AI assistant:</p>
    <pre><code>{`Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/en/AGENTS.md) to help me initialize the robotic arm.`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Preparation checklist</summary>
    <div className="two-col">
      <div>
        <h4>Hardware</h4>
        <ul>
          <li><a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">reBot Arm B601-DM Robotic Arm × 1</a></li>
          <li><a href="https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html" target="_blank">USB-CAN Adapter Board × 1</a></li>
          <li><a href="https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html" target="_blank">Signal-Power Separation Board × 1</a></li>
          <li>Woodworking clamps × 2</li>
          <li>USB-C cable × 1</li>
          <li><a href="https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html" target="_blank">24V 15A power supply × 1</a></li>
        </ul>
      </div>
      <div>
        <h4>Computer and software</h4>
        <ul>
          <li>Dual-boot PC: Windows + Ubuntu, or macOS.</li>
          <li><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DMTool_v2.1.6.8.zip" target="_blank">DM_Tools_v.2.1.6.8.exe</a>, Windows only.</li>
        </ul>
      </div>
    </div>
  </details>

  <h3>Motor ID mapping</h3>
  <p>Set the CAN ID and Master ID for each joint motor according to the table below.</p>

  | Motor Number | CAN ID | Master ID |
  |:---:|:---:|:---:|
  | Motor 1 | 0x01 | 0x11 |
  | Motor 2 | 0x02 | 0x12 |
  | Motor 3 | 0x03 | 0x13 |
  | Motor 4 | 0x04 | 0x14 |
  | Motor 5 | 0x05 | 0x15 |
  | Motor 6 | 0x06 | 0x16 |
  | Motor 7 | 0x07 | 0x17 |

  <div className="danger-box">The following example uses Motor 1. For each joint motor, make sure the CAN ID and Master ID match the table above.</div>

  <ol className="ordered-steps">
    <li>Open <strong>DM_Tools</strong>, select the USB COM port, and set the baud rate to <code>921600</code>. After connection, logs will appear in the Serial panel.</li>
    <li>Use the 3-pin cable to connect Motor 1 to the USB-CAN adapter board.</li>
    <li>Open the <strong>Parameter Settings</strong> page, click <strong>Read Parameters</strong>, then set <strong>CAN ID</strong> to <code>0x01</code> and <strong>Master ID</strong> to <code>0x11</code>.</li>
    <li>Click <strong>Write Parameters</strong> to save the values.</li>
    <li>Open the <strong>Debug</strong> page, verify the IDs, and click <strong>Enable</strong>. The motor LED should turn solid green.</li>
  </ol>

  <div className="image-grid three">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_connect_en.png" alt="DM Tools connection" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_id_set_en.png" alt="Set motor ID" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_enable_en.png" alt="Enable motor" />
  </div>

  <div className="tip-box">After testing, click <strong>Disable</strong> to exit the enabled state.</div>

  <details className="content-details">
    <summary>View cable connection points for all motors</summary>
    <div className="wide-scroll">
      <table>
        <thead><tr><th>Motor 1</th><th>Motor 2</th><th>Motor 3</th><th>Motor 4</th><th>Motor 5</th><th>Motor 6</th><th>Motor 7</th></tr></thead>
        <tbody><tr>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" /></td>
        </tr></tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>View motor enable examples</summary>
    <div className="wide-scroll">
      <table>
        <thead><tr><th>Motor 1</th><th>Motor 2</th><th>Motor 3</th><th>Motor 4</th><th>Motor 5</th><th>Motor 6</th><th>Motor 7</th></tr></thead>
        <tbody><tr>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" /></td>
        </tr></tbody>
      </table>
    </div>
  </details>

  <details className="video-details">
    <summary>View motor ID setup video</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="Motor ID setup video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="motorbridge" className="section-card step-section">
  
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Calibrate the arm and run the first test</h2>
      <p>This step applies to both pre-assembled and DIY kits. Before controlling the arm, reset the zero point and launch MotorBridge.</p>
    </div>
  </div>

  <div className="tip-box">For pre-assembled units, the harness between Joint 1 and Joint 2 may be left uninstalled to prevent cable abrasion during shipping. After unboxing, locate the harness with one elbow connector and one straight connector, then install it between Joint 1 and Joint 2.</div>

  <h3>Optional: print the Motor 1 wiring harness clips</h3>
  <p>Long-term tension on the Motor 1 wiring harness may wear the connector and cause poor electrical contact. Printing the parts below can reduce this risk.</p>

  | Part | Image | File | Material | Qty | Print settings |
  |:---|:---:|:---|:---|:---:|:---|
  | Motor 1 dual-side wiring harness clip | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/DM_Motor1_wiring_harness_clip.jpg" width="100" /> | [3D File](DM_Motor1_wiring_harness_clip.stp) | Bambu Lab Black PLA | 2 | 0.4 mm nozzle, 0.2 mm layer height, 30% infill |

  <details className="video-details" open>
    <summary>View calibration and first-run video</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="Calibration and first run video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>

  <div className="feature-grid">
    <div><strong>MotorBridge platform</strong><span>An all-in-one motor control solution that supports Damiao, Robstride, Hightorque, MyActuator, Hexfellow, and reBot arms.</span></div>
    <div><strong>reBot-specific tools</strong><span>Includes one-click zero calibration, parameter writing, drag-and-drop motor control, and built-in model visualization.</span></div>
    <div><strong>Cross-platform</strong><span>Compatible with Windows, Ubuntu, and macOS.</span></div>
  </div>

  <h3>Install and start MotorBridge</h3>

  <div className="install-steps">
    <div><span>1</span><div><b>Install Miniforge</b><p>Install Miniforge to create an isolated Python environment and avoid package conflicts.</p></div></div>
    <div><span>2</span><div><b>Create the environment</b><p>Create a Python 3.12 environment and activate it every time you use reBot tools.</p></div></div>
    <div><span>3</span><div><b>Install motorbridge</b><p>Install the MotorBridge Python package in the activated environment.</p></div></div>
    <div><span>4</span><div><b>Connect the arm</b><p>Connect the arm over USB and power it on. Linux users should grant serial permissions.</p></div></div>
    <div><span>5</span><div><b>Launch MotorBridge Studio</b><p>Open MotorBridge Studio in your browser and run the gateway command for your OS and driver board.</p></div></div>
  </div>

  <details className="content-details" open>
    <summary>Command reference</summary>

    <h4>Ubuntu / Jetson / Raspberry Pi</h4>
    <pre><code>{`wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh`}</code></pre>

    <h4>macOS</h4>
    <pre><code>{`curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh`}</code></pre>

    <h4>Windows</h4>
    <pre><code>{`https://github.com/conda-forge/miniforge/releases`}</code></pre>

    <h4>Create and activate the environment</h4>
    <pre><code>{`conda create -y -n rebot python=3.12
conda activate rebot`}</code></pre>

    <h4>Install motorbridge</h4>
    <pre><code>{`pip install motorbridge`}</code></pre>

    <h4>Linux serial permission</h4>
    <pre><code>{`sudo chmod 666 /dev/ttyACM*`}</code></pre>

    <h4>Windows gateway example</h4>
    <pre><code>{`motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20`}</code></pre>
  </details>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" alt="MotorBridge help panel" />
  </div>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Common issues</h2>
    <p>Use this section if the arm behaves abnormally during ID setup, calibration, or motor startup.</p>
  </div>

  <details className="content-details" open>
    <summary>Loud abnormal noise occurs immediately after motor startup</summary>
    <p>This may happen if parameter calibration was accidentally triggered during ID setup, overwriting factory parameters such as motor inertia. Use <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe" target="_blank">DM_Tools_v.1.8.0.1.exe</a> on Windows to export parameters from a healthy motor of the same model, import them into the abnormal motor, update the corresponding CAN ID, write the parameters, and continue zero-point calibration.</p>
    <div className="image-grid two">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_en.png" alt="DM tools parameter export" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_en.png" alt="DM tools parameter import" />
    </div>
    <p><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt" target="_blank">DM4310 Default Parameters</a> · <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt" target="_blank">DM4340P Default Parameters</a></p>
  </details>

  <details className="content-details">
    <summary>All motors share the same CAN ID</summary>
    <p>When using <strong>DM_Tools_v.1.8.0.1.exe</strong> for zero-point calibration, do not click the Read or Set buttons next to the CAN ID field. The debug page communicates over the CAN bus; clicking Set may assign the same CAN ID to all motors on the CAN bus.</p>
  </details>
</section>

<section className="course-nav-section section-card section-block">
  <div className="section-title">
    <span>Learning Path</span>
    <h2>Continue with the reBot B601-DM learning path</h2>
    <p>These tutorials are designed to be read in the same order as the robotics page: start from basic bring-up, then move to LeRobot data collection, kinematics debugging, visual grasping, and finally ROS2 integration.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-step active" href="/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <div>
        <strong>Getting Started</strong>
        <small>Complete unboxing, wiring, power checks, driver setup, calibration, and basic motion tests.</small>
      </div>
      <em>Current article</em>
    </a>
    <a className="course-step" href="/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <div>
        <strong>LeRobot Teleoperation and Data Collection</strong>
        <small>Teleoperate the arm, connect cameras, record datasets, train policies, and evaluate real-arm behavior.</small>
      </div>
      <em>Data collection</em>
    </a>
    <a className="course-step" href="/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <div>
        <strong>Pinocchio Kinematics Visualization</strong>
        <small>Understand robot models, coordinate frames, FK / IK, trajectory planning, and gravity compensation.</small>
      </div>
      <em>Control</em>
    </a>
    <a className="course-step" href="/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <div>
        <strong>Visual Grasping Demo</strong>
        <small>Combine RGB-D perception, YOLO / OBB or GraspNet, hand-eye calibration, and real object grasping.</small>
      </div>
      <em>Application</em>
    </a>
    <a className="course-step" href="/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <div>
        <strong>ROS2 Integration</strong>
        <small>Connect the arm to ROS2, RViz, MoveIt 2, standard services, actions, and planning workflows.</small>
      </div>
      <em>Integration</em>
    </a>
  </div>
</section>

</div>

<style>{`
.rebot-page { --rb-bg: #ffffff; --rb-card: #ffffff; --rb-soft: #f8fafc; --rb-text: #111827; --rb-muted: #64748b; --rb-border: rgba(148,163,184,0.28); --rb-primary: #2563eb; --rb-primary-soft: #eff6ff; --rb-green: #0f766e; --rb-green-soft: #ccfbf1; --rb-warn: #b45309; --rb-warn-soft: #fffbeb; --rb-danger: #b91c1c; --rb-danger-soft: #fef2f2; --rb-shadow: 0 18px 45px rgba(15,23,42,0.08); color: var(--rb-text); }
.doc-hero { position: relative; overflow: hidden; display: grid; grid-template-columns: minmax(0,1.35fr) minmax(270px,0.75fr); gap: 1.4rem; padding: 2rem; margin: 1.4rem 0 1rem; border: 1px solid rgba(37,99,235,0.18); border-radius: 28px; background: radial-gradient(circle at 12% 10%, rgba(37,99,235,0.16), transparent 36%), radial-gradient(circle at 88% 78%, rgba(20,184,166,0.16), transparent 38%), linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.88)); box-shadow: var(--rb-shadow); }
.eyebrow { display: inline-flex; margin-bottom: 0.65rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.75rem; font-size: clamp(1.55rem, 3vw, 2.35rem); line-height: 1.15; }
.doc-hero p { margin: 0; max-width: 760px; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.15rem; }
.hero-actions a, .buy-box a { display: inline-flex; align-items: center; justify-content: center; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, #2563eb, #14b8a6); box-shadow: 0 12px 24px rgba(37,99,235,0.16); }
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: rgba(255,255,255,0.84); border: 1px solid rgba(37,99,235,0.18); box-shadow: none; }
.hero-card { display: grid; gap: 0.65rem; align-content: center; padding: 1.1rem; border-radius: 20px; background: rgba(255,255,255,0.76); border: 1px solid rgba(148,163,184,0.25); backdrop-filter: blur(10px); }
.hero-card strong { font-size: 1.02rem; }
.hero-card span { display: block; color: var(--rb-muted); line-height: 1.55; font-size: 0.92rem; }
.quick-note, .tip-box, .warning-box, .danger-box { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; line-height: 1.7; border: 1px solid var(--rb-border); }
.quick-note, .tip-box { color: #075985; background: #f0f9ff; border-color: #bae6fd; }
.warning-box { color: var(--rb-warn); background: var(--rb-warn-soft); border-color: #fde68a; }
.danger-box { color: var(--rb-danger); background: var(--rb-danger-soft); border-color: #fecaca; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(6, minmax(0,1fr)); gap: 0.55rem; margin: 1rem 0 1.8rem; padding: 0.65rem; border-radius: 18px; border: 1px solid var(--rb-border); background: rgba(255,255,255,0.88); backdrop-filter: blur(12px); box-shadow: 0 12px 28px rgba(15,23,42,0.06); }
.doc-nav a { padding: 0.68rem 0.5rem; border-radius: 12px; text-align: center; text-decoration: none !important; color: #334155; background: var(--rb-soft); font-weight: 760; font-size: 0.84rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(37,99,235,0.10); }
.section-card { margin: 1.4rem 0; padding: 1.45rem; border-radius: 24px; background: var(--rb-card); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title span { display: inline-flex; margin-bottom: 0.3rem; color: var(--rb-primary); font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 850; }
.section-title h2, .step-title-row h2 { margin: 0.15rem 0 0.45rem; }
.section-title p, .step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .power-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0.9rem; margin-top: 1rem; }
.checklist-grid, .feature-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
.path-card, .checklist-grid div, .feature-grid div, .power-grid div { display: block; padding: 1rem; border-radius: 18px; background: var(--rb-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { display: block; margin-bottom: 0.45rem; }
.path-card span, .checklist-grid span, .feature-grid span { display: block; color: var(--rb-muted); line-height: 1.58; font-size: 0.91rem; }
.path-card em { display: inline-flex; margin-top: 0.8rem; padding: 0.32rem 0.58rem; border-radius: 999px; color: var(--rb-green); background: var(--rb-green-soft); font-style: normal; font-size: 0.75rem; font-weight: 850; }
.path-card.recommended { border-color: rgba(20,184,166,0.36); background: linear-gradient(180deg, rgba(240,253,250,0.8), var(--rb-soft)); }
.image-frame { margin: 1rem 0; padding: 0.7rem; border-radius: 18px; background: var(--rb-soft); border: 1px solid var(--rb-border); text-align: center; }
.image-frame img, .image-grid img, .power-grid img { max-width: 100%; border-radius: 12px; }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.42rem 0.68rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); font-size: 0.8rem; font-weight: 850; }
.buy-box { margin: 1rem 0; text-align: center; }
.step-title-row { display: flex; gap: 0.9rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; padding: 0.5rem 0.75rem; border-radius: 999px; background: var(--rb-primary); color: #fff; font-weight: 900; }
.danger-list { margin: 1rem 0; padding: 1rem 1.1rem; border-radius: 18px; color: var(--rb-danger); background: var(--rb-danger-soft); border: 1px solid #fecaca; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin: 0; padding-left: 1.2rem; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 18px; background: var(--rb-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.9rem 1rem; font-weight: 850; color: var(--rb-text); }
.content-details > *:not(summary), .video-details > *:not(summary) { margin-left: 1rem; margin-right: 1rem; }
.video-container { position: relative; width: calc(100% - 2rem); margin: 0 1rem 1rem; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px; background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col, .image-grid.three, .image-grid.two { display: grid; gap: 1rem; }
.two-col, .image-grid.two { grid-template-columns: repeat(2, minmax(0,1fr)); }
.image-grid.three { grid-template-columns: repeat(3, minmax(0,1fr)); }
.ordered-steps li { margin: 0.5rem 0; line-height: 1.65; }
.wide-scroll { overflow-x: auto; padding-bottom: 0.75rem; }
.wide-scroll table { min-width: 900px; }
.wide-scroll img { max-width: 120px; border-radius: 10px; }
.install-steps { display: grid; gap: 0.75rem; margin: 1rem 0; }
.install-steps > div { display: grid; grid-template-columns: auto minmax(0,1fr); gap: 0.8rem; align-items: start; padding: 0.9rem; border-radius: 16px; background: var(--rb-soft); border: 1px solid var(--rb-border); }
.install-steps span { width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--rb-primary); color: #fff; font-weight: 900; }
.install-steps b { display: block; margin-bottom: 0.25rem; }
.install-steps p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.rebot-page pre { border-radius: 14px; overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111315; --rb-card: #1f2023; --rb-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343842; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-green: #5eead4; --rb-green-soft: rgba(20,184,166,0.16); --rb-shadow: 0 18px 45px rgba(0,0,0,0.30); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 10%, rgba(37,99,235,0.25), transparent 36%), radial-gradient(circle at 88% 78%, rgba(20,184,166,0.18), transparent 38%), linear-gradient(135deg, rgba(30,41,59,0.94), rgba(17,24,39,0.9)); border-color: #334155; }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a, html[data-theme='dark'] .hero-actions a:nth-child(2) { background: #24262a; color: #e5e7eb; border-color: #343842; }
html[data-theme='dark'] .quick-note, html[data-theme='dark'] .tip-box { color: #bae6fd; background: rgba(14,165,233,0.10); border-color: rgba(125,211,252,0.22); }
html[data-theme='dark'] .warning-box { color: #fde68a; background: rgba(245,158,11,0.12); border-color: rgba(253,230,138,0.22); }
html[data-theme='dark'] .danger-box, html[data-theme='dark'] .danger-list { color: #fecaca; background: rgba(239,68,68,0.10); border-color: rgba(252,165,165,0.22); }
@media (max-width: 920px) { .doc-hero, .path-grid, .power-grid, .checklist-grid, .feature-grid, .two-col, .image-grid.two, .image-grid.three { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(2, minmax(0,1fr)); position: static; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.05rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { display: inline-flex; margin-bottom: 0.7rem; } }

/* Shared safety warning and course navigation */
.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.15rem 0 1.35rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
  color: #7f1d1d;
  box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12);
}
.safety-alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}
.safety-alert-content strong {
  display: block;
  margin-bottom: 0.45rem;
  color: #991b1b;
  font-size: 1.05rem;
  font-weight: 900;
}
.safety-alert-content p,
.safety-alert-content ul {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.68;
}
.safety-alert-content ul {
  margin-top: 0.65rem;
  padding-left: 1.2rem;
}
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
.course-nav-section {
  margin-top: 1.4rem;
}
.course-path-grid {
  display: grid;
  gap: 0.85rem;
}
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, rgba(148, 163, 184, 0.28));
  background: var(--rb-surface, var(--panel-bg, #ffffff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-step:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.32);
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.10);
}
.course-step.active {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  color: #ffffff;
  background: #2563eb;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);
}
.course-step strong {
  display: block;
  color: var(--rb-text, var(--text-main, #111827));
  font-size: 1rem;
  margin-bottom: 0.24rem;
}
.course-step small {
  display: block;
  color: var(--rb-muted, var(--text-muted, #64748b));
  line-height: 1.55;
  font-size: 0.92rem;
}
.course-step em {
  justify-self: end;
  white-space: nowrap;
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 800;
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
}
html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step {
  background: rgba(31, 32, 35, 0.84);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(20, 184, 166, 0.10));
  border-color: rgba(96, 165, 250, 0.38);
}
html[data-theme='dark'] .course-step strong { color: #e5e7eb; }
html[data-theme='dark'] .course-step small { color: #cbd5e1; }
html[data-theme='dark'] .course-step em { color: #93c5fd; background: rgba(37, 99, 235, 0.16); border-color: rgba(96, 165, 250, 0.28); }
@media (max-width: 640px) {
  .safety-alert { grid-template-columns: 1fr; }
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-step em { grid-column: 2; justify-self: start; }
}


`}</style>
