---
description: Grove - 温湿度传感器 (DHT11)
title: Grove - 温湿度传感器 (DHT11)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-TemperatureAndHumidity_Sensor
last_update:
  date: 12/29/2025
  author: Brandy
---


# Grove - 温湿度传感器 (DHT11)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" /></div>

这款温湿度传感器提供预校准的数字输出。独特的电容式传感器元件测量相对湿度，温度通过负温度系数 (NTC) 热敏电阻测量。它具有出色的可靠性和长期稳定性。请注意，此传感器不适用于 0 度以下的温度。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 可升级为工业级传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和坚固性的 S2101 无线温湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。试试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，助力您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 空气温湿度传感器</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特性

--------

- 相对湿度和温度测量
- 全范围温度补偿校准
- 数字信号
- 长期稳定性
- 长传输距离（>20m）
- 低功耗

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 应用场景

------------------

- 消费产品
- 气象站
- 湿度调节器
- 空调

## 规格参数

--------------

### 关键规格

| 项目         |   最小值               |
|--------------|------------------------|
| PCB 尺寸     | 2.0cm*4.0cm            |
| 接口         | 2.0mm 间距排针         |
| IO 结构      | SIG,VCC,GND,NC         |
| ROHS         | YES                    |

### 电气特性

<table border="1">
<tr>
<th>
项目
</th>
<th>
条件
</th>
<th>
最小值
</th>
<th>
标准值
</th>
<th>
最大值
</th>
<th>
单位
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
测量电流供应
</td>
<td>
-
</td>
<td>
1.3
</td>
<td>
-
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
平均电流供应
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
测量范围
</td>
<td>
湿度
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
温度
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
精度
</td>
<td>
湿度
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
温度
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 灵敏度
</td>
<td>
湿度
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
温度
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
重复性
</td>
<td>
湿度
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
温度
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
长期稳定性
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/年
</td>
</tr>
<tr align="center">
<td>
信号采集周期
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>

支持的平台
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::note
上述提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

入门指南

当 MCU 发送触发信号时，传感器将从低功耗模式切换到活动模式。触发信号后，传感器将向 MCU 发送响应信号，然后发送 40 位采集数据并触发新的信号采集。（请注意，从传感器发送到 MCU 的 40 位采集数据是在触发信号到来之前已经采集的。）一个触发信号接收一次来自传感器的 40 位响应数据。MCU 和传感器之间的通信使用单总线数据。
通信过程如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg" /></div>

单次通信耗时 5ms。数据的高位先发送。信号数据为 40 位，由 16 位湿度数据、16 位温度数据和 8 位校验和组成。数据格式为：

    湿度整数部分 8 位 + 湿度小数部分 8 位
    + 温度整数部分 8 位 + 温度小数部分 8 位
    + 校验和 8 位。

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与 Arduino 配合使用

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield| 温湿度传感器|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **步骤 2.** 将 Grove - 温湿度传感器连接到 Grove-Base Shield 的 **D2** 端口。

- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 4.** 通过 USB 线将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg" /></div>

:::note
 如果我们没有 Grove Base Shield，我们也可以直接将 Grove - Temperature and Humidity Sensor Pro 连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Temperature&Humidity Sensor |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |

#### 软件

