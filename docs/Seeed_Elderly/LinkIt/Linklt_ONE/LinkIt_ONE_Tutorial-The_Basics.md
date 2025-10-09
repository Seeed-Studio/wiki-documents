---
description: LinkIt ONE Tutorial - The Basics
title: LinkIt ONE Tutorial - The Basics
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-The_Basics
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**What We're Doing**

Let's build a simple circuit using a transistor, LED and a toggle switch. Light Emitting Diode (LED) transforms electrical energy into visible light. Transistor is a fundamental component in electronics which acts as a switch or a current amplifier. Here, we use a switch to ON and OFF the LED indirectly using the transistor.

**Things you need**

*   LinkIt One x 1
*   Bread board x 1

*   Resistors 330Ω,1kΩ x 1 each

*   5mm LED x 1

*   Switch x 1
*   Transistor (2N3904) x 1

**Schematic**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_1.jpg)

**Connection**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_2.jpg)

**Troubleshooting**

*   Ensure the polarity of the LED(Long lead is positive and the short lead is negative).

*   Check whether you have shorted two pins of the switch.

*   Make sure you haven't missed the transistor connection in the circuit(A transistor is required to drive a LED).

*   Burned out an LED..?
    *   This happens when you forget to connect the input resistance which acts as a current limiter to the LED.

**Making it better**

Now we've made a simple control circuit. Lets make it fascinating by just adding another component called a capacitor. A capacitor acts like a temporary charge storing device. If a capacitor is connected in parallel with the resistor which is in series with the LED it fades the LED. When the switch is turned ON the capacitor gets charged, when the switch is turned OFF the charge stored in the capacitor gets discharged slowly which makes fading OFF of the LED.

**More ideas**

What is the component used for growing the luminosity of the LED slowly when it is turned ON?

**Reference**

<!-- *   [The Basics](/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/LinkIt_ONE_Tutorial-Hello_World)

*   [Push Button](/LinkIt_ONE_Tutorial-Push_Button)

*   [Marquee](/LinkIt_ONE_Tutorial-Marquee)

*   [Colorful World](/LinkIt_ONE_Tutorial-Colorful_World)

*   [Analog Interface](/LinkIt_ONE_Tutorial-Analog_Interface)

*   [Mini Servo](/LinkIt-ONE-Tutorial---Mini-Servo)

*   [Light Sensor](/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMS Control the LED](/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Get Temperature with Webpage](/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
