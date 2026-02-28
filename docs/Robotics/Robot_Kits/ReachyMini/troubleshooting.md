---
description: Comprehensive troubleshooting guide and FAQ for Reachy Mini covering frequent issues, assembly, connection, hardware, SDK, and error messages.
title: Troubleshooting & FAQ
slug: /reachymini_troubleshooting
keywords:
- troubleshooting
- faq
- support
- issues
- fixes
- assembly
- connection
- motors
- sdk
- errors
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Troubleshooting & FAQ

Welcome to the Reachy Mini support page. Find answers to common questions and solutions below.

## 🛠️ Troubleshooting - Frequent issues

:::warning Essential troubleshooting
**Please read this first** - it solves most well-known issues!
:::

### Before anything else and for any issue: update & restart

:::tip First step: Update & Restart
**Make sure you are using up-to-date software and that you have restarted both your robot and your computer.**

To restart your robot, press OFF, wait 5 seconds, then press ON. This simple procedure fixes several common and well-known issues.
:::

**How to update the software:**

* **If you are using the dashboard in a web browser**
  Open `Settings`, then click **Check for updates**.
  ![Update](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/update.png)
* **If you are using the new dashboard/app**
  Since 0.8.5 of the app,
* **If you are using a cloned repository**
  Make sure you are either:
  * On the latest tagged release, or
  * Up to date with the `develop` branch (`git pull`).

**Wireless Reachy Mini**: run `reachyminios_check` to make sure everything is fine (see [Get Started](/reachymini_platforms_reachy_mini_get_started))

### Motors related issues

This concerns issues like:
* Motors blinking red or not responding/moving.
* Motors showing errors like "Overload Error"
* Missing motors: "No motor found on port", "Missing motor", etc.

:::info Motors diagnosis
If you have any of the following symptoms, please refer to the [Motors diagnosis and troubleshooting guide](/reachymini_troubleshooting_motors_diagnosis) for detailed steps to diagnose and fix motor-related issues.

Using the Reachy Mini Testbench app will help you identify and resolve these problems effectively.
:::

### Electrical Shock Error

:::danger Electrical Shock Error
An electrical shock error on Dynamixel motors means there is either an issue with the power supply, or a short circuit somewhere.

Please check if any cable is damaged, from the foot PCB to the head. Especially the following cables:
* Power Cable (black & red)
* 3-wires cables for motors (300mm, 200mm, 100mm and 40mm)

It can also be the same issue as "Motor blinking red or Overload Error" described above.
:::

### Microphone not working

:::warning Microphone issues
If you have one of the following symptoms:
* Audio recording not working / returns silence
* Audio recording returning zeros

**You may have plugged the microphone cable upside down.**
* If your cable is white and blue, please check again the assembly instruction to be sure the blue side is up.
* If your cable is black, check that the side with the writing "Main Board" is up (see picture below).

![mic_cable](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/black_fpc_cable.png)
:::

If your cable is plugged properly and you still have issues, it is likely that the FPC cable of the microphone is damaged. Please refer to the tutorial [How to change the FPC cable of the microphone of Reachy Mini?](/reachymini_troubleshooting_change_mic_fpc_cable) to fix this issue.

### Low audio volume

:::tip
* Update your robot to version 1.2.3 or later

For more details, see the documentation: [Getting Started](/reachymini_platforms_reachy_mini_get_started)
:::

### Permission errors

:::tip
* Update your robot to version 1.2.3 or later
* Reboot the robot
:::

### An antenna appears rotated by 90° or 180°

This is a manufacturing issue.

