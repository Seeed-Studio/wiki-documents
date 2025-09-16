---
description: Hardware and Interfaces Usage for J401 carrier board
title: Interfaces Usage
tags:
  - J401 carrier board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /J401_carrierboard_Hardware_Interfaces_Usage
last_update:
  date: 04/29/2024
  author: Jiahao
---
## Introduction

The **[reComputer J401 carrier board](https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html)** supports **NVIDIA Jetson Orin Nano/NX([Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**, **[Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html))** bringing exceptional performance and being engineered to tackle tough edge computing tasks with ease. It's the perfect choice for developing industrial automation systems, building powerful AI applications, and more.

It features networking capability that is equipped with 1x **Gigabit Ethernet port** for fast networking. It also comes with 4x **USB 3.2 Type-A (10Gbps) ports**, 1x **USB 2.0 Type-C port**, and 1x **CAN connector** for versatile connectivity options. This extension board has been mounted with 1x **M.2 Key M 2280** for SSD card(128GB NVMe 2280 SSD included) and 1x **M.2 Key E** slot for LTE wireless connectivity expansion.

In addition, there are multiple peripherals supported on the board. It can enable users to capture and display high-quality video content with 2x **15-pin MIPI-CSI** and 1x **HDMI 2.1** connector for camera and display connection. There also includes a **5V PWM FAN header**, one **RTC socket** and **2-pin RTC header**.

The board supports a wide input range of **9-19V DC**, making it flexible to integrate into a variety of computing tasks. It maintains operation in the temperature range from -10°C to 60°C.

<div align="center"><img width ="1000" src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTE1NA_356376_xs4inuEPMdjVeyj__1679475367?w=1200&h=1335"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

For more accesorries suggestion, please refer to [Bundle Page of reComputer J401](https://www.seeedstudio.com/reComputer-Classic-Optional-Accessories-NVIDIA-Jetson-Orin-Powered-Edge-AI-Box.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoxLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D).

## 260 Pin SODIMM

The main function of 260 pin SODIMM is to connect your carrier board with **[NVIDIA Jetson Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[NVIDIA Jetson Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**, **[NVIDIA Jetson Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[NVIDIA Jetson Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)**.

### Connection Overview

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Jetson-connect-J401.gif"/></div>

:::note
If the connection is correct, when you connect your power adapter, you will see the power indicator light up.
:::

## M.2 Key M

M.2 Key M is a specification for the physical and electrical layout of an M.2 connector that supports high-speed data transfer using the PCIe (Peripheral Component Interconnect Express) interface. M.2 Key M connectors are commonly used for connecting solid-state drives (SSDs) and other high-performance expansion cards to a motherboard or other host device. The "Key M" designation refers to the specific pin configuration and keying of the M.2 connector, which determines the type of devices that can be connected to it.

### Supported SSD are as follows

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### Connection Overview

If you want to remove the included SSD and install a new one, you can follow the steps below.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-Install-new-ssd.gif"/></div>

### Usage

We will explain how to do a simple benchmark on the connected SSD.

- **Step 1:** Check the write speed by executing the below command.

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **Step 2:** Check the read speed by executing the below commands. Make sure to execute this after executing the above command for write speed.

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## M.2 Key E

M.2 Key E is a specification for the physical and electrical layout of an M.2 connector that supports wireless communication modules, such as Wi-Fi and Bluetooth cards. The "Key E" designation refers to the specific pin configuration and keying of the M.2 connector, which is optimized for wireless networking devices. M.2 Key E connectors are commonly found on motherboards and other devices that require wireless connectivity options.Here we recommand [Intel wifi/bluetooth](https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Ijg4MjIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjozLCJjX3RvdGFsX3Jlc3VsdHMiOjQsImNfc2VhcmNoX3Jlc3VsdF90eXBlIjoiUHJvZHVjdCIsImNfc2VhcmNoX2ZpbHRlcnMiOiJzdG9yZUNvZGU6W3JldGFpbGVyXSJ9) module.

### Connection Overview

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-wifi-model.gif"/></div>

### Usage

After installing wifi/bluetooth module, you can see the wifi/bluetooth icon in the top right corner.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/></div>

#### Wi-Fi test

```
ifconfig
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-test.png"/></div>

#### Bluetooth test

```
bluetoothctl
power on   #open bluetooth
agent on   #registe agent
scan on    #search other bluetooths
connect xx:xx:xx:xx #connect target bluetooth
paired-devices #show all paired devices
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/></div>

## CSI Cameras

CSI stands for Camera Serial Interface. It is a specification that describes a serial communication interface for transferring video data from image sensors to a host processor. CSI is commonly used in mobile devices, cameras, and embedded systems to enable high-speed and efficient transfer of image and video data for processing and analysis.

### Supported cameras are as follows

- IMX219 cameras

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  
  <!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->
  
  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)

- IMX477 cameras

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### Connection Overview

Here the 2 CSI camera connectors are marked as **CAM0 and CAM1**. You can either connect one camera to any connector out of the 2 or connect 2 cameras to both the connectors at the same time.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera-connect-J401.gif"/></div>

### Usage

Open your terminal(Ctrl+Alt+T) and input command like below:

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-cameral.gif" /></div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Method 1">

For CAM0 port

```sh
nvgstcapture-1.0 sensor-id=0 
```

For CAM1 port

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
If you want to change further settings of the camera, you can type **"nvgstcapture-1.0 --help"** to access all the configurable options available.
:::
</TabItem>

<TabItem value="Method 2" label="Method 2">

For CAM0 port

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

For CAM1 port

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
If you want to change further settings of the camera, you can update the arguments such as **width, height, framerate, format**, etc.
:::
</TabItem>
</Tabs>

## RTC

RTC stands for Real-Time Clock. It is a clock that keeps track of the current time and date independently of the main system clock. RTCs are commonly used in computers, embedded systems, and other electronic devices to maintain accurate timekeeping even when the device is powered off. They are often powered by a small battery to ensure continuous operation and retain time and date information during power cycles.

### Connection Overview

<Tabs>
<TabItem value="Method 1" label="Method 1">

Connect a **3V CR1220 coin cell battery** to the RTC socket on the board as shown below. Make sure the **positive (+)** end of the battery is facing upwards.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell-back.gif"/></div>

</TabItem>

<TabItem value="Method 2" label="Method 2">

Connect a **3V CR2302 coin cell battery with JST connector** to the 2-pin 1.25mm JST socket on the board as shown below:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell.gif"/></div>

</TabItem>
</Tabs>

### Usage

- **Step 1:** Connect an RTC battery as mentioned above.

- **Step 2:** Turn on reComputer Industrial.

- **Step 3:** On the Ubuntu Desktop, click the drop-down menu at the top right corner, navigate to `Settings > Date & Time`, connect to a network via an Ethernet cable and select **Automatic Date & Time** to obtain the date/ time automatically.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
If you have not connected to internet via Ethernet, you can manually set the date/time here.
:::

- **Step 4:** Open a terminal window, and execute the below command to check the hardware clock time.

```sh
sudo hwclock
```

You will see the output something like below which is not the correct date/time.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-RTC.png"/></div>

- **Step 5:** Change the hardware clock time to the current system clock time by entering the below command.

```sh
sudo hwclock --systohc
```

- **Step 6:** Remove any Ethernet cables connected to make sure it will not grab the time from the internet and reboot the board.

```sh
sudo reboot
```

- **Step 7:** Check hardware clock time to verify that the date/ time stays the same eventhough the device was powered off.

- **Step 8:** Create a new shell script using any text editor of your preference. Here we use **vi** text editor.

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **Step 9:** Enter **insert mode** by pressing **i**, copy and paste the following content inside the file.

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **Step 10:** Make the script executable.

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **Step 11:** Create a systemd file.

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **Step 12:** Add the following inside the file.

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **Step 13:** Reload systemctl daemon.

```sh
sudo systemctl daemon-reload 
```

- **Step 14:** Enable the newly created service to start on boot and start the service.

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **Step 15:** Verify the script is up and running as a systemd service.

```sh
sudo systemctl status hwtosys.service
```

- **Step 16:** Reboot the board and you will the system clock is now in sync with the hardware clock.

## Fan control

nvfancontrol is a userspace fan speed control daemon. This manages the fan speed based on the temperature-to-fan-speed mapping table in the nvfancontrol configuration file.

There are some basic elements in the nvfancontrol service, including Tmargin, kickstart PWM, fan profile, fan control, and fan governor. All of these can be programmed via the configuration file based on the user’s preferences. This chapter will explain each of them in the following sections.

:::note
If you want to change  nvfancontrol.conf make sure you have read [it](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)
:::

### Usage

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **Step 1:** Stop the nvfancontrol systemd service.

```
sudo systemctl stop nvfancontrol
```

- **Step 2:** Change nvfancontrol.conf.

```
vi /etc/nvfancontrol.conf 
```

:::note
After you change nvfancontrol.conf, print `Ese` and `:q` to quit
:::

- **Step 3:** Remove the status file.

```
sudo rm /var/lib/nvfancontrol/status
```

- **Step 4:** Restart nvfancontrol systemd service.

```
sudo systemctl restart nvfancontrol
```

</TabItem>

<TabItem value="Method 2" label="Method 2">

- **Step 1:**  Enter root model.

```
sudo -i
```

- **Step 2:**  Stop the nvfancontrol systemd service.

```
sudo systemctl stop nvfancontrol
```

- **Step 3:**  Change PWM value.

```
echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon3/pwm1
```

:::note
The larger of value, the faster of fan speed. PWM value should between 0 to 255, maybe **hwmon3** is not your pathword so check your own pathword
:::

- **Step 4:**  Check rpm.

```
cat /sys/class/hwmon/hwmon0/rpm
```

</TabItem>
</Tabs>

## GPIO

**The detail of 40-pin header is shown below:**

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>Header Pin</th>
  <th>Module Pin Name</th>
  <th>Module Pin</th>
  <th>SoC Pin name</th>
  <th>Default Usage</th>
  <th>Alternate Functionality</th>
</tr>
</thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Main 3.3V Supply</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Main 5.0V Supply</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>I2C #1 Data</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Main 5.0V Supply</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>I2C #1 Clock</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Ground</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td>GPIO09</td>
      <td>211</td>
      <td>AUD_MCLK</td>
      <td>GPIO</td>
      <td>Audio Master Clock</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>203</td>
      <td>UART1_TX</td>
      <td>UART #1 Transmit</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>9</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Ground</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>UART #1 Receive</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>11</td>
      <td>UART1_RTS*</td>
      <td>207</td>
      <td>UART1_RTS</td>
      <td>GPIO</td>
      <td>UART #2 Request to Send</td>
    </tr>
    <tr>
      <td>12</td>
      <td>I2S0_SCLK</td>
      <td>199</td>
      <td>DAP5_SCLK</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Clock</td>
    </tr>
    <tr>
      <td>13</td>
      <td>SPI1_SCK</td>
      <td>106</td>
      <td>SPI3_SCK</td>
      <td>GPIO</td>
      <td>SPI #1 Shift Clock</td>
    </tr>
    <tr>
      <td>14</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Ground</td>
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
      <td>SPI #1 Chip Select #1</td>
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
      <td>SPI #0 Chip Select #0</td>
    </tr>
    <tr>
      <td>19</td>
      <td>SPI0_MOSI</td>
      <td>89</td>
      <td>SPI1_MOSI</td>
      <td>GPIO</td>
      <td>SPI #0 Master Out/Slave In</td>
    </tr>
    <tr>
      <td>20</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Ground</td>
      <td>-</td>
    </tr>
    <tr>
      <td>21</td>
      <td>SPI0_MISO</td>
      <td>93</td>
      <td>SPI1_MISO</td>
      <td>GPIO</td>
      <td>SPI #0 Master In/Slave Out</td>
    </tr>
    <tr>
      <td>22</td>
      <td>SPI1_MISO</td>
      <td>108</td>
      <td>SPI3_MISO</td>
      <td>GPIO</td>
      <td>SPI #1 Master In/Slave Out</td>
    </tr>
    <tr>
      <td>23</td>
      <td>SPI0_SCK</td>
      <td>91</td>
      <td>SPI1_SCK</td>
      <td>GPIO</td>
      <td>SPI #0 Shift Clock</td>
    </tr>
    <tr>
      <td>24</td>
      <td>SPI0_CS0*</td>
      <td>95</td>
      <td>SPI1_CS0</td>
      <td>GPIO</td>
      <td>SPI #0 Chip Select #0</td>
    </tr>
    <tr>
      <td>25</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Ground</td>
      <td>-</td>
    </tr>
    <tr>
      <td>26</td>
      <td>SPI0_CS1*</td>
      <td>97</td>
      <td>SPI1_CS1</td>
      <td>GPIO</td>
      <td>SPI #0 Chip Select #1</td>
    </tr>
    <tr>
      <td>27</td>
      <td>I2C0_SDA</td>
      <td>187</td>
      <td>GEN2_I2C_SDA</td>
      <td>I2C #0 Data</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>28</td>
      <td>I2C0_SCL</td>
      <td>185</td>
      <td>GEN2_I2C_SCL</td>
      <td>I2C #0 Clock</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>29</td>
      <td>GPIO01</td>
      <td>118</td>
      <td>SOC_GPIO41</td>
      <td>GPIO</td>
      <td>General Purpose Clock #0</td>
    </tr>
    <tr>
      <td>30</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Ground</td>
      <td>-</td>
    </tr>
    <tr>
      <td>31</td>
      <td>GPIO11</td>
      <td>216</td>
      <td>SOC_GPIO42</td>
      <td>GPIO</td>
      <td>General Purpose Clock #1</td>
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
      <td>Ground</td>
      <td>-</td>
    </tr>
    <tr>
      <td>35</td>
      <td>I2S0_FS</td>
      <td>197</td>
      <td>DAP5_FS</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Field Select</td>
    </tr>
    <tr>
      <td>36</td>
      <td>UART1_CTS*</td>
      <td>209</td>
      <td>UART1_CTS</td>
      <td>GPIO</td>
      <td>UART #1 Clear to Send</td>
    </tr>
    <tr>
      <td>37</td>
      <td>SPI1_MOSI</td>
      <td>104</td>
      <td>SPI3_MOSI</td>
      <td>GPIO</td>
      <td>SPI #1 Master Out/Slave In</td>
    </tr>
    <tr>
      <td>38</td>
      <td>I2S0_DIN</td>
      <td>195</td>
      <td>DAP5_DIN</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Data in</td>
    </tr>
    <tr>
      <td>39</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Ground</td>
      <td>-</td>
    </tr>
    <tr>
      <td>40</td>
      <td>I2S0_DOUT</td>
      <td>193</td>
      <td>DAP5_DOUT</td>
      <td>GPIO</td>
      <td>Audio I2S #0 Data Out</td>
    </tr>
  </tbody>
</table>
</div>

### UART

UART stands for Universal Asynchronous Receiver/Transmitter. It is a communication protocol used for serial communication between two devices. UART communication involves two pins: one for transmitting data (TX) and one for receiving data (RX). It is asynchronous, meaning that data is transmitted without a shared clock signal between the devices. UART is commonly used in various applications such as microcontrollers, sensors, and communication between different electronic devices.

#### Connection Overview

The UART interface is using the pin below, or you can use another UART interface on J401:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Header Pin</th>
      <th>Module Pin Name</th>
      <th>Module Pin</th>
      <th>SoC Pin name</th>
      <th>Default Usage</th>
      <th>Alternate Funcationality</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Ground</td>
      <td>-</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>203</td>
      <td>UART1_TX</td>
      <td>UART #1 Transmit</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>UART #1 Receive</td>
      <td>GPIO</td>
    </tr>
  </tbody>
</table>
</div>
Connect the J401 with TTL with UART as below:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401 Header Pin</th>
      <th> Usage</th>
      <th>USB translate TTL</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6</td>
      <td>Ground</td>
      <td>GND</td>
      <td>Ground</td>
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

#### Usage

- **Step 1:** Install [PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) on your windows laptop, and set PuTTy as below:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-windows-uart-set.png"/></div>

- **Step 2:** Install PuTTy on Jetson, open your terminal(ALT+Ctrl+T) and type the following command.

```
sudo apt install putty
```

- **Step 3:** Use PuTTy on Windows send 'hello linux' to Jetson, and use PuTTy on Jetson send 'hello windows' to windwos.

:::note
Make sure your baudrate have be set 115200.
:::

The result is as below:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-uart-result.gif"/></div>

### I2C

I2C stands for Inter-Integrated Circuit. It is a widely used serial communication protocol that enables communication between multiple integrated circuits in a system. I2C uses two bidirectional lines: one for data (SDA) and one for clock (SCL). Devices connected on an I2C bus can act as either a master or a slave, allowing for multiple devices to communicate with each other. I2C is popular for its simplicity, flexibility, and ability to connect a variety of devices such as sensors, memory chips, and other peripherals in embedded systems and electronic devices.

#### Connection Overview

The I2C interface is using pin as below, or you can use other I2C interface on J401:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Header Pin</th>
      <th>Module Pin Name</th>
      <th>Module Pin</th>
      <th>SoC Pin name</th>
      <th>Default Usage</th>
      <th>Alternate Funcationality</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Main 5.0V Supply</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>I2C #1 Data</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>I2C #1 Clock</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>Ground</td>
      <td>-</td>
    </tr>
    </table>
</div>

Connect the J401 to [Grove-3-Axis Digital Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html) with I2C as below:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401</th>
      <th>Usage</th>
      <th>Grove-3-Axis Digital Accelerometer</th>
      <th>Usage</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>5V supply</td>
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
      <td>Ground</td>
      <td>GND</td>
      <td>Ground</td>
    </tr>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-connect.gif"/></div>

#### Test

Open your terminal(ALT+Ctrl+T) and type the following command:

```
i2cdetect -y -r 7
```

:::note
Your channel may be different from mine in the commmand: ```i2cdetect -y -r x```.
:::

You will see the result as below, before connecting to the I2C, no I2C device was detected on channel 7, but afterwards an I2C device with the address 0x19 was detected.:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-test.png"/></div>

:::info
If you want to use general IO pins for logic control, please refer to [this wiki](/reComputer_Jetson_GPIO).
:::

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
