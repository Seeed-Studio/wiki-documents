---
title: 倾斜与晃动检测
description: 本文介绍如何使用 reCamera Pro 板载陀螺仪 ICM-42670-P 采集角速度数据，实现设备倾斜与晃动检测，并在触发时通过扬声器播放语音警告。
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
url: https://wiki.seeedstudio.com/cn/recamera_pro_imu_tilt_shake_detection/
---

# 使用 reCamera Pro 板载 IMU 实现倾斜与晃动检测

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO-IMU-Detect.gif" /></div>

## 介绍

本文介绍如何使用 reCamera Pro 板载的六轴惯性测量单元（IMU）——ICM-42670-P 陀螺仪——来实现设备倾斜与晃动检测。当设备发生倾斜或晃动时，系统会通过板载扬声器播放相应的语音警告。通过本教程，你将学习如何通过 Linux IIO 驱动读取原始陀螺仪数据、使用 ALSA 音频驱动播放警告音，并最终整合出一个完整的检测与告警程序。

## 硬件准备
- 一台 reCamera Pro

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



## 实现原理

通过采集板载陀螺仪（ICM-42670-P）的原始角速度数据，系统判断设备是否发生倾斜或晃动。当前实现采用简单的阈值判断方式，后续可根据实际需求进行优化。

### 晃动检测

当任一轴向的角速度数据绝对值超过预设阈值时，即判定为晃动。

### 倾斜检测

当任一轴向的角速度数据绝对值超过预设阈值时，即判定为倾斜。

## 板载陀螺仪数据采集

reCamera Pro 的 Linux 环境使用 IIO（Industrial I/O）驱动，通过 sysfs 接口暴露传感器数据和配置，供用户空间应用访问。传感器数据路径为：

```
/sys/bus/iio/devices/iio:device1
```

陀螺仪的原始数据文件在该目录下暴露，如下图所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_dir.png" /></div>

要获取陀螺仪的原始数据，只需读取对应的文件。例如，要获取陀螺仪 X 轴数据，读取 `in_anglvel_x_raw` 文件：

```bash
cat /sys/bus/iio/devices/iio:device1/in_anglvel_x_raw
```

执行结果如下图所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_data.png" /></div>

## 使用板载扬声器

reCamera Pro 的板载扬声器通过标准 Linux ALSA 驱动进行控制。你可以使用以下命令查看当前声卡设备：

```bash
aplay -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_aplay_l.png" /></div>

使用以下命令播放音频文件：

```bash
aplay test.wav
```

:::note
`aplay` 是一个 ALSA PCM 播放器。它只能播放 PCM/WAV 格式数据，无法解码 MP3。你可以使用以下命令将 MP3 转换为 WAV 格式：

```bash
ffmpeg -i test.mp3 test.wav
```
:::

## 基础实现代码

在了解了如何读取原始陀螺仪数据和播放音频之后，我们来编写代码实现完整功能。

### 陀螺仪数据采集

下面是一个最小函数示例，演示如何采集 X 轴陀螺仪数据。你可以在此基础上扩展以获取其他轴的数据。

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

### 音频播放

当设备触发倾斜或晃动时，需要播放相应的语音警告。下面的代码演示如何使用 Python 播放音频：

```python
#!/usr/bin/env python3

import subprocess

AUDIO = "test.wav"

subprocess.run([
    "aplay",
    AUDIO
])
```

### 最终实现代码

- 当设备被晃动时，将播放 **“警告：请勿晃动设备”**。
- 当设备发生倾倒时，将播放 **“警告：设备已倾倒。请立即检查设备状态以防止发生意外”**。

相关代码可从 [reCamera_PRO_IMU_Detect](https://drive.google.com/drive/folders/1-3RTc0urrzMJVWGHqnLKwSMuZavLV9O0?usp=drive_link) 下载。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_CODE.png" /></div>

## 代码部署

下面的步骤说明如何将代码部署到 reCamera Pro 并运行：

1. 通过 SSH 将整个文件夹上传到 reCamera Pro：

```bash
scp -r ./icm42670_project root@deviceIP:/userdata
```

2. 运行主程序：

```bash
./main.py
```

:::note
1. 程序首次运行会进行一次校准操作。请在运行 `main.py` 前确保设备放置稳定。如需重新校准（默认校准时长为 3 秒），运行：

```bash
./main.py --force-calib
```

2. 查看代码使用帮助：

```bash
./main.py --help
```
:::

## 故障排查

- **无法读取陀螺仪数据**：请确认路径 `/sys/bus/iio/devices/iio:device1` 是否存在，以及 `in_anglvel_x_raw` 文件是否可读。如果路径不存在，可能是 IIO 驱动未加载；请检查内核模块。
- **音频播放失败**：请确认音频文件为 WAV 格式，并且系统中存在 `aplay` 命令。如果扬声器无声，请检查 ALSA 音量设置。
- **校准失败**：请确保设备在校准过程中保持静止且水平。如果校准时间不足，可使用 `--force-calib` 重新校准。


## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>