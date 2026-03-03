---
description: This wiki explains how to install and configure the Quectel RM520N 5G module on Jetson devices, covering hardware setup steps and necessary AT commands.
title: Quectel RM520N Module for Jetson
keywords:
  - Edge
  - reComputer
  - Jetson
  - 4G/5G
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/RM520N.webp
slug: /rm520n_module_for_jetson
last_update:
  date: 11/25/2025
  author: Youjiang
---

The RM520N is a series of 5G IoT modules specially optimized for IoT/eMBB applications, designed in an M.2 form factor in accordance with the 3GPP Release 16 specification, which supports both 5G NSA and SA modes. The RM520N is compatible with Quectel’s 5G module series RM50xQ, LTE-A Cat 6 module EM06, Cat 12 module series EM12/EM12xR/EM120K, and Cat 16 module EM160R-GL, facilitating migration from LTE-A to 5G.

The RM520N is an industrial-grade module for industrial and commercial applications only. It covers nearly all the mainstream carriers worldwide and supports Qualcomm® IZat location technology Gen9C Lite (GPS, GLONASS, BDS and Galileo). The integrated GNSS receiver greatly simplifies the product design and provides quicker, more accurate and dependable positioning capability.

Thanks to a rich set of Internet protocols, industry-standard interfaces and abundant functionalities (USB and PCIe drivers for Windows 10, Linux, and Android) the module can be adopted in a wide range of eMBB and IoT applications including industrial routers, home gateways, STB, industrial laptops, consumer laptops, industrial PDAs, rugged tablet PCs, video transmission, and digital signage.

<!-- Need to image and jump button  -->

## Features

- 5G/4G/3G multi-mode module in M.2 form factor, optimized for IoT and eMBB applications
- Worldwide 5G and LTE-A coverage
- Supports NSA and SA modes
- Multi-constellation GNSS receiver available for applications requiring fast and accurate positioning in any environment
- Feature refinements: DFOTA and VoLTE (optional)

## Specifications
<div align="center">
  <img width ="950" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/specification.png"/>
</div>

## Supported Devices

- [reComputer Robotis J30/J40](https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html)
- [reComputer Industrial J30/J40](https://www.seeedstudio.com/reComputer-Industrial-optional-accessories.html)
- [reServer Industrial J30/J40](https://www.seeedstudio.com/reServer-Industrial-J401-optional-accessories.html)
- [reServer Industrial J501](https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-board-for-Jetson-AGX-Orin-p-5950.html)

:::note
Only tested devices are listed above.
:::

## Hardware Connection

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/hardware_connection.png"/>
</div>

:::danger
In this wiki, we will use the [reComputer Robotics J3011](https://www.seeedstudio.com/reComputer-Robotics-J3011-p-6503.html) as an example to demonstrate how to install and configure a RM520N-GL module on Jetson device.
:::

Step1. Prepare all materials that will be used.

- reComputer Robotics J4012 equipped with Jetpack 6.2
- Quectel RM520N-GL Module

Step 2. Adjust the position of the support screw.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/support_screw.png"/>
</div>

Step 3. Insert the 5G module into the M.2 Key B port.

Step 4. Tighten the fixing screws and install the antenna.

Step 5. Install the 5G SIM card in the front panel.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/sim.jpg"/>
</div>

## Configure the 5G Module

Start the Jetson device and enter the following command in the terminal.
```bash
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2
```

In the minicom interface, we can use AT commands to configure the operation mode of the 5G module.

```bash
AT+CPIN? # Check SIM card status. A normal response is READY.
AT+QCFG="usbnet",3 # Set module operation mode to RNDIS. A normal response is OK.
AT+CFUN=1,1 # Restart the module. If it fails to start for an extended period, try restarting the Jetson device.
AT+QNWPREFCFG="mode_pref",AUTO # Set automatic network mode or prioritize LTE network mode
AT+QNWPREFCFG="mode_pref",LTE
```

If everything goes smoothly, your device should now be able to access the internet normally.

To verify the network quality, you can use a speed test tool to test the network speed.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/speed_test.png"/>
</div>


Known issue: We have found that this configuration method allows the 5G module to connect to the network normally, but the mmcli information displays anomalies.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/mmcli.png"/>
</div>

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
