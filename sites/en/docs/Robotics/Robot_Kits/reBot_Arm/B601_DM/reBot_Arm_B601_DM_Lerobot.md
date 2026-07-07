---
description: This wiki provides a complete workflow for using reBot Arm B601-DM with LeRobot, including environment setup, calibration, teleoperation, camera integration, dataset collection, training, evaluation, and advanced deployment.
title: Getting Started with reBot Arm B601-DM in LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg
slug: /rebot_arm_b601_dm_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-04
  author: ZhuYaohui
translation:
  skip:
    - zh-CN
createdAt: '2026-04-09'
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/rebot_arm_b601_dm_lerobot/
---

# Getting Started with reBot Arm B601-DM in LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div className="hero-copy">
      <span className="eyebrow">reBot Arm × LeRobot</span>
      <h2>Start with teleoperation, then build datasets, train policies, and deploy on a real robotic arm</h2>
      <p>This guide is for users who have already completed the reBot Arm B601-DM quick start and basic hardware setup. It walks you through LeRobot installation, arm calibration, teleoperation, camera integration, dataset collection, training, evaluation, and advanced deployment workflows.</p>
      <div className="hero-actions">
        <a href="#quick-path">View Learning Path</a>
        <a href="#install-lerobot">Install LeRobot</a>
        <a href="#record-dataset">Start Dataset Collection</a>
      </div>
    </div>
    <div className="hero-card image-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM" />
      <span>Teleoperation · Dataset · Training · Evaluation</span>
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


  <nav className="doc-nav" aria-label="reBot LeRobot quick navigation">
    <a href="#quick-path">Path</a>
    <a href="#install-lerobot">Install</a>
    <a href="#calibration">Calibrate</a>
    <a href="#teleoperation">Teleoperate</a>
    <a href="#camera">Cameras</a>
    <a href="#record-dataset">Dataset</a>
    <a href="#training">Training</a>
    <a href="#faq">FAQ</a>
  </nav>

  <section id="quick-path" className="section-card">
    <div className="section-title">
      <span>Start Here</span>
      <h2>Recommended workflow</h2>
      <p>If this is your first LeRobot project, follow the sequence below. If you are already familiar with LeRobot, you can jump directly to the module you need.</p>
    </div>

    <div className="path-grid">
      <a className="path-card" href="#install-lerobot"><span>Step 1</span><b>Install LeRobot</b><small>Create the conda environment, install Seeed's verified LeRobot fork, and install required packages.</small></a>
      <a className="path-card" href="#calibration"><span>Step 2</span><b>Calibrate arms</b><small>Calibrate the B601-DM follower arm and reBot 102 leader arm so their physical positions match.</small></a>
      <a className="path-card" href="#teleoperation"><span>Step 3</span><b>Teleoperate</b><small>Run leader-follower teleoperation and verify that the follower arm moves correctly and safely.</small></a>
      <a className="path-card" href="#camera"><span>Step 4</span><b>Add cameras</b><small>Connect OpenCV, RealSense, or Orbbec cameras and verify video streams before recording data.</small></a>
      <a className="path-card" href="#record-dataset"><span>Step 5</span><b>Record datasets</b><small>Collect task demonstrations locally or upload them to Hugging Face Hub.</small></a>
      <a className="path-card" href="#training"><span>Step 6</span><b>Train and evaluate</b><small>Start with ACT, then try SmolVLA, Pi0 / Pi0.5, or GR00T for more advanced experiments.</small></a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Detailed Steps</span>
      <h2>Step-by-step LeRobot workflow</h2>
      <p>This sequence turns the full LeRobot workflow into small, testable milestones. Finish each step before moving to real-arm data collection or policy deployment.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">Step 0</span><strong>Complete B601-DM quick start</strong><p>Verify power, USB2CAN, motor IDs, zero position, gripper direction, and basic motion before using LeRobot.</p></div>
      <div className="step-card"><span className="step-mini">Step 1</span><strong>Install LeRobot environment</strong><p>Create the conda environment, install the Seeed-verified LeRobot fork, and check PyTorch / ffmpeg compatibility.</p></div>
      <div className="step-card"><span className="step-mini">Step 2</span><strong>Calibrate follower and leader arms</strong><p>Calibrate the B601-DM follower and reBot 102 leader so teleoperation starts from known physical references.</p></div>
      <div className="step-card"><span className="step-mini">Step 3</span><strong>Run teleoperation safely</strong><p>Use a small clear workspace first. Confirm joint directions, gripper behavior, emergency stop procedure, and reset flow.</p></div>
      <div className="step-card"><span className="step-mini">Step 4</span><strong>Add cameras and validate streams</strong><p>Start with one OpenCV camera, then add RealSense or Orbbec RGB-D streams when the basic setup is stable.</p></div>
      <div className="step-card"><span className="step-mini">Step 5</span><strong>Record and inspect datasets</strong><p>Collect short local datasets first, visualize episodes, replay only when safe, and check observations / actions before training.</p></div>
      <div className="step-card"><span className="step-mini">Step 6</span><strong>Train and evaluate policies</strong><p>Start with ACT, then move to SmolVLA, Pi0 / Pi0.5, GR00T, PEFT, multi-GPU training, or async inference.</p></div>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Overview</span>
      <h2>Project overview</h2>
      <p>reBot Arm B601-DM is an open-source robotic arm project from Seeed Studio. It is designed to lower the barrier to embodied AI learning by providing open mechanical files, BOMs, software, and tutorials.</p>
    </div>

    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Goal</b><span>Build a complete imitation-learning workflow from teleoperation to policy evaluation.</span></div>
      <div className="module-summary-card"><b>Robot</b><span>B601-DM follower arm with Damiao motors and a reBot 102 leader arm.</span></div>
      <div className="module-summary-card"><b>Data</b><span>Use LeRobot to record synchronized robot states, actions, camera frames, and task descriptions.</span></div>
      <div className="module-summary-card"><b>Training</b><span>Start with ACT, then expand to VLA and larger foundation-model workflows.</span></div>
    </div>

    <div className="info-grid">
      <div><strong>Robotic arm</strong><span>6-DOF reBot Arm B601-DM follower arm with a Damiao motor version.</span></div>
      <div><strong>Leader arm</strong><span>reBot Arm 102 leader arm for real-time teleoperation and demonstration collection.</span></div>
      <div><strong>Framework</strong><span>LeRobot for teleoperation, dataset recording, training, evaluation, and policy deployment.</span></div>
      <div><strong>Compute platform</strong><span>Ubuntu x86 workstation, NVIDIA GPU workstation, or Jetson Orin platform depending on the task.</span></div>
    </div>

    <details className="content-details">
      <summary>Watch the reBot project introduction video</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/PoMv3mw8SGk" title="reBot Arm project introduction" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>System</span>
      <h2>Initial system environment</h2>
      <p>Start from a clean environment. For Jetson users, make sure GPU-enabled PyTorch and Torchvision are installed before installing LeRobot dependencies.</p>
    </div>

    <div className="two-col">
      <div className="check-card">
        <h3>Ubuntu x86</h3>
        <ul>
          <li>Ubuntu 22.04</li>
          <li>CUDA 12+</li>
          <li>Python 3.10 / 3.12 depending on your setup</li>
          <li>Torch 2.6 or a compatible CUDA build</li>
        </ul>
      </div>
      <div className="check-card">
        <h3>Jetson Orin</h3>
        <ul>
          <li>JetPack 6.0 or 6.1</li>
          <li>Python 3.10</li>
          <li>Torch 2.3+</li>
          <li>Install GPU-enabled PyTorch before LeRobot</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="install-lerobot" className="section-card">
    <div className="section-title">
      <span>Step 1</span>
      <h2>Install LeRobot</h2>
      <p>This section prepares the working environment, installs Seeed's verified LeRobot repository, and adds the reBot-specific packages.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>1.1 Install Miniforge</b><span>Create an isolated conda environment instead of modifying the system Python.</span></div>
      <div className="module-summary-card"><b>1.2 Clone LeRobot</b><span>Use the Seeed-Projects fork validated for B601-DM examples.</span></div>
      <div className="module-summary-card"><b>1.3 Install packages</b><span>Install LeRobot, the B601 robot package, the reBot 102 teleoperator package, and MotorBridge.</span></div>
      <div className="module-summary-card"><b>1.4 Verify media stack</b><span>Install ffmpeg and confirm video encoding support before collecting datasets.</span></div>
    </div>

    <details className="content-details">
      <summary>Installation video</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/mWrWeqAPDSY" title="Install LeRobot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <div className="command-card">
      <h3>1. Install Miniforge</h3>
      <pre><code>{`cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc`}</code></pre>
    </div>

    <div className="command-card">
      <h3>2. Clone the LeRobot repository</h3>
      <pre><code>{`mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git`}</code></pre>
    </div>

    <div className="command-card">
      <h3>3. Create the conda environment and install packages</h3>
      <p>Use Seeed's verified LeRobot repository for this guide. The upstream LeRobot repository changes quickly, so commands and dataset formats may differ.</p>
      <pre><code>{`cd ~/rebot_lerobot

conda create -y -n lerobot python=3.12
conda activate lerobot

pip install -e ./lerobot
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge`}</code></pre>
    </div>

    <div className="command-card">
      <h3>4. Install ffmpeg</h3>
      <pre><code>{`conda install ffmpeg -c conda-forge

# If you encounter compatibility issues:
conda install ffmpeg=7.1.1 -c conda-forge

# Check libsvtav1 support:
ffmpeg -encoders | grep svtav1`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Jetson JetPack 6.0+ special configuration</summary>
      <p>Skip this step on regular PCs. On Jetson, install GPU-enabled PyTorch and Torchvision first, then apply the following dependency adjustments when needed.</p>
      <pre><code>{`conda install -y -c conda-forge "opencv>=4.10.0.84"
conda remove opencv
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Check PyTorch and Torchvision</summary>
      <p>pip installation may replace your GPU-enabled PyTorch with a CPU build. Always verify CUDA availability before continuing.</p>
      <pre><code>{`python3

import torch
print(torch.cuda.is_available())  # Expected output: True`}</code></pre>
    </details>
  </section>

  <section id="calibration" className="section-card">
    
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<div className="section-title">
      <span>Step 2</span>
      <h2>Calibrate the robotic arm</h2>
      <p>Calibration aligns the physical positions of the leader and follower arms. This is essential for teleoperation, dataset collection, and policy transfer between robots.</p>
    </div>
    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">2.1</span><strong>Grant permissions</strong><p>Confirm the leader serial port and the B601-DM USB2CAN serial bridge are accessible.</p></div>
      <div className="step-card"><span className="step-mini">2.2</span><strong>Calibrate follower</strong><p>Set the B601-DM follower reference position and verify the gripper is in the correct zero posture.</p></div>
      <div className="step-card"><span className="step-mini">2.3</span><strong>Calibrate leader</strong><p>Calibrate the reBot 102 leader arm so teleoperation mapping is consistent.</p></div>
    </div>

    <details className="content-details">
      <summary>Calibration video</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/v8Ek1Ad1VWo" title="Calibrate reBot Arm B601-DM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <div className="warning-card">
      <strong>Recalibration note</strong>
      <span>If you need to recalibrate, delete calibration files under <code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> or <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code>, then run calibration again.</span>
    </div>

    <div className="command-card">
      <h3>1. Grant serial permissions</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm / serial bridge`}</code></pre>
    </div>

    <div className="command-card">
      <h3>2. Calibrate the B601-DM follower arm</h3>
      <p>For B601-DM, follower calibration is usually required only once after assembly. The gripper should be fully closed when following the zero-position reference.</p>
      <pre><code>{`lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao`}</code></pre>
      <div align="center">
        <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg" />
      </div>
    </div>

    <details className="content-details">
      <summary>3. Calibrate the reBot 102 leader arm</summary>
      <div className="warning-card">
        <strong>Important</strong>
        <span>When calibration starts, each servo's current position on the reBot 102 leader arm is reset as zero. Joint limits are defined in the configuration file, not in calibration data.</span>
      </div>
      <div align="center">
        <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" />
      </div>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
      <p>If this is your first connection and the serial device disconnects immediately, <code>brltty</code> may be occupying the port. Remove it with <code>sudo apt remove brltty</code>.</p>
    </details>
  </section>

  <section id="teleoperation" className="section-card">
    
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<div className="section-title">
      <span>Step 3</span>
      <h2>Teleoperation test</h2>
      <p>After calibration, run a basic leader-follower teleoperation test before adding cameras or recording datasets.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Before starting</b><span>Clear the workspace, fix the arm base, and keep one hand close to the keyboard stop procedure.</span></div>
      <div className="module-summary-card"><b>During motion</b><span>Move the leader slowly and verify every joint direction before increasing speed or range.</span></div>
      <div className="module-summary-card"><b>If interrupted</b><span>Stop the program before reconnecting power, USB, CAN, or camera cables.</span></div>
    </div>

    <div className="danger-card">
      <strong>Safety reminder</strong>
      <span>If power, USB, CAN, or signal cables disconnect during teleoperation, stop the program first, return the arm to the zero position, reconnect power, and then restart the program.</span>
    </div>

    <div className="command-card">
      <h3>Run teleoperation</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*
sudo chmod 666 /dev/ttyACM*

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Teleoperation demo video</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/6_hXd_QXO2A" title="Teleoperation demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Step 4</span>
      <h2>Add cameras</h2>
      <p>Cameras provide visual observations for dataset collection and policy training. Start with a simple OpenCV camera, then move to RealSense or Orbbec if you need RGB-D data.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Option A: USB camera</b><span>Best first test for validating LeRobot camera configuration and display_data.</span></div>
      <div className="module-summary-card"><b>Option B: RealSense</b><span>Use when you need RGB-D observations and Intel RealSense SDK support.</span></div>
      <div className="module-summary-card"><b>Option C: Orbbec</b><span>Use Gemini2 / Gemini 336 when your workflow needs Orbbec RGB-D streams.</span></div>
    </div>

    <div className="camera-grid">
      <details className="content-details" open>
        <summary>Generic USB / OpenCV camera</summary>
        <pre><code>{`lerobot-find-cameras opencv

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
        <p>For multiple USB cameras, avoid connecting too many high-resolution cameras through the same USB hub.</p>
      </details>

      <details className="content-details">
        <summary>RealSense D405 / D435i</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{
      d435i_color: {type: realsense_d435i_color, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, color_mode: rgb, color_stream_format: rgb8, rotation: 0, warmup_s: 1},
      d435i_depth: {type: realsense_d435i_depth, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, max_depth_m: 2.0, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
    }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
      </details>

      <details className="content-details">
        <summary>Orbbec Gemini2 / Gemini 336</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[orbbec]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras orbbec

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{
      orbbec_color: {type: orbbec_color, serial_number_or_name: "CP9JA530003A", width: 640, height: 480, fps: 30, color_mode: rgb, rotation: 0, warmup_s: 1},
      orbbec_depth: {type: orbbec_depth, serial_number_or_name: "CP9JA530003A", width: 640, height: 400, fps: 30, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
    }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
        <p>If you see <code>No Orbbec camera found</code>, run <code>lerobot-find-cameras orbbec</code> and update the serial number in your camera config.</p>
      </details>
    </div>
  </section>

  <section id="record-dataset" className="section-card">
    
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<div className="section-title">
      <span>Step 5</span>
      <h2>Collect datasets</h2>
      <p>Once teleoperation and cameras are stable, record demonstrations for your target task. You can save datasets locally or upload them to Hugging Face Hub.</p>
    </div>
    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">5.1</span><strong>Record locally first</strong><p>Use a small number of episodes and keep push_to_hub disabled while validating the workflow.</p></div>
      <div className="step-card"><span className="step-mini">5.2</span><strong>Check controls</strong><p>Use keyboard shortcuts to end, cancel, or stop episodes safely during recording.</p></div>
      <div className="step-card"><span className="step-mini">5.3</span><strong>Upload when stable</strong><p>Push to Hugging Face only after confirming the local dataset structure and statistics are correct.</p></div>
    </div>

    <details className="content-details">
      <summary>Dataset collection video</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/PLACEHOLDER" title="Dataset collection video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <details className="content-details" open>
      <summary>Save the dataset locally</summary>
      <pre><code>{`lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
      <p>The dataset will be saved under <code>{`~/.cache/huggingface/lerobot`}</code> using the repo ID you provided.</p>
    </details>

    <details className="content-details">
      <summary>Upload the dataset to Hugging Face Hub</summary>
      <pre><code>{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential

HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER

lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=\${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Keyboard controls during recording</summary>
      <div className="content-table">
        <table>
          <thead><tr><th>Key</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td>Right Arrow</td><td>End the current episode or reset early and move to the next one.</td></tr>
            <tr><td>Left Arrow</td><td>Cancel the current episode and re-record it.</td></tr>
            <tr><td>ESC</td><td>Stop the session immediately, encode videos, and upload the dataset if enabled.</td></tr>
          </tbody>
        </table>
      </div>
      <p>If keyboard events do not respond, try <code>pip install pynput==1.6.8</code>.</p>
    </details>

    <div className="tip-card">
      <strong>Dataset quality tips</strong>
      <span>Keep camera positions fixed, keep lighting stable, make sure the target object is visible, and collect enough episodes. For a simple grasping task, start from at least 50 episodes when possible.</span>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Dataset</span>
      <h2>Visualize and replay datasets</h2>
      <p>Before training, inspect the recorded dataset and verify that images, states, actions, and task descriptions are correct.</p>
    </div>

    <div className="command-card">
      <h3>Visualize a dataset</h3>
      <pre><code>{`lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Replay an episode on the robot</summary>
      <p>This step can be unstable, so it is optional.</p>
      <pre><code>{`lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>

  <section id="training" className="section-card">
    
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear all valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<div className="section-title">
      <span>Step 6</span>
      <h2>Training and evaluation</h2>
      <p>Start with ACT to validate your data pipeline. After that, you can try SmolVLA, Pi0 / Pi0.5, GR00T N1.5, PEFT, multi-GPU training, or async inference.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>ACT first</b><span>Recommended baseline for verifying dataset quality and robot action format.</span></div>
      <div className="module-summary-card"><b>VLA policies</b><span>Try SmolVLA, Pi0, or Pi0.5 after the ACT pipeline is stable.</span></div>
      <div className="module-summary-card"><b>Advanced models</b><span>Use GR00T or async inference only after dependencies, CUDA, and deployment flow are validated.</span></div>
    </div>

    <details className="content-details" open>
      <summary>ACT: recommended first policy</summary>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <p>For RTX 50 series GPUs, add <code>--dataset.video_backend=pyav</code> if torchvision video APIs cause errors.</p>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>

    <details className="content-details">
      <summary>SmolVLA: lightweight robot foundation model</summary>
      <p>SmolVLA is a lightweight foundation model for fine-tuning on your own LeRobot datasets. It uses camera images, robot states, and a natural-language task instruction to predict action chunks.</p>
      <pre><code>{`pip install -e ".[smolvla]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=\${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true`}</code></pre>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.id=follower1 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=\${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=\${HF_USER}/FINETUNE_MODEL_NAME`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Pi0 / Pi0.5: VLA policy training</summary>
      <p>Pi0 and Pi0.5 are Vision-Language-Action policies. They are useful when you want to explore language-conditioned robotic control.</p>
      <pre><code>{`pip install -e ".[pi]"

lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=\${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false

lerobot-train \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=\${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false`}</code></pre>
    </details>

    <details className="content-details">
      <summary>GR00T N1.5: advanced foundation model fine-tuning</summary>
      <p>GR00T N1.5 has stricter CUDA and FlashAttention requirements. Get ACT or Pi0 working first, then try GR00T.</p>
      <pre><code>{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
pip install "lerobot[groot]"`}</code></pre>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30} }' \
  --robot.id=follower1 \
  --display_data=true \
  --dataset.repo_id=\${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=\${HF_USER}/groot-rebot`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Resume training from a checkpoint</summary>
      <pre><code>{`lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true`}</code></pre>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Advanced</span>
      <h2>Advanced options</h2>
      <p>These sections are optional. Use them after you have successfully completed basic dataset collection and ACT training.</p>
    </div>

    <details className="content-details">
      <summary>Efficient fine-tuning with PEFT / LoRA</summary>
      <pre><code>{`pip install -e ".[peft]"
pip install "lerobot[peft]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=\${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Multi-GPU training</summary>
      <pre><code>{`pip install accelerate

accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=\${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true`}</code></pre>
      <p>Multi-GPU training increases effective batch size. You may need to reduce training steps or scale the learning rate depending on your setup.</p>
    </details>

    <details className="content-details">
      <summary>Async inference deployment</summary>
      <p>Async inference lets the robot execute the current action chunk while the server computes the next chunk. It is useful for larger models or remote inference.</p>
      <pre><code>{`pip install -e ".[async]"

python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080

python -m lerobot.async_inference.robot_client \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false`}</code></pre>
      <div className="danger-card">
        <strong>Security note</strong>
        <span>Do not expose an unauthenticated async inference server directly to the public internet. Use VPN, SSH tunneling, or strict source IP restrictions.</span>
      </div>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>FAQ</span>
      <h2>Common issues</h2>
    </div>

    <details className="content-details">
      <summary>Why use the Seeed-Projects/lerobot repository?</summary>
      <p>This guide is validated with <code>https://github.com/Seeed-Projects/lerobot.git</code>. The upstream LeRobot repository changes quickly and may introduce command, dependency, or dataset format differences.</p>
    </details>

    <details className="content-details">
      <summary>Cannot connect to /dev/ttyUSB0 or /dev/ttyACM0</summary>
      <p>If the device exists but connection fails, grant serial permissions:</p>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB* /dev/ttyACM*`}</code></pre>
    </details>

    <details className="content-details">
      <summary>No valid stream found in input file</summary>
      <p>Install ffmpeg 7.1.1:</p>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Keyboard shortcuts do not respond during recording</summary>
      <p>Check the <code>$DISPLAY</code> environment variable on Linux. You can also try downgrading pynput:</p>
      <pre><code>{`pip install pynput==1.6.8`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Training and data collection tips</summary>
      <p>Keep cameras fixed, keep lighting stable, avoid unstable backgrounds, collect enough episodes, and do not stop data collection before LeRobot computes dataset statistics.</p>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>References</span>
      <h2>References</h2>
    </div>
    <div className="reference-grid">
      <a href="https://wiki.seeedstudio.com/lerobot_so100m/">Seeed SO100 Arm in LeRobot</a>
      <a href="https://github.com/TheRobotStudio/SO-ARM100">TheRobotStudio SO-ARM10x</a>
      <a href="https://github.com/huggingface/lerobot/tree/main">Hugging Face LeRobot</a>
      <a href="https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot">Jetson Containers</a>
      <a href="https://www.jetson-ai-lab.com/lerobot.html">Jetson AI Lab</a>
      <a href="https://diffusion-policy.cs.columbia.edu/">Diffusion Policy</a>
      <a href="https://tonyzhaozh.github.io/aloha/">ACT / ALOHA</a>
      <a href="https://sjlee.cc/vq-bet/">VQ-BeT</a>
    </div>
  </section>


<section className="course-nav-section section-card section-block">
  <div className="section-title">
    <span>Learning Path</span>
    <h2>Continue with the reBot B601-DM learning path</h2>
    <p>These tutorials are designed to be read in the same order as the robotics page: start from basic bring-up, then move to LeRobot data collection, kinematics debugging, visual grasping, and finally ROS2 integration.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-step" href="/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <div>
        <strong>Getting Started</strong>
        <small>Complete unboxing, wiring, power checks, driver setup, calibration, and basic motion tests.</small>
      </div>
      <em>Start here</em>
    </a>
    <a className="course-step active" href="/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <div>
        <strong>LeRobot Teleoperation and Data Collection</strong>
        <small>Teleoperate the arm, connect cameras, record datasets, train policies, and evaluate real-arm behavior.</small>
      </div>
      <em>Current article</em>
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
.doc-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.85fr);
  gap: 1.5rem;
  align-items: stretch;
  padding: 2rem;
  margin: 1.5rem 0 1.25rem;
  border: 1px solid var(--rb-border);
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%),
    radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%),
    linear-gradient(135deg, rgba(248,250,252,0.96), rgba(255,255,255,0.94));
  box-shadow: var(--rb-shadow);
  overflow: hidden;
}
.eyebrow {
  display: inline-flex;
  padding: 0.35rem 0.7rem;
  margin-bottom: 0.85rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1rem; border-radius: 22px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 18px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { display: inline-flex; color: var(--rb-primary); font-size: 0.76rem; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); font-size: 1.55rem; }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.68; }
.path-grid, .info-grid, .two-col, .camera-grid, .module-summary-grid, .step-card-grid, .reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.9rem; }
.path-card, .info-grid > div, .check-card, .module-summary-card, .step-card, .content-details, .warning-card, .danger-card, .tip-card, .reference-grid a { border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); box-shadow: 0 10px 24px rgba(15,23,42,0.045); }
.path-card { display: block; padding: 1rem; text-decoration: none !important; color: inherit; transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.42); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-width: 2.2rem; height: 2rem; padding: 0 0.65rem; margin-bottom: 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; font-size: 0.82rem; }
.path-card b, .module-summary-card b, .step-card strong, .info-grid strong, .check-card h3, .warning-card strong, .danger-card strong, .tip-card strong { display: block; color: var(--rb-text); margin-bottom: 0.35rem; }
.path-card small, .module-summary-card span, .step-card p, .info-grid span, .warning-card span, .danger-card span, .tip-card span { display: block; color: var(--rb-muted); line-height: 1.6; }
.module-summary-card, .step-card, .info-grid > div, .check-card, .warning-card, .danger-card, .tip-card { padding: 1rem; }
.compact-grid { grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); }
.content-details { margin: 0.9rem 0; overflow: hidden; }
.content-details summary { cursor: pointer; list-style: none; padding: 0.95rem 1rem; font-weight: 900; color: var(--rb-text); background: linear-gradient(90deg, rgba(37,99,235,0.08), transparent); }
.content-details[open] summary { border-bottom: 1px solid var(--rb-border); }
.content-details summary::-webkit-details-marker { display: none; }
.content-details > *:not(summary) { margin-left: 1rem; margin-right: 1rem; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: #fff; box-shadow: 0 10px 24px rgba(15,23,42,0.045); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.command-card p, .content-details p { color: var(--rb-muted); line-height: 1.65; }
.warning-card { border-color: rgba(245,158,11,0.34); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.danger-card { border-color: rgba(239,68,68,0.34); background: linear-gradient(180deg, #fef2f2, var(--rb-surface)); }
.tip-card { border-color: rgba(20,184,166,0.32); background: linear-gradient(180deg, #f0fdfa, var(--rb-surface)); }
.video-container { position: relative; width: calc(100% - 2rem); max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 18px; overflow: hidden; background: #0f172a; border: 1px solid var(--rb-border); }
.video-container iframe { width: 100%; height: 100%; border: 0; }
.image-wrap, div[align="center"] { text-align: center; margin: 1rem 0; }
.image-wrap img, div[align="center"] img { max-width: 820px; width: 100%; border-radius: 18px; border: 1px solid var(--rb-border); }
.content-table { overflow-x: auto; }
.content-table table { width: 100%; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; text-decoration: none !important; color: var(--rb-text); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-nav-section { margin-top: 1.6rem; }
.course-path-grid { display: grid; gap: 0.85rem; }
.course-step { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 10px 24px rgba(15,23,42,0.05); }
.course-step.active { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.92), rgba(240,253,250,0.78)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; color: #fff; background: var(--rb-primary); font-weight: 900; box-shadow: 0 10px 22px rgba(37,99,235,0.24); }
.course-step strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.24rem; }
.course-step small { display: block; color: var(--rb-muted); line-height: 1.55; font-size: 0.92rem; }
.course-step em { justify-self: end; white-space: nowrap; font-style: normal; font-size: 0.78rem; font-weight: 800; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.2); border-radius: 999px; padding: 0.35rem 0.65rem; }
pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav, html[data-theme='dark'] .command-card { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.10)); }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 640px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert, .course-step { grid-template-columns: 1fr; } .course-step em { justify-self: start; } }
`}</style>
