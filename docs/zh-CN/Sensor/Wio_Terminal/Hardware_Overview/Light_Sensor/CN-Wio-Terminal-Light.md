---
description: 概述
title: 光传感器入门指南
keywords:
- Wio_terminal Light_Sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Light
last_update:
  date: 3/09/2024
  author: 金菊
---

# 光传感器入门指南

该存储库演示了如何将内置的光传感器作为Wio Terminal的组件使用。光传感器使用模拟接口，您可以通过读取其引脚来简单地获取周围的光传感器值。

## 示例代码

**注:** **`WIO_LIGHT`** 是内置光传感器的引脚。光传感器连接到  **A13** 引脚。

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

**注:** 光传感器位于Wio Terminal的背面，就在microSD卡槽的上方。
