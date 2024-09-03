---
description: SenseCAP Card Tracker T1000-E for Meshtastic
title: T1000-E Tracker for Meshtastic
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
last_update:
  date: 7/1/2024
  author: Jessie
---

## Introduction

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/_/5_10.jpg" alt="pir" width={600} height="auto" /></p>

It is a high-performance tracker designed for Meshtastic, as small as a credit card, effortlessly fitting in your pocket or attaching to your assets. It embeds Semtech's LR1110, Nordic's nRF52840, and Mediatek's AG3335 GPS module, providing Meshtastic users with a high-precision, low-power positioning and communication solution.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::tip Version Comparison

<table>
    <thead>
        <tr>
            <th>Feature</th>
            <th>T1000-A</th>
            <th>T1000-B</th>
            <th>T1000-E</th>
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
            <th>Product Link</th>
            <td><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html">T1000-A</a></td>
            <td><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html">T1000-B</a></td>
            <td><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html">T1000-E</a></td>
        </tr>
    </tbody>
</table>

:::



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

|Button action|Description|Buzzer|LED|
|- |- |- |- |
|Press once|Power on|Rising melody|The led lights up and then flashes quickly|
|Press twice|Update node/location info|-|-|
|Press three times|Switch on/off the GPS|-|-|
|Press and hold for 5s|Power off|Falling melody||


## Get Started

### Configuration


Press the button once to power on the T1000-E tracker, the Bluetooth pairing will be activated automatically.

#### Device Connection


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

* Download the `Meshtastic` App.<br/>

* Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>


* Enter the code(default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">


* Download the `Meshtastic` App.<br/>

* Click `+` and choose the target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>


* Enter the code(default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

  
</TabItem>
</Tabs>

#### Parameters Configuration



In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location.



<Tabs>
<TabItem value="ios" label="IOS App">


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>




**Region List**

Refer to [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) for a more comprehensive list.


|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902\.0 - 928.0|100|30|
|EU\_433|European Union 433MHz|433\.0 - 434.0|10|12|
|EU\_868|European Union 868MHz|869\.4 - 869.65|10|27|
|CN|China|470\.0 - 510.0|100|19|
|JP|Japan|920\.8 - 927.8|100|16|
|ANZ|Australia & New Zealand|915\.0 - 928.0|100|30|
|KR|Korea|920\.0 - 923.0|100||
|TW|Taiwan|920\.0 - 925.0|100|27|
|RU|Russia|868\.7 - 869.2|100|20|
|IN|India|865\.0 - 867.0|100|30|
|NZ\_865|New Zealand 865MHz|864\.0 - 868.0|100|36|
|TH|Thailand|920\.0 - 925.0|100|16|
|UA\_433|Ukraine 433MHz|433\.0 - 434.7|10|10|
|UA\_868|Ukraine 868MHz|868\.0 - 868.6|1|14|
|MY\_433|Malaysia 433MHz|433\.0 - 435.0|100|20|
|MY\_919|Malaysia 919MHz|919\.0 - 924.0|100|27|
|SG\_923|Singapore 923MHz|917\.0 - 925.0|100|20|
|LORA\_24|2\.4 GHz band worldwide|2400\.0 - 2483.5|100|10|

:::info
**EU_433** and **EU_868** have to adhere to an hourly duty cycle limitation of 10%, calculated every minute on a rolling 1-hour basis. Your device will stop transmitting if you reach it, until it is allowed again.
:::


Now that you have set the LoRa region on your device, you can continue with configuring any [additional configs](https://meshtastic.org/docs/configuration/) to suit your needs.


## Flash firmware



### Flash the Bootloader

:::danger note
Not recommended to flash the bootloader unless advised by tech support!
:::


* [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

**Step1: Adafruit-nrfutil Installation**

**Prerequisites**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)



<Tabs>
<TabItem value="pypi" label="Installing from PyPI">

This is recommended method, to install latest version:

```
pip3 install --user adafruit-nrfutil
```


  
</TabItem>

<TabItem value="sou" label="Installing from Source">

Use this method if you have issue installing with PyPi or want to modify the tool. First clone this repo and go into its folder.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Note: following commands use `python3`, however if you are on Windows, you may need to change it to `python` since windows installation of python 3.x still uses the name python.exe

To install in user space in your home directory:

```
pip3 install -r requirements.txt
python3 setup.py install
```

If you get permission errors when running `pip3 install`, your `pip3` is older
or is set to try to install in the system directories. In that case use the
`--user` flag:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

If you want to install in system directories (generally not recommended):
```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```


To generate a self-contained executable binary of the utility (Windows and MacOS), run these commands:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```
You will find the .exe in `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` ( with `.exe` if you are on windows).
Copy or move it elsewhere for your convenience, such as directory in your %PATH%.

</TabItem>
</Tabs>


**Step2: Flash the bootloader**

Connect the device to your PC and run the following command:

* **For Windows**: 
```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200
```

* **For others**: 
```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200
```

Replace the serial port with your device port. Example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>







### Flash the Application Firmware


* **Step 1**: Download the firmware

You may use the [Meshtastic Web Flasher](https://flasher.meshtastic.org/) to download and copy firmware.

Select the device to `Seeed Card Tracker T1000-E` and the latest firmware, and download the `UF2` file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-uf2.png" alt="pir" width={800} height="auto" /></p>


* **Step 2**: Enter DFU mode

Connect the USB cable to your PC, press and hold the device button, then **quickly** connect the charging cable twice, the LED will be solid on, the device will enter the DFU mode, and there should be a driver named `T1000-E` display.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu2.gif" alt="pir" width={400} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

* **Step 3**: 

Download and Copy UF2 file to the DFU drive. Firmware should be flashed after the file is downloaded and the device reboots.







## FAQ

* **How to check the device name?**

Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>
Select device: `T1000-E Tracker Card`<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name1.png" alt="pir" width={800} height="auto" /></p>

Click `Open Serial Monitor`, connect the device, and you will see the device name.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name2.png" alt="pir" width={800} height="auto" /></p>

* **How to reset?**

Press and hold the button, then connect the charging cable.

* **How to check the battery?**

Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/), check the log, keyword `batPct`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/battery-level.png" alt="pir" width={800} height="auto" /></p>



## Resource

[T1000-E Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.hex)
[Meshtastic Doc](https://meshtastic.org/docs/introduction/)

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


