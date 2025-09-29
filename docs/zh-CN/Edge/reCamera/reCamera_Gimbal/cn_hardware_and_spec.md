---
description: 这是 reCamera 云台的功能、规格、硬件接口和零件清单的概述。
title: 硬件和规格
keywords:
  - Edge
  - AI
  - reCamera
  - reCamera Gimbal
  - blushless motor
  - Hardware overview
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /cn/recamera_gimbal_hardware_and_specs
sidebar_position: 2
last_update:
  date: 03/27/2025
  author: Evelyn Chen
---

# reCamera 云台概述

reCamera 云台 2002 系列是首款开源相机控制系统，配备 1TOPS AI 相机（reCamera）和 2 轴云台。其双无刷电机支持 360° 偏航和 180° 俯仰，实现全覆盖。

## 功能特性

- 硬件和软件完全开源生态系统
  - [开发者门户](https://github.com/Seeed-Studio/OSHW-reCamera-Series?tab=readme-ov-file#recamera-software-development-guide)
- 快速设置和精确运动
  - 支持乐高式组装包
  - 360° 偏航旋转全覆盖和 180° 俯仰范围，从地面到天花板
  - 无刷电机精度：0.01° 步进精度，实现平滑目标跟踪。
- AI 驱动的运动控制
  - 现成的自定义 AI 模型：内置带商业许可证的 YOLO11，支持 Roboflow 和 SenseCraft AI。
  - 智能跟踪：AI 自动调整云台运动。
- 适合所有技能水平的灵活开发
  - 内置 Node-RED，支持云台运动的低代码流程定制。
  - 支持 C++ SDK 进行深度开发。

## 规格参数

### 处理系统

| **参数**          | **值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **AI 性能**     | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **操作系统**   | Linux                                                                     |
| **内存**             | 256 MB                                                                  |
| **视频编码器**      | 5MP @ 30Fps                                                              |

### 基础参数

| **参数**          | **值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **电源供应**       | 12V DC 插头转 XT30 连接器                                             |
| **功耗**  | 12V, 185mA (静态)                                                      |

### 摄像头

| **参数**          | **值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **传感器**             | OV5647                                                                    |
| **分辨率**         | 5M (2592×1944) 像素                                                    |
| **芯片**               | 1/4" CMOS 传感器                                                         |
| **像素尺寸**         | 1.4μm                                                                     |
| **输出格式**      | RAW 10                                                                    |
| **最大帧率**     | 全尺寸：15fps                                                          |
| **光圈**           | F2.8                                                                      |
| **等效焦距** | 3.46mm                                                                 |
| **视场角**      | 65°                                                                      |
| **畸变**         | &lt;1%                                                                      |
| **镜头结构**     | 5P                                                                        |

### 接口

| **参数**          | **值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **USB**                | USB 2.0 Type-C                                                            |
| **无线**           | Wi-Fi 2.4G/5G 蓝牙 4.2/5.0                                          |
| **按钮**             | 1 × 重启按钮，1 × 用户按钮                                        |
| **补光灯**          | 4 × 0.3W 白光                                                      |
| **LED**                | 1 × 电源指示灯，2 × IO 可编程指示灯                        |
| **麦克风**                | 板载麦克风                                                              |
| **扬声器**            | 外置扬声器                                                          |

### 电机规格

| **参数**          | **MS3008**               | **MS3506**          |
|------------------------|--------------------------|---------------------|
| **匝数**              | 54                       | 60                  |
| **额定电压 (V)**  | 12                       | 12                  |
| **最大转速 (rpm)**    | 2000                     | 2100                |
| **额定扭矩 (N·m)** | 0.04                     | 0.05                |
| **额定转速 (rpm)**  | 1160                     | 1250                |
| **额定电流 (A)**  | 0.64                     | 0.79                |
| **最大功率 (W)**      | 4.6                      | 6.4                 |
| **电机极数**        | 14                       | 14                  |
| **工作温度 (℃)** | -25~60            | -25~60              |
| **重量 (g)**         | 49                       | 63                  |
| **驱动输入电压 (V)** | 6~16                | 6~16                |
| **通信**      | CAN                      | CAN                 |
| **通信频率** | CAN@1Mbps:2KHz      | CAN@1Mbps:2KHz      |
| **编码器**            | 15位磁编码器  | 15位磁编码器        |
| **CAN波特率**      | 100K、125K、250K、500K、1M   | 100K、125K、250K、500K、1M    |
| **控制模式**       | 开环(24KHz) / 速度环(4KHz) / 位置环(2KHz)                | 开环(24KHz) / 速度环(4KHz) / 位置环(2KHz)                |

### 云台规格

| **参数**          | **值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **俯仰范围**        | 0～180°                                                                    |
| **偏航范围**          | 0～360°                                                                    |

### 环境条件

| **参数**          | **值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **工作温度** | -20～50 ℃                                                                 |
| **工作湿度**  | 0～90%                                                                    |

### 机械参数

| **参数**          | **值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **尺寸 (宽 × 高 × 深)** | 68×112×71mm                                                              |
| **外壳**          | 聚酰胺 (PA) 尼龙                                                      |
| **重量 (净重)**       | 230g                                                                      |

### 其他

| **参数**          | **值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **保修期**           | 1年                                                                    |

## 硬件概述

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

### 核心板-C101

[**点击下载8GB PCBA文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_8GB_v1.zip)

[**点击下载64GB PCBA文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_64GB_v1.zip)

顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

#### 框图

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/C101_block.png" /></div>

### 传感器板-S101

[**点击下载PCBA文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_OV5647_S101_v1.1.zip)

顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

### 底板-B401

[**点击下载PCBA文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_B401_v1.zip)

顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Top.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Bottom.png" /></div>

#### 框图

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_block.png" /></div>

### 电源供应板

该电源供应板提供稳定电源传输和过压保护的双重功能。它支持12V直流输入，为电机和reCamera系统供电。

**过压保护阈值**：

- 最大跳闸电压：25.66V
- 正常工作电压：25.54V
- 最小安全电压：25.4V

[**点击下载PCBA文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_power_supply_board_v1.zip)

#### 框图

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/power_supply_block.png" /></div>

## 硬件接口

- [指示灯](#jump1)
- [麦克风和扬声器](#jump2)
- [WIFI](#jump3)
- [按钮](#jump4)
- [电机](#jump5)
- [CAN](#jump6)

### <span id="jump1">指示灯</span>

reCamera上有3个指示灯，**红色和蓝色**指示灯是可编程指示灯，**绿色**指示灯是电源指示灯，不可编程。**红色**是CPU状态指示灯，**蓝色**是系统eMMC读取状态指示灯。

**指示灯状态**：

| LED（颜色） | 状态 | 说明 |
| ---- | ---- | ---- |
| LED1 - 绿色 | 亮起 | 电源开启 |
| LED2 - 红色 | 闪烁 | CPU工作中（用户定义） |
| LED3 - 蓝色 | 闪烁 | eMMC读取/写入 |

示例1：使用linux命令将**红色LED**亮度设置为零

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

示例 2：完全关闭**红灯**

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

有四个**白色**灯，它们是摄像头的补光灯。补光灯的开关可以通过以下指令进行控制。

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump2">麦克风和扬声器</span>

recamera 具有麦克风和扬声器。您可以通过以下命令调用麦克风和扬声器。recamera 可以播放 **wav** 格式的音频文件。

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

本地 mp3 音频文件可以通过使用 [在线音频转换](https://www.aconvert.com/audio/) 转换为 wav 文件，以便在 recamera 中播放。
播放器的默认格式为：16位比特率；采样率为 16,000

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Convert_audio_online.png" /></div>

### <span id="jump3">Wi-Fi</span>

2002w 版本的 reCamera 在硬件上具有 Wi-Fi 模块。Wi-Fi 是 AP+STA 双模式，可用于配置设备网络或在 AP 模式下配置设备。

AP 模式下 wifi 的 **SSID** 为：`reCamera_+ MAC 地址的后六位`。

AP 模式下 wifi 的 **密码** 为：`12345678`。

WiFi_AP 的 ssid 和密码可以在 recamera 系统的 `/etc/hostapd_2g4.conf` 文件中配置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCamera STA 配置文件位于 **/etc/wpa_supplicant.conf**，您可以在其中配置要连接的 Wi-Fi 账户和密码。
在 STA 模式下，请连接到 **5G** 频段的 Wi-Fi。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

在终端中，您可以使用以下命令扫描并连接到 Wi-Fi：

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

### <span id="jump4">按钮</span>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

#### 用户按钮

**10 用户按钮**位于 **reCamera Gimbal** Board-B401 上。如果您想要重置设备（例如忘记设备密码），您可以长按用户按钮，然后连接设备电源。当设备的红灯持续亮起而不是闪烁时，松开用户按钮。

如果您想要将设备固件恢复到特定版本，请访问[操作系统版本控制](https://wiki.seeedstudio.com/cn/recamera_os_version_control)。

#### 重启按钮

**11 重启按钮**位于 **reCamera Gimbal** Board-B401 上。按下按钮时，系统将重启。

### <span id="jump5">电机</span>

reCamera Gimbal 中有一个云台脚本，可用于调试和控制云台的电机。
要查看云台脚本的运行情况，请运行以下命令：

```bash
gimbal --help
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

`gimbal` 是一个 bash 脚本，您可以修改以查看和修改脚本来实现您的二次开发需求。脚本位置是：

```bash
cd /usr/bin
cat gimbal
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script_content.png" /></div>

### <span id="jump6">CAN</span>

使用 `ifconfig` 命令查看 **can0** 接口：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_ifconfig.png" /></div>

使用 `cansend can0 can_id#9C.00.00.00.00.00.00.00` 命令发送 can 消息：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_cansend.png" /></div>

使用 `candump can0` 命令接收 can 消息：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_candump.png" /></div>

## 零件清单

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
