---
title: Connect Wio Terminal to Microsoft Azure IoT Central
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/
slug: /Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Connect Wio Terminal to Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>


## Introduction 
In this tutorial, we will walk you through the process of connecting the Wio Terminal to Microsoft Azure IoT Central and send telemetry data from the onboard sensors/ hardware on the Wio Terminal such as the 3-axis accelerometer, light sensor, 3 buttons to Microsoft Azure IoT Central. Then you will be able to visualize the sensor data on interactive dashboards. Also you will be able to use Azure IoT Central to control hardware such as beeping the onboard buzzer on the Wio Terminal. Microsoft Azure IoT Central supports HTTP, MQTT and AMQP protocols for communication, but, however we will be using the MQTT protocol in this tutorial.

### What is Microsoft Azure?

[Microsoft Azure](https://azure.microsoft.com) is Microsoft's public cloud computing platform. You can use Microsoft Azure to build, test, deploy, and manage applications and services through Microsoft-managed data centers. 

Also, it provides a range of cloud services, including compute, analytics, storage and networking. Microsoft Azure provides software as a service (SaaS), platform as a service (PaaS), Infrastructure as a service (IaaS) and serverless. Finally, it supports many different programming languages, tools and frameworks.

### What is Microsoft Azure IoT?

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) is a collection of Microsoft-managed cloud services that connect, monitor, and control billions of IoT assets. It includes security and operating systems for devices and equipment, along with data and analytics that help businesses to build, deploy and manage IoT applications.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>


### What is Microsoft Azure IoT Central?

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) is a fully managed global IoT SaaS (software as a service) solution that makes it easy to connect, monitor and manage your IoT assets at scale. It is highly secure, scales with your business as it grows, ensures that your investments are repeatable and integrates with your existing business apps. It also bridges the gap between your business applications and IoT data. Finally it offers centralized management to reconfigure and update your devices.

### What is IoT Plug and Play?

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) enables solutions builders to integrate smart devices with their solutions without any manual configuration. At the core of IoT Plug and Play, is a device model that a device uses to advertise its capabilities to an IoT Plug and Play-enabled application. It contains:

- Properties: represents the read-only or writable state of a device or other entity 
- Telemetry: data sent by a device
- Commands: describes a function or operation that can be done on a device

IoT Plug and Play certified devices eliminate the hassle of configuring devices in Azure IoT Central, such as creating templates and adding features and interfaces.

### IoT Plug and Play Certified Devices

