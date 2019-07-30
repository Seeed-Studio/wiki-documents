---
name: Grove Base Hat for Raspberry Pi
category: shield
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 103030275
tags:
---

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/main.jpg)

Today, the grove series of sensors, actuators, and displays have grown into a large family. More and more grove modules will join the whole Grove ecosystem in the future. We see the Grove helps makers, engineers, teachers, students and even artists to build, to make, to create...We always feel it is our responsibility to make the Grove module compatible with more platforms. Now we bring you the Grove Base Hat for Raspberry Pi and [Grove Base Hat for Raspberry Pi Zero](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html), in another word, we bring the Raspberry Pi the whole Grove System.

The Grove Base Hat for Raspberry Pi provide Digital/Analog/I2C/PWM/UART port to meet all your needs. With the help of build-in MCU, a 12-bit 8 channel ADC is also available for Raspberry Pi.

Frankly speaking, it's about 60 Grove modules support the Grove Base Hat for Raspberry Pi now. However, we will continue to add new compatible modules, the more you use, the more grove added.



<p style=":center"><a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features

- Support Raspberry Pi 2/3B/3B+/4/Zero
- build-in MCU
- 12-bit ADC
- Multi-type Grove port  



## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V|
|MCU|STM32|
|ADC|12-bit 8 channel|
|Grove Port|    6 Digital <br> 4 Analog <br> 3 I2C <br> 1 PWM  <br> 1UART|
|Raspberry pi communication bus|I2C|
|I2C Address|0x04|


!!!Attention
        The operating voltage is 3.3V, please do not input more than 3.3V, otherwise it may damage the Raspberry Pi.  Moreover, this hat can not work with 5V grove module via grove port, please use 3.3V compatible Grove module.



## Hardware Overview

### Pin Out

**Overview**

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/pin-out/overview.jpg)

        

**GPIO**

The same pin out as the raspberry pi.

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/pin-out/1.jpg)

**PWM(pulse-width modulation)**

The Grove PWM Port connect to GPIO/BCM pin12(PWM0) and GPIO/BCM pin13(PWM1), which is the hardware PWM pin of Raspberry Pi, in addition, you can use all the GPIO pin as the soft PWM pin.

!!!Note
        0- All the silkscreen layer pin number besides the Grove port is the BCM pin number. The difference between BCM pins and the physical pins please refer to [here](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)

        1- Compared with hardware PWM, the software PWM isn't so accurate and will have trouble at high frequencies.

        2- The GPIO/BCM pin18 is also marked as PWM0, actually the GPIO/BCM 12 and the GPIO/BCM 18 share the same PWM channel, so they can't set to different rate.

        3- The audio jack output also uses PWM 0 and PWM 1, so you can't have audio output on that socket and use the PWMs at the same time.


![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/pin-out/3.jpg)

**UART**

The Grove UART port connect to the GPIO14(UART0 TX) and GPIO15(UART0 RX). UART is commonly used on the Pi as a convenient way to control it over the GPIO, or access the kernel boot messages from the serial console (enabled by default).It can also be used as a way to interface an Arduino, bootloaded ATmega, ESP8266, etc with your Pi.

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/pin-out/2.jpg)


**Digital**

There are 6 digital Grove sockets in this board, normally the yellow wire(which connect to the top pin of the 4 pins Grove socket as) of Grove cable is the signal wire, so we name the digital Grove port **D5/D16/D18/D22/D24/D26**. 

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/pin-out/4.jpg)


**Analog**

As we know, there is no ADC in the Raspberry Pi, so it can not work with analog sensor directly. Now with the help of the build-in MCU STM32, the Grove base hat can work as an external 12-bit ADC, which means you can use analog sensor with your Raspberry Pi. Even more pleasing is that not one but four analog Grove sockets are available. 

The analog sensor inputs the analog voltage into the 12-bit ADC. After the ADC convert the analog data to digital data, it input the digital data to the Raspberry Pi through the I2C interface.

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/pin-out/5.jpg)


**I2C**

There are three I2C port available in this board, they all connect to the I2C pin of the raspberry directly. You can consider this part as an I2C hub. Most of seeed's new grove modules have I2C interface,  you may find those three port is extremely useful.

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/pin-out/7.jpg)


**SWD**

We use SWD port to burn the firmware to this hat. In addition, you can see 3 GPIO pins in this section, i.e., **pin 9/pin 10/pin 11**. Those three pins do not used by any Grove port, you are free to use them without worrying about pin conflicts.

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/pin-out/6.jpg)


**Grove Base Hat for Raspberry Pi Vs. GrovePi+**

