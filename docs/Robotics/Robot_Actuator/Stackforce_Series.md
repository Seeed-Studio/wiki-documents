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
  date: 12/25/2025
  author: Li Shanghang
translation:
    skip: [zh-CN]
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
    <tr><td>Communication protocol</td><td>MIT Protocol</td><td>MIT Protocol</td></tr>
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

:::tip
You can set the CANID:0x01 for easier testing in the subsequent code.
:::

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

:::tip
You can set the CANMODE:0 for easier testing in the subsequent code.
:::

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
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/resistance_switch.png" />
</div>

:::tip
If the Recomputer Mini has not set the 120Ω terminal resistor to ON, you can choose to turn on the toggle switch of the motor's CAN communication terminal resistor.
:::

**Step 2:** Connect the motor directly to the CAN0 of the reComputer Mini via the XT30 (2+2) interface.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Mini连接.jpg" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Hardware_connect.png" />
</div>

:::tip
Since [the CAN interface design of the reComputer Mini](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can0can1-%E9%80%9A%E4%BF%A1) is opposite to that of the motor’s CAN interface, manual soldering is required to reverse the data lines.

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png" />
     <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/MotorCAN.png" />
</div>

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/TX30.jpg" />
</div>

Considering the high voltage and current required by the motor, it is recommended to purchase a 24V 300W power adapter to power the reComputer Mini for driving a single motor. If more motors need to be connected, a `higher-power` power adapter can be purchased according to the requirement.

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/Power_adapter.png" />
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

### Setting Up C++ and Python Environment

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

## Motor Control and Data Receive

### C++

<details>
<summary>main.cpp</summary>
```cpp
#include <chrono>
#include <cstdint>
#include <cmath>
#include <cstdio>
#include <thread>
#include "CAN_comm.h"
#include "config.h"

MIT devicesState[4];

uint32_t sendNum; // for testing send speed
uint32_t recNum;

MIT MITCtrlParam;

uint16_t sendCounter = 0;
bool motorEnable = true;
int receivedNumber = 0;
uint64_t prev_ts = 0;
float t = 0.0f;
float targetJointAngle = 0.0f; // Target joint angle (can be modified at runtime via input)

namespace {
uint64_t micros_steady(){
  using namespace std::chrono;
  return duration_cast<microseconds>(steady_clock::now().time_since_epoch()).count();
}
}

void setup() {
  std::printf("SF Motor Control (Jetson) start\n");
  CANInit();
  enable(0x01); // Enable motor with ID 0x01  <- Change ID to control different motors
  prev_ts = micros_steady();
  t = 0.0f;
}

uint16_t printCount = 0;
uint16_t recCount = 0;

void loop() {

  recCANMessage();

  // Check for new joint angle input
  // (Check once every 1000 loops to avoid frequent blocking input calls)
  static uint16_t inputCheckCount = 0;
  if(++inputCheckCount >= 1000){
    inputCheckCount = 0;
    float newAngle;
    if(std::scanf("%f", &newAngle) == 1){
      targetJointAngle = newAngle;
      std::printf("Target joint angle updated: %.3f rad\n", newAngle);
    }
  }

  static int IDswitch = 0x01; // <- Change ID to control different motors
  uint64_t current_ts = micros_steady();

  /*
   * Function:
   *   Update control parameters based on time difference and send MIT command.
   *
   * Parameters:
   *   - current_ts: current timestamp
   *   - prev_ts   : previous timestamp
   *   - t         : time variable used for sine/cosine calculations
   *   - MITCtrlParam:
   *       Control parameter structure including position, velocity,
   *       position gain (Kp), velocity gain (Kd), and torque
   *   - IDswitch  : motor ID selector
   *
   * Return:
   *   None
   */
  if(current_ts - prev_ts >= 1000){ // 1 ms control period
    // Update time variable (increase by 1 ms)
    t += 0.001;

    // Set control parameters:
    // target position, target velocity, position gain, velocity gain, and torque
    MITCtrlParam.pos = targetJointAngle;
    MITCtrlParam.vel = 0;
    MITCtrlParam.kp  = 0.5;
    MITCtrlParam.kd  = 0.3;
    MITCtrlParam.tor = 0;

    // Update previous timestamp
    prev_ts = current_ts;

    // IDswitch++;
    // If IDswitch exceeds 0x04, reset it to 0x01
    // if(IDswitch > 0x04){
    //   IDswitch = 0x01;
    // }

    sendMITCommand(IDswitch, MITCtrlParam); // Send MIT command

    printCount++;
    if(printCount >= 100){
      printCount = 0;
      // Only print when IDswitch is 0x01
      // Print commanded position/velocity and actual motor position/velocity
      if(IDswitch == 0x01){
        std::printf( "[CMD] pos: %6.3f rad vel: %6.3f rad/s | " "[FB] pos: %6.3f rad vel: %6.3f rad/s\n", MITCtrlParam.pos, MITCtrlParam.vel, devicesState[IDswitch - 1].pos, devicesState[IDswitch - 1].vel );
      }
    }
  }

  std::this_thread::sleep_for(std::chrono::milliseconds(1));
}

int main(){
  setup();

  while(true){
    loop();
  }

  disable(0x01); // Disable motor with ID 0x01
  return 0;
}
```

