---
description: 硬件布局，reComputer的设计。
title: 硬件布局，reComputer的设计。
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Series_Hardware_Layout
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# 硬件布局，reComputer的设计。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian.png" alt="pir" width={600} height="auto" /></p>

您将在这里了解Jetson系列硬件布局的reComputer的基本概念。与此同时，您将了解如何从载板中移除和安装核心板，如何安装摄像头、M.2无线模块或硬盘等。

## reComputer 系列放置

当面对 reComputer 接口的背板时，在机箱右侧有 4 个防滑垫，便于竖立，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian1.png" alt="pir" width={600} height="auto" /></p>

reComputer机箱底部是一个悬浮结构，可以使用绑带固定在一些不便利的结构上。机箱底板有4个固定孔，便于固定在正面或斜坡上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/Jetsonbackspec2.png" alt="pir" width={800} height="auto" /></p>

## reComputer 系列顶盖

当面对 reComputer 接口的背板时，可以看到机箱右侧有4个防滑垫，其中有一个金属按钮，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly.jpg" alt="pir" width={500} height="auto" /></p>

按下按钮向上推，以抬起箱子的顶盖，然后您可以打开它以移除顶盖。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly1.jpg" alt="pir" width={500} height="auto" /></p>

## 从载板上取下核心板。

打开机箱后，您可以看到插入在载板上的模块，如下图所示。按照以下步骤，可以从载板上取下模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤1**：在移除核心版本之前，首先您必须确认风扇电源是否连接。如果连接了，您需要从插座中拔掉风扇电源（对于Jetson Nano可能没有风扇，您可以跳过此步骤）。

- **步骤2**。用十字螺丝刀取下固定核心板的螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- 第三步。将支架上的夹子向外打开，核心板将自动弹起。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly3.jpg" alt="pir" width={500} height="auto" /></p>

- **第四步**。将核心板以对角向上移除。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly4.jpg" alt="pir" width={500} height="auto" /></p>

将模块安装在载板上

- **步骤1**。找到载板上与模块连接器对应的Jetson SODIMM连接器指针。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion.jpg" alt="pir" width={500} height="auto" /></p>

- **第二步**。将模块斜插入约20度到载板的插槽中。按下去，它将固定在载板上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion2.jpg" alt="pir" width={500} height="auto" /></p>

!!! Note
    在正确的安装下，您可能会发现接口上显示了一些连接器指。一旦暴露了许多连接器指，系统就会变得不稳定。
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion3.jpg" alt="pir" width={800} height="auto" /></p>

- **第三步**。使用十字螺丝刀拧紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 4**。如果模块包括一个冷却风扇，请将风扇的电源插头插入板载托架上的电源插座。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

## 将reComputer机箱中的Carrier Coard移除。


当我们想要安装M.2模块或CSI相机以及其他操作时，我们需要将载板从reComputer机箱中取出，以便更轻松地进行操作。载板通过4颗螺丝固定在机箱底座上，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian5.jpg" alt="pir" width={600} height="auto" /></p>

请按照以下所示的方式拆下4个固定螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian6.jpg" alt="pir" width={600} height="auto" /></p>

将载板与模块一起从机箱中取出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian7.jpg" alt="pir" width={600} height="auto" /></p>

## 将reComputer配备相机模块。

reComputer的载板都配有两个CSI接口。这些接口通常用于连接摄像头，用于一些识别项目。我们以J1010载板为例，指导您如何配备和使用。[Raspberry Pi Camera Module V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html) 在重启计算机.

-**第一步**。将摄像头模块安装在载板上。

!!!Note
    安装之前，请关闭电脑，拔掉电源线，并打开机箱的顶盖。
为了方便以下演示，我们从机箱和模块中取下托架板。实际操作只需要打开顶盖。

选择您想要使用的CSI连接器，然后轻轻地将两侧的黑色保持卡拉起。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/chai.jpg" /></div>

确保在将电缆插入插槽之前将黑色槽口放在一边。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/cha.jpg" /></div>

注意电缆的方向。您可以看到电缆引脚的一侧面向载板，而蓝色的一侧朝外。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/que.JPG" /></div>

