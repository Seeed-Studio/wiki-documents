---
description: RS485 750cm 超声波液位传感器
title: RS485 750cm 超声波液位传感器
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RS485_750cm_Ultrasonic_Sensor-1
last_update:
  date: 4/14/2023
  author: Yvonne
---

# RS485 750cm 超声波液位传感器

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/image1.jpeg"/></div>

RS485 750cm 超声波液位传感器采用超声波传感技术来测量距离，测量范围为 28-750cm。配备喇叭口，可检测高达 750cm 的物体，分辨率为 1mm。凭借其 IP67 防水超声波换能器，可用于各种应用，如下水道和水位监测、智能垃圾桶管理系统、机器人避障和自动控制。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-750cm-Ultrasonic-Level-Sensor-p-5587.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## 可升级为工业传感器

通过 SenseCAP S2100 [数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products)，您可以轻松将此传感器转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

# 使用 S2100 LoRaWAN 数据记录器

在此页面上，我们将指导您完成连接 S2100 LoRaWAN 数据记录器与 750cm 超声波液位传感器的过程，使您能够在短短五分钟内创建一个坚固的工业级 LoRaWAN 无线传感器，可用于商业用途。

## 开始使用

### 准备工作

#### 硬件

##### 所需材料

<table align="center">
 <tr>
     <th>SenseCAP S2100 数据记录器</th>
      <th>750cm 超声波液位传感器</th>
    <th>十字螺丝刀</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/image1.jpeg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-750cm-Ultrasonic-Level-Sensor-p-5587.html?queryID=2bee749eb1a41d36e0d4d5fbdcbfb36f&objectID=5587&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

## 1. 准备数据记录器、RS485 750cm 超声波液位传感器、网关和工具。

1. **数据记录器**：这是一个 LoRaWAN 转换器，可将 MODBUS RS485/模拟/GPIO 传感器转换为支持 LoRa 的传感器，从而通过 LoRaWAN 协议传输数据。

2. **RS485 750cm 超声波液位传感器**：它使用超声波传感技术进行距离测量。测量范围从 28cm 到 750cm，分辨率可达 1mm。配备 IP67 防水超声波换能器，对工作环境具有很强的适应性。

3. **十字螺丝刀**：用于组装传感器探头。

4. **网关**：LoRaWAN 传感器将数据传输到 LoRaWAN 网关，然后网关将数据传输到云服务器。如果您没有网关，有两个选择：

- 选项 1：传感器在 Helium 网络覆盖的区域工作（在 [Helium Explorer](https://explorer.helium.com/) 上查看）。只要有 helium 网络覆盖的地方，您就可以使用传感器传输数据而无需购买网关。
- 选项 2：购买一个[网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)。

5. 下载 SenseCAP Mate App 进行配置：

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">SenseCAP Mate App iOS&Android</div>

准备工作完成。让我们开始吧！

### 2. 网络架构

让我们从 LoRaWAN 的组网开始。
数据记录器将传感器数据转换为 LoRa 数据并将数据上传到网关。网关将数据上传到服务器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

### 3. 将 RS485 750cm 超声波液位传感器连接到 SenseCAP 数据记录器

- **步骤 1：** 拧下数据记录器上的三颗螺丝

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **步骤 2：** 取下底盖并取出内部 PCBA，直到可以接触到螺丝端子。您不需要取出整个电路板

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **步骤 3：** 通过逆时针方向拧下来移除螺纹盖

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **步骤 4：** 将随附的电缆穿过螺纹盖和底盖

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **步骤 5：** 按如下方式将电缆的导线连接到螺丝端子

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**提示**：如果您使用其他协议，如 4-20mA，请参考引脚表：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

RS485 750cm 超声波液位传感器的线序：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/Picture3.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/image%203.png"/></div>

- **步骤 6：** 将硬件单元放回外壳内，从底盖关闭并重新拧紧螺丝

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **步骤 7：** 拧紧螺纹盖并固定电缆

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

一旦超声波液位传感器和数据记录器的所有连接都完成，它应该如下所示

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/Picture4.png"/></div>

### 4. 配置数据记录器和 RS485 750cm 超声波液位传感器通信设置

- **步骤 1：** 选择 **S2100 数据记录器** 并在配置页面点击 **Setup**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **步骤 2：** 按住按钮 **3** 秒，绿色 LED 将以 1 秒频率闪烁。然后点击 **Scan** 开始扫描数据记录器的蓝牙。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **步骤 3：** 配置 LoRaWAN 和传感器参数（包括 RS485 Modbus-RTU 命令）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

#### 如何导入模板

- **步骤 1：** 请点击此模板链接并选择您的浏览器下载。
(http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **步骤 2：** 点击右上角的"➕"，选择"导入模板"，然后选择下载的文件，模板将被导入。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **步骤 3：** 点击发送并通过点击 **Measure** 测试传感器

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2017.png"/></div>

成功获取了传感器的距离和温度！

### 5. 将数据上传到 SenseCAP Portal 和 Mate App

- **步骤 1：** 返回应用主页，数据记录器红色 LED 将开始闪烁几秒钟，然后绿色 LED 短暂闪烁，表示 LoRaWAN 连接成功并且数据已发送。或者，您可以按一次数据记录器上的按钮来强制发送数据。
在上传数据之前，请确保网关正常工作或有 helium 网络覆盖。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

现在我们需要将此传感器添加到 SenseCAP 平台，以便在云端查看数据

- **步骤 2：** 通过扫描二维码绑定数据记录器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **步骤 3：** 在应用程序和门户网站上查看数据。(https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>

### 6. 在真实环境中测试传感器。

快速应用于户外真实场景进行长期监测。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2020.png"/></div>

目前，已经开发出一个 LoRaWAN 传感器。

## 资源

- **[PDF]** [RS485 750cm 超声波液位传感器](https://files.seeedstudio.com/wiki/RS485-Ultrasonic-Level-Sensor/RS485-750cm-Ultrasonic-Level-Sensor.pdf)
- **[PDF]** [SenseCAP S2100 数据记录器用户指南](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

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
