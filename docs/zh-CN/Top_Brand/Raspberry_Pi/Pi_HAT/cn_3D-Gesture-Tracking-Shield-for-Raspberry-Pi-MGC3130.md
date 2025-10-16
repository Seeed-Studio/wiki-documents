---
description: 3D Gesture Tracking Shield for Raspberry Pi MGC3130
title: 树莓派 3D 手势跟踪扩展板 MGC3130
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/preview-wiki.jpg)

这款扩展板基于 Microchip [MGC3130](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/MGC3030-3130-datasheet.pdf) 芯片，为树莓派提供 3D 手势识别和运动跟踪功能。它可以捕获 x y z 位置信息，还可以进行接近感应和触摸感应，支持轻拍和双击。

如下图所示，识别区域分为两部分：分布在周围的条带区域和中央面板。

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/detect-part.jpg)

<div align="center"><b>图 1.</b><i>感应区域</i></div>

条带区域可以感应方向变化，包括北、南、西、东。中央区域可以感应触摸、轻拍、双击以及上方空中的手势。这就是为什么我们称它为 3D 手势和跟踪扩展板，你甚至不需要直接触摸中央区域，只需在中央区域上方挥手，这个扩展板就能感应到你的动作。

得益于 Microchip 的专利 GestIC® 技术，这款扩展板利用电近场感应来检测动作。当手接近时，扩展板在中央面板上方产生磁场，手会干扰磁场，扩展板下方的磁场接收器可以检测到这种变化。

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/MF1.jpg)
<div align="center"><b>图 2.</b><i>无手时的磁场</i></div>

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/MF2.jpg)
<div align="center"><b>图 3.</b><i>有手时的磁场</i></div>

这个扩展板通过 I2C 接口与树莓派通信，我们还预留了一个 Grove I2C 连接器，以防你需要与其他模块配合使用。

多么神奇的模块，有了它的帮助，你可以用手势控制灯光、电视、音响...只需释放你的想象力，创造更多神奇的项目。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/iLav34w77ns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130-p-4073.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 识别 3D 手势和 x、y、z 位置数据
- 接近感应和触摸感应
- 内置 Colibri 手势套件（在芯片上运行）
- 先进的 3D 信号处理单元
- 检测范围：0 到 10 厘米
- 片上自动校准
- 兼容各种型号的树莓派 2、3、4 和 zero

## 规格参数

|项目|数值|
|---|---|
|工作电压|3.3V|
|主芯片|MGC3130|
|检测范围|0 到 10 cm|
|温度范围|-20°C 到 +85°C|
|接收器灵敏度| &lt;1 fF|
|位置速率|200 位置/秒|
|空间分辨率|高达 150 dpi|
|载波频率|44 kHz 到 115 kHz|
|输出接口|I2C(默认 I2C 地址: 0X42)|
|毛重|55g|
|净重|17.6g|
|包装尺寸|115mm*75mm*25mm|
|尺寸|65mm*56mm|

## 应用场景

- 笔记本电脑/键盘/PC 外设
- 家庭自动化
- 游戏控制器
- 音频控制

## 硬件概述

### 引脚定义

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/hardware-overview.png)

## 与 Raspberry Pi 配合使用

### 启用 I2C

- 步骤 1. 运行 sudo raspi-config。
- 步骤 2. 使用向下箭头选择 5 Interfacing Options。
- 步骤 3. 向下箭头选择 P5 I2C。
- 步骤 4. 当询问是否启用 I2C 时选择 yes。
- 步骤 5. 如果询问是否自动加载内核模块，也选择 yes。
- 步骤 6. 使用右箭头选择按钮。
- 步骤 7. 当询问是否重启时选择 yes。

:::tip
有关 raspi-config 的更多信息，请参考 [https://www.raspberrypi.org/documentation/configuration/raspi-config.md](https://www.raspberrypi.org/documentation/configuration/raspi-config.md)。
:::

### 安装 ncurses

**步骤 1**：从[这里](https://invisible-mirror.net/archives/ncurses/)下载

```
cd ~
wget https://invisible-mirror.net/archives/ncurses/ncurses-6.1.tar.gz
```

**步骤 2**: 安装 ncurses

```
tar -xvf ncurses-6.1.tar.gz
cd ncurses-6.1/
./configure
make
sudo make install
```

**步骤 3**: 检查 ncurse 是否安装成功

```
ncurses6-config --version
```

### 运行演示

**步骤 1**: 安装 mgc3103 并运行 mgc3103。

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_mgc3x30.git
cd Seeed_mgc3x30
make clean && make
./mgc3130
```

**步骤 2**: 输出结果如下。

```
 *
 *                                                          *
 * Position X : 65534                                       *
 * Position Y : 0                                           *
 * Position Z : 38465                                       *
 *                                                          *
 * Gesture :                                                *
 *                                                          *
 * Airwheel angle : -1530                                   *
 *                                                          *
 * Touch electrode :
 * Tap electrode :
 * Double Tap electrode :
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *
```

- **Position X/Y/Z**: 左下角为 X=0, Y=0。Z 是高度。最大值为 65535。
- **Gesture**: 在模块上方挥动手部，您可以看到挥动方向，如西到东、东到西、南到北和北到南。
- **Airwheel**：数值会随顺时针方向增加，逆时针方向减少。显示会有一些延迟。
- **Touch electrode**: 将手指放在特定区域，您将得到 Center、East、West、South 和 North。
- **Tap electrode**: 在特定区域轻敲手指，您将得到 Center、East、West、South 和 North。  
- **Double Tap electrode**: 在特定区域双击手指，您将得到 Center、East、West、South 和 North。  

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/__9Vas2kGHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/3D%20Gesture%20%26%20Tracking%20Shield%20for%20Raspberry%20Pi%20(MGC3130)%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [树莓派3D手势跟踪扩展板 MGC3130 Eagle文件](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/3D%20Gesture%20%26%20Tracking%20Shield%20for%20Raspberry%20Pi%20(MGC3130)%20v1.0.zip)

- **[PDF]** [MGC3030-3130 数据手册](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/MGC3030-3130-datasheet.pdf)

- **[库文件]** [Seeed_mgc3x30 库](https://github.com/Seeed-Studio/Seeed_mgc3x30)

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