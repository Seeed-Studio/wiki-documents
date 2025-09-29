---
title: Grove - GPS
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-GPS/
slug: /cn/Grove-GPS
last_update:
  date: 01/06/2022
  author: gunengyu
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/Grove-GPS.jpg" /><figcaption><b /><i /></figcaption>
</div>

这款 Grove - GPS 模块是一个成本效益高且可现场编程的设备，配备了 SIM28（u-blox 6 是旧版本）和串行通信配置。它具有 22 个跟踪 / 66 个捕获通道的 GPS 接收器。跟踪和捕获的灵敏度都达到了 -160dBm，使其成为个人导航项目和位置服务的绝佳选择，也是同价位产品中的杰出产品。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-GPS-Module.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>


:::tip
我们已经发布了 [Seeed GPS 模块选择指南](https://wiki.seeedstudio.com/cn/GPS-Modules-Selection-Guide/)，它将帮助您选择最适合您需求的 GPS 模块。
:::

## 版本

| 产品版本              | 变更                                                                                                                                                                                    | 发布日期 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - GPS V1.2 | 初始版本                                                                                                                                                                                    | 2015年10月      |

## 特性

- 支持 NMEA 和 u-blox 6 协议。（直到2014年1月10日，之后改为 SIM28）
- 低功耗
- 波特率可配置
- Grove 兼容接口

:::tip
 有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

| **参数**    | **范围/值**              |
|------------------|------------------------------|
| 输入电压    | 3.3/5V                       |
| 波特率         | 4800 - 57600（u-blox 版本） |
| 波特率         | 9600 - 115200（SIM28 版本） |
| 默认波特率 | 9600                         |

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与 Arduino 配合使用

此示例通过软件串口简单地从 GPS 读取数据，并将其发送回串口。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove - GPS |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-GPS/img/45d_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-GPS-p-959.html)|

- **步骤 2.** 将 Grove - GPS 连接到 Grove-Base Shield 的 **D2** 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 通过 USB 线将 Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/with_ardu.jpg)

:::note
 如果我们没有 Grove Base Shield，我们也可以直接将 Grove - GPS 连接到 Seeeduino，如下所示。
:::
| Seeeduino     | Grove - GPS |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| D3            | White                   |
| D2            | Yellow                  |

#### 软件

:::note
    请注意，u-center 软件仅适用于 Windows。
:::

- **步骤 1.** 安装 [u-center](https://www.u-blox.com/en/product/u-center-windows) 软件。
- **步骤 2.** 将代码复制到 Arduino IDE 中并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
#include <SoftwareSerial.h>
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];                   // buffer array for data receive over serial port
int count=0;                                // counter for buffer array
void setup()
{
    SoftSerial.begin(9600);                 // the SoftSerial baud rate
    Serial.begin(9600);                     // the Serial port of Arduino baud rate.
}

