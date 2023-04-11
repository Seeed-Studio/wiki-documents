---
description:  Grove - Toy Kit
title: Grove - Toy Kit
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Toy_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
Grove Toy Kit provides an easy way for you to hack and upgrade toys to fit with your own personality. It boosts regular toys with many cool functions like sense of human motion, listening ability, movement detection, OLED display, and more. Thanks for the players of Toy hacking contest, there’re six awesome projects listed below that shows you what you can do with the Grove Toy Kit.


Grove Toy Kit includes:

<!-- *   1 x [Grove - Base_Shield_V2](/Base_Shield_V2 "Grove - Base Shield")

*   1 x [Grove - OLED Display 128*64](/Grove-OLED_Display_0.96inch "Grove - OLED Display 128*64")

*   1 x [Grove - Sound Sensor](/Grove-Sound_Sensor "Grove - Sound Sensor")

*   1 x [Grove - Chainable RGB LED](/Grove-Chainable_RGB_LED "Grove - Chainable RGB LED")

*   1 x [Grove - Buzzer](/Grove_Starter_Kit_Plus/#7-grove-buzzer)

*   1 x [Grove - PIR Motion Sensor](/Grove-PIR_Motion_Sensor "Grove - PIR Motion Sensor")

*   1 x [Grove - 3-Axis Analog Accelerometer](/Grove-3-Axis_Analog_Accelerometer "Grove-3-Axis_Analog_Accelerometer")

*   10 x Grove - Universal 4 pin Cable

*   5 x Grove - X2 Servo cable

*   2 x Super strong metal core Servo MG-995 -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Toy-Kit-p-995.html)

##  Version Tracker

<table>
<tr>
<th> Revision
</th>
<th> Descriptions
</th>
<th> Release
</th></tr>
<tr>
<td width="300px"> GROVE - Toy Kit
</td>
<td width="500px"> the V0.9b revision published
</td>
<td width="200px"> Nov 23, 2011
</td></tr></table>

##  Make your toy sensitive

To make your toy sensitive, we have prepared some sensors for you in this Kit.

###  PIR_Motion_Sensor: Sensitive to human motion

How about make your toy say "hello" when you get close to it? With the PIR sensor, your toy can detect human beings when they move into the sensor's detection range. You can adjust your toy's detection range and hold time by adjusting the two potentiometers.


[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/PIR_motion_sensor.jpg)]


###  Sound sensor: Listen, there's sound!

With the Sound sensor, your toy can be sensitive to the environment noise. Grove - Sound Sensor is a simple microphone. Based on the power amplifier LM386 and the electret microphone, it can be used to detect the sound strength of the environment. The value of output can be adjusted by the potentiometer.



[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Sound_sensor.jpg)]

###  3-axis_Accelerometer: Movement detection

With the I2C 3-axis Accelerometer, your toy can now detect its acceleration; that is, if your kid shakes his/her doll heavily, the doll may say: "Hey, kiddo! You are stronger than the last time you shook me!

<center>

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Accelerometer.jpg)

</center>

###  I2C Touch Sensor: Make your toy touch-sensitive.

An I2C Touch Sensor has been used to make your toy (ie Winnie The Pooh) sensitive to your finger's touch. It includes a controller and 4 feelers, which enables your toy to feel the touch or proximity of human fingers with 4 channels. Besides, up to 4 additional channels can be added if you make or [buy the feelers from Seeed Studio](https://www.seeedstudio.com/depot/grove-i2c-touch-sensor-p-840.html?cPath=144_195).



[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/I2C_Touch_Sensor.jpg)]



##  Make your toy interactive

###  A cool OLED Display: Grove- OLED Display 128*64

LED 128×64 Display module is an OLED monochrome 128×64dot matrix display module with Grove 4pin I2C Interface. The characteristics of this display module are high brightness, self-emission, high contrast ratio, slim outline, wide viewing angle, wide temperature range, and low power consumption. It has bigger screen and uses all the columns from the SSD1308 chip so that it can display more contents than the OLED 96×16.

This very cool OLED Display with Grove 4pin I2C Interface, is high brightness, self-emission, high contrast ratio, slim outline, wide viewing angle, wide temperature range, and low power consumption. It is rather splendid to Integrate it into your toy, or any things you like.


[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Twig-OLED_Display_128x64.jpg)]



###  Blink with any color you like: Variable Color LED

This Variable Color LED is consist of one 8mm RGB LED and 3 potentiometers. You can get any color you like through adjusting the 3 potentiometers and control LED on and off. Now, change the color of the eyes of Winnie The Pooh as you like and make them blink like the stars~!



[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Variable_Color_LED.jpg)]



###  Record and replay: Sound Recorder

The sound recorder can be used to record voice and then replay them. It is possible for your toy to remind you kids in your voice:" hi,sweet,it is time to go bed"

<font color="blue">But sorry to tell you that the chip of Sound Recorder has ceased production, so we do NOT put it into Toy Kit's packlist. Seeed RandD Team is trying to find the other chip which can get Sound Recorder back to work, We won't let you wait too long!</font>



![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Sound_Recorder.jpg)]


###  Make your own music: Piezo_Buzzer_Grove

This Piezo_Buzzer can be connected to an analog pulse-width modulation output to generate various tones and effects.



