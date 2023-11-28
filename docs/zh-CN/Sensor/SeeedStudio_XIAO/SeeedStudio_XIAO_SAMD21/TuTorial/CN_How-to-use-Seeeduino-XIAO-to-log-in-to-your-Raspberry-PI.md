---
description:  将Seeed Studio XIAO SAMD21连接到您的树莓派。
title:  将 XIAO SAMD21 连接到您的树莓派
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI
last_update:
  date: 10/27/2023
  author: 金 菊
---

# 如何使用Seeed Studio XIAO SAMD21登录到您的树莓派

有时当我们使用树莓派时，以下情况可能会给我们带来很多困扰：周围没有额外的HDMI显示器，鼠标和键盘难以连接，选择使用USB到串口适配器登录树莓派，但价格太贵。现在，有了Seeed Studio XIAO SAMD21，所有问题都迎刃而解。

## 硬件

## 所需材料

- [Seeed Studio XIAO SAMD21 x1](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [树莓派 Zero x1](https://www.seeedstudio.com/Raspberry-Pi-Zero-W-p-4257.html)

- [跳线线缆 x3](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)

- [Type-C 数据线 x1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

### 硬件连接

- **第一步.** 将树莓派的 **TX** 连接到Seeed Studio XIAO SAMD21的 **RX**

- **第二步.** 将树莓派的 **RX** 连接到Seeed Studio XIAO SAMD21的 **TX**

- **第三步.** 将树莓派的 **GND** 连接到Seeed Studio XIAO SAMD21的 **GND**

- **第四步.** 使用Type-C数据线将Seeed Studio XIAO SAMD21连接到电脑。

- **第五步.** 树莓派已连接到电源供应。

<!-- ![](https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png" alt="pir" width={600} height="auto" /></p>

## 软件

在安装了树莓派官方系统的TF卡中找到config.txt文件，并在末尾添加一句话:

```c
enable_uart=1
```

### 配置Seeed Studio XIAO SAMD21

- **第一步.** 打开 [Arduino IDE](https://www.arduino.cc/en/Main/Software) ，按照此处 [here.](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)链接添加Seeed Studio XIAO SAMD21。

- **第二步.** 将以下代码复制到Arduino IDE中，并将代码上传到Seeed Studio XIAO SAMD21。

```c++
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

### 配置Putty。

- **第一步.** 通过点击此链接 [link](https://www.putty.org/)下载并安装Putty。

- **第二步.** 将串口波特率设置为115200（这是默认的串口波特率。如果与树莓派的串口波特率保持一致，可以正确通信）。

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Putty%20config.png" />
</p>

- **第三步.** 然后您将在终端窗口中看到启动信息。

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Terminal.png" />
</p>

现在您可以通过Seeed Studio XIAO SAMD21访问树莓派！

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/new%20pins.gif" />
</p>
