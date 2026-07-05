---
description: This wiki provides a complete workflow for using reBot Arm B601-RS with LeRobot, including environment setup, calibration, teleoperation, camera integration, dataset collection, training, evaluation, and advanced deployment.
title: Getting Started with reBot Arm B601-RS in LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_0pos.jpg
slug: /rebot_arm_b601_rs_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-04
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-17'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/rebot_arm_b601_rs_lerobot/
---

# Getting Started with reBot Arm B601-RS in LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div className="hero-copy">
      <span className="eyebrow">reBot Arm × LeRobot</span>
      <h2>Start with teleoperation, then build datasets, train policies, and deploy on a real robotic arm</h2>
      <p>This guide is for users who have already completed the reBot Arm B601-RS quick start and basic hardware setup. It walks you through LeRobot installation, arm calibration, teleoperation, camera integration, dataset collection, training, evaluation, and advanced deployment workflows.</p>
      <div className="hero-actions">
        <a href="#quick-path">View Learning Path</a>
        <a href="#install-lerobot">Install LeRobot</a>
        <a href="#record-dataset">Start Dataset Collection</a>
      </div>
    </div>
    <div className="hero-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
      <span>Teleoperation · Dataset · Training · Evaluation</span>
    </div>
  </section>

  
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
      <a className="path-card" href="#install-lerobot"><b>1. Install LeRobot</b><small>Create the conda environment, install Seeed's verified LeRobot fork, and install required packages.</small></a>
      <a className="path-card" href="#calibration"><b>2. Calibrate arms</b><small>Calibrate the B601-RS follower arm and reBot 102 leader arm so their physical positions match.</small></a>
      <a className="path-card" href="#teleoperation"><b>3. Teleoperate</b><small>Run leader-follower teleoperation and verify that the follower arm moves correctly and safely.</small></a>
      <a className="path-card" href="#camera"><b>4. Add cameras</b><small>Connect OpenCV, RealSense, or Orbbec cameras and verify video streams before recording data.</small></a>
      <a className="path-card" href="#record-dataset"><b>5. Record datasets</b><small>Collect task demonstrations locally or upload them to Hugging Face Hub.</small></a>
      <a className="path-card" href="#training"><b>6. Train and evaluate</b><small>Start with ACT, then try SmolVLA, Pi0 / Pi0.5, or GR00T for more advanced experiments.</small></a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Overview</span>
      <h2>Project overview</h2>
      <p>reBot Arm B601-RS is an open-source robotic arm project from Seeed Studio. It is designed to lower the barrier to embodied AI learning by providing open mechanical files, BOMs, software, and tutorials.</p>
    </div>

    <div className="info-grid">
      <div><strong>Robotic arm</strong><span>6-DOF reBot Arm B601-RS follower arm with a RoboStride motor version using PCAN-USB / SocketCAN communication.</span></div>
      <div><strong>Leader arm</strong><span>reBot Arm 102 leader arm for real-time teleoperation and demonstration collection.</span></div>
      <div><strong>Framework</strong><span>LeRobot for teleoperation, dataset recording, training, evaluation, and policy deployment.</span></div>
      <div><strong>Communication</strong><span>PCAN-USB mapped as <code>can0</code>, configured at 1 Mbps through SocketCAN.</span></div>
      <div><strong>Compute platform</strong><span>Ubuntu x86 workstation, NVIDIA GPU workstation, or Jetson Orin platform depending on the task.</span></div>
    </div>

    <details className="content-details">
      <summary>Project introduction video</summary>
      <div className="placeholder-box">Video link to be added</div>
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

    <details className="content-details">
      <summary>Installation video</summary>
      <div className="placeholder-box">Video link to be added</div>
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

  
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<section id="calibration" className="section-card">
    <div className="section-title">
      <span>Step 2</span>
      <h2>Calibrate the robotic arm</h2>
      <p>Calibration aligns the physical positions of the leader and follower arms. This is essential for teleoperation, dataset collection, and policy transfer between robots.</p>
    </div>

    <details className="content-details">
      <summary>Calibration video</summary>
      <div className="placeholder-box">Video link to be added</div>
    </details>

    <div className="warning-card">
      <strong>Recalibration note</strong>
      <span>If you need to recalibrate, delete calibration files under <code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> or <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code>, then run calibration again.</span>
    </div>

    <div className="command-card">
      <h3>1. Grant serial permissions</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*  # Leader arm

# Follower arm / SocketCAN interface
sudo modprobe peak_usb
ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
    </div>

    <div className="command-card">
      <h3>2. Calibrate the B601-RS follower arm</h3>
      <p>For B601-RS, follower calibration is usually required only once after assembly. The gripper should be fully closed when following the zero-position reference.</p>
      <pre><code>{`sudo modprobe peak_usb
ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan`}</code></pre>
      <div align="center">
        <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_0pos.jpg" />
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

  
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<section id="teleoperation" className="section-card">
    <div className="section-title">
      <span>Step 3</span>
      <h2>Teleoperation test</h2>
      <p>After calibration, run a basic leader-follower teleoperation test before adding cameras or recording datasets.</p>
    </div>

    <div className="danger-card">
      <strong>Safety reminder</strong>
      <span>If power, USB, CAN, or signal cables disconnect during teleoperation, stop the program first, return the arm to the zero position, reconnect power, and then restart the program.</span>
    </div>

    <div className="command-card">
      <h3>Run teleoperation</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*
