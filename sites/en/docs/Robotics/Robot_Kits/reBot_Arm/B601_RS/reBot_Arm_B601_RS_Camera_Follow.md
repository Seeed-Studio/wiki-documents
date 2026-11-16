---
title: reBot-RS Wrist Camera Palm Following
description: Use a wrist-mounted depth camera to follow a hand and control the reBot Arm B601-RS gripper with a pinch gesture.
slug: /rebot_arm_b601_rs_camera_follow
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp
keywords:
  - reBot Arm
  - B601-RS
  - hand tracking
  - depth camera
  - visual servoing
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import diagram from '@site/src/components/robotics/rebot-camera-follow.module.css';

# reBot-RS Wrist Camera Palm Following

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS robotic arm" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Get One Now</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Reference environment: Python 3.10" />
  <img src="https://img.shields.io/badge/Platform-Linux-orange.svg" alt="Platform: Linux" />
  <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Camera: RGB-D depth camera" />
  <img src="https://img.shields.io/badge/Tracking-MediaPipe-yellow.svg" alt="Hand detection: MediaPipe" />
</p>

<p align="center">
  <strong>Wrist Depth Sensing · Palm Following · Pinch-to-Grip · Local Web Preview</strong>
</p>

This tutorial explains how to run [reBot RS Camera Follow](https://github.com/Yang-Ci/reBot_RS_Camera-Follow). A wrist-mounted depth camera captures color and depth images, while the program detects the palm and calculates follow commands for the arm. You can also control the gripper by pinching your thumb and index finger and use a local web page to view the camera, joint status, and robot model.

The project combines hand landmarks with aligned depth data to estimate the three-dimensional palm position. It filters the target, transforms coordinates, and calculates joint commands using the robot's kinematics. The web page previews data and manages the control process. Joint values may come from feedback, commands, or a model estimate; check the data-source label on the page.

<GitHubStarButton
  owner="Yang-Ci"
  repo="reBot_RS_Camera-Follow"
  ariaLabel="Star reBot_RS_Camera-Follow on GitHub"
/>

:::warning Real robot safety
Initialization enables the motors and moves the arm to HOME; exiting also moves the arm back to zero. Clear the entire motion area, secure the arm, check power, CAN and the HOME path, and make sure the hardware emergency stop is available. Start at low speed and within a small range when first running the system or after changing hardware. Software protections and the web display cannot replace collision detection or a hardware emergency stop.
:::

## System Architecture and Approach

### System Architecture

<div className={diagram.diagram}>
  <ol className={diagram.row} aria-label="System architecture: camera to robot arm">
    <li className={diagram.card}>
      <span className={diagram.label}>INPUT</span>
      <strong>Wrist Depth Camera</strong>
      <p>Captures color and depth frames for hand detection and distance measurements.</p>
    </li>
    <li className={diagram.card}>
      <span className={diagram.label}>PROCESSING</span>
      <strong>Linux Host</strong>
      <p>Detects the hand, calculates a target, and generates commands using kinematics and protection logic.</p>
    </li>
    <li className={diagram.card}>
      <span className={diagram.label}>EXECUTION</span>
      <strong>B601-RS Arm</strong>
      <p>Receives CAN commands for the six joints and gripper; joint feedback returns to the controller.</p>
    </li>
  </ol>
  <p className={diagram.note}><strong>Local web page:</strong> Manages the control process through a local service and displays the camera preview, robot model, and status.</p>
</div>

The vision thread captures camera frames and detects the hand. The servo thread reads the latest target and uses the robot model and camera pose to calculate joint commands. The web page starts and manages the controller through a local service and receives status; it does not connect to CAN directly. The display may show actual feedback, commands, or estimates; check its data-source label.

### Palm Following and Gripper Control

<div className={diagram.diagram}>
  <div className={diagram.lane}>
    <p className={diagram.laneTitle}>Palm following</p>
    <ol className={diagram.row} aria-label="Palm following workflow">
      <li className={diagram.card}>
        <span className={diagram.label}>01 · PERCEPTION</span>
        <strong>Detect the 3D palm</strong>
        <p>Extract hand landmarks from the color image and sample palm depth from the aligned depth image.</p>
      </li>
      <li className={diagram.card}>
        <span className={diagram.label}>02 · COMPUTATION</span>
        <strong>Generate a target</strong>
        <p>Filter and predict the 3D palm position, then transform it into the robot coordinate frame.</p>
      </li>
      <li className={diagram.card}>
        <span className={diagram.label}>03 · EXECUTION</span>
        <strong>Move the arm</strong>
        <p>Use visual servoing and a Jacobian inverse solution to generate limited joint commands and send them over CAN.</p>
      </li>
    </ol>
  </div>
  <div className={diagram.lane}>
    <p className={diagram.laneTitle}>Pinch-to-grip control</p>
    <ol className={diagram.row} aria-label="Gripper control workflow">
      <li className={diagram.card}>
        <span className={diagram.label}>01 · DETECT</span>
        <strong>Find the fingertips</strong>
        <p>Read the thumb and index-finger landmarks.</p>
      </li>
      <li className={diagram.card}>
        <span className={diagram.label}>02 · MAP</span>
        <strong>Calculate pinch distance</strong>
        <p>Filter the distance and map it to a gripper opening target.</p>
      </li>
      <li className={diagram.card}>
        <span className={diagram.label}>03 · EXECUTE</span>
        <strong>Control the gripper</strong>
        <p>Send gripper commands while following is enabled and pinch control is selected.</p>
      </li>
    </ol>
  </div>
</div>

Because the camera is mounted on the wrist, the controller must transform camera coordinates into robot coordinates. If the palm is lost briefly, the program may extrapolate for a limited time; after a longer loss, it holds position. Motion may resume when the hand is detected again. Pinch control shares the hand detection result with following, and the web page also lets you hold the gripper at its current position.

## Prerequisites

- A configured reBot Arm B601-RS, its power supply, and a working CAN interface. See the [reBot-RS Quick Start](https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/) first.
- A Linux computer. The reference environment uses Python 3.10; the project requires the camera SDK, Pinocchio, and motorbridge. System libraries and device permissions vary by machine.
- A wrist-mounted depth camera and a compatible mount. The web page can select Gemini 2, Gemini 305, Gemini 336, or RealSense D435i. See the camera pose requirements below.

## Choose a Camera Mount

Gemini 2, D435i, and Gemini 336 use the V1 level mount, with a separate camera URDF for each model. The figure shows the shared mount's STL model from three views; its labels are in Chinese:

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/gemini2-level-mount.png" alt="Perspective, top, and side views of the mount shared by Gemini 2, Gemini 336, and D435i" />
</p>

The figure lists the model bounding box as X 95.8 × Y 51.0 × Z 25.1 mm. Download STEP and STL files from the [shared mount directory](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/tree/main/models/wrist_camera/gemini2-gemini336-d435i).

Gemini 305 uses a separate centered level mount, shown below as an STL model preview. The mount can also fit D405; camera options for the following program depend on what the project supports.

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/gemini305-level-mount.png" alt="Perspective, top, and side views of the mount shared by Gemini 305 and D405" />
</p>

The figure labels are in Chinese and list the model bounding box as X 46.0 × Y 73.4 × Z 24.7 mm. See the [mount STL model](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/meshes/Gemini305_D405_Mount.stl) and [model notes](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/README.md). The Gemini 305 camera housing is approximated in the URDF model.

The optical centers and mounting positions differ between cameras. These poses are nominal CAD assemblies. Before use, check the mounting, field of view, and URDF against the physical setup, then verify motion direction at low speed.

## Install the Project and Dependencies

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
  <div className="rebot-step-content">
    <h4>Get the project and create an environment</h4>
    <p className="rebot-step-label">Step 1</p>

Run the following in a Linux terminal:

```bash
git clone https://github.com/Yang-Ci/reBot_RS_Camera-Follow.git
cd reBot_RS_Camera-Follow
python3.10 -m venv .venv-arm
.venv-arm/bin/python -m pip install -r requirements.txt
```

Install and verify the SDK for your camera. For D435i, also install the RealSense Python bindings in this environment:

```bash
.venv-arm/bin/python -m pip install 'pyrealsense2>=2.54'
```

The project's [requirements-d435i.txt](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/requirements-d435i.txt) provides a dependency set for D435i vision-only use; real robot control also requires the main dependencies. If installation fails, check the Python version, system libraries, device permissions, and camera SDK.
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
  <div className="rebot-step-content">
    <h4>Check the bundled resources</h4>
    <p className="rebot-step-label">Step 2</p>

The robot controller, RS URDF, web model, and browser hand-detection resources are included in this repository. You do not need to clone other projects or set resource paths. Check the files from the project root:

```bash
ls vendor/rebot_control
ls assets/robot/description/urdf/ReBot_Arm_RS.urdf
ls web/lib/mediapipe
```

These commands should list the corresponding directories or file. Python dependencies and the camera SDK must still be installed. See the [bundled resource notes](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/assets/README.md) for sources.
  </div>
</section>
</div>

## Check the Camera Pose

Gemini 2, D435i, Gemini 305, and Gemini 336 use the nominal CAD camera pose from their respective URDF files by default; no hand-eye calibration file is required. Gemini 2, D435i, and Gemini 336 use their corresponding V1 level models. D435i selects the optical frame according to the current color or infrared image. Gemini 305 uses the centered level mount model.

Before use, make sure the physical camera and mount match the selected URDF, then check the motion direction at low speed. Nominal CAD poses are not measured results. See the [wrist model notes](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/README.md) for details.

## Check the Camera Preview

Start the web service from the project root:

```bash
python3 web/server.py
```

On the same computer, open [http://127.0.0.1:8765](http://127.0.0.1:8765). The service listens only on the local machine. The current web interface is in Chinese: select **Real Robot Control** (真机控制), select the connected camera, and click **Open Camera** (打开摄像头) to check the image before connecting the arm. The depth inset in Gemini previews helps check whether depth data is available; it is not a measurement or safety device.

For **Computer Camera Simulation** (电脑摄像头模拟), switch modes, click **Enable Camera** (开启摄像头), and allow browser access. This mode drives only the web model; it does not control the physical arm, estimate palm depth, or perform end-effector inverse kinematics.

To run Gemini 336 vision without connecting the arm:

```bash
.venv-arm/bin/python palm_follow_grasp.py --camera gemini336 --no-arm
```

If no image appears, check the camera connection, device permissions, SDK, and whether another program is using the camera. If the web model is missing, check that the repository's `assets/` and `web/lib/` resources are complete.

## Start Real Robot Following

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
  <div className="rebot-step-content">
    <h4>Check the equipment and workspace</h4>
    <p className="rebot-step-label">Step 1</p>

Close other programs using CAN and check the camera pose, joint zero positions, HOME, workspace, and hardware emergency stop. Make sure the paths from the current pose to HOME and back to zero are clear.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
  <div className="rebot-step-content">
    <h4>Select the camera and low-speed preset</h4>
    <p className="rebot-step-label">Step 2</p>

Select the camera on the web page. For the first run, use **Low-Speed Validation** (低速验证) and **Keep Gripper Position** (保持当前位置). The low-speed preset sets both follow and horizontal gains to 1.5 and limits end-effector speed to 0.10 m/s. These settings apply only to the current run and are not written to the configuration files.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
  <div className="rebot-step-content">
    <h4>Initialize the real robot</h4>
    <p className="rebot-step-label">Step 3</p>

Click **Initialize Real Robot** (初始化真机). The program takes over the camera, enables the arm, and moves it to HOME. Watch the actual motion; once HOME is reached, the arm waits for a start command.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
  <div className="rebot-step-content">
    <h4>Start palm following</h4>
    <p className="rebot-step-label">Step 4</p>

Press `R`, click **Start Following** (开始跟随), or hold an open palm for 3 seconds to start. Move your hand slowly to verify the actual motion direction and range. If **Pinch Control** (捏合控制) is selected, pinch your thumb and index finger to control the gripper while following is enabled.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
  <div className="rebot-step-content">
    <h4>Pause and exit</h4>
    <p className="rebot-step-label">Step 5</p>

Press Space to pause. Click **Exit and Return to Zero** (退出并回零), or press `Q` / `Esc`, to request that the program stop following, return to zero, and disable the motors. An exit request during initialization is processed after initialization finishes; use the hardware emergency stop in an emergency.

  </div>
</section>
</div>

When the palm is lost briefly, the program may extrapolate for a limited time; after a longer loss it holds position. Motion may resume automatically when the hand is detected again. After a feedback or tabletop protection lock pauses the system, press `R` or click the resume control manually. The web model and gripper display may show commands or estimates and must not be used as safety evidence of actual position. See the [web guide](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/web/README.md) for operation and protection details.

## Configuration and Troubleshooting

| Symptom | What to check |
| --- | --- |
| The camera preview works, but initialization fails | Check the selected camera model, URDF, CAN, HOME, joint zero positions, and the page's error message. |
| The following direction or position is wrong | Pause immediately and check the physical camera orientation, camera-to-arm transform, URDF, and joint zero positions. Do not mask the problem by increasing speed. |
| The hand or depth is not detected | Check lighting, whether the hand is in view, the depth image, and device connections; avoid occlusion. |
| The arm does not respond or a protection pauses it | Check whether another program is using CAN, the device feedback, and page messages. Do not bypass feedback protection. |

`config/follow.yaml` controls follow distance, gains, speed, and workspace parameters. When Gemini 336 is selected without a custom configuration, `config/follow_gemini336.yaml` is also applied. `config/grasp.yaml` maps the pinch gesture to the gripper. View the command-line options with:

```bash
.venv-arm/bin/python palm_follow_grasp.py --help
```

:::warning
`--no-arm` is the vision-only option. `--no-gripper` and `--no-follow` still connect to the arm. Recheck the setup and validate at low speed after changing configuration or hardware.
:::

## Resources

- [Project repository and latest README](https://github.com/Yang-Ci/reBot_RS_Camera-Follow)
- [Web operation and data sources](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/web/README.md)
- [Calibration, control, and diagnostics manual](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/docs/技术手册.md)
- [Bundled resources and their sources](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/assets/README.md)
