---
description: Wio-E5 模块与 Arduino 在 PlatformIO 上进行 LoRa 通信的初学者指南
title: 在 PlatformIO 上使用 Wio-E5 实现 LoRaWAN
keywords:
    - lorawan
    - grove
    - platformio
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg
slug: /cn/platformio_wio_e5
toc_max_heading_level: 4
sidebar_position: 1
last_update:
    date: 2024-01-26T06:59:58.390Z
    author: Spencer
---

# 在 PlatformIO 上使用 Wio-E5 和 Arduino 实现 LoRaWAN 入门

如果您想了解关于长距离通信及其网络架构和应用的详细信息，可以查看这篇文章 [LoRapedia，详细介绍了长距离通信技术](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/)。文章解释了什么是长距离通信、其工作原理以及优缺点。

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://wdcdn.qpic.cn/MTIzNDU2Nzg5_993734_kw1N-KbhpVV3i5EZ_1693791639?w=1844&h=904" alt="LoRaWAN 网络框架" />
<div style={{ marginTop: '-8px' }}><em>LoRaWAN 网络框架</em></div>

</div>  


## 简介

本指南详细介绍了如何在 PlatformIO 上使用 XIAO ESP32S3 和 Wio-E5 LoRa 模块，适用于任何兼容 Arduino 的开发板。

主要学习内容：

1. **Wio-E5 的 Arduino 库编程**：利用 Arduino 库高效编程，超越基本的 AT 指令控制。
2. **LoRaWAN 网络集成**：连接 Wio-E5 到 LoRaWAN 网络的步骤。
3. **上行和下行数据实现**：管理与网络之间的数据传输。

本应用对标准硬件设置进行了改进，加入了 OLED 用于直接数据可视化，CircleLED 用于下行指示，以及 DHT11 传感器数据报告，通过实际应用简化学习过程。

<!-- 上传下达数据的说明 不够清晰 -->

## 前置条件

### 硬件

