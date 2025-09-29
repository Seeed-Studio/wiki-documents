---
description: reComputer for Jetson Series 
title: reComputer 系列硬件布局
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Series_Hardware_Layout
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# reComputer 硬件布局

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian.png" alt="pir" width={600} height="auto" /></p>

您将在这里了解 reComputer for Jetson 系列硬件布局的基本概念。同时，您将了解如何从载板上拆卸和安装核心板，如何安装摄像头、M.2 Wi-Fi 模块或硬盘等。

## reComputer 系列放置

面向 reComputer 接口背板时，机箱右侧有 4 个防滑垫，便于立放，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian1.png" alt="pir" width={600} height="auto" /></p>

reComputer 机箱底部为悬挂结构，机箱可以用绑带固定在一些不便的结构上。机箱底板有 4 个固定孔，便于固定在立面或斜坡上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/Jetsonbackspec2.png" alt="pir" width={800} height="auto" /></p>

## reComputer 系列顶盖

面向 reComputer 接口背板时，机箱右侧有 4 个防滑垫，在那里可以看到一个金属按钮，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly.jpg" alt="pir" width={500} height="auto" /></p>

向上推按钮以抬起机箱顶盖，然后您可以将其抬起打开以拆下顶盖。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly1.jpg" alt="pir" width={500} height="auto" /></p>

## 从载板上拆卸核心板

打开机箱后，您可以看到插在载板上的模块，如下图所示。按照以下步骤可以从载板上拆卸模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 1**：在拆卸核心版之前，首先必须确认风扇电源是否已连接。如果已连接，您需要从插头上拔下风扇电源（对于 Jetson Nano，可能没有风扇，您可以跳过此步骤）。

- **步骤 2**：用十字螺丝刀拆下固定核心板的螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 3**：向外打开载板上的夹子，核心板会自动弹起。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly3.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 4**：斜向上拆下核心板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly4.jpg" alt="pir" width={500} height="auto" /></p>

## 将模块安装到载板上

- **步骤 1**. 在载板上找到对应的 Jetson SODIMM 连接器触点和模块上的连接器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 2**. 将模块以约 20 度的角度斜插入载板的插槽中。向下按压，模块将固定在载板上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion2.jpg" alt="pir" width={500} height="auto" /></p>

!!! Note
    您可能会发现在正确安装的情况下，接口处会显示一些连接器触点。一旦暴露出许多连接器触点，连接就会不稳定。
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion3.jpg" alt="pir" width={800} height="auto" /></p>

- **步骤 3**. 使用十字螺丝刀拧紧螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **步骤 4**. 如果模块包含散热风扇，请将风扇的电源插头插入载板上的电源插座。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

## 从 reComputer 机箱中取出载板

当我们需要安装 M.2 模块或 CSI 摄像头等操作时，需要将载板从 reComputer 机箱中取出以便更容易操作。载板通过 4 颗螺丝固定在机箱底座上，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian5.jpg" alt="pir" width={600} height="auto" /></p>

如下图所示，拆除 4 颗固定螺丝：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian6.jpg" alt="pir" width={600} height="auto" /></p>

将载板连同模块一起从机箱中取出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian7.jpg" alt="pir" width={600} height="auto" /></p>

## 为 reComputer 配备摄像头模块

两款 reComputer 载板都有两个 CSI 接口。这些接口通常用于连接摄像头进行一些识别项目。这里我们以 J1010 载板为例，指导您在 reComputer 上配备和使用 [Raspberry Pi Camera Module V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)。

- **步骤 1**. 将摄像头模块安装到载板上

!!!Note
    安装前，请关闭 reComputer，拔掉电源，并打开机箱顶盖。
    为了方便下面的演示，我们从机箱和模块中取出了载板。实际操作只需要打开顶盖即可。

选择您要使用的 CSI 连接器，然后轻轻向上翻起两侧的黑色固定卡槽。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/chai.jpg" /></div>

在将线缆插入插槽之前，确保将黑色卡槽拨到一边。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/cha.jpg" /></div>

