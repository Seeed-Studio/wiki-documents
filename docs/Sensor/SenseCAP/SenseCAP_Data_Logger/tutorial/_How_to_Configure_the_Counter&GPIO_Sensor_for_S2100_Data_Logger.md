---
description: Configure the Counter&GPIO Sensor for S2100 Data Logger
title: Configure the Counter&GPIO Sensor for S2100 Data Logger
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 2/14/2023
  author: Matthew
---

# Preparation

## Sensor Probe

Get these items ready:

![](RackMultipart20230223-1-w0kcas_html_798f7713966f6879.png)

### Tools

| **Type** | **Description** |
| --- | --- |
| Cross screwdriver | Cross recess No.2 |

# Connect the Sensor Probe

## Disassemble the Data Logger

1. Unscrew three screws.

![](RackMultipart20230223-1-w0kcas_html_3630b5ddeaf062dc.png)

2. Take down the cover.

![](RackMultipart20230223-1-w0kcas_html_265044fad81cde73.png)

3. Remove the thread cap and pass it through the cable of the sensor, pass it through the bottom cover, and connect it to the wiring terminal.

![](RackMultipart20230223-1-w0kcas_html_2fefc8e35b37317d.jpg)

| **No.** | **Pin** | **Description** |
| --- | --- | --- |
| 1 | 12V | External 12V input voltage. The Data Logger can be powered by an external 12V DC power supply. When using 12V power supply, the battery will serve as backup power supply. |
| 2 | 5V | 5V output voltage, providing 5V voltage to the sensor. |
| 3 | 3V | 3V output voltage, providing 3V voltage to the sensor. |
| 4 | IO | Acquisition level or pulse input |
| 5 | V1 | The voltage input of 0 to 10V is collected |
| 6 | V2 | The voltage input of 0 to 10V is collected |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | Collect the current input from 4 to 20mA |
| 10 | I2 | Collect the current input from 4 to 20mA |
| 11 | GND | Ground pin |
| 12 | GND | Ground pin |

## Power supply options of sensor

Data Logger supports two power supply modes, we choose the Built-in Battery mode:

| **Mode** | **Description** |
| --- | --- |
| Built-in Battery | The Data Logger and sensors are powered by batteries. In this case, the Data Logger can be connected to a 5V sensor. |

## Connect to the Datalogger

Wire sequence of Datalogger:

| **Wire Type** | **Description** |
| --- | --- |
| Red Wire | 5V |
| Black Wire | GND(Any port would be OK.) |
| Yellow Wire | IO |

1. Pass the 8 pin wire through the bottom cover and connect it to the base of the Data Logger according to the wire sequence requirements;

![](RackMultipart20230223-1-w0kcas_html_2c153c4dae7bf4cf.png)

2. Connect the upper cover, rubber ring and screw cap in sequence

![](RackMultipart20230223-1-w0kcas_html_48c12c0b22ceb033.png)

![](RackMultipart20230223-1-w0kcas_html_c90a7b4f774c3e72.png)

3. **Tighten the screws and screw caps**** to check the waterproofing**. If the wire diameter is too thin, add waterproof tape for winding.

**\*Note:** When assembling the device, it is necessary to install the waterproof pad of the Data Logger and the adapter box, and tighten the screw cap and screw, otherwise the waterproof effect of the device may be affected!

If the wire diameter is too small, it can be wrapped with waterproof tape, as shown below:

![](RackMultipart20230223-1-w0kcas_html_9ae80bb2c41f1207.gif)

## Connect to the Rain Gauge Sensor

Wire sequence of Rain Gauge sensor:

![](RackMultipart20230223-1-w0kcas_html_db3fd68e1892e4dd.png)

1. Unscrew four screws,take down the cover.Pass the 8 pin wire through the bottom cover and connect it to the base of the J1 according to the wire sequence requirements;

Red wire to V+;

Black wire to GND;

Yellow wire to OUT.

