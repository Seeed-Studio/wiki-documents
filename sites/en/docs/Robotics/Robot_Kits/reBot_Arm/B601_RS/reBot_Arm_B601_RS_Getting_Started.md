---
description: This guide will help you get started with the reBot Arm B601-RS, including power supply checks, assembly, calibration, MotorBridge setup, and basic software configuration.
title: reBot Arm B601-RS Quick Start
keywords:
  - reBot
  - B601-RS
  - Robotic Arm
  - Robot
  - LeRobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-07-04
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/
---

# reBot Arm B601-RS Quick Start

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Bring your reBot Arm B601-RS online safely, from unboxing to calibration</h2>
    <p>This guide follows the actual first-use workflow: identify your kit type, check the 48V power supply, assemble the arm if needed, inspect the wiring harness, configure PCAN-USB, calibrate zero positions, and try the arm in MotorBridge.</p>
    <div className="hero-actions">
      <a href="#agent">Start with AI Agent</a>
      <a href="#start-path">Choose your setup path</a>
      <a href="#motorbridge">Jump to MotorBridge</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Recommended reading path</strong>
    <span>If you use Codex, Cursor, Trae, or similar tools, start with the AI Agent workflow first.</span>
    <span>Pre-assembled kit: motor IDs are already written. Focus on wiring, power, PCAN-USB, and zero-position calibration.</span>
  </div>
</section>

<div className="quick-note">
  <strong>Safety reminder:</strong> B601-RS uses a 48V power supply and RobStride joint actuators. Secure the arm before debugging, keep at least 1 meter away during motion tests, and always power off before plugging or unplugging motor cables or XT30 connectors.
</div>


<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Warning: Clear the Robot Workspace Before Running</strong>
    <p>Before running any program that moves the robotic arm, clear all valuable items, fragile objects, tools, cables, and unrelated objects within a <strong>1-meter radius</strong> of the robot workspace. During debugging and operation, personnel must stay away from the robot motion range.</p>
    <ul>
      <li>Do not touch joints, motors, links, the gripper, or the end effector after the robotic arm is powered on.</li>
      <li>Before running calibration, MotorBridge, teleoperation, dataset collection, IK control, trajectory control, gravity compensation, visual grasping, ROS2 actions, or MoveIt execution, make sure the robotic arm is firmly fixed.</li>
      <li>If abnormal motion, noise, vibration, loose cables, poor power contact, or communication loss occurs, stop the program immediately and power off the system before inspection.</li>
      <li>Always power off the system before plugging or unplugging motor cables, CAN cables, PCAN-USB adapters, XT30 connectors, or power connectors.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="reBot B601-RS quick navigation">
  <a href="#start-path">Setup Path</a>
  <a href="#power">Power Check</a>
  <a href="#assembly">Step 1 Assembly</a>
  <a href="#motorbridge">Step 2 Calibration / AI Agent</a>
  <a href="#pcan">PCAN-USB</a>
</nav>

<section id="start-path" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>First, identify your kit type</h2>
    <p>The workflow is different for a pre-assembled B601-RS kit and a DIY kit. Confirming this first helps avoid unnecessary motor ID writing or other risky operations.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#motorbridge">
      <b>I purchased a pre-assembled kit</b>
      <span>The motor IDs have already been written. After unboxing, connect the Joint 1-2 harness, check the power supply, configure PCAN-USB, and proceed to zero-position calibration.</span>
      <em>Start from Step 2</em>
    </a>
    <a className="path-card" href="#assembly">
      <b>I purchased a DIY kit or need to assemble it myself</b>
      <span>We recommend opening the AI Agent workflow first so the Agent can guide environment and safety checks before you complete assembly, wiring, power checks, PCAN-USB setup, and calibration.</span>
      <em>Follow Step 1 → Step 2</em>
    </a>
  </div>

  :::tip
  Virtual machines have been verified to have insufficient performance for the demo and may introduce configuration issues. We recommend using a physical Ubuntu machine whenever possible.
  :::