注意线缆的方向。您可以看到线缆引脚的一面朝向载板，蓝色的一面朝外。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/que.JPG" /></div>

- **步骤 2**. 开机启动 reComputer。

插入摄像头线缆后，确保模块、载板和外设都已安装到位。然后开机。

- **步骤 3**. 检查摄像头是否被识别。

在命令行窗口中输入以下命令，查看当前是否有可用的摄像头设备。

```shell
ls /dev/video0 
```

如果输出如下所示，则表示摄像头已成功检测到。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/50.jpg" /></div>

如果您没有看到设备文件，请检查您的排线方向是否正确，并确保您的树莓派摄像头是V2版本，因为V1版本无法被识别。

- **步骤 4**. 应用摄像头

您可以在GStreamer nvarguscamerasrc元素中使用`sensor_mode`属性来指定使用哪个摄像头。有效值为0或1（如果未指定则默认为0），即

```shell
# Simple Test
# Ctrl^C to exit
# sensor_id selects the camera: 0 or 1 on Jetson Nano B01
$ gst-launch-1.0 nvarguscamerasrc sensor_id=0 ! nvoverlaysink
```

您可以在命令行窗口中使用以下命令来测试摄像头的使用。

运行此命令后，reComputer 将全屏显示摄像头捕获的画面，直到您按下 `Ctrl+C`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/51.jpg" /></div>