![](RackMultipart20230223-1-w0kcas_html_c53f3716e7426dda.jpg) ![](RackMultipart20230223-1-w0kcas_html_a50952a6133ca3b3.jpg)

![](RackMultipart20230223-1-w0kcas_html_4d7bd2dcf1e3a5a1.gif)

2. Turn the DIP Switches **1** of the rain sensor S1 base to the ON, turn the switch **2** to the OFF , and turn the **3** and **4** to the OFF;

![](RackMultipart20230223-1-w0kcas_html_3f5f3f0895d47622.jpg)

3. Install the cover and tighten the screws. Complete the connection.

![](RackMultipart20230223-1-w0kcas_html_d46dcf188d7ac1ae.gif)

# Setup the S2100

## Connect to Sensor to App

1. Press button and hold for **3 seconds** , the LED will flash at 1s frequency. Please use the App to connect the sensor within 1 minute; otherwise, the device will power off or reboot.

![](RackMultipart20230223-1-w0kcas_html_2c1af6fa281c4cc.png)

2. Please select "S2100 Data Logger".

Please click the "Setup" button to turn on Bluetooth and click "Scan" to start scanning the sensor's Bluetooth.

![](RackMultipart20230223-1-w0kcas_html_7fd60fa0a241678d.jpg) ![](RackMultipart20230223-1-w0kcas_html_f75676df34c7b6e7.png)

3. Select the Sensor by S/N (S/N is on the front label of the sensor). Then, the basic information of the sensor will be displayed after entering.

![](RackMultipart20230223-1-w0kcas_html_c4b4cb4a1fd20fb.jpg) ![](RackMultipart20230223-1-w0kcas_html_8c223b26bd3a93e6.jpg)

4. Enter configuration mode after Bluetooth connection is successful: LED flashes at 2s frequency.

## Configure Basic parameters through App

### Select the Platform and Frequency

S210x Sensors are manufactured to support universal frequency plan from 863MHz ~928MHz in one SKU. That is to say, every single device can support 7 frequency plans.

Here we select the "SenseCAP for Helium" or "SenseCAP for TTN". The Frequency Plan based on your actual situation.

**\*Note:** Data Logger can upload data when there is a Helium network around the user. It runs on SenseCAP private Helium Console. Users do not need to create a device on the Helium Console;

SenseCAP for TTN platform needs to be used with SenseCAP LoRaWAN outdoor gateway(https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)

![](RackMultipart20230223-1-w0kcas_html_2e078c123ace5eed.jpg)

### Set the Interval

The working mode of device: wake up the device every interval and collect measurement values and upload them through LoRa.

For example, the device collects and uploads data **every 60 minutes by default**.

![](RackMultipart20230223-1-w0kcas_html_3898f3b5c67e1ba3.png)

### Set the Packet Policy

The sensor uplink packet strategy has three modes, we select 1N here or you can according to your own requirement.

![](RackMultipart20230223-1-w0kcas_html_bd39a91388557ef1.png)

| **Parameter** | **Description** |
| --- | --- |
| 2C+1N (default) | 2C+1N (2 confirm packets and 1 none-confirm) is the best strategy, the mode can minimize the packet loss rate, however the device will consume the most data packet in TTN, or date credits in Helium network. |
| 1C | 1C (1 confirm) the device will sleep after get 1 received confirm packet from server. |
| 1N | 1N (1 none-confirm) the device only send packet and then start to sleep, no matter the server received the data or not. |

### Restore Factory Setting

When selecting the SenseCAP platform, you must use the fixed EUI/App EUI/App Key. Therefore, you need to restore the factory Settings before switching back to the SenseCAP platform from other platforms.

![](RackMultipart20230223-1-w0kcas_html_17e45a40d60aeda4.png)

When we make a mistake or want to reset everything, we can click the button. The device will be restored to the factory's default configuration.

**\*Note:** The "Restore Factory" function can only reset the Basic Setting.

## Configure GPIO Sensor via App

