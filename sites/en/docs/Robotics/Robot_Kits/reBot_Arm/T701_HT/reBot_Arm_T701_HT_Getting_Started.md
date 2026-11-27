---
title: reBot Arm T701 HT Quick Start
sidebar_label: Quick Start
description: Unbox and assemble the reBot Arm T701 HT, install the SDK on Ubuntu, check joint feedback, set zero positions, and run the demos.
keywords:
  - reBot
  - T701 HT
  - OpenArm-HT-A1
  - Bimanual Robot
  - Python SDK
slug: /rebot_t701_ht_getting_started
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
createdAt: '2026-11-14'
url: https://wiki.seeedstudio.com/rebot_t701_ht_getting_started/
updatedAt: '2026-11-23'
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot Arm T701 HT Quick Start

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT bimanual robot"
  />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701"
  fallbackCount={35}
  ariaLabel="Star reBot Arm T701 on GitHub"
/>

## Project Introduction

The reBot Arm T701 is an open-source bimanual robotic platform from Seeed Studio for Physical AI, robot learning, and real-world data collection. It builds on the open-source design of the reBot Arm B601 and gives developers a single platform for collecting data and studying coordinated two-arm tasks.

- **Bimanual configuration.** Two 7-DOF arms mount to a single torso. CAN bus motors drive the joints, and each arm has its own gripper.
- **Vision and edge computing.** The platform has mounting points for RealSense D405 wrist cameras, a D435 head camera, and an NVIDIA Jetson Orin compute module. **The Basic version does not include cameras.**
- **Open-source resources.** CAD files, the bill of materials (BOM), assembly guides, and software are released in stages according to the project roadmap.

## Safety Disclaimer and Risk Notice

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="reBot Arm safety disclaimer and risk notice in Chinese" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="reBot Arm safety disclaimer and risk notice in English" />
  </figure>
</div>

{/*
## About the Power Supply

- **TODO** Add the power supply model, rated output, connector specifications, and availability.
*/}

## Unbox and Assemble the Robot

Select your T701 model to watch the unboxing and assembly video.

<Tabs>
<TabItem value="basic" label="Basic">

<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/x3CkpDcxyFI"
    title="reBot Arm T701 Basic unboxing and assembly"
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    allow="encrypted-media; picture-in-picture"
    allowFullScreen
  />
</div>

</TabItem>

<TabItem value="pro" label="Pro">

<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/D7Cj482WSlQ"
    title="reBot Arm T701 Pro unboxing and assembly"
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    allow="encrypted-media; picture-in-picture"
    allowFullScreen
  />
</div>

</TabItem>
</Tabs>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Check the Package Contents

Open the carrying case and check the robot parts and fasteners against the packing list.

:::note[The Basic version does not include cameras]
Refer to the packing list for the contents of your shipment.
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="Open carrying case showing both arms, the torso column, the covers, and the cameras in the pictured configuration" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### Mount Both Arms to the Torso Column

1. Take out the torso column and the right arm. Align the four mounting holes circled in red in both photos.
2. Secure the right arm to the column using four of the supplied **M6 screws**.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Mounting holes on the torso column</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-torso-holes.webp" alt="Four mounting holes circled in red on the side of the torso column" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Matching holes on the right arm mounting plate</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-arm-holes.webp" alt="Four mounting holes circled in red on the right arm's metal mounting plate" loading="lazy" />
  </figure>
</div>

Once the right arm is secured, check how it sits against the column from above and from the side.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Mounted right arm, top view</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-top.webp" alt="Top view of the right arm mounting plate and upper screws" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Mounted right arm, side view</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-side.webp" alt="Side view of the right arm mounting plate and lower screws" loading="lazy" />
  </figure>
</div>

With power disconnected, plug the **XT30 2+2 cable harness** extending from the side of the torso column into the right arm connector shown below. Mount and connect the left arm the same way on the other side of the column.

<div align="center">
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="Routing of the XT30 2+2 cable harness from the torso column to the arm connector" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### Install the Shoulder Covers

1. Fit the upper and lower halves of each green cover together around the shoulder.
2. Insert the supplied **medium-short M3 screws** at the positions circled in red. Use four screws per side, eight in total.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Upper and lower halves of a shoulder cover</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-shoulder-cover-parts.webp" alt="Two green semicircular shoulder cover pieces" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Shoulder cover installed</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/14-shoulder-cover-fit.webp" alt="Red box marking the position of the assembled green shoulder cover" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Shoulder cover screw positions, top view</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-top.webp" alt="Two shoulder cover screws circled in red in the top view" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Shoulder cover screw position, side view</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-side.webp" alt="Shoulder cover screw circled in red in the side view" loading="lazy" />
  </figure>
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### Install the Torso Cover

1. Once both shoulder covers are secured, fit the torso cover and route the side cables through the corresponding cutouts. If your robot has the **RealSense D435i** camera shown below, align it with the opening in the front cover. **The Basic version does not include cameras.**

   <div className="rebot-power-gallery">
     <figure className="rebot-power-gallery-item">
       <figcaption>Camera opening in the front cover (the Basic version does not include cameras)</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-front.webp" alt="Red box marking where the D435i aligns with the opening in the front cover" loading="lazy" />
     </figure>
     <figure className="rebot-power-gallery-item">
       <figcaption>Side cable cutout</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-cable.webp" alt="Red circle marking the cable cutout on the side of the torso cover" loading="lazy" />
     </figure>
   </div>

