---
description: CAN-BUS_Shield_V2.0
title: CAN-BUS Shield V2.0
tags:
  - Shield
  - CAN-BUS
keywords:
  - Shield
  - CAN-BUS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /CAN-BUS_Shield_V2.0
last_update:
  date: 01/10/2023  
  author: Eico 

no_comments: false # for Disqus

---

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/shiyitu1.png" /></div>

**CAN-BUS** is a common industrial bus because of its long travel distance, medium communication speed and high reliability. It is commonly found on modern machine tools, such as an automotive diagnostic bus.

This CAN-BUS Shield adopts **MCP2515** CAN Bus controller with SPI interface and **MCP2551** CAN transceiver to give your Arduino/Seeeduino CAN-BUS capability. With an **OBD-II** converter cable added on and the OBD-II library imported, you are ready to build an onboard diagnostic device or data logger.

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/vehicle-hacking-tools" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_Car_Hacking.png" /></a></p>
</div>

**Version**

This document applies to the following version of products:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Version</h3></td>
    <td><h3>Released Date</h3></td>
    <td><h3>How to Buy</h3></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V1.0</h4></td>
    <td><h4>Oct 14, 2012</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V1.1</h4></td>
    <td><h4>Aug 10, 2013</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>  
  <tr>
    <td><h4>CAN BUS Shield V1.2</h4></td>
    <td><h4>Jan 5, 2015</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V2.0</h4></td>
    <td><h4>Aug 01,2017</h4></td>
    <td><div class="document"><a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" alt="" width={200} height="auto"/></a>
</div></td>
  </tr>
  </tbody></table>

**Alternative Choice**

If your project is space limited and also don't need other fuctions except CAN-BUS, here is a Grove CAN-BUS module which is Arduino compatible, more compact and cost effective, please click [here](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html) to visit its page.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png" /></a></p>

**What if I want to connect this shield to my car**

If you want to read data or control your car, there's an OBD>DB9 cable available for you, [this cable](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html) make easier to connect to OBD-connector and DB9-connector. This cable will also work with anything that has a OBD-connector. Add a power switch makes such a satisfying click.

 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg" /></a></p>

**USB-CAN Analyzer**

If you want a CAN Bus Analyzer to debug your CAN Bus, this [USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) is recommended.

 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg" /></a></p>

## Features

- Implements CAN V2.0B speed up to **1 Mb/s**
- SPI Interface speed up to **10 MHz**
- Standard (**11 bit**) and extended (**29 bit**) data and remote frames
- Two receive buffers with prioritized message storage
- Industrial standard DB-9 connector
- LED indicators

:::note
CAN BUS Shield Work well with Arduino UNO (ATmega328), Arduino Mega (ATmega1280/2560) as well as Arduino Leonardo (ATmega32U4).
:::

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png" alt="pir" width={600} height="auto" /></p>

1. **DB9 Interface** - to connect to OBDII Interface via a DBG-OBD Cable.
2. **V_OBD** - It gets power from OBDII Interface (from DB9)
3. **Led Indicator**:
    - **PWR**: power
    - **TX**: blink when the data is sending
    - **RX**: blink when there's data receiving
    - **INT**: data interrupt
4. **Terminal** - CAN_H and CAN_L
5. **Arduino UNO pin out**
6. **Serial Grove connector**
7. **I2C Grove connector**
8. **ICSP pins**
9. **IC** - MCP2551, a high-speed CAN transceiver ([datasheet](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf))
10. **IC** - MCP2515, stand-alone CAN controller with SPI interface ([datasheet](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf))

:::warning
When you use more than two CAN Bus Shield in one net, you should take the impedance into consideration.
You should either cut P1 in the PCB with a knife, or just remove R3 on the PCB.
:::

**Pin map**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png" alt="pir" width={600} height="auto" /></p>

:::note
The FREE pin is available for the other usages.
:::

**DB9&OBDii Interface**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png" alt="pir" width={600} height="auto" /></p>

