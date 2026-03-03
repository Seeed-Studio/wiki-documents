---
description: The reComputer R1100 is a Raspberry Pi CM4-powered IoT gateway & controller with AI capabilities. Featuring 2GB RAM, 8GB eMMC, dual Ethernet, USB, RS485, RS232, DI/DO, and wireless connectivity (4G, LoRa®, Wi-Fi/BLE), it’s perfect for industrial automation & edge computing.
title: reComputer R1100 Getting Started
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer2.jpg
slug: /recomputer_r1100_intro
last_update:
  date: 2/25/2024
  author: Kasun Thushara
---

## Overview

The reComputer R1100, powered by the Raspberry Pi CM4, is a versatile edge IoT gateway with AI capabilities. It features a comprehensive range of industrial interfaces, including **2x Ethernet, 2x USB, 2x RS485, 2x RS232, 2x DI, and 2x DO**, along with flexible wireless connectivity options such as **4G, LoRa®, and Wi-Fi/BLE**. These features make it an ideal choice for various industrial applications.
The reComputer R1100 series is widely used in IoT applications, including **data acquisition and process monitoring, automation and robotics control, intelligent manufacturing, and industrial communication and networking**. Its compact size, flexibility, low cost, and programmability provide strong support for **automation, IoT systems, and beyond**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Features

**Designed for Automation & IoT Systems**  

- Supports **BACnet, Modbus RTU, Modbus TCP/IP, and KNX** protocols  
- Compatible with **Node-RED, CODESYS, Balena, and more**  
- **Dual-sided LED indicators** for quick status checks  
- **Durable metal casing**, compatible with **DIN-rail and wall mounting**  
- Supports **Yocto and Buildroot** for a customized OS  

**Powerful Performance**  

- Powered by **Raspberry Pi CM4**  
- **Broadcom BCM2711** quad-core **Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz**  
- Up to **8GB RAM** and **32GB eMMC storage**  

**Rich Wireless Capabilities**  

- **On-chip Wi-Fi and BLE**  
- **Mini-PCIe 1**: Supports **LTE, USB LoRa®, USB Zigbee**  
- **Mini-PCIe 2**: Supports **SPI LoRa®, USB LoRa®, USB Zigbee**  

**Comprehensive Interfaces**  

- **2x RS485 (isolated), 2x RS232 (isolated), 2x isolated DI ports, 2x isolated DO ports**  
- **1x 10M/100M/1000M Ethernet** (supports **PoE**)  
- **1x 10M/100M Ethernet**  
- **1x HDMI 2.0**  
- **2x Type-A USB 2.0**  
- **1x Type-C USB 2.0** (USB console for OS updates)  
- **1x MicroSD card slot**  
- **1x Nano SIM card slot (internal)**  

**Safety and Reliability**  

- **Hardware watchdog**  
- **Optional UPS supercapacitor**  
- **Metal casing with PC side panels**  
- **Electromagnetic Compatibility (EMC) Standards**:  
  - **ESD**: EN61000-4-2, Level 3  
  - **EFT**: EN61000-4-4, Level 2  
  - **Surge Protection**: EN61000-4-5, Level 2  
- **Production Lifetime**: The **reComputer R1100** will remain in production **until at least December 2030**  

## Specification

