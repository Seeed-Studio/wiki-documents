---
description: SenseCAP & Node-RED to Power BI
title: SenseCAP & Node-RED to Power BI
keywords:
- SenseCap
image: https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4
slug: /K1100_SenseCAP_to_PowerBI
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Connecting SenseCAP to Power BI via Node-RED

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

## Power BI

Connect and analyze your entire data estate by combining Power BI with Azure analytics services—including Azure Synapse Analytics and Azure Data Lake Storage. Analyze petabytes of data, use advanced AI capabilities, apply additional data protection, and more easily share insights across your organization.

In this tutorial we will guide you through how to import sensor data from **SenseCAP** into **Power BI** for more in-depth data processing by using Node RED.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

## Preliminary preparation

To complete this tutorial, you need:

- If you haven't installed or don't know what Node-RED is, please refer to [Node-RED & SenseCAP Tutorials](https://wiki.seeedstudio.com/K1100_sensecap_node-red/).
- A Power BI account. If you don't have a Power BI account, sign up for a [free Power BI Pro trial](https://app.powerbi.com/signupredirect?pbi_source=web) before you begin.
- In any of the following wikis, you have successfully uploaded data to SenseCAP.
  - [Send sensor data to SenseCAP via LoRa®](https://wiki.seeedstudio.com/K1100-quickstart/#send-sensor-data-to-sensecap-via-lora)

<!--## Create SenseCAP node

**Step 1.** Start Node-RED

Start Node-RED by typing the command `node-red` in the terminal and open a browser and enter the address **http://localhost:1880** in the address bar to access the editor of Node-RED.

**Step 2.** Install the SenseCAP node

Click on the upper-right menu bar and select Settings.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/6.png"/></div>

Search and install **node-red-sensecap-paas** in the **Paletts -> Install**.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/1.png"/></div>

**Step 3.** Configure SenseCAP node

Add **sensecap.OpenStream** from the storage bar on the left，double-click it to enter the configuration page, then click the edit button to edit **sensecap.OpenStream** node.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/2.png"/></div>

Please edit your account.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/7.png"/></div>

In the new page, please fill in the following fields.

- Name: Name this account.
- Orgnization ID: From the **Organization Information** section, copy the Organization ID.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/8.png"/></div>

- API Key: Please click on **Security** -> **Access API keys** on the left side of the dashboard. Then Create an Access Key.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/9.png"/></div>

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/10.png"/></div>

Then just click on the **Update** or **Save** button.

On the screen for setting up nodes, please fill in the following fields.
- Name: Name your node.
- EUI: Please enter the EUI of your device, which can be found in the SenseCAP console.
- Measurement ID: Sensor number. Information on sensor numbers can be found in the [SenseCAP Documentation Centre](https://sensecap-docs.seeed.cc/sensor_types_list.html).
- Output Format: Select **Power BI**.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/5.png"/></div>

!!!Note
    Our recommendation is to fill in the Measurement ID, which will be a sensor value each time it is transmitted to Power BI. If this is left blank, multiple sensor values will be transmitted at the same time and Power BI will then get a messy data.
    If you have a need to analyse values from multiple sensors at the same time, you can use multiple SenseCAP nodes.-->

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

:::note
We recommend that an mqtt in node only transmits the values of a single sensor to avoid data confusion caused by transmitting the values of multiple sensors at the same time.
:::
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/20.png" /></div>

**Step 3.** Validate MQTT nodes

Once configured, please click the **Deploy** button in the top right corner to check if the configuration was successful. If it is filled in correctly, then the word **Connected** will be displayed.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configure function node

Data reporting to Power BI needs to follow a specific data format, so it's necessary to add a function node to process the data format.

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
        var body = {}
        var value = payload.value
        if (measurementId == 4100) {
            body.co2 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4103) {
            body.soilmoisture = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4150) {
            body.accelX = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4151) {
            body.accelY = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4152) {
            body.accelZ = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4192) {
            body.soundintensity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4193) {
            body.lightIntensity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4195) {
            body.tvoc = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4097) {
            body.airtemperature = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4098) {
            body.airhumidity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4175) {
            body.AIdetection_1 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4176) {
            body.AIdetection_2 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4177) {
            body.AIdetection_3 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4178) {
            body.AIdetection_4 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4179) {
            body.AIdetection_5 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4180) {
            body.AIdetection_6 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4181) {
            body.AIdetection_7 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4182) {
            body.AIdetection_8 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4183) {
            body.AIdetection_9 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4184) {
            body.AIdetection_10 = value
            body.timestamp = msg.payload.timestamp
        }
        msg.payload = body;
    }
    return msg;
}
```

:::Tip
    The above code is common to all sensors and you can choose to paste it all into a function node or intercept a section of one of the sensors you are using to use.
    It is worth noting that the name of the sensor in the program needs to match the name set later in Power BI for the data stream to be transferred successfully. For example, in the above program the light sensor has the value name: **lightIntensity**.
:::

## Create the Power BI datasets

**Step 1.** Sign in to your [Power BI account](https://app.powerbi.com/).

**Step 2.** Create a workspace.

Select **Workspaces**, and then select **Create a workspace**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/23.png" /></div>

On the Create a workspace page, enter **In-store analytics - checkout** as the Workspace name. Select **Save**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/24.png" /></div>

**Step 3.** Create a streaming dataset.

On the workspace page, select **+ New** > **Streaming dataset**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/25.png" /></div>

On the New streaming dataset page, choose API, and then select Next.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/26.png" /></div>

Enter **Light-Sensor** as the Dataset name.

Enter the Light values from stream in following table:

| Value name                | Value type                   |
|---------------------------|------------------------------|
| Timestamp                 | DataTime                     |
| lightIntensity            | Number                       |

:::tip
The Value name should be the same as the name of the function program in Node RED.
:::
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/21.png" /></div>

You now have a streaming datasets. Please make a note of the **Push URL** you get here, we will use it in the next step.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/22.png" /></div>

## Configure http request node

Add **http request** from the storage bar on the left，double-click it to enter the configuration page, then click the edit button to edit **http request** node.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/16.png" /></div>

Please copy the URL obtained in the previous section into the URL in the http request page.

Just change the method to **POST** and save it.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/17.png" /></div>

## Deploy and observe data

**Step 1.** Deploy

Then we connect all the nodes and click on the **Deploy** button and if everything is set up correctly you will be able to see the mqtt in node showing connected.

If you want to see the logging information of the data, you can add a debug node after the function node.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/18.png" /></div>

Once the Wio Terminal starts powering up and working and starts sending data to SenseCAP PaaS server, then we can check the data on Node-RED debug log.

**Step 2.** Configure Power BI dashboards

Select **Workspaces** > **In-store analytics - checkout**.

Select **+ New** > **Dashboard**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

Enter **Store analytics** as the dashboard name, and select **Create**.

### Add line charts

Add a line chart tiles to show the Light value from the Wio Terminal buit-in sensors. Use the information in the following table to create the tiles. To add each tile, start by selecting **Edit** > **Add a tile**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

Select **Custom Streaming Data**, and then select **Next**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

Configure the horizontal coordinate to display the timestamp and the vertical coordinate to display the data values on the value.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/15.png" /></div>

When the data stream starts to transfer, you will be able to see the dashboard as a line graph.

You can also add more graphics or data analysis to suit your needs.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/19.png" /></div>

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>

## Statement

- The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.
- LoRaWAN® is a mark used under license from the LoRa Alliance®.