2. Secure the torso cover by inserting the four **longest supplied M3 screws** into the holes circled in red on the back.

   <div align="center">
     <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/17-torso-cover-screws-repaired.webp" alt="Four screw positions circled in red on the rear torso cover" loading="lazy" />
   </div>

  </div>
</div>

</div>

{/* - **TODO** Add instructions for securing the base and installing the grippers separately. */}

## Connect the Robot

:::warning
Disconnect power before wiring. Before turning the robot on, make sure it is securely mounted and keep the full range of motion of both arms clear.
:::

1. Connect the power supply as shown below.
2. Press the round power button to turn on the robot.
3. Connect the computer to the mainboard's USB-C port with a USB data cable.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Power connection</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-power-connection.jpg" alt="Power connector and cable at the base of the T701 HT" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Round power button and mainboard USB-C port</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-type-c-mainboard.jpg" alt="Round power button next to the mainboard and a USB data cable plugged into the USB-C port" loading="lazy" />
  </figure>
</div>

## Calibrate and Run the Robot with the T701-HT SDK

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Install the SDK

:::info[Supported Platforms for the Motor Library]

The SDK includes the following prebuilt `hightorque_robot` wheels in `motor_whl/`.

| Platform | Motor library version | CPython versions |
| --- | --- | --- |
| Linux x86_64 | 1.2.0 | 3.9, 3.10, 3.11, 3.12 |
| Linux aarch64 (ARM64) | 1.0.0 | 3.9, 3.10, 3.11, 3.12 |

The installation example below uses **Ubuntu 22.04 (x86_64) and Python 3.10**. For another combination in the table, choose the `.whl` file that matches your architecture and Python version, then run the environment check below.

:::

Clone the [T701-HT SDK repository](https://github.com/Seeed-Projects/reBot-Arm-T701-SDK) and enter the SDK root directory.

```bash
git clone https://github.com/Seeed-Projects/reBot-Arm-T701-SDK.git
cd reBot-Arm-T701-SDK
```

Run the SDK commands below from this directory unless instructed otherwise.

If you do not have Conda, install Miniforge.

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

Follow the prompts to initialize Conda. Open a new terminal and return to the SDK root directory. Create the environment, then install the SDK and its dependencies.

```bash
conda create -n t701-ht python=3.10 pip
conda activate t701-ht
python -I -m pip install ./motor_whl/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
python -I -m pip install -r requirements.txt
```

Run the following command to check that Python can import the dependencies and load the URDF model. You can run this check with the robot disconnected.

```bash
python -I -c "import hightorque_robot, numpy, osqp, pinocchio, scipy, yaml; pinocchio.buildModelFromUrdf('T701-HT_URDF/urdf/T701-HT.urdf'); print('T701-HT environment check passed')"
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### Check the Serial Connection

The left arm connects to CAN1 and the right arm to CAN2. Set `board_serial` in the SDK's `T701-HT_robot_param/serial_binding.yaml` to the USB serial number of your communication board. The SDK uses the board's USB identity to find the current serial devices at startup.

Run the following commands to check the mapping for both arms without opening the serial ports. To check one arm, pass only its YAML file.

```bash
ls -l /dev/serial/by-id/
python scripts/t701_ht_can_serial_adapter.py T701-HT_robot_param/T701-HT_left.yaml T701-HT_robot_param/T701-HT_right.yaml
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### Read Joint and Gripper State

Run the script and enter `1` for the left arm, `2` for the right arm, or `3` for both. Confirm that all seven joints and the gripper of each selected arm report feedback. Press `Ctrl+C` to exit.

```bash
python scripts/t701_ht_read_state.py
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### Set Zero Positions

<div align="center">
  <img width={520} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-zero-pose.png" alt="T701-HT zero pose" loading="lazy" />
</div>

Start the script and select the arm. Move the joints and gripper to their intended zero positions, then select `3` in the operation menu to replace the selected arm's stored zero positions with the current pose. Select `4` to move to the saved zero position or `0` to exit.

```bash
python scripts/t701_ht_set_zero.py
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">

### Run the Demos

:::warning[Before running the demos]
Verify the joint zero positions, remove any payload, and clear the arms' range of motion. Start with one arm on the first run. Support the arm when starting and stopping the gravity compensation demo.
:::

Enter the `scripts` directory. After starting a demo, enter `1` for the left arm, `2` for the right arm, or `3` for both.

```bash
cd scripts
```

#### Gravity Compensation

The demo applies `0.8 × G(q)` as MIT torque feedforward to make the arm easier to move by hand. The joint `Kp` and `Kd` gains and the gripper torque are zero.

```bash
python t701_ht_gravity_compensation.py
```

The demo applies the configured joint torque limits. Press `Ctrl+C` to stop the motors.

For single-motor five-parameter control, state feedback, and return-to-zero shutdown, see [MIT Control SDK](https://wiki.seeedstudio.com/rebot_t701_ht_control_mit/).

See [T701 HT with Pinocchio](https://wiki.seeedstudio.com/rebot_t701_ht_pinocchio/) for forward and inverse kinematics checks, Cartesian trajectories, and keyboard control examples.

  </div>
</div>

</div>

## Troubleshooting

- **No serial port found.** Confirm that the robot is powered on and the USB data cable is connected to the mainboard's USB-C port, then run `ls -l /dev/serial/by-id/` again.
- **Matching USB interface missing.** Check that `board_serial` matches the connected board and that the left arm uses CAN1 and the right arm uses CAN2.
- **Permission denied.** On Ubuntu, check that your user has read and write access to the serial device through the `dialout` group.
