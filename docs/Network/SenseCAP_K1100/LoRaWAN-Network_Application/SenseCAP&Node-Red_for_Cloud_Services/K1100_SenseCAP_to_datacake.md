---
description: SenseCAP & Node-RED to Datacake
title: SenseCAP & Node-RED to Datacake
keywords:
- SenseCap
image: https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4
slug: /K1100_SenseCAP_to_datacake
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Connecting SenseCAP to Datacake via Node-RED

**SenseCAP K1100 - The Sensor Prototype Kit** represents Seeed Studio concentrating the essence of LoRa® communication on technology and edge intelligence products, for the easiest deploying and mastering of LoRa® and IoT applications.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Air Temp &amp; Humidity</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Light</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Air Temp &amp; Humidity &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Soil Moisture &amp; Temp</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Soil Moisture &amp; Temp &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® Controller</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 Weather Station</strong></a></td>
    </tr>
  </tbody></table>

## Datacake

Datacake is a multi-purpose, low-code IoT platform that requires no programming skills and minimal time to create custom IoT applications.

The content of this chapter will continue to use the Node-RED introduced earlier and facilitate the management of the K1100 kit in Datacake through the use of Node-RED.

If you haven't installed or don't know what Node-RED is, please refer to [Node-RED & SenseCAP Tutorials](https://wiki.seeedstudio.com/K1100_sensecap_node-red/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/1.png" alt="pir" width={600} height="auto" /></p>

## Create MQTT Node

**Step 1.** Start Node-RED

Start Node-RED by typing the command `node-red` in the terminal and open a browser and enter the address **<http://localhost:1880>** in the address bar to access the editor of Node-RED.

**Step 2.** Create MQTT Node

We use **Network -> mqtt in** node and configure mqtt in the format of the SenseCAP API as requested in the [previous tutorial](https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node).

- Server: openstream.api.sensecap.seeed.cc
- Port: 1883
- Protocol: MQTT V3.1.1
- Client ID: The format is `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Your organization ID. We have obtained it in the [Get the SenseCAP API](/K1100_sensecap_node-red#get-the-sensecap-api).
  - `<Random ID>` uses your own randomly generated numbers or lowercase letters.

- Topic Format: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Your organization ID. We have obtained it in the Get the SenseCAP API.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Unique identification of sensor devices. This information can be found on the sticker on the back of the Grove - Wio E5, as well as in the SenseCAP console device.</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">A physical interface on the device to which the sensor is connected. For the K1100 kit, the default value here is 1.</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">Reserved Fields.</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">Measured value ID. This ID can be found in the Measurement IDs section of the <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAP documentation</a></td>
    </tr>
  </tbody></table>

**Step 3.** Validate MQTT nodes

Once configured, please click the **Deploy** button in the top right corner to check if the configuration was successful. If it is filled in correctly, then the word **Connected** will be displayed.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configure Datacake

**Step 1.** Register or login to Datacake

If you have already registered with Datacake, then please login on the [Datacake website](https://datacake.co/).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/3.png" /></div>

If you do not use or have registered with Datacake, then please complete your registration and login [here](https://app.datacake.de/signup).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/2.png" /></div>

**Step 2.** New workspace

Once you have logged into Datacake, click on your account name in the top left hand corner and select **Add Workspace**. And come up with a name for your workspace.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/8.png" /></div>

**Step 3.** New device

After entering the newly created workspace, then create a new device.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/9.png" /></div>

Select **API**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/4.png" /></div>

Select **New Product**. And name the product.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/5.png" /></div>

In this section, we will choose the free option to complete.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/7.png" /></div>

**Step 4.** Configure the device

Click into the new device you just created and select **Configuration**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/10.png" /></div>

Locate "Fields" and click **Add Field**. Then enter the name of the data you want to manage in Datacake.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/11.png" /></div>

:::note
 Note that the IDENTIFIER fields are all uppercase, and in the function node of Node RED that is configured later, the content passed in also needs to be uppercase.
:::
**Step 5.** Obtain the API token

Click on your account name in the top left hand corner and select **Edit Profile**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/12.png" /></div>

Then save the **API token** in the API, which we will use in Node RED in a moment.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/13.png" /></div>

## Configure Node-RED

**Step 1.** Download Datacake Paletts

Click on the upper-right menu bar and select Settings.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Search and install **node-red-contrib-datacake** in the **Paletts -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/14.png" /></div>

Add **datacake - out** from the storage bar on the left，double-click it to enter the configuration page, then click the edit button to edit **datacake - out** node.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/15.png" /></div>

**Step 2.** Edit **datacake - out** node

Please fill in the **API Token** with the API token we obtained in the previous configuration of Datacake. Then just click the Add button in the top right corner.

Then select the name of the workspace we created earlier.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/16.png" /></div>

The device will automatically be refreshed to the new device just created and the field drop down box will show the new field just created. If you don't want to set a field here, you can also modify the fieldName of the payload to configure the field via code.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/17.png" /></div>

**Step 3.** Configure the function node

Data reporting to Datacake needs to follow a specific data format, so it's necessary to add a function node to process the data format.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Drag out the function node from the function bar on the left, double-click it to enter the edit page, then copy the code to On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        msg.payload = payload.value
        if (measurementId == 4150) {
            msg.fieldName = "ACCELX"
        } else if (measurementId == 4151) {
            msg.fieldName = "ACCELY"
        } else if (measurementId == 4152) {
            msg.fieldName = "ACCELZ"
        } else if (measurementId == 4192) {
            msg.fieldName = "VOLUME"
        } else if (measurementId == 4193) {
            msg.fieldName = "LIGHTINTENSITY"
        } else if (measurementId == 4103) {
            msg.fieldName = "SOILMOISTURE"
        } else if (measurementId == 4195) {
            msg.fieldName = "TVOC"
        } else if (measurementId == 4100) {
            msg.fieldName = "CO2"
        } else if (measurementId == 4097) {
            msg.fieldName = "AIRTEMPERATURE"
        } else if (measurementId == 4098) {
            msg.fieldName = "AIRHUMIDITY"
        } else if (measurementId == 4175) {
            msg.fieldName = "AIDETECTION1"
        } else if (measurementId == 4176) {
            msg.fieldName = "AIDETECTION2"
        } else if (measurementId == 4177) {
            msg.fieldName = "AIDETECTION3"
        } else if (measurementId == 4178) {
            msg.fieldName = "AIDETECTION4"
        } else if (measurementId == 4179) {
            msg.fieldName = "AIDETECTION5"
        } else if (measurementId == 4180) {
            msg.fieldName = "AIDETECTION6"
        } else if (measurementId == 4181) {
            msg.fieldName = "AIDETECTION7"
        } else if (measurementId == 4182) {
            msg.fieldName = "AIDETECTION8"
        } else if (measurementId == 4183) {
            msg.fieldName = "AIDETECTION9"
        } else if (measurementId == 4184) {
            msg.fieldName = "AIDETECTION10"
        }
    }
    return msg;
}
```

**Step 4.** Deploy

Then we connect all the nodes and click on the **Deploy** button and if everything is set up correctly you will be able to see the mqtt in node showing connected.

If you want to see the logging information of the data, you can add a debug node after the function node.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/18.png" /></div>

Once the Wio Terminal starts powering up and working and starts sending data to SenseCAP PaaS server, then we can check the data on Node-RED debug log.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/19.png" /></div>

Back in the Datacake dashboard, you can see all the data information in the **History** section of this device.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/20.png" /></div>

## Troubleshoot

> Q1: Why can't I find the Palette in Node-RED?

A: If you cannot find the Palette in the settings, check your terminal for an error message when you start Node-RED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

The most common scenario is that your npm version is too old to start the Palette editor.

If your situation is as described above, run **Powershell as administrator** and enter the following command to upgrade npm.

```sh
npm install -g npm
```

Then just restart Node-RED.

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
