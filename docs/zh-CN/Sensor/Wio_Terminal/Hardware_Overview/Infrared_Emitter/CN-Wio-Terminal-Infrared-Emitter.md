---
description: 概述
title: 红外发射器入门指南
keywords:
- Wio_terminal Infrared_Emitter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Infrared-Emitter
last_update:
  date: 3/09/2024
  author: 金菊
---

# 红外发射器入门指南

该存储库演示了如何将内置的红外发射器作为 Wio Terminal 的组件使用。红外发射器是一个数字接口，可以用于发送红外信号，就像遥控器一样！

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif)

## 安装  Wio Terminal 的红外库

1. 访问 [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR) 存储库，并将整个存储库下载到本地驱动器。

2. 现在，可以将红外库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library` ,然后选择刚刚下载的  `Seeed_Arduino_IR` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 示例代码

导航到 **Files** -> **Examples** -> **IRLib2** -> **Send**。 发送示例将出现，并且应该如下所示。要测试来自 Wio 终端的红外信号，您可以使用 [Grove - 红外接收器](https://wiki.seeedstudio.com/Grove-Infrared_Receiver/)。这可以很容易地修改为将 Wio 终端用作电视遥控器！

**注:** **`WIO_IR`**  已在红外发射器的库头文件中定义（因此不需要在 ino 文件中定义）。

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

**注:**  红外发射器位于 Wio 终端的背面，在 SD 卡插槽的左侧。
