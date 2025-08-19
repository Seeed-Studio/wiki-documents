---
description: 适用于 ESP32C3 的 MicroPython
title: 适用于 ESP32C3 的 MicroPython
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_MicroPython
last_update:
  date: 08/14/2023
  author: Matthew and Zachay
---

# 使用 MicroPython 的 XIAO ESP32C3 Wi-Fi 追踪器

本 wiki 已更新：https://wiki.seeedstudio.com/cn/xiao_esp32c3_with_micropython/

在本教程中，我将简要概述如何使用 XIAO ESP32C3 与 Micropython。此外，我将探索 Wi-Fi 信号强度追踪器的实际应用，这在建立高速、高质量家庭网络时非常有价值。
因此，通过遵循 Wi-Fi 追踪器的指导，我们可以有效地优化 Wi-Fi 信号增强器的放置，确保最佳的信号覆盖。

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/7n72Knh4IIM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

## 硬件准备

我在这里使用 Seeed Studio XIAO ESP32C3 和 XIAO 扩展板作为硬件。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C3</th>
        <th>XIAO 扩展板</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:'auto', height:200}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:'auto', height:200}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 软件准备

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>Esptool</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://github.com/espressif/esptool" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> 在此克隆 ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::info
在使用之前，我需要说明这里使用的软件/固件是为 ESP32C3 芯片设计的。因此，当您尝试使用引脚时，请确保使用通用输入/输出引脚而不是板上的引脚标识。<br/>
例如，当您尝试使用左侧第一行的引脚时，请确保使用 `GPIO2` 而不是 `A0` 或 `D0`。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:500, height:'auto'}}/></div>
:::

## 开始使用

需要两个步骤（"PC上的Micropython配置"和"XIAO ESP32C3上的Micropython设置"）才能让XIAO ESP32C3真正能够用MicroPython编程。

设置完成后，您可以逐步复制每个演示的代码来完成操作。

### PC上的Micropython配置

#### 安装Thonny IDE（Windows）

请按照图片中的步骤操作

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython1.png" /></div>

#### 使用esptool更新固件

1. 打开您自己的文件位置

``` git clone https://github.com/espressif/esptool.git ```

2. 下载最新固件（本教程使用v1.20.0 (2023-04-26) .bin）

``` https://micropython.org/download/esp32c3/```

3. 将最新固件放在此文件位置并在CMD中打开文件

```your own file location\esptool-master\esptool```

4. 在CMD中输入此命令刷写固件（刷写前进入bootloader模式）

```cpp
esptool.exe --chip esp32c3 --port COM10 --baud 921600 --before default_reset --after hard_reset --no-stub  write_flash --flash_mode dio --flash_freq 80m 0x0 esp32c3-usb-20230426-v1.20.0.bin
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython2.png" /></div>

:::note
如果您使用linux，请将"esptool.exe"改为"esptool.py"。将"COM10"改为您自己的串口。将"esp32c3-usb-20230426-v1.20.0.bin"改为您下载的最新固件名称。
:::


### XIAO ESP32C3上的Micropython设置

1. 插入您的XIAO ESP32C3，打开Thonny并点击右下角配置解释器

2. 选择解释器- Micropython (ESP32)和端口 >>> 点击确定

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython3.png" /></div>


注意：如果一切顺利，您将在shell中看到输出

#### 安装所需库

点击"Tools" >>> 点击"Management Packages" >>> 输入库名称 >>> 点击"Search micropython-lib and PyPl"

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython4.png" /></div>


#### 运行脚本并刷写到开发板

1. 完成编码后，点击绿色按钮运行脚本

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython5.png" /></div>


2. 通过将文件保存到开发板为"boot.py"来将代码刷写到开发板

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" /></div>

### 演示1：点亮OLED屏幕

#### 1. Hello Seeder!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython7.png" /></div>

```cpp
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# ESP8266 Pin assignment
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

oled.fill(0)  # Clear the screen
oled.text("Hello, Seeder!", 10, 15)
oled.text("/////", 30, 40)
oled.text("(`3`)y", 30, 55)
oled.show()  # Show the text
```

#### 2. 加载动态效果

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython8.png" /></div>

```cpp
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# ESP8266 引脚分配
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # 根据您的连接调整引脚编号
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

center_x = oled_width // 2
center_y = oled_height // 2
square_size = 6  # 每个方块的大小
num_squares = 12  # 方块数量
angle_increment = 2 * math.pi / num_squares

