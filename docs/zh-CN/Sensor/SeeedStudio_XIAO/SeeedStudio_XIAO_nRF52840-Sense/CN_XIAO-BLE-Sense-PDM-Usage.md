---
description: PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense
title: 数字麦克风（PDM）使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-PDM-Usage
last_update:
  date: 10/30/2023
  author: 吴飞飞
---

# XIAO nRF52840 Sense 上的 PDM 麦克风的使用

**Seeed Studio XIAO nRF52840 Sense** 配备 **PDM (脉冲密度调制) 麦克风** ，可实时接收音频数据，可用于音频识别。由于 FPU，它具有无线连接和处理音频数据的良好性能，可用于更有趣的 TinyML 项目，例如设备的远程语音控制。

**注意:**

- **Seeed Studio XIAO nRF52840** 未配备此 PDM 麦克风模块。
- 当我们使用"Seeed nrf52 mbed-enabled Boards Library"时，PDM 麦克风的性能会更好，因此我们高度重视这一点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={600} height="auto" /></p>

本 wiki 将介绍在此板上使用此 PDM 麦克风的基础知识，并包括 2 个示例。一个示例侧重于实时可视化来自麦克风的原始数据，另一个示例侧重于将麦克风录制的音频保存在 SD 卡上。现在让我们来探索一下吧！

## 实时可视化来自PDM麦克风的原始数据
在此示例中，我们将在串行**监视器** 和 **串行绘图仪** 上实时可视化来自 PDM 麦克风的原始数据。

- **步骤 1**. 将[Seeed_Arduino_Mic Library下载](https://github.com/Seeed-Studio/Seeed_Arduino_Mic) 为ZIP文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-zip.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2**.打开 Arduino IDE, 导航到 `Sketch > Include Library > Add .ZIP Library...` 并打开下载的 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 导航到 `File > Examples > Seeed Arduino Mic > mic_serial_plotter` 打开 **mic_serial_plotter**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-install.png" alt="pir" width={550} height="auto" /></p>

- **步骤 4.** 上传代码并打开 **Serial Monitor**

**注意:** 上传代码后，它不会自动执行，直到您单击Arduino窗口右上角的 **Serial Monitor**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-serial.png" alt="pir" width={550} height="auto" /></p>

现在，您将看到如上所示在串行监视器上实时显示的原始麦克风数据！

- **步骤 5.** 如果您导航到 `Tools > Serial Plotter` 并打开 **串行绘图仪**, 您将看到原始麦克风数据实时显示在图表上！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-graph.png" alt="pir" width={700} height="auto" /></p>

## 将麦克风录制的音频保存到SD卡上

与Seeed Studio XIAO 系列一样, Seeed Studio XIAO nRF52840 Sense 与 [Seeeduino Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 完美兼容。它以引脚对引脚的方式安装在扩展板上，这意味着您可以使用扩展板上的 SD 卡模块。如果不想使用扩展板，可以通过 **SPI** 接口将其与单独的SD卡模块连接。

- **步骤 1.** 将 Seeed Studio XIAO nRF52840 Sense 安装在 Seeed Studio XIAO 扩展板上，并将 SD 卡插入扩展板的 SD 卡插槽。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SD-connect.png" alt="pir" width={500} height="auto" /></p>

**注意:** 当您看到扩展板上的指示灯呈绿色定期闪烁时，表示连接成功。

由于我们之前已经安装了 **Seeed_Arduino_Mic Library** ，因此在此示例中不需要再次安装。但是，如果您尚未安装它，请按照上面的示例进行操作。

- **步骤 2**. [将 Seeed_Arduino_FS Library下载](https://github.com/Seeed-Studio/Seeed_Arduino_FS) 为ZIP文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/arduino-fs-zip.png" alt="pir" width={1000} height="auto" /></p>

**注意:** 需要此库来访问 SD 卡并保存数据

- **步骤 3**. 打开 Arduino IDE, 导航到 `Sketch > Include Library > Add .ZIP Library...` 并打开下载的 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 导航到 `File > Examples > Seeed Arduino Mic > mic_Saved_OnSDcard` t并打开 **mic_Saved_OnSDcard**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-sd-install.jpg" alt="pir" width={550} height="auto" /></p>

- **步骤 5.** 上传代码并打开 **串行监视器**

**注意:** 上传代码后，它不会自动执行，直到您单击Arduino窗口右上角的 **Serial Monitor** 

现在音频数据将开始采样，录制 5 分钟并自动将数据保存到 SD 卡。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDMsavecodeoncard.png" alt="pir" width={800} height="auto" /></p>

此 **test.9568.wav** 是一个5秒的音频文件，保存在SD卡上。

:::注意

如果要对音频数据进行重新采样，应按下重置按钮，然后再次单击“串行监视器”进行采样。
:::
