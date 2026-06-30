---
description: 使用 CodeCraft 进行零代码硬件项目创作，选择硬件、描述需求、烧录与调试，并附项目案例。
title: CodeCraft 创作与平台功能
keywords:
  - CodeCraft
  - 创作
sidebar_label: 2. 创作与平台功能
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/creation-and-platform
sidebar_position: 3
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/cn/codecraft/creation-and-platform/
---

# CodeCraft 创作与平台功能

## 2.1 动手制作：零代码实战

### 2.1.1 认识对话式工作台

CodeCraft 是一个网页端对话式编程平台。你不需要下载软件，也不需要安装复杂驱动，只需要在网页上选择硬件，并用自然语言描述需求，就可以快速构建硬件项目。

![连接并烧录示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Connect-and-Burn-CH.png)

基本流程如下：

1. 访问 [https://codecraft.seeed.cc](https://codecraft.seeed.cc)
2. 登录账号
3. 选择你的开发板
4. 输入你想实现的功能
5. 等待 CodeCraft 生成程序
6. 查看代码、烧录到硬件并调试  

![烧录与调试示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Flashing-and-Debugging-CH.png)

### 2.1.2 选择硬件

在工作台中选择你的设备。目前适合入门使用的硬件包括：

- Wio Terminal
- XIAO ESP32S3 Sense
- Grove Beginner Kit

除了以上硬件，CodeCraft 也支持更多 Seeed Studio 硬件生态中的设备。你可以根据项目需求选择合适的开发板、传感器或扩展模块。选择硬件后，CodeCraft 会根据对应设备能力生成更合适的代码和说明。  

![选择硬件页面示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/HardwareEco-CH.png)

## 2.2 项目案例

本章节将提供三个项目案例，帮助你了解如何通过 CodeCraft 创建不同硬件平台的程序。每个案例都会包含项目目标、示例提示词、烧录到硬件和继续迭代四个部分。

### 2.2.1 番茄钟

#### 2.2.1.1 项目目标

本案例将引导你创建一个基于 Wio Terminal 的番茄钟项目。项目会使用屏幕实时显示倒计时，并通过按键控制开始、暂停、重置和模式切换。

![Wio Terminal 番茄钟项目示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Display-CH.png)

#### 2.2.1.2 示例提示词

你可以输入：

> 请为 Wio Terminal 创建一个番茄钟程序。要求如下：
> 1. 屏幕实时显示倒计时，格式为分:秒。
> 2. 设置专注时间为 25 分钟，休息时间为 5 分钟。
> 3. 按键 A 用于开始或暂停计时。
> 4. 按键 B 用于重置计时。
> 5. 按键 C 用于切换专注模式和休息模式。
> 6. 计时结束后，在屏幕上显示提醒文字。

<!--![番茄钟示例提示词输入界面](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/POMODORO-TIMER-PROMPT-CH.png)-->

#### 2.2.1.3 烧录到硬件

1. 使用数据线将 Wio Terminal 连接到电脑。
2. 按页面提示让设备进入烧录模式。
3. 点击 CodeCraft 页面中的“连接并烧录”按钮。
4. 等待程序上传完成。

![Wio Terminal 番茄钟烧录页面示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Burning-CH.png)

#### 2.2.1.4 继续迭代

如果你想修改项目，可以继续对 CodeCraft 说：

> 请将专注时间改为 45 分钟，休息时间改为 10 分钟。

CodeCraft 会根据你的新需求修改代码，并生成新的版本。

### 2.2.2 ESP32 LED 闪烁

#### 2.2.2.1 项目目标

本案例将引导你创建一个基于 ESP32 的 LED 闪烁项目。项目会让开发板上的 LED 每隔 0.2 秒切换一次状态，实现快速闪烁效果。同时，程序会通过串口发送 LED 当前状态的信息：LED 点亮时发送“灯开”，LED 熄灭时发送“灯关”。

<!--![ESP32 LED 闪烁项目示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

#### 2.2.2.2 示例提示词

你可以输入：

> 请为 ESP32 创建一个 LED 闪烁程序。要求如下：
> 1. 使用板载 LED。
> 2. LED 每隔 0.2 秒切换一次状态，实现闪烁效果。
> 3. LED 点亮时，通过串口发送“LED ON”。
> 4. LED 熄灭时，通过串口发送“LED OFF”。
> 5. 串口波特率设置为 115200。
> 6. 程序持续循环运行。


<!--![ESP32灯-提示词输入界面](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Prompt-CH.png)-->

#### 2.2.2.3 烧录到硬件

1. 使用数据线将 ESP32 开发板连接到电脑。
2. 在 CodeCraft 页面中选择对应的 ESP32 开发板串口。
3. 点击 CodeCraft 页面中的“连接并烧录”按钮。
4. 等待程序上传完成。
5. 打开串口监视器，确认串口中会交替显示“灯开”和“灯关”。

![ESP32 烧录页面示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Burning-CH.png)

<!--![ESP32 串口监视器输出示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Debugging-CH.png)-->

#### 2.2.2.4 继续迭代

如果你想修改项目，可以继续对 CodeCraft 说：

> 请将 LED 闪烁间隔改为 1 秒，并在串口中显示当前闪烁次数。

CodeCraft 会根据你的新需求修改代码，并生成新的版本。

### 2.2.3 Grove Beginner Kit 按键控灯

#### 2.2.3.1 项目目标

本案例将引导你创建一个基于 Grove Beginner Kit 的按键控灯项目。项目会通过板载按键控制 LED 的亮灭：按下按键时点亮 LED，松开按键时熄灭 LED。同时，程序会通过串口实时打印按键状态：按下时发送“Pressed”，松开时发送“Released”。

<!--![Grove Beginner Kit 按键控灯项目示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

#### 2.2.3.2 示例提示词

你可以输入：

> 请帮我用 Grove Beginner Kit 做一个“按键控灯小开关”。要求如下：
> 1. 使用板载按键控制板载 LED。
> 2. 按下按键时点亮 LED。
> 3. 松开按键时熄灭 LED。
> 4. 通过串口实时打印按键状态。
> 5. 按键按下时，串口发送“Pressed”。
> 6. 按键松开时，串口发送“Released”。

<!--![Grove Beginner Kit 示例提示词输入界面](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Grove-Beginner-Kit-Prompt-CH.png)-->

#### 2.2.3.3 烧录到硬件

在烧录程序之前，请先确认电脑是否需要安装驱动：

- 如果你使用的是 Windows 电脑，需要先下载并安装 Grove Beginner Kit 对应的驱动，否则电脑可能无法识别设备或串口。
- 如果你使用的是苹果电脑，一般不需要额外安装驱动，可以直接连接设备使用。

![Grove Beginner Kit Windows 驱动下载示意图 1](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-driver-download-tips-CH.png)

![Grove Beginner Kit Windows 驱动下载示意图 2](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/beginner-kit-driver-CH.png)

1. 使用数据线将 Grove Beginner Kit 连接到电脑。
2. 在 CodeCraft 页面中选择对应的 Grove Beginner Kit 设备和串口。
3. 点击 CodeCraft 页面中的“连接并烧录”按钮。
4. 等待程序上传完成。
5. 按下和松开板载按键，观察 LED 状态变化。
6. 打开串口监视器，确认串口中会显示“Pressed”和“Released”。
（备注：补充：需要在代码中查看串口波特率，并确保与调试工具中的波特率保持一致。）

![Grove Beginner Kit 串口监视器输出示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-Serial-Debugger-CH.png)

#### 2.2.3.4 继续迭代

如果你想修改项目，可以继续对 CodeCraft 说：

> 请在按键按下时让蜂鸣器响一声，并在串口中显示按键被按下的次数。

CodeCraft 会根据你的新需求修改代码，并生成新的版本。



## 2.3 常见问题 FAQ

**Q: 为什么烧录失败？**  
A: 请检查 USB 数据线是否支持数据传输，并确认开发板已经进入正确的烧录模式。

**Q: 代码编译报错怎么办？**  
A: 建议查看工作区中的调试信息，确认串口波特率、硬件型号和传感器配置是否匹配。

**Q: 哪里可以查看更多项目示例？**  
A: 可以访问 [SenseCraft AI 应用广场](https://sensecraft.seeed.cc/ai/application)，浏览官方和社区项目。
