---
description: Configure the 12V RS485 Sensor
title: Configure the 12V RS485 Sensor
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg
slug: /Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger
keywords: [SenseCAP data logger, data logger, collector]
last_update:
  date: 08/17/2024
  author: Yvonne
---

# Getting Started with the S2100 and a 12V RS485 Sensor

This guide will help you get started with the S2100 and a 12V RS485 sensor. After completing this, you’ll understand how to connect your own customized sensor in the future.

## Step 1: Gather Necessary Items

- Data Logger
- ONE Compact Weather Station Sensor (as an example)
- Junction box
- M12 cable
- 8-pin wire (40cm)
- Cross screwdriver (Cross recess No.2)
- SenseCAP Mate App

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/2.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## Step 2: Connect the Sensor

Follow the steps below to complete the wiring process.

### Step 2.1: Disassemble the Data Logger

1. Unscrew the three screws.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Remove the cover.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Remove the threaded cap, pass the sensor cable through the cap and the bottom cover, and connect it to the wiring terminal.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Step 2.2: Wiring Terminal Description

|**No.**|**Pin**|**Description**|
| - | - | - |
| 1 | 12V | External 12V input voltage. The Data Logger can be powered by an external 12V DC power supply. When using a 12V power supply, the battery will serve as a backup power supply. |
| 2 | 5V  | 5V output voltage, providing 5V voltage to the sensor. |
| 3 | 3V  | 3V output voltage, providing 3V voltage to the sensor. |
| 4 | IO  | Acquisition level or pulse input. |
| 5 | V1  | Voltage input of 0 to 10V is collected. |
| 6 | V2  | Voltage input of 0 to 10V is collected. |
| 7 | A   | RS485 A/+ |
| 8 | B   | RS485 B/- |
| 9 | I1  | Collect the current input from 4 to 20mA. |
| 10 | I2 | Collect the current input from 4 to 20mA. |
| 11 | GND| Ground pin. |
| 12 | GND| Ground pin. |

### Step 2.3: Power Supply Options for Sensor

The Data Logger supports two power supply modes. We will use the External 12V DC mode here:

| **Mode** | **Description** |
| - | - |
| Built-in Battery | The Data Logger and sensors are powered by batteries. In this case, the Data Logger can be connected to a 5V sensor. |
| External 12V DC | Supply power to the Data Logger and sensor through an external 12V power supply. If the external 12V is disconnected, the system switches to battery power. When using an external 12V power supply, use it together with the junction box to ensure the waterproof performance of the device. |

### Step 2.4: Connect to the Junction Box

Wire sequence of M12 cable:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/6.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

When your sensor requires 12V power, the battery alone cannot drive the sensor. Therefore, an external 12V power supply is necessary.

1. Prepare the following items: 12V DC adapter, Junction box, and 8-pin wire (only 4 pins are needed).
2. Wire the terminal of the Data Logger.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/7.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

   Attach the cover, rubber ring, and screw cap in sequence.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/8.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/9.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Wire the terminal of the junction box.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/10.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. Connect the M12 sensor wire to the junction box.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/11.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

5. Connect the 12V DC adapter to the power supply.

## Step 3: Connect to the Sensor

Now that you’ve successfully connected the junction box to the S2100, we’ll move on to connecting the sensor.

### Step 3.1: Learn the Wire Sequence of ONE Compact Weather Station Sensor

The device uses an M12 8-pin connector. The different colored pins provide power and data communication as shown below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/12.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

When working with RS-485, you can connect only 4 wires (not using the heating function). The rest should be individually wrapped with tape to prevent short circuits.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/13.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Ensure that the cable holes and device connector pins **align correctly** when plugging in the cable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/14.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Plug in the cable and tighten it clockwise.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/15.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Finally, complete the assembly.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/16.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**Tighten the screws and screw caps** to ensure waterproofing. If the wire diameter is too thin, add waterproof tape for winding.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/17.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**\*Note:** When assembling the device, ensure the waterproof pad of the Data Logger and the adapter box is installed, and the screw cap and screws are tightened. Otherwise, the waterproofing of the device may be compromised. If the wire diameter is too small, wrap it with waterproof tape, as shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/18.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

At this point, the wiring is complete. Now, let’s set up the S2100 and configure it using our app.

## Step 4: Setup the S2100

