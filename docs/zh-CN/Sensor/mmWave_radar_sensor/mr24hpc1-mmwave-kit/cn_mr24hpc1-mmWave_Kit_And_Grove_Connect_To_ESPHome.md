---
description: mmWave Kit 和 Grove 连接到 ESPHome
title: mmWave Kit 和 Grove 连接到 ESPHome
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/mmWave_Kit_And_Grove_Connect_To_ESPHome
sidebar_position: 1
last_update:
  date: 12/09/2023
  author: Allen
---

## 介绍

mmWave 人体检测传感器套件由 Seeed Studio XIAO ESP32C3 驱动，支持 Wi-Fi/BLE 连接，通过 mmWave 传感器提供精确的人体检测。无缝连接 Grove 模块以获得更多功能。在 1-2 分钟内轻松设置 Home Assistant，并配备便捷的无线空中升级 (OTA) 更新。通过可更换的 mmWave 传感器实现广泛的多功能性。非常适合定制智能家居自动化、检测入侵和监控老年人的健康状况。

## 硬件准备

我使用 Raspberry Pi 4B 作为服务器来运行 HomeAssistant，使用 mmWave 人体检测传感器套件作为硬件，以及多个 Grove 传感器。

<table align="center">
  <tbody><tr>
      <th>mmWave 人体检测传感器套件</th>
      <th>Raspberry Pi 4B</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/mmwavekit.png" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/pi.png" style={{width:350, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody>
</table>

**Grove 传感器**

- [Grove - 温湿度传感器 (DHT20)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)
- [Grove - 光线传感器 (LS06-S)](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - 火焰传感器](https://www.seeedstudio.com/Grove-Flame-Sensor.html)

## 软件准备

### 安装 Home Assistant

确保您已经安装并运行了 Home Assistant。这里有多个介绍如何将 Home Assistant 刷入[产品](https://wiki.seeedstudio.com/cn/home_assistant_topic/#-devices-for-home-assistant-)的教程。我使用的是 Raspberry Pi 4B，所以我可以[直接使用官方方法将操作系统刷入 Raspberry Pi 4B](https://www.home-assistant.io/installation/raspberrypi)。

### 在 Home Assistant 上安装 ESPHome

ESPHome 作为 **Home Assistant 插件**提供，可以通过插件商店简单安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/101.png" style={{width:1000, height:'auto'}}/></div>

- **步骤 1.** 点击 **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/102.png" style={{width:1000, height:'auto'}}/></div>

- **步骤 2.** 启用所有选项并点击 **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/103.png" style={{width:1000, height:'auto'}}/></div>

如果 ESPHome 成功加载，您将看到以下窗口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/104.png" style={{width:1000, height:'auto'}}/></div>

## 开始使用

### mmWave 套件连接到 ESPHome

#### 步骤 1：硬件连接

通过 Type-C 线缆将 mmwave 套件连接到 HomeAssistant，您可以参考下图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/kit.png" style={{width:800, height:'auto'}}/></div>

#### 步骤 2：软件设置

##### a. 设置 mmwave 套件

1. 打开 ESPHome 页面，点击右下角的 **NEW DEVICE** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/1.png" style={{width:1000, height:'auto'}}/></div>

2. 然后，点击 **CONTINUE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/2.png" style={{width:500, height:'auto'}}/></div>

3. 给它一个您想要的名称，点击 **NEXT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/3.png" style={{width:500, height:'auto'}}/></div>

4. 选择您的设备类型，点击 **ESP32-C3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/4.png" style={{width:500, height:'auto'}}/></div>

5. 您可以稍后在配置文件中找到密钥，所以这里只需点击 **SKIP**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/5.png" style={{width:500, height:'auto'}}/></div>

6. 我们需要在这里编辑配置文件，点击 **EDIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/6.png" style={{width:500, height:'auto'}}/></div>

7. 下面的代码供您参考。您可以将它们复制到您的配置文件中。完成代码后，点击右上角的 **INSTALL** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/7.png" style={{width:1000, height:'auto'}}/></div>

:::tip

1. api 和 ota 部分有默认密钥或密码，您无需更改。
2. wifi 部分您需要更改为您自己的 ssid 和密码。
3. [点击这里查看代码](https://github.com/limengdu/mmwave-kit-external-components/blob/mmwave-kit-factory-bin/example/mr24hpc1.yaml)

:::

8. 然后会出现一个弹出窗口，点击第三个选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/8.png" style={{width:500, height:'auto'}}/></div>

9. 如下所示点击。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/9.png" style={{width:500, height:'auto'}}/></div>

10. 现在 mmwave 套件已经设置完成，您将看到此页面，点击右下角的 **CLOSE** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/10.png" style={{width:1000, height:'auto'}}/></div>

##### b. 将 mmwave 套件数据添加到概览

1. 转到 **Settings** 页面并点击 **Devcies & services**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/11.png" style={{width:1000, height:'auto'}}/></div>

2. 在已配置区域点击 **ESPHome**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/12.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果您发现 ESPHome 不在已配置区域，而是在上方的已发现区域。您可以按照此[链接](https://wiki.seeedstudio.com/cn/XIAO-ESP32C3-for-ESPHome-Support/)中的步骤15到步骤18进行操作。
:::

3. 点击 **devices**。我这里有2个设备，在您的情况下可能只有1个设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/13.png" style={{width:1000, height:'auto'}}/></div>

4. 点击 **mmWave Kit Plus Grove**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/14.png" style={{width:1000, height:'auto'}}/></div>

5. 点击 **ADD TO DASHBOARD** 将这些信息添加到仪表板。您可以向下滚动此页面以添加更多您想要的信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/15.png" style={{width:1000, height:'auto'}}/></div>

6. 继续点击 **ADD TO DASHBOARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/16.png" style={{width:500, height:'auto'}}/></div>

7. 最后，您可以通过点击左上角的 **overview** 按钮在仪表板中查看这些信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/17.png" style={{width:1000, height:'auto'}}/></div>

### Grove 连接到 ESPHome

#### 光传感器(LS06-S)

##### 步骤 1：硬件连接

通过 Grove 线缆将[光传感器](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)连接到毫米波套件，您可以参考下图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/light.png" style={{width:800, height:'auto'}}/></div>

##### 步骤 2：软件设置

###### a. 设置光传感器

1. 将这些代码添加到您的配置文件中的相应位置，您可以参考下图。

```
  - platform: adc
    pin: GPIO2
    name: "Light Sensor"
    update_interval: 1s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/18.png" style={{width:1000, height:'auto'}}/></div>

2. 然后点击左上角的 **INSTALL** 按钮。如果一切顺利，您将看到这个图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/21.png" style={{width:1000, height:'auto'}}/></div>

:::tip
<span id="jump">如果您遇到错误，可以按照以下方式清理构建文件。</span>
:::

1. 您可能会遇到这样的错误。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/error.png" style={{width:1000, height:'auto'}}/></div>

2. 您可以点击 **Clean Build Files** 来清理一些文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/clean.png" style={{width:1000, height:'auto'}}/></div>

3. 清理完成后，点击 **CLOSE** 并再次尝试 **INSTALL**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/cleandone.png" style={{width:1000, height:'auto'}}/></div>

###### b. 将光传感器添加到仪表板

1. 点击左上角的 **Overview**，然后点击右上角的 **"三个点"** 和 **Edit dashboard**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. 点击右下角的 **ADD CARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. 点击 **BY ENTITY**，选择 **Light Sensor** 条目，然后点击 **CONTINUE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/29.png" style={{width:1000, height:'auto'}}/></div>

4. 选择 **PICK DIFFERENT CARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/30.png" style={{width:800, height:'auto'}}/></div>

5. 选择 **Gauge**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/31.png" style={{width:800, height:'auto'}}/></div>

6. 将最小值设置为 0，最大值设置为 1，点击 **SAVE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/32.png" style={{width:800, height:'auto'}}/></div>

7. 最后您将在仪表板中看到光传感器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/33.png" style={{width:1000, height:'auto'}}/></div>

#### 温湿度传感器(DHT20)

##### 步骤 1：硬件连接

通过 Grove 线缆将[温湿度传感器](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)连接到毫米波套件，您可以参考下图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/DHT20.png" style={{width:800, height:'auto'}}/></div>

##### 步骤 2：软件设置

###### a. 设置温湿度传感器

1. 在配置文件的相应位置添加这些代码，您可以参考下图。

```
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38
```

```
sensor:
  - platform: aht10
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/19.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/20.png" style={{width:1000, height:'auto'}}/></div>

2. 然后点击左上角的 **INSTALL** 按钮。如果一切顺利，您将看到这个图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/28.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果您遇到错误，可以跳转到[这里](#jump)进行参考。
:::

###### b. 将温湿度传感器添加到仪表板

1. 点击左上角的 **Overview**，然后点击右上角的**"三个点"**和 **Edit dashboard**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. 点击右下角的 **ADD CARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. 点击 **BY ENTITY**，选择 **Humidiy** 和 **Temperature** 条目，然后点击 **CONTINUE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/24.png" style={{width:1000, height:'auto'}}/></div>

4. 点击 **ADD TO DASHBOARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/25.png" style={{width:500, height:'auto'}}/></div>

5. 最后您将在仪表板中看到温度和湿度数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/26.png" style={{width:1000, height:'auto'}}/></div>

#### 火焰传感器

##### 步骤 1：硬件连接

使用 Grove 线缆将[火焰传感器](https://www.seeedstudio.com/Grove-Flame-Sensor.html)连接到 mmWave 套件的模拟端口。您可以参考下面的视频。

##### 步骤 2：软件设置

###### a. 设置火焰传感器

将下面的代码添加到您的配置文件中，并**安装**到 mmWave 套件。

```
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3
      inverted: true
    name: "Flame Detecctor"
    device_class: smoke
```

###### b. 将火焰传感器添加到仪表板

您可以参考上面的光传感器或温湿度传感器。

#### 其他带有 Yaml 文件的传感器

由 [Seeed Studio 贡献者计划](https://github.com/orgs/Seeed-Studio/projects/12/views/1) 支持，感谢 Mohammed，下面还有更多支持的传感器：

[ATH20 传感器](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/AHT20.yaml)
[SHT35 传感器](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT35.yaml)
[SHT40 传感器](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT40.yaml)
[振动传感器](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/Vibration%20Sensor.yaml)

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
