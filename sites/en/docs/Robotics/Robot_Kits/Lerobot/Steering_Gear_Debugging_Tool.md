---
description: Steering Gear Debugging Tool for SO-ARM in Lerobot.
title: Steering Gear Debugging Tool for SO-ARM in Lerobot
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
updatedAt: '2026-07-07'
---

# Steering Gear Debugging Tool for SO-ARM in Lerobot

## Introduction

The Steering Gear Debugging Tool (Seeed_RoboController) is a graphical debugging tool for Lerobot/SO-ARM robotic arms. With this tool, you can quickly detect servo status, recalibrate servo IDs, write neutral values, control individual servos, and manage robotic arm calibration files, making it easier to assemble, debug, and maintain the leader and follower arms.

## 1. Installation

For Windows, Ubuntu, and Mac systems.

1\. First, clone the repository.

```Plain
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

2\. It is recommended to install the tool in the Lerobot virtual environment. If you prefer a standalone installation, create a new virtual environment to avoid polluting the system Python.

```Plain
pip install -r requirements.txt
```

3\. Check the environment. If it returns `[OK] Environment check passed`, the project is ready to run.

```Plain
python setup.py
```

4\. Launch the tool.

Run the following command to start interactive port selection.

```Plain
python -m src.gui.factory_calibration_tool
```

(Optional) Manually specify ports if they are occupied.

```Plain
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

## 2. Getting Started (Applicable to Leader Arm and Follower Arm)

### 1. Check Whether the Servos Are Normal

First, select the corresponding port in the serial port selection.

If servos 1-6 are all detected successfully, it means the servos are recognized normally and the basic functions are working.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" />
</div>

If some servos are shown as not detected, first check whether the wiring is correct, close the page and reopen it. If they are still not detected, the servo IDs may be duplicated (possibly because the command for calibrating the robotic arm was accidentally entered as the command for calibrating the servos). In this case, the IDs of these servos need to be recalibrated.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" />
</div>

### 2. Remove the Servo Wire Harnesses

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

### 3. Recalibrate Servo IDs

Make sure only one servo is connected to the robotic arm.

(When flashing an ID to a servo, since the servos share a serial bus, if duplicate IDs exist—for example changing ID 4 to 6—all servos with ID 4 on the bus will be changed to 6. Therefore, all servos must be removed and reprogrammed one by one.)

For example, you can connect the #6 servo to the driver board as shown below. Other servos are connected in a similar way, so you can avoid disassembling the robotic arm.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" />
</div>

As shown in the figure, only servo #4 is recognized, but the servo actually connected is #6. This indicates that the servo ID is wrong and needs to be changed back to 6.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" />
</div>

At this point, you can click on servo #4 and change its ID to 6. Repeat the same operation for the other servos.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" />
</div>

After the servo calibration is complete, you can plug the wires back in one by one to finish.

### 4. Write the Neutral Value to the Servo

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" />
</div>

1\. Click **Serial Port Neutral Test** to check whether the robotic arm neutral position is as shown above. If it is roughly the same, the neutral value of the robotic arm is normal.

2\. If not, move the robotic arm to the neutral position, then click **Serial Port Neutral Calibration**. The robotic arm will write the current position as the neutral value into the servo.

3\. Click **Serial Port Disable Motors**, and the robotic arm will go limp; you need to support it by hand.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" />
</div>

### 5. Single Servo Control

By default, all servos on the page are at their neutral positions, as shown in the figure.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" />
</div>

- 1. First enable torque. You can enable all torques with one click or enable torque for a single servo, then slide the slider to move the servo to the corresponding position. However, be sure to move slowly. Because the printed parts of the robotic arm will physically block certain positions, the arm cannot actually reach the edge positions; there are maximum and minimum movement limits, so do not slide the slider to 0 or to the maximum. After disabling torque, the robotic arm will go limp.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" />
</div>

As shown above, after enabling torque, the movement of the corresponding servo will change.

- 2. You can perform neutral calibration for a single servo and clear the servo's internal neutral, maximum, and minimum positions
- 3. The following is the servo information

Pos: Position

V: Voltage

T: Temperature

Spd: Speed

Load: Torque

Cur: Current

Mov: Motion Status

Model: Model, Authority

Status: Status will show Normal, Overcurrent, or Overload

### 6. Advanced Tools

You can read the corresponding register address data and write the corresponding data.

Baud rate can be modified.

Factory settings can be restored.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" />
</div>
