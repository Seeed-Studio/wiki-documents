---
description: mmWave Kit And Grove Connect To ESPHome
title: 毫米波套件和 Grove 连接到 ESPHome
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/mmWave_Kit_And_Grove_Connect_To_ESPHome
last_update:
  date: 03/22/2024
  author: AnXiaodie
---

## 简介

mmWave人体检测传感器套件由Seeed Studio XIAO ESP32C3驱动，支持Wi-Fi/BLE连接，并通过毫米波传感器提供精确的人体检测。可无缝连接Grove模块以添加更多功能。在1-2分钟内轻松为Home Assistant进行设置，同时提供方便的无线空中（OTA）更新。通过可替换的毫米波传感器实现广泛的通用性。适用于定制智能家居自动化、检测入侵以及监测老年人健康状况等场景。

## 硬件准备

我使用Raspberry Pi 4B作为服务器来运行Home Assistant，同时使用mmWave人体检测传感器套件作为硬件，并搭配多个Grove传感器。

<table align="center" style={{ backgroundColor: 'white' }}>
  <tbody><tr>
      <th>毫米波人体检测传感器套件</th>
      <th>Raspberry Pi 4B</th>
    </tr>
    <tr>
      <td><div align="center" style={{ backgroundColor: 'white' }}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/mmwavekit.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div align="center" style={{ backgroundColor: 'white' }}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/pi.png" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Grove传感器**

