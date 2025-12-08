---
description: 这是功能、规格、硬件接口和零件清单的概述。
title: 硬件和规格
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /cn/recamera_hq_poe_hardware
sidebar_position: 2
last_update:
  date: 09/25/2025
  author: Parker Hu
---

# reCamera HQ POE 概述

reCamera 2002 HQ PoE 配备了先进的 CMOS 传感器，可提供更清晰的图像。它具有 M12 镜头接口——可灵活地将默认镜头替换为任何兼容的 2MP M12 镜头。还支持 PoE（以太网供电）：无需单独的 USB/DC 电源，只需一根以太网线连接到 PoE 交换机即可实现供电和数据传输。


## 特性

- 高质量：配备 1/2.9 英寸 GC2053 CMOS 传感器，提供卓越的图像质量。
- M12 镜头接口：默认 90° 视场角，可轻松替换为任何标准 M12 镜头。
- 以太网与 PoE（以太网供电）：支持通过单根电缆传输数据和电源，仅支持 PoE Mode A。
- IO/UART 扩展：6 针接头，包含 1×UART 和 3×GPIO。

## 规格

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



| 传感器                | GC2053                             |
| --------------------- | ---------------------------------- |
| 光学格式        | 1/2.9inch                          |
| 分辨率            | 1920x1080                          |
| 最大帧率        | 30fps@full size                    |
| 镜头接口            | M12                                |
| 视场角                   | 93°                                |
| 以太网              | 100Mbps with PoE                   |
| USB                   | USB Type-C(2.0)                    |
| 尺寸             | 40x40x45.8mm40x40x53.1mm with lens |
| 工作温度 | -20～50°C                          |
| 工作湿度    | 95%                                |


### [核心板-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运 github 说明和图 -->
| 板子         | 特性                           | 版本 |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLE 模块 <br /> - 板载天线 <br /> - 外部天线连接器| 1.2 |
| C1_2002       | - eMMC <br /> - 额外的 SDIO 到基板 <br /> - 额外的 UART 到基板 | 1.2 |

顶视图             |  底视图
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [传感器板-S4_GC2053](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)


顶视图             |  底视图
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_top2.png" /></div> |<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_bottom2.png" /></div>

#### ⚙️ 特性

<div>
  <table>
    <tbody>
      <tr>
        <td style={{ fontWeight: 'bold' }}>传感器</td>
        <td className="dbon">GC2053</td>
        <td style={{ fontWeight: 'bold' }}>CMOS 尺寸</td>
        <td className="dbon">1/2.9"</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>像素</td>
        <td className="dbon">2MP</td>
        <td style={{ fontWeight: 'bold' }}>光圈</td>
        <td className="dbon">F2.8</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>焦距</td>
        <td className="dbon">2.9mm ±0.5%</td>
        <td style={{ fontWeight: 'bold' }}>视场角</td>
        <td>DFOV 93°   HFOV 84°  VFOV 54°</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>畸变</td>
        <td>0.5 %</td>
        <td style={{ fontWeight: 'bold' }}>相对照度</td>
        <td>30% ± 5%</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>对焦范围</td>
        <td>39~69.5 CM </td>
        <td style={{ fontWeight: 'bold' }}>对焦高度</td>
        <td>50 CM</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>视频</td>
        <td colspan="3">1920 x 1080p @30fps, 1280 x 720p @30fps</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>接口</td>
        <td colspan="3">- 1 x 麦克风<br />- 1 x 扬声器<br />- 3 x LED 指示灯</td>
      </tr>
    </tbody>
  </table>
</div>

### [B3_POE](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Base_Board/B3_POE/readme.md)

顶部             |  底部
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_top2.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_bottom2.png" /></div>

#### ⚙️ 特性：

- 1 x RJ45 端口，支持 **802.3af PSE**。
- 1 x UART 端口。
- 1 x Debug 端口。
- 3 x IO 端口。

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

## 硬件接口

