---
description: XIAO-FAQ PAGE
title: XIAO 开发板常见问题
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_FAQ
last_update:
  date: 10/30/2023
  author: Seraphina
---

本文档包含与 XIAO 相关的所有常见问题。如果您在使用 XIAO 时遇到任何问题，这将非常有帮助。

### Q1: 上传失败/程序运行异常/设备端口未找到时该如何解决?

<details><summary>展开查看解决方案</summary>

有时候我们会使用错误的程序导致XIAO失去端口或无法正常上传程序。具体表现如下：

- **连接到计算机，但未找到XIAO的端口号。**

- **计算机已连接且端口号出现，但上传程序失败。**

在本Wiki中，您可以找到解决方案。不同型号的XIAO有不同的故障排除方法，请选择与您的型号相对应的解决方案。

:::success快速浏览
以下是针对各种类型的XIAO上传失败、程序异常行为或设备端口未找到错误的故障排除方法。您可以通过下面的链接快速索引：

- [**XIAO SAMD21**](/cn/XIAO_FAQ/#xiao-samd21)
- [**XIAO RP2040**](/cn/XIAO_FAQ/#xiao-rp2040)
- [**XIAO nRF52840(Sense)**](/cn/XIAO_FAQ/#xiao-nrf52840-sense)
- [**XIAO ESP32C3**](/cn/XIAO_FAQ/#xiao-esp32c3)
- [**XIAO ESP32S3(Sense)**](/cn/XIAO_FAQ/#xiao-esp32s3sense)
:::

## **XIAO SAMD21**

有时候，当用户编程过程中出现问题时，Seeed Studio XIAO SAMD21的端口可能会消失，导致您无法上传程序。您可以通过以下操作解决此问题：

**复位**

首先，您可以尝试对XIAO SAMD21进行复位。具体步骤如下：

- 将Seeed Studio XIAO SAMD21连接到计算机。
- 使用镊子或短线将RST引脚短接**一次**。
- 橙色LED灯闪烁并点亮。

:::note
内置LED的行为与Arduino上的LED相反。在Seeed Studio XIAO SAMD21上，引脚必须被拉低，而在其他微控制器上，它必须被拉高。
:::

如果这个方法不起作用，请尝试进入**bootloader模式**（引导加载程序模式）：

**进入Bootloader模式**

当遇到以上两种情况时，您可以尝试将XIAO置于**Bootloader**模式，这可以**解决大多数无法识别设备和上传失败**的问题。具体方法如下：

- 将Seeed Studio XIAO SAMD21连接到计算机。
- 使用镊子或短线将图示中的RST引脚短接**两次**。
- 橙色LED灯闪烁并点亮。

此时，芯片进入Bootloader模式，烧录端口再次出现。因为SAMD21芯片有两个分区，一个是Bootloader，另一个是用户程序。出厂时，产品会在系统内存中烧录一个引导程序代码。通过执行上述步骤，我们可以解决问题。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

## **XIAO RP2040**

有时候，当用户编程过程中出现问题时，Seeed Studio XIAO RP2040的端口可能会消失，导致您无法上传程序。您可以通过以下操作解决此问题：

**复位**

首先，您可以尝试对XIAO RP2040进行复位。具体步骤如下：

- 将Seeed Studio XIAO RP2040连接到计算机。
- 按下"R"引脚**一次**。

:::note
内置的可编程单色LED（两个是蓝色，一个是绿色）的行为与Arduino上的LED相反。在Seeed Studio XIAO RP2040上，引脚必须被拉低才能启用。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

如果这个方法不起作用，请尝试进入**bootloader模式**（引导加载程序模式）：

**进入Bootloader模式**

当遇到以上两种情况时，您可以尝试将XIAO置于**Bootloader**模式，这可以**解决大多数无法识别设备和上传失败**的问题。具体方法如下：

- 长按"B"按钮。
- 将Seeed Studio XIAO PR2040连接到计算机。
- 计算机会出现一个磁盘驱动器。

此时，芯片进入Bootloader模式，烧录端口再次出现。因为RP2040芯片有两个分区，一个是Bootloader，另一个是用户程序。出厂时，产品会在系统内存中烧录一个引导程序代码。通过执行上述步骤，我们可以解决问题。

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->

如果这个方法也不起作用，请将板子与电脑断开连接，然后重新连接。

## **XIAO nRF52840 (Sense)**

有时候，当用户编程过程中出现问题时，Seeed Studio XIAO nRF52840 (Sense)的端口可能会消失，导致您无法上传程序。您可以通过以下操作解决此问题：

**复位**

首先，您可以尝试对XIAO nRF52840 (Sense)进行复位。具体步骤如下：

- 将Seeed Studio XIAO nRF52840 (Sense)连接到计算机。
- 按下"Reset按钮"**一次**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2a.jpg" alt="pir" width={700} height="auto" /></p>

如果这个方法不起作用，请尝试进入**bootloader模式**（引导加载程序模式）：

**进入Bootloader模式**

当遇到以上两种情况时，您可以尝试将XIAO置于**Bootloader**模式，这可以**解决大多数无法识别设备和上传失败**的问题。具体方法如下：

- 将Seeed Studio XIAO nRF52840 (Sense)连接到计算机。
- 按下"Reset按钮"**两次**。

如果这个方法也不起作用，请将板子与电脑断开连接，然后重新连接。通过执行这些步骤，我们可以解决问题。

## **XIAO ESP32C3**

有时候，当用户编程过程中出现问题时，Seeed Studio XIAO ESP32C3的端口可能会消失，导致您无法上传程序。您可以通过以下操作解决此问题：

**复位**

首先，您可以尝试对XIAO ESP32C3进行复位。具体步骤如下：

- 将Seeed Studio XIAO ESP32C3连接到计算机。
- 按下"RESET BUTTON"**一次**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:500, height:'auto'}}/></div>

如果这个方法不起作用，请尝试进入**bootloader模式**（引导加载程序模式）：

**进入Bootloader模式**

当遇到以上两种情况时，您可以尝试将XIAO置于**Bootloader**模式，这可以**解决大多数无法识别设备和上传失败**的问题。具体方法如下：

- 长按"BOOT BUTTON"。
- 在按住**BOOT BUTTON**的同时，将Seeed Studio XIAO ESP32C3连接到计算机。
- 松开按钮以进入**bootloader模式**。

通过执行上述步骤，我们可以解决问题。

## **XIAO ESP32S3（Sense）**

有时候，当用户编程过程失败时，Seeed Studio XIAO ESP32S3（Sense）端口可能会消失，导致您无法上传程序。我们可以通过以下操作解决这个问题：

**复位**

首先，您可以尝试对XIAO ESP32S3(Sense)进行复位。具体步骤如下：

- 将Seeed Studio XIAO ESP32S3连接到您的电脑上。
- 按下“RESET BUTTON”按钮**一次**。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/esp32s3.png" style={{width:700, height:'auto'}}/></div>

如果这样还不起作用，请尝试进入**bootloader mode**（引导加载程序模式）：

**进入Bootloader模式**

当遇到上述两种情况时，您可以尝试将XIAO置于**Bootloader**模式，这可以**解决大多数无法识别设备和上传失败**的问题。具体方法如下：

- 按住XIAO ESP32S3(Sense)上的BOOT按钮不放。

- 保持按住BOOT按钮，然后通过数据线连接到电脑上。连接到电脑后释放BOOT按钮。

:::note
当您在上电时按住BOOT键，然后按一次复位键时，也可以进入Bootloader(引导加载程序模式)。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

通过执行上述步骤，我们可以解决问题。

</details>

### Q2: XIAO 连接电池电源时， 5V 引脚无输出

<!-- 详情请按 [**这里**](/bat_5vNo_OUTPUT) -->

<details><summary>展开查看解决方案</summary>

硬件设计确定了Xiao系列，当仅连接到电池时，无法输出5V电压。

</details>

## 适用于 XIAO nRF52840 (Sense)

### Q1: 使用 XIAO nRF52840 (Sense) 进行电池充电时有哪些注意事项?

<!-- 详情请按 [**这里**](/battery_charging_considerations) -->

<details><summary>展开查看解决方案</summary>

当P0.14（D14）在高电平3.3V下关闭ADC功能时，P0.31将处于输入电压限制的3.6V。存在烧坏P0.31引脚的风险。

目前针对这个问题，我们建议用户在电池充电期间不要关闭P0.14（D14）的ADC功能，也不要将P0.14（D14）设置为高电平。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

</details>



## 对于 XIAO ESP32C3

### Q1: 如何检查电池电压

详情请按 [**这里**](/check_battery_voltage)

### Q2: 关于 XIAO ESP32C3 IO分配的注意事项

F详情请按 [**这里**](/exp32c3_d9_d6_d8)

### Q3: 如何使用出厂固件重新刷新引导加载固件

详情请按 [**这里**](/reflash_the_bootloader)

## 对于 XIAO ESP32S3 (Sense)

### Q1: 为什么我的 XIAO 有圆角不齐平的问题

详情请按 [**这里**](/not_being_flush)

## 适用于XIAO的 Seeed Studio 圆形显示器

### Q1: 为什么上传程序后显示屏不显示任何内容?

详情请按 [**这里**](/DO_NOT_display)

### Q2: 我已经按照教程操作了，但仍然无法正确编译TFT或LVGL程序，我该怎么办?

详情请按 [**这里**](/TFT_or_LVGL_program)

### Q3: 为什么在为 XIAO SAMD21编译圆屏程序时会出现引脚定义错误?

详情请按 [**这里**](/pin_definition_error)

### Q4: 为什么 XIAO RP2040 在使用 HardwareTest with Round Display的代码时会出现非常奇怪的C++错误?

详情请按 [**这里**](/error_when_using_the_code)

### Q5: 上传 XIAO RP2040程序时, 出现错误: 在可执行段中检测到未对齐的操作码?

详情请按 [**这里**](/uploading_while_an_error-rp2040)

### Q6: 为什么使用XIAO nRF52840 (Sense)时会出现错误?

详情请按 [**这里**](/error_when_use_XIAOnRF52840)

### Q7: 如果我想将Seeed Studio XIAO ESP32S3 Sense 连接到此扩展屏幕, 会不会有两个TF卡槽冲突?

详情请按 [**这里**](/two_TF_card)

## 适用于 XIAO CAN 总线扩展板

### Q1:  XIAO CAN 总线扩展板支持的最大波特率是多少?

详情请按 [**这里**](/the_maximum_baud_rate)

### Q2: 我可以在同一个CAN总线网络中使用多个XIAO CAN 总线扩展板吗?

详情请按 [**这里**](/multiple_in_the_same_CAN)

### Q3: XIAO CAN 总线扩展板可以和其他微控制器或开发板一起使用吗?

详情请按 [**这里**](/in_other_microcontrollers_or_development_boards)

### Q4:  CAN 总线链接的最大电缆长度有限制吗?

详情请按[**这里**](/limitations_on_the_maximum_cable_length)

### Q5: 如何解决 CAN 总线通信问题?

详情请按 [**这里**](/troubleshoot_CAN_communication_issues)

# 技术支持

感谢您选择我们的产品！我们在**这里** 为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
