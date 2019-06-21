---
name: Xadow GSM+BLE
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-GSM-BLE-p-2560.html
oldwikiname: Xadow_GSM+BLE
prodimagename: Xadow_GSM%2BBLE_shangjiatu.JPG
surveyurl: https://www.surveymonkey.com/r/Xadow_GSM_BLE
sku: 102040005
---

![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/Xadow_GSM%2BBLE_shangjiatu.JPG)

Whether making and receiving telephone calls over a radio link using external speakers and microphone or exchanging data in short distances with Bluetooth, you can do it with Xadow GSM+BLE.

As the heart of RePhone kit Create, the Xadow GSM+BLE is built around the powerful System-On-Chip (SOC) MT2502, offering a rich range of communication protocols - GSM, GPRS and Bluetooth (v4.0 and 2.1 dual mode). It supports quad-band 850/900/1800/1900MHz that covers any GSM network in the world. Just insert a 2G Nano SIM card, and then you can enchant things with cellular connectivity.


[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](http://www.seeedstudio.com/depot/Xadow-GSM-BLE-p-2560.html?cPath=84_120)  


##Features  

- Based on the smallest commercial System-on-Chip  
- (5.4mm x 6.2mm) currently on the market  
- Open source and modular design  
- Slim and small  
- Built-in Xadow Connectors for easy pluggable FPC cables  
- Stackable, chain-able and sew-able with other Xadow Modules  
- Core module for most of RePhone Kits  
- Perfect choice for long distance and short-range communication  

##Specification  

|Microcontroller	|MT2502                                                                                  |
|-------------------|----------------------------------------------------------------------------------------|
|MCU Core	        |32-bit ARM7EJ-STM RISC processor                                                        |
|RAM	            |4 MB                                                                                    |
|Flash Memory	    |16 MB                                                                                   |
|Power Supply	    |3.3 ~ 4.2V(no SIM)/3.5 ~ 4.2V(with SIM)                                                 |
|Power Consumption	|20mW/30mW/52mW @ standby(no radio)/standby(GSM)/standby(BT)                             |
|Quad-band	        |850/900/1800/1900 MHz                                                                   |
|GPRS	            |Class 12 modem                                                                          |
|Clock Speed	    |260 MHz                                                                                 |
|Connectors     	|35 PIN Connector & 11 PIN Connector for Xadow Modules; JST 1.0 Connector for the battery|
|Interfaces	        |LCD, Audio, I2C, SPI, UART, and GPIOs etc                                               |
|Dimensions       	|25.37mm × 20.30mm / 1” × 0.8”                                                           |  

##Hardware Overview  
![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/Xadow_GSM%2BBLE_Overview.png) 

 
The image below illustrates the Pin Definitions of 11 Pin Xadow Connector, Solder-able Breakout Pins and the 35 Pin Xadow Connector in a sequence from **Left to Right**.  

![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/Xadow-connector-Pin-definitions-06.jpg)  

##Power Up  
Power up the RePhone/Xadow GSM+BLE with a battery of **3,5V ~ 4,2V** and **JST 1.0 male connector**, or power it up through the breakout **PIN 3(VCC)** and breakout **PIN 6(GND)** as illustrated in the Hardwareview above.  

##Battery Charging  
Xadow GSM+BLE uses the [JST 1.0 female connector](http://www.seeedstudio.com/depot/index.php?main_page=opl_info&opl_id=555) for the battery, you can charge the battery by simply connect your board with a USB cable.  

##Operating Mode  
The Xadow GSM+BLE has two operating mode when you power it up and connect it with PC - **press and hold to power key for 2 seconds** to turn the module **ON** or **OFF** to access the **Mass Storage Mode** or **Flash/Debug Mode.**  
![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/Operating_mode.png)  

##Mass Storage Mode  
When the Xadow GSM+BLE is **OFF**, connect the board (with battery connected) to PC via Micro USB cable, you can access the 5MB ‘Mass Storage Mode’ on PC. All the applications (vxp files) and system settings are stored in this 5MB disk.  
![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/Mass_Storage_Mode.png)  

##Flash/Debug Mode  
When the Xadow GSM+BLE is **ON**, connect the board (with battery connected) to PC via Micro USB cable, you can find two **COM ports** on your **‘Device Manager’**： 

- **MTK USB Debug Port(COM4)**  
- **MTK USB Modem Port(COM5)**  

The COM number might be different on your PC. Each COM port has different function according to the development environment you use, please refer to the Getting Started section for more details.  

Open **Device Manager** by clicking the **Start** button, clicking **Control Panel**, clicking **System and Security**, and then, under **System**, clicking **Device Manager**. If you're prompted for an administrator password or confirmation, type the password or provide confirmation. See the following image:  
![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/Check_ports.png)  


##Getting Started  
We have developed rich libraries hooking into Arduino IDE, Lua and JavaScript, with detailed example sketches to help entry-level programmers develop with RePhone modules easily and quickly.

We also provide a powerful SDK based on Eclipse IDE for C/C++ developers to work with more intelligent applications.  
[![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/Arduino_IDE-17.png)  ](/RePhone/)
[![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/Eclipse_IDE-13.png) ](http://www.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit)   
[![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/Lua-14.png)](http://www.seeedstudio.com/wiki/Lua_for_RePhone#Use_Lua_Shellt)  
[![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/JS-15.png) ](http://www.seeedstudio.com/wiki/JavaScript_for_RePhone) 

For more info you can refer to the RePhone Development Environment at RePhone Main Page:  

[
RePhone Development Environment](http://wiki.seeedstudio.com/RePhone/#development-environment)  
##Related Projects  
Check on awesome RePhone projects that has been achieved with RePhone.  
**A Traceable Dog Collar**  
5 steps to make a traceable dog collar for your lovely puppy.   
[![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/450px-Dog_Collar.png.jpeg)  ](http://www.seeedstudio.com/recipe/424-rephone-traceable-dog-collar.html)

##RePhone Community  
[![](https://raw.githubusercontent.com/SeeedDocument/Xadow_GSM-BLE/master/image/300px-RePhone_Community-2.png) ](http://www.forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4)   
We’ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the RePhone Community.

Now join us in the [RePhone Community](https://community.seeedstudio.com/discover.html?t=rephone)! Together we seek answers, make interesting stuff, care about each other, and share our experiences.

###Frequently Asked Questions  
Some frequently asked questions in RePhone Community are collected and answered to the topic "[Frequently Asked Questions of RePhone (FAQ)](https://community.seeedstudio.com/topic_detail.html?id=5170#p23753)" , the topic will be kept updating whenever a new FAQ comes out.  

##Resources  
The schematic diagram of Xadow GSM+BLE is provided in the following link:  
[- Xadow_GSM+BLE eagle files ](https://github.com/SeeedDocument/Xadow_GSM-BLE/blob/master/resource/Xadow_GSM%2BBLE.rar)  
Check more info about the chipset MT2502:  
[- Datasheet for eagle files](https://github.com/SeeedDocument/Xadow_GSM-BLE/blob/master/resource/Datasheet_for_MT2502.rar)  
Check out this excel for the compatibility with Xadow 1.0 modules:  
[- Compatibility between GSM+BLE and Xadow 1.0 modules  ](https://github.com/SeeedDocument/Xadow_GSM-BLE/blob/master/resource/Compatibility_between_GSM%2BBLE_and_Xadow_1.0_modules.xlsx)
 
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>