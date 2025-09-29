---
description: Grove - 三轴指南针 V1.0
title: Grove - 三轴指南针 V1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis_Compass_V1.0
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Grove-3-Axis_Compass_V1.0.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Grove-3-Axis_Compass_V1.0.jpg" alt="pir" width={600} height="auto" /></p>


这款三轴数字指南针采用低场磁感应多芯片模块 HMC5883L，提供高达 1° 至 2° 的航向精度。HMC5883L 包含高分辨率的 HMC118X 系列磁阻传感器，以及由 Honeywell 开发的 ASIC，集成了放大、自动退磁带驱动器、偏移消除和 12 位 ADC。加上外围电源管理电路，这是一款易于使用且可靠的指南针模块，适用于低成本的导航和磁测应用。

<!-- [![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)


规格
--------------

-   输入电压：3.3V，5V
-   睡眠模式电流：2.5uA
-   测量模式电流：640uA
-   高分辨率
-   易于控制的 I2C 接口
-   兼容 3.3V 或 5.0V 开发平台
-   最大 116Hz 输出速率
-   高航向精度

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
支持的平台
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|


:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

本演示将向您展示如何读取原始数据、如何使用当地磁偏角校准数据以及如何获取航向角。

首先，在进行任何操作之前，您需要准备一个将在演示中使用的参数——您的当地磁偏角。

您可以通过 [磁偏角网页](http://www.magnetic-declination.com/) 以度为单位找到它。例如，我的磁偏角是 -2°37’，即 -2.617 度。

然后将其从度转换为弧度，得到 "declinationAngle"。例如，在我的情况下，declinationAngle = -2.617 \* π / 180 = -0.0456752665 rad。保留三位有效数字即可。因此，我会将其缩短为 -0.0456 rad。这是您需要在演示代码中替换 "declinationAngle" 值的参数。

现在让我们开始运行您的指南针。

1. 将三轴指南针插入 Grove - Base Shield 的 I2C 接口。

2. 下载库文件：[数字指南针库](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Digital_Compass.zip)。将其解压到 Arduino IDE 的库文件路径：..\\arduino-1.0.1\\libraries。

3. 打开演示代码，路径为：File -> Example -> Digital Compass -> HMC5883L_Example。

    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass1.jpg) -->
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass1.jpg" alt="pir" width={600} height="auto" /></p>

4. 将变量 "declinationAngle" 的值替换为您已经计算出的值。

5. 上传代码。

6. 打开串口监视器检查输出结果。

    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass2.jpg) -->
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass2.jpg" alt="pir" width={600} height="auto" /></p>

### 使用 Raspberry Pi（配合 GrovePi_Plus）

1. 您需要准备一个 Raspberry Pi 和一个 GrovePi 或 GrovePi+。

2. 您需要完成开发环境的配置，否则请按照 [这里](/cn/GrovePi_Plus/) 的说明进行操作。

3. 连接

- 使用 Grove 电缆将传感器插入 GrovePi 的 i2c-x（1~3）接口。

4. 导航到演示代码目录：

       cd yourpath/GrovePi/Software/Python/

- 查看代码

```
    nano grove_compass_lib.py       
    nano grove_compass_example.py    
```
```
    import grove_compass_lib
    c=grove_compass_lib.compass()
    while True:
            print "X:",c.x,"Y:",c.y,"X:",c.z,"Heading:",c.headingDegrees
            c.update()
            time.sleep(.1)
```

5. 运行演示代码。
```
    sudo python grove_compass_example.py
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

-   [Grove-3-Axis 数字指南针 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip)
-   [HMC5883.pdf](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/HMC5883.pdf "File:HMC5883.pdf")
-   [数字指南针库](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Digital_Compass.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Compass_V1.0 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>