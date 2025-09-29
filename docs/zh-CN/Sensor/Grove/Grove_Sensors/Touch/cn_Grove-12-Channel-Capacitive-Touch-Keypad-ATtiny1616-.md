---
description: Grove 12通道电容式触摸键盘 (ATtiny1616)
title: Grove 12通道电容式触摸键盘 (ATtiny1616)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki.jpg)

Grove 12按键电容式触摸键盘基于ATtiny1616构建，这是一个运行频率高达16 MHz的AVR® 8位处理器。ATtiny1616是一款低功耗、高性能芯片，集成了QTouch®外设触摸控制器，支持带有接近感应和驱动屏蔽的电容式触摸接口。使用这个模块，您可以轻松创建一个arduino密码键盘或DIY手机键盘。

我们将这个键盘制作成3x4形式，就像手机键盘的布局一样。传统键盘需要3条垂直线和4条水平线进行扫描，这将占用微控制器的7个I/O引脚。借助ATtiny1616和Grove连接器，Grove - 12通道电容式触摸键盘只需要RX和TX两个引脚。您可以轻松地将此模块与具有硬件UART接口的微控制器一起使用，或者您可以使用软件UART通过两个普通I/O引脚读取按键输入。

总而言之，Grove 12按键电容式触摸键盘是一个易于使用的模块，需要很少的代码，特别是当您将其与[Grove兼容主板](https://www.seeedstudio.com/seeeduino-boards-c-987.html)一起使用时，无需焊接，即插即用。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 低功耗ATtiny1616控制器
- 3.3V / 5V兼容
- 电容式触摸，高灵敏度
- 12按键键盘
- 4引脚Grove UART连接器
- 板载LED指示灯

## 应用

- 手机键盘
- 密码访问
- 扩展输入接口

## 引脚图

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg" alt="Touch Keypad hardware" title="hardware overview" />
    <figcaption><b>图 1</b>. <i>硬件概览</i></figcaption>
  </a>
</figure>
</div>

## 规格参数

|参数|值|
|---|---|
|供电电压|3.3V / 5V|
|CPU| AVR® 8位CPU @ 16MHz|
|传感器类型|电容式触摸键盘|
|按键数量|12|
|工作温度范围|-40°C 至 105°C|
|输出接口|UART|
|固件下载接口|UPDI|

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 开始使用

### 与 Arduino 一起使用

**所需材料**

| Seeeduino V4.2 | Base Shield |Grove 12 按键电容式触摸键盘|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png)
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Baseshield 的组合。

:::note
**1** 请轻轻插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定您的线缆是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

#### 硬件连接

- **步骤 1.** 将 Grove 12 通道电容式触摸键盘连接到 Base Shield 的 **D2** 端口。

> 如果您使用的是 SAM 开发板，则应连接到 **UART** 端口。更多详情请参考表 1

|开发板|UART 类型|连接端口|
|-----|---------|------------|
|AVR 开发板（如 Seeeduino V4.2）|软件 UART|D2,D3|
|SAM 开发板（如 Seeeduino Lotus M0+）|硬件 UART|UART|

<div align="center"><b>表 1.</b><i>UART 端口选择</i></div>

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki-connect.jpg)

