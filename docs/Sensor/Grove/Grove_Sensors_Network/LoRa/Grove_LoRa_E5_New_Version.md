---
title: Grove - Wio-E5
nointro: null
keywords:
  - LoRa
  - E5
  - Grove
description: Grove LoRa-E5, a powerful and versatile LoRa module by Seeed Studio. Explore its features, datasheets, certifications, and relevant SDKs
image: https://files.seeedstudio.com/wiki/Grove-Wio-E5/1.jpg
slug: /Grove_LoRa_E5_New_Version
last_update:
  date: 07/25/2024
  author: Spencer
---

<div class="table-center">
  <table align="center">
    <tr>
        <th>Grove Wio E5</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/1.jpg" style={{width:'auto', height:320}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

> LoRaWAN® is a mark used under license from the LoRa Alliance®.
The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.

Before delving into the Grove Wio-E5, let's briefly understand the Wio-E5.

The [Wio-E5](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) powered by the STM32WLE5JC, which integratis an ARM Cortex M4 ultra-low-power MCU and LoRa® RF radio SX126x into a single chip. It's a wireless RF module supporting LoRa® and LoRaWAN® protocols on EU868 and US915 frequencies, as well as (G)FSK, BPSK, (G)MSK, and LoRa® modulation. And it has obtained FCC, CE, IC and Telec certifications (For more information about Wio-E5, refer to the [Wio-E5 wiki](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/).)

The [Grove Wio-E5](https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html) embeds this ultra-low-power Wio-E5. With onboard Grove connectors for easy plug-and-play integration, it provides your development board with powerful capabilities for ultra-long-range transmission.


As an upgrade of our old version - [Grove - Long Range 868MHz](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz.html) - powered by [RFM95 ultra-long-range Transceiver Module](https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module-LoRa-Module-support-868M-frequency-p-2807.html), Grove LoRa-E5 embedded with [Wio-E5 STM32WLE5JC Module](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) is a high-performance and easy-to-use wireless radio LoRa® module supporting LoRaWAN® protocol.

More comparison between the Wio-E5 and RFM95 chip:
![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png)

By connecting Grove - Wio-E5 to your development boards, your devices are able to communicate with and control Wio-E5 conveniently by AT command through UART connection. Grove Wio-E5 will be a superior choice for IoT device development, testing, and long-distance, ultra-low power consumption IoT scenarios like smart agriculture, smart office, and smart industry. It is designed with industrial standards with a wide working temperature at -40℃ ~ 85℃, high sensitivity between -116.5 dBm and -136 dBm, and power output between 10 dBm and 22 dBm.

## Features

- Wio-E5 (STM32WLE5JC) embedded
- Support LoRaWAN® protocol on EU868/US915 frequency band
- Ultra-long transmitting range up to 10km (Ideal value in open space)
- Easy control by AT command via UART connection
- Rapid prototyping with plug-and-play Grove interfaces
- Ultra-low power consumption and high performance

## Harware Overview

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4081615359627_.pic_hd.jpg)

1. Wio-E5 STM32WLE5JC ([Datasheet](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf))

2. MHF IPEX Connector

3. Wire Antenna

4. Grove Connector

5. LED Indicators

<!-- 不准确，只是一个模组，并不支持编程  -->
<!-- ## Platform Supported
<table>
  <tr>
    <th>Arduino</th>
    <th>Raspberry Pi</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/products/113020091/Raspberry_Pi-Logo.wine.png" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
  </tr>
</table> -->

## Specification

<!-- <style type="text/css" xml="space" dangerouslySetInnerHTML={{__html: "<!--\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}\n.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}\n" }} /> -->


<div class="table-center">
<table class="tg" align="center">
<thead>
<tr><th class="tg-f2tp" colspan="2">Part List:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Grove - Wio-E5 PCBA *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Grove Universal Cable*1</td>
</tr>
</tbody>
</table>
</div>

<div class="table-center">
<table class="tg" align="center">
<thead>
<tr><th class="tg-f2tp" colspan="2">General Parameters</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j">Voltage <span>Supply: </span></td>
<td class="tg-uu1j">3.3V - 5V</td>
</tr>
<tr>
<td class="tg-uu1j">Power <span>Output: </span></td>
<td class="tg-uu1j">Up to +20 dBm at 3.3V</td>
</tr>
<tr>
<td class="tg-uu1j">Working Frequency</td>
<td class="tg-uu1j">868/915MHz</td>
</tr>
<tr>
<td class="tg-uu1j">Protocol</td>
<td class="tg-uu1j">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-uu1j">Sensitivity</td>
<td class="tg-uu1j">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-uu1j">Modulation</td>
<td class="tg-uu1j">LoRa®, (G)FSK, (G)MSK and BPSK</td>
</tr>
<tr>
<td class="tg-uu1j">Current</td>
<td class="tg-uu1j">Only 60uA in sleep mode</td>
</tr>
<tr>
<td class="tg-uu1j">Size</td>
<td class="tg-uu1j">20*40mm</td>
</tr>
<tr>
<td class="tg-uu1j">Working Temperature</td>
<td class="tg-uu1j">-40℃ ~ 85℃</td>
</tr>
</tbody>
</table>
</div>

<!-- <style type="text/css" xml="space" dangerouslySetInnerHTML={{__html: "<!--\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}\n.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}\n" }} /> -->


## Application

- Works for LoRaWAN® sensor nodes and any wireless communication application
- IoT device testing and development

