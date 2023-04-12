---
description: Configure the 12V RS485 Sensor
title: Configure the 12V RS485 Sensor
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 4/12/2023
  author: Yvonne
---


# Getting S2100 started with 12V RS485 Sensor
Let's get started on learning how to use the S2100 with a 12V RS485 sensor. Once we've got that down, we'll move on to the basics of S2100's application. This will give you a good idea of how to connect your own customized sensor in the future. 
## Get these items ready
- Data Logger
- ONE Compact Weather Station Sensor(as an example)
- Junction box
- M12 cable
- 8 pin wire(40cm)
- Cross screwdriver(Cross recess No.2)
- SenseCAP Mate APP
<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/2.png"/></div>

# Connect to the Sensor 
First, we need to do the wiring. Please follow the below steps.
## Disassemble the Data Logger
1. Unscrew three screws.


<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"/></div>

2. Take down the cover.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"/></div>

3. Remove the threaded cap and pass it through the cable of the sensor, pass it through the bottom cover, and connect it to the wiring terminal.


<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"/></div>
## Wiring terminal description
|**No.**|**Pin**|**Description**|
| - | - | - |
|1|12V|<p>External 12V input voltage. The Data Logger can be powered by an external 12V DC power supply.</p><p>When using 12V power supply, the battery will serve as backup power supply.</p>|
|2|5V|5V output voltage, providing 5V voltage to the sensor.|
|3|3V|3V output voltage, providing 3V voltage to the sensor.|
|4|IO|Acquisition level or pulse input|
|5|V1|The voltage input of 0 to 10V is collected|
|6|V2|The voltage input of 0 to 10V is collected|
|7|A|RS485 A/+|
|8|B|RS485 B/-|
|9|I1|Collect the current input from 4 to 20mA|
|10|I2|Collect the current input from 4 to 20mA|
|11|GND|Ground pin|
|12|GND|Ground pin|

## Power supply options of sensor
Data Logger supports two power supply modes, we choose the External 12V DC mode here:

|**Mode**|**Description**|
| - | - |
|Built-in Battery|The Data Logger and sensors are powered by batteries. In this case, the Data Logger can be connected to a 5V sensor.|
|External 12V DC|<p>Supply power to Data Logger and sensor through external 12V power supply. When the external 12V is disconnected, the system switches to battery power. </p><p>When using external 12V power supply, use it together with the junction box to ensure the waterproof performance of the device.</p>|


## Connect to the junction box
Wire sequence of M12 cable:


<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/6.png"/></div>

When your sensor needs 12V power, the battery will not be able to drive the sensor. Therefore, an external 12V power supply is required.

1) Prepare the following items: 12V DC adapter, Junction box, and 8-pin wire(we only need 4 pins here).
2) Wire to the terminal of the Data Logger.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/7.png"/></div>

Connect the cover, rubber ring and screw cap in turn.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/8.png"/></div>
<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/9.png"/></div>

3) Wire to the terminal of the junction box.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/10.png"/></div>



4) Connect the M12 sensor wire to the junction box.


<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/11.png"/></div>

5) Connect the 12V DC adapter to the power supply.
## Connect to the Sensor
Now we'll move on to connecting the sensor after successfully connecting the transfer box to the S2100 in the previous process.
First, we need to learn about the wire sequence of ONE Compact Weather Station Sensor:

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/12.png"/></div>

The device adopts an M12 8-pin connector, the different colored pins provide power and data communication (as shown in the above diagram).

When working with the RS-485, you can connect only 4 wires (not using a heating function), and the rest can be individually wrapped with tape to prevent short circuit.


<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/13.png"/></div>

The holes of the cable and the pins of the device connector **must be aligned** when the cable is plugged in.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/14.png"/></div>



Plugin the cable and tighten it clockwise

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/15.png"/></div>


To complete the assembly.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/16.png"/></div>



**Tighten the screws and screw caps** **to check the waterproofing**. If the wire diameter is too thin, add waterproof tape for winding.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/17.png"/></div>



**\*Note:** When assembling the device, it is necessary to install the waterproof pad of the Data Logger and the adapter box, and tighten the screw cap and screw, otherwise the waterproof effect of the device may be affected!

If the wire diameter is too small, it can be wrapped with waterproof tape, as shown below:

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/18.png"/></div>

 We've finished the wiring at this point. Now, let's set up the S2100 and configure it on our APP.
# Setup the S2100
## Connect to Sensor through App
1) Press button and hold for **3 seconds**, the LED will flash at 1s frequency. Please use the App to connect the sensor within 1 minute; otherwise, the device will power off or reboot.
<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/19.png"/></div>

2) Please select “S2100 Data Logger”.

Please click the “Setup” button to turn on Bluetooth and click “Scan” to start scanning the sensor's Bluetooth.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/20.png"/></div>
<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/21.png"/></div>


3) Select the Sensor by S/N (S/N is on the front label of the sensor). Then, the basic information of the sensor will be displayed after entering.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/22.png"/></div>
<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/23.png"/></div>

