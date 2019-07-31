---
name:SeeedStudio BeagleBone® Green
category: BeagleBone®
bzurl: https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-p-2504.html
oldwikiname: BeagleBone_Green
prodimagename: cover.jpg
surveyurl: https://www.research.net/r/seeed_bbg
sku: 102010027
---

![enter image description here](https://github.com/SeeedDocument/BeagleBone_Green/blob/master/images/cover.jpg?raw=true)

Seeed Studio BeagleBone® Green is a low cost, open-source, community supported development platform for developers and hobbyists. It is a joint effort by [BeagleBoard.org](http://beagleboard.org/) and Seeed Studio. It is based on the classical open-source hardware design of [BeagleBone® Black](http://beagleboard.org/black) and developed into this differentiated version. The Seeed Studio BeagleBone® Green includes two Grove connectors, making it easier to connect to the large family of Grove sensors. The on-board HDMI is removed to make room for these Grove connectors.

Boot Linux in under 10 seconds and get started on development in less than 5 minutes with just a single USB cable.


<p style=":center"><a href="http://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-p-2504.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


<p style=":center"><a href="https://www.amazon.com/dp/B01AIC5AP4" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/amaon.png"  width="300" height="48"  border=0/></a></p>


## Features


* **Fully Compatible with BeagleBone® Black**
* **Processor: AM335x 1GHz ARMR Cortex-A8**
    * 512MB DDR3 RAM
    * 4GB 8-bit eMMC on-board flash storage
    * 3D graphics accelerator
    * NEON floating-point accelerator
    * 2x PRU 32-bit microcontrollers
* **Connectivity**
    * USB client for power & communications
    * USB host
    * Ethernet
    * 2x 46 pin headers
    * 2x Grove connectors (I2C and UART)
* **Software Compatibility**
    * Debian
    * Android
    * Ubuntu
    * Cloud9 IDE on Node.js w/ BoneScript library
    * plus much more

## Specification


|Item|Value|
|----|------|
|Processor|	AM335x 1GHz ARMR Cortex-A8|
|RAM|	512MB DDR3|
|on-board Flash Storage	|4GB eMMC|
|CPU Supports	|NEON floating-point & 3D graphics accelerator|
|Micro USB	Supports |powering & communications|
|USB |Host	1|
|Grove Connectors	|2 (One I2C and One UART) |
|GPIO	|2 x 46 pin headers|
|Ethernet	|1|
|Operating Temperature	|0 ~ 75 |

## Application Ideas

* Internet of Things
* Smart House
* Industrial
* Automation & Process Control
* Human Machine Interface
* Sensor Hub
* Robot

Here are some funny projects for your reference.

|Home Center|Retro Lamp|Drive a Motor|
|---------------|-----|--------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/project1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/project2.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/project3.jpg)|
|[MAKE IT NOW!](http://www.instructables.com/id/Home-Control-Center-Using-BeagleBone-Green-Wireles/)|[MAKE IT NOW!](http://www.instructables.com/id/DIY-a-Retro-Wooden-Lamp-with-BBG/)|[MAKE IT NOW!](http://www.instructables.com/id/A-BeagleBone-Tutorial-Getting-Started-With-Motor-B/)|

|Seeed Studio BeagleBone® Green Acrylic Case|GPIO Control|Smart Light|
|---------------|-----|--------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/project4.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/project5.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/project6.png)|
|[MAKE IT NOW!](http://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/)|[MAKE IT NOW!](https://community.seeedstudio.com/How-to-use-the-Grove-UART-port-as-a-GPIO-on-BBG-p-365.html)|[MAKE IT NOW!](https://community.seeedstudio.com/Smart-Light-Demo-with-BBG-%26amp%3B-BBG-Start-Kit(HA)-p-366.html)|


## Hardware Overview

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/10201002703.jpg)


* **USB Host** - USB Host
* **DC Power and USB Client** - Power the board and act as client
* **LEDs**
    * **D2** is configured at boot to blink in a heartbeat pattern
    * **D3** is configured at boot to light during microSD card accesses
    * **D4** is configured at boot to light during CPU activity
    * **D5** is configured at boot to light during eMMC accesses
* **Boot button**
    * When there's a SD card insert, the system will boot from SD card first, if you want to boot from eMMC, press this button and then power on.
    * Use as a normal button after boot, connect to **GPIO_72**
* **I2C Grove Interface** - Connected to **I2C2**
* **Uart Grove Interface** - Connected to **UART2**
* **Serial Debug** - Connect to **UART0**, PIN1~PIN6: GND, NC, NC, RX, TX, NC, note that pin1 is near to the USB.

**Pin map**

Each digital I/O pin has 8 different modes that can be selected, including GPIO.

**65 Possible Digital I/Os**

!!!Note
    In GPIO mode, each digital I/O can produce interrupts.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/PINMAP_IO.png)

