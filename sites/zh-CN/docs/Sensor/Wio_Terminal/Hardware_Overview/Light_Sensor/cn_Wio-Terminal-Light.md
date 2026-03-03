---
description: 概述
title: 光传感器入门指南
keywords:
- Wio_terminal Light_Sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Light
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 光传感器入门指南

本仓库演示了如何在 Wio Terminal 中使用内置光传感器作为组件。光传感器使用模拟接口，您可以通过读取其引脚来简单地读取周围的光传感器值。

## 示例代码

**注意：** **`WIO_LIGHT`** 是内置光传感器的引脚。光传感器连接到 **A13**。

```cpp
void setup() {
  pinMode(WIO_LIGHT, INPUT);
  Serial.begin(115200);

}

void loop() {
   int light = analogRead(WIO_LIGHT);
   Serial.print("Light value: ");
   Serial.println(light);
   delay(200);
}
```

**注意：** 光传感器位于 Wio Terminal 的背面，就在 microSD 卡槽的上方。