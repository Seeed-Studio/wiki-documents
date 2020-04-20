---
name: Atom Node
category: Actuator
bzurl: https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html
oldwikiname: Atom Node
prodimagename: Atom_Node.jpg
surveyurl: https://www.research.net/r/Atom_Node
sku:  102010001
---
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg)

You might want to DIY an alarm system to monitor the soil moisture in your garden. While you are still lying in bed comfortably in the early morning, you might need a device, which automatically opens the doghouse for your doggie to come out and enjoy the warm sunlight. However, the complex software and hardware holds you back. Now, here comes Atom sweeping the road through the thistles and thorns; helping you complete these wonderful homebrew projects.

Atom is a node in internet of things. It can not only work standalone but also coordinate with other devices. Atom is highly expandable and easy to use. Standard Grove interfaces allow connections with different sensors. Atom fulfills tasks intelligently: the abundant data gathered are transmitted to the actuator wirelessly. What’s more fascinating is that you can finish all the tasks by simply setting your Android phone.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg)

Atom features wireless data transmission and mobile monitoring. Equipped with standard Bee interface, Atoms can be connected to XBee, RFBee and Bluetooth Bee to form wireless communication network, which gathers and manages the data automatically. Atom can also upload the data of different sensors to the Cloud, making it convenient to analyze data at all times and places simply through Web browsers.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)


##  Feature
---
*   Mobile devices/Apps centered configure
*   Open Source
*   Flexible wireless networks topology from Ad-hoc to mesh
*   Built-in battery
*   A variety of Indicators, Easy to distinguish the work state
*   Skin-Skeleton-Gut philosophy

##  Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> USB Supply Voltage
</th>
<td>4.75-5.25
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Quiescent Current(connect RF Bee)
</th>
<td> 25~40
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> GPIO Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Battery Capacity
</th>
<td> 300
</td>
<td> mAH
</td></tr>
<tr>
<th scope="row"> Charging Current
</th>
<td> 300-500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> USB Interface
</th>
<td>MICRO USB
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Working Frequency
</th>
<td> 16
</td>
<td> MHz
</td></tr>
<tr>
<th scope="row"> Grove Supply Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Output Current(Max)
</th>
<td> 500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Continuous Working Time(Max)
</th>
<td> 22
</td>
<td> h
</td></tr>
<tr>
<th scope="row"> Photosensitive Sensor Response Frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> Low Battery Indication
</th>
<td> 3.71
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Photosensitive sensor response frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> RF BEE (seeed) Communication Distance(Max) in outdoor
</th>
<td> 200
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Xbee(Xbee) Communication Distance(Max) in outdoor
</th>
<td>30
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Bluetooth Bee(seeed) Communication Distance(Max) in outdoor
</th>
<td>20
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Grove Connector
</th>
<td> 3(IIC;UART;PWM)
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> 20Pin Bee Socket
</th>
<td> Compatible Rfbee,Xbee,Bluetooth Bee
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color charge indicator
</th>
<td>Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color user indicator
</th>
<td> Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Buzzer Frequency
</th>
<td>2.7±0.3
</td>
<td> K
</td></tr></table>

##  Topology

Atom Node has sensor/actuator connectors for playing solo. With XBee or other open RF communication modules, It is also ready to talk in versatile networks topology when used in multiple. For example:

**1. The first Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg)

In this mode, The sensor and actuator are connected to one Atom Node. Atom Node read the sensor data and determine whether drive the Actuator to execute related actions. Demo 1 in the usage is working in this mode.

**2. The second Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg)

In this mode, The sensor and actuator are connected to two Atom Node. Atom Node receive the sensor data which is send by another Atom Node through RFBee and determine whether drive own actuator to execute related actions. Demo 2 in the usage is working in this mode.

**3. The third Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg)

In this mode, The sensor is connected to one Atom Node(here we called it as AtomSensor). Other Atom Nodes receive the sensor data which is send by AtomSensor through RFBee and determine whether driver own actuator to execute related actions.

##   The Structure

Node solutions are design align with SSG (skin skeleton gut) philosophy.
Gut: electronics inside

Skeleton: An minimal aluminum framework for protection and fixture, leaving enough opening to cater various sensors/actuators

Product Size:82mm*63.5mm*17mm

Material:Aluminum 5052

Finished: Black/Silver Anodized

Highlight Features: Hinge structure

Part Cleanness: Remove all burrs&amp;sharp corners. Clean off all oils,Dirt,or other contaminants

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg)

Let's look forward to these prototype...

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg)![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg)

##   The Hardware
---
The system adopts Atmel 32U4 as the main chip. And equipped with standard Bee interface socket for wireless communication. It adopts 3.3V power supply, and the external power interface is Micro USB. When connected with external power source, it will convert to 3.3V through DC‐DC voltage‐adjustable‐circuit(based on chip TD6810),and supply power for the whole system. Meanwhile, 5V power source charge Lithium battery through CN3065 charge manager IC.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg)

