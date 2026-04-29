---
description: J401 载板的硬件与接口使用
title: 接口使用
tags:
  - J401 载板
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /J401_carrierboard_Hardware_Interfaces_Usage
last_update:
  date: 04/29/2024
  author: Jiahao
createdAt: '2024-05-13'
updatedAt: '2025-09-15'
url: https://wiki.seeedstudio.com/cn/J401_carrierboard_Hardware_Interfaces_Usage/
---
## 介绍

**[reComputer J401 carrier board](https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html)** 支持 **NVIDIA Jetson Orin Nano/NX（[Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**、**[Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)）**，具备卓越的性能，专为轻松应对严苛的边缘计算任务而设计。它是开发工业自动化系统、构建强大 AI 应用等场景的理想选择。

它具备网络功能，配备 1 个用于高速联网的 **千兆以太网接口**。同时还带有 4 个 **USB 3.2 Type-A（10Gbps）接口**、1 个 **USB 2.0 Type-C 接口** 和 1 个 **CAN 接口**，提供多样化的连接选项。该扩展板上焊接有 1 个用于 SSD 的 **M.2 Key M 2280** 插槽（内含 128GB NVMe 2280 SSD），以及 1 个用于 LTE 无线连接扩展的 **M.2 Key E** 插槽。

此外，板上还支持多种外设。它可以通过 2 个 **15-pin MIPI-CSI** 和 1 个 **HDMI 2.1** 接口连接摄像头和显示器，从而实现高质量视频内容的采集与显示。板上还包括一个 **5V PWM 风扇排针**、一个 **RTC 插座** 和一个 **2 针 RTC 排针**。

该板支持 **9-19V DC** 的宽输入范围，便于集成到各种计算任务中。其工作温度范围为 -10°C 至 60°C。

<div align="center"><img width ="1000" src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTE1NA_356376_xs4inuEPMdjVeyj__1679475367?w=1200&h=1335"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

更多配件推荐，请参考 [reComputer J401 套装页面](https://www.seeedstudio.com/reComputer-Classic-Optional-Accessories-NVIDIA-Jetson-Orin-Powered-Edge-AI-Box.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoxLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D)。

## 260 针 SODIMM

260 针 SODIMM 的主要功能是将载板与 **[NVIDIA Jetson Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[NVIDIA Jetson Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**、**[NVIDIA Jetson Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[NVIDIA Jetson Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)** 连接起来。

### 连接概览

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Jetson-connect-J401.gif"/></div>

:::note
如果连接正确，当你接入电源适配器时，你会看到电源指示灯点亮。
:::

## M.2 Key M

M.2 Key M 是一种针对 M.2 连接器的物理和电气布局规范，它通过 PCIe（Peripheral Component Interconnect Express，外设部件高速互连）接口支持高速数据传输。M.2 Key M 连接器通常用于将固态硬盘（SSD）和其他高性能扩展卡连接到主板或其他主机设备。“Key M” 的命名表示 M.2 连接器的特定引脚配置和钥位方式，它决定了可以连接到该接口的设备类型。

### 支持的 SSD 如下

- [128GB NVMe M.2 PCle Gen3x4 2280 内置 SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 内置 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 内置 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 内置 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 内置 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### 连接概览

如果你想拆下随板附带的 SSD 并安装新的 SSD，可以按照下列步骤操作。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-Install-new-ssd.gif"/></div>

### 使用方法

下面将说明如何对已连接的 SSD 进行简单的基准测试。

- **步骤 1：** 通过执行以下命令检查写入速度。

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **步骤 2：** 通过执行以下命令检查读取速度。请确保在执行完上面的写入速度测试命令后再执行此步骤。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## M.2 Key E

M.2 Key E 是一种针对 M.2 连接器的物理和电气布局规范，它支持无线通信模块，例如 Wi-Fi 和蓝牙网卡。“Key E” 的命名表示 M.2 连接器的特定引脚配置和钥位方式，针对无线网络设备进行了优化。M.2 Key E 连接器通常出现在需要无线连接功能的主板和其他设备上。这里我们推荐使用 [Intel wifi/bluetooth](https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Ijg4MjIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjozLCJjX3RvdGFsX3Jlc3VsdHMiOjQsImNfc2VhcmNoX3Jlc3VsdF90eXBlIjoiUHJvZHVjdCIsImNfc2VhcmNoX2ZpbHRlcnMiOiJzdG9yZUNvZGU6W3JldGFpbGVyXSJ9) 模块。

### 连接概览

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-wifi-model.gif"/></div>

### 使用方法

安装好 wifi/bluetooth 模块后，你可以在右上角看到 Wi-Fi/蓝牙图标。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/></div>

#### Wi-Fi 测试

```
ifconfig
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-test.png"/></div>

#### 蓝牙测试

```
bluetoothctl
power on   #open bluetooth
agent on   #registe agent
scan on    #search other bluetooths
connect xx:xx:xx:xx #connect target bluetooth
paired-devices #show all paired devices
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/></div>

## CSI 摄像头

CSI 是 Camera Serial Interface（摄像头串行接口）的缩写。它是一种规范，用于描述将视频数据从图像传感器传输到主处理器的串行通信接口。CSI 常用于移动设备、相机和嵌入式系统中，以实现图像和视频数据的高速、高效传输，便于后续处理和分析。

### 支持的摄像头如下

- IMX219 摄像头

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)

  <!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->

  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)

- IMX477 摄像头

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### 连接概览

这里的 2 个 CSI 摄像头接口被标记为 **CAM0 和 CAM1**。你可以将一个摄像头连接到这两个接口中的任意一个，也可以同时将两个摄像头分别连接到两个接口上。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera-connect-J401.gif"/></div>

### 使用方法

打开终端（Ctrl+Alt+T），并输入如下命令：

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-cameral.gif" /></div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Method 1">

对于 CAM0 接口

```sh
nvgstcapture-1.0 sensor-id=0 
```

对于 CAM1 接口

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
如果你想进一步更改相机的设置，可以输入 **"nvgstcapture-1.0 --help"** 来访问所有可配置选项。
:::
</TabItem>

<TabItem value="Method 2" label="Method 2">

对于 CAM0 端口

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

对于 CAM1 端口

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
如果你想进一步更改相机的设置，可以更新诸如 **width, height, framerate, format** 等参数。
:::
</TabItem>
</Tabs>

## RTC

RTC 代表实时时钟（Real-Time Clock）。它是一种时钟，可以独立于主系统时钟跟踪当前时间和日期。RTC 通常用于计算机、嵌入式系统和其他电子设备中，即使设备断电也能保持精确计时。它们通常由一个小电池供电，以确保持续运行，并在断电期间保留时间和日期信息。

### 连接概览

<Tabs>
<TabItem value="Method 1" label="Method 1">

将一块 **3V CR1220 纽扣电池** 连接到板上的 RTC 插座，如下图所示。确保电池的 **正极 (+)** 朝上。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell-back.gif"/></div>

</TabItem>

<TabItem value="Method 2" label="Method 2">

将一块带 JST 连接器的 **3V CR2302 纽扣电池** 连接到板上的 2 针 1.25mm JST 插座，如下图所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell.gif"/></div>

</TabItem>
</Tabs>

### 使用方法

- **步骤 1：** 按上述说明连接 RTC 电池。

- **步骤 2：** 打开 reComputer Industrial。

- **步骤 3：** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `Settings > Date & Time`，通过以太网线连接到网络，并选择 **Automatic Date & Time** 以自动获取日期/时间。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
如果你没有通过以太网连接到互联网，可以在这里手动设置日期/时间。
:::

- **步骤 4：** 打开一个终端窗口，执行以下命令以检查硬件时钟时间。

```sh
sudo hwclock
```

你会看到类似如下的输出，这并不是正确的日期/时间。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-RTC.png"/></div>

- **步骤 5：** 输入以下命令，将硬件时钟时间更改为当前系统时钟时间。

```sh
sudo hwclock --systohc
```

- **步骤 6：** 拔掉所有连接的以太网线，以确保不会从互联网获取时间，然后重启主板。

```sh
sudo reboot
```

- **步骤 7：** 再次检查硬件时钟时间，以验证即使设备断电，日期/时间也保持不变。

- **步骤 8：** 使用任意你喜欢的文本编辑器创建一个新的 shell 脚本。这里我们使用 **vi** 文本编辑器。

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **步骤 9：** 按下 **i** 进入 **插入模式**，将以下内容复制并粘贴到文件中。

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **步骤 10：** 使脚本变为可执行。

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **步骤 11：** 创建一个 systemd 文件。

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **步骤 12：** 在文件中添加以下内容。

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **步骤 13：** 重新加载 systemctl 守护进程。

```sh
sudo systemctl daemon-reload 
```

- **步骤 14：** 使新创建的服务在开机时自动启动，并启动该服务。

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **步骤 15：** 验证脚本是否已作为 systemd 服务正常运行。

```sh
sudo systemctl status hwtosys.service
```

- **步骤 16：** 重启主板，你会发现系统时钟现在与硬件时钟保持同步。

## 风扇控制

nvfancontrol 是一个用户空间的风扇转速控制守护进程。它根据 nvfancontrol 配置文件中的温度到风扇转速映射表来管理风扇转速。

nvfancontrol 服务中包含一些基本元素，包括 Tmargin、启动 PWM、风扇配置文件、风扇控制和风扇调速器。所有这些都可以通过配置文件根据用户的偏好进行编程。本章将在接下来的章节中逐一进行说明。

:::note
如果你想更改 nvfancontrol.conf，请确保你已经阅读[此文档](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)
:::

### 使用方法

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **步骤 1：** 停止 nvfancontrol systemd 服务。

```
sudo systemctl stop nvfancontrol
```

- **步骤 2：** 修改 nvfancontrol.conf。

```
vi /etc/nvfancontrol.conf 
```

:::note
在你修改完 nvfancontrol.conf 之后，输入 `Ese` 和 `:q` 退出
:::

- **步骤 3：** 删除状态文件。

```
sudo rm /var/lib/nvfancontrol/status
```

- **步骤 4：** 重启 nvfancontrol systemd 服务。

```
sudo systemctl restart nvfancontrol
```

</TabItem>

<TabItem value="Method 2" label="Method 2">

- **步骤 1：**  进入 root 模式。

```
sudo -i
```

- **步骤 2：**  停止 nvfancontrol systemd 服务。

```
sudo systemctl stop nvfancontrol
```

- **步骤 3：**  更改 PWM 值。

```
echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon3/pwm1
```

:::note
数值越大，风扇转速越快。PWM 值应在 0 到 255 之间，**hwmon3** 可能不是你的路径，所以请检查你自己的路径。
:::

- **步骤 4：**  检查转速（rpm）。

```
cat /sys/class/hwmon/hwmon0/rpm
```

</TabItem>
</Tabs>

## GPIO

**40 针排针的详细信息如下所示：**

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>排针引脚</th>
  <th>模块引脚名称</th>
  <th>模块引脚</th>
  <th>SoC 引脚名称</th>
  <th>默认用途</th>
  <th>可选功能</th>
</tr>
</thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>主 3.3V 电源</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>主 5.0V 电源</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>I2C #1 数据</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>主 5.0V 电源</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>I2C #1 时钟</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>地</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td>GPIO09</td>
      <td>211</td>
      <td>AUD_MCLK</td>
      <td>GPIO</td>
      <td>音频主时钟</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>203</td>
      <td>UART1_TX</td>
      <td>UART #1 发送</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>9</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>地</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>UART #1 接收</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>11</td>
      <td>UART1_RTS*</td>
      <td>207</td>
      <td>UART1_RTS</td>
      <td>GPIO</td>
      <td>UART #2 请求发送</td>
    </tr>
    <tr>
      <td>12</td>
      <td>I2S0_SCLK</td>
      <td>199</td>
      <td>DAP5_SCLK</td>
      <td>GPIO</td>
      <td>音频 I2S #0 时钟</td>
    </tr>
    <tr>
      <td>13</td>
      <td>SPI1_SCK</td>
      <td>106</td>
      <td>SPI3_SCK</td>
      <td>GPIO</td>
      <td>SPI #1 移位时钟</td>
    </tr>
    <tr>
      <td>14</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>地</td>
      <td>-</td>
    </tr>
    <tr>
      <td>15</td>
      <td>GPIO12</td>
      <td>218</td>
      <td>TOUCH_CLK</td>
      <td>GPIO</td>
      <td>-</td>
    </tr>
    <tr>
      <td>16</td>
      <td>SPI1_CSI1*</td>
      <td>112</td>
      <td>SPI3_CS1</td>
      <td>GPIO</td>
      <td>SPI #1 片选 #1</td>
    </tr>
    <tr>
      <td>17</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GPIO</td>
      <td>-</td>
    </tr>
    <tr>
      <td>18</td>
      <td>SPI1_CSI0*</td>
      <td>110</td>
      <td>SPI3_CS0</td>
      <td>GPIO</td>
      <td>SPI #0 片选 #0</td>
    </tr>
    <tr>
      <td>19</td>
      <td>SPI0_MOSI</td>
      <td>89</td>
      <td>SPI1_MOSI</td>
      <td>GPIO</td>
      <td>SPI #0 主出/从入</td>
    </tr>
    <tr>
      <td>20</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>地</td>
      <td>-</td>
    </tr>
    <tr>
      <td>21</td>
      <td>SPI0_MISO</td>
      <td>93</td>
      <td>SPI1_MISO</td>
      <td>GPIO</td>
      <td>SPI #0 主入/从出</td>
    </tr>
    <tr>
      <td>22</td>
      <td>SPI1_MISO</td>
      <td>108</td>
      <td>SPI3_MISO</td>
      <td>GPIO</td>
      <td>SPI #1 主入/从出</td>
    </tr>
    <tr>
      <td>23</td>
      <td>SPI0_SCK</td>
      <td>91</td>
      <td>SPI1_SCK</td>
      <td>GPIO</td>
      <td>SPI #0 移位时钟</td>
    </tr>
    <tr>
      <td>24</td>
      <td>SPI0_CS0*</td>
      <td>95</td>
      <td>SPI1_CS0</td>
      <td>GPIO</td>
      <td>SPI #0 片选 #0</td>
    </tr>
    <tr>
      <td>25</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>接地</td>
      <td>-</td>
    </tr>
    <tr>
      <td>26</td>
      <td>SPI0_CS1*</td>
      <td>97</td>
      <td>SPI1_CS1</td>
      <td>GPIO</td>
      <td>SPI #0 片选 #1</td>
    </tr>
    <tr>
      <td>27</td>
      <td>I2C0_SDA</td>
      <td>187</td>
      <td>GEN2_I2C_SDA</td>
      <td>I2C #0 数据</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>28</td>
      <td>I2C0_SCL</td>
      <td>185</td>
      <td>GEN2_I2C_SCL</td>
      <td>I2C #0 时钟</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>29</td>
      <td>GPIO01</td>
      <td>118</td>
      <td>SOC_GPIO41</td>
      <td>GPIO</td>
      <td>通用时钟 #0</td>
    </tr>
    <tr>
      <td>30</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>接地</td>
      <td>-</td>
    </tr>
    <tr>
      <td>31</td>
      <td>GPIO11</td>
      <td>216</td>
      <td>SOC_GPIO42</td>
      <td>GPIO</td>
      <td>通用时钟 #1</td>
    </tr>
    <tr>
      <td>32</td>
      <td>GPIO07</td>
      <td>206</td>
      <td>SOC_GPIO44</td>
      <td>GPIO</td>
      <td>PWM</td>
    </tr>
    <tr>
      <td>33</td>
      <td>GPIO13</td>
      <td>228</td>
      <td>SOC_GPIO54</td>
      <td>GPIO</td>
      <td>PWM</td>
    </tr>
    <tr>
      <td>34</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>接地</td>
      <td>-</td>
    </tr>
    <tr>
      <td>35</td>
      <td>I2S0_FS</td>
      <td>197</td>
      <td>DAP5_FS</td>
      <td>GPIO</td>
      <td>音频 I2S #0 帧选择</td>
    </tr>
    <tr>
      <td>36</td>
      <td>UART1_CTS*</td>
      <td>209</td>
      <td>UART1_CTS</td>
      <td>GPIO</td>
      <td>UART #1 清除发送</td>
    </tr>
    <tr>
      <td>37</td>
      <td>SPI1_MOSI</td>
      <td>104</td>
      <td>SPI3_MOSI</td>
      <td>GPIO</td>
      <td>SPI #1 主出/从入</td>
    </tr>
    <tr>
      <td>38</td>
      <td>I2S0_DIN</td>
      <td>195</td>
      <td>DAP5_DIN</td>
      <td>GPIO</td>
      <td>音频 I2S #0 数据输入</td>
    </tr>
    <tr>
      <td>39</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>接地</td>
      <td>-</td>
    </tr>
    <tr>
      <td>40</td>
      <td>I2S0_DOUT</td>
      <td>193</td>
      <td>DAP5_DOUT</td>
      <td>GPIO</td>
      <td>音频 I2S #0 数据输出</td>
    </tr>
  </tbody>
</table>
</div>

### UART

UART 是通用异步收发器（Universal Asynchronous Receiver/Transmitter）的缩写。它是一种用于两个设备之间串行通信的通信协议。UART 通信涉及两个引脚：一个用于发送数据（TX），一个用于接收数据（RX）。它是异步的，这意味着在设备之间没有共享的时钟信号的情况下传输数据。UART 通常用于各种应用，例如微控制器、传感器以及不同电子设备之间的通信。

#### 连接概览

UART 接口使用下面的引脚，或者你也可以在 J401 上使用另一个 UART 接口：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>排针引脚</th>
      <th>模块引脚名称</th>
      <th>模块引脚</th>
      <th>SoC 引脚名称</th>
      <th>默认用途</th>
      <th>可选功能</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>接地</td>
      <td>-</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>203</td>
      <td>UART1_TX</td>
      <td>UART #1 发送</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>UART #1 接收</td>
      <td>GPIO</td>
    </tr>
  </tbody>
</table>
</div>
将 J401 与 TTL 的 UART 按如下方式连接：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401 排针引脚</th>
      <th> 用途</th>
      <th>USB 转 TTL</th>
      <th>用途</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6</td>
      <td>接地</td>
      <td>GND</td>
      <td>接地</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>U_RX</td>
      <td>UART_RX</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>U_TX</td>
      <td>UART_TX</td>
    </tr>
  </tbody>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-UART-connect.gif"/></div>

#### 用法

- **步骤 1：** 在你的 Windows 笔记本上安装 [PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，并按如下方式设置 PuTTy：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-windows-uart-set.png"/></div>

- **步骤 2：** 在 Jetson 上安装 PuTTy，打开终端（ALT+Ctrl+T）并输入以下命令。

```
sudo apt install putty
```

- **步骤 3：** 在 Windows 上使用 PuTTy 向 Jetson 发送“hello linux”，并在 Jetson 上使用 PuTTy 向 Windows 发送“hello windows”。

:::note
确保你的波特率已设置为 115200。
:::

结果如下所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-uart-result.gif"/></div>

### I2C

I2C 是集成电路间（Inter-Integrated Circuit）的缩写。它是一种广泛使用的串行通信协议，可实现系统中多个集成电路之间的通信。I2C 使用两条双向线路：一条用于数据（SDA），一条用于时钟（SCL）。连接在 I2C 总线上的设备可以充当主设备或从设备，从而允许多个设备彼此通信。I2C 因其简单、灵活以及能够连接各种设备（如传感器、存储芯片和其他外设）而在嵌入式系统和电子设备中非常流行。

#### 连接概览

I2C 接口使用如下引脚，或者你也可以在 J401 上使用其他 I2C 接口：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>排针引脚</th>
      <th>模块引脚名称</th>
      <th>模块引脚</th>
      <th>SoC 引脚名称</th>
      <th>默认用途</th>
      <th>可选功能</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>主 5.0V 供电</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>I2C #1 数据</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>I2C #1 时钟</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>接地</td>
      <td>-</td>
    </tr>
    </table>
</div>

将 J401 通过 I2C 与 [Grove-3-Axis Digital Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html) 按如下方式连接：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401</th>
      <th>用途</th>
      <th>Grove-3-Axis Digital Accelerometer</th>
      <th>用途</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>5V 供电</td>
      <td>Vcc</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>SDA</td>
      <td>I2C_SDA</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>SCL</td>
      <td>I2C_SCL</td>
    </tr>
        <tr>
      <td>6</td>
      <td>接地</td>
      <td>GND</td>
      <td>接地</td>
    </tr>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-connect.gif"/></div>

#### 测试

打开终端（ALT+Ctrl+T）并输入以下命令：

```
i2cdetect -y -r 7
```

:::note
在命令 ```i2cdetect -y -r x``` 中，你的通道可能与我的不同。
:::

你将看到如下结果，在连接 I2C 之前，在通道 7 上未检测到 I2C 设备，但之后检测到一个地址为 0x19 的 I2C 设备。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-test.png"/></div>

:::info
如果你想将通用 IO 引脚用于逻辑控制，请参考[此 wiki](/cn/reComputer_Jetson_GPIO)。
:::


## CAN

reComputer J401 系列提供了一个 CAN 接口，其中 CAN 信号以 TTL/CMOS 电平直接从 SOM 输出，这是非标准的差分信号，需要外部 CAN 收发器才能连接到标准 CAN 总线；它支持 CAN FD 帧格式，允许扩展数据长度和更高的数据速率，适用于工业自动化、机器人、汽车原型开发以及其他需要可靠实时通信的应用。


#### 连接概览

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/can.jpg"/></div>


#### 用法

**步骤 1.** 配置并打开 can0：

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
```

**步骤 2.** 通信测试。打开一个终端接收信号。
```bash
candump can0
```
**步骤 3.** 打开另一个终端发送信号。
```bash
cansend can0 123#abcdabcd
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/can.png"/></div>

#### CAN FD

**步骤 1.** 配置并打开 can0：
```bash
# Install can-utils Tools 
sudo apt update && sudo apt install can-utils -y

# Enable CAN0 interface (FD mode, 5Mbps data segment rate) 
sudo ip link set can0 up type can bitrate 500000 dbitrate 2000000 fd on
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/can_fd1.png"/></div>

**步骤 2.** 打开另一个终端来发送信号。
```bash
cansend can0 123#1122334455667788
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/can_fd2.png"/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