</details>

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

### Python

<details>
<summary>main.py</summary>
```python
import sys
import time
import select

# Import core control module (assumes sf_can_controller.py is in the same directory)
from sf_can_controller import MotorController 

# --- Core Configuration ---
IFACE = "can0"        
MOTOR_ID = 1         # <- Change ID to control different motors
UPDATE_RATE_HZ = 100.0 
PRINT_EVERY = 2     
INITIAL_TARGET_DEG = 0.0

# --- Main Control Loop ---
def run_simple_test() -> None:
    """Run a simplified position control loop."""
    
    # 1. Initialization
    update_period = 1.0 / UPDATE_RATE_HZ
    target_rad = INITIAL_TARGET_DEG
    
    KP, KD = 0.5, 0.3  # Default MIT parameters
    
    controller = MotorController(interface=IFACE, motor_id=MOTOR_ID)
    print(f"--- SF Motor Test Start ---")
    print(f"Interface: {IFACE}, ID: {MOTOR_ID}, Rate: {UPDATE_RATE_HZ} Hz")
    
    # 2. Enable motor
    controller.enable()
    
    last_send_time = time.perf_counter()
    print_counter = 0

    inputCheckCount = 0

    # 3. Main loop
    while True:
        controller.poll_rx()
        current_state = controller.get_motor_state()
        
        now = time.perf_counter()
        
        # --- Periodic input check (every 500 loops) ---
        inputCheckCount += 1
        if inputCheckCount >= 500:
            inputCheckCount = 0
            
            # Blocking I/O waiting for user input (this will pause the control loop)
            # Note: If the input is not a number, a ValueError will be raised.
            line = input("Please enter target joint angle: ").strip()
            if line:
                angle_deg = float(line)
                target_rad = angle_deg
                print(f"Target joint angle updated: {angle_deg:.3f} deg")
        
        # Periodically send MIT command
        if now - last_send_time >= update_period:
            last_send_time = now
            
            # Send target position command
            controller.send_mit_command(
                pos=target_rad,
                vel=0.0,
                kp=KP,
                kd=KD,
                tor=0.0
            )

            # Print motor state
            print_counter += 1
            if print_counter >= PRINT_EVERY:
                print_counter = 0
                print(
                    f"Cmd={target_rad:.2f} | "
                    f"Pos={current_state.pos:.2f} (Vel={current_state.vel:.2f})"
                )
        
        time.sleep(0.001)
            

if __name__ == "__main__":
    # Run test
    run_simple_test()
```
</details>

The Python script is located in the `script/` directory and can be run directly without compilation.

```bash
python main.py 
```

The program defaults to controlling the motor with ID 0x01. During operation, you can input the target angle value (in radians) via the keyboard. It also receives feedback data on the motor’s angle and angular velocity.


## Citation

[Step 6010](https://wiki.seeedstudio.com//wiki/robotics/Actuator/stackforce/Citation/6010.stp)  

[Step 8108](https://wiki.seeedstudio.com//wiki/robotics/Actuator/stackforce/Citation/8108.stp)

[8108 Motor_Curve](https://wiki.seeedstudio.com//wiki/robotics/Actuator/stackforce/Citation/8108Motor_Curve.png)

[6010Motor_Document.pdf](https://wiki.seeedstudio.com/wiki/robotics/Actuator/stackforce/Citation/6010Motor_Document.pdf)

[8108Motor_Document.pdf](https://wiki.seeedstudio.com/wiki/robotics/Actuator/stackforce/Citation/8108Motor_Document.pdf)


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
