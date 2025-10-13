---
description: This wiki provides tutorial for Myactuator series motors.
title: MyActuator Series Motors
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.webp
slug: /myactuator_series
last_update:
  date: 05/29/2025
  author: ZhuYaoHui
---

# MyActuator X Series Motors Getting Start

This article will introduce how to get started with MyActuator series motors and how to use them with C++ and Python on the reComputer Mini Jetson Orin.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱</font></span></strong>
    </a>
</div>

## Specification

Here's the completed table with all parameters filled in for all motor models:

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>X2-7</th>
      <th>X4-10</th>
      <th>X4-36</th>
      <th>X8-120</th>
      <th>X12-320</th>
      <th>X15-450</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Gear Ratio</td><td>28.17</td><td>12.6</td><td>36</td><td>19.61</td><td>20</td><td>20.25</td></tr>
    <tr><td>Input Voltage (V)</td><td>24</td><td>24</td><td>24</td><td>48</td><td>48</td><td>72</td></tr>
    <tr><td>No Load Speed (RPM)</td><td>178</td><td>317</td><td>111</td><td>158</td><td>125</td><td>108</td></tr>
    <tr><td>No-Load Input Current (A)</td><td>1</td><td>1</td><td>0.9</td><td>1.6</td><td>2.7</td><td>3.5</td></tr>
    <tr><td>Rated Speed (RPM)</td><td>142</td><td>238</td><td>83</td><td>127</td><td>100</td><td>98</td></tr>
    <tr><td>Rated Torque (N.m)</td><td>2.5</td><td>4</td><td>10.5</td><td>43</td><td>85</td><td>145</td></tr>
    <tr><td>Rated Output Power (W)</td><td>37</td><td>100</td><td>100</td><td>574</td><td>900</td><td>1480</td></tr>
    <tr><td>Rated Phase Current A(rms)</td><td>3</td><td>7.8</td><td>6.1</td><td>17.6</td><td>30</td><td>25</td></tr>
    <tr><td>Peak Torque (N.m)</td><td>7</td><td>10</td><td>34</td><td>120</td><td>320</td><td>450</td></tr>
    <tr><td>Peak Phase Current A(rms)</td><td>8.1</td><td>19.5</td><td>21.5</td><td>43.8</td><td>100</td><td>69.2</td></tr>
    <tr><td>Efficiency (%)</td><td>63</td><td>69.5</td><td>63.1</td><td>79</td><td>75</td><td>82.4</td></tr>
    <tr><td>Motor Back-EMF Constant (Vdc/Krpm)</td><td>4.3</td><td>6</td><td>6</td><td>19.2</td><td>17.9</td><td>29.9</td></tr>
    <tr><td>Module Torque Constant (N.m/A)</td><td>0.8</td><td>0.8</td><td>1.9</td><td>2.4</td><td>3.3</td><td>5.8</td></tr>
    <tr><td>Motor Phase Resistance (Ω)</td><td>0.61</td><td>0.32</td><td>0.35</td><td>0.18</td><td>0.12</td><td>0.08</td></tr>
    <tr><td>Motor Phase Inductance (mH)</td><td>0.13</td><td>0.14</td><td>0.17</td><td>0.31</td><td>0.05</td><td>0.14</td></tr>
    <tr><td>Pole Pair</td><td>13</td><td>13</td><td>13</td><td>10</td><td>20</td><td>20</td></tr>
    <tr><td>3 Phase Connection</td><td colspan="6">Y</td></tr>
    <tr><td>Back Drive Torque (N.m)</td><td>0.4</td><td>0.8</td><td>1.14</td><td>3.21</td><td>3.8</td><td>4</td></tr>
    <tr><td>Backlash (Arcmin)</td><td>12</td><td>10</td><td>10</td><td>10</td><td>10</td><td>10</td></tr>
    <tr><td>Output Bearing Type</td><td colspan="2">Deep Groove Ball Bearings</td><td colspan="4">Crossed Roller Bearings</td></tr>
    <tr><td>Axial Suffer (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>4</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>Axial Stress (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>1</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>Radial Load (KN)</td><td>1</td><td>1.2</td><td>1.5</td><td>4.5</td><td>5</td><td>6</td></tr>
    <tr><td>Inertia (Kg.cm²)</td><td>0.17</td><td>0.25</td><td>0.3</td><td>1.5</td><td>12.9</td><td>31.6</td></tr>
    <tr><td>Encoder Type & Interface</td><td colspan="6">Dual Encoder ABS-17BIT (Input) / 17-18BIT (Output)</td></tr>
    <tr><td>Control Accuracy (Degree)</td><td colspan="6">&lt;0.01</td></tr>
    <tr><td>Communication</td><td colspan="6">CAN BUS / EtherCAT</td></tr>
    <tr><td>Weight (Kg)</td><td>0.26</td><td>0.33</td><td>0.36</td><td>1.40</td><td>2.37</td><td>3.50</td></tr>
    <tr><td>Insulation Grade</td><td colspan="6">F</td></tr>
  </tbody>
</table>

## RMD-X V4 Series Naming Conventions

- **RMD**: Brand Name R-Reducer M-Motor D-Drive
- **X2**: X Stands For The Series Name: Integrated Planetary Actuator, 2 represent motor model number e.g:X2 X4 X6 X8 etc
- **P28**: Planetary gear ratio e.g:P12 P28 P32 etc
- **7**: Peak torque 7N.m
- **E**: Communication E: CAN BUS & EtherCAT

## Main Features

1. **CAN BUS & EtherCAT**
2. **Crossed Roller Bearings**
3. **Dual Encoder**
4. **High Torque Density**
5. **High Precision**
6. **Hollow Design**

## Getting Start

### Environmental Preparation Before Use

**Windows System in PC**

- Download the [Download the corresponding product manual](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip).
- Downlaod the [MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)

- Extract `MYACTUATOR_Setup Software_V4.0.zip` and install the following:
  - `USBCAN_AllInOne_x86_x64_2.0.0.1.exe` located in the `Required Runtime Environment\ZLGUSBCAN_Driver` directory
  - `MSVBCRT.AIO.2019.10.19.X86 X64.exe` located in the `Required Microsoft Runtime Libraries` directory

### Connect the Circuit

Here we have selected the X4-36 motor, and its interface diagram is shown below.

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/X4-36-circuit.png" />
</div>

<table>
  <tr>
    <th>Port Definition</th>
    <th>Port Description</th>
  </tr>
  <tr>
    <td>① VCC</td>
    <td>Power positive</td>
  </tr>
  <tr>
    <td>② GND</td>
    <td>Power negative</td>
  </tr>
  <tr>
    <td>③ CAN_H</td>
    <td>CAN_H network signal terminal</td>
  </tr>
  <tr>
    <td>④ CAN_L</td>
    <td>CAN_L network signal terminal</td>
  </tr>
  <tr>
    <td>⑤ EtherCAT_IN</td>
    <td>EtherCAT input terminal</td>
  </tr>
  <tr>
    <td>⑥ EtherCAT_OUT</td>
    <td>EtherCAT output terminal</td>
  </tr>
  <tr>
    <td>⑦ T+</td>
    <td>Master sends control commands to module</td>
  </tr>
  <tr>
    <td>⑧ T-</td>
    <td>Module sends status feedback to master</td>
  </tr>
  <tr>
    <td>⑨ R+</td>
    <td>Master reflects module status data</td>
  </tr>
  <tr>
    <td>⑩ R-</td>
    <td>Module reflects master control commands</td>
  </tr>
</table>

Here, we use the CAN communication method, which requires an additional USB-CAN interface for debugging via an upper computer on Windows.

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/6.jpg" />
</div>

Here, you need to provide a separate 24V power supply for the motor and connect the USB to your computer.

### Use the `MYACTUATOR Setup Software 250206.exe` to Test the Motor

| **Set ID and Connection** | **Read Motor Information** | **Calibrate the motor** | **Calibrate the motor** |**Run a motor rotation test.** |
|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/1.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/2.png) | ![fig3](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/3.png) | ![fig4](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/4.png) |![fig5](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/5.png) |
| The default motor ID is 1. Enter ID as 1 and click "Connect". | After connecting, click "Read" to retrieve the motor's current information.|For first-time use, click "Calibrate Motor" to perform calibration.|After calibration, click "Read" and "Save". |You can now test different motor control modes in the Motor Running section. |

For more detail features, please refer to the ​**Setup Software Instruction Manual - V3.0.pdf** included in the ​[MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip) file.

## Control the Motor Using the [​reComputer Mini Jetson Orin.](/recomputer_jetson_mini_getting_started)

Currently, the most common CAN communication interfaces for motors in the market use **XT30 (2+2)** and **JST connectors**. Our **reComputer Mini Jetson Orin** and **reComputer Robotics** device is equipped with **dual XT30 (2+2) ports** and **JST-based CAN interfaces**, providing seamless compatibility.  

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

For more details on CAN usage, you can refer to this [wiki](https://wiki.seeedstudio.com/recomputer_jetson_mini_hardware_interfaces_usage/#can ).

### Enable CAN Interfaces

**Step1:** Before using CAN0 and CAN1, please remove the bottom cover and set both 120Ω termination resistors to the ​ON position.

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**Step2:** Connect the motor directly to the reComputer Mini CAN0 via the XT30 (2+2) interface.

This is CAN0 interfaces for reComputer Mini

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.jpg" />
</div>

:::danger
This power supply is only for single-motor learning and testing. For multiple motors, please design a separate power board and isolate the Jetson's power supply from the motor power supply to avoid high current passing directly through the Jetson.
:::

#### Enable Jetson CAN communication

Open a terminal and enter the following command to pull the GPIO pin high and activate CAN0:

```bash
gpioset --mode=wait 0 43=0
```

If you are using the JST-interface CAN1, pull pin 106 high.

```bash
gpioset --mode=wait 0 106=0
```

Keep this terminal open, launch a new terminal, and configure CAN0.

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Build Python and C++ Environment

**Step1:** Git clone the SDK.

```bash
git clone https://github.com/ZhuYaoHui1998/myactuator_rmd.git
```

**Step2:** This driver SDK requires the following dependencies to be installed. For Debian Linux they can be installed through apt as follows:

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

In case you want to use the Python bindings you will have to additionally install Python 3, pip and pybind11:

```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

After having installed its dependencies you will have to install the driver SDK either as a C++ library or Python package as described in the following steps. Both will use CMake to compile the C++ code.

#### Building the C++ Library

For building the C++ driver SDK open a new terminal inside this folder and execute the following commands. On older versions of Linux the build might fail with the error message error: 'const struct can_frame' has no member named 'len' and you will have to apply the code modification discussed in [issue 5](https://github.com/2b-t/myactuator_rmd/issues/5).

```bash
cd ~/myactuator_rmd
mkdir build
cd build
cmake .. -D PYTHON_BINDINGS=on
make -j $(nproc)
sudo make install
```

The flag PYTHON_BINDINGS (defaults to off) builds the Python bindings additionally to the C++ library. In case you are only interested in using the C++ library feel free to leave it off. When building the Python bindings like this they will be compiled to a shared library but not be installed. This means you will either have to install the library manually or you will only be able to import them locally inside the build folder.

For uninstalling the package again you can use the following command  `xargs rm < install_manifest.txt`.

#### Building the Python Library

For building and installing the Python bindings for this SDK open a new terminal inside the main folder and execute the following command:

```bash
cd ~/myactuator_rmd
pip3 install .
```

This will use the setup.py to invoke CMake and install the bindings as a C++ library. If you want to remove them again simply invoke `pip3 uninstall myactuator-rmd-py`.

### Control Using C++

1. Create project directory structure  
Create your project directory under the code src directory, for example, name it `myactuator_example`, and create a src folder under the subdirectory.

```bash  
cd ~/myactuator_rmd
mkdir -p ~/myactuator_rmd/src/myactuator_example/src  
cd ~/myactuator_rmd/src/myactuator_example  
```  

2. Write CMakeLists.txt  
In the `~/myactuator_rmd/src/myactuator_example/CMakeLists.txt` file, write the following content:

```bash
touch CMakeLists.txt
```

```cmake  
cmake_minimum_required(VERSION 3.20)  
project(myactuator_example)  

# Find the myactuator_rmd library  
find_package(myactuator_rmd REQUIRED)  

# Create executable  
add_executable(myactuator_node  
src/main.cpp  
)  

# Use C++17 standard  
target_compile_features(myactuator_node PUBLIC  
cxx_std_17  
)  

# Link the myactuator_rmd library  
target_link_libraries(myactuator_node PUBLIC  
myactuator_rmd::myactuator_rmd  
)  
```

3. Write main.cpp  
In the `~/myactuator_rmd/src/myactuator_example/src/main.cpp` file, write the following code:  

```bash
touch src/main.cpp
```

```cpp
#include <cstdlib>
#include <iostream>
#include <myactuator_rmd/myactuator_rmd.hpp>

int main() {
myactuator_rmd::CanDriver driver {"can0"};
myactuator_rmd::ActuatorInterface actuator {driver, 1};

std::cout << actuator.getVersionDate() << std::endl;
std::cout << actuator.sendPositionAbsoluteSetpoint(180.0, 500.0) << std::endl;
actuator.shutdownMotor();
return EXIT_SUCCESS;
}
```

4. Build the project  

```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make
```

5. Run the program  

```bash
sudo ./myactuator_node
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/Cresult.png" />
</div>

**Prerequisites**  

- CAN interface `can0` must be properly configured (ensure your motor and CAN bus are correctly connected).  
- The `myactuator_rmd` library must be properly installed (if not, install it first).

For more C++ implementation details, please refer to all contents in `myactuator_rmd.hpp`. We will provide a detailed introduction to Python usage methods.

### Control Using Python

Create a folder named scripts under the directory `~/myactuator_rmd/src/myactuator_example` to store Python scripts.

```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir scripts
```

#### **Get version number**

Create a custom Python script named `test.py` under the scripts directory and fill it with the following code.

```python
import myactuator_rmd_py as rmd
import time

# Initialize CAN driver and actuator interface
driver = rmd.CanDriver("can0")  # Using can0
actuator = rmd.ActuatorInterface(driver, 1)  # CAN ID set to 1

# Get version number
print("Version number:", actuator.getVersionDate())
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.png" />
</div>

Load the library and continue to create a driver for a particular network interface (here can0) and drive (here 1 corresponding to the CAN-address 0x140 + 1 = 0x141).

#### **Get Motor Status**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Motor Status 1
status1 = actuator.getMotorStatus1()
print(f"""
Motor Status 1:
Temperature: {status1.temperature}°C
Brake Status: {'Released' if status1.is_brake_released else 'Locked'}
Voltage: {status1.voltage}V
Error Code: {status1.error_code}
""")

# Motor Status 2
status2 = actuator.getMotorStatus2()
print(f"""
Motor Status 2:
Temperature: {status2.temperature}°C
Current: {status2.current}A
Shaft Speed: {status2.shaft_speed} RPM
Shaft Angle: {status2.shaft_angle}°
""")

# Motor Status 3
status3 = actuator.getMotorStatus3()
print(f"""
Motor Status 3:
Temperature: {status3.temperature}°C
Phase A Current: {status3.current_phase_a}A
Phase B Current: {status3.current_phase_b}A
Phase C Current: {status3.current_phase_c}A
""")

## Torque Calculation

import myactuator_rmd_py as rmd
from myactuator_rmd_py.actuator_constants import X4_24  # Import according to your motor model

def get_normalized_torque(actuator):
    """Calculate normalized torque from current"""
    # Get current value
    status = actuator.getMotorStatus2()
    current = status.current
    
    # Calculate normalized torque (current/rated)
    torque_ratio = current / X4_24.rated_current
    actual_torque = torque_ratio * X4_24.rated_torque
    return actual_torque

# Usage example
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

try:
    while True:
        torque = get_normalized_torque(actuator)
        print(f"Current Torque: {torque:.3f} Nm (Rated: {X4_24.rated_torque} Nm)", end='\r')
        time.sleep(0.1)
except KeyboardInterrupt:
    actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/9.png" />
</div>

#### **Control Mode**

- **Get Current Control Mode**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
mode = actuator.getControlMode()
print(f"Current Control Mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/10.png" />
</div>

- **Absolute Position Control**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Move to 180 degree position at 100 deg/s
actuator.sendPositionAbsoluteSetpoint(180.0, 300.0)
time.sleep(5)  # Wait for motor to reach target position

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

time.sleep(5)
mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/11.png" />
</div>

You will see your motor rotate to the 180-degree position.

- **Relative Position Control**

```python
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Move an additional 90 degrees from current position
current_angle = actuator.getMultiTurnAngle()
target_angle = current_angle + 90.0
actuator.sendPositionAbsoluteSetpoint(target_angle, 50.0)
time.sleep(3)
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")
mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/12.png" />
</div>

You will observe the motor rotating 90 degrees counterclockwise.

- **Velocity Control**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Continuous rotation at 500 RPM
actuator.sendVelocitySetpoint(500.0)
time.sleep(15)

# Stop motor
actuator.stopMotor()

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/13.png" />
</div>

- **Torque Control**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Apply 0.5A current (torque)
actuator.sendCurrentSetpoint(0.5)
time.sleep(2)

# Stop torque output
actuator.stopMotor()

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/14.png" />
</div>

- **Closed-loop Motion Control**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

# Initialization
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Position control with feedback
feedback = actuator.sendPositionAbsoluteSetpoint(180.0, 100.0)
time.sleep(5)
print(feedback)

    
# Velocity control with feedback
feedback = actuator.sendVelocitySetpoint(20.0)
time.sleep(5)
print(feedback)
    
# Torque control with feedback
torque_constant = 0.32  # Set according to motor model
feedback = actuator.sendTorqueSetpoint(1.5, torque_constant)
time.sleep(5)
print(feedback)

actuator.stopMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/15.png" />
</div>

#### Motor Brake Control

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Engage brake
actuator.lockBrake()
print("Brake engaged")

# Release brake
actuator.releaseBrake()
print("Brake released")
```

#### Motor Power Control

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Power off motor
actuator.shutdownMotor()
print("Motor powered off")
```

#### Encoder Functions

- **Get Multi-turn Encoder Position**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
encoder_pos = actuator.getMultiTurnEncoderPosition()
print(f"Multi-turn encoder position: {encoder_pos}")
```

- **Set Current Position as Zero Point (Requires Reboot)**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
actuator.setCurrentPositionAsEncoderZero()
print("Current position set as encoder zero point")
```

- **Set Custom Zero Point (Requires Reboot)**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Get current position as zero point
current_pos = actuator.getMultiTurnEncoderOriginalPosition()
print(f"Raw encoder position: {current_pos}")

# Set zero offset
actuator.setEncoderZero(current_pos)
print(f"Encoder zero point set to: {current_pos}")

# Reboot to apply settings
actuator.shutdownMotor()
time.sleep(1)  # Wait for shutdown
actuator = rmd.ActuatorInterface(driver, 1)  # Reinitialize

# Verify
new_pos = actuator.getMultiTurnEncoderPosition()
print(f"Post-reboot position (should be near 0): {new_pos}")
```

#### Acceleration Settings

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
from myactuator_rmd_py.actuator_state import AccelerationType

# Initialization
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

## Get initial acceleration
print(f"Initial acceleration: {actuator.getAcceleration()}")

actuator.setAcceleration(5000, AccelerationType.POSITION_PLANNING_ACCELERATION)

## Get modified acceleration
print(f"Modified acceleration: {actuator.getAcceleration()}")

# Set different acceleration types
actuator.setAcceleration(1000, AccelerationType.POSITION_PLANNING_ACCELERATION)
actuator.setAcceleration(800, AccelerationType.POSITION_PLANNING_DECELERATION)
actuator.setAcceleration(1200, AccelerationType.VELOCITY_PLANNING_ACCELERATION)
actuator.setAcceleration(1000, AccelerationType.VELOCITY_PLANNING_DECELERATION)
```

<div class="video-container">
<iframe width="960" height="640" src="https://www.youtube.com/embed/0HLx3iQitXg?si=Z39mFeatUdp4j9dh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
