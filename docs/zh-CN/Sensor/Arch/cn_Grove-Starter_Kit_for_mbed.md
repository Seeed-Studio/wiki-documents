---
description: Grove - mbed 入门套件
title: Grove - mbed 入门套件
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Starter_Kit_for_mbed
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Grove%20Starter%20Kit%20for%20mbed%201.jpg)

**关于 mbed 和 Grove**

mbed 是一个开源开发平台，用于快速原型设计微控制器。它提供免费的软件库、硬件设计和开发工具，使项目构建变得非常简单和快速。

Grove 是一个模块化电子平台，用于快速原型设计，无需焊接或面包板连接。

**关于此套件**

此套件旨在帮助您尽快开始使用 mbed。它包含许多即插即用的 Grove 模块，帮助您开始探索 mbed 世界。目标之一是让您在硬件和软件的旅程中享受乐趣并建立信心。

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 开始使用
---
开始使用所需的所有物品：
- 此套件
- [一个 Arch](https://www.seeedstudio.com/Arch-p-1561.html)
- [一根 USB Micro B 数据线](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)
- 一台联网的电脑

### Hello, world

1. 点击此 [链接](https://developer.mbed.org/accounts/login/?next=%2Fcompiler%2F#import:https://mbed.org/users/viswesr/code/Arch_GPIO_Ex1;platform:Seeeduino-Arch) **注册或登录 mbed**，然后您将获得 mbed 在线编译器。

2. 导入程序并打开 main.cpp，您将看到代码。

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Import_arch_gpio_ex1.png)

3. 在 mbed 在线 IDE 中，点击顶部工具栏的 "Compile"（或使用 CTRL + D）编译代码并生成二进制文件 - Arch_GPIO_Ex1_LPC11U24.bin。

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Compile_mbed_program.png)

4. 将 Arch 板连接到电脑并**长按**按钮，一个名为 CRP DISABLD 的 USB 驱动器将弹出。

5. 删除 firmware.bin 并将 Arch_GPIO_Ex1_LPC11U24.bin 复制到 USB 驱动器。

6. **快速按下**按钮，程序将运行，一个 LED 将开始闪烁。

```
#include "mbed.h"

/* 将一个 GPIO 引脚配置为输出以控制 LED。'led' 是用户分配的名称，
 'LED1' 是 Arch 平台中分配给端口引脚 P1_8 的内部名称。 */
DigitalOut led(LED1);

int main()
{
    while(1) {
        led = 1;    // 打开 LED。
        wait(0.5);  // 等待 0.5 秒。
        led = 0;    // 关闭 LED。
        wait(0.5);  // 等待 0.5 秒。
    }
}
```

上述程序使用了 mbed C/C++ SDK 的 **DigitalOut** 类和 **wait()** 函数。LED1 是 I/O 引脚 **P1_8** 的别名，在 Arch 板上标记为 D1。通过向 **led** 写入 0 或 1 来改变 LED1 的状态。**wait()** 函数以秒为单位产生延迟。在无尽的 **while()** 循环中，**led** 的状态每 0.5 秒持续切换。

有关 **DigitalOut** 的更多详细信息，请参阅 [mbed 手册的 DigitalOut 页面](https://developer.mbed.org/handbook/DigitalOut)。类似地，**wait()** 函数的文档可在 [wait 页面](https://developer.mbed.org/handbook/Wait) 中找到。

### 水果钢琴

一个由一篮水果、微控制器和电脑组成的钢琴。

灵感来自 [Makey Makey](http://makeymakey.com/)，但使用了不同的硬件和软件。使用了支持 USB 的 mbed 微控制器。

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Piano.png)
![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Fruit_Piano_Hardware.jpg)

**硬件**
- 一个 Arch 板
- 一篮水果
- 一台带交流电源的电脑
- 一些导线

**软件**
1. 点击此 [链接](https://developer.mbed.org/accounts/login/?next=%2Fcompiler%2F#import:http://mbed.org/teams/Seeed/code/Fruit_Piano;platform:Seeeduino-Arch) 将程序导入 mbed 在线编译器。
2. 编译代码并下载二进制文件 - Fruit_Piano_LPC11U24.bin。
3. 将 Arch 板连接到电脑并长按按钮，一个名为 CRP DISABLD 的 USB 驱动器将弹出。
4. 删除 firmware.bin 并将 Arch_GPIO_Ex1_LPC11U24.bin 复制到 USB 驱动器。
5. 快速按下按钮运行程序。
6. 将一些苹果或香蕉连接到 Arch 板的 A0 - A5 (P0_11 - P0_14, P0_16, P0_22) 引脚。
7. 打开 [水果钢琴](http://xiongyihui.github.io/piano/) 并开始演奏。

## 更多，逐步操作
---
- [数字输入 - 按钮：使用按钮控制 LED](https://developer.mbed.org/teams/Seeed/wiki/Button)
- [模拟输入 - 电位器：使用电位器控制 LED 的闪烁](https://developer.mbed.org/teams/Seeed/wiki/Potentiometer)
- [温度传感：使用模拟温度传感器制作温度计](https://developer.mbed.org/teams/Seeed/wiki/Analog-Temperature-Sensor)
- [PWM 输出 - 蜂鸣器：使用蜂鸣器播放旋律](https://developer.mbed.org/teams/Seeed/wiki/Grove-Buzzer)
- [显示：制作数字时钟](https://developer.mbed.org/teams/Seeed/wiki/Grove-4-Digit-Display)
- [温度计](https://developer.mbed.org/teams/Seeed/wiki/Thermometer)
- [红外键盘](https://developer.mbed.org/teams/Seeed/wiki/Infrared-keybaord)
- [彩色灯](https://developer.mbed.org/teams/Seeed/wiki/Grove-Chainable-RGB-LED)
- [温度控制颜色](https://developer.mbed.org/teams/Seeed/wiki/Temperature-Color)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>