---
description: 5分钟开发一个工业级LoRaWAN传感器
title: 5分钟开发一个工业级LoRaWAN传感器
keywords:
- LoRaWAN
- Sensor
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/develop_an_industrial_lorawan_sensor
last_update:
  date: 9/15/2023
  author: Jessie
---

让我们在5分钟内快速构建一个工业级LoRaWAN无线传感器，可直接用于商业用途。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519816/_CFY3itZc4v.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={600} height="auto" /></p>

在为商业数据采集项目制作原型时，需要花费大量时间和成本来制作原型。例如，我们需要为农业项目制作一个无线pH传感器。我们需要：1）找到开发板和传感器探头。2）编写代码。3）3D打印外壳。4）最终组装测试。当我们完成原型时，可能需要几天甚至几周的时间。

今天，我们可以使用无线LoRa采集器，设置传感器通过蓝牙连接到应用程序，在五分钟内构建产品，直接投入商业项目。

### 准备工作

准备数据记录器、传感器探头、网关和工具。

1）[数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)：这是一个LoRaWAN转换器，将MODBUS RS485/模拟/GPIO传感器转换为支持LoRa的传感器，因此通过LoRaWAN协议传输数据。

2）传感器探头：准备一个带电缆的传感器探头，输出RS485 / 4-20mA /0-10V / 脉冲/电平信号之一。本教程使用RS485超声波传感器进行液位测量。

3）十字螺丝刀：用于组装传感器探头。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519859/image_iq7PU8q7nt.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

4）网关：LoRaWAN传感器将数据传输到LoRaWAN网关，然后网关将数据传输到云服务器。如果您没有网关，有两个选择：

**选项1**：传感器在Helium网络覆盖的区域工作（在[Helium Explorer](https://explorer.helium.com/)上查看）。在Helium网络可用的任何地方，您都可以使用传感器传输数据而无需购买网关。
**选项2**：购买一个[网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)。
5）下载SenseCAP Mate应用程序进行配置：

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519867/image_hQX9CstNtP.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={500} height="auto" /></p>

准备工作完成。让我们开始吧！

### 网络架构

让我们从LoRaWAN网络开始。

数据记录器将传感器数据转换为LoRa数据并将数据上传到网关。网关将数据上传到服务器。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519879/image_SUwd9Yyglx.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### 连接传感器

1）拆卸数据记录器。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519881/image_TmNcqHz98z.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

2）将传感器连接到端子，并通过内置电池为传感器供电。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519884/image_XZETiBWTBz.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

:::info 提示
如果您使用其他协议，如4-20mA，请参考引脚表：
:::

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519889/image_RHiaxQkid9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3）组装传感器。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519904/image_6qTGLlXoOZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519908/image_LDPEOEC9ik.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519912/image_jStYF3uKW6.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### 通过应用程序配置传感器

1）打开并登录SenseCAP应用程序。

2）选择"S2100 Data Logger"并在配置页面点击"Setup"。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519915/image_au0YfmfVoo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3）按住按钮3秒钟，绿色LED将以1秒频率闪烁。然后点击"Scan"开始扫描数据记录器的蓝牙。

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520082/video_ZKG2GDw54j.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

4）配置LoRaWAN和传感器参数（包括RS485 Modbus-RTU命令）。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520084/image_tAKr7NohSn.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

```cpp
#########Basic Setting#############
Platform: 
    -SenseCAP for helium (use helium network)
    -SenseCAP for The Things Network (use SenseCAP gateway)
Frequency Plan: EU868 (Select this based on the frequency or region of the gateway)
Uplink Interval: 5 min
Packet Policy: 2C+1N (use the default parameter)

#########Sensor Setting#############
Protocol: RS485 Modbus RTU
Baud Rate: 9600
Modbus Address: 128 (Sensor's modbus address)
Power Type: Periodic power (Power the sensor before data collection, and power off the sensor after data collection)
Power Voltage: 5V
Sensor Warm-up Time: 100ms
Response Timeout: 100ms
Startup Time: 100ms
Measurement Number: 2 (distance and temperature)

#########Measurement1#############
Register Address: 256 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 1 (Y=Ax+B, “Y”: It is the value of Data Logger will upload.
“x”: It is the original current value.If only raw values are uploaded, set A=1 and B=0.)
FactoryB: 0
Write Strategy: None

#########Measurement2#############
Register Address: 258 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 0.1 (The final value is divided by 10)
FactoryB: 0
Write Strategy: None
```

5) 点击发送并通过点击"测量"来测试传感器

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520088/image_iAmOflFRIQ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

成功获取了传感器的距离和温度数据！

### 将数据上传到 SenseCAP Portal 和 Mate App

在上传数据之前，请确保网关正常工作或有 helium 网络覆盖。

1) App 返回主页并断开蓝牙连接。数据记录器将尝试加入 LoRaWAN 网络。

等待加入 LoRa 网络：红色呼吸灯闪烁
加入 LoRa 网络成功：绿色 LED 快速闪烁 2 秒

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520108/video(1)_yWY0orezqU.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

2) 通过扫描二维码绑定数据记录器。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520115/image_9JdYx3MCrg.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

3) 在 App 和 Portal (https://sensecap.seeed.cc/) 上查看数据。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520128/image_K6j6TDHXX4.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### 在真实环境中测试传感器

快速应用到户外真实场景进行长期监测。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520150/image_MoA2h9E8lq.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

目前，一个 LoRaWAN 传感器已经开发完成。

快来为您的项目尝试新的解决方案吧！

### 资源

[5 分钟开发工业级 LoRaWAN 传感器](https://www.hackster.io/jenkinlu001/5-minutes-to-develop-an-industrial-lorawan-sensor-6631dc)

[SenseCAP S2100 数据记录器用户指南](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)
