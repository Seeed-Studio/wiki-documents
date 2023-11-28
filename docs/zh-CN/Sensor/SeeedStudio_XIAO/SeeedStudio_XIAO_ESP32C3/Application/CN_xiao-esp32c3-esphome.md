---
description: 使用XIAO ESP32C3访问ESPHome
title: 应用 Home Assistant 实现屋内无摄像头监控
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-esp32c3-esphome
last_update:
  date: 1/11/2023
  author: Xin Ping Li
---

# 将 XIAO ESP32C3 应用 Home Assistant 实现屋内无摄像头监控

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/78.jpg" style={{width:700, height:'auto'}}/></div>


本文将指导您在自己的Home Assistant环境中安装ESPHome服务。通过使用XIAO ESP32C3的WiFi功能，您将能够以非常平滑的方式连接您的XIAO与Home Assistant作为您的家庭终端的一部分。


此外，我们将结合目前最流行的24GHz毫米波人体静态存在模块Lite，构建一个具有人体存在检测的Home Assistant。


## 开始

:::提示
截至2023年7月31日，之前导致雷达完全死亡的问题现在已经修复，所以请更新这个教程物种的库文件和配置器以正常工作。
:::

如果您想跟随本教程完成所有内容，则需要准备以下内容。
<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>24GHz毫米波人体静态检测<br />存在感模块 Lite</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买  🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

该项目的最终目标是在Home Assistant中部署24GHz毫米波人体静态存在模块Lite。

我们为24GHz毫米波人体静态存在模块Lite编写了完整的配置文件和库，以方便您在此项目中快速部署传感器到Home Assistant。


本教程的内容大致包括以下步骤。

1. 选择您的HomeAssistant环境
2. 在HomeAssistant中安装和配置ESPHome
3. 配置XIAO ESP32C3和ESPHome连接
4. 配置家庭辅助面板

当然，如果你对XIAO ESP32C3如何在Home Assistant中使用Grove感兴趣，可以直接阅读本章。


