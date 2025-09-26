---
description: 三轮机器人
title: 三轮机器人
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Tricycle_Bot
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/3.jpg)

三轮机器人是一款易于组装且兼容 Grove 的 DIY 教育机器人平台。它包括电子材料和结构材料，可以根据指南轻松组装。三轮机器人有三层结构，并在第二层和第三层之间有五个支架。第三层可以通过螺丝和螺母固定多个模块。

此外，您可以将 Arduino 板和面包板固定在机器人第二层作为核心，每个支架可以固定 1-2 个即插即用的 Grove 模块作为机器人的“翅膀”，以增强功能，例如 RGB LED 和超声波 Grove 模块。三轮机器人的供电电压由一个 12V 电池盒提供。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)


:::warning
    此套件**不包括**控制器和电机驱动器。
:::

## 特点

- 支持多平台
- Grove 兼容支架
- 易于组装
- RF/BLE/Wi-Fi 控制选项

## 部件清单

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/4.jpg)

| 部件名称       | 规格              | 数量   |
|:--------------|:-----------------:|:------:|
| 轮子          | Ф64mm*W30mm      | 2      |
| 减速直流电机  | /                | 2      |
| 万向轮        | 49\*32\*22mm     | 1      |
| 电池盒        | 62\*58\*30mm     | 1      |
| 扎带          | 20.5\*31.8mm     | 1      |
| 底板（第一层）| 220\*155\*3.8mm  | 1      |
| 中板（第二层）| 220\*155\*3.8mm  | 1      |
| 顶板（第三层）| 160\*158\*3.8mm  | 1      |
| 前支架        | 62\*56\*3.8mm    | 1      |
| 侧支架        | 62\*31\*3.8mm    | 4      |
| 铆钉_1        | R3090            | 4      |
| 支柱_2        | M3\*22           | 6      |
| 支柱_3        | M3\*55+6         | 4      |
| 螺丝_4        | PM3\*8           | 14     |
| 螺丝_5        | PM3\*25          | 4      |
| 螺母_6        | M3\*2.3          | 6      |
| 铆钉_7        | R2064            | 15     |
| 螺丝_8        | KM2\*10          | 15     |
| 螺母_9        | M2\*1.5          | 15     |
| 扳手          | /                | 2      |
| 螺丝刀        | /                | 1      |

**此套件不包括 Arduino/Genuino 101 和面包板。**

## 组装介绍

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/1.png)

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/2.png)

您可以在三轮机器人上固定任何您喜欢的板子来驱动这个机器人平台，例如 Arduino、Raspberry Pi 和 BeagleBone。为了驱动直流电机和 Grove 模块，电机扩展板和 Grove 扩展板是您的好帮手。

由于有许多板子可供选择，这里我们将介绍如何在 Arduino、Raspberry 和 BeagleBone 之间选择适合您的板子。

## 使用 Arduino

Arduino 是最著名的开源原型平台，其硬件和软件易于使用。我们相信您可以轻松使用 Arduino DIY 一个有趣且创意的机器人车。而且由于我们有许多适用于 Arduino 的 Grove 模块，可以方便地扩展您的机器人车功能，例如 LED 效果、障碍物检测或远程控制（RF/蓝牙/Wi-Fi）。

### [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)

Seeeduino v4 是一个开源的、兼容 Arduino 的 ATmega328 MCU 开发板。我们认为 Seeeduino v4 是最好的 Arduino 衍生/兼容产品之一。Seeeduino v4 功能丰富，更加稳定，易于使用，外观也很漂亮。

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/SeeeduinoV4/master/images/cover.JPG" width="50%" height="50%" />
</div>

### [Motor Shield V2.0](https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html)

Motor Shield 是一个电机驱动模块，允许您使用 Arduino 控制电机的工作速度和方向。

<div className="text-center">
  <img src="https://github.com/SeeedDocument/Motor_Shield_V2.0/image/500px-Motorshield_01.jpg" width="50%" height="50%" />
</div>

### [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)

作为扩展板，Base Shield v2 拥有许多 Grove 接口，使您可以方便地与 Grove 模块一起使用。它兼容一系列 Arduino 产品。

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" width="50%" height="50%" />
</div>

### 推荐 Grove 模块

