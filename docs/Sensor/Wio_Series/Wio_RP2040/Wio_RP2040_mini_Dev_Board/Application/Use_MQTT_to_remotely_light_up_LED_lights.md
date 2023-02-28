---
title: Use MQTT to remotely light up LED lights
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Use_MQTT_to_remotely_light_up_LED_lights/
slug: /Use_MQTT_to_remotely_light_up_LED_lights
last_update:
  date: 01/11/2022
  author: gunengyu
---

MQTT is a Client Server publish/subscribe messaging transport protocol. The client can work as a publisher or subscriber or both.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_10.png)
The 
publisher can create a topic with messages attached to the topic. For example, I can create a new topic "Today's Weather" and the message content is "25 degrees Celsius", and then sent the message to the Server. After receiving the topic message, the publisher distributes the information to any clients that have subscribed to that topic. That is, the subscriber will receive the message of "25 degrees Celsius" only if it subscribes to the topic "Today's Weather". If the subscriber does not subscribe to the topic of  "Today's Weather", no matter what message the publisher sends, the subscriber will not receive the message.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_11.png)
### 1. Configure the MQTT server
Download the MQTTX server software and install it on the computer, and then configure the MQTT server.

---

We will use the free server of "mqtt.p2hp.com" in this project.
**Online server** 

- Address: mqtt.p2hp.com
- Ports: 1883 (TCP), 8083 (WebSocket)
- Type: EMQ
- MQTT V3.1.1/V5.0 compatible

---

Enter the MQTTX software to create a new connection, fill in the name, server, port, subject, and then click "Connect" to connect to the server.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

After the connection is successful, there will be a pop-up in the upper right corner of the software.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png)

Then set the topic and message below. In this project, we use MQTT messages to control the on and off of the LED on the main control board, so fill in the topic("LED") and message content ("on") below.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_14.png)
### 2. Code
Enter the following code into the code editor:
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
**Pay attention to fill in your WiFi name and password in line 8 of the code**, and then run the program. Wait for the prompt "ok" in the Shell window, which means that the connection has been successful. At that time you can send information in MQTTX for controlling.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_15.png)

Fill in "LED" and "on" in the lower right corner of the software and click the send icon. At this time, the blue LED of the main control board should be lit. You can also turn off the LED light by sending "off".

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_16.png)
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_17.png)

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>