如果您有更多摄像头使用需求，可以参考 [CSI-Camera 项目](https://github.com/JetsonHacksNano/CSI-Camera) 自行探索和学习。

## 为 reComputer 配备无线模块

这里我们将向您展示如何在 reComputer 上安装 M.2 Key E 无线模块。

所需设备和配件：

- reComputer
- [Intel® 双频无线-AC 8265 无线模块](https://www.intel.cn/content/www/cn/zh/products/sku/123742/intel-dual-band-wirelessac-8265-desktop-kit/specifications.html)
- 2 个 IPEX 转 SMA 母头外部天线适配器和 SMA 公头天线（用于 WIFI 模块）
- 十字螺丝刀和螺丝

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian8.jpg" alt="pir" width={600} height="auto" /></p>

!!!Note
    安装 M.2 Key E 无线模块需要额外的天线。因为模块在机箱内，甚至可能被压在模块和载板之间。没有天线，信号强度会受到很大影响。

- **步骤 1**. 从 reComputer 机箱中取出载板

在安装无线模块之前，从 reComputer 机箱中取出载板，如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian9.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 2**. 移除机箱硅胶塞

机箱中有 4 个预留的天线开口，用硅胶塞堵住，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian10.jpg" alt="pir" width={600} height="auto" /></p>

选择两个外侧孔，从机箱外侧向机箱内侧挤压硅胶塞，然后从内侧拉出硅胶塞，露出天线孔。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian11.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 3**. 安装 SAM 接头

如下图所示，将 SAM 接头的螺母和螺帽安装到 wifi 孔上，注意将电缆端放在机箱内。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian12.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 4**. 将无线模块插入 M.2 Key E 端口

!!!Note
    M.2 Key E 接口位于载板的底部或顶部。对于不同的载板，请参考载板硬件布局。安装前，您可能需要从载板上取下核心板。

如下图所示，在载板上找到 M.2 Key E 接口，将无线模块插入接口插槽。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian13.jpg" alt="pir" width={600} height="auto" /></p>

无线模块牢固插入后，用螺丝固定。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian14.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 5**. 将 2 个 IPEX 插头插入无线模块的相应插座，连接是按钮连接，如下图所示。只需按下即可，无需更多操作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian15.jpg" alt="pir" width={600} height="auto" /></p>

安装应如下图所示。此时，小心不要弄断无线模块和 SAM 天线底座之间的线缆。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian16.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 6**. 将模块安装到机箱

小心地将载板放入 reComputer 机箱，然后安装螺丝。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian17.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 7**. 安装天线

将两个 SAM 公头天线安装到 SAM 母头插座并拧紧。这样就完成了所有硬件安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian18.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 8**. 启动 reComputer 并连接到无线网络

将外设连接到 reComputer，然后开机。进入系统并打开屏幕右上角的网络选项。勾选 **启用 Wi-Fi** 选项后，您将看到附近的无线网络。选择可用的无线网络连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian19.jpg" alt="pir" width={800} height="auto" /></p>

恭喜，您已成功安装无线模块并连接到网络。## 硬件布局

## 硬件布局

### **J101 载板**

**顶视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ101v2.png" alt="pir" width={750} height="auto" /></p>

### **J202 载板**

**顶视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20FRONT.png" alt="pir" width={750} height="auto" /></p>

**底视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20BACK.png" alt="pir" width={750} height="auto" /></p>

### **Jetson A206 载板（搭载 Jetson Nano）**

*点击[这里](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf)查看 Jetson A206 载板（搭载 Jetson Nano）到操作接口的引脚定义。*

**顶视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**底视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboards.jpg" alt="pir" width={600} height="auto" /></p>

### **Jetson A206 载板（搭载 Jetson Xavier NX）**

*点击[这里](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf)查看 Jetson A206 载板（搭载 Jetson Nano）到操作接口的引脚定义。*

**顶视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**底视图**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboards.jpg" alt="pir" width={720} height="auto" /></p>

## 详细对比

|        产品       |                                                    reComputer J1010                                                   |                         reComputer J1020                        |                                                    reComputer J2011                                                   |                                                    reComputer J2012                                                   |
|:--------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|
|        模块        |                                                    Nano                                                    |                         Nano                         |                                                 Xavier NX                                                  |                                               Xavier NX 16GB                                               |
|        AI 性能       |                                                           472 GFLOPS                                                           |                                472 GFLOPS                                | 21 TOPS                                                                                                                        | 21 TOPS                                                                                                                        |
|          GPU         |                                                    128核 NVIDIA Maxwell™                                                    |                         128核 NVIDIA Maxwell™                         | 384核 NVIDIA Volta™ GPU                                                                                                     | 384核 NVIDIA Volta™ GPU                                                                                                     |
|          CPU         |                                                  四核 ARM A57 @ 1.43 GHz                                                  |                       四核 ARM A57 @ 1.43 GHz                       | 6核 NVIDIA Carmel ARM®v8.2 64位 CPU 6 MB L2 + 4 MB L3                                                                     | 6核 NVIDIA Carmel ARM®v8.2 64位 CPU 6 MB L2 + 4 MB L3                                                                     |
|        内存        |                                                   4GB 64位 LPDDR4 25.6GB/s                                                   |                        4GB 64位 LPDDR4 25.6GB/s                        | 8 GB 128位 LPDDR4x 59.7GB/s                                                                                                  | 8 GB 128位 LPDDR4x 59.7GB/s                                                                                                  |
|        存储       |                                                           16 GB eMMC                                                           |                                16 GB eMMC                                | 16 GB eMMC                                                                                                                     | 16 GB eMMC                                                                                                                     |
|     视频编码器    |                             4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264)                            |  4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264) |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |
|     视频解码器    |                            4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264)                            | 4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) |
|   千兆以太网   |                                         1x RJ45 千兆以太网连接器 (10/100/1000)                                        |              1x RJ45 千兆以太网连接器 (10/100/1000)             | 1x RJ45 千兆以太网连接器 (10/100/1000)                                                                                | 1x RJ45 千兆以太网连接器 (10/100/1000)                                                                                |
|          USB         | 1 x  USB 3.0 Type A 连接器;  2 x  USB 2.0 Type A 连接器; 1 x  USB Type C 设备模式接口; 1 x  USB Type C 5V电源输入接口 |    4 x  USB 3.0 Type A 连接器； 1 x  Micro-USB 设备模式接口;    |                               4 x  USB 3.0 Type A 连接器； 1 x  Micro-USB 设备模式接口;                               |                               4 x  USB 3.0 Type A 连接器； 1 x  Micro-USB 设备模式接口;                               |
|  CSI 摄像头连接  |                                          2x CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2 )                                         |               2x CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2 )              | 2x CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  | 2x CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  |
|        显示       |                                                          1x HDMI Type A                                                         |                            1xHDMI Type A; 1xDP                           | 1xHDMI Type A; 1xDP                                                                                                            | 1xHDMI Type A; 1xDP                                                                                                            |
|          风扇         |                                                         1x  风扇(5V PWM)                                                         |                              1x  风扇(5V PWM)                              | 1x  风扇(5V PWM)                                                                                                                 | 1x  风扇(5V PWM)                                                                                                                 |
|       M.2 KEY E      |                                                           1x M.2 Key E                                                          |                          1x M.2 Key E（已禁用）                         |                                                           1x M.2 Key E                                                          |                                                           1x M.2 Key E                                                          |
|       M.2 KEY M      |                                                                -                                                               |                                1x M.2 Key M                               | 1x M.2 Key M                                                                                                                    | 1x M.2 Key M                                                                                                                    |
|          RTC         |                                                          1x RTC 插座                                                          |                               1x RTC 插座                               |                                                          1x RTC 插座                                                          |                                                          1x RTC 插座                                                          |
| 多功能端口 |                                                        1x  40针排针                                                        |                             1x  40针排针                             | 1x  40针排针                                                                                                               | 1x  40针排针                                                                                                               |
|  电源  |                                                       USB-Type C 5V⎓3A；                                                       |                              DC 插孔 12V/2A                              | DC 插孔 19V/4.74A (最大 90W) 最大                                                                                                      | DC 插孔 19V/4.74A (最大 90W) 最大                                                                                                      |
|      机械尺寸      |                                                     130 mm x 120 mm x 50 mm                                                    |                            130mm x120mm x 50mm                           |                                                       130mm x120mm x 50mm                                                      |                                                       130mm x120mm x 50mm                                                      |
|                      |                                                                                                                                |                                                                          |                                                                                                                                |                                                                                                                                |

