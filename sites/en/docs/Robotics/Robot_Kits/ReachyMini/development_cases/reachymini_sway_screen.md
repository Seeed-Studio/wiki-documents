---
description: Use the IMU sensor of the XIAO ESP32-S3 Plus touch display to control the Reachy Mini robot by tilting the screen — body sway, head rotation, and nodding.
title: Reachy Mini × XIAO Screen Motion Control
slug: /reachymini_development_cases_sway_screen
image: https://files.seeedstudio.com/wiki/reachymini/reachymini_sway_screen_demo.gif
keywords:
  - Reachy Mini
  - IMU
  - motion control
  - XIAO ESP32-S3
  - touch display
  - LSM6DS3
  - Arduino
  - Python
sku: 100090917, 114993666
last_update:
  date: 2026-09-22
  author: jingyizhang
translation:
  skip: [zh-CN]
createdAt: '2026-09-20'
updatedAt: '2026-09-22'
url: https://wiki.seeedstudio.com/reachymini_development_cases_sway_screen/
---

# Reachy Mini × XIAO Screen Motion Control

Combine the **Reachy Mini** robot with the **XIAO ESP32-S3 Plus touch display** — using the built-in IMU sensor (LSM6DS3), tilting the screen controls the robot's body sway, head yaw, and head pitch.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reachymini/reachymini_sway_screen_demo.gif"
    alt="Reachy Mini × XIAO Screen Motion Control Demo" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get Reachy Mini Now 🤖</font></span></strong>
</a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get XIAO 1.47'' Now 🖥️</font></span></strong>
</a>
</div>

<p align="center">
    <img src="https://img.shields.io/badge/Platform-Reachy%20Mini-blue.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Controller-XIAO%20ESP32--S3%20Plus-green.svg" alt="Controller" />
    <img src="https://img.shields.io/badge/Sensor-LSM6DS3%20IMU-orange.svg" alt="Sensor" />
    <img src="https://img.shields.io/badge/Language-Arduino%20%7C%20Python-yellow.svg" alt="Language" />
</p>

---

## Demo

| Action | Robot Response | Screen Display |
|:-------|:---------------|:----------------|
| Tilt screen left/right | Body sway + head yaw (left/right) | Kaomoji tilts with direction |
| Tilt screen forward/back | Head pitch (nodding up/down) | — |
| Screen held still | Robot stays still (manual trigger) | Kaomoji returns to center |

