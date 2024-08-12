---
description: Grove Base Hat for Raspberry Pi
title: Grove Base Hat for Raspberry Pi
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_Hat_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg)

Today, the grove series of sensors, actuators, and displays have grown into a large family. More and more grove modules will join the whole Grove ecosystem in the future. We see the Grove helps makers, engineers, teachers, students and even artists to build, to make, to create...We always feel it is our responsibility to make the Grove module compatible with more platforms. Now we bring you the Grove Base Hat for Raspberry Pi and [Grove Base Hat for Ras pberry Pi Zero](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html), in another word, we bring the Raspberry Pi the whole Grove System.

The Grove Base Hat for Raspberry Pi provide Digital/Analog/I2C/PWM/UART port to meet all your needs. With the help of build-in MCU, a 12-bit 8 channel ADC is also available for Raspberry Pi.

Frankly speaking, it's about 60 Grove modules support the Grove Base Hat for Raspberry Pi now. However, we will continue to add new compatible modules, the more you use, the more grove added.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Features

- Support Raspberry Pi 2/3B/3B+/4/Zero
- build-in MCU
- 12-bit ADC
- Multi-type Grove port  

## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V|
|MCU|STM32/MM32|
|ADC|12-bit 8 channel|
|Grove Port|    6 Digital <br />4 Analog <br /> 3 I2C <br /> 1 PWM  <br /> 1UART|
|Raspberry pi communication bus|I2C|
|I2C Address|0x04/0x08|

:::caution
The operating voltage is 3.3V, please do not input more than 3.3V, otherwise it may damage the Raspberry Pi.  Moreover, this hat can not work with 5V grove module via grove port, please use 3.3V compatible Grove module.
:::

## Hardware Overview

### Pin Out

**Overview**

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/overview.jpg)

**GPIO**

The same pin out as the raspberry pi.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/1.jpg)

**PWM(pulse-width modulation)**

The Grove PWM Port connect to GPIO/BCM pin12(PWM0) and GPIO/BCM pin13(PWM1), which is the hardware PWM pin of Raspberry Pi, in addition, you can use all the GPIO pin as the soft PWM pin.

:::note
0- All the silkscreen layer pin number besides the Grove port is the BCM pin number. The difference between BCM pins and the physical pins please refer to [here](https://www.raspberrypi.org/forums/viewtopic.php?p=726435)

1- Compared with hardware PWM, the software PWM isn't so accurate and will have trouble at high frequencies.

2- The GPIO/BCM pin18 is also marked as PWM0, actually the GPIO/BCM 12 and the GPIO/BCM 18 share the same PWM channel, so they can't set to different rate.

3- The audio jack output also uses PWM 0 and PWM 1, so you can't have audio output on that socket and use the PWMs at the same time.
:::

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/3.jpg)

**UART**

The Grove UART port connect to the GPIO14(UART0 TX) and GPIO15(UART0 RX). UART is commonly used on the Pi as a convenient way to control it over the GPIO, or access the kernel boot messages from the serial console (enabled by default).It can also be used as a way to interface an Arduino, bootloaded ATmega, ESP8266, etc with your Pi.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/2.jpg)

**Digital**

There are 6 digital Grove sockets in this board, normally the yellow wire(which connect to the top pin of the 4 pins Grove socket as) of Grove cable is the signal wire, so we name the digital Grove port **D5/D16/D18/D22/D24/D26**.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/4.jpg)

**Analog**

As we know, there is no ADC in the Raspberry Pi, so it can not work with analog sensor directly. Now with the help of the build-in MCU STM32, the Grove base hat can work as an external 12-bit ADC, which means you can use analog sensor with your Raspberry Pi. Even more pleasing is that not one but four analog Grove sockets are available.

The analog sensor inputs the analog voltage into the 12-bit ADC. After the ADC convert the analog data to digital data, it input the digital data to the Raspberry Pi through the I2C interface.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/5.jpg)

**I2C**

There are three I2C port available in this board, they all connect to the I2C pin of the raspberry directly. You can consider this part as an I2C hub. Most of seeed's new grove modules have I2C interface,  you may find those three port is extremely useful.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/7.jpg)

**SWD**

We use SWD port to burn the firmware to this hat. In addition, you can see 3 GPIO pins in this section, i.e., **pin 9/pin 10/pin 11**. Those three pins do not used by any Grove port, you are free to use them without worrying about pin conflicts.

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/pin-out/6.jpg)

**Grove Base Hat for Raspberry Pi Vs. GrovePi+**