**U1:** Atmel 32U4 IC,  a 8-bit AVR Microcontroller;

**U3:** TD6810-ADJ IC, 1.5MHz 800mA Synchronous Step-Down Regulator Dropout;

**U4:** CN3065 IC, Charge management chip.

**Micro USB:** Charge for Lithium Battery and programming.

**Charge Indicator:** During charging process, the indicator is red; when finish charging, it turns to green. When it’s not connected to external power source or when the battery is in normal state, the indicator won’t light up. When it’s in low‐battery level(do not connect to extern power), it shows red.

**User Indicator:** Green blinking indicates transmit data, Red blinking indicates initializate. Red light indicates in configuration mode.

**Light Sensor:** Receive encoded parameters that Android device send.

**ADC Connector:** Can connect Sensors(is not IIC connector).

**PWM Connector:** Can connect Actuators(is not IIC connector).

**IIC Connector:** Can  connect Sensors or Actuators(is IIC connector).

**<font color="red">Note:</font>** A atom node can not connect simultaneously two or more Sensors(Actuators).

**Key Feature**

- Arduino compatible MCU

- LiPo battery and charger circuit

- LED/LDR for parameter setup

---
name: Atom Node
category: Actuator
bzurl: https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html
oldwikiname: Atom Node
prodimagename: Atom_Node.jpg
surveyurl: https://www.research.net/r/Atom_Node
sku:  102010001
---
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg)

You might want to DIY an alarm system to monitor the soil moisture in your garden. While you are still lying in bed comfortably in the early morning, you might need a device, which automatically opens the doghouse for your doggie to come out and enjoy the warm sunlight. However, the complex software and hardware holds you back. Now, here comes Atom sweeping the road through the thistles and thorns; helping you complete these wonderful homebrew projects.

Atom is a node in internet of things. It can not only work standalone but also coordinate with other devices. Atom is highly expandable and easy to use. Standard Grove interfaces allow connections with different sensors. Atom fulfills tasks intelligently: the abundant data gathered are transmitted to the actuator wirelessly. What’s more fascinating is that you can finish all the tasks by simply setting your Android phone.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg)

Atom features wireless data transmission and mobile monitoring. Equipped with standard Bee interface, Atoms can be connected to XBee, RFBee and Bluetooth Bee to form wireless communication network, which gathers and manages the data automatically. Atom can also upload the data of different sensors to the Cloud, making it convenient to analyze data at all times and places simply through Web browsers.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)


##  Feature
---
*   Mobile devices/Apps centered configure
*   Open Source
*   Flexible wireless networks topology from Ad-hoc to mesh
*   Built-in battery
*   A variety of Indicators, Easy to distinguish the work state
*   Skin-Skeleton-Gut philosophy

##  Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> USB Supply Voltage
</th>
<td>4.75-5.25
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Quiescent Current(connect RF Bee)
</th>
<td> 25~40
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> GPIO Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Battery Capacity
</th>
<td> 300
</td>
<td> mAH
</td></tr>
<tr>
<th scope="row"> Charging Current
</th>
<td> 300-500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> USB Interface
</th>
<td>MICRO USB
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Working Frequency
</th>
<td> 16
</td>
<td> MHz
</td></tr>
<tr>
<th scope="row"> Grove Supply Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Output Current(Max)
</th>
<td> 500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Continuous Working Time(Max)
</th>
<td> 22
</td>
<td> h
</td></tr>
<tr>
<th scope="row"> Photosensitive Sensor Response Frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> Low Battery Indication
</th>
<td> 3.71
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Photosensitive sensor response frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> RF BEE (seeed) Communication Distance(Max) in outdoor
</th>
<td> 200
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Xbee(Xbee) Communication Distance(Max) in outdoor
</th>
<td>30
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Bluetooth Bee(seeed) Communication Distance(Max) in outdoor
</th>
<td>20
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Grove Connector
</th>
<td> 3(IIC;UART;PWM)
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> 20Pin Bee Socket
</th>
<td> Compatible Rfbee,Xbee,Bluetooth Bee
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color charge indicator
</th>
<td>Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color user indicator
</th>
<td> Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Buzzer Frequency
</th>
<td>2.7±0.3
</td>
<td> K
</td></tr></table>

##  Topology

Atom Node has sensor/actuator connectors for playing solo. With XBee or other open RF communication modules, It is also ready to talk in versatile networks topology when used in multiple. For example:

**1. The first Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg)

In this mode, The sensor and actuator are connected to one Atom Node. Atom Node read the sensor data and determine whether drive the Actuator to execute related actions. Demo 1 in the usage is working in this mode.

**2. The second Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg)

In this mode, The sensor and actuator are connected to two Atom Node. Atom Node receive the sensor data which is send by another Atom Node through RFBee and determine whether drive own actuator to execute related actions. Demo 2 in the usage is working in this mode.

