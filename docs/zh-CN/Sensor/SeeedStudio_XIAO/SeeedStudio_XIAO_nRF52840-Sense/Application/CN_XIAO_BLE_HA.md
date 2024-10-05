---
description: BTHome Protocol for Home Assistant usage on Seeed Studio XIAO nRF52840 Sense
title: Home Assistant 应用（BTHome）
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO_BLE_HA
last_update:
  date: 10/18/2023
  author: 赵桂莹
---

# 使用 XIAO nRF52840 连接 BTHome 给 Home Assistant 发送数据

在这个wiki中，我们将展示如何使用Seeed Studio XIAO nRF52840的蓝牙5.0 BLE功能与Seeed Studio Grove温湿度传感器(DHT20)，使用bhome协议向Home Assistant广播温度和湿度的测量值。 

我们将使用**CircuitPython**编写代码。

## 开始

要学习本教程，您需要以下硬件

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 硬件准备

Grove DHT20传感器使用I2C进行通信。我们需要将其连接到XIAO nRF52840 Sense的I2C引脚上:

- 我们可以使用带有通用 Universal 4 pin Unbuckled cable（4针无扣电缆）的 XIAO Grove Shield
- 使用 4 pin Female Jumpe（ 4 针母跳线）至 Grove 4 针转换电缆将 DHT20 传感器直接连接至 XIAO nRF52840 Sense

#### 这是 XIAO nRF52840 Sense 和 XIAO Grove Shield 的引脚排列

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_nRF52840_pinout.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_shield_Pinout.png" alt="pir" width={600} height="auto" /></p>

### 硬件类型

接线很简单。无论是否使用Shield，以下 Fritzing（图形化Arduino电路开发软件）示意图显示了如何将组件连接在一起。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_Shield_wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/Simple_Wiring.jpg" alt="Wiring" width={600} height="auto" /></p>

## 软件准备


 我们将使用Thonny IDEE软件(Linux)和一些相关的库和文件。下面是我们要采取的步骤: 

1. 在XIAO nRF52840 Sense上安装CircuitPython 
2. 安装必要的库 
3. 使用bhome协议编码我们的传感器 
4. 配置家庭助手

### 步骤1 — 安装CircuitPython

下面安装CircuitPython

转到 <a  href="https://circuitpython.org/" target="_blank"><span>CircuitPython</span></a> 下载一个版本的XIAO nRF52840 Sense
选择下载并在搜索字段中开始编写XIAO nRF52840，直到结果显示传感器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython1.png" alt="CircuitPython Download" width={600} height="auto" /></p>

接下来，按下下载按钮以获取我们设备的文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython2.png" alt="CircuitPython Download" width="{600}" height="auto" /></p>

你应该有一个a .uf2 文件。要安装它，我们需要进入bootloader模式。将XIAO nRF52840连接到计算机，按两次复位按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/functional2b.jpg" alt="CircuitPython Download" width={600} height="auto" /></p>

您的计算机上应该出现了一个名为xiaosense的新驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython3.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

接下来，将下载的文件复制到驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython4.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

过了一会儿，出现了一个名为CIRCUITPY的新驱动器。我们在微控制器上安装了CircuitPython。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython5.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### 步骤2 — 安装库

要使用我们的Grove温湿度传感器V2.0 (DHT20)，我们需要 <a  href="https://learn.adafruit.com/adafruit-aht20/python-circuitpython" target="_blank"><span> Adafruit's AHT20 library</span></a>.

上一个网站有如何安装库的说明。

安装后，我们应该有以下文件(这是我们的DHT20传感器所需的文件):
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython6.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### 步骤3 — 上传代码

在编写代码之前，我们需要了解 BTHome是什么。

<p style={{textAlign: 'center'}}><img src="https://bthome.io/images/logo.png" alt="BTHome logo" width="25%" height="auto" /></p>

#### BTHome

BTHome是一个通过低功耗蓝牙(BLE)广播传感器数据和按键的开放标准。它的设计目标是节能、灵活和安全。BTHome由流行的家庭自动化平台支持，如Home Assistant，开箱即用。

BTHome的一些好处:

