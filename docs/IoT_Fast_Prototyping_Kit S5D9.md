---
name: IoT Fast Prototyping Kit S5D9
category: Tutorial
oldwikiname:  IoT Fast Prototyping Kit S5D9
prodimagename:  
surveyurl: https://www.research.net/r/IoT_Fast_Prototyping_Kit_S5D9_User_Manual
---

## **IMPORTANT NOTICE AND DISCLAIMER**

1. Descriptions of circuits, software and other related information in this document are provided only to illustrate the operation of semiconductor products and application examples. You are fully responsible for the incorporation of these circuits, software, and information in the design of your equipment. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from the use of these circuits, software, or information.

2. Renesas Electronics has used reasonable care in preparing the information in this document, but Renesas Electronics does not warrant that such information is error free. Renesas Electronics assumes no liability whatsoever for any damages incurred by you resulting from errors in or omissions from the information included herein.

3. Renesas Electronics does not assume any liability for infringement of patents, copyrights, or other intellectual property rights of third parties by or arising from the use of Renesas Electronics products or technical information described herein. No license, express, implied or otherwise, is granted hereby under any patents, copyrights or other intellectual property rights of Renesas Electronics or others.

4. You should not alter, modify, copy, or otherwise misappropriate any Renesas Electronics product, whether in whole or in part. Renesas Electronics assumes no responsibility for any losses incurred by you or third parties arising from such alteration, modification, copy or otherwise misappropriation of Renesas Electronics product.

5. Renesas Electronics products are classified according to the following two quality grades: &quot;Standard&quot; and &quot;High Quality&quot;. The recommended applications for each Renesas Electronics product depends on the product&#39;s quality grade, as indicated below.

    - &quot;Standard&quot;: Computers; office equipment; communications equipment; test and measurement equipment; audio and visual equipment; home electronic appliances; machine tools; personal electronic equipment; and industrial robots etc.

    - &quot;High Quality&quot;: Transportation equipment (automobiles, trains, ships, etc.); traffic control systems; anti-disaster systems; anti-crime systems; and safety equipment etc.

    - Renesas Electronics products are neither intended nor authorized for use in products or systems that may pose a direct threat to human life or bodily injury (artificial life support devices or systems, surgical implantations etc.), or may cause serious property damages (nuclear reactor control systems, military equipment etc.). You must check the quality grade of each Renesas Electronics product before using it in a particular application. You may not use any Renesas Electronics product for any application for which it is not intended. Renesas Electronics shall not be in any way liable for any damages or losses incurred by you or third parties arising from the use of any Renesas Electronics product for which the product is not intended by Renesas Electronics.

7.  You should use the Renesas Electronics products described herein within the range specified by Renesas Electronics, especially with respect to the maximum rating, operating supply voltage range, movement power voltage range, heat radiation characteristics, installation and other product characteristics. Renesas Electronics shall have no liability for malfunctions or damages arising out of the use of Renesas Electronics products beyond such specified ranges.

8. Although Renesas Electronics endeavors to improve the quality and reliability of its products, semiconductor products have specific characteristics such as the occurrence of failure at a certain rate and malfunctions under certain use conditions. Further, Renesas Electronics products are not subject to radiation resistance design. Please be sure to implement safety measures to guard them against the possibility of physical injury, and injury or damage caused by fire in the event of the failure of a Renesas Electronics product, such as safety design for hardware and software including but not limited to redundancy, fire control and malfunction prevention, appropriate treatment for aging degradation or any other appropriate measures. Because the evaluation of microcomputer software alone is very difficult, please evaluate the safety of the final products or systems manufactured by you.

9. Please contact a Renesas Electronics sales office for details as to environmental matters such as the environmental compatibility of each Renesas Electronics product. Please use Renesas Electronics products in compliance with all applicable laws and regulations that regulate the inclusion or use of controlled substances, including without limitation, the EU RoHS Directive. Renesas Electronics assumes no liability for damages or losses occurring as a result of your noncompliance with applicable laws and regulations.

9. Renesas Electronics products and technology may not be used for or incorporated into any products or systems whose manufacture, use, or sale is prohibited under any applicable domestic or foreign laws or regulations. You should not use Renesas Electronics products or technology described in the board design files for any purpose relating to military applications or use by the military, including but not limited to the development of weapons of mass destruction. When exporting the Renesas Electronics products or technology described in this document, you should comply with the applicable export control laws and regulations and follow the procedures required by such laws and regulations.