| Parameter                   | [Grove Base Hat for Raspberry Pi](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](http://wiki.seeedstudio.com/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Working Voltage             | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Grove Ports                 | 6 Digital(3.3V)   4 Analog(3.3V)   3 I2C(3.3V)   1 PWM(3.3V)  1 RPISER(UART) connect to Raspberry Pi(3.3V)  1 SWD | 7 Digital(5V)  3 Analog(5V)  3 I2C(5V)  1 SERIAL: Connect to ATMEGA328P D0/1(5V)  1 RPISER: Connect to Raspberry Pi(3.3V)  1 ISP |
| Grove-Digital               | Connect to Raspberry Pi directly                                                                                  | Connect to ATMEGA328P digital pins and transfer to I2C signal, then through level converter to Raspberry Pi                      |
| Grove-Analog                | Connect to STM32F030F4P6(12bit ADC) and then transfer to I2C signal,route to Raspberry Pi directly                | Connect to ATMEGA328P analog pins(10bit ADC) and then transfer to I2C signal, then through level converter to Raspberry Pi       |
| Grove-I2C                   | Connect to Raspberry Pi directly                                                                                  | Connect through level converter to Raspberry Pi                                                                                  |
| Grove-PWM                   | Connect to Raspberry Pi directly                                                                                  | NA                                                                                                                               |
| RPISER                      | Connect to Raspberry Pi directly                                                                                  | Connect to Raspberry Pi directly                                                                                                 |
| SERIAL                      | NA                                                                                                                | Connect to ATMEGA328P digital pins D0/D1 and transfer to I2C signal, then through level converter to Raspberry Pi                |
| SWD                         | Burn firmware to STM32F030F4P6                                                                                    | NA                                                                                                                               |
| ISP                         | NA                                                                                                                | Burn firmware to ATMEGA328P                                                                                                      |
| Raspberry Pi Connector Pins | 40                                                                                                                | 26                                                                                                                               |


## Getting Started

### Hardware

#### Materials required

-- [Raspberry Pi x1](https://www.seeedstudio.com/Raspberry-Pi-3-Model--p-3037.html)  
-- Grove Base Hat for Raspberry Pi x1  
-- Grove module


- **Step 1.** Plug the Grove Base Hat for Raspberry Pi into the Raspberry Pi.

- **Step 2.** Plug the Grove module into the corresponding Grove port.

- **Step 3.** Power the Raspberry Pi with micro-usb cable.


!!!Warning
        We recommend that you power up the Raspberry Pis after all the hardware connections are complete. Please do not hot plug the sensor module, otherwise the Raspberry Pi may crash.



### Software

In this section we will introduce how to install the **seeed grove.py** library and how to use I2C, PWM, Digital and analog port of the Grove Base Hat for Raspberry Pi.



!!!Tip
        If you do not know how to use a raspberry pi, please check [here](https://www.raspberrypi.org/documentation/) before start.

#### Archtecture

To operate grove sensors, the grove.py depends many hardware interface libraries such as mraa/smbus2/rpi.gpi/rpi_ws281x.

<p style=":center"><img src="https://github.com/Seeed-Studio/grove.py/raw/master/images/grove-py-arch.png" /></p>


#### Installation

**Online one-click installation** 

One-click installation, quick start, what ever you call, with the single command below, we can install/update all dependencies and latest grove.py.

```python
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

!!!Success
        if everything goes well, you will see the following notice.

        ```
        Successfully installed grove.py-0.5
        #######################################################
        Lastest Grove.py from github install complete   !!!!!
        #######################################################
        ```


**Step by step installation**

Besides the one-click installation, you can also install all the dependencies and latest grove.py step by step. Please refer to our github page for more information.

[Step by step installation](https://github.com/Seeed-Studio/grove.py#installation)


You can check the source file by cloning the grove.py library.

```
git clone https://github.com/Seeed-Studio/grove.py
```


#### Usage


Now you can use the Grove Base Hat for Raspberry Pi with dozens Grove modules, tap the command **grove_** and press the ++tab++ key to check the supported Grove list.


```
pi@raspberrypi:~$ grove_
grove_3_axis_compass_bmm150        grove_i2c_color_sensor_v2          grove_mini_pir_motion_sensor       grove_rotary_angle_sensor          grove_temperature_sensor
grove_4_digit_display              grove_i2c_motor_driver             grove_moisture_sensor              grove_ryb_led_button               grove_thumb_joystick
grove_air_quality_sensor_v1_3      grove_lcd_1.2inches                grove_oled_display_128x64          grove_servo                        grove_tilt_switch
grove_button                       grove_led                          grove_piezo_vibration_sensor       grove_slide_potentiometer          grove_touch_sensor
grove_collision_sensor             grove_light_sensor_v1_2            grove_pwm_buzzer                   grove_sound_sensor                 grove_ultrasonic_ranger
grove_gesture_sensor               grove_loudness_sensor              grove_recorder_v3_0                grove_switch                       grove_water_sensor
grove_high_accuracy_temperature    grove_mech_keycap                  grove_relay                        grove_temperature_humidity_sensor  
pi@raspberrypi:~$ grove_

```

Then we will show you how to use them according to port type.


**PWM Port**

We will take the [Grove - buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) for example to introduce the PWM port.


*Hardware connection diagram*

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/connect1.jpg)


Tap the following command `sudo grove_pwm_buzzer` in the command line interface.

```python
pi@raspberrypi:~$ sudo grove_pwm_buzzer
Insert Grove-Buzzer to Grove-Base-Hat slot PWM[12 13 VCC GND]

3800
3400
3000
2900
2550
2270
2000
exiting application
```

The buzzer will ring a few times and then stop, the program will automatically exit.


**Digital Port**

We will take the [Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) for example to introduce the Digital port.


*Hardware connection diagram*

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/connect2.jpg)

Tap the following command `grove_ultrasonic_ranger 5 6` in the command line interface.

```python
pi@raspberrypi:~$ grove_ultrasonic_ranger 5 6
Detecting distance...
6.979909436456088 cm
7.966469074117726 cm
12.451204760321255 cm
15.184797089675378 cm
17.429220265355603 cm
18.73230112010035 cm
20.717752390894397 cm
19.83807004731277 cm
17.3059003106479 cm

^CTraceback (most recent call last):
  File "/usr/local/bin/grove_ultrasonic_ranger", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_ultrasonic_ranger')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt

```

When you change the distance between the Grove - Ultrasonic Ranger and the target object, the measurment value will change accordingly.
Press ++ctrl+c++ to quit.

!!!Attention
        For most grove module, you need to add the pin number parameter, like `grove_ultrasonic_ranger 5 6`, **5** and **6** are the GPIO/BCM pin. However, you may have noticed that in the first example `grove_pwm_buzzer`, we didn't add a parameter after the command. This is because the PWM port and I2C port do not require pin number parameters. You can find the pin number silkscreen just besides the Grove sokect.


**Analog Port**

We will take the [Grove - Air quality sensor v1.3](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html) for example to introduce the Analog port.

*Hardware connection diagram*

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/connect3.jpg)

Tap the following command `grove_air_quality_sensor_v1_3 0 1` in the command line interface.

```python
pi@raspberrypi:~$ grove_air_quality_sensor_v1_3 0 1
Detecting ...
62, Air Quality OK.
63, Air Quality OK.
61, Air Quality OK.
61, Air Quality OK.
59, Air Quality OK.
62, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
59, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.
60, Air Quality OK.

57, Air Quality OK.
^CTraceback (most recent call last):
  File "/usr/local/bin/grove_air_quality_sensor_v1_3", line 11, in <module>
    load_entry_point('grove.py==0.5', 'console_scripts', 'grove_air_quality_sensor_v1_3')()
  File "/usr/local/lib/python3.5/dist-packages/grove/grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt

```

You can use this sensor to detect the air quality. Press ++ctrl+c++ to quit.


!!!Notice
        You may have noticed that for the analog port, the silkscreen pin number is something like **A1, A0**, however in the command we use parameter **0** and **1**, just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.


**I2C**

We will take the [Grove - OLED Display 128x64](https://www.seeedstudio.com/Grove-OLED-Display-0-9-p-781.html) for example to introduce the I2C port.

*Hardware connection diagram*

![](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/connect4.jpg)

Tap the following command `grove_oled_display_128x64` in the command line interface.

```
pi@raspberrypi:~$ grove_oled_display_128x64
pi@raspberrypi:~$ 
```

It seems nothing happened, however you can find the most famous sentence in the cyber world if you check your oled.😄


!!!Note
        If you use the I2C tool to scan the I2C address of the grove module, you may find two or more address. 0x04 is the adrress of the *Grove Base Hat for Raspberry Pi*.



## Resources

- **[Zip]** [Grove Base Hat for Raspberry Pi Eagle Files](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip)

- **[Zip]** [Seeed Grove.py Library](https://github.com/Seeed-Studio/grove.py/archive/master.zip)

- **[Zip]** [Firmware](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/res/grove_rpi_base_hat-v0.2-20180905-02.zip)

- **[PDF]** [STM32 Datasheet](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/res/STM32.pdf)



## Project

This is the introduction Video of this product.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0dFQWwXOOBI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)



<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>