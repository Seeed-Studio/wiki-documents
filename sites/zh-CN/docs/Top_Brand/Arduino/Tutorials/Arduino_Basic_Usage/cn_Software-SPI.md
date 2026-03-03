---
description: SPI Arduino 开发板用户指南
title: SPI Arduino 开发板用户指南
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Software-SPI
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Arduino 软件 SPI 用户指南

与 I2C 和串行通信类似，[**SPI**](https://www.arduino.cc/en/reference/SPI) 可以使用软件进行虚拟化以克服物理限制。这里提供了一个在 Arduino 中使用软件 SPI 的示例。

**什么是 SPI**

串行外设接口（SPI）是一种同步串行数据协议，微控制器使用它在短距离内与一个或多个外设设备快速通信。它也可以用于两个微控制器之间的通信。

## 软件 SPI 示例

1. 访问 [SoftSPI](https://github.com/MajenkoLibraries/SoftSPI) 仓库并将整个仓库下载到您的本地驱动器。

2. 现在，可以将 SoftSPI 库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `SoftSPI` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

```cpp
#include <SPI.h>
#include <SoftSPI.h>

// Create a new SPI port with:
// Pin 2 = MOSI,
// Pin 3 = MISO,
// Pin 4 = SCK
SoftSPI mySPI(2, 3, 4);

void setup() {
  mySPI.begin();
  Serial.begin(9600);
  }

void loop() {
  static uint8_t v = 0;

  Serial.print("Sending value: ");
  Serial.print(v, HEX);
  uint8_t in = mySPI.transfer(v);
  Serial.print(" Got value: ");
  Serial.print(in, HEX);
  Serial.println(v == in ? " PASS" : " FAIL");
  delay(1000);
  v++;
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