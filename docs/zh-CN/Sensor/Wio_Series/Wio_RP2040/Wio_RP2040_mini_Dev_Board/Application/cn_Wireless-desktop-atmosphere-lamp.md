---
title: 无线桌面氛围灯
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wireless-desktop-atmosphere-lamp/
slug: /cn/Wireless-desktop-atmosphere-lamp
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 无线桌面氛围灯

在繁忙的工作场所保持健康的心情非常重要，普通人会买一盆仙人掌放在桌面上用于装饰和放松。作为工程师，我们也需要具有相同功能的物品，如果能自己制作一个小型发光盆景那将是最美妙的事情。在这个项目中，我们将制作一个发光的无线桌面氛围灯。我们可以无线发送命令来控制它点亮不同的颜色以匹配我们不同的心情，那么让我们看看如何做到这一点！

<div align="center">
  <iframe width={560} height={315} src="https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/display.mp4" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
</div>


## 硬件

- [Wio RP2040 mini 开发板](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)
- [WS2812](https://www.seeedstudio.com/Digital-Full-Color-LED-Strip-with-APP-p-4780.html)
- Type-C 数据线
- PC
- WiFi

### 接线图

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/wiring.jpg)

## 软件

### 1. 安装 Thonny​

易于上手。Thonny 内置 Python 3.7，因此只需要一个简单的安装程序，您就可以开始学习编程了。首先，点击 [Thonny.org](https://thonny.org/) 进入下载页面。在页面右上角，根据您的操作系统选择 Thonny 安装包进行下载。双击您下载的安装包打开它，并按照步骤进行安装。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny1.jpg)

现在您已经安装了 Thonny，打开应用程序。您应该看到 Thonny 的主界面：

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny2.jpg)

1. 工具栏：基本常用工具，如新建、打开、保存、运行当前脚本、停止等。

2. 代码编辑器：Thonny 的核心区域，我们将在这里编写 Python/MicroPython 代码。

3. Shell：我们可以在这里运行命令，命令的结果将立即显示在 Shell 中。我们也可以在 Shell 窗口中看到代码的输出。

4. 解释器：在这里您可以选择解释器类型来编译程序。点击 Python 3.7.9，在弹出菜单中找到 MicroPython (Raspberry pi Pico)，然后点击确定将解释器切换到 Pico 解释器。您也可以点击"工具>>>选项>>>解释器"进行选择。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny3.jpg)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny4.jpg)

### 2.连接 Wio RP2040 mini 开发板

使用数据线将开发板连接到计算机，然后点击工具栏上的"重启后端"按钮。如果 Wio RP2040 成功连接到计算机，您将在 Shell 中看到 MicroPython 版本信息和设备名称。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny5.jpg)

### 3.代码

为了在 MicroPython 上调用 WS2812B RGB LED，我们需要将这个 WS2812B 的库文件导入到 Wio RP2040 的内存中。
操作如下：复制以下代码，将其粘贴到新的 thonny 编辑器窗口中，然后将其保存到开发板并重命名为"ws2812.py"

```python
import array, time
from machine import Pin
import rp2

# 配置 WS2812 LED 的数量。
# brightness = 0.2

@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True,pull_thresh=24)

def ws2812():
    T1 = 2
    T2 = 5
    T3 = 3
    wrap_target()
    label("bitloop")
    out(x, 1) .side(0) [T3 - 1]
    jmp(not_x, "do_zero") .side(1) [T1 - 1]
    jmp("bitloop") .side(1) [T2 - 1]
    label("do_zero")
    nop() .side(0) [T2 - 1]
    wrap()
class WS2812():        
    def __init__(self, pin_num, led_count, brightness = 0.5):
        self.Pin = Pin
        self.led_count = led_count
        self.brightness = brightness
        self.sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(pin_num))
        self.sm.active(1)
        self.ar = array.array("I", [0 for _ in range(led_count)])
        
    def pixels_show(self):
        dimmer_ar = array.array("I", [0 for _ in range(self.led_count)])
        for i,c in enumerate(self.ar):
            r = int(((c >> 8) & 0xFF) * self.brightness)
            g = int(((c >> 16) & 0xFF) * self.brightness)
            b = int((c & 0xFF) * self.brightness)
            dimmer_ar[i] = (g<<16) + (r<<8) + b
        self.sm.put(dimmer_ar, 8)
        time.sleep_ms(10)

    def pixels_set(self, i, color):
        self.ar[i] = (color[1]<<16) + (color[0]<<8) + color[2]

    def pixels_fill(self, color):
        for i in range(len(self.ar)):
            self.pixels_set(i, color)

    def color_chase(self,color, wait):
        for i in range(self.led_count):
            self.pixels_set(i, color)
            time.sleep(wait)
            self.pixels_show()
        time.sleep(0.2)
    def wheel(self, pos):
    # 输入一个 0 到 255 的值来获取颜色值。
    # 颜色是一个从 r - g - b - 回到 r 的过渡。
        if pos < 0 or pos > 255:
            return (0, 0, 0)
        if pos < 85:
            return (255 - pos * 3, pos * 3, 0)
        if pos < 170:
            pos -= 85
            return (0, 255 - pos * 3, pos * 3)
        pos -= 170
        return (pos * 3, 0, 255 - pos * 3)


    def rainbow_cycle(self, wait):
        for j in range(255):
            for i in range(self.led_count):
                rc_index = (i * 256 // self.led_count) + j
                self.pixels_set(i, self.wheel(rc_index & 255))
            self.pixels_show()
            time.sleep(wait)


```