void loop()
{
    if (SoftSerial.available())                     // if date is coming from software serial port ==> data is coming from SoftSerial shield
    {
        while(SoftSerial.available())               // reading data into char array
        {
            buffer[count++]=SoftSerial.read();      // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer,count);                 // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();                         // call clearBufferArray function to clear the stored data from the array
        count = 0;                                  // set counter of while loop to zero 
    }
    if (Serial.available())                 // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());        // write it to the SoftSerial shield
}


void clearBufferArray()                     // function to clear buffer array
{
    for (int i=0; i<count;i++)
    {
        buffer[i]=NULL;
    }                      // clear all index of array with command NULL
}
```

- **步骤 3.** 打开 U-center。

- **步骤 4.** 点击 Receiver -> Port 并选择 Arduino 正在使用的 COM 端口。

- **步骤 5.** 点击 Receiver -> Baudrate 并确保选择了 9600。

- **步骤 6.** 点击 View -> Text Console，您应该会得到一个显示 NMEA 数据流的窗口。

- **步骤 7.** 打开串口监视器，您可以看到如下所示：

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/GPS_result.jpg)

**我们也可以在 Google Earth 中查看数据：**

- **步骤 1.** 点击 File -&gt; Database Export -&gt; Google Earth KML

- **步骤 2.** 这应该会启动 Google Earth，显示 u-center 捕获的历史记录。

- **步骤 3.** 或者，可以通过按工具栏上的红色圆圈来记录数据，然后会询问您要将记录保存在哪里。

- **步骤 4.** 当我们捕获了足够的数据后，点击黑色方块停止记录。

- **步骤 5.** 然后我们可以通过将生成的 .ubx 文件上传到 [GPSVisualizer](http://www.gpsvisualizer.com/) 来将其转换为 KML。

### 与 Raspberry Pi 配合使用

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove - GPS |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-GPS/img/45d_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。
- **步骤 3.** 使用 grove 线缆将传感器插入 grovepi+ 的 **RPISER** 接口。
- **步骤 4.** 通过 USB 线缆将 Raspberry 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/witu_rpi.jpg)

#### 软件

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。

- **步骤 2.** 导航到演示目录：

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
cd GrovePi/Software/Python/grove_gps
```

- **步骤 3.** 查看代码

```
nano grove_gps_data.py   # "Ctrl+x" 退出 #
```

```py
import serial, time
import smbus
import math
import RPi.GPIO as GPIO
import struct
import sys
#import ir_receiver_check

enable_debug=1
enable_save_to_file=0

#if ir_receiver_check.check_ir():
# print("Disable IR receiver before continuing")
# exit()
 
ser = serial.Serial('/dev/ttyAMA0',  9600, timeout = 0) #Open the serial port at 9600 baud
ser.flush()

def cleanstr(in_str):
 out_str = "".join([c for c in in_str if c in "0123456789.-" ])
 if len(out_str)==0:
  out_str = "-1"
 return out_str

def safefloat(in_str):
 try:
  out_str = float(in_str)
 except ValueError:
  out_str = -1.0
 return out_str

class GPS:
 #The GPS module used is a Grove GPS module https://www.seeedstudio.com/depot/Grove-GPS-p-959.html
 inp=[]
 # Refer to SIM28 NMEA spec file https://www.seeedstudio.com/wiki/images/a/a0/SIM28_DATA_File.zip
 GGA=[]


 #Read data from the GPS
 def read(self): 
  while True:
   GPS.inp=ser.readline()
   if GPS.inp[:6] =='$GPGGA': # GGA data , packet 1, has all the data we need
    break
   time.sleep(0.1)     #without the cmd program will crash
  try:
   ind=GPS.inp.index('$GPGGA',5,len(GPS.inp)) #Sometimes multiple GPS data packets come into the stream. Take the data only after the last '$GPGGA' is seen
   GPS.inp=GPS.inp[ind:]
  except ValueError:
   print ("")
  GPS.GGA=GPS.inp.split(",") #Split the stream into individual parts
  return [GPS.GGA]
  
 #Split the data into individual elements
 def vals(self):
  if enable_debug:
   print(GPS.GGA)
   
  time=GPS.GGA[1]
  
  if GPS.GGA[2]=='':  # latitude. Technically a float
   lat =-1.0
  else:
   lat=safefloat(cleanstr(GPS.GGA[2]))
  
  if GPS.GGA[3]=='':  # this should be either N or S
   lat_ns=""
  else:
   lat_ns=str(GPS.GGA[3])
   
  if  GPS.GGA[4]=='':  # longitude. Technically a float
   long=-1.0
  else:
   long=safefloat(cleanstr(GPS.GGA[4]))
  
  if  GPS.GGA[5]=='': # this should be either W or E
   long_ew=""
  else:
   long_ew=str(GPS.GGA[5])
   
  fix=int(cleanstr(GPS.GGA[6]))
  sats=int(cleanstr(GPS.GGA[7]))
  
  if  GPS.GGA[9]=='':
   alt=-1.0
  else:
   # change to str instead of float
   # 27"1 seems to be a valid value
   alt=str(GPS.GGA[9])
  return [time,fix,sats,alt,lat,lat_ns,long,long_ew]
 
 # Convert to decimal degrees
 def decimal_degrees(self, raw_degrees):
  try:
   degrees = float(raw_degrees) // 100
   d = float(raw_degrees) % 100 / 60
   return degrees + d
  except: 
   return raw_degrees


if __name__ == "__main__":
 g=GPS()
 if enable_save_to_file:
  f=open("gps_data.csv",'w') #Open file to log the data
  f.write("name,latitude,longitude\n") #Write the header to the top of the file
 ind=0
 while True:
  time.sleep(0.01)
  try:
   x=g.read() #Read from GPS
   [t,fix,sats,alt,lat,lat_ns,longitude,long_ew]=g.vals() #Get the individial values
    
   # Convert to decimal degrees
   if lat !=-1.0:
    lat = g.decimal_degrees(safefloat(lat))
    if lat_ns == "S":
     lat = -lat

   if longitude !=-1.0:
    longitude = g.decimal_degrees(safefloat(longitude))
    if long_ew == "W":
     longitude = -longitude
     
   # print ("Time:",t,"Fix status:",fix,"Sats in view:",sats,"Altitude",alt,"Lat:",lat,lat_ns,"Long:",long,long_ew)
   try:
    print("Time\t\t: %s\nFix status\t: %d\nSats in view\t: %d\nAltitude\t: %s\nLat\t\t: %f\nLong\t\t: %f") %(t,fix,sats,alt,lat,longitude)
   except:
    print("Time\t\t: %s\nFix status\t: %s\nSats in view\t: %s\nAltitude\t: %s\nLat\t\t: %s\nLong\t\t: %s") %(t,str(fix),str(sats),str(alt),str(lat),str(longitude))
    
   s=str(t)+","+str(safefloat(lat)/100)+","+str(safefloat(longitude)/100)+"\n" 
    
   if enable_save_to_file:
    f.write(s) #Save to file
   time.sleep(2)
  except IndexError:
   print ("Unable to read")
  except KeyboardInterrupt:
   if enable_save_to_file:
    f.close()
   print ("Exiting")
   sys.exit(0)
```

- **步骤 4.** 运行演示程序。

```
sudo python grove_gps_data.py
```

<div class="admonition note">
<p class="admonition-title">注意</p>
GPS 在户外使用效果更好。建议将您的树莓派放在窗外或任何户外场所。
</div>

## SIM28 模块说明

- **步骤 1.** Grove-GPS 已将模块更换为 SIM28，其封装与原版本相同。
- **步骤 2.** 我们应该使用 ["SIMCom GPS DEMO"](https://files.seeedstudio.com/wiki/Grove-GPS/res/SIMCom_GPS_DEMO_V1.07.zip) 工具来接收 SIM28 模块数据。
- **步骤 3.** 打开 SIMCom_GPS_DEMO 工具，转到 Module->properties->module->选择 SIM28。
- **步骤 4.** SIMCom_GPS_DEMO_V1.07 仅适用于 Windows 系统。

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/SIM28_module_select.jpg)

- **步骤 5.** 打开 SIMCom_GPS_DEMO 工具，转到 Module->connect。选择 GPS 模块使用的串口。

![](https://files.seeedstudio.com/wiki/Grove-GPS/img/SIM28_module_tools_pannel.jpg)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove-GPS Eagle 文件](https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.zip)
- **[PDF]** [GPS 原理图(PDF)](https://files.seeedstudio.com/wiki/Grove-GPS/res/GPS.pdf)
- **[数据手册]** [E-1612-UB 数据手册](https://files.seeedstudio.com/wiki/Grove-GPS/res/E-1612-UB_Datasheets_Sheet.pdf)
- **[数据手册]** [U-Blox6 接收器描述协议规范](https://files.seeedstudio.com/wiki/Grove-GPS/res/U-blox-6-Receiver-Description-Including-Protocol-Specification.zip)
- **[软件]** [U-Blox u-center GPS 评估软件](https://www.u-blox.com/en/product/u-center-windows)
- **[文档]**  [SIM28_DATA_File](https://files.seeedstudio.com/wiki/Grove-GPS/res/SIM28_DATA_File.zip)
- **[文档]** [SIMCom_GPS_DEMO_V1.07](https://files.seeedstudio.com/wiki/Grove-GPS/res/SIMCom_GPS_DEMO_V1.07.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_GPS -->

## 项目

**GPS/GPRS 追踪器项目**：在这个新项目中，我们将展示使用 GPRS 技术和 MQTT 协议连接的 GPS 追踪器。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>