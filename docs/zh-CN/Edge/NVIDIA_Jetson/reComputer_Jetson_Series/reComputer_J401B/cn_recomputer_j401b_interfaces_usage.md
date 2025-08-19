---
description: 本维基提供了关于 reComputer J401B 载板硬件接口和功能的全面指南，包括 4G 模块安装、SSD/Wi-Fi 扩展、摄像头连接、GPIO 使用以及风扇控制。
title: J401B 接口使用
tags:
  - J401 载板
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/j401b_interfaces.webp
slug: /cn/recomputer_j401b_interfaces_usage
last_update:
  date: 2025/4/27
  author: Youjiang
---


## 简介


<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/j401b_interfaces.png"/>
</div>

本维基介绍了 reComputer J401B 的各种硬件和接口，以及如何使用它们来扩展您的项目创意。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401B-optional-accessories.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>


## Mini-PCIe

reComputer J401B 配备了一个支持 4G 的 Mini PCIe 接口。

### 支持的 4G 模块

- [LTE Cat 4 EC25-AFXGA](https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html)
- [LTE Cat 4 EC25-EUX](https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html)
- [LTE Cat 4 EC25-AUXGR](https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html)
- [LTE Cat 4 EC25-EFA](https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html)
- [LTE Cat 4 EC25-EMGA](https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html)
- [LTE Cat 4 EC25-JFA](https://www.seeedstudio.com/LTE-Cat-4-EC25-JFA-mini-PCIe-p-5899.html)


### 连接概览

- 第一步：安装 4G 模块
- 第二步：连接天线
- 第三步：插入 SIM 卡

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/q5nV0RqvceU" title="J401B 4G 模块组装" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 使用方法

- 第一步：打开移动宽带，根据 4G SIM 卡的规格配置网络连接。`设置` --> `网络` --> `移动宽带`

- 第二步：打开浏览器测试 4G 网络是否正常工作。

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/IJEvmHhrmbc" title="J401B 4G 网络使用" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## 260 Pin SODIMM

260 Pin SODIMM 的主要功能是将您的载板与 **[NVIDIA Jetson Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[NVIDIA Jetson Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**、**[NVIDIA Jetson Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[NVIDIA Jetson Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)**连接。

### 连接概览

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Jetson-connect-J401.gif"/></div>

:::note
如果连接正确，当您连接电源适配器时，您会看到电源指示灯亮起。
:::

## M.2 Key M

M.2 Key M 是一种用于 M.2 连接器的物理和电气布局规范，支持通过 PCIe（外围组件互连快速通道）接口进行高速数据传输。M.2 Key M 连接器通常用于将固态硬盘（SSD）和其他高性能扩展卡连接到主板或其他主机设备。"Key M" 的名称指的是 M.2 连接器的特定引脚配置和键位，这决定了可以连接到它的设备类型。

### 支持的 SSD 如下：
- [128GB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### 连接概述

如果您想移除已安装的 SSD 并安装一个新的，可以按照以下步骤操作。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-Install-new-ssd.gif"/></div>

### 使用方法

我们将说明如何对已连接的 SSD 进行简单的性能测试。

- **步骤 1：** 通过执行以下命令检查写入速度。

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **步骤 2：** 通过执行以下命令检查读取速度。在执行写入速度测试后再执行此命令。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## M.2 Key E

M.2 Key E 是一种用于 M.2 连接器的物理和电气布局规范，支持无线通信模块，例如 Wi-Fi 和蓝牙卡。"Key E" 的名称指的是 M.2 连接器的特定引脚配置和键位，这种配置针对无线网络设备进行了优化。M.2 Key E 连接器通常出现在需要无线连接选项的主板和其他设备上。这里我们推荐 [Intel Wi-Fi/蓝牙](https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Ijg4MjIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjozLCJjX3RvdGFsX3Jlc3VsdHMiOjQsImNfc2VhcmNoX3Jlc3VsdF90eXBlIjoiUHJvZHVjdCIsImNfc2VhcmNoX2ZpbHRlcnMiOiJzdG9yZUNvZGU6W3JldGFpbGVyXSJ9) 模块。

### 连接概述

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-wifi-model.gif"/></div>

### 使用方法

安装 Wi-Fi/蓝牙模块后，您可以在右上角看到 Wi-Fi/蓝牙图标。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/></div>

#### Wi-Fi 测试

```
ifconfig
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-test.png"/></div>

#### 蓝牙测试

```
bluetoothctl
power on   # 打开蓝牙
agent on   # 注册代理
scan on    # 搜索其他蓝牙设备
connect xx:xx:xx:xx # 连接目标蓝牙设备
paired-devices # 显示所有已配对设备
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/></div>

## CSI 摄像头

CSI 代表摄像头串行接口（Camera Serial Interface）。它是一种规范，用于描述从图像传感器向主处理器传输视频数据的串行通信接口。CSI 常用于移动设备、摄像头和嵌入式系统，以实现图像和视频数据的高速高效传输，用于处理和分析。

### 支持的摄像头如下：

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

### 连接概述

这里的两个 CSI 摄像头连接器标记为 **CAM0 和 CAM1**。您可以将一个摄像头连接到两个连接器中的任意一个，也可以同时将两个摄像头连接到两个连接器。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera-connect-J401.gif"/></div>

### 使用方法
打开终端（Ctrl+Alt+T），并输入以下命令：

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-cameral.gif" /></div>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="方法 1" label="方法 1">


对于 CAM0 端口

```sh
nvgstcapture-1.0 sensor-id=0 
```

对于 CAM1 端口

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
如果您想进一步更改摄像头设置，可以输入 **"nvgstcapture-1.0 --help"** 来访问所有可配置选项。
:::
</TabItem>

<TabItem value="方法 2" label="方法 2">

对于 CAM0 端口

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

对于 CAM1 端口

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
如果您想进一步更改摄像头设置，可以更新参数，例如 **width, height, framerate, format** 等。
:::
</TabItem>
</Tabs>

## RTC

RTC 是实时时钟（Real-Time Clock）的缩写。它是一种独立于主系统时钟的时钟，用于跟踪当前的时间和日期。RTCs 通常用于计算机、嵌入式系统和其他电子设备，即使设备断电也能保持准确的时间记录。它们通常由一个小型电池供电，以确保在断电期间持续运行并保留时间和日期信息。

### 连接概述

<Tabs>
<TabItem value="Method 1" label="方法 1">

将一块 **3V CR1220 纽扣电池** 连接到板上的 RTC 插槽，如下图所示。确保电池的 **正极 (+)** 朝上。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell-back.gif"/></div>

</TabItem>

<TabItem value="Method 2" label="方法 2">

将一块带有 JST 接头的 **3V CR2302 纽扣电池** 连接到板上的 2 针 1.25mm JST 插槽，如下图所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell.gif"/></div>

</TabItem>
</Tabs>

### 使用方法

- **步骤 1：** 按上述方法连接 RTC 电池。

- **步骤 2：** 打开 reComputer Industrial。

- **步骤 3：** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `设置 > 日期和时间`，通过以太网线连接到网络，并选择 **自动日期和时间** 以自动获取日期/时间。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
如果您未通过以太网连接到互联网，可以在此手动设置日期/时间。
:::

- **步骤 4：** 打开终端窗口，执行以下命令检查硬件时钟时间。

```sh
sudo hwclock
```

您将看到类似以下的输出，但这不是正确的日期/时间。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-RTC.png"/></div>

- **步骤 5：** 输入以下命令，将硬件时钟时间更改为当前系统时钟时间。

```sh 
sudo hwclock --systohc
```

- **步骤 6：** 移除任何连接的以太网线，以确保不会从互联网获取时间，然后重启设备。

```sh
sudo reboot
```

- **步骤 7：** 检查硬件时钟时间，验证即使设备断电，日期/时间是否保持不变。

- **步骤 8：** 使用您喜欢的文本编辑器创建一个新的 shell 脚本。这里我们使用 **vi** 文本编辑器。

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **步骤 9：** 按 **i** 进入 **插入模式**，将以下内容复制并粘贴到文件中。

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **步骤 10：** 使脚本可执行。

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

- **步骤 14：** 启用新创建的服务以在启动时运行，并启动该服务。

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **步骤 15：** 验证脚本是否作为 systemd 服务运行。

```sh
sudo systemctl status hwtosys.service
```

- **步骤 16：** 重启设备，您将看到系统时钟现在与硬件时钟同步。

## 风扇控制

nvfancontrol 是一个用户空间的风扇速度控制守护进程。它根据 nvfancontrol 配置文件中的温度到风扇速度映射表来管理风扇速度。

nvfancontrol 服务中包含一些基本元素，包括 Tmargin、启动 PWM、风扇配置文件、风扇控制和风扇调节器。所有这些都可以通过配置文件根据用户的偏好进行编程。本章将在以下部分中解释每个元素。

:::note
如果您想更改 nvfancontrol.conf，请确保您已阅读[此文档](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

### 使用方法

<Tabs>
<TabItem value="Method 1" label="方法 1">

- **步骤 1：** 停止 nvfancontrol 的 systemd 服务。

```
sudo systemctl stop nvfancontrol
```

- **步骤 2：** 修改 nvfancontrol.conf。

```
vi /etc/nvfancontrol.conf 
```
:::note
修改 nvfancontrol.conf 后，按 `Esc` 键并输入 `:q` 退出。
:::

- **步骤 3：** 删除状态文件。

```
sudo rm /var/lib/nvfancontrol/status
```

- **步骤 4：** 重新启动 nvfancontrol 的 systemd 服务。

```
sudo systemctl restart nvfancontrol
```
</TabItem>

<TabItem value="Method 2" label="方法 2">

- **步骤 1：** 进入 root 模式。

```
sudo -i
```

- **步骤 2：** 停止 nvfancontrol 的 systemd 服务。

```
sudo systemctl stop nvfancontrol
```

- **步骤 3：** 修改 PWM 值。

```
echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon3/pwm1
```
:::note
值越大，风扇速度越快。PWM 值应在 0 到 255 之间，可能 **hwmon3** 不是您的路径，请检查您自己的路径。
:::

- **步骤 4：** 检查转速 (rpm)。

```
cat /sys/class/hwmon/hwmon0/rpm
```
</TabItem>
</Tabs>

## GPIO

**40 针接头的详细信息如下：**

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>接头引脚</th>
  <th>模块引脚名称</th>
  <th>模块引脚</th>
  <th>SoC 引脚名称</th>
  <th>默认用途</th>
  <th>备用功能</th>
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
      <td>接地</td>
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
      <td>接地</td>
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
      <td>接地</td>
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
      <td>SPI #1 芯片选择 #1</td>
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
      <td>SPI #0 芯片选择 #0</td>
    </tr>
    <tr>
      <td>19</td>
      <td>SPI0_MOSI</td>
      <td>89</td>
      <td>SPI1_MOSI</td>
      <td>GPIO</td>
      <td>SPI #0 主输出/从输入</td>
    </tr>
    <tr>
      <td>20</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>接地</td>
      <td>-</td>
    </tr>
    <tr>
      <td>21</td>
      <td>SPI0_MISO</td>
      <td>93</td>
      <td>SPI1_MISO</td>
      <td>GPIO</td>
      <td>SPI #0 主输入/从输出</td>
    </tr>
    <tr>
      <td>22</td>
      <td>SPI1_MISO</td>
      <td>108</td>
      <td>SPI3_MISO</td>
      <td>GPIO</td>
      <td>SPI #1 主输入/从输出</td>
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
      <td>SPI #0 芯片选择 #0</td>
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
      <td>SPI #0 芯片选择 #1</td>
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
      <td>音频 I2S #0 字段选择</td>
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
      <td>SPI #1 主输出/从输入</td>
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

UART 代表通用异步收发器（Universal Asynchronous Receiver/Transmitter）。它是一种用于两个设备之间串行通信的通信协议。UART 通信涉及两个引脚：一个用于发送数据（TX），另一个用于接收数据（RX）。它是异步的，这意味着数据传输不需要设备之间共享时钟信号。UART 广泛应用于微控制器、传感器以及不同电子设备之间的通信。

#### 连接概述

UART 接口使用以下引脚，或者您可以在 J401 上使用其他 UART 接口：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>引脚编号</th>
      <th>模块引脚名称</th>
      <th>模块引脚</th>
      <th>SoC 引脚名称</th>
      <th>默认用途</th>
      <th>备用功能</th>
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

将 J401 与 TTL 的 UART 连接如下：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401 引脚编号</th>
      <th>用途</th>
      <th>USB 转换 TTL</th>
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

#### 使用方法

- **步骤 1：** 在您的 Windows 笔记本电脑上安装 [PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，并按以下设置配置 PuTTy：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-windows-uart-set.png"/></div>

- **步骤 2：** 在 Jetson 上安装 PuTTy，打开终端（ALT+Ctrl+T），输入以下命令：

```
sudo apt install putty
```

- **步骤 3：** 使用 Windows 上的 PuTTy 向 Jetson 发送 "hello linux"，并使用 Jetson 上的 PuTTy 向 Windows 发送 "hello windows"。

:::note
确保您的波特率设置为 115200。
:::

结果如下所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-uart-result.gif"/></div>

### I2C

I2C 代表集成电路间通信（Inter-Integrated Circuit）。它是一种广泛使用的串行通信协议，允许系统中多个集成电路之间进行通信。I2C 使用两条双向线路：一条用于数据（SDA），另一条用于时钟（SCL）。连接在 I2C 总线上的设备可以充当主设备或从设备，从而实现多个设备之间的通信。I2C 因其简单性、灵活性以及能够连接各种设备（如传感器、存储芯片和其他外设）而广受欢迎，常用于嵌入式系统和电子设备中。

#### 连接概述

I2C 接口使用以下引脚，或者您可以在 J401 上使用其他 I2C 接口：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>引脚编号</th>
      <th>模块引脚名称</th>
      <th>模块引脚</th>
      <th>SoC 引脚名称</th>
      <th>默认用途</th>
      <th>备用功能</th>
    </tr>
  </thead>
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

将 J401 与 [Grove-3 轴数字加速度计](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html) 通过 I2C 连接如下：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401</th>
      <th>用途</th>
      <th>Grove-3 轴数字加速度计</th>
      <th>用途</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>5V 电源</td>
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

打开终端（ALT+Ctrl+T），输入以下命令：

```
i2cdetect -y -r 7
```

:::note
在命令中，您的通道可能与我的不同：```i2cdetect -y -r x```。
:::

您将看到如下结果：在连接 I2C 之前，通道 7 上未检测到 I2C 设备；连接后，检测到地址为 0x19 的 I2C 设备。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-test.png"/></div>

:::info
如果您想使用通用 IO 引脚进行逻辑控制，请参考[此 wiki](/cn/reComputer_Jetson_GPIO)。
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>