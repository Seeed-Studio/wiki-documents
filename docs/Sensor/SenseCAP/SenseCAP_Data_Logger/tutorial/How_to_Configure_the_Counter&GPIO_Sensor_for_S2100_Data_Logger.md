---
description: Configure the Counter & GPIO Sensor
title: Configure the Counter & GPIO Sensor
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 2/14/2023
  author: Matthew
---

# Configure the Counter & GPIO Sensor

## Sensor Probe

Get these items ready:

![图1](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/1.png)

### Tools

| **Type** | **Description** |
| --- | --- |
| Cross screwdriver | Cross recess No.2 |

# Connect the Sensor Probe

## Disassemble the Data Logger

1. Unscrew three screws.

![图2](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/2.png)

2. Take down the cover.

![图3](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/3.png)

3. Remove the thread cap and pass it through the cable of the sensor, pass it through the bottom cover, and connect it to the wiring terminal.

![图4](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/4.png)

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

![图5](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/5.png)

2. Connect the upper cover, rubber ring and screw cap in sequence

![图6](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/6.png)

![图7](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/7.png)

3. **Tighten the screws and screw caps**** to check the waterproofing**. If the wire diameter is too thin, add waterproof tape for winding.

**\*Note:** When assembling the device, it is necessary to install the waterproof pad of the Data Logger and the adapter box, and tighten the screw cap and screw, otherwise the waterproof effect of the device may be affected!

If the wire diameter is too small, it can be wrapped with waterproof tape, as shown below:

![图8](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/8.png)

## Connect to the Rain Gauge Sensor

Wire sequence of Rain Gauge sensor:

![图9](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/9.png)

1. Unscrew four screws,take down the cover.Pass the 8 pin wire through the bottom cover and connect it to the base of the J1 according to the wire sequence requirements;

Red wire to V+;

Black wire to GND;

Yellow wire to OUT.

![图10](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/10.png) ![图11](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/11.png)

![图12](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/12.png)

2. Turn the DIP Switches **1** of the rain sensor S1 base to the ON, turn the switch **2** to the OFF , and turn the **3** and **4** to the OFF;

![图13](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/13.png)

3. Install the cover and tighten the screws. Complete the connection.

![图14](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/14.png)

# Setup the S2100

## Connect to Sensor to App

1. Press button and hold for **3 seconds** , the LED will flash at 1s frequency. Please use the App to connect the sensor within 1 minute; otherwise, the device will power off or reboot.

![图15](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/15.png)

2. Please select "S2100 Data Logger".

Please click the "Setup" button to turn on Bluetooth and click "Scan" to start scanning the sensor's Bluetooth.

![图16](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/16.png) ![图17](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/17.png)

3. Select the Sensor by S/N (S/N is on the front label of the sensor). Then, the basic information of the sensor will be displayed after entering.

![图18](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/18.png) ![图19](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/19.png)

4. Enter configuration mode after Bluetooth connection is successful: LED flashes at 2s frequency.

## Configure Basic parameters through App

### Select the Platform and Frequency

S210x Sensors are manufactured to support universal frequency plan from 863MHz ~928MHz in one SKU. That is to say, every single device can support 7 frequency plans.

Here we select the "SenseCAP for Helium" or "SenseCAP for TTN". The Frequency Plan based on your actual situation.

**\*Note:** Data Logger can upload data when there is a Helium network around the user. It runs on SenseCAP private Helium Console. Users do not need to create a device on the Helium Console;

SenseCAP for TTN platform needs to be used with SenseCAP LoRaWAN outdoor gateway(https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)

![图20](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/20.png)

### Set the Interval

The working mode of device: wake up the device every interval and collect measurement values and upload them through LoRa.

For example, the device collects and uploads data **every 60 minutes by default**.

![图21](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/21.png)

### Set the Packet Policy

The sensor uplink packet strategy has three modes, we select 1N here or you can according to your own requirement.

![图22](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/22.png)