- 是一个开放的标准，因此来自不同制造商的设备可以一起工作。
- 设备被设计成节能的，所以它们可以在一个电池上运行很长时间。
- 数据是加密的，因此可以防止未经授权的访问。
- 是一种灵活的格式，因此它可以用来传输各种传感器数据和按键。

BTHome 是一个通用而强大的标准，用于广播传感器数据和在BLE上按下按钮。对于任何想要添加传感器数据和按钮到他们的智能家居的人来说，这是一个很好的选择。 

您可以在 <a  href="https://bthome.io/" target="_blank"><span>official site</span></a>上阅读有关它的更多信息并了解有关数据格式的信息

#### 代码

下面是CircuitPython代码。

<details>
<summary>单击此处复制CircuitPython代码</summary>


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

记住将它保存为`code.py`，以便在启动时执行。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" alt="BTHome logo" width="500" height="auto" /></p>

#### 一些代码解释

- 为了稍微解释一下代码，代码中充满了注释。
- 基本上，每0.2s它就会广播来自DHT20传感器的温度和湿度。
- 因为我们不想让传感器过载并每0.2s读取一次值，所以我们放置了一个计时器。它只会每5分钟读取一次值。这个时间由`MINUTES_PER_READING`变量控制。

### 步骤4 — 在家庭助理上显示数据

#### 步骤4.1 -在家庭助手上添加XIAO nRF52840 Sense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/home-assistant-icon-flat.png" alt="Home Assistant Logo" width="15%" height="auto" /></p>

Home Assistant是一个免费和开源的家庭自动化软件。它旨在成为智能家居设备的中央控制系统，重点是本地控制和隐私保护。 

Home Assistant通过将不同的设备和服务组合在一个地方并将它们作为实体集成，充当一个中央智能家居控制器枢纽。提供的基于规则的自动化系统允许基于触发事件、条件和动作(包括脚本)创建自定义例程。这些设备可以实现楼宇自动化、安全警报管理和家庭安全系统的视频监控，以及能源测量设备的监控。 

你可以在 <a  href="https://www.home-assistant.io/" target="_blank"><span>official site</span></a>上了解更多.

#### 要求

一个关键的要求是HA (Home Assistant) **具有蓝牙**。如果您在树莓派上运行HA，那么机会是有的。所有这些都依赖于RPi版本。

#### 配置 

在“步骤3 — 上传代码”中，我们编码了XIAO nRF52840，为了下一步，它必须运行，以便HA可以检测它。 

打开HA安装。进入Settings -> Devices and Services

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/0_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
现在，您的集成页面出现了。选择蓝牙
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/1_HA.png" alt="Home Assistant" width="90%" height="auto" /></p>

 Integration应该出现了。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/2_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

<b>注:</b>如果有什么不工作，请检查是否 Passive scanning  <b>未被选择</b>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/3_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

当进入集成页面时，如果您已经连接了XIAO nRF52840 Sense，则应该已经检测到它并将出现在页面上。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/5_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

点击“Configure”来配置这个新的集成。选择Submit。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/6_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

现在你只需要选择放置新传感器的区域就可以了。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/7_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

接下来，再次转到 -> Integrations 并选择新的 BTHome integration 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/10_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
然后我们进入集成页面。我们可以看到我们有1个device （设备）和3个entities（实体）。 
这些entities是temperature, humidity and signal strength（温度、湿度和信号强度）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/11_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
如果我们点击这些entities，我们会得到一个新的页面，在那里我们可以看到所有的entities。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/12_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

相反，如果我们按下device，我们会得到设备页面，其中包含所有选项以及当前值。使用这个页面，我们可以将其添加到dashboard（控制面板）。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/13_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
通过点击“ADD to DASHBOARD”，我们可以选择将其放在视图的位置。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/14_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

之后，我们得到一个视图。只需按“ADD TO DASHBOARD”将其添加到dashboard（控制面板）。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/15_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

如果我们进入dashboard（控制面板），我们新添加的卡上会显示由 XIAO nRF52840 Sense 广播的温度和湿度。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/17_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

## 更重要的是-深度睡眠功能

我不能让它工作。如果有人有解决方案，请留下评论。你可以在[GitHub](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)分享你的想法。


## 技术支持和产品讨论

感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