</section>

<section className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>Project overview</h2>
    <p>The reBot Arm project is open source on <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank">GitHub</a>. This guide walks you through the basic B601-RS workflow from assembly to MotorBridge control.</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
  </div>

  <div className="badge-row">
    <span>6-DOF Robotic Arm</span>
    <span>RobStride Motors</span>
    <span>MotorBridge</span>
    <span>Open Source</span>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html" target="_blank">Get reBot Arm B601-RS</a>
  </div>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<section id="power" className="section-card warning-section">
  <div className="section-title">
    <span>Before Power On</span>
    <h2>Power supply: check this before turning on the arm</h2>
    <p>The B601-RS does not include a power supply by default in some configurations. Use a reputable 48V power supply and set the voltage selector correctly for your region before powering on.</p>
  </div>

  :::danger
  Do not use unbranded or unsafe power supplies. Always disconnect power before wiring, plugging or unplugging XT30 connectors, or connecting motor cables.
  :::

  <div className="power-grid">
    <div>
      <h4>220V regions</h4>
      <p>Set the voltage selector switch on the side of the power supply to <strong>230V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="230V switch" />
    </div>
    <div>
      <h4>110V regions</h4>
      <p>Set the voltage selector switch on the side of the power supply to <strong>115V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="115V switch" />
    </div>
  </div>

  <p>You can purchase the open-source <a href="https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html" target="_blank">48V 12.5A MeanWell power adapter kit</a>, or reference the BOM in the GitHub repository to assemble the power supply enclosure yourself. Self-assembly is recommended only for developers with power supply assembly experience.</p>

  <div className="image-frame compact-image">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" alt="reBot Arm B601-RS power supply" />
  </div>

  <details className="video-details">
    <summary>View the power supply reference video</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="Power supply reference video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="assembly" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>Assemble the robotic arm</h2>
      <p>This step is required for DIY kits. If you purchased a pre-assembled kit, you can skip this section and go directly to calibration and basic operation.</p>
    </div>
  </div>

  <div className="checklist-grid">
    <div><strong>Check carefully</strong><span>The kit includes many screws and structural parts, some of which look similar. Confirm the specifications and orientation before fastening.</span></div>
    <div><strong>Tool suggestion</strong><span>An electric screwdriver is recommended. Set the torque to a low-to-medium level, around 3-6 kgf.cm, to avoid stripping screws.</span></div>
    <div><strong>Safety notice</strong><span>The arm body contains metal parts. Avoid pinched fingers or crush injuries. Children should assemble it only under adult supervision.</span></div>
  </div>

  :::warning
  The assembly video link is intentionally left blank for now and will be added after the video is uploaded. Minor part adjustments may occur over time; the shipped parts should be treated as the final reference.
  :::

  <details className="content-details" open>
    <summary>Assembly video placeholder</summary>
    <div className="video-placeholder">
      Assembly video link: <span>to be added</span>
    </div>
  </details>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<section id="motorbridge" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>Calibrate the robotic arm and run the first test</h2>
      <p>This step covers wiring-harness inspection, zero-position calibration, MotorBridge installation, and basic debugging.</p>
    </div>
  </div>

  :::tip
  If you purchased a pre-assembled unit, all motor IDs have already been written and do not need to be rewritten. To reduce cable abrasion during shipping, the harness between Joint 1 and Joint 2 is not pre-installed. After unboxing, find the harness with one elbow connector and one straight connector in the package, then connect it between Joint 1 and Joint 2.
  :::

  <div id="agent" className="agent-inline-card">
    <div className="section-title">
      <span>Recommended First</span>
      <h2>Use an AI Agent first for guided initialization</h2>
      <p>If you are using AI coding tools such as Codex, Cursor, Trae, or Claude Code, we recommend starting with the AI Agent workflow. The Agent can follow AGENTS.md to guide you through environment checks, motor online scanning, PCAN-USB setup, MotorBridge Gateway startup, and zero-position calibration.</p>
    </div>
  
    :::warning
    The AI Agent workflow is still in beta. Keep the robotic arm secured, stay away from its motion range during debugging, and power off before plugging or unplugging motor cables or XT30 connectors. If the Agent gives instructions that conflict with this guide, follow this guide.
    :::
  
    <div className="path-grid">
      <div className="path-card recommended">
        <b>Recommended prompt for pre-assembled kits</b>
        <span>The motor IDs have already been written. Ask the Agent to scan motors, check wiring, verify PCAN-USB, start MotorBridge, and guide zero-position calibration. Do not rewrite motor IDs.</span>
        <em>Recommended</em>
      </div>
      <div className="path-card">
        <b>Recommended prompt for DIY or newly assembled kits</b>
        <span>If you need full initialization, ask the Agent to follow AGENTS.md step by step, from environment checks and motor scanning to gateway startup and calibration.</span>
        <em>Full workflow</em>
      </div>
    </div>
  
    Copy the following prompt to your AI coding tool:
  
    ```text
    Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help me initialize the reBot Arm B601-RS.
  
    If I am using a pre-assembled kit, do not rewrite the motor IDs. Only scan motors 1-7, verify that all motors are online, and continue with PCAN-USB, MotorBridge Gateway, and zero-position calibration checks.
  
    If I am using a DIY or newly assembled kit, confirm the safety requirements before each step and guide me through the full initialization workflow.
    ```
  
    :::tip
    Recommended tools include Codex, Cursor, Trae, Claude Code, and similar AI coding assistants. The Web UI workflow in this Wiki is still kept for users who prefer to follow the steps manually.
    :::
  </div>

  <details className="content-details">
    <summary>Motor 1 wiring harness protection part</summary>

    Long-term tension on the Motor 1 wiring harness may wear the motor connector and lead to poor electrical contact. Printing the following part can reduce this risk.

    | Part Description | Image | File Name | Material | Qty | Printing Specifications |
    | ---- | ---- | ---- | ---- | ---- | ---- |
    | Dual-side Wiring Harness Clips for Motor 1 | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/RS_Motor1_wiring_harness_clip.jpg" width="100" /> | [3D File](RS_Motor1_wiring_harness_clip.stp) | Bambu Lab Black PLA | 2 pcs | 0.4 mm nozzle, 0.2 mm layer height, 30% infill |
  </details>

  <div className="feature-grid">
    <div><strong>MotorBridge all-in-one control</strong><span>Supports RobStride, Damiao, Hightorque, MyActuator, Hexfellow, and more, while continuously supporting the reBot arm series.</span></div>
    <div><strong>Features for reBot</strong><span>Includes one-click zero-position calibration, parameter writing, drag-and-drop motor control, and built-in model visualization.</span></div>
    <div><strong>Cross-platform support</strong><span>Works on Windows, Ubuntu, and macOS, with a Python SDK that provides consistent functionality.</span></div>
  </div>

  <details className="video-details" open>
    <summary>View calibration and getting-started video</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="reBot Arm B601-RS calibration video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>

  <section className="sub-step-block">
    <h3>1. Install Miniforge (recommended)</h3>
    <p>Install Miniforge and create an isolated virtual environment to avoid package conflicts. This workflow supports Windows, Ubuntu, macOS, Jetson, and Raspberry Pi.</p>

    <details className="content-details">
      <summary>View Miniforge installation commands</summary>

      Ubuntu / Jetson / Raspberry Pi:

      ```bash
      wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
      bash Miniforge3-$(uname)-$(uname -m).sh
      ```

      macOS:

      ```bash
      curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
      bash Miniforge3-MacOSX-$(uname -m).sh
      ```

      Windows: open the Miniforge release page and download the latest `Miniforge3-Windows-x86_64.exe`:

      ```text
      https://github.com/conda-forge/miniforge/releases
      ```
    </details>

    :::tip
    If Git Bash cannot find the `conda` command, initialize conda first:

    ```bash
    source <install_path>/etc/profile.d/conda.sh
    echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
    source ~/.bashrc
    ```

    PowerShell users can run:

    ```bash
    conda init powershell
    ```
    :::
  </section>

  <section className="sub-step-block">
    <h3>2. Create and activate the reBot environment</h3>

    ```bash
    conda create -y -n rebot python=3.12
    conda activate rebot
    ```

    <p>Every time you open a new terminal to use reBot-related features, run <code>conda activate rebot</code> again.</p>
  </section>

  <section className="sub-step-block">
    <h3>3. Install MotorBridge</h3>

    :::tip Note for macOS users
    If the teleoperation frame rate is low on macOS, it may be caused by an outdated WCH CH34x driver. For macOS 10.14 and later, AppleUSBCHC0M is already built into the system. You can uninstall the old driver and use the built-in driver instead.
    :::

    ```bash
    pip install motorbridge
    ```
  </section>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<section id="pcan" className="section-card">
  <div className="section-title">
    <span>CAN Interface</span>
    <h2>Configure PCAN-USB</h2>
    <p>PCAN-USB lets your computer access the CAN bus at 1 Mbps so it can communicate with the RobStride actuators in the B601-RS.</p>
  </div>

  <details className="content-details" open>
    <summary>Ubuntu / Jetson / Raspberry Pi</summary>

    ```bash
    sudo modprobe peak_usb
    ip -br link

    sudo ip link set can0 down 2>/dev/null
    sudo ip link set can0 type can bitrate 1000000 restart-ms 100
    sudo ip link set can0 up
    ```
  </details>

  <details className="content-details">
    <summary>macOS</summary>

    Install PCBUSB first:

    ```bash
    curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
      https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
    tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
    cd PCBUSB
    sudo ./install.sh
    ```

    Configure `DYLD_LIBRARY_PATH` so `motorbridge-gateway` can find the PCBUSB runtime library:

    ```bash
    mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
    cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
    export DYLD_LIBRARY_PATH="/usr/local/lib${DYLD_LIBRARY_PATH:+:$DYLD_LIBRARY_PATH}"
    EOF

    echo $DYLD_LIBRARY_PATH
    ```

    Check whether the environment is ready:

    ```bash
    python3 -c "import motorbridge; print('motorbridge OK')"
    motorbridge-cli --help
    python3 -c "import ctypes; ctypes.CDLL('libPCBUSB.dylib'); print('PCBUSB load OK')"
    ```
  </details>

  <details className="content-details">
    <summary>Windows</summary>
    Visit the <a href="https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/" target="_blank">PCAN-USB official page</a> and install the PCAN-USB driver.
  </details>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<section className="section-card warning-section">
  <div className="section-title">
    <span>Reset Zero Position</span>
    <h2>Start MotorBridge Gateway for zero-position writing and debugging</h2>
    <p>After opening MotorBridge Studio, copy the command that matches your operating system and driver board, then confirm the IP address and port before running it.</p>
  </div>

  <div className="danger-list">
    <strong>Safety rules before debugging</strong>
    <ul>
      <li>Prepare 2 tooling clamps; size ≥ 3 inches is recommended.</li>
      <li>Use a reputable 48V switching power supply with XT30 output.</li>
      <li>Keep at least 1 meter away during debugging and operation.</li>
      <li>Do not hot-plug motors. Disconnect power before plugging or unplugging XT30 2+2 connectors.</li>
      <li>Do not overload or overspeed the motors. Check wiring and fasteners before startup.</li>
      <li>Set reasonable program parameters and an emergency stop mechanism to prevent runaway motion.</li>
    </ul>
  </div>

  Open <a href="https://motorbridge.github.io/motorbridge-studio/" target="_blank">MotorBridge Studio</a> in your browser, click Help, and copy the corresponding command for your system and driver board.

  ```bash
  motorbridge-gateway --bind 127.0.0.1:9002
  ```

  On macOS, if the PCBUSB runtime library cannot be loaded, use:

  ```bash
  DYLD_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002
  ```