### Step 4.1: Connect to the Sensor through the App

1. Press the button and hold for **3 seconds**. The LED will flash at a 1s frequency. Use the app to connect to the sensor within 1 minute; otherwise, the device will power off or reboot.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/19.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Select “S2100 Data Logger”.

   Turn on Bluetooth by clicking the “Setup” button, then click “Scan” to start scanning for the sensor's Bluetooth.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/20.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/21.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Select the sensor by S/N (S/N is on the front label of the sensor). The basic information of the sensor will be displayed.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/22.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/23.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. Enter configuration mode after the Bluetooth connection is successful. The LED will flash at a 2s frequency.

### Step 4.2: Configure Basic Parameters through the App

#### Select the Platform and Frequency

S210x Sensors support a universal frequency plan from 863MHz to 928MHz. Each device can support seven frequency plans.

Here, select either “SenseCAP for Helium” or “SenseCAP for TTN” based on your actual situation.

**\*Note:** The Data Logger can upload data when a Helium network is nearby. It runs on SenseCAP's private Helium Console, so users do not need to create a device on the Helium Console.

The SenseCAP for TTN platform needs to be used with the [SenseCAP LoRaWAN outdoor gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/25.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### Set the Interval

The device collects and uploads data **every 60 minutes by default**. You can adjust this interval based on your needs.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/26.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### Set the Packet Policy

Select the uplink packet strategy based on your requirements. We’ll select 1N here.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/27.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **Parameter** | **Description** |
| - | - |
| 2C+1N (default) | 2C+1N (2 confirm packets and 1 none-confirm) minimizes packet loss, but consumes the most data packets in TTN or data credits in the Helium network. |
| 1C | 1C (1 confirm) will cause the device to sleep after receiving 1 confirmed packet from the server. |
| 1N | 1N (1 none-confirm) will send the packet and then start to sleep, regardless of whether the server received the data. |

#### Restore Factory Settings

If you are switching back to the SenseCAP platform from other platforms, restore the factory settings. This resets the device's basic settings.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/28.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Step 4.3: Configure RS485 Modbus-RTU Sensor via App

Select “Protocol” as “RS485 Modbus RTU” and set the following parameters in turn.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/29.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **Baud Rate** | Baud rate of communication with the sensor. Select **9600**. |
| - | - |
| **Modbus Address** | The default address is 10 for Five in ONE, 20 for Seven in ONE, 38 for Nine in ONE, and 43 for Ten in ONE. Slave address of the sensor ranges from 1 to 247. Enter **20** here. |
| **Power Type** | Select **Always on**. Periodic power reduces power consumption and increases battery life by powering the sensor only before data collection. |
| **Power Voltage** | Select the supply **12V** voltage to the sensor. |
| **Sensor Warm-up Time** | The time it takes for the sensor to attain its highest accuracy or performance level after power is applied. Enter **200ms**. |
| **Response Timeout** | Time the Data Logger waits for a response after sending a data read request to the sensor. If exceeded, the command will be resent. **5(\*100ms)** is suitable. |
| **Startup Time** | Time for the sensor to start communicating with Modbus after being powered on. **10\*(100ms)** is suitable. |
| **Measurement Number** | Collect 0 to 10 measurements in RS485 mode. Since the sensor has seven kinds of sensor registers, select **7**. |
| **Work Mode** | Select **Periodic collect** mode: Periodically collect and upload data. |
| **Measurement Setting** | Set the register of the measurement value and other configurations. |

#### Measurement Setting

Set each measurement in turn. Measurement1 (**Air temperature**)

|Register Address|The register address of the measured value in the sensor, which is an integer. The Air temperature register address is 0.Enter **0** here.|
| - | - |
|Function Code|Modbus function code, select **03** here.|
|Data Type|<p>The data type determines the number of registers read from the sensor and how the data should parse the value. </p><p>Select **Signed 32bit integer, 0xABCD** here.</p>|
|Precision|<p>Precision of the value. You can choose the decimal place of the measurement value. If 1 is selected, one decimal place is reserved.</p><p>Select **2, #.##** here.</p>|
|Y= Ax + B|<p>“Y”: It is the value of Data Logger will upload. </p><p>“x”: It is the original current value. </p><p>Factory A: Custom values that can be scaled up or down by multiples of the “x”. </p><p>Factory B: A custom value that increments or diminishes the value of the “x”.</p><p>By setting the values of A and B, you can calculate the desired value. If only raw values are uploaded, set A=1 and B=0.</p><p>**Factory A is 0.001 and Factory B is 0.**</p>|
|Write Strategy|<p>This function is enabled only for some special sensors and is generally disabled by default</p><p>After reading the value of the register, special instructions can be issued to the sensor, such as the instruction to empty the register after reading register 0.</p><p>None: Off by default.</p><p>After Read: Send the RS485 command to sensor after reading the register.</p><p>On New Data: Send the RS485 command to sensor every 24 hours.</p><p>We don’t need to write strategy so we select **None** here.</p>|

Measurement2 (**Air humidity**)

|Register Address|Enter **2** here.|
| - | - |
|Function Code|Select **03** here.|
|Data Type|Select **Signed 32bit integer, 0xABCD** here.|
|Precision|Select **2, #.##** here.|
|Y= Ax + B|**Factory A is 0.001 and Factory B is 0.**|
|Write Strategy|We don’t need to write strategy so we select **None** here.|

Measurement3 (**Barometric pressure**)

|Register Address|Enter **4** here.|
| - | - |
|Function Code|Select **03** here.|
|Data Type|Select **Signed 32bit integer, 0xABCD** here.|
|Precision|Select **0, #** here.|
|Y= Ax + B|**Factory A is 0.001 and Factory B is 0.**|
|Write Strategy|We don’t need to write strategy so we select **None** here.|

Measurement4 (**Light intensity**)

|Register Address|Enter **6** here.|
| - | - |
|Function Code|Select **03** here.|
|Data Type|Select **Signed 32bit integer, 0xABCD** here.|
|Precision|Select **0, #** here.|
|Y= Ax + B|**Factory A is 0.001 and Factory B is 0.**|
|Write Strategy|We don’t need to write strategy so we select **None** here.|

Measurement5 (**Average wind direction**)

|Register Address|Enter **12** here.|
| - | - |
|Function Code|Select **03** here.|
|Data Type|Select **Signed 32bit integer, 0xABCD** here.|
|Precision|Select **1, #.#** here.|
|Y= Ax + B|**Factory A is 0.001 and Factory B is 0.**|
|Write Strategy|We don’t need to write strategy so we select **None** here.|

Measurement6 (**Average wind speed**)

|Register Address|Enter **18** here.|
| - | - |
|Function Code|Select **03** here.|
|Data Type|Select **Signed 32bit integer, 0xABCD** here.|
|Precision|Select **1, #.#** here.|
|Y= Ax + B|**Factory A is 0.001 and Factory B is 0.**|
|Write Strategy|We don’t need to write strategy so we select **None** here.|

Measurement7 (**Rain intensity**)

|Register Address|Enter **24** here.|
| - | - |
|Function Code|Select **03** here.|
|Data Type|Select **Signed 32bit integer, 0xABCD** here.|
|Precision|Select **1, #.#** here.|
|Y= Ax + B|**Factory A is 0.001 and Factory B is 0.**|
|Write Strategy|We don’t need to write strategy so we select **None** here.|

After configuring these measurements, click **"Back to Home"**. The node and the app Bluetooth will automatically disconnect. The Data Logger will attempt to connect to the network. The LED indicator will flash red slowly while trying to connect and will flash green quickly once the network connection is successful.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/30.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## Step 5: Check Data on the SenseCAP Portal

### Step 5.1: Bind Sensor to SenseCAP Portal

Open the SenseCAP Mate App.

1. **Scan QR Code**: Click **"Add device"** in the upper-right corner of the device page to enter the device binding page.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/31.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Scan the QR code on the device to bind it to your account. If you do not set it to a designated group, the device will be put into the **"default"** group.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/32.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. **Manually fill in the EUI**: If the QR code sticker is damaged, you can manually fill in the EUI of the device to bind it to your account. Ensure the EUI is entered in the format suggested by the system, then click **"confirm"**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/33.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/34.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Step 5.2: Check Data on SenseCAP Portal

On the SenseCAP Mate App or the [SenseCAP Portal](http://sensecap.seeed.cc/), you can check the device's online status and the latest data. The list for each sensor will show its online status and the time of its last data upload.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/35.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

You can also check the data on the SenseCAP Mate App.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/36.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/1.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