10. It is the responsibility of the buyer or distributor of Renesas Electronics products, who distributes, disposes of, or otherwise places the product with a third party, to notify such third party in advance of the contents and conditions set forth in this document, Renesas Electronics assumes no responsibility for any losses incurred by you or third parties as a result of unauthorized use of Renesas Electronics products.

Please contact a Renesas Electronics sales office if you have any questions regarding the information contained in this document or Renesas Electronics products, or if you have any other inquiries.

## Quick Start Guide

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/Quick%20Start%20Guide.jpeg)

- The link of Step4: [www.renesas.com/iotsandbox/S5D9/tutorial](http://www.renesas.com/iotsandbox/S5D9/tutorial)

- The link of Step5: [www.renesas.com/iotsandbox/S5D9/getstarted](http://www.renesas.com/iotsandbox/S5D9/getstarted)

## 1. Overview

The S5D9 IoT Fast Prototyping Kit features include the following interface options:

- RJ45 10/100Mbps Ethernet x1
- USB Full Speed x1
- PMOD x1
- Grove Connectors (UART, I2C, GPIO) x2
- Protected Digital Input x2
- Buffered Digital Output x2
- RS232 Transceiver x2
- JTAG Connector x1

The kit also includes the following on-board sensors:

- Bosch BMC 150 6-Axis sensor
- AMS ENS210 environmental sensor
- TE Connectivity MS5637-02BA03 barometric pressure sensor
- Knowles SPU0414HR5H-SB amplified SiSonic microphone


### 1.1 S5D9 MCU Board

The S5D9 MCU Board is the heart of the IoT Fast Prototyping Kit. It enables the fast prototyping of applications that require wired Ethernet and USB connectivity along with PMOD and Grove expansion options.

The board includes 24V tolerant digital inputs with overvoltage protection suitable for use in noisy industrial environments. The board can also control two digital loads such as solenoids powered with 24V and drawing up to 1A current. The included MOSFET drivers have built-in overcurrent and over temperature protection that ensure robust operation.

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/S5D9_MCU_Board.png)

The S5D9 board incorporates a Renesas Synergy Microcontroller with a 640K KB RAM and a 2 MB flash memory. In addition, the board has a 16 MB external flash memory connected through a QSPI interface.

The board can be powered using an industrial Molex connector, or through a USB device connector.

The board offers a variety of expansion options with one PMOD and 2 Grove connectors. The PMOD interface has designated jumper enabling the interface with either 3.3 V or 5 V powered modules.

The Grove connections consist of one UART interface and one I2C interface. The Grove connectors can power either 3.3V modules only.

The board also includes a JTAG interface for programming and debugging.

## 2. S5D9 IoT Fast Prototyping Kit Specification

### 2.2.1 Electrical Specifications

The S5D9 Fast Prototyping Kit specifications are listed in Table 2.1.

Table 2.1 Electrical Specifications

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/Table%202.1%20Electrical%20Specifications.png)

### 2.2.2 Connection Diagram

The IoT Fast Prototyping kit is intended to enable quick prototyping of various applications. Figure 2.1 shows the connection of components included in the kit for running the lab with the pre-installed firmware on the board or for designing new applications and downloading firmware over the JTAG interface.

Figure 2.1 Connection Diagram

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/Connection%20Diagram.png)

## 3. S5D9 MCU Board Description

### 3.1 Block Diagram

The main functional blocks of the S5D9 board are presented in Figure 3.1.

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/Figure%203.1.png)

Figure 3.1 S5D9 board main functional blocks

The various modules are as follows:

- The Synergy MCU that is designated as the heart of the kit by the S5D9 block
- A power management module that includes 3V3 LDO voltage regulator required for the operation of the microcontroller.
- SPI Flash – the S5D9 flash memory is expanded with external 32 MB memory module connected over a high-speed QSPI interface. The external flash can be used for storage of graphics and other digital assets, or for execution of code in place (XIP).
- User-defined LEDs – the user-defined LEDs are useful in indicating the current state of the firmware. The 3 LEDs have different colors for easy identification.
- USB device interface – the S5D9 MCU includes one USB interface block operating in Full Speed. The USB device connector can be used to power the board.
- PMOD interface – the board includes one 12-pin PMOD interface that can be configured by jumpers to provide either 3.3V or 5V on their power pins. This feature expands the range of peripheral modules without the need for external level shifters or power supply.
- Grove interfaces – the Grove connectors are compatible with the Seeed Studio&#39;s line of peripheral modules that feature a very large selection of sensors and actuators. One of the Grove connectors can be configured to communicate over the UART and the other is dedicated for I2C interface.
- JTAG interface that is available on a 10-pin connector, J20 compatible with Segger debugging probe. Alternatively, a 14-pin Tag-Connect interface probe can be used to program and debug the device.