</section>


<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>reBot B601-RS learning path</h2>
    <p>These tutorials are designed to be followed in order: Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2. Use the links below to jump between modules.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item active" href="/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Complete unboxing, wiring, power checks, PCAN-USB setup, calibration, and first motion tests.</span></span>
      <span className="course-tag">Start here</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot Teleoperation and Data Collection</strong><span>Teleoperate the arm, connect cameras, record datasets, and prepare imitation-learning tasks.</span></span>
      <span className="course-tag">Data collection</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio Kinematics Visualization</strong><span>Understand robot models, joints, coordinate frames, forward/inverse kinematics, trajectories, and gravity compensation.</span></span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Visual Grasping Demo</strong><span>Combine RGB-D perception, hand-eye calibration, YOLO / GraspNet, and grasp pose generation for real object grasping.</span></span>
      <span className="course-tag">Application</span>
    </a>
    <a className="course-path-item" href="/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 Integration</strong><span>Connect the arm to ROS2, RViz, MoveIt 2, planning, and higher-level robotics workflows.</span></span>
      <span className="course-tag">Integration</span>
    </a>
  </div>
</section>

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.agent-inline-card { margin: 1rem 0 1.25rem; padding: 1.15rem; border-radius: 18px; background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.08)); border: 1px solid rgba(37,99,235,0.22); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.image-frame { margin: 1rem 0; text-align: center; }
.image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.35rem 0.65rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 800; font-size: 0.78rem; }
.buy-box { margin: 1rem 0; }
.buy-box a { display: inline-flex; padding: 0.74rem 1.05rem; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); border-radius: 999px; text-decoration: none !important; font-weight: 850; }
.path-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .checklist-grid div, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { color: var(--rb-text); }
.path-card span, .checklist-grid span, .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.path-card em { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: #047857; background: #d1fae5; font-style: normal; font-weight: 850; font-size: 0.75rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.35); background: linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.09)); }
.power-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.power-grid div { padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-align: center; }
.power-grid h4 { margin: 0 0 0.35rem; color: var(--rb-text); }
.power-grid p { margin: 0.25rem 0 0.75rem; color: var(--rb-muted); }
.power-grid img { max-width: 100%; border-radius: 14px; }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "Collapse"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.video-placeholder { margin: 1rem; padding: 2.5rem 1rem; border: 1px dashed var(--rb-border); border-radius: 16px; text-align: center; color: var(--rb-muted); background: var(--rb-surface); }
.video-placeholder span { color: var(--rb-primary); font-weight: 850; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.danger-list { padding: 1rem; margin: 1rem 0; border-radius: 16px; border: 1px solid #fecaca; background: #fef2f2; color: #7f1d1d; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin-bottom: 0; }
.faq-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.faq-images img { max-width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
.rebot-page :global(table) { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .danger-list { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); color: #fecaca; }
html[data-theme='dark'] .agent-inline-card { background: linear-gradient(135deg, rgba(96,165,250,0.12), rgba(45,212,191,0.10)); border-color: rgba(96,165,250,0.28); }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }
@media (max-width: 900px) { .doc-hero, .power-grid, .two-col, .faq-images { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }


.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239,68,68,0.38); background: linear-gradient(135deg, rgba(254,242,242,0.98), rgba(255,247,237,0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239,68,68,0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }

.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface, var(--rb-card, #fff)); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .course-path-item { background: #111827; border-color: rgba(148,163,184,0.24); }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }

`}</style>