**3. The third Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg)

In this mode, The sensor is connected to one Atom Node(here we called it as AtomSensor). Other Atom Nodes receive the sensor data which is send by AtomSensor through RFBee and determine whether driver own actuator to execute related actions.

##   The Structure

Node solutions are design align with SSG (skin skeleton gut) philosophy.
Gut: electronics inside

Skeleton: An minimal aluminum framework for protection and fixture, leaving enough opening to cater various sensors/actuators

Product Size:82mm*63.5mm*17mm

Material:Aluminum 5052

Finished: Black/Silver Anodized

Highlight Features: Hinge structure

Part Cleanness: Remove all burrs&amp;sharp corners. Clean off all oils,Dirt,or other contaminants

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg)

Let's look forward to these prototype...

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg)![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg)

##   The Hardware
---
The system adopts Atmel 32U4 as the main chip. And equipped with standard Bee interface socket for wireless communication. It adopts 3.3V power supply, and the external power interface is Micro USB. When connected with external power source, it will convert to 3.3V through DC‐DC voltage‐adjustable‐circuit(based on chip TD6810),and supply power for the whole system. Meanwhile, 5V power source charge Lithium battery through CN3065 charge manager IC.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg)

**U1:** Atmel 32U4 IC,  a 8-bit AVR Microcontroller;

**U3:** TD6810-ADJ IC, 1.5MHz 800mA Synchronous Step-Down Regulator Dropout;

**U4:** CN3065 IC, Charge management chip.

**Micro USB:** Charge for Lithium Battery and programming.

**Charge Indicator:** During charging process, the indicator is red; when finish charging, it turns to green. When it’s not connected to external power source or when the battery is in normal state, the indicator won’t light up. When it’s in low‐battery level(do not connect to extern power), it shows red.

**User Indicator:** Green blinking indicates transmit data, Red blinking indicates initializate. Red light indicates in configuration mode.

**Light Sensor:** Receive encoded parameters that Android device send.

**ADC Connector:** Can connect Sensors(is not IIC connector).

**PWM Connector:** Can connect Actuators(is not IIC connector).

**IIC Connector:** Can  connect Sensors or Actuators(is IIC connector).

**<font color="red">Note:</font>** A atom node can not connect simultaneously two or more Sensors(Actuators).

**Key Feature**

- Arduino compatible MCU

- LiPo battery and charger circuit

- LED/LDR for parameter setup

---
name: Atom Node
category: Actuator
bzurl: https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html
oldwikiname: Atom Node
prodimagename: Atom_Node.jpg
surveyurl: https://www.research.net/r/Atom_Node
sku:  102010001
---
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg)

You might want to DIY an alarm system to monitor the soil moisture in your garden. While you are still lying in bed comfortably in the early morning, you might need a device, which automatically opens the doghouse for your doggie to come out and enjoy the warm sunlight. However, the complex software and hardware holds you back. Now, here comes Atom sweeping the road through the thistles and thorns; helping you complete these wonderful homebrew projects.

Atom is a node in internet of things. It can not only work standalone but also coordinate with other devices. Atom is highly expandable and easy to use. Standard Grove interfaces allow connections with different sensors. Atom fulfills tasks intelligently: the abundant data gathered are transmitted to the actuator wirelessly. What’s more fascinating is that you can finish all the tasks by simply setting your Android phone.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg)

Atom features wireless data transmission and mobile monitoring. Equipped with standard Bee interface, Atoms can be connected to XBee, RFBee and Bluetooth Bee to form wireless communication network, which gathers and manages the data automatically. Atom can also upload the data of different sensors to the Cloud, making it convenient to analyze data at all times and places simply through Web browsers.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)


##  Feature
---
*   Mobile devices/Apps centered configure
*   Open Source
*   Flexible wireless networks topology from Ad-hoc to mesh
*   Built-in battery
*   A variety of Indicators, Easy to distinguish the work state
*   Skin-Skeleton-Gut philosophy

##  Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> USB Supply Voltage
</th>
<td>4.75-5.25
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Quiescent Current(connect RF Bee)
</th>
<td> 25~40
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> GPIO Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Battery Capacity
</th>
<td> 300
</td>
<td> mAH
</td></tr>
<tr>
<th scope="row"> Charging Current
</th>
<td> 300-500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> USB Interface
</th>
<td>MICRO USB
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Working Frequency
</th>
<td> 16
</td>
<td> MHz
</td></tr>
<tr>
<th scope="row"> Grove Supply Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Output Current(Max)
</th>
<td> 500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Continuous Working Time(Max)
</th>
<td> 22
</td>
<td> h
</td></tr>
<tr>
<th scope="row"> Photosensitive Sensor Response Frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> Low Battery Indication
</th>
<td> 3.71
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Photosensitive sensor response frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> RF BEE (seeed) Communication Distance(Max) in outdoor
</th>
<td> 200
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Xbee(Xbee) Communication Distance(Max) in outdoor
</th>
<td>30
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Bluetooth Bee(seeed) Communication Distance(Max) in outdoor
</th>
<td>20
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Grove Connector
</th>
<td> 3(IIC;UART;PWM)
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> 20Pin Bee Socket
</th>
<td> Compatible Rfbee,Xbee,Bluetooth Bee
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color charge indicator
</th>
<td>Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color user indicator
</th>
<td> Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Buzzer Frequency
</th>
<td>2.7±0.3
</td>
<td> K
</td></tr></table>