- **步骤 2**。打开并启动 reComputer。

将相机电缆插入后，确保模块、载板和外围设备都已正确安装在位，然后通电。

- **第三步**。检查相机是否被识别。

在命令行窗口中输入以下命令，查看当前是否有相机设备可用。

```shell
ls /dev/video0 
```

如果输出如下，表示相机已成功检测。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/50.jpg" /></div>

如果您找不到设备文件，请检查您的排线是否正确放置，并确保您的树莓派摄像头是V2版本，因为V1版本无法识别。

- 第四步。应用相机。

使用`sensor_mode`属性与GStreamer nvarguscamerasrc元素一起，以指定相机。有效值为0或1（如果未指定默认为0）。

```shell
# Simple Test
# Ctrl^C to exit
# sensor_id selects the camera: 0 or 1 on Jetson Nano B01
$ gst-launch-1.0 nvarguscamerasrc sensor_id=0 ! nvoverlaysink
```

在命令行窗口中，您可以使用以下命令来测试相机的使用情况。

运行此命令后，reComputer 将在全屏显示由相机捕捉的画面，直到您按下 `Ctrl+C`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/51.jpg" /></div>

如果您有更多的相机使用需求，您可以参考[CSI-Camera 项目](https://github.com/JetsonHacksNano/CSI-Camera)自行探索和学习。

## 为reComputer配备无线模块。

在这里，我们将向您展示如何在 reComputer 上安装 M.2 Key E 无线模块。

所需设备和配件：

- reComputer
- [英特尔® 双频无线AC 8265 无线模块](https://www.intel.cn/content/www/cn/zh/products/sku/123742/intel-dual-band-wirelessac-8265-desktop-kit/specifications.html)
- 2个IPEX到SMA母头外置天线适配器和SMA公头天线用于WIFI模块。
- 螺丝刀和螺丝

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian8.jpg" alt="pir" width={600} height="auto" /></p>

!!!Note
    安装M.2 Key E的无线模块需要额外的天线。由于模块在机箱内，甚至可能被挤压在模块和载板之间。没有天线，信号强度将受到严重影响。

- **第一步**。从reComputer机箱中拆下载板。

在安装无线模块之前，请按照下面所示的方法将载板从reComputer机箱上拆下。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian9.jpg" alt="pir" width={600} height="auto" /></p>

- **第二步**. 拿掉硅胶保护套

机箱中有4个保留的天线开口，用硅胶塞堵住，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian10.jpg" alt="pir" width={600} height="auto" /></p>

选择两个外侧的孔，将硅胶塞从外壳的外侧挤压至内侧，然后从内部取出硅胶塞以暴露天线孔。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian11.jpg" alt="pir" width={600} height="auto" /></p>

- **第三步**. 安装 SAM 头

请按照下图所示，在wifi孔中安装SAM头的螺母和螺母，注意将电缆端放置在机箱内。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian12.jpg" alt="pir" width={600} height="auto" /></p>

- **第四步**. 将无线模块插入M.2键E插槽。

!!!Note
    M.2 Key E接口位于载板的底部或顶部。对于不同的载板，请参考载板硬件布局。在安装之前，您可能需要将核心板从载板上取下。

请按照下面的图片，找到载板上的M.2 Key E接口，并将无线模块插入接口插槽中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian13.jpg" alt="pir" width={600} height="auto" /></p>

将无线模块牢固插入后，用螺丝固定。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian14.jpg" alt="pir" width={600} height="auto" /></p>

- **第五步**. 将2个IPEX插头插入无线模块的相应插座，连接方式是按钮连接，如下图所示。只需轻按即可，无需进行其他操作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian15.jpg" alt="pir" width={600} height="auto" /></p>

安装应该像下面显示的图一样。这时候，要小心不要弄断无线模块和SAM天线底座之间的电线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian16.jpg" alt="pir" width={600} height="auto" /></p>

- **第六步**. 将模块安装到底盘上。

小心将载板放入reComputer机箱中，然后安装螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian17.jpg" alt="pir" width={600} height="auto" /></p>

- **第7步**. 安装天线

将两个SAM公头天线安装到SAM母头插座并拧紧。这将是所有的硬件安装步骤。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian18.jpg" alt="pir" width={600} height="auto" /></p>

- **第8步**. 打开reComputer并连接到无线网络。

连接外围设备到 reComputer，然后通电。进入系统，在屏幕右上角打开网络选项。勾选**启用 Wi-Fi**选项后，您会看到附近的无线网络。选择可用的无线网络连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian19.jpg" alt="pir" width={800} height="auto" /></p>

恭喜，您已成功安装了无线模块并连接到网络。

## 硬件布局

### **J101 开发板**

**Top View**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ101v2.png" alt="pir" width={750} height="auto" /></p>

### **J202 开发板**

**正面**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20FRONT.png" alt="pir" width={750} height="auto" /></p>

**背面**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20BACK.png" alt="pir" width={750} height="auto" /></p>

### **Jetson A206搭载Jetson Nano的载板。**

单击[此处](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf)查看Jetson A206主板（配备Jetson Nano）的引脚布局以及操作接口。

**正面**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**背面**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboards.jpg" alt="pir" width={600} height="auto" /></p>

### **Jetson A206载板（配备Jetson Xavier NX）**

单击[此处](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf)查看搭载Jetson Nano的Jetson A206载板的引脚和操作接口。

**正面**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**背面**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboards.jpg" alt="pir" width={720} height="auto" /></p>

## 详细比较

|        产品       |                                                    reComputer J1010                                                   |                         reComputer J1020                        |                                                    reComputer J2011                                                   |                                                    reComputer J2012                                                   |
|:--------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|
|        Module        |                                                    Nano                                                    |                         Nano                         |                                                 Xavier NX                                                  |                                               Xavier NX 16GB                                               |
|        AI Perf       |                                                           472 GFLOPS                                                           |                                472 GFLOPS                                | 21 TOPS                                                                                                                        | 21 TOPS                                                                                                                        |
|          GPU         |                                                    128-core NVIDIA Maxwell™                                                    |                         128-core NVIDIA Maxwell™                         | 384-core NVIDIA Volta™ GPU                                                                                                     | 384-core NVIDIA Volta™ GPU                                                                                                     |
|          CPU         |                                                  Quad-core ARM A57 @ 1.43 GHz                                                  |                       Quad-core ARM A57 @ 1.43 GHz                       | 6-core NVIDIA Carmel ARM®v8.2 64-bit CPU 6 MB L2 + 4 MB L3                                                                     | 6-core NVIDIA Carmel ARM®v8.2 64-bit CPU 6 MB L2 + 4 MB L3                                                                     |
|        Memory        |                                                   4GB 64-bit LPDDR4 25.6GB/s                                                   |                        4GB 64-bit LPDDR4 25.6GB/s                        | 8 GB 128-bit LPDDR4x 59.7GB/s                                                                                                  | 8 GB 128-bit LPDDR4x 59.7GB/s                                                                                                  |
|        Storage       |                                                           16 GB eMMC                                                           |                                16 GB eMMC                                | 16 GB eMMC                                                                                                                     | 16 GB eMMC                                                                                                                     |
|     VIDEO ENCODER    |                             4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264)                            |  4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264) |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |
|     VIDEO DECODER    |                            4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264)                            | 4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) |
|   Gigabit Ethernet   |                                         1x RJ45 Gigabit Ethernet Connector (10/100/1000)                                        |              1x RJ45 Gigabit Ethernet Connector (10/100/1000)             | 1x RJ45 Gigabit Ethernet Connector (10/100/1000)                                                                                | 1x RJ45 Gigabit Ethernet Connector (10/100/1000)                                                                                |
|          USB         | 1 x  USB 3.0 Type A Connector;  2 x  USB 2.0 Type A Connector; 1 x  USB Type C for Device mode; 1 x  USB Type C for 5V power input |    4 x  USB 3.0 Type A Connector； 1 x  Micro-USB port for Device mode;    |                               4 x  USB 3.0 Type A Connector； 1 x  Micro-USB port for Device mode;                               |                               4 x  USB 3.0 Type A Connector； 1 x  Micro-USB port for Device mode;                               |
|  CSI Camera Connect  |                                          2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )                                         |               2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )              | 2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  | 2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  |
|        Display       |                                                          1x HDMI Type A                                                         |                            1xHDMI Type A; 1xDP                           | 1xHDMI Type A; 1xDP                                                                                                            | 1xHDMI Type A; 1xDP                                                                                                            |
|          FAN         |                                                         1x  FAN(5V PWM)                                                         |                              1x  FAN(5V PWM)                              | 1x  FAN(5V PWM)                                                                                                                 | 1x  FAN(5V PWM)                                                                                                                 |
|       M.2 KEY E      |                                                           1x M.2 Key E                                                          |                          1x M.2 Key E（Disabled）                         |                                                           1x M.2 Key E                                                          |                                                           1x M.2 Key E                                                          |
|       M.2 KEY M      |                                                                -                                                               |                                1x M.2 Key M                               | 1x M.2 Key M                                                                                                                    | 1x M.2 Key M                                                                                                                    |
|          RTC         |                                                          1x RTC Socket                                                          |                               1x RTC socket                               |                                                          1x RTC Socket                                                          |                                                          1x RTC Socket                                                          |
| Multifunctional port |                                                        1x  40-Pin header                                                        |                             1x  40-Pin header                             | 1x  40-Pin header                                                                                                               | 1x  40-Pin header                                                                                                               |
|  Power  |                                                       USB-Type C 5V⎓3A；                                                       |                              DC Jack 12V/2A                              | DC Jack 19V/4.74A (MAX 90W) MAX                                                                                                      | DC Jack 19V/4.74A (MAX 90W) MAX                                                                                                      |
|      Mechanical      |                                                     130 mm x 120 mm x 50 mm                                                    |                            130mm x120mm x 50mm                           |                                                       130mm x120mm x 50mm                                                      |                                                       130mm x120mm x 50mm                                                      |
|                      |                                                                                                                                |                                                                          |                                                                                                                                |                                                                                                                                |

