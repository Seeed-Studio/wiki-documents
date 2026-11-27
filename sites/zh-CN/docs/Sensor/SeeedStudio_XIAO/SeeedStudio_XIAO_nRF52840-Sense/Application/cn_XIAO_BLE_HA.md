---
description: 在 Seeed Studio XIAO nRF52840 Sense 上用于 Home Assistant 的 BTHome 协议
title: 使用 XIAO nRF52840 Sense 的 BTHome 协议（CircuitPython）
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO_BLE_HA
last_update:
  date: 09/18/2023
  author: Bruno Santos (Feiticeir0)
createdAt: '2023-09-17'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/cn/XIAO_BLE_HA/
---

# 项目概述

在本教程中，我们将展示如何使用 Seeed Studio XIAO nRF52840 的 Bluetooth 5.0 BLE 功能，配合 Seeed Studio Grove 温湿度传感器（DHT20），通过 BTHome 协议将温度和湿度测量值广播到 Home Assistant。

我们将使用 **CircuitPython** 来编写代码。

## 入门指南

要跟随本教程，你需要以下硬件

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
        <th>Seeed Studio Grove Temperature&Humidity Sensor V2.0 (DHT20)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 硬件准备

Grove DHT20 传感器使用 I2C 进行通信。我们需要将它连接到 XIAO nRF52840 Sense 的 I2C 引脚：

- 我们可以使用带通用 4 针无扣电缆的 XIAO Grove Shield
- 使用 4 针母头跳线转 Grove 4 针转换线，将 DHT20 传感器直接连接到 XIAO nRF52840 Sense

#### 以下是 XIAO nRF52840 Sense 和 XIAO Grove Shield 的引脚分布

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_nRF52840_pinout.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_shield_Pinout.png" alt="pir" width={600} height="auto" /></p>

### 硬件连接

接线非常简单。无论是否使用 Shield，下图中的 Fritzing 原理图都展示了如何将各个元件连接在一起。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_Shield_wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/Simple_Wiring.jpg" alt="Wiring" width={600} height="auto" /></p>

## 软件准备

我们将使用 Thonny IDE 软件（Linux）以及一些相关的库和文件。我们将按照以下步骤进行：

1. 在 XIAO nRF52840 Sense 上安装 CircuitPython
2. 安装必要的库
3. 使用 BTHome 协议为我们的传感器编写代码
4. 配置 Home Assistant

### 步骤 1 - 安装 CircuitPython

现在来安装 CircuitPython。

访问 <a  href="https://circuitpython.org/" target="_blank"><span>CircuitPython</span></a>，并下载适用于 XIAO nRF52840 Sense 的版本。
选择 Downloads，在搜索框中开始输入 XIAO nRF52840，直到结果中显示该开发板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython1.png" alt="CircuitPython Download" width={600} height="auto" /></p>

接下来，按下下载按钮以获取适用于我们设备的文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython2.png" alt="CircuitPython Download" width="{600}" height="auto" /></p>

你应该会得到一个 .uf2 文件。要安装它，我们需要进入 bootloader 模式。将 XIAO nRF52840 Sense 连接到电脑，然后快速按两次复位按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/functional2b.jpg" alt="CircuitPython Download" width={600} height="auto" /></p>

此时，你的电脑上应该会出现一个名为 XIAO-SENSE 的新驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython3.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

接下来，将刚刚下载的文件复制到该驱动器中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython4.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

过一会儿，会出现一个名为 CIRCUITPY 的新驱动器。此时我们已经在微控制器上安装好了 CircuitPython。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython5.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### 步骤 2 - 安装库

要使用我们的 Grove 温湿度传感器 V2.0（DHT20），我们需要 <a  href="https://learn.adafruit.com/adafruit-aht20/python-circuitpython" target="_blank"><span> Adafruit 的 AHT20 库</span></a>。

上述网站中包含了如何安装库的说明。

安装完成后，我们应该拥有以下文件（这些是 DHT20 传感器所需的文件）：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython6.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### 步骤 3 - 上传代码

在编写代码之前，我们需要先了解什么是 BTHome。

<p style={{textAlign: 'center'}}><img src="https://bthome.io/images/logo.png" alt="BTHome logo" width="25%" height="auto" /></p>

#### BTHome

