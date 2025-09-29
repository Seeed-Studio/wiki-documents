---
title: 无线跌倒检测设备
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wireless-Fall-Detection-Device/
slug: /cn/Wireless-Fall-Detection-Device
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 无线跌倒检测设备
## 前言
随着越来越多的人在事业上努力奋斗，国民经济开始腾飞。然而，社会老龄化也将加深。没有年轻人的照顾，老年人的生活总是困难和危险的。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/fall.jpg)

每年，65岁及以上的人群中有三分之一到一半会经历跌倒。跌倒是老年人受伤的主要原因，也是75岁及以上人群意外死亡的主要原因。一个人跌倒而未被发现可能会带来双重危险。初始伤害的明显可能性如果在短时间内得不到治疗，可能会进一步加剧可能的后果。统计数据显示，最严重的后果不是跌倒的直接结果，而是延迟救助和治疗的结果。如果救援人员能够及时得到警报，跌倒的后果可以大大减少。

许多老年人在孩子长大离家后独自住在公寓或较小的房子里。跌倒后，老年人无法自己站起来或呼救的情况并不少见。因此，需要一个自动跌倒检测系统，即使患者失去意识或跌倒后无法站起来，也能呼救。

## 硬件

-  [Grove - 3轴数字加速度计 (LIS3DHTR)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) 
-  [Wio RP2040 mini 开发板](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) 来完成这个项目。

[Grove - 3轴数字加速度计 (LIS3DHTR)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) 可以用作检测跌倒的传感器，[Wio RP2040 mini 开发板](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) 可以用来处理数据并无线发送求救信息。此外，您需要一台计算机和WiFi。
​

### 接线图

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/wiring.jpg)
​

## [软件](https://wiki.seeedstudio.com/cn/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/#software)
### 1. 安装 Thonny
易于上手。Thonny 内置 Python 3.7，因此只需要一个简单的安装程序，您就可以开始学习编程了。首先，点击 [Thonny.org](https://thonny.org/) 进入下载页面。在页面右上角，根据您的操作系统选择 Thonny 安装包进行下载。双击您下载的安装包打开它，并按照步骤进行安装。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny1.jpg)

现在您已经安装了 Thonny，打开应用程序。您应该看到 Thonny 的主界面：

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny2.jpg)
 Thonny 的主界面非常简单，分为以下四个部分：

1. 工具栏：基本常用工具，如新建、打开、保存、运行当前脚本、停止等。

2. 代码编辑器：Thonny 的核心区域，我们将在这里编写 Python/MicroPython 代码。

3. Shell：我们可以在这里运行命令，命令的结果将立即在 Shell 中显示。我们也可以在 Shell 窗口中看到代码的输出。

4. 解释器：在这里您可以选择解释器类型来编译程序。点击 Python 3.7.9，在弹出菜单中找到 MicroPython (Raspberry pi Pico)，点击确定将解释器切换到 Pico 解释器。您也可以点击"工具>>>选项>>>解释器"进行选择。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny3.jpg)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny4.jpg)

### 2.连接 Wio RP2040 mini 开发板

使用数据线将开发板连接到计算机，然后点击工具栏上的"重启后端"按钮。如果 Wio RP2040 成功连接到计算机，您将在 Shell 中看到 MicroPython 版本信息和设备名称。

 ![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny5.jpg)

### 3.代码

为了使用3轴数字加速度计，我们需要将传感器的库文件导入到 Wio RP2040 的内存中。操作如下：
复制以下代码，将其粘贴到新的 thonny 编辑器窗口中，然后将其保存到开发板并重命名为"ACC_Adxl345.py"

