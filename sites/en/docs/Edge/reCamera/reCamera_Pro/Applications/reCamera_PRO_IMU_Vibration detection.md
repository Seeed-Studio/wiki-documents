---
title: Tilt and Shake Detection
description: This article explains how to use the reCamera Pro's onboard gyroscope ICM-42670-P to collect angular velocity data, implement device tilt and shake detection, and play voice warnings through the speaker when triggered.
keywords:
  - reCamera
  - reCamera Pro
  - IMU
  - Gyroscope
  - ICM-42670-P
  - Tilt Detection
  - Shake Detection
  - ALSA
  - aplay
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO-IMU-Detect.gif
slug: /recamera_pro_imu_tilt_shake_detection
sidebar_position: 1
last_update:
  date: 2026-06-11
  author: Sizhao zhou
createdAt: '2026-06-11'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/recamera_pro_imu_tilt_shake_detection/
---

# Using reCamera Pro's Onboard IMU for Tilt and Shake Detection

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO-IMU-Detect.gif" /></div>

## Introduction

This article explains how to use the reCamera Pro's onboard six-axis inertial measurement unit (IMU) — the ICM-42670-P gyroscope — to implement device tilt and shake detection. When the device is tilted or shaken, the system will play corresponding voice warnings through the onboard speaker. Through this tutorial, you will learn how to read raw gyroscope data via the Linux IIO driver, play warning sounds using the ALSA audio driver, and ultimately integrate a complete detection and alert program.

## Hardware Preparation
- one reCamera Pro

<div align="center">
<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>
</div>



## Implementation Principle

By collecting raw angular velocity data from the onboard gyroscope (ICM-42670-P), the system determines whether the device has tilted or shaken. The current implementation uses simple threshold-based judgment, which can be optimized later based on actual requirements.

### Shake Detection

When the absolute value of the angular velocity data on any axis exceeds a preset threshold, it is determined as a shake.

### Tilt Detection

When the absolute value of the angular velocity data on any axis exceeds a preset threshold, it is determined as a tilt.

## Onboard Gyroscope Data Acquisition

The reCamera Pro's Linux environment uses the IIO (Industrial I/O) driver, which exposes sensor data and configuration through the sysfs interface, allowing user-space applications to access it. The sensor data path is:

```
/sys/bus/iio/devices/iio:device1
```

The gyroscope's raw data files are exposed in this directory, as shown in the image below:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_dir.png" /></div>

To obtain the raw gyroscope data, simply read the corresponding file. For example, to get the gyroscope's X-axis data, read the `in_anglvel_x_raw` file:

```bash
cat /sys/bus/iio/devices/iio:device1/in_anglvel_x_raw
```

The execution result is shown below:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_data.png" /></div>

## Using the Onboard Speaker

The reCamera Pro's onboard speaker is controlled via the standard Linux ALSA driver. You can view the current sound card devices with the following command:

```bash
aplay -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_aplay_l.png" /></div>

Use the following command to play an audio file:

```bash
aplay test.wav
```

:::note
`aplay` is an ALSA PCM player. It can only play PCM/WAV format data and cannot decode MP3. You can use the following command to convert MP3 to WAV format:

```bash
ffmpeg -i test.mp3 test.wav
```
:::

## Basic Implementation Code

Now that we understand how to read raw gyroscope data and play audio, let's write the code to implement the full functionality.

### Gyroscope Data Acquisition

Below is a minimal function example demonstrating how to collect X-axis gyroscope data. You can extend this function to obtain data from other axes.

```python
#!/usr/bin/env python3

DEVICE = "/sys/bus/iio/devices/iio:device1"

with open(f"{DEVICE}/in_anglvel_scale", "r") as f:
    scale = float(f.read().strip())

with open(f"{DEVICE}/in_anglvel_x_raw", "r") as f:
    raw = int(f.read().strip())

gyro_x = raw * scale

print(f"Gyroscope X: {gyro_x:.6f} rad/s")
```

### Audio Playback

When the device triggers a tilt or shake, a corresponding voice warning needs to be played. The following code demonstrates how to play audio using Python:

```python
#!/usr/bin/env python3

import subprocess

AUDIO = "test.wav"

subprocess.run([
    "aplay",
    AUDIO
])
```

### Final Implementation Code

- When the device is shaken, it will play **"Warning: Do not shake the device"**.
- When the device is tilted, it will play **"Warning: The equipment has toppled over. Please immediately check the equipment status to prevent any accidents"**.

The relevant code can be downloaded from [reCamera_PRO_IMU_Detect](https://drive.google.com/drive/folders/1-3RTc0urrzMJVWGHqnLKwSMuZavLV9O0?usp=drive_link).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_CODE.png" /></div>

## Code Deployment

The following steps describe how to deploy the code to the reCamera Pro and run it:

1. Upload the entire folder to the reCamera Pro via SSH:

```bash
scp -r ./icm42670_project root@deviceIP:/userdata
```

2. Run the main program:

```bash
./main.py
```

:::note
1. The program will perform a calibration operation on the first run. Please ensure the device is placed stably before running `main.py`. If recalibration is needed (default calibration duration is 3 seconds), run:

```bash
./main.py --force-calib
```

2. View code usage help:

```bash
./main.py --help
```
:::

## Troubleshooting

- **Unable to read gyroscope data**: Verify that the path `/sys/bus/iio/devices/iio:device1` exists and that the `in_anglvel_x_raw` file is readable. If the path does not exist, the IIO driver may not be loaded; check the kernel modules.
- **Audio playback fails**: Confirm that the audio file is in WAV format and that the `aplay` command is available. If the speaker is silent, check the ALSA volume settings.
- **Calibration fails**: Ensure the device is stationary and level during calibration. If the calibration time is insufficient, use `--force-calib` to recalibrate.


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>