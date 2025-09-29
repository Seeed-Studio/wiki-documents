---
description: Arch GPRS V2
title: Arch GPRS V2
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arch_GPRS_V2
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Arch_GPRS_V2.jpg)

**Arch GPRS V2** 是 [Seeed Studio](https://www.seeedstudio.com) 推出的 Arch GPRS 开发板的新改进版本。与原版 Arch GPRS 一样，它也是一个支持 [mbed](http://mbed.org/handbook/mbed-SDK) 的开发板，集成了蜂窝网络模块和微控制器。Arch GPRS V2 使用 LPC11U37 微控制器代替了 Arch GPRS 中使用的 LPC11U24。您可以使用 mbed 的 C/C++ SDK、库以及优化的在线开发工具快速构建基于 Arch GPRS V2 的原型。Arch GPRS 上的蜂窝网络模块基于 SIMCom 的 SIM900 四频 GSM/GPRS 引擎。通过它，可以轻松使用基于 2G GSM/GPRS 的蜂窝网络执行数据收集功能。

Arch GPRS V2 具有标准 Arduino 接口以及板载 [Grove](https://wiki.seeedstudio.com/cn/Grove_System/ "Grove") 连接器。连接现有的 Shields 和 [Grove](https://wiki.seeedstudio.com/cn/Grove_System/ "Grove") 产品到 Arch GPRS V2 非常方便。您甚至可以直接将太阳能板连接到开发板上，以便电池通过太阳能板充电。低功耗设计保证了在户外使用时的便捷充电和长时间运行！

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-GPRS-V2-p-2026.html)

<div class="admonition note">
<p class="admonition-title">注意</p>
<p>Arch GPRS V2 不带有 <a href="https://mbed.org/handbook/mbed-HDK">mbed 接口</a>。要输出调试信息，请尝试使用 <a href="https://mbed.org/handbook/USBSerial">USBSerial</a>。</p>
</div>

功能特点
--------

- 支持 mbed
  - 在线开发工具
  - 易于使用的 C/C++ SDK
  - 大量已发布的库和项目

- NXP LPC11U37 控制器
  - 低功耗 ARM Cortex-M0 核心
  - 芯片内置 128KB Flash、12KB SRAM、4KB EEPROM
  - USB 设备、UART、I2C

- SIM900 模块
  - 四频段（850/900/1800/1900MHz）GSM/GPRS 支持
  - 支持外部 SIM 卡：1.8V/3V
  - 使用标准 AT 指令控制

- 自动选择 USB5V 或太阳能板为电池充电

Arch GPRS V2 与 Arch GPRS 对比
-----------------------------

| 参数             | **Arch GPRS V2** | **Arch GPRS** |
|------------------|------------------|---------------|
| MCU              | LPC11U27         | LPC11U24      |
| GSM/GPRS 模块    | SIM900           | EG-10         |
| MicroSD 卡       | 是               | 否            |

硬件概览
--------

![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Arch_GPRS_V2_Pinout.png)

入门指南
--------

![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Get_started_with_arch.png)

1. 从 [这里](http://www.mbed.org) 登录到 mbed 环境。
2. 导入 [mbed_blinky](https://mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-GPRS) 程序。
3. 在 mbed 在线编译器环境中验证 mbed_blinky 文件夹中的 main.cpp 文件是否与上图步骤 3 中所示一致。确保选择的编译平台是 Seeeduino-Arch。然后继续编译代码。当要求保存生成的二进制文件 (.bin) 时，将其保存到 PC 上指定的文件夹中。
4. 现在将 Arch 开发板连接到您的 PC，并长按复位按钮。一个名为 CRP DISABLD 的可移动 USB 驱动器应会自动出现在您的 PC 上。进入 CRP DISABLD 驱动器，删除文件夹中现有的固件文件，并将下载的二进制文件复制到 CRP DISABLD。快速按下复位按钮以运行新的二进制文件。
5. 通过查看 Arch GPRS V2 开发板验证您的代码是否成功运行。如果从上图引脚图中最右侧的 LED 闪烁，而旁边的其他 3 个 LED 都亮着，这表明您的代码正在工作。

您可以将代码更改为以下内容并观察结果：

```
#include "mbed.h"

DigitalOut myled1(LED2); // 如果开发板如引脚图所示，最左侧的 LED
DigitalOut myled2(LED3); // 从左数第二个
DigitalOut myled3(LED4); // 从左数第三个
DigitalOut myled4(LED1); // 从左数第四个（最右侧）

int main() {
    while(1) {
                
        myled1 = 1; // 最左侧 LED 亮起，其他熄灭
        myled2 = 0;
        myled3 = 0;
        myled4 = 0;
        
        wait(1); // 等待 1 秒
        myled1 = 0;
        myled2 = 1; // 从左数第二个 LED 亮起，其他熄灭
        myled3 = 0;
        myled4 = 0;

        wait(1);
        myled1 = 0;
        myled2 = 0;
        myled3 = 1; // 从左数第三个 LED 亮起，其他熄灭
        myled4 = 0;
        
        wait(1);
        myled1 = 0;
        myled2 = 0;
        myled3 = 0;
        myled4 = 1; // 从左数第四个（最右侧）LED 亮起，其他熄灭
        
        wait(1);
    }
}
```

当您在 Arch GPRS V2 开发板上编译并运行上述代码时，您应该会看到 LED 按顺序闪烁。

如果您成功完成上述步骤，这意味着：

1. 您的 Arch GPRS V2 正常供电。
2. 您的代码已成功下载并由 Arch GPRS V2 模块运行。
3. 您已经准备好开始更复杂的项目了！

在 Windows、Linux 或 Mac 上为 Arch 编程
-------------------------------------

Arch 没有 mbed 接口。它使用 USB 内系统编程（ISP）来升级固件。

要进入 USB ISP 模式，请将 Arch 连接到您的计算机并长按其按钮，然后会出现一个名为 "CRP DISABLD" 的磁盘。

- 在 Windows 上

    1. 删除 "CRP DISABLD" 磁盘中的 firmware.bin 文件。
    2. 将新的固件复制到磁盘中。

- 在 Linux 上

    1. 如果磁盘未挂载，请将磁盘挂载到 **`{mnt_dir}`**。
    2. **`dd if={new_firmware.bin} of={mnt_dir}/firmware.bin conv=notrunc`**

- 在 Mac 上，你需要使用终端运行以下脚本，将你的 .bin 文件复制到 Arch：

    1. **`dd if={new_firmare.bin} of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc`**

如果你愿意，还可以创建一个 **Automator** 应用程序来支持将文件拖放到开发板。只需创建一个 "*运行 Shell 脚本*"，并使用以下命令：

dd if=$\* of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc

你还需要将 `"Pass Input"` 选项从 `"to stdin"` 更改为 `"as arguments"`——否则你会遇到错误 `"The action 'Run Shell Script' encountered an error"` 或 `"dd: no value specified for if (1)"` 出现在日志中。

此外，改进版的脚本如下：
**dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

该脚本可以处理文件路径中的空格，并且只使用提供的第一个文件。
快速按下按钮即可运行新固件。

资源
------------------------

- [Arch GPRS V2.0 mbed 开发平台页面](https://developer.mbed.org/platforms/Seeed-Arch-GPRS/)

**设计文件**

- [EAGLE 格式的原理图和板文件](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/res/Arch_GPRS_v2.0_sch_pcb.zip)
- [PDF 格式的原理图](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/res/Arch_GPRS_v2.0_SCH_PDF.pdf)

**应用程序和库**

- [GPRS 库](http://developer.mbed.org/teams/Seeed/code/GPRSInterface/)
- [使用 Seeeduino Arch 作为调试适配器调试另一个 Seeeduino Arch](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)
- [环境传感](https://mbed.org/users/yihui/notebook/sense-environment/)
- [使用 Grove RTC](https://mbed.org/cookbook/seeed-grove-RTC)
- [使用 Grove - 超声波测距仪](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

**另请参阅**

- [SIM900 GPRS 模块信息](/cn/GPRS_Shield_V2.0)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Arch_GPRS_V2 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>