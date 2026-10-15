---
description: 本文是关于功能、规格、硬件接口和部件清单的概览。
title: reCamera 云台
keywords:
  - Edge
  - reCamera
  - 硬件概览
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /recamera_gimbal_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
createdAt: '2024-12-20'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/cn/recamera_gimbal_hardware_and_specs/
---

# reCamera 云台概览

reCamera Gimbal 2002 系列是首款开源相机控制系统，集成 1TOPS AI 相机（reCamera）和 2 轴云台。其双无刷电机可实现 360° 偏航和 180° 俯仰，实现全方位覆盖。

## 特性

- 完全开源的软硬件生态系统
  - [Developer Portal](https://github.com/Seeed-Studio/OSHW-reCamera-Series?tab=readme-ov-file#recamera-software-development-guide)
- 快速部署与精确运动
  - 类乐高组装式套件支持
  - 360° 偏航旋转全覆盖和 180° 俯仰范围，从地面到天花板
  - 无刷电机精度：0.01° 步进精度，实现平滑目标跟踪。
- AI 驱动的运动控制
  - 即用型自定义 AI 模型：内置具备商业授权的 YOLO11，支持 Roboflow 和 SenseCraft AI。
  - 智能跟踪：AI 自动调节云台运动。
- 适用于各技能水平的灵活开发
  - 内置 Node-RED，可对云台运动进行低代码流程自定义。
  - 支持 C++ SDK 以进行更深度开发。

## 规格

### 处理系统

| **参数**              | **数值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **AI 性能**            | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **操作系统**           | Linux                                                                     |
| **内存**               | 256 MB                                                                  |
| **视频编码器**         | 5MP @ 30Fps                                                              |

### 基本参数

| **参数**              | **数值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **电源**               | 12V 直流插孔到 XT30 接插件                                               |
| **功耗**               | 12V，185mA（静态）                                                       |

### 相机

| **参数**              | **数值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **传感器**             | OV5647                                                                    |
| **分辨率**             | 5M (2592×1944) 像素                                                     |
| **芯片**               | 1/4" CMOS 传感器                                                         |
| **像素尺寸**           | 1.4μm                                                                     |
| **输出格式**           | RAW 10                                                                    |
| **最大帧率**           | 全分辨率：15fps                                                           |
| **光圈**               | F2.8                                                                      |
| **等效焦距**           | 3.46mm                                                                 |
| **视场角**             | 65°                                                                      |
| **畸变**               | &lt;1%                                                                      |
| **镜头结构**           | 5P                                                                        |

### 接口

| **参数**              | **数值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **USB**                | USB 2.0 Type-C                                                            |
| **无线**               | Wi-Fi 2.4G/5G Bluetooth 4.2/5.0                                          |
| **按键**               | 1 × 重启按键，1 × 用户按键                                                |
| **补光灯**             | 4 × 0.3W 白光                                                             |
| **LED**                | 1 × 电源指示灯，2 × IO 可编程指示灯                                       |
| **麦克风**             | 板载麦克风                                                                |
| **扬声器**             | 外接扬声器                                                                |

### 电机规格

| **参数**              | **MS3008**               | **MS3506**          |
|------------------------|--------------------------|---------------------|
| **匝数**               | 54                       | 60                  |
| **额定电压 (V)**       | 12                       | 12                  |
| **最大转速 (rpm)**     | 2000                     | 2100                |
| **额定转矩 (N·m)**     | 0.04                     | 0.05                |
| **额定转速 (rpm)**     | 1160                     | 1250                |
| **额定电流 (A)**       | 0.64                     | 0.79                |
| **最大功率 (W)**       | 4.6                      | 6.4                 |
| **电机极数**           | 14                       | 14                  |
| **工作温度 (℃)**       | -25~60                   | -25~60              |
| **重量 (g)**           | 49                       | 63                  |
| **驱动输入电压 (V)**   | 6~16                     | 6~16                |
| **通信方式**           | CAN                      | CAN                 |
| **通信频率**           | CAN@1Mbps:2KHz           | CAN@1Mbps:2KHz      |
| **编码器**             | 15-bit 磁编码器          | 15-bit 磁编码器        |
| **CAN 波特率**         | 100K、125K、250K、500K、1M   | 100K、125K、250K、500K、1M    |
| **控制模式**           | Open Loop(24KHz) / Speed Loop(4KHz) / Position Loop(2KHz)                | Open Loop(24KHz) / Speed Loop(4KHz) / Position Loop(2KHz)                |

### 云台规格

| **参数**              | **数值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **俯仰范围**           | 0～180°                                                                    |
| **偏航范围**           | 0～360°                                                                    |

### 环境条件

| **参数**              | **数值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **工作温度**           | -20～50 ℃                                                                 |
| **工作湿度**           | 0～90%                                                                    |

### 机械参数

| **参数**              | **数值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **尺寸 (W × H × D)**   | 68×112×71mm                                                              |
| **外壳材料**           | 聚酰胺 (PA) 尼龙                                                          |
| **重量（净重）**       | 230g                                                                      |

### 其他

| **参数**              | **数值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **质保**               | 1 年                                                                      |

## 硬件概览

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

### 核心板-C101

[**点击下载 8GB 的 PCBA 文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_8GB_v1.zip)

[**点击下载 64GB 的 PCBA 文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_64GB_v1.zip)

顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

#### 方框图

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/C101_block.png" /></div>

### 传感器板-S101

[**点击下载 PCBA 文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_OV5647_S101_v1.1.zip)

顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

### 底板-B401

[**点击下载 PCBA 文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_B401_v1.zip)

顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Top.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Bottom.png" /></div>

#### 方框图

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_block.png" /></div>

### 电源板

该电源板提供稳定供电和过压保护的双重功能。它支持 12V 直流输入，为电机和 reCamera 系统同时供电。

**过压保护阈值**：

- 最大跳闸电压：25.66V
- 正常工作电压：25.54V
- 最低安全电压：25.4V

[**点击下载 PCBA 文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_power_supply_board_v1.zip)

#### 方框图

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/power_supply_block.png" /></div>

## 硬件接口

- [灯光](#jump1)
- [麦克风和扬声器](#jump2)
- [WIFI](#jump3)
- [按键](#jump4)
- [电机](#jump5)
- [CAN](#jump6)

### <span id="jump1">灯光</span>

recamera 上有 3 个指示灯，**红色和蓝色**灯是可编程指示灯，**绿色**指示灯是电源指示灯，不可编程。**红灯**是 CPU 的状态指示灯，**蓝灯**是系统 eMMC 的读写状态指示灯。

**指示灯状态**：

| LED（颜色） | 状态 | 说明 |
| ---- | ---- | ---- |
| LED1 - 绿色 | 常亮 | 上电 |
| LED2 - 红色 | 闪烁 | CPU 工作（用户自定义） |
| LED3 - 蓝色 | 闪烁 | eMMC 读/写 |

示例 1：使用 Linux 命令将**红色 LED**亮度调为 0

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

示例 2：完全关闭**红灯**

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

有四个**白色**灯，是摄像头的补光灯。补光灯的开关可以通过以下指令进行控制。

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump2">麦克风和扬声器</span>

recamera 配备了一个麦克风和一个扬声器。你可以通过以下命令调用麦克风和扬声器。recamera 可以播放 **wav** 格式的音频文件。

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

本地 mp3 音频文件可以通过使用 [Convert audio online](https://www.aconvert.com/audio/) 转换为 wav 文件后在 recamera 中播放。
播放器的默认格式为：16bit 比特率；采样率为 16,000

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Convert_audio_online.png" /></div>

### <span id="jump3">Wi-Fi</span>

2002w 版本的 reCamera 在硬件上集成了 Wi-Fi 模块。Wi-Fi 为 AP+STA 双模，可用于配置设备网络，或在 AP 模式下对设备进行配置。

AP 模式下 Wi-Fi 的 **SSID** 为：`reCamera_+ the last six bits of MAC`。

AP 模式下 Wi-Fi 的 **Passwd** 为：`12345678`。

WiFi_AP 的 ssid 和 passwd 可以在 recamera 系统的 `/etc/hostapd_2g4.conf` 文件中进行配置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCamera 的 STA 配置文件位于 **/etc/wpa_supplicant.conf**，你可以在其中配置要连接的 Wi-Fi 账号和密码。
在 STA 模式下，请连接 **5G** 频段的 Wi-Fi。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

在终端中，你可以使用以下命令扫描并连接 Wi-Fi：

```bash
wpa_cli -i wlan0 scan                           #Start a scan

wpa_cli -i wlan0 scan_results                   #Returns wifi scan results

wpa_cli add_network                             # Adding a new network,Returns a network ID
wpa_cli set_network ID ssid "your_wifi_name"    # set network SSID
wpa_cli set_network ID psk "your_wifi_password" # set network passwd
wpa_cli enable_network ID                       # enable network and connect
wpa_cli status                                  # Checking connection status
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-4.png" /></div>

### <span id="jump4">按键</span>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

#### 用户按键

**10 用户按键**位于 **reCamera Gimbal** Board-B401 上。如果你想重置设备，例如忘记了设备的密码，可以长按 User 按键，然后给设备上电。当设备的红灯常亮而不是闪烁时，松开 User 按键。

如果你想将设备的固件恢复到特定版本，请访问 [os version control](https://wiki.seeedstudio.com/cn/recamera_os_version_control)。

#### 重启按键

**11 重启按键**位于 **reCamera Gimbal** Board-B401 上。按下该按键时，系统将重启。

### <span id="jump5">电机</span>

reCamera Gimbal 中提供了一个云台脚本，可用于调试和控制云台电机。
要查看云台脚本的运行效果，请执行以下命令：

```bash
gimbal --help
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

`gimbal` 是一个 bash 脚本，你可以查看并修改该脚本，以满足你的二次开发需求。脚本位置为：

```bash
cd /usr/bin
cat gimbal
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script_content.png" /></div>

### <span id="jump6">CAN</span>

使用 `ifconfig` 命令查看 **can0** 接口：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_ifconfig.png" /></div>

使用 `cansend can0 can_id#9C.00.00.00.00.00.00.00` 命令发送 CAN 消息：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_cansend.png" /></div>

使用 `candump can0` 命令接收 CAN 消息：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_candump.png" /></div>

## 物料清单

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
