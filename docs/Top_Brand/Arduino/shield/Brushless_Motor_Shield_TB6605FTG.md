---
description: Brushless_Motor_Shield_TB6605FTG
title: Brushless Motor Shield TB6605FTG
tags:
  - Shield
  - motor
keywords:
  - Shield
  - motor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Brushless_Motor_Shield_TB6605FTG
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/105030027-preview-wiki.jpg" alt="pir" width={600} height="auto" /></p>

The Brushless Motor Shield (TB6605FTG) is a brushless motor driver for Arduino compatible system. It supports 9V ~ 24V DC input and can continuously and continuously output large current to drive the brushless motor. With the onboard potentiometer, you can adjust the motor speed easily. This shield offers a variety of modes to choose from, you can use the four onboard switches to switch functions.  
  
With the onboard Grove I2C interface, you can work with other grove modules with this shield easily, for instance, you can use a [Grove - LCD RGB Backlight](Grove - LCD RGB Backlight) to display the Motor speed.

We also released the [TB6605 BLDC Motor Kit for Arduino](https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html), which is based on this shield and contains an LCD and a high-quality brushless motor to display the Motor speed.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature

- Wide input voltage range: 9V ~ 24V
- I2C interface
- Hardware adjustable speed control(On-board Potentiometer)
- Multiple modes available: CW/CWW, Brake/Normal, Sine wave/Square wave

## Specification

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parameter</h3></td>
    <td><h3>Value</h3></td>
  </tr>
  <tr>
    <td><h4>Supply voltage</h4></td>
    <td><h4>3.3V / 5V</h4></td>
  </tr>
  <tr>
    <td><h4>DC Power Input</h4></td>
    <td><h4>9V ~ 24V</h4></td>
  </tr>  
  <tr>
    <td><h4>Max Output Current</h4></td>
    <td><h4>0.02A</h4></td>
  </tr>
    <tr>
    <td><h4>Driving mode</h4></td>
    <td><h4>Sine wave/Square wave</h4></td>
  </tr>
    <tr>
    <td><h4>Motor Interface</h4></td>
    <td><h4>Screw terminal</h4></td>
  </tr>
    <tr>
    <td><h4>External Grove Interface</h4></td>
    <td><h4>I2C</h4></td>
  </tr>
  </tbody></table>

## Hardware Overview

### Pinout

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg" /></a></p>

### Screw terminal definition

<table align="center">
  <tbody>
  <tr>
    <td><h3>Brushless Motor Shield</h3></td>
    <td><h3>Brushless Motor</h3></td>
    <td><h3>wire color</h3></td>
  </tr>
  <tr>
    <td><h4>5V</h4></td>
    <td><h4>Logic power supply positive</h4></td>
    <td><h4>Red</h4></td>
  </tr>
  <tr>
    <td><h4>GND</h4></td>
    <td><h4>Logic power ground</h4></td>
    <td><h4>Black</h4></td>
  </tr>  
  <tr>
    <td><h4>HU+</h4></td>
    <td><h4>Hall sensor Phase U</h4></td>
    <td><h4>Orange</h4></td>
  </tr>
  <tr>
    <td><h4>HV+</h4></td>
    <td><h4>Hall sensor Phase V</h4></td>
    <td><h4>Dark Green</h4></td>
  </tr>
  <tr>
    <td><h4>HW+</h4></td>
    <td><h4>Hall sensor Phase W</h4></td>
    <td><h4>Dark Blue</h4></td>
  </tr>
  <tr>
    <td><h4>U</h4></td>
    <td><h4>Coil Phase U</h4></td>
    <td><h4>Yellow</h4></td>
  </tr>
  <tr>
    <td><h4>V</h4></td>
    <td><h4>Coil Phase V</h4></td>
    <td><h4>Light Green</h4></td>
  </tr>
  <tr>
    <td><h4>W</h4></td>
    <td><h4>Coil Phase W</h4></td>
    <td><h4>Light Blue</h4></td>
  </tr>
  </tbody></table>

<div align="center"><b>Table 1.</b><i>Wiring Map</i></div>

:::tip
The wiring color may be different if you are not using the 42BLF01 brushless motor, please connect according to the specific situation
:::

## Getting Started

### Materials required

- [Brushless Motor Shield (TB6605FTG) x1](https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html)
- [Grove - LCD RGB Backlight x1](Grove - LCD RGB Backlight)
- [Arduino or Seeedunio x1](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)
- Brushless Motor x1

Or you can just use our [TB6605FTG Brushless Motor Kit for Arduino](https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html), this kit contains Brushless Motor Shield, 42BLF01 brushless motor, and a Grove - LCD RGB Backlight.

### Hardware connection

- **Step 1.** Connect the Brushless Motor to the Screw terminal of the Brushless Motor Shield, please refer to the **Table 1.**

- **Step 2.** Connect the Grove - LCD RGB Backlight to the Grove I2C port on the Brushless Motor Shield.

- **Step 3.** Plug the Brushless Motor Shield into your Arduino or Seeeduino.

- **Step 4.** Power the shield with DC jack and power the Arduino via USB cable.

  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png" /></a></p>

### Software

:::caution
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.**  
Download the [BLDC Motor Shield (TB6605) lib](https://github.com/Seeed-Studio/BLDC_Motor_Shield_TB6605) Library from Github.
Download the [Grove-LCD RGB Backlight Library](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) Library from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it via the path: **File --> Examples -->BLDC Motor Shield (TB6605)--> TB6605_demo**.

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg" /></a></p>

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

:::tipsuccess
If everything goes well, you can see the DC motor run and the LCD will show the speed. Now you can rotate the potentiometer to control the speed of the motor.  
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [BLDC Motor Shield (TB6605) Eagle Files](https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip)

- **[PDF]** [42BLF01 Brushless Motor-Specification](https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/42BLF01-Specification.pdf)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
