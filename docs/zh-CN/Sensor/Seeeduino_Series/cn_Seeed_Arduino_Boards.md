---
description: 如何将 Seeed 开发板添加到 Arduino IDE
title: 如何将 Seeed 开发板添加到 Arduino IDE
keywords:
  - Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeed_Arduino_Boards
last_update:
  date: 02/02/2023
  author: w0x7ce
---


Seeed 设计了许多与 Arduino IDE 兼容的开发板，包括：

* [Seeeduino XIAO](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/)
* [Seeeduino Wio 终端](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)
* [Seeeduino Lotus Cortex-M0+](https://wiki.seeedstudio.com/cn/Seeeduino_Lotus_Cortex-M0-/)
* [Seeeduino LoRaWAN](https://wiki.seeedstudio.com/cn/Seeeduino_LoRAWAN/)/GPS
* [Seeeduino Cortex M0](https://wiki.seeedstudio.com/cn/Seeeduino-Cortex-M0/)

:::caution
上述提到的开发板是 AT SAMD21 微控制器系列，请在步骤2中将以下网址复制到*附加开发板管理器网址*。
:::

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

* Seeeduino [V3](https://wiki.seeedstudio.com/cn/Seeeduino_v3.0/)/[4](https://wiki.seeedstudio.com/cn/Seeeduino_v4.0/)
* [Seeeduino Lotus](https://wiki.seeedstudio.com/cn/Seeeduino_Lotus/)
* Seeeduino Stalker [V2.3](https://wiki.seeedstudio.com/cn/Seeeduino_Stalker_v2.3/)/[3](https://wiki.seeedstudio.com/cn/Seeeduino_v3.0/)/[3.1](https://wiki.seeedstudio.com/cn/Seeeduino_Stalker_V3.1/)
* [Seeeduino Lite](https://wiki.seeedstudio.com/cn/Seeeduino_Lite/)
* [Seeeduino Mega](https://wiki.seeedstudio.com/cn/Seeeduino_Mega/)
* [Seeeduino Mega 原型扩展板套件](https://wiki.seeedstudio.com/cn/Seeeduino_Mega_Protoshield_Kit/)
* [Seeeduino GPRS](https://wiki.seeedstudio.com/cn/Seeeduino_GPRS/)
* [Seeeduino 以太网](https://wiki.seeedstudio.com/cn/Seeeduino_Ethernet/)
* [Seeeduino 云](https://wiki.seeedstudio.com/cn/Seeeduino_Cloud/)
* [Seeeduino Nano](https://wiki.seeedstudio.com/cn/Seeeduino-Nano/)
* [Seeeduino Crypto (ATmega4809 ECC608)](https://wiki.seeedstudio.com/cn/Seeeduino-Crypto-ATmega4809-ECC608/)
* [LinkIt ONE](https://wiki.seeedstudio.com/cn/LinkIt_ONE/)
* [RePhone 系列](https://wiki.seeedstudio.com/cn/RePhone/)

:::note
上述从 Seeeduino V3 到 RePhone 系列的开发板不是 AT SAMD21 微控制器系列，请在步骤2中将以下网址复制到*附加开发板管理器网址*。
:::

```
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json
```

感谢 Arduino IDE 的新功能，现在可以轻松地将这些开发板添加到您的 Arduino IDE 中。

需要遵循以下几个步骤。

## 步骤 1. 下载最新的 Arduino IDE

您需要一个 1.6.4 版本之后的 Arduino IDE，如果您的计算机中没有 Arduino IDE，请下载一个。

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

## 步骤 2. 设置您的 Arduino IDE

打开您的 Arduino IDE，点击 **文件 > 首选项**，并将以下网址复制到*附加开发板管理器网址*

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

## 步骤 3. 开发板管理器

点击 **工具 > 开发板 > 开发板管理器**。

现在您可以按名称搜索开发板，如果您需要使用 `LinkIt ONE`，只需搜索 `LinkIt`；如果您需要使用 `RePhone Series`，
只需输入 `RePhone`。在本教程中，我们将以 `Seeeduino Stalker V3` 为例。

点击 Seeeduino Stalker V3，然后会出现一个**安装**按钮，点击它来完成此步骤，此过程需要大约 5 分钟到半小时，这取决于您的网络速度。

![](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/img/add_board.png)

## 步骤 4. 选择开发板

步骤 3 成功完成后，名为 Seeeduino Stalker V3 的开发板将出现在开发板列表中。

点击 **工具 > 开发板**，*Seeeduino Stalker V3* 现在可用了。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>