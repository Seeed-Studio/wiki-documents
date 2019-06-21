---
name: Wio Link
category: Wio
bzurl: https://www.seeedstudio.com/Wio-Link-p-2604.html
oldwikiname: Wio_Link
prodimagename: WioLink.png
surveyurl: https://www.surveymonkey.com/r/8CMWZDL
sku: 102110037
---

What's the toughest part of building IoT applications? Someone says the jump wires usually make him frustrated, while the other guy says he hates soldering the most. There are even some people who don't like breadboard. Maybe you are not one of them, but the knowledge of electronic engineering, micro-controller programming, network programming, IoT protocols handling are still great burden between you and a successful IoT project.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/WioLink.png)

In order to simplify all these steps, at the end of 2015, Seeed Studio initiated Wio Link on [KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search), defined a new way of developing IoT applications. Wio Link is an ESP8266 SoC based open-source Wi-Fi development board, the best part of it is the associated platform that allows users to create IoT applications by virtualizing plug-n-play modules to RESTful APIs with mobile Apps. It means that there will be no hardware programming, no breadboard, no jumper wires, and no soldering, just by installing an App on your mobile phone, you are able to build a simple IoT project in 5 minutes.

[![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)


!!!Warning
     The Wio IFTTT function is EOL. But Wio APP is available. You can use the API from Wio APP to read sensor status and control the actuator. 


## Features

- No hardware programming, No breadboard, No jumper wires, No soldering required.
- A lot of Grove modules are supported (Check the list in Mobile App).
- Plug-n-Play Grove Modules
- Visual configuration instead of microcontroller programming.
- Update automatically via cloud compiling and OTA.
- Bring real world to virtual platform. All sensors become virtual RESTful API.
- Android & iOS Apps to manage Wio Link.
- IFTTT supported by Seeed's Channel

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Wio_Link_Banner.gif)

## Specification
----
|General|Value|Power Management|Value|
|:---|---|:---|---:|
|**Size**|55mm * 48mm|**DC Current Per I/O Pin**|12mA|
|**Crystal**|26MHz|**Input Voltage (Micro USB)**| 5V|
|**Flash Memory**|4MBytes (W25Q32B)|**Input Voltage (Battery holder)**|3.4~4.2V|
|**Wi-Fi Network Protocol**|802.11b/g/n|**Output DC Current**|1000mA MAX
|**Wi-Fi Encryption Technology**|WEP/TKIP/AES|**Operating Voltage**|3.3V|
|**Grove Connectors**|6 |**Charge Current**|500mA MAX|
|**Flash**|	4MB (W25Q32B)|

## Make with Wio Link
----
Wio Link is well designed to provide simple Wi-Fi solutions for projects like:

- Smart Home
- Intelligent environmental monitoring
- Funny Toys
- Web of Things
- Internet of Things



In fact, we have already designed many projects in our [**recipe**](https://community.seeedstudio.com/projects.html?t=Wio), come and visit it to find some interesting projects or even share you own projects, I am sure it will gain a lot of fans for you ~

|Irrigation control system |The internet of led wall | Dog feeding machine|
|---|---|---|
|![](https://github.com/SeeedDocument/Wio_Node/raw/master/pictures/2.png)|![](https://github.com/SeeedDocument/Wio_Node/raw/master/pictures/1.png)|![](https://raw.githubusercontent.com/SeeedDocument/Wio_Node/master/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://raw.githubusercontent.com/SeeedDocument/Wio_Node/master/pictures/4.png)|![](https://github.com/SeeedDocument/Wio_Node/raw/master/pictures/5.png)|![](https://raw.githubusercontent.com/SeeedDocument/Wio_Node/master/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|

!!!Note
       * Some of the recipe are made for Wio Node, but it can apply to Wio Link too.

## Hardware Overview
---

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Hardware%20overview.jpg)

|Part|Function|
|---|---|
|MCU	|ESP8266|
|Digital Port 0	|GPIO 14|
|Digital Port 1|	GPIO 12|
|Digital Port 2	|GPIO 13|
|Analog Port	|A3|
|UART Port|	Pin 1 & Pin 3|
|I2C Port|	Pin 4 & Pin 5|
|Status Light|Blue LED is the WiFi status indicator, Red LED indicates the working status
|Configure Button| To configure and manage your Wio Link|
|Battery Holder|JST2.0|
|Micro USB|To power the board or communicate to the PC|
|Reset Button| To reset the MCU|

### Status LEDs
Near to the FUNCTION button there’re 2 status Leds, a blue one and a red one. The BLUE led is the network status indicating led. It has the following blink patterns:

- breathing Under configuration mode
- blink twice quickly then off 1s requesting IP address from router
- blink once quickly then off 1s connecting to the server
- on 1s then off 1s The node is online
- on constantly the node is dead for not getting IP or not connecting to server.
- blink quickly (on 100ms then off 100ms) OTA  

!!!Note
     * The BLUE led is attached to GPIO2 which is also the TX pin of UART1. When downloading firmware, the UART1 dumps the data transmitting on UART0 by instinct. So the BLUE led will blink while downloading firmware. After startup the GPIO2 will be configured as a GPIO not TX of UART1.

The RED led is another status led which indicates the power status of Grove modules. All the six Grove interface’s VCC converge together and can be controlled with GPIO 15. When the node is in deep sleep mode, all the grove modules lose their power too. The RED led will light on when Grove modules are powered and will go off when Grove modules aren’t powered.

### Bonus!
Wio Link has an inbuilt LiPo battery charger, so you can charge 3.7v LiPo battery through JST 2.0 Port when USB is connecting.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/500px-Wio_Link_Battery.jpg)

