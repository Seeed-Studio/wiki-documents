---
description: Wio Tracker 1110 入门指南
title: Wio Tracker 1110 入门指南
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Get_Started_with_Wio-Trakcer_1110
sidebar_position: 2
last_update:
  date: 11/3/2023
  author: Jessie
---

在本教程中，我们将指导用户通过出厂固件快速设置 Wio Tracker 1110 开发板，将其连接到 SenseCAP 云并查看数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/image.png" alt="pir" width={800} height="auto" /></p>

### 绑定开发板

下载 SenseCAP Mate APP。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

:::tip 注意
注册时请选择**全球**版本。
:::


点击 `+` -> `添加设备`。

然后扫描板子标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-board.png" alt="pir" width={500} height="auto" /></p>

为您的设备命名并选择`设备组`（可选），然后点击`绑定到账户`。<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-dev.png" alt="pir" width={300} height="auto" /></p>

### 配置频率并连接到网关

返回到`设备`页面，然后您将看到开发板已被绑定。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-done.png" alt="pir" width={300} height="auto" /></p>


点击`立即配置`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/1.jpeg" alt="pir" width={300} height="auto" /></p>

点击`准备就绪，进入下一步`，这将进入设备搜索。

:::info 注意
设备需要先通电。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/2.jpeg" alt="pir" width={300} height="auto" /></p>

通过`扫描`搜索设备，当您在列表中找到与您自己设备相同`S/N 代码`的项目时，点击进入。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/3.jpeg" alt="pir" width={300} height="auto" /></p>

进入`设置`页面，选择平台为`SenseCAP for the Things Network`或`SenseCAP for Helium`。

:::info 注意
您也可以选择其他平台，但在这种情况下，您无法使用 SenseCAP 平台。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

<div style={{textAlign: 'center'}}>
<h2>平台</h2>
<table>
  <tbody>
    <tr>
      <td><h4>平台</h4></td>
      <td><h4>描述</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
      <td>默认平台。
必须与 SenseCAP 网关一起使用。SenseCAP 构建了一个专有的 TTN 服务器，使传感器在与 SenseCAP 网关配对时可以开箱即用。<br />
      <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP 户外网关</span></a><br />
      <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP 室内网关</span></a></td>
    </tr>
    <tr>
      <td>SenseCAP for Helium</td>
      <td>当有 Helium 网络覆盖时，数据可以通过 Helium 上传。设备运行在 SenseCAP 的私有 Helium 控制台上。用户无需在 Helium 控制台上创建设备，可通过 SenseCAP Mate App 和门户开箱即用。<br />
      <a href="https://explorer.helium.com/" target="_blank"><span>Helium 覆盖范围</span></a></td>
    </tr>
    <tr>
      <td>Helium</td>
      <td>将设备连接到您的公共 Helium 控制台</td>
    </tr>
    <tr>
      <td>The Things Network</td>
      <td>将设备连接到您的 TTN(TTS) 服务器</td>
    </tr>
    <tr>
      <td>Other Platform</td>
      <td>其他 LoRaWAN 网络服务器</td>
    </tr>
  </tbody>
</table>

</div>

选择 `频率计划`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/5.jpeg" alt="pir" width={300} height="auto" /></p>

输入 `位置上传间隔（分钟）` 和 `传感器上传间隔（分钟）`。

| 参数 | 描述 |
| - | - |
| 位置上传间隔（分钟） | 定时上传位置信息。<br/>默认 5 分钟。<br/>频率越高，功耗越大。 |
| 传感器上传间隔（分钟） | 定时上传传感器数据。<br/>默认 5 分钟。<br/>频率越高，功耗越大。 |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/6.jpeg" alt="pir" width={300} height="auto" /></p>

一旦设置中的所有信息符合您的要求，您可以点击 `发送` 将其传输到 **Tracker Wio 1110**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/7.jpeg" alt="pir" width={300} height="auto" /></p>

转到 `测量` 页面，点击 `测量`，然后您将获得传感器数值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/8.jpeg" alt="pir" width={500} height="auto" /></p>


### 检查数据

给开发板上电，请确保您附近有网络覆盖，当开发板成功连接到网络时，它将在 `设备` 页面显示 `在线`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/9.jpeg" alt="pir" width={300} height="auto" /></p>