- **[XIAO ESP32S3](/cn/xiao_esp32s3_getting_started/)**：一款兼容 Arduino 的多功能开发板，非常适合各种物联网项目。您可以根据需要替换为任何兼容 Arduino 的开发板。
- **[Grove - DHT11](/cn/Grove-TemperatureAndHumidity_Sensor)**：用于环境数据采集，是许多物联网应用的关键组件。
- **[Grove - Circular LED](/cn/Grove-Circular_LED)**：用于灯光控制。这是一个可控设备的示例，您可以根据需要替换为其他组件。
- **[Grove - OLED 显示屏](https://wiki.seeedstudio.com/cn/Grove-OLED-Display-0.96-SSD1315/)**：为项目提供视觉数据展示功能。此组件为可选，但推荐使用以增强交互性。
- **[Grove - Wio-E5 LoRa 模块](/cn/Grove_LoRa_E5_New_Version/)**：提供长距离、低功耗的无线通信，非常适合 LoRaWAN 应用。
- **[SenseCAP M2 多平台网关](/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview/)**：在 Wio-E5 模块与 LoRaWAN 网络之间实现通信的关键组件。

### 软件

#### PlatformIO

<div align="center">
    <img class="border-radius: 10px;" src="https://cdn.platformio.org/images/platformio-logo.17fdc3bc.png" height="220" alt="PlatformIO Logo"  title="PlatformIO: 一个专业的嵌入式开发协作平台"/>
</div>

在本项目中，我们将使用 PlatformIO，它具有以下优势：

- **高效的库管理**：PlatformIO 提供便捷高效的库管理功能，确保您的项目始终与最新技术保持同步。
- **VSCode 集成**：通过集成 VSCode，大幅提升开发体验，提供代码高亮和 IntelliSense 功能，使编码过程更加流畅高效。
- **简单的库添加与配置**：使用 PlatformIO，添加和配置库变得非常简单，可以快速根据项目需求进行定制。

:::info
如果您是 PlatformIO 的新手或希望深入了解，可以从以下资源开始：

- [如何使用 PlatformIO IDE 进行 Arduino 编程](/cn/Software-PlatformIO) – 一份适合初学者的入门指南。
- [PlatformIO 官方网站](https://platformio.org/) – 提供全面详细的说明。
:::

#### LoRaWAN 网络服务器 (ChirpStack)

本节将指导您如何连接到本地 LoRaWAN 网络服务器，我们将以 [ChirpStack](https://www.chirpstack.io/) 平台为主要示例，重点使用 [SenseCAP M2 多平台 LoRaWAN 室内网关 (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)。

:::info
如果您对 ChirpStack 的以下步骤不熟悉，例如：

- 创建设备配置文件
- 添加应用程序
- 在应用程序下注册设备

您可以通过以下资源学习更多内容：

- [在 LoRaWAN 网络服务器上注册设备](/cn/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway)
- [SenseCAP M2 MP 网关 LNS 配置](/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration)

*我们将在下一节中一起完成这些步骤*。
:::

:::tip
如果您更倾向于使用其他平台，例如 AWS IoT 或 TTN，请参考以下指南：

- [连接到 AWS IoT](/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/)
- [连接到 TTN](/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network/)
:::


## 准备工作

现在，让我们开始吧。我们将完成以下任务。

### LoRaWAN 网络

为了确保通过 Wio-E5 模块与 LoRaWAN 网络成功通信，您需要验证以下几个关键方面：

1. **LoRaWAN 覆盖范围：**  
   - 确保您的设备位于 LoRaWAN 网络的覆盖范围内。例如，在我的案例中，设备由一个运行在 EU868 频段的 M2 网关覆盖。这一点至关重要，因为设备需要与支持相同频段的附近 LoRaWAN 网关通信。

2. **网关与 LNS 的连接：**  
   - 同样重要的是确认这些网关之一已连接到您计划使用的 LoRaWAN 网络服务器 (LNS)。这种连接至关重要，因为网关不仅充当 Wio-E5 设备与网络服务器之间的桥梁，还决定了设备数据到达服务器的路径。

#### 获取入网参数

假设您已经在前一部分中配置了 ChirpStack 网络服务器，下一步是收集必要的网络入网参数。这些参数对于确保设备能够成功加入并访问网络至关重要。

有关更详细的分步教程，请参考 [在 LoRaWAN 网络服务器上注册设备](/cn/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway) 部分。

#### 添加设备配置文件

Wio-E5 模块默认使用区域参数 *V102B*。此信息来自 [Wio-E5 AT 命令规范](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf) 的 `4.28.13 VER 部分`。

因此，我们将选择 `LoRaWAN 1.0.2` 作为 MAC 版本，并选择 `RP002-1.0.2` 作为区域参数修订版。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/device_profile.png"/>
</div>

如果您需要为设备启用 Class C，可以通过点击以下按钮激活：

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/activate_class_c.png"/>
</div>

<!-- 此处将添加更多 CodeC 信息 -->

#### 添加应用程序

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_application.png"/>
</div>

#### 添加设备

您需要填写设备 EUI (EUI64)，此部分将使用您的设备 EUI (EUI64) 信息。
<!-- 待补充 -->

如果您已更改，请导航到此 [部分](#get_eui) 获取 `DevAddr`、`DevEui` 和 `AppEui`。

或者，如果您更倾向于使用新的 DevEUI，您可以重新生成并提交。

<div align="center">
  <img class='border-radius: 10px;' width={520} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_device.png"/>
</div>

并获取 `AppKey`：

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/get_appKey.png"/>
</div>

:::note 设备信息
到目前为止，我们已经获得了以下用于与 LoRaWAN 网络进行入网操作的必要凭据：

- **DevEUI:** `2cf7f1205100a785`
- **AppKey:** `19aee7bedec56509a9c66a44b7956b6f`

这些凭据对于设备与 LoRaWAN 网络的安全注册和通信至关重要。
:::

:::tip 为什么我们不需要 AppEUI？
在 LoRaWAN 的上下文中，DevEUI 和 AppKey 在设备标识和安全通信中起着关键作用。AppEUI（在 LoRaWAN 1.1 及更高版本中也称为 JoinEUI）通常在设备入网过程中用于标识设备应连接的应用服务器实例。然而，在某些网络配置或某些网络服务器实现（如 The Things Network (TTN)）中，AppEUI 可能不是必需的，或者已经预定义。这种方法通过减少需要配置的参数数量简化了设备设置过程。因此，根据您的网络服务器及其配置的具体情况，入网过程中可能不需要显式使用 AppEUI。
:::

## 实操

#### 开始一个新的 PlatformIO 项目

首先，您需要创建一个 PlatformIO 项目。请按照以下步骤操作：

1. **打开 PlatformIO:** 在您的计算机上启动 PlatformIO IDE。

2. **创建一个新项目:** 进入主菜单并选择 **New Project**。

以下是一个展示如何在 PlatformIO 中创建新项目的示例图片：

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/create_project.png"/>
</div>

在这个项目中，选择 **XIAO ESP32S3** 作为开发板。

以下是为 XIAO ESP32S3 创建项目的示例：

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/xiaos3_prj.png"/>
</div>

**添加必要的库：**

创建项目后，您需要包含一些项目所需的库。您可以将这些库添加到 `platformio.ini` 文件中，以便 PlatformIO 自动下载它们：

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
lib_deps = 
    olikraus/U8g2@^2.35.9
    plerup/EspSoftwareSerial@^8.2.0
    https://github.com/dok-net/ghostl # 问题修复: https://github.com/plerup/espsoftwareserial/issues/305#issuecomment-1880188894
    seeed-studio/Grove Temperature And Humidity Sensor@^2.0.2
    seeed-studio/Grove LED Bar@^1.0.0
    https://github.com/andresoliva/LoRa-E5
```

当 PlatformIO 库管理器完成处理您的请求后，您将能够看到所有已添加到项目中的库。这些库存储在 `.pio/libdeps/seeed_xiao_esp32s3` 目录中，该目录特定于您选择的开发板，在本例中是 Seeed XIAO ESP32S3。

以下是成功添加库后 PlatformIO 环境的示例图片：

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/platformio_libraries.png"/>
</div>

在此目录中，您会找到为每个库指定的文件夹。这些文件夹包含每个库的必要文件，例如源代码、示例和附加元数据。

这种组织方式使得管理和更新库变得非常简单。PlatformIO 会自动处理兼容性和依赖关系的解析，确保您的开发过程顺畅高效。您还可以使用 PlatformIO 库管理器轻松更新或移除库，从而使您的开发环境保持最新的库版本。

#### 加入 LoRaWAN 网络（测试）

在本节中，我们将使用 [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5) 来驱动 Wio-E5 加入 LoRaWAN 网络，而不是手动使用 AT 命令。

```cpp
#include <Arduino.h>
#include <LoRa-E5.h> // 主 LoRa 库

#ifdef U8X8_HAVE_HW_SPI
    #include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
    #include <Wire.h>
#endif

// highlight-start
#if defined(ARDUINO_ARCH_AVR)
    #define serialLog Serial

#elif defined(ARDUINO_ARCH_SAMD) || defined(ARDUINO_ARCH_SAM)
    #define serialLog SerialUSB
#else
    #define serialLog Serial
#endif
// highlight-end

const int RXPin = D7, TXPin = D6; // 替换为您的 Wio-E5 RX 和 TX 引脚编号

/************************LORA 设置*******************************************************************/
#define LoRa_APPKEY           "19aee7bedec56509a9c66a44b7956b6f" /*此应用的自定义密钥*/
#define LoRa_FREQ_standard    EU868                              /*国际频段，参见*/
#define LoRa_DR               DR4                                /*DR5=5.2kbps //数据速率，参见 https://www.thethingsnetwork.org/docs/lorawan/regional-parameters/ */
#define LoRa_DEVICE_CLASS     CLASS_C                            /*CLASS_A 用于功率受限/低功耗节点，CLASS_C 用于其他设备应用*/
#define LoRa_PORT_BYTES       8                                  /*节点端口，用于发送二进制值，允许应用知道它接收的是字节*/
#define LoRa_PORT_STRING      7                                  /*节点端口，用于发送字符串消息，允许应用知道它接收的是字符/文本*/
#define LoRa_POWER            14                                 /*节点发送（Tx）功率*/
#define LoRa_CHANNEL          0                                  /*节点选择的发送通道，默认是 0，这里我们使用 2 仅作演示*/
#define LoRa_ADR_FLAG         false                              /*ADR（自适应数据速率）状态标志（True 或 False）。如果节点在移动，请使用 False*/
/*再次发送数据包的等待时间*/
#define Tx_delay_s            9.5 /*发送间隔时间，以秒为单位*/
/*数据包信息*/
#define PAYLOAD_FIRST_TX      10   /*首次数据包发送的字节数*/
#define Tx_and_ACK_RX_timeout 6000 /*SF12 为 6000，SF11 为 4000，SF10 为 3000，SF9/8 为 2000，SF7 为 1500。所有示例基于 50 字节负载和 BW125*/
/*用于发送的缓冲区*/
unsigned char buffer_binary[128] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
char          buffer_char[50]    = "I am sending this message to a LoRa Gateway."; /**/
/*******************************************************************/
/*使用所需配置设置 LoRa 模块*/
void LoRa_setup(void) {
    lora.setDeviceMode(LWOTAA); /*LWOTAA 或 LWABP。本例中使用 LWOTAA*/
    lora.setDataRate((_data_rate_t)LoRa_DR, (_physical_type_t)LoRa_FREQ_standard);
    lora.setKey(NULL, NULL, LoRa_APPKEY);                /*使用 OOTA 时仅设置 App key*/
    lora.setClassType((_class_type_t)LoRa_DEVICE_CLASS); /*设置设备类别*/
    lora.setPort(LoRa_PORT_BYTES);                       /*设置默认端口以传输数据*/
    lora.setPower(LoRa_POWER);                           /*设置发送功率*/
    lora.setChannel(LoRa_CHANNEL);                       /*选择通道*/
    lora.setAdaptiveDataRate(LoRa_ADR_FLAG);             /*启用自适应数据速率*/
}

void setup() {
    serialLog.begin(9600);
    while (!serialLog)
        ; // 等待串口准备就绪
    lora.init(TXPin, RXPin);
    /*设置设备。在加入网络之前，必须设置所有参数。
     如果您更改任何参数（通道或端口设置除外），则应重新加入网络以确保正常工作*/
    LoRa_setup();
    /*进入循环，直到加入过程完成*/
    serialLog.println("Waiting to join the network...");
    while (lora.setOTAAJoin(JOIN, 10000) == 0)
        ; // 将尝试加入网络直到成功。https://www.thethingsnetwork.org/docs/lorawan/message-types/
    /*在下一个发送周期之前关闭 LoRa 模块电源*/
    lora.setDeviceLowPower();
    serialLog.println("Joining network successful!");
}

void loop() {

    /*唤醒 LoRa 模块*/
    lora.setDeviceWakeUp(); /*如果模块未处于睡眠状态，此命令无效*/

    /*-----------发送字符串消息*/
    lora.setPort(LoRa_PORT_STRING); /*设置接收网关配置的端口以接收字符串*/
    lora.transferPacketWithConfirmed(buffer_char, Tx_and_ACK_RX_timeout);
    /*--------发送字节消息*/
    lora.setPort(LoRa_PORT_BYTES); /*设置接收网关配置的端口以接收字节*/
    lora.transferPacketWithConfirmed(buffer_binary, PAYLOAD_FIRST_TX, Tx_and_ACK_RX_timeout);

    /*在下一个发送周期之前关闭 LoRa 模块电源*/
    lora.setDeviceLowPower();
    delay((unsigned int)(Tx_delay_s*1000));/*将值从秒转换为毫秒*/
}
```

现在，构建并将其烧录到开发板上。

<!-- <div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/build_flash.png"/>
</div> -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/flash_success_lorawan_test.png"/> 
</div>

<!-- 添加一个标志用于构建和烧录 -->

现在我们可以看到消息出现了，并且可以看到有两条消息：

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_event_package.png"/> 
</div>

很容易理解数据 `00010203040506070809`，它来自 `buffer_binary` 数组。

还有一条数据：`SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4=`，这是什么意思？由于数据包是以 base64 编码的，我们可以利用 [base64 解码工具](https://emn178.github.io/online-tools/base64_decode.html) 来查看字符串。

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={420} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_string_decode.png" alt="decode " />
<div style={{ marginTop: '-8px' }}><em><a href="https://emn178.github.io/online-tools/base64_decode.html?input=SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4%3D">🖱️ 点击这里解码</a></em></div>

</div>

是的，这来自 `buffer_char` 数组：`I am sending this message to a LoRa Gateway`（我正在将此消息发送到 LoRa 网关）。

## 故障排查

### Q1: Grove_LED_Bar 库的问题

如果您在使用 Grove_LED_Bar 库时遇到问题，请在 `Grove_LED_Bar.cpp` 文件的开头添加以下宏定义：

```cpp
#include "Grove_LED_Bar.h"
// 添加这些宏以解决冲突
// highlight-start
#define max(a, b) (((a) > (b)) ? (a) : (b))
#define min(a, b) (((a) < (b)) ? (a) : (b))
// highlight-end
```

此代码定义了 `max` 和 `min` 宏，可以帮助修复与库中这些函数相关的编译错误。

## 资源

- [Grove - Wio-E5 | Wiki](/cn/Grove_LoRa_E5_New_Version/)
- [Wio-E5 AT 命令规范](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

#### LoRaE5 库
Wio E5 模块有几个可用的库：

- [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5)
- [idreamsi/LoRaE5](https://github.com/idreamsi/LoRaE5)
- [disk91/Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>