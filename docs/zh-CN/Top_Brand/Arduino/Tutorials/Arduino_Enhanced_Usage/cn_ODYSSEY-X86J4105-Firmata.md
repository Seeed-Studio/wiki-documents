---
description: 适用于 Arduino 兼容开发板的 Firmata
title: 适用于 Arduino 兼容开发板的 Firmata
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-Firmata
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Firmata 教程：如何在 Arduino 兼容开发板上使用 Firmata

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-py-js.png"/></div>

## 什么是 Firmata

**[Firmata](http://firmata.org/wiki/Main_Page)** 是一个连接嵌入式系统与主机计算机的中间协议，协议通道默认使用串口。Arduino 平台是 Firmata 的标准参考实现。Arduino IDE 内置了对 Firmata 的支持。

这可以与 [Odyssey-X86](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html) 及其板载 Arduino 核心完美配合，这意味着您可以使用 Firmata 协议和不同的编程语言简单地控制 Arduino 核心！本教程基于 Windows 操作系统。

*参考：[Firmata 协议](https://github.com/firmata/protocol)*

## 通过 Arduino IDE 烧录 Firmata 固件

Arduino IDE >= 1.6.X 版本内置了 Firmata 固件，因此我们可以使用 Arduino IDE 将 firmata 固件烧录到 Arduino 核心中。

:::note
您可以从[这里](https://www.arduino.cc/en/Main/Software)下载 Arduino IDE。
:::

- 打开 Arduino IDE 并导航到 `Examples` -> `Firmata` -> `StandardFirmata`：

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-1.jpg"/></div>

- `StandardFirmata.ino` 将会出现。选择正确的开发板和端口，然后点击 **Upload**：

:::note
如果您还没有为 Odyssey 安装开发板库，请按照[**这里**](https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105/#using-the-arduino-core-atsamd21g18-in-windows)的说明安装开发板。
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-2.jpg"/></div>

- 上传完成后，应该看起来像这样：

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-3.jpg"/></div>

现在，Arduino Firmata 固件已经烧录到 Odyssey-X86 上的 Arduino 核心中！

## 测试 Firmata 固件

要测试 Firmata 固件，您可以导航到 **Microsoft Store**，搜索并下载 **Windows Remote Arduino Experience**。下载完成后，您可以通过选择 USB 连接、开发板和波特率来连接到 Arduino 核心：

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Remote-Arduino.jpg"/></div>

连接后，您可以将 LED 连接到相应的引脚来测试固件：

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-test.jpg"/></div>

## 使用 Python 解析 Firmata

有一些库实现了 Firmata 协议，以便从计算机、智能手机或平板电脑等设备与运行在微控制器平台上的 Firmata 固件进行通信。

**[pyFirmata](https://github.com/tino/pyFirmata)** 是 Firmata 协议的 Python 接口，运行在 python3 上。

### pyFirmata 安装

:::note
        需要 Python3。
:::

使用 pip 安装：

```sh
pip install pyfirmata
```

### 让连接在 D13 上的 LED 闪烁

**注意：** 将 `COM4` 更改为您的 Arduino USB COM 端口。

对于简单的 LED 模块，您可以使用 [Grove - LED 模块](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)来测试！

```py
#!/usr/bin/env python3
from pyfirmata import Arduino, util
from time import sleep

board = Arduino('COM4') # 更改为您的端口
print("Start blinking D13")
while True:
    board.digital[13].write(1)
    sleep(1)
    board.digital[13].write(0)
    sleep(1)
```

### 读取 A0 上的模拟信号

```py
#!/usr/bin/env python3
from pyfirmata import Arduino,util
import time
import sys

board = Arduino('COM4') # 更改为您的端口
it = util.Iterator(board)
it.start()
board.analog[0].enable_reporting()
print ("Read Start")
for i in range(10):
    time.sleep(1)
    print(board.analog[0].read())

board.analog[0].disable_reporting()
```

### 在 D6 上输出 PWM

向连接在 D6 上的 LED 输出 PWM 信号。

```py
#!/usr/bin/env python3
from pyfirmata import Arduino, util
from time import sleep

board = Arduino('COM4') # 更改为您的端口
lenPin = board.get_pin('d:6:p') # PWM 引脚
print("Starting to output PWM signal")
while True:
    for i in range(0, 101, 4):
        lenPin.write(i/100)
        sleep(0.05)
    sleep(1)
    for i in range(100, -1, -4):
        lenPin.write(i/100)
        sleep(0.05)
    sleep(1)
```

现在您可以使用 python 脚本（甚至其他语言）来控制 Odyssey-X86 上的 Arduino 核心，这在一些对实时性要求不高的情况下非常有用（例如使用 python 构建 Web 服务器，并使用 Arduino 控制继电器）。

**注意：** 更多 API 参考，请访问 [pyFirmata API](https://pypi.org/project/pyFirmata/)。

:::note
对于更高级的 Firmata python 用法，您可以考虑使用 [pymata4](https://github.com/MrYsLab/pymata4)。
:::

## 使用 JavaScript 解释 Firmata

就像使用 Python 通过 Firmata 协议控制 Arduino Core 一样，您也可以选择其他您熟悉的语言进行编程，比如 JavaScript！这是由官方 Firmata 团队实现的，您可以在 [**firmata.js**](https://github.com/firmata/firmata.js) 找到更多信息。

### firmata.js 入门

:::note
        确保 PC 上已安装 **`node.js`**。
:::

- 创建一个新项目：

```sh
mkdir js && cd js
npm init -y
npm install --save firmata # 安装 firmata.js
```

### 让连接在 D13 上的 LED 闪烁

```java
const Board = require("firmata");
const pin = 13;

//初始化
Board.requestPort((error, port) => {
  if (error) {
    console.log(error);
    return;
  }

  const board = new Board(port.path);
  //等待连接
  board.on("ready", () => {
    console.log("Ready!");
    let state = 1;
    //设置引脚为输出模式
    board.pinMode(pin, board.MODES.OUTPUT);
    setInterval(() => {
      console.log("State Change");
      board.digitalWrite(pin, (state ^= 1));
    }, 500);
  });
});
```

### 读取 A0 上的模拟信号

要测试模拟信号，您可以简单地使用 [Grove - 旋转角度传感器](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)！

```java
const Board = require('firmata');
const Pin = 0;

// 初始化
Board.requestPort(function(error, port) {
    if (error) {
        console.log(error);
        return;
    }
    var board = new Board(port.path);
    // 等待连接
    board.on("ready", function() {
        console.log("Ready!");
        // 读取模拟值
        board.analogRead(Pin, function(value) {
            console.log("Analog value: ", value);
        });
    });
});
```

### D6 上的 PWM 输出

```java
var Board = require('firmata');
const LED = 6;

var brightness = 0;
var fadeAmount = 5;

// 初始化
Board.requestPort(function(error, port) {
    if (error) {
        console.log(error);
        return;
    }
    const board = new Board(port.path);
    // 等待连接
    board.on("ready", function() {
        console.log("Ready!");
        // 设置引脚为 PWM 模式
        board.pinMode(LED, board.MODES.PWM);

        // LED 的 PWM 信号
        function fadeLed() {
            brightness += fadeAmount;
            if (brightness == 0 || brightness == 255) {
                fadeAmount = -fadeAmount;
            }
            board.analogWrite(LED, brightness);
            setTimeout(fadeLed, 30);
        }
        console.log("Breathing");
        fadeLed();
    });
});
```

### I2C 信号

firmata.js 也支持 I2C 和 UART 通信，这里提供一个使用 [Grove - 3轴数字加速度计(ADXL345)(±16g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) 的示例：

- **硬件连接：**

<div align="center"><img width ="{550}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-ADXL345.png"/></div>

```java
const Board = require("firmata");

Board.requestPort((error, port) => {
  if (error) {
    console.log(error);
    return;
  }

  const register = {
    POWER: 0x2D,
    RANGE: 0x31,
    READ: 0xB2,
  };

  const board = new Board(port.path);

  board.on("ready", function() {
    console.log("Ready");

    const adxl345 = 0x53;
    const sensitivity = 0.00390625;

    // 启用 I2C
    this.i2cConfig();

    // 切换电源以重置
    this.i2cWrite(adxl345, register.POWER, 0);
    this.i2cWrite(adxl345, register.POWER, 8);

    // 设置范围（这是 2G 范围）
    this.i2cWrite(adxl345, register.RANGE, 8);

    // 设置寄存器到读取位置并请求 6 字节
    this.i2cRead(adxl345, register.READ, 6, data => {
      const x = (data[1] << 8) | data[0];
      const y = (data[3] << 8) | data[2];
      const z = (data[5] << 8) | data[4];

      // 包装并限制 16 位；
      const X = (x >> 15 ? ((x ^ 0xFFFF) + 1) * -1 : x) * sensitivity;
      const Y = (y >> 15 ? ((y ^ 0xFFFF) + 1) * -1 : y) * sensitivity;
      const Z = (z >> 15 ? ((z ^ 0xFFFF) + 1) * -1 : z) * sensitivity;

      console.log("X: ", X);
      console.log("Y: ", Y);
      console.log("Z: ", Z);
    });
  });
});
```

**注意：** 有关更多 API 参考，请访问 [firmata.js](https://github.com/firmata/firmata.js/tree/master/packages/firmata.js) 并查看示例。