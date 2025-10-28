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
slug: /cn/recamera_hd_poe_hardware
sidebar_position: 2
last_update:
  date: 09/25/2025
  author: Parker Hu
---

# reCamera HQ POE 概述

reCamera 2002 HQ PoE 配备了先进的 CMOS 传感器，可提供更清晰的图像。它具有 M12 镜头接口——可灵活地将默认镜头替换为任何兼容的 2MP M12 镜头。还支持 PoE（以太网供电）：无需单独的 USB/DC 电源，只需一根以太网电缆连接到 PoE 交换机即可实现供电和数据传输。


## 特性

- 高质量：配备 1/2.9 英寸 GC2053 CMOS 传感器，提供卓越的图像质量。
- M12 镜头接口：默认 90° 视场角，可轻松替换为任何标准 M12 镜头。
- 以太网与 PoE（以太网供电）：支持通过单根电缆进行数据和电源传输，仅支持 PoE 模式 A。
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

### 基本参数

| **参数**          | **值**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **电源供应**       | 12V DC 插头转 XT30 连接器                                             |
| **功耗**  | 12V, 185mA（静态）                                                      |


| 传感器                | GC2053                             |
| --------------------- | ---------------------------------- |
| 光学格式        | 1/2.9 英寸                          |
| 分辨率            | 1920x1080                          |
| 最大帧率        | 30fps@全尺寸                    |
| 镜头接口            | M12                                |
| 视场角                   | 93°                                |
| 以太网              | 100Mbps 带 PoE                   |
| USB                   | USB Type-C(2.0)                    |
| 尺寸             | 40x40x45.8mm40x40x53.1mm 带镜头 |
| 工作温度 | -20～50°C                          |
| 工作湿度    | 95%                                |


### [核心板-C101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运 github 说明和图 -->
| 板子         | 特性                           | 版本 |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLE 模块 <br /> - 板载天线 <br /> - 外部天线连接器| 1.2 |
| C1_2002       | - eMMC <br /> - 额外 SDIO 到基板 <br /> - 额外 UART 到基板 | 1.2 |

顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [传感器板-S101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- 搬运 github 说明和图 -->

顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

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

## 硬件接口

- [指示灯](#jump2)
- [麦克风和扬声器](#jump3)
- [WIFI](#jump4)
- [SD 卡](#jump5)
- [Uart（调试）](#jump6)
- [用户按钮](#jump7)

### <span id="jump2">指示灯</span>

reCamera 上有 3 个指示灯，**红色和蓝色**指示灯是可编程指示灯，**绿色**指示灯是电源指示灯，不可编程。**红色**是 CPU 的状态指示灯，**蓝色**是系统 eMMC 的读取状态指示灯。

**指示灯状态**：

| LED（颜色） | 状态 | 说明 |
| ---- | ---- | ---- |
| LED1 - 绿色 | 开启 | 电源开启 |
| LED2 - 红色 | 闪烁 | CPU 工作（用户定义） |
| LED3 - 蓝色 | 闪烁 | eMMC 读取/写入 |

示例 1：使用 Linux 命令将**红色 LED** 亮度设置为零

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

示例 2：完全关闭**红色指示灯**

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

有四个**白色**指示灯，它们是相机的补光灯。补光灯的开关可以通过以下指令控制。

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump3">麦克风和扬声器</span>

reCamera 具有麦克风和扬声器。您可以通过以下命令调用麦克风和扬声器。reCamera 可以播放 **wav** 格式的音频文件。

播放器的默认格式为：16 位比特率；采样率为 16,000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">Wi-Fi</span>

reCamera 的 2002w 版本在硬件上具有 Wi-Fi 模块。Wi-Fi 是 AP+STA 双模式，可用于配置设备网络或在 AP 模式下配置设备。

AP 模式下 WiFi 的 **SSID** 为：`reCamera_+ MAC 地址的后六位`。

AP 模式下 WiFi 的 **密码** 为：`12345678`。

WiFi_AP 的 SSID 和密码可以在 reCamera 系统的 `/etc/hostapd_2g4.conf` 文件中配置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCamera STA 配置文件位于 **/etc/wpa_supplicant.conf**，您可以在其中配置要连接的 Wi-Fi 账户和密码。
在 STA 模式下，请连接到 **5G** 频段的 Wi-Fi。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

在终端中，您可以使用以下命令扫描和连接 Wi-Fi：

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

### <span id="jump5">SD 卡</span>

SD 卡插槽可以扩展 reCamera 的存储空间。插入 SD 卡后，您可以使用 `lsblk` 命令查找您的 SD 卡。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-5.png" /></div>

找到像 mmcblk1p1 这样的存储设备后，您可以使用以下命令将其挂载到系统中。
<br/>

请注意，reCamera 只识别 **ext4** 文件系统。

```bash
sudo blkid /dev/mmcblk1p1 #If TYPE is not ext4, the filesystem needs to be formatted
/dev/mmcblk1p1: UUID="F080-C970" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="04ec0085-01"

sudo mkfs.ext4 /dev/mmcblk1p1 #Format the filesystem to ext4
mkdir /userdata/mmcblk1 #Create a mount file
sudo mount -t ext4 /dev/mmcblk1p1 /userdata/mmcblk1 #Mount the SD card to the /userdata/mmcblk1 path
```

通过 `lsblk` 检查挂载结果

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-6.png" /></div>

### <span id="jump6">Uart（调试）</span>

reCamera 的基础电路板有三个触点 tx、rx 和 gnd，作为 reCamera 的调试串口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-7.png" /></div>

该设备的串口波特率为 115200，可以登录到 reCamera 系统。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-9.png" /></div>

### <span id="jump7">用户按钮</span>

reCamera 的 usr 按钮可以由用户自定义。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-10.png" /></div>

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
