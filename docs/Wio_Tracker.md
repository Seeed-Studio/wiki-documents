---
name: Wio Node
category: Wio
bzurl: https://www.seeedstudio.com/Wio-Node-p-2637.html
oldwikiname: Wio_Node
prodimagename: Front%26Back.png
surveyurl: https://www.surveymonkey.com/r/wio_node
sku: 102110057
---

Building IoT projects is exciting, as you can connect almost everything around you and control them. However sometime it is not easy to build IoT applications since it requires a lot of hard works, such as hardware,  programming, jump wires and soldering etc. Even a well-trained user would spend hours to handle all the work, let alone beginners. In order to simplify the development of IoT project, Seeed launched **[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)** on **[kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)** and it turn out a big success. The slogan on Kickstarter well defined the main feature of Wio link:

**3 steps. 5 minutes. Build your own IoT applications!**

It is so simple, it is fast building, however it is not ideal for all conditions.
What if we only need 2 grove connectors? What if there is limited space in the application but Wio Link is over sized? What if we want to cost down? So right after we released Wio Link, a micro and economic solution was put on schedule, for months Seeeder has redesigned and optimized the Wi-Fi board and here it is, the new member of Wio family---**Wio Node**.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

Just like the meaning of its name, Wio Node is truly a Wi-Fi node that connect things in IoT project. If Wio Link is big brother, Wio Node must be the little brother in the Wio family coz this cute little guy is only quarter size of Wio link while integrates all the basic features of Wio Link.

The ecosystem of Wio Node also consists of Open Hardware **Wio Node board**, **Open Source Wio Link Mobile App** and **Open Source IoT Server implementation**. So the software platform for Wio Link is also available for Wio Node.