It is easy to fix by following this guide:
[Antenna repositioning guide](https://drive.google.com/file/d/1FsmNpwELuXUbdhGHDMjG_CNpYXOMtR7A/view?usp=drive_link)

### A motor is shaky

This can happen if the motor's PID values are not optimal. Often, motors 10 (foot), 17 and 18 (the antennas) can exhibit slight jitters when holding position.
These are fine "adjustments" that the motor is making, which in this case is an overcorrection.
The good news is that you can [tune PID Control values](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/config/hardware_config.yaml#L66C1-L67C1) to calm these jitters.

:::tip
You can try first to reduce P to 180 on motors, 10, 17, and 18.
If it doesn't help, you can also try to increase D to 10 on the same motors.
:::

### Image is dark on the Lite version

:::info Quick Fix: Adjust Exposure Time in Camera Settings
To fix a dark image, enable auto-exposure or manually increase the exposure time using a camera control application. These applications provide an intuitive interface for adjusting exposure and other camera parameters.
:::

**Recommended Applications:**

* **macOS:** [CameraController](https://github.com/itaybre/CameraController) - Open-source GUI application for USB camera control
* **Linux:** qv4l2 - Qt-based GUI application for V4L2 camera control
  * Install: `sudo apt install qv4l2`
* **Windows:** [Webcam Settings](https://www.softpedia.com/get/Internet/WebCam/Webcam-Settings-Tool.shtml) or [ManyCam](https://manycam.com/) for advanced camera control

These applications allow you to adjust exposure time, brightness, and other camera parameters through an intuitive graphical interface.

---

:::info Advanced: Using libuvc for In-Depth Camera Control
For advanced users who want precise control over camera parameters, you can use libuvc-based command-line utilities. These tools provide low-level access to all UVC camera controls.

To fix the darkness issue specifically, set `auto-exposure-priority=1` using these command-line tools.
:::

**Command-Line Tools by Platform:**

* **macOS:** [uvc-util](https://github.com/jtfrey/uvc-util)

* **Linux:** [v4l2-ctl](https://manpages.debian.org/testing/v4l-utils/v4l2-ctl.1.en.html)
  * Install: `sudo apt install v4l-utils`

* **Windows:** Windows does not have a direct equivalent.

:::note
These command-line tools require technical knowledge and access to the camera parameters may vary depending on the selected tool. Use `--help` and list available controls before making any changes.
:::

### A part is missing in my package

:::tip Check first
Be sure to unpack everything first. Some parts are pre-assembled (e.g the bottom head part is already placed in the back head part).

![head_parts](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/head_parts.jpg)

Then, check the assembly guide's parts list to see if you really miss a part.
:::

If you are 100% sure you miss a part, please contact sales@pollen-robotics.com with a picture of all the parts you have and order number or invoice number.
You can also find [stl files](https://github.com/pollen-robotics/reachy_mini/tree/develop/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) to print it by yourself in the meantime.

### Can't connect to my Wireless Reachy Mini using a USB-C cable

:::info
Wireless units do not expose the robot over USB the way the Lite version does, so plugging a USB-C cable into your laptop will not give you a working connection.

**Instead:**
* Join the robot to your Wi-Fi network and use the SDK client on your laptop to control it remotely.
* If you want to run code directly on the embedded Raspberry Pi, SSH in and execute your scripts there (this is what the Dashboard does after you publish/install an app).
* For a tethered link, use a USB-C-to-Ethernet adapter plus an Ethernet cable—this simply replaces Wi-Fi with wired Ethernet.
:::

### Wireless Acces point doesn't show up - RPI doesn't boot

There is a switch on the board in the head that needs to be in a given position. And if it's not, the AP doesn't show. It's possible that this switch was moved during assembly or maybe even a factory mistake.

:::warning
Please check that the switch is on the "**debug**" and not on "**download**" position. See the picture below:

![switch_position](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/wireless_switch.png)
:::

If this switch is in the right position and you still can't see the AP, you may need to re-flash the Raspberry Pi's iso, following the [reflash the RPI Iso tutorial](/reachymini_platforms_reachy_mini_reflash_the_rpi_iso).

## 🚀 Getting Started & Assembly

### How long does assembly usually take?

:::tip
Most testers report between **1.5 and 2 hours**. It can take up to 4 hours depending on your experience level.
:::

### Are there any difficult steps during assembly?

Not really, testers describe it as **fun, simple, and satisfying**. Basic tools and patience are enough. Cable routing and torqueing parts correctly are the trickiest elements. When you buy a Reachy Mini Lite or Wireless, it comes with a printed user guide, and you also have access to a video and the Digital guide.

Video for Reachy Mini [BETA](https://www.youtube.com/watch?v=_r0cHySFbeY), LITE, WIRELESS

Digital Assembly Guide for Reachy Mini [BETA](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide), LITE, WIRELESS

### I have 2 cables and a few screws left after finishing the assembly. Is this normal?

:::info
Yes, this is completely normal.

We intentionally include spare cables and screws in the kit in case some parts are damaged or lost during assembly.

You do not need to install them.
:::

### My Reachy Mini doesn't move on first startup. What should I check?

:::warning Checklist
* **Power Supply:** Ensure the 7V-5A power supply is plugged in. The USB connection is not enough to power the motors.
* **Cables:** Check that all cables are fully inserted. Loose power cables are a common cause of "motor not responding" errors.
* **Troubleshooting Section:** See the Essential Troubleshooting section at the top of this page.
:::

### Do I need to start the daemon manually?

:::success NO
* With Reachy Mini (Wireless), the daemon is already running on the embedded Raspberry Pi.
* With Reachy Mini Lite, you can use [the desktop app](/reachymini_platforms_reachy_mini_lite_get_started).
* If the desktop app doesn't work on your system (e.g., ARM64, unusual distributions), you can [install and use the Python SDK](/reachymini_sdk_installation) directly - it's a fully supported alternative!
:::

## 🔌 Connection & Dashboard

### How do I connect the robot to Wi-Fi?

See the [Reachy Mini Wireless guide](/reachymini_platforms_reachy_mini_get_started) for detailed instructions on connecting to Wi-Fi.

### How do I reset the Wi-Fi hotspot?

If you need to reset the robot's Wi-Fi hotspot (for example, if you can't connect or want to change the network), follow the instructions in the [Wi-Fi Reset Guide](/reachymini_platforms_reachy_mini_reset).

### The dashboard at http://localhost:8000 doesn't work.

:::info Troubleshooting steps
**1. Check browser permissions**: Ensure your browser can access local networks. On _macOS_, these permissions are found in System Settings → Privacy & Security → Local Network.

**2. For Wireless Reachy Mini**: Ensure both your computer and the robot are connected to the **same network**, then verify connectivity by running the following command in your terminal:
:::

```bash
ping reachy-mini
```

:::info For Lite Reachy Mini
Perform these checks:
* _Virtual Environment:_ Ensure you are running inside your virtual environment (`.venv`, `reachy_mini_env`,...).
* _SDK Update:_ Ensure you have the latest version.

With `pip`, run:
```bash
pip install -U reachy-mini
```

With `uv`, run:
```bash
uv pip install -U reachy-mini
```

* _Daemon:_ Make sure the daemon `reachy-mini-daemon` is running in a terminal.
:::

### Does the robot have a Web API?

:::info Yes!
The daemon provides a REST API (FastAPI) and WebSocket support.
* **Docs:** `http://localhost:8000/docs` (available when daemon is running).
* **Features:** Get state, Move joints, Control daemon.
:::

You can use the API to control the robot and get its state and even control the daemon itself. The API is implemented using [FastAPI](https://fastapi.tiangolo.com/) and [pydantic](https://docs.pydantic.dev/latest/) models.

It should provide you all the necessary endpoints to interact with the robot, including:

* Getting the state of the robot (joints positions, motor status, etc.)
* Moving the robot's joints or setting specific poses

The API is documented using OpenAPI, and you can access all available routes and test them at http://localhost:8000/docs when the daemon is running. You can also access the raw OpenAPI schema at http://localhost:8000/openapi.json.

This can be useful if you want to generate client code for your preferred programming language or framework, connect it to your AI application, or even to create your MCP server.

**WebSocket support**

The API also supports WebSocket connections for real-time updates. For instance, you can subscribe to joint state updates:

```javascript
let ws = new WebSocket(`ws://127.0.0.1:8000/api/state/ws/full`);

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};
```

### Why do I need a virtual environment (.venv)?

:::tip
Helps prevent package conflicts during SDK installation.
:::

## 🤖 Hardware, Motors & Limits

### Where can I find more information about hardware?

Refer to the [Reachy Mini Hardware page](/reachymini_platforms_reachy_mini_hardware) for detailed information about the robot's hardware components.

### What are the safety limits (Head & Body)?

:::warning Safety Limits
If you command a pose outside these limits, the robot will automatically clamp to the nearest safe pose.
:::

* **Body Yaw:** [-180°, 180°].
* **Head Pitch/Roll:** [-40°, 40°].
* **Head Yaw:** [-180°, 180°].
* **Combined Limit:** The difference between `body_yaw` and `head_yaw` must be within **[-65°, 65°]**.

### Why are the motors "limp" or "stiff"? (Compliancy)

* **`enable_motors()`**: Motors **ON** (Stiff). Robot holds position.
* **`disable_motors()`**: Motors **OFF** (Limp). You can move it by hand.
* **`make_motors_compliant()`**: Motors **ON but Soft**. Useful for teaching-by-demonstration.

### How do I access to motors' parameters?

1. You can refer scanning the motors using the [scan_motors.py script](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/tools/scan_motors.py).

:::tip If your robot is Lite
You can run the script directly on your computer:
```bash
python -m reachy_mini.tools.scan_motors
```
:::

:::tip If your robot is Wireless
SSH into the robot:
```bash
ssh pollen@reachy-mini.local
```
Activate the venv:
```bash
source /venvs/mini_daemon/bin/activate
```
And run the script (motors must be powered on for this!):
```bash
python -m reachy_mini.tools.scan_motors --wireless
```
:::

It should print the list of detected motors. You should have all motors on baudrate 1000000, with the following IDs: 10,11, 12, 13, 14, 15,17, 18. If some are missing, check the cables again. If there is a motor with a different ID or baudrate, please contact support.

Example of the right output:
```
Trying baudrate: 9600
No motors found at baudrate 9600
Trying baudrate: 57600
No motors found at baudrate 57600
Trying baudrate: 115200
No motors found at baudrate 115200
Trying baudrate: 1000000
Found motors at baudrate 1000000: [10, 11,12,13, 14, 15, 16, 17, 18]
```

2. Lite: You can also use the Dynamixel Wizard to read motors parameters. Follow the guide [here](/reachymini_platforms_reachy_mini_lite_wizard).

### Motors stop responding after a while.

* Check the power supply connection.
* Motors might have entered thermal protection mode (overheating). Turn off and on again.
* Updating the SDK (`pip install -U reachy-mini`) has solved this for some users.
* If the motor's led blinks red, see the "Motor blinking red or Overload Error" section in the Essential Troubleshooting above.

### Does the battery has safety features?

:::info
Wireless includes a proper battery charger.
The battery integrates a BMS with a temperature sensor too.
:::

### How do I see the battery left?

:::warning
We do not have the possibility to check the battery status, that's a known limitation of the design.

We only have the led indication for "low battery" when it's time to charge it. (green -> orange -> red)
:::

### How to remove the battery

:::tip
* Check that the green led is not on first.
* Remove the 3x screws at the bottom and take out the foot a little bit.
![remove_foot](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/remove_foot.png)
* Unplug the indicated connector (red arrow) to be able to remove the battery. There should be some double-sided tape that maintain the battery in place, so it can be a bit hard to remove.
![battery_location](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/battery_connector.png)
* When you'll re-assemble it, do these step again in reverse order. Just be careful not to pinch any cable.
:::

### The head may touch the body during some official motions

:::info
This behavior is expected and not a hardware or software bug.

However, since it can be confusing, we will update those motions to avoid this contact.
:::

### Can I modify the appearance (Skins/CAD)?

:::info
* **CAD:** The full STEP files havenot been released yet, but we plan to release them in the future. In the meantime, you can find some STL files in the [assets folder](https://github.com/pollen-robotics/reachy_mini/tree/develop/src/reachy_mini/descriptions/reachy_mini/mjcf/assets) of the repository.
* **Skins:** Yes, the community has created custom builds. Some "skin" STEP files have been shared on discord, on the channel ["Pimp my Reachy Mini"](https://discord.com/channels/519098054377340948/1453340883775651861).
:::

### My mic flat cable is broken

:::info Specifications
The specifications of the microphone's cable are as follows:
* FFC/FPC flat flexible cable
* 12 pins
* 0.5mm spacing
* Type A (connectors on the same side)
* 15mm length
:::

Here are a few references if you are looking for a replacement for your microphone cable:
* [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
* [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

## 🐍 SDK, Apps & Programming

### How do I connect from Python?

Use the `ReachyMini` class.

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
    print(mini.state)
```

### How do I create a new App?

1.  Use the generator: `reachy-mini-make-app my_app_name`.
2.  Edit `main.py` in the generated folder.
3.  Run it: `python my_app_name/main.py`.

Check the [Hugging Face Tutorial](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps) for details.

### Is installing apps directly from the dashboard supported?

:::tip
Sure! You can install apps directly from your Dashboard if they're native, or add them to your favourites if they're web-based.
:::

### All apps installations fail on Windows !

:::warning
It might be related to unsufficient rights to create symlinks in Windows. You can set the environment variable `HF_HUB_DISABLE_SYMLINKS_WARNING` to 1 to remove the warnings that cause the failure.

In a terminal, run:
```powershell
set HF_HUB_DISABLE_SYMLINKS_WARNING=1
```
:::

### Installing apps from Hugging Face fails.

:::tip
Update your SDK. Early versions had a bug with Space installation.

```bash
pip install -U reachy-mini
```
:::

### Is there a Simulation mode?

:::info
Yes, via MuJoCo. It is still a work in progress, but you can run code with the `--sim` flag or `ReachyMini(media_backend="no_media")` if just testing logic without physics.
:::

### How do I debug an app on the Wireless?

:::info
SSH into the embedded computer, clone (or copy) your app, and run it manually. This reproduces what the dashboard does when launching your app.
:::

```bash
ssh pollen@reachy-mini.local
# password: root
cd your_app_name
python your_app_name/main.py
```

Your GUI will open at the usual address (for example, `http://reachy-mini.local:8042`).

## 🕹️ Moving the Robot

### How do I move the head?

Use `goto_target` with `create_head_pose`:

```python
from reachy_mini.utils import create_head_pose

# ... inside with ReachyMini() as mini:
mini.goto_target(head=create_head_pose(yaw=-10, pitch=20))
```

### What is the difference between `goto_target` and `set_target`?

:::info
* **`goto_target`**: **Smooth**. Interpolates motion over time (default 0.5s). Best for gestures.
* **`set_target`**: **Instant**. Sets the target immediately. Best for high-frequency control (teleoperation, mathematical trajectories).
:::

### How do I record and replay moves?

:::tip Recording
Call `start_recording()` and `stop_recording()` around your control loop.
:::

```python
mini.start_recording()
# ... move robot ...
move = mini.stop_recording()
```

:::tip Replaying
Use the `RecordedMoves` class to load moves from the [Hugging Face library](https://github.com/pollen-robotics/reachy_mini_dances_library).
:::

```python
mini.play_move(recorded_moves.get("dance_1"))
```

### My robot's move look shaky. Is the control loop running correctly?

:::info
You can check that the motor control loop runs correctly by checking the daemon status:
:::

* via the SDK
```python
mini = ReachyMini()
print(mini.client.get_status())
```
* via the dashboard API at `http://localhost:8000/docs` on a lite and `http://reachy-mini.local:8000/docs` for the wireless (look for `/api/daemon/status` endpoint)

You should see values around 50Hz (~20ms period):
```python
{
  ...
"motor_controller": "ControlLoopStats(period=~19.99ms, read_dt=~1.94 ms, write_dt=~0.19 ms)"
  ...
}
```

:::warning
If the period is much higher than 20ms, it means the control loop is not running fast enough. This can be due to:
* Heavy CPU load on the computer (eg. other apps using too much CPU).
* (only for lite) high USB latency (try configuring your serial port).
:::

## 👁️ Vision & Audio

### Volume is too low (Linux)

1.  Run `alsamixer`.
2.  Set **PCM1** to 100%.
3.  Use **PCM,0** to adjust the global volume.

To make it permanent:
```bash
CARD=$(aplay -l | grep -i "reSpeaker" | head -n1 | sed -n 's/^card \([0-9]*\):.*/\1/p')
amixer -c "$CARD" set PCM,1 100%
sudo alsactl store "$CARD"
```

This is a [known issue](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/02_setting_up_the_hardware.html#low-volume-of-playback-audio-on-linux-for-project-ua) of the XVF3800 based sound card.

### How do I get camera frames?

Use the `media` object.

```python
with ReachyMini() as mini:
    frame = mini.media.get_frame()
    # Returns an OpenCV-compatible numpy array
```

### How do I use the Microphone / Speaker?

```python
# Get audio
sample = mini.media.get_audio_sample()

# Play audio
mini.media.push_audio_sample(numpy_chunk)
```

### How do I make Reachy look at something?

* **2D (Image):** `mini.look_at_image(x, y)` - (0,0 is top-left).
* **3D (World):** `mini.look_at_world(x, y, z)` - Coordinates in robot frame.

### Face tracking feels slow.

:::tip
Performance relies heavily on lighting conditions. Ensure the face is well-lit. Using the GStreamer backend can also improve latency compared to the default OpenCV backend.
:::

### How do I check that the sound system is working?

#### Reachy Mini Lite Version

:::info
The easiest way to test the Lite version is to directly use the *Pollen Robotics Reachy Mini Audio* device from your computer to verify proper functionality.
:::

#### Reachy Mini Wireless Version

:::info
For the Wireless version, you can use the following GStreamer commands to test audio recording and playback:
:::

```bash
# record a sound
gst-launch-1.0 -e alsasrc device="reachymini_audio_src" ! audioconvert ! audioresample ! wavenc ! filesink location="test.wav"
# playback the recording
gst-launch-1.0 filesrc location=test.wav ! wavparse ! audioconvert ! alsasink device=reachymini_audio_sink
#playback a test sound (pink noise)
gst-launch-1.0 audiotestsrc wave="pink-noise" ! audioconvert ! audioresample ! alsasink device=reachymini_audio_sink
```

:::tip Advanced Testing
You can play back a sound while recording simultaneously to test the echo cancellation performance. This helps verify that the microphone array is properly processing audio and canceling echo from the speakers.

**Troubleshooting Tips:**
* Ensure the `.asoundrc` file exists in the home directory
* Check that the microphone is detected: `arecord -l`
* Check that the speaker is detected: `aplay -l`
:::

## 🔧 Specific Error Messages & Fixes

### Motor `'<name>'` hardware errors: ['Input Voltage Error']

:::info
We are using a higher voltage on Reachy Mini, it's on purpose :)
:::

### Error: "OSError: PortAudio library not found"

:::warning
You are missing a system dependency. Run:

```bash
sudo apt-get install libportaudio2
```

Then restart the daemon.
:::

### Warning: "Circular buffer overrun" (Simulation/Mujoco)

:::tip
This appears if you connect to the robot but don't consume the video frames, causing the buffer to fill up.

**Fix:** If you don't need video, initialize with `ReachyMini(media_backend="no_media")`.
:::

### No Microphone Input / Direction of Arrival (Beta Units)

:::warning
* **No Input:** Requires firmware 2.1.3. Run the [update script](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware/update.sh).
* **No Direction:** Requires firmware 2.1.0+.
* Check that the flat flexible cable is intalled the right way (Slides 45-47 of assembly guide).
:::

## 📦 Shipping & Warranty

### My package is damaged or missing.

:::danger
Contact **Pollen Robotics** team immediately. You can send us an email to sales@pollen-robotics.com with photos of the package, receipt number or invoice number and your full name. We will then check with the transport company and keep you updated.
:::

### Refund Policy

:::info
* **Before shipping:** Contact `sales@pollen-robotics.com` for a 100% refund.
* **After shipping:** You have 30 days to return your package. Contact sales (sales@pollen-robotics.com) with proof of delivery and invoice or receipt number. If you have comments / feedback, please let us know, our focus is building a robot the open-source community enjoys building.
:::

### Warranty

:::info
If a part is broken/malfunctioning, Pollen's after-sales team will determine if it is a hardware defect covered by warranty. Then, our manufacturer will provide repair or replacement parts. You can send us an email to sales@pollen-robotics.com with photos of the issue, receipt number or invoice number and your full name.
:::

## 💬 Still stuck?

If you couldn't find the answer to your issue in this guide, please reach out to us directly!
The Pollen Robotics team and the community are active on Discord to help you troubleshoot specific problems.

👉 **[Join the Pollen Robotics Discord](https://discord.gg/Y7FgMqHsub)**
