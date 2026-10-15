---
description: 这是关于功能、规格、硬件接口和部件清单的概览。
title: reCamera HQ POE
keywords:
  - Edge
  - reCamera
  - 硬件概览
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /reCamera_hq_poe_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
createdAt: '2024-12-20'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/cn/reCamera_hq_poe_hardware_and_specs/
---

# reCamera HQ POE 概览

reCamera 2002 HQ PoE 配备了先进的 CMOS 传感器，可获得更锐利、更清晰的图像。它采用 M12 镜头卡口——可以灵活地将默认镜头更换为任意兼容的 2MP M12 镜头。同时支持 PoE（以太网供电）：无需单独的 USB/DC 供电，只需一根以太网线连接到 PoE 交换机即可同时传输电源和数据。


## 特性

- 高画质：配备 1/2.9 英寸 GC2053 CMOS 传感器，提供卓越的图像质量。
- M12 镜头卡口：默认 90° 视场角（FOV），可轻松更换为任意标准 M12 镜头。
- 以太网与 PoE（以太网供电）：支持通过单根网线同时传输数据和电源，仅支持 PoE Mode A。
- IO/UART 扩展：6 针排针，提供 1×UART 和 3×GPIO。

## 规格

### 处理系统

| **参数**          | **数值**                                                                 |
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
| 镜头卡口            | M12                                |
| 视场角 FOV                   | 93°                                |
| 以太网              | 100Mbps，支持 PoE                   |
| USB                   | USB Type-C(2.0)                    |
| 尺寸             | 40x40x45.8mm40x40x53.1mm（含镜头） |
| 工作温度 | -20～50°C                          |
| 工作湿度    | 95%                                |


### [核心板-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运 github 说明和图 -->
| 板卡         | 特性                           | 版本 |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLE 模块 <br /> - 板载天线 <br /> - 外接天线连接器| 1.2 |
| C1_2002       | - eMMC <br /> - 额外 SDIO 至底板 <br /> - 额外 UART 至底板 | 1.2 |

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
        <td style={{ fontWeight: 'bold' }}>最佳对焦距离</td>
        <td>50 CM</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>视频</td>
        <td colspan="3">1920 x 1080p @30fps, 1280 x 720p @30fps</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>接口</td>
        <td colspan="3">- 1 x microphone<br />- 1 x speaker<br />- 3 x LED indicator</td>
      </tr>
    </tbody>
  </table>
</div>

### [B3_POE](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Base_Board/B3_POE/readme.md)

上视图             |  下视图
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_top2.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_bottom2.png" /></div>

#### ⚙️ 特性:

- 1 x RJ45 接口，用于 **802.3af PSE**。
- 1 x UART 接口。
- 1 x 调试接口。
- 3 x IO 接口。

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

## 硬件接口

- [指示灯](#jump2)
- [麦克风与扬声器](#jump3)
- [POE](#jump4)
- [IO](#jump5)
- [Uart（调试）](#jump6)
- [用户按键](#jump7)

### <span id="jump2">指示灯</span>

recamera 上有 3 个指示灯，**红灯和蓝灯**为可编程指示灯，**绿灯**为不可编程的电源指示灯。**红灯**是 CPU 的状态指示灯，**蓝灯**是系统 eMMC 的读写状态指示灯。

**指示灯状态说明**：

| LED（颜色） | 状态 | 说明 |
| ---- | ---- | ---- |
| LED1 - 绿色 | 常亮 | 电源接通 |
| LED2 - 红色 | 闪烁 | CPU 工作（用户自定义） |
| LED3 - 蓝色 | 闪烁 | eMMC 读/写中 |

示例 1：使用 linux 命令将**红色 LED**亮度调为 0

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

示例 2：完全关闭**红灯**

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

### <span id="jump3">麦克风与扬声器</span>

recamera 配备了一个麦克风和一个扬声器。你可以通过以下命令调用麦克风和扬声器。recamera 可以播放 **wav** 格式的音频文件。

播放器的默认格式为：16bit 比特率；采样率为 16,000。

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">POE</span>

reCamera HQ POE 版本的硬件中内置了 POE 模块，WiFi 模块已被移除。不过，你可以通过更换为 SG2002w 核心板来恢复 Wi-Fi 功能。

将 reCamera 连接到支持 **POE 802.3af** 协议的交换机，reCamera 设备就会启动。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/poe_connect_recamera.jpg" /></div>

你可以在路由器中查看设备的 IP 地址以访问它，或者通过 USB 连接 reCamera 并进入终端查询有线网络 IP。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/router_search.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/terminal_ipv4_search.png" /></div>

### <span id="jump5">IO</span>

**使用 GPIO sysfs 接口控制 I/O**

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

在 Linux 中，读写 GPIO 最常见的方式是使用 GPIO sysfs 接口。它通过操作 `/sys/class/gpio` 目录下的 `export`、`unexport`、`gpio{N}/direction` 和 `gpio{N}/value`（将 `{N}` 替换为实际引脚号）等文件来实现，并且常用于 shell 脚本中。

reCamera POE 底板提供 3 个可用 IO 端口。每个端口都可以配置为输入或输出。IO 端口编号如下：

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


### <span id="jump6">Uart（调试）</span>

reCamera 的 POE 底板有两组串口，分别为 /ttyS0（用于调试）和 /ttyS3。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-1.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_pinout.png" /></div>

本设备的调试串口波特率为 115200，支持连接到远程监控系统。

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

默认串口启用了回显功能，你可以使用以下命令将其禁用：

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


### <span id="jump7">用户按键</span>

reCamera 的 usr 按键可以由用户自定义。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_user_button.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## 部件清单

| 项目 | 数量 |
|--|--|
| reCamera 2002x HQ PoE | x1 |
| USB Type-C 线缆 | x1 |
| 以太网线缆 | x1 |
| 用户手册 | x1 |
| 6 Pin 线缆 | x1 |


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
