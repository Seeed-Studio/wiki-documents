---
name: GrovePi+
category: Raspberry Pi
bzurl: https://www.seeedstudio.com/GrovePi%2B-p-2241.html
oldwikiname:  GrovePi+
prodimagename:  GrovePi_Wiki_1.JPG
surveyurl: https://www.research.net/r/GrovePi_plus
sku:     103010002
---
![](https://github.com/SeeedDocument/GrovePi_Plus/raw/master/img/110060049%2010_02.jpg)

[GrovePi](http://www.dexterindustries.com/GrovePi/) is an add-on board that brings [Grove Sensors](/Grove_System "Grove System") to the [Raspberry Pi](http://www.seeedstudio.com/depot/s/Raspberry%2520Pi.html?search_in_description=0). As a new version of [GrovePi](http://www.seeedstudio.com/depot/GrovePi-p-1672.html).
It adds support for the newly RaspberryPi Model B+ and Model A+.
There are three mounting holes can perfect match all version of Raspberry Pi. Camera cable outlet hole.
It also improves the voltage level converting sub circuits.


<p style=":center"><a href="https://www.seeedstudio.com/GrovePi-p-2241.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


##   Features
---
*   7 digital Ports

*   3 analoge Ports

*   3 I2C ports

*   1 Serial port connect to GrovePi

*   1 Serial port connect to Raspberry Pi

*   Grove header Vcc output Voltage: 5Vdc

##   Get Started
---

**<big>Welcome to the Quickstart Guide to the GrovePi+.</big>**

If you want to know more about how it works, you can find all the design files in the designer's [Github Repository](https://github.com/DexterInd/GrovePi).


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





###   Connect the GrovePi to the Raspberry Pi

First, mount your GrovePi on the Raspberry Pi.  The GrovePi slides over top of the Raspberry Pi as shown in the picture below.

![](https://github.com/SeeedDocument/GrovePi_Plus/raw/master/img/GrovePiPlus_wiki_3.jpg)

![](https://github.com/SeeedDocument/GrovePi_Plus/raw/master/img/GrovePi_Wiki_1.JPG)


Ensure that the pins are properly aligned when stacking the GrovePi.


###   Setup the Software on the Raspberry Pi

Next we will install the software on the Raspberry Pi. There are two options for installation:

*   You can use our BrickPi Image.

*   Use your own image.  If you already have your own flavor of linux running on the Raspberry Pi, you can use our bash script to setup for the GrovePi.

**Using the BrickPi Image**

*   Download the Brick Pi Image and install the image on your SD card. [Here is the link to the BrickPi Page with steps to configure the SD card](http://www.dexterindustries.com/BrickPi/getting-started/pi-prep/).  You will need a minimum of 4GB SD Card for this installation.

*   Clone the Github repository at an appropriate location in Raspbian

```
git clone https://github.com/DexterInd/GrovePi.git
```

*   Run the bash script in the Scripts folder to configure the Raspbian. [Here is the tutorial for setting up with the Script.](http://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)

*   Restart your Raspberry Pi.

**Configuring your own image**

*   Clone the Github repository at an appropriate location

```
git clone https://github.com/DexterInd/GrovePi.git
```

*   Run the bash script in the Scripts folder to configure the Raspbian. [here](http://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) is the tutorial for setting up with the Script.

*   Restart the Raspberry Pi and start using the Grove Pi.

###   Testing the GrovePi

Once you have your Raspberry Pi configured to work with the GrovePi, it’s time to see it in action.

We have developed three simple projects to illustrate how the GrovePi works.

##   Supported Products
---
###   Grove List

*   [1. Grove - Button ](/Grove-Button#With_Raspberry_Pi)

*   [2. Light Sensor](/Grove-Light_Sensor#With_Raspberry_Pi)

*   [3. Buzzer](/Grove-Buzzer#With_Raspberry_Pi)

*   [4. Sound Sensor ](/Grove-Sound_Sensor#With_Raspberry_Pi)

*   [5. Grove - Red LED ](/Grove-Red_LED#With_Raspberry_Pi)

*   [6. LCD RGB Backlight ](/Grove-LCD_RGB_Backlight#With_Raspberry_Pi)

*   [7. Rotary Angle Sensor ](/Grove-Rotary_Angle_Sensor#With_Raspberry_Pi)

*   [8. Grove-Temperature_and_Humidity_Sensor_Pro](/Grove-Temperature_and_Humidity_Sensor_Pro/#With_Raspberry_Pi)

*   [9. Ultrasonic Ranger Sensor](/Grove-Ultrasonic_Ranger#With_Raspberry_Pi)

*   [10. Relay](/Grove-Relay#With_Raspberry_Pi)


##   Resources
---
-   **[Eagle]** [GrovePi_Plus V3.0 eagle file](https://github.com/SeeedDocument/GrovePi_Plus/raw/master/res/GrovePi%2BEagle%20FIle.zip)
-   **[PDF]** [GrovePi_Plus V3.0 schematics pdf file](https://github.com/SeeedDocument/GrovePi_Plus/raw/master/res/GrovePi%2B%20v3.0%20Sch.pdf)
-   **[PDF]** [GrovePi_Plus V3.0 PCB pdf file](https://github.com/SeeedDocument/GrovePi_Plus/raw/master/res/GrovePi%2B%20v3.0%20PCB.pdf)
-   **[Document]** [Setting_Up_Software_for_GrovePi](https://github.com/SeeedDocument/GrovePi_Plus/raw/master/res/Setting_Up_Software_for_GrovePi.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>