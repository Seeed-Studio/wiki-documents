---
description: "How to debug SO-ARM servos with the Seeed_RoboController tool: detect servos, fix IDs, write neutral values and read status on Windows, Ubuntu and Mac."
title: SO-Arm Debugging Tool
keywords:
  - Lerobot
  - SO-ARM
  - Robotics
  - Servo
  - Calibration
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhangJiaQuan
url: https://wiki.seeedstudio.com/lerobot_steering_gear_debugging_tool/
createdAt: '2026-06-29'
updatedAt: '2026-09-16'
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Steering Gear Debugging Tool for SO-ARM in LeRobot

<div align="center">
  <img
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp"
    width={800}
    height={600}
    style={{height: 'auto'}}
    alt="SO-ARM100 and SO-ARM101 robotic arm kits"
  />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>Get the SO-ARM101 Kit</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center"><strong>Supported platforms</strong> · Windows / Ubuntu / macOS</p>

## Introduction

The Steering Gear Debugging Tool (Seeed_RoboController) is a graphical debugging tool for SO-ARM robotic arms in LeRobot. With this tool, you can quickly detect servo status, recalibrate servo IDs, write neutral values, control individual servos, and manage robotic arm calibration files, making it easier to assemble, debug, and maintain the leader and follower arms.

## 1. Installation

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

<h4>Clone the repository</h4>

<p className="rebot-step-label">Step 1</p>

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

<h4>Install dependencies</h4>

<p className="rebot-step-label">Step 2</p>

Install the dependencies in your existing LeRobot virtual environment. For a standalone installation, create a new virtual environment to avoid affecting the system Python.

```bash
pip install -r requirements.txt
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

<h4>Check the environment</h4>

<p className="rebot-step-label">Step 3</p>

```bash
python setup.py
```

If it returns [OK] Environment check passed, the project is ready to run.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

<h4>Launch the tool</h4>

<p className="rebot-step-label">Step 4</p>

<Tabs defaultValue="interactive">
<TabItem value="interactive" label="Interactive port selection">

Select the serial ports in the interface after launch.

```bash
python -m src.gui.factory_calibration_tool
```

</TabItem>
<TabItem value="manual" label="Specify ports manually">

If the ports are occupied, you can specify them manually. The command below uses example Linux device paths.

```bash
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

</TabItem>
</Tabs>

</div>
</section>

</div>

## 2. Getting Started (Applicable to Leader Arm and Follower Arm)

Start by checking servo detection. Continue to the next two steps only if you still suspect duplicate servo IDs after checking the wiring and serial port.

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Check Whether the Servos Are Normal {#1-check-whether-the-servos-are-normal}

<p className="rebot-step-label">Step 1</p>

Select the port in the serial port picker. The detection check passes if the tool recognizes servos 1–6.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" />
</div>

If a servo is missing, check its wiring, then close and reopen the tool. If it still does not appear, check for duplicate servo IDs. For example, running the servo calibration command by mistake can change servo IDs.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Remove the Servo Wire Harnesses {#2-remove-the-servo-wire-harnesses}

<p className="rebot-step-label">Step 2</p>

First remove the connecting wire harness between servo 6 and servo 5.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" />
</div>

Then remove the connecting wire harness between servo 5 and servo 4.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" />
</div>

Remove the connecting wire harness between servo 4 and servo 3.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" />
</div>

Remove the connecting wire harness between servo 3 and servo 2.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" />
</div>

Remove the connecting wire harness between servo 2 and servo 1.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" />
</div>

Remove the connecting wire harness between servo 1 and the control board.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Recalibrate Servo IDs {#3-recalibrate-servo-ids}

<p className="rebot-step-label">Step 3</p>

:::caution Write servo IDs one at a time
Connect only one servo to the serial bus when writing its ID. For example, changing ID 4 to 6 changes every servo with ID 4 on that bus.
:::

Connect servo 6 directly to the driver board as shown. Use the same method for other servos without disassembling the arm.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" />
</div>

If the connected servo is servo 6 but the tool only shows ID 4, change that servo's ID back to 6.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" />
</div>

Select ID 4 in the interface and change it to 6. Check and correct the remaining servos one at a time.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" />
</div>

Reconnect the servo harnesses one at a time after correcting the IDs.

</div>
</section>

</div>

### Write the Neutral Value to the Servo {#4-write-the-neutral-value-to-the-servo}

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" />
</div>

1. Click **Serial Port Neutral Test** and compare the arm's position with the image above. If they roughly match, the neutral value is correct.
2. If they do not match, move the arm to the neutral position and click **Serial Port Neutral Calibration** to save the current position as the servo's neutral value.
3. Support the arm before clicking **Serial Port Disable Motors**. The servos will lose their holding torque.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" />
</div>

### Single Servo Control {#5-single-servo-control}

The interface shows each servo at its neutral position by default.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" />
</div>

#### Adjust a servo's position

1. Enable torque for the selected servo, or use the control that enables torque for all servos.
2. Move the selected servo's slider slowly and watch the corresponding joint move.

:::caution Mind the mechanical limits
The arm's structure limits joint travel. Move the slider slowly and avoid setting it to 0 or its maximum. Support the arm before disabling torque.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" />
</div>

You can also calibrate an individual servo's neutral position or clear its stored neutral, minimum, and maximum positions.

#### Servo status fields

| Field | Meaning |
| --- | --- |
| `Pos` | Position |
| `V` | Voltage |
| `T` | Temperature |
| `Spd` | Speed |
| `Load` | Torque |
| `Cur` | Current |
| `Mov` | Motion status |
| `Model` | Model and permissions |
| `Status` | Normal, Overcurrent, or Overload |

### Advanced Tools {#6-advanced-tools}

| Tool | Purpose |
| --- | --- |
| Register read/write | Read or write data at a specified register address. |
| Change baud rate | Adjust the servo's serial communication rate. |
| Restore factory settings | Reset the servo to its factory settings. |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" />
</div>
