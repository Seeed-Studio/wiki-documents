---
description: XIAO nRF52840 (Sense) 的 NFC 使用
title: 两个版本的 NFC 使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 05/31/2023
  author: Matthew
---

# Seeed Studio XIAO nRF52840 (Sense) 的 NFC 使用

<!-- :::note
The NFC function for Seeed Studio XIAO nRF52840 board is temportorily not functioning. The new wiki will be updated as soon as possible, once the new NFC library comes out.
::: -->

:::note
Seeed nRF52 Boards 版本 1.1.3 和 Seeed nRF52 mbed-enabled Boards 版本 2.9.2 已经过测试和验证。
:::

**Seeed Studio XIAO nRF52840** 和 **Seeed Studio XIAO nRF52840 Sense** 都配备了 **NFC（近场通信）模块**。本教程将帮助您开始在这些开发板上使用 NFC。在这里，我们将演示一个基本示例，在将手机放置在 NFC 天线上后，从开发板向手机发送文本字符串。

## 准备工作

> 当我们使用"Seeed nRF52 mbed-enabled Boards Library"时，NFC 功能将表现良好。

有关开发板库的安装，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)完成安装。如果您已经安装完成，我们可以继续进行项目。

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>


## 所需硬件

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或 [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x NFC 天线
- 1 x USB Type-C 数据线
- 1 x 智能手机

## 所需软件

- [NFC TagInfo App (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [NFC TagInfo App (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## 硬件连接和概述

按如下方式将 NFC 天线焊接到 Seeed Studio XIAO nRF52840 (Sense)：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3(1).png" alt="pir" width={550} height="auto" /></p>

- **特性**：nRF52840 的 13.56 MHz 差分电流驱动端口（NFC1 = P0.09，NFC2 = P0.10）；必须成对使用。
- **区别**：仅相位相反；没有单独功能。可以交换但会翻转 UID。
- **注意**：裸露引脚，无 ESD/TVS 保护。焊接前请佩戴防静电腕带，两个焊盘都是必需的，切勿用作 GPIO。

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

这里我们简单地发送文本字符串"Hello World!"

- **步骤 2.** 打开"NFC TagInfo"手机应用并点击 **Scan & Launch**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>


- **步骤 3.** 将 NFC 天线靠近手机，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>

## 天线调谐


  下面描述的所有操作都基于此文档的核心逻辑。**[Nordic 官方 NFC 天线设计](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)**
 - NFC 载波固定在 13.56 MHz；芯片仅在看到**谐振时的差分 100 Ω 负载**时才提供全功率。

- 调谐 = 使用两个电容器同时实现**谐振和阻抗变换**，使线圈呈现**精确的 100 Ω**。

**1.三个"永不改变"的数值**

| 项目 | 固定值 | 来源 |
|---|---|---|
| 工作频率 f | 13.56 MHz | 全球 NFC 标准，在 nRF52840 中硬编码 |
| 芯片期望看到的负载 | 100 Ω（差分） | Nordic 白皮书 nWP_026 |

**2.需要测量的两个量**

   **线圈电感 L** – 使用万用表/LCR 表/矢量网络分析仪在 100 kHz 下测量，单位为 µH。

   **线圈损耗电阻 R** – 从同一屏幕读取串联电阻，单位为 Ω（更粗的导线和更大的面积 → 更低的 R）。

**3  预检查：线圈尺寸是否合适？**
使用阻抗变换公式：


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="pir" width={250} height="auto" /></p>

目标：90–120 Ω，越接近 100 Ω 越好。

| 结果 | 含义 | 下一步 |
|---|---|---|
| < 60 Ω | 天线"太小" | 增加匝数或扩大面积 |
| 90 – 120 Ω | **通过** | 进入步骤 4 |
| > 150 Ω | 天线"太大" | 减少匝数或缩小面积 |

> 只有通过这个门槛后才能计算电容器；否则任何电容值都是无用的。

**4  计算谐振电容 C**

固定 13.56 MHz 的公式：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="pir" width={250} height="auto" /></p>


→ 给出**总电容**；对于 π 网络平均分配：

**C1 = C2 = C / 2**  
选择最接近的 E12 值（39 pF、47 pF、56 pF、68 pF …）。