**CS pin**

:::caution
When we produced the new batch of CAN-BUS Shield V2, the wire of the back pads was embedded inside the PCB, although the wire between the pads is now not visible on the outside, the inside is still connected, if you want to change the wiring of the pads, you still need to cut the wiring in the PCB first.
:::

SPI_CS pin of V1.2 is connected to **D9** by default. If you want to change to **D10**, please follow below instructions.

- Step1: Take a look at the backside of the PCBA, you will find a pad named CS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu1.png" alt="pir" width={600} height="auto" /></p>

- Step2: Cut the wire between pad9 and the middle pad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu2.png" alt="pir" width={600} height="auto" /></p>

- Step3:Solder the middle pad and pad 10.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu3.png" alt="pir" width={600} height="auto" /></p>

:::warning
Be careful with the box cutter, it's easy to hurt yourself or the PCBA.
:::

**SPI pins**

The SPI pins (SCK, MISO, MOSI) are routed to the ICSP pins by default. But for some boards, the SPI pins are located at D11~D13. if this happens, you need make some change to the PCBA. Take a look at the backside of the PCBA, there're three pads, MOSI, MISO and SCK, they are connected to A by default. You can change them to B if needed.

:::note
For Arduino UNO, Arduino Mega, Arduino Leonardo and any others AVR based Arduino boards, it works well by default setting.
:::

:::warning
Be careful when you are going to change SPI pins, it's easy to hurt yourself or the PCBA.
:::

## Getting Started

Here's a simple example to show you how CAN-BUS Shield works. In this example we need 2 pieces of CAN-BUS Shields as well as Arduino or Seeeduino.

:::note
This example is built under [Arduino IDE version 1.6.9](https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip).
:::

**STEP1: What do we need**

<table align="center">
  <tbody>
  <tr>
    <td><h3>Name</h3></td>
    <td><h3>Function</h3></td>
    <td><h3>Qty</h3></td>
    <td><h3>Link</h3></td>
  </tr>
  <tr>
    <td><h4>CAN-BUS Shield</h4></td>
    <td><h4>CAN Bus communication</h4></td>
    <td><h4>2</h4></td>
    <td><a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank"><span>Link</span></a></td>
  </tr>
  <tr>
    <td><h4>Seeeduino V4.2</h4></td>
    <td><h4>Controller</h4></td>
    <td><h4>2</h4></td>
    <td><a href="https://www.seeedstudio.com/item_detail.html?p_id=2517" target="_blank"><span>Link</span></a></td>
  </tr>  
  </tbody></table>

**STEP2: Hardware Connection**

Insert each CAN-BUS Shield into Seeeduino V4.2, and connect the 2 CAN-BUS Shield together via 2 jumper wires. Shown as below images.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png" alt="pir" width={600} height="auto" /></p>

:::note
CAN_H to CAN_H, CAN_L to CAN_L
:::

**STEP3: Software**

Please follow [how to install an arduino library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) procedures to install CAN BUS shield library.

- Download the [**Seeed_Arduino_CAN**](https://github.com/Seeed-Studio/Seeed_Arduino_CAN) Arduino library here.

Install the library to your Arduino IDE when it is downloaded.

One of the node (a node means Seeeduino + CAN_BUS Shield) acts as master, the other acts as slaver. The master will send data to slaver constantly.

:::note
Each node can act as master before the code being uploaded.
:::

Open the **send** example (**File > Examples > Seeed_Arduino_CAN > send**) and upload to the **master**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/example.png" alt="pir" width={600} height="auto" /></p>

Or copy the following to the Arduino IDE and upload:

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN); // Set CS pin