| W2812B LED 灯条 | 超声波传感器 | 巡线传感器 |
|----------------|-------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/3.jpg)|
|[立即购买！](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html)|[立即购买！](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|[立即购买！](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html)|

| 蜂鸣器 | 串口 RF | 串口蓝牙 |
|----------------|-------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/4.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/5.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/6.jpg)|
|[立即购买！](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|[立即购买！](https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html)|[立即购买！](https://www.seeedstudio.com/Grove-Serial-Bluetooth-v3.0-p-2475.html)|

:::tip
    点击 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/) 获取更多可用模块。
:::

## 使用树莓派

树莓派是目前最受欢迎的单板计算机之一，其计算性能远远强于 Arduino。由于树莓派非常流行，你可以轻松找到许多有趣项目的教程。

###[树莓派 3](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

树莓派 3 集成了 802.11 b/g/n 无线局域网、蓝牙经典和低功耗蓝牙（LE）。无需额外的外设即可实现无线功能。其性能是树莓派 1 的 10 倍。

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/seeed/img/2016-08/xuZp3Msf6xeHp96wPFjInzco.jpg" width="50%" height="50%" />
</div>

###[树莓派电机板 v1.0](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

树莓派电机板允许你使用树莓派驱动两个直流电机，并独立控制每个电机的速度和方向。

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/images/product/103030031%201.jpg" width="50%" height="50%" />
</div>

###[GrovePi+](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)

GrovePi+ 是一个将 Grove 模块引入树莓派的系统。它增加了对新款树莓派 Model B+ 和 Model A+ 的支持。

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/product/110060049%2010_03.jpg" width="50%" height="50%" />
</div>

### 推荐模块

| USB 摄像头 | OLED 显示屏 | GPS 模块 |
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/3.jpg)|
|[立即购买！](https://www.seeedstudio.com/300K-Pixel-USB-2.0-Mini-Webcam-p-1499.html)|[立即购买！](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[立即购买！](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

:::tip
点击 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/) 查看更多可用模块。
:::

## 使用 BeagleBone 开发板

BeagleBone 也是最受欢迎的 Linux 单板计算机之一。与树莓派相比，BeagleBone 在编程 Grove 模块方面具有优势，因为它支持 Mraa 和 UPM 库。

###[BeagleBone Green Wireless](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Wireless-p-2650.html)

