---
name: Grove - Mini Fan
category: Actuator
bzurl: https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html
oldwikiname:  Grove - Mini Fan
prodimagename: Mini_Fan%20head.jpg
surveyurl: https://www.research.net/r/grove_mini_fan
sku:  105020004
---
![](https://github.com/SeeedDocument/Grove-Mini_Fan/raw/master/img/Mini_Fan%20head.jpg)

The **Grove - Mini Fan** module is a DC motor driver based on the AVR Atmega168 microcontroller. The module also provides a breakout through which you can change the microcontroller code. For example, the code can be changed so that the module can be used to drive a [servomotor](https://en.wikipedia.org/wiki/Servomotor). By default, the module is set up to run the DC motor that is included in your mixer pack. The soft-leaved fan also included in the pack can be attached to the motor to make a fun project with kids. Being soft-leaved, the fan is completely safe and there is no chance of any injury even if it is moving at a high speed.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)


##  Features
---
*   User friendly output module that triggers a DC motor into operation based on signal received from an input sensor or switching module
*   Used in conjunction with DC motor included with the pack
*   JST 2.0 Interface used to connect to the motor
*   DC motor comes with a colorful soft-leaved fan accessory (as shown in the picture)
*   On-board micro-controller can be re-programmed to change module operation
*   Micro-controller runs [Arduino](/Arduino "Arduino") Compatible code
*   Change code to drive Servo motors instead of DC motors
*   Uses Standard 4-pin [Grove Cables](Grove_System/#grove-cables "GROVE System") to connect to other [Grove](/Grove "Grove") modules
*   <span style="color: red">Note:</span>for latest version(v1.1), the output voltage for motor is updated to 3.3 volts.

##  Interface Function
---
![](https://github.com/SeeedDocument/Grove-Mini_Fan/raw/master/img/Mini_fan.jpg)

<dl><dt>① UartSBee Interface: Use this interface to change the microcontroller code. Use a [UartSBee](/UartSBee_V4) module to connect to the microcontroller using the Uart interface.
</dt><dt>② JST 2.0 Interface: Used to connect to a 3.3 volts DC motor(only 3.3 volts)
</dt><dt>③ Grove Interface
</dt><dt>④ ICSP Interface
</dt><dt>⑤ Atmega168 Microcontroller
</dt><dt>⑥ Servo Interface
</dt></dl>

##  Usage
---
Follow these steps to build a sample circuit using this module:

1.First connect the DC motor to the **Grove - Mini Fan** module using the JST2.0 two-wire interface.

2.Connect the Mini Fan module to the output side of your circuit (to the right of the power module). On the input side of the circuit, you may use a range of sensor based input modules ([Grove - Light Sensor](/Grove-Light_Sensor "Grove - Light Sensor"), [Grove - Sound Sensor](/Grove-Sound_Sensor "Grove - Sound Sensor"), [Grove - Button](/Grove-Button "Grove - Button") or [Grove - Slide Potentiometer](/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")).

3.Power up the circuit.

4.The DC motor starts to rotate when the input module supplies a trigger:

- If using with a momentary switch like the one on the [Grove - Button](/Grove-Button "Grove - Button") module, simply press the button to turn ON the motor.

- If using with a [Grove - Slide Potentiometer](/Grove-Slide_Potentiometer "Grove - Slide Potentiometer"), move the slider from the GND position to VCC and see the speed of the motor increase as the supplied voltage increases. Attach the soft-leaved fan and you have a variable speed personal fan that you can run at whichever speed you desire to fight the heat!

- If using with a [Grove - Light Sensor](/Grove-Light_Sensor "Grove - Light Sensor") connected directly to the input side of the circuit, you should see that the motor runs in bright light and stops in the dark:

![](https://github.com/SeeedDocument/Grove-Mini_Fan/raw/master/img/Light_Sensitive_Fan.gif)

- If you want the motor to run only in the dark, add a [Grove - NOT](/Grove-NOT "Grove - NOT") module between the light sensor and the power module.
- If using with a [Grove - Sound Sensor](/Grove-Sound_Sensor "Grove - Sound Sensor"), you should see that the motor runs on detecting sound. Again, if you want to reverse the function, or in other words, if you want that the motor should be ON at all times except when there is a sound, add a [Grove - NOT](/Grove-NOT "Grove - NOT") module between the sound sensor and the power module.
</dd></dl>
</dd></dl>
</dd></dl>

You can use either the [Grove - USB Power](/Grove-Mixer_Pack_V2/#2._USB_Power "Grove - Mixer Pack") module or the [Grove - DC Jack Power](/Grove-DC_Jack_Power "Grove - DC Jack Power") module for the Grove circuit.

For building a circuit that controls a servomotor using a potentiometer, follow the steps below:

1.  Open the code directly to the path: \libraries\Servo\examples\Knob

2.  Upload your code to the on-board MCU. Ensure that you select the correct board type and COM port when uploading.

3.  Now you should be able to control your servomotor with a potentiometer

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Mini Fan to port D2, and connect a Grove - Light Sensor to port A0 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_Fan/master/img/cc_Mini_Fan.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, cover the light of the Light Sensor with your hand and the fan will turn on.

##  Availability
---
This [Grove](/Grove "Grove") module is available as part of the following [Grove Kit Series](/Grove_System/#grove-starter-kit "GROVE System"):

*   [Grove Mixer Pack V2](/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2")

Alternatively, it can be bought stand-alone at the [Seeed Studio Bazaar](http://www.seeedstudio.com/depot/Grove-Mini-Fan-p-1819.html).

##  Resources
---
*   [Grove - Mini Fan v1.0 (Eagle Files)](https://github.com/SeeedDocument/Grove-Mini_Fan/raw/master/res/Grove-Mini_Fan_v1.0.zip)

*   [Grove - Mini Fan v1.0 (pdf)](https://github.com/SeeedDocument/Grove-Mini_Fan/raw/master/res/Grove-Mini_Fan_v1.0.pdf)

*	[Codecraft CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove-Mini_Fan/master/res/Grove_Mini_Fan_CDC_File.zip)

## Projects

**Grove Mini Fan Controller + TI LaunchPad**: Power a mini fan with PWM using Seeed Grove and TI LaunchPad.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/measley2/grove-mini-fan-controller-ti-launchpad-cba304/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>