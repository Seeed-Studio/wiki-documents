---
description: Build your voice-controlled smart robotic arm with reSpeaker + HorizonArm-Mark
title: Deploying Your Voice-Controlled Smart Robotic Arm with reSpeaker + HorizonArm-Mark
keywords:
- reSpeaker_XVF3800_USB_4_Mic_Array
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_arm
sku: 114993702,114993700
last_update:
  date: 2/6/2026
  author: Mingxi
---


> **Target**: Get HorizonArm-Mark robotic arm working with reSpeaker XVF3800 to achieve voice-controlled robotic arm operation.
> 
> **Seeed-Projects**: https://github.com/Seeed-Projects

reSpeaker XVF3800 is a professional 4-microphone circular array based on the XMOS XVF3800 chip. It features dual-mode, 360° far-field pickup (up to 5 meters), Acoustic Echo Cancellation (AEC), Automatic Gain Control (AGC), Direction of Arrival (DoA), dereverberation, beamforming, and noise suppression, providing reliable voice pickup in noisy environments. With its powerful audio capture and noise reduction capabilities, it provides excellent "ears" for voice control applications.

![reSpeaker banner](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)

---

## Part 1: reSpeaker Hardware and Firmware Preparation

This section explains how to flash the USB firmware for the reSpeaker XVF3800. The USB firmware supports plug-and-play mode, allowing direct connection to PCs, Raspberry Pi, and other devices.
USB firmware only supports USB DFU (not I2C DFU). If the device is currently running I2S firmware, please enter **Safe Mode** first, then flash the USB firmware using USB DFU. Safe Mode supports both USB DFU and I2C DFU.