![](https://files.seeedstudio.com/products/317990687/image/application.png)


## Application Notes

#### Note 1. Factroy AT Firmare

Wio-E5 series has a **built-in AT command firmware**, which supports LoRaWAN® *Class A/B/C* protocol and a wide frequency plan: *EU868/US915/AU915/AS923/KR920/IN865*. With this AT command firmware, developers can easily and quickly build their prototype or application.

The AT command firmware contains a bootloader for DFU and the AT application. The "PB13/SPI_SCK/BOOT" pin is used to control Wio-E5 to stay in the bootloader or jump to the AT application. When PB13 is HIGH, the module will jump to AT application after reset, with a default baud rate of 9600. When PB13 is LOW (press the "Boot" button on Wio-E5 Dev Board or Wio-E5 mini), the module will stay in the bootloader, and keep transmitting "C" character every 1S at baud rate 115200.

:::caution attention

- Factory AT Firmware is programmed with RDP(Read Protection) Level 1, developers need to remove RDP first with STM32Cube Programmer. Note that regression RDP to level 0 will cause a flash memory mass to erase and the Factory AT Firmware can't be restored again.
- The "PB13/SPI_SCK/BOOT" pin on the Wio-E5 module is just a normal GPIO, not the "BOOT0" pin of the MCU. This "PB13/SPI_SCK/BOOT" pin is used in the bootloader of the Factory AT firmware, to decide to jump to APP or stay in bootloader(for DFU). The real "BOOT0" pin doesn't pinout to the module, so users need to be careful when developing the low-power applications.
:::

#### Note 2. Clock Configuration

2.1 HSE

- 32MHz TCXO
- TCXO power supply: PB0-VDD_TCXO

2.2 LSE

- 32.768KHz crystal oscillator

#### Note 3. RF Switch

**Wio-E5 module ONLY transmits through RFO_HP:**

- Receive: PA4=1, PA5=0
- Transmit(high output power, SMPS mode): PA4=0, PA5=1

#### Note 4. General workflow guide - Grove LoRa E5 Configuration and Usage

Grove LoRa E5 comes with built-in LoRaWAN firmware that provides an AT server (check the [LoRa-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)).

Like any non-hardcoded device, you can define every EUI and API key as needed. Refer to this workflow for more details: [SenseCAP Indicator Application LoRaWAN](https://wiki.seeedstudio.com/SenseCAP_Indicator_Application_LoRaWAN/#HEAD_register_device).

The typical workflow for your product (XIAO [any microcontroller] + Grove E5) would be as follows:

1. Register the device on the LoRaWAN Network Server to get credentials: EUI and key.
2. Configure your LoRa E5 device to set the EUI and other parameters.
3. Enjoy it: send and receive messages. Note: You must be covered by an accessible LoRaWAN Gateway.

For your Arduino project, we recommend this library(repository) to configure your device: [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5).

Ensure your LNS (LoRaWAN Network Server) is set up correctly, and verify that your credentials and LoRa parameters match.

## Examples and Demo

1. [Grove - Wio-E5 P2P Example](https://wiki.seeedstudio.com/Grove_Wio_E5_P2P/) Using Pure UART function to communicate between two wio-e5 devices
2. [Grove - Wio-E5 TTN Demo](https://wiki.seeedstudio.com/Grove_Wio_E5_TTN_Demo/) Access TTN LoRaWAN network via Wio-E5
3. [Grove - Wio-E5 Helium Demo](https://wiki.seeedstudio.com/Grove_Wio_E5_Helium_Demo/) Connecting to the Helium IoT network using the Grove - Wio-E5 module and Seeeduino XIAO module
4. [Grove - Wio-E5 Used with Arduino Uno R4 Demo](https://wiki.seeedstudio.com/Grove_Wio_E5_SenseCAP_Cloud_Demo/)
5. [Grove - Wio-E5 Used with XIAO ESP32S3 Demo](https://wiki.seeedstudio.com/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3/)
6. [Using Wio-E5 and XIAO ESP32S3 on PlatformIO(Arduino) to access LoRaWAN network](/platformio_wio_e5/) A practical guide. It details the integration of Wio-E5 with Arduino-compatible boards using PlatformIO for efficient LoRaWAN connectivity. 

## Resources

**Datasheet:**

- [Grove Wio-E5 v1.0.brd](http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd)
- [Grove Wio-E5 v1.0.pdf](https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf)
- [Grove Wio-E5 v1.0.sch](http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch)
- [Wio-E5 datasheet and specifications](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf)
- [Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
- [STM32WLE5JC Datasheet](https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf)

**Certifications:**

- [Wio-E5-HF Certification CE-VOC-RED](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf)
- [Wio-E5-HF FCC Certification -DSS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf)
- [Wio-E5-HF FCC Certification -DTS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf)
- [Wio-E5-HF TELEC Certification](https://files.seeedstudio.com/products/317990687/res/Telec.zip)
- [Wio-E5-HF IC Certification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf)

**Relevant SDK:**

- [STM32Cube MCU Package for STM32WL series](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

## ✨ Contributor Project

- Thanks for one of Seeed Studio's friend Andres to build the [Grove - Wio-e5 library, providing multiple examples](https://github.com/andresoliva/LoRa-E5), suitable for Arduino boards like Arduino Nano 33 BLE Sense, and more importantly [compatible with the XIAO ESP32S3 Sense](https://github.com/andresoliva/LoRa-E5).
- This will allow the user an easy, clear and safe interaction with the SeedStudio LoRa module Grove - Wio-E5 and hopefully be used as both an educational tool for those **who are doing their first steps into LoRa** as well as **prepared for the ones looking for using this module in low-power projects**.

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
