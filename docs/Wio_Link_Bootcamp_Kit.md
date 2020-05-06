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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

In order to simplify all these steps, at the end of 2015, Seeed Studio initiated Wio Link on [KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search), defined a new way of developing IoT applications. Wio Link is an ESP8266 SoC based open-source Wi-Fi development board, the best part of it is the associated platform that allows users to create IoT applications by virtualizing plug-n-play modules to RESTful APIs with mobile Apps. It means that there will be no hardware programming, no breadboard, no jumper wires, and no soldering, just by installing an App on your mobile phone, you are able to build a simple IoT project in 5 minutes.

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)


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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

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
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|

!!!Note
       * Some of the recipe are made for Wio Node, but it can apply to Wio Link too.

## Hardware Overview
---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

!!!Note
     * Battery needs to be bought separately. Please visit [Bazzar](https://www.seeedstudio.com/s/Battery.html) where we arranged many choices for you.

## Get Started
---

Let us build a very basic LED application with Wio Link, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Link|Grove - LED|Micro USB Cable|
|:--------:|:-----------:|:---------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

!!!NOTE
    * A smartphone is needed as well (Android OS version 4.1 or advanced, iOS version 7 or advanced)
    * Grove - LED include a Grove cable already

### **STEP 1:** Install Android/iOS App
You need to install the Wio Link App to manage and configure your Wio Link devices.

Download the Android or iOS App and install. Or you can go to App Store of Apple or Google Market and search "Wio Link", you will find it.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Get Android App](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Get iOS App](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

!!!Note
    * Make sure your Android OS version is 4.1 or advanced, iOS version is 7 or advanced.

### **STEP 2:** Create your Account
- If it is your first time to use Wio APP, it may require GPS authorization, please approve it, then sign up.
- If you already have an account, check the server location before logging in.

!!!Note
    * Please pay attention to the server location, because wrong server location will lead to failure when connecting to Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **STEP 3**: Connect Wio Link Wi-Fi AP
- Push and hold the CONFIG button until the blue LED turns into breathing mode (i.e. blinking with fade in & fade out effect). It means that Wio Link has turned to configuration mode successfully and can be detected by the Wio App.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- Push "Add your first Device".
- Choose Wio Link
- "Go to Wi-Fi list" will lead you to the Wi-Fi setting interface of your smartphone.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- If you have successfully made the blue LED turn into breathing mode, you will find the Wio Link in the Wi-Fi list, connect to it!(Usually it is not called Wio Link in the Wi-Fi list, in the example, mine is Wio_8B2F12, you may find one named wio_xxxxxx in your list.)
- Once connected, you will receive a notice, then you can go back to the app
- Next step is connecting to the Wi-Fi of your home or company

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- If there is password pf the Wi-Fi you want to connect, it may require you to enter the password
- Consider that you may need to connect more than 1 Wio device in the future, a special name will make you distinguish them from each other easily.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **STEP 4:** Virtually interconnect modules with Wio Link and update firmware
- Click the Wio Link and you will be in the main interface.
- There are 6 grove connectors, select the first one on the left.
- Because LED is output devices. Choose output category
- Find the icon that looks like a bulb, choose it.
- Then you will find the bottom rectangle button becomes red and "View API" becomes "Update Firmware". Choose "Update Firmware"

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- Since you selected the Digital 0 port to connect with LED in the APP, you need to connect the real Grove-LED to Digital 0 port of Wio Link too.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **STEP 5**: Test application using APIs
- Now that  you have successfully connect the LED to Wio Link, click "View API" to check the API of Wio Link
- Input "1" or "0" in the "Test Request" area, and click "Post" button and see what will happen.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)