void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // init can bus : baudrate = 500k
        SERIAL.println("CAN BUS Shield init fail");
        SERIAL.println(" Init CAN BUS Shield again");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield init ok!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // send data:  id = 0x00, standrad frame, data len = 8, stmp: data buf
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
    SERIAL.println("CAN BUS sendMsgBuf ok!");
}
```

**STEP4: View Result**

Open the Serial Monitor of Arduino IDE(**slaver**), you will get the data sent from the master.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png" alt="pir" width={600} height="auto" /></p>

## APIs

### 1.Set the Baud rate

This function is used to initialize the baud rate of the CAN Bus system.

The available baud rates are listed as follows:

```cpp
#define CAN_5KBPS    1
#define CAN_10KBPS   2
#define CAN_20KBPS   3
#define CAN_25KBPS   4
#define CAN_31K25BPS 5
#define CAN_33KBPS   6
#define CAN_40KBPS   7
#define CAN_50KBPS   8
#define CAN_80KBPS   9
#define CAN_83K3BPS  10
#define CAN_95KBPS   11
#define CAN_100KBPS  12
#define CAN_125KBPS  13
#define CAN_200KBPS  14
#define CAN_250KBPS  15
#define CAN_500KBPS  16
#define CAN_666kbps  17
#define CAN_1000KBPS 18
```

### 2.Set Receive Mask and Filter

There are **2** receive mask registers and **5** filter registers on the controller chip that guarantee you getting data from the target device. They are useful especially in a large network  consisting of numerous nodes.

We provide two functions for you to utilize these mask and filter registers. They are:

**Mask:**

```cpp
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**Filter:**

```cpp
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** represents which register to use. You can fill 0 or 1 for mask and 0 to 5 for filter.
- **ext** represents the status of the frame. 0 means it's a mask or filter for a standard frame. 1 means it's for a extended frame.
- **ulData** represents the content of the mask of filter.

### 3.Check Receive

The MCP2515 can operate in either a polled mode, where the software checks for a received frame, or using additional pins to signal that a frame has been received or transmit completed.

Use the following function to poll for received frames.

```cpp
INT8U MCP_CAN::checkReceive(void);
```

The function will return 1 if a frame arrives, and 0 if nothing arrives.

### 4.Get CAN ID

When some data arrive, you can use the following function to get the CAN ID of the "send" node.

```cpp
INT32U MCP_CAN::getCanId(void)
```

### 5.Send Data

```cpp
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

It is a function to send data onto the bus. In which:

- **id** represents where the data comes from.
- **ext** represents the status of the frame. '0' means standard frame. '1' means extended frame.
- **len** represents the length of this frame.
- **data_buf** is the content of this message.

For example, In the 'send' example, we have:

```cpp
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.
```

### 6.Receive Data

The following function is used to receive data on the 'receive' node:

```cpp
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

In conditions that masks and filters have been set. This function can only get frames that meet the requirements of masks and filters.

- **len** represents the data length.
- **buf** is where you store the data.

### 7.init_CS

it is very usefule for you to use two CAN-BUS shields with one Arduino.we provide CS_CAN pin to select for you.if you cannot kown how to use CS_CAN pin , you can go to [CS_CAN pin](https://wiki.seeedstudio.com/CAN-BUS_Shield_V2.0/#cs_can-pin) to learn.

```cpp
void MCP_CAN::init_CS(byte _CS)
```

- **_CS** represents what you select pin.(9 or 10)

## Generate a New BaudRate

We had provided many frequently-used baud rates, as below:

```cpp
#define CAN_5KBPS    1
#define CAN_10KBPS   2
#define CAN_20KBPS   3
#define CAN_25KBPS   4
#define CAN_31KBPS   5
#define CAN_33KBPS   6
#define CAN_40KBPS   7
#define CAN_50KBPS   8
#define CAN_80KBPS   9
#define CAN_83KBPS   10
#define CAN_95KBPS   11
#define CAN_100KBPS  12
#define CAN_125KBPS  13
#define CAN_200KBPS  14
#define CAN_250KBPS  15
#define CAN_500KBPS  16
#define CAN_666KBPS  17
#define CAN_1000KBPS 18
```

Yet you may still can't find the rate you want. Here we provide a software to help you to calculate the baud rate you need.

Click [here](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip) to download the software, it's in Chinese, but never mind, it's easy to use.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg" alt="pir" width={200} height="auto" /></p>

Open the software, what you need to do is to set the baud rate you want, and then do some simple setting, then click **calculate**.

Then you will get some data, cfg1, cfg2 and cfg3.

You need to add some code to the library.

Open **mcp_can_dfs.h**, you need to add below code at about line 272:

```cpp
#define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxx is the baud rate you need
#define MCP_16MHz_xxxkBPS_CFG2 (cfg2)
#define MCP_16MHz_xxxkBPS_CFG3 (cfg2)
```

Then let's go to about line 390, add below code:

```cpp
#define CAN_xxxKBPS NUM       // xxx is the baudrate you need, and NUM is a number, you need to get a different from the other rates.
```

Open **mcp_can.cpp**, goto the function **mcp2515_configRate**(at about line 190), then add below code:

```cpp
case (CAN_xxxKBPS):
    cfg1 = MCP_16MHz_xxxkBPS_CFG1;
    cfg2 = MCP_16MHz_xxxkBPS_CFG2;
    cfg3 = MCP_16MHz_xxxkBPS_CFG3;
    break;
