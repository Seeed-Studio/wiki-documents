---
description: 本维基将简要介绍如何在设备上获取 IMU 数据。
title: IMU 使用
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
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/cn/recamera_pro_imu_usage/
---

# reCamera Pro IMU 使用

设备上配备的 IMU 型号为 ICM-42670-P，是一款集成 3 轴加速度计和 3 轴陀螺仪的 6 轴传感器。ICM-42670-P 的陀螺仪支持 ±250 / ±500 / ±1000 / ±2000 dps 的测量范围，而加速度计支持 ±2 / ±4 / ±8 / ±16 g 的测量范围。其内部数据以 16 位二进制补码格式输出。

## 数据路径

reCamera PRO 为 IMU 使用标准 IIO 驱动，因此可以通过 IIO 接口直接获取原始数据。
原始数据文件可以在目录 ***/sys/bus/iio/devices/iio:device1/*** 下找到。
![IMU_DATA_SAMPLE](https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_dir.png)

## 读取数据

运行以下命令以读取对应的原始数据。下面的示例演示了读取 X 轴加速度数据：

``` bash
cat /sys/bus/iio/devices/iio:device1/in_accel_x_raw
```

## 使用 Python 获取数据

可以使用 Python 轻松获取 IMU 数据。下面是一个简单示例：

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

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
