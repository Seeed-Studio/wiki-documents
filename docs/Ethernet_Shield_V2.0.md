---
name:  Ethernet Shield V2.0‏‎
category: Discontinued
bzurl:
oldwikiname: Ethernet_Shield_V2.0‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Ethernet_Shield_V2-0
sku:
tags:
---

![](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/img/IMG_0042.jpg)

Your Ethernet Shield gets a total renewal now! This shield provides you instant Internet connectivity with a high spec Ethernet controller, W5200, with twice the buffer size of v1.0 and support for up to eight simultaneous TCP/UDP connections. An included SD slot enables applications that require storing large amounts of data, like IoT data logging. Thanks to a lowered RJ45 pot, you can flexibly add most of shields on top of this Ethernet Shield.

Model:[SLD91000P](http://www.seeedstudio.com/depot/w5200-ethernet-shield-p-1577.html)



##   Features   ##

-   High speed Ethernet controller W5200

-   SPI interface

-   32 Kbytes inner buffer

-   Minimal RJ45 Ethernet port

-   Support up to eight simultaneous TCP/UDP connections

-   Handy SD card function

-   Grove ports for I2C and UART preformed

##   Interface   ##

![](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/img/Ethernet_Interface.jpg)

**Hardware Configuration**

- RJ45: Ethernet Port;

- IC HX1198: 10/100BASE-T signal port;

- IC W5200: a hardwired TCP/IP Ethernet Controller;

- U3: IC CJ117, low dropout linear regulator;

- U6: IC 74VHC125PW, quad buffer;

- Reset KEY: Reset Ethernet shield and Arduino when pressed;

- SD card: support Micro SD card in FAT16 or FAT32; maximum storage is 2GB.

**Pins usage on Arduino**

- D4: SD card chip select

- D10: W5200 Chip Select

- D11: SPI MOSI

- D12: SPI MISO

- D13: SPI SCK

**Notice:**

Both W5200 and SD card communicate with Arduino via SPI bus. Pin 10 and pin 4 are chip select pins for W5200 and SD slot. They cannot be used as general I/O.

##   Usage   ##

We are going to build a simple web server that answer request from a client and store the readings from A0 through A5 to SD card.

**Step 1: Hookup**

1. Mount Ethernet Shield v2.0 to your Arduino;

2. Connect the shield to your computer or a network hub or a router with a standard Ethernet cable;

3. Connect Arduino to PC via USB cable;

4. Insert an SD card to the SD card slot.

![](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/img/IMG_0039.jpg)

**Step 2: Upload the program**

1.Download the library：[Ethernet Shield V2.0 Library](https://github.com/Seeed-Studio/Ethernet_Shield_W5200)  
Note: Depreciated/Old Library for 1.0.x IDE: [Link](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/res/W5200_Ethernet_Shield_Library.zip).

2.Unzip and put it in the libraries file of Arduino IDE by the path: ..\arduino-1.0.1\libraries.

3.Restart the Arduino IDE.

4.Open the example "WebServerWithSD" via the path: File --> Examples --> EthernetV2.0 --> WebServerWithSD.  This example shows you how to build up a simple web server that displays the readings of anolog A0 through A5 when requested. After that, store those readings into SD card. 

**Note:**

This new library covers all functions included in the build-in Ethernet library of Arduino IDE. You can use other examples in the same way as that in the preceding Ethernet library. 

5.Upload the program to Arduino. If you do not know how to upload code, please click here.

![](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/img/Open_WebSeverWithSD_code.jpg)

In this code ,we have defined pin 4 as SD card  chip select port and pin 10 as W5200 chip select port.

Firstly, it will send a link to this client if there is a client requesting access to this server.Then send the value of each analog input pin to the network.

Finally you can view each analog pin by opening SD Card file.

**Step 3: Results**

Open a web browser and enter the IP address of your controller. It's dependent on your local network but used to be 192.168.168.178. Then you should find the readings of A0 through A5 popping up as shown below.

![](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/img/Ethernet_Score.jpg)

To check what's going on to the SD card, open the serial monitor. You can use the built-in serial monitor of Arduino IDE or a serial monitor tool as us. After opening a serial monitor, you can read the content of file "test.txt" which we created to store the readings of analog pins.

![](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/img/WebServerWithSD_Result.jpg)

**Notice:**

1） Make sure the Ethernet Shield and your computer are in the same local network.

2） Once the code has been successfully uploaded, it's fine to disconnect the board from your computer and apply independent power to it, leaving it run alone. 


##   Related Projects  ##

It's a pity that we don't have any demo about Ethernet Shield in the [Recipe](http://www.seeedstudio.com/recipe/) yet.

Post your awesome project about Ethernet Shield to **win $100 Coupon!** Please feel free to contact us: **recipe@seeed.cc**

Here we introduce some projects about [LinkIt ONE](http://www.seeedstudio.com/depot/LinkIt-ONE-p-2017.html).

###  What is LinkIt ONE ###

![](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/img/Linkit-one-page.jpg)

The LinkIt ONE development board is an open source, high performance board for prototyping Wearables and IoT devices.

It's based on the world's leading SoC for Wearables, MediaTek Aster (MT2502) combined with high performance Wi-Fi (MT5931)

and GPS (MT3332) chipsets to provide you with access to all the features of MediaTek LinkIt.

It also provides similar pin-out features to Arduino boards, making it easy for you to connect to various sensors, peripherals, and Arduino shields.

###  LinkIt ONE IoT Demo ###

![](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/img/Seeed-recipe-77-20141020151546.jpg)

This is an IoT demo make by LinkIt ONE.

With this demo, we can:

-  Display household temperautre, humidity, luminosity, volume control data collection on OLED screen

-  Cloud service, data uploaded to Cloud platform Xively, real-time monitoring

-  Data retention for reviewing how data changes over time

-  Remote control Household Appliances by sending a message

-  Table Lamp, 3D Printing, controlled by your phone

[I want to make it](http://www.seeedstudio.com/recipe/77-linkit-one-iot-demo.html).

###  Pringles Can antenna with a LinkIt ONE ###

![](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/img/5515ae26588ec.jpg)

Make a focused antenna with a pringles can.

[I want to make it.](http://www.seeedstudio.com/recipe/177-pringles-can-antenna-with-a-linkit-one.html)

[More Awesome Projects by LinkIt ONE](http://www.seeedstudio.com/recipe/index.php?m=Home&amp;controller=Recipe&amp;action=productDetail&amp;id=2)

###   Share Your Awesome Projects with Us  ###

Born with the spirit of making and sharing, that is what we believe makes a maker.

And only because of this, the open source community can be as prosperous as it is today.

It does not matter what you are and what you have made, hacker, maker, artist or engineers.

As long as you start sharing your works with others, you are being part of the open source community and you are making your contributions.

Now share your awesome projects with us on [Recipe](https://community.seeedstudio.com/projects.html#recipe), and win a chance to become the Core User of Seeed.

-  Core Users, are those who show high interests in Seeed products and make significant contributions on Recipe.

-  We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improve the product performance and user experience. And in most cases when our Core Users have some good ideas of making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible.

Get more information about Core User please email to:[recipe@seeed.cc](mailto:recipe@seeed.cc)

##   Resource   ##

- **[Library]**[Ethernet Shield V2.0 Library](https://github.com/Seeed-Studio/Ethernet_Shield_W5200)
- **[Library]**[Depreciated/Old Version of Ethernet Shield V2.0 Library](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/res/W5200_Ethernet_Shield_Library.zip)
- **[Eagle]**[Ethernet Shield V2.0 eagle files](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/res/W5200_Ethernet_Shield_eagle_files.zip)
- **[PDF]**[Ethernet Shield v2.0 PCB](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/res/Ethernet%20Shield%20v2.0.pdf)
- **[PDF]**[Ethernet Shield v2.0 SCH](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/res/Ethernet%20Shield%20v2.0%20sch.pdf)
- **[Datasheet]**[W5200 Datasheet.pdf](https://github.com/SeeedDocument/Ethernet_Shield_V2.0/raw/master/res/W5200_Datasheet.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>