while True:
    oled.fill(0)  # 清屏
    
    for i in range(num_squares):
        angle = i * angle_increment
        x = int(center_x + (center_x - square_size-30) * math.cos(angle))
        y = int(center_y + (center_x - square_size-30) * math.sin(angle))
        
        # 绘制所有方块
        for j in range(num_squares):
            angle_j = j * angle_increment
            x_j = int(center_x + (center_x - square_size-30) * math.cos(angle_j))
            y_j = int(center_y + (center_x - square_size-30) * math.sin(angle_j))
            
            oled.fill_rect(x_j, y_j, square_size, square_size, 1)  # 绘制方块
        
        oled.fill_rect(x, y, square_size, square_size, 0)  # 擦除当前方块
        oled.show()
        time.sleep_ms(100)  # 下次迭代前暂停

```

### 演示 2：点亮蜂鸣器

#### 1. 声音

```cpp
import time
from time import sleep
import machine
from machine import Pin, SoftI2C


# 蜂鸣器设置

buzzer_pin = machine.Pin(5, machine.Pin.OUT)
buzzer = machine.PWM(buzzer_pin)
buzzer.freq(1047)

# 蜂鸣器工作

while True:

    buzzer.duty(10)
    time.sleep(1)
    buzzer.duty(0)
    time.sleep(1)
```

#### 2. 播放歌曲"He's a pirate"

```python
import machine
import time

# 蜂鸣器设置
buzzer_pin = machine.Pin(5, machine.Pin.OUT)
buzzer = machine.PWM(buzzer_pin)
buzzer.freq(1047)

# 定义每个音符的频率
NOTE_C4 = 262
NOTE_D4 = 294
NOTE_E4 = 330
NOTE_F4 = 349
NOTE_G4 = 392
NOTE_A4 = 440
NOTE_B4 = 494
NOTE_C5 = 523
NOTE_D5 = 587
NOTE_E5 = 659
NOTE_F5 = 698
NOTE_G5 = 784
NOTE_A5 = 880
NOTE_B5 = 988

# 歌曲的音符，0 是休止符/停顿
notes = [
    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
    NOTE_A4, NOTE_G4, NOTE_A4, 0,

    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
    NOTE_A4, NOTE_G4, NOTE_A4, 0,

    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
    NOTE_A4, NOTE_C5, NOTE_D5, NOTE_D5, 0,
    NOTE_D5, NOTE_E5, NOTE_F5, NOTE_F5, 0,
    NOTE_E5, NOTE_D5, NOTE_E5, NOTE_A4, 0,

    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_D5, NOTE_E5, NOTE_A4, 0,
    NOTE_A4, NOTE_C5, NOTE_B4, NOTE_B4, 0,
    NOTE_C5, NOTE_A4, NOTE_B4, 0,

    NOTE_A4, NOTE_A4,
    #第一部分的重复
    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
    NOTE_A4, NOTE_G4, NOTE_A4, 0,

    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
    NOTE_A4, NOTE_G4, NOTE_A4, 0,

    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
    NOTE_A4, NOTE_C5, NOTE_D5, NOTE_D5, 0,
    NOTE_D5, NOTE_E5, NOTE_F5, NOTE_F5, 0,
    NOTE_E5, NOTE_D5, NOTE_E5, NOTE_A4, 0,

    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_D5, NOTE_E5, NOTE_A4, 0,
    NOTE_A4, NOTE_C5, NOTE_B4, NOTE_B4, 0,
    NOTE_C5, NOTE_A4, NOTE_B4, 0,

#重复结束

    NOTE_E5, 0, 0, NOTE_F5, 0, 0,
    NOTE_E5, NOTE_E5, 0, NOTE_G5, 0, NOTE_E5, NOTE_D5, 0, 0,
    NOTE_D5, 0, 0, NOTE_C5, 0, 0,
    NOTE_B4, NOTE_C5, 0, NOTE_B4, 0, NOTE_A4,

    NOTE_E5, 0, 0, NOTE_F5, 0, 0,
    NOTE_E5, NOTE_E5, 0, NOTE_G5, 0, NOTE_E5, NOTE_D5, 0, 0,
    NOTE_D5, 0, 0, NOTE_C5, 0, 0,
    NOTE_B4, NOTE_C5, 0, NOTE_B4, 0, NOTE_A4
]

# 歌曲中每个音符的持续时间（毫秒）
# 当 songSpeed = 1.0 时，四分音符为 250 毫秒
durations = [
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 125,

    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 125,

    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 125, 250, 125,

    125, 125, 250, 125, 125,
    250, 125, 250, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 375,

    250, 125,
    #第一部分重复
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 125,

    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 125,

    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 125, 250, 125,

    125, 125, 250, 125, 125,
    250, 125, 250, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 375,
    #重复结束

    250, 125, 375, 250, 125, 375,
    125, 125, 125, 125, 125, 125, 125, 125, 375,
    250, 125, 375, 250, 125, 375,
    125, 125, 125, 125, 125, 500,

    250, 125, 375, 250, 125, 375,
    125, 125, 125, 125, 125, 125, 125, 125, 375,
    250, 125, 375, 250, 125, 375,
    125, 125, 125, 125, 125, 500
]

