---
name: Seeeduino Stalker‏‎ V3
category: Discontinued
bzurl:
oldwikiname: Seeeduino_Stalker‏‎
prodimagename:
bzprodimageurl: https://www.research.net/r/Seeeduino_Stalker_v3
sku:
tags:

---

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeed_Stalker_v3-6.png)

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeed_Stalker_v3-7.png)

Seeeduino Stalker v3.0 is a feature rich Arduino compatible **Wireless Sensor Network node** especially useful for outdoor **data-logging** applications .  It has a X-Bee carrier board for using with X-Bee modules, such as GPS Bee, Bluetooth Bee and Wifi Bee, etc. Its modular structure and onboard peripherals makes it convenient to log time stamped sensor data on a periodic basis. Seeeduino Stalker comes with a RTC with backup power, SD Card Socket, Bee Socket and Solar based Li-Ion Battery Charger_. The Seeeduino Stalker is a good candidate for all your tracking, monitoring and control projects._

**NOTE:** Seeeduino Stalker v3.0  is the latest version of this board. Please Look [ here](https://seeeddoc.github.io/Seeeduino_Stalker/#Comparison_between_various_versions_of_Seeeduino_Stalker) for comparison with older versions of this board. Seeeduino Stalker V3 has many features and offers ways to modify the functionalities by soldering or disconnecting PCB jumpers. Please understand this document and refer to the schematic before programming.

<span style="color: red">Note</span> that we have updated and made some modifications to Seeeduino Stalker. And we will cover it later in section **Hardware Overview** of this page.

###  Version Tracker

| Product version                           | Release date | Support status | Notes |
|-------------------------------------------|--------------|----------------|-------|
| Seeeduino Stalker v3(v3.0, older version) | Oct 2015     | Oct 2015       | None  |
| Seeeduino Stalker v3(v3.1, older version) | July 2016    | Supported      | None  |

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Stalker-v3-p-1882.html)  
##   Features

*   Compatible with Seeeduino (I/O ports use 3.3V Logic). Can be programmed with Arduino Processing language.

*   Onboard microcontroller: **ATMega328P**

*   Onboard Real Time Clock chip DS1337S (Socket for a CR1220 coin cell, which acts as a backup power source for RTC)

