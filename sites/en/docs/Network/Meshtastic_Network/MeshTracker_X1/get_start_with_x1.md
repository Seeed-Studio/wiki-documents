---
description: Get Started with SenseCAP MeshTracker X1 for Meshtastic. This tutorial will introduce the setup guide and FAQ guide for the device
title: Get Started with MeshTracker X1
keywords:
  - Tracker
  - Meshtastic
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
slug: /x1_get_started_for_meshtastic
sku: 100087698
sidebar_position: 1
last_update:
  date: 7/13/2026
  author: Michelle Huang
createdAt: '2026-07-13'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/x1_get_started_for_meshtastic/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
When the device is in the states below, please don't manually reboot or turn it off. Or else the device can be dead.
1. Not finishing the message transmission process
2. Being configured
:::


## Get Started


### Power on the device

Press once to power on the device. There will be a rising melody, and the green 🟢 LED light will stay on for about 1 s.

:::tip
If the device doesn't respond when you press the button, please charge it first. Do not use the fast-charging charger.
::: 

### Power off the device

Hold the button for more than 5s. The device will shut down after three beeps from the buzzer.

### Connect via App

Download the `Meshtastic` App:

- [IOS App](https://apps.apple.com/us/app/meshtastic/id1586432531)
- [Android App](https://play.google.com/store/apps/details?id=com.geeksville.mesh&referrer=utm_source=downloads-page)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Enter the code (default code is `123456`) and then click `Pair` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Select the target device on the Bluetooth panel.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- Enter the code (the default code is `123456`) and then click `OK` to connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1PinCodee.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configure the LoRa

In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Region List**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868MHz|869.4 - 869.65|10|27|

Refer to [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) for a more comprehensive list.

:::info
**EU_868** has to adhere to an hourly duty cycle limitation of 10%, calculated every minute on a rolling 1-hour basis. Your device will stop transmitting if you reach it, until it is allowed again.
:::

Now that you have set the LoRa region on your device, you can continue by configuring any [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) to suit your needs.

### Device Status

<table>
  <tr>
    <th colspan="2">Light Status</th>
    <th colspan="1">Device Status</th>
  </tr>
  <tr>
    <td rowspan="4">🟢green</td>
    <td>Constant</td>
    <td>Device Turning on</td>
  </tr>
  <tr>
    <td>Fast Blinking </td>
    <td>Normally Running</td>
  </tr>
  <tr>
    <td>Slow Blinking </td>
    <td>Charging</td>
  </tr>
 <tr>
    <td>Constant</td>
    <td>Fully Charged</td>
  </tr>
  <tr>
    <td>🔴Red</td>
    <td>Blinking</td>
    <td>Low Power</td>
  </tr>
    <tr>
    <td>⚪️white</td>
    <td>Constant</td>
    <td>DFU Mode/Bootloader Mode</td>
  </tr>
</table>

### Button Control

<table>
  <tr>
    <th colspan="1">Button Control</th>
    <th colspan="1">Device Respond</th>
  </tr>
  <tr>
   <td>Click once (Turning off)</td>
    <td>Device Turning on</td>
  </tr>
  <tr>
   <td>Long press for 5s</td>
    <td>Device Turning off</td>
  </tr>
  <tr>
    <td>Double Click</td>
    <td>Broadcast node ID and Position</td>
  </tr>
  <tr>
    <td>Triple Click</td>
    <td>Turning on/off GPS</td>
  </tr>
  <tr>
    <td>four clicks</td>
    <td>Temporarily turning on/off buzzer</td>
  </tr>
</table>

## Flash Firmware

:::caution note
Please `don't use OTA` to update the firmware, it may cause the device to be completely dead. For detailed information, please [click here](https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/ota/)
:::
#### Step 1: Enter DFU mode

Enter DFU via the web flasher. If this fails many times, enter DFU manually.

<Tabs>
<TabItem value="method1" label="Via Web Flasher">

Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Connect the device to your PC, select the device as `SenseCAP Mesh Tracker X1` and choose the latest firmware, then click `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/SelectX1111.png" alt="pir" width={800} height="auto" /></p>

Click `Enter DFU Mode`, there will be a serial port named `X1 xxx` displayed. Click and connect it. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/SerialSelectionX111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="Manually Enter">

Try to enter DFU mode manually: press and hold the device button, then **quickly** connect the device with the computer via USB cable, keep holding the button until a white ⚪️ LED turned on.

:::warning
To successfully enter the DFU mode, you need to perform this operation quickly. You may need to try multiple times.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

The white ⚪️ LED will be solid if X1 is in DFU mode. And there should be a driver named `X1` displayed on your computer.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1DriveMAC.png" alt="pir" width={300} height="auto" /></p>

#### Step 2: Flash Erase

Before flashing the firmware, please first erase it!

Click the `trash` symbol.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/EraseX11.png" alt="pir" width={800} height="auto" /></p>

Download the erase firmware and copy it to the driver.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/FlashFirmwareX11.png" alt="pir" width={800} height="auto" /></p>

This process may take some time; wait for the drive to disappear.

#### Step 3: Flash Firmware

Select the latest firmware, and download the `UF2` file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/FlashClick.png" alt="pir" width={800} height="auto" /></p>

Copy the UF2 file to the DFU drive. Firmware should be flashed after the file is downloaded and the device reboots.

## Advanced Tutorial

### Configure GPS

Please set GPS enabled. You can adjust the update interval and broadcast interval to obtain more up-to-date location information.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

For IOS, please turn on the `Accurate Location`. Otherwise, the positioning may deviate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### Connect via Website

If you want to send text messages and communicate with other nodes in the website, you can connect the device to the [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0) now. 

  Step 1: Open the Website

    [Click here](https://client.meshtastic.org/messages/broadcast/0) to go to the Website.

  Step 2: Add the new device 
  
    Click "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    There are two ways to connect. You can choose your preferred method.

<Tabs>

<TabItem value="11" label="Bluetooth">

  
    Choose Bluetooth. Choose the device ID in the pop-up window.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="12" label="Serial">

    Choose serial method. Open the device manager to see which port the device is connected to. Choose that port in the pop-up window.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>
</Tabs>

  Your device will be shown in the list. Click to connect. If the connection succeeds, you can see the device status directly on the website.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Websitestatus.png" alt="pir" width={300} height="auto" /></p>

### Configure Sensor

|Sensor|Description|
|-|-|
|Pressure|✅|
|6-Axis Sensor (future version)|✅|
|3-Axis Sensor (future version)|✅|

**Buzzer and LED Config**

||Type|Output PIN|
|-|-|-|
|Buzzer|PWM buzzer|25|
|LED|RGB|R:03<br/>G:24<br/>B:28|
|Vibra|-|05|

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

### Configure Ringtone

Navigate to `Settings` -> `Ringtone Config`, then enter the RTTTL ringtone string you want to use for external notifications.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000E20260410.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="The Legend of Zelda: Item Get">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="Super Mario Theme (Short)">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="Mario Coin">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="Nokia Ringtone">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="Mario Power-Up">

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```
</TabItem>

<TabItem value="18" label="Morse Code CQ">

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```
</TabItem>

</Tabs>

### Configure Buzzer

The buzzer is enabled by default. If you want to disable the buzzer, set `Alert Message buzzer`, `Alert bell buzzer` and `Use PWM buzzer` as shown in the following screenshot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer.png" alt="pir" width={200} height="auto" /></p>

### Configure Message Alert

Message Alert can be configured in `External Notification`.

<Tabs>

<TabItem value="aaa" label="IOS">

Nevigate to `Setting` -> `External Notification`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ExternalNotificationIOS.png" alt="pir" width={300} height="auto" /></p>

You can configure to `buzzer off + vibra off`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IONotificationOff.png" alt="pir" width={600} height="auto" /></p>

Or `buzzer on + vibra on`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IOSNotificationOn.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="bbb" label="Android">

Nevigate to `Setting` -> `Module Configuration` -> `External Notification`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Module_Notification_Android.png" alt="pir" width={600} height="auto" /></p>

Enable `External notification enabled`, then you can configure to `buzzer only`, `vibra only` or `buzzer on + vibra on`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/NotificationSettingConfig.png" alt="pir" width={900} height="auto" /></p>

Disable `External notification enabled`, then you can configure to `buzzer off + vibra off`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Notificationoff.jpg" alt="pir" width={300} height="auto" /></p>


</TabItem>

</Tabs>

## FAQ


### How to check the device ID

<Tabs>
<TabItem value="23" label="Check the device back">
The `last four digits` of the MAC address is the device ID

For example, the device ID of the device below would be `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="22" label="Via Serial Tool">
Visit [Meshtastic Web Flasher](https://flasher.meshtastic.org/).<br/>

 Click `Open Serial Monitor`, connect the device to your PC, check the serial log, keyword `using nodenum`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/UsingNodeName.png" alt="pir" width={800} height="auto" /></p>


</TabItem>
</Tabs>

### How to reboot the device

Press and hold the button, then connect the charging cable.

### Temperature Reading Accuracy

The temperature data is read from barometer, rather than reading from an independent temperature sensor.Device will generate heat while operation. So the measured temperature will be higher than the actual temperature.

### Power Consumption

You can calculate the power consumption through the [Power Consumption Table](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Ffiles.seeedstudio.com%2Fwiki%2FSenseCAP%2FMeshTrackerX1%2FX1_for_Meshtastic_Consumption_Test_and_Battery_Life_Calculation.xlsx&wdOrigin=BROWSELINK). This device is equipped with a high-voltage battery. When the battery power is low, it will accelerate the discharge process. This device is equipped with a high-voltage battery. When the battery power is low, it will accelerate the discharge process. So you will notice that the device consumes power very rapidly when it is on low battery.

## Troubleshooting

### Device never turns on

- The device may appear to be powered off when the LED indicator and buzzer are not activated. Before performing the above steps, it is recommended to `check the following parameters`:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={600} height="auto" /></p>

- Use a known working USB cable to `charge the device` continuously for 1–2 hours to ensure the battery has sufficient power to wake up the system.

- If the device still does not respond after charging, `perform a hard reset` as follows: Unplug the USB cable. Press and hold the button, then plug in the USB cable and then release the button immediately. 

 - If still no luck, Connect a USB cable to a computer. Hold the device button, then connect the device to the computer, then release the button, see whether or not the a disk pop out in your PC. If so, re-install the bootloader

### Device stuck in boot loop

**Description:**

The device will restart repeatedly, and the serial port connects and disconnects repeatedly.

**Solution:**

- Step 1: Try to enter DFU mode manually: press and hold the device button, then **quickly** connect the device with the computer via USB cable, keep holding the button until a white ⚪️ LED turned on.

:::warning
To successfully enter the DFU mode, you need to perform this operation quickly. You may need to try multiple times.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

The device is in DFU mode if the white LED is solid on.

- Step 2: [Erase Flash](https://wiki.seeedstudio.com/x1_get_started_for_meshtastic/#step-2-flash-erase)

- Step 3: [Flash Firmware](https://wiki.seeedstudio.com/x1_get_started_for_meshtastic/#step-3-flash-firmware)

### Bootloader Installation


- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Bootloader.zip)

:::danger note
When you are flashing the bootloader, please make sure the cable connection is stable and **DO NOT** disconnect it during the flash process.
:::

**Step 1: Adafruit-nrfutil Installation**

For Windows users, press the "Win" key and the "r" key, then enter "cmd" in the pop-out window, and click "Enter". This can open the command line. 

For MAC users, press the "Command" key and the "Space" key, so that you can open Spotlight. Then enter "termial", click "Return". This can open the command line. 

**Prerequisites**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

Check in your command line whether or not Python and pip are installed successfully.

```
python --version
```

```
python -m pip --version
```

Then "Python xxx" and "pip xxx" should appear. If it does not, please try installing Python again.

This is the recommended method to install the latest version:

```
pip3 install --user adafruit-nrfutil
```

Check the installation path:

```
python -m pip show adafruit-nrfutil
```

This is the installation location:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

For Windows users, you may need to add the  path manually. Copy the installation location shown in the last step. Then add it as followed:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

**Step 2: Check your port number**

Connect your device to your PC, and check the port number.

For Windows users, open your device manager, and go to `port`, the port number newly popped out after the device connection is the device port number.

For Mac users, for example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

For Windows users, for example:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**Step 3: Flash the bootloader**

In the terminal or command prompt, navigate to the directory where you downloaded the bootloader zip package and execute the following command, replacing the correct port for your device:

- **For Windows**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p COMxx -b 115200 --singlebank --touch 1200
```

Please change COMXX to your COM number. For example, if your device is on com6, change the command to be:

`adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 Some of the devices will change their port number after you enter this command. So if the installation fails, check the port number again.

- **For others**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

When you have completed the above steps, then you can follow this [step](https://wiki.seeedstudio.com/x1_get_started_for_meshtastic/#flash-firmware) to flash the application firmware.



**2) Device can not enter DFU mode, but the serial port can be detected**.

- Open a serial port tool

- Set the baud rate to `1200`.

- Connect the device.
   The light will flash briefly when you connect it. Keep trying this until the light stays on, which means the device can go back to DFU mode, then [flash bootloader](https://wiki.seeedstudio.com/x1_get_started_for_meshtastic/#bootloader-installation) -> [erase flash](https://wiki.seeedstudio.com/x1_get_started_for_meshtastic/#step-2-flash-erase) -> [flash the firmware](https://wiki.seeedstudio.com/x1_get_started_for_meshtastic/#step-3-flash-firmware).

**3) Device can not enter DFU mode, and no serial port display**

- press and hold the device button, then connect the charging cable, then release the button immediately. After a disk pops out on your PC, you may see the serial port.

- If still no luck, please disconnect the charging cable and leave the device for a few days until the battery is completely drained, then connect the charging cable and try to pair it again.

**4) If none of the above steps work, please contact tech support: support@sensecapmx.com**

 ### Device automatically turns off

- **Phenomena Description**

 - After the device turns on, it will turn off or reboot automatically after a while. 
 - The serial port log ran for a while and then stopped.

 This is possibly caused by manually and forcibly rebooting or turning off the device when the device is in the following states: not finishing the message transmission process, being configured......

- **Troubleshoot**

 [Click here](https://wiki.seeedstudio.com/x1_get_started_for_meshtastic/#step-2-flash-erase) to perform a flash-erase. 

 ### Factory Reset
If you want to restore to the default settings, you can do a factory reset. There are two methods for you to do the factory reset.

- [Click here](https://wiki.seeedstudio.com/x1_get_started_for_meshtastic/#step-2-flash-erase) to flash erase the device, and then re-flash the latest firmware.

- Click the `Factory Reset` button on the app. The device will reboot with the factory configuration automatically. 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Direct Message Fail

#### NodeDB Reset

NodeDB is the local database that stores information about nodes discovered in the current Mesh network. If you encounter a situation where you can't communicate with a certain node, it might be because your nodeDB has stored outdated information for that node. You will need to update it.

Open the app and connect to the target device. Go to **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

#### Exchange User Info

Each node will periodically send its own node information, enabling other nodes in the mesh to "see" and "recognize" it. Two nodes need to exchange their node information with each other in order to be able to communicate with each other. If you are unable to send or receive private messages with another node on the list, you can manually prompt them to exchange information in the app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### Regenerate Private Key

Two nodes need to know their private key with each other in order to be able to communicate with each other. If one node keeps failing in private message transmission, try regenerating the private key for it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

Reboot the faulty device to make the configuration function.

:::note
After the key regeneration, other devices need to reconnect with the node. So it is better to delete the node from the other device's node list.
:::

### Signal Quality

  - **SNR** reflects the quality of the communication link. A normal device usually operates above -7 dB. A device with a SNR lower than -10 dB indicates poor performance.

  - **RSSI** is determined jointly by the device and its surrounding environment. A normal device usually operates above -110 dBm. A device with an RSSI lower than -115 dBm is considered to have poor performance. 

      To achieve the best signal effect, please use the device in an open, unobstructed area with minimal interference for use.


## Tech Support & Product Discussion

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>
