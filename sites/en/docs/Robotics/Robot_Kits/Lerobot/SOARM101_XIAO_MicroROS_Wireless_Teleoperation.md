---
description: Build a low-latency wireless ROS 2 teleoperation link for an SO-ARM101 follower using the XIAO ESP32-C3 Bus Servo Adapter and micro-ROS over Wi-Fi UDP.
title: SO-Arm with XIAO Wireless Teleoperation
keywords:
  - SO-ARM101
  - XIAO ESP32-C3
  - micro-ROS
  - ROS 2
  - LeRobot
  - Teleoperation
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /soarm101_xiao_microros_wireless_teleoperation
last_update:
  date: 09/20/2026
  author: linao681
createdAt: '2026-07-24'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/soarm101_xiao_microros_wireless_teleoperation/
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wired and Wireless SO-ARM101 Teleoperation with XIAO ESP32-C3 and micro-ROS

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp" width={800} height={600} style={{height: 'auto'}} alt="SO-ARM100 and SO-ARM101 robotic arm kits" />
</div>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem 1rem', margin: '1.1rem 0 1.35rem'}}>

<div className="rebot-buy-button-group" style={{margin: 0}}>
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>Get the SO-ARM101 Kit</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<div className="rebot-buy-button-group" style={{margin: 0}}>
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html" target="_blank" rel="noopener noreferrer">
    <span>Get the XIAO Servo Adapter</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

</div>

