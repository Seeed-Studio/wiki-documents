---
description: ReSpeaker Core v2.0
title: reSpeaker Core v2.0
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Core_v2.0
sku: 102990883
last_update:
  date: 1/11/2023
  author: jianjing Huang
---
![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_front.JPG)

Seeed 的 ReSpeaker Core v2.0 专为语音交互应用而设计。它基于 Rockchip RK3229 四核 ARM Cortex A7 处理器，主频最高可达 1.5GHz，配备 1GB RAM。该板载有六麦克风阵列，并集成了包括 DoA（声源定位）、BF（波束成形）、AEC（声学回声消除）等在内的语音算法。

ReSpeaker Core v2.0 运行 GNU/Linux 操作系统。它受益于强大而活跃的社区支持，可以使用现有的软件和工具进行开发、测试和部署，从而加速产品开发。

ReSpeaker Core v2.0 被设计为一款功能丰富的开发板，供企业评估使用。为此，该板由两个主要部分组成：第一部分是中心核心模块，包含 CPU、内存（RAM）和 PMU；第二部分是外围载板，包含 eMMC、连接器以及无线连接组件。任一部分或两部分都可以通过 Seeed 的定制服务进行定制。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07DN43Q7L" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## 特性

- 高性能 SoC 的一体化解决方案
- 1GB RAM 和 4GB eMMC
- 6 麦克风阵列  
- USB OTG，USB 设备
- WiFi b/g/n 和 BLE 4.0
- 检测范围：约 5 米
- 用于其他传感器的 Grove 插座
- 3.5mm 音频插孔和 JST2.0 连接器
- 8 通道 ADC，用于 6 麦克风阵列和 2 路回环（硬件回环）

- 基于 Debian 的 Linux 系统
- C++ SDK 和 Python 封装
- 语音算法 SDK，附完整文档
- 语音算法和特性：

  - 关键词唤醒
  - BF（波束成形）
  - DoA（声源方向）
  - NS（噪声抑制）
  - AEC（声学回声消除）和 AGC（自动增益控制）

## 规格

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
​    本表仅列出了 ReSpeakser Core v2.0 的基本规格，如需更专业的参数，请参考 [Acoustic & Electrical Specification of ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)。
:::

## 硬件概览

**接口和存储**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> 3.5mm耳机插孔：**
音频输出。您可以将有源扬声器或耳机插入此端口。

- **<font face="" size="3" font color="ff0000">②</font> USB OTG:**
此 USB 接口用于通过 putty（或其他串口工具）的串口模式连接到你的电脑。

- **<font face="" size="3" font color="ff0000">③</font> USB电源输入：**
此端口用于为Respeaker Core v2.0提供电源。

- **<font face="" size="3" font color="ff0000">④</font>扬声器插孔：**
为无源扬声器输出音频。Jst 2.0插座。

- **<font face="" size="3" font color="ff0000">⑤</font> UART:**
你也可以通过此 UART 接口将 ReSpeaker Core v2.0 连接到电脑。

- **<font face="" size="3" font color="ff0000">⑥</font> 8引脚GPIO：**
用于扩展应用的通用输入输出接口。

- **<font face="" size="3" font color="ff0000">⑦</font> SD Card Slot:**
用于插入 micro-SD 卡。

- **<font face="" size="3" font color="ff0000">⑧</font> eMMC:**
嵌入式多媒体卡。你可以将镜像烧录到 eMMC 中，这样 ReSpeaker Core v2.0 就可以从 eMMC 启动。

- **<font face="" size="3" font color="ff0000">⑨</font> USB主机：**
您可以通过这两个USB主机端口将USB设备（如USB鼠标、USB键盘和USB闪存盘）插入ReSpeaker Core v2.0。

- **<font face="" size="4" font color="ff0000">Ⓐ</font> 以太网：**
接入互联网。

- **<font face="" size="4" font color="ff0000">Ⓑ</font> HDMI:**
输出视频。

- **<font face="" size="4" font color="ff0000">Ⓒ</font> 蓝牙和WIFI天线：**
板载天线用于WIFI和蓝牙。我们还提供了2.4G天线或PCB天线的接口。

- **<font face="" size="4" font color="ff0000">Ⓓ</font> Grove Socket:**
用于数字或 I2C 的 Grove 插座。

**系统框图**

你可以点击查看原始图片

<a href="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png"/></a>

**引脚分布**

**排针引脚索引定义**