- [指示灯](#jump2)
- [麦克风和扬声器](#jump3)
- [POE](#jump4)
- [IO](#jump5)
- [Uart (Debug)](#jump6)
- [用户按钮](#jump7)

### <span id="jump2">指示灯</span>

reCamera 上有 3 个指示灯，**红色和蓝色**指示灯是可编程指示灯，**绿色**指示灯是电源指示灯，不可编程。**红色**是 CPU 的状态指示灯，**蓝色**是系统 eMMC 的读取状态指示灯。

**指示灯状态**：

| LED（颜色） | 状态 | 说明 |
| ---- | ---- | ---- |
| LED1 - 绿色 | 常亮 | 电源开启 |
| LED2 - 红色 | 闪烁 | CPU 工作中（用户定义） |
| LED3 - 蓝色 | 闪烁 | eMMC 读取/写入 |

示例 1：使用 Linux 命令将**红色 LED** 亮度设置为零

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

示例 2：完全关闭**红色指示灯**

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

### <span id="jump3">麦克风和扬声器</span>

reCamera 具有麦克风和扬声器。您可以通过以下命令调用麦克风和扬声器。reCamera 可以播放 **wav** 格式的音频文件。

播放器的默认格式为：16 位比特率；采样率为 16,000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">POE</span>

POE 模块内置于 reCamera HQ POE 版本的硬件中。WiFi 模块已被移除。但是，您可以通过更换 SG2002w 的核心板来恢复 Wi-Fi 功能。

将 reCamera 连接到支持 **POE 802.3af** 协议的交换机，reCamera 设备将启动。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/poe_connect_recamera.jpg" /></div>

您可以在路由器中查看设备的 IP 地址来访问它，或者通过 USB 连接 reCamera 并访问终端来查询有线网络 IP。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/router_search.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/terminal_ipv4_search.png" /></div>

### <span id="jump5">IO</span>

**使用 GPIO sysfs 接口控制 I/O**

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

在 Linux 中，读写 GPIO 最常见的方法是使用 GPIO sysfs 接口。这是通过操作 `/sys/class/gpio` 目录下的 `export`、`unexport`、`gpio{N}/direction` 和 `gpio{N}/value`（将 `{N}` 替换为实际引脚号）等文件来实现的，通常用于 shell 脚本中。

reCamera POE 底板有 3 个可用的 IO 端口。每个端口都可以配置为输入或输出。IO 端口编号如下：

| IO 端口 | GPIO 编号 |
| ---- | ---- |
| D1 | 490 |
| CLK（复用 IO 引脚） | 487 |
| SMD（复用 IO 引脚） | 488 |


```bash
echo "490" > /sys/class/gpio/export #Enable pin GPIO490

echo "out" > /sys/class/gpio/gpio490/direction #Enable the output mode
echo 1 > /sys/class/gpio/gpio490/value # Set the pin to a high level
echo 0 > /sys/class/gpio/gpio490/value # Set the pin to a low level

echo "in" > /sys/class/gpio/gpio490/direction #Enable the input mode
cat /sys/class/gpio/gpio490/value #Read the pin level

echo "490" > /sys/class/gpio/unexport #Disable pin GPIO490
```


### <span id="jump6">Uart (Debug)</span>

reCamera 的 POE 底板有两组串口，分别是 /ttyS0（用于 Debug）和 /ttyS3。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-1.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_pinout.png" /></div>

该设备的调试串口波特率为 115200，支持连接到远程监控系统。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

```bash
#Use the stty tool to query its communication parameters.

stty -F /dev/ttyS3
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-2.png" /></div>

```bash
# Modify the serial port baud rate, where ispeed refers to the input speed and ospeed refers to the output speed.

stty -F /dev/ttyS3 ispeed 115200 ospeed 115200
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-3.png" /></div>

默认串口启用了回显功能，您可以使用以下命令禁用它：

```bash
stty -F /dev/ttyS3 -echo
```

串口通信：

```bash
#Send data
echo "hello world" > /dev/ttyS3
echo Hello! > /dev/ttyS3
#Receive data
cat /dev/ttyS3
```

使用 minicom 工具通过串口进行通信：

```bash
minicom -D /dev/ttyS3 -b 115200
```


### <span id="jump7">用户按钮</span>

reCamera 的用户按钮可以由用户自定义。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_user_button.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## 配件清单

| 物品 | 数量 |
|--|--|
| reCamera 2002x HQ PoE | x1 |
| USB Type-C 线缆 | x1 |
| 以太网线缆 | x1 |
| 用户手册 | x1 |
| 6 针线缆 | x1 |


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