##  Topology

Atom Node has sensor/actuator connectors for playing solo. With XBee or other open RF communication modules, It is also ready to talk in versatile networks topology when used in multiple. For example:

**1. The first Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg)

In this mode, The sensor and actuator are connected to one Atom Node. Atom Node read the sensor data and determine whether drive the Actuator to execute related actions. Demo 1 in the usage is working in this mode.

**2. The second Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg)

In this mode, The sensor and actuator are connected to two Atom Node. Atom Node receive the sensor data which is send by another Atom Node through RFBee and determine whether drive own actuator to execute related actions. Demo 2 in the usage is working in this mode.

**3. The third Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg)

In this mode, The sensor is connected to one Atom Node(here we called it as AtomSensor). Other Atom Nodes receive the sensor data which is send by AtomSensor through RFBee and determine whether driver own actuator to execute related actions.

##   The Structure

Node solutions are design align with SSG (skin skeleton gut) philosophy.
Gut: electronics inside

Skeleton: An minimal aluminum framework for protection and fixture, leaving enough opening to cater various sensors/actuators

Product Size:82mm*63.5mm*17mm

Material:Aluminum 5052

Finished: Black/Silver Anodized

Highlight Features: Hinge structure

Part Cleanness: Remove all burrs&amp;sharp corners. Clean off all oils,Dirt,or other contaminants

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg)

Let's look forward to these prototype...

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg)![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg)

##   The Hardware
---
The system adopts Atmel 32U4 as the main chip. And equipped with standard Bee interface socket for wireless communication. It adopts 3.3V power supply, and the external power interface is Micro USB. When connected with external power source, it will convert to 3.3V through DC‐DC voltage‐adjustable‐circuit(based on chip TD6810),and supply power for the whole system. Meanwhile, 5V power source charge Lithium battery through CN3065 charge manager IC.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg)

**U1:** Atmel 32U4 IC,  a 8-bit AVR Microcontroller;

**U3:** TD6810-ADJ IC, 1.5MHz 800mA Synchronous Step-Down Regulator Dropout;

**U4:** CN3065 IC, Charge management chip.

**Micro USB:** Charge for Lithium Battery and programming.

**Charge Indicator:** During charging process, the indicator is red; when finish charging, it turns to green. When it’s not connected to external power source or when the battery is in normal state, the indicator won’t light up. When it’s in low‐battery level(do not connect to extern power), it shows red.

**User Indicator:** Green blinking indicates transmit data, Red blinking indicates initializate. Red light indicates in configuration mode.

**Light Sensor:** Receive encoded parameters that Android device send.

**ADC Connector:** Can connect Sensors(is not IIC connector).

**PWM Connector:** Can connect Actuators(is not IIC connector).

**IIC Connector:** Can  connect Sensors or Actuators(is IIC connector).

**<font color="red">Note:</font>** A atom node can not connect simultaneously two or more Sensors(Actuators).

**Key Feature**

- Arduino compatible MCU

- LiPo battery and charger circuit

- LED/LDR for parameter setup

---
name: Atom Node
category: Actuator
bzurl: https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html
oldwikiname: Atom Node
prodimagename: Atom_Node.jpg
surveyurl: https://www.research.net/r/Atom_Node
sku:  102010001
---
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg)

You might want to DIY an alarm system to monitor the soil moisture in your garden. While you are still lying in bed comfortably in the early morning, you might need a device, which automatically opens the doghouse for your doggie to come out and enjoy the warm sunlight. However, the complex software and hardware holds you back. Now, here comes Atom sweeping the road through the thistles and thorns; helping you complete these wonderful homebrew projects.

Atom is a node in internet of things. It can not only work standalone but also coordinate with other devices. Atom is highly expandable and easy to use. Standard Grove interfaces allow connections with different sensors. Atom fulfills tasks intelligently: the abundant data gathered are transmitted to the actuator wirelessly. What’s more fascinating is that you can finish all the tasks by simply setting your Android phone.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg)

Atom features wireless data transmission and mobile monitoring. Equipped with standard Bee interface, Atoms can be connected to XBee, RFBee and Bluetooth Bee to form wireless communication network, which gathers and manages the data automatically. Atom can also upload the data of different sensors to the Cloud, making it convenient to analyze data at all times and places simply through Web browsers.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)