| 8 pins header | Grove Socket |
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
- 会议通信设备
- 语音交互机器人
- 车载语音助手
- 其他需要语音指令的场景

## 入门指南

### 准备工作

本部分将向你介绍：

- 如何安装镜像
- 如何访问串口控制台
- 如何设置 WiFi
- 如何连接 SSH 和 VNC
- 如何设置 Bluetooth
- 音频录制和播放测试

**先决条件**

- ReSpeaker Core V2.0
- Wi-Fi 网络
- 4GB（或更大）SD 卡和 SD 卡读卡器
- PC 或 Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（可选）
- 用于供电的 5V 1A Micro USB 适配器（可选）
- 两根 Micro-USB 线缆

:::caution
请轻轻插拔 USB 线缆，否则可能会损坏接口。请使用内部有 4 芯线的 USB 线缆，2 芯线缆无法传输数据。如果你不确定自己手上的线缆类型，可以点击 <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><b>here</b></a> 购买
:::

**镜像安装**

与 Raspberry Pi 类似，你需要从 SD 卡安装 ReSpeaker Core v2.0 的镜像才能开始使用。我们提供两种方式来启动 ReSpeaker Core v2.0，你可以从 SD 卡启动，也可以从 eMMC 启动。

**A. 从 SD 卡启动**

- **步骤 1.** 点击 [mirror-azure](http://respeaker.seeed.io/images/) 下载我们最新的镜像压缩文件：```respeaker-debian-9-lxqt-sd-********-4gb.img.xz``` 或 ```respeaker-debian-9-iot-sd-********-4gb.img.xz```。

|Section|Description|
|---|----|
|**iot** / **lxqt**|**lxqt** 版本带有桌面 GUI，而 **iot** 版本不带。如果你是第一次使用 ReSpeaker Core v2.0，推荐使用 **lxqt** 版本。|
|**flasher** / **sd**|**flasher** 版本用于烧录板载 eMMC，烧录完成后可以移除 SD 卡。**sd** 版本则需要 SD 卡始终插在板子上。|

  对于开发，我们推荐使用 **lxqt + sd** 版本。所以请下载 **respeaker-debian-9-lxqt-sd-[date]-4gb.img.xz** 文件。

:::caution
本 wiki 基于 **respeaker-debian-9-lxqt-sd-20180610-4gb.img.xz** 镜像版本。
:::

- **步骤 2.** 使用 SD 卡读卡器将 SD 卡插入你的 PC 或 MAC。你需要一张容量大于 4G 的 SD 卡。

- **步骤 3.** 点击这里下载 [Etcher](https://etcher.io/)，并使用 Etcher 将 ```*.img.xz``` 文件直接烧录到 SD 卡。或者先将 ```*.img.xz``` 文件解压为 ```*.img``` 文件，再使用其他镜像写入工具烧录到 SD 卡。
<br />

<br />点击加号图标添加你刚刚下载的镜像，软件会自动选择你插入的 SD 卡。然后点击 Flash! 开始烧录。完成大约需要 10 分钟。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/v2-flash-sd.png)

- **步骤 4.** 将镜像写入 SD 卡后，把 SD 卡插入你的 ReSpeaker Core v2.0。通过 PWR_IN micro USB 端口给板子供电，并且在上电后不要移除 SD 卡。ReSpeaker Core v2.0 会从 SD 卡启动，你可以看到 USER1 和 USER2 指示灯亮起。USER1 通常在启动时被配置为以心跳模式闪烁，而 USER2 通常在启动时被配置为在访问 SD 卡时点亮。现在，你应该进入下一部分：Serial Console。

**B. 从 eMMC 启动**

出厂时 EMMC 中没有固件，你可以通过 PC 或 Mac 将 ReSpeaker 镜像文件烧录到 ReSpeaker 的 eMMC（板载闪存）中。之后 ReSpeaker 将从其 eMMC（板载闪存）启动，而不是从 SD 卡启动。

- **步骤 1.** 在 mirror-azure 下载我们最新的镜像压缩文件 ```respeaker-debian-9-iot-flasher-********-4gb.img.xz``` 或 ```respeaker-debian-9-lxqt-flasher-********-4gb.img.xz```。lxqt 版本带有 Debian 桌面，而 iot 版本不带。flasher 版本用于烧录 eMMC，sd 版本用于从 SD 卡启动。

- **步骤 2.** 使用 Etcher 将 ```*.img.xz``` 文件直接烧录到 SD 卡，或者先将 ```*.img.xz``` 文件解压为 ```*.img``` 文件，再使用其他镜像写入工具烧录到 SD 卡。

- **步骤 3.** 烧录好 SD 卡后，将 SD 卡插入 ReSpeaker Core v2.0。通过 PWR_IN micro USB 端口给板子供电，在烧录过程中不要移除 SD 卡。

在烧录过程中，你会看到 USER1 和 USER2 指示灯交替闪烁。完成大约需要 10 分钟。当指示灯熄灭时，你可以关闭电源，拔出 SD 卡并重新上电。如果指示灯亮起，说明镜像已经正确烧录到 eMMC。

你也可以使用以下命令检查镜像版本：cat /etc/issue.net。

**Serial Console**

现在你的 ReSpeaker Core v2.0 已经可以启动了，你可能希望通过控制台访问 Linux 系统，以便配置 WiFi 等。你有两种方式获取控制台：

- A. OTG USB 端口 - 这需要板子上已经有一个正在运行的 Linux 系统

- B. UART 端口 - 这是访问控制台的硬方式，可用于调试底层问题

**A. 通过 OTG 连接**

- **步骤 1.** 找一根 micro USB 线，并确保它是数据线（不仅仅是电源线），将 micro USB 端插入 ReSpeaker 的 **OTG** micro USB 端口（ReSpeaker 板上有两个 micro USB 端口，丝印标注不同，一个是 **PWR_IN**，另一个是 **OTG**），然后将这根线的另一端插入你的电脑。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/lianjiediannan.jpg)

