---
description: This wiki provides HighTorque Motor Control Complete Guide
title: HighTorque Motor Control Complete Guide
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech-ST3215-Servo.webp
slug: /hightorque_control
last_update:
  date: 11/19/2025
  author: Tienjuiwong
---

# HighTorque Motor Control Complete Guide

> High-performance HighTorque motor control baseline with implementations in Python, C++, Rust, and Arduino

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20ESP32-lightgrey.svg)
![Language](https://img.shields.io/badge/languages-Python%20%7C%20C%2B%2B%20%7C%20Rust%20%7C%20Arduino-orange.svg)

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Hardware Preparation](#hardware-preparation)
- [Software Environment Setup](#software-environment-setup)
- [CAN Bus Configuration](#can-bus-configuration)
- [Python Complete Usage Guide](#python-complete-usage-guide)
- [C++ Complete Usage Guide](#c-complete-usage-guide)
- [Rust Complete Usage Guide](#rust-complete-usage-guide)
- [Protocol Detailed Explanation](#protocol-detailed-explanation)
- [Troubleshooting](#troubleshooting)
- [Performance Comparison](#performance-comparison)
- [Advanced Applications](#advanced-applications)

---

## 🎯 Project Overview

### What are HighTorque Motors?
Hightorque motors are brushless DC motor systems designed specifically for robotics applications, supporting CAN bus communication, suitable for:

- 🤖 **Humanoid Robots** - Joint control
- 🦾 **Robotic Arms** - Precision positioning
- 🚗 **Mobile Robots** - Wheel drive
- ⚙️ **Automation Equipment** - Servo control

### Supported Motor Models
| Model | Torque | Max Speed | Reduction Ratio | Application |
|------|--------|------------|-----------------|-------------|
| 5046_20 | 17 Nm | 50 rad/s | 20:1 | General joints |
| 4538_19 | 17 Nm | 44 rad/s | 19:1 | Lightweight joints |
| 5047_36 | 60 Nm | 50 rad/s | 36:1 | Heavy-duty applications |
| 5047_09 | 17 Nm | 33 rad/s | 9:1 | High-speed applications |

### Core Features
- ✅ **CAN Bus Communication** - Support for multi-parallel motors
- ✅ **High-Precision Control** - Position/Velocity/Torque triple-loop control
- ✅ **Real-time Feedback** - Status monitoring and data collection
- ✅ **Safety Protection** - Over-current/over-voltage/over-temperature protection
- ✅ **Multi-language SDK** - Python/C++/Rust/Arduino support

---

## 🔧 Hardware Preparation

### Required Hardware List
1. **HighTorque Motor** - At least 1
2. **CAN Adapter** - USB-to-CAN or PCIe CAN card
3. **CAN Cable** - Twisted pair shielded cable
4. **120Ω Termination Resistor** - One at each end of the bus
5. **Power Supply** - 24V or 48V DC power supply
6. **Development Host** - Linux system (Ubuntu 20.04+ recommended)

### Hardware Connection Diagram
```
[Linux Host] ←USB→ [CAN Adapter] ←CAN_H/CAN_L→ [Motor1]
                                            ↓
                                    [120Ω Resistor]
                                            ↓
                                          [Motor2]
```

### Connection Steps
1. **Connect CAN Adapter** to host USB port
2. **Connect CAN Bus**:
   - CAN_H ←→ CAN_H (all devices)
   - CAN_L ←→ CAN_L (all devices)
   - GND ←→ GND (common ground connection)
3. **Install Termination Resistors**:
   - Install one 120Ω resistor at each end of the bus
   - If only 2 devices, install one in each device
4. **Connect Motor Power**:
   - Red wire: +24V/+48V
   - Black wire: GND
   - Yellow wire: CAN_H
   - Green wire: CAN_L

---

## 💻 Software Environment Setup

### System Requirements
- **Operating System**: Ubuntu 18.04+ / CentOS 7+ / Debian 10+
- **Kernel Version**: Linux 4.15+ (SocketCAN support)
- **Architecture**: x86_64 / ARM64

### Universal Dependencies Installation
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install basic tools
sudo apt install -y build-essential git cmake make

# Install CAN tools
sudo apt install -y can-utils

# Install Python development environment
sudo apt install -y python3 python3-pip python3-dev

# Install Rust (if needed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env
```

### Clone Project
```bash
# Clone official SDK
git clone https://github.com/Seeed-Projects/HighTorque_Control ~/HighTorque_Control
pushd ~/HighTorque_Control

# Check project structure
ls -la
# Should see: python/ cpp/ rust/ arduino/ directories
```

---

## 🌐 CAN Bus Configuration

### 1. Load CAN Kernel Modules
```bash
# Check if modules are loaded
lsmod | grep can

# If not loaded, load manually
sudo modprobe can
sudo modprobe can_raw
sudo modprobe can_dev
```

### 2. Configure CAN Interface
```bash
# Shut down interface (if already open)
sudo ip link set can0 down

# Configure CAN interface parameters
sudo ip link set can0 type can bitrate 1000000 restart-ms 100

# Start interface
sudo ip link set can0 up

# Check interface status
ip -details link show can0
```

### 3. Verify CAN Communication
```bash
# Terminal 1: Monitor CAN messages
candump can0

# Terminal 2: Send test message
cansend can0 123#DEADBEEF

# If you see messages, configuration is successful
```

### 4. Set Auto-start on Boot
```bash
# Create configuration file
sudo tee /etc/network/interfaces.d/can0 << EOF
auto can0
iface can0 inet manual
    pre-up ip link set can0 type can bitrate 1000000 restart-ms 100
    up ip link set can0 up
    down ip link set can0 down
EOF

# Make configuration effective
sudo systemctl restart networking
```

### Troubleshooting
```bash
# Check interface permissions
sudo usermod -a -G dialout $USER
# Log out and log back in for effect

# Check device permissions
ls -la /dev/can*
# If no devices, check if driver is loaded correctly

# Check baud rate setting
ip -details link show can0 | grep bitrate
```

---

## 🐍 Python Complete Usage Guide

### 1. Environment Preparation
```bash
cd python

# Install Python dependencies
pip install -r requirements.txt

# Manual dependency installation (if requirements.txt doesn't exist)
pip install python-can==4.3.1 numpy matplotlib
```

### 2. Motor Scanning - Discover Connected Motors
```bash
# Basic scan (scan IDs 1-14)
python3 can_motor_scanner.py

# Specify scan range
python3 can_motor_scanner.py --start 1 --end 10

# Specify CAN channel
python3 can_motor_scanner.py --channel can0

# Detailed information mode
python3 can_motor_scanner.py --detailed

# Continuous monitoring mode (monitor for 30 seconds)
python3 can_motor_scanner.py --monitor 30

# Test single motor communication
python3 can_motor_scanner.py --test 1

# Save scan report
python3 can_motor_scanner.py --save scan_report.txt
```

**Expected Output:**
```
Initializing can0 @ 1000000bps...
✅ CAN interface connected successfully
==================================================
Starting motor ID scan (range: 1-14)...
Timeout: 0.05s per motor
Press Ctrl+C to stop at any time
==================================================
Scanning ID  1... ✅ [Response] Found motor ID: 1 (CAN ID: 0x8001)
Scanning ID  2... No response
Scanning ID  3... ✅ [Response] Found motor ID: 3 (CAN ID: 0x8003)
...
==================================================
✅ Scan completed, online motor list: [1, 3]
Total: 2 motors
```

### 3. Speed Control - Control Motor Rotation Speed
```bash
# Basic speed control (control motor ID=1)
python3 velocity_acceleration_control.py --motor_id 1

# Specify CAN channel
python3 velocity_acceleration_control.py --motor_id 1 --channel can0

# Specify baud rate
python3 velocity_acceleration_control.py --motor_id 1 --bitrate 1000000
```

**Interactive Control Example:**
```
Motor 1 started! Use control commands:
- Speed: +number (e.g.: +5.0, -2.5)
- Acceleration: anumber (e.g.: a10.0)
- Stop: stop
- Query status: status
- Exit: quit

> +5.0        # Set forward 5.0 rad/s
> a8.0        # Set acceleration 8.0 rad/s²
> stop        # Smart stop
> status      # Query current status
> quit        # Exit program
```

### 4. Position Control - Control Motor Angle
```bash
# Interactive position control
python3 angle_stream_control.py --motor_id 1 --mode interactive

# Sine wave test
python3 angle_stream_control.py --motor_id 1 --mode sine --amplitude 1.57 --frequency 0.5

# Step test
python3 angle_stream_control.py --motor_id 1 --mode step --target 1.57

# Multi-position test
python3 angle_stream_control.py --motor_id 1 --mode multi
```

**Interactive Control Example:**
```
Motor 1 connected and enabled!
Use control commands:
- Position: pvalue (radians, e.g.: p1.57, p-0.5)
- Torque: tvalue (Nm, e.g.: t2.0, t-1.5)
- Stop: stop
- Exit: quit

> p1.57       # Rotate to 90 degree position
> t2.0        # Set 2Nm torque
> stop        # Stop motor
> quit        # Exit program
```

### 5. Python Code Examples

#### Motor Scanning Code
```python
#!/usr/bin/env python3
from can_motor_scanner import LivelyMotorScanner

def main():
    # Create scanner
    scanner = LivelyMotorScanner(channel='can0', bitrate=1000000)

    # Connect CAN bus
    if not scanner.connect():
        print("CAN connection failed!")
        return

    try:
        # Scan motors
        found_motors = scanner.scan_range(start_id=1, end_id=14)

        if found_motors:
            print(f"Found motors: {found_motors}")

            # Get detailed information
            for motor_id in found_motors:
                info = scanner.get_motor_info(motor_id)
                if info:
                    print(f"Motor{motor_id}: Mode={info.get('mode_name', 'Unknown')}")
        else:
            print("No motors found")

    finally:
        scanner.disconnect()

if __name__ == "__main__":
    main()
```

#### Speed Control Code
```python
#!/usr/bin/env python3
from velocity_acceleration_control import MotorVelAccController

def main():
    # Create controller
    controller = MotorVelAccController(channel='can0', motor_id=1)

    # Connect and enable motor
    if not controller.connect():
        print("Connection failed!")
        return

    controller.enable_motor()
    controller.start_control()

    try:
        # Set speed and acceleration
        controller.set_velocity(5.0)  # 5 rad/s
        controller.set_acceleration(10.0)  # 10 rad/s²

        # Run for 10 seconds
        import time
        time.sleep(10)

        # Smart stop
        controller.emergency_stop()

    finally:
        controller.disable_motor()
        controller.disconnect()

if __name__ == "__main__":
    main()
```

---

## ⚡ C++ Complete Usage Guide

### 1. Environment Preparation
```bash
cd cpp

# Compile all programs
make clean
make

# Or compile single program
make can_motor_scanner
make velocity_acceleration_control
make angle_stream_control
```

### 2. Motor Scanning
```bash
# Scan motor IDs 1-5
./can_motor_scanner 1 5

# Scan all possible IDs
./can_motor_scanner 1 14
```

**Expected Output:**
```
Initializing CAN0 @ 1000000bps...
✅ CAN interface connected successfully
Starting motor ID scan (1-5)...
Scanning ID 1... ✅ Found motor ID: 1 (CAN ID: 0x8001)
Scanning ID 2... No response
Scanning ID 3... ✅ Found motor ID: 3 (CAN ID: 0x8003)
Scanning ID 4... No response
Scanning ID 5... No response
Scan completed! Online motors: [1, 3]
```

### 3. Speed Control
```bash
# Control motor ID=1
./velocity_acceleration_control 1

# Control specified ID motor
./velocity_acceleration_control 3
```

**Control Commands:**
- `+number` - Set forward speed
- `-number` - Set backward speed
- `anumber` - Set acceleration
- `stop` - Smart stop
- `quit` - Exit program

### 4. Position Control
```bash
# Interactive mode
./angle_stream_control 1 interactive

# Sine wave mode
./angle_stream_control 1 sine

# Step mode
./angle_stream_control 1 step

# Multi-position mode
./angle_stream_control 1 multi
```

### 5. C++ Code Examples

#### Motor Scanning Code
```cpp
#include "can_motor_scanner.h"

int main() {
    // Create scanner
    LivelyMotorScanner scanner("can0", 1000000);

    // Connect CAN bus
    if (!scanner.connect()) {
        std::cerr << "CAN connection failed!" << std::endl;
        return 1;
    }

    // Scan motors
    std::vector<int> found_motors = scanner.scan_range(1, 14);

    if (!found_motors.empty()) {
        std::cout << "Found motors: ";
        for (int id : found_motors) {
            std::cout << id << " ";
        }
        std::cout << std::endl;
    } else {
        std::cout << "No motors found" << std::endl;
    }

    scanner.disconnect();
    return 0;
}
```

Compile and run:
```bash
g++ -o scan_example scan_example.cpp -lcan
./scan_example
```

---

## 🦀 Rust Complete Usage Guide

### 1. Environment Preparation
```bash
cd rust

# Check if Rust is installed
rustc --version

# Compile release version
cargo build --release

# Or use Makefile
make
```

### 2. Motor Scanning
```bash
# Scan specified range
./target/release/can_motor_scanner --start-id 1 --end-id 5

# Complete scan
./target/release/can_motor_scanner --start-id 1 --end-id 14

# Specify CAN channel
./target/release/can_motor_scanner --channel can0 --start-id 1 --end-id 5
```

### 3. Speed Control
```bash
# Basic speed control
./target/release/velocity_acceleration_control --motor-id 1

# Specify channel
./target/release/velocity_acceleration_control --motor-id 1 --channel can0
```

### 4. Position Control
```bash
# Interactive mode
./target/release/angle_stream_control --motor-id 1 interactive

# Sine wave mode
./target/release/angle_stream_control --motor-id 1 sine --amplitude 1.57

# Step mode
./target/release/angle_stream_control --motor-id 1 step --target 1.57
```

### 5. Rust Code Examples

#### Motor Scanning Code
```rust
use livelybot_motor_sdk::{LivelyMotorController, CanFrame};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create controller
    let mut controller = LivelyMotorController::new("can0")?;

    // Connect CAN bus
    controller.connect()?;

    // Scan motors
    let mut found_motors = Vec::new();

    for motor_id in 1..=14 {
        if controller.ping_motor(motor_id)? {
            println!("✅ Found motor ID: {}", motor_id);
            found_motors.push(motor_id);
        } else {
            println!("❌ Motor ID: {} No response", motor_id);
        }
    }

    println!("Scan completed, found {} motors", found_motors.len());

    Ok(())
}
```

Compile and run:
```bash
# Save as scan_example.rs
rustc --extern livelybot_motor_sdk=target/release/liblivelybot_motor_sdk.rlib scan_example.rs
./scan_example
```

---

## 📡 Protocol Detailed Explanation

### CAN Frame Format
- **Frame Type**: Extended frame (29-bit ID)
- **Baud Rate**: 1Mbps
- **Data Length**: 8 bytes
- **Endianness**: Big endian

### Core Protocol Commands

#### 1. Motor Scanning (Ping) Command
```
CAN ID: 0x8000 | motor_id
Data: [0x11, 0x00, 0x50, 0x50, 0x50, 0x50, 0x50, 0x50]
```
- `0x8000`: High bit indicates need for reply
- `motor_id`: Motor ID (1-127)
- `0x11`: Read command
- `0x00`: Address (read motor mode)

#### 2. Speed Control Command (0xAD)
```
CAN ID: 0x00AD
Data: [PosL, PosH, VelL, VelH, AccL, AccH, 0x50, 0x50]
```
- `PosL/PosH`: Position target (16-bit, FACTOR_POS=10000.0)
- `VelL/VelH`: Velocity target (16-bit, FACTOR_VEL=4000.0)
- `AccL/AccH`: Acceleration target (16-bit, FACTOR_ACC=1000.0)
- `0x50`: Padding bytes

#### 3. Position Control Command (0x90)
```
CAN ID: 0x0090
Data: [PosL, PosH, VelL, VelH, TqeL, TqeH, 0x50, 0x50]
```
- `PosL/PosH`: Position target (16-bit, FACTOR_POS=10000.0)
- `VelL/VelH`: Velocity limit (16-bit, FACTOR_VEL=4000.0)
- `TqeL/TqeH`: Torque limit (16-bit, FACTOR_TQE=200.0)

### Protocol Coefficients
| Parameter | Value | Description | Example |
|-----------|-------|-------------|---------|
| FACTOR_POS | 10000.0 | Position conversion factor | 1.57 rad → 15700 |
| FACTOR_VEL | 4000.0 | Velocity conversion factor | 5.0 rad/s → 20000 |
| FACTOR_ACC | 1000.0 | Acceleration conversion factor | 10.0 rad/s² → 10000 |
| FACTOR_TQE | 200.0 | Torque conversion factor | 2.0 Nm → 400 |
| MAGIC_POS | -32768 | Velocity mode flag | Special position value |

### Data Conversion Examples

#### Position Conversion
```python
# Radians → Protocol value
position_rad = 1.57  # 90 degrees
protocol_value = int(position_rad * FACTOR_POS)  # 15700

# Protocol value → Radians
protocol_value = 15700
position_rad = protocol_value / FACTOR_POS  # 1.57
```

#### Velocity Conversion
```python
# rad/s → Protocol value
velocity_rps = 5.0
protocol_value = int(velocity_rps * FACTOR_VEL)  # 20000

# Protocol value → rad/s
protocol_value = 20000
velocity_rps = protocol_value / FACTOR_VEL  # 5.0
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. CAN Interface Cannot Start
```bash
# Error message
Error: Cannot find device can0

# Solution
sudo modprobe can
sudo modprobe can_raw
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

#### 2. Insufficient Permissions
```bash
# Error message
Operation not permitted

# Solution 1: Add user to dialout group
sudo usermod -a -G dialout $USER
# Re-login for effect

# Solution 2: Run with sudo
sudo python3 can_motor_scanner.py
```

#### 3. Cannot Scan Motors
```bash
# Check hardware connection
1. Confirm 120Ω termination resistor is installed
2. Check if CAN_H/CAN_L wiring is correct
3. Confirm motor power supply is normal
4. Check if baud rate setting matches

# Verify connection with candump
candump can0
# Manually rotate motor, should see feedback messages
```

#### 4. Unstable Communication
```bash
# Check signal quality
candump can0 -tA
# View error frame count

# Adjust sampling point
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 1000000 sample-point 0.875
sudo ip link set can0 up
```

#### 5. Compilation Errors
```bash
# Python dependency issues
pip install --upgrade pip
pip install -r requirements.txt

# C++ compilation errors
sudo apt install build-essential
sudo apt install libcan-dev

# Rust compilation errors
rustup update
cargo clean && cargo build --release
```

### Debugging Tips

#### 1. Use Wireshark for CAN Communication Analysis
```bash
# Install wireshark
sudo apt install wireshark

# Start packet capture
sudo wireshark -i can0
```

#### 2. Real-time Motor Status Monitoring
```bash
# Python continuous monitoring
python3 can_motor_scanner.py --monitor 60

# C++ real-time viewing
./can_motor_scanner 1 14 | grep "Found motor"
```

#### 3. Protocol Analysis
```python
# Send raw CAN commands
import can
bus = can.interface.Bus(channel='can0', interface='socketcan')
msg = can.Message(arbitration_id=0x8001, data=[0x11, 0x00, 0x50, 0x50, 0x50, 0x50, 0x50, 0x50])
bus.send(msg)
```

---

### Recommended Usage Scenarios
- **Python**: Rapid prototyping, algorithm verification, teaching experiments
- **C++**: Production environment, high-performance requirements, real-time control systems
- **Rust**: Production environment, memory safety requirements, long-term maintenance projects

### Choose the Right Language
- **Beginners**: Python - Simple and easy to use, quick to get started
- **Product Development**: C++ - High performance, real-time control
- **Long-term Projects**: Rust - Memory safe, modern language features

### Resources
- 📧 **Motor Official Website**: https://hightorquerobotics.com/
- 🐛 **Project Issue Feedback**: https://github.com/Seeed-Projects/HighTorque_Control/issue
- 🐛 **Motor Official Interface**: https://github.com/HighTorque-Robotics/livelybot_hardware_sdk/

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

<style>{`
/* 导航容器基础样式 */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 16px;
}

/* 卡片容器基础样式 */
.card-container {
  margin: 0.1rem 0;
  padding: 0.5rem;
  border-radius: 16px;
}

/* 导航项基础样式 */
.nav-item {
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  background: white;
}

/* 导航项文字样式 */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* 内容卡片基础样式 */
.category-card {
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
.robot-kits::before {
  background: #4a90e2;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-item {
    padding: 0.8rem 1rem;
  }
}

/* Dark模式样式 */
html[data-theme='dark'] {
  .quick-nav-container {
    background: #1f2937;
  }
  .nav-item {
    background: #374151;
    color: #e5e7eb;
  }
  .category-card {
    background: #374151;
    color: #e5e7eb;
  }
}

`}</style>

<style>{`

/* 内容卡片增强版样式 */
.nav-grid {
  display: block;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

/* Dark模式 - 内容卡片 */
html[data-theme='dark'] .category-card {
  background: #374151;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
  color: #e5e7eb;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* 悬浮特效 */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark模式 - 悬浮特效 */
html[data-theme='dark'] .category-card:hover {
  box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: -1;
}

/* Dark模式 - 悬浮光效 */
html[data-theme='dark'] .category-card:hover::after {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* 链接动画 */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

/* Dark模式 - 链接 */
html[data-theme='dark'] .category-card a {
  color: #d1d5db;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

/* Dark模式 - 链接悬浮 */
html[data-theme='dark'] .category-card a:hover {
  color: #60a5fa;
}

.category-card a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4a90e2;
  transition: width 0.3s;
}

/* Dark模式 - 链接下划线 */
html[data-theme='dark'] .category-card a::after {
  background: #60a5fa;
}

.category-card a:hover::after {
  width: 100%;
}

/* 标签样式增强 */
.tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  transition: all 0.3s;
}

.stable {
  background: #e6f4ea;
  color: #137333;
  box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark模式 - Stable标签 */
html[data-theme='dark'] .stable {
  background: #065f46;
  color: #a7f3d0;
  box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended {
  background: #fce8e6;
  color: #a50e0e;
  box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark模式 - Recommended标签 */
html[data-theme='dark'] .recommended {
  background: #7f1d1d;
  color: #fca5a5;
  box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark模式 - 点击效果 */
html[data-theme='dark'] .category-card:active {
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }
  
  .category-card {
    width: 100%;
    margin-top: 0.5rem; /* 卡片紧贴标题 */
  }
}

/* Dark模式 - 标题文字 */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
  color: #f9fafb;
}

/* Dark模式 - 正文文字 */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
  color: #e5e7eb;
}

/* Dark模式 - 引用块 */
html[data-theme='dark'] blockquote {
  color: #9ca3af;
  border-left-color: #4b5563;
}
`}</style>
