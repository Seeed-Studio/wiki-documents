---
name:  Seeeduino v4.0‏‎
category: Arduino
bzurl:
oldwikiname: Seeeduino_v4.0‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Seeeduino_v4-0
sku:
tags:

---

![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/ARD128D2P_1_02.jpg)

The Seeeduino v4.0 is an ATMEGA328 Microcontroller development board. The ATMEGA328P-MU is a high performance, low power AVR 8-Bit Microcontroller. The Seeeduino v4.0 has 14 digital input/output pins (6 of which can be used as PWM outputs) and 6 analog pins. The board also features an ATMEGA16U2 microcontroller which acts as a UART-to-USB converter chip which means that the board can basically work like an FTDI chip.

The Seeeduino v4.0 inherits all of Arduino Duemilanove's and Uno's features but also adds some of its own. This board is compatible to Duemilanove's and Uno's pin layout, and the Duemilanove's screw holes and board dimensions.  

For a detailed explanation and overview of all the features see the section in this WiKi titled [Board Interface, Features, and Components](https://seeeddoc.github.io/Seeeduino_v4.0/#Board_Interface.2C_Features.2C_and_Components).

##   Board Interface, Features, and Components

The Seeeduino board offers a variety of features, some of which are not found in other duino boards (e.g. 5V or 3.3V logic, extra header pads, direct USB-to-UART connectors). See below for a detailed description of the board's interface and its unique features.

![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4_0_board_sections.png)

###   1. J2 Pads

Connected to the ATMEGA16U2's (U5 chip) pins PB4, PB5, PB6, and PB7 pins.

###   2. LEDs L, TX, RX

The "L" LED is connected to digital pin 13, it can be used a "status" LED in your projects. The TX and RX LEDs work automatically, they let you know when the board is sending or receiving information respectively.

###   3. Micro USB Port

Port used to connect the board to your PC for programming. Micro USB is the ubiquitous version of USB, found in most Android phones, and other devices. You probably have dozens of these cables laying around your house.

###   4. SW2 Slide Switch (5V 3V3)

Slide switch used to change the logic level and power output of the board to either 5V or 3.3V. Nowadays many new and great sensors are being develop to work with 3.3V, with other duino boards you would need to place a logic level converter between the board and these sensor(s), with the Seeeduino V4.0 board all you have to do is slide the switch!

###   5. DC Power Jack

The DC power jack allows your Seeeduino board to be powered from a wall adapter so that you can supply more power to your project if needed, for example when using DC motors or other high power devices. The DC input can be 7V-12V.

###   6. U5 ICSP

ICSP and SPI port for the ATMEGA16U2 chip.

###   7. U5

ATMEGA16U2 chip. This chip is charge of the USB to UART connection which is used to program the ATMEGA328P-MU (U1) and can also use the FTDI-like port.

###   8. SW1 Button (Reset)

This button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield placed on top. This isn't the case in other duino boards where the button is placed on top making it hard to access.

###   9. Extra Header Pads (Digital)

Sometimes it is very convenient to connect a sensor/device to your board directly instead of going through a breadboard, or perhaps you want to solder the sensor directly to the board once you've completed your project, or maybe you want to monitor the output of the pins while they're been used by other devices. In any case we have added these extra pads to help you along the way.

###   10. U1

The ATmega328P-MU chip, this is the brain of the board, where the code you write goes to be executed.

###   11. Extra Header Pads (Power and Analog)

Just like the Extra Header Digital Pads, these extra connections are something we've personally come to realize people need in their projects, specially the power connections if you want to power more than one sensor/device without the use of a breadboard.

###   12. UART-to-USB (FTDI) Pads/Port

This is the output/input of the UART-to-USB function of the ATMEGA16U2 (U5) chip. You can use this port to communicate directly with devices that require a UART to serial connection, it is great for quick testing these devices without writing any code. This port makes the Seeeduino board work essentially like an FTDI chip if needed.

The output voltage of VCC will be either 5V or 3.3V, whatever you have selected using SW2.

###   13. U1 ICSP

This is the ICSP connection for the ATmega328P-MU, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware (e.g. shields) that may use this connector. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno.

###   14. Grove Connectors

[Our depot](http://www.seeedstudio.com/depot/) has a variety of sensors/devices that can make use of this I2C or UART connection. In addition we sell independent Grove connectors to help you make our own sensor connections. The I2C Grove connector is also connected to analog pins 4 and 5 for SDA and SCL respectively if you would like to use those pins instead. The UART Grove connector is connected to digital pins 0 and 1 for RX and TX respectively.

###   PWM Pins

Digital pins 3, 5, 6, 8, 9, and 10 can be used for pulse width modulation (PWM).

##  Specification

*   Microcontroller: ATmega328P-MU

*   Operating Voltage: 5V or 3.3V(choice by slide switch)
*   Digital I/O Pins:14

*   PWM Channels:6

*   Analog Input Channels:6

*   DC Jack Input:7v-12v

*   DC Current per I/O Pin: 40 mA

*   Flash Memory: 32 KB (ATmega328P-MU)

*   RAM: 2 KB (ATmega328P-MU)

*   EEPROM:1 KB (ATmega328P-MU)

*   Clock Speed:16 MHz

##   Driver Installation  

###   Automatic

The Arduino/Seeeduino drivers are included with the [Arduino Software](http://arduino.cc/en/main/software).  In Windows, once the Arduino Software is installed, plug in your Seeeduino board to your PC's USB port and the driver installation will begin automatically as shown in the screenshot below:

[](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4_driver_installation_first_window.png)

Seeeduino V4.0 driver installation window as it appears in Windows.

After a couple of minutes (2-5), the driver should complete its installation and you will this window:

![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4_driver_installation_final_window.png)

Seeeduino V4 driver installation complete window as it appears in Windows.

At this point the Seeeduino V4.0 is ready to use.

###   Manual

In Windows, if the automatic driver installation fails you can install the drivers manually, they are located in the Arduino Software folder, to do so follow these steps:

1.  Open the "Device Manager" window by searching for it, and clicking "Device Manager" as shown in the animated image below. Alternatively, if this does not work for you, you may right click "My Computer"-&gt;Manage-&gt;Device Manager.
<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:428px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4_how_to_open_device_manager_window.gif) <div class="thumbcaption">How to open the device manager window in Windows.</div></div></div></div>

2.  In the "Device Manager" window, under "Ports (COM&amp;LPT)" or "Other Devices" look for "USB Serial Port", this is the Seeeduino board but hasn't been recognized by Windows yet. Right click and select "Update Driver Software..."
<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:452px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Driver1.jpg) <div class="thumbcaption"></div></div></div></div>

3.  Next, choose the "Browse my computer for Driver Software" option.
<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:452px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Driver2.jpg) <div class="thumbcaption"></div></div></div></div>

