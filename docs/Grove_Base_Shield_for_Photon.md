---
name: Grove Base Shield for Photon
category: Others
bzurl: https://www.seeedstudio.com/Particle-Photon-Base-Shield-p-2598.html?cPath=98_106_57
oldwikiname:  Grove Base Shield for Photon
prodimagename: Grove_Base_Shield_for_Photon_product_view_1200_s.jpg
surveyurl: https://www.research.net/r/Grove_Base_Shield_for_Photon
sku:  103020031
---
![](https://github.com/SeeedDocument/Grove_Base_Shield_for_Photon/raw/master/img/Grove_Base_Shield_for_Photon_product_view_1200_s.jpg)

**Grove Base Shield for Photon** is an expansion shield board which incorporate [Grove](/Grove_System) port on which you can build more powerful and intelligent applications with much richer and cost-effective Grove functional modules. It gets three digital ports, two analog ports, two I<sup>2</sup>C ports and one UART port. It a kind of plug-and-play board which will accelerate your prototyping process dramatically.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Particle-Photon-Base-Shield-p-2598.html?cPath=98_106_57)

##  Features
---
*   Grove interfaced

*   Connect to massive and low-cost Grove modules

*   I<sup>2</sup>C, UART ports integrated

##  Application ideas
---
*   Compact IoT applications such as smart router.

##  Specification
---
<table>
<tr>
<td> Grove ports </td>
<td> 3 digital ports

2 analog ports

2 I<sup>2</sup>C ports

1 UART port.

</td></tr>
<tr>
<td> Dimensions  </td>
<td> 53  × 53 mm
</td></tr>
<tr>
<td> Weight  </td>
<td> 18g
</td></tr></table>

##  Hardware Overview
---
![](https://github.com/SeeedDocument/Grove_Base_Shield_for_Photon/raw/master/img/Grove_Base_Shield_for_Photon_component_diagram_annotated_1200_s.jpg)

###  **Parts list**

<table>
<tr>
<th>Parts name   </th>
<th> Quantity
</th></tr>
<tr>
<td> Grove Base Shield for Photon  </td>
<td> 1PC
</td></tr></table>

##  Getting Started
---
**Note:** In this case we show you a general development  environmental.

###  Material required

*   [Particle Photon](http://www.seeedstudio.com/depot/Particle-Photon-p-2527.html) × 1

*   USB cable (type A to micro type-B) × 1
*   A PC or Mac

*   Grove Base Shield for Photon × 1

*   [Grove - Buzzer](http://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38) × 1

###  Buzzing

<dl><dd> 1. Refer to [here](https://docs.particle.io/guide/getting-started/connect/core/) to connect to a device (PC or Mac).
</dd></dl>

!!!Note
    1. We recommend that you choose **node.js v4.2.3 LTS** especially for Windows 10 user.
    2. You may need to one more steps after run command **particle setup**, that is, connect you device (PC or Mac) to a wi-fi AP whose name contain **Photon**, especially on Windows 10.

<dl><dd> 2. Use [Web IDE](https://build.particle.io/) for your project. Login with your account and choose your device (click the 2nd last icon on left column).
</dd></dl>

!!!Note
    We recommend you choose [Web IDE](https://build.particle.io/) to compile or flashing your code to Photon which is much quicker than using Particle Dev, if your internet connectivity is not so good.

<dl><dd> 3. Connect them like following:
</dd></dl>

![](https://github.com/SeeedDocument/Grove_Base_Shield_for_Photon/raw/master/img/Grove_Base_Shield_for_Photon_demo_conneciton_1200_S.jpg)

<dl><dd> 4. Now you can copy following code to Web IDE and flash them to Photo by clicking a lighting-like icon (the 1st icon on left column).
</dd></dl>

!!!Note
    Copy the code only to the tab named _**filename.ino**_.
```
/*
   Buzzing
   Use digital pin D4
   This example code is in the public domain.
   by xiaohe
  */
int led1 = D4; //set D4 as output

void setup() {
    pinMode(led1, OUTPUT);
}

void loop() {
    // enable buzzing
    digitalWrite(led1, HIGH);

    // We'll leave it on for 1 second...
    delay(1000);

    // Then we'll turn it off...
    digitalWrite(led1, LOW);

    // Wait 1 second...
    delay(1000);

    // And it will repeat!
}
```

##  Resources
---
*   [Schematic files](https://github.com/SeeedDocument/Grove_Base_Shield_for_Photon/raw/master/res/Schematic_files_for_Grove_Base_Shield_for_Photon.zip)

*   [Grove_System](/Grove_System)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>