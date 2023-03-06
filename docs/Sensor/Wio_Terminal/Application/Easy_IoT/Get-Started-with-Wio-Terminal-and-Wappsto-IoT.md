---
description: Get Started with Wio Terminal and Wappsto IoT
title: Get Started with Wio Terminal and Wappsto IoT
keywords:
- Wio_terminal Easy_IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get-Started-with-Wio-Terminal-and-Wappsto-IoT
last_update:
  date: 1/30/2023
  author: jianjing Huang
---

# Get Started with Wio Terminal and Wappsto IoT

## Overview

The **Wio Terminal** is a SAMD51-based microcontroller with Wireless Connectivity powered by **Realtek RTL8720DN** that’s compatible with Arduino and MicroPython. Currently, wireless connectivity is only supported by Arduino. It runs at **120MHz** (Boost up to 200MHz), **4MB** External Flash and **192KB** RAM. It supports both Bluetooth and Wi-Fi providing backbone for IoT projects. The Wio Terminal itself is equipped with **a 2.4” LCD Screen, onboard IMU(LIS3DHTR), Microphone, Buzzer, microSD card slot, Light sensor, and Infrared Emitter(IR 940nm).** On top of that, it also has two multifunctional Grove ports for [Grove Ecosystem](https://www.seeedstudio.com/grove.html) and 40 Raspberry pi compatible pin GPIO for more add-ons.

Wappsto is a powerful, intelligent application which easily can be set up to automatically draw data from various sources. It has an integrated standard dashboard for monitoring and analysing your data.

Wappsto also offers tools that allow developers to create IoT applications as web apps with integrations and automations. Integrated in Wappsto there is also a marketplace, where developers and users can share their Apps.

Wappsto by Seluxit is a powerful IoT platform featuring easily customizable Dashboards that makes visualizing live or historical data a breeze and many other features including cloud automations.

The Wappsto APP for IOS and Android, let’s you view and control devices on the fly as well.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" alt="pir" width={500} height="auto" /></p>

## Wappsto Features

You can operate the following function while you connecting the Wappsto. For further information, you can do more with your data [here](https://www.seluxit.com/iot-products/iot-solution-builder/wapps).

### Dashboard features

#### Dashboard types

1. Blank dashboard - Static clean canvas to mix and match widgets
2. Fleet management - Dynamic clean canvas to mix and match widgets - easily switch between devices to get an overview of possible outliers.
3. Geolocation dashboard - Map overview of devices, possible to filter based on device alarms.<br />
![](https://media-exp1.licdn.com/dms/image/C4E22AQEUQmsBHpzjaw/feedshare-shrink_2048_1536/0/1646730023138?e=1651708800&v=beta&t=cTkLbXeXVVgWV9a-Is62CDUlb3s4t-GqqSpBsusyy8A)
<!-- 图片链接有问题 -->

- Geolocation using filtered lists filter:
![](https://media-exp1.licdn.com/dms/image/C4E22AQHzGNNMQWDfLw/feedshare-shrink_2048_1536/0/1646902827428?e=1651708800&v=beta&t=hChKemrGzqtM53xwikfvONJu_2DyrCSMX17jMKXuybc)
<!-- 图片链接有问题 -->

#### Blank and fleet management dashboard widgets

1. Filtered list - configure device value limits that trigger alarms and visual cues in the geolocation dashboard.
 ![](https://media-exp1.licdn.com/dms/image/C4E22AQGPxAJgcCVbKw/feedshare-shrink_2048_1536/0/1646809215991?e=1651708800&v=beta&t=-XvhET6EEvVJetMns_UcJ9AY8hBIcVw_R8XEi0vUZhI)
<!-- 图片链接有问题 -->

2. Historical location widget - Draws on a map based on device locations within a configured timeframe. (maximum 1 mark per minute and minimum 50 meters between marks)
![](https://media-exp1.licdn.com/dms/image/C4E22AQE8TWlSnbBS0Q/feedshare-shrink_2048_1536/0/1647252033404?e=2147483647&v=beta&t=YWuyjUFveAiTut4AwMgXFRZL5BiaqJYKV8MeYcwq31E)

3. Chart widget - Choose and configure multiple data sources, timeframe, chart style and aggregation method. It can also be toggled to show live data.
![](https://media-exp1.licdn.com/dms/image/C4E22AQERLllOaWHaeA/feedshare-shrink_1280/0/1647331243930?e=1651708800&v=beta&t=wxkgoFKpxV8A2j-KsXqKRm6t6gnAEorUuR4UaSsu1pk)
<!-- 图片链接有问题 -->

4. Live data example:
![](https://media-exp1.licdn.com/dms/image/C4E22AQHexShrPAZxHw/feedshare-shrink_1280/0/1647856842400?e=1651708800&v=beta&t=CziKwYL3y3drg7PyCN-NcC3t6lRjqTxoMoguKy9h_yE)
<!-- 图片链接有问题 -->

5. Value list widget - Show live data in a box together with control / desired state values.
![](https://media-exp1.licdn.com/dms/image/C4E22AQHLKi07FF-vjg/feedshare-shrink_1280/0/1647414020945?e=2147483647&v=beta&t=5PjZ0-bA5knscCdfUufKY7b98tXlXbWtpIfFjsZ_ykg)

6. Compass widget - Show the angle of a single device with live data.
![](https://media-exp1.licdn.com/dms/image/C4E22AQH0uYCQd8y7XQ/feedshare-shrink_1280/0/1647522120991?e=2147483647&v=beta&t=9Biv-IoQukTwfiyEd1siexYGwS5EX5uCaVl_dROZYsI)

7. Liquid chart widget - Show the relative level of a single device with live data.
![](https://media-exp1.licdn.com/dms/image/C4E22AQEPNSFj-MKSVw/feedshare-shrink_2048_1536/0/1647609902322?e=2147483647&v=beta&t=suXEme0-tfR6PQQIAzU7xw8hD7CBTGLZ8aAOxogm7t0)

8. Gauge widget - Show live data from a single value in a gauge, with configurable color scheme and limits.
![](https://media-exp1.licdn.com/dms/image/C4E22AQGwQ7COEUwKwA/feedshare-shrink_1280/0/1647939626856?e=2147483647&v=beta&t=NfZBE7e7R-kUNNRUpEiEyRYVO-xXBwrI13NjtvqZHjU)

9. Current location widget - Show the current location of one or multiple devices alongside other widgets.
![](https://media-exp1.licdn.com/dms/image/C4D22AQFCTjZrX8RU4g/feedshare-shrink_2048_1536/0/1648046103353?e=1651708800&v=beta&t=CFn2wQhscrECrcNU65PcI7HpuK7NhHtZKVMXQ9VzoWA)
<!-- 图片链接有问题 -->

10. Log list widget - Show logs of one or more devices or values, alongside other widgets.
![](https://media-exp1.licdn.com/dms/image/C4E22AQEFmHPALVfFhw/feedshare-shrink_2048_1536/0/1648126885539?e=2147483647&v=beta&t=eKmZ70IIQZAq3DR96JXB_nsmSsvBqe8gKIJfG0XZXZs)

### Cloud automation and web APPS

1. Twitter integration
2. Hue integration
3. Shelly integration
4. Weather forecast integration (yr.no)
   - Blocks - Cloud automations
   - Blockly NoCode programming
   - Blockly javascript programming
   - Set up automations and interactions between all devices and services you have connected on Wappsto
   - Twitter and Wappsto:bit cross-automation example: <https://bit.wappsto.com/project/wappsto-blocks/>

### Sometimes overlooked features of Wappsto

1. Distributed cloud service with multiple backups
2. Device sharing
3. End to end encryption (transport encryption)
4. Device security (unique device and network keys)
5. Data forwarding
6. Data extraction (CSV)
7. Smart login across platforms (email,google,facebook,apple login)
8. Multi platform: Website + Smartphone APPs.

## Getting Started

### Hardware Requirement

- Wio Terminal x 1
- Computer x 1
- USB Type-C Cable x 1

### Software Requirement

Please check this [link](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#software).

## Update Wio Terminal WiFi Firmware

Please check this [link](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware).

## Wappsto Prerequisites

### An account on Wappsto

It is also assumed you have created a account on [Wappsto](https://wappsto.com/), if not please create one first.

### Arduino IDE installed on your PC

If you do not have this, see <https://www.arduino.cc/en/Guide>

#### Install ArduinoJson library

From the library manager you need to install ArduinoJson library - see <https://arduinojson.org/v6/doc/installation/> for more details.

#### Install this wappsto library

To install this library in Arduino Ide, download this project as a zip-file, click "Code" and choose "Download ZIP".
Then choose "Sketch"->"Include Library"->"Add .Zip Library..." See <https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries> for details.

### Generate certificates and id for a new device

For your physical device to identify itself towards Wappsto it needs a network id, the server CA certificate, and the client certificate/key - all these has to be generated on Wappsto.com and placed in (if matching the examples) called wappsto_config.h.

#### wappsto_config.h

As a help to generate this you can use the **Python Script** included in this repository in the folder generate_config_header.
For a first time run, you may need to install the required libraries

```
cd <path to downloaded arduino_wappstoiot>
cd generate_config_header
pip install -r requirements.txt
```

To generate a header file:

1. Go to the `generate_config_header` folder:

```
cd generate_config_header
```

2. Use the command:

```
python main.py --type arduino
```

3. Then you will be asked to login using email and password for your user on Wappsto.

4. Copy the newly generated file `wappsto_config.h` to your Arduino sketch folder. Note if generated correctly it should have a valid UUID (a string similar, but different, to this `"d7fafe76-b020-4594-8f2a-aae11c6b6589"` defined for the `const char* network_uuid =` line.

Note, if you have both pyhton2 and python3 installed you may need to use

```
pip3 install -r requirements.txt
python3 main.py --type arduino
```

If you get the error like belowing:

```
ImportError: cannot import name 'soft_unicode' from 'markupsafe' 
```

Which it is due to a change in dependency for another library, it can be fixed using this command.

```
pip install -U MarkupSafe==0.20
```

#### Claiming and ownership - Not allowed to access values

If you get a "not allowed to access" values on the device you have created, it is because you either have not claimed it, or the ownership have been reset.

Since you would be the manfactorer you will still see the device on your list of networks, you can see it is online, but you will not be able to see values or control the device.

To claim a device, go to the "IoT Devices" tab on <https://wappsto.com/devices> click the "+ Add an IoT device" button in the top right corner, and enter the network UUID int the box.

If you click the delete button for a network, it will remove the ownership of the device, so it can be claimed by another user. Once a device have been claimed it can not be claimed by another.

## This Wappsto library

### Required structure

The network id is generated by [Wappsto](https://wappsto.com/) and is linked to the certificates.

```
├── "Network Name"
│   └── "Device 1 name"
│   |   └── "Value 1 name"
│   |   └── "Value 2 name"
|   |   ...
│   └── "Device 2 name"
│       └── "Value 1 name"
│       └── "Value 2 name"
...

```

Note that that "name" for device and value object have extra functionality, and rules.

- A network must not have have devices with identical names.
- A single device must not have values with identical names. (as the example above it is allowed to use the same name under a different device.)

The library will ask Wappsto if an device/value exists with that name before creating it, so it will link to the right value. If nothing have this name a new will be created. If a parent have multiple children with the same name the library will choose the first available.

If you change a name a new one will be created, but the old will not be delete. This you will have to do yourself, eg. using <https://wappsto.com/devices>

### Initialize Wappsto

Wappsto needs a reference to WiFiClientSecure when created, example.

```c
WiFiClientSecure client;
Wappsto wappsto(&client);
```

#### Set the config and connect

```c
#include "wappsto_config.h"
...
wappsto.config(network_uuid, ca, client_crt, client_key);
if(wappsto.connect()) {
    // Connected
} else {
    // Failed to connect
}
```

### Optional config parameters, log and ping

Besides the mandatory commands you can also set ping interval and log level:

```c
wappsto.config(network_uuid, ca, client_crt, client_key, ping interval in minutes, log level);
```

- The ping interval will send a short package from the device to wappsto to keep the connection alive. If your device rarely sends data, it might be a good idea to add this to avoid timeout on the connection.
- The log level can print information from the wappsto library to the serial debug port - the following levels are possible:

```
   VERBOSE
   INFO
   WARNING
   ERROR
   NO_LOGS <- Default
```

### Create your network

```c
myNetwork = wappsto.createNetwork("Network Name");
```

### Create a device

```c
DeviceDescription_t myDeviceDescription = {
    .name = "Device name",
    .product = "Product name",
    .manufacturer = "Company name",
    .description = "Description of the product",
    .version = "1.0",
    .serial = "00001",
    .protocol = "Json-RPC",
    .communication = "WiFi",
};

myDevice = myNetwork->createDevice("Device Name", &myDeviceDescription);
```

#### Values

Values is probably what you are mostly interessted in, and can be one of these:

- Number - integers or decimals, these will be logged and shown as a graph.
- String - a human readable string (UTF-8)
- Blob - data, for example a base64 encoded image, hex values, etc.
- Xml - a complete xml document

#### Read and write data

Each value can have one or two data points:

- Report: Data read on the device and reported to the server [READ]
- Control: Data sent from the server to the device to control it [WRITE]

Your value may be one of them or both.

### Value parameters

To explain the parameters, we will use an example for a temperature value placed in a living room.

- name: An name for the value, here "Living room"
- type: Is a help for the UI to find values of the right type, here "temperature"
- The PERMISSION_e parameter tells the library if it should create report and/or control for this value.
  - READ -> report state
  - WRITE -> control state
  - READ_WRITE -> report and control state
- min: (Number only) lowest number (to be used by UI)
- max: For number highest numer, for string/blob maximum length
- step: (Number only) Step size for a number, for example 1 for integers, and 0.1 for decimals
- unit: (Numbers only) is there a unit for this number, in the temperature example it is °C

The first time a value is created a number will have the value NA, and the string/blob will be empty, for both control and report.

If the value exists, the data of the value will not change. If you want to value to update when the device reboots, you have to call report/control.

#### Create a number value

```c
ValueNumber_t myNumberValueParameters = {   .name = "Living room",
                                            .type = "temperature", // value type
                                            .permission = READ_WRITE,
                                            .min = -20,
                                            .max = 100,
                                            .step = 0.1,
                                            .unit = "°C",
                                            .si_conversion = ""};

myNumberValue = myDevice->createValueNumber(&myNumberValueParameters);
```

#### Create a string value

```c
ValueString_t myStringValueParameters = { .name = "Value String Name",
                                          .type = "value type",
                                          .permission = READ_WRITE,
                                          .max = 200,
                                          .encoding = ""};

myStringValue = myDevice->createValueString("Value String Name", "value type", READ_WRITE, &myStringValueParameters);
```

#### Create a blob value

```c
ValueBlob_t myBlobValueParameters =  { .name = "Value Blob Name",
                                       .type = "value type",
                                       .permission = READ_WRITE,
                                       .max = 200,
                                       .encoding = ""};

myBlobValue = myDevice->createValueBlob(&myBlobValueParameters);
```

#### Create a xml value

```c
ValueXml_t myXmlValueParameters =  { .name = "Value Xml Name",
                                     .type = "value type",
                                     .permission = READ_WRITE,
                                     .xsd = "test",
                                     .namespace = "test"};

myXmlValue = myDevice->createValueXml(&myXmlValueParameters);
```

#### Send a value report

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.report("987");    // You can send numbers as a string you format
myNumberValue.report(myInt);    // Report the number as an int
myNumberValue.report(myDouble); // Report the number as a double


myStringValue.report("Example string");

myBlobValue.report("A5FF2C");

```

#### Set a control value

Normally the control value will only be updated from wappsto.com, but you may need to set a current value when booting or in other situations.
Setting this is similar to report:

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.control("987");    // You can send numbers as a string you format
myNumberValue.control(myInt);    // Set control as an int
myNumberValue.control(myDouble); // Set control as a double


myStringValue.control("Example string");

myBlobValue.control("A5FF2C");

```

## Add wappsto in your loop function

For Wappsto to be able to receive data (control, refresh, and pings), it has to be included in your Arduino loop function - if not you will never receive any callbacks with data, and the connection may experience a timeout.

It is also recommended not to block the loop for extended periods of time.

```
wappsto.dataAvailable();
```

### Receive a value control request

You can choose if you want the control data translated to a double, or if you want the string directly.

```c
// Receive control with a number (double)
void controlNumberCallback(Value *value, double data, String timestamp)
{
    // handle control request
}

// Receive control with a string
void controlStringCallback(Value *value, String data, String timestamp)
{
    // handle control request
}

...
myNumberValue->onControl(&controlNumberCallback);
myStringValue->onControl(&controlStringCallback);
```

### Receive a value refresh request (report value only)

```c
void refreshNumberCallback(Value *value)
{
    // handle refresh request
}
...
myNumberValue->onRefresh(&refreshNumberCallback);

```

### Getting last data and timestamp from value

You can access the last received/send data and timestamp by using these functions.
For instance after a new boot, the last controlled state set in Wappsto.com will be retrieved, so your program and start with that state.

_Note_ retriveing numberData from an empty value will return a 0;

```c
String ctrlData = myNumberValue.getControlData();

double ctrlDataNumber = myNumberValue.getControlNumberData();

String ctrlTime = myNumberValue.getControlTimestamp();

String reportData = myNumberValue.getReportData();

double reportDataNumber = myNumberValue.getReportNumberData();

String reportTime = myNumberValue.getReportTimestamp();
```

For futher examples see the code in the example folder, or see 'File -> Examples -> Wappsto' in Arduino IDE.

### Temperature Detecting Demo

Here we are going use prodived temperature example and display on the Wappsto as you see below:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto2.png" alt="pir" width={500} height="auto" /></p>

- **Step 1**. After uploading the code, you can see it has shown connecting successfully at "IoT Devices" on the Wappsto website.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto3.png" alt="pir" width={800} height="auto" /></p>

- **Step 2**. Click the "Dashboards" column at the left and select "Add widget"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto4.png" alt="pir" width={800} height="auto" /></p>

- **Step 3**. These provided blocks can display data in serval ways, here we chose "Chart"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto5.png" alt="pir" width={800} height="auto" /></p>

- **Step 4**. Select "Temperature Example" as we upload before and click "Next"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto6.png" alt="pir" width={800} height="auto" /></p>

- **Step 5**. Configure the displayed data. Here we set the data displayed in "Line"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto7.png" alt="pir" width={800} height="auto" /></p>

- **Step 6**. After all sets up, we are able to see the data output at the Dashboards

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto8a.jpeg" alt="pir" width={800} height="auto" /></p>