SeeedStudio BeagleBone Green Wireless 基于 BeagleBone Black 的开源硬件设计，但它拥有高性能的灵活 WiFi/蓝牙接口，使开发远程控制项目更加容易，例如 [BBGW Wi-Fi 小车](https://www.instructables.com/id/Super-Quickly-DIY-Web-RC-Car-With-Python-and-Beagl/)。

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/BBGW_cover.png" width="50%" height="50%" />
</div>

###[电机桥 Cape v1.0](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)

电机桥 Cape 可以控制两个步进电机或四个直流电机，支持 6~15V DC 电源，每个电机约 1A 电流。它还拥有六个舵机控制接口和六个扩展 I\O，这意味着你可以在机器人小车上扩展一个机械臂。

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/master/img/Motor_bridge_driver.jpg" width="50%" height="50%" />
</div>

###[Grove Base Cape for BeagleBone v2](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)

Grove Base Cape for BeagleBone v2 是一个适用于 BeagleBone 平台的 Grove 系统扩展板。该 Cape 使得连接许多 Grove 模块（传感器和执行器）变得更加方便。

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_product_view_1200.jpg" width="50%" height="50%" />
</div>

### 推荐 Grove 模块

| USB 摄像头 | W2812B LED 灯条 | IMU 9DOF |
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/3.JPG)|
|[立即购买！](https://www.seeedstudio.com/300K-Pixel-USB-2.0-Mini-Webcam-p-1499.html)|[立即购买！](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html)|[立即购买！](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|

| OLED 显示屏 | 数字光传感器 | GPS 模块 |
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/4.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/5.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/6.jpg)|
|[立即购买！](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[立即购买！](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|[立即购买！](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

:::tip
点击 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/) 查看更多可用模块。
:::

## 简单示例

以下是使用 Arduino UNO 制作三轮车机器人（Tricycle Bot）的一个简单示例。

### 所需材料

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/7.png)

- [Arduino UNO](https://www.arduino.cc/en/Main/ArduinoBoardUno) *1
- [Motor Shield V2.0](https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html) *1
- [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) *1
<!-- - [Tricycle Bot]() *1 -->
- [数字 RGB LED 柔性灯条](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html) *1
- [Grove - 超声波测距传感器](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) *1
- [Grove - 蜂鸣器](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) *1

### 组装

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Tricycle_Bot/img/5.jpg" width="50%" height="50%" />
</div>

1. [组装三轮车机器人。](https://files.seeedstudio.com/wiki/Tricycle_Bot/Tricycle_Bot.md#assembly-introdutions)
2. 将 Grove 模块固定在侧板和顶部板上。
3. 将 Grove 蜂鸣器连接到 Base Shield 的 **D4**，Grove 超声波测距传感器连接到 **D5**，LED 灯条连接到 **D6**。
4. 完成组装！

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Tricycle_Bot/img/6.jpg" width="50%" height="50%" />
</div>

### 演示

这是该简单示例的[视频](http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV)。

<div className="img-wrapper ng-scope" ng-if="fileType === 'video'">
  <video ng-src="http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV" width={700} controls src="http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV" />
</div>

- 此演示中的三轮车机器人能够检测前方障碍物，并在距离小于 35CM 时转向。
- 当机器人直行时，LED 灯条会闪烁蓝色；当机器人转向时，LED 灯条会闪烁红色，同时 Grove 蜂鸣器会发出警告声。

### 编码

- 下载以下 Arduino 库：[Motor Shield V2](https://github.com/Seeed-Studio/SeeedMotorShieldV2)、[Grove - 超声波测距传感器](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger) 和 [LED 灯条](https://github.com/adafruit/Adafruit_NeoPixel)。

```
 /*
 * TricycleBotDemo.ino
 *
 * 三轮车机器人简单代码
 *
 * 版权所有 (c) 2016 Seeed Technology Limited.
 * MIT 许可协议
 *
 */

#include "MotorDriver.h"
#include "Adafruit_NeoPixel.h"
#include "Ultrasonic.h"

#define BEE           4
#define LEDPIN        6
#define LEDNUM        10
#define PIXELS_SPACE  128
#define BRIGHTNESS    150
#define DistanceCM    35

Adafruit_NeoPixel strip = Adafruit_NeoPixel(LEDNUM, LEDPIN, NEO_GRB + NEO_KHZ800);
MotorDriver motor;
Ultrasonic ultrasonic(5);

void setup() {
    // 初始化代码，仅运行一次：
    pinMode(BEE, OUTPUT);
    strip.setBrightness(BRIGHTNESS);
    strip.begin();
    strip.show();
    motor.begin();
    pixelStart();
}

void loop() {

    // 主代码，循环运行：
    long RangeInCentimeters;
    RangeInCentimeters = ultrasonic.MeasureInCentimeters();

    if (RangeInCentimeters < DistanceCM) {
        turnRight();
        beep();
        pixelState2();
    }
    else {
        goStraight();
        pixelState1();
    }
    delay(100);
}

void goStraight() {
    motor.speed(0, 100);
    motor.speed(1, 100);
}

void turnRight() {
    motor.speed(0, -100);
    motor.speed(1, 100);
}

// 直行
void pixelState1() {
    for (uint32_t t = 0; t < (PIXELS_SPACE * LEDNUM); ++t) {
        for (int i = 0; i < (LEDNUM / 2); i++) {
            strip.setPixelColor(((LEDNUM / 2) - i -1) , triangular_color((t + i * PIXELS_SPACE) % (PIXELS_SPACE * LEDNUM)));
            strip.setPixelColor(i + 5, triangular_color((t + i * PIXELS_SPACE) % (PIXELS_SPACE * LEDNUM)));
        }
        strip.show();
    }
}

// 转向
void pixelState2() {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < LEDNUM; j++) {
            strip.setPixelColor(j, 250, 0, 0);
            strip.show();
        }
        delay(50);
        for (int j = 0; j < LEDNUM; j++) {
            strip.setPixelColor(j, 0, 0, 0);
            strip.show();
        }
        delay(50);
    }
}

void pixelStart() {
    for (int i = 0; i < LEDNUM; i++) {
        for (int j = 0; j< 255; j++) {
            strip.setPixelColor(i, 0, j, 0);
            strip.show();
        }
        delay(50);
    }
}

uint32_t triangular_color(uint32_t t) {
    uint32_t c = 0;

    if (t < 256) {
        c = strip.Color(0, 0, t);
    } else if (t < 512) {
        c = strip.Color(0, 0, 511 - t);
    }

    return c;
}

void beep() {
    digitalWrite(BEE, HIGH);
    delay(100);
    digitalWrite(BEE, LOW);
}
```

## 附件

* [三轮机器人组装说明(pdf)](https://files.seeedstudio.com/wiki/Tricycle_Bot/res/Tricycle%20Bot%20Assembly%20Instructions.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>