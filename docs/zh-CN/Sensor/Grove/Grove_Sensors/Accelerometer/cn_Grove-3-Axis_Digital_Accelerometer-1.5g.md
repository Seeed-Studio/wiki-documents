---
description: Grove - 三轴数字加速度计(±1.5g)
title: Grove - 三轴数字加速度计(±1.5g)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis_Digital_Accelerometer-1.5g
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<div>
  <table>
    <colgroup>
      <col width="50%" />
      <col width="50%" />
    </colgroup>
    <tbody>
      <tr className="odd">
        <td><div className="center">
            <div className="floatnone">
              <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg" />
            </div>
          </div></td>
        <td><div className="center">
            <div className="floatnone">
              <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_v1.3.jpg" />
            </div>
          </div></td>
      </tr>
      <tr className="even">
        <td><div style={{}}>
            Grove - 三轴数字加速度计 v1.2
          </div></td>
        <td><div style={{}}>
            Grove - 三轴数字加速度计 v1.2b
          </div></td>
      </tr>
    </tbody>
  </table>
  三轴数字加速度计是方向检测、手势检测和运动检测等项目中的关键部件。这款三轴数字加速度计(±1.5g)基于飞思卡尔的低功耗模块 MMA7660FC。它具有高达 10,000g 的高冲击生存能力和可配置的每秒采样率。对于不需要太大测量范围的应用，这是一个很好的选择，因为它耐用、节能且成本高效。
</div>


[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html)


规格
--------------

-   工作电压：3.0 - 5.5V
-   关闭模式电流：0.4μA
-   待机模式电流：2μA
-   活动模式电流：47 μA（1 ODR）
-   测试范围：±1.5g
-   灵敏度：21LSB/g
-   Suli兼容库

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
支持的平台
-------------------

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::


演示
-------------

### 使用 Arduino

这里我们将向您展示如何从传感器获取原始数据以及以 "g" 为单位的测量数据。

通过 Grove 电缆将此模块连接到 Grove - Base Shield 的 I2C 端口。

<div class="admonition note">
<p class="admonition-title">注意</p>
如果您想激活此模块的中断功能，需要将我们在板上引出的 INT 焊盘与 Arduino 上支持中断服务程序的引脚连接。
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Digital_Accelerometer_Sensor_Connector1.5g.jpg" alt="pir" width={600} height="auto" /></p>

安装我们在资源部分提供的库。

通过路径直接打开代码：File -> Example ->DigitalAccelerometer_MMA7660FC ->MMA7660FC_Demo。

在此程序中，加速度信息通过 I2C 总线从传感器发送到 Seeeduino，然后 Seeeduino 将其打印到串行监视器上。
打开串行监视器查看结果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_Digital_Accelerometer-1.5g-.jpg" alt="pir" width={600} height="auto" /></p>

该传感器的输出由两部分组成：原始数据和转换为重力单位“g”的三轴加速度信息。

### 使用树莓派

1. 您需要准备一个树莓派和一个 GrovePi 或 GrovePi+。

2. 您需要完成开发环境的配置，否则请按照[这里](/cn/GrovePi_Plus/)进行操作。

3. 连接

- 使用 Grove 电缆将传感器插入 GrovePi 的 i2c-x（1~3）插座。

4. 导航到示例代码目录：

       cd yourpath/GrovePi/Software/Python/

- 查看代码

```
    nano grove_i2c_accelerometer.py   # 按 "Ctrl+x" 退出 #
```
```
    import time
    import grovepi

    # 将 Grove 加速度计（+/- 1.5g）连接到任意 I2C 端口，例如 I2C-1
    # 地址为 I2C 地址 0x4c
    # SCL,SDA,VCC,GND

    while True:
        try:
            print grovepi.acc_xyz()
            time.sleep(.5)

        except IOError:
            print "Error"
```

5. 运行示例代码。
```
    sudo python grove_i2c_accelerometer.py
```

参考
---------

以下是两个图示，帮助您理解结果的物理意义。

第一个图示展示了每个轴的方向：
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/MMA7660_Direction.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/MMA7660_Direction.jpg" alt="pir" width={600} height="auto" /></p>

第二个图示提供了一些示例：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Sensing_Direction_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Sensing_Direction_1.jpg" alt="pir" width={600} height="auto" /></p>


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



资源
---------

-   [MMA7660FC 数据手册](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/MMA7660FC.pdf)
-   [Grove - 3轴数字加速度计 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip)
-   [3轴数字加速度计（±1.5g）的 GitHub 仓库](https://github.com/Seeed-Studio/Accelerometer_MMA7660)


## 项目

**倾斜激活旋转风扇灯棒**  
便携式 LED 彩色灯棒会根据您的摇动动作做出反应。配备额外的风扇和警报功能。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/chuartdo/tilt-activated-spinning-fan-light-stick-e05cec/embed" width={350} />


**Lean Green RC Sailing Machine**  
一个互联网连接设备，可以控制舵机并通过 GSM 蜂窝网络实时发送传感器（GPS/陀螺仪/加速度计/指南针）更新。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/anemoi/lean-green-rc-sailing-machine-2cdde5/embed" width={350} />

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±1.5g) -->

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