The screen displays a `≧∇≦` kaomoji, rotated 90° upright, swaying with the tilt direction. The XIAO screen display pattern can be customized — refer to the [1.47 inch Touch Display Getting Started](https://wiki.seeedstudio.com/getting_started_1.47_inch_touch_display_nrf52840/) tutorial to compile and flash your own pattern.

---

## Hardware

| Hardware | Description |
|:---------|:------------|
| [Reachy Mini Wireless Kit](https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html) | USB connected to PC |
| [1.47 inch Touch Display — XIAO ESP32-S3 Plus](https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html) | Built-in LSM6DS3 IMU sensor |
| PC (Windows) | Python 3.11+ |
| USB-C cables ×2 | One for screen, one for robot |

---

## Software Setup

### Step 1. Install Arduino CLI

Download and install from [Arduino CLI Releases](https://github.com/arduino/arduino-cli/releases).

### Step 2. Install ESP32 Board Support

```bash
arduino-cli config init
```

Edit `~/.arduino15/arduino-cli.yaml` and add the ESP32 board URL under `board_manager.additional_urls`:

```yaml
board_manager:
  additional_urls:
    - https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

Install the ESP32 core:

```bash
arduino-cli core install esp32:esp32
```

:::tip
Select `XIAO_ESP32S3_Plus` as the board target (fqbn) for the screen.
:::

### Step 3. Install Seeed GFX Library

The screen display depends on the [Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX) library. Install it from GitHub into your Arduino libraries directory.

### Step 4. Install Python Dependencies

```bash
pip install reachy-mini pyserial numpy
```

---

## Step 1: Get the Project Code

```bash
git clone https://github.com/Genie-INSPIRE/reachy-mini-sway-screen.git
cd reachy-mini-sway-screen
```

Project contents:

| File | Purpose |
|:-----|:--------|
| `reachy_sway_screen/reachy_sway_screen.ino` | Screen firmware: reads IMU + serial output + draws kaomoji |
| `reachy_sync/sway_follow.py` | Main control program: reads serial + controls robot |
| `reachy_sync/start_daemon.py` | Reachy Mini daemon launcher |

---

## Step 2: Flash the Screen Firmware

### 1. Find the Screen COM Port

Plug in the screen via USB, open **Device Manager**, and find the **USB-Serial/JTAG** COM port (VID `0x303A`).

:::note
The screen is auto-detected by VID, so COM port number changes don't matter.
:::

### 2. Compile and Flash

```bash
arduino-cli compile --fqbn esp32:esp32:XIAO_ESP32S3_Plus -u -p COM9 --warnings none reachy_sway_screen
```

Replace `COM9` with your actual screen COM port.

### 3. Calibrate Neutral Position

1. Place the screen **flat on a table** (keep it level)
2. Wait 2 seconds (screen shows `hold neutral`)
3. Auto-samples for 0.5 seconds, saves neutral to **NVS** (persists after power off)
4. To recalibrate: send the letter `c` to the screen via a serial tool (115200 baud)

:::caution
You must calibrate the neutral position on first use or when switching screens, otherwise tilt angles will be off.
:::

---

## Step 3: Start the Robot Daemon

### 1. Find the Robot COM Port

Plug in the robot via USB, find the **CH343 chip** COM port in Device Manager (VID `0x1A86`).

### 2. Set the COM Port

Edit `reachy_sync/start_daemon.py` and change `COM14` to your actual robot COM port:

```bash
# Open start_daemon.py in an editor, change COM14 to your actual port
```

### 3. Start

```bash
cd reachy_sync
python -u start_daemon.py
```

You should see `Uvicorn running on http://127.0.0.1:8000` — success!

:::tip
Open http://127.0.0.1:8000/ in a browser to confirm the daemon is running.
:::

---

## Step 4: Run the Main Control Program

```bash
cd reachy_sync
python -u sway_follow.py
```

You should see:

```text
screen connected on COMx
connected
ready: L/R tilt -> body sway + head yaw. F/B tilt -> head pitch.
```

Tilt the screen, and the robot will follow!

---

## How It Works

### Data Flow

```text
Screen IMU (LSM6DS3)
  ax = left/right tilt, ay = forward/back tilt
  tilt = -asinf(ax), pitch = -asinf(ay)
  deadband filter + gain + low-pass filter
  Serial output: "sway <value> pitch <value> rad" (115200 baud)
        ↓
Python (sway_follow.py)
  Reads serial data
  Two-stage low-pass filter (0.22)
  Computes body_yaw, head yaw, head pitch
        ↓
Reachy Mini Daemon (port 8000)
  set_target(body_yaw, antennas, head)
        ↓
Robot motors execute
```

### Screen Firmware Parameters

| Parameter | Value | Description |
|:----------|:------|:------------|
| `GAIN` | 6.0 | Tilt amplification factor — higher = more sensitive |
| `FILT` | 0.25 | Low-pass filter coefficient — lower = smoother but slower |
| `AMP` | 0.7 | Max output amplitude (rad), ~40° |
| `deadband` | 0.008 | Dead zone (rad), ignores tilt under 0.5° |

### Robot-Side Parameters

| Parameter | Value | Description |
|:----------|:------|:------------|
| `HEAD_K` | 0.40 | Head yaw gain (left/right) |
| `HEAD_PITCH_K` | 0.65 | Head pitch gain (up/down) |
| Filter coefficients | 0.22 / 0.22 | Two-stage low-pass — lower = smoother |

### Antenna Mirroring

The two antenna motors on Reachy Mini are mirror-mounted:

- **Right antenna** (index 0): positive = leans left, negative = leans right
- **Left antenna** (index 1): positive = leans right, negative = leans left

To make both antennas lean the same direction, use opposite signs: subtract for right, add for left.

---

## Parameter Tuning

### Too Laggy

- Increase screen `FILT` (e.g. 0.25 → 0.30): stronger filtering on screen side
- Decrease robot-side filter coefficient (e.g. 0.22 → 0.15): smoother but slower response

### Too Slow / Need Large Tilts

- Increase screen `GAIN` (e.g. 6.0 → 8.0): small tilts trigger bigger movements
- Increase robot-side filter coefficient (e.g. 0.22 → 0.30): faster response

### Head Direction Reversed

| Problem | Solution |
|:--------|:---------|
| Left/right reversed | Flip `tilt` sign (`tilt = -asinf(ax)` in `.ino`) |
| Up/down reversed | Flip `pitch` sign (`pt = -asinf(ay)` in `.ino`) |

### Kaomoji Direction Wrong

| Problem | Solution |
|:--------|:---------|
| Rotation angle | Modify `drawFigure(dyn + 1.5708f)` — `1.5708` = 90° |
| Tilt direction reversed | Change `dyn = kaoDev * 2.0f` to `dyn = -kaoDev * 2.0f` |

---

## FAQ

<details>
<summary><strong>Q: What to do after power loss?</strong></summary>

A: Restart the daemon (`python start_daemon.py`), then start `sway_follow.py`. Screen firmware and neutral calibration are saved in NVS and won't be lost.

</details>

<details>
<summary><strong>Q: COM port number changed?</strong></summary>

A: The screen is auto-detected by VID (`0x303A`), no change needed. Update the robot COM port in `start_daemon.py`.

</details>

<details>
<summary><strong>Q: Robot not moving?</strong></summary>

A: Check if the daemon is running on port 8000 (open http://127.0.0.1:8000/ in browser). If not, restart the daemon.

</details>

<details>
<summary><strong>Q: Screen not displaying or not sending data?</strong></summary>

A: Check USB cable, reflash firmware, use a serial tool (115200 baud) to verify `sway ... pitch ... rad` output.

</details>

<details>
<summary><strong>Q: Head direction reversed?</strong></summary>

A: Left/right reversed → flip the sign in `tilt = -asinf(ax)` in the `.ino` file. Up/down reversed → flip the sign in `pt = -asinf(ay)`.

</details>

---

## Tech Support

- **Project Repo**: [GitHub](https://github.com/Genie-INSPIRE/reachy-mini-sway-screen)
- **Submit Issue**: [Issues](https://github.com/Genie-INSPIRE/reachy-mini-sway-screen/issues)
- **Forum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)
- **Buy**: [Reachy Mini](https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html) | [XIAO 1.47'' Touch Display](https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html)

---

## References

- [Reachy Mini Getting Started](/reachymini_getting_started)
- [1.47 inch Touch Display Getting Started](https://wiki.seeedstudio.com/getting_started_1.47_inch_touch_display_nrf52840/)
- [Arduino CLI Documentation](https://arduino.github.io/arduino-cli/)
- [LSM6DS3 Datasheet](https://www.st.com/en/mems-and-sensors/lsm6ds3.html)