然后创建一个新的程序窗口来编写以下代码。

```python
import network
import mqtt
import utime
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep
from ws2812 import WS2812

BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 150, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
BLUE = (0, 0, 255)
PURPLE = (180, 0, 255)
WHITE = (255, 255, 255)
led = WS2812(13,10)#WS2812(pin_num,led_count)

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)
 
SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio RP2040_Dev_board'
TOPIC = 'RGB_LED'
 
def mqtt_callback(topic):
    print('topic: {}'.format(topic[0]))
    print('msg:{}'.format(topic[1]))
    if(topic[1] == "RED"):
        print('RED')
        led.pixels_fill(RED)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "GREEN"):
        print('GREEN')
        led.pixels_fill(GREEN)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "YELLOW"):
        print('YELLOW')
        led.pixels_fill(YELLOW)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "CYAN"):
        print('CYAN')
        led.pixels_fill(CYAN)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "BLUE"):
        print('BLUE')
        led.pixels_fill(BLUE)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "PURPLE"):
        print('PURPLE')
        led.pixels_fill(PURPLE)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "WHITE"):
        print('WHITE')
        led.pixels_fill(WHITE)
        led.pixels_show()
        utime.sleep(0.2)
 
cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()
 
 
cl.publish(TOPIC,"start")
cl.subscribe(TOPIC)
cl.set_callback(mqtt_callback)
print('ok')

led.pixels_fill(RED)
led.pixels_show()
utime.sleep(0.2)
while True:
    cl.wait_msg()
    sleep(0.1)
```

**注意在程序的第20行，更改您正确的WiFi名称和密码。**

### 4.设置MQTT客户端

MQTT是一个客户端服务器发布/订阅消息传输协议。客户端可以作为发布者或订阅者或两者兼而有之。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt1.jpg)

发布者可以创建一个主题，并将消息附加到该主题。例如，我可以创建一个新主题"今日天气"，消息内容是"25摄氏度"，然后将消息发送到服务器。发布者收到主题消息后，将信息分发给任何订阅了该主题的客户端。也就是说，订阅者只有在订阅了"今日天气"主题时才会收到"25摄氏度"的消息。如果订阅者没有订阅"今日天气"主题，无论发布者发送什么消息，订阅者都不会收到消息。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt2.jpg)

下载MQTTX服务器软件并安装到计算机上，然后配置MQTT服务器。

---

在这个项目中我们将使用"mqtt.p2hp.com"的免费服务器。**在线服务器**

- 地址：mqtt.p2hp.com
- 端口：1883（TCP），8083（WebSocket）
- 类型：EMQ
- MQTT V3.1.1/V5.0兼容

---

进入MQTTX软件创建新连接，填写名称、服务器、端口、主题，然后点击"连接"连接到服务器。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt3.jpg)

连接成功后，软件右上角会有弹窗提示。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt4.jpg)

然后在下方设置主题和消息。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt6.jpg)

当收到数据时，顶部会显示消息数量。如果您没有看到消息，请点击订阅主题。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt7.jpg)

至此，MQTT客户端的部署完成。接下来，回到Thonny编辑器运行代码。当显示"ok"并且连接的WS2812B亮起红色时，程序运行成功。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt8.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/led.jpg)

## 外观

外观部分我们使用亚克力板+木板制作，您可能需要激光雕刻机或锯子。

您可以直接使用我完成的底座和面板设计，用激光雕刻机切割。

**[panel.zip](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/panel.zip)**

**[base.zip](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/base.zip)**

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img1.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img2.jpg)

然后获得以下部件。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img3.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img4.jpg)

接下来，拼接底座部分

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img6.jpg)

然后将WS2812B粘贴到部件上

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img7.jpg)

调试程序并观察硬件是否正常运行

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img8.jpg)

如果一切完成，您可以使用热熔胶将剩余的板子粘在一起

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img9.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img10.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img11.jpg)

最后，我们在MQTTX中发送不同的命令来无线改变它的颜色！

---

**主题：** RGB_LED

**消息：** RED,BLACK,YELLOW,GREEN,CYAN,BLUE,PURPLE,WHITE

---

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt9.jpg)

当然，您也可以编辑代码来尝试一些不同的灯光效果。与我分享您的作品！

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img12.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img13.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img14.jpg)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>