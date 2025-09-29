---
description: 蜂巢扩展板
title: 蜂巢扩展板
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Bees_Shield
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![输入图片描述](https://files.seeedstudio.com/wiki/Bees_Shield/img/bees%20shield.jpg)

蜂巢扩展板（Bees_Shield）将使多个 Bee 类型模块（如 XBee、GPRS Bee、Bluetooth Bee 等）的接口变得前所未有的简单。除了两个 Bee 类型的 20p 2.0 间距插座外，它还具有一个大型原型区域，以及一个可定制的软件串口，用于更轻松的原型开发。

[![立即购买](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Bees-Shield-p-672.html)

## 版本
---------------

| 修订版 | 描述            | 发布日期        |
|--------|-----------------|----------------|
| v2.12  | 初始公开发布版本 | 2010年6月8日   |

## 特性
-------------------
- 双 Bee 类型插座
- 每个 XBee 配备 3 个指示灯（ON/Sleep、RSSI、ASSOC）
- 全尺寸板，带自由钻孔
- 每个 XBee 配备复位按钮
- 基板复位按钮
- 提供最大 500mA 的 3.3V 电流
- 每个 Bee 模块完全引出
- 可切换与 FTDI-USB / 基板的通信

## 硬件概览

![](https://files.seeedstudio.com/wiki/Bees_Shield/img/Bees%20Shield%20Hardware.jpg)

## 支持的平台
-------------------

## 入门指南
-------------------
### 使用 Bee1

#### 连接
- 将 XBee 模块插入 Bee1 插座，并按照以下设置跳线。我们使用 Bee1 的 SoftwareSerial 进行通信。

| Arduino 引脚   | Bee1 引脚     |
| :------------- | :-------------|
| 数字引脚7      | Bee1_TX       |
| 数字引脚8      | Bee1_RX       |

- 将蜂巢扩展板插入 Arduino。
- 使用 USB 数据线将 Arduino 连接到 PC。

#### 软件
- 复制并上传以下代码到 Arduino。

```
#include <SoftwareSerial.h>
SoftwareSerial mySerial(7, 8);

void setup() {
  Serial.begin(9600);
  Serial.println("Goodnight moon!");

  // 设置软件串口的数据速率
  mySerial.begin(9600);
  mySerial.println("Hello, world?");
}

void loop() {
  // 循环运行
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
```
- 上传完成后，打开串口监视器。

### 使用 Bee2

#### 连接
- 将 RFbee 模块插入 Bee2 插座，将开关切换到 USB 侧。

:::note
    如果您没有向 Bee2 上传代码，请将开关切换到 Atmega 的一侧。如果 Arduino 使用的是 ATmega168，则无法正常工作——我们至少需要 ATmega328 才能通过串口通信。
:::
- 将蜂巢扩展板插入 Arduino。
- 使用 USB 数据线将 Arduino 连接到 PC。

#### 软件
- 请复制并上传以下代码到 Arduino，以先禁用 Atmega IC 的 Uart0 端口。

```
void setup() {
   DDRD=0x00;
}

void loop() {}
```

### 使用 Bee2 进行无线 Arduino 编程

#### 连接
- 在板上焊接 JP1 块以实现无线编程。
- 将蜂巢扩展板插入 Arduino。

#### 软件
- 使用 X-CTU 下载 [Xbee 设置配置文件](https://files.seeedstudio.com/wiki/Bees_Shield/res/Xbee%20setting%20profiles.zip) 到发送端 Xbee。
- 开始使用无线编程。

#### 扩展功能

- 首先需要在蜂巢扩展板上焊接两个 8 针母头和两个 6 针母头。
- 扩展后，我们可以将小型扩展板（如音乐扩展板）插入蜂巢扩展板，并通过无线方式控制它。

![](https://files.seeedstudio.com/wiki/Bees_Shield/img/Bees-Shield-expan2.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield_V2.12_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
-------------------
- **[Eagle]** [蜂巢扩展板 Eagle 文件](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield_V2.12_Eagle_files.zip)
- **[PDF]** [蜂巢扩展板原理图](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield%20Sch.pdf)
- **[PDF]** [蜂巢扩展板 PCB](https://files.seeedstudio.com/wiki/Bees_Shield/res/Bees_Shield%20PCB.pdf)
- **[工具]** [Xbee 设置配置文件](https://files.seeedstudio.com/wiki/Bees_Shield/res/Xbee%20setting%20profiles.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>