---
description: XIAO ESP32C3-常见问题
title: 如何使用出厂固件重新烧录引导程序
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reflash_the_bootloader
last_update:
  date: 2023/6/30
  author: cheng.tang
---

您可以通过 **USB Type-C** 将开发板连接到电脑，并使用 **ESP RF Test Tool** 重新烧录带有出厂固件的引导程序。

- **步骤 1.** 按住 **BOOT 按钮**，将 XIAO ESP32C3 连接到电脑以进入 **引导模式**

- **步骤 2.** 连接后，松开 BOOT 按钮

- **步骤 3.** 访问[此页面](https://www.espressif.com/en/support/download/other-tools)并下载 **ESP RF Test Tool 和测试指南**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **步骤 4.** 解压 **.zip** 文件，导航到 `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` 并打开 **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **步骤 5.** 选择 **ESP32C3** 作为 ChipType，选择您的 COM 端口，设置 BaudRate 为 **115200**，然后点击 **open**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

您将看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **步骤 6.** 选择 **Flash** 并点击 **Select Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **步骤 7.** 下载 [XIAO ESP32C3 的出厂固件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) 并选择它。

- **步骤 8.** 最后点击 **Load Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

当烧录成功时，您将看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>