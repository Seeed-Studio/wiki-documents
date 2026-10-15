---
description: 使用 CodeCraft 构建零代码硬件项目，选择硬件、描述需求，并结合项目示例进行烧录和调试。
title: CodeCraft 创作与平台
keywords:
  - CodeCraft
  - 创作
sidebar_label: 2. 创作与平台
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/creation-and-platform
sidebar_position: 3
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/cn/codecraft/creation-and-platform/
createdAt: '2026-06-29'
updatedAt: '2026-08-04'
---

# CodeCraft 创作与平台

## 2.1 上手开发：零代码实践

### 2.1.1 认识对话式工作区

CodeCraft 是一个基于网页的对话式编程平台。你无需下载软件或安装复杂驱动，只需在网页上选择你的硬件，并用自然语言描述你的需求，即可快速构建硬件项目。

![连接与烧录示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Connect-and-Burn-EN.png)

基本流程如下：

1. 访问 [https://codecraft.seeed.cc](https://codecraft.seeed.cc/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=codecraft_home)
2. 登录你的账号
3. 选择你的开发板
4. 描述你想要实现的功能
5. 等待 CodeCraft 生成程序
6. 查看代码，将其烧录到硬件并进行调试

![烧录与调试示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Flashing-and-Debugging-EN.png)

---

### 2.1.2 选择硬件

在工作区中，选择你的设备。推荐的入门级硬件包括：

- Wio Terminal  
- XIAO ESP32S3 Sense  
- Grove Beginner Kit  

除了上述设备外，CodeCraft 还支持 Seeed Studio 硬件生态中的更多设备。你可以根据项目需求选择开发板、传感器或扩展模块。选择硬件后，CodeCraft 会根据设备能力生成优化的代码和文档。

![硬件选择页面示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/HardwareEco-EN.png)

---

## 2.2 项目示例

本节提供三个项目示例，帮助你理解如何使用 CodeCraft 为不同硬件平台创建程序。每个示例都包含项目目标、示例提示词、烧录说明和迭代指导。

---

### 2.2.1 番茄钟计时器

#### 2.2.1.1 项目目标

本示例将引导你基于 Wio Terminal 创建一个番茄钟计时器。项目会在屏幕上显示实时倒计时，并通过按键控制开始、暂停、重置和模式切换。

![Wio Terminal 番茄钟计时器示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Display-EN.png)

---

#### 2.2.1.2 示例提示词

你可以输入：

> 请为 Wio Terminal 创建一个番茄钟计时器程序。要求：  
> 1. 以 mm:ss 格式显示实时倒计时。  
> 2. 将专注时间设置为 25 分钟，休息时间设置为 5 分钟。  
> 3. 按键 A 用于启动或暂停计时器。  
> 4. 按键 B 用于重置计时器。  
> 5. 按键 C 用于在专注模式和休息模式之间切换。  
> 6. 计时结束时显示提醒信息。

<!--![Pomodoro Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/POMODORO-TIMER-PROMPT-EN.png)-->

---

#### 2.2.1.3 烧录到硬件

1. 使用 USB 线将 Wio Terminal 连接到电脑。  
2. 按照屏幕提示进入烧录模式。  
3. 在 CodeCraft 中点击“Connect and Flash”按钮。  
4. 等待上传完成。

![Wio Terminal 烧录页面示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Burning-EN.png)

---

#### 2.2.1.4 迭代

如果你想修改项目，可以继续对 CodeCraft 说：

> 请将专注时间改为 45 分钟，休息时间改为 10 分钟。

CodeCraft 会根据你的需求更新代码并生成新版本。

---

### 2.2.2 ESP32 LED 闪烁

#### 2.2.2.1 项目目标

本示例将引导你创建一个基于 ESP32 的 LED 闪烁项目。板载 LED 每 0.2 秒切换一次，实现快速闪烁。同时，程序通过串口输出发送 LED 状态信息：当 LED 亮起时发送“LED ON”，熄灭时发送“LED OFF”。

<!--![ESP32 LED Blinking Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.2.2 示例提示词

你可以输入：

> 请为 ESP32 创建一个 LED 闪烁程序。要求：  
> 1. 使用板载 LED。  
> 2. 每 0.2 秒切换一次 LED 状态。  
> 3. 当 LED 为 ON 时，通过串口发送“LED ON”。  
> 4. 当 LED 为 OFF 时，通过串口发送“LED OFF”。  
> 5. 将串口波特率设置为 115200。  
> 6. 持续运行。

<!--![ESP32 Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Prompt-EN.png)-->

---

#### 2.2.2.3 烧录到硬件

1. 通过 USB 将 ESP32 开发板连接到电脑。  
2. 在 CodeCraft 中选择正确的 ESP32 串口。  
3. 点击“Connect and Flash”按钮。  
4. 等待上传完成。  
5. 打开串口监视器，确认“LED ON”和“LED OFF”交替出现。

![ESP32 烧录页面示意图](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Burning-EN.png)

<!--![ESP32 Serial Monitor Output](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Debugging-EN.png)-->

---

#### 2.2.2.4 迭代

如果你想修改项目，可以继续对 CodeCraft 说：

> 请将 LED 闪烁间隔改为 1 秒，并在串口输出中显示闪烁次数。

CodeCraft 会更新代码并生成新版本。

---

### 2.2.3 Grove Beginner Kit 按键控制 LED

#### 2.2.3.1 项目目标

本示例将引导你使用 Grove Beginner Kit 创建一个按键控制 LED 的项目。板载按键用于控制 LED：按下时点亮 LED，松开时熄灭。同时，程序通过串口实时打印按键状态：按下时为“Pressed”，松开时为“Released”。

<!--![Grove Beginner Kit Button Control Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.3.2 示例提示词

你可以输入：

> 请使用 Grove Beginner Kit 创建一个“按键控制 LED 开关”的项目。要求：  
> 1. 使用板载按键控制板载 LED。  
> 2. 当按键被按下时点亮 LED。  
> 3. 当按键被松开时熄灭 LED。  
> 4. 通过串口实时打印按键状态。  
> 5. 当按键被按下时发送“Pressed”。  
> 6. 当按键被松开时发送“Released”。

<!--![Grove Beginner Kit Prompt Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Grove-Beginner-Kit-Prompt-EN.png)-->

---

#### 2.2.3.3 烧录到硬件

在烧录前，请检查是否需要安装驱动：

- 在 Windows 上，你需要先安装 Grove Beginner Kit 驱动，否则可能无法识别设备或串口。  
- 在 macOS 上通常不需要额外安装驱动。

![Grove Beginner Kit Windows 驱动提示 1](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-driver-download-tips-EN.png)

![Grove Beginner Kit Windows 驱动提示 2](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/beginner-kit-driver-EN.png)

1. 通过 USB 将 Grove Beginner Kit 连接到电脑。  
2. 在 CodeCraft 中选择正确的设备和串口。  
3. 点击“Connect and Flash”按钮。  
4. 等待上传完成。  
5. 按下并松开板载按键，观察 LED 行为。  
6. 打开串口监视器，确认“Pressed”和“Released”出现。  
   （注意：确保代码中的波特率与调试工具一致。）

![Grove Beginner Kit 串口监视器输出](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-Serial-Debugger-EN.png)

---

#### 2.2.3.4 迭代

如果你想修改项目，可以继续对 CodeCraft 说：

> 请在按键被按下时让蜂鸣器响一次，并在串口输出中显示按键按下的次数。

CodeCraft 会更新代码并生成新版本。

---

## 2.3 常见问题

**Q: 为什么烧录会失败？**  
A: 请检查 USB 线是否支持数据传输，并确保开发板处于正确的烧录模式。

**Q: 出现编译错误时该怎么办？**  
A: 请查看工作区中的调试信息，并确认波特率、硬件型号和传感器配置是否正确。

**Q: 在哪里可以找到更多项目示例？**  
A: 请访问 SenseCraft AI 应用图库： [https://sensecraft.seeed.cc/ai/application](https://sensecraft.seeed.cc/ai/application?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_app_square)