BTHome 是一个用于通过 Bluetooth Low Energy（BLE）广播传感器数据和按键事件的开放标准。它被设计为节能、灵活且安全。BTHome 被包括 Home Assistant 在内的流行家庭自动化平台原生支持。

BTHome 的一些优点：

- 它是一个开放标准，因此来自不同厂商的设备可以协同工作。
- 设备被设计为节能，因此可以在一块电池上长时间运行。
- 数据经过加密，因此可以防止未授权访问。
- 它是一个灵活的格式，因此可以用于传输多种传感器数据和按键事件。

BTHome 是一个多功能且强大的标准，用于通过 BLE 广播传感器数据和按键事件。对于任何想要在智能家居中添加传感器数据和按键事件的人来说，它都是一个不错的选择。

你可以在 <a  href="https://bthome.io/" target="_blank"><span>官方网站</span></a>上阅读更多内容，并了解其数据格式。

#### 代码

下面是 CircuitPython 代码。

<details>
<summary>点击以复制 CircuitPython 代码</summary>

```python
# BTHome with DHT20
# This code is based on the excelent code by Koen Vervloesem
# https://github.com/koenvervloesem/BTHome-Inertial-Sensor-in-CircuitPython
# We don't use deep sleep because it just doesn't work
# on the XIAO nRF52840 Sense. It's a pitty. 

from _bleio import adapter
from time import sleep
import board
# for the Grove sensor
import adafruit_ahtx0


# The size of the name is important. 
DEVICE_NAME = "XIAO nRF52840 Sense"
INTERVAL = 0.1

# Because this is delaying just 0.1s - 100 milliseconds, we don't need to read the sensor
# values everytime. It's overkill - let's just read every 5 minutes. 
# Let's create a timer that will add every INTERVAL
# when it reaches 30 - it will be 5 minutes passed
# then we read the sensor
# INTERVAL * 60 seconds * 5 minutes
# CONVERTING 0.1ms to seconds * 60s * minutes = 300
MINUTES_PER_READING = 5
readTimer = INTERVAL * 10 * 60 * MINUTES_PER_READING


# convert the measurement value to the BTHome format
def value_to_little_endian (measurement):

    # Calculate the integer value by dividing the temperature by the factor
    integer_value = int(measurement / 0.01)

    # Extract the lower and upper bytes for little-endian representation
    lower_byte = integer_value & 0xFF
    upper_byte = (integer_value >> 8) & 0xFF

    # Reverse the order of the bytes
    little_endian_bytes = bytes([upper_byte, lower_byte])
    return little_endian_bytes

class BTHomeAdvertisement:
    _ADV_FLAGS = [0x02, 0x01, 0x06]
    _ADV_SVC_DATA = [0x0a, 0x16, 0xd2, 0xfc, 0x40, 0x02, 0x00, 0x00, 0x03, 0xbf, 0x13]    

    def _name2adv(self, local_name):
        adv_element = bytearray([len(local_name) + 1, 0x09])
        adv_element.extend(bytes(local_name, "utf-8"))
        return adv_element

    def __init__(self, local_name=None):
        if local_name:
            self.adv_local_name = self._name2adv(local_name)
        else:
            self.adv_local_name = self._name2adv(adapter.name)

    def adv_data(self, temperature, humidity):
        adv_data = bytearray(self._ADV_FLAGS)
        adv_svc_data = bytearray(self._ADV_SVC_DATA)
        # temperature
        # change values according - 
        temp = value_to_little_endian (temperature)
        # returned value is list
        adv_svc_data[6] = temp[1]
        adv_svc_data[7]= temp[0]
        # humidity
        # change values according - 
        hum = value_to_little_endian (humidity)
        # returned value is list
        adv_svc_data[9] = hum[1]
        adv_svc_data[10]= hum[0]
        adv_data.extend(adv_svc_data)
        adv_data.extend(self.adv_local_name)
        return adv_data


# BTHome
bthome = BTHomeAdvertisement(DEVICE_NAME)

# Create sensor object
sensor = adafruit_ahtx0.AHTx0(board.I2C())

# because we want a initial reading
# let's initialize with the readTimer variable
# so we force the script to read the values
currentTimer = 0
# inital reading
temp = sensor.temperature
hum = sensor.relative_humidity

#DEBUG
#print("\nTemperature: %0.1f C" % temp)
#print("Humidity: %0.1f %%" % hum)

while True:
    adv_data = bthome.adv_data(temp,hum)
    adapter.start_advertising(
        adv_data, scan_response=None, connectable=False, interval=INTERVAL * 2
    )
    sleep(INTERVAL)
    adapter.stop_advertising()
    # increase currentTimer
    currentTimer += INTERVAL
    #print (f"Current timer: {currentTimer}")
    if (currentTimer >= readTimer):
        #print (f'Read new values')
        # Read new values
        temp = sensor.temperature
        hum = sensor.relative_humidity
        #reset counter
        currentTimer = 0


```

