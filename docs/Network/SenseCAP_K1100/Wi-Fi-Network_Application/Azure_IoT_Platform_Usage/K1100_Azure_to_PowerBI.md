---
description: Data visualisation with Power BI
title: Data visualisation with Power BI
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100_Azure_to_PowerBI
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Microsoft Azure IoT Data visualisation with Power BI

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

## Microsoft Azure IoT

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) is a collection of Microsoft-managed cloud services that connect, monitor, and control billions of IoT assets. It includes security and operating systems for devices and equipment, along with data and analytics that help businesses to build, deploy and manage IoT applications.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Power BI

Connect and analyze your entire data estate by combining Power BI with Azure analytics services—including Azure Synapse Analytics and Azure Data Lake Storage. Analyze petabytes of data, use advanced AI capabilities, apply additional data protection, and more easily share insights across your organization.

Turn your data into a competitive advantage by using Power BI and Azure together to connect, combine, and analyze your entire data estate.

In this tutorial, you configure your IoT Central application to export telemetry collected from the devices. You then use Power BI to create a custom dashboard for the store manager to visualize the insights derived from the telemetry.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

In this tutorial, you learn how to:

- Configure an IoT Central application to export telemetry to an event hub.
- Use Logic Apps to send data from an event hub to a Power BI streaming dataset.
- Create a Power BI dashboard to visualize data in the streaming dataset.

## Preliminary preparation

To complete this tutorial, you need:

