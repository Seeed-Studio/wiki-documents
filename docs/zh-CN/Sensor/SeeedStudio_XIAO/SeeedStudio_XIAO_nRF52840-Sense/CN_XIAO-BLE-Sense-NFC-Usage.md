---
description: NFC Usage for XIAO nRF52840 (Sense)
title: NFC 功能使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 10/30/2023
  author: 吴飞飞
---

# XIAO nRF52840 (Sense)上的 NFC 使用

**Seeed Studio XIAO nRF52840** 和 **Seeed Studio XIAO nRF52840 Sense** 均配备**NFC (近场通信) 模块**。 此 wiki 将帮助您开始在这些板上使用 NFC。在这里，我们将演示一个基本示例，在将手机放在 NFC 天线上后，我们将文本字符串从板发送到手机。

## 筹备工作

> 当我们使用“Seeed nRF52 mbed-enabled Boards Library”时，NFC 功能将表现良好。

对于板库安装，请参考[本教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) 完成安装。如果您已经安装，我们可以继续处理该项目。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>


## 所需硬件

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或 [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x NFC 天线
- 1 x USB Type-C 数据线
- 1 x 智能手机

## 所需软件

- [NFC TagInfo 应用程序 (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [NFC TagInfo 应用程序 (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## 硬件连接

将 NFC 天线焊接到 Seeed Studio XIAO nRF52840 （Sense） 上，如下所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3.png" alt="pir" width={550} height="auto" /></p>


## 使用 NFC 发送文本字符串

- **步骤 1.** 打开 Arduino IDE 并上传以下代码

```cpp
#include <NFCT.h>

void setup() { 
  // set the NFC message as first parameter and the language code as second
  NFC.setTXTmessage("Hello World!", "en");
  // start the NFC module
  NFC.start();
}

void loop() {
}

```

在这里，我们只需发送文本字符串“Hello World！”

- **步骤 2.** 打开“NFC TagInfo”移动应用程序，然后单击 **Scan & Launch**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>


- **步骤 3.** 将 NFC 天线靠近手机，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>
