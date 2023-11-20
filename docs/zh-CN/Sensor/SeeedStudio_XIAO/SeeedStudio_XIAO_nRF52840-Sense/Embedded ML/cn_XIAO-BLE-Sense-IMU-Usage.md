---
description: 6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense
title: IMU Usage for XIAO nRF52840 Sense
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 10/30/2023
  author: 吴飞飞
---

# Seeed Studio XIAO nRF52840 Sense上的6-Axis IMU使用

**Seeed Studio XIAO nRF52840 Sense** 配备高精度  **6-Axis 惯性测量单元 (IMU)**其中包括 **3-axis 加速度计** 和一个**3-axis 陀螺仪**。 该模块上还有一个 **嵌入式温度传感器** 。 我们相信这个模块可以极大地帮助你的TinyML项目。本 wiki 将介绍在此板上使用此 IMU 的基础知识。

**注意**

- **Seeed Studio XIAO nRF52840** 未配备 IMU 模块。
- 当我们使用"Seeed nrf52 mbed-enabled Boards Library"时, IMU 功能的性能会更好，因此我们高度重视它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={600} height="auto" /></p>


## 在串行监视器上查看加速度计、陀螺仪和温度数据

在此示例中，我们将查看 Arduino 串行监视器上来自 Seeed Studio XIAO nRF52840 Sense 的加速度计、陀螺仪和温度数据。

- **步骤 1**. [将 Seeed_Arduino_LSM6DS3 Library下载](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) 为ZIP文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2**. 打开 Arduino IDE, 导航到 `Sketch > Include Library > Add .ZIP Library...` 并打开下载的 zip 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **步骤 3.** 导航到 `File > Examples > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample` 打开 **HighLevelExample**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **步骤 4.** 上传代码并打开 **串行监视器**

**注意:** 上传代码后，它不会自动执行，直到您单击Arduino窗口右上角的**Serial Monitor**。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

现在，您将看到加速度计、陀螺仪和温度数据在串行监视器上一个接一个地显示，如上所示！

## 并且?

如果您想尝试更多示例，可以导航到 `File > Examples > Accelerometer And Gyroscope LSM6DS3` 下的所有示例并查看 **加速度计和陀螺仪 LSM6DS3**