**PWMs and Timers**

!!!Note
    Up to 8 digital I/O pins can be configured with pulse-width modulators (PWM) to produce signals to control motors or create pseudo analog voltage levels, without taking up any extra CPU cycles.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/PINMAP_TIMER.png)

**Analog Inputs**

!!!Note
    Make sure you don't input more than 1.8V to the analog input pins. This is a single 12-bit analog-to-digital converter with 8 channels, 7 of which are made available on the headers.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/PINMAP_ANALOG.png)


**UART**

!!!Note
    There is a dedicated header for getting to the UART0 pins and connecting a debug cable. Five additional serial ports are brought to the expansion headers, but one of them only has a single direction brought to the headers.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/PINMAP_UART.png)


**I2C**

!!!Note
    The first I2C bus is utilized for reading EEPROMS on cape add-on boards and can't be used for other digital I/O operations without interfering with that function, but you can still use it to add other I2C devices at available addresses. The second I2C bus is available for you to configure and use.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/PINMAP_I2C.png)

**SPI**

!!!Note
    For shifting out data fast, you might consider using one of the SPI ports.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/PINMAP_SPI.png)


## Mechincal Drawing

![](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/images/BBG_drawing_1.png)

![](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/images/BBG_drawing_2.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=26887ef4-fe20-4d82-b4dc-25f58774d64f" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## Getting Started


!!!Note
    This chapter is writing under Win10. The steps are familiar for the other operate systems.

**STEP1. Plug in your Seeed Studio BeagleBone® Green via USB**

Use the provided micro USB cable to plug your Seeed Studio BeagleBone® Green into your computer. This will both power the board and provide a development interface. Seeed Studio BeagleBone® Green will boot Linux from the on-board 2GB or 4GB eMMC.

Seeed Studio BeagleBone® Green will operate as a flash drive providing you with a local copy of the documentation and drivers. Note that this interface may not be used to re-configure the microSD card with a new image, but may be used to update the boot parameters using the uEnv.txt file.

You'll see the PWR LED lit steadily. Within 10 seconds, you should see the other LEDs blinking in their default configurations.

* D2 is configured at boot to blink in a heartbeat pattern
* D3 is configured at boot to light during microSD card accesses
* D4 is configured at boot to light during CPU activity
* D5 is configured at boot to light during eMMC accesses

**STEP2. Install Drivers**

Install the drivers for your operating system to give you network-over-USB access to your Beagle. Additional drivers give you serial access to your board.

|Operating System |	USB Drivers |	Comments |
|---------------------|---------|------------|
|Windows (64-bit) |	[64-bit installer](http://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)	 | |
|Windows (32-bit) |	[32-bit installer](http://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
|Mac OS X|[Network](http://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [Serial](http://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | Install both sets of drivers.|
|Linux|[mkudevrule.sh](http://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|Driver installation isn't required, but you might find a few udev rules helpful.|

!!!Note
    For Windows system, please note that:

    * Windows Driver Certification warning may pop up two or three times. Click "Ignore", "Install" or "Run"
    * To check if you're running 32 or 64-bit Windows see [this](https://support.microsoft.com/kb/827218).
    *  On systems without the latest service release, you may get an error (0xc000007b). In that case, please [install](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523) and retry:
    * You may need to reboot Windows.
    * These drivers have been tested to work up to Windows 10

!!!Note
    Additional FTDI USB to serial/JTAG information and drivers are available from [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm).

!!!Note
    Additional USB to virtual Ethernet information and drivers are available from [https://www.linux-usb.org/gadget/](https://www.linux-usb.org/gadget/) and [https://joshuawise.com/horndis](https://joshuawise.com/horndis).


**STEP3. Browse to your Beagle**

Using either Chrome or Firefox (Internet Explorer will NOT work), browse to the web server running on your board. It will load a presentation showing you the capabilities of the board. Use the arrow keys on your keyboard to navigate the presentation.

Click [http://192.168.7.2](http://192.168.7.2) to launch to your Seeed Studio BeagleBone® Green.
Older software images require you to EJECT the BeagleBone® drive to start the network. With the latest software image, that step is no longer required.

[![Click to view larger image](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/launch.png)](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/launch.png)

**STEP4. Cloud9 IDE**

To begin editing programs that live on your board, you can use the Cloud9 IDE by click

[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/cloud9.png)](http://192.168.7.2:3000/ide.html)



## Update to latest software


You need to update the board to latest software to keep a better performance, here we will show you how to make it step by step.

**STEP1. Download the latest software image**

First of all, you have to download the suitable image here.

[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/down_latest_image.png)](http://beagleboard.org/latest-images)

!!!Note
    Due to sizing necessities, this download may take about 30 minutes or more.

The file you download will have an **.img.xz** extension. This is a compressed sector-by-sector image of the SD card.

**STEP2. Install compression utility and decompress the image**

Download and install [7-zip.](http://www.7-zip.org/download.html)

!!!Note
    Choose a version that suitable for your system.

Use 7-zip to decompress the SD card **.img file**

**STEP3. Install SD card programming utility**

Download and install [Image Writer for Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download). Be sure to download the binary distribution.

**STEP4. Write the image to your SD card**

You need a SD adapter to connect your microSD card to your computer at the first. Then use the software Image Write for Windows to write the decompressed image to your SD card.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/win32_disk_image.png)

Click on **Write** button, then the process is started.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/win32_disk_image_process.png)

!!!Note
    * You may see a warning about damaging your device. This is fine to accept as long as you are pointing to your SD card for writing.
    * You should not have your BeagleBone® connected to your computer at this time.
    * This process may need up to 10 minutes.


**STEP5. Boot your board off of the SD card**

Insert SD card into your (powered-down first) board. Then the board will boot from the SD card.

!!!Note
    If you don't need to write the image to your on-board eMMC, you don't need to read the last of this chapter.  Otherwise please go ahead.

If you desire to write the image to your on-board eMMC, you need to launch to the board, and modify a file.

In **/boot/uEnv.txt**:

    ##enable BeagleBone® Black: eMMC Flasher:
    #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh
Change to:

    ##enable BeagleBone® Black: eMMC Flasher:
    cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

Then you will find the 4 user led light as below

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/flashing.gif)

!!!Note
    If you don't find the upper tracing light, please press the RESET button to reset the board.

When the flashing is complete, all 4 USRx LEDs will be **off**. The latest Debian flasher images automatically power down the board upon completion. This can take up to **10 minutes**. Power-down your board, remove the SD card and apply power again to be complete.

## Grove for Seeed Studio BeagleBone® Green


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
|103020013	|Grove - I2C ADC	|I2C| [link](http://wiki.seeedstudio.com/Grove-I2C_ADC/)|
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


You will need some expansion board when you start a project. There're many cape for Seeed Studio BeagleBone® Green already, they include LCD display, motor driver as well as HDMI expansion etc. Below is some of them recommend.

|Grove Cape| Motor Bridge Cape|HDMI Cape|
|------------|----------------|----------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product2.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product3.jpg)|
|[GET ONE NOW!](http://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[GET ONE NOW!](http://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[GET ONE NOW!](http://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove Cape| 5 Inch LCD|7 Inch LCD|
|------------|----------------|----------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product4.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product5.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green/master/images/product6.jpg)|
|[GET ONE NOW!](http://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[GET ONE NOW!](http://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[GET ONE NOW!](http://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|

## FAQ

**1. What is the different between Seeed Studio BeagleBone® Green 1 and Seeed Studio BeagleBone® Green 2?**

 We have updated the eMMC on Seeed Studio Beaglebone® Green in 2016. So the previous firmware for Seeed Studio BeagleBone® Green 1 is not workable on Seeed Studio BeagleBone® Green 2, but the new firmware is ok on Seeed Studio BeagleBone® Green 1 and Seeed Studio BeagleBone® Green 2.

![](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/bbg12.png)

 **2. Sometimes the Seeed Studio BeagleBone® Green's network port does not work and must be restarted to resume work. Occasionally this happens.**

Please replace a stable power supply and try again. Usually mobile phone USB power adapter is more stable than that computer USB. Or you can remove the capacitor C162.

 ![](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/images/Capatictor.png)


**3: What is the operating temperature range of the Seeed Studio BeagleBone® Green?**

BeagleBone® Green works in the temperature range of 0-75 Deg Celsius.
    
## References

There're many references to help you to get more information about the board.

* [BeagleBoard Main Page](http://beagleboard.org/)
* [Seeed Studio BeagleBone® Green info at BeagleBoard page](http://beagleboard.org/green)
* [BeagleBoard Getting Started](http://beagleboard.org/getting-started)
* [Troubleshooting](http://beagleboard.org/getting-started#troubleshooting)
* [Hardware documentation](http://beagleboard.org/getting-started#hardware)
* [Projects of BeagleBoard](http://beagleboard.org/project)
* [CE certification of Seeed Studio BeagleBone® Green](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/resources/CE.zip)
* [FCC certification of Seeed Studio BeagleBone® Green](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/resources/FCC.zip)

## Resources


- **[PDF]** [Seeed Studio BeagleBone® Green SRM(v1a)(pdf)](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/resources/BBG_SRM_V1a_20151009.pdf)
- **[PDF]** [Seeed Studio BeagleBone® Green SRM(v3)(pdf)](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/resources/BBG_SRM_V3_20150804.pdf)
- **[PDF]** [Seeed Studio BeagleBone® Green Schematic(pdf)](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/resources/BEAGLEBONE_GREEN_V1.pdf)
- **[Zip]** [Seeed Studio BeagleBone® Green Schematic(OrCAD) v1c](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/resources/BeagleBone_Green_v1c.zip)
- **[RAR]** [Seeed Studio BeagleBone® Green Schematic(OrCAD)](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/resources/BEAGLEBONE_GREEN_V1_166%28sch%29.rar)
- **[RAR]** [Seeed Studio BeagleBone® Green PCB(OrCAD)](https://github.com/SeeedDocument/BeagleBone_Green/blob/master/resources/BeagleBone_Green_v1.166%28board%29.rar)
- **[Zip]** [AM335X Datasheet](https://github.com/SeeedDocument/Bazaar_file/raw/master/102010027/AM335x.pdf)
- **[3D]** [Seeed Studio BeagleBone® Green 3D Model](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/resources/BBG.zip)
- **[PDF]** [Seeed Studio BeagleBone® Green Mechincal Drawing](https://github.com/SeeedDocument/BeagleBone_Green/raw/master/resources/BBG-PCBA.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>