| Parameter                   | [Grove Base Hat for Raspberry Pi](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/)                   | [GrovePi+](https://wiki.seeedstudio.com/GrovePi_Plus/)                                                                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Working Voltage             | 3.3V                                                                                                              | 5V                                                                                                                               |
| MCU                         | STM32F030F4P6                                                                                                     | ATMEGA328P                                                                                                                       |
| Grove Ports                 | 6 x Digital(3.3V); 4 x Analog(3.3V) ; 3 x I2C(3.3V); 1 x PWM(3.3V) ; 1 x RPISER(UART) connect to Raspberry Pi(3.3V) ; 1 x SWD | 7 x Digital(5V); 3 x Analog(5V) ;3 x I2C(5V) ;1 x SERIAL: Connect to ATMEGA328P D0/1(5V) ; 1 x RPISER: Connect to Raspberry Pi(3.3V) ;1 x ISP |
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

:::caution
We recommend that you power up the Raspberry Pis after all the hardware connections are complete. Please do not hot plug the sensor module, otherwise the Raspberry Pi may crash.
:::

### Software

:::caution
Due to chip shortage, we have replaced STM32 with MM32 in the latest version of the product, and the I2C address of the corresponding product has been changed from 0x04 to 0x08 in the old version, please change the I2C address in adc.py from 0x04 to 0x08 when using the library file provided by seed for development.
:::

In this section we will introduce how to install the **seeed grove.py** library and how to use I2C, PWM, Digital and analog port of the Grove Base Hat for Raspberry Pi.

:::tip
If you do not know how to use a raspberry pi, please check [here](https://www.raspberrypi.org/documentation/) before start.
:::

#### Archtecture

To operate grove sensors, the grove.py depends many hardware interface libraries such as mraa/smbus2/rpi.gpi/rpi_ws281x.

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/grove.py/raw/master/images/grove-py-arch.png" /></p>

#### Installation

**Step by step installation**

Besides the one-click installation, you can also install all the dependencies and latest grove.py step by step. Please refer to [grove.py github repository](https://github.com/Seeed-Studio/grove.py).

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**. The following instruction is working on Bookworm OS.
:::

For beginner or library user only, please install with online method.
For developer or advanced user, please install [dependencies](https://github.com/Seeed-Studio/grove.py/blob/master/doc/INSTALL.md#install-dependencies) and then install grove.py with [source code](https://github.com/Seeed-Studio/grove.py?tab=readme-ov-file#install-grovepy).
##### Install Dependencies
Add repository
```linux
# RPi
echo "deb https://seeed-studio.github.io/pi_repo/ stretch main" | sudo tee /etc/apt/sources.list.d/seeed.list
```
Add public GPG key

```shell
curl https://seeed-studio.github.io/pi_repo/public.key | sudo apt-key add -
# or
# sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BB8F40F3
```
Enable I2C interface
```linux
sudo raspi-config
```

- Select interfacingg Options>I2C>Yes>Ok>Finish
- Enable I2C interface

In the lastest version of Python3, it is recommended to use *virtualenv* for isolated package management.
```linux
sudo apt install python3-virtualenv
virtualenv -p python3 env
source env/bin/activate
```

Install library raspberry-gpio-python for RPi
```linux
pip install rpi-gpio
```
Install library rpi_ws281x for RPi
```linux
# python3
sudo pip3 install rpi_ws281x
# env
pip install rpi_ws281x
```


##### Online install
To install into a virtual environment, first active your virtualenv and type the following command:
```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | bash -s -- --user-local --bypass-gui-installation
```
If you want to install into the system, you can type the following command:
```linux
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

##### Install grove.py locally

```linux
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python3 
sudo pip3 install .
```
```linux
# virutalenv for Python3 (If the installation fails when using pip3)
sudo apt install python3-virtualenv
virtualenv -p python3 env
source env/bin/activate
pip3 install .
```

#### Usage

Now you can use the Grove Base Hat for Raspberry Pi with dozens Grove modules, tap the command **grove_** and press the ++tab++ key to check [the supported Grove list](https://github.com/Seeed-Studio/grove.py/tree/master/doc).

```linux
(env) pi@raspberrypi:~ $ grove_
grove_12_key_cap_i2c_touch_mpr121
grove_16x2_lcd
grove_1wire_thermocouple_amplifier_max31850
grove_3_axis_accelerometer_adxl372
grove_3_axis_compass_bmm150
grove_3_axis_digital_accelerometer
grove_4_digit_display
grove_6_axis_accel_gyro_bmi088
grove_air_quality_sensor_v1_3
grove_button
grove_cap_touch_slider_cy8c
grove_collision_sensor
grove_current_sensor
grove_gesture_sensor
grove_gpio
grove_high_accuracy_temperature
grove_i2c_color_sensor_v2
grove_i2c_motor_driver
grove_i2c_thermocouple_amplifier_mcp9600
grove_imu_9dof_icm20600_ak09918
grove_lcd_1.2inches
grove_led
grove_light_sensor_v1_2
(env) pi@raspberrypi:~ $ grove_
grove_12_key_cap_i2c_touch_mpr121
grove_16x2_lcd
grove_1wire_thermocouple_amplifier_max31850
grove_3_axis_accelerometer_adxl372
grove_3_axis_compass_bmm150
grove_3_axis_digital_accelerometer
grove_4_digit_display
grove_6_axis_accel_gyro_bmi088
grove_air_quality_sensor_v1_3
grove_button
grove_cap_touch_slider_cy8c
grove_collision_sensor
grove_current_sensor
grove_gesture_sensor
grove_gpio
grove_high_accuracy_temperature
grove_i2c_color_sensor_v2
grove_i2c_motor_driver
grove_i2c_thermocouple_amplifier_mcp9600
grove_imu_9dof_icm20600_ak09918
grove_lcd_1.2inches
grove_led
grove_light_sensor_v1_2
grove_loudness_sensor
grove_mech_keycap
grove_mini_pir_motion_sensor
grove_moisture_sensor
grove_multi_switch
grove_multi_switch_poll
grove_oled_display_128x64
grove_optical_rotary_encoder
grove_piezo_vibration_sensor
grove_pwm_buzzer
grove_recorder_v3_0
grove_relay
grove_rotary_angle_sensor
grove_round_force_sensor
grove_ryb_led_button
grove_servo
grove_slide_potentiometer
grove_sound_sensor
grove_step_counter_bma456
grove_switch
grove_temperature_humidity_bme680
grove_temperature_humidity_sht31
grove_temperature_sensor
grove_thumb_joystick
grove_tilt_switch
grove_time_of_flight_distance
grove_touch_sensor
grove_ultrasonic_ranger
grove_uv_sensor
grove_water_sensor
grove_ws2813_rgb_led_strip
```

Then we will show you how to use them according to port type.


**Digital Port**

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

We will take the [Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) for example to introduce the Digital port.

*Hardware connection diagram*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

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

:::caution
For most grove module, you need to add the pin number parameter, like `grove_ultrasonic_ranger 5 6`, **5** and **6** are the GPIO/BCM pin. However, you may have noticed that in the first example `grove_pwm_buzzer`, we didn't add a parameter after the command. This is because the PWM port and I2C port do not require pin number parameters. You can find the pin number silkscreen just besides the Grove sokect.
:::

**Analog Port**

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

We will take the [Grove - Air quality sensor v1.3](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html) for example to introduce the Analog port.

*Hardware connection diagram*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

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

:::note
You may have noticed that for the analog port, the silkscreen pin number is something like **A1, A0**, however in the command we use parameter **0** and **1**, just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.
:::

**I2C**

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

We will take the [Grove - OLED Display 128x64](https://www.seeedstudio.com/Grove-OLED-Display-0-9-p-781.html) for example to introduce the I2C port.

*Hardware connection diagram*

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg)

Tap the following command `grove_oled_display_128x64` in the command line interface.

```
(env)pi@raspberrypi:~$ grove_oled_display_128x64
```

It seems nothing happened, however you can find the most famous sentence in the cyber world if you check your oled.😄

:::note
If you use the I2C tool to scan the I2C address of the grove module, you may find two or more address. 0x04 is the adrress of the *Grove Base Hat for Raspberry Pi*.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

:::noteChange Note:

Because ST32 series chips are out of stock globally, prices have increased several times and there is no clear delivery date. We have no choice but to switch to the MM32 chip. The specific replacement models are as follows: STM32F030F4P6TR is replaced by MM32F031F6P6. After the chip is replaced, the product functions, features, usage methods and codes remain unchanged. It should be noted that the firmware version has changed, and the factory firmware has been adjusted according to different chips. If you need to re-burn the firmware, please download the firmware corresponding to the chip.
:::

## Resources

- **[Zip]** [Grove Base Hat for Raspberry Pi Eagle Files](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/Raspberry%20Pi%20Grove%20Base%20HAT%20v1.0.zip)

- **[Zip]** [Seeed Grove.py Library](https://github.com/Seeed-Studio/grove.py/archive/master.zip)

- **[Zip]** [STM32F030F4P6TR-Firmware](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/grove_rpi_base_hat-v0.2-20180905-02.zip)

- **[Zip]** [MM32F031F6P6-Firmware](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_firmware.zip)

- **[PDF]** [STM32 Datasheet](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6_Datasheet.pdf](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/res/MM32F031F6P6_Datasheet.pdf)

## Project

This is the introduction Video of this product.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0dFQWwXOOBI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

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
