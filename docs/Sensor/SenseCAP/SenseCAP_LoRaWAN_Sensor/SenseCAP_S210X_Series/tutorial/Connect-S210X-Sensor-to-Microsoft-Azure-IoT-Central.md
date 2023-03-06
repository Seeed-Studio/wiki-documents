---
description: Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED
title: Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 2/14/2023
  author: Matthew
---

# Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED

**SenseCAP S210X Series Sensors** are with the IP66 rating, -40 ~ +85C ° operating temperature and a built-in 19Ah high-capacity battery, combined with the devices' low power consumption, the series can operate in harsh outdoor environments for up to 10 years with a range of up to 10km. ![IMG\_256](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/001.png)

In this tutorial, we will introduce how to connect S210X series Sensors to the Microsoft Azure IoT Central via Node-RED
## **SenseCAP & Node-RED**
This chapter, the first in a series, walks you through installing and using Node-red and calling the SenseCAP API to connect to Node-RED.

This chapter is to make it easier for our users to connect data from the SenseCAP platform to various other Paas platforms for more in-depth data processing.

**Node-RED**

Node-RED is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways.

It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click. 
![IMG\_257](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/002.png)

#### **Install Node.Js**
To install Node-RED locally you will need a supported version of Node.js.

Node-RED currently recommends [**Node 14.x LTS](https://nodejs.org/en/)**.**

#### **Installing Node-RED with npm**
To install Node-RED you can use the npm command that comes with node.js:

sudo npm install -g --unsafe-perm node-red

Note: If you are using Windows, do not start the command with **sudo**.

That command will install Node-RED as a global module along with its dependencies.

Once installed as a global module you can use this command to start Node-RED in your terminal. 

node-red

![IMG\_258](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/003.png)

Then you can then access the Node-RED editor by pointing your browser at [http://localhost:1880](http://localhost:1880/).

#### **Get the SenseCAP API**
Before proceeding to this section, make sure you have bound your S210x device in the SenseCAP console.

Note: If you haven't bound the device, please check ? first 

Log in to the [**SenseCAP console**](https://sensecap.seeed.cc/portal/#/dashboard). In the drop-down bar to the right of the user name at the top of the dashboard, we can find the **Organization Information**, please select it to get the **Organization ID**

![IMG\_259](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/004.png)

Then, we also need to get the API key for SenseCAP. Please click on **Security -> Access API keys** on the left side of the dashboard. Then Create an Access Key.

![IMG\_260](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/005.png)

Click on the **API ID** you created and you will get her **Access API keys**, please copy it and the **Organization ID**, we will use them in the later steps.

![IMG\_261](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/006.png)
#### **Node-RED Configuration**
![IMG\_262](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/007.png)

**Step 1.** Add a new mqtt-broker node

Drag out an **mqtt in** node, double-click it to enter the configuration page, then click the edit button after **Add new mqtt-broker**.

![IMG\_263](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/008.png)

The configuration of mqtt-broker is required to be filled out as follows:

Server：openstream.api.sensecap.seeed.cc

Port：1883

Protocol: MQTT V3.1.1

Client ID format：**org-"Organization ID" "Random ID"**

**Organization ID:** Obtained from your **Organization information**

**Random ID:** Use your own randomly generated numbers and lowercase letters.

Example:org-43243\*\*\*23-test

![IMG\_264](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/009.png)

Then we fill in the **Security** options field with the Username and Password:

Username: **org-"Organization ID"**

**Organization ID:** Your organization ID. We have obtained it before

Password: Fill in the **Access API keys** that we obtained before.
` `![IMG\_265](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/010.png)

Add **Topic**

Topic: Configuring a topic in a specific format determines the kind of device and data type to be received.

Topic format:
**/device_sensor_data/"OrgID"/"DeviceEUI"/"Channel"/"Reserved"/"MeasurementID"**


|OrgID|You can find the id on your organization information|
| :-: | :- |
|DeviceEUI|You can find EUI on the Device Basic Properties or device label|
|Channel|A physical interface on the device to connect to the sensor, default:1|
|Reserved|Reserved field|
|MeasurementID|[measurement_list](https://sensecap-docs.seeed.cc/measurement_list.html)|
**Note**: "+" indicates that this field has no filter conditions and can match all. "/+/+/+/+" means to listen to all "DeviceEUI", "Channel", "Reserved", "MeasurementID"

Example：/device\_sensor\_data/424988\*\*\*\*44/2CF7F\*\*\*0002/+/+/+

This topic means receiving all remote sensing data of the current device.

![IMG\_266](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/011.png)

**Step 2.** Add debug node

Drag out a **debug** node, connect to the **mqtt-in** node, then click **Deploy**

After the deployment is successful, you will see "**Connected**" under the **mqtt in** building block, the data reporting interval is determined by the sensor which we connected. After receiving the data, the debug window on the right will display the raw data. ![IMG\_267](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/012.png)






## **SenseCAP & Node\_RED & Azure IoT Central**

[**Microsoft Azure IoT Central**](https://azure.microsoft.com/en-us/services/iot-central) is a fully managed global IoT SaaS (software as a service) solution that makes it easy to connect, monitor and manage your IoT assets at scale. It is highly secure, scales with your business as it grows, ensures that your investments are repeatable and integrates with your existing business apps. It also bridges the gap between your business applications and IoT data. Finally it offers centralized management to reconfigure and update your devices.

The content of this chapter will continue to use the Node-RED introduced earlier and facilitate the management of the S210X Sensor suite in Microsoft Azure IoT Central through the use of Node-RED.
#### **Microsoft Azure IoT Central Configuration**
**Step 1.** Log in to Azure IoT Central.

Please visit [**Azure IoT Central**](https://apps.azureiotcentral.com/home) website, click **Build** from the navigation menu on the left, and click **Custom apps**. ![IMG\_268](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/013.png)

**Step 2.** Fill in the **Application name** and choose the **Pricing plan**. Application URL will be created automatically when you fill in the application name. 

![IMG\_269](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/014.png)

Note: If you are a new user of Azure IoT Central, we recommend that you select Free as this will not consume your fees.

![IMG\_270](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/015.png)

**Step 3.** Click **Create** to create the new application. Now you have successfully set up Azure IoT Central!

![IMG\_271](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/016.png)

**Step 4.** Create a Device Template

Please create a new device template by clicking on **Device templates** in the left-hand menu bar.

![IMG\_272](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/017.png)

Name your device template and click **create**

![IMG\_273](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/018.png)

![IMG\_274](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/019.png)

**Step 5.** Create a Device

Click on **Devices -> S2103** under the left menu bar. ![IMG\_275](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/020.png)

![IMG\_276](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/021.png)

Once you have created the device, you will see the device we have just created under **Device**, please tap into the device and click on the **Connect** button in the top left corner.

Please make a note of this information, which we will use in the next steps.

![IMG\_277](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/022.png)

#### **Node-RED Configuration**
**Step 1.** Install Azure IoT Paletts

Click on the upper-right menu bar and select Settings ![IMG\_278](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/023.png)

Search and install "node-red-contrib-azure-iot-central" in the **Paletts - Install** ![IMG\_279](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/024.png)

**Step 2.** Configure the Azure IoT Central node

Drag out the **Azure IoT Central** node from the **function** bar on the left, double-click it to enter the configuration page, then click the edit button to edit **Azure IoT Central** node

![IMG\_280](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/025.png)

The configuration is required to be filled out as follows:

Transport: MQTT

Authentication: SAS

Scope ID/Device ID/Primary Key: We have obtained it before

![IMG\_281](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/026.png)

**Step 3.** Configure the function node

Data reporting to Azure IoT Central needs to follow a specific data format, so it's necessary to add a function building block to process the data format.

Drag out the **function** node from the function bar on the left, double-click it to enter the edit page, then copy the code to **On Message.**

![IMG\_282](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/027.png)

> code:

`{

`    `var payload = msg.payload;

`    `var topic = msg.topic;

`    `var strs = topic.split("/");

`    `var length = strs.length

`    `if (length >= 2) {

`        `var measurementId = strs[length - 1]

`        `var body = {}

`        `var value = payload.value

`        `if (measurementId == 4097) {

`            `body.AirTemperature = value

`        `} else if (measurementId == 4098) {

`            `body.AirHumidity = value

`        `} else if (measurementId == 4100) {

`            `body.CO2 = value

`        `}`

`        `msg.payload = body;

`    `}

`    `return msg;

}

> 

If you want to see the logging information of the data, you can add a debug node after the function node.

![IMG\_283](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/028.png)

Once the S210X Sensor starts powering up and working and starts sending data to the SenseCAP PaaS server, then we can check the data on Azure IoT Central.

#### **Data Presentation**
The data visible in the **Raw data** column are placed in **Unmodeled data**, so we need to parse the data according to the code above.

Add the capability that you need, then click **save** and **publish**

![IMG\_284](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/029.png)

![IMG\_285](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/030.png)

Then we can clearly check the raw data uploaded by the sensor. ![IMG\_286](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/031.png)

If you want to enrich your data dashboard page, you can also configure it to be displayed in Overview.

Click on **Overview** on the left navigation menu.

![IMG\_287](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/032.png)

Collapse **starts with devices** drop-down menu and selects the telemetry that you want to visualize.

![IMG\_288](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/033.png)

Click **Add tile** and you will see the tile added to the Azure IoT Central Dashboard.

![IMG\_289](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/034.png)

So next, customize your sensor data monitoring dashboard to your liking!

After finishing your changes, just click on **save** and **publish** 

![IMG\_290](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/035.png)

![IMG\_291](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/036.png)

You can view your sensor data through your custom dashboard now! ![IMG\_292](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/037.png)


