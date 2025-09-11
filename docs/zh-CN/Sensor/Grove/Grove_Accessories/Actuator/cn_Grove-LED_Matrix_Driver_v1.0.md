---
title: Grove - LED矩阵驱动器 v1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-LED_Matrix_Driver_v1.0/
slug: /cn/Grove-LED_Matrix_Driver_v1.0
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_view_700_s.jpg)

Grove - LED矩阵驱动器 v1.0 是一个UART（串口）到点阵LED驱动器，集成了多种图形功能。它仅支持32×64 LED矩阵。该产品是一个**Grove**兼容的UART接口。它提供了简单且丰富的API，抽象了底层LED驱动硬件的复杂性。您只需在代码中调用这些API即可实现项目的不同功能。

每个点（即像素）支持双色LED。它总共可以产生三种颜色：红色（原色）、绿色（原色）和黄色（混合色）。所有LED的输入电流可以同时设置。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-v1.0-p-2645.html)

:::note
此Grove模块不支持单独更改每个LED的输入电流。
:::

功能特点
--------

- Grove兼容且易于使用
- 高度抽象且完整的API
- 支持双色LED像素，总共三种颜色（第三种颜色是两种原色的混合）
- 接口：UART（Arduino中的SoftSerial）

:::tip
    更多关于Grove模块的详细信息，请参考 [Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格参数
--------

| 参数                                   | 值                                                                                                                            |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| 工作电压(V)                            | 3.3–5伏                                                                                                                       |
| 工作电流(mA)                           | 最大值：28–50 mA                                                                                                              |
| 输出电压（来自矩阵驱动器）             | 3.3伏                                                                                                                         |
| 支持的符号/图形功能                    | 点、直线、圆、字符、字符串、数字、表情符号、图像（您可以通过直接在代码中调用API来显示这些符号）                                |
| 支持的LED矩阵尺寸                      | 32（行）×64（列）                                                                                                             |
| 每个LED矩阵点支持的颜色                | 双LED（绿色和红色）以及一种混合色（黄色），您也可以在每个LED矩阵点中仅使用一个LED                                              |
| LED矩阵连接器                          | DBSTAR_HUB 08A                                                                                                               |
| Grove端口协议                      | UART                                                                                                                          |
| 工作温度                               | -40–80 ℃                                                                                                                      |
| 尺寸                                   | 46.5×44 mm                                                                                                                    |
| 重量                                   | 9 g（模块），12.5 g（单个包装总重）                                                                                            |

支持的平台
--------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为Arduino平台提供软件库或代码示例。无法为所有可能的MCU平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

硬件概览
--------

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_components_described_1200_s.jpg)

- **Grove插座**，用于将此产品连接到主控板。
- **LED矩阵端口（DBSTAR_HUB 08A）**，用于连接LED矩阵。如果您找不到这样的连接器，可以使用跳线作为替代方案。

### **包装内容**（主要部件）

| 部件名称                                                                                                                    | 数量     |
|-----------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - LED矩阵驱动器 v1.0                                                                                              | 1 个     |
| [Grove 电缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 条     |

入门指南
---------------

现在让我们使用该模块运行一些基本示例。

### 使用 Arduino

#### 所需材料

- Grove - LED矩阵驱动器 v1.0 × 1
- 32×64 LED矩阵，矩阵点中包含一个红色和一个绿色LED（单色LED矩阵也可以）× 1
- 电源线（带状形状）× 1
- 5伏（输出）适配器，用于调节LED矩阵的输入电压 × 1
- 8针（母头）带状电缆 × 1
- Arduino UNO（其他Arduino型号也可以）× 1
- [Grove 电缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1
- Grove - 基础扩展板 × 1

#### 连接

按照以下方式连接所有部件：

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_front_3600.jpg)

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_back_3600.jpg)

#### 编码工作

您可以在以下地址找到更多示例代码：&lt;https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver&gt;，以及开发库：&lt;https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver&gt;

1. 一个典型的示例代码。您可以使用 [Codebender](https://codebender.cc) 将代码上传到主控制板。

<iframe frameBorder={0} height={500} src="https://codebender.cc/embed/sketch:300168" width="50%">
</iframe>

2. 下载并上传代码。如果您不知道如何上传Arduino代码，请访问以下链接：&lt;https://www.arduino.cc/en/Guide/Windows&gt;（适用于Windows用户）或 &lt;https://www.arduino.cc/en/Guide/MacOSX&gt;（适用于Mac用户）。您可以看到如下结果。

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_result_view_s.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [原理图文件](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip)
- [STM32F103C8T6 数据手册](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/STM32F03C8T6.pdf)
- [Github上的库](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver)
- [该产品的固件](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver/tree/master/Firmware)

<!-- 此Markdown文件来源于 https://www.seeedstudio.com/wiki/Grove_-_LED_Matrix_Driver_v1.0 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>