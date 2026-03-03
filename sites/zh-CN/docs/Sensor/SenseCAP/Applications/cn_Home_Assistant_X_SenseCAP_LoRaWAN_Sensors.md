---
description: 与 Home Assistant 和 SenseCAP 传感器共舞
title: 与 Home Assistant 和 SenseCAP 传感器共舞
keywords:
- LoRaWAN
- Sensor
- Home Assistant
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/home_assistant_with_sensecap_lorawan_sensors
last_update:
  date: 9/14/2023
  author: Jessie
---

分享一种将 LoRaWAN® 传感器集成到 Home Assistant 的方法。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527151/_HMPRnIpF0p.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={800} height="auto" /></p>

在智能家居领域已经有足够多的智能设备（传感器、灯具、开关），您可能已经拥有来自 Apple Homekit、Google Home 和 Amazon Alexa 的多个应用程序来服务不同的设备。非常需要在一个地方将它们全部连接起来。我最近在 2022 年 9 月读到新闻，matter 1.0 已经发布，旨在统一生态系统。然而，这肯定需要时间。

实际上，在 matter 发布的几年前，[Home Assistant](https://www.home-assistant.io/) 就是构建完全定制化智能家居生态系统的最佳平台之一，它可以集成主流设备并设置自动化规则，让您的家变得更好、更智能。这绝对是我想要学习并分享经验的东西。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527037/image_AC7YowxKbT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

在这一系列文章中，我将分享如何在 Home Assistant 中构建一个出色的智能家居，并使用来自 Seeed Studio SenseCAP 产品的传感器。这是第一个里程碑。

从零开始运行 home assistant 并集成 SenseCAP 天气传感器。

以下是实现目标的步骤：

- 在 Raspberry Pi 上安装 home assistant
- 通过应用程序将 SenseCAP 传感器接入
- 添加 MQTT 集成并订阅 SenseCAP 数据
- 添加具有不同传感器测量值的实体
- 创建传感器数据仪表板

### 在 Raspberry Pi 上安装 home assistant

要开始使用 Home Assistant，[官方教程](https://www.home-assistant.io/getting-started/) 非常有用。

有许多设备和平台可以运行 home assistant，我恰好有一个未使用的 Raspberry Pi，所以我将从[这里](https://www.home-assistant.io/installation/raspberrypi)开始。

我不使用 Balena etcher 来刷写 SD 卡，而是更喜欢使用官方的 [Raspberry Pi Imager](https://www.raspberrypi.com/software/)，它轻量且易于使用。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527038/image_xXpG0MaQJS.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

准备一张大于 32GB 的 Micro SD 卡并将其插入您的计算机，这里我以 MacBook 为例。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527041/image_vb64IHZx5B.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

导航到其他特定用途操作系统，选择 Home Assistant 和 Home Automation。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527042/image_xf5OXUliuo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

选择 Home Assistant

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527044/image_tIB5zVlxm5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

选择适用于 RPi4 的 Home Assistant OS 版本

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527045/image_UQdhYJt88T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

然后选择 SD 卡驱动器，请小心，不要选择错误的磁盘，这可能会格式化您的驱动器并丢失所有宝贵的数据。

<img src="https://hackster.imgix.net/uploads/attachments/1527046/image_Le62Kc3fGH.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />
<img src="https://hackster.imgix.net/uploads/attachments/1527047/image_tiE1gwdlBw.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

根据您的网络速度，下载 Home Assistant 镜像可能需要一段时间。

然后将 micro SD 卡插入 Raspberry Pi 并连接一根以太网电缆。启动它，红色 LED 应该保持红色，绿色 LED 将开始闪烁，如果绿色 LED 不闪烁，这表明在镜像刷写过程中出现了问题。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527053/image_UaCcGJHjzs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

转到 `http://homeassistant.local:8123/` 并等待安装完成。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527051/image_rEn7iALm78.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={400} height="auto" /></p>

按照此[链接](https://www.home-assistant.io/getting-started/onboarding/)注册您的 Home Assistant 账户并登录。

太好了！最终，您已经安装了 Home Assistant。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527055/image_5mAwRA0PMG.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### 通过应用程序将 SenseCAP 传感器接入

SenseCAP 是一系列工业传感器设备和网关产品，其中，S210x LoRaWAN 传感器主要为长距离和电池供电场景而构建。

我想使用新推出的 [S2120 气象站](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)，并将其部署在我的屋顶上，屋顶有6层楼高，所以 LoRa 的长距离通信功能很好地完成了这项工作。它已经配备了所有快速安装所需的配件。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527056/image_61yawsK9oe.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

气象站作为标准的 LoRaWAN 设备工作，所以我可以在家中使用 [SenseCAP M2 室内 LoRaWAN 网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)，它有一个带磁性底座的 3dBi 天线。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527058/image_BRnDKw5tLD.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

接下来，下载 SenseCAP Mate 应用程序并注册一个账户。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

仅供您参考，这个视频来自 Seeed Studio，演示了基本的入网过程。

<div class="video-container">
<iframe class="youtube-video" src="https://youtu.be/TUQ9UmF7e7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

用网线将 M2 LoRaWAN 网关连接到互联网，并在通电前连接天线，当您看到面板 RGB LED 保持绿色时，这意味着网关设置良好。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527070/image_zEm7RxadAf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

现在让我将 M2 LoRaWAN 网关入网

- 打开 Mate 应用程序并转到"设备"选项卡<br/>
- 点击右上角的"+"图标扫描网关二维码，二维码在设备标签上。<br/>
- 为您的设备命名并设置位置。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527073/image_xoxYLPEmeE.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

以同样的方式，扫描二维码将 S2120 气象传感器入网。点击 S2120 传感器，现在我可以看到天气数据。

- 空气温度
- 空气湿度
- 光照强度
- 大气压力
- 风向
- 风速
- 每小时降雨量
- 紫外线指数

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527082/image_Tr85o39OKT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
现在是时候去我的屋顶并将其安装在杆子上了。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527110/img_3683_qMfEaREbxR.jpeg?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

我还有另一个 [S2103 CO2、温度和湿度传感器](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) 和 [S2105 土壤湿度、温度和 EC 传感器](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html)，它们在 S210x 系列中具有相同的优势，入网过程也相同。它们是符合工业标准的高质量产品。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527107/image_Q55T2OnZjs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

所以我也将它们添加到 SenseCAP Mate 应用程序中，并将它们安装在我的卧室和花盆中。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527108/image_rkLg6bXCX9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

现在，我在 SenseCAP 传感器端已经设置好了一切。

### 添加 MQTT 集成

- **为什么我需要将传感器数据集成到 Home Assistant 中？**

`我可以利用 Home Assistant 中的自动化流程，而 SenseCAP 应用程序目前没有该功能。`

- **将 SenseCAP 数据传输到 Home Assistant 的过程是什么？**

`获取您的 SenseCAP 账户 API 密钥<br/>
阅读 SenseCAP 开放流 API 文档（MQTT）<br/>
在 Home Assistant 中添加 MQTT 集成<br/>
通过 MQTT 订阅 SenseCAP 数据并使用 API 密钥<br/>`

- **现在，让我们进入 SenseCAP 门户，在这里您可以找到您的**

`OrgID` = 组织 ID<br/>
`Password` = 访问 API 密钥

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527113/image_Q3vkEnuKU2.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

我的 MQTT 订阅信息是：

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527114/image_V4qotIEmN1.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

回到 Home Assistant 网页界面。

Home Assistant 中有很多集成

https://www.home-assistant.io/integrations/

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527115/image_igs1T1yKAk.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

今天我将使用 MQTT 集成来订阅 JSON 格式的数据，并使用 [MQTT 传感器集成](https://www.home-assistant.io/integrations/sensor.mqtt/) 将传感器值绑定到特定实体。

转到设置并进入设备和服务

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527116/image_udflzRbXDp.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
点击添加集成按钮并搜索 MQTT

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527118/image_VPTvmh0hMc.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

请记住启用高级设置，如果您忘记输入客户端ID，设置将会失败。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527120/image_y4yAFffD4f.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

然后，您可以通过点击CONFIGURE按钮并监听主题来测试订阅是否正常工作

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527123/image_Fku83wMfdA.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527121/image_G5lZNHW9P5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

等待一会儿，就会有传感器消息。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527122/image_5pGjBZ4ZqZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>
到目前为止，MQTT客户端已成功设置。

### 添加实体

我将添加多个实体来存储传感器测量数据，例如，创建一个新的"空气温度"实体并从S2120 MQTT JSON消息中获取测量值。并以同样的方式添加其他传感器实体。

我将通过编辑Home Assistant配置文件来完成此操作

```cpp
configuration.yaml
```

前往设置并移动到附加组件，然后

<img src="https://hackster.imgix.net/uploads/attachments/1527130/image_em25CYMJaj.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" /><img src="https://hackster.imgix.net/uploads/attachments/1527131/image_DfFNubnQaf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

安装它并启用在侧边栏中显示，然后点击开始。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527132/image_RNwnNZNnBX.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

现在这是使用以下脚本修改YAML文件的重要部分

```cpp
mqtt:
  sensor:
    - name: "Air Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4097"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Air Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4098"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Light Intensity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4099"
      unit_of_measurement: "Lux"
      value_template: "{{ value_json.value }}"
    - name: "Barometric Pressure"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4101"
      unit_of_measurement: "Pa"
      value_template: "{{ value_json.value }}"
    - name: "Wind Direction"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4104"
      unit_of_measurement: "°"
      value_template: "{{ value_json.value }}"
    - name: "Wind Speed"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4105"
      unit_of_measurement: "m/s"
      value_template: "{{ value_json.value }}"
    - name: "Rainfall Hourly"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4113"
      unit_of_measurement: "mm/hour"
      value_template: "{{ value_json.value }}"
    - name: "UV Index"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4190"
      unit_of_measurement: "UV"
      value_template: "{{ value_json.value }}"
    - name: "Soil Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Soil Moisture"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%"
      value_template: "{{ value_json.value }}"
    - name: "Electrical Conductivity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "dS/m"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room CO2"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.value }}"
```

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527133/image_sWi5PsDmyl.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

保存它并转到开发者工具检查 YAML 文件是否正确。

然后，重启 Home Assistant

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527134/image_4eyghWeM61.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

重启后，确保 MQTT 正在监听 SenseCAP 主题

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527135/image_2zfIHuOxvC.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

然后，转到设置 -> 设备和服务 -> 实体

哇~~~ 所有传感器测量值都列在那里。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527136/image_nf7n2EARnh.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### 创建传感器数据仪表板

最后一步是将传感器实体添加到仪表板。

转到概览并找到"编辑仪表板"

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527137/image_aUUUbBvb9V.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

选择实体卡片，这种卡片可以在一个卡片中包含多个传感器值。

我将为每个传感器创建三个卡片

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527138/image_Ebs1nBNDow.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

最后，我完成了非常基本的集成，并在 Home Assistant 中显示 SenseCAP 传感器数据。

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527146/image_zV3lKcDL3T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

接下来，我将花更多时间优化 UI 并使其看起来更美观。

并使用 ESP32 向 Home Assistant 添加新传感器。

### 资源

[与 Home Assistant 和 SenseCAP 传感器共舞](https://www.hackster.io/Pistachio9to5/tango-with-home-assistant-and-sensecap-sensors-1ee587)