[![Get one now](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)


!!!Warning
     The Wio IFTTT function is EOL. But Wio APP is available. You can use the API from Wio APP to read sensor status and control the actuator. 

## Features
----
- No hardware programming or No breadboard or No jumper wires or No soldering required.
- A lot of Grove modules are supported (Check the list in Mobile App).
- Plug-n-Play Grove Modules
- Visual configuration instead of microcontroller programming.
- Update automatically via cloud compiling and OTA.
- Bring Real-world to Virtual platform. All sensors become virtual RESTful API.
- Android & iOS Apps to manage Wio Node.
- IFTTT supported by Seeed's Channel
- CE/FCC/TELEC Certified for core module ESP-WROOM-02

## Specifications
----
|General|Value|Power Management|Value|
|:---|---|:---|---:|
|**Size**|28mm * 28mm|**DC Current Per I/O Pin**|12mA|
|**Crystal**|26MHz|**Input Voltage (Micro USB)**| 5V|
|**Flash Memory**|4MBytes (W25Q32B)|**Input Voltage (Battery holder)**|3.4~4.2V|
|**Wi-Fi Network Protocol**|802.11b/g/n|**Output DC Current**|1000mA MAX
|**Wi-Fi Encryption Technology**|WEP/TKIP/AES|**Operating Voltage**|3.3V|
|**Expansion Grove Connector1**|UART0/I2C0/D0 |**Charge Current**|500mA MAX|
|**Expansion Grove Connector2**|Analog/I2C1/D1|

## Application Ideas
----
Wio Node is well designed to provide simple and economic Wi-Fi solutions for projects like:

- Smart Home
- Intelligent environmental monitoring
- Funny Toys
- Web of Things
- Internet of Things


In fact, there're many projects in our [**recipe**](https://community.seeedstudio.com/projects.html?t=Wio), come and visit it to find some interesting projects or even share you own projects, I am sure it will gain a lot of fans for you.

|Irrigation control system |The internet of led wall | Dog feeding machine|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|


!!!Note
    Some of the recipes are made by Wio Link, you can replace it with a Wio Node.

## Hardware Overview
----

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

|No.|Name|Function|
|---|----|--------|
|1  |Function|Set Wio Node working mode|
|2  |ESP8266|Microcontroller based on ESP8266|
|3  |Reset|Reset the device|
|4  |Micro USB|Supply the device and charge the battery|
|5  | Battery Holder|A jst2.0 connector, connect a 3.7V Li-Battery|
|6  | Analog/I2C1/D1|Grove port, you can connect a Digital/I2C/Analog type Grove module|
|7  | UART/I2C0/D0|Grove port, you can connect a UART/I2C/Digital type Grove module|

###Status LEDs

Near to the FUNCTION button there're 2 status Leds, a blue one and a red one. The BLUE led is the network status indicating led. It has the following blink patterns:

- breathing Under configuration mode
- blink twice quickly then off 1s requesting IP address from router
- blink once quickly then off 1s connecting to the server
- on 1s then off 1s The node is online
- on constantly the node is dead for not getting IP or not connecting to server.
- blink quickly (on 100ms then off 100ms) OTA

!!!Note
    The BLUE led is attached to GPIO2 which is also the TX pin of UART1. When downloading firmware, the UART1 dumps the data transmitting on UART0 by instinct. So the BLUE led will blink while downloading firmware. After startup the GPIO2 will be configured as a GPIO not TX of UART1.

The RED led is another status led which indicates the power status of Grove modules. All the six Grove interface's VCC converge together and can be controlled with GPIO 15. When the node is in deep sleep mode, all the grove modules lose their power too. The RED led will light on when Grove modules are powered and will go off when Grove modules aren't powered.


### Bonus!
Wio Node has an inbuilt LiPo battery charger, so you can charge 3.7v LiPo battery through JST 2.0 Port when USB is connecting.

!!!Note
    * Please handle the USB micro type-B socket gently, or you may break the socket apart from the board.
    * Battery is not included in the package. But we have arranged plenty of choices for you in [Bazzar](https://www.seeedstudio.com/s/battery.html).



## Get Started
----
Let us build a very basic LED application with Wio Node, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Node|Grove - LED|Micro USB Cable|
|--------|-----------|---------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Node-p-2637.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|


!!!NOTE
---
name: Wio Node
category: Wio
bzurl: https://www.seeedstudio.com/Wio-Node-p-2637.html
oldwikiname: Wio_Node
prodimagename: Front%26Back.png
surveyurl: https://www.surveymonkey.com/r/wio_node
sku: 102110057
---

Building IoT projects is exciting, as you can connect almost everything around you and control them. However sometime it is not easy to build IoT applications since it requires a lot of hard works, such as hardware,  programming, jump wires and soldering etc. Even a well-trained user would spend hours to handle all the work, let alone beginners. In order to simplify the development of IoT project, Seeed launched **[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)** on **[kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)** and it turn out a big success. The slogan on Kickstarter well defined the main feature of Wio link:

**3 steps. 5 minutes. Build your own IoT applications!**

It is so simple, it is fast building, however it is not ideal for all conditions.
What if we only need 2 grove connectors? What if there is limited space in the application but Wio Link is over sized? What if we want to cost down? So right after we released Wio Link, a micro and economic solution was put on schedule, for months Seeeder has redesigned and optimized the Wi-Fi board and here it is, the new member of Wio family---**Wio Node**.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

Just like the meaning of its name, Wio Node is truly a Wi-Fi node that connect things in IoT project. If Wio Link is big brother, Wio Node must be the little brother in the Wio family coz this cute little guy is only quarter size of Wio link while integrates all the basic features of Wio Link.

The ecosystem of Wio Node also consists of Open Hardware **Wio Node board**, **Open Source Wio Link Mobile App** and **Open Source IoT Server implementation**. So the software platform for Wio Link is also available for Wio Node.

[![Get one now](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)


!!!Warning
     The Wio IFTTT function is EOL. But Wio APP is available. You can use the API from Wio APP to read sensor status and control the actuator. 

## Features
----
- No hardware programming or No breadboard or No jumper wires or No soldering required.
- A lot of Grove modules are supported (Check the list in Mobile App).
- Plug-n-Play Grove Modules
- Visual configuration instead of microcontroller programming.
- Update automatically via cloud compiling and OTA.
- Bring Real-world to Virtual platform. All sensors become virtual RESTful API.
- Android & iOS Apps to manage Wio Node.
- IFTTT supported by Seeed's Channel
- CE/FCC/TELEC Certified for core module ESP-WROOM-02

## Specifications
----
|General|Value|Power Management|Value|
|:---|---|:---|---:|
|**Size**|28mm * 28mm|**DC Current Per I/O Pin**|12mA|
|**Crystal**|26MHz|**Input Voltage (Micro USB)**| 5V|
|**Flash Memory**|4MBytes (W25Q32B)|**Input Voltage (Battery holder)**|3.4~4.2V|
|**Wi-Fi Network Protocol**|802.11b/g/n|**Output DC Current**|1000mA MAX
|**Wi-Fi Encryption Technology**|WEP/TKIP/AES|**Operating Voltage**|3.3V|
|**Expansion Grove Connector1**|UART0/I2C0/D0 |**Charge Current**|500mA MAX|
|**Expansion Grove Connector2**|Analog/I2C1/D1|

## Application Ideas
----
Wio Node is well designed to provide simple and economic Wi-Fi solutions for projects like:

- Smart Home
- Intelligent environmental monitoring
- Funny Toys
- Web of Things
- Internet of Things


In fact, there're many projects in our [**recipe**](https://community.seeedstudio.com/projects.html?t=Wio), come and visit it to find some interesting projects or even share you own projects, I am sure it will gain a lot of fans for you.

|Irrigation control system |The internet of led wall | Dog feeding machine|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|


!!!Note
    Some of the recipes are made by Wio Link, you can replace it with a Wio Node.

## Hardware Overview
----

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

|No.|Name|Function|
|---|----|--------|
|1  |Function|Set Wio Node working mode|
|2  |ESP8266|Microcontroller based on ESP8266|
|3  |Reset|Reset the device|
|4  |Micro USB|Supply the device and charge the battery|
|5  | Battery Holder|A jst2.0 connector, connect a 3.7V Li-Battery|
|6  | Analog/I2C1/D1|Grove port, you can connect a Digital/I2C/Analog type Grove module|
|7  | UART/I2C0/D0|Grove port, you can connect a UART/I2C/Digital type Grove module|

###Status LEDs

Near to the FUNCTION button there're 2 status Leds, a blue one and a red one. The BLUE led is the network status indicating led. It has the following blink patterns:

- breathing Under configuration mode
- blink twice quickly then off 1s requesting IP address from router
- blink once quickly then off 1s connecting to the server
- on 1s then off 1s The node is online
- on constantly the node is dead for not getting IP or not connecting to server.
- blink quickly (on 100ms then off 100ms) OTA

!!!Note
    The BLUE led is attached to GPIO2 which is also the TX pin of UART1. When downloading firmware, the UART1 dumps the data transmitting on UART0 by instinct. So the BLUE led will blink while downloading firmware. After startup the GPIO2 will be configured as a GPIO not TX of UART1.

The RED led is another status led which indicates the power status of Grove modules. All the six Grove interface's VCC converge together and can be controlled with GPIO 15. When the node is in deep sleep mode, all the grove modules lose their power too. The RED led will light on when Grove modules are powered and will go off when Grove modules aren't powered.


### Bonus!
Wio Node has an inbuilt LiPo battery charger, so you can charge 3.7v LiPo battery through JST 2.0 Port when USB is connecting.

!!!Note
    * Please handle the USB micro type-B socket gently, or you may break the socket apart from the board.
    * Battery is not included in the package. But we have arranged plenty of choices for you in [Bazzar](https://www.seeedstudio.com/s/battery.html).



## Get Started
----
Let us build a very basic LED application with Wio Node, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Node|Grove - LED|Micro USB Cable|
|--------|-----------|---------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Node-p-2637.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|


!!!NOTE
---
name: Wio Node
category: Wio
bzurl: https://www.seeedstudio.com/Wio-Node-p-2637.html
oldwikiname: Wio_Node
prodimagename: Front%26Back.png
surveyurl: https://www.surveymonkey.com/r/wio_node
sku: 102110057
---

Building IoT projects is exciting, as you can connect almost everything around you and control them. However sometime it is not easy to build IoT applications since it requires a lot of hard works, such as hardware,  programming, jump wires and soldering etc. Even a well-trained user would spend hours to handle all the work, let alone beginners. In order to simplify the development of IoT project, Seeed launched **[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)** on **[kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)** and it turn out a big success. The slogan on Kickstarter well defined the main feature of Wio link:

**3 steps. 5 minutes. Build your own IoT applications!**

It is so simple, it is fast building, however it is not ideal for all conditions.
What if we only need 2 grove connectors? What if there is limited space in the application but Wio Link is over sized? What if we want to cost down? So right after we released Wio Link, a micro and economic solution was put on schedule, for months Seeeder has redesigned and optimized the Wi-Fi board and here it is, the new member of Wio family---**Wio Node**.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

Just like the meaning of its name, Wio Node is truly a Wi-Fi node that connect things in IoT project. If Wio Link is big brother, Wio Node must be the little brother in the Wio family coz this cute little guy is only quarter size of Wio link while integrates all the basic features of Wio Link.

The ecosystem of Wio Node also consists of Open Hardware **Wio Node board**, **Open Source Wio Link Mobile App** and **Open Source IoT Server implementation**. So the software platform for Wio Link is also available for Wio Node.

[![Get one now](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)


!!!Warning
     The Wio IFTTT function is EOL. But Wio APP is available. You can use the API from Wio APP to read sensor status and control the actuator. 

## Features
----
- No hardware programming or No breadboard or No jumper wires or No soldering required.
- A lot of Grove modules are supported (Check the list in Mobile App).
- Plug-n-Play Grove Modules
- Visual configuration instead of microcontroller programming.
- Update automatically via cloud compiling and OTA.
- Bring Real-world to Virtual platform. All sensors become virtual RESTful API.
- Android & iOS Apps to manage Wio Node.
- IFTTT supported by Seeed's Channel
- CE/FCC/TELEC Certified for core module ESP-WROOM-02

## Specifications
----
|General|Value|Power Management|Value|
|:---|---|:---|---:|
|**Size**|28mm * 28mm|**DC Current Per I/O Pin**|12mA|
|**Crystal**|26MHz|**Input Voltage (Micro USB)**| 5V|
|**Flash Memory**|4MBytes (W25Q32B)|**Input Voltage (Battery holder)**|3.4~4.2V|
|**Wi-Fi Network Protocol**|802.11b/g/n|**Output DC Current**|1000mA MAX
|**Wi-Fi Encryption Technology**|WEP/TKIP/AES|**Operating Voltage**|3.3V|
|**Expansion Grove Connector1**|UART0/I2C0/D0 |**Charge Current**|500mA MAX|
|**Expansion Grove Connector2**|Analog/I2C1/D1|

## Application Ideas
----
Wio Node is well designed to provide simple and economic Wi-Fi solutions for projects like:

- Smart Home
- Intelligent environmental monitoring
- Funny Toys
- Web of Things
- Internet of Things


In fact, there're many projects in our [**recipe**](https://community.seeedstudio.com/projects.html?t=Wio), come and visit it to find some interesting projects or even share you own projects, I am sure it will gain a lot of fans for you.

|Irrigation control system |The internet of led wall | Dog feeding machine|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|


!!!Note
    Some of the recipes are made by Wio Link, you can replace it with a Wio Node.

## Hardware Overview
----

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

|No.|Name|Function|
|---|----|--------|
|1  |Function|Set Wio Node working mode|
|2  |ESP8266|Microcontroller based on ESP8266|
|3  |Reset|Reset the device|
|4  |Micro USB|Supply the device and charge the battery|
|5  | Battery Holder|A jst2.0 connector, connect a 3.7V Li-Battery|
|6  | Analog/I2C1/D1|Grove port, you can connect a Digital/I2C/Analog type Grove module|
|7  | UART/I2C0/D0|Grove port, you can connect a UART/I2C/Digital type Grove module|

###Status LEDs

Near to the FUNCTION button there're 2 status Leds, a blue one and a red one. The BLUE led is the network status indicating led. It has the following blink patterns:

- breathing Under configuration mode
- blink twice quickly then off 1s requesting IP address from router
- blink once quickly then off 1s connecting to the server
- on 1s then off 1s The node is online
- on constantly the node is dead for not getting IP or not connecting to server.
- blink quickly (on 100ms then off 100ms) OTA

!!!Note
    The BLUE led is attached to GPIO2 which is also the TX pin of UART1. When downloading firmware, the UART1 dumps the data transmitting on UART0 by instinct. So the BLUE led will blink while downloading firmware. After startup the GPIO2 will be configured as a GPIO not TX of UART1.

The RED led is another status led which indicates the power status of Grove modules. All the six Grove interface's VCC converge together and can be controlled with GPIO 15. When the node is in deep sleep mode, all the grove modules lose their power too. The RED led will light on when Grove modules are powered and will go off when Grove modules aren't powered.


### Bonus!
Wio Node has an inbuilt LiPo battery charger, so you can charge 3.7v LiPo battery through JST 2.0 Port when USB is connecting.

!!!Note
    * Please handle the USB micro type-B socket gently, or you may break the socket apart from the board.
    * Battery is not included in the package. But we have arranged plenty of choices for you in [Bazzar](https://www.seeedstudio.com/s/battery.html).



## Get Started
----
Let us build a very basic LED application with Wio Node, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Node|Grove - LED|Micro USB Cable|
|--------|-----------|---------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Node-p-2637.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|


!!!NOTE
---
name: Wio Node
category: Wio
bzurl: https://www.seeedstudio.com/Wio-Node-p-2637.html
oldwikiname: Wio_Node
prodimagename: Front%26Back.png
surveyurl: https://www.surveymonkey.com/r/wio_node
sku: 102110057
---

Building IoT projects is exciting, as you can connect almost everything around you and control them. However sometime it is not easy to build IoT applications since it requires a lot of hard works, such as hardware,  programming, jump wires and soldering etc. Even a well-trained user would spend hours to handle all the work, let alone beginners. In order to simplify the development of IoT project, Seeed launched **[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)** on **[kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)** and it turn out a big success. The slogan on Kickstarter well defined the main feature of Wio link:

**3 steps. 5 minutes. Build your own IoT applications!**

It is so simple, it is fast building, however it is not ideal for all conditions.
What if we only need 2 grove connectors? What if there is limited space in the application but Wio Link is over sized? What if we want to cost down? So right after we released Wio Link, a micro and economic solution was put on schedule, for months Seeeder has redesigned and optimized the Wi-Fi board and here it is, the new member of Wio family---**Wio Node**.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

Just like the meaning of its name, Wio Node is truly a Wi-Fi node that connect things in IoT project. If Wio Link is big brother, Wio Node must be the little brother in the Wio family coz this cute little guy is only quarter size of Wio link while integrates all the basic features of Wio Link.

The ecosystem of Wio Node also consists of Open Hardware **Wio Node board**, **Open Source Wio Link Mobile App** and **Open Source IoT Server implementation**. So the software platform for Wio Link is also available for Wio Node.

[![Get one now](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)


!!!Warning
     The Wio IFTTT function is EOL. But Wio APP is available. You can use the API from Wio APP to read sensor status and control the actuator. 

## Features
----
- No hardware programming or No breadboard or No jumper wires or No soldering required.
- A lot of Grove modules are supported (Check the list in Mobile App).
- Plug-n-Play Grove Modules
- Visual configuration instead of microcontroller programming.
- Update automatically via cloud compiling and OTA.
- Bring Real-world to Virtual platform. All sensors become virtual RESTful API.
- Android & iOS Apps to manage Wio Node.
- IFTTT supported by Seeed's Channel
- CE/FCC/TELEC Certified for core module ESP-WROOM-02

## Specifications
----
|General|Value|Power Management|Value|
|:---|---|:---|---:|
|**Size**|28mm * 28mm|**DC Current Per I/O Pin**|12mA|
|**Crystal**|26MHz|**Input Voltage (Micro USB)**| 5V|
|**Flash Memory**|4MBytes (W25Q32B)|**Input Voltage (Battery holder)**|3.4~4.2V|
|**Wi-Fi Network Protocol**|802.11b/g/n|**Output DC Current**|1000mA MAX
|**Wi-Fi Encryption Technology**|WEP/TKIP/AES|**Operating Voltage**|3.3V|
|**Expansion Grove Connector1**|UART0/I2C0/D0 |**Charge Current**|500mA MAX|
|**Expansion Grove Connector2**|Analog/I2C1/D1|

## Application Ideas
----
Wio Node is well designed to provide simple and economic Wi-Fi solutions for projects like:

- Smart Home
- Intelligent environmental monitoring
- Funny Toys
- Web of Things
- Internet of Things


In fact, there're many projects in our [**recipe**](https://community.seeedstudio.com/projects.html?t=Wio), come and visit it to find some interesting projects or even share you own projects, I am sure it will gain a lot of fans for you.

|Irrigation control system |The internet of led wall | Dog feeding machine|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|


!!!Note
    Some of the recipes are made by Wio Link, you can replace it with a Wio Node.

## Hardware Overview
----

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

|No.|Name|Function|
|---|----|--------|
|1  |Function|Set Wio Node working mode|
|2  |ESP8266|Microcontroller based on ESP8266|
|3  |Reset|Reset the device|
|4  |Micro USB|Supply the device and charge the battery|
|5  | Battery Holder|A jst2.0 connector, connect a 3.7V Li-Battery|
|6  | Analog/I2C1/D1|Grove port, you can connect a Digital/I2C/Analog type Grove module|
|7  | UART/I2C0/D0|Grove port, you can connect a UART/I2C/Digital type Grove module|

###Status LEDs

Near to the FUNCTION button there're 2 status Leds, a blue one and a red one. The BLUE led is the network status indicating led. It has the following blink patterns:

- breathing Under configuration mode
- blink twice quickly then off 1s requesting IP address from router
- blink once quickly then off 1s connecting to the server
- on 1s then off 1s The node is online
- on constantly the node is dead for not getting IP or not connecting to server.
- blink quickly (on 100ms then off 100ms) OTA

!!!Note
    The BLUE led is attached to GPIO2 which is also the TX pin of UART1. When downloading firmware, the UART1 dumps the data transmitting on UART0 by instinct. So the BLUE led will blink while downloading firmware. After startup the GPIO2 will be configured as a GPIO not TX of UART1.

The RED led is another status led which indicates the power status of Grove modules. All the six Grove interface's VCC converge together and can be controlled with GPIO 15. When the node is in deep sleep mode, all the grove modules lose their power too. The RED led will light on when Grove modules are powered and will go off when Grove modules aren't powered.


### Bonus!
Wio Node has an inbuilt LiPo battery charger, so you can charge 3.7v LiPo battery through JST 2.0 Port when USB is connecting.

!!!Note
    * Please handle the USB micro type-B socket gently, or you may break the socket apart from the board.
    * Battery is not included in the package. But we have arranged plenty of choices for you in [Bazzar](https://www.seeedstudio.com/s/battery.html).



## Get Started
----
Let us build a very basic LED application with Wio Node, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Node|Grove - LED|Micro USB Cable|
|--------|-----------|---------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Node-p-2637.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|


!!!NOTE
---
name: Wio Node
category: Wio
bzurl: https://www.seeedstudio.com/Wio-Node-p-2637.html
oldwikiname: Wio_Node
prodimagename: Front%26Back.png
surveyurl: https://www.surveymonkey.com/r/wio_node
sku: 102110057
---

Building IoT projects is exciting, as you can connect almost everything around you and control them. However sometime it is not easy to build IoT applications since it requires a lot of hard works, such as hardware,  programming, jump wires and soldering etc. Even a well-trained user would spend hours to handle all the work, let alone beginners. In order to simplify the development of IoT project, Seeed launched **[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)** on **[kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)** and it turn out a big success. The slogan on Kickstarter well defined the main feature of Wio link:

**3 steps. 5 minutes. Build your own IoT applications!**

It is so simple, it is fast building, however it is not ideal for all conditions.
What if we only need 2 grove connectors? What if there is limited space in the application but Wio Link is over sized? What if we want to cost down? So right after we released Wio Link, a micro and economic solution was put on schedule, for months Seeeder has redesigned and optimized the Wi-Fi board and here it is, the new member of Wio family---**Wio Node**.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

Just like the meaning of its name, Wio Node is truly a Wi-Fi node that connect things in IoT project. If Wio Link is big brother, Wio Node must be the little brother in the Wio family coz this cute little guy is only quarter size of Wio link while integrates all the basic features of Wio Link.

The ecosystem of Wio Node also consists of Open Hardware **Wio Node board**, **Open Source Wio Link Mobile App** and **Open Source IoT Server implementation**. So the software platform for Wio Link is also available for Wio Node.

[![Get one now](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)


!!!Warning
     The Wio IFTTT function is EOL. But Wio APP is available. You can use the API from Wio APP to read sensor status and control the actuator. 

## Features
----
- No hardware programming or No breadboard or No jumper wires or No soldering required.
- A lot of Grove modules are supported (Check the list in Mobile App).
- Plug-n-Play Grove Modules
- Visual configuration instead of microcontroller programming.
- Update automatically via cloud compiling and OTA.
- Bring Real-world to Virtual platform. All sensors become virtual RESTful API.
- Android & iOS Apps to manage Wio Node.
- IFTTT supported by Seeed's Channel
- CE/FCC/TELEC Certified for core module ESP-WROOM-02

## Specifications
----
|General|Value|Power Management|Value|
|:---|---|:---|---:|
|**Size**|28mm * 28mm|**DC Current Per I/O Pin**|12mA|
|**Crystal**|26MHz|**Input Voltage (Micro USB)**| 5V|
|**Flash Memory**|4MBytes (W25Q32B)|**Input Voltage (Battery holder)**|3.4~4.2V|
|**Wi-Fi Network Protocol**|802.11b/g/n|**Output DC Current**|1000mA MAX
|**Wi-Fi Encryption Technology**|WEP/TKIP/AES|**Operating Voltage**|3.3V|
|**Expansion Grove Connector1**|UART0/I2C0/D0 |**Charge Current**|500mA MAX|
|**Expansion Grove Connector2**|Analog/I2C1/D1|

## Application Ideas
----
Wio Node is well designed to provide simple and economic Wi-Fi solutions for projects like:

- Smart Home
- Intelligent environmental monitoring
- Funny Toys
- Web of Things
- Internet of Things


In fact, there're many projects in our [**recipe**](https://community.seeedstudio.com/projects.html?t=Wio), come and visit it to find some interesting projects or even share you own projects, I am sure it will gain a lot of fans for you.

|Irrigation control system |The internet of led wall | Dog feeding machine|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|


!!!Note
    Some of the recipes are made by Wio Link, you can replace it with a Wio Node.

## Hardware Overview
----

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

|No.|Name|Function|
|---|----|--------|
|1  |Function|Set Wio Node working mode|
|2  |ESP8266|Microcontroller based on ESP8266|
|3  |Reset|Reset the device|
|4  |Micro USB|Supply the device and charge the battery|
|5  | Battery Holder|A jst2.0 connector, connect a 3.7V Li-Battery|
|6  | Analog/I2C1/D1|Grove port, you can connect a Digital/I2C/Analog type Grove module|
|7  | UART/I2C0/D0|Grove port, you can connect a UART/I2C/Digital type Grove module|

###Status LEDs

Near to the FUNCTION button there're 2 status Leds, a blue one and a red one. The BLUE led is the network status indicating led. It has the following blink patterns:

- breathing Under configuration mode
- blink twice quickly then off 1s requesting IP address from router
- blink once quickly then off 1s connecting to the server
- on 1s then off 1s The node is online
- on constantly the node is dead for not getting IP or not connecting to server.
- blink quickly (on 100ms then off 100ms) OTA

!!!Note
    The BLUE led is attached to GPIO2 which is also the TX pin of UART1. When downloading firmware, the UART1 dumps the data transmitting on UART0 by instinct. So the BLUE led will blink while downloading firmware. After startup the GPIO2 will be configured as a GPIO not TX of UART1.

The RED led is another status led which indicates the power status of Grove modules. All the six Grove interface's VCC converge together and can be controlled with GPIO 15. When the node is in deep sleep mode, all the grove modules lose their power too. The RED led will light on when Grove modules are powered and will go off when Grove modules aren't powered.


### Bonus!
Wio Node has an inbuilt LiPo battery charger, so you can charge 3.7v LiPo battery through JST 2.0 Port when USB is connecting.

!!!Note
    * Please handle the USB micro type-B socket gently, or you may break the socket apart from the board.
    * Battery is not included in the package. But we have arranged plenty of choices for you in [Bazzar](https://www.seeedstudio.com/s/battery.html).



## Get Started
----
Let us build a very basic LED application with Wio Node, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Node|Grove - LED|Micro USB Cable|
|--------|-----------|---------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Node-p-2637.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|


!!!NOTE
---
name: Wio Node
category: Wio
bzurl: https://www.seeedstudio.com/Wio-Node-p-2637.html
oldwikiname: Wio_Node
prodimagename: Front%26Back.png
surveyurl: https://www.surveymonkey.com/r/wio_node
sku: 102110057
---

Building IoT projects is exciting, as you can connect almost everything around you and control them. However sometime it is not easy to build IoT applications since it requires a lot of hard works, such as hardware,  programming, jump wires and soldering etc. Even a well-trained user would spend hours to handle all the work, let alone beginners. In order to simplify the development of IoT project, Seeed launched **[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)** on **[kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)** and it turn out a big success. The slogan on Kickstarter well defined the main feature of Wio link:

**3 steps. 5 minutes. Build your own IoT applications!**

It is so simple, it is fast building, however it is not ideal for all conditions.
What if we only need 2 grove connectors? What if there is limited space in the application but Wio Link is over sized? What if we want to cost down? So right after we released Wio Link, a micro and economic solution was put on schedule, for months Seeeder has redesigned and optimized the Wi-Fi board and here it is, the new member of Wio family---**Wio Node**.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

Just like the meaning of its name, Wio Node is truly a Wi-Fi node that connect things in IoT project. If Wio Link is big brother, Wio Node must be the little brother in the Wio family coz this cute little guy is only quarter size of Wio link while integrates all the basic features of Wio Link.

The ecosystem of Wio Node also consists of Open Hardware **Wio Node board**, **Open Source Wio Link Mobile App** and **Open Source IoT Server implementation**. So the software platform for Wio Link is also available for Wio Node.

[![Get one now](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)


!!!Warning
     The Wio IFTTT function is EOL. But Wio APP is available. You can use the API from Wio APP to read sensor status and control the actuator. 

## Features
----
- No hardware programming or No breadboard or No jumper wires or No soldering required.
- A lot of Grove modules are supported (Check the list in Mobile App).
- Plug-n-Play Grove Modules
- Visual configuration instead of microcontroller programming.
- Update automatically via cloud compiling and OTA.
- Bring Real-world to Virtual platform. All sensors become virtual RESTful API.
- Android & iOS Apps to manage Wio Node.
- IFTTT supported by Seeed's Channel
- CE/FCC/TELEC Certified for core module ESP-WROOM-02

## Specifications
----
|General|Value|Power Management|Value|
|:---|---|:---|---:|
|**Size**|28mm * 28mm|**DC Current Per I/O Pin**|12mA|
|**Crystal**|26MHz|**Input Voltage (Micro USB)**| 5V|
|**Flash Memory**|4MBytes (W25Q32B)|**Input Voltage (Battery holder)**|3.4~4.2V|
|**Wi-Fi Network Protocol**|802.11b/g/n|**Output DC Current**|1000mA MAX
|**Wi-Fi Encryption Technology**|WEP/TKIP/AES|**Operating Voltage**|3.3V|
|**Expansion Grove Connector1**|UART0/I2C0/D0 |**Charge Current**|500mA MAX|
|**Expansion Grove Connector2**|Analog/I2C1/D1|

## Application Ideas
----
Wio Node is well designed to provide simple and economic Wi-Fi solutions for projects like:

- Smart Home
- Intelligent environmental monitoring
- Funny Toys
- Web of Things
- Internet of Things


In fact, there're many projects in our [**recipe**](https://community.seeedstudio.com/projects.html?t=Wio), come and visit it to find some interesting projects or even share you own projects, I am sure it will gain a lot of fans for you.

|Irrigation control system |The internet of led wall | Dog feeding machine|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Kickstarter Monitor|MIssing Call Monitor|Boss Key|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|


!!!Note
    Some of the recipes are made by Wio Link, you can replace it with a Wio Node.

## Hardware Overview
----

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

|No.|Name|Function|
|---|----|--------|
|1  |Function|Set Wio Node working mode|
|2  |ESP8266|Microcontroller based on ESP8266|
|3  |Reset|Reset the device|
|4  |Micro USB|Supply the device and charge the battery|
|5  | Battery Holder|A jst2.0 connector, connect a 3.7V Li-Battery|
|6  | Analog/I2C1/D1|Grove port, you can connect a Digital/I2C/Analog type Grove module|
|7  | UART/I2C0/D0|Grove port, you can connect a UART/I2C/Digital type Grove module|

###Status LEDs

Near to the FUNCTION button there're 2 status Leds, a blue one and a red one. The BLUE led is the network status indicating led. It has the following blink patterns:

- breathing Under configuration mode
- blink twice quickly then off 1s requesting IP address from router
- blink once quickly then off 1s connecting to the server
- on 1s then off 1s The node is online
- on constantly the node is dead for not getting IP or not connecting to server.
- blink quickly (on 100ms then off 100ms) OTA

!!!Note
    The BLUE led is attached to GPIO2 which is also the TX pin of UART1. When downloading firmware, the UART1 dumps the data transmitting on UART0 by instinct. So the BLUE led will blink while downloading firmware. After startup the GPIO2 will be configured as a GPIO not TX of UART1.

The RED led is another status led which indicates the power status of Grove modules. All the six Grove interface's VCC converge together and can be controlled with GPIO 15. When the node is in deep sleep mode, all the grove modules lose their power too. The RED led will light on when Grove modules are powered and will go off when Grove modules aren't powered.


### Bonus!
Wio Node has an inbuilt LiPo battery charger, so you can charge 3.7v LiPo battery through JST 2.0 Port when USB is connecting.

!!!Note
    * Please handle the USB micro type-B socket gently, or you may break the socket apart from the board.
    * Battery is not included in the package. But we have arranged plenty of choices for you in [Bazzar](https://www.seeedstudio.com/s/battery.html).



## Get Started
----
Let us build a very basic LED application with Wio Node, in this application you will be able to control LED by your smartphone in about 5 minutes. Before we start, please make sure you have below things on hand:

|Wio Node|Grove - LED|Micro USB Cable|
|--------|-----------|---------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg)|
|[GET ONE NOW](https://www.seeedstudio.com/Wio-Node-p-2637.html)|[GET ONE NOW](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[GET ONE NOW](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|


!!!NOTE
---
name: Wio_Tracker Introduction
nointro:
---

---
The Wio_Tracker platform was firstly introduced to the world at the end of 2015 when Wio Link was crowd-founding on Kickstarter. As the second product that we launched at Kickstarter, the result of Wio_Tracker was exceeded our expectation a lot. So not long after that, we released the little brother of Wio link----Wio Node. Both has almost the same function but different in size and grove connector quantity, to accommodate to different situations.

The most attractive thing about Wio must be the virtualizing plug-n-play modules to RESTful APIs with mobile Apps, by using which people can really get rid of soldering, jump wires, and knowledges like electronic engineering, micro-controller programming, network programming, IoT protocols handling. I am not saying that those elements are bad, If you are a beginner, these steps and knowledges are essentially to practice, but sometimes we just want fast prototyping and quick response, and that’s what the Wio was born for, simplify all the steps and make prototyping easy, even if you know nothing about electronics, it is not exaggerate that you can also build a simple IoT project in about 5 minutes.

We have arranged many interesting projects tutorial for you to get started, by using Wio, you are able to water your plant remotely or feed your dog when you aren’t home, wanna dig out what other things you can make with Wio? Check out soon the docs of Wio_Tracker link and Wio_Tracker node, have fun!


## Product List
---

Here is the list of the Wio_Tracker Boards you can find in the Seeed WiKi. The list will be constantly updated.

- [Wio LTE Cat.1](https://wiki.seeedstudio.com/Wio_LTE_Cat.1/)
- [Wio Tracker - GPS, BT3.0, GSM, Arduino Compatible](https://wiki.seeedstudio.com/wio_gps_board/)


## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>