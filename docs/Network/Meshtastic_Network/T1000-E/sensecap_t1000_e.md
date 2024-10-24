---
description: Get Started with SenseCAP Card Tracker T1000-E for Meshtastic
title: Get Started with T1000-E Tracker
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
last_update:
  date: 7/1/2024
  author: Jessie
---

## Video Tutorial


### Part 1: Unboxing Setup

<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Part 2: Status Indicators

<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Part 3: Flash New Firmware

<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




## Get Started

Download `Meshtastic` App:

* [IOS App](https://meshtastic.org/docs/category/apple-apps/)
* [Android App](https://meshtastic.org/docs/category/android-app/)




### Power on the device


Press once to power on the device, there will be a rising melody, and the LED light will stay on for about 1s.

:::tip
If the device doesn't respond when you press the button, please charge it first.
:::

### Connect via App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

* Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>


* Enter the code(default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">


* Click `+` and choose the target device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>


* Enter the code(default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

  
</TabItem>
</Tabs>





### Configure the Parameters



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



|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902\.0 - 928.0|100|30|
|EU\_868|European Union 868MHz|869\.4 - 869.65|10|27|


Refer to [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) for a more comprehensive list.


:::info
**EU_868** has to adhere to an hourly duty cycle limitation of 10%, calculated every minute on a rolling 1-hour basis. Your device will stop transmitting if you reach it, until it is allowed again.
:::


Now that you have set the LoRa region on your device, you can continue with configuring any [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) to suit your needs.

### Sensor Configuration

|Sensor|Description|
|-|-|
|Temperature|✅|
|Light|Not supported by the App currently|
|Accelerometer|To be continued|


**Temperature Sensor Config**


<Tabs>
<TabItem value="ios" label="IOS App">

Navigate to `Settings` -> `Telemetry(Sensors)` -> Enable sensors.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">

Navigate to `Settings` -> `Telemetry(Sensors)` -> Enable sensors.



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>


</TabItem>
</Tabs>




**Buzzer and LED Config**

||Type|Output PIN|
|-|-|-|
|Buzzer|PWM buzzer|25|
|LED|-|24|



<Tabs>
<TabItem value="ios" label="IOS App">

Navigate to `Settings` -> `External Notification` -> Enable `GPIO` -> Set `Output Pin GPIO`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">

Navigate to `Settings` -> `External Notification` -> Enable `GPIO` -> Set `Output Pin GPIO`.



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>


</TabItem>
</Tabs>



Check [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/) for more details.

:::tip
After you update the device configuration, the device will restart, which may take some time.
:::


## Flash Firmware



### Check the Firmware Version

Navigate to `Settings` -> `Firmware Updates`, check the current firmware version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>



### <div class="danger">⚠️DO NOT FLASH THE FOLLOWING FIRMWARE</div>


:::danger
DO NOT FLASH OTHER FIRMWARE OTHER THAN T1000-E FIRMWARE, THIS MAY CAUSE THE DEVICE TO FREEZE.
:::

The following firmware will brick your device：


* nrf52_promicro_diy_tcxo<br/>
* nrf52_promicro_diy_xtal<br/>
* Dongle_nRF52840-pca10059-v1<br/>
* feather_diy<br/>
* TWC_mesh_v4<br/>
* wio-sdk-wm1110<br/>
* wio-tracker-wm1110<br/>
* xiao_ble


### Flash the Application Firmware


#### Step 1: Enter DFU mode


<Tabs>
<TabItem value="method1" label="Method 1">


Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Connect the device to your PC, select the device to `Seeed Card Tracker T1000-E` and choose the latest firmware, then click `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

Click `Enter DFU Mode`, there will be a serial port named `T1000-E xxx` display, click and connect it, the green LED will be solid, and there should be a driver named `T1000-E` display.




<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>



</TabItem>

<TabItem value="method2" label="Method 2">


Connect the USB cable to your PC, press and hold the device button, then **quickly** connect the charging cable twice, the green LED will be solid, and there should be a driver named `T1000-E` display.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>



#### Step 2: Flash erase


:::caution note
Before flashing the firmware, please flash the erased firmware first!
:::

Click the `trash` symbol.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

Download the erase firmware and copy to the driver.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>


This process may take some time, wait for the drive to disappear, then open a serial monitor to complete the erase process.


#### Step 3: Flash firmware



Select the latest firmware, and download the `UF2` file.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>


Copy UF2 file to the DFU drive. Firmware should be flashed after the file is downloaded and the device reboots.




## FAQ

* **How to check the device name**


 Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Select device: `T1000-E Tracker Card`<br/>
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name1.png" alt="pir" width={800} height="auto" /></p>


 Click `Open Serial Monitor`, connect the device to your PC, check the serial log, keyword `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

* **How to reboot the device?**

 Press and hold the button, then connect the charging cable.

## Troubleshooting

### 

### Device never turns on

* Charge the device for 1~2 hours

* Change the charging cable


### Device not responding

Device not responding, no LED, can not pair with your App.


* 1) Device can still enter the DFU mode, then try to **flash the bootloader**.

#### Flash the Bootloader

:::danger note
When you are flashing the bootloader, please make sure the cable connection is stable and **DO NOT** disconnect it during the flash process.
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

Enable the DFU mode of your device and connect it to your PC, run the following command:

* **For Windows**: 
```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

* **For others**: 
```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

Replace the serial port with your device port. Example:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>




When you have completed the above steps, then you can follow this [step](https://wiki.seeedstudio.com/sensecap_t1000_e/#flash-the-application-firmware) to flash the application firmware.



* 2) Device can not enter DFU mode and no serial port display, please contact the tech support: support@sensecapmx.com


### Firmware flashing failed



* **No data received on serial port**


 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 Check if the device is in the DFU mode, the green light will be solid when the device is in DFU mode.

* **Can't open serial port**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 Check if the port is correct, or try another port.

### Serial port connection is unstable

 
 * Long press the button for 9s to power off the device, and then press it once to power on the device.

 





## Resource

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