#### 软件

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [12_Channel_Keypad.ino](https://github.com/Seeed-Studio/Seeed_ATtiny1616/blob/master/12_Channel_Keypad.ino)。

- **步骤 2**. 然后打开 `12_Channel_Keypad.ino`，或者您可以直接将以下代码复制到新的 Arduino 草图中。

```cpp
#include "SoftwareSerial.h"

#if defined(ARDUINO_ARCH_AVR)
#define SERIAL Serial
SoftwareSerial mySerial(2,3);
#define TRANS_SERIAL  mySerial
#elif defined(ARDUINO_ARCH_SAMD)
#define SERIAL SerialUSB
#define TRANS_SERIAL  Serial
#else

#endif


//RX=2,TX=3(D2) Software Serial Port

void setup() {
 TRANS_SERIAL.begin(9600); 

    SERIAL.begin(9600);  // start serial for output
    SERIAL.println("Version:v1.0");
}

void loop() {
    printData();
}

/*
* data mapping:E1---1；E2---2；E3---3；E4---4；E5---5；E6---6；
*              E7---7；E8---8；E9---9；EA---*；EB---0；EC---#；
*/
void printData() {
    while(TRANS_SERIAL.available()) {
        uint8_t data = TRANS_SERIAL.read();
        switch(data) {
                case 0xE1 :
                    SERIAL.println("1");
                    break;
                case 0xE2 :
                    SERIAL.println("2");
                    break;
                case 0xE3 :
                    SERIAL.println("3");
                    break;
                case 0xE4 :
                    SERIAL.println("4");
                    break;
                case 0xE5 :
                    SERIAL.println("5");
                    break;
                case 0xE6 :
                    SERIAL.println("6");
                    break;
                case 0xE7 :
                    SERIAL.println("7");
                    break;
                case 0xE8 :
                    SERIAL.println("8");
                    break;
                case 0xE9 :
                    SERIAL.println("9");
                    break;
                case 0xEA :
                    SERIAL.println("*");
                    break;
                case 0xEB :
                    SERIAL.println("0");
                    break;
                case 0xEC :
                    SERIAL.println("#");
                    break;
                default:
                    break;
            }
    }

}

```

- **步骤 3.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 4.** 点击 **工具-> 串口监视器** 打开 Arduino IDE 的**串口监视器**。或者同时按下 `ctrl`+`shift`+`m` 键。将波特率设置为 **9600**。

:::tip
现在，触摸键盘，监视器将输出相应的按键。
:::

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/arduino-output.jpg" alt="grove keypad demo" title="output" />
  </figure>
</div>

### 与 Raspberry pi 一起使用

**所需材料**

| Raspberry pi | Grove Base Hat for RasPi| Grove 12 按键电容式触摸键盘 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html)|

- **步骤 1**. 将 Grove Base Hat 插入树莓派。

- **步骤 2**. 将 Grove 12 按键电容式触摸键盘连接到 Base Hat 的 **UART** 端口。

- **步骤 3**. 给树莓派上电。

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pii-connect.jpg)

#### 软件

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

##### UART 设置

开始之前，我们需要配置树莓派的 UART。

- 步骤 1. 启用树莓派3的 **UART0**。

```
sudo nano /boot/config.txt
```

然后在 **config.txt** 文件末尾添加内容 `dtoverlay=pi3-disable-bt`

按 `ctrl`+`x` 退出 nano，按 `y` 保存修改。

- 步骤 2. 禁用系统服务以使用 UART0。

```
sudo systemctl disable hciuart
```

:::note
Pi3-disable-bt 禁用蓝牙设备并将 UART0/ttyAMA0 恢复到 GPIO 14 和 15。还需要禁用初始化调制解调器的系统服务，这样它就不会使用 UART：sudo systemctl disable hciuart。
:::

- 步骤 3. 删除 **cmdline.txt** 中的 `console=serial0,115200`。

```
sudo nano /boot/cmdline.txt
```

然后删除此文件中的 `console=serial0,115200`。

:::note
        如果您在此 txt 文件中找不到 `console=serial0,115200`，请跳过此步骤。
:::

- 步骤 4. 重启树莓派

```
sudo reboot
```

更多详细信息，请查看官方的 [Raspberry Pi UART Config](https://www.raspberrypi.org/documentation/configuration/uart.md)

##### 树莓派演示

- **步骤 1**. 按照 [Setting Software](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。

系统环境成功配置后，您可以看到如下提示：

```cpp
Running setup.py install for grove.py ... done
Successfully installed grove.py-0.6
#######################################################
  Lastest Grove.py from github install complete   !!!!!
#######################################################

```

现在，输入 'ls'，您可以在根目录下找到 **grove.py** 文件夹。

```cpp
pi@raspberrypi:~ $ ls
01_HelloRPi            Desktop    MagPi         rpi_apa102driver
01_HelloRPi.cpp        Documents  Music         Templates
4mics_hat              Downloads  ofxGPIO       Videos
apa102_led.c           env        Pictures      wiringpi_apa102
bcm2835-1.50           grove.py   Public        wiringpi_apa102.cpp
bcm2835-1.50.tar.gz    led        python_games
bcm2835-1.50.tar.gz.1  led1       respeaker

```

- **步骤 3**. 执行以下命令运行演示。

```
cd grove.py/grove
python grove_12_channel_touch_keypad.py

```

:::tip
    然后触摸按键，终端将输出相应的按键。
:::

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/grove-py-result.jpg)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove 12通道电容式触摸键盘 (ATtiny1616) 原理图文件](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip)
- **[PDF]** [ATtiny1616 数据手册](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/ATtiny1616-1617_Datasheet.pdf)

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