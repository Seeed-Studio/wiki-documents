---
description: 本Wiki介绍了Grove - NFC (ST25DV64)的使用方法。
title: Grove - NFC(ST25DV64)
keywords:
- NFC
- ST25DV64
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove-nfc-st25dv64
last_update:
  date: 5/16/2023
  author: Stephen Lo
---

# Grove - NFC (ST25DV64)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/1.jpg" alt="pir" width={450} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-NFC-ST25DV64KC-p-5688.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - NFC (ST25DV64)是一款基于意法半导体先进ST25DV64K芯片的创新且多功能的NFC/RFID标签板。这款动态芯片支持ISO/IEC 15693和NFC Forum Type 5标签标准，使其与各种支持NFC的设备兼容。

专为创客、DIY爱好者以及任何对NFC技术实验感兴趣的人设计，Grove - NFC (ST25DV64)为您的项目添加NFC功能提供了简单、经济高效的解决方案。凭借其开源特性，您不仅可以直接使用此板，还可以对其进行调整以更好地满足您的特定需求，无论您是在构建智能家居系统、安全门禁控制设备、非接触式支付解决方案还是库存跟踪系统。

Grove - NFC (ST25DV64)不仅仅是一个NFC标签。它还是一个强大的工具，您可以用它来学习NFC技术及其应用。凭借其丰富的功能，您可以探索NFC的各个方面，从数据传输和能量收集到数据保护和通用输出。

此板的设计考虑了便利性。它采用标准的Grove连接器（HY2.0 - 4Pin），使其与其他Grove模块轻松兼容。此外，它适用于3.3V和5V系统，为您的NFC需求提供了灵活的解决方案。

尽管体积小巧，Grove - NFC (ST25DV64)在存储方面却功能强大。它提供64 Kbits的EEPROM，组织为2048个32位块，为您的数据提供充足的空间。

注意：请记住，Grove - NFC (ST25DV64)不包含NFC天线。您需要单独购买13.56MHz NFC天线来配合此产品使用。您也可以从Seeedstudio购买此天线。

无论您是NFC新手还是寻找易于使用的NFC解决方案的经验丰富的开发者，Grove - NFC (ST25DV64)都是绝佳选择。其开源软件和硬件，结合易用性和多功能性，使其成为任何NFC项目的宝贵工具。