Select the "Protocol" as "GPIO". Then set the following parameters in turn.

![](RackMultipart20230223-1-w0kcas_html_6dcc7c7e6a9551e7.jpg)

1. Select the supply voltage to the sensor. It supports 3V/5V/12V. Here we select **5V**.

![](RackMultipart20230223-1-w0kcas_html_4bba815109f75db3.jpg) ![](RackMultipart20230223-1-w0kcas_html_a8a3aff25239d209.jpg)

2. Set the "Sensor Warm-up time", the warm-up time denotes the amount of time it takes for the sensor to attain its highest accuracy or performance level once the voltage supply has been applied. We enter **50(ms)** herr.
2. Select the input type:

| Level Mode | The input level signal is collected, the high level is 1, the low level is 0 |
| --- | --- |
| Counter Mode | The pulse signal is collected, and the number of pulses is recorded |

We select **Counter Mode** here.

![](RackMultipart20230223-1-w0kcas_html_6237bc20ad32cc4e.jpg)

### Set the Counter Sensor

Select the "Counter Mode" as input type. Then set the following parameters in turn.

![](RackMultipart20230223-1-w0kcas_html_6dcc7c7e6a9551e7.jpg)

| Digital input | Sets the type of input pulse. Pull High: Valid when a rising edge is detected. Pull Low: Valid when a falling edge is detected. We select **Pull High** here. |
| --- | --- |
| Digital Filter | When the pulse width exceeds 10 ms, which advised to enable it. It is enabled by default. **Enable** it here. |
| Reboot to clear the count | When a Datalogger restart occurs, the count is cleared to 0. It is disabled by default. **Disable** it here. |
| Y= Ax + B | "Y": It is the value Datalogger will upload. "x": It is the original counter value. Factory A: Custom values that can be scaled up or down by multiples of the "x". Factory B: A custom value that increments or diminishes the value of the "x". By setting the values of A and B, you can calculate the desired value. set **A=0.2** and **B=0**. |
| Unit time collection | Enabling this function increases upload by a value: cumulative amount per hour. For example, if the value of Y within one hour is 1000, 1000/h will be uploaded. **Disable** it here. |

After the configuration information is completed, click "Back to Home" (at this time, the node and the APP Bluetooth will be automatically disconnected), and the Data Logger will try to connect to the network (the LED indicator flashes red slowly when trying to connect to the network, and flashes green quickly after the network is successfully connected);

![](RackMultipart20230223-1-w0kcas_html_bc3738f36ee8f2a9.png)

# Check data on the SenseCAP Portal

## Bind Sensor to SenseCAP Portal

Please open SenseCAP Mate App.

1. Scan QR Code

2. Click "Add device" on the upper-right corner of device page to enter the device binding page.

![](RackMultipart20230223-1-w0kcas_html_8bf3f3245b6d410e.png)

3. Scan the QR code on the device to bind the device to your account. If you do not set it to a designated group, the device will be put into the "default" group.

![](RackMultipart20230223-1-w0kcas_html_eac0dc4b84fb08a7.jpg)

4. Manually fill in the EUI

If the QR code sticker is damaged, you can manually fill in the EUI of the device to bind the device to your account. Please make sure you put in the EUI in the format suggested by the system and then click "confirm".

![](RackMultipart20230223-1-w0kcas_html_90ab7a554bf4453a.jpg) ![](RackMultipart20230223-1-w0kcas_html_72a327ef811d68f3.png)

## Check Data on SenseCAP Portal

On the SenseCAP App or the website [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) , you can check the device online status and the latest data. In the list for each Sensor, you can check its online status and the time of its last data upload.

![](RackMultipart20230223-1-w0kcas_html_abedeed0079925ae.png)

Also, you can check the date on SenseCAP Mate APP.

![](RackMultipart20230223-1-w0kcas_html_1a45dc7268c87ef6.jpg) ![](RackMultipart20230223-1-w0kcas_html_3b4fbe657af101b1.jpg)