##  Feature
---
*   Mobile devices/Apps centered configure
*   Open Source
*   Flexible wireless networks topology from Ad-hoc to mesh
*   Built-in battery
*   A variety of Indicators, Easy to distinguish the work state
*   Skin-Skeleton-Gut philosophy

##  Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> USB Supply Voltage
</th>
<td>4.75-5.25
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Quiescent Current(connect RF Bee)
</th>
<td> 25~40
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> GPIO Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Battery Capacity
</th>
<td> 300
</td>
<td> mAH
</td></tr>
<tr>
<th scope="row"> Charging Current
</th>
<td> 300-500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> USB Interface
</th>
<td>MICRO USB
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Working Frequency
</th>
<td> 16
</td>
<td> MHz
</td></tr>
<tr>
<th scope="row"> Grove Supply Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Output Current(Max)
</th>
<td> 500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Continuous Working Time(Max)
</th>
<td> 22
</td>
<td> h
</td></tr>
<tr>
<th scope="row"> Photosensitive Sensor Response Frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> Low Battery Indication
</th>
<td> 3.71
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Photosensitive sensor response frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> RF BEE (seeed) Communication Distance(Max) in outdoor
</th>
<td> 200
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Xbee(Xbee) Communication Distance(Max) in outdoor
</th>
<td>30
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Bluetooth Bee(seeed) Communication Distance(Max) in outdoor
</th>
<td>20
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Grove Connector
</th>
<td> 3(IIC;UART;PWM)
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> 20Pin Bee Socket
</th>
<td> Compatible Rfbee,Xbee,Bluetooth Bee
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color charge indicator
</th>
<td>Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color user indicator
</th>
<td> Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Buzzer Frequency
</th>
<td>2.7±0.3
</td>
<td> K
</td></tr></table>

##  Topology

Atom Node has sensor/actuator connectors for playing solo. With XBee or other open RF communication modules, It is also ready to talk in versatile networks topology when used in multiple. For example:

**1. The first Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg)

In this mode, The sensor and actuator are connected to one Atom Node. Atom Node read the sensor data and determine whether drive the Actuator to execute related actions. Demo 1 in the usage is working in this mode.

**2. The second Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg)

In this mode, The sensor and actuator are connected to two Atom Node. Atom Node receive the sensor data which is send by another Atom Node through RFBee and determine whether drive own actuator to execute related actions. Demo 2 in the usage is working in this mode.

**3. The third Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg)

In this mode, The sensor is connected to one Atom Node(here we called it as AtomSensor). Other Atom Nodes receive the sensor data which is send by AtomSensor through RFBee and determine whether driver own actuator to execute related actions.

##   The Structure

Node solutions are design align with SSG (skin skeleton gut) philosophy.
Gut: electronics inside

Skeleton: An minimal aluminum framework for protection and fixture, leaving enough opening to cater various sensors/actuators

Product Size:82mm*63.5mm*17mm

Material:Aluminum 5052

Finished: Black/Silver Anodized

Highlight Features: Hinge structure

Part Cleanness: Remove all burrs&amp;sharp corners. Clean off all oils,Dirt,or other contaminants

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg)

Let's look forward to these prototype...

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg)![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg)

##   The Hardware
---
The system adopts Atmel 32U4 as the main chip. And equipped with standard Bee interface socket for wireless communication. It adopts 3.3V power supply, and the external power interface is Micro USB. When connected with external power source, it will convert to 3.3V through DC‐DC voltage‐adjustable‐circuit(based on chip TD6810),and supply power for the whole system. Meanwhile, 5V power source charge Lithium battery through CN3065 charge manager IC.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg)

**U1:** Atmel 32U4 IC,  a 8-bit AVR Microcontroller;

**U3:** TD6810-ADJ IC, 1.5MHz 800mA Synchronous Step-Down Regulator Dropout;

**U4:** CN3065 IC, Charge management chip.

**Micro USB:** Charge for Lithium Battery and programming.

**Charge Indicator:** During charging process, the indicator is red; when finish charging, it turns to green. When it’s not connected to external power source or when the battery is in normal state, the indicator won’t light up. When it’s in low‐battery level(do not connect to extern power), it shows red.

**User Indicator:** Green blinking indicates transmit data, Red blinking indicates initializate. Red light indicates in configuration mode.

**Light Sensor:** Receive encoded parameters that Android device send.

**ADC Connector:** Can connect Sensors(is not IIC connector).

**PWM Connector:** Can connect Actuators(is not IIC connector).

**IIC Connector:** Can  connect Sensors or Actuators(is IIC connector).

**<font color="red">Note:</font>** A atom node can not connect simultaneously two or more Sensors(Actuators).

**Key Feature**

- Arduino compatible MCU

- LiPo battery and charger circuit

- LED/LDR for parameter setup

