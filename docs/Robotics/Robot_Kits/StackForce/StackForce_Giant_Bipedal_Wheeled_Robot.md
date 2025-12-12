---
description: StackForce Giant Bipedal Wheeled Robot Professional Development Guide, including advanced features, in-depth development tutorials, API documentation, and practical application cases
title: StackForce Giant Bipedal Wheeled Robot
keywords:
- StackForce
- Wheel-legged Robot
- Professional Development
- Advanced Robotics
- Artificial Intelligence
- Autonomous Navigation
slug: /stackforce_giant_bipedal_wheeled_robot
last_update:
  date: 12/12/2025
  author: TienjuiWong
translation:
    skip: [zh-CN]
---

# StackForce Giant Bipedal Wheeled Robot Development Guide

:::tip
This guide is designed for professional developers and researchers, providing a complete solution from basic setup to advanced application development. If you are a beginner, we recommend starting with the Mini version.
:::

## 📋 Table of Contents

- [Product Overview](#product-overview)
- [BOM Bill of Materials](#bom-bill-of-materials)
- [Core Features](#core-features)
- [Quick Start](#quick-start)
- [Remote Control Operation Guide](#remote-control-operation-guide)
- [System Debugging Guide](#system-debugging-guide)
- [Hardware Assembly](#hardware-assembly)

## Product Overview

### Product Positioning

The StackForce Giant Bipedal Wheeled Robot is a professional-grade wheel-legged robot system built on the StackForce lightweight robot development platform. Compared to the Mini version, the full version has significant improvements in hardware configuration, software functionality, and expansion capabilities, specifically designed for professional development, academic research, and commercial applications.

<iframe
  src="//player.bilibili.com/player.html?isOutside=true&aid=114001333722578&bvid=BV1MhKKeBEJX&cid=28481814826&p=1"
  width="100%"
  height="480"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
  style={{borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
</iframe>

### Core Technical Architecture

#### Dual-Chip Collaborative Control System
- **S1 Main Control Chip**: Responsible for motor control, FOC algorithm execution, and motion control
- **S3 Coprocessor Chip**: Responsible for servo control, sensor fusion, and wireless communication

#### Omnidirectional Kinematics Model
- Quaternion-based attitude calculation algorithm
- Real-time inverse kinematics solution

#### Intelligent Balance Algorithm
- Adaptive PID control
- Dynamic center of gravity adjustment
- Complex terrain adaptive stabilization

## BOM Bill of Materials

### Large Wheel-Leg Structure Bill of Materials

| Item Name | Quantity | Notes |
|-----------|----------|-------|
| **Electronic Components** | | |
| StackForce Main Control Board | 1 | |
| StackForce High Current Board A | 1 | |
| StackForce High Current Board B | 1 | |
| StackForce Servo Board | 1 | |
| StackForce CAN Board | 1 | |
| StackForce IO Expansion Board | 1 | |
| StackForce Hall Board | 1 | |
| **Carbon Fiber Structural Parts** | | |
| Side Panel | 2 | 5mm thickness |
| Side Panel Base Frame | 2 | 3mm thickness |
| Front Guide | 4 | 5mm thickness |
| Baffle | 2 | 3mm thickness |
| **PLA 3D Printed Parts** | | |
| Upper Leg | 4 | |
| Lower Leg | 4 | |
| Front/Rear Panel | 4 | |
| Front/Rear Panel Connector | 4 | |
| Baffle Connector | 4 | |
| Main Control Base | 1 | |
| Motor Cover | 4 | |
| Cover Plate V1 | 2 | |
| Cover Plate V2 | 2 | |
| Battery Compartment | 1 | |
| Battery Cover | 1 | |
| **CNC Machined Parts** | | |
| Leg Connector 30 | 2 | |
| Leg Connector 40 | 2 | |
| **Aluminum Profile** | | |
| 40*30*100 1mm thick | 4 | Requires drilling |
| 60*20*320mm 1mm thick | 2 | Requires drilling |
| **Fasteners** | | |
| M2*10 | 1 | Round head black |
| M3*8 | 4 | Round head |
| M3*8 | 32 | Black, hex socket |
| M3*10 | 12 | Black, hex socket |
| M3*14 | 16 | Black, hex socket |
| M3*20 | 12 | Black, hex socket |
| M3*25 | 24 | Black, hex socket |
| M3*40 | 16 | Black, hex socket |
| M3*45 | 8 | Black, hex socket |
| M3*50 | 8 | Black, hex socket |
| M3*50 | 8 | Black, flat head |
| M4*30 | 44 | Black, hex socket |
| M4*30 | 2 | Black round head |
| Copper Pillar | 22 | M3*8+4 |
| Set Screw | 4 | 10*M8*30 |
| M3 Nut | 10 | Black |
| M3 Lock Nut | 54 | Black |
| M4 Lock Nut | 20 | Black |
| M6 Lock Nut | 4 | |
| M8 Lock Nut | 4 | |
| External Thread Bearing | 4 | 9C2L15M6 |
| F6000ZZ Bearing | 8 | 10*26*8 |
| **Motors** | | |
| Hub Motor 5.5 inch 24v | 2 | |
| GIM6010-8-Standard Version | 4 | |

## Core Features

### 1. 🚀 High-Performance Hardware Platform

#### Main Control System
- **Dual-Chip Architecture**: S1 + S3 collaborative processing
- **Real-Time Performance**: Microsecond-level response time
- **Expansion Interfaces**: Rich I2C, SPI, PWM interfaces

#### Motion Control System
- **FOC Vector Control**: Precise torque control

### 2. 🧠 Intelligent Perception System

#### Sensor Configuration
- **High-Precision IMU**: 9-axis sensor fusion
- **Magnetic Encoder**: 14-bit precision position feedback

### 3. 🌐 Powerful Communication Capabilities

#### Wireless Communication
- **WiFi 6**: High-speed data transmission
- **Bluetooth 5.2**: Low-power connection
- **Custom Protocol**: Efficient communication protocol stack for remote controller connection

#### Wired Interfaces
- **USB Type-C**: Serial debugging
- **CAN Bus**: Motor driving

### 4. 🔧 Flexible Development Support

#### Development Toolchain
- **PlatformIO**: Professional embedded development environment
- **ROS/ROS2**: Robot Operating System compatibility

#### Open Source Ecosystem
- **Fully Open Source**: Control code is open source
- **Modular Design**: Facilitates feature expansion

## Quick Start

### System Requirements

#### Hardware Requirements
- StackForce Full Version Robot Kit
- Computer with Ubuntu 20.04+ or Windows 10+ installed
- At least 8GB RAM, 100GB available storage space

#### Software Requirements
- Visual Studio Code
- PlatformIO IDE Extension


## Remote Control Operation Guide

### 1. Receiver Wiring

The diagram below shows the output wiring sequence of the receiver; only the following three wires are needed: **CH1/PPM**, **GND**, **VCC**.

The receiver outputs in order: **CH1/PPM**, **GND**, **VCC**

The expansion board has 40 pins, with GND and 3V3 in the middle row, as shown in the diagram below.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_01.png" />
</div>

### 2. Receiver and Remote Control Frequency Pairing

Before pairing frequencies, first turn off the remote control, then power on and off the receiver three times within 10 seconds to enter pairing mode. The receiver indicator light will light up and go out after one second.

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_02.png" />
</div>

Then flip the remote control enable switch down to enable signal transmission, flip the left joystick of the remote control down to the lowest position, and then turn on the remote control. The frequency pairing is successful. After successful frequency pairing, the receiver indicator light will go out.

### 3. Remote Control Basic Usage Instructions

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_03.png" />
</div>

#### Joystick and Switch Functions

| Controller | Function | Description |
|------------|----------|-------------|
| **Enable Joystick** | Whether remote control sends signal | Must be flipped before controlling the robot |
| **Left Joystick (up/down)** | Control robot height | Raise up, lower down |
| **Left Joystick (left/right)** | Control height of both sides of robot legs | Need to enable shoulder swing function |
| **Right Joystick (up/down)** | Control robot forward/backward movement | Up to move forward, down to move backward |
| **Right Joystick (left/right)** | Control robot left/right turning | Turn left, turn right |

#### Left Joystick with Left Knob Usage

- **When the left knob is turned clockwise to the top**: Flip the left joystick down to enable shoulder swing function; flip up to disable
- **When the left knob is turned counterclockwise to the bottom**: Flip down to make the robot jump, flip up to disable jump

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_04.png" />
</div>

#### Right Joystick and Right Knob

- **The right joystick has three positions**:
  - Top position: Disable hub motor
  - Middle position: Enable hub motor
  - Bottom position: Activate self-stabilizing mechanism

- **Right knob**: Adjust balance deviation

### 4. Robot Power-On Operation Steps

#### Detailed Operation Process

1. **Remote Control Preparation**
   - Flip the left joystick of the remote control to the lowest position, then turn on the remote control
   - Ensure the robot legs are suspended and parallel to the ground
   - The robot legs should hang naturally, ensuring smooth wheel rotation for calibration

2. **Robot Power-On**
   - Turn on the robot power switch
   - Wait for hub motor calibration to complete

3. **Main Control Board Reset**
   - Flip the left joystick all the way up to reset the S3 chip on the main control board
   - Wait for calibration to complete

4. **Leg Retraction**
   - Flip the left joystick all the way down to retract the robot legs
   - Place the robot on the ground

5. **Hub Motor Activation**
   - Flip the right joystick to the middle position to start the hub motor
   - If the robot cannot maintain balance, fine-tune the right knob on the remote control until the robot maintains balance

:::warning
**Important Reminders**:
- Do not over-discharge the remote control battery
- You can use a multimeter to measure battery voltage
- Normal discharge range is generally 25-21V
- If voltage drops below 21V, please charge in time
- If you do not understand the above steps, you can contact technical staff to watch the robot power-on operation video!
:::

## System Debugging Guide

:::tip
This section uses the ID number of the joint motor board as the label for explanation. Please connect strictly according to the wiring diagram.
:::

### 1. Wiring Guide

:::tip
**Wiring Diagram** - Wire strictly according to the diagram to ensure each connection is correct
:::

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_01.png" alt="Overall wiring diagram" />
</div>

#### 1. Hub Motor Wiring

**Hub motor three-phase line and Hall three-phase line wiring:**
- Hub motor three-phase wire welding sequence (left to right): **Green, Yellow, Blue**
- Encoder wire sequence (left to right): **Yellow, Green, Blue, Black, Red**

**Detailed Wiring Diagram:**

<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_02.png" alt="Motor wiring detail image 1" />
        <p>Figure 1: Motor three-phase line wiring</p>
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_03.png" alt="Motor wiring detail image 2" />
        <p>Figure 2: Encoder wiring details</p>
      </td>
    </tr>
  </table>
</div>

**Left and right hub motor wiring allocation:**
- **Left hub motor**:
  - Three-phase line → High current Board B
  - Hall encoder line → Hall Board M0 port

**Left and right wheel detailed wiring scheme:**

<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_04.png" alt="Left hub motor wiring" />
        <p>Left hub motor wiring scheme</p>
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_05.png" alt="Right hub motor wiring" />
        <p>Right hub motor wiring scheme</p>
      </td>
    </tr>
  </table>
</div>

### 2. S1 Firmware Flashing

#### Pre-flashing Preparation

:::warning
**Important Reminder** - USB cable insertion direction is crucial, incorrect insertion may cause device damage
:::

1. Insert the USB cable's type-c head **with the seam side facing down** into the main control board's type-c interface
2. Check the main control board indicator light:
   - If the main control board **lights yellow** → Normal, can flash directly
   - If the main control board **lights green** → Press the white self-locking button beside it to switch to yellow light

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_06.png" alt="USB cable insertion direction diagram"  />
  <p>⚠️ Note the USB cable insertion direction</p>
</div>

#### Flashing Steps

**Step 1: Open the flashing tool**
1. Double-click to open the `flash_download_tool_3.9.2.exe` tool
2. After the tool opens, a dialog will pop up, select **ESP32**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_07.png" alt="Flashing tool startup interface"  />
</div>

**Step 2: Select firmware file**
1. Click the three dots (📁 icon) in the first row
2. In the pop-up folder, select the `target.bin` file

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_08.png" alt="Firmware file selection interface"  />
</div>

**Step 3: Configure flashing parameters**

:::info
**Parameter Configuration Checklist** - Please configure according to the following parameters to ensure successful flashing
:::

Configure the following parameters:
1. ✅ **Select file path** (automatically displayed)
2. ✅ **Check selection**
3. ✅ **Write address**: `0x00`
4. ✅ **Clock frequency**: `80MHz`
5. ✅ **Flash mode**: `QIO`
6. ✅ **Serial port selection**: View CH340 corresponding port through Device Manager
7. ✅ **Baud rate**: `921600`

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_09.png" alt="Flashing parameter configuration 1"  />
        <p>📋 Parameter configuration step 1</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_10.png" alt="Flashing parameter configuration 2"  />
        <p>📋 Parameter configuration step 2</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_11.png" alt="Flashing parameter configuration 3"  />
        <p>📋 Parameter configuration step 3</p>
      </td>
    </tr>
  </table>
</div>

**Step 4: Verify flashing results**
After successful flashing:
1. Assemble the board and connect the wires
2. Open the serial assistant (VOFA) and select the corresponding port
3. Power on the robot:
   - First turn on the remote control
   - Flip the left joystick of the remote control to the top
   - Flip the top-right lever to the top (L position)
4. Press the S1 chip reset button (position marked with red box)

:::success
**Verification Steps** - Please verify according to the following steps after flashing is complete
:::

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_12.png" alt="S1 chip reset button position"  />
        <p>✅ S1 chip reset button position</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_14.png" alt="Serial debugging assistant interface"  />
        <p>📊 Serial debugging assistant interface</p>
      </td>
    </tr>
  </table>
</div>

If the serial print information is as shown in the figure below, it means the hub motor wiring is correct and the S1 firmware was successfully flashed.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_13.png" alt="Flashing success verification information"  />
  <p>🎉 Flashing successful! Seeing this message indicates everything is normal</p>
</div>


### 3. Checking Terminal Resistance

#### Joint Motor Driver Board ID Numbers

The joint motor driver boards have firmware flashed before shipping and are labeled with labels that are the CAN ID numbers:

| Joint Position | CAN ID Number |
|----------------|---------------|
| Left Front Joint Motor Driver Board | 0x04 |
| Right Front Joint Motor Driver Board | 0x03 |
| Left Rear Joint Motor Driver Board | 0x02 |
| Right Rear Joint Motor Driver Board | 0x01 |

#### Connection and Terminal Resistance Settings

1. **Use XT30 (2+2) cable connection**:
   - Connect the four joint motor driver boards in series
   - Only need to **open the terminal resistance of one of the motor driver boards** in the wiring
   - The other three do not need to open terminal resistance

2. **CAN Board Terminal Resistance Check**:
   - Check whether the terminal resistance on the CAN board is open
   - Use a multimeter resistance mode to measure the resistance of CAN board H and L terminals
   - Normal resistance should be **around 60Ω**

3. **Troubleshooting**:
   - If the resistance is incorrect, check whether the terminal resistance switches on the back of the other three joint motor driver boards are closed
   - Ensure only one terminal resistance is in the open state


### 4. Calibrating Zero Position

#### Step 1: Modify Code Settings

**In the can.cpp file:**
1. Scroll down to find the `CAN_control()` function

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_15.png" alt="CAN_control function in can.cpp file"  />
  <p>📝 Key code location in can.cpp</p>
</div>

**In the main.cpp file:**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_16.png" alt="posInit function in main.cpp file"  />
  <p>📝 Key code location in main.cpp</p>
</div>

#### Step 2: Hardware Preparation and Flashing

1. **Robot Preparation**:
   - First let the joint motor legs hang naturally vertically downward
   - Insert the USB cable into the main control board (note that the side of the type-c interface with the seam is down, the side without the seam is up)
   - After insertion, the main control board S3 serial port should light **green light**
   - If it lights yellow, press the white button on the main control board to switch to S3 chip

2. **Program Flashing**:
   - Flash the modified program

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_17.png" alt="Hardware preparation completed diagram"  />
  <p>🔧 Hardware preparation completed state</p>
</div>

3. **Power-on Test**:
   - Open the serial assistant after flashing the program
   - Power on the robot (flip the top-right lever of the remote control to the top (L))
   - Reset the S3 chip
   - Observe that the initial angles of the joint motors printed by the serial port are all near 0

4. **Verify Angle Data**:
   - Shake one of the robot's big arms
   - Which data changes corresponds to the angle data of that big arm position

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_18.png" alt="Serial output angle data verification"  />
  <p>📊 Serial output - angle data verification</p>
</div>

#### Step 3: Complete Zero Position Settings

**In the main.cpp file:**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_19.png" alt="main.cpp zero position setting completed"  />
  <p>✅ main.cpp zero position setting completed</p>
</div>

**In the can.cpp file:**
1. After commenting `posInit()`, you need to **uncomment** the CAN command sending in the `CAN_Control()` function in the can.cpp file
2. **Comment out** printing the joint motor electrical angle

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_20.png" alt="can.cpp final configuration"  />
  <p>✅ can.cpp final configuration completed</p>
</div>

#### Step 4: Final Adjustment

1. **Re-flash the program** to the S3 chip
2. **Control Test**:
   - Power on the robot
   - Control the leg height joystick
   - Observe whether the leg height changes follow the left joystick control
3. **Height Balance Adjustment**:
   - Place the robot on the ground
   - Retract the robot legs to the minimum
   - Observe whether the heights on both sides of the robot plane are consistent
   - If not consistent, adjust the `leftY` and `rightY` values in the robot.cpp file

**Height Balance Adjustment Diagram:**

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_21.png" alt="Height adjustment before and after comparison 1"  />
        <p>⚖️ Height adjustment diagram - before adjustment</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_22.png" alt="Height adjustment before and after comparison 2"  />
        <p>⚖️ Height adjustment diagram - after adjustment</p>
      </td>
    </tr>
  </table>
</div>

### 5. Debugging PID Parameter Values

#### Debugging Preparation

**PID Parameter Debugging Interface:**

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_23.png" alt="PID parameter debugging step 1"  />
        <p>🔧 PID debugging steps - function comments</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_24.png" alt="PID parameter debugging step 2"  />
        <p>🔧 PID debugging steps - parameter printing</p>
      </td>
    </tr>
  </table>
</div>

#### Debugging Steps

**Debug PID parameters at three height values:**

| Height Value | Corresponding Position | Fill Parameters |
|--------------|------------------------|-----------------|
| 0 | Lowest point | pid0 |
| 100 | Midpoint | pid1 |
| 200 | Highest point | pid2 |

**Each pid parameter includes:**
- Speed loop Kp
- Upright loop Kp
- Upright loop Kd
- Robot X-axis Kp

#### Debugging Process

1. **Debug each height individually**:
   - Debug the PID parameter values for three different height values separately
   - Ensure the robot can maintain balance at each height

2. **Fill parameters**:
   - Fill the debugged PID parameters of the three height values into the PID linear fitting function in order
   - Fill the PID parameter values of the lowest point into pid0
   - Fill the PID parameter values of the midpoint into pid1
   - Fill the PID parameter values of the highest point into pid2

3. **Final verification**:
   - After debugging is complete, **uncomment** the PID linear fitting function
   - Flash the program into the S3 program
   - Power on the robot according to the robot power-on steps
   - Ground verify that the PID parameters meet the robot's motion balance and operational requirements

:::tip
If you need to refer to operation videos, you can contact the technical staff in the group to obtain the robot power-on operation video!
:::

## Hardware Assembly

### Detailed Assembly Guide

#### Assembly Documents and Videos

##### 📄 Assembly Documents
- [📗 Detailed Assembly Manual (English Version)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLegRobot_NewVersion_Controller_Instructions.en.docx)
- [📘 Detailed Assembly Manual (Chinese Version)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/LargeWheelLegRobot_NewVersion_Controller_Instructions.zh.docx)
- [📋 Bill of Materials BOM (Chinese Version)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLeg_BOM_Chinese.xlsx)
- [📋 Bill of Materials BOM (English Version)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLeg_BOM_English.xlsx)

##### 🔧 Development Tools
- [⚙️ VSCode + PIO Environment Configuration Tutorial](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/VScode_PIO_environment_tutorial/Environment%20Configuration%20Tutorial.docx)
- [📦 MingW64 Toolkit](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/VScode_PIO_environment_tutorial/mingw64.7z)
- [🔌 CH340 Driver Installation Guide](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/ch340_driver_installation/CH340_install.docx)
- [💾 CH340 Driver Package](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/ch340_driver_installation/CH341SER.ZIP)

##### 💻 Firmware and Programs
- [⚡ S1 Firmware Flashing Tool](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/S1_Firmware_Flashing_Tool.zip)
- [🔧 Latest Controller Program](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/ESP32S3_SF_Bipedal_Wheel_New_version.zip)
- [🔧 Joint Debugging Program](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/ESP32S3_SF_Bipedal_Wheel_lagency.zip)
- [🖼️ Program Debugging Screenshots](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/picture/)

##### 📚 Technical Documentation
- [🔩 Joint Motor Control Description](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/joint_motor_documentation/SF-MOTOR_CONTROL.md)
- [📦 Joint Motor Documentation Package](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/joint_motor_documentation/SF_Motor.zip)

##### 🗂️ 3D Models and Schematics
- [📐 Robot 3D Model (STP Format)](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/large_wheel_leg_robot_model_files/stackforce000_asm.stp)
- [🔌 Main Control Board Schematic](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/StackForce_Main_Control_Board.pdf)
- [🔌 CAN/485 Expansion Board Schematic](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/SCH_StackForce_CAN_485.pdf)
- [🔌 Servo IMU Module Schematic](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/Multi_Servo_IMU_Module.pdf)

##### 🎥 Video Tutorials

<iframe
  src="//player.bilibili.com/player.html?isOutside=true&aid=114124914695505&bvid=BV12c9RYuEzw&cid=28754184592&p=2"
  width="100%"
  height="480"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
  style={{borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
</iframe>


### Detailed Assembly Steps

#### Phase 1: Mechanical Framework Construction
- Assemble base structure
- Install wheel-leg components
- Connect main body framework

#### Phase 2: Electronic System Integration
- Install main control system (S1/S3 boards)
- Configure sensor modules
- Set up communication interfaces

#### Phase 3: System Debugging
- Execute hardware self-check
- Verify system functionality

## Conclusion

The StackForce Giant Bipedal Wheeled Robot represents the latest development level of wheel-legged robot technology. We are committed to providing developers with the most powerful tools and most comprehensive support to jointly advance the development of robot technology.

Whether you are a student, researcher, or engineer, StackForce can provide you with an innovative platform with unlimited possibilities. We look forward to seeing you create amazing applications!

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