-[使用XIAO ESP32C3连接Grove到Home Assistant](#连接- Grove到Home Assistant-使用- XIAO ESP32C3)

本教程的内容大致包括以下步骤。

## 选择您的Home Assistant环境

在这个例程中，我们不会详细说明如何安装Home Assistant环境，我们将假设您已经有一个可用的Home Assistant设备。


如果你想学习如何安装Home Assistant，那么你可以参考[官方教程](https://www.home-assistant.io/installation/)。我们强烈建议您使用x86设备安装Home Assistant，因为这是使用Supervised安装Home Assistant最用户友好的方式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

根据上表，安装**Home Assistant OS**和**Home Assistant Supervised**是最合适的，这将为你省去很多麻烦。如果您在Docker上使用OpenWRT运行Home Assistant(例如使用LinkStar H68K)，请不要担心，我们还将为您提供如何做到这一点的详细参考。


我们也写了如何安装Home Assistant的一些Seeed工作室的产品，请参阅他们。

-[在ODYSSEY-X86上开始使用Home Assistant](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant/)

-[在reTerminal上使用Home Assistant入门](https://wiki.seeedstudio.com/reTerminal_Home_Assistant/)

-[在LinkStar H68K/reRouter CM4上开始使用Home Assistant](https://wiki.seeedstudio.com/h68k-ha-esphome/)

## 在Home Assistant中安装ESPHome


### 第一步.安装ESPHome


- **场景1:在Home Assistant OS下安装ESPHome(带有插件商店)**


如果你安装了Home Assistant操作系统，它有一个插件商店，这使得安装ESPHome容易得多。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>


在插件商店中，你可以搜索并安装ESPHome。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

- **场景2:ESPHome安装在OpenWRT Docker/Docker下的Home Assistant下(没有插件存储)**

由于我们正在安装家庭助手容器，我们不能简单地通过插件商店下载ESPHome服务，因此需要妥协。
我们需要下载ESPHome图像。

```
esphome / esphome:最新
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png" /></div>


在创建容器的页面上，我们需要做一些简单的设置。

—容器名称:容器名称

- Docker镜像:选择刚下载的**esphome**镜像

- 网络:选择**主机**模式

- 环境变量(-e):环境变量

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png" /></div>


一旦您填写了以上内容，保存并申请。您将看到容器已经创建。你还需要启动它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png" /></div>


为了达到在Home Assistant中下载ESPHome的效果，我们需要修改Home Assistant下的配置文件。

到 Home Assistant处理器.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png" /></div>


我们去Home Assistant的终点站

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png" /></div>


在终端输入以下命令。

```sh
vi configuration.yaml
```

将以下内容添加到`configuration.yaml`的末尾。

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

在Home Assistant容器shell中输入``` Exit ```退出docker容器。完成后，我们重新启动Home Assistant容器。

创建一个新的浏览器页面，输入地址`http://homeassistant:8123/` ，并输入您的Home Assistant帐户，您将看到ESPHome出现在左侧的工具栏中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png" /></div>

## 配置XIAO ESP32C3与ESPHome连接

### 步骤 2.硬件准备

我们教程的目标是能够在Home Assistant仪表板中查看24GHz毫米波人体静态存在模块Lite的数据信息。


通过主板连接设备和计算机。接线图如下表所示。

<div class="table-center">
<table align="center">
  <tbody>
    <tr>
      <td colspan="3"><div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">XIAO ESP32C3</td>
      <td align="center" />
      <td align="center">24GHz毫米波人体静态检测<br />存在感模块 Lite</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">D2</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">D3</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
  </tbody></table>
</div>

### 步骤 3.下载传感器库到您的Home Assistant


- **场景1:在Home Assistant OS下安装ESPHome(带有插件商店)**

为了从Home Assistant下载一些文件，我们需要使用终端和SSH服务。


请确保您已启用高级模式。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/81.png" /></div>


然后你可以在插件商店中搜索插件**Terminal & SSH**，请安装它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/82.png" /></div>


安装完成后，您将能够在左手边的工具栏中看到Terminal工具，您可以通过在bash窗口中单击它来访问它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/83.png" /></div>


在终端输入以下命令。

```
cd /config/esphome/
curl -o R24dvd_new.h https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/R24dvd_new.h
```

这样，您就在“Home Assistant”的指定路径下安装了传感器所需的依赖项。


- **场景2:ESPHome安装在OpenWRT Docker/Docker下的Home Assistant下(没有插件存储)**


点击ESPHome容器。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/48.png" /></div>



我们去ESPHome的终点站。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/49.png" /></div>



在终端输入以下命令。

```
curl -o R24dvd_new.h https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/R24dvd_new.h
```

等待片刻，传感器库将被下载到ESPHome容器根目录。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/50.png" /></div>

### 步骤 4.将XIAO ESP32C3和Home Assistant放在同一个局域网中

我相信您的Home Assistant已经完成了进入网络的工作，例如通过网线连接到您的设备。你需要做的就是打开一个本地网络(例如WiFi)，这样XIAO ESP32C3也可以连接到这个网络。
I will use the LinkStar H68K as an example below. My aim is to get the XIAO connected to the LinkStar H68K's hotspot.

在OpenWRT的**Network**选项卡中，选择**Wireless**——> **ADD**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/58.png" /></div>


对于 **Transmit Power** 中的 **Device Configuration**，选择 **auto**.

**Interface Configuration**设置请填写如下说明。

-一般设置

—模式:取决于LinkStar连接互联网的方式。如果你使用的是有线连接，那么选择**Client**，如果你连接的是WiFi，那么选择**Access Point**。

—ESSID:输入您的WiFi名称，请尽量不要使用空格或特殊字符。

-网络:检查**lan**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/23.png" /></div>


- 无线安全

- 加密方式为WPA2-PSK

- Key:输入你想设置的WiFi密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/24.png" /></div>



填完上面的信息后，点击右下角的**Save and Apply**，等待LinkStar打开一个热点。


当没有设备连接到该热点时，显示为无信号。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/60.png" /></div>


考虑到所有因素，让我们回到Home Assistant页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" /></div>


点击**NEW DEVICE**。然后点击**Continue**。



在新弹出的窗口中，请输入您想要设置的应用程序的名称，以及您在LinkStar(或您自己的WiFi)中设置的热点的名称和密码。确保XIAO ESP32C3和Home Assistant在 **same LAN**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/25.png" /></div>


之后点击**Next**.

请在设备类型中选择 **ESP32-C3**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" /></div>

之后点击 **Next**.

<span id="jump1">点击 **Encryption key** 并将其保存在一个安全的位置，我们将在后面的步骤中使用此密钥。</span>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" /></div>

之后点击 **SKIP**。

### 步骤 5.修改配置文件“XIAO ESP32C3”

然后，我们点击刚刚创建的device选项卡，在左下角有**EDIT**按钮。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/28.png" /></div>


请注意，我们需要对这个yaml文件进行更改。我们将需要修改的内容分为两个主要部分，分别对应下图中的1和2。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.png" /></div>


- 在 **①** 内容中，除您已配置的设备名称外，请不要更改设备名称，其余内容请参考下面的代码。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/MR24HPC1_HomeAssistant/blob/main/xiaoesp32c3-mr24hpc1_part1_new.yaml">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

```
# part 1:
esphome:
  name: <your device name>    //Please note that your device name is retained here
  platformio_options:
    board_build.flash_mode: dio
    board_build.mcu: esp32c3
  includes:
  - R24dvd_new.h

esp32:
  board: esp32-c3-devkitm-1
  variant: esp32c3
  framework:
    type: esp-idf

# Enable logging
logger:
  hardware_uart: USB_SERIAL_JTAG
  level: DEBUG
```


- 在 **②**的内容中，删除 "captive_portal:" ，并替换为:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/MR24HPC1_HomeAssistant/blob/main/xiaoesp32c3-mr24hpc1_part2_new.yaml">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

<details>

<summary>点击这里预览完整的代码</summary>

```
uart:
  id: uart_bus
  baud_rate:  115200
  rx_pin: 5
  tx_pin: 4

select:
  - platform: template
    name: "Standard Scene mode"
    id: scene_mode
    icon: mdi:hoop-house
    optimistic: true
    options:
      - "Living room"
      - "Area detection"
      - "Washroom"
      - "Bedroom"
    initial_option: "Living room"
    set_action:
      - logger.log:
            format: "set action option: %s"
            args: ["x.c_str()"]
      - uart.write: !lambda
                  auto index = id(scene_mode).index_of(x);
                  uint8_t value = (uint8_t)index.value() + 1;
                  uint8_t crc = value + 0xB9;
                  return {0x53,0x59,0x05,0x07,0x00,0x01,value,crc,0x54,0x43};

  - platform: template
    name: "Standard unmanned time"
    id: unmanned_time
    icon: mdi:timeline-clock
    optimistic: true
    options:
      - "None"
      - "10s"
      - "30s"
      - "1min"
      - "2min" 
      - "5min" 
      - "10min"
      - "30min"
      - "1hour"
    initial_option: "None"
    set_action:
      - logger.log:
            format: "Chosen option: %s"
            args: ["x.c_str()"]
      - uart.write: !lambda
                  auto index = id(unmanned_time).index_of(x);
                  uint8_t value = (uint8_t)index.value();
                  uint8_t crc = value + 0x37;
                  return {0x53,0x59,0x80,0x0a,0x00,0x01,value,crc,0x54,0x43};
 
  - platform: template
    name: "Custom Presence of perception boundary"
    id: custom_presence_of_perception_boundary
    optimistic: true
    options:
      - "0.5m"
      - "1.0m"
      - "1.5m"
      - "2.0m" 
      - "2.5m" 
      - "3.0m"
      - "3.5m"
      - "4.0m"
      - "4.5m"
      - "5.0m"
    set_action:
      - logger.log:
            format: "Chosen option: %s"
            args: ["x.c_str()"]
      - uart.write: !lambda
                  auto index = id(unmanned_time).index_of(x);
                  uint8_t value = (uint8_t)index.value() + 1;
                  uint8_t crc = value + 0xBF;
                  return {0x53,0x59,0x08,0x0a,0x00,0x01,value,crc,0x54,0x43};
 
  - platform: template
    name: "Custom Motion trigger boundary"
    id: custom_motion_trigger_boundary
    optimistic: true
    options:
      - "0.5m"
      - "1.0m"
      - "1.5m"
      - "2.0m" 
      - "2.5m" 
      - "3.0m"
      - "3.5m"
      - "4.0m"
      - "4.5m"
      - "5.0m"
    set_action:
      - logger.log:
            format: "Chosen option: %s"
            args: ["x.c_str()"]
      - uart.write: !lambda
                  auto index = id(unmanned_time).index_of(x);
                  uint8_t value = (uint8_t)index.value() + 1;
                  uint8_t crc = value + 0xC0;
                  return {0x53,0x59,0x08,0x0b,0x00,0x01,value,crc,0x54,0x43};
 
number:
  - platform: template
    id: sensitivity
    name: "Standard sensitivity"
    icon: mdi:archive-check-outline
    min_value: 0
    max_value: 3
    optimistic: false
    step: 1
    update_interval: 2s
    set_action:
      - uart.write: !lambda
                    uint8_t crc = x + 0xBA;
                    return {0x53,0x59,0x05,0x08,0x00,0x01,(uint8_t)x,crc,0x54,0x43};
 
  - platform: template
    name: "Standard Maximum detectable range of moving target"
    id: moving_target_detection_max_distance
    icon: mdi:map-marker-path
    unit_of_measurement: "cm"
    min_value: 0
    max_value: 65536
    step: 500
    set_action:
      - uart.write: !lambda
                    int h_num = (int)x >> 8;
                    int l_num = (int)x & 0xff;
                    int crc = 0xB6 + h_num + l_num;
                    return {0x53,0x59,0x07,0x01,0x00,0x02,(uint8_t)(h_num),(uint8_t)(l_num),(uint8_t)crc,0x54,0x43};
 
  - platform: template
    name: "Standard Maximum detectable range of stationary target"
    id: static_target_detection_max_distance
    icon: mdi:map-marker-path
    unit_of_measurement: cm
    min_value: 0
    max_value: 65536
    step: 500
    set_action:
      - uart.write: !lambda
                    int h_num = (int)x >> 8;
                    int l_num = (int)x & 0xff;
                    int crc = 0xB9 + h_num + l_num;
                    return {0x53,0x59,0x07,0x04,0x00,0x02,(uint8_t)(h_num),(uint8_t)(l_num),(uint8_t)crc,0x54,0x43};
 
  - platform: template
    name: "Custom Judgment threshold exists"
    id: custom_judgment_threshold_exists
    min_value: 0
    max_value: 250
    step: 1
    set_action:
      - uart.write: !lambda
                    int crc = 0xBD + (int)x;
                    return {0x53,0x59,0x08,0x08,0x00,0x01,(uint8_t)x,(uint8_t)crc,0x54,0x43};
 
  - platform: template
    name: "Custom Motion amplitude trigger threshold"
    id: custom_motion_amplitude_trigger_threshold
    min_value: 0
    max_value: 250
    step: 1
    set_action:
      - uart.write: !lambda
                    int crc = 0xBE + (int)x;
                    return {0x53,0x59,0x08,0x09,0x00,0x01,(uint8_t)x,(uint8_t)crc,0x54,0x43};
 
  - platform: template
    name: "Custom Mode Settings"
    id: custom_mode_settings
    icon: mdi:cog
    min_value: 0
    max_value: 250
    step: 1
    set_action:
      - uart.write: !lambda
                    int crc = 0xBB + (int)x;
                    return {0x53,0x59,0x05,0x09,0x00,0x01,(uint8_t)x,(uint8_t)crc,0x54,0x43};
 
  - platform: template
    name: "Custom Mode Settings End"
    id: custom_mode_setting_completed
    icon: mdi:cog
    min_value: 0
    max_value: 250
    step: 1
    set_action:
      - uart.write: !lambda
                    int crc = 0xBC + (int)x;
                    return {0x53,0x59,0x05,0x0a,0x00,0x01,(uint8_t)x,(uint8_t)crc,0x54,0x43};
 
  - platform: template
    name: "Custom Custom Mode Query"
    icon: mdi:cog
    id: custom_mode_query
    min_value: 0
    max_value: 250
    step: 1
    set_action:
      - uart.write: !lambda
                    int crc = 0x3B + (int)x;
                    return {0x53,0x59,0x05,0x89,0x00,0x01,(uint8_t)x,(uint8_t)crc,0x54,0x43};
 
  - platform: template
    name: "Custom Motion trigger time"
    id: custom_motion_trigger_time
    icon: mdi:camera-timer
    unit_of_measurement: "ms"
    min_value: 0
    max_value: 4294967295
    step: 5000
    set_action:
      - uart.write: !lambda
                    int crc = 0xC4 + (int)x;
                    int h24_num = ((int)x >> 24) & 0xff;
                    int h16_num = ((int)x >> 16) & 0xff;
                    int h8_num = ((int)x >> 8) & 0xff;
                    int l8_num = (int)x & 0xff;
                    return {0x53,0x59,0x08,0x0c,0x00,0x04,(uint8_t)h24_num,(uint8_t)h16_num,(uint8_t)h8_num,(uint8_t)l8_num,(uint8_t)crc,0x54,0x43};
 
  - platform: template
    name: "Custom Movement to rest time"
    id: custom_movement_to_rest_time
    icon: mdi:camera-timer
    unit_of_measurement: "ms"
    min_value: 0
    max_value: 4294967295
    step: 5000
    set_action:
      - uart.write: !lambda
                    int crc = 0xC5 + (int)x;
                    int h24_num = ((int)x >> 24) & 0xff;
                    int h16_num = ((int)x >> 16) & 0xff;
                    int h8_num = ((int)x >> 8) & 0xff;
                    int l8_num = (int)x & 0xff;
                    return {0x53,0x59,0x08,0x0d,0x00,0x04,(uint8_t)h24_num,(uint8_t)h16_num,(uint8_t)h8_num,(uint8_t)l8_num,(uint8_t)crc,0x54,0x43};
 
  - platform: template
    name: "Custom Time of entering unmanned state"
    id: custom_time_of_enter_unmanned
    icon: mdi:camera-timer
    unit_of_measurement: "ms"
    min_value: 0
    max_value: 4294967295
    step: 5000
    set_action:
      - uart.write: !lambda
                    int crc = 0xC6 + (int)x;
                    int h24_num = ((int)x >> 24) & 0xff;
                    int h16_num = ((int)x >> 16) & 0xff;
                    int h8_num = ((int)x >> 8) & 0xff;
                    int l8_num = (int)x & 0xff;
                    return {0x53,0x59,0x08,0x0e,0x00,0x04,(uint8_t)h24_num,(uint8_t)h16_num,(uint8_t)h8_num,(uint8_t)l8_num,(uint8_t)crc,0x54,0x43};
 
text_sensor:
- platform: custom
  lambda: |-
    auto my_custom_sensor = new MyCustomTextSensor();
    App.register_component(my_custom_sensor);
    return {my_custom_sensor->Heartbeat};
 
  text_sensors:
    - name: "Standard Heartbeat"
      icon: mdi:connection
 
- platform: template
  name: "Standard Product model"
  id: product_mode
  icon: mdi:information-outline
  on_raw_value:
    then:
      - logger.log: text_sensor on_raw_value
 
- platform: template
  name: "Standard Product ID"
  id: product_id
  icon: mdi:information-outline
 
- platform: template
  name: "Standard Hardware model"
  id: hardware_model
  icon: mdi:information-outline
 
- platform: template
  name: "Standard Firmware version"
  id: firmware_version
  icon: mdi:information-outline
 
- platform: template
  name: "Standard protocol type"
  id: protocol_type
  icon: mdi:information-outline
 
- platform: template
  name: "Standard moving direction"
  id: keep_away
  icon: mdi:walk
 
- platform: template
  name: "Standard Sports information"
  id: motion_status
  icon: mdi:human-greeting
 
- platform: template
  name: "Standard Presence information"
  id: someoneExists
  icon: "mdi:motion-sensor"
 
- platform: template
  name: "Custom Presence of detection"
  id: custom_presence_of_detection
  icon: mdi:signal-distance-variant
 
# - platform: template
#   name: "Custom Motion distance"
#   id: custom_motion_distance
 
# - platform: template
#   name: "Custom Static distance"
#   id: custom_static_distance
 
# - platform: template
#   name: "Custom Spatial static value"
#   id: custom_spatial_static_value
 
# - platform: template
#   name: "Custom Spatial motion value"
#   id: custom_spatial_motion_value
 
# - platform: template
#   name: "Custom Motion speed"
#   id: custom_motion_speed
 
 
button:
  - platform: template
    name: "Standard reset"
    id: "reset"
    icon: mdi:reload
    on_press:
      then:
        - logger.log: Button Pressed
        - uart.write: [0x53,0x59,0x01,0x02,0x00,0x01,0x0F,0xBF,0x54,0x43]
 
switch:
  - platform: template
    id: output_info_switch
    name: "Custom Infor output switch"
    icon: mdi:electric-switch
    assumed_state: true
    turn_on_action:
      - uart.write: [0x53,0x59,0x08,0x00,0x00,0x01,0x01,0xB6,0x54,0x43]
      - delay: 1s
      - lambda: !lambda |-
          id(product_mode).publish_state("");
          id(product_id).publish_state("");
          id(hardware_model).publish_state("");
          id(firmware_version).publish_state("");
          id(protocol_type).publish_state("");
    turn_off_action:
      - uart.write: [0x53,0x59,0x08,0x00,0x00,0x01,0x00,0xB5,0x54,0x43]

sensor:
- platform: custom
  lambda: |-
    auto my_custom_sensor = new UartReadLineSensor(id(uart_bus));
    App.register_component(my_custom_sensor);
    return {
      my_custom_sensor->movementSigns,
      my_custom_sensor->inited,
    };
  sensors:
    - name: "Standard body movement"
      id: movementSigns
      icon: "mdi:human-greeting-variant"
      device_class: "temperature"
      state_class: "measurement"

    - name: "Standard inited"
      id: inited
      icon: mdi:all-inclusive
 
- platform: template
  name: "Custom Motion distance"
  id: custom_motion_distance
  icon: mdi:signal-distance-variant
  on_value:
    then:
      # - logger.log: Custom Motion distance on_value
      - logger.log:
            format: "Custom Motion distance on_value : %d"
            args: ["x"]
  on_raw_value:
    then:
      - logger.log:
            format: "Custom Motion distance on_raw_value : %d"
            args: ["x"]
 
 
- platform: template
  name: "Custom Static distance"
  id: custom_static_distance
  icon: mdi:signal-distance-variant

- platform: template
  name: "Custom Spatial static value"
  id: custom_spatial_static_value
  icon: mdi:counter

- platform: template
  name: "Custom Spatial motion value"
  id: custom_spatial_motion_value
  icon: mdi:counter

- platform: template
  name: "Custom Motion speed"
  id: custom_motion_speed
  icon: mdi:run-fast
```

</details>


然后，点击右上角的**Save** 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/63.png" /></div>

### 步骤 6.上传固件到XIAO ESP32C3

- **方法一:直接编译上传**

如果您使用的是x86设备，并且可以在设备端口上看到XIAO，那么您可以将程序编译并上传到XIAO。

将XIAO连接到你的设备上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ESPHome/49.png" style={{width:700, height:'auto'}}/></div>


点击设备栏右下角的三个点并选择 **Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/84.png" /></div>


点击 **Plug into the computer running ESPHome Dashboard**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/85.png" /></div>


选择连接的端口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>

现在它将下载所有必要的板包，并将ESPHome固件flash到XIAO ESP32C3。如果闪烁成功，您将看到以下输出。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>

如果在将XIAO连接到设备后找不到端口，那么可以尝试使用第二种方法。

- **方法二:通过主机上传编译好的固件**

LinkStar H68K等软路由不支持外部MCU设备识别，需要先下载编译好的固件，再通过另一台PC上传固件。


点击右上角的**Install**按钮。然后选择最后一个项目**Manual download**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png" /></div>


选择**Modern format**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" /></div>

下载和编译需要很长时间，所以请耐心等待。一旦一切准备就绪，固件将自动下载到您的计算机。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png" /></div>

要上传固件到XIAO ESP32C3，这里有两个选项，我们展示两种方法:


- 方式一:使用[ESPhome Web工具](https://web.esphome.io/?dashboard_install)上传。


确保你安装了正确的驱动程序。下面是ESP设备常用芯片的驱动。


1. CP2102驱动程序:[Windows和Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)


2. CH342, CH343, CH9102的驱动程序:[windows](https://www.wch.cn/downloads/CH343SER_ZIP.html)， [Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)


3. CH340, CH341驱动程序:[windows](https://www.wch.cn/downloads/CH341SER_ZIP.html)， [Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)



点击 **CONNECT**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

在弹出的窗口中选择“XIAO ESP32”串口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

C点击**INSTALL**，然后选择从上述步骤中下载的`.bin`文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>


- 选项2:使用[esphome-flasher工具](https://github.com/esphome/esphome-flasher)。


如果在安装驱动程序和更换浏览器后，仍然无法使用方法一上传固件，那么可以尝试使用方法二。具体的安装方法和说明请参考官方教程。
:::提示
如果您想观察该软件的日志消息，也可以通过该软件的 View Logs按钮查看。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

上传完成后，您可以断开XIAO ESP32C3与PC机的连接(除非您需要查看日志)，并单独打开XIAO。


如果一切顺利，XIAO ESP32C3将搜索并连接到您为它设置的WiFi。


就像我一样，我使用LinkStar H68K的网络。您可以在网络选项中找到它，并看到LinkStar H68K分配给它的IP地址。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png" /></div>

通常情况下，在Home Assistant这个时候，设备的状态也会从离线变为在线。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/65.png" /></div>

## 配置 Home Assistant 面板

### 步骤 7/连接到XIAO ESP32C3

如果您的局域网中没有太多的Home Assistant设备，Home Assistant可以自动搜索并添加您的ESP设备到“设备”页签。你可以在**Settings**的**Devices & Services**选项卡中看到该设备。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png" /></div>

如果没有自动搜索，也可以根据IP地址连接到XIAO ESP32C3

点击**ADD integration **并搜索**esphome**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png" /></div>

输入XIAO ESP32C3的IP地址，端口号为**6053**。然后点击**SUBMIT**..

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png" /></div>

如果输入的IP地址和端口号是正确的，那么你会看到系统要求你输入我们在[step 4](#jump1)中要求保存的加密密钥。


然后点击**SUBMIT**。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png" /></div>

在这一点上，成功完成了添加设备的步骤。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/51.png" /></div>

### 步骤 8.4GHz毫米波模块Lite功能概述


我们来到Home Assistant的概述选项卡。我们对操作面板的基本功能进行了概述。


首先，有一个**自定义信息输出开关**。左侧图标表示关闭信息输出，右侧图标表示打开信息输出。如果你想实时看到传感器返回的信息，那么你应该点击右边的闪电图标。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/69.png" /></div>

卡片的底部是一个实时数据显示页面。在这里，您可以观察到毫米波在监测环境中的变化，并根据您的位置调整卡片中的参数。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/70.png" /></div>

由于篇幅限制，您可以参考以下两个文档，以了解更多关于传感器的使用信息和更详细的参数解释。

- [24GHz毫米波人体静态存在模块Lite Wiki](https://wiki.seeedstudio.com/Radar_MR24HPC1/)

- [24GHz毫米波人体静态存在模块Lite用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_User_Manual.pdf)

- [24GHz毫米波人体静态存在模块Lite传感器Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)


### 步骤 9.配置Home Assistant面板


如果你发现默认的卡片对展示数据非常无聊和不友好，Home Assistant提供了大量现成的仪表盘可供选择。


您可以根据自己的喜好制作仪表盘。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/73.png" /></div>

例如，控制信息输出的选项变成了一个漂亮的开关。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/74.png" /></div>

将人类移动的速度转化为可视化的仪表板显示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/75.png" /></div>

这是我想到的。看起来它具备智能家居控制中心的条件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/76.png" /></div>

到目前为止，我们已经成功地结束了教程内容。


## 使用XIAO ESP32C3将Grove连接到Home Assistant


当然，除了支持Home Assistant中的24GHz毫米波人体静态存在模块Lite外，还有更多的功能，您可以在此文档中找到更多教程供自己使用。


- [使用XIAO ESP32C3连接Grove到Home Assistant](https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/)


让你的创造力流动起来!
## 故障排除

> A:如果上传过程中出现此提示，请断开XIAO ESP32C3与PC的连接。然后，按住BOOT按钮，在按住BOOT按钮的同时将单板连接到PC，然后释放它进入bootloader模式。此时，重新连接并上传固件就足够了。
### FAQ1:我使用ESPhome Web工具上传固件时出现以下错误，如何修复?
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png" /></div>

> A:如果上传过程中出现此提示，请断开XIAO ESP32C3与PC的连接。然后，按住BOOT按钮，在按住BOOT按钮的同时将单板连接到PC，然后释放它进入bootloader模式。此时，重新连接并上传固件就足够了。

### FAQ 2:我不能在Linux下安装esphome flasher教程?

> A:执行以下命令时，需要选择系统版本，否则会报错。例如，我的计算机是Ubuntu 22.04，那么应该执行的命令如下所示。

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

###常见问题3:我已经输入了正确的WiFi和密码，为什么我看不到XIAO ESP32C3的IP地址?

A：当您遇到这个问题时，请检查XIAO ESP32C3的天线是否已连接到位。如果天线已经连接，请确保XIAO与LinkStar的距离尽可能不超过3米（除非您已经用更强大的天线替换了原天线）。

这里是对这个段落的内容进行解释和翻译。主要讲述的是关于XIAO ESP32C3设备天线连接的问题，以及如何解决这个问题的一些建议。
如果仍然看不到XIAO，可以使用esphome flasher软件查看XIAO日志信息，通过日志查看XIAO连接情况。
您可以重新插上小插口，让它尝试搜索WiFi并重新连接。

### FAQ 4:我的XIAO ESP32C3连接到网络了，但为什么我没有看到传感器数据刷新?

:::提醒
截至2023年6月1日，故障排除显示，如果您设置任何值或更改ESPHome仪表板中的任何场景，雷达有可能会下降。

截至2023年7月31日，之前导致雷达完全死亡的问题现在已经修复，所以请更新这个教程物种的库文件和配置器以正常工作。
:::

A:在之前的维基内容中，我们使用默认的UART pin (D6, D7)接收和发送来自雷达的数据，但许多用户反馈说，需要重新电源雷达才能工作。为此，我们**更新了Wiki**内容和程序，将雷达的串口替换为**D2和D3**，经过测试，很好地解决了这个问题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" style={{width:600, height:'auto'}}/></div>

> **如果您还没有注意到Wiki的更新，我建议您重新连接雷达并按照本文教程的[步骤2和5](#configure-the- xiaesp32c3 -and-esphome-connection)重新编写编译和上传过程。**

>然而，一些用户回应说，即使更换了串口引脚，他们仍然不能使雷达正常工作。所以在这里，我们提出以下方法和步骤，检查问题发生在哪里，如果您仍然无法解决雷达工作的问题，**请将您的操作步骤提供给技术支持邮箱**，这样可以加快售后问题的处理。

**请按顺序检查以下排除项**

> **排除1:确保XIAO ESP32C3与部署了ESPHome的设备在同一局域网下。**
> 如果XIAO ESP32C3与ESPHome设备不在同一局域网中，则在Home Assistant中看到的日志信息不完整，不能作为数据收集的依据。所以请再检查一下你的路由器，看看有没有XIAO的IP地址。
> **排除2:检查数据实时传输按钮是否打开。**

> 在网络上安装了XIAO并且成功添加了设备之后，您将能够在仪表板中看到雷达组件。请注意，实时数据传输按钮在默认情况下是关闭的，您需要打开它才能看到不断报告的雷达数据。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/69.png" /></div>

> **排除3:检查雷达是否正常工作。**

> 首先，我们需要确保雷达与XIAO ESP32C3很好地工作，这将允许我们快速识别是ESPHome还是产品的问题。请将以下代码上传至Arduino IDE中的XIAO ESP32C3，请注意雷达的**RX/TX引脚要连接到XIAO**的D2/D3

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, 4, 5);
  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

> 打开串口监视器，并设置波特率为115200，如果雷达工作正常，那么您应该看到许多数字打印出来。

> 如果在执行此步骤后没有看到任何数据输出，请根据Wiki重新刷新雷达固件。我们为您提供两种升级固件的方式:[固件版本更新](https://wiki.seeedstudio.com/Radar_MR24HPC1/#firmware-version-updates)。
> 如果您在更新固件后仍然没有听到任何消息，请不要吝啬，直接联系我们的技术支持团队。告诉他们你已经做了什么。
> **排除4:XIAO、雷达在上述检查点工作正常，更换串口引脚后，仍无法获取雷达实时数据。**

> 如果您已经将雷达的RX和TX引脚更换为D2/D3，并根据以上内容进行了仔细的故障排除，仍然无法获得实时数据消息，请联系我们的技术支持团队。在此之前，**请让我们知道雷达在Arduino环境下是否正常工作**以便我们分析和处理问题。

<!-- > A: When we encounter this problem, we need to use the logs to understand the exact reason why the sensor is not returning data. The situation that has been found to be likely to be encountered so far is a situation where the sensor is not responding, then its logs will look like this.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/71.png" /></div>

> If you see a similar log, please double check the following three places.
> 1. Whether the sensor is supplied with 5V.
> 2. Are the RX and TX pins of the sensor connected correctly.
> 3. Disconnect only the 5V wire from the sensor to the XIAO and reconnect it to allow the sensor to be powered up again.

> Generally speaking, the third point solves this problem. A normal log flow for data transfer should look like this.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/72.png" /></div> -->

## FAQ5:我使用了Jlink flash固件，但是我得到了错误“Programming of range @address 0x08000000 failed (block verification error) Program failed failed to Program and verify target”?

当您使用Jlink flash固件时，如果发生此错误，那么您可能处于以下任何一种情况。
1. 你的传感器不再正常工作，你不能从它接收任何信息。

2. 您正在尝试使用无效或不正确的固件。
:::提醒
最初工作正常，请再次检查您正在使用正确的固件!所使用的固件因雷达和传感器模型而异!而且通过UART升级固件和通过Jlink升级固件是不一样的!请停止执行以下步骤。
:::

<details>

<summary><strong>我已经确认我的产品在发生异常时得到这个错误信息</strong></summary>

如果你的雷达根本不工作，那么有这个错误信息可能是正常的。

由于雷达运行不正常，已经允许雷达触发读写保护机制，一般不允许用户对产品进行flash编程，所以需要解锁雷达的读写保护机制。

由于不保护读写的高风险，我们在这里没有向公众公开不保护读写的方法，我们将把该方法放在[zip文件这里](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/ArteryICPProgrammer_V2.4.23.zip)中，以供需要的人使用。一旦异常雷达未受保护，可以再次更新固件以恢复正常运行。

</details>





## 技术支持和产品讨论



非常感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您在使用我们产品的过程中获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


