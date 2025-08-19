---
description: LoRaWAN 追踪器入门指南
title: LoRaWAN 追踪器入门指南
keywords:
- Tracker
- LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /cn/get_started_with_lorawan_tracker
sidebar_position: 1
last_update:
  date: 2/27/2025
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-LoRaWAN-p-6408.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


T1000-E for LoRaWAN 配备完全开源的固件。为了提升用户体验，我们在出厂设备上预装了演示固件。用户可以探索演示固件以获得初步体验，也可以开发自己的定制固件。有关定制开发的详细信息，请参考 [LoRaWAN 开源固件](https://wiki.seeedstudio.com/cn/open_source_lorawan/)。


**T1000 系列版本对比**

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

## 硬件概述


### 示意图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/diagram.png" alt="pir" width={800} height="auto" /></p>

### 引脚描述


|编号|名称|功能|描述|
| :- | :- | :- | :- |
|1|P0.00|XL1|32.768 kHz 晶振连接|
|2|P0.01|XL2|32.768 kHz 晶振连接|
|3|P0.02|<p>数字 I/O</p><p>模拟输入</p>|电池电量检测|
|4|P0.03|<p>数字 I/O</p><p>模拟输入</p>|红色 LED IO|
|5|P0.04|<p>数字 I/O</p><p>模拟输入</p>|VCC 电压检测|
|6|P0.05|<p>数字 I/O</p><p>模拟输入</p>|充电器插入检测，必须配置为无上拉或下拉|
|7|P0.06|数字 I/O|按键 IO，必须配置为输入下拉|
|8|P0.07|数字 I/O|LR1110 BUSY|
|9|P0.08|数字 I/O|AG3335 VRTC EN|
|10|P0.09|NFC 输入|NC|
|11|P0.10|NFC 输入|NC|
|12|P0.11|数字 I/O|SPI SCK|
|13|P0.12|数字 I/O|SPI CS|
|14|P0.13|数字 I/O|UART1 TX 用于 AG3335|
|15|P0.14|数字 I/O|UART1 RX 用于 AG3335|
|16|P0.15|数字 I/O|AG3335 RTC 中断|
|17|P0.16|数字 I/O|UART1 TX 用于调试|
|18|P0.17|数字 I/O|UART1 RX 用于调试|
|19|P0.18|复位|复位|
|20|P0.19|数字 I/O|QSPI FLASH 时钟|
|21|P0.20|数字 I/O|QSPI FLASH CS|
|22|P0.21|数字 I/O|QSPI FLASH IO0|
|23|P0.22|数字 I/O|QSPI FLASH IO1|
|24|P0.23|数字 I/O|QSPI FLASH IO2|
|25|P0.24|数字 I/O|绿色 LED IO|
|26|P0.25|数字 I/O|蜂鸣器 PWM|
|27|P0.26|数字 I/O|I2C SDA|
|28|P0.27|数字 I/O|I2C SCL|
|29|P0.28|<p>数字 I/O</p><p>模拟输入</p>|NC|
|30|P0.29|<p>数字 I/O</p><p>模拟输入</p>|光传感器 ADC 输入|
|31|P0.30|<p>数字 I/O</p><p>模拟输入</p>|NC|
|32|P0.31|<p>数字 I/O</p><p>模拟输入</p>|温度传感器 ADC 输入|
|33|P1.00|数字 I/O|QSPI FLASH IO3|
|34|P1.01|数字 I/O|LR1110 DIO9|
|35|P1.02|数字 I/O|加速度计中断|
|36|P1.03|数字 I/O|充电器状态|
|37|P1.04|数字 I/O|充电完成|
|38|P1.05|数字 I/O|蜂鸣器使能|
|39|P1.06|数字 I/O|传感器 VCC 使能|
|40|P1.07|数字 I/O|加速度计使能|
|41|P1.08|数字 I/O|SPI MISO|
|42|P1.09|数字 I/O|SPI MOSI|
|43|P1.10|数字 I/O|LR1110 RESET|
|44|P1.11|数字 I/O|AG3335 PWR EN|
|45|P1.12|数字 I/O|AG3335 SLEEP 中断|
|46|P1.13|数字 I/O|Flash 使能|
|47|P1.14|数字 I/O|AG3335 RESETB OUT|
|48|P1.15|数字 I/O|AG3335 复位|

## 演示固件概述

### 定位描述


|**位置**|**描述**|
| - | - |
|GNSS|上传经度和纬度信息。<br/>（室内通常没有GPS信号，建议在室外测试设备以获取位置信息）|
|Wi-Fi|上传Wi-Fi接入点的MAC地址和RSSI信息。|
|蓝牙|上传蓝牙信标的MAC地址和RSSI信息。|


### 按钮

|**按钮操作**|**描述**|
| - | - |
|长按3秒|开机/关机|
|点击按钮3次|开启/关闭蓝牙|-|
|双击|开启/关闭SOS警报|
|单击一次|上传位置/电池/传感器数据|

### LED

<table>
  <tr>
    <th colspan="2" valign="top"><b>LED状态</b></th>
    <th colspan="1" valign="top"><b>描述</b></th>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">红色LED</td>
    <td colspan="1" valign="top">常亮</td>
    <td colspan="1" valign="top">充电中</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">闪烁</td>
    <td colspan="1" valign="top">充电异常</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="4">绿色LED</td>
    <td colspan="1" valign="top">常亮</td>
    <td colspan="1" valign="top">
      <p>设备处于DFU模式。</p>
      <p>重启设备以退出DFU模式（按住按钮，然后在连接充电线后立即松开）</p>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">
      <p>亮500ms/灭1s</p>
    </td>
    <td colspan="1" valign="top">蓝牙开启</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">呼吸灯</td>
    <td colspan="1" valign="top">正在加入LoRaWAN网络</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">快速闪烁2秒然后熄灭</td>
    <td colspan="1" valign="top">成功加入LoRaWAN网络</td>
  </tr>
</table>


### 传感器功能

SenseCAP T1000 Tracker配备了3个传感器：温度传感器、光线传感器和3轴加速度计。
您可以选择启用或禁用这些传感器：

:::note
当传感器开启时，设备将消耗更多电量。
:::

|**传感器**|**描述**|
| - | - |
|温度|<p>板载独立温度传感器。</p><p>这里可能会有一些温度测量延迟，因为它与外壳分离。</p><p>范围：-20至60℃；精度：±1℃（最小0.5℃，最大1℃）；分辨率：0.1℃</p>|
|光线|<p>光线传感器监测的不是实际的流明值，而是从暗到亮的光线百分比。主要可用于防拆监控和一些光敏监控。</p><p>范围：0至100%，（0%为黑暗，100%为最亮）</p>|
|3轴加速度计|通过设置加速度值，触发运动事件和冲击事件。|


### 电池

电池寿命取决于上行间隔、传感器使用、LoRa传输距离和工作温度等因素。预测的电池寿命基于典型工作环境（25°C）并仅供参考。实际电池寿命可能有所不同。

**EU868(1C/SF12)**


|上传间隔|1分钟|5分钟|60分钟|1天|
|--|--|--|--|--|
|电池寿命（天）|2.46|11.72|84.68|184.86|

**US915(1C/SF9)**

|上传间隔|1分钟|5分钟|60分钟|1天|
|--|--|--|--|--|
|电池寿命（天）|2.89|13.66|92.59|186.83|

## 开始使用

按住按钮3秒钟开机，上升的旋律表示设备已成功开机。

### 通过应用程序连接

* **步骤 1：** 下载 `SenseCraft` 应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

登录 SenseCraft 应用程序。

:::tip
选择服务器位置为 `Global`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/global-version.png" alt="pir" width={200} height="auto" /></p>
:::

* **步骤 2：** 添加设备

点击右上角的 `Add Device` 选项卡，然后扫描设备标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

### 配置设备

* 导航到 `User` -> `Device Bluetooth Configuration` 页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/config-ppa.png" alt="pir" width={200} height="auto" /></p>

* **点击按钮3次** 进入配置模式。设备名称：**T1000-E xxxx**（MAC地址的后四位数字）。

#### 快速配置

要快速开始使用 `SenseCAP 云`，您可以选择 `Quick Configuration`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-config.png" alt="pir" width={800} height="auto" /></p>

根据您的地区配置 `Frequency Plan`，并设置您想要的 `Uplink Interval`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-1.png" alt="pir" width={200} height="auto" /></p>

#### 高级配置

对于高级用法，请选择 `Advanced Configuration`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/advan-config.png" alt="pir" width={800} height="auto" /></p>

您可以看到当前设备信息，包括 `device EUI`、`硬件/软件版本`、`电池` 等。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/info-dev.png" alt="pir" width={250} height="auto" /></p>

导航到 `Settings` 来设置参数。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/setting-page.png" alt="pir" width={600} height="auto" /></p>

* **LoRa 设置**

<table>
  <tr>
    <th colspan="1"></th>
    <th colspan="1" valign="top"><b>参数</b></th>
    <th colspan="1" valign="top"><b>描述</b></th>
  </tr>
  <tr>
    <td colspan="1" rowspan="5">平台</td>
    <td colspan="1" valign="top">SenseCAP for The Things Network（默认）</td>
    <td colspan="1" valign="top">
      <p>SenseCAP 的专有 TTN 服务器。与 SenseCAP 网关配对时即可开箱即用。</p>
      <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCA 户外网关</span></a><br />
      <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCA 室内网关</span></a>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">SenseCAP for Helium</td>
    <td colspan="1" valign="top">
      <p>SenseCAP 的私有 Helium 控制台。</p>
      <p>与 SenseCAP Mate 应用程序和门户开箱即用。</p>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Helium</td>
    <td colspan="1" valign="top">公共 Helium 服务器</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">The Things Network</td>
    <td colspan="1" valign="top">公共 TTN 服务器</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Other Platform</td>
    <td colspan="1" valign="top">其他 LoRaWAN 网络服务器</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">频率计划</td>
    <td colspan="1" valign="top">EU868/US915/AU915/KR920/IN865/AS923-1/AS923-2/AS923-3/AS923-4</td>
    <td colspan="1" valign="top">默认为 EU868</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">数据包策略</td>
    <td colspan="1" valign="top">1C</td>
    <td colspan="1" valign="top">默认启用</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">LoRaWAN ADR</td>
    <td colspan="1" valign="top">默认启用</td>
    <td colspan="1" valign="top">默认启用</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">恢复 LoRa 配置</td>
    <td colspan="1" valign="top">默认启用</td>
    <td colspan="1" valign="top">默认启用</td>
  </tr>
</table>

* **常规设置**

<table>
  <tr>
    <th colspan="1"></th>
    <th colspan="1" valign="top"><b>参数</b></th>
    <th colspan="1" valign="top"><b>描述</b></th>
  </tr>
  <tr>
    <td colspan="1">三轴加速度计</td>
    <td colspan="1" valign="top">启用/禁用，默认禁用</td>
    <td colspan="1" valign="top">上传三轴加速度计的数据</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">SOS 报告模式</td>
    <td colspan="1" valign="top">单次（默认）</td>
    <td colspan="1" valign="top">上传数据并报告 SOS 事件一次。<br/>蜂鸣器报警3秒</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">连续</td>
    <td colspan="1" valign="top">每分钟上传数据并报告 SOS 事件，30次后结束。<br/>蜂鸣器报警30秒</td>
  </tr>
  <tr>
    <td colspan="1">上行间隔（分钟）</td>
    <td colspan="1" valign="top">1-10080分钟，默认60分钟</td>
    <td colspan="1" valign="top">定时上传数据。<br/>频率越高，功耗越高</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="7">地理定位策略</td>
    <td colspan="1" valign="top">仅 GNSS（默认）</td>
    <td colspan="1" valign="top">仅使用 GPS 卫星系统确定位置</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">仅 Wi-Fi</td>
    <td colspan="1" valign="top">上传 Wi-Fi AP 的 MAC 地址和 RSSI 信息</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">仅蓝牙</td>
    <td colspan="1" valign="top">上传蓝牙信标的 MAC 地址和 RSSI 信息</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">GNSS + Wi-Fi</td>
    <td colspan="1" valign="top">在一个地理定位周期中，首先使用 GPS 定位，如果 GPS 失败，则使用 Wi-Fi</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">蓝牙 + GNSS</td>
    <td colspan="1" valign="top">在一个地理定位周期中，首先使用蓝牙定位，如果蓝牙失败，则使用 GNSS</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">蓝牙 + Wi-Fi</td>
    <td colspan="1" valign="top">在一个地理定位周期中，首先使用蓝牙定位，如果蓝牙失败，则使用 Wi-Fi</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">蓝牙 + Wi-Fi + GNSS</td>
    <td colspan="1" valign="top">依次使用蓝牙、Wi-Fi 和 GNSS 进行定位（一种定位类型失败后切换到下一种定位类型）</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">GNSS(GPS)</td>
    <td colspan="1" valign="top">GNSS 最大扫描时间（秒）</td>
    <td colspan="1" valign="top">10-120秒，默认30秒</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">IBeacon 扫描</td>
    <td colspan="1" valign="top">BLE 扫描最大次数</td>
    <td colspan="1" valign="top">3-5次，默认3次</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">扫描超时（秒）</td>
    <td colspan="1" valign="top">3-10秒，默认3秒</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">组 UUID（十六进制）</td>
    <td colspan="1" valign="top">设置 UUID 过滤器，最多16字节。<br/>例如，如果设置为 '01 020304'，它将过滤具有模式 '0102 03 04 xx xx xx ...' 的信标</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Wi-Fi 扫描</td>
    <td colspan="1" valign="top">Wi-Fi 扫描最大次数</td>
    <td colspan="1" valign="top">3-5次，默认3次</td>
  </tr>
</table>

### 设备数据查看

#### SenseCAP Mate App

在APP上查看位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>


#### SenseCAP Portal

SenseCAP Portal的主要功能是管理SenseCAP设备和存储数据。它构建在Azure上，这是微软提供的安全可靠的云服务。用户可以申请账户并将所有设备绑定到此账户。SenseCAP Portal提供Web门户和API。Web门户包括仪表板、设备管理、数据管理和访问密钥管理。API向用户开放以供进一步开发。

- **仪表板：** 包括设备概览、公告、场景数据和数据图表等。
- **设备管理：** 管理SenseCAP设备。
- **数据管理：** 管理数据，包括数据表和图表部分，提供搜索数据的方法。
- **子账户系统：** 注册具有不同权限的子账户。
- **访问密钥管理：** 管理访问密钥（用于访问API服务），包括密钥创建、密钥更新和密钥检查。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### 设备数据查看

登录[SenseCAP Portal](http://sensecap.seeed.cc)

如果您已通过APP创建账户，可以直接登录。

1) 选择注册账户，输入邮箱信息，点击"注册"，注册邮件将发送到用户邮箱

2) 打开"SenseCAP…"邮件，点击跳转链接，填写相关信息，完成注册

3) 返回登录界面，完成登录


查看[SenseCAP Portal用户指南](https://sensecap-docs.seeed.cc/quickstart.html)了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## SenseCAP API 

SenseCAP API供用户管理IoT设备和数据。它包括3种类型的API方法：HTTP协议、MQTT协议和Websocket协议。
* 使用HTTP API，用户可以管理LoRa设备，获取原始数据或历史数据。
* 使用MQTT API，用户可以通过MQTT协议订阅传感器的实时测量数据。
* 使用Websocket API，用户可以通过Websocket协议获取传感器的实时测量数据。

请查看[API用户指南](https://sensecap-docs.seeed.cc/)了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>


## 解码器

* **[TTN解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000E_TTN_Decoder.js)**
* **[Helium解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/Helium/SenseCAP_T1000E_Helium_Decoder.js)**

## 资源

[GitHub](https://github.com/Seeed-Studio/Seeed-Tracker-T1000-E-for-LoRaWAN-dev-board)