### 3.2 Components Layout

The following figure calls out the main components of the S5D9 MCU board.

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/Block%20Diagram.png)

**Figure 3.2  S5D9 MCU board main components**

The MCU at the heart of the board is a Renesas Synergy S5D9 device. It is based on the ARM Cortex-M4F core running at 120 MHz. The CPU features a floating point unit and vector interrupt control unit. The MCU adds high-performance, zero wait-state flash and rich peripheral set that makes it suitable for a broad range of applications.

The 32 MB QSPI flash memory is Micron N25Q256A13EF840E. It can be used to store digital assets needed by the GUI design or even an executable code.

## 4. Power Supply

The IoT Fast Prototyping Kit requires a single 5V power supply source. It can be provided through the USB Device connector J9 or through the Molex MicroBlade series connector J8.

Pin# shows the pin information for the power connectors, and Function shows the pin information for the USB connector.

Table 4.1 USB Device Connector (J9)

| Pin #        | Function |
| --- | --- |
| 1 | +5VDC |
| 2 | Data - |
| 3 | Data + |
| 4 | USB ID |
| 5 | Ground |

Figure 4.1 LDO regulator used in the MCU board.

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/LDO%20regulators%20and%20boost%20converter%20in%20MCU%20board.jpeg)

Figure 4.1 LDO regulators and boost converter in MCU board

## 5. PMOD and Grove Connectors

The S5D9 MCU board offers one PMOD connector. It can interface with modules that require UART, I2C, or SPI interface. The function of the PMOD is dependent on the initialization and the pin-muxing of the MCU. The PMOD connector pin map is shown in Table 5.1.

Table 5.1 PMOD Connector

| Pin #        | PMOD D |
| --- | --- |
| 1 | SSLB0/CTS9 – P2\_5 |
| 2        | MOSI/TXD9 – P2\_3 |
| 3 | MISO/RXD9 – P2\_2 |
| 4 | RSPCK/SCK9 – P2\_4 |
| 5 | GND |
| 6 | J6 defined 3.3/5V |
| 7 | GPIO – P7\_8/IRQ11 |
| 8 | GPIO – P2\_6/SSLB1\_A |
| 9 | GPIO – P2\_7/SSLB2\_A |
| 10 |  GPIO – P8\_1 |
| 11 |  GND |
| 12 | VCC (3.3V or 5V) |

The PMOD connector has a selectable power voltage provided by the J6 header. The jumper position for each voltage option is described in Table 5.2.

**Table 5.2** **PMOD Voltage Selection (J6)**

| Pins | Selected Voltage |
| --- | --- |
| 1 - 2 | 3.3V |
| 2 - 3 | 5V |

The Grove connectors offer the following interfaces:

- UART interface (Grove A)
- I2C interface (Grove B)

The pin-mapping of the connectors is described in Table 5.3.

**Table 5.3**  **Grove Connectors**

| Pins | Grove AUART | Grove BI2C |
| --- | --- | --- |
| 1 | P4\_10/RXD0 | P1\_0/SCL1 |
| 2 | P4\_11/TXD0 | P1\_1/SDA1 |
| 3 | 3.3V | 3.3V |
| 4 | GND | GND |

Figure 5.1 and Figure 5.2 show schematics for the PMOD and Grove connectors, respectively.

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/PMOD%20schematic.jpeg)

Figure 5.1 PMOD schematic

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/Grove%20connector%20schematic.jpeg)

Figure 5.2 Grove connector schematic

## 6. USB Interface

The S5D9 IoT Fast Prototyping kit provides USB device interface only. The wiring of the connector pins to the chip is shown in Table 6.1

Table 6.1 USB Micro B Type Receptacle - Device Mode (J9)

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/Table%206.1%20USB%20Micro%20B%20Type%20Receptacle%20-%20Device%20Mode.png)

Figure 6.1 describes the USB interface implementation:

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/USB%20interface%20implementation.jpeg)

Figure 6.1 USB interface implementation

## 7. Digital Inputs and Outputs

### 7.1 24V Tolerant Digital Inputs and Outputs