- **步骤 2.** 在你的电脑上检查串口是否已经出现：

  - Windows：检查设备管理器，应该会有新的串口设备，名称为 ```COMx```，其中 x 是递增的数字。如果你使用的是 Windows XP/7/8，可能需要安装 [windows CDC drivers](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/ReSpeaker_Gadget_CDC_driver.7z)。
  - Linux: `ls /dev/ttyACM*`, 你应该会看到 ```/dev/ttyACMx```，其中 x 会根据你使用的 USB 端口不同而变化。
  - Mac: `ls /dev/cu.usb*`, 你应该会看到 ```/dev/cu.usbmodem14xx```，其中 xx 会根据你使用的 USB 端口不同而变化。

- **步骤 3.** 使用你喜欢的串口调试工具连接该串口，串口参数为：115200 波特率，8Bits，Parity None，Stop Bits 1，Flow Control None。例如：

  - Windows：使用 [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，选择 ```Serial``` 协议，填入 ReSpeaker Core v2.0 对应的正确 COM 端口，```115200``` 波特率，8Bits，Parity None，Stop Bits 1，Flow Control None。
  - Linux：取决于你的 USB To TTL Adapter，可能是 ```screen /dev/ttyACM0(,1, and so on)``` 115200 或 ```screen /dev/ttyUSB0(,1, and so on) 115200```
  - Mac：取决于你的 USB To TTL Adapter，可能是 ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` 或 ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```

- **步骤 4.** 默认用户名是 ```respeaker```，密码也是 ```respeaker```。

**B. 通过 UART 端口连接**

本节将指导你如何使用 USB to TTL 转换器，通过连接 ReSpeaker 的 Uart 端口（Uart 端口位于 ReSpeaker 扬声器插座的左侧）在电脑和 ReSpeaker 之间建立连接。

- **步骤 1.** 使用 USB To TTL Adapter 将 Uart 端口与 PC/Mac 连接。注意 RX/TX 的电压为 3.3V。如果你没有 USB To TTL Adapter，可以点击[这里](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)购买一个。

- **步骤 2.** 使用以下串口调试工具，波特率为 115200：
  - Windows：使用 [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，选择 ```Serial``` 协议，填入 ReSpeaker Core v2.0 对应的正确 COM 端口，115200 波特率，8Bits，Parity None，Stop Bits 1，Flow Control None。
  - Linux：取决于你的 USB To TTL Adapter，可能是 ```screen /dev/ttyACM0(,1, and so on) 115200``` 或 ```screen /dev/ttyUSB0(,1, and so on) 115200```。
  - Mac：取决于你的 USB To TTL Adapter，可能是 ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` 或 ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```。

- **步骤 3.** 登录用户名为 respeaker，密码也为 respeaker。

- **步骤 4.** 如果你没有 USB to TTL Adapter，你也可以使用 Arduino。如果使用 Arduino，将一端杜邦线连接到 Arduino 的 RESET 引脚，另一端连接到 Arduino 的 GND 引脚。这将绕过 Arduino 的 ATMEGA MCU，把 Arduino 变成一个 USB to TTL 转换器，视频教程见[这里](https://www.youtube.com/watch?v=qqSLwK1DP8Q)。现在将 Arduino 的 GND 引脚连接到 Respeaker 的 Uart 端口的 GND 引脚。将 Arduino 的 Rx 引脚连接到 Respeaker 的 Uart 端口的 Rx 引脚。将 Arduino 的 Tx 引脚连接到 Respeaker 的 Uart 端口的 Tx 引脚。最后，通过 Arduino 的 USB 线将 Arduino 连接到你的 PC/Mac。现在在 Mac 或 Linux PC 上输入以下命令，检查系统是否识别到 Arduino：

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

你应该会看到类似下面的输出：

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

现在按照上面的步骤 2，通过这个串口连接到你的 Respeaker。注意这只是一次性操作，接下来你会为 Respeaker 配置 Wi-Fi 连接，然后通过 ssh 或 VNC 进行连接。

**网络设置**

**A. Wi-Fi 设置**

使用 Network Manager 工具 nmtui 配置 ReSpeaker 的网络。nmtui 已经预装在 ReSpeaker 镜像中。

```
sudo nmtui              # respeaker user needs sudo
```

然后你会看到如下配置页面，选择 ```Activate a connection``` 并按 ```Enter``` 键。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-1.png)

为 ReSpeaker v2.0 选择你的 Wi-Fi，按 ```Enter``` 键并输入你的 Wi-Fi 密码，再次按 ```Enter``` 键。当你看到 ```*``` 标记时，表示你的 ReSpeaker 已成功连接到 Wi-Fi 网络。连续按两次 ```Esc``` 键退出网络管理配置工具。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-2.png)

现在使用下面的命令查找你的 ReSpeaker 的 IP 地址。

```
ip address
```

在下面的示例中，我们可以看到这个 ReSpeaker 的 IP 地址是 ```192.168.7.108```

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

除了 Network Manager 的 GUI 界面之外，Network Manager 还有一个命令行工具。如果你要连接到一个隐藏的 Wi-Fi 网络，就需要使用这个命令行工具：

```
nmcli c add type wifi con-name mywifi ifname wlan0 ssid your_wifi_ssid
nmcli con modify mywifi wifi-sec.key-mgmt wpa-psk
nmcli con modify mywifi wifi-sec.psk your_wifi_password
nmcli con up mywifi
```

**B. 以太网连接**

你可以使用以太网线连接到网络。只要插入一根已经接入互联网的以太网线即可。

**连接 SSH 和 VNC**

**A. SSH**

在 ReSpeaker v2.0 中，SSH 服务器会自动启动。对于 Windows 用户，可以使用第三方 SSH 客户端。对于 Linux/Mac 用户，系统内置了 SSH 客户端。

- Windows：使用 PUTTY，选择 SSH 协议，填入正确的 IP 地址并点击 open。以 respeaker 用户登录，密码也是 respeaker。

- Linux/Mac：

```
ssh respeaker@192.168.***.***
// password: respeaker
```

:::note
请注意，如果使用 SSH 时感觉性能很慢，请切换到一个更不拥挤的 WiFi 网络。
:::

**B. VNC**

为了从 Alexa 获取授权，你需要使用 VNC Viewer。系统内置了 VNC 服务器。VNC 服务器会启动 **lxqt** 桌面 GUI，它是一个轻量级的 Qt 桌面环境。
VNC 服务同样会自动启动。使用 [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) 或 [VNC Viewer for Google Chrome](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en) 连接到 ReSpeaker Core v2.0 的桌面。

要使用 VNC，请将你的 PC/Mac 和 ReSpeaker v2.0 连接到同一个 Wi-Fi 网络。然后打开 VNC Viewer，在地址栏输入 ```192.168.xxx.xxx```。```192.168.xxx.xxx``` 是开发板的 IP 地址，你可以使用 **ifconfig** 命令查看。如果遇到 ```Unencrypted connection```，点击 Continue 继续。密码是 ```respeaker```。

![](https://user-images.githubusercontent.com/5130185/34665797-93b222d6-f49c-11e7-8112-704f91163038.png)

:::note
请注意，VNC 连接依赖于良好的网络质量，请提前做好心理准备，你很可能会得到非常低的 VNC 显示刷新率。
:::

**连接扬声器或耳机**

该开发板使用 SOC 内置的编解码器进行播放。JST 扬声器接口和耳机接口都由各自的功放驱动，并且两个功放都连接到 SOC 的同一个编解码器。SEEED 实现的声卡驱动同时驱动采集设备和播放设备。因此在 ALSA 设备列表中没有独立的采集或播放声卡，它们都被命名为 seeed-8mic-voicecard。

从开发板听到声音最简单的方式是插入一副耳机。如果你更喜欢外放扬声器，该开发板最多可以输出 8W 的驱动能力。

**蓝牙设置**

**激活蓝牙**

请输入下面的命令来更新并激活 ReSpeaker Core v2.0 的蓝牙：

```
sudo apt update
sudo apt-mark hold firefox 
sudo apt upgrade
```

:::note
如果更新失败，请切换到网络状况更好的另一条 WiFi 再重新更新。
:::

然后通过下面的命令激活蓝牙：

```
sudo systemctl enable bt-auto-connect.service
sudo reboot -f
```

**将 ReSpeaker Core v2.0 用作蓝牙音箱（从设备）**

当 ReSpeaker Core v2.0 重启后，打开你手机或电脑的蓝牙，你会发现一个名为 **ReSpeaker-xxxx** 的蓝牙设备。
选择并连接它。将扬声器或耳机插入 ReSpeaker Core v2.0，然后播放音乐，享受你的蓝牙音箱。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Bluetooth_connect.png)

**将 ReSpeaker Core v2.0 用作蓝牙播放器（主设备）**

除了作为蓝牙音箱工作之外，它还可以作为蓝牙播放器来“攻克”你的蓝牙耳机或蓝牙音箱。
好了，让我们开始 hacking 吧。

- **Step 1.** 输入 `bluetoothctl` 打开蓝牙 shell。

- **Step 2.** 输入 `scan on` 扫描你的蓝牙设备。

- **Step 3.** 当 ReSpeaker Core v2.0 找到你的目标设备时，输入 `scan off`。
在本教程中，假设 MDR-1000X 耳机是我们的目标设备，记下设备 ID Device `04:5D:4B:81:35:84`。

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

- **Step 4.** 现在使用命令 `pair + device ID` 将蓝牙设备与 ReSpeaker Core v2.0 配对。

- **Step 5.** 当你看到 `Pairing successful` 消息时，输入 `connect + device ID`。

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

如果弹出 `Connection successful`，说明配置成功！

你可以输入 `exit` 或 `quit` 退出 shell，然后使用下面的命令测试你的蓝牙设备。

```
arecord bluetoothtest.wav
aplay bluetoothtest.wav

```

**录音与播放**

**1. 通过 ALSA 测试**

由于这是开发阶段的技术文档，声卡设备的索引可能会随着版本变化。因此请先使用以下命令检查正确的设备索引：

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

找到名称带有 **seeed** 前缀的声卡。以上面的示例来说，采集设备是 **hw:0,0**，表示卡 **0**/设备 **0**。
播放设备是 **hw:0,1**，表示卡 **0**/设备 **1**。然后使用下面的命令测试录音和播放：

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

此外，你也可以同时进行录音和播放。

```
arecord | aplay
```

**2. 通过 PulseAudio 测试**

首先检查 PulseAudio 是否正在运行：

```
respeaker@v2:~$ ps aux|grep pulse|grep -v grep
respeak+  1109  0.0  0.7 363272  7932 ?        S<l  01:01   0:00 /usr/bin/pulseaudio --start --log-target=syslog
```

如果没有运行，请参考 PulseAudio 的文档启用 PulseAudio 的自动生成（auto-spawn）。然后通过以下命令测试：

```
parecord --channels=8 --rate=16000 --format=s16le hello2.wav
paplay hello2.wav
```

此外，默认 ALSA 设备现在已经挂接到 PulseAudio，因此使用下面的命令也会通过 PulseAudio 播放/录制声音：

```
arecord -v -f cd hello3.wav
aplay hello3.wav
```

到目前为止，我们已经学习了 ReSpeaker Core v2.0 开发板的基本操作，接下来继续前进。我们可以使用 ReSpeaker Core v2.0 来构建自己的 AVS（Alexa Voice Service）设备或 Dueros（百度语音助手）设备。

## 玩转 Wio Link

请参考 [ReSpeaker Core V2 & Wio Link Tutorial](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_V2_&_Wio_Link/) 使用 ReSpeaker Core V2 通过 IFTTT 控制 Wio Link。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/OJ0i6QrZCSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 玩转 GPIO

本部分将介绍如何使用 **MRAA** 和 **UPM** 控制 Respeaker Core v2.0 上的 GPIO 和 Grove 插座。

- **步骤 1. 将 MRAA 和 UPM 库更新到最新版本**

首先，我们需要安装最新的 MRAA 和 UPM 软件包。

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

关于 ReSpeaker Core v2.0 板卡的引脚定义说明，请参考 [Pin Out](#)

- **步骤 3. 使用 MRAA 或 UPM 运行示例**

**A. 使用 MRAA 库**

**直接控制 GPIO**

材料

| ReSpeaker Core v2.0 |  Grove - Buzzer |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|
|[Get ONE Now](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

使用跳线将 Grove PIR 传感器的 **SIG** 引脚连接到 ReSpeaker Core v2.0 的排针引脚 **0**。不要忘记同时连接 VCC 和 GND。然后在控制台中输入下面的代码

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

当你输入 **x.write(1)** 时，你会听到蜂鸣器发出一声尖叫。

**PIR 运动传感器示例**

材料

| ReSpeaker Core v2.0 |  Grove -  PIR Motion Sensor |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Grove%20-%20PIR%20Motion%20Sensor.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

在这个示例中，我们将使用 Python 代码来监听 Grove PIR 传感器的触发。
使用跳线将 Grove PIR 传感器的 **D1** 引脚连接到 ReSpeaker Core v2.0 的排针引脚 **0**。不要忘记同时连接 VCC 和 GND。
然后将下面的代码复制到一个新文件中，并保存为一个 python 文件，命名为 **mraa_pir.py**。将此文件复制到你的 ReSpeaker Core v2.0 中。

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

然后使用下面的命令运行代码。（确保你当前所在的文件夹中包含刚刚保存的 mraa_pir.py）

``` python
sudo python mraa_pir.py
```

结果会像这样

```
$ sudo python mraa_pir.py
Starting ISR for pin 0
Press ENTER to stoppin 1091 = 0
pin 1091 = 0
pin 1091 = 1
...
```

**B. 使用 UPM 库**

UPM 项目基于 MRAA 库实现了传感器驱动，因此我们不再需要关心 GPIO 编程或传感器的 I2C 地址等问题，某个特定传感器的所有默认信息和逻辑都已经封装进了 UPM 库。UPM 已经支持了一大批传感器。[UPM modules](https://iotdk.intel.com/docs/master/upm/modules.html)。但请注意，我们并没有确认每一个传感器都能在 ReSpeaker Core v2.0 上正常工作。

**Grove 数字光照传感器示例**

材料

| ReSpeaker Core v2 |  Grove - Digital Light Sensor |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Digital_Light_Sensor.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

这是一个 Grove 数字光照传感器的示例，代码拷贝自 UPM 的 github 仓库。

请通过 Grove 插座将 PIR 运动传感器插到你的 ReSpeaker Core v2.0 上。
然后将下面的代码复制到一个新文件中，并保存为一个 python 文件，命名为 **tsl2561.py**。将此文件复制到你的 ReSpeaker Core v2.0 中。

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

**Q1: 如何使用 Audacity 进行录音和播放？**

  **A1:** **lxqt** 版本已经预装了 Audacity，请点击左下角的 **Bird button**，然后在 **Sound & Video -> Audacity** 中找到它。

  打开 Audacity 后，请点击小黑箭头选择录音和播放设备，并按照下图进行设置。

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

  你应该将录音和播放设备都选择为 Seeed-8mic-voicecard。你可以选择 1/2/4/6/8 通道进行录制和播放。如你所见，
  图中有 8 个通道，但是第 7 和第 8 通道中没有数据。这是因为这两个通道是播放通道。
  第 7 通道对应 3.5mm 耳机，第 8 通道对应 JST2.0 扬声器（如果你没有 JST 线缆，也可以使用跳线）。比如，我们使用 JST 扬声器：

- 步骤 1. 按照上图进行设置，点击 **Record** 按钮，录制一段音频。
- 步骤 2. 点击 **Stop** 按钮，然后你会看到第 7 和第 8 通道是空的。
- 步骤 3. 再次点击 **Record** 按钮，这一次你会发现第 8 通道发生了变化。

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity_playback.png)

**Q2: 如何访问 ReSpeaker Core v2.0 的 AP？**

**A2:** 你可以使用两根线缆给 ReSpeaker Core v2.0 供电。当系统运行时，ReSpeaker Core v2.0 可以作为一个 AP。你可以使用电脑来
访问这个 AP，如图所示。你可以按照步骤来配置 ReSpeaker Core v2.0 的 WiFi。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Ap.png)

- **步骤 1.** 输入下面的命令来激活 ReSpeaker Core v2.0 的 Ap。

```
sudo systemctl enable re-wifi.service
sudo reboot -f

```

- **步骤 2.** 访问 ReSpeaker Core v2.0 的 AP。当 ReSpeaker Core v2.0 重启后，使用你的手机或电脑搜索 WiFi。你会发现 AP 名称类似于
   **ReSpeaker_xxxx**，用户名是 **respeaker**，密码也是 **respeaker**。

- **步骤 3.** 现在你可以使用 Putty，以 SSH 模式进入串口控制台。Wlan1 的 IP 是 **192.168.42.1**，你需要使用这个 IP 来建立连接。
ReSpeaker Core v2.0 的用户名是 **respeaker**，密码是 **respeaker**。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/AP2.png)

- **步骤 3.** 当你进入串口控制台后，你可以[设置 WiFi](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/#a-wi-fi-设置)

**Q3: 如何调节音量？**

**A3:** 你可以使用 Alsamixer 来调节播放音量和采集灵敏度。

- **步骤 1.** 输入以下代码打开 Alsamixer：

```
alsamixer
```

- **步骤 2.** 在键盘上按 **F6** 选择 **Seeed-8mic-voicec** 声卡。
- **步骤 3.** 你会看到如下图所示的界面。你可以通过按 **Right** 或 **Left** 键来选择播放或录音通道，
并通过按 **Up** 或 **Down** 键来调节数值。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Alexamixer.png)

**Q4: 如何使用用户按键？**
**A4:** 如你所见，在 ReSpeaker Core v2.0 的背面有一个用户按键。这里我们提供一个 python 示例来演示如何使用它。

- **步骤 1.** 输入下面的命令：

```
sudo pip install evdev
```

- **步骤 2.** 复制下面的代码并保存为一个 python 文件，我们将其命名为 **usrer_button.py**。

```
from evdev import InputDevice,categorize,ecodes

key = InputDevice("/dev/input/event0")
for event in key.read_loop():
    if event.type == ecodes.EV_KEY:
        print(categorize(event))
```

- **步骤 3.** 输入以下命令来运行此演示。

```
sudo python usrer_button.py
```

然后你会看到类似如下的结果：

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/userbutton.png)

