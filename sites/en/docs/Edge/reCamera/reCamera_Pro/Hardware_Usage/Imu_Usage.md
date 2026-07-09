---
description: This wiki will provide a brief introduction on how to obtain the IMU data on the device.
title: reCamera Pro IMU Usage
keywords:
  - reCamera
  - reCamera Pro
  - IMU
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_imu_usage
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-9'
url: https://wiki.seeedstudio.com/recamera_pro_imu_usage/
---

# IMU Usage
The IMU model equipped on the device is ICM-42670-P, a 6-axis sensor integrating a 3-axis accelerometer and a 3-axis gyroscope. The gyroscope of ICM-42670-P supports measurement ranges of ±250 / ±500 / ±1000 / ±2000 dps, while the accelerometer supports ranges of ±2 / ±4 / ±8 / ±16 g. Its internal data is output in 16-bit two's complement format.
## Data Path
reCamera PRO uses the standard IIO driver for the IMU, so raw data can be directly retrieved via IIO interfaces.
Raw data files can be found under the directory ***/sys/bus/iio/devices/iio:device1/***.

## Read Data
Run the following command to read corresponding raw data. The example below demonstrates reading the X-axis acceleration data:
``` bash
cat /sys/bus/iio/devices/iio:device1/in_accel_x_raw
```
## Retrieve Data with Python
Python can be used to easily obtain IMU data. Below is a simple example:
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


## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with various support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to meet different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>