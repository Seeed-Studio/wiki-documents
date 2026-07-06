---
description: This Wiki provides a structured SO-ARM100 / SO-ARM101 LeRobot workflow covering 3D printing, servo setup, assembly, calibration, teleoperation, camera integration, dataset collection, training, and evaluation.
title: SO-ARM100 / SO-ARM101 with LeRobot
keywords:
  - Lerobot
  - Huggingface
  - SO-ARM100
  - SO-ARM101
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 2026-07-05
  author: ZhangJiaQuan
translation:
  skip:
    - zh-CN
createdAt: '2025-06-05'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/lerobot_so100m_new/
---

# SO-ARM100 / SO-ARM101 with LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div>
      <span className="eyebrow">SO-ARM × LeRobot</span>
      <h2>Go from assembly and servo setup to teleoperation, dataset collection, and policy training</h2>
      <p>This guide is organized as a practical bring-up path for SO-ARM100 / SO-ARM101 users. You will prepare the printed parts, install LeRobot, configure servo IDs, assemble the leader and follower arms, calibrate the full system, teleoperate the robot, add cameras, record datasets, train policies, and evaluate them on real hardware.</p>
      <div className="hero-actions">
        <a href="#course-steps">View Step Workflow</a>
        <a href="#install-lerobot">Install LeRobot</a>
        <a href="#record-dataset">Start Dataset Collection</a>
      </div>
    </div>
    <div className="hero-card image-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 and SO-ARM101 with LeRobot" />
      <strong>SO-ARM10x · LeRobot</strong>
      <span>3D Printing · Servo Setup · Teleoperation · Dataset · Training</span>
    </div>
  </section>

  <div className="safety-alert">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Safety Warning: Clear the Robot Workspace Before Running</strong>
      <p>Before running any program that moves the robotic arm, clear all valuable items, fragile objects, tools, cables, and unrelated objects within a <strong>1-meter radius</strong> of the robot workspace. Keep people away from the motion range during calibration, teleoperation, recording, replay, evaluation, and policy deployment.</p>
      <ul>
        <li>Do not touch the joints, servos, links, gripper, or end-effector after the robot is powered on.</li>
        <li>Check the correct power supply before every step. SO101 Pro uses <strong>5V for the Leader Arm</strong> and <strong>12V for the Follower Arm</strong>.</li>
        <li>If abnormal motion, noise, vibration, loose cables, power loss, or communication loss occurs, stop the program immediately and power off the system before inspection.</li>
        <li>Always power off the system before plugging or unplugging servo cables, controller boards, USB-C cables, or power connectors.</li>
      </ul>
    </div>
  </div>

  <nav className="doc-nav" aria-label="SO-ARM LeRobot quick navigation">
    <a href="#course-steps">Workflow</a>
    <a href="#overview">Overview</a>
    <a href="#printing">3D Printing</a>
    <a href="#install-lerobot">Install</a>
    <a href="#motor-setup">Servo Setup</a>
    <a href="#calibration">Calibration</a>
    <a href="#teleoperation">Teleoperation</a>
    <a href="#camera">Camera</a>
    <a href="#record-dataset">Dataset</a>
    <a href="#training">Training</a>
    <a href="#faq">FAQ</a>
  </nav>

  <section id="course-steps" className="section-card">
    <div className="section-title">
      <span>Step Overview</span>
      <h2>Recommended SO-ARM bring-up workflow</h2>
      <p>Follow this order for a safer and easier debugging experience. Each step adds only one new layer of complexity.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">Step 0</span><strong>Confirm model and power</strong><p>Identify SO100 / SO101, standard / pro kit, leader / follower motors, and correct power supply voltage.</p></div>
      <div className="step-card"><span className="step-mini">Step 1</span><strong>Prepare printed parts and hardware</strong><p>Print or check the mechanical parts, label servos, and verify controller boards and USB-C cables.</p></div>
      <div className="step-card"><span className="step-mini">Step 2</span><strong>Install LeRobot</strong><p>Create a clean environment, install Seeed-verified LeRobot, ffmpeg, Feetech dependencies, and GPU PyTorch if needed.</p></div>
      <div className="step-card"><span className="step-mini">Step 3</span><strong>Configure servo IDs</strong><p>Use <code>{`lerobot-setup-motors`}</code> to initialize follower and leader servo IDs before final assembly.</p></div>
      <div className="step-card"><span className="step-mini">Step 4</span><strong>Assemble and calibrate</strong><p>Assemble the leader and follower arms, then run full-arm LeRobot calibration.</p></div>
      <div className="step-card"><span className="step-mini">Step 5</span><strong>Teleoperate and add cameras</strong><p>First test simple teleoperation without cameras, then connect OpenCV, RealSense, or Orbbec cameras.</p></div>
      <div className="step-card"><span className="step-mini">Step 6</span><strong>Record, train, and evaluate</strong><p>Record stable demonstrations, visualize the dataset, train ACT first, and then try SmolVLA / Pi / GR00T.</p></div>
    </div>
  </section>

  <section id="overview" className="section-card">
    <div className="section-title">
      <span>Overview</span>
      <h2>What this tutorial covers</h2>
      <p>SO-ARM10x is a low-cost open-source robotic arm platform designed for learning manipulation, teleoperation, imitation learning, and embodied AI workflows with LeRobot.</p>
    </div>
    <div className="info-card">
      <p><a href="https://github.com/TheRobotStudio/SO-ARM100">SO-10xARM</a> is a fully open-source robotic arm project from TheRobotStudio. It provides leader and follower arm designs, 3D-printing files, and operation guides.</p>
      <p><a href="https://github.com/huggingface/lerobot/tree/main">LeRobot</a> provides models, datasets, and tools for real-world robotics in PyTorch, including teleoperation, dataset recording, visualization, training, and evaluation workflows.</p>
    </div>
    <div className="feature-grid">
      <div><b>Open-source and low-cost</b><span>Suitable for education, robotics labs, research, and AI manipulation experiments.</span></div>
      <div><b>LeRobot-ready</b><span>Supports teleoperation, dataset collection, policy training, evaluation, and Hugging Face Hub workflows.</span></div>
      <div><b>Leader-follower workflow</b><span>Use a leader arm to control a follower arm and collect demonstrations for imitation learning.</span></div>
      <div><b>Jetson-compatible</b><span>Can be used with reComputer Jetson platforms after installing the correct PyTorch / Torchvision stack.</span></div>
    </div>
    <details className="content-details">
      <summary>Watch the SO-ARM overview video</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="SO-ARM LeRobot overview video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="hardware" className="section-card">
    <div className="section-title">
      <span>Hardware</span>
      <h2>Model, power, and system requirements</h2>
      <p>Before configuring servos or running calibration, confirm which SO-ARM kit you have and use the correct power supply.</p>
    </div>

    <div className="module-summary-grid">
      <div className="module-summary-card"><b>SO-ARM100</b><span>Classic SO-ARM version. Existing SO100 users can continue using the SO101 code paths in this guide.</span></div>
      <div className="module-summary-card"><b>SO-ARM101</b><span>Updated wiring and optimized leader-arm gear ratios. Printing and setup remain compatible with the SO100-style workflow.</span></div>
      <div className="module-summary-card"><b>Standard Kit</b><span>Uses 5V power supplies. Check power and servo model before connecting the bus.</span></div>
      <div className="module-summary-card warning-card"><b>Pro Kit</b><span>Leader Arm uses 5V; Follower Arm uses 12V. Mixing the power supplies can damage motors.</span></div>
    </div>

    <details className="content-details">
      <summary>Specification table</summary>
      <table>
        <thead><tr><th>Item</th><th>SO-ARM100</th><th>SO-ARM101</th></tr></thead>
        <tbody>
          <tr><td>Robot structure</td><td>Leader Arm + Follower Arm</td><td>Leader Arm + Follower Arm</td></tr>
          <tr><td>Communication</td><td>UART</td><td>UART</td></tr>
          <tr><td>Angle sensor</td><td>12-bit magnetic encoder</td><td>12-bit magnetic encoder</td></tr>
          <tr><td>Follower motors</td><td>STS3215 series, depending on kit version</td><td>Same as SO-ARM100</td></tr>
          <tr><td>Leader motors</td><td>Same gear ratio across all joints</td><td>Optimized gear ratios for joints L1, L3, L4-L6</td></tr>
          <tr><td>Recommended temperature</td><td>0°C to 40°C</td><td>0°C to 40°C</td></tr>
        </tbody>
      </table>
    </details>

    <details className="content-details">
      <summary>Bill of Materials</summary>
      <table>
        <thead><tr><th>Part</th><th>Quantity</th><th>Included</th></tr></thead>
        <tbody>
          <tr><td>Servo motors</td><td>12</td><td>✅</td></tr>
          <tr><td>Motor control board</td><td>2</td><td>✅</td></tr>
          <tr><td>USB-C cables</td><td>2</td><td>✅</td></tr>
          <tr><td>Power supplies</td><td>2</td><td>✅</td></tr>
          <tr><td>Table clamps</td><td>4</td><td>✅</td></tr>
          <tr><td>3D printed arm parts</td><td>1 set</td><td>Optional / self-prepared</td></tr>
        </tbody>
      </table>
    </details>

    <details className="content-details">
      <summary>Recommended system environment</summary>
      <div className="env-grid">
        <div>
          <h3>Ubuntu x86</h3>
          <ul>
            <li>Ubuntu 22.04</li>
            <li>CUDA 12+</li>
            <li>Python 3.10</li>
            <li>Torch 2.6+ or a version matching your CUDA stack</li>
          </ul>
        </div>
        <div>
          <h3>Jetson Orin</h3>
          <ul>
            <li>JetPack 6.0 / 6.1</li>
            <li>Python 3.10</li>
            <li>Torch 2.3+</li>
            <li>Confirm that PyTorch and Torchvision are GPU-enabled</li>
          </ul>
        </div>
      </div>
    </details>
  </section>

  <section id="printing" className="section-card">
    <div className="section-title">
      <span>Step 1</span>
      <h2>Prepare 3D printed parts and hardware</h2>
      <p>Use the SO101 print files for new builds. Existing SO100 users can still follow the same installation and software workflow.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">1.1</span><strong>Choose print files</strong><p>Use Ender files for 220 mm × 220 mm beds, or Prusa / Up files for 205 mm × 250 mm beds.</p></div>
      <div className="step-card"><span className="step-mini">1.2</span><strong>Use recommended settings</strong><p>PLA+, 0.4 mm nozzle at 0.2 mm layer height, or 0.6 mm nozzle at 0.4 mm layer height.</p></div>
      <div className="step-card"><span className="step-mini">1.3</span><strong>Label servos</strong><p>Before wiring, label F1-F6 and L1-L6 to avoid calibration and assembly mistakes.</p></div>
    </div>
    <details className="content-details">
      <summary>3D printing references</summary>
      <ul>
        <li>Ender bed size: <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl">Follower</a> and <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl">Leader</a>.</li>
        <li>Prusa / Up bed size: <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl">Follower</a> and <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl">Leader</a>.</li>
        <li>Suggested infill density: 15%.</li>
        <li>Use supports where needed, but avoid unnecessary supports inside horizontal screw holes.</li>
      </ul>
    </details>
  </section>

  <section id="install-lerobot" className="section-card">
    <div className="section-title">
      <span>Step 2</span>
      <h2>Install LeRobot</h2>
      <p>Start with a clean Miniforge environment, then install the Seeed-verified LeRobot repository and Feetech motor dependencies.</p>
    </div>
    <div className="command-flow">
      <div>
        <h3>1. Install Miniforge</h3>
        <pre><code>{`# Jetson / aarch64
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
source ~/.bashrc

# x86_64 Ubuntu
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
source ~/.bashrc
conda init --all`}</code></pre>
      </div>
      <div>
        <h3>2. Create the LeRobot environment</h3>
        <pre><code>{`conda create -y -n lerobot python=3.10
conda activate lerobot`}</code></pre>
      </div>
      <div>
        <h3>3. Clone and install LeRobot</h3>
        <pre><code>{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot
conda install ffmpeg -c conda-forge
pip install -e ".[feetech]"`}</code></pre>
      </div>
      <div>
        <h3>4. Check GPU PyTorch</h3>
        <pre><code>{`python3
import torch
print(torch.cuda.is_available())
exit()`}</code></pre>
      </div>
    </div>
    <details className="content-details">
      <summary>Jetson JetPack 6.0+ additional configuration</summary>
      <p>On Jetson, install GPU-enabled PyTorch / Torchvision before installing LeRobot dependencies. If pip replaces them with CPU versions, reinstall the Jetson-compatible packages.</p>
      <pre><code>{`conda install -y -c conda-forge "opencv>=4.10.0.84"
conda remove opencv
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0`}</code></pre>
    </details>
    <details className="content-details">
      <summary>ffmpeg compatibility note</summary>
      <p>If dataset recording or visualization reports codec-related errors, install a known working ffmpeg version.</p>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>
  </section>

  <section id="motor-setup" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Power Check Before Servo Setup</strong>
        <p>Leader Arm servos must use 5V. For SO101 Pro, Follower Arm servos use 12V. USB does not power the servos; both USB and the correct power supply must be connected.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Step 3</span>
      <h2>Configure servo IDs before assembly</h2>
      <p>For kit versions, configure one servo at a time. Pre-assembled users can skip this section and go directly to full-arm calibration.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Follower labels</b><span>Use F1-F6 to represent the follower arm from base to gripper.</span></div>
      <div className="module-summary-card"><b>Leader labels</b><span>Use L1-L6 to represent the leader arm from base to handle / gripper.</span></div>
      <div className="module-summary-card warning-card"><b>SO101 gear ratios</b><span>L1 and L3 use 1:191; L2 uses 1:345; L4-L6 use 1:147.</span></div>
    </div>
    <details className="content-details">
      <summary>Find the USB ports</summary>
      <pre><code>{`lerobot-find-port

# If needed on Linux:
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1`}</code></pre>
      <p>On many Linux and Jetson setups, the first connected device maps to <code>{`/dev/ttyACM0`}</code> and the second maps to <code>{`/dev/ttyACM1`}</code>. Always verify before running setup or calibration commands.</p>
    </details>
    <details className="content-details">
      <summary>Servo model and joint mapping for SO101</summary>
      <table>
        <thead><tr><th>Servo Model</th><th>Gear Ratio</th><th>Joints</th></tr></thead>
        <tbody>
          <tr><td>ST-3215-C044 (7.4V)</td><td>1:191</td><td>L1</td></tr>
          <tr><td>ST-3215-C001 (7.4V)</td><td>1:345</td><td>L2</td></tr>
          <tr><td>ST-3215-C044 (7.4V)</td><td>1:191</td><td>L3</td></tr>
          <tr><td>ST-3215-C046 (7.4V)</td><td>1:147</td><td>L4-L6</td></tr>
          <tr><td>ST-3215-C001 / C018 / C047</td><td>1:345</td><td>F1-F6</td></tr>
        </tbody>
      </table>
    </details>
    <details className="content-details">
      <summary>Configure Follower Arm servos</summary>
      <pre><code>{`lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0`}</code></pre>
      <p>Connect only the servo requested by the terminal prompt. After each step, check power and cabling before pressing Enter.</p>
    </details>
    <details className="content-details">
      <summary>Configure Leader Arm servos</summary>
      <pre><code>{`lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1`}</code></pre>
      <p>Use 5V for Leader Arm servo setup. Do not connect all servos at once during ID writing.</p>
    </details>
  </section>

  <section id="assembly" className="section-card">
    <div className="section-title">
      <span>Step 4</span>
      <h2>Assemble the Leader and Follower arms</h2>
      <p>After servo ID configuration, assemble the arms according to the SO101 mechanical guide. Follower and Leader assembly are mostly the same, except for the end-effector / handle section after Step 12.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">4.1</span><strong>Check servo labels again</strong><p>Confirm F1-F6 and L1-L6 before installing them into the printed parts.</p></div>
      <div className="step-card"><span className="step-mini">4.2</span><strong>Assemble the Leader Arm</strong><p>Follow the numbered images and route cables carefully to avoid joint interference.</p></div>
      <div className="step-card"><span className="step-mini">4.3</span><strong>Assemble the Follower Arm</strong><p>Follow the same base structure, then install the follower end-effector and gripper section.</p></div>
    </div>
    <details className="content-details">
      <summary>Assembly reference images</summary>
      <p>The original tutorial includes full leader and follower assembly image tables. Keep this page concise by using this section as a reference checkpoint before full calibration.</p>
      <ul>
        <li>Leader assembly: Step 1 to Step 20.</li>
        <li>Follower assembly: Step 1 to Step 17.</li>
        <li>Check cable routing after every major joint is installed.</li>
      </ul>
    </details>
  </section>

  <section id="calibration" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Calibration Safety Check</strong>
        <p>Hold the robot carefully, clear the workspace, and ensure correct power before calibration. Calibration quality directly affects teleoperation, recording, and policy evaluation.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Step 5</span>
      <h2>Calibrate the Leader and Follower arms</h2>
      <p>Calibration aligns physical joint positions with LeRobot’s expected joint states. Use the same robot IDs for teleoperation, recording, replay, and evaluation.</p>
    </div>
    <details className="content-details">
      <summary>Re-calibration options</summary>
      <p>To re-calibrate, either delete the related calibration files under <code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> and <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code>, or type <code>{`c`}</code> when LeRobot asks whether to reuse the existing calibration file.</p>
    </details>
    <details className="content-details">
      <summary>Calibrate the Follower Arm</summary>
      <pre><code>{`sudo chmod 666 /dev/ttyACM*

lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Calibrate the Leader Arm</summary>
      <pre><code>{`lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Optional: middle-position calibration with the Seeed SoARM tool</summary>
      <p>If you see errors such as <code>{`Magnitude 30841 exceeds 2047`}</code>, use the SoARM quick tool to write the current position as the middle value 2048, then redo full-arm calibration.</p>
      <pre><code>{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt

python -m src.tools.servo_disable
python -m src.tools.servo_middle_calibration
python -m src.tools.servo_center_test`}</code></pre>
      <p><a href="/lerobot_steering_gear_debugging_tool/">Open Steering Gear Debugging Tool Tutorial</a></p>
    </details>
  </section>

  <section id="teleoperation" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Teleoperation Safety Check</strong>
        <p>Start without cameras first. Use a clear workspace and stop immediately if either arm loses power or communication.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Step 6</span>
      <h2>Run simple teleoperation</h2>
      <p>Simple teleoperation verifies the leader-to-follower control chain before adding camera streams and recording datasets.</p>
    </div>
    <details className="content-details">
      <summary>Simple teleoperation command</summary>
      <pre><code>{`sudo chmod 666 /dev/ttyACM*

lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Teleoperation demo video</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="SO-ARM teleoperation video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Step 7</span>
      <h2>Add cameras for observation data</h2>
      <p>Camera configuration directly affects dataset quality. Start with one low-resolution stream, then add more cameras or depth streams after the system is stable.</p>
    </div>
    <div className="camera-grid">
      <details className="content-details">
        <summary>Use regular USB / OpenCV cameras</summary>
        <pre><code>{`lerobot-find-cameras opencv`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true`}</code></pre>
        <div className="callout"><b>MJPG recommendation</b><p><code>{`MJPG`}</code> is compressed and usually provides better resolution / FPS. Avoid placing multiple high-resolution USB cameras on the same USB hub.</p></div>
      </details>
      <details className="content-details">
        <summary>Use RealSense D405 / D435i</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {type: realsense_d435i_color, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, color_mode: rgb, color_stream_format: rgb8, rotation: 0, warmup_s: 1},
    d435i_depth: {type: realsense_d435i_depth, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, max_depth_m: 2.0, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}</code></pre>
      </details>
      <details className="content-details">
        <summary>Use Orbbec Gemini2 / Gemini 336</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[orbbec]"
sudo chmod a+rw /dev/bus/usb/*/*
cat /sys/module/usbcore/parameters/usbfs_memory_mb
sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'
lerobot-find-cameras orbbec`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {type: orbbec_color, serial_number_or_name: "CP9JA530003A", width: 640, height: 480, fps: 30, color_mode: rgb, rotation: 0, warmup_s: 1},
    orbbec_depth: {type: orbbec_depth, serial_number_or_name: "CP9JA530003A", width: 640, height: 400, fps: 30, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}</code></pre>
      </details>
    </div>
  </section>

  <section id="record-dataset" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Recording Safety Check</strong>
        <p>Use a simple and repeatable task first. Keep camera positions, lighting, object placement, and motion style consistent.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Step 8</span>
      <h2>Record and manage LeRobot datasets</h2>
      <p>Start with a small local dataset, verify the videos and states, then upload to Hugging Face Hub when the setup is stable.</p>
    </div>
    <div className="tips-grid">
      <div><b>Suggested scale</b><span>Start with 5 test episodes, then record at least 50 episodes for a real training run.</span></div>
      <div><b>Consistency</b><span>Keep cameras fixed and ensure the manipulated object is always visible in the camera views.</span></div>
      <div><b>Task design</b><span>You should be able to complete the task by looking only at the camera images.</span></div>
    </div>
    <details className="content-details">
      <summary>Record a local dataset</summary>
      <pre><code>{`lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
      <p>When <code>{`--dataset.push_to_hub=false`}</code>, the dataset is saved under <code>{`~/.cache/huggingface/lerobot`}</code>.</p>
    </details>
    <details className="content-details">
      <summary>Record and upload to Hugging Face Hub</summary>
      <pre><code>{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER

lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=\${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Keyboard controls while recording</summary>
      <table>
        <thead><tr><th>Key</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>Right Arrow</td><td>End the current episode / reset early and move to the next one.</td></tr>
          <tr><td>Left Arrow</td><td>Cancel the current episode and record it again.</td></tr>
          <tr><td>ESC</td><td>Stop the session immediately, encode videos, and save / upload the dataset.</td></tr>
        </tbody>
      </table>
      <pre><code>{`# If keyboard shortcuts do not respond:
pip install pynput==1.6.8`}</code></pre>
    </details>
  </section>

  <section id="visualize" className="section-card">
    <div className="section-title">
      <span>Step 9</span>
      <h2>Visualize and replay datasets</h2>
      <p>Always inspect the dataset before training. Check camera images, robot states, actions, and episode timing.</p>
    </div>
    <details className="content-details">
      <summary>Visualize a dataset</summary>
      <pre><code>{`# Hub dataset
lerobot-dataset-viz \
  --repo-id \${HF_USER}/so101_test

# Local dataset
lerobot-dataset-viz \
  --repo-id seeedstudio123/test`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Replay an episode</summary>
      <div className="callout warning"><b>Optional step</b><p>Replay can move the physical robot. Use it only after confirming calibration and workspace safety.</p></div>
      <pre><code>{`lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>

  <section id="training" className="section-card">
    <div className="section-title">
      <span>Step 10</span>
      <h2>Train and evaluate policies</h2>
      <p>For the first complete workflow, use ACT. After ACT works end-to-end, you can try SmolVLA, Pi0, Pi0.5, GR00T, PEFT, multi-GPU training, or asynchronous inference.</p>
    </div>
    <details className="content-details">
      <summary>ACT: recommended first policy</summary>
      <h3>Train</h3>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <h3>Evaluate</h3>
      <pre><code>{`lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_so101_test \
  --dataset.single_task="Put the cube into the box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>
    <details className="content-details">
      <summary>SmolVLA / Pi0 / Pi0.5 / GR00T advanced options</summary>
      <div className="module-summary-grid">
        <div className="module-summary-card"><b>SmolVLA</b><span>Lightweight VLA fine-tuning entry point. Try it after ACT is stable.</span></div>
        <div className="module-summary-card"><b>Pi0 / Pi0.5</b><span>Useful for language-conditioned policy experiments.</span></div>
        <div className="module-summary-card"><b>GR00T</b><span>Requires a stricter CUDA / PyTorch / FlashAttention stack. Treat it as an advanced experiment.</span></div>
      </div>
      <pre><code>{`# SmolVLA
pip install -e ".[smolvla]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=\${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true

# Pi0 / Pi0.5
pip install -e ".[pi]"

# GR00T
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
pip install "lerobot[groot]"`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Optional: PEFT, multi-GPU, and asynchronous inference</summary>
      <ul>
        <li><b>PEFT / LoRA:</b> reduce fine-tuning cost by training adapter parameters instead of all model weights.</li>
        <li><b>Multi-GPU:</b> use <code>{`accelerate launch`}</code> when training larger policies or larger batches.</li>
        <li><b>Asynchronous inference:</b> run policy inference on a server while the robot client executes action chunks.</li>
      </ul>
      <pre><code>{`# PEFT
pip install -e ".[peft]"

# Multi-GPU helper
pip install accelerate
accelerate config

# Async inference dependencies
pip install -e ".[async]"`}</code></pre>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>FAQ</span>
      <h2>Common issues and fixes</h2>
      <p>Most SO-ARM LeRobot issues are related to serial permissions, incorrect power, loose servo cables, ffmpeg versions, calibration cache, or mismatched camera names.</p>
    </div>
    <details className="content-details">
      <summary>Could not connect on port /dev/ttyACM0</summary>
      <p>Grant serial permissions and confirm that the device exists.</p>
      <pre><code>{`ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM*`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Motor 'gripper' was not found</summary>
      <p>Check whether the requested servo is the only connected servo, whether the servo cable is fully inserted, and whether the power supply is correct.</p>
    </details>
    <details className="content-details">
      <summary>No valid stream found in input file</summary>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>
    <details className="content-details">
      <summary>ConnectionError: no status packet</summary>
      <p>Check whether the arm on the selected port is powered on. If a servo LED is off, inspect the previous servo cable in the daisy chain.</p>
    </details>
    <details className="content-details">
      <summary>Magnitude exceeds 2047 during calibration</summary>
      <p>Power-cycle the robot and try again. If the issue remains, run middle-position calibration and then redo full-arm calibration.</p>
    </details>
    <details className="content-details">
      <summary>Evaluation reports mean is infinity</summary>
      <p>Camera names such as <code>{`front`}</code> and <code>{`side`}</code> must match the names used during dataset recording.</p>
    </details>
    <details className="content-details">
      <summary>Keyboard shortcuts do not work during recording</summary>
      <pre><code>{`echo $DISPLAY
pip install pynput==1.6.8`}</code></pre>
    </details>
    <details className="content-details">
      <summary>rerun has no attribute scalar</summary>
      <pre><code>{`pip3 install rerun-sdk==0.23`}</code></pre>
    </details>
  </section>

  <section className="section-card course-path-section">
    <div className="section-title">
      <span>Continue Learning</span>
      <h2>SO-ARM learning path</h2>
      <p>After completing this LeRobot guide, continue with servo debugging, simulation, reinforcement learning, GR00T, and dual-arm workflows.</p>
    </div>
    <div className="course-path-grid">
      <a className="course-path-item active" href="/lerobot_so100m_new/">
        <span className="course-index">1</span>
        <span className="course-path-copy"><strong>SO100 / SO101 with LeRobot</strong><span>Assembly, calibration, teleoperation, dataset collection, training, and evaluation.</span></span>
        <span className="course-tag">Current article</span>
      </a>
      <a className="course-path-item" href="/lerobot_steering_gear_debugging_tool/">
        <span className="course-index">2</span>
        <span className="course-path-copy"><strong>Servo Debugging Tool</strong><span>Check servo IDs, zero position, direction, communication, and middle-position calibration.</span></span>
        <span className="course-tag">Debugging</span>
      </a>
      <a className="course-path-item" href="/simulate_soarm101_by_leisaac/">
        <span className="course-index">3</span>
        <span className="course-path-copy"><strong>LeIsaac Simulation</strong><span>Understand SO-ARM simulation, scenes, and task setup before Sim2Real.</span></span>
        <span className="course-tag">Simulation</span>
      </a>
      <a className="course-path-item" href="/training_soarm101_policy_with_isaacLab/">
        <span className="course-index">4</span>
        <span className="course-path-copy"><strong>Isaac Lab Reinforcement Learning</strong><span>Train policies in simulation and learn reward design and deployment flow.</span></span>
        <span className="course-tag">RL</span>
      </a>
      <a className="course-path-item" href="/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/">
        <span className="course-index">5</span>
        <span className="course-path-copy"><strong>SO101 with NVIDIA GR00T</strong><span>Fine-tune embodied AI / VLA models and deploy on Jetson Thor.</span></span>
        <span className="course-tag">VLA</span>
      </a>
      <a className="course-path-item" href="/lerobot_double_arm_so_arm_training/">
        <span className="course-index">6</span>
        <span className="course-path-copy"><strong>Dual-Arm SO-ARM Training</strong><span>Move from single-arm tasks to dual-arm data collection and training.</span></span>
        <span className="course-tag">Dual-arm</span>
      </a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>References</span>
      <h2>References and support</h2>
    </div>
    <div className="reference-grid">
      <a href="https://github.com/TheRobotStudio/SO-ARM100">TheRobotStudio SO-ARM10x</a>
      <a href="https://github.com/huggingface/lerobot/tree/main">Hugging Face LeRobot</a>
      <a href="https://huggingface.co/docs/lerobot/index">LeRobot Documentation</a>
      <a href="https://github.com/Seeed-Projects/lerobot">Seeed-Projects LeRobot</a>
      <a href="https://forum.seeedstudio.com/">Seeed Studio Forum</a>
      <a href="https://discord.gg/8TnwDdjFGU">LeRobot Discord</a>
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
.rebot-page * { box-sizing: border-box; }
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); text-align: center; }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.82rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.step-card-grid, .module-summary-grid, .spec-grid, .tips-grid, .notice-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.step-card, .module-summary-card, .spec-card, .tips-grid div, .notice-card, .command-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.step-card:hover, .course-path-item:hover, .reference-grid a:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.step-card strong, .module-summary-card b, .spec-card b, .tips-grid b, .notice-card strong { color: var(--rb-text); font-size: 1rem; }
.step-card p, .module-summary-card span, .spec-card span, .tips-grid span, .notice-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.notice-card.warning { border-color: rgba(245,158,11,0.35); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; overflow: hidden; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker { display: none; }
.content-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; }
.content-details[open] summary::after { content: "收起"; }
.command-flow > div, .command-card { margin: 1rem 0; }
.command-flow h3, .command-card h3 { margin-top: 0; color: var(--rb-text); }
.callout { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.65; }
.callout.warning { color: #7c2d12; background: #fff7ed; border-color: #fed7aa; }
.callout.danger { color: #7f1d1d; background: #fef2f2; border-color: #fecaca; }
.video-container { position: relative; width: 100%; max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; transition: all 0.18s ease; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
.rebot-page pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
.rebot-page table { display: table; width: 100%; border-collapse: collapse; }
.rebot-page table th, .rebot-page table td { border: 1px solid var(--rb-border); padding: 0.65rem; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .tips-grid div, html[data-theme='dark'] .notice-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .notice-card.warning, html[data-theme='dark'] .callout.warning { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .callout.danger { color: #fecaca; background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 980px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(3, minmax(0, 1fr)); position: static; } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hero-actions a { width: 100%; justify-content: center; } .safety-alert { grid-template-columns: 1fr; } }
`}</style>