---
name: Atom Node
category: Actuator
bzurl: https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html
oldwikiname: Atom Node
prodimagename: Atom_Node.jpg
surveyurl: https://www.research.net/r/Atom_Node
sku:  102010001
---
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg)

You might want to DIY an alarm system to monitor the soil moisture in your garden. While you are still lying in bed comfortably in the early morning, you might need a device, which automatically opens the doghouse for your doggie to come out and enjoy the warm sunlight. However, the complex software and hardware holds you back. Now, here comes Atom sweeping the road through the thistles and thorns; helping you complete these wonderful homebrew projects.

Atom is a node in internet of things. It can not only work standalone but also coordinate with other devices. Atom is highly expandable and easy to use. Standard Grove interfaces allow connections with different sensors. Atom fulfills tasks intelligently: the abundant data gathered are transmitted to the actuator wirelessly. What’s more fascinating is that you can finish all the tasks by simply setting your Android phone.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg)

Atom features wireless data transmission and mobile monitoring. Equipped with standard Bee interface, Atoms can be connected to XBee, RFBee and Bluetooth Bee to form wireless communication network, which gathers and manages the data automatically. Atom can also upload the data of different sensors to the Cloud, making it convenient to analyze data at all times and places simply through Web browsers.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)


##  Feature
---
*   Mobile devices/Apps centered configure
*   Open Source
*   Flexible wireless networks topology from Ad-hoc to mesh
*   Built-in battery
*   A variety of Indicators, Easy to distinguish the work state
*   Skin-Skeleton-Gut philosophy

##  Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> USB Supply Voltage
</th>
<td>4.75-5.25
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Quiescent Current(connect RF Bee)
</th>
<td> 25~40
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> GPIO Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Battery Capacity
</th>
<td> 300
</td>
<td> mAH
</td></tr>
<tr>
<th scope="row"> Charging Current
</th>
<td> 300-500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> USB Interface
</th>
<td>MICRO USB
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Working Frequency
</th>
<td> 16
</td>
<td> MHz
</td></tr>
<tr>
<th scope="row"> Grove Supply Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Output Current(Max)
</th>
<td> 500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Continuous Working Time(Max)
</th>
<td> 22
</td>
<td> h
</td></tr>
<tr>
<th scope="row"> Photosensitive Sensor Response Frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> Low Battery Indication
</th>
<td> 3.71
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Photosensitive sensor response frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> RF BEE (seeed) Communication Distance(Max) in outdoor
</th>
<td> 200
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Xbee(Xbee) Communication Distance(Max) in outdoor
</th>
<td>30
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Bluetooth Bee(seeed) Communication Distance(Max) in outdoor
</th>
<td>20
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Grove Connector
</th>
<td> 3(IIC;UART;PWM)
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> 20Pin Bee Socket
</th>
<td> Compatible Rfbee,Xbee,Bluetooth Bee
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color charge indicator
</th>
<td>Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color user indicator
</th>
<td> Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Buzzer Frequency
</th>
<td>2.7±0.3
</td>
<td> K
</td></tr></table>

##  Topology

Atom Node has sensor/actuator connectors for playing solo. With XBee or other open RF communication modules, It is also ready to talk in versatile networks topology when used in multiple. For example:

**1. The first Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg)

In this mode, The sensor and actuator are connected to one Atom Node. Atom Node read the sensor data and determine whether drive the Actuator to execute related actions. Demo 1 in the usage is working in this mode.

**2. The second Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg)

In this mode, The sensor and actuator are connected to two Atom Node. Atom Node receive the sensor data which is send by another Atom Node through RFBee and determine whether drive own actuator to execute related actions. Demo 2 in the usage is working in this mode.

**3. The third Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg)

In this mode, The sensor is connected to one Atom Node(here we called it as AtomSensor). Other Atom Nodes receive the sensor data which is send by AtomSensor through RFBee and determine whether driver own actuator to execute related actions.

##   The Structure

Node solutions are design align with SSG (skin skeleton gut) philosophy.
Gut: electronics inside

Skeleton: An minimal aluminum framework for protection and fixture, leaving enough opening to cater various sensors/actuators

Product Size:82mm*63.5mm*17mm

Material:Aluminum 5052

Finished: Black/Silver Anodized

Highlight Features: Hinge structure

Part Cleanness: Remove all burrs&amp;sharp corners. Clean off all oils,Dirt,or other contaminants

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg)

Let's look forward to these prototype...

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg)![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg)

##   The Hardware
---
The system adopts Atmel 32U4 as the main chip. And equipped with standard Bee interface socket for wireless communication. It adopts 3.3V power supply, and the external power interface is Micro USB. When connected with external power source, it will convert to 3.3V through DC‐DC voltage‐adjustable‐circuit(based on chip TD6810),and supply power for the whole system. Meanwhile, 5V power source charge Lithium battery through CN3065 charge manager IC.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg)

