---
description: Xadow - NFC
title: Xadow - NFC
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_NFC
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
近场通信（NFC）是一组短距离无线技术。它广泛应用于日常生活中的访问控制系统和移动支付系统。

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/X_nfc_01.jpg)

Xadow NFC 采用高度集成的收发模块 PN532，支持 13.56MHz 的非接触式通信。通过该模块，您可以读取和写入 13.56MHz 标签，或者使用两个 Xadow NFC 实现点对点数据交换。Xadow NFC 设计支持 I2C、SPI 或 UART 通信协议，默认模式为 I2C。此外，我们配备了独立的 PCB 天线，可以轻松从您使用的任何外壳中伸出，为您的项目外观设计提供更多空间。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-p-1627.html)

## 规格
---
- 工作电压：3.3V
- 工作电流：
  - 静态模式：73mA
  - 写入/读取模式：83mA
- 支持主机接口：I2C（默认）、SPI、UART。
- 用于 13.56MHz 的非接触式通信。
- 支持 ISO14443 Type A 和 Type B 协议。
- 检测 NFC 标签的最大工作距离为 28mm，具体取决于当前天线尺寸。
- 支持点对点通信。
- 尺寸：25.43mm x 20.35mm

## 演示
---
Xadow NFC 集成了 PN532 NFC 控制器，功能强大。我们的 Arduino 库目前支持读取/写入标签、手机与 Xadow NFC 通信以及标签仿真，是一个三合一的全能模块。

:::note:
    当 Xadow NFC 使用 SPI 通信协议时，已有库支持手机与 Xadow NFC 通信。由于该产品的默认通信模式为 I2C，因此该库无法直接使用。
:::
在读取/写入标签之前，您需要准备硬件安装和相关库。

- 硬件安装如下图所示：

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/XadowNFC.jpg)

:::note:
    将 Xadow - NFC 连接到 [Xadow - 主板](https://wiki.seeedstudio.com/cn/Xadow_Main_Board) 时，请注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::

- 下载 [PN532 库](https://github.com/Seeed-Studio/PN532) 和 [NDEF 库](https://github.com/don/NDEF)。不要忘记将这些库安装到 Arduino 库中。如果您不清楚操作，请参考[这里](https://www.seeedstudio.com/wiki/How_to_install_Arduino_Library)了解详细步骤。

:::note:
    确保您的 Arduino 库文件夹中有以下文件夹：PN532、PN532_SPI、PN532_I2C、PN532_HSU 和 NDEF（来自 NDEF 库）。
:::
**演示 1：向标签写入消息**

- 通过路径打开代码：File -> Example -> Ndef_dev -> WriteTag。

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/Code_Interfae.jpg)

在此代码中，函数 message.addUriRecord("https://arduino.cc") 用于向标签写入消息。您可以将消息 "https://arduino.cc" 替换为新消息。例如，我们使用此函数输入 "do you happy?" 和 "hello, world"。

- 上传代码并打开串行监视器，它会提示您将 NFC 标签放置在 NFC 天线上。操作成功后，它会提示您读取标签。

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/WriteTag.jpg)

**演示 2：读取标签**

如果您想知道刚刚完成的写入操作是否成功，可以使用代码 ReadTag 进行检查。

- 通过路径打开代码：File -> Example -> Ndef_dev -> ReadTag，并将其上传到您的 Xadow 主板。

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/ReadTag_code.bmp)

- 打开串行监视器查看标签信息。下图显示了读取结果：

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/Read_a_Tag.jpg)

为了清楚地理解上述图片，有必要解释 NDEF 消息。NDEF 消息中可以包含多个记录。为了分析，我们仅使用一个 NDEF 记录。

**TNF(001)** - TNF 字段值表示 TYPE 字段值的结构。值 0x01（NFC Forum 公认类型）表示 TYPE 字段包含一个遵循 NFC Forum RTD 规范定义的 RTD 类型名称格式的值。

**Type Length** - TYPE_LENGTH 字段是一个无符号 8 位整数，指定 TYPE 字段的长度（以八位字节为单位）。对于 TNF 字段的某些值，TYPE_LENGTH 字段始终为零。

**Pay load Length** - PAYLOAD_LENGTH 字段是一个无符号整数，指定 PAYLOAD 字段（应用程序负载）的长度（以八位字节为单位）。PAYLOAD_LENGTH 字段的大小由 SR 标志的值决定。

**Type(55)** - TYPE 字段的值是描述负载类型的标识符，URI 记录类型（“U”）。

**Pay Load** - UTF-8 编码的字符串内容。

## Xadow NFC 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Xadow NFC 天线原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow NFC Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip)
- [Xadow NFC 天线 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip)
- [PN532 数据手册](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/PN532.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>