如果您所在的区域信号较差，只需简单地安装一个 LoRaWAN 网关 - 就像设置 Wi-Fi 路由器一样简单。LoRa 的美妙之处在于其灵活性和网络扩展的便利性。这种可靠的解决方案也很经济实惠。例如，[SenseCAP M2 室内 LoRaWAN 网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)，它可以将您的覆盖范围扩展到 10 公里！

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_873855_RPfBjpKfW2xWddri_1693817031?w=680&h=446&type=image/png" alt="pir" width={600} height="auto" /></p>


:::tip
请将您的开发板放在窗边或无遮挡的地方，这样会有更好的 GPS 信号，然后板子可以成功获取位置数据。
:::

您可以在 SenseCAP Mate APP 或 SenseCAP Portal 上查看位置和传感器数据。

**SenseCAP Mate APP**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/app-data.png" alt="pir" width={500} height="auto" /></p>

**SenseCAP Portal**

如果您已通过 APP 创建了账户，您可以直接登录。
导航到您的设备页面，点击 `数据` 进行查看。

:::info
[SenseCAP Portal 用户指南](https://sensecap-docs.seeed.cc/quickstart.html)
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/por.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/portal-da.png" alt="pir" width={800} height="auto" /></p>

### 如何立即上传数据

1、当开发板被摇晃，产生振动时，会触发**三轴加速度计传感器**立即收集并上传数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake.GIF" alt="pir" width={800} height="auto" /></p>

您可以在串口监视器上查看信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-shake.png" alt="pir" width={800} height="auto" /></p>

当设备被摇晃时，SenseCAP Mate 应用界面将显示数据包。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake-app.JPG" alt="pir" width={300} height="auto" /></p>

2、按一次 `按钮`，设备将立即收集并上传数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/button.GIF" alt="pir" width={800} height="auto" /></p>

您可以在串口监视器上查看信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-button.png" alt="pir" width={800} height="auto" /></p>

SenseCAP Mate 应用界面将显示 SOS 信号和数据包。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/sos-app.JPG" alt="pir" width={300} height="auto" /></p>


### 添加 Grove 传感器（可选）


除了板载传感器外，Wio tracker 1110 开发板的可能性是无限的。在出厂固件中，以下 Grove 传感器也被允许接入此板并自动识别。


<table align="center">
  <caption> <h2>Grove 模块</h2> </caption>
  <tbody>
    <tr>
    <td><h4>传感器</h4></td>
    <td><h4>立即购买</h4></td>
    <td><h4>传感器</h4></td>
    <td><h4>立即购买</h4></td>
    </tr>
    <tr>
    <td>声音传感器-基于 LM358 放大器</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/c_6.png" alt="" width={200} height="auto"/></a>
</div></td>
    <td>高精度气压传感器-DPS310</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-high-precision-barometer-sensor-dps310-preview.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>空气质量传感器(SGP41)</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-voc-and-eco2-gas-sensor_sgp41_-v1.0-45font.jpg" alt="" width={200} height="auto"/></a>
</div></td>
    <td>阳光传感器-SI1151</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>超声波距离传感器</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove---ultrasonic-distance-sensor-preview_1.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>

  </tbody></table>

将Grove传感器连接到Wio Tracker开发板上对应的Grove端口。

您也可以使用[Grove-I2C Hub](https://www.seeedstudio.com/Grove-I2C-Hub.html)将多个I2C传感器连接到开发板上。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

## 刷写固件

* [最新固件](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)

双击`Reset`按钮，您的PC上应该会出现一个`WM1110_BOOT`驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

将`.uf2`文件拖拽到驱动器中。下载将自动运行，然后驱动器将注销。


## SenseCAP API

SenseCAP API供用户管理IoT设备和数据。它包括3种类型的API方法：HTTP协议、MQTT协议和Websocket协议。
* 使用HTTP API，用户可以管理LoRa设备，获取原始数据或历史数据。
* 使用MQTT API，用户可以通过MQTT协议订阅传感器的实时测量数据。
* 使用Websocket API，用户可以通过Websocket协议获取传感器的实时测量数据。

请查看[API用户指南](https://sensecap-docs.seeed.cc/)了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
