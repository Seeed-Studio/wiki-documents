---
name: BeagleBone® Green Wireless
category: BeagleBone®
bzurl: https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Wireless-p-2650.html
oldwikiname: SeeedStudio_BeagleBone_Green_Wireless
prodimagename: BBGW_cover.png
surveyurl: https://www.surveymonkey.com/r/bbg_w
sku: 102010048
---

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/BBGW_cover.png?raw=true)

Seeed Studio BeagleBone® Green Wireless is a joint effort by [BeagleBoard.org](http://beagleboard.org) and Seeed Studio. It is based on the open-source hardware design of [BeagleBone® Black](http://beagleboard.org/black) and developed into this differentiated version. Seeed Studio BeagleBone® Green Wireless has included a high-performance flexible WiFi/Bluetooth interface and two Grove connectors, making it easier to connect to the large family of Grove sensors. The on-board HDMI and Ethernet are removed to make room for these wireless features and Grove connectors.

<iframe width="1111" height="625" src="https://www.youtube.com/embed/tlA97rhKG10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


[![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/get_one_now.png?raw=true)](http://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Wireless-p-2650.html)

## Features
----

* **Fully Compatiable with BeagleBone® Black**
* **Processor: AM335x 1GHz ARM® Cortex-A8**
	* 512MB DDR3 RAM
	* 4GB 8-bit eMMC on-board flash storage
	* 3D graphics accelerator
	* NEON floating-point accelerator
	* 2x PRU 32-bit microcontrollers

* **Connectivity**
	* USB client for power & communications
	* USB host with 4-port hub
	* WiFi 802.11 b/g/n 2.4GHz
	* Bluetooth 4.1 with BLE
	* 2x 46 pin headers
	* 2x Grove connectors (I2C and UART)

* **Software Compatibility**
	* Debian
	* Android
	* Ubuntu
	* Cloud9 IDE on Node.js w/ BoneScript library
	* plus much more

## Specification
----

|Item|Value|
|----|------|
|Processor|	AM335x 1GHz ARMR Cortex-A8|
|RAM|	512MB DDR3|
|on-board Flash Storage	|4GB eMMC|
|CPU Supports	|NEON floating-point & 3D graphics accelerator|
|Micro USB	Supports |powering & communications|
|USB |USB2.0 Host	*4|
|Grove Connectors	|2 (One I2C and One UART) |
|GPIO	|2 x 46 pin headers|
|Ethernet	|Wi-Fi 802.11b/g/n 2.4GHz and Bluetooth 4.1 LE|
|Operating Temperature	|0 ~ 75 |


## Application Ideas
- Internet of Things
- Smart House
- Industrial
- Automation & Process Control
- Human Machine Interface
- Sensor Hub
- Robot


###Seeed Studio BeagleBone® Green Wireless Starter Tutorial #1-#6
Here are some tutorials for the starters to use some Grove modules to realize their interesting ideas with Seeed Studio BeagleBone® Green Wireless. The tutorials are based on Python and mraa/upm library.  

|#1 The Breath LED|#2 Storm on your table|#3 Speak Louuuuuudly|
|---------------|-----|--------------|
|![](http://statics3.seeedstudio.com/seeed/img/2016-06/OHfZigwiAdjKOyhXkxIsIzGW.jpg)|![](http://statics3.seeedstudio.com/seeed/img/2016-06/auGIP35SMMZsK87FELS1pkRF.jpg)|![](http://statics3.seeedstudio.com/seeed/img/2016-06/GmpI3336wzuJ3teZ3O4GXMSB.jpg)|
|[MAKE IT NOW!](https://community.seeedstudio.com/BBGW-starter-tutorial%231-The-breath-LED-p-1641.html)|[MAKE IT NOW!](https://community.seeedstudio.com/BBGW-starter-tutorial%232%3A-storm-on-your-table-p-1643.html)|[MAKE IT NOW!](https://community.seeedstudio.com/BBGW-starter-tutorial%233-Speak-louuuuuudly-p-1644.html)|

|#4 How hot is it today?|#5 Where are you?|#6 My Little alarm clock|
|---------------|-----|--------------|
|![](http://statics3.seeedstudio.com/seeed/img/2016-06/THIPlcFCtqtxnSWBkiJPf59M.jpg)|![](http://statics3.seeedstudio.com/seeed/img/2016-06/tOZJ1MeVXARwuqxTkfYD2aUx.jpg)|![](http://statics3.seeedstudio.com/seeed/img/2016-06/tuZhqFgoabZkjJFpHBUzeKrO.jpg)|
|[MAKE IT NOW!](https://community.seeedstudio.com/BBGW-starter-tutorial%234%3AHow-hot-is-it-today%3F-Ask-BBGW!-p-1645.html)|[MAKE IT NOW!](https://community.seeedstudio.com/BBGW-starter-tutorial%235-Where-are-you%3F-p-1648.html)|[MAKE IT NOW!](https://community.seeedstudio.com/BBGW-starter-tutorial%236-My-little-alarm-clock-p-1646.html)|

###Funny Projects

|Bluetooth Device Detection|Home Control Center|SAP HCP IoT Service|
|---------------|-----|--------------|
|![](http://statics3.seeedstudio.com/upload/img/community/20160526075527-90edbd.png)|![](http://statics3.seeedstudio.com/upload/img/community/20160524014508-4a47a0.png)|![](http://statics3.seeedstudio.com/upload/img/community/20160523121641-1ed045.png)|
|[MAKE IT NOW!](https://community.seeedstudio.com/Bluetooth-Device-Detection-with-the-BeagleBone-Green-Wireless-p-1601.html)|[MAKE IT NOW!](https://community.seeedstudio.com/Home-Control-Center-using-BeagleBone-Green-Wireless-p-1596.html)|[MAKE IT NOW!](https://community.seeedstudio.com/SAP-HCP-IOT-SERVICE-WITH-WIOLINK-p-1581.html)|


## Hardware Overview

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/green_wireless_hardware_details.png?raw=true)

###Pin map

Each digital I/O pin has 8 different modes that can be selected, including GPIO.

####65 Possible Digital I/Os

!!!Note
    In GPIO mode, each digital I/O can produce interrupts.

![enter image description here](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/BeagleBoneGreenWirelessPins.jpg?raw=true)

####PWMs and Timers

!!!Note
    Up to 8 digital I/O pins can be configured with pulse-width modulators (PWM) to produce signals to control motors or create pseudo analog voltage levels, without taking up any extra CPU cycles.

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/cape-headers-pwm.png?raw=true)

####Analog Inputs

!!!Note
    Make sure you don't input more than 1.8V to the analog input pins. This is a single 12-bit analog-to-digital converter with 8 channels, 7 of which are made available on the headers.

![enter image description here](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/cape-headers-analog.png?raw=true)


####UART

!!!Note
    There is a dedicated header for getting to the UART0 pins and connecting a debug cable. Five additional serial ports are brought to the expansion headers, but one of them only has a single direction brought to the headers.

![enter image description here](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/cape-headers-serial.png?raw=true)


####I2C

!!!Note
    The first I2C bus is utilized for reading EEPROMS on cape add-on boards and can't be used for other digital I/O operations without interfering with that function, but you can still use it to add other I2C devices at available addresses. The second I2C bus is available for you to configure and use.

![enter image description here](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/cape-headers-i2c.png?raw=true)

####SPI

!!!Note
    For shifting out data fast, you might consider using one of the SPI ports.

![enter image description here](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/cape-headers-spi.png?raw=true)


## Mechincal Drawing

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/raw/master/images/bbgw_drawing_1.png)

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/raw/master/images/bbgw_drawing_2.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=3b02b643-b219-43b8-b5d5-d8e886608aaa" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>




## Getting Started
----

!!!Note
    This chapter is writing under Win10. The steps are familiar for the other operate systems.

###STEP1. Plug in your Seeed Studio BeagleBone® Green Wireless via USB
Use the provided micro USB cable to plug your Seeed Studio BeagleBone® Green Wireless into your computer. This will both power the board and provide a development interface. Seeed Studio BeagleBone® Green Wireless will boot Linux from the **on-board 2GB** or 4GB eMMC.

Seeed Studio BeagleBone® Green Wireless will operate as a flash drive providing you with a local copy of the documentation and drivers. Note that this interface may not be used to re-configure the microSD card with a new image, but may be used to update the boot parameters using the uEnv.txt file.

You’ll see the PWR LED lit steadily. Within 10 seconds, you should see the other LEDs blinking in their default configurations.

- D2 is configured at boot to blink in a heartbeat pattern
- D3 is configured at boot to light during microSD card accesses
- D4 is configured at boot to light during CPU activity
- D5 is configured at boot to light during eMMC accesses

###STEP2. Install Drivers

Install the drivers for your operating system to give you network-over-USB access to your Beagle. Additional drivers give you serial access to your board.

|Operating System |	USB Drivers |	Comments |
|---------------------|---------|------------|
|Windows (64-bit) |	[64-bit installer](http://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)	 | |
|Windows (32-bit) |	[32-bit installer](http://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
|Mac OS X|[Network](http://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [Serial](http://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | Install both sets of drivers.|
|Linux|[mkudevrule.sh](http://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|Driver installation isn't required, but you might find a few udev rules helpful.|

!!!Note
    For window system, please note that:

    * Windows Driver Certification warning may pop up two or three times. Click "Ignore", "Install" or "Run"
    * To check if you're running 32 or 64-bit Windows see [this](https://support.microsoft.com/kb/827218).
    *  On systems without the latest service release, you may get an error (0xc000007b). In that case, please [install](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523) and retry:
    * You may need to reboot Windows.
    * These drivers have been tested to work up to Windows 10


###STEP3. Browse to your Beagle

Using either Chrome or Firefox (Internet Explorer will NOT work), browse to the web server running on your board. It will load a presentation showing you the capabilities of the board. Use the arrow keys on your keyboard to navigate the presentation.

Click [http://192.168.7.2](http://192.168.7.2) to launch to your Seeed Studio BeagleBone® Green Wireless.
Older software images require you to EJECT the BeagleBone® drive to start the network. With the latest software image, that step is no longer required.

[![Click to view larger image](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/launch.png)](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/launch.png)

###STEP4. Cloud9 IDE

To begin editing programs that live on your board, you can use the Cloud9 IDE by click

[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/cloud9.png)](http://192.168.7.2:3000/ide.html)

###STEP5. Connect your Seeed Studio BeagleBone® Green Wireless to Wi-Fi

Using your smart phone or computer to scan local Wi-Fi network and connect to the AP named "BeagleBone® XXX"

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/wifi1.png?raw=true)

After connection succeeded, it will head to the login page automatically. Select the SSID of your Wi-Fi and enter the passwd, click OK.

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/wifi2.png?raw=true)

Now your Seeed Studio BeagleBone® Green Wireless is connected to Wi-Fi.

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/wifi3.png?raw=true)

###STEP6. Connect your Seeed Studio BeagleBone® Green Wireless to your Bluetooth Device

Connect to Cloud9 IDE and start a new terminal.
Start the bluetooth config with the command:

```
bb-wl18xx-bluetooth
bluetoothctl
```

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/bluetooth1.jpg?raw=true)

Type ``scan on`` to scan local bluetooth devices. My device named "jy" is found.

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/bluetooth2.jpg?raw=true)

Copy the device mac address, then contect to the device  with the command:

```
pair 0C:xx:xx:xx:xx:0B
trust 0C:xx:xx:xx:xx:0B
connect 0C:xx:xx:xx:xx:0B
```

![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/bluetooth3.jpg?raw=true)

Now your Seeed Studio BeagleBone® Green Wireless is connected to your bluetooth device. Type ``quit`` back to the terminal.
Play music on Seeed Studio BeagleBone® Green Wireless, then you will hear music on your bluetooth speaker device.

## Update to latest software
-----

You need to update the board to latest software to keep a better performance, here we will show you how to make it step by step.

###STEP1. Download the latest software image

First of all, you have to download the suitable image here.

[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green_Wireless/master/images/download_the_lastest_image_of_bbgw.png)](http://beagleboard.org/latest-images?tdsourcetag=s_pcqq_aiomsg)

!!!Note
    Due to sizing necessities, this download may take about 30 minutes or more.

The file you download will have an **.img.xz** extension. This is a compressed sector-by-sector image of the SD card.

###STEP2. Install compression utility and decompress the image

Download and install [7-zip.](http://www.7-zip.org/download.html)

!!!Note
    Choose a version that suitable for your system.

Use 7-zip to decompress the SD card **.img file**

###STEP3. Install SD card programming utility

Download and install [Image Writer for Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download). Be sure to download the binary distribution.

###STEP4. Write the image to your SD card

You need a SD adapter to connect your microSD card to your computer at the first. Then use the software Image Write for Windows to write the decompressed image to your SD card.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/win32_disk_image.png)

Click on **Write** button, then the process is started.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/win32_disk_image_process.png)

!!!Note
    * You may see a warning about damaging your device. This is fine to accept as long as you are pointing to your SD card for writing.
    * You should not have your BeagleBone® connected to your computer at this time.
    * This process may need up to 10 minutes.


###STEP5. Boot your board off of the SD card

Insert SD card into your (powered-down first) board. Then the board will boot from the SD card.

!!!Note
    If you don't need to write the image to your on-board eMMC, you don't need to read the last of this chapter.  Otherwise pleas go ahead.

If you desire to write the image to your on-board eMMC, you need to launch to the board, and modify a file.

In **/boot/uEnv.txt**:

    ##enable Generic eMMC Flasher:
    ##make sure, these tools are installed: dosfstools rsync
    #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

Change to:

    ##enable Generic eMMC Flasher:
    ##make sure, these tools are installed: dosfstools rsync
    cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

Then you will find the 4 user led light as below:

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/flashing.gif)

!!!Note
    If you don't find the upper tracing light, please power down and power up the board.

When the flashing is complete, all 4 USRx LEDs will be **off**. The latest Debian flasher images automatically power down the board upon completion. This can take up to **10 minutes**. Power-down your board, remove the SD card and apply power again to be complete.


## Program Grove Module with Mraa and UPM

We have provided Mraa library and UPM library to make it easy for developers and sensor manufacturers to map their sensors & actuators on top of supported hardware and to allow control of low level communication protocol by high level languages & constructs.
###What are Mraa and UPM?
Mraa is a C/C++ library with bindings to Python, Javascript and Java to interface with the I/O on Seeed Studio BeagleBone® Green, Seeed Studio BeagleBone® Green Wireless and other platforms, with a structured and sane API where port names/numbering matches the board that you are on. Use of Mraa does not tie you to specific hardware with board detection done at runtime you can create portable code that will work across the supported platforms.
UPM is a high level repository for sensors that use MRAA. Each sensor links to MRAA and are not meant to be interlinked although some groups of sensors may be. Each sensor contains a header which allows to interface with it. Typically a sensor is represented as a class and instantiated.The constructor is expected to initialise the sensor and parameters may be used to provide identification/pin location on the board.

###Install and update
Mraa and UPM are already installed in the system image of Seeed Studio BeagleBone® Green Wireless, so **you don't need to install it.** However if you want to update the library, or want to upgrade the library, use ``apt-get update`` and ``apt-get upgrade`` please. Refer to [https://github.com/intel-iot-devkit/mraa](https://github.com/intel-iot-devkit/mraa) and [https://github.com/intel-iot-devkit/upm](https://github.com/intel-iot-devkit/upm) for more information.

###Mraa Example

- light a led

```
import mraa
import time
#mraa.gpio60 = P9_14 = GPIO_50
led = mraa.Gpio(60)
led.dir(mraa.DIR_OUT)

while True:
    led.write(1)
    time.sleep(1)
    led.write(0)
    time.sleep(1)

```

- Grove - PIR Sensor

```
import mraa
import time
#mraa.gpio73 = P9_27 = GPIO_115
pir = mraa.Gpio(73)
pir.dir(mraa.DIR_IN)

while True:
    print (pir.read())
    time.sleep(1)
```

- Grove - Rotary Angle Sensor

```
import mraa
import time
#mraa.aio1 = AIN0
rotary = mraa.Aio(1)

while True:
    print(rotary.read())
    time.sleep(1)
```

- More Tutorials

[Grove - 3-Axis Digital Accelerometer(±16g)
 Grove - Variable Color LED](https://community.seeedstudio.com/BBGW-starter-tutorial%231-The-breath-LED-p-1641.html)

[Grove - Mini Fan
Grove - PIR Motion Sensor
Grove - Rotary Angle Sensor
](https://community.seeedstudio.com/BBGW-starter-tutorial%232%3A-storm-on-your-table-p-1643.html)

[Grove - Relay
Grove - Sound Sensor
](https://community.seeedstudio.com/BBGW-starter-tutorial%233-Speak-louuuuuudly-p-1644.html)

[Grove - OLED Display 0.96”
Grove - Light Sensor
Grove - Temperature Sensor
](https://community.seeedstudio.com/BBGW-starter-tutorial%234%3AHow-hot-is-it-today%3F-Ask-BBGW!-p-1645.html)

[Grove - GPS
Grove - Button(P)
Grove - Buzzer
Grove - RTC v2.0
](https://community.seeedstudio.com/BBGW-starter-tutorial%235-Where-are-you%3F-p-1648.html)


###Mraa Map for Seeed Studio BeagleBone® Green Wireless

![GPIO](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/BBGW_Mraa_Gpio.png?raw=true)

![I2C](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/BBGW_Mraa_I2C.png?raw=true)

![PWM](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/BBGW_Mraa_PWM.png?raw=true)

![ADC_IN](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/BBGW_Mraa_ADC.png?raw=true)

![UART](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/BBGW_Mraa_UART.png?raw=true)

## Grove for Seeed Studio BeagleBone® Green
------

Grove is a modular, standardized connecter prototyping system. Grove takes a building block approach to assembling electronics. Compared to the jumper or solder based system, it is easier to connect, experiment and build and simplifies the learning system, but not to the point where it becomes dumbed down.  Some of the other prototype systems out there takes the level down to building blocks.   Good stuff to be learned that way, but the Grove system allows you to build real systems.   It requires some learning and expertise to hook things up.

Below listed the Grove modules that work well with Seeed Studio BeagleBone® Green.


|SKU        |Name|Interface|link|
|-----------|-----|-----|----------|
|101020054  |Grove - 3-Axis Digital Accelerometer(+16g)     |	I2C| [link](http://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)|
|101020071  |Grove - 3-Axis Digital Accelerometer(+400g)    |	I2C| [link](http://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|
|101020034  |Grove - 3-Axis Digital Compass                 |	I2C| [link](http://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|
|101020050  |Grove - 3-Axis Digital Gyro                    |	Analog| [link](http://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|
|101020081	|Grove - 6-Axis Accelerometer&Compass v2.0      |	I2C| [link](http://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html)|
|101020072	|Grove - Barometer Sensor(BMP180)              |	I2C| [link](http://www.seeedstudio.com/Grove-Barometer-Sensor-%28BMP180%29-p-1840.html)|
|104030010	|Grove - Blue LED                               |	I/O| [link](http://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|
|101020003	|Grove - Button	                                |I/O| [link](http://www.seeedstudio.com/Grove-Button-p-766.html)|
|111020000	|Grove - Button(P)	                            |I/O| [link](http://www.seeedstudio.com/Grove-Button%28P%29-p-1243.html)|
|107020000	|Grove - Buzzer	                                |I/O| [link](http://www.seeedstudio.com/Grove-Buzzer-p-768.html)|
|104030006	|Grove - Chainable RGB LED	                    |I2C| [link](http://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
|101020030	|Grove - Digital Light Sensor	                |I2C| [link](http://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|
|103020024	|Grove - Finger-clip Heart Rate Sensor	        |I2C| [link](http://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html)|
|101020082	|Grove - Finger-clip Heart Rate Sensor with shell	|I2C|[link](http://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)|
|113020003	|Grove - GPS	                        |UART| [link](http://www.seeedstudio.com/Grove-GPS-p-959.html)|
|104030007	|Grove - Green LED	|I/O| [link](http://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020013	|Grove - I2C ADC	|I2C| [link](http://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020006	|Grove - I2C Hub	|I2C| [link](http://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)|
|101020079	|Grove - IMU 10DOF	|I2C| [link](http://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|101020080	|Grove - IMU 9DOF v2.0	|I2C| [link](http://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|
|101020040	|Grove - IR Distance Interrupter	|I/O| [link](http://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
|104030011	|Grove - OLED Display 0.96''	|I2C| [link](http://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|
|104030008	|Grove - OLED Display 1.12''	|I2C| [link](http://www.seeedstudio.com/Grove-OLED-Display-0.96%22-p-781.html)|
|104030005	|Grove - Red LED	|I/O| [link](http://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|
|103020005	|Grove - Relay	|I/O| [link](http://www.seeedstudio.com/Grove-Relay-p-769.html)|
|316010005	|Grove - Servo	|I/O| [link](http://www.seeedstudio.com/Grove-Servo-p-1241.html)|
|101020023	|Grove - Sound Sensor	|Analog| [link](http://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|
|101020004	|Grove - Switch(P)	|I/O| [link](http://www.seeedstudio.com/Grove-Switch%28P%29-p-1252.html)|
|101020015	|Grove - Temperature Sensor	|Analog| [link](http://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|
|101020019	|Grove - Temperature&Humidity Sensor Pro	|Analog| [link](http://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-Pro-p-838.html)|


## Cape for Seeed Studio BeagleBone® Green
-------

You will need some expansion board when you start a project. There're many cape for Seeed Studio BeagleBone® Green already, they include LCD display, motor driver as well as HDMI expansion etc. Below is some of them recommend.

|Grove Cape| Motor Bridge Cape|HDMI Cape|
|------------|----------------|----------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product2.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product3.jpg)|
|[GET ONE NOW!](http://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[GET ONE NOW!](http://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[GET ONE NOW!](http://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove Cape| 5 Inch LCD|7 Inch LCD|
|------------|----------------|----------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product4.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product5.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product6.jpg)|
|[GET ONE NOW!](http://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[GET ONE NOW!](http://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[GET ONE NOW!](http://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|

## References 

There're many references to help you to get more information about the board.

* [BeagleBoard Main Page](http://beagleboard.org/)
* [Seeed Studio BeagleBone® Green Wireless info at BeagleBoard page](http://beagleboard.org/green-wireless)
* [BeagleBoard Getting Started](http://beagleboard.org/getting-started)
* [Troubleshooting](http://beagleboard.org/getting-started#troubleshooting)
* [Hardware documentation](http://beagleboard.org/getting-started#hardware)
* [Projects of BeagleBoard](http://beagleboard.org/project)

## FAQs

**Q1: How to connect your Seeed Studio BeagleBone® Green Wireless to your Bluetooth Device with Debian 9.5 2018-10-07 4GB image?**

**A1:** Please follow below instructions. thanks.

```
udebian@beaglebone:~$ uname -a
Linux beaglebone 4.14.71-ti-r80 #1 SMP PREEMPT Fri Oct 5 23:50:11 UTC 2018 armv7l GNU/Linux
debian@beaglebone:~$ bluetoothctl --agent
[NEW] Controller A4:D5:78:6D:6F:E0 beaglebone [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller A4:D5:78:6D:6F:E0 Discovering: yes
[NEW] Device C0:72:BC:0A:E6:1E HB7910703602
[NEW] Device E8:19:C4:6B:03:5C YONGNUO LED
[NEW] Device C0:F6:1E:02:0A:1E HB7690138998
```



## Resources
-----
- **[PDF]** [Seeed Studio BeagleBone® Green Wireless Schematic(pdf)](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/tree/master/resources/BeagleBone_Green Wireless_V1.0_SCH_20160314.pdf)
- **[Zip]** [AM335X Datasheet](https://github.com/SeeedDocument/Bazaar_file/raw/master/102010027/AM335x.pdf)
- **[3D]** [Seeed Studio BeagleBone® Green Wireless 3D Model](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/raw/master/resources/BBGW_0421.zip)
- **[PDF]** [Seeed Studio BeagleBone® Green Wireless Mechincal Drawing](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/raw/master/resources/BBGW-PCBA.pdf)

## Project

**Seeed Studio BeagleBone® Green Wireless Irrigation Control**: Seeed Studio BeagleBone® Green Wireless Irrigation Control using HTML5, WebSockets, and Ecmascript 6.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/Greg-R/beaglebone-green-wireless-irrigation-control-ce7c4b/embed' width='350'></iframe>


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/) or drop mail to techsupport@seeed.cc. 