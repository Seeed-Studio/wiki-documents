---
description: 入门指南
title: 在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite 入门指南
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-TFLite-Getting-Started
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# 在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite 入门指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

本教程将演示如何在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite，并使用板载加速度计检测诸如出拳和弯曲等手势。这里的数据训练将在设备本身上完成。

> 对于嵌入式 AI 应用，我们强烈推荐使用"Seeed nrf52 mbed-enabled Boards Library"。

## 软件设置

请确保首先按照["Seeed Studio XIAO nRF52840 (Sense) 入门指南"](https://wiki.seeedstudio.com/cn/XIAO-BLE-Sense-Getting-Started)教程进行初始硬件和软件设置。

现在让我们继续进行其余的软件设置。

- **步骤 1**. 下载 [Seeed_Arduino_LSM6DS3 库](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) 作为 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2**. 下载 [tflite-micro-arduino-examples 库](https://github.com/lakshanthad/tflite-micro-arduino-examples) 作为 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tflite-micro-github.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 3**. 打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...` 并依次打开下载的两个 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 导航到 `File > Examples > Seeed Arduino LSM6DS3 > IMU_Capture` 打开 **IMU_Capture.ino**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/select-IMUCapture-2.png" alt="pir" width={500} height="auto" /></p>

- **步骤 5.** 上传代码并打开**串口监视器**

**注意：** 一旦上传代码，它不会自动执行，直到您点击 Arduino 窗口右上角的**串口监视器**。

## 训练数据

### 出拳动作

在串口监视器打开时，开始为出拳动作训练数据。

- **步骤 1.** 用手掌握住 Seeed Studio XIAO nRF52840 Sense 并开始向前出拳，您将在串口监视器上看到一些数据打印出来

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-serial.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2.** 重复出拳动作约 10 次，您将看到每次出拳后都会生成新数据

- **步骤 3.** 复制并粘贴完整的串口监视器输出到文本文件中，并将文本文件保存为 **punch.csv**

**注意：** 请同时复制第一行，其中包含 **aX,aY,aZ,gX,gY,gZ**

### 弯曲动作

- **步骤 1.** 重新连接 USB 线缆到 Seeed Studio XIAO nRF52840 Sense，打开串口监视器，用手掌握住 Seeed Studio XIAO nRF52840 Sense 并开始向内弯曲，您将在串口监视器上看到一些数据打印出来

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-flex.gif" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-serial.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2.** 重复弯曲动作约 10 次，您将看到每次弯曲后都会生成新数据

- **步骤 3.** 复制并粘贴完整的串口监视器输出到文本文件中，并将文本文件保存为 **flex.csv**

**注意：** 请同时复制第一行，其中包含 **aX,aY,aZ,gX,gY,gZ**

## 生成 TensorFlow Lite 模型文件

现在我们将使用之前创建的 **punch.csv** 和 **flex.csv** 文件来生成一个 TensorFlow Lite 模型文件 **(model.h)**。

- **步骤 1.** 打开[这个 Python 笔记本](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb)，它将帮助生成我们需要的 model.h 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TF-notebook-1.png" alt="pir" width={7500} height="auto" /></p>

- **步骤 2.** 导航到左侧导航面板的文件选项卡，将 **punch.csv** 和 **flex.csv** 文件拖放到其中

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/drop-punch-flex.png" alt="pir" width={350} height="auto" /></p>

- **步骤 3.** 在 **Setup Python Environment** 部分中，将代码从 **pip install tensorflow==2.0.0-rc1** 更改为 **pip install tensorflow**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tensorflow-install.png" alt="pir" width={550} height="auto" /></p>

- **步骤 4.** 导航到 `Runtime > Run all` 来运行所有代码单元

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-all.png" alt="pir" width={450} height="auto" /></p>

- **步骤 5.** 对于弹出的错误消息，点击 **Run anyway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 一旦所有代码单元执行完毕，您将在之前看到的 **files** 选项卡下找到一个新生成的 **model.h** 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/model.h.png" alt="pir" width={350} height="auto" /></p>

**注意：** 如果您看不到上述 **model.h** 文件，请刷新页面。

- **步骤 7.** 右键点击该文件并点击 **Download** 将文件下载到您的电脑

## 推理

现在我们将使用下载的 TensorFlow Lite 模型文件 **(model.h)** 来识别来自 Seeed Studio XIAO nRF52840 Sense 的出拳和弯曲动作。

- **步骤 1.** 导航到 **Seeed_Arduino_LSM6DS3** 库的库路径（通常在 **Documents > Arduino > libraries > Seeed_Arduino_LSM6DS3** 下），并访问 **examples > IMU_Classifier**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/file-explorer-imu.png" alt="pir" width={650} height="auto" /></p>

- **步骤 2.** 用我们之前下载的文件替换 **model.h** 文件

- **步骤 3.** 双击 **IMU_Classifier.ino** 并将代码上传到 Seeed Studio XIAO nRF52840 Sense。

### 出拳动作

打开**串口监视器**并执行出拳动作。您将看到它会在 **punch** 旁边给出接近 **1** 的结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-result.png" alt="pir" width={300} height="auto" /></p>

### 弯曲动作

执行弯曲动作。您将看到它会在 **flex** 旁边给出接近 **1** 的结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-result.png" alt="pir" width={300} height="auto" /></p>

## 资源

- **[网页]** [TensorFlow Lite 文档](https://www.tensorflow.org/lite/guide)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
