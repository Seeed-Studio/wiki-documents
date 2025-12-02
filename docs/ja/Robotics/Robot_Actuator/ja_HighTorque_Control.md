---
description: このwikiはHighTorqueモーター制御完全ガイドを提供します
title: HighTorqueモーター制御完全ガイド
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech-ST3215-Servo.webp
slug: /ja/hightorque_control
last_update:
  date: 11/19/2025
  author: Tienjuiwong
---

# HighTorqueモーター制御完全ガイド

> Python、C++、Rust、Arduinoでの実装を含む高性能HighTorqueモーター制御ベースライン

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20ESP32-lightgrey.svg)
![Language](https://img.shields.io/badge/languages-Python%20%7C%20C%2B%2B%20%7C%20Rust%20%7C%20Arduino-orange.svg)

## 📋 目次
- [プロジェクト概要](#プロジェクト概要)
- [ハードウェア準備](#ハードウェア準備)
- [ソフトウェア環境セットアップ](#ソフトウェア環境セットアップ)
- [CANバス設定](#CANバス設定)
- [Python完全使用ガイド](#Python完全使用ガイド)
- [C++完全使用ガイド](#C++完全使用ガイド)
- [Rust完全使用ガイド](#Rust完全使用ガイド)
- [プロトコル詳細説明](#プロトコル詳細説明)
- [トラブルシューティング](#トラブルシューティング)
- [性能比較](#性能比較)
- [高度なアプリケーション](#高度なアプリケーション)

---

## 🎯 プロジェクト概要

### HighTorqueモーターとは？
Hightorqueモーターは、ロボティクスアプリケーション専用に設計されたブラシレスDCモーターシステムで、CANバス通信をサポートし、以下の用途に適しています：

- 🤖 **ヒューマノイドロボット** - 関節制御
- 🦾 **ロボットアーム** - 精密位置決め
- 🚗 **移動ロボット** - ホイール駆動
- ⚙️ **自動化機器** - サーボ制御

### サポートされるモーターモデル
| モデル | トルク | 最大速度 | 減速比 | 用途 |
|------|--------|------------|-----------------|-------------|
| 5046_20 | 17 Nm | 50 rad/s | 20:1 | 一般的な関節 |
| 4538_19 | 17 Nm | 44 rad/s | 19:1 | 軽量関節 |
| 5047_36 | 60 Nm | 50 rad/s | 36:1 | 重負荷アプリケーション |
| 5047_09 | 17 Nm | 33 rad/s | 9:1 | 高速アプリケーション |

### 主要機能
- ✅ **CANバス通信** - 複数モーターの並列サポート
- ✅ **高精度制御** - 位置/速度/トルク三重ループ制御
- ✅ **リアルタイムフィードバック** - ステータス監視とデータ収集
- ✅ **安全保護** - 過電流/過電圧/過温度保護
- ✅ **多言語SDK** - Python/C++/Rust/Arduinoサポート

---

## 🔧 ハードウェア準備

### 必要なハードウェアリスト
1. **HighTorqueモーター** - 最低1台
2. **CANアダプター** - USB-to-CANまたはPCIe CANカード
3. **CANケーブル** - ツイストペアシールドケーブル
4. **120Ω終端抵抗** - バスの両端に1つずつ
5. **電源** - 24Vまたは48V DC電源
6. **開発ホスト** - Linuxシステム（Ubuntu 20.04+推奨）

### ハードウェア接続図
```
[Linux Host] ←USB→ [CAN Adapter] ←CAN_H/CAN_L→ [Motor1]
                                            ↓
                                    [120Ω Resistor]
                                            ↓
                                          [Motor2]
```

### 接続手順
1. **CANアダプター**をホストのUSBポートに接続
2. **CANバス接続**：
   - CAN_H ←→ CAN_H（全デバイス）
   - CAN_L ←→ CAN_L（全デバイス）
   - GND ←→ GND（共通グランド接続）
3. **終端抵抗の設置**：
   - バスの両端に120Ω抵抗を1つずつ設置
   - デバイスが2台のみの場合、各デバイスに1つずつ設置
4. **モーター電源接続**：
   - 赤線：+24V/+48V
   - 黒線：GND
   - 黄線：CAN_H
   - 緑線：CAN_L

---

## 💻 ソフトウェア環境セットアップ

### システム要件
- **オペレーティングシステム**：Ubuntu 18.04+ / CentOS 7+ / Debian 10+
- **カーネルバージョン**：Linux 4.15+（SocketCANサポート）
- **アーキテクチャ**：x86_64 / ARM64

### 汎用依存関係のインストール
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

### プロジェクトのクローン
```bash
# Clone official SDK
git clone https://github.com/Seeed-Projects/HighTorque_Control ~/HighTorque_Control
pushd ~/HighTorque_Control

# Check project structure
ls -la
# Should see: python/ cpp/ rust/ arduino/ directories
```

---

## 🌐 CANバス設定

### 1. CANカーネルモジュールの読み込み
```bash
# Check if modules are loaded
lsmod | grep can

# If not loaded, load manually
sudo modprobe can
sudo modprobe can_raw
sudo modprobe can_dev
```

### 2. CANインターフェースの設定
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

### 3. CAN通信の確認
```bash
# Terminal 1: Monitor CAN messages
candump can0

# Terminal 2: Send test message
cansend can0 123#DEADBEEF

# If you see messages, configuration is successful
```

### 4. 起動時の自動開始設定
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

### トラブルシューティング
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

## 🐍 Python完全使用ガイド

### 1. 環境準備
```bash
cd python

# Install Python dependencies
pip install -r requirements.txt

# Manual dependency installation (if requirements.txt doesn't exist)
pip install python-can==4.3.1 numpy matplotlib
```

### 2. モータースキャン - 接続されたモーターの発見
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

**期待される出力：**
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

### 3. 速度制御 - モーター回転速度の制御
```bash
# Basic speed control (control motor ID=1)
python3 velocity_acceleration_control.py --motor_id 1

# Specify CAN channel
python3 velocity_acceleration_control.py --motor_id 1 --channel can0

# Specify baud rate
python3 velocity_acceleration_control.py --motor_id 1 --bitrate 1000000
```

**インタラクティブ制御例：**
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

### 4. 位置制御 - モーター角度の制御
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

**インタラクティブ制御例：**
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

### 5. Pythonコード例

#### モータースキャンコード
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

#### 速度制御コード
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

## ⚡ C++ 完全使用ガイド

### 1. 環境準備
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

### 2. モータースキャン
```bash
# Scan motor IDs 1-5
./can_motor_scanner 1 5

# Scan all possible IDs
./can_motor_scanner 1 14
```

**期待される出力：**
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

### 3. 速度制御
```bash
# Control motor ID=1
./velocity_acceleration_control 1

# Control specified ID motor
./velocity_acceleration_control 3
```

**制御コマンド：**
- `+number` - 前進速度を設定
- `-number` - 後退速度を設定
- `anumber` - 加速度を設定
- `stop` - スマート停止
- `quit` - プログラム終了

### 4. 位置制御
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

### 5. C++ コード例

#### モータースキャンコード
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

コンパイルと実行：
```bash
g++ -o scan_example scan_example.cpp -lcan
./scan_example
```

---

## 🦀 Rust 完全使用ガイド

### 1. 環境準備
```bash
cd rust

# Check if Rust is installed
rustc --version

# Compile release version
cargo build --release

# Or use Makefile
make
```

### 2. モータースキャン
```bash
# Scan specified range
./target/release/can_motor_scanner --start-id 1 --end-id 5

# Complete scan
./target/release/can_motor_scanner --start-id 1 --end-id 14

# Specify CAN channel
./target/release/can_motor_scanner --channel can0 --start-id 1 --end-id 5
```

### 3. 速度制御
```bash
# Basic speed control
./target/release/velocity_acceleration_control --motor-id 1

# Specify channel
./target/release/velocity_acceleration_control --motor-id 1 --channel can0
```

### 4. 位置制御
```bash
# Interactive mode
./target/release/angle_stream_control --motor-id 1 interactive

# Sine wave mode
./target/release/angle_stream_control --motor-id 1 sine --amplitude 1.57

# Step mode
./target/release/angle_stream_control --motor-id 1 step --target 1.57
```

### 5. Rust コード例

#### モータースキャンコード
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

コンパイルと実行：
```bash
# Save as scan_example.rs
rustc --extern livelybot_motor_sdk=target/release/liblivelybot_motor_sdk.rlib scan_example.rs
./scan_example
```

---

## 📡 プロトコル詳細説明

### CAN フレーム形式
- **フレームタイプ**: 拡張フレーム（29ビットID）
- **ボーレート**: 1Mbps
- **データ長**: 8バイト
- **エンディアン**: ビッグエンディアン

### コアプロトコルコマンド

#### 1. モータースキャン（Ping）コマンド
```
CAN ID: 0x8000 | motor_id
Data: [0x11, 0x00, 0x50, 0x50, 0x50, 0x50, 0x50, 0x50]
```
- `0x8000`: 高位ビットは応答が必要であることを示す
- `motor_id`: モーターID（1-127）
- `0x11`: 読み取りコマンド
- `0x00`: アドレス（モーターモード読み取り）

#### 2. 速度制御コマンド（0xAD）
```
CAN ID: 0x00AD
Data: [PosL, PosH, VelL, VelH, AccL, AccH, 0x50, 0x50]
```
- `PosL/PosH`: 位置目標（16ビット、FACTOR_POS=10000.0）
- `VelL/VelH`: 速度目標（16ビット、FACTOR_VEL=4000.0）
- `AccL/AccH`: 加速度目標（16ビット、FACTOR_ACC=1000.0）
- `0x50`: パディングバイト

#### 3. 位置制御コマンド（0x90）
```
CAN ID: 0x0090
Data: [PosL, PosH, VelL, VelH, TqeL, TqeH, 0x50, 0x50]
```
- `PosL/PosH`: 位置目標（16ビット、FACTOR_POS=10000.0）
- `VelL/VelH`: 速度制限（16ビット、FACTOR_VEL=4000.0）
- `TqeL/TqeH`: トルク制限（16ビット、FACTOR_TQE=200.0）

### プロトコル係数
| パラメータ | 値 | 説明 | 例 |
|-----------|-------|-------------|---------|
| FACTOR_POS | 10000.0 | 位置変換係数 | 1.57 rad → 15700 |
| FACTOR_VEL | 4000.0 | 速度変換係数 | 5.0 rad/s → 20000 |
| FACTOR_ACC | 1000.0 | 加速度変換係数 | 10.0 rad/s² → 10000 |
| FACTOR_TQE | 200.0 | トルク変換係数 | 2.0 Nm → 400 |
| MAGIC_POS | -32768 | 速度モードフラグ | 特別な位置値 |

### データ変換例

#### 位置変換
```python
# Radians → Protocol value
position_rad = 1.57  # 90 degrees
protocol_value = int(position_rad * FACTOR_POS)  # 15700

# Protocol value → Radians
protocol_value = 15700
position_rad = protocol_value / FACTOR_POS  # 1.57
```

#### 速度変換
```python
# rad/s → Protocol value
velocity_rps = 5.0
protocol_value = int(velocity_rps * FACTOR_VEL)  # 20000

# Protocol value → rad/s
protocol_value = 20000
velocity_rps = protocol_value / FACTOR_VEL  # 5.0
```

---

## 🔧 トラブルシューティング

### よくある問題と解決策

#### 1. CAN インターフェースが開始できない
```bash
# Error message
Error: Cannot find device can0

# Solution
sudo modprobe can
sudo modprobe can_raw
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

#### 2. 権限不足
```bash
# Error message
Operation not permitted

# Solution 1: Add user to dialout group
sudo usermod -a -G dialout $USER
# Re-login for effect

# Solution 2: Run with sudo
sudo python3 can_motor_scanner.py
```

#### 3. モーターをスキャンできない
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

#### 4. 通信が不安定
```bash
# Check signal quality
candump can0 -tA
# View error frame count

# Adjust sampling point
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 1000000 sample-point 0.875
sudo ip link set can0 up
```

#### 5. コンパイルエラー
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

### デバッグのヒント

#### 1. Wireshark を使用した CAN 通信解析
```bash
# Install wireshark
sudo apt install wireshark

# Start packet capture
sudo wireshark -i can0
```

#### 2. リアルタイムモーター状態監視
```bash
# Python continuous monitoring
python3 can_motor_scanner.py --monitor 60

# C++ real-time viewing
./can_motor_scanner 1 14 | grep "Found motor"
```

#### 3. プロトコル解析
```python
# Send raw CAN commands
import can
bus = can.interface.Bus(channel='can0', interface='socketcan')
msg = can.Message(arbitration_id=0x8001, data=[0x11, 0x00, 0x50, 0x50, 0x50, 0x50, 0x50, 0x50])
bus.send(msg)
```

---

### 推奨使用シナリオ
- **Python**: 迅速なプロトタイピング、アルゴリズム検証、教育実験
- **C++**: 本番環境、高性能要件、リアルタイム制御システム
- **Rust**: 本番環境、メモリ安全性要件、長期メンテナンスプロジェクト

### 適切な言語の選択
- **初心者**: Python - シンプルで使いやすく、すぐに始められる
- **製品開発**: C++ - 高性能、リアルタイム制御
- **長期プロジェクト**: Rust - メモリ安全、モダンな言語機能

### リソース
- 📧 **モーター公式ウェブサイト**: https://hightorquerobotics.com/
- 🐛 **プロジェクト問題フィードバック**: https://github.com/Seeed-Projects/HighTorque_Control/issue
- 🐛 **モーター公式インターフェース**: https://github.com/HighTorque-Robotics/livelybot_hardware_sdk/

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