IoT Plug and Play Certified Devices are devices listed in the [Azure Certified Device Catalog](https://devicecatalog.azure.com) with the IoT Plug and Play badge.

[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) is an IoT Plug and Play Certified Device.

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>


To be IoT Plug and Play Certified, you will need to clear a few criteria, one of which is to publish a DTDL (Digital Twins Definition Language) model that defines the capabilities of the device to [Azure/ iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) on GitHub. 

This allows cloud services that use IoT Plug and Play Certified Devices to learn about device capabilities from this repository.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>


## Connecting Wio Terminal to Microsoft Azure IoT Central via MQTT

As explained before, we will be using MQTT for the communication between the Wio Terminal and Microsoft Azure IoT Central. However, you may use the HTTP bridge as well, if that is your requirement.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>


### Microsoft Azure IoT Central Set Up 

First, you need to visit Microsoft Azure IoT Central, log in to your Microsoft account and create a new application for your project.

- **STEP 1:** Visit [here](https://apps.azureiotcentral.com) to create a new application

- **STEP 2:** Click **Build** from the navigation menu on the left, and click **Custom apps**

**Note:** Log in to your Microsoft account if prompted

- **STEP 3:** Fill in **Application name** and choose **Free** under the **Pricing plan**. 

**Note:** Application URL will be created automatically when you fill in application name

- **STEP 4:** Click **Create** to create the new application

Now you have successfully set up Azure IoT Central!

### Set Up Wio Terminal 

#### Update RTL8720 Firmware

We need to update the firmware for the Realtek RTL8720 wireless core on the Wio Terminal. Follow [this wiki](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview) to update the RTL8720 firmware.

**Note:** Make sure to update the [firmware](https://github.com/SeeedJP/wioterminal-aziot-example/releases) according to the specified version under the description of the release. 

#### Download and Upload Demo Code to Wio Terminal

We will first use a demo code that sends telemetry data from the onboard sensors on the Wio Terminal to Microsoft Azure IoT Central.

##### Download the Demo Code

- **STEP 1:** Navigate to [this repo](https://github.com/SeeedJP/wioterminal-aziot-example) on GitHub
- **STEP 2:** Click on **Releases**
- **STEP 3:** Under the **Latest release**, click on **wioterminal-aziot-example.uf2** to download the .uf2 file

##### Upload the Demo Code to Wio Terminal

- **STEP 1:** Connect the Wio Terminal to PC and turn in ON
- **STEP 2:** Enter **Bootloader Mode** by sliding down the power switch further away from "ON" position, release, slide again and release

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>


**Note:** Once Wio Terminal is in the Bootloader mode, the blue LED will start to breathe in a way that is different from blinking

- **STEP 3:** Open File Explorer on your PC and you will see a new external drive, named **Arduino**

- **STEP 4:** Drag the previously downloaded **.uf2 file** into this **Arduino drive**. 

- **STEP 5:** Turn OFF the Wio Terminal

Now we have successfully uploaded the demo code into the Wio Terminal

##### Wi-Fi and Azure IoT Configuration

Next, let's move on to configuring Wi-Fi and Azure IoT connection

- **STEP 1:** Hold down on the 3 buttons and turn ON the Wio Terminal to enter the configuration mode

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>


- **STEP 2:** Open a serial console application such as [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **STEP 3:** Type the correct serial **COM Port**, set **9600** as the baud rate and enter the Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>


- **STEP 4:** Press **ENTER** on the keyboard and type **help** in the serial terminal to view the configuration usage

- **STEP 5:** Set Wi-Fi SSID by typing **set_wifissid** `your_WI-Fi_network_name`

**Note:** Make sure to add a single space between the fields

- **STEP 6:** Set Wi-Fi Password by typing **set_wifipwd** `your_WI-Fi_network_password` 

**Note:** Make sure to add a single space between the fields

- **STEP 7:** Set connection information of Azure IoT by visiting the previously created application on [Azure IoT Central](https://apps.azureiotcentral.com)

- **STEP 8:** Navigate to `Administration > Device Connection` from the left navigation menu, and **copy the ID scope** into **notepad**

- **STEP 9:** Click on **SAS-IoT-Devices** and copy the **primary key** into **notepad**

- **STEP 10:** Visit previously opened serial terminal and type **set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name` 

**Note:** Make sure to add a single space between each field and you can decide on a `device name` of your choice.

- **STEP 11:** Reset the Wio Terminal by sliding down the switch further away from the ON position and releasing 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>


Now you will be able to see the Wio Terminal LCD displaying that it's connecting to Wi-Fi and then Azure IoT Hub. After that it will show the telemetry data being sent to Azure IoT Central.

### Display Telemetry Data on Microsoft Azure IoT Central 

We will move on to displaying the incoming telemetry data from the 3-axis accelerometer, light sensor and 3 buttons of the Wio Terminal on Azure IoT Central Dashboard.

- **STEP 1:** Open Azure IoT Central Dashboard that you visited before

- **STEP 2:** Click on **Devices** from the left navigation menu

- **STEP 3:** You will see **Seeed Wio Terminal** appear under Devices. Click on it

- **STEP 4:** Click on the entry with the **device name** that you configured before. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/wio_demo.png" alt="pir" width={800} height="auto" /></p>


Now you will be able to visualize the data from the onboard 3-axis accelerometer on an interactive dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/accel_demo.png" alt="pir" width={800} height="auto" /></p>


This is the default view and we need to make some changes to display the other telemetry data as well.

- **STEP 5:** Click on **Device templates** from the left navigation menu and click **Seeed Wio Terminal** to configure the template

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/device_template.png" alt="pir" width={400} height="auto" /></p>


- **STEP 6:** Click on **Overview** on the left navigation menu

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview.png" alt="pir" width={400} height="auto" /></p>


- **STEP 7:** Collapse **select a telemetry** drop-down menu and select the telemetry that you want to visualize. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview_edit.png" alt="pir" width={800} height="auto" /></p>


- **STEP 8:** Click **Add tile** and you will see the tile added into the Azure IoT Central Dashboard

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_add.png" alt="pir" width={300} height="auto" /></p>


**Note:** You can resize or change the visualization of the tiles according to your preference

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/resize.png" alt="pir" width={400} height="auto" /></p>


- **STEP 9:** Repeat the same for the 3 buttons (left, center, right)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/draft_visual.png" alt="pir" width={850} height="auto" /></p>


**Note:** Here we have configured the following:

| Tile Name | Tile Size | Tile Visualization |
|-|-|-|
| Light Intensity | 2 x 2 | Line chart |
| Left button | 1 x 1 | KPI |
| Right button | 1 x 1 | KPI |
| Center button | 2 x 2 | KPI |

- **STEP 10:** Click **Save** and **Publish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/save.png" alt="pir" width={600} height="auto" /></p>


- **STEP 11:** Go back to Azure IoT Central dashboard and you will be able to visualize all the data coming in from the Wio Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/final.png" alt="pir" width={750} height="auto" /></p>

- **STEP 12:** You can also click on the **Raw data** tab to view all the telemetry data in real-time.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/raw_data.png" alt="pir" width={700} height="auto" /></p>


#### Add a Rule to Send an Email

Rules in IoT Central serve as a customizable response tool that trigger on actively monitored events from connected devices.
For example, in this demo, we can set IoT Central to send an email when the light intensity level is below 50.

- **STEP 1:** Click on **Rules** from the left navigation menu in Azure IoT Central.

- **STEP 2:** Click on **+New** or **Create a rule**

- **STEP 3:** Enter a name for the rule 

- **STEP 4:** Under **Device template**, select **Seeed Wio Terminal**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>

- **STEP 5:** Under **Conditions**, turn on **time aggregation** and select a **time window** of your choosing. Here we will set it as **5 minutes**

**Note:** Every **xx** minutes, the rule evaluates once on the last **xx** minutes of data

- **STEP 6:** Under **Telemetry**, select the telemetry of your chossing. Here we will set it as **Light intensity**

- **STEP 7:** Under **Aggregation**, select **Average**. This will take the average value during the set **time window** before

- **STEP 8:** Under **Operator**, select a condition of your choosing. Here we will use **is less than** condition

- **STEP 9:** Under **Value**, type a value. Here we will type **50**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>


- **STEP 10:** Under **Actions**, click on **Email**

- **STEP 11:** Type a **Display name**, **To address** and **Note** for the email 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>


**Note:** Please note that the **email address** here should be added to this **Azure IoT Central Application** and also have signed-in at lease once.

- Navigate to `Administration > Users` ,click **Assign user**, fill in the **Email**, assign a **Role** and click **Save**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>


- **STEP 12:** Click on **Done**

- **STEP 13:** Finally, click **Save**

Now we have successfully created a rule to send an email

### Control Hardware from Microsoft Azure IoT Central 

You can not only view the telemetry data on Azure IoT Central, but also use it to control hardware as well. In this demo, we will be able to control the built-in buzzer on the Wio Terminal and specify a time duration in which the buzzer will beep

- **STEP 1:** Click on the **Command** tab

- **STEP 2:** Enter a **value** inside the column under **Duration**

**Note:** values are in milliseconds unit. ex: 1000 = 1000ms = 1s

- **STEP 3:** When you click **Run**, you will be able to hear a beeping sound from the buzzer for the time duration specified above

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>


## How to Add Other Sensors?

You can add any sensor to the Wio Terminal and send telemetry data from the connected sensor to Azure IoT Central. We will connect a [Grove - Temperature & Humidity Sensor (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) to the Wio Terminal and send temperature and humidity data to Azure IoT Central to visualize on dashboards!

### Microsoft Visual Studio Code Set Up

#### Download, Install and Configure Visual Studio Code

If we want to add more sensors to the Wio Terminal in order to send telemetry data to Azure IoT Central, we cannot easily use the .uf2 file as we did before. Because the codes are already compiled inside that .uf2 file. So, if we want to add more codes to the demo, we need to use an IDE called Microsoft Visual Studio Code, add the necessary codes and finally upload them to the Wio Terminal. 

So now, let's move on to installing Microsoft Visual Studio Code on the computer

- **STEP 1:** Visit code.visualstudio.com and click **Download**

**Note:** Choose the installer according to your operating system

- **STEP 2:** Go through the installation wizard and complete the installation

- **STEP 3:** Open Visual Studio Code

- **STEP 4:** Click on **Extensions** from the left navigation menu and type **platformIO** in the search box

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>


- **STEP 5:** Click **install** 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>


#### Code for the Demo on Visual Studio Code

- **STEP 1:** Visit [this link](https://github.com/SeeedJP/wioterminal-aziot-example/releases) to find the available releases inside the [SeeedJP/wioterminal-aziot-example repo](https://github.com/SeeedJP/wioterminal-aziot-example)

- **STEP 2:** Navigate to the **Latest release** and under **Assets**, click on **Source code (zip)**. This will download the source code as a .zip file

- **STEP 3:** Extract the **.zip file** 

- **STEP 4:** Go back to Visual Studio Code and navigate to `File > Open Folder...`

- **STEP 5:** Choose the folder that we extracted before and click **Select Folder**

- **STEP 6:** Navigate to `wioterminal-aziot-example-0.10 > include > config.h` from the left navigation menu

- **STEP 7:** Once **config.h** is open, look for **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** and change it to **"dtmi:local:wioterminal_aziot_example;5"**

**Note:** **dtmi:local:wioterminal_aziot_example;5** is the Model ID 

- **STEP 8:** Navigate to `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json` from the left navigation menu

- **STEP 9:** Once **seeedkk-wioterminal-wioterminal_aziot_example.json** is open, look for **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** and change it to **"dtmi:local:wioterminal_aziot_example;5"** as well

**Note:** **seeedkk-wioterminal-wioterminal_aziot_example.json** is the DTDL model that we have mentioned before

Currently the model is defined for **acceleration, light intensity and button count** data. We will go ahead to add **temperature and humidity** to this DTDL model. 

- **STEP 10:** Add the following codes below **"contents": [**:

```sh
  "contents": [
    {
      "@type": [
        "Telemetry",
        "Temperature"
      ],
      "name": "temp",
      "unit": "degreeCelsius",
      "displayName": {
        "en": "Temperature (C)",
        "ja": "温度"
      },
      "schema": "integer"
    },
    {
      "@type": "Telemetry",
      "name": "humi",
      "displayName": {
        "en": "Humidity (%RH)",
        "ja": "湿度"
      },
      "schema": "integer"
    },
```

**Note:** Here, **name** is what we will use to identify specific telemetry data later in the codes, **unit** is the unit corresponding to the data, **displayName** is the name which displays on Azure IoT Central ("en" for English/ "ja" for Japanese) and **schema** is the data type

- **STEP 11:** Navigate to `wioterminal-aziot-example-0.10 > platformio.ini` from the left navigation menu

- **STEP 12:** Once **platformio.ini** is open, under **lib_deps**, add **https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor**

```sh 
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```
**Note:** This is the library for Grove - Temperature and Humidity Sensor (DHT11)

- **STEP 13:** Navigate to `wioterminal-aziot-example-0.10 > src > main.cpp` from the left navigation menu

- **STEP 14:** Once **main.cpp** is open, add the DHT11 library after the line **#include "CliMode.h"**

```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **STEP 15:** Add the DHT11 definitions and the initializations after the line **LIS3DHTR AccelSensor;**

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 //Define signal pin of DHT sensor 
// #define DHTPIN PIN_WIRE_SCL //Use I2C port as Digital Port */
#define DHTTYPE DHT11 //Define DHT sensor type 
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor
```

**Note:** The DHT11 sensor can be connected to both the Grove Ports on the Wio Terminal. If **Digital Port** is used, pin can be defined as **0** and if **I2C port** is used, pin can be defined as **PIN_WIRE_SCL**. The port diagram will be shown later in this document

- **STEP 16:** Add the following codes under the **SendTelemetry()** function to parse the json file along with the telemetry data

```cpp
static az_result SendTelemetry()
{
    float accelX;
    float accelY;
    float accelZ;
    AccelSensor.getAcceleration(&accelX, &accelY, &accelZ);

    int light;
    light = analogRead(WIO_LIGHT) * 100 / 1023;

    int temp; //assign variable to store temperature
    int humi; //assign variable to store humidity
    temp = dht.readTemperature(); //read temperature
    humi = dht.readHumidity(); //read humidity

    char telemetry_topic[128];
    if (az_result_failed(az_iot_hub_client_telemetry_get_publish_topic(&HubClient, NULL, telemetry_topic, sizeof(telemetry_topic), NULL)))
    {
        Log("Failed az_iot_hub_client_telemetry_get_publish_topic" DLM);
        return AZ_ERROR_NOT_SUPPORTED;
    }

    az_json_writer json_builder;
    char telemetry_payload[200];
    AZ_RETURN_IF_FAILED(az_json_writer_init(&json_builder, AZ_SPAN_FROM_BUFFER(telemetry_payload), NULL));
    AZ_RETURN_IF_FAILED(az_json_writer_append_begin_object(&json_builder));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("temp")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, temp));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("humi")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, humi));
```

- **STEP 17:** Add the following codes after the line **ntp.begin**, in order to start the DHT11 sensor

```cpp
dht.begin(); //start DHT sensor
```

Now we have completed all the codes for this demo. 

- **STEP 18:** Click **PlatformIO icon** from the left navigation menu and click **Build**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>


If you see the following message, you have successfully compiled the code:

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Microsoft Azure IoT Central Set Up

Now we need to create a custom device template so that the data from the Wio Terminal can be visualized on Azure IoT Central Dashboard

#### Creating a New Device Template

- **STEP 1:** Visit Azure IoT Central and click `Device templates` from the left navigation menu

- **STEP 2:** Click **+ New**, click **IoT device** and click **Next:Customize**

- **STEP 3:** Type a name inside **Device template name** box and click **Next:Review**

- **STEP 4:** Click **Create**

#### Importing a Custom Device Model 

- **STEP 1:** Click **Import a model**

- **STEP 2:** Navigate to the **wioterminal-aziot-example-0.10** folder that we used before, find **seeedkk-wioterminal-wioterminal_aziot_example.json** file and click on it

- **STEP 3:** Click **Open**

- **STEP 4:** Click **Views** from the left menu and click **Generate default views**

- **STEP 5:** Click **Generate default dashboard view(s)**

- **STEP 6:** Navigate to **Overview** from the left menu and customize the dashboard according to your preference.

**Note:** We have previously mentioned in this document, how to customize the dashboard

- **STEP 7:** Follow the below configuration

| Tile Name | Tile Size | Tile Visualization |
|-|-|-|
| Light Intensity | 2 x 2 | Line chart |
| Light Intensity | 1 x 1 | Last Known Value |
| Temperature (C), Humidity (%RH) | 2 x 2 | Line chart |
| Temperature (C) | 1 x 1 | Last Known Value |
| Humidity (%RH) | 1 x 1 | Last Known Value |
| Left button | 1 x 1 | KPI |
| Middle button | 1 x 1 | KPI |
| Right button | 1 x 1 | KPI |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>


- **STEP 8:** Click **Save** and **Publish**

### Wio Terminal Set Up

#### Hardware Set Up

- Connect the **Grove - Temperature and Humidity Sensor (DHT11)** to **Grove Digital Port** on the Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>


#### Software Set Up

##### Upload Code to Wio Terminal

Now we need to upload the code to the Wio Terminal to send the telemetry data to Azure IoT Central

- **STEP 1:** Go back to VS Code, click **PlatformIO icon** and click **Upload**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>


##### Wi-Fi and Azure IoT Configuration

Next, let's move on to configuring Wi-Fi and Azure IoT connection just like we did before

- **STEP 1:** Hold down on the 3 buttons and turn ON the Wio Terminal to enter the configuration mode

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>


- **STEP 2:** Open a serial console application such as [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **STEP 3:** Type the correct serial **COM Port**, set **9600** as the baud rate and enter the Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>


- **STEP 4:** Press **ENTER** on the keyboard and type **help** in the serial terminal to view the configuration usage

**Note:** Now we don't need to enter WiFi SSID and password because they are already saved from the previous configuration

- **STEP 5:** Set connection information of Azure IoT by visiting the previously created application on [Azure IoT Central](https://apps.azureiotcentral.com)

- **STEP 6:** Navigate to `Administration > Device Connection` from the left navigation menu, and **copy the ID scope** into **notepad**

- **STEP 7:** Click on **SAS-IoT-Devices** and copy the **primary key** into **notepad**

- **STEP 8:** Visit previously opened serial terminal and type **set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name` 

**Note:** Make sure to add a single space between each field and you can decide on a `device name` of your choice.

- **STEP 9:** Reset the Wio Terminal by sliding down the switch further away from the ON position and releasing 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>


Now you will be able to see the Wio Terminal LCD displaying that it's connecting to Wi-Fi and then Azure IoT Hub. After that, it will show the telemetry data being sent to Azure IoT Central.

### Visualize on Azure IoT Central

Go back to Azure IoT Central and from the left navigation menu, click **Devices**, click on your **Device name**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>


Now you will be able to visualize all the sensor data from the Wio Terminal on Microsoft Azure IoT Central Dashboard!

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>