*   Serial interface with DTR for auto reset during programming when operating in standalone mode. (For programming, [UartSBee](https://seeeddoc.github.io/UartSBee/) must be bought separately).

*   microSD card socket
*   I2C Pin header (operation voltage is selectable: 5.0V or 3.3V)

*   Grove interface (operation voltage is selectable: 5.0V or 3.3V)

*   Reset buttons for XBee Modules and ATMega328P

*   **Bee series socket** - 2*10 pin 2.0mm pitch (which will mate with - one at a time - any of the wireless modules: **XBee**, [BluetoothBee](/Bluetooth_Bee "Bluetooth Bee"), [GPSBee](https://seeeddoc.github.io/Bluetooth_Bee/) or [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/).)

##   Specification

<table >
<tr>
<th> Parameter
</th>
<th> Value
</th></tr>
<tr>
<td width="300px"> MCU
</td>
<td width="500px"> ATmega328
</td></tr>
<tr>
<td> Crystal Oscillator
</td>
<td> 8 MHz
</td></tr>
<tr>
<td> RTC
</td>
<td> DS1337S
</td></tr>
<tr>
<td> I/O Logic
</td>
<td> 3.3v
</td></tr>
<tr>
<td> Board for Arduino IDE
</td>
<td> Arduino Pro or Pro Mini (**3.3v** , 8 MHz)w/ATmega328
</td></tr>
<tr>
<td> Power Supply
</td>
<td> 3.7v LiPo Battery, Use 5VDC solar panel for charging the battery.
</td></tr>
<tr>
<td> Power Connector
</td>
<td> 2 pin JST/ USB
</td></tr>
<tr>
<td> Connectivity
</td>
<td> I<sup>2</sup>C, UART, SPI
</td></tr>
<tr>
<td> Open Circuit Current
</td>
<td> 6 mA max
</td></tr>
<tr>
<td> Charging Current
</td>
<td> 300mA
</td></tr>
<tr>
<td> Maximum Current on 3.3v port
</td>
<td> 800mA
</td></tr>
<tr>
<td> Size of PCB
</td>
<td> 86.74mm x 60.96mm
</td></tr></table>

##   Application Ideas  

*   Wireless Sensor Network (using **XBee** - bought separately)

*   GPS Logging (using [GPSBee](https://seeeddoc.github.io/GPS_Bee_kit/) - bought separately)

*   Data Acquisition System capable of communicating with an App running on iPhone/Android Phone (using [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) - bought separately).

*   RF Remote Control (using [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) - bought separately).

*   As a simple standalone Arduino compatible physical computing platform ([UartSBee](https://seeeddoc.github.io/UartSBee/) must be bought separately for programming).

##   Hardware Overview

<span style="color: red">Note</span> that we have updated and made some modifications to Seeeduino Stalker (from version v3.0 to v3.1).

<dl><dd> 1. We add a switch to select between hardware serial ports (through D0, D1) and software serial port (that is, virtual serial port; through D5, D6). The switch is marked in blue rectangle like follows.

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_v3.1_serial_port_switch_1200_s.jpg)

</dd><dd> 2. For RTC circuitry, there only one power supply (from lithium battery) now. And the applicable lithium polymer battery model is CR1120.

</dd><dd> 3. For RTC circuitry, we add two toggle switch to enable two interrupts (INT A and INT B of RTC corresponds INT0 and INT1 of MCU) to MCU. Both interrupts are used to activate MCU from sleep mode. You need to toggle those switch to **ON** before you want to send interrupt.

</dd><dd> 4. As MCU is in sleep mode, you can control (enable or disable) the power input on Bee connector and all VCC pins of 3.3 V or 5V, through sending a signal with D9 pin.
</dd><dd> 5. In sleep mode (for all module), the working current will as low as 100 μA.
</dd></dl>

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeed_Stalker_v3.png)

*   **RST for Bee:** Press this button to reset the Bee module. However, this reset button does not affect the state of the main board(ATmega328).

*   **RST for ATmega328: ** Press this button to reset the main board.

*   **ATmega328:** The micro controller of the main board. And the crystal oscillator is 8MHz.

*   **SD Socket:** It is convenient to store data on an SD card. **There is a pad (P2) for soldering to turn the power supply of SD card ON or OFF** via Digital pin **D4**.

*   **Bee Socket:** There is provision for the main board to communicate with other wireless modules via the Bee socket. **There is a pad (P1) to turn the power supply ON or OFF** via Digital pin **D5**.

*   **Solar Panel:** Catch the sunshine and transfer it to power via the solar panel, without the constraint of USB cable.

*   **Li-Po BAT:** Provide power supply to the main board via Li-Po BAT; The battery can be charged by solar panel.

*   **CN3065:** Lithium Ion Battery charger for solar-powered systems. There are also two director lights on the board, they are "**OK**" and "**CH**" on the side of Li-Po BAT, which mean "**Charged**" and "**Charging**" respectively.

*   **TD6810:** 1.5MHz 800mA Synchronous Step-Down Regulator Dropout, which provides 3.3v power supply to the main board.

*   **RTC:** I2C Serial Real-Time Clock -- DS1337S. **And two optional interrupt signal pins have been breakout as pads (P3 and P4).** These jumper pads can be used to connect RTC /INTA pin to Digital Pin **D2** and RTC /INTB to Digital pin **D3**.

*   **BAT for RTC:** A CR1220 battery, to provide power supply to RTC independently.

*   **Grove Connectors:**  On the board there are two Grove connectors, i.e. I2C and D7. And you can plug Grove products onto the board directly via these Grove connectors.

*   **UartSBee Headers:** The UartSBee headers are used with UartSBee v4, you can upload program to the main board via these headers.

###   PCB Jumper Pads

The bottom side of Seeeduino Stalker V3 has many PCB jumper pads optionally changing the configuration / functionality. The below table provides details about the same.


| Jumper Pads Name | Application                                                                                                                                                                                                                                                                                                                                                 | Circuit                                                                                                             |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| P1               | Soldering these jumper enables Digital pin D5 to ON or OFF power-supply of Bee Socket                                                                                                                                                                                                                                                                       | ![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_Jumper_Pad_P1.jpg)       |
| P2               | Soldering these jumper pads enables Digital pin D4 to switch ON or OFF power supply of SD.                                                                                                                                                                                                                                                                  | ![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_Jumper_Pad_P2.jpg)       |
| P3               | Soldering these jumper pads connects RTC /INTA pin to Digital Pin **D2(INT0)**.                                                                                                                                                                                                                                                                             | ![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_Jumper_Pad_P3.jpg)       |
| P4               | Soldering these jumper pads connects RTC /INTB to Digital pin **D3(INT1)**.                                                                                                                                                                                                                                                                                 | ![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_Jumper_Pad_P4.jpg)       |
| P5               | This jumper by default connects BEE_TXD to Digital pin D0 (H/W UART TXD). By cutting the existing PCB connection and soldering to adjacent pad, BEE_TXD can be connected to Digital pin **D7** for S/W Serial. **Note**: There is a known hardware bug. Please read [here](https://seeeddoc.github.io/Seeeduino-Stalker_v3/#Known_Issue) for a work-around. | ![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_Jumper_Pads_P5andP6.jpg) |
| P6               | This jumper by default connects BEE_RXD to Digital pin D0 (H/W UART RXD). By cutting the existing PCB connection and soldering to adjacent pad, BEE_RXD can be connected to Digital pin **D6** for S/W Serial.                                                                                                                                              | ![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_Jumper_Pads_P5andP6.jpg) |




Apart from these, there are other jumper pads for WIRELESS_PROGRAMMING, RSSI_STATUS and CH_STATUS. These are by default connected and please refer to the schematic if you would like to modify any functionalities.

##   Getting Started

If you are new to the "Physical Computing" world and if **Seeeduino Stalker v3.0** is the first physical computing platform you want to begin with, then we suggest you to start with [ Seeeduino](https://seeeddoc.github.io/Seeeduino_v4.0/).

The following steps will help you assemble the hardware and software resources to get you started with **Seeeduino Stalker v3.0**.

####   Step 1. Acquiring the hardware

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeed_Stalker_v3-1.png)

The picture above shows the hardware and components required for Seeeduino Stalker v3 to communicate with PC. The Stalker does not have USB to Serial functionality. Hence, **UartSBee** is necessary for programming Stalker via PC. Other USB to Serial converter board can be used to replace UartSBee v4.

**Note: UartSBee v4 needs to be bought separately**.

####   Step 2: Installing the drivers and plugging in the hardware  

1.  [UartSBee](https://seeeddoc.github.io/UartSBee/) is like the multi-purpose Swiss Army knife of the Physical Computing world. There is a very detailed procedure to use UartSBee for both Windows and GNU/Linux users [here](https://seeeddoc.github.io/UartSBee/).  In our case, it will perform three functions:
    *   To program the Seeeduino Stalker.
    *   To communicate with Seeeduino Stalker.
    *   Provide power (from USB power of PC) to Seeeduino Stalker (including any peripherals connected to it).

2.  UartSBee has an on-board voltage regulator and a switch to select the target board voltage ( either 5.0V or 3.3V). In case of Seeeduino Stalker, set this slide switch to 5.0V.

3.  The wiring connection scheme of the hardware is **"<font color="Navy">Computer</font><font color="Grey">→(Mini USB Cable)→</font><font color="Navy">UartSBee </font><font color="Grey">→(Flat Ribbon Cable)→</font><font color="Navy">Seeeduino Stalker</font>"**. The jumper wires must be connected between UartSBee and Seeeduino Stalker before connecting the UartSBee to the Computer. **Note: The TXD and RXD pins must are cross connected as shown in the table**.
4.  Connect the Mini USB cable from UartSBee to PC. If you are using a Windows based PC, the "Found New Hardware" balloon will popup and within a few moments the FT232 drivers will be installed.

<font color="Green">**The following table shows the connection between Seeeduino Stalker v3 and UartSBee v4.**</font>

<table >
<caption> Pins connection
</caption>
<tr>
<th> Seeeduino Stalker v3
</th>
<th>      
</th>
<th> UartSBee v4
</th></tr>
<tr>
<td> 5V
</td>
<td>   ↔  
</td>
<td> VCC
</td></tr>
<tr>
<td> <font color="Red">RXD </font>
</td>
<td>   ↔  
</td>
<td> <font color="Green">TXD </font>
</td></tr>
<tr>
<td> <font color="Green">TXD </font>
</td>
<td>   ↔  
</td>
<td> <font color="Red">RXD </font>
</td></tr>
<tr>
<td> GND
</td>
<td>   ↔  
</td>
<td> GND
</td></tr>
<tr>
<td> DTR
</td>
<td>   ↔  
</td>
<td> DTR
</td></tr></table>

##   Demos

Download and install the DS1337 library and sketches available in the resources section. DS1337 library includes modified version DateTime class by Jean-Claude Wippler at [JeeLabs](http://jeelabs.net/projects/cafe/wiki/)

*   The datalogger demo sketches makes use of the Arduino SD Library.

###  1.RTC

<font color="Green">**Please pay attention: You need to solder some pads while using the "Interrupts" demo**</font>

<table >
<caption> <font color="Red">How to solder </font>
</caption>
<tr>
<th> Pins on RTC
</th>
<th> Pads on Seeeduino Stalker v3
</th>
<th> Pins on ATmega328
</th></tr>
<tr>
<td> INTA
</td>
<td> P3
</td>
<td> digital 2
</td></tr>
<tr>
<td> INTB
</td>
<td> P4
</td>
<td> digital 3
</td></tr></table>

####   Adjust Date/Time

* * *

*   Set Arduino board as `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`.

*   Open **adjust.ino** example from DS1337 library

*   Set the current date/time using the DateTime Class object **dt** in the example:

    *   `DateTime dt(year, month, date, hour, min, sec,week-day(starts from 0 and goes to 6)); `

        *   **Ex:-** `DateTime dt(2015, 10, 1, 11, 43, 0, 4);`

*   compile and upload to **Seeeduino-Stalker v3**

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_v3_adjust.png)

####   Get Current Date/Time

* * *

*   Set Arduino board as `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**` .

*   Open **now.ino** example from DS1337 library

*   The current date/time is read from DS1337 using ` RTC.now() ` function.

    *   **Ex:- ` DateTime now = RTC.now();`**

*   compile and upload to **Seeeduino-Stalker v3**

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_v3_now.png)

####   DS1337 Interrupts Example

* * *

This example is a demonstration of interrupt detection from DS1337 <span style="text-decoration: overline">INT</span> output. This feature is useful for data-logger functionality where the MCU is put to sleep mode when not in use and DS1337 <span style="text-decoration: overline">INT</span> wakes up the CPU periodically. This extends battery power. The complete operation is documented in the code.

*   Solder P3 jumper.

    *   This connects the DS1337 interrupt out pin to ATmega328 INT0 pin.

*   Set Arduino board as `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`.

*   Open **interrupts.ino** example from DS1337 library

*   compile and upload to **Seeeduino-Stalker v3**

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_v3_interrupt.png)

####   Data Logger Example

* * *

The principal application of Seeeduino Stalker v3.0 is data-logging of sensor signal like battery voltage, etc along with the time-stamp. This sketch puts the MCU in sleep mode when not performing data sampling / logging operation. The complete implementation is documented very well in the code. The following section gives an overview :

1.  **StalkerV30_DataLogger_10Sec.ino**

    *   This sketch logs battery voltage data to SD card configured by **`RTC.enableInterrupts(_h, m, s_)`** function.
    *   The _periodicity_ is provided using h, m and s. Once an interrupt is detected, the next interrupt time is updated by advancing the h,m and s value. The DateTime Class comes handy for this.

        *   ex:- `interruptTime = DateTime(interruptTime.get() + interruptInterval);  //decide the time for next interrupt`

        *   This sketch also produces verbose output i.e the various events happening inside MCU are displayed in serial terminal.

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Stalker_v3.0_datalogger_flowchart.png)

###   Read the charging status

* * *

The battery charging status can be read using the below sketch. The battery can be charged by plugging solar panel onto the board or via the UartSBee.
```
void setup()
{
  Serial.begin(57600);
  analogReference(INTERNAL);
  //analogRead(6);
}

void loop()
{
  char CH_status_print[][4]=
  {
    "off","on ","ok ","err"
  };
  unsigned char CHstatus = read_charge_status();//read the charge status
  Serial.print("charge status -->");
  Serial.println(CH_status_print[CHstatus]);
  delay(500);
}


unsigned char read_charge_status(void)
{
  unsigned char CH_Status=0;
  unsigned int ADC6=analogRead(6);
  if(ADC6>900)
  {
    CH_Status = 0;//sleeping
  }
  else if(ADC6>550)
  {
    CH_Status = 1;//charging
  }
  else if(ADC6>350)
  {
    CH_Status = 2;//done
  }
  else
  {
    CH_Status = 3;//error
  }
  return CH_Status;
}
```
###   Reading the voltage of Li-Po BAT

* * *

The voltage of the Li-Po battery connected to Seeeduino Stalker V3 can be read by Analog pin A7. The below sketch demonstrates this.
```
void setup(){
    Serial.begin(57600);
    analogReference(INTERNAL);
}

void loop() {

float voltage;
int BatteryValue;

    BatteryValue = analogRead(A7);
    voltage = BatteryValue * (1.1 / 1024)* (10+2)/2;  //Voltage devider

    Serial.print("Battery Voltage -> ");
    Serial.print(voltage);
    Serial.print("V   ");
    Serial.println();

    delay(500);
}
```

_Reference: [analogReference](http://arduino.cc/en/Reference/AnalogReference)_

##   Additional information for using the Bee module

The following tables show the default UART connection between Bee Socket and ATMega328 MCU.

<table >
<caption> <font color="Red">How to use </font>
</caption>
<tr>
<th> Pins on Bee socket
</th>
<th> Pins on ATmega328
</th></tr>
<tr>
<td> BEE_TXD
</td>
<td> digital 0
</td></tr>
<tr>
<td> BEE_RXD
</td>
<td> digital 1
</td></tr></table>

Also, you can turn the power supply of Bee module on or off by the optional pad.

<font color="Green">Operation： On the back of Seeeduino Stalker v3, you can find a solder pad "P1". Solder the P1 and use the following code to cut off the power supply. </font>

<pre>
digitalWrite(5,HIGH);
</pre>

##  Known Issue

**Affected users**: This issue affects those who would like to use the optional feature of connecting Bee Socket to software serial port instead of H/W serial port(default).

**Issue**: Jumper P5 can not be configured to use software serial port by cutting the default connection and resoldering (i.e) BEE_RXD can not be connected to PD7 instead of default PD1 by simply cutting/soldering the jumper as per [ P5 description](https://seeeddoc.github.io/Seeeduino-Stalker_v3/#PCB_Jumper_Pads). There is a hardware bug.

**Workaround**:

1. On the top layer cut the routing from PD1/TXD signal to R16 resistor as shown in the following pictures. Please use a sharp knife and gentle cut the connection:

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/StalkerV3.0_P6Issue_1.jpg)

Before modification

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/StalkerV3.0_P6Issue_Workaround.jpg)

After modification

2.Now apply the procedure mentioned in [ P5 jumper description](/Seeeduino-Stalker_v3#PCB_Jumper_Pads "Seeeduino-Stalker v3") (i.e) cut the jumper and solder the middle pad of Jumper P5 to PD7.

##   Board Layout

The Images are taken from the EAGLE Files

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_v3.0_Board.PNG)

Seeeduino_Stalker_v3.0_Board

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_v3.0_Sceme_1.PNG)

Power

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_v3.0_Sceme_2.PNG)

Arduino

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_v3.0_Sceme_3.PNG)

BEE TF

![](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/img/Seeeduino_Stalker_v3.0_Sceme_4.PNG)

RTC I2C

## Resources

*   Software:

    *   [Seeeduino Stalker V3 - DS1337 RTC library](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/DS1337.zip)

    *   [Seeeduino Stalker V3.0 - Datalogger Example](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/StalkerV30_DataLogger_10Sec.zip)

*   Design:

    *   [Seeeduino Stalker v3.0 - PDF Schematic &amp; EAGLE files](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/Seeeduino_Stalker_v3.0.zip)

    - [Seeeduino Stalker v3.0 pdf](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/Seeeduino%20Stalker%20v3.0.pdf)

   - [Seeeduino Stalker v3.0 sch](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/Seeeduino%20Stalker%20v3.0.sch)
*   Datasheets:

    *   [Datasheet of DS1337S](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/DS1337-DS1337C-99519.pdf)

    *   [Datasheet of CN3065)](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/CN3065.pdf)
    *   [Datasheet of CN3065 (English)](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/DSE-CN3065.pdf)

    *   [Datasheet of TD6810](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/TD6810.pdf)

*   Others:

    *   [Bootloader via AVRISP MKII](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/ATmegaBOOT_168_atmega328_pro_8MHz.hex.zip)

    *   [Completed file via Offline-AVRISP](https://github.com/SeeedDocument/Seeeduino-Stalker_v3/raw/master/res/Stalker_V2_Final.Prjt.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>