```python
from machine import I2C
import time

ADXL345_DEVICE = (0x53)

""" ------- 寄存器名称 ------- """
ADXL345_DEVID           =0x00
ADXL345_RESERVED1       =0x01
ADXL345_THRESH_TAP      =0x1d
ADXL345_OFSX            =0x1e
ADXL345_OFSY            =0x1f
ADXL345_OFSZ            =0x20
ADXL345_DUR             =0x21
ADXL345_LATENT          =0x22
ADXL345_WINDOW          =0x23
ADXL345_THRESH_ACT      =0x24
ADXL345_THRESH_INACT    =0x25
ADXL345_TIME_INACT      =0x26
ADXL345_ACT_INACT_CTL   =0x27
ADXL345_THRESH_FF       =0x28
ADXL345_TIME_FF         =0x29
ADXL345_TAP_AXES        =0x2a
ADXL345_ACT_TAP_STATUS  =0x2b
ADXL345_BW_RATE         =0x2c
ADXL345_POWER_CTL       =0x2d
ADXL345_INT_ENABLE      =0x2e
ADXL345_INT_MAP         =0x2f
ADXL345_INT_SOURCE      =0x30
ADXL345_DATA_FORMAT     =0x31
ADXL345_DATAX0          =0x32
ADXL345_DATAX1          =0x33
ADXL345_DATAY0          =0x34
ADXL345_DATAY1          =0x35
ADXL345_DATAZ0          =0x36
ADXL345_DATAZ1          =0x37
ADXL345_FIFO_CTL        =0x38
ADXL345_FIFO_STATUS     =0x39

ADXL345_BW_1600         =0xF                 #  1111
ADXL345_BW_800          =0xE                 #  1110
ADXL345_BW_400          =0xD                 #  1101
ADXL345_BW_200          =0xC                 #  1100
ADXL345_BW_100          =0xB                 #  1011
ADXL345_BW_50           =0xA                 #  1010
ADXL345_BW_25           =0x9                 #  1001
ADXL345_BW_12           =0x8                 #  1000
ADXL345_BW_6            =0x7                 #  0111
ADXL345_BW_3            =0x6                 #  0110

"""
中断引脚
INT1: 0
INT2: 1
"""
ADXL345_INT1_PIN            =0x00
ADXL345_INT2_PIN            =0x01

"""中断位位置"""
ADXL345_INT_DATA_READY_BIT  =0x07
ADXL345_INT_SINGLE_TAP_BIT  =0x06
ADXL345_INT_DOUBLE_TAP_BIT  =0x05
ADXL345_INT_ACTIVITY_BIT    =0x04
ADXL345_INT_INACTIVITY_BIT  =0x03
ADXL345_INT_FREE_FALL_BIT   =0x02
ADXL345_INT_WATERMARK_BIT   =0x01
ADXL345_INT_OVERRUNY_BIT    =0x00

ADXL345_DATA_READY          =0x07
ADXL345_SINGLE_TAP          =0x06
ADXL345_DOUBLE_TAP          =0x05
ADXL345_ACTIVITY            =0x04
ADXL345_INACTIVITY          =0x03
ADXL345_FREE_FALL           =0x02
ADXL345_WATERMARK           =0x01
ADXL345_OVERRUNY            =0x00

ADXL345_OK                  =1                   #  无错误
ADXL345_ERROR               =0                   #  表示存在错误

ADXL345_NO_ERROR            =0                   #  初始状态
ADXL345_READ_ERROR          =1                   #  读取加速度计时出现问题
ADXL345_BAD_ARG             =2                   #  错误的方法参数


class AccelerationAdxl345(object):

    def __init__(self, i2c, addr=ADXL345_DEVICE, drdy=None):
        self.i2c_device = i2c
        time.sleep(0.1)
        #self.rgbMatrixData = [0xFF]*64

    def read(self, reg_base, reg, buf):
        self.write(reg)
        time.sleep(.001)
        self.i2c_device.readfrom_into(59,buf)

    def write(self, buf=None):
        if buf is not None:
            self.i2c_device.writeto(ADXL345_DEVICE, buf)
        # i2c_device.writeto(0x58, bytearray([3,100,100,16,39]))

    def writeTo(self,address, val):
        dta_send = bytearray([address, val])
        self.write(dta_send)
    
    def readFrom(self, address, num):
        data_0 = address & 0xff
        dta_send = bytearray([data_0])
        self.write(dta_send)
        time.sleep(.001)
        result=self.i2c_device.readfrom(ADXL345_DEVICE, num)
        return result

    def setRegisterBit(self, regAdress,  bitPos,  state):  
        bytes=self.readFrom(regAdress, 1)
        for _b in bytes:
            value = int(_b)
        if (state):
            value |= (1 << bitPos)                 
        else:
            value &= ~(1 << bitPos)                   
        self.writeTo(regAdress, value)

    def acc_adxl345_init(self):
        #启动ADXL345
        self.writeTo(ADXL345_POWER_CTL, 0)
        self.writeTo(ADXL345_POWER_CTL, 16)
        self.writeTo(ADXL345_POWER_CTL, 8)

        self.writeTo(ADXL345_THRESH_ACT, 75)
        self.writeTo(ADXL345_THRESH_INACT, 75)
        self.writeTo(ADXL345_TIME_INACT, 10)

        #在这些轴上查找活动运动 - 1 == 开启; 0 == 关闭
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 6, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 5, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 4, 1)

        #在这些轴上查找非活动运动 - 1 == 开启; 0 == 关闭
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 2, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 1, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 0, 1)

        self.setRegisterBit(ADXL345_TAP_AXES, 2, 0)
        self.setRegisterBit(ADXL345_TAP_AXES, 1, 0)
        self.setRegisterBit(ADXL345_TAP_AXES, 0, 0)

        #设置什么是轻敲和什么是双击的值 (0-255)
        #setTapThreshold(50); # 每增量62.5mg
        self.writeTo(ADXL345_THRESH_TAP, 50)

        self.writeTo(ADXL345_DUR, 15)

        self.writeTo(ADXL345_LATENT, 80)

        #setDoubleTapWindow(200); # 每增量1.25ms
        self.writeTo(ADXL345_WINDOW, 200)

        #设置什么被认为是自由落体的值 (0-255)

        self.writeTo(ADXL345_THRESH_FF, 7)

        self.writeTo(ADXL345_TIME_FF, 45)
        #设置所有中断在int引脚1上发生
        #我在int引脚2上遇到了问题，无法重置它

        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_SINGLE_TAP_BIT,   ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_DOUBLE_TAP_BIT,   ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_FREE_FALL_BIT,    ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_ACTIVITY_BIT,     ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_INACTIVITY_BIT,   ADXL345_INT1_PIN)

        #注册中断动作 - 1 == 开启; 0 == 关闭
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_SINGLE_TAP_BIT, 1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_DOUBLE_TAP_BIT, 1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_FREE_FALL_BIT,  1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_ACTIVITY_BIT,   1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_INACTIVITY_BIT, 1)

    def acc_adxl345_read_xyz(self):
        ADXL345_TO_READ = (6)
        _buff = self.readFrom(ADXL345_DATAX0, ADXL345_TO_READ) #从ADXL345读取加速度数据
        if _buff[1] <= 0:
            x=_buff[0]
        else:
            x=(_buff[0]-255)

        if _buff[3] <= 0:
            y=_buff[2]
        else:
            y=(_buff[2]-255)

        if _buff[5] <= 0:
            z=_buff[4]
        else:
            z=(_buff[4]-255)

        #x = int(((_buff[1]) << 8) | _buff[0]) 
        #y = int(((_buff[3]) << 8) | _buff[2]) 
        #z = int(((_buff[5]) << 8) | _buff[4]) 

        #print("%d, %d, %d\r\n", x, y, z) 
        return [x,y,z]

    def acc_adxl345_read_acc(self):
        __Gains = [0.00376390, 0.00376009, 0.00389265]
        xyz=self.acc_adxl345_read_xyz()

        ax = xyz[0] * __Gains[0]
        ay = xyz[1] * __Gains[1]
        az = xyz[2] * __Gains[2]
        return [ax,ay,az]

    def get_acc_adxl345_property(self,xyz):
        axyz=self.acc_adxl345_read_acc()
        if(xyz == 0):
            return axyz[0]
        if(xyz == 1):
            return axyz[1]
        if(xyz == 2):
            return axyz[2]

"""
acceleration = AccelerationAdxl345()
acceleration.acc_adxl345_init()
acceleration.get_acc_adxl345_property(0)
acceleration.get_acc_adxl345_property(1)
acceleration.get_acc_adxl345_property(2)
"""


```