def play_song():
    total_notes = len(notes)
    for i in range(total_notes):
        current_note = notes[i]
        wait = durations[i]
        if current_note != 0:
            buzzer.duty(512)  # 设置声音的占空比
            buzzer.freq(current_note)  # 设置音符的频率
        else:
            buzzer.duty(0)  # 关闭声音
        time.sleep_ms(wait)
        buzzer.duty(0)  # 关闭声音
while True:
    # 播放歌曲
    play_song()
```

### 演示 3：连接到 Wi-fi

#### 1. 连接到 Wi-fi

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython8a.png" /></div>


```python
import network
import urequests
import utime as time

# 网络设置
wifi_ssid = "Your Own SSID"
wifi_password = "Your Own Password"

def scan_and_connect():
    station = network.WLAN(network.STA_IF)
    station.active(True)

    print("正在扫描 WiFi 网络，请稍候...")
    for ssid, bssid, channel, RSSI, authmode, hidden in station.scan():
        print("* {:s}".format(ssid))
        print("   - 频道: {}".format(channel))
        print("   - RSSI: {}".format(RSSI))
        print("   - BSSID: {:02x}:{:02x}:{:02x}:{:02x}:{:02x}:{:02x}".format(*bssid))
        print()

    while not station.isconnected():
        print("正在连接...")
        station.connect(wifi_ssid, wifi_password)
        time.sleep(10)

    print("已连接！")
    print("我的 IP 地址:", station.ifconfig()[0])

# 执行函数
scan_and_connect()
```

#### 2. 在线请求纽约时间

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython9.png" /></div>


```cpp
from machine import Pin, SoftI2C
import ssd1306
from time import sleep
import time
import network
import urequests
import ujson

# ESP32 引脚分配
# i2c = SoftI2C(scl=Pin(22), sda=Pin(21))

# ESP8266 引脚分配
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # 根据您的连接调整引脚编号

oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

station = network.WLAN(network.STA_IF)
station.active(True)

# 网络设置
wifi_ssid = "Your wifi ssid"
wifi_password = "Your wifi password"
url = "http://worldtimeapi.org/api/timezone/America/New_York"

print("正在扫描WiFi网络，请稍候...")
authmodes = ['Open', 'WEP', 'WPA-PSK' 'WPA2-PSK4', 'WPA/WPA2-PSK']
for (ssid, bssid, channel, RSSI, authmode, hidden) in station.scan():
    print("* {:s}".format(ssid))
    print("   - 频道: {}".format(channel))
    print("   - RSSI: {}".format(RSSI))
    print("   - BSSID: {:02x}:{:02x}:{:02x}:{:02x}:{:02x}:{:02x}".format(*bssid))
    print()

# 持续尝试连接到WiFi接入点
while not station.isconnected():
    # 尝试连接到WiFi接入点
    print("正在连接...")
    station.connect(wifi_ssid, wifi_password)
    time.sleep(10)

# 显示连接详情
print("已连接!")
print("我的IP地址:", station.ifconfig()[0])


while True:
    # 在非SSL网站上执行HTTP GET请求
    response = urequests.get(url)
    # 检查请求是否成功
    if response.status_code == 200:
        # 解析JSON响应
        data = ujson.loads(response.text)
        # 提取纽约的"datetime"字段
        ny_datetime = data["datetime"]
        # 分离日期和时间组件
        date_part, time_part = ny_datetime.split("T")
        # 只获取时间的前两位小数
        time_part = time_part[:8]
        # 获取时区
        timezone = data["timezone"]
        
        # 清除OLED显示屏
        oled.fill(0)
        
        # 在不同行显示纽约日期和时间
        oled.text("New York Date:", 0, 0)
        oled.text(date_part, 0, 10)
        oled.text("New York Time:", 0, 20)
        oled.text(time_part, 0, 30)
        oled.text("Timezone:", 0, 40)
        oled.text(timezone, 0, 50)
        # 更新显示
        oled.show()
    else:
        oled.text("Failed to get the time for New York!")
        # 更新显示
        oled.show()
```

### 最终项目：Wi-fi信号强度跟踪器

这是本项目的主要任务。通过这段代码，您可以使用如此简单的设备在家中跟踪您的wifi信号。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython10.jpg" /></div>

```cpp
import network
import time
from time import sleep
import machine
from machine import Pin, SoftI2C
import ssd1306
import math