4.  Finally, find and select the folder named "Drivers", located in the folder of the Arduino Software download.
<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:452px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Updata_Driver_Software_for_Seeeduino_v4.0.jpg) <div class="thumbcaption"></div></div></div></div>

5.  If the driver was installed successfully you should see the dialog box below.
<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:452px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Driver4.jpg) <div class="thumbcaption"></div></div></div></div>

6.  In the "Device Manager" window the device you right clicked on should now display "Arduino Uno (COMXX)" or "USB Serial Port(COMXX)" as shown below.
<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:452px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Driver5.jpg) <div class="thumbcaption"></div></div></div></div>

7.  And when you open the Arduino IDE the same COM port will also be available. Remember to close and open the Arduino IDE if it was opened during the driver installation or the Serial port will not be visible.
<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:452px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Driver6.jpg) <div class="thumbcaption"></div></div></div></div>

##   Examples/Applications

###   Example 1: Your First Arduino/Seeeduino Program (LED Blink)

As described in the "Board Interface, Features, and Components" section of this WiKi, the Seeeduino board has an on-board LED connected to pin 13. In this example we'll show you how to blink that LED. Blinking an LED is the simplest program one can write to get acquainted with a board's hardware, and software.

To blink the LED in your Seeeduino board, follow the steps in the animated image below:

<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:902px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4_blink_led_program_step_by_step.gif) <div class="thumbcaption">How to blink the LED of your Seeeduino v4.0 board.</div></div></div></div>

Or if you prefer we have listed and described each of the steps:

1.  Open the Arduino IDE
2.  Select the Seeeduino board by going to Tools-&gt;Board-&gt;Arduino Uno. The Seeeduino board is recognized as an Arduino Uno board.
![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4.0_upload3.jpg)

3.  Make sure that the Serial COM port where your Seeeduino board is connected to is selected by going to Tools-&gt;Serial Port-&gt;COMXX where COMXX is the COM port of your board.<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:452px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4.0_upload4.jpg) <div class="thumbcaption"></div></div></div></div>

4.  Open the "Blink" example by going to File-&gt;Examples-&gt;0.1Basics-&gt;Blink. A new window with code will open, you may close the previous/original Arduino window.
<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:452px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4.0_upload2.jpg) <div class="thumbcaption"></div></div></div></div>

5.  In this new window click the "Upload" button, this will upload/send the code to your Seeeduino board.  Wait a few seconds for the "Done Uploading" message to display, this messages signals that the code was successfully written to the board and ready to use.
![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4.0_upload1.jpg)

6.  The blue on-board LED on the Seeduino board should start to blink as shown below:
<div class="center"><div class="thumb tnone"><div class="thumbinner" style="width:456px;">![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4_led_blink.gif) <div class="thumbcaption">Seeeduino Blinking LED</div></div></div></div>

###   Example 2: UART-to-USB (FTDI) and 3.3V Logic - Getting Started With The ESP8266 WiFi Module Without Extra Circuitry and Without Writing Software

Two great features of the Seeeduino V4.0 board when compared to its competitors is its ability to switch between 5V and 3.3V logic, and its USB-to-UART port essentially making it an FTDI like device great for quickly getting started with devices that use the UART protocol/interface.

