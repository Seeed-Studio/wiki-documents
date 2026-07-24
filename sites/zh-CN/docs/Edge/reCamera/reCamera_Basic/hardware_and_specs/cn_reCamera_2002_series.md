---
description: 这是对功能、规格、硬件接口和部件清单的概览。
title: reCamera 2002 系列
keywords:
  - 边缘
  - reCamera
  - 硬件概览
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /recamera_2002_series_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
createdAt: '2024-12-20'
updatedAt: '2025-12-05'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/hardware_and_specs/recamera_2002_series_hardware_and_specs
---

# reCamera 概览

reCamera 是一款开源、体积小巧的 AI 相机，可编程且可定制，基于 RISC-V SoC 驱动，在设备端提供 1 TOPS 的 AI 性能，并支持 5MP @30 FPS 的视频编码。模块化硬件设计和可扩展接口为开发者构建视觉 AI 系统提供了最灵活的平台。

## 特性

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/reCamera_3x.png" alt="pir" width={600} height="auto" /></p>

## 规格

<table style={{width: '72.2022%'}}>
    <tbody>
        <tr></tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002 系列</span></strong></p>
            </td>
            <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002</span></strong></p>
            </td>
            <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002w</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                <p><span data-font-family="Montserrat">处理器系统</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">AI 性能</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1TOPS@Int8</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">SOC</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">SG2002</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">CPU</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">C906@1GHz + C906@700MHz</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">MCU</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">8051@8KB SRAM</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">内存</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">256MB</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">视频编码</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">5MP @ 30Fps</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">摄像头传感器</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">OV5647</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                <p><span data-font-family="Montserrat">存储</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">eMMC</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">(version1) 8GB (version2) 64GB</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">扩展</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">可拆卸 TF 卡（最大 2TB，不含）</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                <p><span data-font-family="Montserrat">I/O</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">以太网</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">100Mbps</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">无线</span></p>
            </td>
            <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                <p><span data-font-family="Montserrat">/</span></p>
            </td>
            <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                <p><span data-font-family="Montserrat">WIFI2.4G/5G BT4.2/5.0</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">USB</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">USB Type-C(2.0)</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">按键</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1 个复位按键，1 个启动按键</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">补光灯</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">0.3w 白光</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">状态指示灯</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1 个电源指示灯，2 个 IO 可编程指示灯</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                <p><span data-font-family="Montserrat">音频</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">麦克风</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">板载麦克风</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">扬声器</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">外接扬声器</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">尺寸</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">40x40x36.5mm</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">电源</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="default">5V 1A</span></p>
            </td>
        </tr>
    </tbody>
</table>

## 硬件概览

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

### [核心板-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运 github 说明和图 -->
| 板卡         | 特性                           | 版本 |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - WiFi/BLE 模块 <br /> - 板载天线 <br /> - 外接天线连接器| 1.2 |
| C1_2002       | - eMMC <br /> - 额外 SDIO 至底板 <br /> - 额外 UART 至底板 | 1.2 |

顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [传感器板-S101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- 搬运 github 说明和图 -->

顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

#### ⚙️ 特性

<div>

<table ><tbody>
<tr >
    <td >传感器</td>
    <td class="dbon">OV5647</td>
    <td class="dbon">CMOS 尺寸</td>
    <td class="dbon">1/4"</td>
</tr>
<tr >
    <td class="dbon">像素</td>
    <td class="dbon">5MP</td>
    <td class="dbon">光圈</td>
    <td class="dbon">F2.8</td>
</tr>
<tr >
    <td >焦距</td>
    <td class="dbon">3.46mm</td>
    <td class="dbon">视场角</td>
    <td >65°</td>
</tr>
<tr >
    <td >畸变</td>
    <td >&lt;1%</td>
    <td >图像</td>
    <td >2592 x 1944（静态图片）</td>
</tr>
<tr >
    <td >图像</td>
    <td  colspan="3">2592 x 1944 静态图片分辨率</td>
</tr>
<tr >
    <td >视频</td>
    <td  colspan="3">1920 x 1080p @30fps, 1280 x 720p @60fps, 640 x 480p @60fps, 640 x 480p @90fps</td>
</tr></tbody>
</table>
</div>

- 4 x LED 补光灯
- 1 x 麦克风
- 1 x 扬声器
- 3 x LED 指示灯

### [底板-B101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#base-board)
<!-- 搬运 github 说明和图 -->
顶视图             |  底视图
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Upper.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Bottom.png" /></div>

#### ⚙️ 特性

- 1 x Type-C 接口，用于电源输入和通信。
- 1 x 单端口变压器模块，用于以太网通信支持。
- 1 x SD 卡读卡器，用于数据存储和交换。

## 硬件接口

- [灯光](#jump2)
- [麦克风和扬声器](#jump3)
- [WIFI](#jump4)
- [SD 卡](#jump5)
- [Uart（调试）](#jump6)
- [用户按键](#jump7)

### <span id="jump2">灯光</span>

recamera 上有 3 个指示灯，**红色和蓝色**灯是可编程指示灯，**绿色**指示灯是电源指示灯，不可编程。**红灯**是 CPU 的状态指示灯，**蓝灯**是系统 eMMC 的读写状态指示灯。

**指示灯状态**：

| LED（颜色） | 状态 | 说明 |
| ---- | ---- | ---- |
| LED1 - 绿色 | 亮 | 上电 |
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

有四个**白色**灯，是摄像头的补光灯。补光灯的开关可以通过以下指令控制。

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump3">麦克风和扬声器</span>

recamera 具有一个麦克风和一个扬声器。你可以通过以下命令调用麦克风和扬声器。recamera 可以播放 **wav** 格式的音频文件。

播放器的默认格式为：16bit 比特率；采样率为 16,000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">Wi-Fi</span>

reCamera 2002w 版本在硬件上集成了 Wi-Fi 模块。Wi-Fi 为 AP+STA 双模，可用于配置设备网络或在 AP 模式下配置设备。

AP 模式下 Wi-Fi 的 **SSID** 为：`reCamera_+ MAC 的后六位`。

AP 模式下 Wi-Fi 的 **Passwd** 为：`12345678`。

WiFi_AP 的 ssid 和 passwd 可以在 recamera 系统的 `/etc/hostapd_2g4.conf` 文件中进行配置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCamera 的 STA 配置文件位于 **/etc/wpa_supplicant.conf**，在此配置要连接的 Wi-Fi 账号和密码。
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

### <span id="jump5">SD 卡</span>

SD 卡槽可以扩展 recamera 的存储空间。插入 SD 卡后，你可以使用 `lsblk` 命令查看 SD 卡是否存在。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-5.png" /></div>

当你找到类似 mmcblk1p1 的存储设备后，可以使用以下命令将其挂载到系统中。
<br/>

注意，recamera 只识别 **ext4** 文件系统。

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

recamera 的底板电路上有 tx、rx 和 gnd 三个触点，作为 recamera 的调试串口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-7.png" /></div>

设备的串口波特率为 115200，可用于登录 recamera 系统。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-9.png" /></div>

### <span id="jump7">用户按键</span>

reCamera 的 usr 按键可以由用户自定义。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-10.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## 部件清单

| 项目 | 数量 |
|--|--|
| reCamera 2002 系列 | x1 |
| USB Type-C 线缆 | x1 |
| 以太网线缆 | x1 |

<!-- ## Accessories List -->

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