**Q5: 电脑无法识别 ReSpeaker Core v2.0，是驱动问题吗？**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/CDC_Driver.png)

**A5:** 当你通过 OTG 或 UART 将 ReSpeaker Core v2.0 连接到电脑时，可能会出现这种情况。
这是因为 CDC Serial 驱动与其他 OTG 驱动发生了冲突。请卸载冲突的驱动
 然后重新连接 ReSpeaker Core v2.0。

**Q6: 如果我想使用外置天线怎么办？**

**A6:** ReSpeaker Core v2.0 使用 **AP6212** 同时提供 WiFi 和蓝牙，它们共用同一根天线。
你可以使用外置天线来替代板载天线。为此，你需要移除一个电阻并将其焊接到新的焊盘上，如下图所示：

- 首先你需要移除橙色框中的电阻。
- 然后请将其焊接到绿色框中。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ant.png)

**Q7: 如何构建我自己的烧录固件？这样我就可以把自己的固件烧录到其他 ReSpeaker Core v2.0 上。**

**A7:** 请在 RAM>2G 的 ARM debian 系统上运行 image builder。

以下是详细步骤。

- 步骤 1. git clone [image_builder repository](https://github.com/respeaker/image_builder)
- 步骤 2. 修改 /publish/respeaker.io_stable.sh 中的上传路径
- 步骤 3. sudo ./publish/respeaker.io_stable.sh

**Q8: 将烧录好的 SD 卡插入 ReSpeaker Core v2.0 后，设备管理器中没有 COM 端口，HDMI 接口也没有显示。**

**A8:** 请使用 USB 转 TTL 适配器直接连接到 UART，你会看到如下错误信息。

__CODE_LINE_PLH__
```
[    2.119560] mmcblk0: timed out sending SET_BLOCK_COUNT command, card status 0x400900
[    2.128134] mmcblk0: command error, retrying timeout

根本原因是旧的 SD 卡无法在 Linux 系统下正常工作。请更换为较新的 SD 卡，这些卡支持所有 eMMC 命令，例如 ScanDisk Ultra。

## 资源

- **[算法]** [包括 AEC、Beamforming、NS 和 KWS 在内的音频前端处理算法](https://github.com/respeaker/respeakerd)
- **[Google Assistant]** [Google Assistant Demo](https://github.com/respeaker/googleassistant_respeakerd)
- **[Microsoft]** [Microsoft Speech Translation Demo](https://github.com/respeaker/Python-Speech-Translate)
- **[Pixel]** [RGB LEDs 库](https://github.com/respeaker/pixel_ring)
- **[PDF]** [下载本 Wiki 的 PDF](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.pdf)
- **[PDF]** [Rockchip RK3229 Datasheet V1.1](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Rockchip%20RK3229%20Datasheet%20V1.1%2020151209.pdf)
- **[PDF]** [板卡尺寸](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2_Demensions.pdf)
- **[ZIP]** [ReSpeaker Core v2.0 的 3D 模型](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Respeaker_Core_v2_3D_SKP.zip)
- **[ZIP]** [ReSpeaker Core v2.0 外壳](https://files.seeedstudio.com/wiki/Respeaker_V2/res/RESPEAKER_CORE_V2_Box.zip)
- **[DXF]** [ReSpeaker Core v2.0 支架](https://github.com/respeaker/get_started_with_respeaker/raw/8111196e821fec10c65b00d96cf011dc90111546/files/RESPEAKER_CORE_V2_CASE.dxf)
- **[PDF]** [ReSpeaker Core v2.0 支架装配图](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.0_case_Assembly.pdf)
- **[PDF]** [ReSpeaker Core v2.0 的声学与电气规格](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)
- **[更多阅读]** [Mraa Python 文档页面](http://iotdk.intel.com/docs/master/mraa/python/)
- **[更多阅读]** [Intel Mraa SDK](https://software.intel.com/en-us/mraa-sdk/documentation )
- **[更多阅读]** [Snips SDK](https://snips.gitbook.io/documentation/installing-snips/respeaker-core-2.0)
- **[源代码]** [ReSpeaker Core v2.0 源代码](https://github.com/respeaker/rk-linux-develop)

## 项目

**ReSpeaker Core v2.0 - Alexa 演示**

在这个演示中，我们使用 ReSpeaker Core v2.0 与 Alexa 对话。你可以像和朋友一样向 ReSpeaker Core v2.0 提问和聊天。此外，该产品也可以与 google Assistant 和 Bing 一起工作。唤醒词是 Snowboy，当然你也可以自定义自己的唤醒词。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/q7b8iLqRiPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<br />

**ReSpeaker Core v2.0 - 唤醒距离测试**

在这个演示中，我们测试了 ReSpeaker Core v2.0 的唤醒距离。我们使用 Alexa，并以 Snowboy 作为唤醒词。正如你在屏幕上看到的，"Alexa:status  code 204" 表示成功唤醒了 Alexa。

凭借先进的算法和六个高质量麦克风，效果非常惊人！我们可以在 16 米（52 英尺）外唤醒 ReSpeaker Core v2.0！

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/PpcwvOLlpEw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**ReSpeaker Core v2.0 - 语音接待系统**

这个智能系统由语音助手（ReSpeaker Core v2.0）和电话助手（Linklt One）组成。正如你所看到的，当访客告诉语音助手他要找的人的名字时，小小的智能助手会识别并在其数据库中搜索此人。如果有匹配的名字，我们的助手就会给他打电话。当此人确认访客的身份后，只需要发送消息 "Open" 来打开门，让访客进入。

在你家门口或工作空间前放置这样一套语音接待系统怎么样？是不是很酷？

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/tdIsCRXKoVI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<br />

**ReSpeaker Core v2.0 - 简易语音接待系统**

接待服务的基本功能是迎接访客，让他们感到受欢迎，并防止未授权人员进入办公室。我们利用 ReSpeaker Core v2.0 的功能设计了一套语音接待服务。系统可以与访客交互，并向被访人发送留言。未来，我们可以设计一个小型办公室员工电话名单数据库，员工可以向系统发送消息，系统则使用 ReSpeaker Core v2.0 的 GPIO 功能为访客打开门。我们使用 Microsoft Bing Speech to text 服务和 Twilio/Tencent message API 来编写 Python 脚本。更多信息请参考 [ReSpeaker Voice Reception System](https://project.seeedstudio.com/SeeedStudio/respeaker-voice-reception-system-209a6c)。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/-nTOa3LLpVo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