**U1:** Atmel 32U4 IC,  a 8-bit AVR Microcontroller;

**U3:** TD6810-ADJ IC, 1.5MHz 800mA Synchronous Step-Down Regulator Dropout;

**U4:** CN3065 IC, Charge management chip.

**Micro USB:** Charge for Lithium Battery and programming.

**Charge Indicator:** During charging process, the indicator is red; when finish charging, it turns to green. When it’s not connected to external power source or when the battery is in normal state, the indicator won’t light up. When it’s in low‐battery level(do not connect to extern power), it shows red.

**User Indicator:** Green blinking indicates transmit data, Red blinking indicates initializate. Red light indicates in configuration mode.

**Light Sensor:** Receive encoded parameters that Android device send.

**ADC Connector:** Can connect Sensors(is not IIC connector).

**PWM Connector:** Can connect Actuators(is not IIC connector).

**IIC Connector:** Can  connect Sensors or Actuators(is IIC connector).

**<font color="red">Note:</font>** A atom node can not connect simultaneously two or more Sensors(Actuators).

**Key Feature**

- Arduino compatible MCU

- LiPo battery and charger circuit

- LED/LDR for parameter setup

---
name: Atom Node
category: Actuator
bzurl: https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html
oldwikiname: Atom Node
prodimagename: Atom_Node.jpg
surveyurl: https://www.research.net/r/Atom_Node
sku:  102010001
---
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg)

You might want to DIY an alarm system to monitor the soil moisture in your garden. While you are still lying in bed comfortably in the early morning, you might need a device, which automatically opens the doghouse for your doggie to come out and enjoy the warm sunlight. However, the complex software and hardware holds you back. Now, here comes Atom sweeping the road through the thistles and thorns; helping you complete these wonderful homebrew projects.

Atom is a node in internet of things. It can not only work standalone but also coordinate with other devices. Atom is highly expandable and easy to use. Standard Grove interfaces allow connections with different sensors. Atom fulfills tasks intelligently: the abundant data gathered are transmitted to the actuator wirelessly. What’s more fascinating is that you can finish all the tasks by simply setting your Android phone.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg)

Atom features wireless data transmission and mobile monitoring. Equipped with standard Bee interface, Atoms can be connected to XBee, RFBee and Bluetooth Bee to form wireless communication network, which gathers and manages the data automatically. Atom can also upload the data of different sensors to the Cloud, making it convenient to analyze data at all times and places simply through Web browsers.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)


##  Feature
---
*   Mobile devices/Apps centered configure
*   Open Source
*   Flexible wireless networks topology from Ad-hoc to mesh
*   Built-in battery
*   A variety of Indicators, Easy to distinguish the work state
*   Skin-Skeleton-Gut philosophy

##  Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> USB Supply Voltage
</th>
<td>4.75-5.25
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Quiescent Current(connect RF Bee)
</th>
<td> 25~40
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> GPIO Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Battery Capacity
</th>
<td> 300
</td>
<td> mAH
</td></tr>
<tr>
<th scope="row"> Charging Current
</th>
<td> 300-500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> USB Interface
</th>
<td>MICRO USB
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Working Frequency
</th>
<td> 16
</td>
<td> MHz
</td></tr>
<tr>
<th scope="row"> Grove Supply Voltage
</th>
<td> 3.3
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Output Current(Max)
</th>
<td> 500
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Continuous Working Time(Max)
</th>
<td> 22
</td>
<td> h
</td></tr>
<tr>
<th scope="row"> Photosensitive Sensor Response Frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> Low Battery Indication
</th>
<td> 3.71
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Photosensitive sensor response frequency
</th>
<td>100
</td>
<td> Hz
</td></tr>
<tr>
<th scope="row"> RF BEE (seeed) Communication Distance(Max) in outdoor
</th>
<td> 200
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Xbee(Xbee) Communication Distance(Max) in outdoor
</th>
<td>30
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Bluetooth Bee(seeed) Communication Distance(Max) in outdoor
</th>
<td>20
</td>
<td> m
</td></tr>
<tr>
<th scope="row"> Grove Connector
</th>
<td> 3(IIC;UART;PWM)
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> 20Pin Bee Socket
</th>
<td> Compatible Rfbee,Xbee,Bluetooth Bee
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color charge indicator
</th>
<td>Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Two-color user indicator
</th>
<td> Green/Red
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Buzzer Frequency
</th>
<td>2.7±0.3
</td>
<td> K
</td></tr></table>

##  Topology

Atom Node has sensor/actuator connectors for playing solo. With XBee or other open RF communication modules, It is also ready to talk in versatile networks topology when used in multiple. For example:

**1. The first Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg)

In this mode, The sensor and actuator are connected to one Atom Node. Atom Node read the sensor data and determine whether drive the Actuator to execute related actions. Demo 1 in the usage is working in this mode.

**2. The second Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg)

