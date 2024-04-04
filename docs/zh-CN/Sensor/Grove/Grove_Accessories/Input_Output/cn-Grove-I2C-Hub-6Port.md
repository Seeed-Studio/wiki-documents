---
title: Grove - I²C集线器（6端口）
description: Grove - I²C集线器（6端口）
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-I2C-Hub-6Port/
slug: /cn/Grove-I2C-Hub-6Port
last_update:
  date: 03/23/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/products/103020272/img/grove-i2c-hub-6-port-preview.jpg)

Grove - I2C Hub (6 Port)是一个扩展Grove模块，用于将多个I2C设备连接到Grove Base Shield。它可以使用[Universal 4 Pin to X2 4 Pin cable](https://www.seeedstudio.com/depot/universal-4-pin-to-x2-4-pin-cable-5-pcs-pack-p-847.html?cPath=178_179)，并且能够连接多达5个I2C设备，以满足大多数开发需求。与Grove - I2C Hub相比，Grove - I2C Hub (6 Port)多了两个引脚，因此能够满足更多样化的需求。
`

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-Hub-6-Port-p-4349.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 特点

- 可串联
- 比[Grove - I2C Hub](https://www.seeedstudio.com/Grove-I2C-Hub.html)多两个连接器
- 经济实惠且实用

## 规格参数

| 参数     | 值/范围          |
|---|---|
|工作电压|3.3v/5v|
|工作温度|-25℃ 至 +85℃|
| 尺寸 |40mm x20mm x15mm|

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

我们可以连接最多5个I2C设备，请点击[这里](https://www.seeedstudio.com/catalogsearch/result/?q=i2c)查找您喜欢的Grove I2C设备。
在以下示例中，我们将使用两个I2C设备。

:::警告
    上述支持的平台是模块软件或理论兼容性的指示。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于不可能为所有可能的MCU平台提供软件库/示例代码，因此用户必须编写自己的软件库。
:::

## 应用想法

- 当您的Grove平台上的空间不足以连接多个I2C设备时，或者需要比Grove I2C Hub多两个连接器时，可以使用它。

## 使用说明

与Grove I2C Hub一样，如果您同时使用相同的I2C插座，它不会发生冲突，因为每个I2C设备都有自己的地址。硬件安装过程如下所示。

![](https://files.seeedstudio.com/products/103020272/img/hardware.jpg)

以下我们并没有列出具体的示例。

:::提示
    更多关于Grove模块的详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/Grove_System/)。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Hub/res/I2C_Hub_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

[I2C Hub Eagle 文件](https://files.seeedstudio.com/wiki/Grove-I2C_Hub/res/I2C_Hub_Eagle_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Hub -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供各种支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