:::note Community Contribution
This tutorial is a community contribution by [@linao681](https://github.com/linao681). Thanks for sharing this project with the Seeed Studio community!
:::

## Introduction

This tutorial documents two supported ways to control an SO-ARM101 follower from an SO-ARM101 leader:

| Mode | Leader connection | Follower connection |
| --- | --- | --- |
| Wired leader | Connect to the computer through a standard USB bus-servo driver board. | XIAO over Wi-Fi. |
| Wireless leader | XIAO over Wi-Fi. | XIAO over Wi-Fi. |

In both modes, the follower communicates with ROS 2 through micro-ROS over Wi-Fi UDP. The wireless leader XIAO reads the six leader actuator positions and publishes read-only state; it never writes position commands to the leader arm.

The implementation provides:

- feedback from all six follower joints on `/joint_states`;
- commands for all six follower joints on `/joint_command`;
- LeRobot leader-to-follower joint mapping;
- a startup handshake that prevents an unexpected position jump;
- calibration, joint-limit, command-step, and bus-health checks;
- sequence checks, feedback watchdogs, safe hold-last-command behavior, and session recovery;
- runtime Agent discovery from the computer's current Wi-Fi address, so a hotspot address change does not require reflashing;
- a wired leader fallback for diagnosis and operation when the wireless leader is unavailable;
- automatic preflight checks and one-command teleoperation startup.

The complete source code is available in the [soarm101-drone-teleop repository](https://github.com/linao681/soarm101-drone-teleop).

:::note

This project was developed as a ground-tested prototype for a future drone-mounted SO-ARM101 demonstration. This guide covers only the robotic arm communication and teleoperation link. It does not provide a flight-certified control or safety system.

:::

### Recommended setup path

<div className="rebot-page rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4><a href="#step-1-clone-the-project">Clone the project</a></h4>
<p>Get the code and firmware projects.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4><a href="#step-2-calibrate-both-arms">Calibrate both arms</a></h4>
<p>Calibrate the physical arms you will use.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4><a href="#step-3-configure-wi-fi-and-agent-discovery">Configure Wi-Fi and Agent discovery</a></h4>
<p>Put the computer and the XIAOs on the same LAN.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4><a href="#step-4-build-and-flash-the-xiaos">Build and flash firmware</a></h4>
<p>Test, then flash the appropriate XIAO firmware.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4><a href="#step-5-start-the-micro-ros-agent-and-preflight">Start the Agent and run preflight</a></h4>
<p>Check ROS 2 feedback for the chosen mode.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4><a href="#step-6-run-wired-or-dual-wireless-teleoperation">Start teleoperation</a></h4>
<p>Launch the selected leader mode and verify operation.</p>
</div>
</section>

</div>

## System Architecture

```text
SO-ARM101 leader
  ├─ wireless: leader XIAO ── Wi-Fi / micro-ROS ──┐
  └─ wired: USB bus-servo driver ────────────────┤
                                                  ▼
Ubuntu 22.04 PC
  ├─ LeRobot reads the leader
  ├─ ROS 2 Humble bridge publishes /joint_command
  └─ micro-ROS Agent, UDP port 8888
              │
              │  2.4 GHz Wi-Fi LAN
              ▼
follower XIAO ESP32-C3 Bus Servo Adapter
  ├─ micro-ROS publishes /joint_states
  └─ 1 Mbps UART Sync Read/Write
              │
              ▼
SO-ARM101 follower, 6 × STS3215
```

The PC and XIAO must be connected to the same local network. A phone hotspot or a dedicated 2.4 GHz access point can be used for a demonstration.

## Hardware

| Item | Quantity or requirement | Purpose |
| --- | --- | --- |
| SO-ARM101 leader and follower | One each | Input and controlled arms. |
| Standard USB bus-servo driver board | One | Calibration and the wired leader connection. |
| XIAO ESP32-C3 Bus Servo Adapter | One, plus one for wireless leader mode | Required for the follower; add one for the wireless leader. |
| Arm power supplies | Two, rated for the arms | Power the leader and follower independently. |
| Computer | One, Ubuntu 22.04 | Run ROS 2 and the micro-ROS Agent. |
| Wi-Fi network | One, 2.4 GHz | Put the computer and XIAOs on the same LAN. |
| USB cables | As needed | Calibration, flashing, and serial monitoring. |

This reference firmware was tested with the standard 5 V SO-ARM101 follower using six STS3215 servos with model number `777`.

:::danger

- Disconnect servo power before changing any servo cable.
- Use the voltage specified for your exact SO-ARM101 version. Do not connect a 12 V supply to a 5 V arm.
- USB does not supply enough power for the servos.
- Perform the first test on a stable workbench with a clear emergency power disconnect.
- If testing near a drone, remove the propellers.

:::

## Software Requirements

The tested host configuration is:

| Item | Tested configuration |
| --- | --- |
| Operating system | Ubuntu 22.04 |
| ROS 2 | Humble |
| Robotics framework | LeRobot with Feetech support |
| micro-ROS communication | micro-ROS Agent |
| Python | 3.12 |
| Firmware tools | PlatformIO |

Install the micro-ROS Agent and PlatformIO if they are not already available:

```bash
sudo snap install micro-ros-agent
python3 -m pip install --user platformio
```

Follow the [SO-ARM100/101 LeRobot guide](https://wiki.seeedstudio.com/lerobot_so100m_new/) to install LeRobot and configure the servo IDs before continuing.

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

## Clone the project {#step-1-clone-the-project}

<p className="rebot-step-label">Step 1</p>

```bash
git clone https://github.com/linao681/soarm101-drone-teleop.git
cd soarm101-drone-teleop
```

The important project paths are:

| Path | Purpose |
| --- | --- |
| `firmware/xiao_soarm/` | Wireless follower firmware |
| `firmware/xiao_soarm_leader/` | Wireless leader firmware |
| `tools/wireless_teleoperate.py` | ROS 2 and LeRobot teleoperation bridge |
| `tools/soarm_agent_discovery.py` | Agent discovery for both XIAOs |
| `start_soarm_demo.sh` | Network, Agent, hardware, and topic preflight |
| `cali/` | Leader and follower calibration files |

The repository includes separate PlatformIO firmware projects for the wireless follower and wireless leader. The projects include the required ESP32-C3 micro-ROS libraries, so a normal user does not need to cross-compile micro-ROS.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

## Calibrate both arms {#step-2-calibrate-both-arms}

<p className="rebot-step-label">Step 2</p>

Calibrate the follower first with a standard USB bus-servo driver. Replace `/dev/ttyACM0` with the correct port:

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

Calibration values are specific to one physical arm. Do not control another follower with the calibration values included as an example in the repository.

:::

### Copy the follower calibration into the firmware

The follower XIAO validates the servo EEPROM before enabling torque. Open:

```text
firmware/xiao_soarm/src/servo_bus.cpp
```

Replace these three arrays with the values from your `cali/follower_recal.json`:

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

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

## Configure Wi-Fi and Agent discovery {#step-3-configure-wi-fi-and-agent-discovery}

<p className="rebot-step-label">Step 3</p>

Connect the Ubuntu computer and the XIAOs used in your mode to the same 2.4 GHz Wi-Fi network. Wired leader mode only uses the follower XIAO; wireless leader mode uses both XIAOs. The XIAO firmware stores only the SSID and password. The launcher and discovery service announce the computer's current Agent address at runtime. Do not hard-code the computer IP into a public firmware file.

```bash
ip -4 address
```

Enter the follower firmware directory and create the private configuration file:

```bash
cd firmware/xiao_soarm
cp src/wifi_config.example.h src/wifi_config.h
```

For wireless leader mode, repeat the same step under `firmware/xiao_soarm_leader`.

Edit `src/wifi_config.h`:

```cpp
#pragma once

const char* WIFI_SSID = "YOUR_2G4_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";
```

For the leader firmware, use the corresponding `#define WIFI_SSID` and `#define WIFI_PASS` placeholders in `firmware/xiao_soarm_leader/src/wifi_config.example.h`.

`wifi_config.h` is ignored by Git and must never be committed to a public repository. The current launcher uses Agent discovery to announce the computer's current Wi-Fi address, so a hotspot IP change normally does not require reflashing either XIAO.

:::tip

The ESP32-C3 uses 2.4 GHz Wi-Fi. If a phone hotspot supports both bands, select the compatibility or 2.4 GHz mode.

:::

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

## Build and flash firmware {#step-4-build-and-flash-the-xiaos}

<p className="rebot-step-label">Step 4</p>

Connect one XIAO to the computer through USB at a time. Run the native tests and the ESP32-C3 build before uploading:

```bash
(cd firmware/xiao_soarm && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
(cd firmware/xiao_soarm_leader && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
```

After the tests and builds pass, upload the selected firmware:

```bash
cd firmware/xiao_soarm
pio run -e seeed_xiao_esp32c3 --target upload
pio device monitor -b 115200
```

For wireless leader mode, run the upload and monitor commands from `firmware/xiao_soarm_leader` instead.

Power the follower arm with its external supply. A successful startup contains messages similar to:

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` means all six servo IDs responded. If the calibration does not match, the firmware still reports state but rejects motion commands.

After flashing, the USB cable is required only for serial monitoring. Keep the corresponding arm's external servo power connected. The leader firmware disables torque and publishes position/state only; the follower firmware is the component that executes position commands.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">

## Start the Agent and run preflight {#step-5-start-the-micro-ros-agent-and-preflight}

<p className="rebot-step-label">Step 5</p>

From the project root, set the Wi-Fi name and the Python executable used by LeRobot. Then run the preflight for your leader mode.

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_PYTHON="$(command -v python)"
```

```bash
source /opt/ros/humble/setup.bash
./start_soarm_demo.sh --leader wireless --check
```

The example checks wireless leader mode. For a wired leader, replace `--leader wireless` with `--leader wired`. A wired preflight skips the leader USB check, which runs at launch.

The launcher starts the Agent and discovery service, then checks the required ROS 2 topics. When the XIAOs discover the Agent, their serial monitors should report:

```text
micro-ROS ready
```

The ROS 2 interfaces are:

| Topic | Message type | Direction | Nominal rate |
|---|---|---|---|
| `/joint_states` | `sensor_msgs/msg/JointState` | follower to PC | 20 Hz |
| `/joint_command` | `sensor_msgs/msg/JointState` | PC to follower | up to 30 Hz |

While the Agent is running, use another terminal to verify feedback. If the preflight started the Agent, it stops the Agent on exit. In that case, run this check after starting teleoperation.

```bash
source /opt/ros/humble/setup.bash
ros2 topic echo /joint_states --once
ros2 topic hz /joint_states
```

Do not send arbitrary joint values before completing the current-pose startup handshake.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">

## Start teleoperation {#step-6-run-wired-or-dual-wireless-teleoperation}

<p className="rebot-step-label">Step 6</p>

After preflight passes, select the launch command for your leader connection. Both options use a wireless follower.

<Tabs defaultValue="wired">

<TabItem value="wired" label="Wired leader">

Connect the leader through its standard USB bus-servo driver and find the stable serial path.

```bash
ls -l /dev/serial/by-id/
```

Replace `YOUR_USB_ADAPTER` with the actual device name, then start wired leader mode.

```bash
export SOARM_LEADER_PORT="/dev/serial/by-id/YOUR_USB_ADAPTER"
./start_soarm_demo.sh --leader wired
```

</TabItem>
<TabItem value="wireless" label="Wireless leader">

Power the leader with its external supply, confirm its XIAO has joined the configured Wi-Fi network, then start dual-wireless mode.

```bash
./start_soarm_demo.sh --leader wireless
```

</TabItem>
</Tabs>

The bridge reads the initial follower pose and repeatedly publishes the same pose before enabling torque. It then uses relative mapping, so the follower starts where it is and follows changes made to the selected leader. If the wireless session recovers, the bridge blends toward the leader's current pose before resuming normal commands. Press `Ctrl+C` to stop; the follower holds its last commanded position.

:::warning

Stopping the bridge or losing commands does not release torque. The follower holds its last commanded position. Disconnect servo power for an emergency stop.

:::

</div>
</section>

</div>

## Safety Mechanisms

The reference implementation includes several checks intended to make a demonstration more predictable:

| Check | Condition or behavior |
| --- | --- |
| Servo identity | All six IDs and model numbers must match. |
| EEPROM calibration | Homing offsets and limits must match the follower calibration compiled into the firmware. |
| Current-pose handshake | The first command must be within `0.05 rad` of the measured pose. |
| Joint soft limits | Each command must stay inside the calibrated range. |
| Per-command step limit | After arming, a target cannot change by more than `0.25 rad` in one command. |
| Feedback watchdog | The PC bridge stops publishing if follower feedback is older than `0.5 s`. |
| Wi-Fi recovery | The XIAO restarts if Wi-Fi cannot recover within 10 seconds. |

These software checks supplement but do not replace a physical emergency stop.

## Troubleshooting

<div className="rebot-page soarm-guide">

<details className="rebot-demo-details" id="the-xiao-stays-at-waiting-for-micro-ros-agent">
<summary>The XIAO stays at <code>Waiting for micro-ROS Agent</code></summary>

- Confirm that the computer and XIAO are on the same LAN.
- Confirm that the launcher reports the current Wi-Fi IPv4 address and starts Agent discovery.
- Confirm that the Agent is using UDP port `8888`.
- Check whether the hotspot enables client isolation.
- If a firewall is active, allow UDP port `8888`.

</details>

<details className="rebot-demo-details" id="servo_mask-is-not-0x3f">
<summary><code>servo_mask</code> is not <code>0x3f</code></summary>

One or more servos did not answer:

- disconnect power and inspect the three-wire bus cables;
- verify that every servo has a unique ID from 1 to 6;
- verify the power supply voltage and current rating;
- keep the servo bus at the configured 1 Mbps baud rate.

</details>

<details className="rebot-demo-details" id="the-firmware-reports-calib0">
<summary>The firmware reports <code>calib:0</code></summary>

The servo EEPROM does not match the values compiled into `servo_bus.cpp`. Reconnect the follower through the USB driver board, recalibrate it, update the three firmware arrays, and flash the XIAO again.

</details>

<details className="rebot-demo-details" id="wi-fi-disconnects-during-motion">
<summary>Wi-Fi disconnects during motion</summary>

- move the access point closer;
- place the external antenna away from the servo power wires and metal parts;
- use a dedicated 2.4 GHz network for the demonstration;
- watch the RSSI value in the serial diagnostic output;
- compare the result with the servos powered off to identify possible power or electromagnetic interference.

</details>

<details className="rebot-demo-details" id="the-wireless-leader-is-not-ready">
<summary>The wireless leader is not ready</summary>

- confirm that the leader XIAO publishes both `/leader/raw_state` and `/leader/status`;
- confirm that all six leader servos respond and torque is disabled;
- confirm that `cali/leader_recal.json` matches the physical leader;
- use `./start_soarm_demo.sh --leader wired` as a temporary fallback.

</details>

<details className="rebot-demo-details" id="a-joint-direction-or-range-is-incorrect">
<summary>A joint direction or range is incorrect</summary>

Recalibrate both arms and confirm the joint order in both JSON files. Also verify that the follower arrays in `servo_bus.cpp` came from the same physical follower currently connected to the XIAO.

</details>

</div>

## Validation scope

The project has been exercised in the reference setup with:

- all six follower servos were detected (`servo_mask=0x3f`);
- `/joint_states` was published at approximately 20 Hz;
- the leader bridge published commands at 30 Hz;
- all six joints followed together over a phone hotspot;
- the XIAO continued operating without its USB data cable after flashing and external arm power was connected.

The dual-wireless path and the wired fallback are both supported by the current launcher. A reference wireless endurance run was completed on 2026-09-20 and lasted 783 seconds (about 13 minutes). The run recorded zero command timeouts, zero command rejections, and zero leader recoveries; feedback averaged 19.87 Hz, command-acknowledgement latency was 66.0 ms at P50, and the minimum observed RSSI was -65 dBm. These figures describe one reference run, not a guarantee for every Wi-Fi environment.

## References

- [Project source code](https://github.com/linao681/soarm101-drone-teleop)
- [Getting Started with SO-ARM100 and SO-ARM101 in LeRobot](https://wiki.seeedstudio.com/lerobot_so100m_new/)
- [Getting Started with the XIAO Bus Servo Adapter](https://wiki.seeedstudio.com/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

This contribution documents an independently developed integration. LeRobot, ROS 2, micro-ROS, PlatformIO, and the servo library remain subject to their respective licenses.