**Reference Resources**:
- [reSpeaker XVF3800 Getting Started Guide](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/)
- [reSpeaker XVF3800 Firmware Repository](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)
- [reSpeaker Code Repository](https://github.com/respeaker)

### 1.1 Preparation

#### Hardware Requirements

| Items | Description |
|------|------|
| reSpeaker XVF3800 USB 4-Mic Array | Main controller microphone array |
| USB Type-C Cable | Used for power and data transmission |
| Computer | Windows / macOS / Linux compatible |

#### Software Preparation (Installing dfu-util)

**Windows**:

1. Download and extract the `dfu-util` binaries (e.g., `D:\dfu-util-0.11-binaries\win64\`)
2. Add the directory containing `dfu-util.exe` to the system PATH
3. Open a command prompt and run `dfu-util -V` to verify the installation
4. If `dfu-util -l` returns `LIBUSB_ERROR_NOT_SUPPORTED`, please use Zadig to replace the device driver with WinUSB

**macOS (Homebrew)**:

```bash
brew install dfu-util
dfu-util -l
```

**Linux (Debian / Ubuntu / Raspberry Pi OS)**:

```bash
sudo apt update
sudo apt install dfu-util
sudo dfu-util -l
```

#### Download USB Firmware

Visit the firmware repository: https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares

Select one of the following USB firmwares based on your needs (the 2-channel version is generally sufficient):

| Firmware | Channels | Description |
|------|--------|------|
| `respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin` | 2 | Processed dual-channel output<br />Channel 0: Conference<br />Channel 1: ASR |
| `respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin` | 6 | Channel 0: Processed audio (Conference)<br />Channel 1: Processed audio (ASR)<br />Channels 2-5: Raw data for Microphones 0-3 |

### 1.2 Connect and Enter DFU Mode

#### Wiring Instructions

When connecting to a computer, please use the **USB-C port near the 3.5mm headphone jack** (XMOS side). Do not use the XIAO side port.

#### Entering Safe Mode

Safe mode is required in the following situations:
- Current firmware is in I2S mode and needs to be switched to USB mode
- Firmware is corrupted or incorrect firmware was flashed

**Operation Steps**:

1. Completely disconnect the device from power
2. Press and hold the onboard **Mute** button
3. While holding the button, reconnect the power
4. When the red LED starts flashing, release the button — the device has entered Safe Mode

### 1.3 Flash USB Firmware Using dfu-util

#### Confirm Device Visibility

Run the following command to check if the device is recognized:

```bash
# Linux / Raspberry Pi OS
sudo dfu-util -l

# macOS / Windows
dfu-util -l
```

The expected output should include: `Found DFU: [2886:001a] ... alt=1, name="reSpeaker DFU Upgrade"`

#### Execute Flashing Command

```bash
# Linux / Raspberry Pi OS (needs sudo)
sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin

# macOS / Windows (no sudo needed)
dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin
```

**Parameter Description**:
- `-R`: Reset/reboot the device after flashing is complete
- `-e`: Erase original firmware
- `-a 1`: Write to the Upgrade partition
- `-D`: Specify the path to the firmware file

After flashing is complete, the device will automatically restart and load the USB firmware.

### 1.4 Verification and Troubleshooting

#### Verify Firmware

After flashing the USB firmware, you can verify it as follows:

1. **Device Manager Detection**
   - **Windows**: Open Device Manager; you should see "reSpeaker 3800" under "Sound, video and game controllers"
   - **macOS/Linux**: Run the `lsusb` command to check if the device is recognized as a USB audio device
   
   ![usbset](https://files.seeedstudio.com/wiki/reSpeaker-arm/respeaker_usb.png)

2. **Recording Test**
   - Use Audacity or other recording software
   - Select "reSpeaker 3800" as the recording device
   - Set the sample rate to 16000 Hz and the number of channels according to the flashed firmware (2 or 6 channels)
   - Start recording and test voice capture

#### Common Questions

**Q: Can't detect the device with `dfu-util -l`?**
- Check the USB cable and port (you must use the XMOS side connector, the USB-C port near the 3.5mm headphone jack)
- If the device is currently running I2S firmware, please enter Safe Mode first
- Windows users: Ensure the WinUSB driver is used via Zadig

**Q: Error during flashing?**
- Try changing the USB cable or host port
- Re-flash in Safe Mode

**Q: Computer doesn't recognize device after flashing?**
- Ensure you are using the USB firmware file (filename starts with `usb`), not the I2S firmware
- Try re-plugging the device or changing the USB port

**Q: No sound or abnormal sound during recording?**
- Check if the recording software's sample rate is set to 16000 Hz
- Confirm that the channel count matches the firmware (2 or 6 channels)
- Check if the microphone is muted (see if the red mute LED is on; press the mute button to unmute)

---

## Part 2: Software Configuration and Connection

### 2.1 Hardware Connection

Ensure the control computer is connected to both the robotic arm and the microphone array via USB.

### 2.2 Connecting the Robotic Arm

1. Open the robotic arm control software, HorizonArm
2. Click the **Connect** button in the top left corner
3. Select the corresponding serial port (e.g., COM3) and baud rate (500000)
4. Select **Motor ID Settings** → **Robotic Arm** → **Custom ID**, and confirm it displays: 1, 2, 3, 4, 5, 6
5. Click **Connect**

![armset](https://files.seeedstudio.com/wiki/reSpeaker-arm/armset.png)

Once the connection is successful, you can see the status of the robotic arm on the HorizonArm interface. Click **Go to Zero** to return the arm to its initial position (90-degree straight state).

### 2.3 Configuring the AI System

1. Click on the **Embodied Intelligence** interface
2. Configure parameters:
   - Enter the API address and key for the LLM (Large Language Model)
   - Select the Camera ID (usually 1, or 0 for some models)
3. Click **Initialize AI System**
4. Enter the **Embodied Drive** interface to start using it

![aiset](https://files.seeedstudio.com/wiki/reSpeaker-arm/aiset.png)

### 2.4 Voice Control Operation

After entering the execution interface, you will see four control buttons:

![monitor](https://files.seeedstudio.com/wiki/reSpeaker-arm/monitor.png)

**Operation Methods**:

| Function | Operation Instructions |
|------|----------|
| **Execute Command** | Enter a command in the text box and click the button to execute it |
| **Run Dialogue** | Similar to a recording function:<br />• First click: Start recording<br />• Second click: End recording<br />The recording will be sent to the LLM for processing, the results will be displayed on the interface, and the robotic arm will perform actions based on the instructions |
| **Enable Dialogue Mode** | The robotic arm enters a continuous listening state. After saying the wake word **"Mark"**, subsequent speech will be recognized as a command and executed |

---

## Technical Support and Product Discussion

Thank you for choosing our product! We provide multiple communication channels to ensure you have a smooth product experience.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
