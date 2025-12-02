---
description: 本 wiki 提供高扭矩电机控制完整指南
title: 高扭矩电机控制完整指南
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech-ST3215-Servo.webp
slug: /cn/hightorque_control
last_update:
  date: 11/19/2025
  author: Tienjuiwong
---

# 高扭矩电机控制完整指南

> 高性能高扭矩电机控制基线，支持 Python、C++、Rust 和 Arduino 实现

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20ESP32-lightgrey.svg)
![Language](https://img.shields.io/badge/languages-Python%20%7C%20C%2B%2B%20%7C%20Rust%20%7C%20Arduino-orange.svg)

## 📋 目录
- [项目概述](#项目概述)
- [硬件准备](#硬件准备)
- [软件环境搭建](#软件环境搭建)
- [CAN 总线配置](#CAN-总线配置)
- [Python 完整使用指南](#Python-完整使用指南)
- [C++ 完整使用指南](#C++-完整使用指南)
- [Rust 完整使用指南](#Rust-完整使用指南)
- [协议详细说明](#协议详细说明)
- [故障排除](#故障排除)
- [性能对比](#性能对比)
- [高级应用](#高级应用)

---

## 🎯 项目概述

### 什么是高扭矩电机？
高扭矩电机是专为机器人应用设计的无刷直流电机系统，支持 CAN 总线通信，适用于：

- 🤖 **人形机器人** - 关节控制
- 🦾 **机械臂** - 精密定位
- 🚗 **移动机器人** - 轮驱动
- ⚙️ **自动化设备** - 伺服控制

### 支持的电机型号
| 型号 | 扭矩 | 最大速度 | 减速比 | 应用 |
|------|--------|------------|-----------------|-------------|
| 5046_20 | 17 Nm | 50 rad/s | 20:1 | 通用关节 |
| 4538_19 | 17 Nm | 44 rad/s | 19:1 | 轻量级关节 |
| 5047_36 | 60 Nm | 50 rad/s | 36:1 | 重载应用 |
| 5047_09 | 17 Nm | 33 rad/s | 9:1 | 高速应用 |

### 核心特性
- ✅ **CAN 总线通信** - 支持多电机并联
- ✅ **高精度控制** - 位置/速度/扭矩三环控制
- ✅ **实时反馈** - 状态监控和数据采集
- ✅ **安全保护** - 过流/过压/过温保护
- ✅ **多语言 SDK** - Python/C++/Rust/Arduino 支持

---

## 🔧 硬件准备

### 所需硬件清单
1. **高扭矩电机** - 至少 1 个
2. **CAN 适配器** - USB 转 CAN 或 PCIe CAN 卡
3. **CAN 线缆** - 双绞线屏蔽电缆
4. **120Ω 终端电阻** - 总线两端各一个
5. **电源** - 24V 或 48V 直流电源
6. **开发主机** - Linux 系统（推荐 Ubuntu 20.04+）

### 硬件连接图
```
[Linux Host] ←USB→ [CAN Adapter] ←CAN_H/CAN_L→ [Motor1]
                                            ↓
                                    [120Ω Resistor]
                                            ↓
                                          [Motor2]
```

### 连接步骤
1. **连接 CAN 适配器** 到主机 USB 端口
2. **连接 CAN 总线**：
   - CAN_H ←→ CAN_H（所有设备）
   - CAN_L ←→ CAN_L（所有设备）
   - GND ←→ GND（共地连接）
3. **安装终端电阻**：
   - 在总线两端各安装一个 120Ω 电阻
   - 如果只有 2 个设备，每个设备安装一个
4. **连接电机电源**：
   - 红线：+24V/+48V
   - 黑线：GND
   - 黄线：CAN_H
   - 绿线：CAN_L

---

## 💻 软件环境搭建

### 系统要求
- **操作系统**：Ubuntu 18.04+ / CentOS 7+ / Debian 10+
- **内核版本**：Linux 4.15+（SocketCAN 支持）
- **架构**：x86_64 / ARM64

### 通用依赖安装
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

### 克隆项目
```bash
# Clone official SDK
git clone https://github.com/Seeed-Projects/HighTorque_Control ~/HighTorque_Control
pushd ~/HighTorque_Control

# Check project structure
ls -la
# Should see: python/ cpp/ rust/ arduino/ directories
```

---

## 🌐 CAN 总线配置

### 1. 加载 CAN 内核模块
```bash
# Check if modules are loaded
lsmod | grep can

# If not loaded, load manually
sudo modprobe can
sudo modprobe can_raw
sudo modprobe can_dev
```

### 2. 配置 CAN 接口
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

### 3. 验证 CAN 通信
```bash
# Terminal 1: Monitor CAN messages
candump can0

# Terminal 2: Send test message
cansend can0 123#DEADBEEF

# If you see messages, configuration is successful
```

### 4. 设置开机自启
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

### 故障排除
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

## 🐍 Python 完整使用指南

### 1. 环境准备
```bash
cd python

# Install Python dependencies
pip install -r requirements.txt

# Manual dependency installation (if requirements.txt doesn't exist)
pip install python-can==4.3.1 numpy matplotlib
```

### 2. 电机扫描 - 发现连接的电机
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

**预期输出：**
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

### 3. 速度控制 - 控制电机转速
```bash
# Basic speed control (control motor ID=1)
python3 velocity_acceleration_control.py --motor_id 1

# Specify CAN channel
python3 velocity_acceleration_control.py --motor_id 1 --channel can0

# Specify baud rate
python3 velocity_acceleration_control.py --motor_id 1 --bitrate 1000000
```

**交互式控制示例：**
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

### 4. 位置控制 - 控制电机角度
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

**交互式控制示例：**
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

### 5. Python 代码示例

#### 电机扫描代码
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

#### 速度控制代码
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

## ⚡ C++ 完整使用指南

### 1. 环境准备
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

### 2. 电机扫描
```bash
# Scan motor IDs 1-5
./can_motor_scanner 1 5

# Scan all possible IDs
./can_motor_scanner 1 14
```

**预期输出：**
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

### 3. 速度控制
```bash
# Control motor ID=1
./velocity_acceleration_control 1

# Control specified ID motor
./velocity_acceleration_control 3
```

**控制命令：**
- `+number` - 设置正向速度
- `-number` - 设置反向速度
- `anumber` - 设置加速度
- `stop` - 智能停止
- `quit` - 退出程序

### 4. 位置控制
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

### 5. C++ 代码示例

#### 电机扫描代码
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

编译并运行：
```bash
g++ -o scan_example scan_example.cpp -lcan
./scan_example
```

---

## 🦀 Rust 完整使用指南

### 1. 环境准备
```bash
cd rust

# Check if Rust is installed
rustc --version

# Compile release version
cargo build --release

# Or use Makefile
make
```

### 2. 电机扫描
```bash
# Scan specified range
./target/release/can_motor_scanner --start-id 1 --end-id 5

# Complete scan
./target/release/can_motor_scanner --start-id 1 --end-id 14

# Specify CAN channel
./target/release/can_motor_scanner --channel can0 --start-id 1 --end-id 5
```

### 3. 速度控制
```bash
# Basic speed control
./target/release/velocity_acceleration_control --motor-id 1

# Specify channel
./target/release/velocity_acceleration_control --motor-id 1 --channel can0
```

### 4. 位置控制
```bash
# Interactive mode
./target/release/angle_stream_control --motor-id 1 interactive

# Sine wave mode
./target/release/angle_stream_control --motor-id 1 sine --amplitude 1.57

# Step mode
./target/release/angle_stream_control --motor-id 1 step --target 1.57
```

### 5. Rust 代码示例

#### 电机扫描代码
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

编译并运行：
```bash
# Save as scan_example.rs
rustc --extern livelybot_motor_sdk=target/release/liblivelybot_motor_sdk.rlib scan_example.rs
./scan_example
```

---

## 📡 协议详细说明

### CAN 帧格式
- **帧类型**：扩展帧（29 位 ID）
- **波特率**：1Mbps
- **数据长度**：8 字节
- **字节序**：大端序

### 核心协议命令

#### 1. 电机扫描（Ping）命令
```
CAN ID: 0x8000 | motor_id
Data: [0x11, 0x00, 0x50, 0x50, 0x50, 0x50, 0x50, 0x50]
```
- `0x8000`：高位表示需要回复
- `motor_id`：电机 ID（1-127）
- `0x11`：读取命令
- `0x00`：地址（读取电机模式）

#### 2. 速度控制命令（0xAD）
```
CAN ID: 0x00AD
Data: [PosL, PosH, VelL, VelH, AccL, AccH, 0x50, 0x50]
```
- `PosL/PosH`：位置目标（16 位，FACTOR_POS=10000.0）
- `VelL/VelH`：速度目标（16 位，FACTOR_VEL=4000.0）
- `AccL/AccH`：加速度目标（16 位，FACTOR_ACC=1000.0）
- `0x50`：填充字节

#### 3. 位置控制命令（0x90）
```
CAN ID: 0x0090
Data: [PosL, PosH, VelL, VelH, TqeL, TqeH, 0x50, 0x50]
```
- `PosL/PosH`：位置目标（16 位，FACTOR_POS=10000.0）
- `VelL/VelH`：速度限制（16 位，FACTOR_VEL=4000.0）
- `TqeL/TqeH`：扭矩限制（16 位，FACTOR_TQE=200.0）

### 协议系数
| 参数 | 值 | 描述 | 示例 |
|-----------|-------|-------------|---------|
| FACTOR_POS | 10000.0 | 位置转换系数 | 1.57 rad → 15700 |
| FACTOR_VEL | 4000.0 | 速度转换系数 | 5.0 rad/s → 20000 |
| FACTOR_ACC | 1000.0 | 加速度转换系数 | 10.0 rad/s² → 10000 |
| FACTOR_TQE | 200.0 | 扭矩转换系数 | 2.0 Nm → 400 |
| MAGIC_POS | -32768 | 速度模式标志 | 特殊位置值 |

### 数据转换示例

#### 位置转换
```python
# Radians → Protocol value
position_rad = 1.57  # 90 degrees
protocol_value = int(position_rad * FACTOR_POS)  # 15700

# Protocol value → Radians
protocol_value = 15700
position_rad = protocol_value / FACTOR_POS  # 1.57
```

#### 速度转换
```python
# rad/s → Protocol value
velocity_rps = 5.0
protocol_value = int(velocity_rps * FACTOR_VEL)  # 20000

# Protocol value → rad/s
protocol_value = 20000
velocity_rps = protocol_value / FACTOR_VEL  # 5.0
```

---

## 🔧 故障排除

### 常见问题及解决方案

#### 1. CAN 接口无法启动
```bash
# Error message
Error: Cannot find device can0

# Solution
sudo modprobe can
sudo modprobe can_raw
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

#### 2. 权限不足
```bash
# Error message
Operation not permitted

# Solution 1: Add user to dialout group
sudo usermod -a -G dialout $USER
# Re-login for effect

# Solution 2: Run with sudo
sudo python3 can_motor_scanner.py
```

#### 3. 无法扫描到电机
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

#### 4. 通信不稳定
```bash
# Check signal quality
candump can0 -tA
# View error frame count

# Adjust sampling point
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 1000000 sample-point 0.875
sudo ip link set can0 up
```

#### 5. 编译错误
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

### 调试技巧

#### 1. 使用 Wireshark 进行 CAN 通信分析
```bash
# Install wireshark
sudo apt install wireshark

# Start packet capture
sudo wireshark -i can0
```

#### 2. 实时电机状态监控
```bash
# Python continuous monitoring
python3 can_motor_scanner.py --monitor 60

# C++ real-time viewing
./can_motor_scanner 1 14 | grep "Found motor"
```

#### 3. 协议分析
```python
# Send raw CAN commands
import can
bus = can.interface.Bus(channel='can0', interface='socketcan')
msg = can.Message(arbitration_id=0x8001, data=[0x11, 0x00, 0x50, 0x50, 0x50, 0x50, 0x50, 0x50])
bus.send(msg)
```

---

### 推荐使用场景
- **Python**：快速原型开发、算法验证、教学实验
- **C++**：生产环境、高性能要求、实时控制系统
- **Rust**：生产环境、内存安全要求、长期维护项目

### 选择合适的语言
- **初学者**：Python - 简单易用，快速上手
- **产品开发**：C++ - 高性能，实时控制
- **长期项目**：Rust - 内存安全，现代语言特性

### 资源
- 📧 **电机官方网站**：https://hightorquerobotics.com/
- 🐛 **项目问题反馈**：https://github.com/Seeed-Projects/HighTorque_Control/issue
- 🐛 **电机官方接口**：https://github.com/HighTorque-Robotics/livelybot_hardware_sdk/

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
