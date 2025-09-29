---
title: 使用 MQTT 远程点亮 LED 灯
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Use_MQTT_to_remotely_light_up_LED_lights/
slug: /cn/Use_MQTT_to_remotely_light_up_LED_lights
last_update:
  date: 01/11/2022
  author: gunengyu
---

MQTT 是一种客户端服务器发布/订阅消息传输协议。客户端可以作为发布者或订阅者或两者兼而有之。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_10.png)

发布者可以创建一个主题并附加消息到该主题。例如，我可以创建一个新主题"今日天气"，消息内容是"25摄氏度"，然后将消息发送到服务器。发布者收到主题消息后，将信息分发给任何订阅了该主题的客户端。也就是说，订阅者只有在订阅了"今日天气"主题时才会收到"25摄氏度"的消息。如果订阅者没有订阅"今日天气"主题，无论发布者发送什么消息，订阅者都不会收到消息。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_11.png)
### 1. 配置 MQTT 服务器
下载 MQTTX 服务器软件并安装到计算机上，然后配置 MQTT 服务器。

---

在这个项目中我们将使用"mqtt.p2hp.com"的免费服务器。
**在线服务器** 

- 地址：mqtt.p2hp.com
- 端口：1883 (TCP)，8083 (WebSocket)
- 类型：EMQ
- MQTT V3.1.1/V5.0 兼容

---

进入 MQTTX 软件创建新连接，填写名称、服务器、端口、主题，然后点击"连接"连接到服务器。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

连接成功后，软件右上角会有弹窗提示。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png)

然后在下方设置主题和消息。在这个项目中，我们使用 MQTT 消息来控制主控板上 LED 的开关，所以在下方填写主题("LED")和消息内容("on")。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_14.png)
### 2. 代码
在代码编辑器中输入以下代码：
```python
import network
import mqtt
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)

led = Pin(13, Pin.OUT)
led.value(0)

SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio RP2040_Dev_board'
TOPIC = 'LED'

def mqtt_callback(topic):
    print('topic: {}'.format(topic[0]))
    print('msg:{}'.format(topic[1]))
    if(topic[1] == "off"):
        led.value(0)
    if(topic[1] == "on"):
        led.value(1)
    
cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()

    
cl.publish("webscket_test","start")
cl.subscribe(TOPIC)
cl.set_callback(mqtt_callback)
print('ok')

while True:
    cl.wait_msg()
    sleep(0.1)
```
**注意在代码第8行填写您的WiFi名称和密码**，然后运行程序。等待Shell窗口中出现"ok"提示，这意味着连接已成功。此时您可以在MQTTX中发送信息进行控制。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_15.png)

在软件右下角填写"LED"和"on"，然后点击发送图标。此时主控板的蓝色LED应该会点亮。您也可以通过发送"off"来关闭LED灯。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_16.png)
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_17.png)

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