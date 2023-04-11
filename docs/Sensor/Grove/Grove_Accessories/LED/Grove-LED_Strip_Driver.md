---
description: Grove - LED Strip Driver
title: Grove - LED Strip Driver
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-LED_Strip_Driver
last_update:
  date: 1/7/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg" alt="pir" width={600} height="auto" /></p>

The LED Strip Driver with 4-pin Grove interface provides easy connectivity to your standard Arduino device or Seeed Stalker. It can help you control the luminance of a single-color LED strip, as well as the color and the luminance of an RGB LED strip through Arduino or Seeeduino.

It has 2 terminals and 2 Grove interfaces. The power for LED strip comes in through the 2-pin terminal. And the LED controlling voltages output through the 4-pin terminal. The 2 Grove interfaces are respectively screen-printed “IN” (for controlling data input) and “OUT” (for controlling data shared with the next strip driver).

It can drive an LED strip 1 to 2 meters long with 9 V, while 1 to 5 meters long with 12 V. The driver in conjunction with the colorful LED strips can add a wonderful effect to indoor or outdoor usages.

*   Grove - LED Strip Driver V1.1：
 1. SI5904 is used to level translation.
 2. 78M05 is a Voltage Regulator, the output voltage is 5V.

*   Grove - LED Strip Driver V1.2:

 1. replace SI5904 with two 2N7002.
 2. The package of 100nF capacitors is 0603, not 0402.
 3. 3.3K discrete resistors change to exclusion.

:::note
    Clock/data IO requires 5V logic level.
:::
<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html)
##   Specifications
---
<table >
<tr>
<td width="150"> **Power supply**
</td>
<td width="150"> **LED Strip**
</td>
<td width="100"> **LED Color**
</td>
<td width="100"> **Length(m)**
</td>
<td width="150"> **Max current(mA)**
</td></tr>
<tr>
<td rowspan="5"> 12V/5A
</td>
<td rowspan="5"> RGB LED strip
</td>
<td rowspan="5"> White
</td>
<td> 1
</td>
<td> 1032
</td></tr>
<tr>
<td> 2
</td>
<td> 1822
</td></tr>
<tr>
<td> 3
</td>
<td> 2430
</td></tr>
<tr>
<td> 4
</td>
<td> 2800
</td></tr>
<tr>
<td> 5
</td>
<td> 3000
</td></tr>
<tr>
<td rowspan="2"> 9V/1A
</td>
<td rowspan="2"> RGB LED strip
</td>
<td rowspan="2"> White
</td>
<td> 1
</td>
<td> 365
</td></tr>
<tr>
<td> 2
</td>
<td> 627
</td></tr></table>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg" alt="pir" width={600} height="auto" /></p>

 **12V Power Supply** – Screw terminal for 9~12v power supply.

 **Chainable Input** – Connected to Grove - Base Shield] or the other driver's chainable output. Pin definition: **CLK DIN NC GND**.

 **Chainable Output** – Connected to the other driver's chainable input. Pin definition: **CLK DOUT NC GND**

 **LED strip interface** – Screw terminals for LED strip. Pin definition: **+ B R G**

**Note**:VCC of Arduino/Seeeduino is not connected to the Grove interface.

##   Demonstration
---
###   Hardware installation

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg" alt="pir" width={600} height="auto" /></p>

1.Connect the Grove socket marked "IN" on the LED Strip Driver and digital port 2 on the Base Shield with a Grove cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg" alt="pir" width={600} height="auto" /></p>

2.Connect the LED strip to the 4 pin terminal of Grove - LED Strip Driver. Make sure the wire marked **"+12v"** of the LED strip goes into the seat marked **"+"** of the terminal, and **"B"** into **"B"**,**"R"** into **"R"** and **"G"** into **"G"**.Most of the LED strips we are selling have 4 wires as the picture above except [White LED Flexi-Strip - 60 LED - 1m](https://www.seeedstudio.com/depot/white-led-flexistrip-60-led1m-p-1122.html?cPath=207). If this is the kind you are going to use, the connection steps can be a little different. Still plug the wire marked **"+12V"** into the seat marked **"+"**, but the other wire can go into whichever seat of **"B"**, **"R"** and **"G"**. And run the demo code named **"DemoForWhiteLEDStrip"** instead in the following software steps.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg" alt="pir" width={600} height="auto" /></p>

3.Connect the 12V DC or 9V DC power wires to the 2 pin terminal.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg" alt="pir" width={600} height="auto" /></p>

4.In cases that you want to utilize the cascade feature, prepare another driver and strip first. Then use a Grove cable to connect the Grove socket marked "out" on the first board and the Grove socket marked "IN" on the second board. Done. Two strips will shine in sync now.

###   Software Programming

1.Download [the LED Strip Driver Library](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip). Unzip and import it into Arduino-1.0 Libraries: ..\arduino-1.0\libraries.

2.Upload the SingleLEDStrip demo code if you only use a single driver.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg" alt="pir" width={600} height="auto" /></p>

3.In case of two LED strips, upload the DualLEDStrip demo code instead.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg" alt="pir" width={600} height="auto" /></p>

# LED Strip driver eagle files V1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# LED Strip driver eagle files V1.2
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   Resources
---
*   [LED Strip driver eagle files V1.1](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip)

*   [LED Strip driver eagle files V1.2](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip)

*   [Schematic V1.1 in PDF](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver.pdf)

*   [Schematic V1.2 in PDF](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/Grove-LED_Strip_driver_V1.2.pdf)

*   [P9813 Datasheet](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/P9813_datasheet.pdf)

*   [N-MOSFET DMN3016LK3 Datasheet](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/N-MOSFET_DMN3016LK3_Datasheet.pdf)

*   [LED Strip Driver library](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip)

*   [Suli Library](https://github.com/Seeed-Studio/LED_Strip_Suli)

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
