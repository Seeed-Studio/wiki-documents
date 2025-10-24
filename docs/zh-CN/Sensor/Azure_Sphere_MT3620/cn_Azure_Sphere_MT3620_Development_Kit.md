---
description: Azure Sphere MT3620 开发套件
title: Azure Sphere MT3620 开发套件
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Azure_Sphere_MT3620_Development_Kit
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

![enter image description here](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/azure.jpg)

Azure Sphere MT3620 开发套件专为支持快速原型设计而设计，使开发者能够体验 Azure Sphere 技术。MT3620 是首款获得 Azure Sphere 认证的 MCU。Azure Sphere 认证的 MCU 是一种新型的安全连接跨界微控制器。MT3620 具有三个用户可访问的微控制器核心：一个 ARM Cortex-A7 核心和两个通用 ARM Cortex-M4F 核心。MT3620 旨在支持与各种片上外设（包括 GPIO、UART、I2C、SPI、I2S、PWM 和 ADC）接口时的实时需求。它内置了一个安全子系统，拥有专用的 CM4F 核心，用于安全启动和安全系统操作，并支持双频 802.11 b/g/n Wi-Fi。

MT3620 开发套件通过扩展引脚头扩展了大部分 MT3620 硬件资源，用户可以通过连接到面包板或添加扩展板，轻松连接其他硬件配件。

Azure Sphere 操作系统已预装在 MT3620 上，并设计为与 Azure Sphere 安全服务协同工作，以创建一个安全的物联网平台。其功能包括：

- 基于证书的设备认证，可连接到任何网络服务
- 软件证明和安全启动
- 通过故障报告进行威胁检测
- 持续的安全更新
- 集成的安全端到端物联网解决方案

MT3620 软件开发支持使用功能强大的 Microsoft Visual Studio IDE：

- 安装 [Visual Studio](https://visualstudio.microsoft.com/)（支持社区版、企业版或专业版）和 Azure Sphere 扩展，使用 USB 将开发板连接到 PC，并开始开发具有前所未有安全级别的物联网应用程序。
- 要使用 MT3620 开发板进行 Azure Sphere 开发，您需要一台安装最新 Windows 更新的 Windows 10 PC，以及 [Azure Sphere 软件开发工具包](http://aka.ms/AzureSphereSDK) SDK。

<div class="video-container">
<iframe width="600" height="450" src="https://www.youtube.com/embed/iiDF26HNh-Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

|产品名称 | 购买方式|
|----------------|-----------|
|Azure Sphere MT3620 开发套件（美国版本）|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html)|
|Azure Sphere MT3620 开发套件（日本版本）|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-JP-Version-p-3135.html)|
|Azure Sphere MT3620 开发套件（欧洲版本）|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-EU-Version-p-3134.html)|

