---
description: SenseCAP Card Tracker T1000-E for Meshtastic Introduction
title: T1000-E Tracker Introduction
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /t1000_e_intro
last_update:
  date: 7/1/2024
  author: Jessie
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>



It is a high-performance tracker designed for Meshtastic, as small as a credit card, effortlessly fitting in your pocket or attaching to your assets. It embeds Semtech's LR1110, Nordic's nRF52840, and Mediatek's AG3335 GPS module, providing Meshtastic users with a high-precision, low-power positioning and communication solution.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::tip Version Comparison
:::

<table>
    <thead>
        <tr>
            <th>Feature</th>
            <td><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html">T1000-A</a></td>
            <td><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html">T1000-B</a></td>
            <td><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html">T1000-E</a></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Compatible Network</th>
            <td><ul><li>LoRaWAN</li><li>Helium</li></ul></td>
            <td><ul><li>LoRaWAN</li><li>Helium</li></ul></td>
            <td><ul><li>Meshtastic</li></ul></td>
        </tr>
        <tr>
            <th>Temperature Sensor</th>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
            <td></td>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
        </tr>
        <tr>
            <th>Light Sensor</th>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
            <td></td>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
        </tr>
        <tr>
            <th>Accelerometer</th>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
            <td></td>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
        </tr>
        <tr>
            <th>GPS</th>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
        </tr>
        <tr>
            <th>Bluetooth</th>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
            <td><p style={{textAlign: 'center'}}>✅</p></td>
        </tr>
        <tr>
            <th>Battery Capacity</th>
            <td colspan="3" Align="center">700mAh</td>
        </tr>
        <tr>
            <th>IP Rating</th>
            <td colspan="3" Align="center">IP65</td>
        </tr>
        <tr>
            <th>Dimensions</th>
            <td colspan="3" Align="center">85 x 55 x 6.5 mm</td>
        </tr>
        <tr>
            <th>Weight</th>
            <td colspan="3" Align="center">32g</td>
        </tr>
        <tr>
            <th>Operating Temperature</th>
            <td colspan="3" Align="center">-20°C to +60°C</td>
        </tr>
        <tr>
            <th>Main Chip</th>
            <td colspan="3" Align="center">LR1110 + nRF52840</td>
        </tr>
        <tr>
            <th>Compatible APP</th>
            <td><p style={{textAlign: 'center'}}>SenseCraft</p></td>
            <td><p style={{textAlign: 'center'}}>SenseCraft</p></td>
            <td><p style={{textAlign: 'center'}}>Meshtastic</p></td>
        </tr>
    </tbody>
</table>





### Features

* **Multi-Protocol Support**: Featuring nRF52840 and LR1110, it supports Bluetooth 5.0, Thread, Zigbee, and LoRa, ensuring compatibility with a wide range of devices and networks.
* **Powerful Positioning Capabilities**: Integrated with the Mediatek‘s AG3335 GPS chip, it provides high-precision positioning services.
* **Expandable Interfaces**: Designed with four pogo pins, it supports USB interface for DFU (Device Firmware Upgrade), serial logging, and API interface, simplifying device management and debugging.
* **Open Source Support**: Compatible with the Meshtastic open-source mesh networking protocol, suitable for long-range and low-power communication needs.


### Specification

**General**

|**Network protocol**|LoRa, Bluetooth v5.1|
| :- | :- |
|**Temperature**|<p>Range: -20 to 60℃;</p><p>Accuracy: ± 1℃ (min ±0.5℃, max ±1℃)</p><p>Resolution: 0.1℃</p>|
|**Light**|0 to 100% (0% is dark, 100% is brightest)|
|**LED and Buzzer**|1\*LED and 1\* buzzer to indicate status|
|**Button**|1\* Button to operate|
|**Antenna**|Internal (GNSS/LoRa/Wi-Fi/BLE)|
|**Communication Distance**|2 to 5km (depending on antenna, installation, and environments)|
|**IP Rating**|IP65|
|**Dimensions**|85 \* 55 \* 6.5 mm|
|**Device Weight**|32g|
|**Operating Temperature**|-20℃ to +60℃|
|**Operating Humidity**|5% - 95% (No condensation)|
|**Certification**|CE /FCC|

**Battery**

|**Battey Capacity**|Rechargeable lithium battery, 700mAh|
| :- | :- |
|**Battery Life Monitoring**|Periodic uplink battery level|
|<p>**Charge Cable**</p><p>**(Adapter not included)**</p>|USB magnetic charging cable, 1 meter|
|**Power Input Voltage**|4\.7 to 5.5V DC|
|**Charging Temperature Limit**|0 to +45℃|

### Hardware overview


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000-e.png" alt="pir" width={800} height="auto" /></p>

### PIN

|Power to Sensor|P0.4|GPIO|
|- |- |- |
|Temperature|P0.31|NTC (analog)|
|Light|P0.29|LUX(analog)|
|3-Axis Accelerometer<br/>(Not currently used in the Meshtastic firmware)|SDA: P0.26<br/>SCL: P0.27|Via IIC|
|Power to Accelerometer|P1.7|GPIO|
|LED|P0.24  |GPIO|
|Buzzer|P0.25|GPIO|
|Enable Buzzer|P1.05|GPIO|
|Button|P0.6|GPIO|
|Power to sensor|P1.6|GPIO|
|LR1110|P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: SPI Clock<br/>P0.12: SPI NSS<br/>P1.10: LoRa Reset<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0\_DIO3\_TCXO\_VOLT<br/>AGE 1.6V|SPI|
|GPS|RX: P0.14<br/>TX: P0.13|Serial1 <br/>BAUDRATE:115200|




### Button

|Button action|Description|Buzzer|
|- |- |- |
|Press once|Power on|Rising melody|
|Press twice|Update node/location info|-|
|Press three times|Switch on/off the GPS|-|
|Press and hold for 5s|Power off|Falling melody|



### LED

|Device action|Description|
|- |- |
|Power on|Lights up and then flashes quickly|
|DFU mode|Solid on|
|Working|Random flashing|