</details>

记得将其保存为 `code.py`，这样它会在启动时自动执行。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" alt="BTHome logo" width="500" height="auto" /></p>

#### 一点代码说明

- 代码中包含了大量注释，用来稍微解释一下其工作原理。
- 基本上，它每 0.2 秒会广播一次来自 DHT20 传感器的温度和湿度。
- 因为我们不希望给传感器太大压力、每 0.2 秒就读取一次数值，所以加入了一个定时器。它只会每 5 分钟读取一次数值。这个时间由 `MINUTES_PER_READING` 变量控制。

### 步骤 4 - 在 Home Assistant 上显示数据

#### 步骤 4.1 - 在 Home Assistant 中添加 XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/home-assistant-icon-flat.png" alt="Home Assistant Logo" width="15%" height="auto" /></p>

Home Assistant 是一款免费且开源的家庭自动化软件。它被设计为智能家居设备的中央控制系统，重点关注本地控制和隐私。

Home Assistant 作为中央智能家居控制中心，通过将不同的设备和服务集中在一个地方，并将它们集成为实体来工作。其提供的基于规则的自动化系统允许基于触发事件、条件和动作（包括脚本）创建自定义例程。这些功能可以实现楼宇自动化、安全报警和视频监控的报警管理，以及对能耗测量设备的监控。

你可以在<a  href="https://www.home-assistant.io/" target="_blank"><span>官方网站</span></a>上阅读更多相关内容。

#### 要求

一个关键要求是 HA（Home Assistant）**必须具备 Bluetooth 功能**。如果你在 Raspberry PI 上运行 HA，很有可能已经具备。这完全取决于 RPi 的版本。

#### 配置

在“步骤 3 - 上传代码”中，我们已经为 XIAO nRF52840 编写了代码，在接下来的步骤中，它必须处于运行状态，这样 HA 才能检测到它。

打开你的 HA 安装。前往 Settings -> Devices and Services
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/0_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
现在会显示 Integrations 页面。选择 Bluetooth
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/1_HA.png" alt="Home Assistant" width="90%" height="auto" /></p>

然后该 Integration 应该会出现。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/2_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

<b>注意：</b>如果有任何问题，请检查 Passive scanning 是否<b>未被选中</b>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/3_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

进入 Integrations 页面时，如果你已经连接了 XIAO nRF52840 Sense，它应该已经被检测到并显示在页面上。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/5_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

按下“Configure”来配置这个新的 Integration。然后点击 Submit。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/6_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

现在你只需要选择放置这个新传感器的区域，就完成了。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/7_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

接下来，再次前往 Settings -> Integrations，并选择新的 BTHome integration
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/10_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
然后我们会进入该 integration 页面。可以看到我们有 1 个设备和 3 个实体。
这些实体分别是温度、湿度和信号强度。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/11_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
如果点击这些实体，我们会进入一个新页面，在那里可以查看它们的整体情况。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/12_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

如果相反，我们点击的是 device，则会进入设备页面，在那里可以看到所有选项以及当前数值。通过这个页面，我们可以将其添加到仪表盘。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/13_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
点击“ADD to DASHBOARD”，我们可以选择要将其放入的视图。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/14_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

之后，我们会看到该卡片的预览。只需点击“ADD TO DASHBOARD”即可将其添加到仪表盘。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/15_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

如果我们前往仪表盘，就能看到新添加的卡片，其中显示了由 XIAO nRF52840 Sense 广播的温度和湿度。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/17_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

## 更多内容 - 深度睡眠功能

我没能让它正常工作。如果有人有解决方案，请留下评论。你可以在 [GitHub](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) 分享你的想法。

## ✨ 贡献者项目

- 本项目由 Seeed Studio 的 [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 感谢 [Bruno 的付出](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)，你的作品将会被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
