---
description: Seeed Studio XIAO nRF52840 Sense 上 6 轴 IMU 的使用
title: XIAO nRF52840 Sense 的 IMU 使用
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 7/17/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-07-17'
url: https://wiki.seeedstudio.com/cn/XIAO-BLE-Sense-IMU-Usage/
---

# Seeed Studio XIAO nRF52840 Sense 上 6 轴 IMU 的使用

**Seeed Studio XIAO nRF52840 Sense** 搭载了高精度的 **6 轴惯性测量单元 (IMU)**，其中包括 **3 轴加速度计** 和 **3 轴陀螺仪**。该模块上还集成了一个 **温度传感器**。我们相信这个模块可以极大地帮助你的 TinyML 项目。本教程将介绍在该开发板上使用此 IMU 的基础方法。

**注意**

- **Seeed Studio XIAO nRF52840** 未搭载此 IMU 模块。

## 在串口监视器上查看加速度计、陀螺仪和温度数据

在本示例中，我们将通过 Arduino 串口监视器查看来自 Seeed Studio XIAO nRF52840 Sense 的加速度计、陀螺仪和温度数据。

- **步骤 1**. [以 zip 文件形式下载 Seeed_Arduino_LSM6DS3 库](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **步骤 2**. 打开 Arduino IDE，依次点击 `Sketch > Include Library > Add .ZIP Library...`，然后打开刚刚下载的 zip 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **步骤 3.** 依次点击 `File > Examples > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample` 打开 **HighLevelExample**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **步骤 4.** 上传代码并打开 **Serial Monitor**

**注意：** 上传代码后，不会自动执行，直到你点击 Arduino 窗口右上角的 **Serial Monitor**。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

现在，你会在串口监视器上依次看到加速度计、陀螺仪和温度数据，如上图所示！

## 还有什么？

如果你想尝试更多示例，可以依次点击 `File > Examples > Accelerometer And Gyroscope LSM6DS3`，查看 **Accelerometer And Gyroscope LSM6DS3** 下的所有示例。
