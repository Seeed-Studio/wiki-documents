---
description: Grove - 三轴数字加速度计(±400g)
title: Grove - 三轴数字加速度计(±400g)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis_Digital_Accelerometer-400g
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove_3Axis_Accelerometer400g.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove_3Axis_Accelerometer400g.jpg" alt="pir" width={600} height="auto" /></p>


H3LIS331DL 是一款属于“nano”系列的低功耗高性能三轴线性加速度计，具有数字 I2C 串行接口标准输出。该设备具有超低功耗操作模式，可实现高级节能和智能睡眠唤醒功能。H3LIS331DL 支持用户动态选择 ±100g/±200g/±400g 的全量程，并能够以 0.5 Hz 至 1 kHz 的输出数据速率测量加速度。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B1400g)-p-1897.html)

功能特点
--------

-   宽电源范围 DC3.3V 至 5V
-   Grove 外形
-   三轴感应
-   小型、低剖面封装：3×3×1mm TFLGA
-   低功耗，3.3V 时典型值为 300µA
-   ±100g /±200g /±400g 动态可选全量程
-   I2C 数字输出接口
-   10000g 高冲击生存能力
-   ECOPACK®RoHS 和“绿色”标准兼容

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用场景
--------

-   冲击检测
-   冲击识别和记录
-   脑震荡检测

支持平台
--------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

使用方法
--------

以下是如何读取该加速度计的原始数据的步骤。

1. 将其插入 [Grove - Base Shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134) 的 I2C 端口。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg" alt="pir" width={600} height="auto" /></p>


2. 下载 [Digital Accelerometer(±400g) Library](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL) 并将其解压到 Arduino 安装文件夹中的 arduino-1.0\\libraries。

3. 通过路径直接打开示例代码：File -> Example -> Grove_3Axis_Digital_Accelerometer_H3LIS331DL -> H3LIS331DL_AdjVal。这是一个调整 H3LIS331DL 原始数据以使其更精确的草图。

4. 上传代码并打开串行监视器。

5. 打开串行监视器，根据串行输出中描述的步骤获取参考的调整值。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Adjust_value_of_Accelerometer.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Adjust_value_of_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>


6. 通过路径直接打开示例代码：File -> Example -> Grove_3Axis_Digital_Accelerometer_H3LIS331DL -> H3LIS331DL_Demo。然后根据从 H3LIS331DL_AdjVal 草图中获取的值修改 VAL_X_AXIS/VAL_Y_AXIS/VAL_Z_AXIS。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Redefine_the_VAL_of_Accelerometer.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Redefine_the_VAL_of_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>

7. 上传代码并打开串口监视器，检查结果。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Raw_data_of_H3LIS331DL.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Raw_data_of_H3LIS331DL.jpg" alt="pir" width={600} height="auto" /></p>


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


资源
---------

-   [Grove - 3轴数字加速度计(±400g) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip)
-   [3轴数字加速度计(±400g) GitHub 仓库](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)
-   [H3LIS331DL 数据手册 PDF](http://www.st.com/web/en/resource/technical/document/datasheet/DM00053090.pdf)
 

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±400g) -->

## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>