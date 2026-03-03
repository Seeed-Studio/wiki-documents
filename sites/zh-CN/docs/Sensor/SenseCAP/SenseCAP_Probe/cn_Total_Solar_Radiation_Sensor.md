---
description: 总太阳辐射传感器
title: 总太阳辐射传感器
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.webp
slug: /cn/total_solar_radiation_sensor
last_update:
  date: 4/23/2025
  author: Leo
---

# 总太阳辐射传感器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p>

IP68 RS485 总太阳辐射传感器可测量300至1100纳米范围内的实时太阳总辐射。它非常适合环境监测和农业应用。将其与SenseCAP传感器集线器4G数据记录器或SenseCAP S2100 LoRaWAN®数据记录器配对，可实现无缝数据收集和管理。

## 可升级为工业传感器

通过SenseCAP S2100 [数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products)，您可以轻松将此传感器转换为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还为您提供了通过SenseCAP系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

## 与S2100 LoRaWAN数据记录器配合使用

在本页面中，我们将指导您完成连接S2100 LoRaWAN数据记录器与总太阳辐射传感器的过程，使您能够在短短五分钟内创建一个坚固的工业级LoRaWAN无线传感器，可用于商业用途。

### 硬件准备

<table align="center">
 <tr>
     <th>SenseCAP S2100数据记录器</th>
      <th>总太阳辐射传感器</th>
    <th>十字螺丝刀</th>
 </tr>
 <tr>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p></td>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image2.png" alt="pir" width={800} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image3.png" alt="pir" width={800} height="auto" /></p></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-p-5691.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td>
  </td>
 </tr>
</table>

**数据记录器**：这是一个LoRaWAN转换器，可将MODBUS RS485/模拟/GPIO传感器转换为支持LoRa的传感器，从而通过LoRaWAN协议传输数据。

**总太阳辐射传感器**：总太阳辐射传感器采用硅光电探测器，当光照射时会产生与入射光强度成正比的电流信号，可直接输出以W/㎡为单位的测量值。

**十字螺丝刀**：用于组装传感器探头。

**网关**：LoRaWAN传感器将数据传输到LoRaWAN网关，然后网关将数据传输到云服务器。如果您没有网关，有两个选择：

- 选项1：传感器在Helium网络覆盖的区域工作（在[Helium Explorer](https://explorer.helium.com/)上查看）。只要有helium网络覆盖的地方，您就可以使用传感器传输数据而无需购买网关。
- 选项2：购买一个[网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)。

**下载SenseCAP Mate应用程序进行配置：**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image4.png" alt="pir" width={300} height="auto" /></p>

准备工作完成。让我们开始吧！

### 2. 网络架构

让我们从LoRaWAN的组网开始。
数据记录器将传感器数据转换为LoRa数据并将数据上传到网关。网关将数据上传到服务器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image5.png" alt="pir" width={800} height="auto" /></p>

### 将总太阳辐射传感器连接到SenseCAP数据记录器

- **步骤1：** 拧下数据记录器上的三颗螺丝

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **步骤2：** 取下底盖并取出内部PCBA，直到可以接触到螺丝端子。您不需要取出整个电路板

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **步骤3：** 通过逆时针方向拧下螺纹帽

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **步骤4：** 将随附的电缆穿过螺纹帽和底盖

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **步骤5：** 按如下方式将电缆的导线连接到螺丝端子

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**提示**：如果您使用其他协议，如4-20mA，请参考引脚表：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image6.png" alt="pir" width={800} height="auto" /></p>

总太阳辐射传感器的线序，默认包含防水连接器，为了与S2100连接，您需要切断连接器：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image7.png" alt="pir" width={800} height="auto" /></p>

- **步骤6：** 将硬件单元放回外壳内，从底盖关闭并拧回螺丝

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **步骤7：** 拧紧螺纹帽并固定电缆

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

一旦总太阳辐射传感器和数据记录器的所有连接都完成，应该如下所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image8.jpg" alt="pir" width={800} height="auto" /></p>

### 配置RS485通信设置

**步骤1：** 选择**S2100数据记录器**并在配置页面点击**设置**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image9.png" alt="pir" width={800} height="auto" /></p>

**步骤2：** 按住按钮**3**秒，绿色LED将以1秒频率闪烁。然后点击**扫描**开始扫描数据记录器的蓝牙。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/gif1.gif" alt="pir" width={800} height="auto" /></p>

**步骤3：** 配置LoRaWAN和传感器参数（包括RS485 Modbus-RTU命令）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image10.png" alt="pir" width={800} height="auto" /></p>

#### 如何导入模板

**步骤1：** 请点击以下链接并选择您的浏览器下载。[总太阳辐射传感器](https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/Total%20Solar%20Radiation%20Sensor.seeed)

**步骤2：** 点击右上角的"➕"，选择"导入模板"，然后选择下载的文件，模板将被导入。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image11.png" alt="pir" width={800} height="auto" /></p>

**步骤3：** 点击发送并通过点击**测量**来测试传感器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image12.png" alt="pir" width={600} height="auto" /></p>

成功获取了传感器的总太阳辐射！

## 资源

- **[PDF]** [太阳总辐射传感器用户手册](https://files.seeedstudio.com/products/SenseCAP/rs485%E4%BC%A0%E6%84%9F%E5%99%A8/Total%20Solar%20Radiation%20Sensor%20(S-ZFS-02)%20User's%20Manual.pdf)
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
