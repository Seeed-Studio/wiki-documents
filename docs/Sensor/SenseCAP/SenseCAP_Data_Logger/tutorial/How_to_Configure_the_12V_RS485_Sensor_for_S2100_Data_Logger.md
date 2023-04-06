---
description: Configure the 12V RS485 Sensor
title: Configure the 12V RS485 Sensor
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 2/14/2023
  author: Matthew
---


# Configure the 12V RS485 Sensor

## Sensor Probe

Get these items ready:

![picture1](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/1.png)

### Tools

|**Type**|**Description**|
| - | - |
|Cross screwdriver|Cross recess No.2|

# Connect to the Sensor 
## Disassemble the Data Logger
1. Unscrew three screws.

![picture2](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/2.png)

2. Take down the cover.

![picture3](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png)

3. Remove the thread cap and pass it through the cable of the sensor, pass it through the bottom cover, and connect it to the wiring terminal.

![picture4](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png)

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
Data Logger supports two power supply modes, we choose the External 12V DC mode:

|**Mode**|**Description**|
| - | - |
|Built-in Battery|The Data Logger and sensors are powered by batteries. In this case, the Data Logger can be connected to a 5V sensor.|
|External 12V DC|<p>Supply power to Data Logger and sensor through external 12V power supply. When the external 12V is disconnected, the system switches to battery power. </p><p>When using external 12V power supply, use it together with the junction box to ensure the waterproof performance of the device.</p>|


## Connect to the junction box
Wire sequence of M12 cable:

![picture5](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png)

When your sensor needs 12V power, the battery will not be able to drive the sensor. Therefore, an external 12V power supply is required.

1) Prepare the following items: 12V DC adapter, Junction box, and 4-pin wire.
2) Wire to the terminal of the Data Logger.

![picture6](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/6.png)

Connect the cover, rubber ring and screw cap in turn.

![picture7](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/7.png)
![picture8](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/8.png)

3) Wire to the terminal of the junction box.

![picture9](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/9.png)




4) Connect the M12 sensor wire to the junction box.

![picture10](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/10.png)

5) Connect the 12V DC adapter to the power supply.
## Connect to the Sensor
Wire sequence of ONE Compact Weather Station Sensor:

![picture11](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/11.png)

The device adopts an M12 8-pin connector, the different colored pins provide power and data communication (as shown in the above diagram).

When working with the RS-485, you can connect only 4 wires (not using a heating function), and the rest can be individually wrapped with tape to prevent short circuit.

![picture12](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/12.png)

The holes of the cable and the pins of the device connector **must be aligned** when the cable is plugged in.
![picture13](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/13.png)



Plugin the cable and tighten it clockwise

![picture14](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/14.png)


To complete the assembly.

![picture15](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/15.png)



**Tighten the screws and screw caps** **to check the waterproofing**. If the wire diameter is too thin, add waterproof tape for winding.

![picture16](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/16.png)



**\*Note:** When assembling the device, it is necessary to install the waterproof pad of the Data Logger and the adapter box, and tighten the screw cap and screw, otherwise the waterproof effect of the device may be affected!

If the wire diameter is too small, it can be wrapped with waterproof tape, as shown below:

![picture17](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/17.png)


# Setup the S2100
## Connect to Sensor to App
1) Press button and hold for **3 seconds**, the LED will flash at 1s frequency. Please use the App to connect the sensor within 1 minute; otherwise, the device will power off or reboot.
![picture18](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/18.png)

2) Please select “S2100 Data Logger”.

Please click the “Setup” button to turn on Bluetooth and click “Scan” to start scanning the sensor's Bluetooth.

![picture19](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/19.png)
![picture20](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/20.png)


3) Select the Sensor by S/N (S/N is on the front label of the sensor). Then, the basic information of the sensor will be displayed after entering.

![picture21](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/21.png)
![picture22](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/22.png)
![picture23](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/23.png)


4) Enter configuration mode after Bluetooth connection is successful: LED flashes at 2s frequency.













## Configure basic parameters through App
### Select the Platform and Frequency
S210x Sensors are manufactured to support universal frequency plan from 863MHz ~928MHz in one SKU. That is to say, every single device can support 7 frequency plans.

Here we select the “SenseCAP for Helium” or “SenseCAP for TTN”. The Frequency Plan based on your actual situation.

**\*Note:** Data Logger can upload data when there is a Helium network around the user. It runs on SenseCAP private Helium Console. Users do not need to create a device on the Helium Console;

SenseCAP for TTN platform needs to be used with SenseCAP LoRaWAN outdoor gateway(https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)

![picture24](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/24.png)


### Set the Interval
The working mode of device: wake up the device every interval and collect measurement values and upload them through LoRa.  

For example, the device collects and uploads data **every 60 minutes by default**.

![picture25](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/25.png)



### Set the Packet Policy
The sensor uplink packet strategy has three modes, we select 1N here or you can according to your own requirement.

![picture26](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/26.png)

|**Parameter**|**Description**|
| - | - |
|2C+1N (default)|2C+1N (2 confirm packets and 1 none-confirm) is the best strategy, the mode can minimize the packet loss rate, however the device will consume the most data packet in TTN, or date credits in Helium network.|
|1C|1C (1 confirm) the device will sleep after get 1 received confirm packet from server.|
|1N|1N (1 none-confirm) the device only send packet and then start to sleep, no matter the server received the data or not.|


### Restore Factory Setting
When selecting the SenseCAP platform, you must use the fixed EUI/App EUI/App Key. Therefore, you need to restore the factory Settings before switching back to the SenseCAP platform from other platforms.

![picture27](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/27.png)


When we make a mistake or want to reset everything, we can click the button. The device will be restored to the factory's default configuration.

**\*Note:** The “Restore Factory” function can only reset the Basic Setting.



## Configure RS485 Modbus-RTU Sensor via App
Select the “Protocol” as “RS485 Modbus RTU”. Then set the following parameters in turn.

![picture28](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/28.png)


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

![picture29](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/29.png)



# Check data on the SenseCAP Portal
## Bind Sensor to SenseCAP Portal
Please open SenseCAP Mate App.

1) **Scan QR Code**
2) Click “Add device” on the upper-right corner of device page to enter the device binding page.

![picture30](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/30.png)


3) Scan the QR code on the device to bind the device to your account. If you do not set it to a designated group, the device will be put into the “default” group.

![picture31](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/31.png)


4) **Manually fill in the EUI**

If the QR code sticker is damaged, you can manually fill in the EUI of the device to bind the device to your account. Please make sure you put in the EUI in the format suggested by the system and then click “confirm”.

![picture32](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/32.png)
![picture33](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/33.png)

## Check Data on SenseCAP Portal	
On the SenseCAP App or the website <http://sensecap.seeed.cc/> , you can check the device online status and the latest data. In the list for each Sensor, you can check its online status and the time of its last data upload.

![picture34](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/34.png)

Also, you can check the date on SenseCAP Mate APP.

![picture35](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/35.png)
![picture36](https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/36.png)