| **Parameter**          | **Description** |
|------------------------|----------------|
| **Hardware Specification** | |
| **Product Series** | R11xx-10, R11xx-00 |
| **CPU** | Raspberry Pi CM4, Quad-core Cortex-A72 @ 1.5GHz |
| **Operating System** | Raspbian, Debian, Yocto, Buildroot |
| **RAM** | 1GB / 2GB / 4GB / 8GB |
| **eMMC Storage** | 8GB / 16GB / 32GB |
| **System Specification** | |
| **Power Input** | DC 9V~36V, 2-pin Terminal Block |
| **PoE (as powered device)** | IEEE 802.3af Standard 12.95W PoE* |
| **Overvoltage Protection** | 40V |
| **Power Consumption** | Idle: 2.88W; Full Load: 5.52W |
| **Power Switch** | No |
| **Reboot Switch** | Yes |
| **Interface** | |
| **Ethernet** | 1x 10/100/1000Mbps (supports PoE*), 1x 10/100Mbps IEEE 802.3/802.3u |
| **USB** | 2x USB-A 2.0 Host, 1x USB-C 2.0 (for flashing OS) |
| **RS485** | 2x RS485 (Isolated) |
| **RS232** | 2x RS232 (Isolated) |
| **DI (Digital Input)** | 2x Isolated DI Ports, Input Voltage: 5~24V DC |
| **DO (Digital Output)** | 2x Isolated DO Ports, Output Voltage: &lt;60V DC |
| **SIM Card** | 1x Nano SIM Card Slot (Internal) |
| **SD Card** | 1x MicroSD Card Slot |
| **SSD** | 1x M.2 NVMe SSD Slot (2280-M Key) |
| **LED Indicators** | 12x LED Indicators |
| **Buzzer** | 1 |
| **Reset Button** | 1 |
| **HDMI** | 1x HDMI 2.0 |
| **Wireless Communication** | |
| **Wi-Fi 2.4/5.0GHz** | On-chip Wi-Fi* |
| **BLE 5.0** | On-chip BLE* |
| **LoRa®** | USB LoRa®*/ SPI LoRa®* |
| **4G Cellular** | 4G LTE* |
| **Zigbee** | USB Zigbee* |
| **Standards** | |
| **EMC Compliance** | ESD: EN61000-4-2, Level 3; EFT: EN61000-4-4, Level 2; Surge: EN61000-4-5, Level 2 |
| **Certification** | CE, FCC, TELEC, RoHS, REACH |
| **Environmental Conditions** | |
| **Ingress Protection** | IP40 |
| **Operating Temperature** | -30 ~ 70°C |
| **Operating Humidity** | 10 ~ 95% RH |
| **Storage Temperature** | -40 ~ 80°C |
| **Other Features** | |
| **Supercapacitor UPS** | SuperCAP UPS LTC3350 Module* |
| **Hardware Watchdog** | 1 ~ 255s |
| **RTC** | High Accuracy RTC |
| **Security** | |
| **Encryption Chip** | TPM 2.0*, ATECC608A |
| **Cooling System** | Fanless |
| **Warranty** | 2 years |
| **Production Lifetime** | Until December 2030 |
| **Statement** | Options marked with * require additional purchase according to the accessories list. |
| **Component & Interface Status** | |
| **Reserved** | Designated for future use or expansion. |
| **Optional** | Non-essential components; users can choose to include or exclude. |
| **Occupied** | Currently in use and integral to product functionality. |
| **Included** | Essential components provided with the standard package. |

**Statement**: Options marked with `*` require additional purchase according to the accessories list.

## Mechanical Dimensions  

| **Parameter** | **Description** |
|--------------|----------------|
| **Dimension (W x H x D)** | 130 mm x 93 mm x 49.6 mm |
| **Enclosure** | 6061 Aluminum Alloy Casing with Transparent PC Side Panels |
| **Mounting** | DIN-rail / Wall |
| **Weight (Net)** | 560g |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dimensions.PNG" style={{width:800, height:'auto'}}/></div>

## Hardware Overview

### System Overview

#### Interface Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/interface.PNG" style={{width:800, height:'auto'}}/></div>

#### Mainboard Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/mainboard.PNG" style={{width:800, height:'auto'}}/></div>

#### Power Diagram

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power.PNG" style={{width:800, height:'auto'}}/></div>

The reComputer R1100 offers two power supply options: a DC terminal and a PoE port. By default, it is powered via the DC terminal using the official regional power adapter (SKU: 110061505/110061506). Alternatively, an optional PoE power supply (PoE module, SKU: 110991925) is available. This flexibility allows seamless integration with different power sources, catering to various application needs.

**2-Pin Power Terminal**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

The reComputer R1100 operates on a DC voltage supply ranging from 9 to 36V, connected through a 2-pin power terminal block. For grounding, the ground wire can be securely attached to the screw located at the top left corner of the power terminal.

**PoE**

With the PoE module installed, the ETH0 port of the reComputer R1100 supports PoE power supply, offering a convenient and efficient way to power the device via Ethernet. This option simplifies installation and minimizes cabling, making it ideal for applications with limited power sources or locations without readily available power outlets.

- **PoE Input**: 44~57V (Typical: 48V)
- **PoE Output**: 12V, 1.1A Max

:::note
The included PoE module complies with the IEEE 802.3af standard and provides a maximum power output of 12.95W. However, for high-power peripherals such as SSDs or 4G modules, PoE power may not be sufficient. In such cases, it is recommended to use the DC terminal for power to ensure stable and reliable device operation.
:::

**Power Consumption**

The table below provides the tested power consumption values for the reComputer R1100, based on measurements conducted in Seeed Studio's laboratory. Please note that these values are for reference only, as variations in test methods and environmental conditions may affect the results.  