然后创建一个新的程序窗口来编写以下代码。

```python
import network
import mqtt
from Acc_Adxl345 import AccelerationAdxl345
from machine import Pin,I2C
from time import sleep
i2c = I2C(0,sda = Pin(4),scl= Pin(5))
ax = AccelerationAdxl345(i2c)
ax.acc_adxl345_init()

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)
print('network information:', N1.ifconfig())
led = Pin(13, Pin.OUT)
button = Pin(12,Pin.IN,Pin.PULL_UP)
led.value(1)

SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio_RP2040'
TOPIC = 'Security_status'

def mqtt_callback(topic):
    print('topic: {}'.format(topic[0]))
    print('msg:{}'.format(topic[1]))
    
cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()
cl.set_callback(mqtt_callback)

val_last = 1
print("ready")
cl.publish(TOPIC,"ready")

while True:
    a = ax.acc_adxl345_read_acc()
    b = ax.acc_adxl345_read_acc()
    for i in range(0,3):
        a[0] = a[i] * a[i]
        b[0] = b[i] * b[i]
    if a[0] - b[0] > 0.4 or b[0] - a[0] > 0.4:
        cl.publish(TOPIC,"help!")
```

**注意在程序的第12行，更改为您正确的WiFi名称和密码。**
**​**

### 4.设置MQTT客户端
MQTT是一个客户端服务器发布/订阅消息传输协议。客户端可以作为发布者或订阅者或两者兼而有之。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt1.jpg)