sudo ip link set can0 type can bitrate 1000000 restart-ms 100

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Teleoperation demo video</summary>
      <div className="placeholder-box">Video link to be added</div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Step 4</span>
      <h2>Add cameras</h2>
      <p>Cameras provide visual observations for dataset collection and policy training. Start with a simple OpenCV camera, then move to RealSense or Orbbec if you need RGB-D data.</p>
    </div>

    <div className="camera-grid">
      <details className="content-details" open>
        <summary>Generic USB / OpenCV camera</summary>
        <pre><code>{`lerobot-find-cameras opencv

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
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
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
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
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
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

  
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<section id="record-dataset" className="section-card">
    <div className="section-title">
      <span>Step 5</span>
      <h2>Collect datasets</h2>
      <p>Once teleoperation and cameras are stable, record demonstrations for your target task. You can save datasets locally or upload them to Hugging Face Hub.</p>
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
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
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
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
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
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Replay an episode on the robot</summary>
      <p>This step can be unstable, so it is optional.</p>
      <pre><code>{`lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>

  
<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Check Before Running</strong>
    <p>Clear valuable objects and keep all personnel away within a <strong>1-meter radius</strong> of the robot workspace. Make sure the arm is firmly fixed before running this section.</p>
  </div>
</div>

<section id="training" className="section-card">
    <div className="section-title">
      <span>Step 6</span>
      <h2>Training and evaluation</h2>
      <p>Start with ACT to validate your data pipeline. After that, you can try SmolVLA, Pi0 / Pi0.5, GR00T N1.5, PEFT, multi-GPU training, or async inference.</p>
    </div>

    <details className="content-details" open>
      <summary>ACT: recommended first policy</summary>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <p>For RTX 50 series GPUs, add <code>--dataset.video_backend=pyav</code> if torchvision video APIs cause errors.</p>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
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
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
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
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
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
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
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
      <summary>Cannot connect to /dev/ttyUSB0 or can0</summary>
      <p>If the leader serial device exists but connection fails, grant serial permissions. For the RS follower, initialize the PCAN-USB / SocketCAN interface as <code>can0</code>:</p>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*

sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
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


<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>reBot B601-RS learning path</h2>
    <p>These tutorials are designed to be followed in order: Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2. Use the links below to jump between modules.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Complete unboxing, wiring, power checks, PCAN-USB setup, calibration, and first motion tests.</span></span>
      <span className="course-tag">Start here</span>
    </a>
    <a className="course-path-item active" href="/rebot_arm_b601_rs_lerobot/">
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
.hero-actions a:nth-child(2), .hero-actions a:nth-child(3) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.hero-card img { width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.82rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .feature-grid, .notice-grid, .env-grid, .tips-grid, .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .feature-grid div, .notice-card, .env-grid div, .tips-grid div, .info-grid div, .check-card, .info-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; box-shadow: 0 10px 24px rgba(15,23,42,0.035); }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .feature-grid b, .feature-grid strong, .notice-card strong, .tips-grid b, .info-grid strong, .check-card h3, .info-card strong { color: var(--rb-text); }
.path-card small, .path-card span, .feature-grid span, .notice-card span, .tips-grid span, .info-grid span, .info-card p, .check-card li { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.notice-card.warning { border-color: rgba(245,158,11,0.35); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.content-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker { display: none; }
.content-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after { content: "Collapse"; }
.content-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child { margin-bottom: 1rem; }
.command-card, .command-flow > div, .sub-step-block { padding: 1rem; margin: 1rem 0; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); }
.callout, .tip-card, .warning-card, .danger-card, .quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout p, .tip-card span, .warning-card span, .danger-card span { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.65; display: block; }
.callout.warning, .warning-card { color: #7c2d12; background: #fff7ed; border-color: #fed7aa; }
.callout.danger, .danger-card { color: #7f1d1d; background: #fef2f2; border-color: #fecaca; }
.video-container { position: relative; width: 100%; max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.placeholder-box, .video-placeholder { display: flex; min-height: 160px; align-items: center; justify-content: center; border: 1px dashed var(--rb-border); border-radius: 14px; padding: 1rem; text-align: center; color: var(--rb-muted); background: var(--rb-surface-soft); font-weight: 800; }
.image-wrap, .image-frame { margin: 1rem 0; text-align: center; }
.image-wrap img, .image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.camera-grid { display: grid; gap: 0.9rem; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; border-radius: 14px; text-decoration: none !important; color: var(--rb-text); background: var(--rb-surface-soft); border: 1px solid var(--rb-border); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.rebot-page pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
.rebot-page table { display: table; width: 100%; }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .notice-card.warning, html[data-theme='dark'] .callout.warning, html[data-theme='dark'] .warning-card { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .callout.danger, html[data-theme='dark'] .danger-card { color: #fecaca; background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); }
@media (max-width: 980px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(4, minmax(0, 1fr)); position: static; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hero-actions a { width: 100%; justify-content: center; } }


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