## Get started with IFTTT & DoButton
---
Dont't know how to code? Don't worry, with the help of [IFTTT](https://en.wikipedia.org/wiki/IFTTT), even if you know nothing about coding, you are still able to build some simple projects.

IFTTT is an abbreviation of "If This Then That", it is a free web-based service that allows users to create chains of simple conditional statements, called "recipes", which are triggered based on changes to other web services such as Gmail, Facebook, Instagram. How does IFTTT work with Wio Link? As you can see in below pictures, Seeed provided cloud service at wio.seeed.io, which can interchange data and send instructions to IFTTT and Wio Link. So by creating some simple recipe, you are able to hack things without coding.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

If you don't have an IFTTT account, click [here](https://ifttt.com/join) to sign up.

If you already have an IFTTT account,click [here](https://ifttt.com/recipes/search?q=seeed) to connect with Seeed, or search Seeed at IFTTT website. There you will find 9 recipes by Seeed to teach you how to us e IFTTT.
![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

What is DoButton? DoButton is one of IFTTT's application that empowers you to create your own personalized button with just a tap, it is very suitable for building IoT projects and control it through your smartphone, here are two examples to show you how to use IFTTT&DoButton to make useful applications.

### Example:

|**IFTTT**|**DoButton**|
|:---|:---|
|[**Recipe**][DIY an Automatic Garden Irrigation without coding](https://community.seeedstudio.com/project_detail.html?id=1080)|[**Recipe**][How to feed your pets when you're not home](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**Video**][How to use ITFFF](https://vimeo.com/148590984)|[**Video**][How to use DoButton](https://vimeo.com/146988454)|


## Guide for advanced users
----
Feel those examples too simple? Wanna make more complicated projects? Here are the best guides for advanced users to hack things with Wio Link. By these guides, advanced users are able to know more detail information about Wio Link, deploy private server, even write module driver for Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

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
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[Get One Now](https://www.seeedstudio.com/s/led%20strip.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- Step1: Remove the Grove LED from the grove connector, plug the Led strip to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- Step2：Plug the Grove-Temperature and Humidity Sensor to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- Step3: View the APIs and read the temperature & humidity in your house. Below image shows the temperature change before and after holding the grove in hand. I increased the temperature by 1 Celsius. Try and see how you can change the temperature and humidity in your house.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- Step4: Control the light of Led strip by changing RGB value.

Because the Wio Link App read hex RGB value, RGB value need to be converted to hex value. Here I would like to recommend the website [RGB t0 Hex](https://www.rgbtohex.net/). Just by inputting RGB value for the 3 RGB elements (Red, Green, Blue), the website will converts the RGB value to hex very easily. Here is some example.
- Input 255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- Convert it, then you will get the hex value as FF0000, the color is Red.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

!!!Note
    * The RGB value you input should be any nature number between 0 and 255 (Including 0 and 255)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

In order to simplify all these steps, at the end of 2015, Seeed Studio initiated Wio Link on [KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search), defined a new way of developing IoT applications. Wio Link is an ESP8266 SoC based open-source Wi-Fi development board, the best part of it is the associated platform that allows users to create IoT applications by virtualizing plug-n-play modules to RESTful APIs with mobile Apps. It means that there will be no hardware programming, no breadboard, no jumper wires, and no soldering, just by installing an App on your mobile phone, you are able to build a simple IoT project in 5 minutes.

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)


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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

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
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|

!!!Note
       * Some of the recipe are made for Wio Node, but it can apply to Wio Link too.

## Hardware Overview
---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

!!!Note
     * Battery needs to be bought separately. Please visit [Bazzar](https://www.seeedstudio.com/s/Battery.html) where we arranged many choices for you.

## Get Started
---

Let us build a very basic LED application with Wio Link, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Link|Grove - LED|Micro USB Cable|
|:--------:|:-----------:|:---------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

!!!NOTE
    * A smartphone is needed as well (Android OS version 4.1 or advanced, iOS version 7 or advanced)
    * Grove - LED include a Grove cable already

### **STEP 1:** Install Android/iOS App
You need to install the Wio Link App to manage and configure your Wio Link devices.

Download the Android or iOS App and install. Or you can go to App Store of Apple or Google Market and search "Wio Link", you will find it.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Get Android App](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Get iOS App](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

!!!Note
    * Make sure your Android OS version is 4.1 or advanced, iOS version is 7 or advanced.

### **STEP 2:** Create your Account
- If it is your first time to use Wio APP, it may require GPS authorization, please approve it, then sign up.
- If you already have an account, check the server location before logging in.

!!!Note
    * Please pay attention to the server location, because wrong server location will lead to failure when connecting to Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **STEP 3**: Connect Wio Link Wi-Fi AP
- Push and hold the CONFIG button until the blue LED turns into breathing mode (i.e. blinking with fade in & fade out effect). It means that Wio Link has turned to configuration mode successfully and can be detected by the Wio App.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- Push "Add your first Device".
- Choose Wio Link
- "Go to Wi-Fi list" will lead you to the Wi-Fi setting interface of your smartphone.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- If you have successfully made the blue LED turn into breathing mode, you will find the Wio Link in the Wi-Fi list, connect to it!(Usually it is not called Wio Link in the Wi-Fi list, in the example, mine is Wio_8B2F12, you may find one named wio_xxxxxx in your list.)
- Once connected, you will receive a notice, then you can go back to the app
- Next step is connecting to the Wi-Fi of your home or company

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- If there is password pf the Wi-Fi you want to connect, it may require you to enter the password
- Consider that you may need to connect more than 1 Wio device in the future, a special name will make you distinguish them from each other easily.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **STEP 4:** Virtually interconnect modules with Wio Link and update firmware
- Click the Wio Link and you will be in the main interface.
- There are 6 grove connectors, select the first one on the left.
- Because LED is output devices. Choose output category
- Find the icon that looks like a bulb, choose it.
- Then you will find the bottom rectangle button becomes red and "View API" becomes "Update Firmware". Choose "Update Firmware"

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- Since you selected the Digital 0 port to connect with LED in the APP, you need to connect the real Grove-LED to Digital 0 port of Wio Link too.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **STEP 5**: Test application using APIs
- Now that  you have successfully connect the LED to Wio Link, click "View API" to check the API of Wio Link
- Input "1" or "0" in the "Test Request" area, and click "Post" button and see what will happen.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)



## Get started with IFTTT & DoButton
---
Dont't know how to code? Don't worry, with the help of [IFTTT](https://en.wikipedia.org/wiki/IFTTT), even if you know nothing about coding, you are still able to build some simple projects.

IFTTT is an abbreviation of "If This Then That", it is a free web-based service that allows users to create chains of simple conditional statements, called "recipes", which are triggered based on changes to other web services such as Gmail, Facebook, Instagram. How does IFTTT work with Wio Link? As you can see in below pictures, Seeed provided cloud service at wio.seeed.io, which can interchange data and send instructions to IFTTT and Wio Link. So by creating some simple recipe, you are able to hack things without coding.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

If you don't have an IFTTT account, click [here](https://ifttt.com/join) to sign up.

If you already have an IFTTT account,click [here](https://ifttt.com/recipes/search?q=seeed) to connect with Seeed, or search Seeed at IFTTT website. There you will find 9 recipes by Seeed to teach you how to us e IFTTT.
![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

What is DoButton? DoButton is one of IFTTT's application that empowers you to create your own personalized button with just a tap, it is very suitable for building IoT projects and control it through your smartphone, here are two examples to show you how to use IFTTT&DoButton to make useful applications.

### Example:

|**IFTTT**|**DoButton**|
|:---|:---|
|[**Recipe**][DIY an Automatic Garden Irrigation without coding](https://community.seeedstudio.com/project_detail.html?id=1080)|[**Recipe**][How to feed your pets when you're not home](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**Video**][How to use ITFFF](https://vimeo.com/148590984)|[**Video**][How to use DoButton](https://vimeo.com/146988454)|


## Guide for advanced users
----
Feel those examples too simple? Wanna make more complicated projects? Here are the best guides for advanced users to hack things with Wio Link. By these guides, advanced users are able to know more detail information about Wio Link, deploy private server, even write module driver for Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

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
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[Get One Now](https://www.seeedstudio.com/s/led%20strip.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- Step1: Remove the Grove LED from the grove connector, plug the Led strip to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- Step2：Plug the Grove-Temperature and Humidity Sensor to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- Step3: View the APIs and read the temperature & humidity in your house. Below image shows the temperature change before and after holding the grove in hand. I increased the temperature by 1 Celsius. Try and see how you can change the temperature and humidity in your house.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- Step4: Control the light of Led strip by changing RGB value.

Because the Wio Link App read hex RGB value, RGB value need to be converted to hex value. Here I would like to recommend the website [RGB t0 Hex](https://www.rgbtohex.net/). Just by inputting RGB value for the 3 RGB elements (Red, Green, Blue), the website will converts the RGB value to hex very easily. Here is some example.
- Input 255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- Convert it, then you will get the hex value as FF0000, the color is Red.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

!!!Note
    * The RGB value you input should be any nature number between 0 and 255 (Including 0 and 255)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

In order to simplify all these steps, at the end of 2015, Seeed Studio initiated Wio Link on [KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search), defined a new way of developing IoT applications. Wio Link is an ESP8266 SoC based open-source Wi-Fi development board, the best part of it is the associated platform that allows users to create IoT applications by virtualizing plug-n-play modules to RESTful APIs with mobile Apps. It means that there will be no hardware programming, no breadboard, no jumper wires, and no soldering, just by installing an App on your mobile phone, you are able to build a simple IoT project in 5 minutes.

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)


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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

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
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|

!!!Note
       * Some of the recipe are made for Wio Node, but it can apply to Wio Link too.

## Hardware Overview
---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

!!!Note
     * Battery needs to be bought separately. Please visit [Bazzar](https://www.seeedstudio.com/s/Battery.html) where we arranged many choices for you.

## Get Started
---

Let us build a very basic LED application with Wio Link, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Link|Grove - LED|Micro USB Cable|
|:--------:|:-----------:|:---------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

!!!NOTE
    * A smartphone is needed as well (Android OS version 4.1 or advanced, iOS version 7 or advanced)
    * Grove - LED include a Grove cable already

### **STEP 1:** Install Android/iOS App
You need to install the Wio Link App to manage and configure your Wio Link devices.

Download the Android or iOS App and install. Or you can go to App Store of Apple or Google Market and search "Wio Link", you will find it.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Get Android App](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Get iOS App](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

!!!Note
    * Make sure your Android OS version is 4.1 or advanced, iOS version is 7 or advanced.

### **STEP 2:** Create your Account
- If it is your first time to use Wio APP, it may require GPS authorization, please approve it, then sign up.
- If you already have an account, check the server location before logging in.

!!!Note
    * Please pay attention to the server location, because wrong server location will lead to failure when connecting to Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **STEP 3**: Connect Wio Link Wi-Fi AP
- Push and hold the CONFIG button until the blue LED turns into breathing mode (i.e. blinking with fade in & fade out effect). It means that Wio Link has turned to configuration mode successfully and can be detected by the Wio App.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- Push "Add your first Device".
- Choose Wio Link
- "Go to Wi-Fi list" will lead you to the Wi-Fi setting interface of your smartphone.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- If you have successfully made the blue LED turn into breathing mode, you will find the Wio Link in the Wi-Fi list, connect to it!(Usually it is not called Wio Link in the Wi-Fi list, in the example, mine is Wio_8B2F12, you may find one named wio_xxxxxx in your list.)
- Once connected, you will receive a notice, then you can go back to the app
- Next step is connecting to the Wi-Fi of your home or company

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- If there is password pf the Wi-Fi you want to connect, it may require you to enter the password
- Consider that you may need to connect more than 1 Wio device in the future, a special name will make you distinguish them from each other easily.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **STEP 4:** Virtually interconnect modules with Wio Link and update firmware
- Click the Wio Link and you will be in the main interface.
- There are 6 grove connectors, select the first one on the left.
- Because LED is output devices. Choose output category
- Find the icon that looks like a bulb, choose it.
- Then you will find the bottom rectangle button becomes red and "View API" becomes "Update Firmware". Choose "Update Firmware"

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- Since you selected the Digital 0 port to connect with LED in the APP, you need to connect the real Grove-LED to Digital 0 port of Wio Link too.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **STEP 5**: Test application using APIs
- Now that  you have successfully connect the LED to Wio Link, click "View API" to check the API of Wio Link
- Input "1" or "0" in the "Test Request" area, and click "Post" button and see what will happen.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)



## Get started with IFTTT & DoButton
---
Dont't know how to code? Don't worry, with the help of [IFTTT](https://en.wikipedia.org/wiki/IFTTT), even if you know nothing about coding, you are still able to build some simple projects.

IFTTT is an abbreviation of "If This Then That", it is a free web-based service that allows users to create chains of simple conditional statements, called "recipes", which are triggered based on changes to other web services such as Gmail, Facebook, Instagram. How does IFTTT work with Wio Link? As you can see in below pictures, Seeed provided cloud service at wio.seeed.io, which can interchange data and send instructions to IFTTT and Wio Link. So by creating some simple recipe, you are able to hack things without coding.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

If you don't have an IFTTT account, click [here](https://ifttt.com/join) to sign up.

If you already have an IFTTT account,click [here](https://ifttt.com/recipes/search?q=seeed) to connect with Seeed, or search Seeed at IFTTT website. There you will find 9 recipes by Seeed to teach you how to us e IFTTT.
![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

What is DoButton? DoButton is one of IFTTT's application that empowers you to create your own personalized button with just a tap, it is very suitable for building IoT projects and control it through your smartphone, here are two examples to show you how to use IFTTT&DoButton to make useful applications.

### Example:

|**IFTTT**|**DoButton**|
|:---|:---|
|[**Recipe**][DIY an Automatic Garden Irrigation without coding](https://community.seeedstudio.com/project_detail.html?id=1080)|[**Recipe**][How to feed your pets when you're not home](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**Video**][How to use ITFFF](https://vimeo.com/148590984)|[**Video**][How to use DoButton](https://vimeo.com/146988454)|


## Guide for advanced users
----
Feel those examples too simple? Wanna make more complicated projects? Here are the best guides for advanced users to hack things with Wio Link. By these guides, advanced users are able to know more detail information about Wio Link, deploy private server, even write module driver for Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

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
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[Get One Now](https://www.seeedstudio.com/s/led%20strip.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- Step1: Remove the Grove LED from the grove connector, plug the Led strip to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- Step2：Plug the Grove-Temperature and Humidity Sensor to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- Step3: View the APIs and read the temperature & humidity in your house. Below image shows the temperature change before and after holding the grove in hand. I increased the temperature by 1 Celsius. Try and see how you can change the temperature and humidity in your house.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- Step4: Control the light of Led strip by changing RGB value.

Because the Wio Link App read hex RGB value, RGB value need to be converted to hex value. Here I would like to recommend the website [RGB t0 Hex](https://www.rgbtohex.net/). Just by inputting RGB value for the 3 RGB elements (Red, Green, Blue), the website will converts the RGB value to hex very easily. Here is some example.
- Input 255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- Convert it, then you will get the hex value as FF0000, the color is Red.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

!!!Note
    * The RGB value you input should be any nature number between 0 and 255 (Including 0 and 255)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

In order to simplify all these steps, at the end of 2015, Seeed Studio initiated Wio Link on [KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search), defined a new way of developing IoT applications. Wio Link is an ESP8266 SoC based open-source Wi-Fi development board, the best part of it is the associated platform that allows users to create IoT applications by virtualizing plug-n-play modules to RESTful APIs with mobile Apps. It means that there will be no hardware programming, no breadboard, no jumper wires, and no soldering, just by installing an App on your mobile phone, you are able to build a simple IoT project in 5 minutes.

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)


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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

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
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|

!!!Note
       * Some of the recipe are made for Wio Node, but it can apply to Wio Link too.

## Hardware Overview
---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

!!!Note
     * Battery needs to be bought separately. Please visit [Bazzar](https://www.seeedstudio.com/s/Battery.html) where we arranged many choices for you.

## Get Started
---

Let us build a very basic LED application with Wio Link, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Link|Grove - LED|Micro USB Cable|
|:--------:|:-----------:|:---------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

!!!NOTE
    * A smartphone is needed as well (Android OS version 4.1 or advanced, iOS version 7 or advanced)
    * Grove - LED include a Grove cable already

### **STEP 1:** Install Android/iOS App
You need to install the Wio Link App to manage and configure your Wio Link devices.

Download the Android or iOS App and install. Or you can go to App Store of Apple or Google Market and search "Wio Link", you will find it.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Get Android App](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Get iOS App](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

!!!Note
    * Make sure your Android OS version is 4.1 or advanced, iOS version is 7 or advanced.

### **STEP 2:** Create your Account
- If it is your first time to use Wio APP, it may require GPS authorization, please approve it, then sign up.
- If you already have an account, check the server location before logging in.

!!!Note
    * Please pay attention to the server location, because wrong server location will lead to failure when connecting to Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **STEP 3**: Connect Wio Link Wi-Fi AP
- Push and hold the CONFIG button until the blue LED turns into breathing mode (i.e. blinking with fade in & fade out effect). It means that Wio Link has turned to configuration mode successfully and can be detected by the Wio App.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- Push "Add your first Device".
- Choose Wio Link
- "Go to Wi-Fi list" will lead you to the Wi-Fi setting interface of your smartphone.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- If you have successfully made the blue LED turn into breathing mode, you will find the Wio Link in the Wi-Fi list, connect to it!(Usually it is not called Wio Link in the Wi-Fi list, in the example, mine is Wio_8B2F12, you may find one named wio_xxxxxx in your list.)
- Once connected, you will receive a notice, then you can go back to the app
- Next step is connecting to the Wi-Fi of your home or company

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- If there is password pf the Wi-Fi you want to connect, it may require you to enter the password
- Consider that you may need to connect more than 1 Wio device in the future, a special name will make you distinguish them from each other easily.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **STEP 4:** Virtually interconnect modules with Wio Link and update firmware
- Click the Wio Link and you will be in the main interface.
- There are 6 grove connectors, select the first one on the left.
- Because LED is output devices. Choose output category
- Find the icon that looks like a bulb, choose it.
- Then you will find the bottom rectangle button becomes red and "View API" becomes "Update Firmware". Choose "Update Firmware"

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- Since you selected the Digital 0 port to connect with LED in the APP, you need to connect the real Grove-LED to Digital 0 port of Wio Link too.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **STEP 5**: Test application using APIs
- Now that  you have successfully connect the LED to Wio Link, click "View API" to check the API of Wio Link
- Input "1" or "0" in the "Test Request" area, and click "Post" button and see what will happen.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)



## Get started with IFTTT & DoButton
---
Dont't know how to code? Don't worry, with the help of [IFTTT](https://en.wikipedia.org/wiki/IFTTT), even if you know nothing about coding, you are still able to build some simple projects.

IFTTT is an abbreviation of "If This Then That", it is a free web-based service that allows users to create chains of simple conditional statements, called "recipes", which are triggered based on changes to other web services such as Gmail, Facebook, Instagram. How does IFTTT work with Wio Link? As you can see in below pictures, Seeed provided cloud service at wio.seeed.io, which can interchange data and send instructions to IFTTT and Wio Link. So by creating some simple recipe, you are able to hack things without coding.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

If you don't have an IFTTT account, click [here](https://ifttt.com/join) to sign up.

If you already have an IFTTT account,click [here](https://ifttt.com/recipes/search?q=seeed) to connect with Seeed, or search Seeed at IFTTT website. There you will find 9 recipes by Seeed to teach you how to us e IFTTT.
![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

What is DoButton? DoButton is one of IFTTT's application that empowers you to create your own personalized button with just a tap, it is very suitable for building IoT projects and control it through your smartphone, here are two examples to show you how to use IFTTT&DoButton to make useful applications.

### Example:

|**IFTTT**|**DoButton**|
|:---|:---|
|[**Recipe**][DIY an Automatic Garden Irrigation without coding](https://community.seeedstudio.com/project_detail.html?id=1080)|[**Recipe**][How to feed your pets when you're not home](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**Video**][How to use ITFFF](https://vimeo.com/148590984)|[**Video**][How to use DoButton](https://vimeo.com/146988454)|


## Guide for advanced users
----
Feel those examples too simple? Wanna make more complicated projects? Here are the best guides for advanced users to hack things with Wio Link. By these guides, advanced users are able to know more detail information about Wio Link, deploy private server, even write module driver for Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

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
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[Get One Now](https://www.seeedstudio.com/s/led%20strip.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- Step1: Remove the Grove LED from the grove connector, plug the Led strip to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- Step2：Plug the Grove-Temperature and Humidity Sensor to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- Step3: View the APIs and read the temperature & humidity in your house. Below image shows the temperature change before and after holding the grove in hand. I increased the temperature by 1 Celsius. Try and see how you can change the temperature and humidity in your house.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- Step4: Control the light of Led strip by changing RGB value.

Because the Wio Link App read hex RGB value, RGB value need to be converted to hex value. Here I would like to recommend the website [RGB t0 Hex](https://www.rgbtohex.net/). Just by inputting RGB value for the 3 RGB elements (Red, Green, Blue), the website will converts the RGB value to hex very easily. Here is some example.
- Input 255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- Convert it, then you will get the hex value as FF0000, the color is Red.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

!!!Note
    * The RGB value you input should be any nature number between 0 and 255 (Including 0 and 255)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

In order to simplify all these steps, at the end of 2015, Seeed Studio initiated Wio Link on [KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search), defined a new way of developing IoT applications. Wio Link is an ESP8266 SoC based open-source Wi-Fi development board, the best part of it is the associated platform that allows users to create IoT applications by virtualizing plug-n-play modules to RESTful APIs with mobile Apps. It means that there will be no hardware programming, no breadboard, no jumper wires, and no soldering, just by installing an App on your mobile phone, you are able to build a simple IoT project in 5 minutes.

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)


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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

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
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|

!!!Note
       * Some of the recipe are made for Wio Node, but it can apply to Wio Link too.

## Hardware Overview
---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

!!!Note
     * Battery needs to be bought separately. Please visit [Bazzar](https://www.seeedstudio.com/s/Battery.html) where we arranged many choices for you.

## Get Started
---

Let us build a very basic LED application with Wio Link, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Link|Grove - LED|Micro USB Cable|
|:--------:|:-----------:|:---------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

!!!NOTE
    * A smartphone is needed as well (Android OS version 4.1 or advanced, iOS version 7 or advanced)
    * Grove - LED include a Grove cable already

### **STEP 1:** Install Android/iOS App
You need to install the Wio Link App to manage and configure your Wio Link devices.

Download the Android or iOS App and install. Or you can go to App Store of Apple or Google Market and search "Wio Link", you will find it.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Get Android App](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Get iOS App](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

!!!Note
    * Make sure your Android OS version is 4.1 or advanced, iOS version is 7 or advanced.

### **STEP 2:** Create your Account
- If it is your first time to use Wio APP, it may require GPS authorization, please approve it, then sign up.
- If you already have an account, check the server location before logging in.

!!!Note
    * Please pay attention to the server location, because wrong server location will lead to failure when connecting to Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **STEP 3**: Connect Wio Link Wi-Fi AP
- Push and hold the CONFIG button until the blue LED turns into breathing mode (i.e. blinking with fade in & fade out effect). It means that Wio Link has turned to configuration mode successfully and can be detected by the Wio App.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- Push "Add your first Device".
- Choose Wio Link
- "Go to Wi-Fi list" will lead you to the Wi-Fi setting interface of your smartphone.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- If you have successfully made the blue LED turn into breathing mode, you will find the Wio Link in the Wi-Fi list, connect to it!(Usually it is not called Wio Link in the Wi-Fi list, in the example, mine is Wio_8B2F12, you may find one named wio_xxxxxx in your list.)
- Once connected, you will receive a notice, then you can go back to the app
- Next step is connecting to the Wi-Fi of your home or company

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- If there is password pf the Wi-Fi you want to connect, it may require you to enter the password
- Consider that you may need to connect more than 1 Wio device in the future, a special name will make you distinguish them from each other easily.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **STEP 4:** Virtually interconnect modules with Wio Link and update firmware
- Click the Wio Link and you will be in the main interface.
- There are 6 grove connectors, select the first one on the left.
- Because LED is output devices. Choose output category
- Find the icon that looks like a bulb, choose it.
- Then you will find the bottom rectangle button becomes red and "View API" becomes "Update Firmware". Choose "Update Firmware"

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- Since you selected the Digital 0 port to connect with LED in the APP, you need to connect the real Grove-LED to Digital 0 port of Wio Link too.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **STEP 5**: Test application using APIs
- Now that  you have successfully connect the LED to Wio Link, click "View API" to check the API of Wio Link
- Input "1" or "0" in the "Test Request" area, and click "Post" button and see what will happen.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)



## Get started with IFTTT & DoButton
---
Dont't know how to code? Don't worry, with the help of [IFTTT](https://en.wikipedia.org/wiki/IFTTT), even if you know nothing about coding, you are still able to build some simple projects.

IFTTT is an abbreviation of "If This Then That", it is a free web-based service that allows users to create chains of simple conditional statements, called "recipes", which are triggered based on changes to other web services such as Gmail, Facebook, Instagram. How does IFTTT work with Wio Link? As you can see in below pictures, Seeed provided cloud service at wio.seeed.io, which can interchange data and send instructions to IFTTT and Wio Link. So by creating some simple recipe, you are able to hack things without coding.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

If you don't have an IFTTT account, click [here](https://ifttt.com/join) to sign up.

If you already have an IFTTT account,click [here](https://ifttt.com/recipes/search?q=seeed) to connect with Seeed, or search Seeed at IFTTT website. There you will find 9 recipes by Seeed to teach you how to us e IFTTT.
![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

What is DoButton? DoButton is one of IFTTT's application that empowers you to create your own personalized button with just a tap, it is very suitable for building IoT projects and control it through your smartphone, here are two examples to show you how to use IFTTT&DoButton to make useful applications.

### Example:

|**IFTTT**|**DoButton**|
|:---|:---|
|[**Recipe**][DIY an Automatic Garden Irrigation without coding](https://community.seeedstudio.com/project_detail.html?id=1080)|[**Recipe**][How to feed your pets when you're not home](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**Video**][How to use ITFFF](https://vimeo.com/148590984)|[**Video**][How to use DoButton](https://vimeo.com/146988454)|


## Guide for advanced users
----
Feel those examples too simple? Wanna make more complicated projects? Here are the best guides for advanced users to hack things with Wio Link. By these guides, advanced users are able to know more detail information about Wio Link, deploy private server, even write module driver for Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

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
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[Get One Now](https://www.seeedstudio.com/s/led%20strip.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- Step1: Remove the Grove LED from the grove connector, plug the Led strip to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- Step2：Plug the Grove-Temperature and Humidity Sensor to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- Step3: View the APIs and read the temperature & humidity in your house. Below image shows the temperature change before and after holding the grove in hand. I increased the temperature by 1 Celsius. Try and see how you can change the temperature and humidity in your house.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- Step4: Control the light of Led strip by changing RGB value.

Because the Wio Link App read hex RGB value, RGB value need to be converted to hex value. Here I would like to recommend the website [RGB t0 Hex](https://www.rgbtohex.net/). Just by inputting RGB value for the 3 RGB elements (Red, Green, Blue), the website will converts the RGB value to hex very easily. Here is some example.
- Input 255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- Convert it, then you will get the hex value as FF0000, the color is Red.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

!!!Note
    * The RGB value you input should be any nature number between 0 and 255 (Including 0 and 255)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

In order to simplify all these steps, at the end of 2015, Seeed Studio initiated Wio Link on [KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search), defined a new way of developing IoT applications. Wio Link is an ESP8266 SoC based open-source Wi-Fi development board, the best part of it is the associated platform that allows users to create IoT applications by virtualizing plug-n-play modules to RESTful APIs with mobile Apps. It means that there will be no hardware programming, no breadboard, no jumper wires, and no soldering, just by installing an App on your mobile phone, you are able to build a simple IoT project in 5 minutes.

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)


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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

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
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|

!!!Note
       * Some of the recipe are made for Wio Node, but it can apply to Wio Link too.

## Hardware Overview
---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

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

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

!!!Note
     * Battery needs to be bought separately. Please visit [Bazzar](https://www.seeedstudio.com/s/Battery.html) where we arranged many choices for you.

## Get Started
---

Let us build a very basic LED application with Wio Link, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Link|Grove - LED|Micro USB Cable|
|:--------:|:-----------:|:---------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

!!!NOTE
    * A smartphone is needed as well (Android OS version 4.1 or advanced, iOS version 7 or advanced)
    * Grove - LED include a Grove cable already

### **STEP 1:** Install Android/iOS App
You need to install the Wio Link App to manage and configure your Wio Link devices.

Download the Android or iOS App and install. Or you can go to App Store of Apple or Google Market and search "Wio Link", you will find it.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Get Android App](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Get iOS App](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

!!!Note
    * Make sure your Android OS version is 4.1 or advanced, iOS version is 7 or advanced.

### **STEP 2:** Create your Account
- If it is your first time to use Wio APP, it may require GPS authorization, please approve it, then sign up.
- If you already have an account, check the server location before logging in.

!!!Note
    * Please pay attention to the server location, because wrong server location will lead to failure when connecting to Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **STEP 3**: Connect Wio Link Wi-Fi AP
- Push and hold the CONFIG button until the blue LED turns into breathing mode (i.e. blinking with fade in & fade out effect). It means that Wio Link has turned to configuration mode successfully and can be detected by the Wio App.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- Push "Add your first Device".
- Choose Wio Link
- "Go to Wi-Fi list" will lead you to the Wi-Fi setting interface of your smartphone.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- If you have successfully made the blue LED turn into breathing mode, you will find the Wio Link in the Wi-Fi list, connect to it!(Usually it is not called Wio Link in the Wi-Fi list, in the example, mine is Wio_8B2F12, you may find one named wio_xxxxxx in your list.)
- Once connected, you will receive a notice, then you can go back to the app
- Next step is connecting to the Wi-Fi of your home or company

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- If there is password pf the Wi-Fi you want to connect, it may require you to enter the password
- Consider that you may need to connect more than 1 Wio device in the future, a special name will make you distinguish them from each other easily.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **STEP 4:** Virtually interconnect modules with Wio Link and update firmware
- Click the Wio Link and you will be in the main interface.
- There are 6 grove connectors, select the first one on the left.
- Because LED is output devices. Choose output category
- Find the icon that looks like a bulb, choose it.
- Then you will find the bottom rectangle button becomes red and "View API" becomes "Update Firmware". Choose "Update Firmware"

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- Since you selected the Digital 0 port to connect with LED in the APP, you need to connect the real Grove-LED to Digital 0 port of Wio Link too.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **STEP 5**: Test application using APIs
- Now that  you have successfully connect the LED to Wio Link, click "View API" to check the API of Wio Link
- Input "1" or "0" in the "Test Request" area, and click "Post" button and see what will happen.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)



## Get started with IFTTT & DoButton
---
Dont't know how to code? Don't worry, with the help of [IFTTT](https://en.wikipedia.org/wiki/IFTTT), even if you know nothing about coding, you are still able to build some simple projects.

IFTTT is an abbreviation of "If This Then That", it is a free web-based service that allows users to create chains of simple conditional statements, called "recipes", which are triggered based on changes to other web services such as Gmail, Facebook, Instagram. How does IFTTT work with Wio Link? As you can see in below pictures, Seeed provided cloud service at wio.seeed.io, which can interchange data and send instructions to IFTTT and Wio Link. So by creating some simple recipe, you are able to hack things without coding.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

If you don't have an IFTTT account, click [here](https://ifttt.com/join) to sign up.

If you already have an IFTTT account,click [here](https://ifttt.com/recipes/search?q=seeed) to connect with Seeed, or search Seeed at IFTTT website. There you will find 9 recipes by Seeed to teach you how to us e IFTTT.
![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

What is DoButton? DoButton is one of IFTTT's application that empowers you to create your own personalized button with just a tap, it is very suitable for building IoT projects and control it through your smartphone, here are two examples to show you how to use IFTTT&DoButton to make useful applications.

### Example:

|**IFTTT**|**DoButton**|
|:---|:---|
|[**Recipe**][DIY an Automatic Garden Irrigation without coding](https://community.seeedstudio.com/project_detail.html?id=1080)|[**Recipe**][How to feed your pets when you're not home](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**Video**][How to use ITFFF](https://vimeo.com/148590984)|[**Video**][How to use DoButton](https://vimeo.com/146988454)|


## Guide for advanced users
----
Feel those examples too simple? Wanna make more complicated projects? Here are the best guides for advanced users to hack things with Wio Link. By these guides, advanced users are able to know more detail information about Wio Link, deploy private server, even write module driver for Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

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
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[Get One Now](https://www.seeedstudio.com/s/led%20strip.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- Step1: Remove the Grove LED from the grove connector, plug the Led strip to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- Step2：Plug the Grove-Temperature and Humidity Sensor to Wio Link and drag the same module to Wio Link in the App.
- Update the firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- Step3: View the APIs and read the temperature & humidity in your house. Below image shows the temperature change before and after holding the grove in hand. I increased the temperature by 1 Celsius. Try and see how you can change the temperature and humidity in your house.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- Step4: Control the light of Led strip by changing RGB value.

Because the Wio Link App read hex RGB value, RGB value need to be converted to hex value. Here I would like to recommend the website [RGB t0 Hex](https://www.rgbtohex.net/). Just by inputting RGB value for the 3 RGB elements (Red, Green, Blue), the website will converts the RGB value to hex very easily. Here is some example.
- Input 255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- Convert it, then you will get the hex value as FF0000, the color is Red.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

!!!Note
    * The RGB value you input should be any nature number between 0 and 255 (Including 0 and 255)

---
name: Wio Link Bootcamp Kit
category: Wio
bzurl: https://seeedstudio.com/Wio-Link-Bootcamp-Kit-p-2613.html
oldwikiname: Wio_Link_Bootcamp_Kit
prodimagename: Wio_Link_Bootcamp_Kit_product_view_1200_s.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/110020050 1.jpg
surveyurl: https://www.research.net/r/Wio_Link_Bootcamp_Kit
sku: 110020050
---

![](https://files.seeedstudio.com/wiki/Wio_Link_Bootcamp_Kit/img/Wio_Link_Bootcamp_Kit_product_view_1200_s.jpg)

If you have no programming skills, and you want to build some cool gadgets for your life, this kit will be a perfect starter. It contains a relay, a recorder, a strip of LEDs, a buzzer and a servo motor which will perform basic actions required in daily life. The most amazing part of this kit is the Wio Link development board which can be utilized for various devices: without a bit programming skill required. All the actions you want your modules performed and the flashing code operation to Wio Link could be completed with taps in a mobile app. And you can send instructions to your devices over Internet at anywhere. So Wio Link will be a perfect utility to making things around smarter for everyone. Now let's get started to build some useful stuff.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Wio-Link-Bootcamp-Kit-p-2613.html?cPath=19_20)

!!!Warning
     The Wio IFTTT function is EOL. But Wio APP is available. You can use the API from Wio APP to read sensor status and control the actuator. 

Features
--------

-   Include common frequently-used environment-monitoring functional modules
-   Grove port interfaced, more practical function and less work
-   Completely easy to make things around you smarter and add fun to daily life.
-   Cost-effective
-   Weight: 285 g

Parts list
----------

| Parts name                                                                                               | Quantity |
|----------------------------------------------------------------------------------------------------------|----------|
| [Grove - Relay](/Grove-Relay)                                                                            | 1PC     |
| [Grove - Recorder](/Grove-Recorder_v2.0)                                                                 | 1PC     |
| Grove - WS2812 Waterproof LED Strip - 30 LEDs 1 meter                                                    | 1PC     |
| [Grove - Buzzer](/Grove-Buzzer)                                                                          | 1PC     |
| [Wio Link](/Wio_Link)                                                                                    | 1PC     |
| [Micro USB Cable - 48cm](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100) | 1PC     |
| [Grove - Servo](https://www.seeedstudio.com/depot/Grove-Servo-p-1241.html)                                | 1PC     |

A simple demo
-------------

This demo can used as a compilation result-indicator.

### Preliminary Guide

-   [Travis CI](https://travis-ci.org/)
-   [Wio Link](/Wio_Link)

### Prerequisites

-   [Wio Link APP](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat)
-   [Wio Link](/Wio_Link)
-   [Grove Relay](https://www.seeedstudio.com/depot/Grove-Relay-p-769.html?cPath=39_42) × 3
-   A Travis CI Account
-   A GitHub Account
-   Traffic Light

### A detailed how-to

Please go to [Recipe](https://www.seeedstudio.com/recipe/1068-traffic-light-indicates-travis-ci-compiled-results.html) for the detailed manual.


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Wio_Link_Bootcamp_Kit -->

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>