In this example we will show you how to use the popular [ESP8266 WiFi module](http://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html?cPath=19_20). This example is amazing because with other duino boards you would require a voltage converter, a logic converter, and software to control two separate Serial ports but with the Seeeduino board none of these three things are required.

**Step 1: Putting The Board In 3.3V Mode**

1.  Remove all power sources from the Seeeduino board so that it is completely off.
2.  Slide switch SW2 over to the 3V3 setting.

**Step 2: ESP8266-Seeeduino Connections**

Connect your ESP8266 WiFi module to the Seeeduino board as follows (See the photo below for a schematic):

<table>
<tr>
<th>Seeeduino Pin</th>
<th>ESP8266 Pin</th>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>TX</td>
<td>RX</td>
</tr>
<tr>
<td>RX</td>
<td>TX</td>
</tr>
<tr>
<td>CH_PD</td>
<td>VCC</td>
</tr>
<tr>
<td>VCC</td>
<td>VCC</td>
</tr>
</table>
![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4_esp8266_schematic.png) Seeeduino V4.0 and ESP8266 Schematic. SW2 shows the setting at 5V but please slide it over to 3V3.


**Step 3: Sending Commands**

1.  Connect your Seeeduino board to the USB port of your PC.
2.  Open the Arduino IDE
3.  Upload a blank program to your board, or make sure that the program it has does not user any Serial functions.

    ** Blank Program: **
```
void setup()
{

    }

    void loop()
{

    }
```


  4.  Open the Arduino "Serial Monitor" window.

  5.  In the Serial Monitor window change your settings to "Both NL &amp;CR" and baud rate to "9600", or the correct baud rate for your ESP8266 since it might be different.

  6.  The ESP8266 is ready to receive and send information/commands. Try sending "AT+RST" to reset the module, then send "AT+CWLAP" to list all the access points your ESP8266 is able to detect. See the image below for an example response.

![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Esp8266-output.png)


##  Version Tracker  

Below is a list of changes that have been made to the Seeeduino board over all the versions.

<table >
<tr>
<th> Revision
</th>
<th> Descriptions
</th>
<th> Release Date
</th></tr>
<tr style="font-size: 90%">
<td width="300px"> Seeeduino V0.9
</td>
<td width="500px"> Initial public release
</td>
<td width="200px">
</td></tr>
<tr style="font-size: 90%">
<td> Seeeduino v1.1
</td>
<td>

1.  Fixed bug - unnessesary via on Pin4 wire.
2.  Fixed bug - Lable mistakenly covered by switches.
3.  Added I2C and sensor port.
4.  Added an 100uF capacitor for vcc switch.
5.  Grouped new 100mil grid pins.
6.  Replaced reset buttons with metal ones.
7.  Rearranged texts and lables for clearer indications.
</td>
<td>
</td></tr>
<tr style="font-size: 90%">
<td> Seeeduino v2.12
</td>
<td>

1.  Zero external power consumption when switched off
2.  Stronger Switches
3.  Second power supply for 5V direct input. [Caution] USE 5V ONLY!
4.  150mA driver capacity under 3.3V
5.  1.0mm slim PCB for lighter weighs
6.  Extra row reserved for pin headers
</td>
<td>
</td></tr>
<tr style="font-size: 90%">
<td> Seeeduino v2.2
</td>
<td>

1.  USB/EXT power auto select
2.  Upgrade power capacitor
3.  Clean up layouts
4.  Reset easier
5.  Real Quartz Crystal
6.  Extern power Diode change to 1N4004(more power on Vin pin)
</td>
<td> Dec 16, 2010
</td></tr>
<tr style="font-size: 90%">
<td> Seeeduino v2.21
</td>
<td>

1.  Upgraded to Stronger mini USB connector.
</td>
<td> Jan 12, 2011
</td></tr>
<tr>
<td> Seeeduino v3.0
</td>
<td>

1.  change JST connector to DC Jack connector
</td>
<td> Jan 1, 2012
</td></tr>
<tr>
<td> Seeeduino v4.0
</td>
<td>

1.  Remove RST switch

2.  ATMEGA16U2 as USB bus converter chip
3.  DC-to-DC converter to reduce power dissipation

4.  Micro USB

5.  UNO bootloader
</td>
<td> Sep 1, 2014
</td></tr></table>

##  Bug Report

*   The silk printed of PWM has an error.Pin of PWM  should be D9,D10,D11. We will fix this error asap.

![](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/img/Seeeduino_v4.0_bug.png)

##   Resources/References

- **[Eagle]**  [Seeeduino v4.0 Eagle file](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/res/Seeeduino_v4.0_Eagle.zip)
- **[PDF]**[Seeeduino v4.0 pdf](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/res/Seeeduino%20v4.0.pdf)
- **[EAGLE]**[Seeeduino v4.0 sch](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/res/Seeeduino%20v4.0.sch)
- **[PDF]**  [Seeeduino v4.0 SCH file ](https://github.com/SeeedDocument/Seeeduino_v4.0/raw/master/res/Seeeduino_v4.0_pdf.pdf)
- **[Datasheet]**  [ATMEGA328P-MU Summary](http://www.atmel.com/Images/Atmel-8271-8-bit-AVR-Microcontroller-ATmega48A-48PA-88A-88PA-168A-168PA-328-328P_datasheet_Summary.pdf)
-  **[Datasheet]** [ATMEGA16U2 Summary](http://www.atmel.com/Images/7799S.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>