!!!Note
     * Battery needs to be bought separately. Please visit [Bazzar](https://www.seeedstudio.com/s/Battery.html) where we arranged many choices for you.

## Get Started
---

Let us build a very basic LED application with Wio Link, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Link|Grove - LED|Micro USB Cable|
|:--------:|:-----------:|:---------------:|
|![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Wio%20link%20small%20image.jpg)|![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Red%20LED.jpg)|![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](http://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

!!!NOTE
    * A smartphone is needed as well (Android OS version 4.1 or advanced, iOS version 7 or advanced)
    * Grove - LED include a Grove cable already

### **STEP 1:** Install Android/iOS App
You need to install the Wio Link App to manage and configure your Wio Link devices.

Download the Android or iOS App and install. Or you can go to App Store of Apple or Google Market and search "Wio Link", you will find it.

|[![](https://github.com/SeeedDocument/Wio_Node/raw/master/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://github.com/SeeedDocument/Wio_Node/raw/master/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Get Android App](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Get iOS App](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

!!!Note
    * Make sure your Android OS version is 4.1 or advanced, iOS version is 7 or advanced.

### **STEP 2:** Create your Account
- If it is your first time to use Wio APP, it may require GPS authorization, please approve it, then sign up.
- If you already have an account, check the server location before logging in.

!!!Note
    * Please pay attention to the server location, because wrong server location will lead to failure when connecting to Wio Link.

[![](https://github.com/SeeedDocument/Wio_Node/raw/master/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://github.com/SeeedDocument/Wio_Node/raw/master/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **STEP 3**: Connect Wio Link Wi-Fi AP
- Push and hold the CONFIG button until the blue LED turns into breathing mode (i.e. blinking with fade in & fade out effect). It means that Wio Link has turned to configuration mode successfully and can be detected by the Wio App.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/WioLink_Configure-middle.png)

- Push "Add your first Device".
- Choose Wio Link
- "Go to Wi-Fi list" will lead you to the Wi-Fi setting interface of your smartphone.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Step3-1new.png)

- If you have successfully made the blue LED turn into breathing mode, you will find the Wio Link in the Wi-Fi list, connect to it!(Usually it is not called Wio Link in the Wi-Fi list, in the example, mine is Wio_8B2F12, you may find one named wio_xxxxxx in your list.)
- Once connected, you will receive a notice, then you can go back to the app
- Next step is connecting to the Wi-Fi of your home or company

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Step3-2.png)

- If there is password pf the Wi-Fi you want to connect, it may require you to enter the password
- Consider that you may need to connect more than 1 Wio device in the future, a special name will make you distinguish them from each other easily.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Step3-3.png)

### **STEP 4:** Virtually interconnect modules with Wio Link and update firmware
- Click the Wio Link and you will be in the main interface.
- There are 6 grove connectors, select the first one on the left.
- Because LED is output devices. Choose output category
- Find the icon that looks like a bulb, choose it.
- Then you will find the bottom rectangle button becomes red and "View API" becomes "Update Firmware". Choose "Update Firmware"

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Step4.png)

- Since you selected the Digital 0 port to connect with LED in the APP, you need to connect the real Grove-LED to Digital 0 port of Wio Link too.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Wio_Link_Grove_LED%20middle.JPG)