In this mode, The sensor and actuator are connected to two Atom Node. Atom Node receive the sensor data which is send by another Atom Node through RFBee and determine whether drive own actuator to execute related actions. Demo 2 in the usage is working in this mode.

**3. The third Mode:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg)

In this mode, The sensor is connected to one Atom Node(here we called it as AtomSensor). Other Atom Nodes receive the sensor data which is send by AtomSensor through RFBee and determine whether driver own actuator to execute related actions.

##   The Structure

Node solutions are design align with SSG (skin skeleton gut) philosophy.
Gut: electronics inside

Skeleton: An minimal aluminum framework for protection and fixture, leaving enough opening to cater various sensors/actuators

Product Size:82mm*63.5mm*17mm

Material:Aluminum 5052

Finished: Black/Silver Anodized

Highlight Features: Hinge structure

Part Cleanness: Remove all burrs&amp;sharp corners. Clean off all oils,Dirt,or other contaminants

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg)

Let's look forward to these prototype...

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg)![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg)

##   The Hardware
---
The system adopts Atmel 32U4 as the main chip. And equipped with standard Bee interface socket for wireless communication. It adopts 3.3V power supply, and the external power interface is Micro USB. When connected with external power source, it will convert to 3.3V through DC‐DC voltage‐adjustable‐circuit(based on chip TD6810),and supply power for the whole system. Meanwhile, 5V power source charge Lithium battery through CN3065 charge manager IC.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg)

**U1:** Atmel 32U4 IC,  a 8-bit AVR Microcontroller;

**U3:** TD6810-ADJ IC, 1.5MHz 800mA Synchronous Step-Down Regulator Dropout;

**U4:** CN3065 IC, Charge management chip.

**Micro USB:** Charge for Lithium Battery and programming.

**Charge Indicator:** During charging process, the indicator is red; when finish charging, it turns to green. When it’s not connected to external power source or when the battery is in normal state, the indicator won’t light up. When it’s in low‐battery level(do not connect to extern power), it shows red.

**User Indicator:** Green blinking indicates transmit data, Red blinking indicates initializate. Red light indicates in configuration mode.

**Light Sensor:** Receive encoded parameters that Android device send.

**ADC Connector:** Can connect Sensors(is not IIC connector).

**PWM Connector:** Can connect Actuators(is not IIC connector).

**IIC Connector:** Can  connect Sensors or Actuators(is IIC connector).

**<font color="red">Note:</font>** A atom node can not connect simultaneously two or more Sensors(Actuators).

**Key Feature**

- Arduino compatible MCU

- LiPo battery and charger circuit

- LED/LDR for parameter setup

---
name: AVR USB Programmer
category: MakerPro
bzurl: https://www.seeedstudio.com/AVR-USB-Programmer-p-696.html
oldwikiname:  AVR USB Programmer
prodimagename:  jyeprogrammer.jpg
surveyurl: https://www.research.net/r/AVR_USB_Programmer
sku:    105990001
---
![](https://files.seeedstudio.com/wiki/AVR_USB_Programmer/img/jyeprogrammer.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/AVR-USB-Programmer-p-696.html)

##   Features

*   Can be used to program most AVR microcontrollers via USB (USBASP compatible. See [http://www.fischl.de/usbasp/](http://www.fischl.de/usbasp/) for details)
*   A general purpose AVR Mega48 board with [all I/Os brought to sides of board](http://www.jyetech.com/Products/073/07302_1.jpg) and holes matching 0.1 inch pitch prototype boards. Execllent for AVR experiments and developments. (Note: 07302 is shipped with ATmega48 on board)
*   Can be separately powered by adding two commonly available through-hole components
*   Compatible header provided for programming 062 oscilloscopes
*   Can be converted to Uart/USB converter by simply reflashing it with AVRCDC firmware (available at [http://www.recursion.jp/avrcdc/](http://www.recursion.jp/avrcdc/) ) and adding one resistor

##   ApplicaHardware Installation

Click [here](http://www.jyetech.com/Products/073/073_Assembly.pdf) to check the assembly drawing.

##   Bill of Materials (BOM) /parts list

1.  **Accessory included:**

    *   10-core programming ribbon cable

2.  **Optional:**

    *   Mini USB cable

##   Resources

*   [How to Use the USB Programmer](http://www.jyetech.com/Products/073/How%20to%20Use%20the%20USB%20Programmer.pdf)

*   [Schematic](http://www.jyetech.com/Products/073/073_Schematic.pdf)

*   [Assembly drawing](http://www.jyetech.com/Products/073/073_Assembly.pdf)

*   [Supporting software (Windows/linux, in English)](http://extremeelectronics.co.in/avr-tutorials/gui-software-for-usbasp-based-usb-avr-programmers/)

*   [AVR programmer firmware and USB driver](http://www.jyetech.com/Products/073/usbasp.2009-02-28.tar.gz)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>