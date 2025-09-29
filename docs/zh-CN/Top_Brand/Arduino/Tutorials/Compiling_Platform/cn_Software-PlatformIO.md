---
description: 适用于Arduino支持开发板的PlatformIO
title: 适用于Arduino支持开发板的PlatformIO
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Software-PlatformIO
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# 如何使用PlatformIO IDE进行Arduino编程

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO.gif"/></div>

正如您可能已经体验过的，当涉及到生产力时，Arduino IDE可能不是**Arduino编程**的最佳IDE，这里为您介绍一个更加开发友好的选择！在您喜爱的开发环境中使用[Microsoft Visual Studio Code](https://code.visualstudio.com/)中的[**PlatformIO IDE**](https://platformio.org/)来开发[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)和[**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)！

## 什么是PlatformIO

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO.png"/></div>

[**PlatformIO**](https://platformio.org/)是一个跨平台、跨架构、多框架的专业IDE工具，专为编写嵌入式应用程序的嵌入式系统和软件工程师设计。通过使用PlatformIO提供通用的IDE界面，您能够以更加开发友好的方式对您的硬件进行编程！

在本wiki中，您将能够配置PlatformIO以支持[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)和[**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)来开始您的编程！

*更多信息，请访问[PlatformIO](https://docs.platformio.org/en/latest/)*

## Platform IO IDE入门

PlatformIO支持一些最流行的IDE和文本编辑器作为插件。在本wiki中，以**VSCode的PlatformIO**为例。

对于其他IDE，请查看以下参考：

- 对于[CLion](https://docs.platformio.org/en/latest/integration/ide/clion.html#ide-clion)

- [PlatformIO Core (CLI)](https://docs.platformio.org/en/latest/core/index.html#piocore)

### VSCode的PlatfromIO

- **步骤1. 下载VSCode**

下载并安装[Microsoft Visual Studio Code](https://code.visualstudio.com/)

- **步骤2. 为VSCode下载PlatformIO IDE插件**

通过点击左侧面板上的**Extensions**或使用键盘快捷键在VS Code中打开**Extensions Market**：

:::note
键盘快捷键：**Windows**中为`Shift+CTRL+X`或**macOS**中为`Shift+CMD+X`。
:::

在Extension Market中搜索**`PlatfromIO`**并点击**Install**：

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-1.png"/></div>

- **步骤3. 打开PlatformIO主页**

点击底部PlatformIO工具栏上的"PlatformIO Home"按钮

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-2.png"/></div>

现在，PlatformIO已安装到您的PC上！

## Wio Terminal 和 Seeeduino XIAO 的配置

**Wio Terminal 和 Seeeduino XIAO 现已正式支持 PlatformIO：**

1. 导航到 PlatformIO 的根目录位置：

      - 对于 **Unix**：`~/.platformio`

      - 对于 **Windows**：`C:\Users\{username}.platformio`，其中 `{username}` 是您的用户名。

2. 导航到 `platforms` 文件夹。

3. 下载配置好的 [`platform-atmelsam`](https://github.com/platformio/platform-atmelsam.git) 到 `platforms` 文件夹。

<div align="center"><img  src="https://files.seeedstudio.com/wiki/platformIO/platformIO-3.png"/></div>

### 支持的开发板

配置好的 `platform-atmelsam` 支持以下开发板：

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Seeeduino Zero 系列：
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 无线开发板](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 蓝牙无线开发板](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#d9f5f3', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#83dfd3', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Tip.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{fontWeight: 'bold', marginTop: 10}}>提示</p>
    <p style={{fontSize: 14}}>已经合并，很快就不再需要手动执行此操作。</p>
  </div>
</div>

## 快速开始

本教程向您介绍 PlatformIO IDE 工作流程的基础知识，并在 Wio Terminal 上演示一个简单的"闪烁"示例。

- 点击 **PlatformIO Home** 按钮。

- 点击 **New Project** 并选择 `Seeed Wio Terminal` 作为开发板。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/platformIO/platformIO-4.png"/></div>

- 打开 `src` 文件夹下的 `main.cpp` 并复制以下内容：

```cpp
#include <Arduino.h>

void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

- 打开 `platformio.ini` 配置文件并检查其是否正确：

```ini
[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
```

- 通过 PlatformIO 工具栏上的 **Build** 按钮或键盘快捷键构建项目。

:::note
        构建项目：在 **Windows** 中使用 `ctrl+alt+b` 或在 **macOS** 中使用 `cmd+shift+b`。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-5.png"/></div>

- 通过点击 PlatformIO 工具栏上的 **Upload** 按钮将项目上传到 Wio Terminal。

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-6.png"/></div>

- 现在您应该看到 Wio Terminal 的 LED 在闪烁！

*有关更多 PlatformIO For VSCode 入门指南，请参考[这里](https://docs.platformio.org/en/latest/integration/ide/vscode.html)。*

## 向 PlatformIO 添加库

### 直接导入库

要从 Github 直接导入库到 PlatformIO，您可以配置 `platformio.ini` 并添加带有依赖库 url 的 `lib_deps`，如下所示：

```ini
lib_deps = https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR
```

**- 示例用法：**

```cpp
#include <Arduino.h>
#include<LIS3DHTR.h>

LIS3DHTR<TwoWire> lis;

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //数据输出速率
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //量程范围设置为2g
}

void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```

### 从 Arduino 导入

导入库的另一种方法是在 `platformio.ini` 配置文件中指向 Arduino 库路径，例如：

```ini
lib_extra_dirs = /Users/{username}/Documents/Arduino/libraries
```

:::caution
这不是指向包含源代码的库的直接路径。它应该是指向包含按文件夹分组的库的存储位置的路径。例如，`D:\PlatformIO\extra\libraries` 而不是 `D:\PlatformIO\extra\libraries\FooLibrary`。
:::

有关更多库选项，请参阅 [**PlatformIO 库文档**](https://docs.platformio.org/en/latest/projectconf/section_env_library.html)。

## 为 Seeed 使用最新的 ArduinoCore 库

PlatformIO 中的 ArduinoCore 由 PlatformIO 自己维护，有时它没有与 Seeed 发布的最新版本保持同步。在这种情况下，您可以使用以下 `platformio.ini`，例如：

```ini
; PlatformIO 项目配置文件
;
;   构建选项：构建标志、源过滤器
;   上传选项：自定义上传端口、速度和额外标志
;   库选项：依赖项、额外库存储
;   高级选项：额外脚本
;
; 请访问文档了解其他选项和示例
; https://docs.platformio.org/page/projectconf.html

[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
platform_packages = framework-arduino-samd-seeed@https://github.com/Seeed-Studio/ArduinoCore-samd.git
```

## PlatformIO 的其他有用功能

- [串口监视器](https://docs.platformio.org/en/latest/integration/ide/vscode.html#serial-port-monitor)

- [调试](https://docs.platformio.org/en/latest/integration/ide/vscode.html#debugging)