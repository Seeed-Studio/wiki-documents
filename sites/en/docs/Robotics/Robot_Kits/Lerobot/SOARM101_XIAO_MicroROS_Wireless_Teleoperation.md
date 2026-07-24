---
description: Build a low-latency wireless ROS 2 teleoperation link for an SO-ARM101 follower using the XIAO ESP32-C3 Bus Servo Adapter and micro-ROS over Wi-Fi UDP.
title: Wireless SO-ARM101 Teleoperation with XIAO ESP32-C3 and micro-ROS
keywords:
  - SO-ARM101
  - XIAO ESP32-C3
  - micro-ROS
  - ROS 2
  - LeRobot
  - Teleoperation
  - Robotics
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/10.webp
slug: /soarm101_xiao_microros_wireless_teleoperation
last_update:
  date: 07/24/2026
  author: linao681
createdAt: '2026-07-24'
updatedAt: '2026-07-24'
url: https://wiki.seeedstudio.com/soarm101_xiao_microros_wireless_teleoperation/
---

# Wireless SO-ARM101 Teleoperation with XIAO ESP32-C3 and micro-ROS

## Introduction

This tutorial shows how to control an SO-ARM101 follower wirelessly from an
SO-ARM101 leader. The leader is connected to an Ubuntu computer through a
standard USB bus-servo driver board. The follower uses the Seeed Studio XIAO
ESP32-C3 Bus Servo Adapter and communicates with ROS 2 through micro-ROS over
Wi-Fi UDP.

The implementation provides:

- feedback from all six follower joints on `/joint_states`;
- commands for all six follower joints on `/joint_command`;
- LeRobot leader-to-follower joint mapping;
- a startup handshake that prevents an unexpected position jump;
- calibration, joint-limit, command-step, and bus-health checks;
- automatic preflight checks and one-command teleoperation startup.

