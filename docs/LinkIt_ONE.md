---
name: LinkIt ONE
category: LinkIt
bzurl: https://www.seeedstudio.com/LinkIt-ONE-p-2017.html
oldwikiname: LinkIt_ONE
prodimagename: 500px-Linkit-one-page.jpg
surveyurl: https://www.surveymonkey.com/r/LinkIt_ONE
sku: 102030002
---

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Linkit_ONE/master/image/500px-Linkit-one-page.jpg)


The LinkIt ONE development platform is an open source, high performance board for prototyping Wearables and IoT devices. It is based on the world's leading SoC for Wearables, MediaTek Aster (**MT2502**) combined with high performance Wi-Fi (**MT5931**) and GPS (**MT3332**) chipsets to provide you with access to all the features of MediaTek LinkIt. It also provides similar pin-out features to Arduino boards, making it easy to connect various sensors, peripherals, and Arduino shields.

LinkIt One is an all-in-one prototyping board for IoT/wearables devices. Integrating GSM, GPRS, Wi-Fi, GPS, Bluetooth features into a basic Arduino form factor.LinkIt ONE is a co-design product by [Seeed Studio](https://www.seeedstudio.com/) and [ MediaTek](http://www.mediatek.com/). It brings together both parties' technology in open hardware and industrial leading reference designs for Wearables and IoT devices to create a powerful development board.


[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/item_detail.html?p_id=2017)


!!!Note
    LinkIt ONE board comes with a lot of features and its SDK(Software Development Kit) is quite comprehensive. Read this document throughly once before using the board. Being a co-design product basic level Technical Support for hardware is provided at Seeedstudio LinkIt One Forum. Advanced Technical support is available at  [MediaTek LinkIt One Forums](https://labs.mediatek.com/forums/forums/list.page).These forums have a good number of FAQs about this board.Please search solutions for your requirements/issues first before posting questions for saving your time.

## Features
--------------
- Includes ARM7 EJ-S™, GSM, GPRS, Wi-Fi, Bluetooth BR/EDR/BLE, GPS, Audio codec, and SD card connector on a single development board.
- Pin-out similar to Arduino boards, including Digital I/O, Analog I/O, PWM, I2C, SPI, UART and power supply, compatible with Arduino.
- Provides various interfaces for connecting to most sensors, peripherals, Groves, and other widgets.
- You are what you wear. Using LinkIt ONE together with MediaTek LinkIt SDK (for Arduino) you will be able to easily turn your ideas into practical prototypes and make them a reality with the Seeed productization and agile manufacturing service.


## specifications
------------------
|Parameter   |Value          |
|:------|:-----------------|
|Chipset|	MT2502A (Aster, ARM7 EJ-S (TM) )|
|Clock Speed|	260MHz|
|Dimensions|	3.3x2.1 inches|
|Flash|	16MB|
|RAM|	4MB|
|DC Current Per I/O Pin|	1mA|
|Analog Pins|	3|
|Digital Output	|3.3V|
|Analog Input|	5V|
|UART|	Software based(**Serial**) ,also known as USB Modem Port and Hardware Serial(**Serial1**, D0&D1)|
|SD Card|	Up to 32GB(Class 10)|
|Positioning|	GPS(MT3332)|
|GSM|	850/900/1800/1900 MHz|
|GPRS|	Class 12|
|Wi-Fi|	802.11 b/g/n|
|Bluetooth|	BR/EDR/BLE(Dual Mode)|

##Application Ideas
--------------------
* Internet of Things
* Smart House
* Wearable Designe
* Industrial
* Sensor Hub
* Automation & Transportation

Here are some projects for your reference. More awesome project at Recipe and [Instructables](http://www.instructables.com/howto/linkit+one/).

|Facebook Like Monitor|Texting Door Alarm|Smart Bed Alarm|
|--------------------------|-------------|---------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Linkit_ONE/master/image/project1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Linkit_ONE/master/image/project2.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Linkit_ONE/master/image/project3.jpg)|
|[Make it NOW!](http://www.instructables.com/id/Facebook-Like-Monitor/)|[Make it NOW!](http://www.instructables.com/id/LinkIt-One-Texting-Door-Alarm/)|[Make it NOW!](http://www.instructables.com/id/Smart-Bed-Alarm-with-LinkIT-ONE/)|


|AWS IoT Tutorial|Instructables Indicator|DIY an Acrylic Case|
|--------------------------|-------------|---------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Linkit_ONE/master/image/project4.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Linkit_ONE/master/image/project5.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Linkit_ONE/master/image/project6.jpg)|
|[Make it NOW!](http://www.instructables.com/id/An-AWS-IoT-Tutorial-With-LinkIt-ONE/)|[Make it NOW!](http://www.instructables.com/id/Make-a-Instructables-Indicator/)|[Make it NOW!](http://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/)|



## Hardware Overview
-------------------
![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/1000px-LinkItONE_RESOURCE.png)

### Configuration Switches
There are 3 slide switches on LinkIt ONE which are used to configure the function/working mode :

![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/300px-LinkIt_ONE_Wiki_Button.jpg)

|Switch No.|	Functionality|	Position 1 - Functionality|	Position 2 - Functionality|
|:------|:-----------------|:-----------------|:-----------------|
|1|	Program Mode|	**MS**： In this position, when connected to PC, LinkIt One board will be shown as 10MB USB drive. The program will not execute in this mode. Any file that is copied to this drive can be read via the code.|	UART：This position is used to set the board to program mode. Firmware can be uploaded in this mode.|
|2|	Power|	**BAT**： Board powered by Li-ion Battery. To charge battery, set the switch to this position and connect the board to PC.|	**USB**：Board powered by USB port. Set the switch to this position when there is no battery connected to program the board.|
|3|	SD/SPI|	**SPI**：This position allows access of external SPI pins (D10 - D13)	|**SD**：This position allows the code to access SD card. This mode also disables access of SPI pins (D10-D13).|

!!!Note
    DO take care as you handle USB micro type-B socket, or you might break the socket off.

## Getting started

### Procedure Overview
|No.|	Step	|Read more|
|:------|:-----------------|:-----------------|
|1|	Install Arduino IDE 1.5.7 Beta (Windows or MAC OS X version)|	[ here](http://wiki.seeed.cc/LinkIt_ONE/#installing-arduino-ide)
|2|		[ Register on MediaTek Labs](http://labs.mediatek.com/dpRegister/create).	| |
|3|	Download [ Linkit Developer's Guide](http://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd) and read.	||
|4|	Install [ LinkIt SDK](http://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp) for Arduino IDE (Windows or MAC OS X).|	[ here](http://wiki.seeed.cc/LinkIt_ONE/#installing-mediatek-linkit-one-sdk)|
|5|	Install LinkIt ONE drivers.|	[ here](http://wiki.seeed.cc/LinkIt_ONE/#installing-drivers)|
|6|	Update the on-board firmware version.|	[ here](http://wiki.seeed.cc/LinkIt_ONE/#updating-firmware)|
|7|	Open Arduino IDE, Select LinkIt ONE board and start coding.|	[ here](http://wiki.seeed.cc/LinkIt_ONE/#uploading-code-blinky)||
|8|	Connect GSM, GPS and WiFi/BT antennae to LinkIt One board|	[ here](http://wiki.seeed.cc/LinkIt_ONE/#connecting-antennae)|
|9	|Insert SIM and Micro SD Card|[ here](http://wiki.seeed.cc/LinkIt_ONE/#inserting-sim-card-and-sd-card)|
|10	|Explore examples and Happy making!|

### Installing Arduino IDE
[ Download latest Arduino IDE](https://www.arduino.cc/en/Main/Software) .For more advanced topics, follow MediaTekTM[  instructions](http://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp).

### Installing Mediatek LinkIt ONE SDK
- Download [  LinkIt SDK for Arduin](http://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp).At the time of writing this guide, **v1.1.11** Windows SDK (Beta) was used. Read the video guide for Windows OS and MAC OS X platforms  [ here](http://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/get-started/index.gsp)
- Extract the downloaded files to Arduino IDE folder.
- Double-Click the .EXE file and install.
- With the installation of LinkIt ONE SDK, Arduino IDE works a LinkIt ONE IDE.

### Installing Drivers


- Disable **Driver Signature Enforcement** if you are using Windows 8/8.1 OS. Read  [instructions](http://wiki.seeedstudio.com/Driver_for_Seeeduino/#installing-drivers-for-the-seeeduino-with-window8)

- Put the MS/UART slide switch to UART position and connect LinkIt ONE to PC.
- Open Device Manager, the following COM ports will be displayed.


![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/LinkIt_ONE_Wiki_Temp1.jpg)


- Install driver from ..\LinkIt_ONE_IDE\drivers\mtk folder.
- After installing drivers, Device Manger should display the following two ports:

   **MTK USB Debug Port** used for uploading code.

  **MTK USB Modem Port** used for printing message, such as Serial.println()

![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/LinkIt_ONE_Wiki_Temp2.jpg)  

!!!Note
    There is no official Windows 10 driver yet. Windows 10 users can manually select the Windows 7 driver files from **\LinkIt_ONE_IDE\drivers\mtk** from **Device Manager**. This is known to work on few PCs.

### Updating Firmware
The firmware of LinkIt ONE board needs to be updated once in a while. Latest LinkIt ONE SDK comes with a version of firmware.

- Before starting the firmware update, make sure the slide switches are in proper position ( **MS/UART** should be in **MS** position. **USB/BAT** in **USB** position):

![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/LinkItONEUpdateFirmware2.jpg)  

- Run FirmwareUpdater.exe application from ..**\LinkIt_ONE_IDE\hardware\tools\mtk** folder.

![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/400px-LinkItONEUpdateFirmware.jpg)  

- Click the button and then connect LinkIt ONE to PC. Wait for 1 minutes for the update to complete successfully.

![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/400px-LinkItONEUpdateFirmware_ok.jpg)  
### Uploading Code (Blinky)

- The slide switches should be configured for firmware upload (i.e Put MS/UART in UART position and Power switch in USB position).

![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/LinkIt_ONE_Wiki_Temp3.jpg)

- Open **File** -> **Examples** -> **Basics** -> **Blink** in LinkIt ONE IDE.
- Select the COM Port number corresponding to **MTK USB Debug port** in **Tools** -> **Port**.
- Select the board by clicking on **Tools > Board > LinkIt One**


If you can not find the LinkIt One, please check [How to Add Seeed boards to Arduino IDE](http://wiki.seeedstudio.com/Seeed_Arduino_Boards/)


- Compile and upload the code.
- LED marked **L** should blink.

### Connecting Antennae
There are three antennae provided with LinkIt ONE. They are used for:

- GSM/GPRS
- Wi-Fi/BT
- GPS

Connect the antenna as the following image.

![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/400px-Linkit_one_antenna.jpg)

!!!Note
    - While pulling the antenna from board, do it with care. Please Do not use brute force.
    - Try to use the force perpendicular to the direction of the board, otherwise you might damage the antenna pad.

### Inserting SIM Card and SD Card

LinkIt ONE accepts standard size SIM Card and Micro SD Card. Insert them as per the following image:

![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/LinkItONE_SIM_SDCard_Insert.jpg)

### Exploring LinkIt ONE SDK Examples
LinkIt ONE SDK comes with many examples / sample code to use peripherals like GSM, GPRS, WiFi, BT, Audio, GPS etc. Explore them first and read about API documentation. API documentation are available in [  User Guide ](http://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd) and [  API References site ](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/api_references/Core_Digital.gsp)


## Compatible Groves and Shields for LinkIt ONE

- We manufacture hundreds of Groves and Shields, including sensors, actuators, displays and other modules.
- You can implement your ideas with those Groves and Shields easily.
- But, LinkIt ONE does not support all of them.
- We prepared a list of compatible Groves and Shields:

[![](https://raw.githubusercontent.com/SeeedDocument/Linkit-ONE/master/image/400px-Compatible_Groves_and_Shields_for_LinkIt_ONE.png)](https://github.com/SeeedDocument/Linkit_ONE/raw/master/resource/LinkIt_ONE_Comparability_Test.xlsx)

## Tutorial of Sidekick Basic Kit for LinkIt ONE

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Linkit_ONE/master/image/350px-LinkitONESidebox.jpg)

The Sidekick Basic Kit for LinkIt ONE is designed to be used with your LinkIt ONE board. This kit will help you quickly get along well with the platform of LinkIt. It includes many of the most popular accessories for DIY projects : like Breadboard, Jumper wires, Color LEDs, Resistors, Buzzer, etc. All these come in a handy box, which is easy to transport and mimimises clutter. The kit includes a complete guide that will familiarize you with a wide range of electronic components while you create small, simple, and easy-to-assemble circuits. There are 10 different courses outlined that will offer a best way for beginner to get familiar with LinkIt ONE.

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/item_detail.html?p_id=2027)

- [The Basics](http://wiki.seeedstudio.com/LinkIt_ONE_Tutorial-The_Basics/)
- [Hello World](http://wiki.seeedstudio.com/LinkIt_ONE_Tutorial-Hello_World/)
- [Push Button](http://wiki.seeedstudio.com/LinkIt_ONE_Tutorial-Push_Button/)
- [Marquee](http://wiki.seeedstudio.com/LinkIt_ONE_Tutorial-Marquee/)
- [Colorful World](http://wiki.seeedstudio.com/LinkIt_ONE_Tutorial-Colorful_World/)
- [Analog Interface](http://wiki.seeedstudio.com/LinkIt_ONE_Tutorial-Analog_Interface/)
- [Mini Servo](http://wiki.seeedstudio.com/LinkIt-ONE-Tutorial---Mini-Servo/)
- [Light Sensor](http://wiki.seeedstudio.com/LinkIt_ONE_Tutorial-Light-Sensor/)
- [SMS Control the LED](http://wiki.seeedstudio.com/LinkIt_ONE_Tutorial-SMS_control_the_LED/)
- [Get Temperature with Webpage](http://wiki.seeedstudio.com/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/)
- [Github Repo for Sidekick Basic Kit for LinkIt ONE](http://wiki.seeedstudio.com/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/)


## FAQs

**Q1: Can I access to 3G or 4G network with LinkIt ONE?**

A1: No, but you can use GPRS network.

**Q2: There’s nothing printed on the serial monitor after uploading GSM demo successfully.**

A2: Please follow below steps. 

- Choose Modem USB port for printing.
- Choose the right baud rate.
- Use another demo to test.
- Update the firmware and then try again.

**Q3: The GPRS function doesn’t work. I tried the sketch “LGPRS” without success.**

A3: Please follow below steps. 

- Please make sure that your GPRS card isn’t locked.
- Can you access to GPRS network with this card on your phone?
- Does the SMS work?

**Q4: Why can’t I upload the sketch “Blink” to LinkIt ONE? Is it defective?**

A4: Please follow below steps. 

- Check whether the two switches are on the right side (Uart & USB)
- Choose the right COM Port(MTK USB DEBUG PORT)
- Update the firmware and try again
- Try on another PC
- Try another USB cable

**Q5: Does LinkIt ONE support recording?**

A5: Yes, the audio jack can be the input interface of recording. Its ADC has been integrated inside MT2502A.

**Q6: Does the LinkIt One integrated WiFi module support Monitor mode?**

A6: Please refer the [WiFi API](http://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html) reference of LinkIt One. There is a support for RSSI for connected networks. There is no monitor mode available for non-connected WiFi networks.

**Q7: Can I apply 5v through the battery socket on the LinkIt ONE?**

A7: Sorry, you cannot use a 5V battery. The Linkit ONE board comes with a 3.7V Lithium-ion rechargeable battery. It is advised to use the battery provided with it.

**Q8: Where can I find information about connecting LinkIt ONE to the web using GPRS?**

A8: The LinkitONE IDE comes with examples to use the GPRS to connect to web. Just install the latest version of IDE and check the examples. Here is [GPRS API](http://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html).

## Resources

**Schematic / Design Files:**

- [LinkIt ONE V1.0 Eagle File](https://github.com/SeeedDocument/Linkit_ONE/raw/master/resource/202000437_PCBA%20Linkit%20ONE_PDF.zip)
- [LinkIt ONE V1.0 Schematic in PDF](https://github.com/SeeedDocument/Linkit_ONE/raw/master/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip)

**Software:**

- [MediaTek_LinkIt_SDK_for_Ardunio](http://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp)

**Datasheets and User Guides:**

- [LinkIt_ONE_Hardware_Reference_Design_v1_0](http://labs.mediatek.com/site/znch/access_denied/access_denied.gsp)
- [LinkIt ONE_Pinout Diagram_v1.0【PDF】](https://github.com/SeeedDocument/Linkit-ONE/blob/master/resource/LinkIt_ONE_Pinout_Diagram_v1_0.pdf)
- [MediaTek_LinkIt_Developers_Guide_v1_0【PDF】](https://github.com/SeeedDocument/Linkit-ONE/blob/master/resource/MediaTek_LinkIt_ONE_Developers_Guide_v1_3.pdf)
- [MediaTek_MT2502A_SOC_Data_Sheet_v1_0【PDF】](https://github.com/SeeedDocument/Linkit-ONE/blob/master/resource/MediaTek_MT2502A_SOC_Data_Sheet_v1_0.pdf)
- [MediaTek_MT5931_Wi-Fi_Data_Sheet_v1_0【PDF】](https://github.com/SeeedDocument/Linkit-ONE/blob/master/resource/MediaTek_MT5931_Wi-Fi_Data_Sheet_v1_0.pdf)
- [MediaTek_MT3332_GPS_Data_Sheet_v1_0【PDF】](https://github.com/SeeedDocument/Linkit-ONE/blob/master/resource/MediaTek_MT3332_GPS_Data_Sheet_v1_0.pdf)

**Getting Help**

- [MediaTek LinkIt ONE Forums](https://labs.mediatek.com/forums/forums/list.page)

**More**

- [See Also: Sidekick Base Kit for LinkIt ONE](http://www.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_LinkIt_ONE)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>