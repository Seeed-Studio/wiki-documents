---
title: Wireless desktop atmosphere lamp
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wireless-desktop-atmosphere-lamp/
slug: /Wireless-desktop-atmosphere-lamp
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Wireless desktop atmosphere lamp

Keeping a healthy mood in a busy workplace is very important, and ordinary people will buy a pot of cactus to put on their desktop for decoration and relaxation. As engineers, we also need items with the same function, and it would be the most wonderful thing to make a small glowing bonsai by ourselves. In this project, we will make a lighted wireless desktop ambient light. We can send commands wirelessly to control it to light up different colors to match our different moods, so let's see how to do it!

<div align="center">
  <iframe width={560} height={315} src="https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/display.mp4" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
</div>


## Hardware

- [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)
- [WS2812](https://www.seeedstudio.com/Digital-Full-Color-LED-Strip-with-APP-p-4780.html)
- Type-C data cable
- PC
- WiFi

### Wiring Diagram

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/wiring.jpg)

## Software

### 1. Install Thonny​

Easy to get started. Thonny comes with Python 3.7 built-in, so just one simple installer is needed and you're ready to learn to program. First, click [Thonny.org](https://thonny.org/) to enter the download page. In the upper right corner of the page, select the Thonny installation package according to your operating system to download. Double-click the installation package you downloaded to open it, and install it according to the steps.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny1.jpg)

Now that you have Thonny installed, open the application. You should see the main interface of Thonny:

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny2.jpg)

1. Toolbar: basic common tools, such as new, open, save, run the current script, stop, etc.

2. Code editor: Thonny's core area, where we will write Python/MicroPython code.

3. Shell: We can run commands here, and the results of the commands will be displayed in the Shell immediately. We also can see outputs of our code in the Shell window.

4. Interpreter: Here you can select the type of interpreter to compile the program. Click Python 3.7.9, find MicroPython (Raspberry pi Pico) in the pop-up menu, and click OK to switch the interpreter to Pico interpreter. You can also click "Tools>>>Options>>>Interpreter" to select.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny3.jpg)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny4.jpg)

### 2.Connect Wio RP2040 mini Dev Board

Use the data cable to connect the development board to the computer, and then click the "Restart backend" button on the toolbar. If Wio RP2040 is successfully connected to the computer, you will see the MicroPython version information and device name in the Shell.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny5.jpg)

### 3.Code

In order to call WS2812B RGB LED on MicroPython we need to import the library file of this WS2812B into the memory of Wio RP2040.
This is done as follows: Copy the following code, paste it into a new thorny editor window, then save it to the development board and rename it to "ws2812.py "

```python
import array, time
from machine import Pin
import rp2

# Configure the number of WS2812 LEDs.
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
    # Input a value 0 to 255 to get a color value.
    # The colours are a transition r - g - b - back to r.
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
Then create a new program window to write the following code.
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

**Note that on line 20 of the program, change your correct WiFi name and password.**

### 4.Setting up MQTT client

MQTT is a Client Server publish/subscribe messaging transport protocol. The client can work as a publisher or subscriber or both.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt1.jpg)

The publisher can create a topic with messages attached to the topic. For example, I can create a new topic "Today's Weather" and the message content is "25 degrees Celsius", and then sent the message to the Server. After receiving the topic message, the publisher distributes the information to any clients that have subscribed to that topic. That is, the subscriber will receive the message of "25 degrees Celsius" only if it subscribes to the topic "Today's Weather". If the subscriber does not subscribe to the topic of "Today's Weather", no matter what message the publisher sends, the subscriber will not receive the message.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt2.jpg)

Download the MQTTX server software and install it on the computer, and then configure the MQTT server.

---

We will use the free server of "mqtt.p2hp.com" in this project. **Online server**

- Address: mqtt.p2hp.com
- Ports: 1883 (TCP), 8083 (WebSocket)
- Type: EMQ
- MQTT V3.1.1/V5.0 compatible

---

Enter the MQTTX software to create a new connection, fill in the name, server, port, subject, and then click "Connect" to connect to the server. 

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt3.jpg)

After the connection is successful, there will be a pop-up in the upper right corner of the software.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt4.jpg)

Then set the topic and message below.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt6.jpg)

When data is received, the number of messages is displayed at the top. If you don't see the message, click on the subscription topic. 

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt7.jpg)

Here, the deployment of the MQTT client is completed. Next, go back to the Thonny editor and run the code. When it says "ok" and the connected WS2812B is lit in red, the program runs successfully.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt8.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/led.jpg)

## Appearance

For the exterior part we use acrylic board + wood board to make, you may need a laser engraving machine or saw.

You can just use my finished design for the base and panel and cut it with a laser engraver.

**[panel.zip](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/panel.zip)**

**[base.zip](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/base.zip)**

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img1.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img2.jpg)

The following parts were then obtained.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img3.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img4.jpg)

Next, splice the base part

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img6.jpg)

Then paste WS2812B on the part

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img7.jpg)

Debug the program and observe if the hardware is running properly

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img8.jpg)

If everything is done, you can use hot melt glue to glue the remaining boards together

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img9.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img10.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img11.jpg)

Finally, we send different commands in MQTTX to change its color wirelessly!

---

**Topic:** RGB_LED

**msg:** RED,BLACK,YELLOW,GREEN,CYAN,BLUE,PURPLE,WHITE

---

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt9.jpg)

Of course, you can also edit the code to try some different lighting effects. Share your work with me!

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img12.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img13.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img14.jpg)

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>

