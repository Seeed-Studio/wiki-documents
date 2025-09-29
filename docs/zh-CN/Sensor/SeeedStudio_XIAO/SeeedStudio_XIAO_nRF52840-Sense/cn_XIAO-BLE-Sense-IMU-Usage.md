---
description: Seeed Studio XIAO nRF52840 Sense 上的 6 轴 IMU 使用方法
title: XIAO nRF52840 Sense 的 IMU 使用方法
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO nRF52840 Sense 上的 6 轴 IMU 使用方法

**Seeed Studio XIAO nRF52840 Sense** 配备了一个高精度的 **6 轴惯性测量单元（IMU）**，包括一个 **3 轴加速度计** 和一个 **3 轴陀螺仪**。该模块上还有一个 **内置温度传感器**。我们相信这个模块可以在您的 TinyML 项目中提供很大帮助。本教程将介绍在该开发板上使用此 IMU 的基础知识。

**注意**

- **Seeed Studio XIAO nRF52840** 没有配备此 IMU 模块。
- 当我们使用 "Seeed nrf52 mbed-enabled Boards Library" 时，IMU 功能会表现得更好，因此我们强烈推荐使用它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={600} height="auto" /></p>


## 在串口监视器上查看加速度计、陀螺仪和温度数据

在这个示例中，我们将在 Arduino 串口监视器上查看来自 Seeed Studio XIAO nRF52840 Sense 的加速度计、陀螺仪和温度数据。

- **步骤 1**. [下载 Seeed_Arduino_LSM6DS3 库](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) 作为 zip 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2**. 打开 Arduino IDE，导航到 `Sketch > Include Library > Add .ZIP Library...` 并打开下载的 zip 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **步骤 3.** 导航到 `File > Examples > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample` 打开 **HighLevelExample**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **步骤 4.** 上传代码并打开 **串口监视器**

**注意：** 一旦您上传了代码，它不会自动执行，直到您点击 Arduino 窗口右上角的 **串口监视器**。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

现在您将看到加速度计、陀螺仪和温度数据如上所示依次显示在串口监视器上！

## 更多内容？

如果您想尝试更多示例，可以导航到 `File > Examples > Accelerometer And Gyroscope LSM6DS3` 并查看 **Accelerometer And Gyroscope LSM6DS3** 下的所有示例