:::caution
如果您需要帮助选择版本，请查看 [可用国家或地区列表](https://view.officeapps.live.com/op/view.aspx?src=https://statics3.seeedstudio.com/document/Available_country.docx) 了解更多详情。
:::

## 特性

- Azure Sphere：为物联网设备提供端到端的安全性
- 双频 802.11 b/g/n，支持天线分集
- 三核微控制器，集成片上 RAM 和闪存
- Microsoft Visual Studio 开发环境
- 设备生命周期内的在线认证与更新

## 规格

**硬件**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-amwm{font-weight:bold;:center;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table className="tg">
  <tbody><tr>
      <th className="tg-baqh"><span style={{fontWeight: 'bold'}}>描述</span></th>
      <th className="tg-baqh"><span style={{fontWeight: 'bold'}}>值</span></th>
    </tr>
    <tr>
      <td className="tg-amwm" rowSpan={2}><br />MCU</td>
      <td className="tg-0lax">1 *ARM Cortex A7 核心 @500MHz , 4MB RAM</td>
    </tr>
    <tr>
      <td className="tg-0lax">2* ARM Cortex M4 核心 @200MHz, 64KB RAM</td>
    </tr>
    <tr>
      <td className="tg-amwm" rowSpan={5}><br /><br /><br /><br />ISU</td>
      <td className="tg-0lax">4 *“ISU” 串行接口，可配置为：</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- I2C，最高支持 1MHz</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- SPI，最高支持 40MHz</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- UART，最高支持 3Mbps</td>
    </tr>
    <tr>
      <td className="tg-0lax">ISU 是串行通信接口</td>
    </tr>
    <tr>
      <td className="tg-amwm">连接性</td>
      <td className="tg-0lax">2.4/5GHz 双频 802.11 b/g/n Wi-Fi</td>
    </tr>
    <tr>
      <td className="tg-amwm">I2S</td>
      <td className="tg-0lax">1* I2S 支持从模式和 TDM 从模式</td>
    </tr>
    <tr>
      <td className="tg-amwm">ADC</td>
      <td className="tg-0lax">4 *12 位 ADC 输入 I/O</td>
    </tr>
    <tr>
      <td className="tg-amwm">RTC</td>
      <td className="tg-0lax">1* RTC，配备 CR2032 3V 电池座</td>
    </tr>
    <tr>
      <td className="tg-amwm">USB</td>
      <td className="tg-0lax">1 *Micro USB 接口，用于供电和调试，5V/1A</td>
    </tr>
    <tr>
      <td className="tg-amwm">DC 插孔</td>
      <td className="tg-0lax">1* 5V/1A DC 电源插孔</td>
    </tr>
    <tr>
      <td className="tg-amwm">工作温度</td>
      <td className="tg-0lax">-40~85°C</td>
    </tr>
    <tr>
      <td className="tg-amwm">尺寸</td>
      <td className="tg-0lax">长:85mm*宽:50mm*高:16mm</td>
    </tr>
    <tr>
      <td className="tg-amwm">认证</td>
      <td className="tg-0lax">CE / FCC / MIC / RoHS</td>
    </tr>
  </tbody></table>

**软件**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <td class="tg-0pky">集成开发环境 (IDE)</td>
    <td class="tg-0pky">Visual Studio</td>
  </tr>
  <tr>
    <td class="tg-0lax">系统</td>
    <td class="tg-0lax">Windows10</td>
  </tr>
  <tr>
    <td class="tg-0lax">编程语言</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>

## 硬件概述

**板卡示意图**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Diagram.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Diagram.png"/></a>

- **J1**: ADC参考电压，开启：使用内部2.5V；关闭：连接外部1.8V到引脚1。默认关闭。
- **J2**: 3.3V隔离，开启：启用系统3.3V电源；关闭：切断系统3.3V电源。默认开启。
- **J3**: RTC电源选择：左侧两个引脚：使用背面的RTC电池（型号：CR2032）。
- **4个用户RGB LED**: LED型号为LTST-C19HE1WT。
- **USB端口**: 提供电源（5V/1A）和调试功能，连接到背面的FT4232HQ芯片。
- **4个系统LED**: Led1（靠近USB端口）：绿色，FTDI活动指示灯。Led2：红色，电源指示灯。Led3：RGB，Wi-Fi状态指示灯。Led4：RGB，应用状态指示灯。
- **DC电源**: 5V/1A
- **3个系统按钮**: 按钮A和B（白色）是用户按钮。重置按钮（蓝色）是系统重置按钮。
- **MT3620**：[MT3620](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)是一款高度集成、高性能的物联网MCU，具备现代可靠的互联网连接设备所需的高级安全性。MT3620适用于广泛的物联网应用，包括智能家居、商业、工业及其他领域，得益于其广泛的I/O外设子系统，提供了设备设计的灵活性和自由度。
- **FT4232HQ**: [FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)是一款USB 2.0高速（480Mb/s）到UART/MPSSE的集成电路。

**板卡引脚图**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/PinMap.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/PinMap.png"/></a>

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png)

**尺寸**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/dimension.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/dimension.png"/></a>

**电源**

Azure Sphere MT3620开发套件的电源通过板载USB Micro B连接器或直接通过DC连接器供电。

- GPIO电压为3.3V，额外电流仅限100mA。
- H3连接器上的5V输出额外电流仅限500mA。
- H3连接器上的3.3V额外电流仅限400mA。
- 典型平均电流消耗为150mA（5V Wi-Fi开启）。Wi-Fi扫描电流通常为330mA。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/power.png)

**硬件设计与制造**

使用I2S时，请参考 [M4用户手册](https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf)

:::提示
更多信息请参考 [硬件设计与制造的信息和工具](https://learn.microsoft.com/en-us/azure-sphere/hardware/hardware-manufacturing-overview)。
:::

## 产品处理

**包装**

Azure Sphere MT3620 开发套件的包装包含 Azure Sphere MT3620 开发套件和 Micro B USB 数据线。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/box.JPG)

**静电防护**

Azure Sphere MT3620 开发套件包含高度敏感的电子电路，是一种静电敏感设备 (ESD)。在没有适当的静电防护措施的情况下处理 Azure Sphere MT3620 开发套件可能会导致其永久损坏或毁坏。在任何包含 Azure Sphere MT3620 开发套件的应用中，必须在整个加工、处理和操作过程中应用适当的静电防护和包装程序。

## 应用场景

- 家庭/建筑/设施
- 自动化
- 安全
- 设备管理
- 公用事业
- 公共安全
:::tip
要了解 Azure Sphere 在实际环境中的工作方式，请参考 [Contoso, Ltd 的场景](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere)。
:::

## 认证与批准

<div className="method1" style={{width: '16%'}}>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/FCC.jpg" /></a></p>
</div>