- An Azure subscription. If you don't have an Azure subscription, create a [free account](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) before you begin.
- A Power BI account. If you don't have a Power BI account, sign up for a [free Power BI Pro trial](https://app.powerbi.com/signupredirect?pbi_source=web) before you begin.
- In any of the following wikis, you have successfully uploaded data to Azure IoT Central.
  - [Connect SenseCAP to Azure IoT Central via Node-RED](https://wiki.seeedstudio.com/K1100_SenseCAP_to_Azure_IoT_Central/)
  - [Connect Wio Terminal to Microsoft Azure IoT Central (WiFi)](https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Azure-IoT-Central/)

## Create a Resource Group

Before you create your event hub and logic app, you need to create a **resource group** to manage them. The resource group should be in the same location as your In-store analytics - checkout IoT Central application. To create a resource group:

**Step 1.** Sign in to the [Azure portal](https://portal.azure.com/).

**Step 2.** In the left navigation, select **Resource groups**. Then select **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/1.png" /></div>

- For **Subscription**, select the name of the Azure subscription you used to create your IoT Central application.
- For the **Resource group** name, enter **retail-store-analysis**.
- For the **Region**, select the same region you chose for the IoT Central application.

**Step 3.** Select Review + Create.

On the Review + Create page, select Create.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/2.png" /></div>

You now have a resource group called retail-store-analysis in your subscription.

## Configure an Event Hub

Before you can configure the retail monitoring application to export telemetry, you need to create an event hub to receive the exported data. The following steps show you how to create your event hub:

**Step 4.** In the [Azure portal](https://portal.azure.com/), select **Create a resource** at the top left of the screen.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

**Step 5.** In Search the Marketplace, enter Event Hubs, and then press Enter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/4.png" /></div>

**Step 6.** Create an event hub

On the Event Hubs page, select Create. On the Create Namespace page, take the following steps:

- Select the same **Subscription** you used to create your IoT Central application.
- Select the **retail-store-analysis** resource group.
- Enter a unique name for the namespace such as **k1100-retail-store-analysis**.
- Select the same location you used for your IoT Central application.
- Choose the Basic pricing tier.

Select **Review + create**. You may have to wait a few minutes for the system to provision the resources.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/5.png" /></div>

**Step 7.** Get an Event Hubs share key.

In the [Azure portal](https://portal.azure.com/), navigate to the **retail-store-analysis** resource group.

Wait for the deployment to complete. You may need to select Refresh to update the deployment status. You can also check the status of the event hub namespace creation in the Notifications.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/6.png" /></div>

In the **retail-store-analysis** resource group, select the **Event Hubs Namespace**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/7.png" /></div>

You see the home page for your Event Hubs Namespace in the portal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/8.png" /></div>

You need a **connection string** with send permissions to connect from IoT Central. To create a connection string:

- In your Event Hubs namespace in the Azure portal, select **Shared access policies**. Select **+ Add**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/9.png" /></div>

- Enter **SendPolicy** as the policy name, select **Send**, and then select Create.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/10.png" /></div>

- Select **SendPolicy** in the list of policies. Make a note of the **Connection string-primary key** value. You use it when you configure the export destination in IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/11.png" /></div>

**Step 8.** Get an Event Hubs manage and listen key.

You need a connection string with manage and listen permissions to connect to the event hub from your logic app. To retrieve a connection string:

- In your Event Hubs namespace in the Azure portal, select Shared access policies.

- Select **RootManageSharedAccessKey** in the list of policies.
Make a note of the **Connection string-primary key** value. You use it when you configure the logic app to fetch telemetry from your event hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/12.png" /></div>

**Step 8.** Create an event hub to use.

Now you have an Event Hubs Namespace, you can create an event hub to use with your IoT Central application:

- On the home page for your Event Hubs Namespace in the portal, select **+ Event Hub**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/13.png" /></div>

- On the Create Event Hub page, enter **store-telemetry** as the name, and then select **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/14.png" /></div>

You now have an event hub you can use when you configure data export from your IoT Central application.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/15.png" /></div>

## Configure data export

Now you have an event hub, you can configure your IoT Central Application to export telemetry from the connected devices. The following steps show you how to configure the export.

**Step 1.** Sign in to your [IoT Central Application](https://apps.azureiotcentral.com/home).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/16.png" /></div>

**Step 2.** Data export

Select **Data export** in the left pane. Select **+ New export**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/18.png" /></div>

- Enter **Telemetry export** as the export name.
- Select **Telemetry** as type of data to export.
- In the Destinations section, select **create a new one**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/19.png" /></div>

- New destination
  - Enter **Store data event hub** as the **Destination name**.
  - Select **Azure Event Hubs** as the **Destination type**.
  - Select **Connection string** as the **Authorization**.
  - Paste in the connection string for the **SendPolicy** you saved when you create the event hub.
  - Enter store-telemetry as the Event Hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/20.png" /></div>

Select **Create** and then **Save**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/21.png" /></div>

On the Telemetry export page, wait for the export status to change to Healthy.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/22.png" /></div>

The data export may take a few minutes to start sending telemetry to your event hub. You can see the status of the export on the Data exports page.

## Create the Power BI datasets

Your Power BI dashboard will display data from your retail monitoring application. In this solution, you use Power BI streaming datasets as the data source for the Power BI dashboard. In this section, you define the schema of the streaming datasets so that the logic app can forward data from the event hub. The following steps show you how to create two streaming datasets for the environmental sensors and one streaming dataset for the occupancy sensor:

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

Enter **Sensor** as the Dataset name.

Enter the three Values from stream in following table:

| Value name                | Value type                   |
|---------------------------|------------------------------|
| Timestamp                 | DataTime                     |
| Light                     | Number                       |
| Acceleration X            | Number                       |
| Acceleration Y            | Number                       |
| Acceleration Z            | Number                       |
| Sound                     | Number                       |

You now have a streaming datasets. The logic app will route telemetry from the Wio Terminal connected to your In-store analytics - checkout application to the dataset.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/27.png" /></div>

## Create a logic app

In this solution, the logic app reads telemetry from the event hub, parses the data, and then sends it to the Power BI streaming datasets you created.

Before you create the logic app, you need the device ID of the Wio Terminal you connected to your IoT Central application.

**Step 1.** Note the Device ID.

- Sign in to your [IoT Central application](https://apps.azureiotcentral.com/myapps). Select **Devices** in the left pane. Then select **Seeed Wio Terminal**.

Make a note of the **Device ID**. In the following screenshot, the ID is **k1100**:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/28.png" /></div>

**Step 2.** Create the logic app

- Sign in to the [Azure portal](https://portal.azure.com/) and select **Create a resource** at the top left of the screen.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/3.png" /></div>

- In Search the Marketplace, enter **Logic App**, and then press Enter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/29.png" /></div>

On the Logic App create page:

- Select the same **Subscription** you used to create your IoT Central application.
- Select the **retail-store-analysis** resource group.
- Enter a unique name for your logic app such as **yourname-retail-store-analysis**.
- Select the same location you used for your IoT Central application.
- Select the Type as **Consumption**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/30.png" /></div>

Select Create. You may have to wait a few minutes for the system to provision the resources.

**Step 2.** Configure Logic Apps Designer

In the Azure portal, navigate to your new logic app. On the Logic Apps Designer page, scroll down and select **Blank Logic App**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/31.png" /></div>

- In **Search connectors and triggers**, enter **Event Hubs**.
- In **Triggers**, select **When events are available in Event Hub**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/32.png" /></div>

- Enter **Store telemetry** as the **Connection name**.
- Select **Access key** as the **Authentication Type**.
- Paste in the event hub connection string for the **RootManageSharedAccessKey** policy you made a note of previously, and select **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/33.png" /></div>

In the When events are available in Event Hub action:

- In **Event Hub name**, select **store-telemetry**.
- In **Content type**, select **application/json**.
- Set the Interval to three and the Frequency to seconds
- Select Save to save your logic app.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/34.png" /></div>

To add the logic to your logic app design, select **Code view**:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/35.png" /></div>

Replace `"actions: {},"` with the following JSON. Then replace the placeholder `[YOUR RUUVITAG DEVICE ID]` with the ID of your Wio Terminal.

```JSON
"actions": {
            "Initialize_Device_ID_variable": {
                "inputs": {
                    "variables": [
                        {
                            "name": "DeviceID",
                            "type": "String"
                        }
                    ]
                },
                "runAfter": {},
                "type": "InitializeVariable"
            },
            "Parse_Telemetry": {
                "inputs": {
                    "content": "@triggerBody()?['ContentData']",
                    "schema": {
                        "properties": {
                            "deviceId": {
                                "type": "string"
                            },
                            "enqueuedTime": {
                                "type": "string"
                            },
                            "telemetry": {
                                "properties": {
                                    "accelX": {
                                        "type": "number"
                                    },
                                    "accelY": {
                                        "type": "number"
                                    },
                                    "accelZ": {
                                        "type": "number"
                                    }
                                },
                                "type": "object"
                            },
                            "templateId": {
                                "type": "string"
                            }
                        },
                        "type": "object"
                    }
                },
                "runAfter": {
                    "Initialize_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "ParseJson"
            },
            "Set_Device_ID_variable": {
                "inputs": {
                    "name": "DeviceID",
                    "value": "@body('Parse_Telemetry')?['deviceId']"
                },
                "runAfter": {
                    "Parse_Telemetry": [
                        "Succeeded"
                    ]
                },
                "type": "SetVariable"
            },
            "Switch_by_DeviceID": {
                "cases": {
                    "Occupancy": {
                        "actions": {},
                        "case": "Occupancy"
                    },
                    "Sensor_environment": {
                        "actions": {},
                        "case": "k1100"
                    }
                },
                "default": {
                    "actions": {}
                },
                "expression": "@variables('DeviceID')",
                "runAfter": {
                    "Set_Device_ID_variable": [
                        "Succeeded"
                    ]
                },
                "type": "Switch"
            }
        },
```

Select **Save** and then select **Designer** to see the visual version of the logic you added.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/36.png" /></div>

Select **Switch by DeviceID** to expand the action. Then select **Sensor environment**, and select **Add an action**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/37.png" /></div>

In **Search connectors and actions**, enter **Add rows to a dataset**. Select the **Power BI Add rows to a dataset** action.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/38.png" /></div>

Select **Sign in** and follow the prompts to sign in to your Power BI account. After the sign-in process is complete, in the Add rows to a dataset action:

- Select **In-store analytics - checkout** as the **Workspace**.
- Select **Sensor** as the **Dataset**.
- Select **RealTimeData** as the **Table**.
- Select **Add new parameter** and then select the **Timestamp**, **Light**, **Acceleration X**, **Acceleration Y**, **Acceleration Z** and **Sound** fields.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/40.png" /></div>

- Select the **Timestamp** field, and then select **enqueuedTime** from the Dynamic content list.
- Select the **Light** field, and then select **See more** next to Parse Telemetry. Then select Light.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/41.png" /></div>

- Select the **Acceleration X** field, and then select **See more** next to Parse Telemetry. Then select accelX.
- Select the **Acceleration Y** field, and then select **See more** next to Parse Telemetry. Then select accelY.
- Select the **Acceleration Z** field, and then select **See more** next to Parse Telemetry. Then select accelZ.
- Select the **Sound** field, and then select **See more** next to Parse Telemetry. Then select Sound.

Select **Save** to save your changes. The Sensor environment action looks like the following screenshot.

Select the Zone 2 environment action, and select Add an action.

In Search connectors and actions, enter Add rows to a dataset.

The logic app runs automatically. To see the status of each run, navigate to the Overview page for the logic app in the Azure portal and select Runs history. Select Refresh to update the list of runs.

## Create a Power BI dashboard

Now you have telemetry flowing from your IoT Central application through your event hub. Then your logic app parses the event hub messages and adds them to a Power BI streaming dataset. Now, you can create a Power BI dashboard to visualize the telemetry:

**Step 1.** Sign in to your [Power BI account](https://app.powerbi.com/).

**Step 2.** Select **Workspaces** > **In-store analytics - checkout**.

**Step 3.** Select **+ New** > **Dashboard**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

Enter **Store analytics** as the dashboard name, and select **Create**.

### Add line charts

Add a line chart tiles to show the Tri-axis from the Wio Terminal buit-in sensors. Use the information in the following table to create the tiles. To add each tile, start by selecting **Edit** > **Add a tile**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

Select **Custom Streaming Data**, and then select **Next**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

Configure the horizontal coordinate to display the timestamp and the vertical coordinate to display the data values on the X, Y and Z axes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/53.png" /></div>

When the data stream starts to transfer, you will be able to see the dashboard as a line graph.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/55.png" /></div>

<!--### Add cards to show environmental data

### Add tiles to show checkout occupancy data-->

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