| **Parameter** | **Description** |
| --- | --- |
| 2C+1N (default) | 2C+1N (2 confirm packets and 1 none-confirm) is the best strategy, the mode can minimize the packet loss rate, however the device will consume the most data packet in TTN, or date credits in Helium network. |
| 1C | 1C (1 confirm) the device will sleep after get 1 received confirm packet from server. |
| 1N | 1N (1 none-confirm) the device only send packet and then start to sleep, no matter the server received the data or not. |

### Restore Factory Setting

When selecting the SenseCAP platform, you must use the fixed EUI/App EUI/App Key. Therefore, you need to restore the factory Settings before switching back to the SenseCAP platform from other platforms.

![图23](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/23.png)

When we make a mistake or want to reset everything, we can click the button. The device will be restored to the factory's default configuration.

**\*Note:** The "Restore Factory" function can only reset the Basic Setting.

## Configure GPIO Sensor via App

Select the "Protocol" as "GPIO". Then set the following parameters in turn.

![图24](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/24.png)

1. Select the supply voltage to the sensor. It supports 3V/5V/12V. Here we select **5V**.

![图25](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/25.png) ![图26](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/26.png)

2. Set the "Sensor Warm-up time", the warm-up time denotes the amount of time it takes for the sensor to attain its highest accuracy or performance level once the voltage supply has been applied. We enter **50(ms)** herr.
2. Select the input type:

| Level Mode | The input level signal is collected, the high level is 1, the low level is 0 |
| --- | --- |
| Counter Mode | The pulse signal is collected, and the number of pulses is recorded |

We select **Counter Mode** here.

![图27](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/27.png)

### Set the Counter Sensor

Select the "Counter Mode" as input type. Then set the following parameters in turn.

![图28](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/28.png)

| Digital input | Sets the type of input pulse. Pull High: Valid when a rising edge is detected. Pull Low: Valid when a falling edge is detected. We select **Pull High** here. |
| --- | --- |
| Digital Filter | When the pulse width exceeds 10 ms, which advised to enable it. It is enabled by default. **Enable** it here. |
| Reboot to clear the count | When a Datalogger restart occurs, the count is cleared to 0. It is disabled by default. **Disable** it here. |
| Y= Ax + B | "Y": It is the value Datalogger will upload. "x": It is the original counter value. Factory A: Custom values that can be scaled up or down by multiples of the "x". Factory B: A custom value that increments or diminishes the value of the "x". By setting the values of A and B, you can calculate the desired value. set **A=0.2** and **B=0**. |
| Unit time collection | Enabling this function increases upload by a value: cumulative amount per hour. For example, if the value of Y within one hour is 1000, 1000/h will be uploaded. **Disable** it here. |

After the configuration information is completed, click "Back to Home" (at this time, the node and the APP Bluetooth will be automatically disconnected), and the Data Logger will try to connect to the network (the LED indicator flashes red slowly when trying to connect to the network, and flashes green quickly after the network is successfully connected);

![图29](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/29.png)

# Check data on the SenseCAP Portal

## Bind Sensor to SenseCAP Portal

Please open SenseCAP Mate App.

1. Scan QR Code

2. Click "Add device" on the upper-right corner of device page to enter the device binding page.

![图30](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/30.png)

3. Scan the QR code on the device to bind the device to your account. If you do not set it to a designated group, the device will be put into the "default" group.

![图31](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/31.png)

4. Manually fill in the EUI

If the QR code sticker is damaged, you can manually fill in the EUI of the device to bind the device to your account. Please make sure you put in the EUI in the format suggested by the system and then click "confirm".

![图32](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/32.png) ![图33](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/33.png)

## Check Data on SenseCAP Portal

On the SenseCAP App or the website [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) , you can check the device online status and the latest data. In the list for each Sensor, you can check its online status and the time of its last data upload.

![图34](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/34.png)

Also, you can check the date on SenseCAP Mate APP.

![图35](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/35.png) ![图36](https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/36.png)