The complete source code is available in the
[soarm101-drone-teleop repository](https://github.com/linao681/soarm101-drone-teleop).

:::note

This project was developed as a ground-tested prototype for a future
drone-mounted SO-ARM101 demonstration. This guide covers only the robotic arm
communication and teleoperation link. It does not provide a flight-certified
control or safety system.

:::

## System Architecture

```text
SO-ARM101 leader
  │  Feetech UART bus
  ▼
USB bus-servo driver
  │  USB
  ▼
Ubuntu 22.04 PC
  ├─ LeRobot reads the leader
  ├─ ROS 2 Humble bridge publishes /joint_command
  └─ micro-ROS Agent, UDP port 8888
              │
              │  2.4 GHz Wi-Fi LAN
              ▼
XIAO ESP32-C3 Bus Servo Adapter
  ├─ micro-ROS publishes /joint_states
  └─ 1 Mbps UART Sync Read/Write
              │
              ▼
SO-ARM101 follower, 6 × STS3215
```

The PC and XIAO must be connected to the same local network. A phone hotspot or
a dedicated 2.4 GHz access point can be used for a demonstration.

## Hardware

- 1 × SO-ARM101 leader
- 1 × SO-ARM101 follower
- 1 × standard USB bus-servo driver board for the leader
- 1 × Seeed Studio XIAO ESP32-C3 Bus Servo Adapter for the follower
- 2 × correctly rated arm power supplies
- 1 × Ubuntu 22.04 computer
- 1 × 2.4 GHz Wi-Fi network
- USB cables for calibration and firmware flashing

This reference firmware was tested with the standard 5 V SO-ARM101 follower
using six STS3215 servos with model number `777`.

:::danger

- Disconnect servo power before changing any servo cable.
- Use the voltage specified for your exact SO-ARM101 version. Do not connect a
  12 V supply to a 5 V arm.
- USB does not supply enough power for the servos.
- Perform the first test on a stable workbench with a clear emergency power
  disconnect.
- If testing near a drone, remove the propellers.

:::

## Software Requirements

The tested host configuration is:

- Ubuntu 22.04
- ROS 2 Humble
- LeRobot with Feetech support
- micro-ROS Agent
- Python 3.10
- PlatformIO

Install the micro-ROS Agent and PlatformIO if they are not already available:

```bash
sudo snap install micro-ros-agent
python3 -m pip install --user platformio
```

Follow the
[SO-ARM100/101 LeRobot guide](https://wiki.seeedstudio.com/lerobot_so100m_new/)
to install LeRobot and configure the servo IDs before continuing.

## Step 1: Clone the Project

```bash
git clone https://github.com/linao681/soarm101-drone-teleop.git
cd soarm101-drone-teleop
```

The important project paths are:

```text
firmware/xiao_soarm/          PlatformIO firmware for the wireless follower
tools/wireless_teleoperate.py ROS 2 and LeRobot teleoperation bridge
start_soarm_demo.sh           network, Agent, arm, and topic preflight checks
cali/                         leader and follower calibration files
```

The repository includes a prebuilt `libmicroros.a` for the ESP32-C3 RISC-V
architecture, so a normal user does not need to cross-compile micro-ROS.

## Step 2: Calibrate Both Arms

Calibrate the follower first with a standard USB bus-servo driver. Replace
`/dev/ttyACM0` with the correct port:

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=follower_recal \
  --robot.calibration_dir="$PWD/cali"
```

Then connect and calibrate the leader:

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM0 \
  --teleop.id=leader_recal \
  --teleop.calibration_dir="$PWD/cali"
```

This creates:

```text
cali/follower_recal.json
cali/leader_recal.json
```

:::warning

Calibration values are specific to one physical arm. Do not control another
follower with the calibration values included as an example in the repository.

:::

### Copy the follower calibration into the firmware

The XIAO validates the servo EEPROM before enabling torque. Open:

```text
firmware/xiao_soarm/src/servo_bus.cpp
```

Replace these three arrays with the values from your
`cali/follower_recal.json`:

```cpp
constexpr int16_t kHomingOffsets[kJointCount] = {
    /* homing_offset for joints 1 to 6 */
};
constexpr int16_t kRangeMin[kJointCount] = {
    /* range_min for joints 1 to 6 */
};
constexpr int16_t kRangeMax[kJointCount] = {
    /* range_max for joints 1 to 6 */
};
```

The expected order is:

```text
shoulder_pan, shoulder_lift, elbow_flex,
wrist_flex, wrist_roll, gripper
```

The following command prints the three arrays in the correct order:

```bash
python3 - <<'PY'
import json

joints = [
    "shoulder_pan", "shoulder_lift", "elbow_flex",
    "wrist_flex", "wrist_roll", "gripper",
]
with open("cali/follower_recal.json", encoding="utf-8") as calibration_file:
    calibration = json.load(calibration_file)

for key in ("homing_offset", "range_min", "range_max"):
    print(key, [calibration[joint][key] for joint in joints])
PY
```

## Step 3: Configure Wi-Fi

Connect the Ubuntu computer to the Wi-Fi network that will be used by the XIAO.
Find the computer's IPv4 address:

```bash
ip -4 address
```

Enter the firmware directory and create the private configuration file:

```bash
cd firmware/xiao_soarm
cp src/wifi_config.example.h src/wifi_config.h
```

Edit `src/wifi_config.h`:

```cpp
#pragma once

const char* WIFI_SSID = "YOUR_2G4_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";
const char* AGENT_IP = "YOUR_UBUNTU_PC_IP";
```

`wifi_config.h` is ignored by Git and must never be committed to a public
repository.

:::tip

The ESP32-C3 uses 2.4 GHz Wi-Fi. If a phone hotspot supports both bands, select
the compatibility or 2.4 GHz mode.

:::

## Step 4: Build and Flash the XIAO

Connect the XIAO to the computer through USB, then run:

```bash
python3 -m platformio run
python3 -m platformio run --target upload
python3 -m platformio device monitor --baud 115200
```

Power the follower arm with its external supply. A successful startup contains
messages similar to:

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` means all six servo IDs responded. If the calibration does not match,
the firmware still reports state but rejects motion commands.

After flashing, the USB cable is required only for serial monitoring when the
XIAO is powered correctly by the adapter. Keep the follower's external servo
power connected.

## Step 5: Start the micro-ROS Agent

On the Ubuntu computer, open a new terminal:

```bash
source /opt/ros/humble/setup.bash
snap run micro-ros-agent udp4 --port 8888
```

When the XIAO discovers the Agent, its serial monitor should report:

```text
micro-ROS ready
```

The ROS 2 interfaces are:

| Topic | Message type | Direction | Nominal rate |
|---|---|---|---|
| `/joint_states` | `sensor_msgs/msg/JointState` | follower to PC | 20 Hz |
| `/joint_command` | `sensor_msgs/msg/JointState` | PC to follower | up to 30 Hz |

Verify the feedback:

```bash
source /opt/ros/humble/setup.bash
ros2 topic echo /joint_states --once
ros2 topic hz /joint_states
```

Do not send arbitrary joint values before completing the current-pose startup
handshake.

## Step 6: Run Wireless Leader-Follower Teleoperation

Connect the leader to the computer through its normal USB bus-servo driver and
power it with the correct external supply.

Find its stable serial path:

```bash
ls -l /dev/serial/by-id/
```

From the project root, export the local configuration:

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_AGENT_IP="YOUR_UBUNTU_PC_IP"
export SOARM_LEADER_PORT="/dev/serial/by-id/YOUR_LEADER_ADAPTER"
export SOARM_PYTHON="$(command -v python)"
```

First run the non-moving preflight check:

```bash
./start_soarm_demo.sh --check
```

It verifies:

- the Wi-Fi SSID and Agent IP;
- the leader USB adapter;
- the leader and follower calibration files;
- the micro-ROS Agent;
- live follower feedback on `/joint_states`;
- that another teleoperation process is not using the same leader bus.

If all checks pass, start teleoperation:

```bash
./start_soarm_demo.sh
```

The bridge reads the initial follower pose and repeatedly publishes the same
pose before enabling torque. It then uses relative mapping, so the follower
starts where it is and follows changes made to the leader. Press `Ctrl+C` to
stop.

:::warning

Stopping the bridge or losing commands does not release torque. The follower
holds its last commanded position. Disconnect servo power for an emergency
stop.

:::

## Safety Mechanisms

The reference implementation includes several checks intended to make a
demonstration more predictable:

1. **Servo identity check:** all six IDs and model numbers must match.
2. **EEPROM calibration check:** homing offsets and limits must match the
   follower calibration compiled into the firmware.
3. **Current-pose handshake:** the first command must be within `0.05 rad` of
   the measured pose.
4. **Joint soft limits:** every command must stay inside the calibrated range.
5. **Per-command step limit:** after arming, a target cannot change by more
   than `0.25 rad` in one command.
6. **Feedback watchdog:** the PC bridge stops publishing if follower feedback
   is older than `0.5 s`.
7. **Wi-Fi recovery:** the XIAO restarts cleanly if Wi-Fi cannot recover within
   10 seconds.

These software checks supplement but do not replace a physical emergency stop.

## Troubleshooting

### The XIAO stays at `Waiting for micro-ROS Agent`

- Confirm that the computer and XIAO are on the same LAN.
- Verify that `AGENT_IP` is the computer's current Wi-Fi IPv4 address.
- Confirm that the Agent is using UDP port `8888`.
- Check whether the hotspot enables client isolation.
- If a firewall is active, allow UDP port `8888`.

### `servo_mask` is not `0x3f`

One or more servos did not answer:

- disconnect power and inspect the three-wire bus cables;
- verify that every servo has a unique ID from 1 to 6;
- verify the power supply voltage and current rating;
- keep the servo bus at the configured 1 Mbps baud rate.

### The firmware reports `calib:0`

The servo EEPROM does not match the values compiled into `servo_bus.cpp`.
Reconnect the follower through the USB driver board, recalibrate it, update the
three firmware arrays, and flash the XIAO again.

### Wi-Fi disconnects during motion

- move the access point closer;
- place the external antenna away from the servo power wires and metal parts;
- use a dedicated 2.4 GHz network for the demonstration;
- watch the RSSI value in the serial diagnostic output;
- compare the result with the servos powered off to identify possible power or
  electromagnetic interference.

### A joint direction or range is incorrect

Recalibrate both arms and confirm the joint order in both JSON files. Also
verify that the follower arrays in `servo_bus.cpp` came from the same physical
follower currently connected to the XIAO.

## Tested Result

In the reference setup:

- all six follower servos were detected (`servo_mask=0x3f`);
- `/joint_states` was published at approximately 20 Hz;
- the leader bridge published commands at 30 Hz;
- all six joints followed together over a phone hotspot;
- the XIAO continued operating without its USB data cable after flashing and
  external arm power was connected.

## References

- [Project source code](https://github.com/linao681/soarm101-drone-teleop)
- [Getting Started with SO-ARM100 and SO-ARM101 in LeRobot](https://wiki.seeedstudio.com/lerobot_so100m_new/)
- [Getting Started with the XIAO Bus Servo Adapter](https://wiki.seeedstudio.com/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

This contribution documents an independently developed integration. LeRobot,
ROS 2, micro-ROS, PlatformIO, and the servo library remain subject to their
respective licenses.