| **Status**   | **Voltage** | **Current** | **Power Consumption** | **Description** |
|-------------|------------|------------|----------------------|----------------|
| **Shutdown** | 24V | 51mA | 1.224W | Static power consumption test in shutdown and power-off state. |
| **Idle** | 24V | 120mA | 2.88W | Measures input current when supplying 24V power without running any test programs. |
| **Full Load** | 24V | 230mA | 5.52W | CPU runs at full load using the `"stress -c 4"` command, with no external devices connected. |

 **Power On and Power Off**  
The reComputer R1100 does not include a power button by default. The system automatically powers on when connected to a power source.  

- To shut down, use the shutdown option in the operating system and wait for the process to complete before disconnecting the power.  
- To restart the system, simply reconnect the power source.  

This ensures safe operation and prevents potential data loss or system issues.

#### Block Diagram

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

#### IIC Diagram

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/IIC.PNG" style={{width:600, height:'auto'}}/></div>

## Interface Description

| **Interface** | **Description** |
|--------------|----------------|
| **Ethernet** | 1 × 10/100/1000 Mbps (supports PoE*) , 1 × 10/100 Mbps (IEEE 802.3/802.3u) |
| **USB** | 2 × USB-A 2.0 (Host) , 1 × USB-C 2.0 (for flashing OS) |
| **RS485** | 2 × RS485 (Isolated) |
| **RS232** | 2 × RS232 (Isolated) |
| **DI (Digital Input)** | 2 × Isolated DI Ports , Input Voltage: 5~24V DC |
| **DO (Digital Output)** | 2 × Isolated DO Ports ,  Output Voltage: < 60V DC |
| **HDMI** | 1 × HDMI 2.0 |
| **SD Card Slot** | Supports MicroSD Card |
| **SIM Card Slot** | Supports Nano SIM Card |
| **M.2 Slot** | Supports M.2 NVMe SSD |
| **LED Indicators** | 12 × LED Indicators |
| **Buzzer** | 1 |
| **Reset Button** | 1 |  

### LED Indicator Status

The R1100 Computer features 12 LEDs for system status indication. Their specific functions are outlined in the table below.

Here is the **LED Indicator Status** table in a structured format:  

| **LED Indicator** | **Color** | **Status** | **Description** |
|------------------|---------|-----------|----------------|
| **PWR** | Green | On | Device is connected to power. |
| | | Off | Device is not connected to power. |
| **ACT** | Green | Flashing | Indicates eMMC access under Linux. If an error occurs during boot, it flashes an error pattern (refer to Raspberry Pi documentation). |
| **USER** | Green/Red/Blue | User-defined | Can be programmed by the user. |
| **4G** | Green | On | Dial-up is successful, and the connection is normal. |
| | | Off | 4G signal is not connected, or the device is not powered on. |
| **DI1** | Green | On/Blink | Input signal detected. |
| | | Off | No power or no data transmission. |
| **DI2** | Green | On/Blink | Input signal detected. |
| | | Off | No power or no data transmission. |
| **DO1** | Green | On/Blink | Output signal detected. |
| | | Off | No power or no data transmission. |
| **DO2** | Green | On/Blink | Output signal detected. |
| | | Off | No power or no data transmission. |
| **COM1 (RS485 Channel 1)** | Green | On/Blink | Receiving or sending data. |
| | | Off | No data transfer on RS485 Channel 1. |
| **COM2 (RS485 Channel 2)** | Green | On/Blink | Receiving or sending data. |
| | | Off | No data transfer on RS485 Channel 2. |
| **COM3 (RS232 Channel 1)** | Green | On/Blink | Receiving or sending data. |
| | | Off | No data transfer on RS232 Channel 1. |
| **COM4 (RS232 Channel 2)** | Green | On/Blink | Receiving or sending data. |
| | | Off | No data transfer on RS232 Channel 2. |

### ACT Status Codes

Here's a structured table for the **ACT Status Codes**:  

| Long Flashes | Short Flashes | Status Description |
|-------------|--------------|--------------------|
| 0 | 3 | Generic failure to boot |
| 0 | 4 | `start*.elf` not found |
| 0 | 7 | Kernel image not found |
| 0 | 8 | SDRAM failure |
| 0 | 9 | Insufficient SDRAM |
| 0 | 10 | In HALT state |
| 2 | 1 | Partition not FAT |
| 2 | 2 | Failed to read from partition |
| 2 | 3 | Extended partition not FAT |
| 2 | 4 | File signature/hash mismatch (Pi 4) |
| 4 | 4 | Unsupported board type |
| 4 | 5 | Fatal firmware error |
| 4 | 6 | Power failure type A |
| 4 | 7 | Power failure type B |

