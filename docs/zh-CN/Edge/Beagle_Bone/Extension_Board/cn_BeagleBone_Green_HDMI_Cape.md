---
description: BeagleBone® Green HDMI 扩展板
title: BeagleBone® Green HDMI 扩展板
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BeagleBone_Green_HDMI_Cape
last_update:
  date: 1/10/2022
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape.jpg)

**BeagleBone® Green HDMI 扩展板** 是一个通用的集成 HDMI 连接器，用于将您的 BeagleBone® 扩展到各种外设，例如电脑显示器、视频投影仪、数字电视或数字音频设备。该板配备了一个标准的 HDMI 插座，可以通过标准的 HDMI-to-HDMI 电缆连接到显示器。支持所有高清信号，输出分辨率为 1280×720，同时也可以用于传输音频信息。此产品将使基于 BeagleBone® 板的应用在不同环境下更加多样化。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/BeagleBone-Green-HDMI-Cape-p-2570.html)

特点
--------

- 即插即用。
- 适配不同的输入信号。
- 720P（1280×720）输出分辨率。

规格
-------------

| 参数                     | 值                                                                                                   |
|--------------------------|-----------------------------------------------------------------------------------------------------|
| 输入电压                | 5V/3.3V                                                                                             |
| 最大工作电流            | 80 mA                                                                                               |
| HDMI 版本               | 1.2 版本                                                                                           |
| 最大输出分辨率          | 1280x720 @60Hz                                                                                      |
| 音频传输                | 支持                                                                                                |
| 芯片                    | IT66121 HDMI 编码器（[数据手册](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/IT66121FN_Datasheet_v1.02.pdf)) |

支持的平台
-------------------

应用创意
-----------------

您可以将 BeagleBone® 扩展到更多的多媒体外设，例如电脑显示器、视频投影仪、数字电视或数字音频设备。

硬件概览
-----------------

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape_Componentss.jpg)

**IT66121 HDMI 编码器**

- HDMI 发送器

**扩展板 I2C 地址开关**

- 用于切换不同扩展板地址标识符。

**扩展板 EEPROM**

- 此扩展板的 EEPROM 存储器。

**HDMI 连接器**

### 零件清单

|                            |          |
|----------------------------|----------|
| **零件名称**              | 数量     |
| BeagleBone® Green HDMI 扩展板 | 1        |

快速入门
-----------

***本部分将向您展示如何通过几个步骤开始使用此产品。***

### 准备工作

- BeagleBone® Green 板 × 1。
- USB 电缆（A 型到 micro B 型）× 1。
- 标准 HDMI 电缆（A 型到 A 型）× 1。

### 硬件连接

- 步骤 1. 请按照下图连接硬件。
![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape_Connection_1200_s.jpg)

- 步骤 2. 将 USB 电缆（C 型端）插入您的电脑。

### 软件

- 步骤 1. 请从 beaglebone.org 下载 [Debian 8.10 2018-02-01 4GB SD SeeedStudio IoT](https://debian.beagleboard.org/images/bone-debian-8.10-seeed-iot-armhf-2018-02-01-4gb.img.xz) 镜像。
- 步骤 2. 使用 [Etcher](https://etcher.io/) 将镜像烧录到 SD 卡。
- 步骤 3. 我们可以在屏幕上看到 Linux 命令行。
- 步骤 4. 如果我们想使用图形界面，请按照以下说明安装 lxde。

```
sudo apt-get update 
sudo apt-get install lxde lxde-core lxde-icon-theme
```

#### 故障排除

1. 电脑显示器上没有显示 BeagleBone® 桌面操作系统？请尝试以下步骤之一：

    - 关闭显示器电源并重新启动。
    - 按下 BeagleBone® Green 板上的 RESET 按钮。
    - 按下 BeagleBone® Green 板上的 POWER 按钮，然后再次按下。

    ![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/Beaglebone-Green_s.jpg)

2. 电脑鼠标无法工作（未供电）？
    - 按下 BeagleBone® Green 板上的 RESET 按钮并等待启动。

3. 如何快速拆卸 BeagleBone® Green HDMI 扩展板？
    - 先用手拉出带 HDMI 插座的一端，然后拉出另一端。如有必要，重复前两个步骤。

4. 如果 lxde 图形界面不断要求输入 wicd 密码，请按照以下说明操作。

    - 步骤 1. 请忽略它。
    - 步骤 2. 打开终端，运行以下命令。

    ```
    rm /etc/resolv.conf
    ln -s /run/resolvconf/resolv.conf
    rm /var/lib/wicd/resolv.conf.orig
    ln -s /run/resolvconf/resolv.conf /var/lib/wicd/resolv.conf.orig
    sudo service wicd start
    sudo reboot
    ```

    - 步骤 3. 请使用 wicd 图形工具连接到 WiFi。
    - 步骤 4. 我们可以使用 WiFi 和 SSH 工具。

演示
----

这段 [视频](https://www.youtube.com/watch?v=-xvbXSd_9TY&feature=youtu.be) 展示了如何使用 BeagleBone® Green HDMI 扩展板上网和播放音频。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/Schematic_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [原理图文件](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/Schematic_Files.zip)
- [HDMI Cape Beaglebone 图片](https://drive.google.com/open?id=15wXOtG4pZMifNoldoSvdOX9sBrev733L)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>