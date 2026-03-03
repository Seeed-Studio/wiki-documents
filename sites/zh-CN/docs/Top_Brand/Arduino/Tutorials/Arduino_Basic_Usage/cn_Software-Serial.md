---
description: Arduino 开发板串口用户指南
title: Arduino 开发板串口用户指南
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Software-Serial
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Arduino 软件串口用户指南

Arduino 硬件在引脚 0 和 1 上内置了对**串口通信**的支持（硬件串口），但在某些情况下，比如这些引脚已经被占用或者您需要更多串口用于调试时，[**软件串口**](https://www.arduino.cc/en/Reference/softwareSerial)可能是解决方案。

这里还将使用一个示例来演示如何在您的 Arduino 上使用软件串口！

## 软件串口示例

```cpp
/*
RX 是数字引脚 2（连接到其他设备的 TX）
TX 是数字引脚 3（连接到其他设备的 RX）
*/

#include <SoftwareSerial.h>
SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
  Serial.begin(115200);
  while (!Serial) {
  }

  Serial.println("Goodnight moon!");

  mySerial.begin(9600);
  mySerial.println("Hello, world?");
}

void loop()
{
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

在实际应用中，您也可以使用其他串口设备，如串口无线透传模块、串口传感器等，只要是标准的串口设备，编程方式都大致相同。

## 使用多个软件串口

当您需要连接多个串口设备时，可以创建多个软件串口。但由于硬件限制，Arduino UNO 一次只能监听一个软件串口。这里提供一个多软件串口的示例：

```cpp
#include <SoftwareSerial.h>
SoftwareSerial serialOne(2, 3); // 软件串口一
SoftwareSerial serialTwo(8, 9); // 软件串口二

void setup() {
  Serial.begin(9600);
  while (!Serial) { // 等待串口
  }

  serialOne.begin(9600);
  serialTwo.begin(9600);
}

void loop() {
  serialOne.listen(); // 监听串口一

  Serial.println("Data from port one:");
  while (serialOne.available() > 0) {
    char inByte = serialOne.read();
    Serial.write(inByte);
  }

  Serial.println();

  serialTwo.listen(); // 监听串口二

  Serial.println("Data from port two:");
  while (serialTwo.available() > 0) {
    char inByte = serialTwo.read();
    Serial.write(inByte);
  }

  Serial.println();
}
```

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