[![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Piezo_Buzzer_Twig.jpg)](http://garden.seeedstudio.com/index.php?title=GROVE_-_Starter_Kit_V1.0b#Piezo_Buzzer "GROVE_-_Starter_Kit_V1.0b#Piezo_Buzzer")



##  Usage

The Toy kit work with the [Arduino](https://www.seeedstudio.com/depot/arduino-uno-p-694.html?cPath=132_133) or [Seeeduino](https://www.seeedstudio.com/depot/arduino-uno-p-694.html?cPath=132_133)board,and the Grove Shield series

Here are some Application Examples designed by Seeed customers.

###  1. Automated train station by Adrian

This project is about an automated railway system. The basic idea is to use the Grove Toy Kit to determine the time, to play the corresponding sound when a train reaches the station, and to know when the train reaches the crossover.

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Toy_Kit_Project_1.jpg)

If you want to go for this project, you may still need to have:

*   a Seeeduino or Arduino

*   a Grove - RTC

**Resources:**

*   A detailed step-by-step instruction [here](https://www.seeedstudio.com/document/Automated_train_station.ppt).

*   More pictures [here](https://picasaweb.google.com/111286480499748956103/SeeedstudioProject?authuser=0&amp;feat=directlink)

###  2. Barking Desk Guard Dog by Wendell

The Barking Desk Guard Dog will bark at anyone who will try to move the object in front of it. You can place it on your desktop when you are not around and when someone comes near your place (maybe in your work) then it will alert all your colleagues when that someone tries to take something from your desk.

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Barking_Desk_Guard_Dog.png)

If you want to go for this project, you may still need to have:

*   a Seeeduino or Arduino

*   a Grove - I2C Touch Sensor

**Resources:**

*   A detailed step-by-step instruction [PDF](https://www.seeedstudio.com/document/Barking_Desk_Guard_Dog.pdf).

*   A demo [video](https://www.youtube.com/watch?v=8BghIeelvtY) on YouTube.

###  3. IKEA Robot lamp by Javier

This project is about modifying an IKEA lamp. The common product turns into a Robot Lamp and has more fun through adding sensors, lights, sound and movement into it.

[[Image:IKEA Robot Lamp.jpg}550px]]

If you want to go for this project, you may still need to have:

*   a Seeeduino or Arduino

**Resources:**

*   Check out the project page [here](http://arduinoarts.com/2011/09/the-sm-1-project-part-7-the-first-working-version-of-the-ikea-robot-lamp-with-arduino/).

*   A detailed step-by-step instruction [here](https://www.seeedstudio.com/blog/www.seeedstudio.com/document/seeedStudioAssemblyInstructions.docx).

*   Tutorial [videos](https://www.youtube.com/watch?v=hmSlk4zmhYo) on YouTube.

###  4. Beckoning cat hack by Severin (XinCheJian)

When walking through Shanghai, there is one thing you will see in many shops, restaurants and other places: the Maneki Neko, also known as the beckoning cat. Most of them have a mechanism, which lets one of their arms (usually the left one) move back and forth endlessly. This project basically is to modify its moving arm with Grove components.

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Beckoing_cat_hack.jpg)

If you want to go for this project, you may still need to have:

*   a Seeeduino or Arduino

**Resources: **

*   A detailed step-by-step instruction [here](http://wiki.xinchejian.com/docs/cat/).

*   A demo [video](https://www.youtube.com/watch?edit=vd&amp;v=9i7DidiFYts) on YouTube.

###  5. gRover Robotics Platform by Matthew

This project is to re-purpose a remote control car that you can easily find in a thrift store into an Arduino-controlled robot using Seeed Studio's Grove Toy kit.

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/GRover_Robotics_Platform.jpg)

If you want to go for this project, you may still need to have:

*   a Seeeduino or Arduino

*   a Grove - I2C Touch Sensor

*   a Battery Pack

*   a Grove - 80cm Infrared proximity sensor

*   a Grove - I2C Hub

*   a Grove - I2C Motor Driver

*   a Grove - Vibrator

**Resources:**

*   The detailed step-by-step instruction [PDF](https://www.seeedstudio.com/document/gRover.pdf).

*   More pictures [here](http://www.flickr.com/photos/matthewlange/sets/72157627614719221/with/6176558869/).

###  6. Eyeclop by Alex

The Eyeclop is a project that demonstrates the use of touch sensors to change the shape of the eye as well as blink an RGB LED, play sound melody, and vibrate itself. The Eyeclop is a sensitive one-eye Cyclop, and is shown on a monochrome OLED 128x64 pixel screen. The touch sensors, the RGB LED, and other electronic components are all part of the Grove Toy Kit that is created by Seeed Studio.

![](https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Eyeclop.png)

If you want to go for this project, you may still need to have:

*   a Seeeduino or Arduino

*   a Grove - I2C Touch Sensor

**Resources:**

*   A detailed step-by-step instruction [PDF](https://www.seeedstudio.com/document/Eyeclop%20howto.pdf).

*   A demo [video](https://www.youtube.com/watch?v=AjtvoA2FFAs) on YouTube.

##  Support

If you have questions or other better design ideas, you can go to our [forum](https://forum.seeedstudio.com)


##  See Also

*   [Grove - Starter Kit](https://www.seeedstudio.com/Grove-Starter-Kit-p-709.html)

*   [Grove - ADK Dash Kit](https://www.seeedstudio.com/Grove-ADK-Dash-Kit-p-929.html)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