```

Then you can use the baud rate you need. And please give me a pull request at github when you use a new rate, so I can add it to the library to help other guys.

## Projects

If you want to make some awesome projects with CAN-BUS shield, here are some projects for reference.

### Volkswagen CAN BUS Gaming

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG" alt="pir" width={600} height="auto" /></p>
Ever wanted to play a car/truck simulator with a real dashboard on your PC? Me too! I'm trying to control a VW Polo 6R dashboard via CAN Bus with an Arduino Uno and a Seeed CAN Bus Shield. Inspired by Silas Parker. Thanks Sepp and Is0-Mick for their great support!

<p style={{textAlign: 'center'}}><a href="https://community.seeedstudio.com/project_detail.html?id=291" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png" /></a></p>

### Hack your vehicle CAN-BUS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg" alt="pir" width={600} height="auto" /></p>
Modern Vehicles all come equipped with a CAN-BUS Controller Area Network, Instead of having a million wires running back and forth from various devices in your car to the battery, its making use of a more clever system.

All electronic functions are connected to the TIPM, (Totally integrated Power Module), such as solenoids/relays to lock the doors or mini motors to wind the windows etc.

From each node (IE Switch pod that controls your windows or electric door locks) it broadcasts a message across the CAN. When the TIPM detects a valid message it will react accordingly like, lock the doors, switch on lights and so on.

<p style={{textAlign: 'center'}}><a href="https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png" /></a></p>

## FAQ

------
**Q1: I can't get data from other CAN device.**

- Check if the connection is right
- Check if the baud rate setting is right

**Q2: The serial monitor print Init Fail.**

- Check if the CS pin setting is matched with the code. For CAN Bus Shield V1.1/1.2, CS pin is connected to D9, others are to D10.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

-----

- **[PDF]**[CAN-BUS Shield V2.0 Schmatics](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.pdf)
- **[Eagle]**[Schematic & PCB of CAN-BUS Shield V2.0](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar)
- **[Library]**[Arduino Library for CAN-BUS Shield](https://github.com/Seeed-Studio/CAN_BUS_Shield)
- **[Datasheet]**[MCP2515 datasheet](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)
- **[Datasheet]**[MCP2551 datasheet](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)
- **[Demo]**[An OBD Demo](https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE)
- **[Tool]**[MCP2515 Baud Rate Tool](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)
- **[Tool]**[USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)
- **[Cable]**[DB9 to OBD2 Cable](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)
- **[Drawing]**[CAN BUS Shield v2.0 Drawing in PDF](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.pdf)
- **[Drawing]**[CAN BUS Shield v2.0 Drawing in DXF](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.dxf.zip)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