**Additional Notes:**  

- If the **ACT LED blinks in a regular four-blink pattern**, it indicates that bootcode (`start.elf`) is missing.  
- If the **ACT LED blinks in an irregular pattern**, the boot process has started.  
- If the **ACT LED does not blink at all**, the EEPROM code might be corrupted. Try booting without any connected peripherals.  
- For more details, refer to the **Raspberry Pi Forum**: [Is your Pi not booting? (Boot Problems Sticky)](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

**USER indicator**

The reComputer R1100 includes a **USER** indicator, which can be customized based on user requirements.  

**Note:**  
For details on **USER LED** testing, please refer to [This Section](https://wiki.seeedstudio.com/recomputer_r1100_configure_system/#control-led-indicators).

### Buzzer

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/buzzer.PNG" style={{width:600, height:'auto'}}/></div>

The reComputer R1100 is equipped with an active buzzer, which can be used for alarms and event notifications.  

To check the GPIO corresponding to **Buzzer_EN**, enter the following command in the terminal:  

```
cat /sys/kernel/debug/gpio
```

This will output **gpio587** as the assigned GPIO for the buzzer.  

**Note:**  
For details on **buzzer testing**, please refer to [This Section](https://wiki.seeedstudio.com/recomputer_r1100_configure_system/#controlling-the-buzzer-via-gpio).

### RS485

The reComputer R1100 series features **two RS485 ports** with **6-pin 3.5mm spacing Phoenix terminals**. Each RS485 port is labeled with the silkscreen notation **"A/B/GND"** for easy identification.  

**Pin Definitions**  
The terminal pin assignments are as follows:  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485.PNG" style={{width:600, height:'auto'}}/></div>

| **Pin ID** | **Pin Name**  |  
|-----------|-------------|  
| 1         | RS485-1_A   |  
| 2         | RS485-2_A   |  
| 3         | RS485-1_B   |  
| 4         | RS485-2_B   |  
| 5         | GND         |  
| 6         | GND         |  

Connecting Cables
The schematic diagram of RS485 wiring is as follows:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
The product packaging includes 120 Ohm terminal resistors, which can be used as needed for RS485 communication.
:::

For details on RS485 testing, please refer to [This Section](https://wiki.seeedstudio.com/recomputer_r1100_configure_system/#rs485-testing).

### RS232

The reComputer R1100 series features 2x RS232 ports with 6-pin 3.5mm spacing Phoenix terminals.
The silkscreen labeling for a single RS232 port is **TX/RX/GND**.

**Pin Definition**

The terminal pins are defined as follows:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285.PNG" style={{width:600, height:'auto'}}/></div>

Here is the table for the RS232 pin definitions:

| **Pin ID** | **Pin Name**  |
|-----------|--------------|
| 13        | R232-3_RX    |
| 14        | R232-4_RX    |
| 15        | R232-3_TX    |
| 16        | R232-4_TX    |
| 17        | GND          |
| 18        | GND          |

**Connecting Cables**

The schematic diagram of RS232 wiring is shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
For detailed RS232 testing instructions, please refer to For details on RS485 testing, please refer to [This Section](https://wiki.seeedstudio.com/recomputer_r1100_configure_system/#rs232-testing).

:::

### DI (Digital Input)

The reComputer R1100 series includes 2x DI ports with 3-Pin 3.5mm spacing Phoenix terminals.  
The silkscreen labeling for a single DI port is **"DI/G_DI"**.  

**Pin Definition**

The terminal pins are defined as follows:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI.PNG" style={{width:600, height:'auto'}}/></div>

Here is the table for the **DI (Digital Input) Pin Definition**:  

| **Pin ID** | **Pin Name** |
|-----------|------------|
| 7         | DI1        |
| 9         | DI2        |
| 11        | G_DI       |

**Connecting Cables**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI_connect.PNG" style={{width:600, height:'auto'}}/></div>

Here is the table for the **DI (Digital Input) Parameters**:  

| **Parameter**           | **Description**    |
|------------------------|-------------------|
| Input Type            | PNP               |
| Isolation Protection  | 5 kV              |
| DI to G_DI (ON state) | 5~30 VDC          |

:::note
For details on DI testing, please refer to [This Section](https://wiki.seeedstudio.com/recomputer_r1100_configure_system/#di-digital-input-testing).
:::

### DO (Digital Output)

The reComputer R1100 series equipment includes 2x DO ports, 3-Pin 3.5mm spacing phoenix terminals.  The silkscreen of single DO is **"DO/G_DO".**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO.PNG" style={{width:600, height:'auto'}}/></div>

**Pin Definition Table**

| Pin ID | Pin Name |  
|--------|------------|  
| 8      | DO1       |  
| 10     | DO2       |  
| 12     | G_DO      |

 **Connecting Cables**

 Schematic diagram of a single DO wires is as follws:

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO_connect.PNG" style={{width:600, height:'auto'}}/></div>

**DO Port Parameters**

| Parameter            | Description     |  
|----------------------|----------------|  
| Output Type         | Transistor      |  
| Isolation Protection | 5 kV           |  
| Output Note        | &lt; 60VDC         |

:::note
For details on DO testing, please refer to [This Section](https://wiki.seeedstudio.com/recomputer_r1100_configure_system/#do-digital-output).
:::

### Boot Switch

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/Boot.PNG" style={{width:200, height:'auto'}}/></div>

The Boot Switch on the reComputer R1100 is linked to the nRPI_BOOT pin of the CM4 module. This switch allows users to select the boot source between eMMC and USB.  

- **Normal Mode:** Set the switch **away** from the "BOOT" label to boot from eMMC.  
- **Flashing Mode:** Set the switch **towards** the "BOOT" label to boot from the Type-C USB interface for system image flashing.

Here is the table for the Boot Switch positions and their corresponding modes:  

| **Switch Position** | **Mode**       | **Description**      | **nRPI-BOOT** |
|---------------------|---------------|----------------------|---------------|
| Away from "BOOT"   | Normal Mode    | Boot from eMMC       | Low           |
| Towards "BOOT"     | Flash Mode     | Boot from USB        | High          |

### USB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/usb.PNG" style={{width:200, height:'auto'}}/></div>

The reComputer R1100 features one USB Type-C port and two USB Type-A ports. The table below outlines their functions and descriptions.

Here is the table for the USB ports and their functions:  

| **Type**   | **Quantity** | **Protocol** | **Function**   | **Description** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | 1          | USB 2.0    | USB-Device   | Used for serial port debugging, burning images, etc. |
| Type-A   | 2          | USB 2.0    | USB-Host     | Connects different USB devices such as flash drives, USB keyboards, or mice. |

### SD Slot

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SD.PNG" style={{width:200, height:'auto'}}/></div>

The reComputer R1100 series equipment includes a micro SD card slot, which is used to install a micro SD card for storing user data.

### SIM Slot(Internal)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/simslot.PNG" style={{width:600, height:'auto'}}/></div>

The reComputer R1100 series includes an internal Nano SIM card slot, designed for installing a Nano SIM card to enable 4G connectivity. The table below illustrates the size differences between Standard SIM, Micro SIM, and Nano SIM cards.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SIMsizes.PNG" style={{width:400, height:'auto'}}/></div>

:::note
The standard version of the reComputer R1100 does not include a built-in 4G module. If 4G functionality is required, an additional 4G module must be purchased separately. For more details, please refer to [This Section](https://wiki.seeedstudio.com/recomputer_r1100_intro/#optional-interfaces-and-modules).
:::

### SSD Slot

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SSD.PNG" style={{width:600, height:'auto'}}/></div>

The reComputer R1100 is equipped with an **NVMe M.2 2280 SSD slot**, supporting storage capacities of **128GB, 256GB, 512GB, and 1TB**. This slot enables high-speed storage expansion, allowing users to enhance both the **performance** and **capacity** of their system.  

**Note:**  
There are two primary uses for SSD cards:  

1. **High-Capacity Storage** – SSDs can be used for large storage needs.  
2. **Boot Drive with System Image** – Some SSDs can be used both as high-capacity storage and as a boot drive for the system.  

However, not all SSDs support boot functionality. If you plan to use an SSD as a boot drive and are unsure which model to purchase, we recommend the **1TB SSD (SKU112990267)**, as it has been tested and verified for boot functionality. This reduces compatibility issues and minimizes trial-and-error costs.

### Mini-PCIe Slots on reComputer R1100

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/pci.PNG" style={{width:600, height:'auto'}}/></div>

The reComputer R1100 is equipped with **two Mini-PCIe slots**, supporting various communication protocols. The table below outlines the supported protocols for each slot:  

| **Slot**       | **Supported Protocols**   |  
|---------------|--------------------------|  
| **Mini-PCIe 1** | 4G LTE, USB LoRa®, USB Zigbee |  
| **Mini-PCIe 2** | SPI LoRa®, USB LoRa®, USB Zigbee |  

These slots allow users to expand connectivity options, enabling integration with **4G LTE, LoRa®, and Zigbee** modules as needed.

This device includes two **Mini-PCIe interfaces**: **Slot 1** and **Slot 2**.  

- **Mini-PCIe Slot 1** is linked to the **SIM card slot** and supports **USB protocols**, making it suitable for connecting **4G LTE, USB LoRa®, and USB Zigbee** modules.  
- **Mini-PCIe Slot 2** supports **both USB and SPI protocols** but is **not connected** to the SIM card slot. It can accommodate **SPI LoRa®, USB LoRa®, and USB Zigbee** devices.  

These slots provide flexible expansion options for various wireless communication modules.

### Reset Hole  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reset.PNG" style={{width:200, height:'auto'}}/></div>

The reComputer R1100 features a **Mini Push Button Switch** located within the reset hole. By pressing this button with a thin object, users can **reset the CM4**.  

- When this pin is **high**, it indicates that the **CM4 has started**.  
- When this pin is **driven low**, it **resets the module**.

### Ethernet RJ45  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/eth.PNG" style={{width:200, height:'auto'}}/></div>

The **reComputer R1100** is equipped with two Ethernet ports:  

| Name  | Type                         | Speeds              | PoE Support                |
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | CM4 Native Gigabit Ethernet  | 10/100/1000 Mbit/s  | Supported (with additional module) |
| ETH1  | Converted from USB           | 10/100 Mbit/s       | Not Supported             |

The **reComputer R1100** is equipped with two Ethernet RJ45 ports:  

- **ETH0**: A **CM4 native Gigabit Ethernet** interface supporting **10/100/1000 Mbit/s** speeds. It can be upgraded with an additional **PoE module** to enable **Power over Ethernet (PoE)** for powering the device.  
- **ETH1**: A **USB-converted Ethernet** interface supporting **10/100 Mbit/s** speeds, but **PoE is not supported**.

**Note**  
For more details about PoE, please refer to [This Section](https://wiki.seeedstudio.com/recomputer_r1100_intro/#poe-power-over-ethernet).

### HDMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/display.PNG" style={{width:200, height:'auto'}}/></div>

The reComputer R1100 features a native HDMI interface from the CM4, supporting up to **4K@60fps** video output. It is ideal for applications requiring multiple displays, enabling users to output content to external large screens.

### RTC  

The reComputer R1100 includes an **RTC (Real-Time Clock) circuit** with a pre-installed **CR2032 battery**, ensuring accurate timekeeping even during power loss.  

:::note
For details on RTC testing, please refer to [This Section](https://wiki.seeedstudio.com/recomputer_r1100_intro/#rtc-real-time-clock-testing).
:::  

### Watchdog  

The reComputer R1100 features an **independent hardware watchdog circuit** that automatically reboots the system in the event of a crash. This watchdog is implemented through the **RTC** and allows for **flexible feeding times ranging from 1 to 255 seconds**.  

:::note
For details on watchdog testing, please refer to [This Section](https://wiki.seeedstudio.com/recomputer_r/#watchdog).
:::

## Optional Interfaces and Modules  

The reComputer R1100 supports a **wide range of expansion modules and accessories**, making it adaptable to various use cases. If you are interested in customizing the reComputer R1100, please contact **odm@seeed.cc** for more information.  

#### List of Accessories and Optional Modules

Here is the formatted table for better readability:  

| **Remark**                                     | **Item**               | **Product Name**                                      | **SKU**         |
|------------------------------------------------|------------------------|------------------------------------------------------|----------------|
| **Must be used together for LoRa® WAN Function** | LoRa® Module           | Region optional LoRaWAN Gateway Module (SPI) - US915 | 114992969      |
|                                                |                        | Region optional LoRaWAN Gateway Module (SPI) - EU868 | 114993268      |
|                                                |                        | Region optional LoRaWAN Gateway Module (USB) - US915 | 114992991      |
|                                                |                        | Region optional LoRaWAN Gateway Module (USB) - EU868 | 114992628      |
| **LoRa® Antenna**                              | LoRa® Antenna          | LoRa Antenna Kit - 868-915MHz                        | 110061501      |
| **Zigbee Module**                              | Zigbee Module         | Mini-PCIe USB Zigbee Module                          | 110992005      |
| **Zigbee Antenna**                             | Zigbee Antenna        | Zigbee Antenna Kit for reComputer R1100             | 110061641      |
| **This accessory is required for Wi-Fi function** | Wi-Fi/BLE Antenna     | Raspberry Pi Compute Module 4 Antenna Kit           | 114992364      |
| **4G Antenna with 4G module for 4G function, GPS Antenna with 4G module for GPS function** | 4G Module | LTE Cat 4 EC25-AFXGA Mini-PCIe Module - North America | 113991134      |
|                                                |                        | LTE Cat 4 EC25-EUXGR Mini-PCIe Module - EMEA & Thai  | 113991135      |
|                                                |                        | LTE Cat 4 EC25-AUXGR Mini-PCIe Module - Australia    | 113991174      |
|                                                |                        | LTE Cat 4 EC25-EFA Mini-PCIe Module - Thailand       | 113991214      |
|                                                |                        | LTE Cat 4 EC25-EMGA Mini-PCIe Module - Malaysia      | 113991234      |
|                                                |                        | LTE Cat 4 EC25-JFA Mini-PCIe Module - Japan          | 113991296      |
| **4G Antenna**                                 | 4G Antenna            | 4G Antenna Kit for 4G module                        | 110061502      |
| **GPS Antenna**                                | GPS Antenna           | GPS Antenna Kit for EC25 4G Module                  | 110061521      |
| **Encryption Chip**                            | TPM 2.0               | TPM 2.0 Module with Infineon SLB9670                | 114993114      |
| **SSD Storage**                                | SSD Card              | NVMe M.2 2280 SSD 1TB                               | 112990267      |
|                                                |                        | 512GB NVMe M.2 PCIe Gen3x4 2280 Internal SSD        | 112990247      |
|                                                |                        | 256GB NVMe M.2 PCIe Gen3x4 2280 Internal SSD        | 112990246      |
|                                                |                        | 128GB NVMe M.2 PCIe Gen3x4 2280 Internal SSD        | 112990226      |
| **This module needs to be soldered onto the carrier board of the reComputer R1100** | PoE | MQ7813T120 PoE Module Kit for reTerminal DM | 110991925 |
| **UPS**                                        | UPS                   | SuperCAP UPS LTC3350 Module                         | 110992004      |

The **reComputer R1100** mainboard has **two Mini-PCIe slots** with the following compatibility:  

- **Mini-PCIe Slot 1** supports:  
  - **4G module** (USB protocol)  
  - **LoRa® module** (USB protocol)  
  - **Zigbee module** (USB protocol)  

- **Mini-PCIe Slot 2** supports:  
  - **LoRa® module** (USB & SPI protocol)  
  - **Zigbee module** (USB protocol)  

:::note
 **4G and LoRa® modules cannot be used at the same time.**  
 **You cannot plug in two LoRa® modules on the board.**  

:::

This means you need to choose between using **4G or LoRa®**, and you can only have **one** LoRa® module installed at a time.

### Wi-Fi/BLE  

The **reComputer R1100-10** is powered by the **CM4** with an onboard **Wi-Fi/BLE version**, providing the same Wi-Fi/BLE parameters as the CM4. For detailed specifications, refer to the **Raspberry Pi official website**.  

### 4G Module

The **reComputer R1100** mainboard features **two Mini-PCIe slots**, with **Mini-PCIe Slot 1** supporting a **4G module via the USB protocol**. The **Quectel EC25 4G module** has been fully tested for compatibility with the reComputer R1100.  

:::note
If you require **4G functionality**, you must **purchase the corresponding 4G module and an external antenna**, and follow the instructions in [Assemble 4G/LoRa®/Zigbee Module and Antenna](https://wiki.seeedstudio.com/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna).
:::

### LoRa® Module  

Both **Mini-PCIe slots** support **LoRa® modules via the USB protocol**. Additionally, **Mini-PCIe Slot 2** supports a **LoRa® module using the SPI protocol**. The **WM1302 module from Seeed Studio** has been fully tested for compatibility with the reComputer R1100.

:::note
If you require **LoRa® functionality**, you must **purchase the corresponding LoRa® module and an external antenna**, and follow the instructions in [Assemble 4G/LoRa®/Zigbee Module and Antenna](https://wiki.seeedstudio.com/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna).
:::

### Zigbee Module

The Mini-PCIe slots support **Zigbee modules using the USB protocol**, allowing seamless integration of Zigbee functionality into compatible devices. This enables efficient communication and control within Zigbee networks, enhancing the system's versatility and connectivity. With two Mini-PCIe slots available for Zigbee modules, users have the flexibility to implement diverse applications for enhanced reliability.

:::note  
 If you require **Zigbee functionality**, you must **purchase the corresponding Zigbee module and an external antenna**, and follow the instructions in [Assemble 4G/LoRa®/Zigbee Module and Antenna](https://wiki.seeedstudio.com/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna).  
:::

### PoE (Power over Ethernet)

The **reComputer R1100 supports the IEEE 802.3af PD (Powered Devices) standard** by adding a **PoE power supply module**. The **PoE seat is pre-soldered on board**, but users must **disassemble the device to install the PoE module** for Ethernet PoE functionality.  

For disassembly guidance, please refer to [Disassembly Guide](https://wiki.seeedstudio.com/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-ups-and-poe-module)  

:::note  

- The **reComputer R1100 supports PoE power supply, but the standard product does not include a PoE module by default.**  
- **Seeed offers PoE soldering and assembly services for batch customization orders.**  
- For sample testing, customers must **solder and assemble the PoE module themselves**. Instructions are available in **"Assemble PoE Module"**.  

:::

### SSD (Storage Expansion)

The **reComputer R1100 supports 2280 NVMe SSDs** via a **PCIe slot (J62) located below the two Mini-PCIe slots on board**.  

:::note

- The **CM4’s PCIe interface is Gen 2.0**, with a **maximum theoretical speed of 5Gbps**.  
- If you use a **Gen 3.0 or higher SSD**, it may not reach its maximum speed.  
- **Test results from the reTerminal DM show:**  
  - **Maximum write speed:** 230MB/s  
  - **Maximum read speed:** 370MB/s  
- SSD compatibility may vary, so it is **recommended to purchase SSDs from the approved accessories list**.  

:::

**SSD Usage Scenarios:**  

- **High-Capacity Storage** – SSDs can be used to expand storage space.  
- **Boot Drive with System Image** – Some SSDs can store system images and **boot directly from the SSD**.  

:::note
**Not all SSDs support boot functionality!**  
If you need an SSD for booting and are unsure which one to buy, Seeed **recommends the 1TB SSD (SKU: 112990267)**, which has been **tested and verified for boot functionality**, minimizing compatibility risks and troubleshooting costs.  
:::

### Encryption Chip - TPM 2.0  

The reComputer R1100 supports **Infineon’s OPTIGA™ TPM SLB9670**, which complies with the **Trusted Computing Group (TCG) TPM 2.0** specification.  

**Key Features:**  

- **Encryption chip for security**  
- **SPI interface** (connected to **port J13** on the board)  
- **Provides a root of trust** for:
  - **Platform integrity**
  - **Remote attestation**
  - **Cryptographic services**  

:::note  
For installation instructions, refer to [Assemble TPM 2.0 Module](https://wiki.seeedstudio.com/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-tpm-20-module)  

:::

### UPS (Uninterruptible Power Supply) Module

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/UPS.PNG" style={{width:600, height:'auto'}}/></div>

The **UPS module** in the reComputer R1100 is a **7F supercapacitor-based** power backup system that operates **in series**.  

**How It Works:**  

1. Positioned between the **DC 5V power supply** and the **CM4**.  
2. Uses a **GPIO signal** to notify the **CPU** when the **5V power supply fails**.  
3. The CPU runs an **emergency script** before power depletion.  
4. The script executes a **"$ shutdown"** command for safe system shutdown.  

**Backup Duration:**  
The **UPS runtime** depends on the **system load**. Below are test results with:  

- **CM4 (4GB RAM, 32GB eMMC, Wi-Fi module).**  

## Additional Resources

- [reComputer R1100 3D File](https://files.seeedstudio.com/R11/reComputer%20R1100_3D.stp)
- [reComputer R1100 Schematic Design, PCB Design](https://files.seeedstudio.com/R11/reComputer%20R1100_schematic_design_files.zip)
- [reComputer R1100 Flyer](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer-R1100/reComputer-R1100-flyer.pdf)
- [User Manual](https://files.seeedstudio.com/R11/reComputer%20R1100%20User%20Manual-V1.0.pdf)

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
