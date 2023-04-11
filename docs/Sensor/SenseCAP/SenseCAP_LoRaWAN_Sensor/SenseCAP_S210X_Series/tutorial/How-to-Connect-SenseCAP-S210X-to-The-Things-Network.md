---
description: Connect to The Things Network
title: Connect to The Things Network
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 2/14/2023
  author: Matthew
---

# Connect to The Things Network
 
## 1. The Things Network	
The Things Stack is an enterprise grade LoRaWAN network server, built on an open-source core. The Things Stack allows you to build and manage LoRaWAN networks on your own hardware or in the cloud.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png)




## Connect to The Things Network 
   ### Create a New Account
TTN Website: <https://www.thethingsnetwork.org/>
### Setup the Sensor
(1) Open the SenseCAP Mate App
(2) Press button and hold for 3 seconds, the LED will flash at 1s frequency.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/004.png)

(3) Please click the “Setup” button to turn on Bluetooth and click “Scan” to start scanning the sensor's Bluetooth.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/005.png)

(4) Select the Sensor by S/N (label). Then, the basic information of the sensor will be displayed after entering.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/006.png)       
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/007.png)
### Set Frequency of Sensor via SenseCAP Mate App
Set the corresponding frequency band based on the frequency band of the gateway.

(1) Click the “Setting” and select the platform is “The Things Network”.

![wecom-temp-81208-6d8da19d41a879a504ad54c71bf4961c](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/008.jpeg)  
![wecom-temp-73569-56429bfa7490c37c5ec3c5b2fc8ba435](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/009.jpeg)

(2) Select the Frequency Plan, if your gateway is US915, set the sensor to US915.
(3) The device uses OTAA to join the LoRaWAN network by default. So, we can set the device EUI, App EUI and APP Key here.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/010.png)

|**Parameter**|**Type**|
| - | - |
|Device EUI|16, hexadecimal from 0 ~ F|
|App EUI|16, hexadecimal from 0 ~ F|
|App Key|32, hexadecimal from 0 ~ F|
(4) Set the Packet Policy. The sensor uplink packet strategy has three modes.

|**Parameter**|**Description**|
| - | - |
|2C+1N (default)|2C+1N (2 confirm packets and 1 none-confirm) is the best strategy, the mode can minimize the packet loss rate, however the device will consume the most data packet in TTN, or date credits in Helium network.|
|1C|1C (1 confirm) the device will sleep after get 1 received confirm packet from server.|
|1N|1N (1 none-confirm) the device only send packet and then start to sleep, no matter the server received the data or not.|

(5) Click the “Send” button, send the setting to the sensor for it to take effect. 

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/011.png)

(6) Click the “Home” button, the App will disconnect the Bluetooth connection.

Then, the sensor will reboot.

(7) When the device is disconnected from Bluetooth, the LED lights up for **5 seconds** and then flashes as a **breathing light**.









## TTN configuration
### Gateway Registration on TTN
Create a Gateway on the TTN console based on actual information.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/012.png)
### Create the Application
Create an application on your TTN console. Within applications, you can register and manage end devices and their network data. After setting up your device fleet, use one of our many integration options to pass relevant data to your external services.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/013.png)



## Add Sensor to TTN Console
(1) Select the Application you have created, and click the ‘Register end device’ to add end your device.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/014.png)

(2) Select the end device in the LoRaWAN Device Repository.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/015.png)

And then based on the brand, configure items like the ones below.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/016.png)

- End device brand: Select SenseCAP.
- Model: Select your sensor model. (If not, use manual add)
- Hardware / Firmware Version: Usually, choose the latest one.
- Profile(Region)/Frequency plan: Get it from SenseCAP Mate App

|**Sensor Frequency**|**Common Name**|**Description**|
| - | - | - |
|EU863-870|EU868|Europe 863-870 MHz (SF9 for RX2 -recommended)|
|US902-928|US915|United States 902-928 MHz, FSB 2 (used by TTN)|
|AU915-928|AU915|Australia 915-928 MHz, FSB 2 (used by TTN)|
|KR920-923|KR920|--------|
|IN865-867|IN865|--------|
|AS923|AS923-1|Asia 920-923 MHZ|
||AS923-2||
Different countries and LoRaWAN network servers use different frequency plans. 

For Helium network, please refer to: 

*https://docs.helium.com/lorawan-on-helium/frequency-plans*	

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/017.png)

(3) Configure ‘Provisioning information’.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/018.png)

- JoinEUI: which means the **APP EUI**, you can get it from SenseCAP Mate App.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/019.png)

- Device EUI/ App Key: Get it from the configuration page via SenseCAP Mate App. Like the below picture.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/020.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/021.png)


(4) Register end device. 

After you finish the above items, Click the “Register end device” to save your modification.

**\*Note:** If joining the network successfully, LED will **flashes fast for 2s**.

## Check Data on TTN Console
On the Data page, data package is uploading. For the format of the payload, refer to the section of Payload Decoding.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/022.png)


