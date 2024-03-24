---
title: Grove - LED Matrix Driver v1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-LED_Matrix_Driver_v1.0/
slug: /cn/Grove-LED_Matrix_Driver_v1.0
last_update:
  date: 03/21/2024
  author: WuFeifei
---


![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_view_700_s.jpg)

Grove - LED Matrix Driver v1.0 是一款UART（串行）到点阵LED驱动器，它集成了各种图形功能。它仅支持32×64 LED矩阵。这款产品是一个**Grove**兼容的UART接口。它提供了简单且丰富的API，这些API抽象了底层LED驱动硬件的复杂性。您只需在代码中调用这些API，即可为您的项目实现不同的功能。

每个点（即像素）支持双色LED。它可以产生三种颜色：红色（主色）、绿色（主色）和黄色（混合色）。所有LED的输入电流可以一次性设置。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-v1.0-p-2645.html)

:::注意
此Grove模块不支持单独更改每个LED的输入电流。
:::

## 特性

- Grove兼容且易于使用
- 高度抽象且完整的API
- 支持双色LED像素，共三种颜色（第三种颜色是两种主色的混合）
- 接口：UART（在Arduino中为SoftSerial）

:::提示
    更多关于Grove模块的信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

规格
--------------

| 参数                       | 参数                                                         |
| -------------------------- | ------------------------------------------------------------ |
| 工作电压(V)                | 3.3–5 伏特                                                   |
| 工作电流(mA)               | 最大：28–50 毫安                                             |
| 输出电压（来自矩阵驱动器） | 3.3 伏特                                                     |
| 支持的符号/图形功能        | 点、直线、圆、字符、字符串、数字、表情符号、图像（您可以在代码中直接调用API来显示这些符号） |
| 支持的LED矩阵尺寸          | 32(行)×64(列)                                                |
| 每个LED矩阵点支持的颜色    | 双色LED（绿色和红色）和混合色（黄色），每个LED矩阵点可以使用一个LED |
| LED矩阵连接器              | DBSTAR\_HUB 08A                                              |
| Grove端口的协议            | UART                                                         |
| 工作温度                   | -40–80 ℃                                                     |
| 尺寸                       | 46.5×44 毫米                                                 |
| 重量                       | 9 克（模块），12.5 克（单个包装）                            |

支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上面提到的所支持的平台是指该模块的软件或理论上的兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户必须自己编写软件库。
:::

硬件概述
-----------------

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_components_described_1200_s.jpg)

- **Grove 接口**，用于将此产品与主控板连接。
- **LED矩阵端口（DBSTAR_HUB 08A）**，用于连接LED矩阵。如果您找不到这样的连接器，可以使用跳线作为替代方案。

### **包装内容**（主要部件）

| 部件名称                                                     | 数量 |
| ------------------------------------------------------------ | ---- |
| Grove - LED 矩阵驱动器 v1.0                                  | 1 件 |
| [Grove 线缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 件 |

入门指南
---------------

现在让我们使用这个模块来运行一些基本示例。

### 使用Arduino

#### 所需材料

- Grove - LED 矩阵驱动器 v1.0 × 1
- 32×64 LED矩阵，矩阵点中有一个红色和一个绿色LED（单色LED矩阵也可以）× 1
- 电源线（带状）× 1
- 5 伏特（输出）适配器，用于调节LED矩阵的输入电压× 1
- 8针（母头）带状电缆× 1
- Arduino UNO（其他Arduino型号也可以）× 1
- [Grove线缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1
- Grove - 基础底板× 1

#### 连接

按照以下方式连接所有部件：

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_front_3600.jpg)

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_back_3600.jpg)

#### Coding Work

您可以在https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver找到更多的示例程序，并在同一地址https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver找到开发库。

1. 一个典型的示例代码。您可以使用[Codebender](https://codebender.cc/)将代码上传到主控板。

<iframe frameBorder={0} height={500} src="https://codebender.cc/embed/sketch:300168" width="50%">
</iframe>

2. 下载并上传代码。如果您不知道如何上传Arduino草图，请访问https://www.arduino.cc/en/Guide/Windows（Windows用户）或https://www.arduino.cc/en/Guide/MacOSX（Mac用户）。您可以看到如下结果。

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_result_view_s.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [原理图 file](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip)
- [STM32F103C8T6 数据手册](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/STM32F03C8T6.pdf)
- [Github 库](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver)
- [本产品的固件](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver/tree/master/Firmware)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_LED_Matrix_Driver_v1.0 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