## 载板技术规格

|  连接器               |  J1010 载板                   |  Jetson A206 载板                                |
|--------------------------|--------------------------------------------------|--------------------------------------------------|
|  Jetson 模块连接器 |  1x Jetson SODIMM 连接器，260针              |  1x Jetson SODIMM 连接器，260针              |
|  USB Type A              |  1x USB 3.0 Type-A 连接器 2x USB 2.0 Type A 连接器                      |  4x USB 3.0 Type-A 连接器                      |
|  USB Micro Type B        |  -                                               |  1x USB Micro B，直角母头                        |
|  USB Type C              |  2x Type C 连接器                             |  -                                               |
|   以太网端口          |  1x RJ45 千兆以太网连接器 (10/100/1000) |  1x RJ45 千兆以太网连接器 (10/100/1000) |
|  显示端口            |  1xHDMI type A                          |  1xHDMI type A 和 1xDP                          |
|  CSI 摄像头连接器    |  2x CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2 )   |  2x CSI 摄像头 (15 pos, 1mm pitch, MIPI CSI-2 )   |
|  M.2 Key E               |  1x M.2 Key E 插槽 (75针) 2230                                     |  1x M.2 Key E 插槽 (75针) 2230                  |
|  M.2 Key M               |  -                                               |  1x M.2 Key M 插槽 (75针) NVME 2280             |
|  多功能端口    |  2.0 间距 40 针                                |  2.0 间距 40 针                                |
|  按钮接头           |  1x 按钮接头 (1x12, 2.54mm 间距, 直角)        |  1x 按钮接头 (1x12, 2.54mm 间距, 直角)        |
|  风扇连接器           |  1x Picoblade 接头                              |  1x Picoblade 接头                              |
|  CAN                     |  禁用                                       |  1x CAN 总线接头 (1x4, 2.54mm 间距, 直角)        |
|  RTC                     |  1x RTC 备用纽扣电池座 (CR1220)         |  1x RTC 备用纽扣电池座 (CR1225)         |
|   电源                  |  1x Type C 连接器                            |  1x DC 输入电源 TE 连接器                   |

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
