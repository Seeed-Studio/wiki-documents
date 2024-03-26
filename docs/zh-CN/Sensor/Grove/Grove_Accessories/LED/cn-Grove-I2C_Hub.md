---
title: Grove - I2C Hub
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-I2C_Hub/
slug: /cn/Grove-I2C_Hub
last_update:
  date: 03/23/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Hub/img/I2C_hub.jpg)

I2C Hub Grove 是一个扩展 Grove 模块，用于将多个 I2C 设备连接到 Grove Base Shield。它可以与[通用 4 Pin 转 X2 4 Pin 线缆](https://www.seeedstudio.com/depot/universal-4-pin-to-x2-4-pin-cable-5-pcs-pack-p-847.html?cPath=178_179)配合使用，并可以连接最多 3 个 I2C 设备，这可能满足大多数开发需求。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)

## 特点

- 可串联

## 规格参数

| 参数     | 数值/范围    |
| -------- | ------------ |
| 工作电压 | 3.3/5V       |
| 工作温度 | -25℃ 至 +85℃ |
| 尺寸     | 40mm x20mm   |

支持平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
    上述提到的支持平台只是模块软件或理论兼容性的指示。在大多数情况下，我们只针对 Arduino 平台提供软件库或代码示例。由于无法为所有可能的 MCU 平台提供软件库/示例代码，因此用户需要编写自己的软件库。
:::

## 应用创意

- 当你的 Grove 平台没有足够的空间连接多个 I2C 设备时，可以使用此模块进行扩展。

## 使用说明

由于每个 I2C 设备都有自己唯一的地址，因此同时使用同一个 I2C 插槽时不会发生冲突。硬件安装方法如下所示。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Hub/img/I2C_Hub_Connect.jpg)

这里我们不列举具体的示例。

:::提示
    关于 Grove 模块的更多详情，请参考[Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Hub/res/I2C_Hub_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

[I2C Hub Eagle 文件](https://files.seeedstudio.com/wiki/Grove-I2C_Hub/res/I2C_Hub_Eagle_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Hub -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同形式的支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