4) Enter configuration mode after Bluetooth connection is successful: LED flashes at 2s frequency.


## Configure basic parameters through App
### Select the Platform and Frequency
S210x Sensors are manufactured to support universal frequency plan from 863MHz ~928MHz in one SKU. That is to say, every single device can support 7 frequency plans.

Here we select the “SenseCAP for Helium” or “SenseCAP for TTN”. The Frequency Plan is based on your actual situation.

**\*Note:** Data Logger can upload data when there is a Helium network around the user. It runs on SenseCAP private Helium Console. Users do not need to create a device on the Helium Console;

SenseCAP for TTN platform needs to be used with SenseCAP LoRaWAN outdoor gateway(https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/25.png"/></div>


### Set the Interval
The working mode of device: wake up the device every interval and collect measurement values and upload them through LoRa.  

For example, the device collects and uploads data **every 60 minutes by default**.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/26.png"/></div>



### Set the Packet Policy
The sensor uplink packet strategy has three modes, we select 1N here or you can according to your own requirement.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/27.png"/></div>

|**Parameter**|**Description**|
| - | - |
|2C+1N (default)|2C+1N (2 confirm packets and 1 none-confirm) is the best strategy, the mode can minimize the packet loss rate, however the device will consume the most data packet in TTN, or date credits in Helium network.|
|1C|1C (1 confirm) the device will sleep after get 1 received confirm packet from server.|
|1N|1N (1 none-confirm) the device only send packet and then start to sleep, no matter the server received the data or not.|


### Restore Factory Setting
When selecting the SenseCAP platform, you must use the fixed EUI/App EUI/App Key. Therefore, you need to restore the factory Settings before switching back to the SenseCAP platform from other platforms.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/28.png"/></div>


When we make a mistake or want to reset everything, we can click the button. The device will be restored to the factory's default configuration.

**\*Note:** The “Restore Factory” function can only reset the Basic Setting.



## Configure RS485 Modbus-RTU Sensor via App
Select the “Protocol” as “RS485 Modbus RTU”. Then set the following parameters in turn.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/29.png"/></div>


|Baud Rate|Baud rate of communication with the sensor. Select **9600** here.|
| - | - |
|Modbus Address|<p>The default address is 10 for Five in ONE, 20 for Seven in ONE, 38 for Nine in ONE, and 43 for Ten in ONE.</p><p>Slave address of the sensor. The range is 1 to 247. Enter **20** here.</p>|
|Power Type|<p>Periodic power: Power the sensor before data collection, and power off the sensor after data collection. This mode reduces power consumption and increases battery life.</p><p>Select **Always on**.</p>|
|Power Voltage|Select the supply **12V** voltage to the sensor.|
|Sensor Warm-up Time|The warm-up time denotes the amount of time it takes for the sensor to attain its highest accuracy or performance level once the voltage supply has been applied. Enter **200ms** generally.|
|Response Timeout|After Data Logger initiates a data read request to the sensor, it waits for the timeout time for a response. If this time is exceeded, the command will be resent; **5(\*100ms)** would be ok.|
|Startup Time|The length of time the sensor can communicate from powered -on to communicating with Modbus. Range of **10\*(100ms)** would be ok.|
|Measurement Number|Collect 0 to 10 measurements in RS485 mode. Since the sensor has seven kinds of sensor registers. We select **7** here.|
|Work Mode|Select **Periodic collect** mode: Periodically collect and upload data.|
|Measurement Setting|Set the register of the measurement value and other configurations.|

**Measurement Setting**

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


After the configuration information is completed, click "Back to Home" (at this time, the node and the APP Bluetooth will be automatically disconnected), and the Data Logger will try to connect to the network (the LED indicator flashes red slowly when trying to connect to the network, and flashes green quickly after the network is successfully connected);

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/30.png"/></div>



# Check data on the SenseCAP Portal
## Bind Sensor to SenseCAP Portal
Please open SenseCAP Mate App.

1) **Scan QR Code**
2) Click “Add device” on the upper-right corner of device page to enter the device binding page.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/31.png"/></div>


3) Scan the QR code on the device to bind the device to your account. If you do not set it to a designated group, the device will be put into the “default” group.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/32.png"/></div>


4) **Manually fill in the EUI**

If the QR code sticker is damaged, you can manually fill in the EUI of the device to bind the device to your account. Please make sure you put in the EUI in the format suggested by the system and then click “confirm”.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/33.png"/></div>
<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/34.png"/></div>

## Check Data on SenseCAP Portal	
Finally, On the SenseCAP App or the website <http://sensecap.seeed.cc/> , you can check the device's online status and the latest data. In the list for each Sensor, you can check its online status and the time of its last data upload.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/35.png"/></div>

Also, you can check the date on SenseCAP Mate APP.

<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/36.png"/></div>
<div align="center"><img width={400}src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/1.png"/></div>