## 技术规格

|  连接接口               |  J1010 Carrier Board                   |  Jetson A206 Carrier Board                                |
|--------------------------|--------------------------------------------------|--------------------------------------------------|
|  Jetson module connector |  1x Jetson SODIMM connector, 260-pin              |  1x Jetson SODIMM connector, 260-pin              |
|  USB Type A              |  1x USB 3.0 Type-A Connector 2x USB 2.0 Type A connectors                      |  4x USB 3.0 Type-A Connectors                      |
|  USB Micro Type B        |  -                                               |  1x USB Micro B, RA Female                        |
|  USB Type C              |  2x Type C connector                             |  -                                               |
|   Ethernet Port          |  1x RJ45 Gigabit Ethernet Connector (10/100/1000) |  1x RJ45 Gigabit Ethernet Connector (10/100/1000) |
|  Display Port            |  1xHDMI type A                          |  1xHDMI type A and 1xDP                          |
|  CSI Camera Connector    |  2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )   |  2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )   |
|  M.2 Key E               |  1x M.2 Key E Slot (75-pin) 2230                                     |  1x M.2 Key E Slot (75-pin) 2230                  |
|  M.2 Key M               |  -                                               |  1x M.2 Key M Slot (75-pin) NVME 2280             |
|  Multifunctional Port    |  2.0 Pitch 40 PIN                                |  2.0 Pitch 40 PIN                                |
|  Button Header           |  1x Button Header (1x12, 2.54mm pitch, RA)        |  1x Button Header (1x12, 2.54mm pitch, RA)        |
|  FAN Connector           |  1x Picoblade Header                              |  1x Picoblade Header                              |
|  CAN                     |  Diasabled                                       |  1x CAN Bus Header (1x4, 2.54mm pitch, RA)        |
|  RTC                     |  1x RTC Back-up Coin Cell Socket (CR1220)         |  1x RTC Back-up Coin Cell Socket (CR1225)         |
|   Power                  |  1x Type C connector                            |  1x DC Input Power TE Connector                   |

## 技术支持和产品讨论。

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