# ESP32C3 引脚分配
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # 根据您的连接调整引脚编号
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

# 网络设置
wifi_ssid = "Your Own SSID"
wifi_password = "Your Own Password"
machine.freq(160000000)  # 将CPU频率设置为160 MHz（ESP8266特定）
oled.text("Starting up...", 0, 0)
oled.show()

station = network.WLAN(network.STA_IF)
station.active(True)
station.connect(wifi_ssid, wifi_password)
time.sleep(1)

while not station.isconnected():
    time.sleep(1)

oled.fill(0)
oled.text("Connecting to", 0, 0)
oled.text(wifi_ssid, 0, 20)
oled.show()
time.sleep(2)

oled.fill(0)
ip_address = station.ifconfig()[0]  # 获取IP地址
oled.text("Connected! ", 0, 0)
oled.text("IP Address:", 0, 20)
oled.text(ip_address, 0, 40)
oled.show()
time.sleep(2)

# 蜂鸣器设置
buzzer_pin = machine.Pin(5, machine.Pin.OUT)
buzzer = machine.PWM(buzzer_pin)
buzzer.freq(1047)
buzzer.duty(0)

center_x = oled_width // 2
center_y = oled_height // 2
square_size = 6  # 每个方块的大小
num_squares = 12  # 方块数量
angle_increment = 2 * math.pi / num_squares

x_pos = [12, 38, 64, 90]
statuses = ["poor", "normal", "good", "excellent"]

def calculate_block_count(rssi):
    # 根据RSSI值确定块数
    if -80 <= rssi < -60:
        return 1
    elif -60 <= rssi < -40:
        return 2
    elif -40 <= rssi < -20:
        return 3
    elif -20 <= rssi <= 10:
        return 4

def draw_blocks(count):
    for i in range(count):
        y_pos = 50 - calculate_block_height(i)
        oled.fill_rect(x_pos[i], y_pos, 24, calculate_block_height(i), 1)
    for i in range(count, 4):  # 清除未使用的区域
        y_pos = 50 - calculate_block_height(i)
        oled.fill_rect(x_pos[i], y_pos, 24, calculate_block_height(i), 0)

def calculate_block_height(index):
    return 10 * (index + 1)

loop_count = 0  # 初始化循环计数

while loop_count < 2:  # 执行循环24次
    oled.fill(0)  # 清除屏幕
    
    for i in range(num_squares):
        angle = i * angle_increment
        x = int(center_x + (center_x - square_size-30) * math.cos(angle))
        y = int(center_y + (center_x - square_size-30) * math.sin(angle))
        
        # 绘制所有方块
        for j in range(num_squares):
            angle_j = j * angle_increment
            x_j = int(center_x + (center_x - square_size-30) * math.cos(angle_j))
            y_j = int(center_y + (center_x - square_size-30) * math.sin(angle_j))
            
            oled.fill_rect(x_j, y_j, square_size, square_size, 1)  # 绘制方块
        
        oled.fill_rect(x, y, square_size, square_size, 0)  # 擦除当前方块
        oled.show()
        time.sleep_ms(100)  # 下次迭代前暂停
        
    loop_count += 1  # 增加循环计数

oled.fill(0)  # 完成循环后清除屏幕
oled.show()

while True:
    oled.fill(0)
    station = network.WLAN(network.STA_IF)
    time.sleep(0.1)
    rssi = station.status('rssi')
    rssi_duty = 160 + 2 * int(rssi)
    rssi_duty_2 = int(rssi_duty / 2)
    rssi_abs = abs(int(rssi)) / 100
 
    block_count = calculate_block_count(rssi)
    status = statuses[block_count - 1]  # 根据块数获取状态文本
    
    draw_blocks(block_count)
    
    oled.text(status, 11, 56)
    
    oled.text("RSSI:", 0, 0)
    oled.text(str(rssi), 40, 0)

# 更新显示
    oled.show()

    buzzer.duty(rssi_duty)
    time.sleep(rssi_abs)
    buzzer.duty(0)
    time.sleep(rssi_abs)
    buzzer.duty(rssi_duty_2)
    time.sleep(rssi_abs)
    buzzer.duty(0)
    time.sleep(rssi_abs)

```

## 更多内容

- 您也可以使用 Thonny 集成的 esptool 将固件刷入 XIAO ESP32C3，该工具支持 MAC OS。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython11.png" /></div>

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35177053)支持。
- 感谢 [Zachary 的努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35177053)，您的工作将被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

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