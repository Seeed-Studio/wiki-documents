---
description: Getting Started
title: 基于 TensorFlow Lite 的运动识别
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-TFLite-Getting-Started
last_update:
  date: 10/30/2023
  author: 吴飞飞
---

# 基于 TensorFlow Lite 的运动识别

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite-thumb.jpg" alt="pir" width={1000} height="auto" /></p>


本 wiki 将演示如何在 Seeed Studio XIAO nRF52840 Sense 上使用 TensorFlow Lite，并使用板载加速度计检测打孔和弯曲等手势。在这里，数据训练将在设备本身上完成。

> 对于嵌入式 AI 应用，我们高度使用“Seeed nrf52 mbed enabled Boards Library”。

## 软件设置

请务必先按照["Seeed Studio XIAO nRF52840 (Sense)入门"](https://wiki.seeedstudio.com/XIAO-BLE-Sense-Getting-Started) wiki 进行初始硬件和软件设置。

现在让我们继续进行软件设置的其余部分。

- **步骤 1**. 将 [Seeed_Arduino_LSM6DS3 库](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) 下载为ZIP文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2**. 将[tflite-micro-arduino-examples 库](https://github.com/lakshanthad/tflite-micro-arduino-examples) 下载为ZIP文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tflite-micro-github.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 3**. 打开 Arduino IDE, 导航到 `Sketch > Include Library > Add .ZIP Library...` 并逐个打开下载的 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **步骤 4.** 导航到 `File > Examples > Seeeed Arduino LSM6DS3 > IMU_Capture` 去打开 **IMU_Capture.ino**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/select-IMUCapture-2.png" alt="pir" width={500} height="auto" /></p>


- **步骤 5.** 上传代码并打开 **Serial Monitor**

**注意:** 上传代码后，它不会自动执行，直到您单击Arduino窗口右上角的**Serial Monitor** 

## 训练数据

### 打孔动作

当串行监视器打开时，开始训练打孔动作的数据。

- **步骤 1.** 将 Seeed Studio XIAO nRF52840 Sense 握在手掌上，开始向前冲，您会看到一些数据打印在串行监视器上

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" alt="pir" width={1000} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-serial.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2.** 重复打孔动作约 10 次，您会看到每次打孔后生成的新数据

- **步骤 3.** 将完整的串行监视器输出复制并粘贴到文本文件中，并将文本文件另存为 **punch.csv**

**注意:** 请同时复制第一行，其中包含 **aX,aY,aZ,gX,gY,gZ**

### 弯曲动作

- **步骤 1.** 将 USB 数据线重新连接到 Seeed Studio XIAO nRF52840 Sense，打开串行监视器，将 Seeed Studio XIAO nRF52840 Sense 放在手掌上并开始向内弯曲，您会在串行监视器上看到一些数据打印出来

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-flex.gif" alt="pir" width={1000} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-serial.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2.** 重复弯曲动作约 10 次，您将看到每次弯曲后生成的新数据

- **步骤 3.** 将完整的串行监视器输出复制并粘贴到文本文件中，并将文本文件另存为 **flex.csv**

**注意:** 请同时复制第一行，其中包含 **aX,aY,aZ,gX,gY,gZ**

## 生成 TensorFlow Lite 模型文件 

现在，我们将使用之前创建的 **punch.csv** 和 **flex.csv** 文件生成一个 TensorFlow Lite 模型文件 **(model.h)**。
- **步骤 1.** 打开 [这个Python 笔记本](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb) ，这将有助于生成我们需要的 model.h 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TF-notebook-1.png" alt="pir" width={7500} height="auto" /></p>


- **步骤 2.** 导航到左侧导航面板上的文件选项卡，将 **punch.csv** 和 **flex.csv** 文件拖放到

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/drop-punch-flex.png" alt="pir" width={350} height="auto" /></p>


- **步骤 3.** 在 **设置 Python 环境** 中, 将代码从 **pip install tensorflow==2.0.0-rc1** 更改为 **pip install tensorflow** 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/tensorflow-install.png" alt="pir" width={550} height="auto" /></p>


- **步骤 4.** 导航到 `Runtime > Run all` 以运行所有代码单元

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-all.png" alt="pir" width={450} height="auto" /></p>


- **步骤 5.** 单击 **Run anyway** 以获取弹出的错误消息
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png" alt="pir" width={600} height="auto" /></p>


- **步骤 6.** 执行所有代码单元后，您将在之前看到的 **files** 选项卡下找到一个新的 **model.h** 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/model.h.png" alt="pir" width={350} height="auto" /></p>


**注意:** 如果看不到上述 **model.h** 文件，请刷新页面。

- **步骤 7.** 右键单击该文件，然后单击“下载”将文件 **下载** 到您的 PC

## 推理

现在，我们将使用下载的 TensorFlow Lite 模型文件  **(model.h)** 来识别 Seeed Studio XIAO nRF52840 Sense 中的冲孔和弯曲动作。

- **步骤 1.** 导航到 **Seeed_Arduino_LSM6DS3** 库路径 (通常在 **Documents > Arduino > libraries > Seeed_Arduino_LSM6DS3下的文档**下), 然后访问 **示例 > IMU_Classifier**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/file-explorer-imu.png" alt="pir" width={650} height="auto" /></p>


- **步骤 2.** 将 **model.h** 文件替换为我们之前下载的文件

- **步骤 3.** 双击 **IMU_Classifier.ino** 并将代码上传到 Seeed Studio XIAO nRF52840 Sense。

### 打孔动作

打开 **串行监视器** 并执行打孔操作。你会看到它会在 **冲床** 旁边给出一个接近 **1** 的结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/punch-result.png" alt="pir" width={300} height="auto" /></p>


### 弯曲动作

执行弯曲动作。您将看到它将在 **flex** 旁边给出接近 **1** 的结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/flex-result.png" alt="pir" width={300} height="auto" /></p>


## 资源

- **[网页]** [TensorFlow Lite 文档](https://www.tensorflow.org/lite/guide)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>