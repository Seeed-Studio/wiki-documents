---
description: 将 Seeed Studio XIAO SAMD21 连接到您的树莓派
title: 将 Seeed Studio XIAO SAMD21 连接到您的树莓派
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# 如何使用 Seeed Studio XIAO SAMD21 登录到您的树莓派

有时当我们使用树莓派时，这些情况可能会让我们非常困扰：周围没有额外的 HDMI 显示器，鼠标和键盘不容易连接，选择使用 USB 转串口适配器登录树莓派，但它太昂贵了。现在，有了 Seeed Studio XIAO SAMD21，所有问题都能轻松解决。

## 硬件

## 所需材料

- [Seeed Studio XIAO SAMD21 x1](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [树莓派 Zero x1](https://www.seeedstudio.com/Raspberry-Pi-Zero-W-p-4257.html)

- [跳线 x3](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)

- [Type-C 数据线 x1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

### 硬件连接

- **步骤 1.** 树莓派的 **TX** 连接到 Seeed Studio XIAO SAMD21 的 **RX**

- **步骤 2.** 树莓派的 **RX** 连接到 Seeed Studio XIAO SAMD21 的 **TX**

- **步骤 3.** 树莓派的 **GND** 连接到 Seeed Studio XIAO SAMD21 的 **GND**

- **步骤 4.** 通过 Type-C 数据线将 Seeed Studio XIAO SAMD21 连接到 PC。

- **步骤 5.** 树莓派连接到电源。

<!-- ![](https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png" alt="pir" width={600} height="auto" /></p>

## 软件

在安装了树莓派官方系统的 TF 卡上找到 config.txt 文件，并在末尾添加一行：

```c
enable_uart=1
```

### 配置 Seeed Studio XIAO SAMD21

- **步骤 1.** 打开 [Arduino IDE](https://www.arduino.cc/en/Main/Software) 并按照[此链接](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)添加 Seeed Studio XIAO SAMD21。

- **步骤 2.** 将以下代码复制到 Arduino IDE 并将代码上传到 Seeed Studio XIAO SAMD21。

```cpp
uint32_t baud;
uint32_t old_baud;
void setup() {

  // put your setup code here, to run once:
  SerialUSB.begin(115200);
  baud = SerialUSB.baud();
  old_baud = baud;
  Serial1.begin(baud);
  while (!Serial);
  while (!SerialUSB);
}

void loop() {
  // put your main code here, to run repeatedly:
  baud = SerialUSB.baud();
  if (baud != old_baud) {
    Serial1.begin(baud);
    while (!Serial);
    old_baud = baud;
    //     SerialUSB.println(baud);
  }
  if (SerialUSB.available() > 0)
  {
    char c = SerialUSB.read();
    Serial1.write(c);
  }
  if (Serial1.available() > 0) {
    char c = Serial1.read();
    SerialUSB.write(c);
  }
}
```

### 配置 Putty

- **步骤 1.** 按照[此链接](https://www.putty.org/)下载并安装 Putty

- **步骤 2.** 将串口波特率设置为 115200（这是默认的串口波特率。如果与树莓派的串口波特率一致，就可以正确通信。）

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Putty%20config.png" />
</p>

- **步骤 3.** 然后您将在终端窗口中看到启动信息。

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Terminal.png" />
</p>

现在您可以通过 Seeed Studio XIAO SAMD21 访问树莓派了！

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/new%20pins.gif" />
</p>