发布者可以创建一个主题，并将消息附加到该主题。例如，我可以创建一个新主题"今天的天气"，消息内容是"25摄氏度"，然后将消息发送到服务器。发布者收到主题消息后，将信息分发给任何订阅了该主题的客户端。也就是说，订阅者只有在订阅了"今天的天气"主题时才会收到"25摄氏度"的消息。如果订阅者没有订阅"今天的天气"主题，无论发布者发送什么消息，订阅者都不会收到消息。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt2.jpg)


下载MQTTX服务器软件并在计算机上安装，然后配置MQTT服务器。

---

在这个项目中我们将使用"mqtt.p2hp.com"的免费服务器。**在线服务器**

- 地址：mqtt.p2hp.com
- 端口：1883（TCP），8083（WebSocket）
- 类型：EMQ
- MQTT V3.1.1/V5.0兼容

---

进入MQTTX软件创建新连接，填写名称、服务器、端口、主题，然后点击"连接"连接到服务器。
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt3.jpg)

连接成功后，软件右上角会有弹窗提示。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt4.jpg)

然后在下方设置主题和消息。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt6.jpg)

当接收到数据时，顶部会显示消息数量。如果您没有看到消息，请点击订阅主题。
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt7.jpg)

至此，MQTT客户端的部署完成。让我们回到Thorny编辑器运行代码，然后从高处丢下3轴数字加速度计，观察mqtt客户端是否收到了消息。

<iframe width="560" height="315" src="https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/show.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt8.jpg)

## 安装和测试

如果您成功收到了消息，恭喜您已经完成了大部分工作。接下来，您只需要将电池连接到开发板，并将设备固定在5cm * 5cm的纸板上。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/sample.jpg)

最后，将其放入布袋中。这个简单的跌倒检测设备就完成了！到目前为止，这个项目只是一个简单的实验原型。在实际应用中可能会有一些误触。您也可以给我反馈，我们将一起优化这个项目。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/device.jpg)

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