- [Grove - 温度与湿度传感器（DHT20）](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)
- [Grove - 光传感器（LS06-S）](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - 火焰传感器](https://www.seeedstudio.com/Grove-Flame-Sensor.html)

## 软件准备

### 安装Home Assistant

请确保您已经安装并运行了Home Assistant。这里有多个教程介绍如何将Home Assistant刷入[产品](https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-)中。由于我使用的是Raspberry Pi 4B，因此我可以[直接使用官方教程将操作系统刷入Raspberry Pi 4B](https://www.home-assistant.io/installation/raspberrypi)。

### 在Home Assistant上安装ESPHome

ESPHome可作为**Home Assistant插件**使用，并可以通过插件商店轻松安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/101.png" style={{width:1000, height:'auto'}}/></div>

- **第一步**。 点击 **安装**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/102.png" style={{width:1000, height:'auto'}}/></div>

- **第二步**。 启用所有选项并点击 **开始**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/103.png" style={{width:1000, height:'auto'}}/></div>

如果ESPHome成功加载，您将会看到以下窗口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/104.png" style={{width:1000, height:'auto'}}/></div>

## 开始入门

### mmWave套件连接至ESPHome

#### 第一步：硬件连接

通过Type-C线缆将mmWave套件连接到HomeAssistant，您可以参考以下图片进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/kit.png" style={{width:800, height:'auto'}}/></div>

#### 第二步：软件设置

##### a. 设置mmWave套件

1. 打开ESPHome页面，并点击右下角的 **NEW DEVICE** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/1.png" style={{width:1000, height:'auto'}}/></div>

2. 然后，点击 **CONTINUE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/2.png" style={{width:500, height:'auto'}}/></div>

3. 给它起一个你想要的名字，然后点击 **NEXT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/3.png" style={{width:500, height:'auto'}}/></div>

4. 选择你的设备类型，点击 **ESP32-C3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/4.png" style={{width:500, height:'auto'}}/></div>

5. 你可以在配置文件中稍后找到密钥，所以这里只需点击 **SKIP**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/5.png" style={{width:500, height:'auto'}}/></div>

6. 我们需要在这里编辑配置文件，点击 **EDIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/6.png" style={{width:500, height:'auto'}}/></div>

7. 以下代码供您参考。您可以将其复制到您的配置文件中。完成代码后，点击右上角的 **INSTALL** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/7.png" style={{width:1000, height:'auto'}}/></div>

:::tip提示
1. api和ota部分有默认的密钥或密码，您无需更改。
2. wifi部分您需要更改为您自己的ssid和密码。
3. [点击这里查看代码](https://github.com/limengdu/mmwave-kit-external-components/blob/mmwave-kit-factory-bin/example/mr24hpc1.yaml)
:::

8. 接着会出现一个弹出窗口，点击第三个条目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/8.png" style={{width:500, height:'auto'}}/></div>

9. 请按照以下方式点击。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/9.png" style={{width:500, height:'auto'}}/></div>

10. 现在mmWave套件已经设置完成，您将看到此页面，请点击右下角的 **CLOSE** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/10.png" style={{width:1000, height:'auto'}}/></div>

##### b. 将mmWave套件数据添加到概览中

1. 转到 **Settings** 页面并点击 **Devcies & services**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/11.png" style={{width:1000, height:'auto'}}/></div>

2. 在已配置的区域中点击 **ESPHome**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/12.png" style={{width:1000, height:'auto'}}/></div>

:::tip提示
如果您发现ESPHome不在已配置区域，而是在上方的已发现区域，您可以按照此[链接](https://wiki.seeedstudio.com/XIAO-ESP32C3-for-ESPHome-Support/)中的步骤15至步骤18进行操作。
:::

3. 点击 **devices**。我这里有2个设备，但在您的情况下可能只有1个设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/13.png" style={{width:1000, height:'auto'}}/></div>

4. 点击 **mmWave Kit Plus Grove**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/14.png" style={{width:1000, height:'auto'}}/></div>

5. 点击 **ADD TO DASHBOARD** 将这些信息添加到仪表板。您可以滚动此页面以添加您想要的更多信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/15.png" style={{width:1000, height:'auto'}}/></div>

6. 继续点击 **ADD TO DASHBOARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/16.png" style={{width:500, height:'auto'}}/></div>

7. 最后，您可以通过点击左上角的 **overview** 按钮在仪表板中查看这些信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/17.png" style={{width:1000, height:'auto'}}/></div>

### Grove 连接至 ESPHome

#### 光传感器（LS06-S）

##### 第一步：硬件连接

通过 Grove 线缆将 [光传感器](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) 连接到 mmWave 套件，您可以参考下面的图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/light.png" style={{width:800, height:'auto'}}/></div>

##### 第二步：软件设置

###### a. 设置光传感器

1. 将以下代码添加到您的配置文件中的相应位置，您可以参考下面的图片。

```
  - platform: adc
    pin: GPIO2
    name: "Light Sensor"
    update_interval: 1s
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/18.png" style={{width:1000, height:'auto'}}/></div>

2. 然后点击左上角的 **INSTALL** 按钮。如果一切正常，您将看到以下图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/21.png" style={{width:1000, height:'auto'}}/></div>

:::tip提示
<span id="jump">如果遇到错误，您可以按照以下方式清除构建文件。</span>
:::

1. 您可能会遇到这样的错误。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/error.png" style={{width:1000, height:'auto'}}/></div>

2. 您可以点击 **Clean Build Files** 来清理一些文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/clean.png" style={{width:1000, height:'auto'}}/></div>

3. 清理完成后，点击 **CLOSE** 并尝试再次 **INSTALL**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/cleandone.png" style={{width:1000, height:'auto'}}/></div>

###### b. 将光传感器添加到仪表板

1. 点击左上角的 **Overview**，然后点击右上角的 **“三点”** 和 **Edit dashboard**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. 点击右下角的 **ADD CARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. 点击 **BY ENTITY**，选择 **Light Sensor** 条目，然后点击 **CONTINUE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/29.png" style={{width:1000, height:'auto'}}/></div>

4. 选择 **PICK DIFFERENT CARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/30.png" style={{width:800, height:'auto'}}/></div>

5. 选择 **Gauge**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/31.png" style={{width:800, height:'auto'}}/></div>

6. 将最小值设为0，最大值设为1，然后点击 **SAVE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/32.png" style={{width:800, height:'auto'}}/></div>

7. 最后，您将在仪表板上看到光传感器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/33.png" style={{width:1000, height:'auto'}}/></div>

#### 温度和湿度传感器（DHT20）

##### 第一步：硬件连接

通过 Grove 线缆将 [温度和湿度传感器](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) 连接到 mmWave 套件，您可以参考下面的图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/DHT20.png" style={{width:800, height:'auto'}}/></div>

##### 第二步：软件设置

###### a. 设置温度和湿度传感器

1. 将以下代码添加到您的配置文件中的相应位置，您可以参考下面的图片。

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

2. 然后点击左上角的 **INSTALL** 按钮。如果一切顺利，您将看到以下图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/28.png" style={{width:1000, height:'auto'}}/></div>

:::tip提示
如果您遇到错误，您可以跳转到 [这里](https://yiyan.baidu.com/#jump) 以作参考。
:::

###### b. 将温度和湿度传感器添加到仪表板

1. 点击左上角的 **Overview**，然后点击右上角的 **“三点”** 图标和 **Edit dashboard**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/22.png" style={{width:1000, height:'auto'}}/></div>

2. 点击右下角的 **ADD CARD**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/23.png" style={{width:1000, height:'auto'}}/></div>

3. 点击 **BY ENTITY**，选择 **Humidity** 和 **Temperature** 条目，然后点击 **CONTINUE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/24.png" style={{width:1000, height:'auto'}}/></div>

4. 点击 **ADD TO DASHBOARD**（添加到仪表板）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/25.png" style={{width:500, height:'auto'}}/></div>

5. 最后，您将在仪表板上看到温度和湿度数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit_plus_grove/26.png" style={{width:1000, height:'auto'}}/></div>

#### 火焰传感器

##### 第一步：硬件连接

使用 Grove 线缆将 [火焰传感器](https://www.seeedstudio.com/Grove-Flame-Sensor.html) 连接到 mmWave 套件的模拟端口。您可以参考下面的视频。

##### 第二步：软件设置

###### a. 设置火焰传感器

将以下代码添加到您的配置文件中，并 **INSTALL** 到 mmWave 套件。

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

您可以参考上面的光传感器或温度和湿度传感器。

#### 带有 Yaml 文件的其他传感器

通过 [Seeed Studio Contributor Program](https://github.com/orgs/Seeed-Studio/projects/12/views/1) 支持，感谢 Mohammed。下面列出了更多支持的传感器：

[ATH20 传感器](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/AHT20.yaml)
[SHT35 传感器](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT35.yaml)
[SHT40 传感器](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/SHT40.yaml)
[Vibration 传感器](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/mmWave-kit-sensor-add-grove/Vibration%20Sensor.yaml)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>