The S5D9 board includes 24V tolerant interface to digital inputs and features 1A rated MOSFETs suitable to drive inductive loads such as solenoids. The schematic below shows circuits related to these interfaces.

Figure 7.1 Digital Inputs and Outputs

The table below shows the mapping between the digital inputs, outputs and the matching MCU pins used for interfacing to them.

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/Digital%20Inputs%20and%20Outputs.jpeg)

Table 7.1 24V Tolerant Digital Inputs and Outputs Mapping

| Molex MicroBlade **Connector J7** | Pin Type | MCU Port |
| --- | --- | --- |
| 0 | Power +5V |   |
| 1 | Ground |   |
| 2 | Red |   |
| 3 | Input – INP1 | P1\_11 |
| 4 | Ground |   |
| 5 | Input – INP2 | P4\_9 |
| 6 | Ground |   |
| 7 | Power +24V |   |
| 8 | Output – OUT1 | P0\_8 |
| 9 | Power +24V |   |
| 10 | Output – OUT2 | P0\_9 |
| 11 | Power +24V |   |
| 12 | Ground |   |

The PMOD and Grove connectors also provide interface to the MCU ports that can be configured as digital inputs or outputs. They are 5V tolerant, so no level shifters are required when interfacing to 5V powered peripherals.

### 7.2 On-Board LEDs

The S5D9 board provides 3 on-board LEDs for user-defined functions. They are connected to general purpose output pins through a single resistor. The output active state is 1. When set, it turns the LED on. Table 7.2 describes the mapping between the LEDs and the ports that drive them.

Table 7.2 User Defined LED Mapping

| LED# | Color | Designator | Device Port/Pin |
| --- | --- | --- | --- |
| 0 | Green | LED1 | P1\_2 |
| 1 | Yellow | LED2 | P1\_3 |
| 2 | Red | LED3 | P1\_13 |

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/Mapping%20between%20LEDs%2C%20ports.png)

Figure 7.2 Mapping between LEDs, ports

## 8. Dual RS232 Interface

The S5D9 board provides dual RS232 interface transceiver. The serial interfaces are available on connector J8. The pin mapping of the connector to the MCU ports is described in the table below:

Table 8.1 Dual RS232 Interface

| Molex MicroBlade **Connector J7** | Pin Type | MCU Port |
| --- | --- | --- |
| 1 | Power +5V |   |
| 2 | Ground |   |
| 3 | TX1 | P3\_2/TXD2 |
| 4 | RX1 | P3\_1/RXD2 |
| 5 | Ground |   |
| 6 | TX2 | P6\_13/TXD7 |
| 7 | RX2 | P6\_14/RXD7 |
| 8 | Ground |   |

![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/Dual%20RS232%20Ports.png)

Figure 8.1 Dual RS232 Ports

## 9. JTAG Probe Interface

The JTAG probe interface is provided on the connector J2. The connector part number is Samtec FTSH-105-01-L-DV-007-K.

Table 9.1 JTAG Probe Interface - Connector J2

| Pin# | Direction | Description | Pin# | Direction | Description |
| --- | --- | --- | --- | --- | --- |
| 1 |   | Power 3V3 | 2 | Input | TMS |
| 3 |   | GND | 4 | Input | TCK |
| 5 |   | GND | 6 | Output | TDO |
| 7 |   | N.C | 8 | Input | TDI |
| 9 |   | GND | 10 | Input | RESET |


![](https://github.com/SeeedDocument/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/raw/master/img/JTAG%20probe%20interface%20connections.png)

Figure 9.1 JTAG probe interface connections

Alternatively, the JTAG interface is available on the connector J1 – designed to be used with Tag Connect 14-pin probe. The probe part number is Tag Connect XXXXXXX.

Table 9.2 JTAG Probe Interface - Connector J1

| Pin# | Type | Description | Pin# | Type | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | Input | TCK | 14 | Power | Ground |
| 2 | Power | Ground | 13 | Input | RESET |
| 3 | N.C. |   | 12 | Power | Ground |
| 4 | N.C. |   | 11 | Input | TDI |
| 5 | Output | TDO | 10 | N.C. |   |
| 6 | N.C. |   | 9 | Input | TMS |
| 7 | N.C. |   | 8 | Power | +3V3 |

Figure 9.2 JTAG probe interface connections

**Revision** History

| Rev. | Date | Description |
| --- | --- | --- |
| 1.00 | March 3, 2017 | Initial version |

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>