---
description: Seeed Studio XIAO nRF52840 Sense 上的 PDM 麦克风使用方法
title: XIAO nRF52840 Sense 的 PDM 使用方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-PDM-Usage
last_update:
  date: 06/25/2024
  author: Spencer
---

# Seeed Studio XIAO nRF52840 Sense 上的 PDM 麦克风使用方法

## 概述

**Seeed Studio XIAO nRF52840 Sense** 配备了一个 **PDM（脉冲密度调制）麦克风**，可以实时接收音频数据，用于音频识别。凭借其无线连接能力和 FPU 在处理音频数据方面的出色性能，它非常适合有趣的 TinyML 项目，如设备的远程语音控制。

:::note 注意

- **Seeed Studio XIAO nRF52840** 没有配备此 PDM 麦克风模块。
- 当我们使用 *Seeed nrf52 mbed-enabled Boards Library* 时，PDM 麦克风的性能会更好，因此我们强烈推荐使用它。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={680} height="auto" /></p>

本教程将介绍在此开发板上**使用 PDM 麦克风**的基础知识，并包含两个示例：

1. [可视化原始数据](#demo1)：此示例演示如何实时可视化麦克风的原始数据。
2. [保存录制的音频](#demo2)：此示例展示如何将麦克风录制的音频保存到 SD 卡上。

现在让我们来探索这些示例！

## 示例 1：实时可视化 PDM 麦克风的原始数据 {#demo1}

在此示例中，我们将在**串口监视器**和**串口绘图器**上实时可视化 PDM 麦克风的原始数据。

### 前提条件

- **步骤 1**. 获取 Arduino 库，[下载 Seeed_Arduino_Mic 库](https://github.com/Seeed-Studio/Seeed_Arduino_Mic) 作为 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-zip.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2**. 打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...` 并打开下载的 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

### 运行示例

- **步骤 3.** 导航到 `File > Examples > Seeed Arduino Mic > mic_serial_plotter` 打开 **mic_serial_plotter**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-install.png" alt="pir" width={550} height="auto" /></p>

- **步骤 4.** 上传代码并打开**串口监视器**

:::note 注意
一旦上传代码，它不会自动执行，直到您点击 Arduino 窗口右上角的**串口监视器**。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-serial.png" alt="pir" width={550} height="auto" /></p>

现在您将看到原始麦克风数据如上所示实时显示在串口监视器上！

### 可视化原始数据

- **步骤 5.** 如果您导航到 `Tools > Serial Plotter` 并打开**串口绘图器**，您将看到原始麦克风数据以波形图的形式实时显示！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-graph.png" alt="pir" width={700} height="auto" /></p>

## 示例 2：将麦克风录制的音频保存到 SD 卡 {#demo2}

就像 Seeed Studio XIAO 系列一样，Seeed Studio XIAO nRF52840 Sense 与 [Seeeduino Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 完全兼容。它可以安装在扩展板上，允许您使用板上的 SD 卡模块。如果您不想使用扩展板，可以通过 **SPI** 接口连接单独的 SD 卡模块。

### 前提条件

- **步骤 1.** 将 Seeed Studio XIAO nRF52840 Sense 连接到 Seeed Studio XIAO 扩展板，并将 SD 卡插入扩展板的 SD 卡插槽。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SD-connect.png" alt="pir" width={500} height="auto" /></p>

:::tip

当您看到扩展板上的指示灯规律地闪烁**绿色**时，连接成功。

> 由于我们之前已经安装了 *Seeed_Arduino_Mic Library*，因此在此示例中无需再次安装。但是，如果您尚未安装，请按照上述示例中的说明进行操作。
:::

- **步骤 2**. [下载 Seeed_Arduino_FS 库](https://github.com/Seeed-Studio/Seeed_Arduino_FS) 作为 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/arduino-fs-zip.png" alt="pir" width={1000} height="auto" /></p>

**注意：** 此库用于访问 SD 卡并保存数据。

### 运行示例

- **步骤 3**. 打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...` 并打开下载的 zip 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 导航到 `File > Examples > Seeed Arduino Mic > mic_Saved_OnSDcard` 打开 **mic_Saved_OnSDcard**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-sd-install.jpg" alt="pir" width={550} height="auto" /></p>

- **步骤 5.** 上传代码并打开**串口监视器**

### 保存数据

**注意：** 上传代码后，它们不会自动执行，直到您点击 Arduino 窗口右上角的**串口监视器**。

现在音频数据将开始采样，录制 5 分钟，并自动将数据保存到 SD 卡。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDMsavecodeoncard.png" alt="pir" width={800} height="auto" /></p>

这个 **test.9568.wav** 是一个 5 秒的音频文件，它被保存在 SD 卡上。

:::note 再次采样？
如果您想重新采样音频数据，应该按下复位按钮，然后再次点击**串口监视器**开始采样。
:::