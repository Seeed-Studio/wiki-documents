 # Connect to Helium Network
 ## Helium Console
The Helium Console is a web-based device management tool hosted by the Helium Foundation that allows developers to register, authenticate, and manage their devices on the Helium network. In addition to device management, Console provides prebuilt connections called Integrations to route device data via HTTPs or MQTT; or directly to cloud services like AWS IoT.

![](003.png)












## Connect to Helium Network
### Creat a New account
Please go to <https://console.helium.com/>  , and register your account.
### Setup the Sensor
(1) Open the SenseCAP Mate App

(2) Press button and hold for 3 seconds, the LED will flash at 1s frequency.

![](004.png)

(3) Please click the “Setup” button to turn on Bluetooth and click “Scan” to start scanning the sensor's Bluetooth.

![](005.png)

(4) Select the Sensor by S/N (label). Then, the basic information of the sensor will be displayed after entering.

![](006.png)       ![](007.png)
### Set Frequency of Sensor via SenseCAP Mate App
Set the corresponding frequency band based on the frequency band of the gateway.

(1) Click the “Setting” and select the platform is “**Helium**”.

![wecom-temp-114185-2959d45aab4ab735f22b5fbf68a22c91](008.jpeg)     ![wecom-temp-88582-e758abc6d2f73925e20290cddfebc421](009.jpeg)

(2) Select the Frequency Plan, if the gateway is US915, set the sensor to US915.

(3) Click the “Send” button, send the setting to the sensor for it to take effect. 

![](010.png)

(4) Click the “Home” button, the App will disconnect the Bluetooth connection.

Then, the sensor will reboot.

(5) When the device is disconnected from Bluetooth, the LED lights up for **15 seconds** and then flashes as a **breathing light**.

(6) After joining the network successfully, LED **flashes fast for 2s**.

# Helium Console Configuration
## Add New Device
(1) Click “Devices” –> “Add New Device”

![](011.png)

(2) Enter the Device EUI, App EUI, App Key: please refer to SenseCAP mate APP for details.

![](012.png)

(3) Save device.

![](013.png)

(4）Add a new label, then add the label to a device. 

![](014.png)

![](015.png)

![](016.png)

![](017.png)








## Check the data on Helium
(1) Enter device details page and find the REAL TIME PACKETS.

![](018.png)

(2) Power on the Sensor, it will display raw data.

![](019.png)










## Upload Data from Helium to Datacake
### Create a Datacake Account
(1) Create a new account, website: <https://datacake.co/> 

![](020.png)

(2) Click the “Edit Profile” à “API” à Get API token.

![](021.png)

![](022.png)

### Add New Integration on Helium Console
(1) Click “Integrations” à”Add New Integration” à”Datacake”.

![](023.png)

(2) Enter Datacake Token (Refer to [the section](#_Create_a_Datacake)) and name your integration.

![](024.png)
### Configure the Flows on Helium
(1) Click “Flows”.

![](025.png)

(2) Drag the Label into a blank place. 

![](026.png)

(3) Drag the Integration in to a blank place.

![](027.png)

(4) Connect the two blocks.

![](028.png)

(5) Save Changes.

![](029.png)
### Add the Sensor on Datacake
(1) Return Datacake Dashboard, and click “Device”à”Add Device”

![](030.png)

(2) Search “Seeed”, You can select some sensors directly.

![](031.png)

(3) Select the Sensor Template.

![](032.png)

(4) Select “Helium”.

![](033.png)

(5) Enter your Device EUI and Name.

![](034.png)

(6) Select your Plan and add device.

![](035.png)


### Check Data from Datacake
Click Debug button, it will display debug log.

![](036.png)

![](037.png)

![](038.png)


