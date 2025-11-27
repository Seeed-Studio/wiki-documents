---
description: This wiki provides tutorial for Stackforce series motors.
title: Stackforce Series Motors
keywords:
- actuator
- motor
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010_homepage.webp
slug: /stackforce_series
last_update:
  date: 11/26/2025
  author: Li Shanghang
---

# Stackforce X Series Motors Getting Start

This article will introduce how to get started with Stackforce series motors and how to use them with C++ and Python on the reComputer Jetson Super.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱</font></span></strong>
    </a>
</div>

## Specification

Here's the completed table with all parameters filled in for all motor models:

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>6010</th>
      <th>8108</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Rated Voltage</td><td>24V</td><td>24V</td></tr>
    <tr><td>Rated Current</td><td>10.5A</td><td>7.5A</td></tr>
    <tr><td>Rated Power</td><td>240W</td><td>180W</td></tr>
    <tr><td>Rated Torque</td><td>5 Nm</td><td>7.5 Nm</td></tr>
    <tr><td>Peak Torque</td><td>11 Nm</td><td>22 Nm</td></tr>
    <tr><td>Rated Speed</td><td>120 RPM</td><td>110 RPM</td></tr>
    <tr><td>Maximum Speed</td><td>270 RPM</td><td>320 RPM</td></tr>
    <tr><td>Gear Ratio</td><td>8:1</td><td>8:1</td></tr>
    <tr><td>Encoder Type</td><td>MIT Protocol</td><td>MIT Protocol</td></tr>
    <tr><td>Control Modes</td><td>Position, Velocity, Torque Control</td><td>Position, Velocity, Torque Control</td></tr>
    <tr><td>Outer Diameter</td><td>80 mm</td><td>97 mm</td></tr>
    <tr><td>Thickness</td><td>47 mm</td><td>46 mm</td></tr>
    <tr><td>Weight</td><td>392 g ±10%</td><td>395 g ±5%</td></tr>
    <tr><td>Phase Resistance</td><td>0.48 Ω ±10%</td><td>0.439 Ω ±10%</td></tr>
    <tr><td>Phase Inductance</td><td>368 μH ±10%</td><td>403 μH ±10%</td></tr>
  </tbody>
</table>

## Main Features

1. **High Torque Output**
2. **MIT Mode Control**
3. **Magnetic Encoder Feedback**
4. **Compact and Lightweight Design**
5. **Support for High-Speed CAN Bus Communication**
6. **Versatile Applications**

## Getting Started Guide
### Preparations Before Use
**On a PC with Windows System**
- [Product Manual](https://files.seeedstudio.com/products/stackforce/%E6%96%B0%E7%89%886010%E5%85%B3%E8%8A%82%E7%94%B5%E6%9C%BA%E7%94%A8%E6%88%B7%E6%96%87%E6%A1%A3V1.1.pdf).
- Download [VOFA](https://www.vofa.plus/).

The motor’s CANID and CANMode are both modified via serial port. The motor is shipped with a default CANID of 0x01 and CANMode of CAN2.0 at 1Mbps.

### Serial Port Wiring
Connect V, G, T, R to the VCC (3.3V), GND, RX, TX of the serial communication module respectively (RX and TX should be cross-connected). As shown in the figure below:

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口通信端口
    .png"/>
</div>

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口工具.png"/>
</div>

### Modifying CANID
Set the serial port baud rate to 1Mbps.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID.png"/>
</div>

The CANID to be sent is 0x**, and the set ID is 0x**, with a maximum limit of 0x7F. After successfully setting the CANID, the following log will be printed:

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID反馈.png"/>
</div>

### Modifying CAN Mode
Send CANMODE:0 or CANMODE:1 via the serial port.

CANMODE:0 represents CAN2.0 mode (1Mbps), while CANMODE:1 represents CANFD mode (5Mbps).

Successful modification of CAN mode is shown in the figures below:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈1.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈2.png"/>
</div>

## Using [reComputer Mini Jetson Orin](/cn/recomputer_jetson_mini_getting_started) to Control Motors
The most common CAN communication interfaces for motors on the market are **XT30 (2+2)** and **JST connectors**. Our **reComputer Mini Jetson Orin** and **reComputer Robotics** devices are equipped with **dual XT30 (2+2) interfaces** and **CAN interfaces based on JST**, providing seamless compatibility.

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg "/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg "/>  
</div>

For more detailed information on CAN usage, please refer to this [wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can ).

### Enabling CAN Interface

**Step 1:** Before using CAN0 and CAN1, please remove the bottom cover and set the two 120Ω terminal resistors to the ON position.

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png " />
</div>

Turn off the toggle switch of the 120Ω CAN communication terminal resistor integrated on the motor.

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/电阻开关.png" />
</div>

:::tip
If the Recomputer Mini has not set the 120Ω terminal resistor to ON, you can choose to turn on the toggle switch of the motor's CAN communication terminal resistor.
:::

**Step 2:** Connect the motor directly to the CAN0 of the reComputer Mini via the XT30 (2+2) interface.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Mini连接.jpg" />
</div>

:::tip
Since [the CAN interface design of the reComputer Mini](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can0can1-%E9%80%9A%E4%BF%A1) is opposite to that of the motor’s CAN interface, manual soldering is required to reverse the data lines.

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png" />
     <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/电机can接口.png" />
</div>

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/TX30.jpg" />
</div>

Considering the high voltage and current required by the motor, it is recommended to purchase a 24V 300W power adapter to power the reComputer Mini for driving a single motor. If more motors need to be connected, a higher-power power adapter can be purchased according to the requirement.

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/适配器.jpg " />
</div>
:::

:::danger
This power supply is only for single-motor learning and testing. For multiple motors, please design a separate power board and isolate the power supply of Jetson from the motor power supply to avoid high current passing directly through Jetson.
:::

### Enabling Jetson CAN Communication
Open a terminal and enter the following command to pull the GPIO pin high to activate CAN0:
```bash
gpioset --mode=wait 0 43=0
```

If using CAN1 with the JST interface, pull pin 106 high.
```bash
gpioset --mode=wait 0 106=0
```

Keep this terminal open, start a new terminal, and configure CAN0.
```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Setting Up Python and C++ Environment

**Step 1:** Clone the SDK.
```bash
git clone https://github.com/Seeed-Projects/Stackforce-Motor-SDK.git 
```

**Step 2:** The driver SDK requires the following dependencies. For Debian Linux, they can be installed via the following commands:

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

If Python bindings are needed, additionally install Python 3, pip, and pybind11:
```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

After installing the dependencies, follow the steps below to install the driver SDK as a C++ library or a Python package. Both will use CMake to compile the C++ code.

### Using C++ for Control

```bash
cd build
cmake ..
make
```

The compiled executable will be located at `build/sfmotor_control`. Run the program:

```bash
./sfmotor_control
```

The program defaults to controlling the motor with ID 0x01. During operation, you can input the target angle value (in radians) via the keyboard. It also receives feedback data on the motor’s angle and angular velocity.

### Using Python for Control

The Python script is located in the `script/` directory and can be run directly without compilation.

```bash
python main.py 
```

The program defaults to controlling the motor with ID 0x01. During operation, you can input the target angle value (in radians) via the keyboard. It also receives feedback data on the motor’s angle and angular velocity.

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