### **STEP 5**: Test application using APIs
- Now that  you have successfully connect the LED to Wio Link, click "View API" to check the API of Wio Link
- Input "1" or "0" in the "Test Request" area, and click "Post" button and see what will happen.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Step5.png)



## Get started with IFTTT & DoButton
---
Dont't know how to code? Don't worry, with the help of [IFTTT](https://en.wikipedia.org/wiki/IFTTT), even if you know nothing about coding, you are still able to build some simple projects.

IFTTT is an abbreviation of "If This Then That", it is a free web-based service that allows users to create chains of simple conditional statements, called "recipes", which are triggered based on changes to other web services such as Gmail, Facebook, Instagram. How does IFTTT work with Wio Link? As you can see in below pictures, Seeed provided cloud service at wio.seeed.io, which can interchange data and send instructions to IFTTT and Wio Link. So by creating some simple recipe, you are able to hack things without coding.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/IFTTT.png)

If you don't have an IFTTT account, click [here](https://ifttt.com/join) to sign up.

If you already have an IFTTT account,click [here](https://ifttt.com/recipes/search?q=seeed) to connect with Seeed, or search Seeed at IFTTT website. There you will find 9 recipes by Seeed to teach you how to us e IFTTT.
![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/IFTTT%20recipes.png)

What is DoButton? DoButton is one of IFTTT's application that empowers you to create your own personalized button with just a tap, it is very suitable for building IoT projects and control it through your smartphone, here are two examples to show you how to use IFTTT&DoButton to make useful applications.

### Example:

|**IFTTT**|**DoButton**|
|:---|:---|
|[**Recipe**][DIY an Automatic Garden Irrigation without coding](https://community.seeedstudio.com/project_detail.html?id=1080)|[**Recipe**][How to feed your pets when you're not home](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**Video**][How to use ITFFF](https://vimeo.com/148590984)|[**Video**][How to use DoButton](https://vimeo.com/146988454)|


## Guide for advanced users
----
Feel those examples too simple? Wanna make more complicated projects? Here are the best guides for advanced users to hack things with Wio Link. By these guides, advanced users are able to know more detail information about Wio Link, deploy private server, even write module driver for Wio Link.

[![](https://raw.githubusercontent.com/SeeedDocument/Wio_Node/master/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

The guide covers:

- API Reference
- Server Deployment Guide
- Advanced User Guide
- How to write module driver for Wio Link?

## Advanced Tutorial
If you have successfully controlled the grove-led with your smartphone, and want to try something more difficult and not that complicated, why not try this tutorial, after learning it, you will be able to  build a temperature and humidity monitor and light up the RGB Led strip with Wio Link.

Before you start, please check if you have below devices on hand.

|RGB Led strip|Grove-Temperature and Humidity Sensor|
|:---:|:---:|
|![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/RGB%20LED%20Strip.jpg)|![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/grove-T%26H%20sensor.jpg)|
|[Get One Now](https://www.seeedstudio.com/s/led%20strip.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- Step1: Remove the Grove LED from the grove connector, plug the Led strip to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/advance%20tutorial%20video.png)

- Step2：Plug the Grove-Temperature and Humidity Sensor to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/advance%20tutorial%20video%202.png)

- Step3: View the APIs and read the temperature & humidity in your house. Below image shows the temperature change before and after holding the grove in hand. I increased the temperature by 1 Celsius. Try and see how you can change the temperature and humidity in your house.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Celsuis%202%20pics.png)

- Step4: Control the light of Led strip by changing RGB value.

Because the Wio Link App read hex RGB value, RGB value need to be converted to hex value. Here I would like to recommend the website [RGB t0 Hex](http://www.rgbtohex.net/). Just by inputting RGB value for the 3 RGB elements (Red, Green, Blue), the website will converts the RGB value to hex very easily. Here is some example.
- Input 255, 0, 0

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/RGB%20255%200%200.png)

- Convert it, then you will get the hex value as FF0000, the color is Red.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/FF0000.png)

!!!Note
    * The RGB value you input should be any nature number between 0 and 255 (Including 0 and 255)

Then input how many Leds you want to lighten and the hex value in the app, here my Led strip has 30 Leds, so I lighten all of them.

![](https://github.com/SeeedDocument/Wio_Link/raw/master/image/Wio%20link%20control%20led%20strip.png)

You can also specific which part of the strip be lighted and give a special color to it, or even make like blink in rainbow mode. A lot of amazing functions are waiting for your exploration!


## Resource
---

Hardware

- [EAGLE Schematic files](https://github.com/SeeedDocument/Wio_Link/raw/master/resource/Wio_Link_SCH_v1.0.rar)
- [EAGLE PCB file](https://github.com/SeeedDocument/Wio_Link/raw/master/resource/202000877%20Wio%20Link%20v1.0%20sch%20pcb.zip)
- [Schematic files(pdf)](https://github.com/SeeedDocument/Wio_Link/raw/master/resource/Wio%20Link%20v1.0%20sch.pdf)

Software

- [Source Code on Github.](https://github.com/Seeed-Studio/Wio_Link)

More documentation and references

- [API Reference](http://seeed-studio.github.io/Wio_Link/)
- [Server Deployment Guide](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
- [How to write module driver for Wio Link](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- [iot.seeed.cc](http://iot.seeed.cc/index.html) to get more info.


## FAQ
----
Here are some questions that we usually received from new users. If you have any other issues when you are using Wio Link or other Wio products, welcome to the [Community of Wio](https://community.seeedstudio.com/topics.html?t=Wio) where there are many professional users waiting to give you advices and also many advanced users providing plenty of ideas on how to use Wio products!

**1. Power & Battery － Does Wio Link come with a Lipo battery?**

Nope. Each Wio Link goes with a micro USB cable for charging or you can purchase a 3.7V Lipo battery from our Bazzar. Here’s the specs for your reference:
- maximum input voltage: 4.2V;
- maximum charging current: 500mA.


**2. Power & Battery - Can I use a power adapter with Wio Link? Which type? And common battery holders?**

There are two ways to power the Wio Link, Micro USB cable or a 3.7V Lipo battery. If both Micro USB and battery are plugged into the board, the battery will be charged by the USB power. You can use all kinds of power adapter which can connect with Micro USB cable and 5Vdc output. The battery holder is a JST-2.0 connector.


**3. Power Consumption - What’s the power consumption of Wio Link?**

The average power consumption is 70mA. With a battery of 700mAh, it can keep alive up to 10 hours. There are Low-Power-APIs which allows you to change the Wio Link from working-mode to sleeping-mode. It will reduce average power consumption to 150uA or less.


**4. Grove Cables - Are the Groves equipped with cables in all kits?**

Yes, we have each Grove modules packed with one standard 4-pin Grove cable.


**5. RESTful APIs - Where are the endpoints? The calls aren't required to go through some cloud servers are they? Is it an internet connection required or can they be made all through a local network?**

We deploy the REST API server to iot.seeed.cc, so you can get access to sensor and actuator from iot.seeed.cc. At the moment, Wio Link must connect to the Internet. Also, we will open-source the server so as to enable users deploy local servers in very simple Docker way. With local servers deployed, they can utilize the compiling and data exchange service locally instead of going online.


**6. Programming Methods Supported - Will other programming methods be supported, such as Arduino IDE?**

Wio Link can be programed with Arduino IDE, in that case it will lose the functionality of RESTful APIs except you implement another one in the same time. Wio Link is mostly expected to archive the Web of Things conversion for physical hardware, so interactions are expected to perform in web / internet. But no worries, the software architecture is flexible, you can pull down the source code to local and connect Wio Link to the local servers, then you could modify the source code which will be compiled.

If you would like to interact with Arduino or RPI, you can develop a 3rd-party module driver and here’s the guide: https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F and example driver: https://github.com/Seeed-Studio/Grove_Drivers_for_Wio/tree/master/grove_example


**7. Platform Supported -Does Wio Link support Windows Platform?**

By now Wio Link provides Android and iOS two mobile Apps. We have all services as RESTful API, such like user accounts and OTA, following API documents, the third-party developers can build their own applications say Mobile Apps or Desktop Apps.
Wio Link is an community friendly project. It won't be limited to a certain platform. We really expect people can play with Wio Link in their way.


**8. Can I use Wio Link to interact with existing systems?**

Yes. Who Link can interact with your existing system in several ways. First, connect any GPIO of Wio Link to other system, select “Generic Digital Input” or “Generic Digital Output” virtual Grove modules in the mobile App, then send/read signals to/from the existing system with RESTful API calls. Second, connect the analog port of Wio Link to other system, select “Generic Analog Input” virtual Grove module in the mobile App, then read analog measurement for some physical quantity of your existing system. Third, to interact with existing system more flexible, you can develop a 3rd party module driver in which dispatch the requests from internet to your existing system through I2C or UART interface. We have a guide[1] about how to develop 3rd party module driver and also we can provide technical support for your development.

[1]https://github.com/Seeed-Studio/Wio_Link#how-to-write-module-driver-for-wio-link


**9. How many Groves supported on Wio Link?**

There are 150+ kinds of plug and play Groves modules available, among which 36 were supported on Wio Link till now, and you can find most of them in the Rewards, we're working to add more continuously.

Here's the list of supported Groves so far:

### Grove Support List

|SKU       |Name                                        |Interface |Driver                 |Link       |
|----------|--------------------------------------------|----------|-------------------    |-----------|
|101020008 |    Grove - Moisture Sensor                 |Analog    |itself                 | [link](http://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html) |
|101020014 |    Grove - Light Sensor                    |Analog    |Generic Analog Input   | [link](http://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) |
|101020015 |    Grove - Temperature Sensor              |Analog    |itself                 | [link](http://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html) |
|101020017 |    Grove - Rotary Angle Sensor             |Analog    |Generic Analog Input   | [link](http://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html) |
|101020022 |    Grove - Light Sensor(P)                 |Analog    |Generic Analog Input   | [link](http://www.seeedstudio.com/Grove-Light-Sensor(P)-p-1253.html) |
|101020023 |    Grove - Sound Sensor                    |Analog    |ifself                 | [link](http://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020027 |    Grove - Electricity Sensor              |Analog    |Generic Analog Input   | [link](http://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html) |
|101020036 |    Grove - Slide Potentiometer             |Analog    |Generic Analog Input   | [link](http://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html) |
|101020042 |    Grove - 80cm Infrared Proximity Sensor  |Analog    |Generic Analog Input   | [link](http://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html) |
|101020043 |    Grove - UV Sensor                       |Analog    |itself                 | [link](http://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html) |
|101020048 |    Grove - Rotary Angle Sensor(P)          |Analog    |Generic Analog Input   | [link](http://www.seeedstudio.com/Grove-Rotary-Angle-Sensor(P)-p-1242.html) |
|101020063 |    Grove - Loudness Sensor                 |Analog    |itself                 | [link](http://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html) |
|101020076 |    Grove - Luminance Sensor                |Analog    |itself                 | [link](http://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html) |
|101020078 |    Grove - Air quality sensor v1.3         |Analog    |Generic Analog Input   | [link](http://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html) |
|101020003 |    Grove - Button                          |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Button-p-766.html) |
|101020004 |    Grove - Switch(P)                       |Digital   |Generic Digital Input  | [link](http://www.seeedstudio.com/Grove-Switch(P)-p-1252.html) |
|101020005 |    Grove - Collision Sensor                |Digital   |Generic Digital Input  | [link](http://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html) |
|101020009 |    Grove - Line Finder                     |Digital   |Generic Digital Input  | [link](http://www.seeedstudio.com/Grove-Line-Finder-p-825.html) |
|101020018 |    Grove - Water Sensor                    |Digital   |Generic Digital Input  | [link](http://www.seeedstudio.com/Grove-Water-Sensor-p-748.html) |
|101020020 |    Grove - PIR Motion Sensor               |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html) |
|101020025 |    Grove - Tilt Switch                     |Digital   |Generic Digital Input  | [link](http://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html) |
|101020037 |    Grove - Touch Sensor                    |Digital   |Generic Digital Input  | [link](http://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html) |
|101020038 |    Grove - Magnetic Switch                 |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html) |
|101020046 |    Grove - Hall Sensor                     |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Hall-Sensor-p-965.html) |
|101020049 |    Grove - Flame Sensor                    |Digital   |Generic Digital Input  | [link](http://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html) |
|111020000 |    Grove - Button(P)                       |Digital   |Generic Digital Input  | [link](http://www.seeedstudio.com/Grove-Button(P)-p-1243.html) |
|101020073 |    Grove - Electromagnet                   |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Electromagnet-p-1820.html) |
|101020090 |    Grove - Water Atomization v1.0          |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/s/101020090.html#) |
|103020004 |    Grove - Solid State Relay               |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html) |
|103020005 |    Grove - Relay                           |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Relay-p-769.html) |
|103020008 |    Grove - MOSFET                          |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-MOSFET-p-1594.html) |
|103020010 |    Grove - 2-Coil Latching Relay           |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html) |
|103020014 |    Grove - Dry-Reed Relay                  |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html) |
|104020001 |    Grove - Variable Color LED              |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html) |
|104020002 |    Grove - Purple LED (3mm)                |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-Purple-LED-(3mm)-p-1143.html) |
|104020005 |    Grove - LED String Light                |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) |
|104030005 |    Grove - Red LED                         |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-Red-LED-p-1142.html) |
|104030007 |    Grove - Green LED                       |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-Green-LED-p-1144.html) |
|104030009 |    Grove - White LED                       |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-White-LED-p-1140.html) |
|104030010 |    Grove - Blue LED                        |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-Blue-LED-p-1139.html) |
|104030014 |    Grove - Multi Color Flash LED (5mm)     |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-Multi-Color-Flash-LED-(5mm)-p-1141.html) |
|105020003 |    Grove - Vibration Motor                 |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html) |
|105020004 |    Grove - Mini Fan                        |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html) |
|105020005 |    Grove - EL Driver                       |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-EL-Driver-p-2269.html) |
|107020000 |    Grove - Buzzer                          |Digital   |Generic Digital Output | [link](http://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|107020001 |    Grove - Speaker                         |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Speaker-p-1445.html) |
|101020034 |    Grove - 3-Axis Digital Compass          |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) |
|101020039 |Grove - 3-Axis Digital Accelerometer(±1.5g) |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html) |
|101020050 |    Grove - 3-Axis Digital Gyro             |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html) |
|101020072 |    Grove - Barometer Sensor (BMP180)       |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html) |
|101020083 |    Grove - Gesture                         |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-Gesture-p-2463.html) |
|101020088 |    Grove - Multichannel Gas Sensor         |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html) |
|103020013 |    Grove - I2C ADC                         |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) |
|104030008 |    Grove - OLED Display 1.12''             |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|104030011 |    Grove - OLED Display 0.96''             |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|105020001 |    Grove - I2C Motor Driver                |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html) |
|107020006 |    Grove - I2C FM Receiver                 |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html) |
|101020192 |    Grove - Barometer(BMP280)               |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP280)-p-2652.html) |
|101020193 |Grove - Temp&Humi&Barometer Sensor(BME280)  |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-Temp%26Humi%26Barometer-Sensor-(BME280)-p-2653.html) |
|101020010 |    Grove - Ultrasonic Ranger               |Ditital   |itself                 | [link](http://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|101020016 |    Grove - Infrared Receiver               |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html) |
|101020019 |    Grove - Temperature&Humidity Sensor Pro |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html) |
|101020026 |    Grove - Infrared Emitter                |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html) |
|101020029 |    Grove - Infrared Reflective Sensor      |Others    |itself                 | [link](http://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html) |
|101020030 |    Grove - Digital Light Sensor            |I2C       |itself                 | [link](http://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html) |
|101020040 |    Grove - IR Distance Interrupter         |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html) |
|103020018 |    Grove - Recorder                        |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Recorder-p-1825.html) |
|104020006 |    Grove - LED Bar v2.0                    |UART      |itself                 | [link](http://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|104030003 |    Grove - 4-Digit Display                 |UART      |itself                 | [link](http://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) |
|316010005 |    Grove - Servo                           |Digital   |itself                 | [link](http://www.seeedstudio.com/Grove-Servo-p-1241.html) |
|101020067 |    Grove - CO2 Sensor                      |UART      |itself                 | [link](http://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html) |

**10. Wio Link Error code and solution**

| 1021 | Fail connect to Wifi     | Could not connection to Wi-Fi. Please check Wi-Fi password and try again                                                           |
|------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 1031 | Fail connect to Wio Wifi | Could not connect to Wio wi-fi hotspot, please try again or manually choose Wio's Wi-Fi hotspot in system settings.                |
| 1032 | Select wifi error        | Please select a Wifi like"Wio_xxxxxx"                                                                                              |
| 1033 | Wifi Inconformity        | The current connection before the WiFi and choice of WiFi                                                                          |
| 1041 | Send order error         | Please check your internet connection and try again.still can’t slove the problem, please try FAQ section and contact us.    |
| 1042 | Connect error            | Your phone and device wifi disconnect                                                                                              |
| 1043 | Fail connect to Wifi     | Please check your internet connection and try again.Or click "Setting" go to manual settings view.                                 |
| 1044 | Connection Error         | Please check your internet connection and try again.If still can’t solve the problem, please try FAQ section and contact us. |

## Project 

**LED Sound Meter using Wio-Link and Node-Red**: SeeedStudio Grove sound sensor and LED strip attached to Wio-Link being driven by a Node-Red flow.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>