- **步骤 1.** 从 Github 下载 [Seeed DHT 库](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。通过路径打开 "DHTtester" 示例：**File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**。通过这个演示，我们可以读取环境的温度和相对湿度信息。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/path.png" /></div>

:::note
这个 Grove - Temperature&Humidity Sensor 和我们的另一个产品 [Grove-Temperature&Humidity Sensor pro](https://wiki.seeedstudio.com/cn/Grove-Temperature_and_Humidity_Sensor_Pro/) 共享这个库。无论您使用哪个产品，请确保您已经使您板子上传感器的定义行生效，并注释掉其他规格的定义行。例如，我们在 Grove - Temperature&Humidity Sensor 上使用的传感器是 DHT 11。所以传感器规格的定义部分应该是：
:::

```
#define DHTTYPE DHT11   // DHT 11
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

库的默认设置是 `DHT 22`，所以您需要手动将其更改为 `DHT 11`。

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 通过点击 **Tool-> Serial Monitor** 打开 Arduino IDE 的 **Serial Monitor**。或者同时按下 ++ctrl+shift+m++ 键。如果一切正常，您将获得温度。

结果应该如下：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/result_ar.png" /></div>

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove - Temperature&Humidity Sensor 连接到 Base Shield 的 D2 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到您的 PC。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

:::note
如果这是您第一次使用 Codecraft，请参阅 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按照下图拖拽积木块，或打开可在本页面末尾下载的 cdc 文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/cc_Temperature_Humidity.png" /></div>

将程序上传到您的 Arduino/Seeeduino。

:::tip
当代码上传完成后，您将在串口监视器中看到显示的温度和湿度。
:::

### 使用树莓派（配合 Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp & Hum Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **步骤 2**. 将 Grove Base Hat 插入树莓派。
- **步骤 3**. 将温湿度传感器连接到 Base Hat 的端口 12。
- **步骤 4**. 通过 USB 线缆将树莓派连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Temp_Hum_Hat.jpg" /></div>

:::note
对于步骤 3，您可以将温湿度传感器连接到**任何 GPIO 端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

- **步骤 1**. 按照 [Setting Software](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
:::tip
其中一个步骤是添加必要的 DHT 库，请确保已安装。
:::
- **步骤 2**.进入相关的虚拟环境。

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **步骤 3**. 执行以下命令运行代码。

```
nano ~/grove_env/dht11_demo.py
```

复制以下代码

```python
import time
import seeed_dht

sensor = seeed_dht.DHT("11", 12)  
print("DHT11 reading every second, Ctrl+C to quit")
try:
    while True:
        humi, temp = sensor.read()
        print(f"DHT11  Humidity {humi:.1f}%  Temperature {temp:.1f}°C")
        time.sleep(1)
except KeyboardInterrupt:
    print("\nBye")

```

:::tip
    保存并退出：
Ctrl+O → Enter → Ctrl+X
:::

  如果一切正常，您将能够看到以下结果


```python

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python ~/grove_env/dht11_demo.py 
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.1%, temperature 29.1*
DHT11, humidity 40.0%, temperature 29.1*
DHT11, humidity 39.9%, temperature 29.1*
DHT11, humidity 40.3%, temperature 29.1*
DHT11, humidity 42.0%, temperature 29.1*
```

您可以通过简单地按下 ++ctrl+c++ 来退出此程序。

### 使用树莓派（配合 GrovePi_Plus）

#### 硬件

首先，您需要准备以下物品：

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|

- **步骤 2.** 将 GrovePi_Plus 插入树莓派。

- **步骤 3.** 将 Grove - Temperature&Humidity Sensor 连接到 GrovePi_Plus 的 **D4** 端口。

- **步骤 4.** 通过 USB 线缆将树莓派连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_pi.jpg" /></div>

#### 软件

- **步骤 1.** 按照 [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。

- **步骤 2.** 按照 [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) 更新 GrovePi 的最新固件。

:::tip
在本 wiki 中，我们使用路径 **~/GrovePi/** 而不是 **/home/pi/Desktop/GrovePi**，您需要确保步骤 2 和步骤 3 使用相同的路径。
:::

:::note
我们强烈建议您更新固件，否则对于某些传感器您可能会遇到错误。
:::

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

- **步骤 3.** Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 4.** 检查代码。

```python

cd ~/GrovePi/Software/Python
sudo nano grove_dht_pro.py

```

代码应该如下：

```python
import grovepi
import math
# Connect the Grove Temperature & Humidity Sensor Pro to digital port D4
# This example uses the blue colored sensor.
# SIG,NC,VCC,GND
sensor = 4  # The Sensor goes on digital port 4.

# temp_humidity_sensor_type
# Grove Base Kit comes with the blue sensor.
blue = 0    # The Blue colored sensor.
white = 1   # The White colored sensor.

while True:
    try:
        # This example uses the blue colored sensor.
        # The first parameter is the port, the second parameter is the type of sensor.
        [temp,humidity] = grovepi.dht(sensor,blue)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

然后按 ++ctrl+x++ 退出 nano。

:::note
Grove - Temperature&Humidity Sensor 和 Grove - Temperature&Humidity Sensor pro 共享相同的 python 代码，名为 `grove_dht_pro.py`。唯一的区别是对于语句 `[temp,humidity] = grovepi.dht(sensor,blue)`。我们对 Grove - Temperature&Humidity Sensor 使用参数 `blue`，而对 Grove - Temperature&Humidity Sensor pro 使用 `white`。默认值是 blue，所以对于这个传感器您不需要更改代码。
:::

- **步骤 5.** 执行以下命令获取值。

```
sudo python3 grove_dht_pro.py
```

结果应该如下所示：

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_dht_pro.py
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%

```

### 与 Wio Terminal 配合使用（ArduPy）

#### 硬件

- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove - Temperature & Humidity Sensor (DHT11) |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new.jpeg" /></div>|
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

- **步骤 2.** 将 Grove - Temperature & Humidity Sensor 连接到 Wio Terminal 的 **D0** 端口。

- **步骤 3.** 通过 USB Type-C 线缆将 Wio Terminal 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new-connect.jpeg" /></div>

#### 软件

- **步骤 1.** 按照 [**ArduPy 入门指南**](https://wiki.seeedstudio.com/cn/ArduPy/) 在 Wio Terminal 上配置 ArduPy 开发环境。

- **步骤 2.** 使用以下命令确保 ArduPy 固件包含 DHT 库。更多信息请参考 [**这里**](https://wiki.seeedstudio.com/cn/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example)。

```sh
aip install Seeed-Studio/seeed-ardupy-dht/archive/main.zip
aip build
aip flash
```

- **步骤 3.** 复制以下代码并保存为 `ArduPy-DHT.py`：

```python
from arduino import grove_dht
from machine import LCD, Sprite
import time 

dht = grove_dht(0,11)
lcd = LCD() # initialize TFT LCD 
spr = Sprite(lcd) # initialize buffer

def main(): # main function 
    spr.createSprite(320, 240) # create buffer
    while True: # while loop
        spr.fillSprite(spr.color.WHITE) # fill background 

        # two fill rectangles
        spr.fillRect(0,0,160,240,spr.color.DARKGREEN) # fill rectangle in color
        spr.fillRect(160,0,160,240,spr.color.BLUE)

        # temp and humid text draw 
        spr.setTextSize(2) # set text size
        spr.setTextColor(spr.color.WHITE,spr.color.DARKGREEN) # set text color
        spr.drawString("Temperature", 15, 65) # draw string 
        spr.setTextColor(spr.color.WHITE,spr.color.BLUE) 
        spr.drawString("Humidity", 190, 65) 

        # obtain readings 
        t = dht.temperature # store temperature readings in variable 
        h = dht.humidity # store humidity readings in variable 

        # display temp readings
        spr.setTextSize(4)
        spr.setTextColor(spr.color.WHITE,spr.color.DARKGREEN)
        spr.drawNumber(int(t),50,110) # display number  
        spr.drawString("C", 100, 110) 

        # display humi readings
        spr.setTextColor(spr.color.WHITE,spr.color.BLUE) # set text color
        spr.drawNumber(int(h),180,110)  
        spr.drawString("%RH", 235, 110) 

        spr.pushSprite(0,0) # push to LCD
        time.sleep_ms(100)

        print("temperature:",t,"C", end ="     ")
        print("humidity:",h,"%RH")

if __name__ == "__main__": # check whether this is run from main.py
    main() # execute function
```

- **步骤 4.** 将 `ArduPy-DHT.py` 保存到您知道的位置。运行以下命令并将 `<YourPythonFilePath>` **替换**为您的 `ArduPy-DHT.py` 位置。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/user/Desktop/ArduPy-DHT.py"
```

现在，温度和湿度信息将显示在命令提示符/终端窗口以及 Wio Terminal LCD 上。

```python
C:\Users\user>aip shell -n -c "runfile /Users/user/Desktop/ArduPy-DHT.py"
Positional argument (COM4) takes precedence over --open.
Connected to ardupy
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new-demo.jpeg" /></div>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Temperature_Humidity.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [温湿度传感器 eagle 文件](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Temperature_Humidity.zip)

- **[Zip]** [温湿度传感器库](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Grove_Temperature_and_Humidity_Sensor_CDC_File.zip)

## 项目

**厕所管理系统**：使用该系统，多人可以高效地共享一个厕所。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/taifur/toilet-management-system-8e2786/embed' width='350'></iframe>

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