:::tip
我们已经发布了[Seeed气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。
:::

## 特性

- 基于ST25DV64K芯片，支持ISO/IEC 15693和NFC Forum Type 5标签标准
- 64 Kbits EEPROM，组织为2048个32位块
- 能量收集和GPO（通用输出）
- 快速传输模式和多级数据保护
- 兼容3.3V和5V系统
- 使用标准Grove连接器（HY2.0 - 4Pin），便于与其他Grove模块集成
- 开源软件和硬件

## 规格

- 芯片：ST25DV64K
- 工作频率：13.56 MHz
- 协议：ISO/IEC 15693
- 通信接口：I2C
- Grove 连接器：4针 HY2.0
- 工作电压：3.3/5V

## 包装内容

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/2.jpg" alt="pir" width={500} height="auto" /></p>

- 1x Grove - NFC(ST25DV64) 板
- 2x Grove 线缆(20cm)

## 应用

- **门禁控制：** 使用 Grove - NFC (ST25DV64) 作为门禁系统的钥匙卡。
- **智能家居自动化：** 在标签上存储配置数据以控制智能家居设备或触发特定操作。
- **非接触式支付：** 将标签集成到支付系统中进行非接触式交易。
- **设备配对：** 通过在 NFC 标签上存储连接信息来简化设备间的配对过程。
- **库存跟踪：** 将 NFC 标签附加到产品上以存储产品信息并简化库存管理。

## 硬件概述

### 引脚图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/3.png" alt="pir" width={600} height="auto" /></p>

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与 Arduino 配合使用

#### 所需材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino V4.3</th>
			<th>NFC 天线</th>
      <th>Grove - NFC(ST25DV64)</th>
		</tr>
    <tr>
      <td><p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p></td>
      <td><p><img src="https://raw.githubusercontent.com/Longan-Labs/NFC_ST25DV_RES/main/images/NFC_ANTENNA.jpg" alt="pir" width={250} height="auto" /></p></td>
      <td><p><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/1.jpg" alt="pir" width={250} height="auto" /></p></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/NFC-Antenna-p-1805.html?queryID=32009a01d3dd8bba3d47aacebce9f91d&objectID=1138&indexName=bazaar_retailer_products" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>



:::note
**1**. 请轻柔地插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定您的线缆是否合适，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。
    
**2**. 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - NFC (ST25DV64) 连接到 Grove-Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到 PC。

:::note
Grove - NFC (ST25DV64) 不包含 NFC 天线。因此，您需要单独购买一个 13.56MHz NFC 天线来配合此产品使用。您也可以从 Seeedstudio 购买此天线。
:::

| Seeeduino     | Grove - NFC (ST25DV64) |
|---------------|-------------------------|
| 3.3/5V        | 红色                     |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                  |

#### 软件

- **步骤 1.** 从 Github 下载 [ST25DV Arduino 库](https://github.com/limengdu/ST25DV)。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 正确下载并安装库后，您可以在示例文件夹中找到一个名为 `ST25DV_HelloWorld.ino` 的示例程序。此程序专为 ST25DV 模块设计。

```cpp
#include "ST25DVSensor.h"

#define DEV_I2C         Wire
ST25DV st25dv(12, -1, &DEV_I2C);

void setup() {
  const char uri_write_message[] = "seeedstudio.com";       // 要写入标签的 Uri 消息
  const char uri_write_protocol[] = URI_ID_0x01_STRING; // 要写入标签的 Uri 协议
  String uri_write = String(uri_write_protocol) + String(uri_write_message);
  String uri_read;

  // 初始化串口输出。
  Serial.begin(115200);

  // 如果您使用默认的 Wire 实例，可以省略使用的 wire 实例
  if(st25dv.begin() == 0) {
    Serial.println("System Init done!");
  } else {
    Serial.println("System Init failed!");
    while(1);
  }

  if(st25dv.writeURI(uri_write_protocol, uri_write_message, "")) {
    Serial.println("Write failed!");
    while(1);
  }

  delay(100);
  
  if(st25dv.readURI(&uri_read)) {
    Serial.println("Read failed!");
    while(1);
  }

  Serial.println(uri_read.c_str());

  if(strcmp(uri_read.c_str(), uri_write.c_str()) == 0) {
    Serial.println("Successfully written and read!");
  } else {
    Serial.println("Read bad string!");
  }
}

void loop() {  
  //空循环
} 
```

- **步骤 4.** 上传演示程序。

- **步骤 5.** 点击 **工具-> 串口监视器** 打开 Arduino IDE 的 **串口监视器**。您将得到以下结果：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/5.png" alt="pir" width={700} height="auto" /></p>


将提供的程序上传到您的Arduino后，您的Grove - NFC (ST25DV64)就成为了一个功能完整的NFC标签，可以独立运行。您可以将其从Arduino板上移除；它不需要任何额外的设置即可工作。

要测试其功能，您需要一部支持NFC的智能手机，Android或Apple都可以。该设备的NFC天线位于摄像头附近。但是，如果您不确定智能手机上NFC天线的位置，建议您在网上查找相关信息。

将手机的NFC天线靠近Grove - NFC (ST25DV64)的NFC天线。您的智能手机应该会显示一个提示，请求打开st.com网页。这个响应表明您的Grove - NFC (ST25DV64)作为NFC标签正常工作，并演示了演示程序的功能。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/4.jpg" alt="pir" width={300} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://github.com/Longan-Labs/NFC_ST25DV_RES/raw/main/Grove%20-%20NFC(ST25DV64).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - NFC(ST25DV64)](https://files.seeedstudio.com/wiki/Grove-NFCST25/Grove-NFC(ST25DV64).zip)
- **[PDF]** [ST25DV64K 数据手册](https://files.seeedstudio.com/wiki/Grove-NFCST25/st25dv.pdf)

## 技术支持与产品讨论

.

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>