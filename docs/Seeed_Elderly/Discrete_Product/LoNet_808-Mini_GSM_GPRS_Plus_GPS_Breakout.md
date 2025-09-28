---
description: LoNet 808 - Mini GSM/GPRS Plus GPS Breakout
title: LoNet 808 - Mini GSM/GPRS Plus GPS Breakout
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/113990107%200.jpg)

This board based on the latest SIMCOM SIM808 GSM/GPS module, it offers cellular GSM and GPRS data along with GPS technology for satellite navigation.

The board features ultra-low power consumption in sleep mode, giving the project incredibly long standby times. Furthermore there's an onboard battery charging circuit that can be used with LiPo batteries.

The GPS receiver is incredibly sensitive with 22 tracking and 66 acquisition channels, and also supports assisted-GPS (A-GPS) for indoor localisation. The board is controlled by AT command via UART and supports 3.3V and 5V logical level. It comes with a mini GPS and GSM antenna, however a battery is optional.

The board uses the 2G (not 3G or LTE) GSM networks.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoNet-808-Mini-GSM%26GPRS-%2B-GPS-Breakout-p-2493.html)

## Features

- Quad-band 850/900/1800/1900MHz
- GPRS multi-slot class12 connectivity: max. 85.6kbps(download/upload)
- GPRS mobile station class B
- Controlled by AT Command (3GPP TS 27.007, 27.005 and SIMCOM enhanced AT Commands)
- Supports charging control for Li-Ion battery
- Supports Real Time Clock
- Supply voltage range 3.4V ~ 4.4V
- Integrated GPS/CNSS and supports A-GPS
- Supports 3.0V to 5.0V logic level
- Low power consumption, 1mA in sleep mode
- Supports GPS NMEA protocol
- Compact size 27mm × 46mm × 10mm
- Standard SIM Card

## GPS Specifications

- Receiver channels: 22 tracking / 66 acquisition
- Coarse/Acquisition code: GPS L1
- Tracking sensitivity: -165dBm
- Cold start time: 30s (typ.)
- Hot start time: 1s (typ.)
- Warm start time: 28s (typ.)
- Horizontal position accuracy: &lt;2.5m CEP
- Power consumption - Acquisition: 42mA
- Power consumption - Continuous tracking: 24mA
- Update rate: 5Hz

## Interfaces

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Mappings-01.png)

1. Power Button: this is the hard power switch for the module. When the module is power up, you can turn on or turn off the module by pressing the button for 2s.
2. Li-ion Battery: this is power supply for the module, input voltage is from 3.4V to 4.4V. It uses the JST-2.0mm connector, that make it convenient to connect to 3.7V Li-Po Battery.
3. MicroUSB: the charging interface for Li-Ion battery, of input voltage range from 5V to 7V.
4. GSM Antenna: this is an uFL GSM antenna connector, just connect it to a GSM antenna for receiving GSM signal.
5. GPS Antenna: this is an uFL GPS antenna connector. You can connect either passive or active GPS antenna to it. Active GPS antenna runs at 2.8V voltage.
6. Net Indicator: Red LED, it will tell the what status is about the module linking to network.
7. Status Indicator: Green LED, it will tell whether the module is on, light when the module is running.
8. Breakout Pin: see Pin Definitions for more details.
9. SIM - Card Holder: SIM card holder for standard SIM card
10. Power Supply Pin: used for power soldering and testing.

### Pin Definitions

| Name | I/O | Description | Note |
|------|-----|-------------|------|
| BAT | I/O | Power input / output | 3.4V - 4.4V DC |
| GND | I/O | Power ground / logic ground | |
| VIO | I | Logic level reference | 2.8V - 5.0V DC |
| DTR | I | Sleep mode controlled pin | Pull high for sleep mode |
| PWR | O | Power switch | Active low in 2s |
| RI | O | Event/ message pin | |
| TXD | O | Transmit data | UART output from SIM808 |
| RXD | I | Receive data | UART Input to SIM808 |
| RST | I | Reset pin | Active low |

### Indicator LEDs

| Indicator LEDs | Status | Behavior |
|----------------|---------|-----------|
| Operating Status (Green) | Off | SIM808 is not running |
| | On | SIM808 is running |
| Network Status (Red) | Off | SIM808 is not running |
| | 64ms on/ 800ms Off | SIM808 not registered to the network |
| | 64ms On/ 3000ms Off | SIM808 registered to the network |
| | 64ms On/ 300ms Off | PPP GPRS communication is established |

## Accessories

Besides the antenna, you may need the following accessories using with LoNet 808:

| Accessory | Description |
|-----------|-------------|
| ![SIM-Card](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Simcard.jpg) | **SIM-Card**<br/>for GSM/GPRS Communication |
| [![3.7V Li-ion Battery](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Battery_2200ma.jpg)](https://www.seeedstudio.com/depot/Polymer-Lithium-Ion-Battery-2200mAh-37V-p-1709.html?cPath=1_3) | **3.7V Li-ion Battery**<br/>for power supply |
| [![DC/DC Voltage Regulator](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Power_Converter.jpg)](https://www.seeedstudio.com/depot/Adjustable-DCDC-Power-Converter-125V-35V3A-p-1534.html?cPath=1_4) | **DC/DC Voltage Regulator**<br/>for power supply |
| [![MicroUSB Cable](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/100cmUSBc.jpg)](https://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html) | **MicroUSB Cable**<br/>for charging battery |
| [![USB to UART Tool](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/USB_To_Uart_5V3V3.jpg)](https://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html) | **USB to UART Tool**<br/>for testing ATcommand on PC |
| [![Solar Panel](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/3wsp.JPG)](https://www.seeedstudio.com/depot/3W-Solar-Panel-138X160-p-954.html?cPath=1_118) | **Solar Panel**<br/>for charging battery |

## Usage

### Reference Circuit

**Connect to MCU**

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/C1-01.png)

**Connect to PC**

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/C2-01.png)

### Getting Started with AT Command

The module is controlled by AT command via serial port, here we use Arduino as USB to serial tool. Upload the following code to Arduino and open the serial monitor. If you use other USB to serial tools, you can use [AT Command Tester](/AT_Command_Tester_Application) or [SSCOM32](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/Sscom32E.zip) to test AT commands.

```arduino
// this sketch is used for testing LoNet with Arduino

// Connect VIO to +5V
// Connect GND to Ground
// Connect RX (data into SIM808) to Digital 11
// Connect TX (data out from SIM808) to Digital 10

#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    mySerial.begin(9600);
}

void loop() // run over and over
{
    if (mySerial.available())
        Serial.write(mySerial.read());

    if (Serial.available())
    {
        while(Serial.available())
        {
            mySerial.write(Serial.read());
        }
        mySerial.println();
    }
}
```

#### Set Baud and Enable Charging Function

It is recommended to execute this process when first time to use the module. In the Serial Monitor columns of following tables, input of AT commands are in back, module returns values are in orange.

| Serial Monitor | Description |
|---------------|-------------|
| AT<br/>OK | Send command "AT" to synchronize baud rate. Serial port of module is by default set at auto-baud mode, and in this mode, it will not output any indications when the module is on. |
| AT+IPR=9600<br/>OK | Set baud rate at 9600bps, supports baud rate from 1200bps to 115200bps. |
| AT+ECHARGE=1<br/>OK | Send command "AT+ECHARGE=1" to enable battery charging function. By default the charging function is closed. |
| AT&W<br/>OK | Save parameter setting. |
| AT+CPOWD=1<br/>NORMAL POWER DOWN | Power down the module. |
| RDY<br/>+CFUN: 1<br/>GPS Ready<br/>+CPIN: READY<br/>Call Ready<br/>SMS Ready | Turn on the module again by the power button, it will response status about GPS and GSM. |
| AT+CBC<br/>+CBC: 1,96,4175<br/>OK | Inquire charging status and remaining battery capacity. |
| AT+CSQ<br/>+CSQ: 14,0<br/>OK | Inquire GSM signal quality. |

#### Get location with GPS

| Serial Monitor | Description |
|---------------|-------------|
| AT+CGPSPWR=1<br/>OK | Open GPS |
| AT+CGPSSTATUS?<br/> +CGPSSTATUS: Location Not Fix<br/>OK | Read GPS fix status, "Location Not Fix" means that positioning is not successful. For the first time to start, it will take at least 30s. _**GPS must be tested by the window or outdoor.**_ |
| AT+CGPSSTATUS?<br/> +CGPSSTATUS: Location 3D Fix<br/>OK | GPS has fixed with 3D status. |
| AT+CGPSINF=0<br/> +CGPSINF:<br/> 0,2234.931817,11357.122485,<br/>92.461185,20141031041141.000,<br/>88,12,0.000000,0.000000 | Get the current GPS location information. Parameters format: &lt;mode&gt;, &lt;altitude&gt;, &lt;longitude&gt;, &lt;UTC time&gt;, &lt;TTFF&gt;, &lt;num&gt;, &lt;speed&gt;, &lt;course&gt; |
| AT+CGPSOUT=32<br/>OK<br/>$GPRMC,043326.000,A,<br/>2234.9414,N,11357.1187,E,<br/>0.000,143.69,311014,,,A*50 | Read NMEA $GPRMC data, of which, "2234.9414 N, 11357.1187 E" is the location coordinates. For more details about NMEA sentences, [check this site](http://www.gpsinformation.org/dale/nmea.htm). |
| AT+CGPSRST=0<br/>OK | Reset GPS in Cold Start Mode. |
| AT+CGPSRST=1<br/>OK | Reset GPS in Hot Start Mode. |
| AT+CGPSPWR=0<br/>OK | Close GPS. |

## Downloads

- [LoNet_808_Schematic](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/LoNet_808_Schematic.pdf)
- [SIM800_ATCommand_Manual](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM800_ATCommand_Manual_V1.02.pdf)
- [SIM808_HardwareDesign_Manual](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM808_Hardware_Design_V1.00.pdf)
- [SIM808_GPSApplication_Note](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM808_GPS_Application_Note_V1.00.pdf)

## Resources

- [GPRS_Shield library on gitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- [Adafruit_FONA_Library](https://github.com/adafruit/Adafruit_FONA_Library/)

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
