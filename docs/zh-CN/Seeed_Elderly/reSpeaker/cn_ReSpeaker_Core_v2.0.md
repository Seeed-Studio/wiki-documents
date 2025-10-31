---
description: ReSpeaker Core v2.0
title: ReSpeaker Core v2.0
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_Core_v2.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---
![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_front.JPG)

Seeed 的 ReSpeaker Core v2.0 专为语音接口应用而设计。它基于瑞芯微 RK3229，这是一个四核 ARM Cortex A7 处理器，运行频率高达 1.5GHz，配备 1GB RAM。该开发板具有六麦克风阵列，集成了语音算法，包括 DoA（到达方向）、BF（波束成形）、AEC（声学回声消除）等。

ReSpeaker Core v2.0 运行 GNU/Linux 操作系统。它受益于强大而活跃的社区，允许使用现有的软件和工具进行开发、测试和部署，从而实现快速产品开发。

ReSpeaker Core v2.0 设计为功能丰富的开发板，供企业评估使用。为此，该开发板由两个主要部分组成，第一部分是中心核心模块，包含 CPU、内存（RAM）和 PMU。第二部分是外围载板，包含外设，如 eMMC、连接器和无线连接组件。通过 Seeed 的定制服务，可以对任一部分或两个部分进行定制。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07DN43Q7L" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## 特性

- 高性能 SoC 的一体化解决方案
- 1GB RAM 和 4GB eMMC
- 6 麦克风阵列  
- USB OTG、USB 设备
- WiFi b/g/n 和 BLE 4.0
- 检测范围：约 5 米
- Grove 接口用于连接其他传感器
- 3.5mm 音频插孔和 JST2.0 连接器
- 8 通道 ADC，用于 6 麦克风阵列和 2 环回（硬件环回）

- 基于 Debian 的 Linux 系统
- C++ SDK 和 Python 封装
- 语音算法 SDK 及完整文档
- 语音算法和功能：

  - 关键词唤醒
  - BF（波束成形）
  - DoA（到达方向）
  - NS（噪声抑制）
  - AEC（声学回声消除）和 AGC（自动增益控制）

