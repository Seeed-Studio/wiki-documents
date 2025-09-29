---
description: Xadow - GSM&#43;BLE
title: Xadow - GSM&#43;BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_GSMPlusBLE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow_GSM%2BBLE_shangjiatu.JPG)

无论是通过外部扬声器和麦克风通过无线电链接拨打和接听电话，还是通过蓝牙在短距离内交换数据，您都可以使用 Xadow GSM+BLE 实现这些功能。

<!-- 作为 RePhone Kit Create 的核心，Xadow GSM+BLE 基于强大的系统级芯片（SOC）MT2502，提供丰富的通信协议——GSM、GPRS 和蓝牙（v4.0 和 2.1 双模式）。它支持四频段 850/900/1800/1900MHz，覆盖全球任何 GSM 网络。只需插入一张 2G Nano SIM 卡，您就可以通过蜂窝连接为设备赋能。 -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/depot/Xadow-GSM-BLE-p-2560.html?cPath=84_120)  


##特点  

- 基于目前市场上最小的商用系统级芯片  
- （5.4mm x 6.2mm）  
- 开源和模块化设计  
- 纤薄小巧  
- 内置 Xadow 连接器，支持便捷插拔的 FPC 电缆  
- 可堆叠、可链式连接、可与其他 Xadow 模块缝合  
- 大多数 RePhone 套件的核心模块  
- 长距离和短距离通信的完美选择  

##规格  

|微控制器	        |MT2502                                                                                  |
|-------------------|----------------------------------------------------------------------------------------|
|MCU 核心	        |32 位 ARM7EJ-STM RISC 处理器                                                           |
|RAM	            |4 MB                                                                                    |
|闪存	            |16 MB                                                                                   |
|电源供应	        |3.3 ~ 4.2V（无 SIM）/3.5 ~ 4.2V（有 SIM）                                                |
|功耗	            |20mW/30mW/52mW @ 待机（无无线电）/待机（GSM）/待机（蓝牙）                              |
|四频段	            |850/900/1800/1900 MHz                                                                   |
|GPRS	            |Class 12 调制解调器                                                                     |
|时钟速度	        |260 MHz                                                                                 |
|连接器	            |35 PIN 连接器 & 11 PIN 连接器用于 Xadow 模块；JST 1.0 连接器用于电池                     |
|接口	            |LCD、音频、I2C、SPI、UART 和 GPIO 等                                                |
|尺寸	            |25.37mm × 20.30mm / 1” × 0.8”                                                           |  

##硬件概览  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow_GSM%2BBLE_Overview.png) 

下图展示了 11 Pin Xadow 连接器、可焊接的断点引脚以及 35 Pin Xadow 连接器的引脚定义，按**从左到右**的顺序排列。

![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow-connector-Pin-definitions-06.jpg)  

## 开机  

使用 **3.5V ~ 4.2V** 的电池和 **JST 1.0 公头连接器**为 RePhone/Xadow GSM+BLE 供电，或者通过硬件视图中所示的 **PIN 3(VCC)** 和 **PIN 6(GND)** 供电。  

## 电池充电  

Xadow GSM+BLE 使用 [JST 1.0 母头连接器](https://www.seeedstudio.com/depot/index.php?main_page=opl_info&opl_id=555) 连接电池。您可以通过将板子连接到 USB 数据线来为电池充电。  

## 操作模式  

当您为 Xadow GSM+BLE 供电并将其连接到 PC 时，它有两种操作模式——**按住电源键 2 秒**即可将模块 **打开** 或 **关闭**，以访问 **大容量存储模式** 或 **闪存/调试模式**。  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Operating_mode.png)  

## 大容量存储模式  

当 Xadow GSM+BLE **关闭**时，将板子（连接电池）通过 Micro USB 数据线连接到 PC，您可以在 PC 上访问 5MB 的“大容量存储模式”。所有应用程序（vxp 文件）和系统设置都存储在这个 5MB 的磁盘中。  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Mass_Storage_Mode.png)  

## 闪存/调试模式  

当 Xadow GSM+BLE **打开**时，将板子（连接电池）通过 Micro USB 数据线连接到 PC，您可以在 **“设备管理器”** 中找到两个 **COM 端口**：  

- **MTK USB Debug Port(COM4)**  
- **MTK USB Modem Port(COM5)**  

COM 端口号可能因您的 PC 而异。每个 COM 端口在不同的开发环境中具有不同的功能，请参考“入门”部分以获取更多详细信息。  

通过点击 **开始** 按钮，点击 **控制面板**，点击 **系统和安全**，然后在 **系统** 下点击 **设备管理器** 打开 **设备管理器**。如果系统提示您输入管理员密码或确认，请输入密码或提供确认。请参见以下图片：  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Check_ports.png)  

## 入门  

我们已经开发了丰富的库，集成到 Arduino IDE、Lua 和 JavaScript 中，并提供详细的示例代码，帮助初学者轻松快速地使用 RePhone 模块进行开发。  

我们还提供了一个基于 Eclipse IDE 的强大 SDK，供 C/C++ 开发者使用，以开发更智能的应用程序。  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Arduino_IDE-17.png)]  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Eclipse_IDE-13.png)](https://www.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit)  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Lua-14.png)](https://www.seeedstudio.com/wiki/Lua_for_RePhone#Use_Lua_Shellt)  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/JS-15.png)](https://www.seeedstudio.com/wiki/JavaScript_for_RePhone)  

更多信息请参考 RePhone 主页面上的 RePhone 开发环境：  

[RePhone 开发环境](https://wiki.seeedstudio.com/cn/RePhone/#development-environment)  

## 相关项目  

查看使用 RePhone 实现的精彩项目。  

**可追踪的狗项圈**  
5 步制作一个可追踪的狗项圈，为您的爱犬提供保护。  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/450px-Dog_Collar.png.jpeg)](https://www.seeedstudio.com/recipe/424-rephone-traceable-dog-collar.html)  

## RePhone 社区  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/300px-RePhone_Community-2.png) ](http://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4)  
我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）能够聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意和项目，并对未来模块的开发提出反馈。于是，我们创建了 RePhone 社区。

现在就加入 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=rephone)！在这里，我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

### 常见问题  
一些在 RePhone 社区中经常被问到的问题已被收集并回答在主题 "[RePhone 常见问题解答 (FAQ)](https://community.seeedstudio.com/topic_detail.html?id=5170#p23753)" 中。该主题会在有新的常见问题出现时不断更新。

## 资源  
以下链接提供了 Xadow GSM+BLE 的原理图：  
[- Xadow_GSM+BLE Eagle 文件 ](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Xadow_GSM%2BBLE.rar)  
了解更多关于 MT2502 芯片的信息：  
[- MT2502 数据表](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Datasheet_for_MT2502.rar)  
查看此 Excel 文件以了解与 Xadow 1.0 模块的兼容性：  
[- GSM+BLE 与 Xadow 1.0 模块的兼容性 ](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Compatibility_between_GSM%2BBLE_and_Xadow_1.0_modules.xlsx)

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>