<div className="method1" style={{width: '16%'}}>
  <p style={{textalign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/CE.jpg" /></a></p>
</div>

<div className="method1" style={{width: '16%'}}>
  <p style={{textalign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/mic.jpg" /></a></p>
</div>

<div ><img width="{1000}" src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/RoHS.jpg" /></div>

<!-- <style>
.method1{
  :center;
  float:left;
}
.title{
font-size:1px;
text-indent:1px;
line-height:3px
}
</style> -->

- FCC ID: [Z4T-MT3620DEVB](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- CE ID: [18/0331/SZ](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- MIC ID: [CSRT18207](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)

## 安装 Azure Sphere

如果您有尚未使用过的 Azure Sphere 开发套件，请首先完成 [这些步骤](https://docs.microsoft.com/en-us/azure-sphere/install/overview) 以开始使用。

## Azure Sphere 演示

我们构建了两个结合 Sphere 开发套件和 [Seeed Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/) 的演示。

**演示1**：MT3620 开发板作为 MCU，连接温度传感器（SHT31）、继电器、风扇、显示器和模拟设备。该演示模拟了一个具有物联网连接功能的风扇，用户可以测量环境温度并设置阈值，通过 Azure 云来控制风扇的开关。温度将显示在 LED 显示屏上。用户可以通过更换电阻器来改变风扇的速度级别，从 0、1、2、3（0 表示关闭风扇）。

**演示2**：MT3620 开发板作为物联网安全连接设备，连接到一个已有的设备，该设备有自己的 MCU。在此演示中，我们使用 Arduino 模拟风扇的控制板，该控制板可以获取风扇电机的数据状态，通过分析数据，用户可以了解故障状态并派遣维修人员进行修复。按下按钮时，模拟风扇设备的健康状态，当按钮被按下时，表示设备需要维护。

### 硬件

**部件清单**

| MT3620 开发套件 | Grove-温湿度传感器 | Grove-继电器 |
|--------------|-------------|-----------------|
|![图片描述](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/SHT3_s.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/relay.jpg)|
|[立即购买](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[立即购买](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|[立即购买](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

| Grove-滑动电位器 | Grove-4位数字显示屏 | Grove-蓝色 LED 按钮 |
|--------------|-------------|-----------------|
|![图片描述](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Slide_Potentiometer_s.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/4_digital_s.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Grov-Blue_led_button.jpg)|
|[立即购买](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)|[立即购买](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html)|[立即购买](https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html)|

| MT3620 Grove 扩展板 | Seeeduino V4.2 | 基础扩展板 |
|--------------|-------------|-----------------|
|![图片描述](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[立即购买](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

**系统图**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo1.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo1.png"/></a>

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo2.png"/></a>

**MT3620 Grove 扩展板**

由于 [Azure Sphere SDK](http://aka.ms/AzureSphereSDK) 尚未支持 MT3620 上的 ADC 和 I2C，此扩展板作为 MT3620 UART 端口与外部 I2C 设备之间的接口，例如 I2C 温度传感器。扩展板的基本功能是帮助连接外部 I2C 设备。通过使用兼容 I2C 的 ADC 芯片，开发者还可以从模拟端口读取模拟数据。

[MT3620 Grove 扩展板](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) 包含两个芯片，AD7992（模拟到 I2C）和 SC18IM700（I2C 到 UART），从硬件方面启用 ADC 和 I2C 功能。因此，模拟传感器的信号通过 AD7992 和 SC18IM700 到开发板的 UART。I2C 传感器也通过 SC18IM700 到开发板的 UART。

[AD7992](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/AD7992.pdf) 是一个 12 位、低功耗、逐次逼近 ADC，具有 I2C 兼容接口。它将模拟信号 A0、A1 转换为 I2C 数据。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/ADC_2_I2C.png)

[SC18IM700](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/SC18IM700.pdf) 旨在作为微控制器或微处理器的标准 UART 端口与串行 I2C 总线之间的接口；这使得微控制器或微处理器能够直接与其他 I2C 总线设备通信。它将 SDA/SCL 信号转换为 GPIO26_TXD0 和 GPIO28_RXD0。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/I2C_2_UART.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_Grove_Shield-2018-09-11.png)

<div style={{textAlign: 'center'}}>MT3620 Grove 扩展板硬件概览</div>

**硬件连接**

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_demo_Front.jpg)

<div style={{textAlign: 'center'}}>硬件设置正面视图</div>

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_demo_backside.jpg)

<div style={{textAlign: 'center'}}>硬件设置顶部视图</div>

- 步骤 1. 将 Grove-蓝色 LED 按钮连接到 Grove 基础扩展板的端口 2。
- 步骤 2. 将风扇 PWM 信号连接到 Grove 基础扩展板的端口 5。
- 步骤 3. 将 Grove 基础扩展板的端口 7（软件串口）连接到 MT3620 Grove 扩展板的 UART3。剪断 Vcc（红色电缆），仅保留 TX/RX/GND 用于串行通信。
- 步骤 4. 将 Grove 基础扩展板插入 Seeeduino/Arduino。
- 步骤 5. 将 Grove-4 位数字显示屏连接到 MT3620 Grove 扩展板的 GPIO4 端口。
- 步骤 6. 将 Grove-温湿度传感器（SHT31）连接到 MT3620 Grove 扩展板的 I2C 端口。
- 步骤 7. 将 Grove-继电器连接到 MT3620 Grove 扩展板的 GPIO0 端口，并将 Grove-继电器输出端连接以控制风扇的开关。
- 步骤 8. 将 Grove-滑动电位器连接到 MT3620 Grove 扩展板的模拟端口。
- 步骤 9. 将 MT3620 基础扩展板插入 Azure Sphere MT3620 开发板。
- 步骤 10. 将 USB 数据线连接到 Azure Sphere MT3620 开发板和 PC。
- 步骤 11. 将 USB 数据线连接到 Arduino/Seeeduino 和 PC。
- 步骤 12. 将电源连接到风扇。

:::caution
请确保 Grove 基础扩展板上的电压开关已调至 **3.3v**。
:::

### 软件

软件包括智能风扇模拟系统和 Azure Sphere MT3620 开发系统。

- 对于智能风扇模拟系统，使用 Arduino 板读取 Grove-蓝色 LED 按钮的按下/释放输入信号，输出 PWM 控制风扇速度，同时控制 Grove-蓝色 LED 按钮的 LED 状态。然后通过 UART 使用端口 7 与 Azure Sphere MT3620 开发系统进行通信。

- 对于 Azure Sphere MT3620 开发系统，Grove-4 数字 LED 显示屏显示来自 Grove-温湿度传感器 (SHT31) 的温度，展示 UART-I2C 扩展板功能和 MT3620 GPIO 输出功能。滑动 Grove-滑动电位器以改变风扇速度，展示 MT3620 的 I/O 输入功能。从 Azure 云配置一个阈值温度，当温度值 > 阈值时，Grove-继电器打开风扇，否则关闭风扇。用户还可以调整 Grove-滑动电位器，当风扇工作状态出现故障时，风扇的 MCU 会通过 UART 将故障信息发送到 Azure Sphere，然后故障报告会发送到 Azure 云并等待维护。

**智能风扇模拟系统**

- 第 1 步：打开 Arduino IDE。
- 第 2 步：复制 [Arduino 智能风扇模拟代码](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan/blob/master/Arduino_code/Arduino_code.ino) 并粘贴到 Arduino IDE。
- 第 3 步：从工具菜单中选择 Arduino/Seeeduino v4 作为板。
- 第 4 步：从工具菜单中选择相关的 COM 端口。
- 第 5 步：点击上传，将代码上传到 Arduino/Seeeduino。

:::note
如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。
:::

**Azure Sphere MT3620 开发系统**

- 第 1 步：下载 [Azure Sphere 代码](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan)。
- 第 2 步：按照 Azure Sphere 快速入门打开 **AzureSphereDemo2.vcxproj** 项目。
- 第 3 步：打开 Source Files 下的 main.c。
- 第 4 步：修改第 21 和 22 行的 wifiSsid 和 wifiPsk。
- 第 5 步：将演示连接到 Azure IoT。
- 第 6 步：点击 Build -> Rebuild Solution，直接构建到设备。
- 第 7 步：使用远程调试工具访问设备。
- 第 8 步：从控制台查看返回的温度数据流。
- 第 9 步：配置设备资源管理器并链接物理设备与云端设备。
- 第 10 步：按下温度传感器并在控制台查看触发消息。
- 第 11 步：按下按钮模拟风扇错误并在控制台查看状态。

有关详细操作，请参考视频。

<div class="video-container">
<iframe width="1000" height="669" src="https://www.youtube.com/embed/KXThR9RUNvw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 资源

- **[产品]** [Azure Sphere MT3620 开发套件产品简介](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[产品]** [欢迎使用 Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[认证]** [Azure Sphere MT3620 开发套件-CE](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- **[认证]** [Azure Sphere MT3620 开发套件-FCC](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- **[认证]** [Azure Sphere MT3620 开发套件-MIC](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)
- **[库]** [MT3620 Grove 扩展板库](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Wiki]** [MT3620 Grove 扩展板](https://wiki.seeedstudio.com/cn/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/)
- **[数据表]** [MediaTek MT3620 产品简介](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[数据表]** [DS_FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)
- **[机械图]** [Azure Sphere MT3620 开发板-2D 图纸](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[FAQ 网页]** [Azure Sphere 论坛](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ 网页]** [Azure Sphere Github 问题](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

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