## 规格参数

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
.tg .tg-dc35{background-color:#f9f9f9;border-color:inherit;vertical-align:top}
.tg .tg-l711{border-color:inherit}
.tg .tg-us36{border-color:inherit;vertical-align:top}
.tg .tg-4646{background-color:#f9f9f9;border-color:inherit}
.tg .tg-gcw3{border-color:#000000}
</style> -->

<table className="tg">
  <tbody><tr>
      <th className="tg-gcw3" colSpan={3}>特性</th>
    </tr>
    <tr>
      <td className="tg-4646" rowSpan={6}>Soc（瑞芯微 RK3229）</td>
      <td className="tg-4646">CPU</td>
      <td className="tg-4646">四核 Cortex-A7，最高 1.5GHz</td>
    </tr>
    <tr>
      <td className="tg-l711">GPU</td>
      <td className="tg-l711">Mali400MP，支持 OpenGL ES1.1/2.0</td>
    </tr>
    <tr>
      <td className="tg-dc35">内存</td>
      <td className="tg-dc35">1GB RAM（核心模块包含 RAM 和 PMU）</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={3}>系统</td>
      <td className="tg-us36">工作电压：3.6-5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">模块上 80 引脚</td>
    </tr>
    <tr>
      <td className="tg-us36">模块上 PMU</td>
    </tr>
    <tr>
      <td className="tg-dc35" rowSpan={7}>外设</td>
      <td className="tg-dc35">网络</td>
      <td className="tg-dc35">WiFi b/g/n；<br />BLE 4.0；<br />以太网</td>
    </tr>
    <tr>
      <td className="tg-us36">USB</td>
      <td className="tg-us36">2 x USB Host；   1 x USB OTG；    1 x USB 电源</td>
    </tr>
    <tr>
      <td className="tg-dc35">Grove</td>
      <td className="tg-dc35">1 x Grove 接口（I2C 和数字）</td>
    </tr>
    <tr>
      <td className="tg-us36">视频</td>
      <td className="tg-us36">4K VP9 和 4K 10bits H265/H264 视频解码，最高 60fps</td>
    </tr>
    <tr>
      <td className="tg-dc35">音频</td>
      <td className="tg-dc35">最大采样率：96Khz；<br />6 麦克风阵列；<br />3.5mm 音频插孔；<br />JST2.0 音频输出连接器</td>
    </tr>
    <tr>
      <td className="tg-us36">存储</td>
      <td className="tg-us36">板载 4GB eMMC；<br />SD 卡槽</td>
    </tr>
    <tr>
      <td className="tg-dc35">其他</td>
      <td className="tg-dc35">12 x RGB LED；<br />8 GPIO 引脚</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={2}>功耗</td>
      <td className="tg-us36">待机模式</td>
      <td className="tg-us36">200mA /5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">算法工作模式</td>
      <td className="tg-dc35">330mA /5V</td>
    </tr>
  </tbody></table>

:::note
​    此表格仅列出了ReSpeaker Core v2.0的基本规格，更多专业参数请参考[ReSpeaker Core v2.0声学和电气规格](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)。
:::

## 硬件概述

**接口和存储**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> 3.5mm耳机插孔：**
音频输出。您可以将有源扬声器或耳机插入此端口。

- **<font face="" size="3" font color="ff0000">②</font> USB OTG：**
此USB端口用于通过putty（或其他串口工具）的串口模式连接到您的计算机。

- **<font face="" size="3" font color="ff0000">③</font> USB电源输入：**
此端口用于为Respeaker Core v2.0提供电源。

- **<font face="" size="3" font color="ff0000">④</font>扬声器插孔：**
为无源扬声器输出音频。Jst 2.0插座。

- **<font face="" size="3" font color="ff0000">⑤</font> UART：**
您也可以通过此UART端口将ReSpeaker Core v2.0与您的计算机连接。

- **<font face="" size="3" font color="ff0000">⑥</font> 8引脚GPIO：**
用于扩展应用的通用输入输出接口。

- **<font face="" size="3" font color="ff0000">⑦</font> SD卡插槽：**
用于插入micro-SD卡。

- **<font face="" size="3" font color="ff0000">⑧</font> eMMC：**
嵌入式多媒体卡。您可以将镜像烧录到eMMC中，这样ReSpeaker Core v2.0就可以从eMMC启动。

- **<font face="" size="3" font color="ff0000">⑨</font> USB主机：**
您可以通过这两个USB主机端口将USB设备（如USB鼠标、USB键盘和USB闪存盘）插入ReSpeaker Core v2.0。

- **<font face="" size="4" font color="ff0000">Ⓐ</font> 以太网：**
接入互联网。

- **<font face="" size="4" font color="ff0000">Ⓑ</font> HDMI：**
视频输出。

- **<font face="" size="4" font color="ff0000">Ⓒ</font> 蓝牙和WIFI天线：**
板载天线用于WIFI和蓝牙。我们还提供了2.4G天线或PCB天线的接口。

- **<font face="" size="4" font color="ff0000">Ⓓ</font> Grove插座：**
用于数字或I2C的Grove插座。

**系统图**

您可以点击查看原始图像

<a href="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png"/></a>

**引脚定义**

**接头的引脚索引定义**

| 8引脚接头 | Grove插座 |
|--------------|-------------|
| ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/GPIO.png)|![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/socketBLACK.png)|

**GPIO 引脚**

MRAA| HEADER PIN INDEX | SYSFS PIN |RK3229 PIN
--|--|--|--
0 |0| 1091| GPIO2_D3
1 |1|   --| VCC
2 |2| 1043| GPIO1_B3
3 |3| 1127| GPIO3_D7
4 |4| 1017| GPIO0_C1
5 |5| 1067| GPIO2_A3
6 |6|   --| GND
7 |7| 1013| GPIO0_B5
8 |8| 1085| GPIO2_C5
9 |9| 1084| GPIO2_C4
10|10| --| VCC
11|11| --| GND

**I2C 引脚**

|MRAA |HEADER PIN INDEX |SYSFS PIN| RK3229 PIN|
|--|--|--|--|
|0 |8 |-- |I2C2_SCL|
|0 |9 |-- |I2C2_SDA|

**尺寸**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_2.png)

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_1.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=10325e7b-718b-477f-80d1-c85f5c2289c7" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## 应用

- 智能音箱
- 智能语音助手系统
- 录音设备
- 语音会议系统
- 会议通讯设备
- 语音交互机器人
- 车载语音助手
- 其他需要语音命令的场景

## 入门指南

### 准备工作

本部分将告诉您：

- 如何安装镜像
- 如何访问串口控制台
- 如何设置WiFi
- 如何连接SSH和VNC
- 如何设置蓝牙
- 音频录制和播放测试

**前提条件**

- ReSpeaker Core V2.0
- Wi-Fi 网络
- 4GB（或更大）SD卡和SD卡读卡器
- PC或Mac
- [USB转UART适配器](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（可选）
- 5V 1A Micro USB电源适配器（可选）
- 两根Micro-USB线缆

:::caution
请轻柔地插入USB线缆，否则可能会损坏接口。请使用内部有4根线的USB线缆，2根线的线缆无法传输数据。如果您不确定手头的线缆规格，可以点击<a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><b>这里</b></a>购买
:::

**镜像安装**

与树莓派类似，您需要从SD卡安装ReSpeaker Core v2.0镜像来启动和运行。我们提供两种方式来启动Respeaker core v2.0。您可以从SD卡启动或从eMMC启动。

**A. 从SD卡启动**

- **步骤1.** 点击[mirror-azure](http://respeaker.seeed.io/images/)下载我们最新的镜像压缩文件：```respeaker-debian-9-lxqt-sd-********-4gb.img.xz```或```respeaker-debian-9-iot-sd-********-4gb.img.xz```。

|部分|描述|
|---|----|
|**iot** / **lxqt**|**lxqt**版本带有桌面GUI，而**iot**版本没有。如果您是ReSpeaker Core v2.0的新用户，推荐使用**lxqt**版本。|
|**flasher** / **sd**|**flasher**版本用于刷写板载eMMC，刷写后可以移除SD卡。**sd**版本需要SD卡始终插入。|

对于开发，我们推荐 **lxqt + sd** 版本。所以请下载 **respeaker-debian-9-lxqt-sd-[date]-4gb.img.xz** 文件。

:::caution
本wiki基于 **respeaker-debian-9-lxqt-sd-20180610-4gb.img.xz** 镜像版本。
:::

- **步骤 2.** 使用SD卡读卡器将SD卡插入您的PC或MAC。您需要一张容量超过4G的SD卡。

- **步骤 3.** 点击[这里](https://etcher.io/)下载Etcher，并使用Etcher直接将```*.img.xz```文件烧录到您的SD卡。或者将```*.img.xz```文件解压为```*.img```文件，然后使用其他镜像写入工具将其烧录到SD卡。
<br />

<br />点击加号图标添加您刚下载的镜像，软件会自动选择您插入的SD卡。然后点击Flash!开始烧录。大约需要10分钟完成。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/v2-flash-sd.png)

- **步骤 4.** 将镜像写入SD卡后，将SD卡插入您的ReSpeaker Core v2.0。使用PWR_IN micro usb端口为板子供电，上电后请勿移除SD卡。ReSpeaker Core v2.0将从SD卡启动，您可以看到USER1和USER2 LED灯亮起。USER1通常在启动时配置为心跳模式闪烁，USER2通常在启动时配置为在SD卡访问期间点亮。现在，您应该进入下一部分：串口控制台。

**B. 从eMMC启动**

出厂时EMMC中没有固件，您可以使用PC或Mac将ReSpeaker镜像文件刷写到ReSpeaker的eMMC（板载闪存）中。然后ReSpeaker将从其eMMC（板载闪存）启动，而不是从SD卡启动。

- **步骤 1.** 在mirror-azure下载我们最新的镜像zip文件```respeaker-debian-9-iot-flasher-********-4gb.img.xz```或```respeaker-debian-9-lxqt-flasher-********-4gb.img.xz```。lxqt版本带有Debian桌面，而iot版本没有。flasher版本用于刷写eMMC，sd版本用于从SD卡启动。

- **步骤 2.** 使用Etcher直接将```*.img.xz```文件烧录到SD卡，或者将```*.img.xz```文件解压为```*.img```文件，然后使用其他镜像写入工具将其烧录到SD卡。

- **步骤 3.** 烧录SD卡后，将SD卡插入ReSpeaker Core v2.0。使用PWR_IN micro usb端口为板子供电，在刷写过程中请勿移除SD卡。

在刷写过程中，您会看到USER1和USER2 LED交替闪烁。大约需要10分钟完成。当LED熄灭时，您可以关闭板子电源，拔出SD卡并重新上电。如果LED亮起，说明镜像已正确刷写到eMMC。

您也可以使用此命令检查镜像版本：cat /etc/issue.net。

**串口控制台**

现在您的ReSpeaker Core v2.0可以启动了，您可能想通过控制台访问Linux系统，以设置WiFi等。您有两种方式获取控制台：

- A. OTG USB端口 - 这需要板子上运行Linux系统

- B. UART端口 - 这是访问控制台的硬件方式，可用于调试底层问题

**A. 通过OTG连接**

- **步骤 1.** 找一根micro USB线，请确保它是数据线（不仅仅是电源线），将micro USB端插入ReSpeaker的**OTG** micro USB端口（ReSpeaker板上有两个micro USB端口，标有不同的丝印，一个是**PWR_IN**，另一个是**OTG**），然后将线的另一端插入您的计算机。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/lianjiediannan.jpg)

- **步骤 2.** 在您的计算机上检查串口是否出现：

  - Windows：检查设备管理器，应该有名为```COMx```的新串口设备，其中x是递增的数字。如果您使用windows XP/7/8，可能需要安装[windows CDC驱动程序](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/ReSpeaker_Gadget_CDC_driver.7z)。
  - Linux：`ls /dev/ttyACM*`，您应该得到```/dev/ttyACMx```，其中x会根据您使用的USB端口而变化。
  - Mac：`ls /dev/cu.usb*`，您应该得到```/dev/cu.usbmodem14xx```，其中xx会根据您使用的USB端口而变化。

- **步骤 3.** 使用您喜欢的串口调试工具连接串口，串口参数为：115200波特率，8位数据位，无奇偶校验，1位停止位，无流控制。例如：

  - Windows：使用[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，选择```Serial```协议，填入ReSpeaker Core v2.0的正确COM端口，```115200```波特率，8位数据位，无奇偶校验，1位停止位，无流控制。
  - Linux：根据您的USB转TTL适配器，可能是```screen /dev/ttyACM0(,1, and so on)``` 115200或```screen /dev/ttyUSB0(,1, and so on) 115200```
  - Mac：根据您的USB转TTL适配器，可能是```screen /dev/cu.usbserial1412(,1422, and so on) 115200```或```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```

- **步骤 4.** 默认用户名是```respeaker```，密码也是```respeaker```。

**B. 通过UART端口连接**

在本节中，我们将指导您如何使用USB转TTL适配器建立从计算机到ReSpeaker的连接，该适配器将连接到ReSpeaker的Uart端口（Uart端口位于ReSpeaker扬声器插头的左侧）。

- **步骤 1.** 使用USB转TTL适配器连接Uart端口和您的PC/Mac。请注意RX/TX的电压为3.3V。如果您没有USB转TTL适配器，可以点击[这里](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)获取一个。

- **步骤 2.** 使用以下115200波特率的串口调试工具：
  - Windows：使用[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，选择```Serial```协议，填入ReSpeaker Core v2.0的正确COM端口，115200波特率，8位数据位，无奇偶校验，1位停止位，无流控制。
  - Linux：根据您的USB转TTL适配器，可能是```screen /dev/ttyACM0(,1, and so on) 115200```或```screen /dev/ttyUSB0(,1, and so on) 115200```。
  - Mac：根据您的USB转TTL适配器，可能是```screen /dev/cu.usbserial1412(,1422, and so on) 115200```或```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```。

- **步骤 3.** 登录用户名是 respeaker，密码也是 respeaker。

- **步骤 4.** 如果您没有 USB 转 TTL 适配器，您也可以使用 Arduino。如果使用 Arduino，将跳线的一端连接到 Arduino 的 RESET 引脚，另一端连接到 Arduino 的 GND 引脚。这将绕过您的 Arduino 的 ATMEGA MCU，将您的 Arduino 变成 USB 转 TTL 适配器，请参阅[这里](https://www.youtube.com/watch?v=qqSLwK1DP8Q)的视频教程。现在将 Arduino 的 GND 引脚连接到 Respeaker 的 Uart 端口的 GND 引脚。将 Arduino 的 Rx 引脚连接到 Respeaker 的 Uart 端口的 Rx 引脚。将 Arduino 的 Tx 引脚连接到 Respeaker 的 Uart 端口的 Tx 引脚。最后，通过 Arduino 的 USB 线将 Arduino 连接到您的 PC/Mac。现在通过输入以下命令检查您的 Mac 或 Linux PC 是否找到了您的 Arduino：

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

你应该会得到类似这样的结果：

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

现在按照上面的步骤2通过此串行连接连接到您的Respeaker。请注意这是一次性程序，因为接下来您将为Respeaker设置Wi-Fi连接，然后通过ssh或VNC进行连接。

**网络设置**

**A. Wi-Fi设置**

使用网络管理器工具nmtui配置您的ReSpeaker网络。nmtui已经预装在ReSpeaker镜像中。

```
sudo nmtui              # respeaker user needs sudo
```

然后你会看到一个像这样的配置页面，选择 ```Activate a connection``` 并按 ```Enter``` 键。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-1.png)

为 ReSpeaker v2.0 选择你的 Wi-Fi，按 ```Enter``` 键并输入你的 Wi-Fi 密码，然后再次按 ```Enter``` 键。当你看到一个 ```*``` 标记时，这意味着你的 ReSpeaker 已成功连接到你的 Wi-Fi 网络。按两次 ```Esc``` 键退出网络管理器配置工具。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-2.png)

现在使用下面的命令找到你的 ReSpeaker 的 IP 地址。

```
ip address
```

在下面的例子中，我们可以看到这个ReSpeaker的IP地址是```192.168.7.108```

```
root@v2:/home/respeaker# ip address

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: sit0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN group default qlen 1
    link/sit 0.0.0.0 brd 0.0.0.0
3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether e0:76:d0:37:38:6d brd ff:ff:ff:ff:ff:ff
    inet **192.168.7.108**/24 brd 192.168.7.255 scope global dynamic wlan0
       valid_lft 604332sec preferred_lft 604332sec
    inet6 2601:647:4680:ebf0:ec0a:5965:e710:f329/64 scope global noprefixroute dynamic
       valid_lft 345598sec preferred_lft 345598sec
    inet6 fe80::64de:cac8:65ef:aac8/64 scope link
       valid_lft forever preferred_lft forever
```

除了网络管理器 GUI 界面外，网络管理器还有一个命令行工具。如果您要连接到隐藏的 Wi-Fi 网络，您需要使用这个命令行工具：

```
nmcli c add type wifi con-name mywifi ifname wlan0 ssid your_wifi_ssid
nmcli con modify mywifi wifi-sec.key-mgmt wpa-psk
nmcli con modify mywifi wifi-sec.psk your_wifi_password
nmcli con up mywifi
```

**B. 以太网连接**

您可以使用以太网线连接到网络。只需插入已连接到互联网的以太网线即可。

**连接到 SSH 和 VNC**

**A. SSH**

SSH 服务器在 ReSpeaker v2.0 中自动启动。对于 Windows 用户，可以使用第三方 SSH 客户端。对于 Linux/Mac 用户，SSH 客户端是内置的。

- Windows：使用 PUTTY，选择 SSH 协议，填入正确的 IP 地址并点击打开。以 respeaker 用户身份登录，密码也是 respeaker。

- Linux/Mac：

```
ssh respeaker@192.168.***.***
// password: respeaker
```

:::note
请注意，如果使用SSH时遇到性能缓慢的问题，请切换到不太拥挤的WiFi网络。
:::

**B. VNC**

为了获得Alexa的授权，您需要使用VNC Viewer。系统内置了VNC服务器。VNC服务器将启动**lxqt**桌面GUI，这是一个轻量级的Qt桌面环境。
VNC服务也会自动启动。使用[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)或[VNC Viewer for Google Chrome](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en)连接到ReSpeaker Core v2.0的桌面。

要使用VNC，请将您的PC/Mac和ReSpeaker v2.0连接到同一个Wi-Fi网络。然后打开VNC Viewer，在地址栏中输入```192.168.xxx.xxx```。```192.168.xxx.xxx```是开发板的IP地址，您可以使用**ifconfig**命令来查看。如果遇到```Unencrypted connection```，点击Continue继续。密码是```respeaker```。

![](https://user-images.githubusercontent.com/5130185/34665797-93b222d6-f49c-11e7-8112-704f91163038.png)

:::note
请注意，VNC连接依赖于良好的网络质量，请做好心理准备，您可能会遇到VNC显示刷新率非常低的情况。
:::

**连接扬声器或耳机**

开发板使用SOC的内置编解码器来渲染播放。JST扬声器端口和耳机端口都由各自的放大器驱动，两个放大器都连接到SOC的同一个编解码器。SEEED实现的声卡驱动程序同时驱动录音设备和播放设备。因此在ALSA设备列表中没有独立的录音或播放声卡。它们都被命名为seeed-8mic-voicecard。

从开发板听到声音的最简单方法是插入耳机。如果您喜欢扬声器，开发板可以输出高达8W的驱动能力。

**蓝牙设置**

**激活蓝牙**

请输入以下命令来更新并激活ReSpeaker Core v2.0的蓝牙：

```
sudo apt update
sudo apt-mark hold firefox 
sudo apt upgrade
```

:::note
如果更新失败，请更换到网络状况良好的其他WiFi并重新进行更新。
:::

然后通过以下命令激活蓝牙：

```
sudo systemctl enable bt-auto-connect.service
sudo reboot -f
```

**将 ReSpeaker Core v2.0 用作蓝牙音箱-从设备**

当 ReSpeaker Core v2.0 重启时，打开您手机或电脑的蓝牙，您会发现一个名为 **ReSpeaker-xxxx** 的蓝牙设备。
选择并连接到它。将音箱或耳机插入 ReSpeaker Core v2.0，然后播放音乐并享受您的蓝牙音箱。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Bluetooth_connect.png)

**将 ReSpeaker Core v2.0 用作蓝牙播放器-主设备**

除了仅作为蓝牙音箱工作外，它还可以作为蓝牙播放器来连接您的蓝牙耳机或蓝牙音箱。
好的，让我们开始连接。

- **步骤 1.** 输入 `bluetoothctl` 打开蓝牙 shell。

- **步骤 2.** 输入 `scan on` 扫描您的蓝牙设备。

- **步骤 3.** 当 ReSpeaker Core v2.0 找到您的目标设备时，输入 `scan off`。
在本教程中，假设 MDR-1000X 耳机是我们的目标，记下设备 ID Device `04:5D:4B:81:35:84`。

```
respeaker@v2:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#

```

- **步骤 4.** 现在使用命令 `pair + 设备 ID` 将蓝牙设备与 ReSpeaker Core v2.0 配对。

- **步骤 5.** 当您看到消息 `Pairing successful` 时，点击 `connect + 设备 ID`。

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

如果弹出 `Connection successful`，配置成功！

您可以点击 `exit` 或 `quit` 退出 shell，然后使用以下命令测试您的蓝牙设备。

```
arecord bluetoothtest.wav
aplay bluetoothtest.wav

```

**录制和播放**

**1.通过ALSA测试**

由于这是开发阶段的技术文档，声音设备的索引可能会随版本变化。因此，请首先使用以下命令检查正确的设备索引：

```
respeaker@v2:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 0: 100b0000.i2s1-ac108-pcm0 ac108-pcm0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

respeaker@v2:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 1: 100b0000.i2s1-rk3228-hifi rk3228-hifi-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

找到名称带有 **seeed** 前缀的声卡。对于上面的示例，录音设备是 **hw:0,0**，表示声卡 **0**/设备 **0**。
播放设备是 **hw:0,1**，表示声卡 **0**/设备 **1**。然后使用以下命令测试录音和播放声音：

```
# record & playback 2 channels audio
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 2 hello.wav
aplay -Dhw:0,1 -r 16000 -c 2 hello.wav

# If you want to output the sound by the bluetooth device, you need to use the command below to play
aplay -r 16000 -c 2 hello.wav

# record 8 channels audio
# there are 6 microphones on board, and ac108 compose the 2 remaining channels.
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 8 hello_8ch.wav
```

此外，你可以同时录音和播放。

```
arecord | aplay
```

**2. Test via PulseAudio**

首先检查 PulseAudio 是否正在运行：

```
respeaker@v2:~$ ps aux|grep pulse|grep -v grep
respeak+  1109  0.0  0.7 363272  7932 ?        S<l  01:01   0:00 /usr/bin/pulseaudio --start --log-target=syslog
```

如果不是，请参考 PulseAudio 的文档来启用 PulseAudio 的自动生成。然后通过以下方式测试：

```
parecord --channels=8 --rate=16000 --format=s16le hello2.wav
paplay hello2.wav
```

此外，默认的 ALSA 设备现在连接到 PulseAudio，因此使用以下命令也会通过 PulseAudio 播放/录制声音：

```
arecord -v -f cd hello3.wav
aplay hello3.wav
```

到目前为止，我们已经学习了 ReSpeaker Core v2.0 开发板的基本操作，让我们继续前进。我们可以使用 ReSpeaker Core v2.0 来构建我们自己的 AVS（Alexa 语音服务）设备或 Dueros（百度语音助手）设备。

## 与 Wio Link 一起使用

请按照 [ReSpeaker Core V2 & Wio Link 教程](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_V2_&_Wio_Link/) 来使用 ReSpeaker Core V2 通过 IFTTT 控制 Wio Link。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/OJ0i6QrZCSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 与 GPIO 一起使用

这部分将介绍如何使用 **MRAA** 和 **UPM** 来控制 Respeaker Core v2.0 上的 GPIO 和 Grove 接口。

- **步骤 1. 将 MRAA 和 UPM 库更新到最新版本**

首先，我们需要安装最新的 MRAA 和 UPM 包。

```
sudo apt install  python-mraa python-upm libmraa1 libupm1 mraa-tools
```

- **步骤 2. 检查你的平台信息**

```
#only have bus 0 and id=03(/dev/i2c-3), 0 is the i2c number for mraa and upm
respeaker@v2:~$ mraa-i2c list
Bus   0: id=03 type=linux

#mraa gpio numbers and system gpio numbers and it's pinmux
respeaker@v2:~$ mraa-gpio list
00      GPIO91: GPIO
01         VCC:
02      GPIO43: GPIO
03     GPIO127: GPIO
04      GPIO17: GPIO
05      GPIO67: GPIO
06         GND:
07      GPIO13: GPIO
08    I2C2_SCL: I2C  
09    I2C2_SDA: I2C  
10         VCC:
11         GND:
12      GPIO66: GPIO
```

ReSpeaker Core v2.0 开发板的引脚定义描述请参考 [引脚定义](#)

- **步骤 3. 使用 MRAA 或 UPM 的演示**

**A. 使用 MRAA 库**

**直接控制 GPIO**

材料

| ReSpeaker Core v2.0 |  Grove - 蜂鸣器 |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|
|[立即购买](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[立即购买](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

将 Grove PIR 传感器的 **SIG** 引脚通过跳线连接到 ReSpeaker Core v2.0 的接头引脚 **0**。不要忘记同时连接 VCC 和 GND。然后在控制台中输入以下代码

``` python
respeaker@v2:~$ python
Python 2.7.13 (default, Jan 19 2017, 14:48:08)
[GCC 6.3.0 20170118] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import mraa
>>> x = mraa.Gpio(0)
>>> x.dir(mraa.DIR_OUT)
0
>>> x.write(0)
0
>>> x.write(1)
0
>>>
```

当您点击 **x.write(1)** 时，您将听到蜂鸣器发出的尖叫声。

**PIR 运动传感器示例**

材料

| ReSpeaker Core v2.0 |  Grove -  PIR 运动传感器 |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Grove%20-%20PIR%20Motion%20Sensor.jpg)|
|[立即获取](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[立即获取](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

在这个示例中，我们将使用 Python 代码监听 Grove PIR 传感器的触发。
使用跳线将 Grove PIR 传感器的 **D1** 引脚连接到 ReSpeaker Core v2.0 的接头引脚 **0**。不要忘记同时连接 VCC 和 GND。
然后将下面的代码复制到一个新文件中，保存为 Python 文件，命名为 **mraa_pir.py**。将此文件复制到您的 ReSpeaker Core v2.0 中。

``` python
import mraa

def on_trigger(gpio):
    print("pin " + repr(gpio.getPin(True)) + " = " + repr(gpio.read()))

pin = 0

try:
    x = mraa.Gpio(pin)
    print("Starting ISR for pin " + repr(pin))
    x.dir(mraa.DIR_IN)
    # respeaker v2 only support EDGE_BOTH
    x.isr(mraa.EDGE_BOTH, on_trigger, x)
    var = raw_input("Press ENTER to stop")
    x.isrExit()
except ValueError as e:
    print(e)

```

然后使用以下命令运行代码。（确保您已经定位到包含刚刚保存的 mraa_pir.py 文件的文件夹中）

``` python
sudo python mraa_pir.py
```

The result will be like

```
$ sudo python mraa_pir.py
Starting ISR for pin 0
Press ENTER to stoppin 1091 = 0
pin 1091 = 0
pin 1091 = 1
...
```

**B. 使用 UPM 库**

UPM 项目基于 MRAA 库实现了传感器驱动程序，因此我们不再需要关心 GPIO 编程或传感器的 I2C 地址，特定传感器的所有默认信息和逻辑都已封装到 UPM 库中。UPM 已支持大量传感器。[UPM 模块](https://iotdk.intel.com/docs/master/upm/modules.html)。但请注意，我们没有确认每个传感器都能在 ReSpeaker Core v2.0 上正常工作。

**Grove 数字光传感器示例**

材料

| ReSpeaker Core v2 |  Grove - 数字光传感器 |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Digital_Light_Sensor.jpg)|
|[立即购买](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[立即购买](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

这是 Grove 数字光传感器的示例，复制自 UPM github 仓库。

请通过 Grove 接口将 PIR 运动传感器插入您的 Respeaker Core v2.0。
然后将下面的代码复制到新文件中，保存为 python 文件，命名为 **tsl2561.py**。将此文件复制到您的 ReSpeaker Core v2.0 中。

``` python
#!/usr/bin/env python
# Author: Zion Orent <zorent@ics.com>
# Copyright (c) 2015 Intel Corporation.
#
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
#
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

from __future__ import print_function
import time, sys, signal, atexit
from upm import pyupm_tsl2561 as upmTsl2561

def main():
    # Instantiate a digital light sensor TSL2561 on I2C
    myDigitalLightSensor = upmTsl2561.TSL2561()

    ## Exit handlers ##
    # This function stops python from printing a stacktrace when you hit control-C
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # This function lets you run code on exit, including functions from myDigitalLightSensor
    def exitHandler():
        print("Exiting")
        sys.exit(0)

    # Register exit handlers
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    while(1):
        print("Light value is " + str(myDigitalLightSensor.getLux()))
        time.sleep(1)
if __name__ == '__main__':
    main()
```

结果应该类似于：

``` python
respeaker@v2:~$ python tsl2561.py       
Light value is 0
Light value is 38
Light value is 20
Light value is 54
Light value is 13
Light value is 44
Light value is 31  
```

## 常见问题

**Q1: 如何使用 Audacity 录制和播放？**

  **A1:** **lxqt** 版本已预装 Audacity，请点击左下角的**鸟形按钮**，您可以在**声音和视频 -> Audacity** 中找到它。

  打开 Audacity 后，请点击小黑箭头选择录制和播放设备，并按下图所示进行设置。

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

  您应该为录制和播放设备都选择 Seeed-8mic-voicecard。您可以选择 1/2/4/6/8 通道进行录制和播放。如您所见，
  图片中有 8 个通道，但是通道 7 和 8 中没有数据。这是因为这两个通道是播放通道。
  通道 7 用于 3.5mm 耳机，通道 8 用于 JST2.0 扬声器（如果您没有 JST 线缆，也可以使用跳线）。比如，我们使用 JST 扬声器：

- 步骤 1. 按上图设置，点击**录制**按钮，录制一段音频。
- 步骤 2. 点击**停止**按钮，然后您会看到通道 7 和 8 是空的。
- 步骤 3. 再次点击**录制**按钮，这次您会发现通道 8 发生了变化。

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity_playback.png)

**Q2: 如何访问 ReSpeaker Core v2.0 的 AP？**

**A2:** 您可以使用两线电缆为 ReSpeaker Core v2.0 供电。当系统运行时，Respeaker Core v2.0 可以作为 AP。您可以使用计算机
访问此 AP。如图所示。您可以按照步骤配置 ReSpeaker Core v2.0 的 WiFi。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Ap.png)

- **步骤 1.** 输入以下命令激活 ReSpeaker Core v2.0 的 AP。

```
sudo systemctl enable re-wifi.service
sudo reboot -f

```

- **步骤 2.** 访问 ReSpeaker Core v2.0 的 AP。ReSpeaker Core v2.0 重启后，使用您的手机或电脑搜索 WiFi。您会发现 AP 名称类似于
   **ReSpeaker_xxxx**，用户名是 **respeaker**，密码也是 **respeaker**。

- **步骤 3.** 现在您可以使用 Putty，SSH 模式进入串行控制台。Wlan1 的 IP 是 **192.168.42.1**，您需要使用此 IP 来建立连接。
ReSpeaker Core v2.0 的用户名是 **respeaker**，密码是 **respeaker**。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/AP2.png)

- **步骤 3.** 当您进入串行控制台后，您可以[设置 WiFi](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/#a-wi-fi-setting-up)

**Q3: 如何调节音量？**

**A3:** 您可以使用 Alsamixer 来调节播放音量和录音灵敏度。

- **步骤 1.** 输入以下代码打开 Alsamixer：

```
alsamixer
```

- **步骤 2.** 按键盘上的 **F6** 键选择 **Seeed-8mic-voicec** 声卡。
- **步骤 3.** 您将看到如下图所示的界面。您可以通过按 **右** 或 **左** 键来选择播放语音或录音通道。
您可以通过按 **上** 或 **下** 键来调整数值。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Alexamixer.png)

**Q4: 如何使用用户按钮？**
**A4:** 如您所见，ReSpeaker Core v2.0 的背面有一个用户按钮。这里我们提供一个 python 演示来展示如何使用它。

- **步骤 1.** 输入以下命令：

```
sudo pip install evdev
```

- **步骤 2.** 复制下面的代码并将其保存为一个 Python 文件，我们将其命名为 **usrer_button.py**。

```
from evdev import InputDevice,categorize,ecodes

key = InputDevice("/dev/input/event0")
for event in key.read_loop():
    if event.type == ecodes.EV_KEY:
        print(categorize(event))
```

- **步骤 3.** 点击以下命令来运行此演示。

```
sudo python usrer_button.py
```

然后你会看到类似这样的结果：

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/userbutton.png)

**Q5: 计算机无法识别 ReSpeaker Core v2.0，驱动程序问题？**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/CDC_Driver.png)

**A5:** 当您通过 OTG 或 UART 将 ReSpeaker Core v2.0 连接到计算机时可能会发生这种情况。
这是因为 CDC 串行驱动程序与其他 OTG 驱动程序存在冲突。请卸载冲突的驱动程序
并重新连接 ReSpeaker Core v2.0。

**Q6: 如果我想使用外部天线怎么办？**

**A6:** ReSpeaker Core v2.0 使用 **AP6212** 来提供 WiFi 和蓝牙功能，它们共享同一个天线。
除了板载天线，您还可以使用外部天线。为此，您需要移除一个电阻并将其
焊接到新的焊盘上，如下所示：

- 首先您需要移除橙色框中的电阻。
- 然后请将其焊接到绿色框上。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ant.png)

**Q7: 如何构建我自己的刷写器固件？这样我就可以将自己的固件烧录到其他 ReSpeaker Core v2.0 上。**

**A7:** 请在 RAM>2G 的 ARM debian 系统上运行镜像构建器。

以下是详细说明。

- 步骤 1. git clone [image_builder 仓库](https://github.com/respeaker/image_builder)
- 步骤 2. 修改上传路径 @ /publish/respeaker.io_stable.sh
- 步骤 3. sudo ./publish/respeaker.io_stable.sh

**Q8: 当将烧录的 SD 卡插入 ReSpeaker Core v2.0 时，设备管理器中没有 COM 端口，HDMI 接口也没有显示。**

**A8:** 请使用 USB 转 TTL 适配器直接连接到 UART，您会看到以下错误。

```
[    2.119560] mmcblk0: timed out sending SET_BLOCK_COUNT command, card status 0x400900
[    2.128134] mmcblk0: command error, retrying timeout
```

根本原因是旧的SD卡无法与linux系统兼容。请更换为较新的SD卡，这些SD卡支持所有eMMC命令，例如ScanDisk Ultra。

## 资源

- **[算法]** [音频前端处理算法，包括AEC、波束成形、NS和KWS](https://github.com/respeaker/respeakerd)
- **[Google Assistant]** [Google Assistant演示](https://github.com/respeaker/googleassistant_respeakerd)
- **[Microsoft]** [Microsoft语音翻译演示](https://github.com/respeaker/Python-Speech-Translate)
- **[Pixel]** [RGB LED库](https://github.com/respeaker/pixel_ring)
- **[PDF]** [下载本Wiki的PDF版本](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.pdf)
- **[PDF]** [Rockchip RK3229数据手册V1.1](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Rockchip%20RK3229%20Datasheet%20V1.1%2020151209.pdf)
- **[PDF]** [电路板尺寸图](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2_Demensions.pdf)
- **[ZIP]** [ReSpeaker Core v2.0的3D模型](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Respeaker_Core_v2_3D_SKP.zip)
- **[ZIP]** [ReSpeaker Core v2.0外壳](https://files.seeedstudio.com/wiki/Respeaker_V2/res/RESPEAKER_CORE_V2_Box.zip)
- **[DXF]** [ReSpeaker Core v2.0支架](https://github.com/respeaker/get_started_with_respeaker/raw/8111196e821fec10c65b00d96cf011dc90111546/files/RESPEAKER_CORE_V2_CASE.dxf)
- **[PDF]** [ReSpeaker Core v2.0支架装配图](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.0_case_Assembly.pdf)
- **[PDF]** [ReSpeaker Core v2.0声学和电气规格](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)
- **[更多阅读]** [Mraa Python文档页面](http://iotdk.intel.com/docs/master/mraa/python/)
- **[更多阅读]** [Intel Mraa SDK](https://software.intel.com/en-us/mraa-sdk/documentation )
- **[更多阅读]** [Snips SDK](https://snips.gitbook.io/documentation/installing-snips/respeaker-core-2.0)
- **[源代码]** [ReSpeaker Core v2.0源代码](https://github.com/respeaker/rk-linux-develop)

## 项目

**ReSpeaker Core v2.0 - Alexa演示**

在这个演示中，我们使用ReSpeaker Core v2.0与Alexa对话。您可以提出任何问题，并像朋友一样与ReSpeaker Core v2.0交谈。此外，该产品还可以与Google Assistant和Bing配合使用。唤醒词是Snowboy，当然您也可以制作自己的唤醒词。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/q7b8iLqRiPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<br />

**ReSpeaker Core v2.0 - 唤醒距离测试**

在这个演示中，我们测试了ReSpeaker Core v2.0的唤醒距离。我们使用带有唤醒词Snowboy的Alexa。正如您在屏幕上看到的，"Alexa:status code 204"意味着成功唤醒了Alexa。

凭借先进的算法和六个高质量麦克风，结果令人惊叹！我们可以在16米（52英尺）外唤醒ReSpeaker Core v2.0！

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/PpcwvOLlpEw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**ReSpeaker Core v2.0 - 语音接待系统**

这个智能系统由语音助手（ReSpeaker Core v2.0）和电话助手（Linklt One）组成。正如您所看到的，当访客告诉语音助手他要找的人的姓名时，这个小智能助手会识别并在其数据库中搜索该人。如果有匹配的姓名，我们的助手会给他打电话。当该人确认访客身份后，他只需发送"Open"消息即可开门，让访客进入。

在您的房子或工作场所前面有这样一个语音接待系统怎么样？是不是很酷？

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/tdIsCRXKoVI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<br />

**ReSpeaker Core v2.0 - 简单语音接待系统**

接待服务的基本功能是迎接访客，让他们感到受欢迎，并防止未经授权的人员进入办公室。我们利用ReSpeaker Core v2.0的功能来设计语音接待服务。该系统可以与访客互动，并向被访问的人传递消息。将来，我们可以设计一个小型办公室员工电话列表数据库，员工可以向系统发送消息，系统使用ReSpeaker Core v2.0的GPIO功能为访客开门。我们使用Microsoft Bing语音转文本服务和Twilio/腾讯消息API来编写python脚本。更多信息，请参考[ReSpeaker语音接待系统](https://project.seeedstudio.com/SeeedStudio/respeaker-voice-reception-system-209a6c)。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/-nTOa3LLpVo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
