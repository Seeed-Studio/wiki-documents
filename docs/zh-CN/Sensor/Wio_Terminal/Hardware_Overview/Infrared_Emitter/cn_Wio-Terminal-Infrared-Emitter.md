---
description: 概述
title: 红外发射器入门指南
keywords:
- Wio_terminal Infrared_Emitter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Infrared-Emitter
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 红外发射器入门指南

本教程演示如何在 Wio Terminal 中使用内置红外发射器组件。红外发射器是一个数字接口，可用于发送红外信号，就像遥控器一样！

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif)

## 为 Wio Terminal 安装红外库

1. 访问 [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR) 仓库，将整个仓库下载到本地驱动器。

2. 现在可以将红外库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择刚刚下载的 `Seeed_Arduino_IR` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 示例代码

导航到 **Files** -> **Examples** -> **IRLib2** -> **Send**。发送示例将出现，应如下所示。要测试来自 Wio Terminal 的红外信号，您可以使用 [Grove - 红外接收器](https://wiki.seeedstudio.com/cn/Grove-Infrared_Receiver/)。这可以轻松修改为使用 Wio Terminal 作为您的电视遥控器！

**注意：** **`WIO_IR`** 为内置红外发射器定义（已在此库的头文件中定义，因此无需在 ino 文件中定义）

```cpp
/* send.ino Example sketch for IRLib2
 *  Illustrates how to send a code.
 */
#include <IRLibSendBase.h>    // First include the send base
//Now include only the protocols you wish to actually use.
//The lowest numbered protocol should be first but remainder 
//can be any order.
#include <IRLib_P01_NEC.h>
#include <IRLib_P02_Sony.h>
#include <IRLibCombo.h>     // After all protocols, include this
// All of the above automatically creates a universal sending
// class called "IRsend" containing only the protocols you want.
// Now declare an instance of that sender.

IRsend mySender;

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //delay for Leonardo
  Serial.println(F("Every time you press a key is a serial monitor we will send."));
}

void loop() {
  if (Serial.read() != -1) {
  //   send a code every time a character is received from the 
  //   serial port. You could modify this sketch to send when you
  //   push a button connected to an digital input pin.
  //   Substitute values and protocols in the following statement
  //   for device you have available.
  //  mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits
    mySender.send(NEC,0x61a0f00f,0);//NEC TV power button=0x61a0f00f
    Serial.println(F("Sent signal."));
  }
}
```

**注意：** 红外发射器位于 Wio Terminal 的背面，在 SD 卡槽的左侧。