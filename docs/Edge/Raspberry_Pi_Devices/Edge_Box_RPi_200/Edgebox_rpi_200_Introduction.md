---
description: Getting Started Edge Controller 
title: Getting Started Edge Box RPI-200
keywords:
- Raspberry pi
- Edge Controller
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edge_Box_introduction
last_update:
  date: 2/29/2024
  author: Kasun Thushara
---

## Introduction


<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:400, height:'auto'}}/></div>

The EdgeBox-RPI-200 series serves as an all-in-one Raspberry Pi-based industrial edge computing controller, tailored for diverse industrial applications. Boasting high scalability and rugged hardware, it integrates seamlessly with the extensive Raspberry Pi industrial software ecosystem. This makes it an optimal choice for smart automation and Industrial Internet of Things (IIoT) solutions.

Edge controllers, as versatile alternatives to traditional PLCs and PACs, address both operational technology (OT) and information technology (IT) needs through carefully-designed operating systems. They ensure deterministic runtime and provide a computing environment for advanced tasks like analytics, enhancing utility across various industrial scenarios. With the contemporary workforce familiar with modern programming languages and developer kit environments due to the smartphone age, EdgeBox-RPI-200 series controllers offer a user-friendly interface. Their compact form factor enables real-time operation and multi-process control, serving diverse industrial purposes, including PLCs, PACs, IIoT Gateways, OPC UA Servers, and Industry PCs.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Features 

**All-in-One Controller:**  Integrates PLC, PAC, IIoT Gateway, OPC UA Server, and Industry PC functions.

**Powerful Processors:** Raspberry Pi Compute Module 4 with 4GB RAM, 16GB eMMC. Real-time operation, multi-process support.

**Rich IO and Interfaces:** Supports various industrial protocols.

**Communication Capabilities:** Wireless connectivity, Gigabit Ethernet. Compatible with multiple cloud services.

**Rugged Hardware Design:** Aluminum heatsink, 35mm DIN, wall mount.

**Raspberry Pi Ecosystem:** Compatible with Codesys, Node Red, MQTT, OPC UA, Ignition, etc.


## Specifications 


| Parameters                | Detail                                      |
|---------------------------|---------------------------------------------|
|**Basic**                   |                        |                                        
| CPU Core                  | 4-core Raspberry Pi CM4                     |
| Memory                    | 1GB 2GB 4GB 8GB                             |
| Storage                   | 8GB16GB 32GB                                |
| Wireless                 | WiFi                                        |
|                           | 2.4 GHz, 5.0 GHz IEEE 802.11 b/g/n/ac equipped|
| Bluetooth                | Bluetooth 5.0, BLE equipped                  |
| Cellular                 | Mini-PCIe support 4G LTE (Quectel EC20/EC25 tested) |
| LoRa®                     | Mini-PCIe support LoRaWAN® (Seeed WM1302 tested) |
| **Interface**             |                                        |
| Ethernet                 | 1000M RJ45 *1                               |
| HDMI                     | HDMI 2.0 up to 4k@60fps                      |
| USB                      | USB2.0 A*2                                  |
| RS Serial                | RS485 *1 (Isolated)                         |
|                           | RS232 *1                                    |
| M.2 socket               | 2242 NVME SSD card                          |
| DI                        | 2 (Isolated)                                |
|                           | DC input Voltage - 24V, Current - 1000mA    |
| DO                        | 2 (Isolated)                                |
|                           | Output voltage - under 60 V, current capacity - 500 mA |
| **Extra Features**        |                                            |
| Power Supply              | DC 12V - 36V                                |
| RTC                       | RTC                                         |
| Watch Dog Timer           | Standalone                                  |
| Encryption Chip           | Atecc608a (optional)                        |
| Uninterrupted Power Supply | UPS (optional)                              |
| Operation Temperature     | -20 to +60 °C                               |
| Certification             | RoHS, CE, FCC, TELEC, UKCA                  |

## Raspberry Pi Industrial Software Ecosystem

With the great Raspberry Pi industrial software ecosystem, you will find that EdgeBox has plentiful software and autonomous platforms supported.
- [**Codesys**](https://wiki.seeedstudio.com/Edgebox-rpi-200-codesys/)
- [**Ignition**](https://wiki.seeedstudio.com/Edgebox-rpi-200-ignition-edge/)
- [**N3uron**](https://wiki.seeedstudio.com/Edgebox-rpi-200-n3uron/)
- [**balena**](https://wiki.seeedstudio.com/Edgebox-rpi-200-balena-OS-setup/)
- **Node Red**

## Hardware Overview

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/interfaces.PNG" /></center>

## Block Diagram 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/blockdiagram.PNG" /></center>

## Multi-Func phoenix Connector 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/pinout.PNG" /></center>

## First Boot on

**Step 01:** Connect power lines to pin number 1 and 2 . pin number 1 is for power and pin number 2 is for ground. 


<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/power.PNG" /></center>

:::note
The PE signal is optional. If there is no EMI present, the PE connection can leave open. 
:::

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/EMI.PNG" /></center>

**Step 02**: Next, connect an Ethernet cable. Final Setup may look like this 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/connection.jpg" /></center>

**Step 03:** Afterward, you may need to identify the IP address. To do this, consider using IP scanning software or you can use router webUI. Once located, utilize SSH to establish communication with the Edge Box 200.

:::note
The User Name is pi and Password is raspberry
:::

Edge Box-200 comes to your hand pre installed raspberry pi OS.  You can use HDMI cable or connect your monitor and use graphical user interface too. for simplicity we can use VNC server. 

For that in command line type :

```sh
sudo raspi-config
```

:::note 
For a fresh OS installation, you will need to purchase a minimum development board that includes the function to select the boot mode for the Raspberry Pi CM4. The [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) is perfect for this purpose.
:::

**Step 04:** Then select  interface option 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig.PNG" /></center>


**Step 05:** Next select VNC and enable it 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig2.PNG" /></center>

**Step 06:** Next reboot the EdgeBox 

```sh
sudo reboot
```
Then using your local area network and your PC which is installed Real VNC you can directly interact with Edge-box 200 RPi GUI. 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/edgebox_vnc.PNG" /></center>

## Interfaces 

### Serial Ports  (RS232 and RS485)

Sometimes, you may need to communicate with RS232 or RS485 protocols with a client. The EdgeBox RPI 200 has separate ports for serial communication. The connections are as follows:

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/serial.PNG" /></center>

:::note 
The 120 Ohm termination resistor for RS485 has been installed inside. The RS485_GND signal is isolated with “GND” signal. If a shielded twisted pair wire is used, the RS485 _GND is connected to the shield.
:::

### DI&DO

Two digital isolated inputs and two digital outputs can be connected to the EdgeBox RPI 200 device. The pinout is shown below

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital.PNG" /></center>

To understand further about these connections, please refer to the diagram below

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital1.PNG" /></center>

:::note 
- DC voltage for input is 24V (+- 10%).
- DC voltage for output should be under 60V, the current capacity is 500ma.
- Channel 0 and channel 1 of input are isolated to each other
- Channel 0 and channel 1 of output are isolated to each other
:::

## Additional Resources

- [Edgebox Broadsheet](https://files.seeedstudio.com/wiki/Edge_Box/Seeed_Studio_Edgebox-RPi-200.pdf)
- [Edgebox User Manual](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf)
- [EdgeBox 3D File](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox_RPi_200_3D_file.stp)

## Tech support



Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>