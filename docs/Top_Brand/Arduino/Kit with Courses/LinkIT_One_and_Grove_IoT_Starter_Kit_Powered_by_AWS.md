---
description: LinkIT One and Grove IoT Starter Kit Powered by AWS
title: LinkIT One and Grove IoT Starter Kit Powered by AWS
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 2/17/2023
  author: jianjing Huang
---

<!-- ---
name: LinkIT One and Grove IoT Starter Kit Powered by AWS
category: Discontinued
bzurl:  https://www.amazon.com/dp/B0168LBYWC
oldwikiname: LinkIT One and Grove IoT Starter Kit Powered by AWS
prodimagename:  
surveyurl: https://www.research.net/r/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS
sku:
--- -->
![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_linkit_cover.JPG)

_Primary reference: [Grove IoT Starter Kits Powered by AWS](/Grove_IoT_Starter_Kits_Powered_by_AWS"Grove IoT Starter Kits Powered by AWS") , [LinkIt ONE](https://wiki.seeedstudio.com/LinkIt_ONE/ "LinkIt ONE"), [MediaTek AWS IoT Guide](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit/hdk_intro/aws_kit/index.gsp)_

**LinkIt ONE** development board is an open source, high-performance development board for wearable and IoT product prototyping. It is based on MT2502 (ARM7EJ-S™ MCU) and integrates GSM, GPRS, Wi-Fi, Bluetooth BR/EDR/BLE, GPS, Audio decoder, and SD card connector on a single development board. The kit enables you to build up cloud computing connected projects that involve communications for smart cities, transportation and logistics.

You can use AWS IoT to accomplish two key tasks: secured data and flexible tele-operations. Data is a key component of any IoT device. When sending data to the cloud, over a cellular or Wi-Fi network, you need to make the telemetry is confidential, this can be overcome by different security mechanism offered by AWS. With AWS Rule Engine, you can build a complete solution with other AWS services for your project.

With MediaTek LinkIt™ ONE and Grove IoT Starter Kit Powered by AWS, you can create powerful Wearables, bleeding edge IoT devices, send your device data to Amazon Web Services. The kit includes a collection of Grove sensors for gathering data and peripherals to acquire visual interface on your device. And by adopting the AWS Cloud, your business will benefit from its flexibility, scalability and pay on-your-demand.

<p style={{}}><a href="https://www.amazon.com/dp/B0168LBYWC" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={38} border={0} /></a></p>

## Included in the Box

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_linkit.JPG)

|Board/Part|Quantity|Documentation|
|-----|------|------|
|[LinkIt ONE](https://www.seeedstudio.com/depot/LinkIt-ONE-p-2017.html?cPath=122_142)|1|[Read Here](https://wiki.seeedstudio.com/LinkIt_ONE/)|
|[Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html?cPath=98_16)|1|[Read Here](https://wiki.seeedstudio.com/Base_Shield_V2/)|
|[Grove - 3-Axis Digital Accelerometer(±16g)](https://www.seeedstudio.com/depot/Grove-3Axis-Digital-Accelerometer16g-p-1156.html?cPath=25_132)|1|[Read Here](https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-16g/)|
|[Grove - Light Sensor](https://www.seeedstudio.com/depot/Grove-Light-Sensor-p-746.html?cPath=25_27)|1|[Read Here](https://wiki.seeedstudio.com/Grove-Light_Sensor/)|
|[Grove - LED Bar v2.0](https://www.seeedstudio.com/depot/Grove-LED-Bar-v20-p-2474.html)|1|[Read Here](https://wiki.seeedstudio.com/Grove-LED_Bar/)|
|[Grove - Moisture Sensor](https://www.seeedstudio.com/depot/Grove-Moisture-Sensor-p-955.html?cPath=25_27)|1|[Read Here](https://wiki.seeedstudio.com/Grove-Moisture_Sensor/)|
|[Grove - Touch Sensor](https://www.seeedstudio.com/depot/Grove-Touch-Sensor-p-747.html?cPath=85_94)|1|[Read Here](https://wiki.seeedstudio.com/Grove-Touch_Sensor/)|
|[Grove - Temperature Sensor](https://www.seeedstudio.com/depot/Grove-Temperature-Sensor-p-774.html?cPath=25_125)|1|[Read Here](https://wiki.seeedstudio.com/Grove-Temperature_Sensor_V1.2/)|
|[Grove - OLED Display](https://www.seeedstudio.com/depot/Grove-OLED-Display-112-p-781.html?cPath=34_36)|1|[Read Here](https://wiki.seeedstudio.com/Grove-OLED_Display_0.96inch/)|
|[Grove - Loudness Sensor](https://www.seeedstudio.com/depot/Grove-Loudness-Sensor-p-1382.html?cPath=25_128)|1|[Read Here](https://wiki.seeedstudio.com/Grove-Loudness_Sensor/)|
|[Micro USB Cable - 48cm](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|1|-|

## Features

* Easy, complete and powerful development platform(LinkIt™ ONE).

* [Grove system](https://wiki.seeedstudio.com/Grove_System/) with various functional modules.

* Confidential communication between you application(web application, mobile apps, or controlling device) and you remote devices(sensors, actuators, embedded devices, or smart appliances) through AWS authorization service.

* Leverage applications to AWS computing platform.

* For building function-rich, edging and fantasy applications belong to future.

## Get started

### Configuring Your AWS IoT Service

At the very beginning, we need to get an AWS IoT service account, and do some configuring.

* Create an [AWS Account](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AMS5.0CreatingAnAWSAccount.html)

* Go to [AWS IoT Console](https://aws.amazon.com/iot/) and open the AWS IoT Dashboard

**1.** Click the **Services** on the top-left corner, and then click on AWS IoT, as shown at below image.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_service.jpg)

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_iot.png)

**2.** Click **Get started** button.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_get_started.jpg)

**3.** Click on **Create a Resource** and then click **Creat a thing**.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_create_a_thing.jpg)

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_view_a_thing.jpg)

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_name_a_thing.png)

**4.** Click on **Connect a device**.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_connect_a_thing.jpg)

**5.** Select **Embedded C** and Click on **Generate certificate** and policy. Click links to download keys and certificate which will be used later.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_select_SDK.png)

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_confirm_connecting_and_download_keys.jpg)

**6.** Then we will get some code as shown at below. Copy the code into an empty document. We will use these code later. Then click on Return to Thing Detail.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_pasting_code.jpg)

### Setup your LinkIt ONE development environment

This tutorial is under Windows(Windows 7 or above) system and Arduino IDE 1.5.7 with LinkIt SDK 1.1.17.

* [Download Arduino IDE 1.5.7](https://www.arduino.cc/en/Main/OldSoftwareReleases#previous)

* [Download LinkIt SDK 1.1.17](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit/sdk_intro/index.gsp)

* [How to install SDK and use LinkIt ONE](https://wiki.seeedstudio.com/LinkIt_ONE/)

* [Update firmware of LinkIt ONE to 1.1.17](https://wiki.seeedstudio.com/LinkIt_ONE#Updating_Firmware)

* Refer to [here](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit/get-started/index.gsp) to build a development  environment.

**Note**: This Version support Arduino IDE 1.5.7(And Arduino IDE 1.6.5) and LinkIt SDK 1.1.17 only.

### Download example and run

AWS IoT Services support for the LinkIt ONE development board enables secure communication between smart projects and Amazon's IoT optimized cloud. AWS IoT Services uses message broker(MQTT broker) and HTTP as its communication protocols. To support this on the LinkIt ONE development board the mbed TLS library for LinkIt ONE (a version of the mbed TLS library) is provided to offer Transport Layer Security (TLS). This library easily integrates with new and existing (embedded) applications and provides the building blocks for secure communication, cryptography, and key management.

* Download sketch [here](https://github.com/loovee/aws_mbedtls_mqtt)

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_download_sketch_github.jpg)

* Then click **Download ZIP** to download the code. The code you downloaded is not an Arduino library, it's a sketchbook, which had included all the library the project need.

Unzip the file you had downloaded from Github, you will get a folder named aws_mbedtls_mqtt-master, remove “-master” in the file name.

### Configure Arduino IDE

**1.** Open your Arduino IDE(1.5.7), click File &gt; Preferences &gt; Sketchbook Location, browse to the folder we had mentioned above - ArduinoPhone-master. Then click OK to save it.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_configure_arduino_IDE.jpg)

**2.** Close and relaunch Arduino IDE, click File &gt; Sketchbook &gt; aws_paho_shadow, then the code will be loaded.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_load_sketch.jpg)

### Put key file into Storage of LinkIt ONE

**1.** The application development for AWS IoT Services is performed in the Arduino IDE. Before upload the sketch, add the certificates (.key or .crt files) created in section creating a certificate for a device or application communication into the LinkIt ONE development board's flash storage as follows.

Switch it into Mass Storage mode, as shown below. You need to disconnect power if no new-plugged-driver exists on your desktop OS.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_connections.jpg)

**2.** Navigate to Computer, then Devices and Removable Storage. Open the removable disk drive corresponding to the LinkIt ONE development board.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_find_linkitone_storage.jpg)

**3.** Copy the keys and certificates files we download from AWS IoT into the disk.

And in the code we had downloaded, there's file named VeriSign-Class 3-Public-Primary-Certification-Authority-G5 (1).pem in \aws_mbedtls_mqtt\root_cert in, copy it to the Remove Disk as well, and rename it to root-CA.crt
![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_find_keys_file.jpg)

Then switch to UART mode( corner-most section of LinkIt ONE board).

### Modify a little the code

Click File&gt;Sketchbook&gt;aws_paho_shadow to open the code.

**1.** Find the code below at aws_paho_shadow.h.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_paste_code.jpg)

**2.** Recall to when we create a thing at AWS IoT:

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_pasting_code.jpg)

Copy the code and replace it in **aws_paho_shadow.h**.

**3.** Configure your Wi-Fi AP:

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_configure_WIFI_access_info.jpg)

**4.** Run win+R, enter cmd, and **ping** the address of AWS_IOT_MQTT_HOST

<div class="mw-geshi mw-code mw-content-ltr container" dir="ltr"><div class="arduino source-arduino"><pre class="de1">ping A2DWFZYZMAZJGZ.<span class="me1">iot</span>.<span class="me1">us</span><span class="sy2">-</span>east<span class="sy2">-</span><span class="nu0">1</span>.<span class="me1">amazonaws</span>.<span class="me1">com</span></pre></div></div>

**Note** that You need to replace the _A2DWFZYZMAZJGZ.iot.us-east-1.amazonaws.com_ with the constant **AWS_IOT_MQTT_HOST '**s value, which can find in the previously copied code.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_pasting_code.jpg)

You will get:

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_get_AWS_addr.jpg)

And modify IP_ADDRESS(line 40) to this line of numbers. (Here is 54.164.100.76)

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_modify_IP_addr.jpg)

### Hardware connection

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_demo_connection.jpg)

Material required:

* [Base Shield v2.0](/Base_Shield_V2), Set to 3V3(corner-most section of Base shield board)

* [Grove - Touch Sensor](/Grove-Touch_Sensor) connect to D6

* [Grove - LED Bar](Grove-LED_Bar) connect to D2

### Upload code

**Tip:** refer to [here](/Guide_to_use_demos_downloaded_from_Seeed-s_Github) for any library file(or header file) missing error prompted.
Connect you LinkIt ONE to PC, and remember to insert the Wi-Fi antenna first. Open your Device Manage, you will find there are 2 COM Ports:

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_find_COM_port.jpg)

Click **Tools&gt;Board** and choose LinkIt ONE. Click Tool&gt;Ports and choost the number of MTK USB Debug Port. Finally, click Upload button to Upload the code.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_flash_code_to_linkitone.jpg)

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_upload_code_down.jpg)

### Check the output

**Note** that you have to set antenna connected. Refer to [here](https://wiki.seeedstudio.com/LinkIt_ONE#Connecting_Antennae).

**1.** Change Arduino IDE Ports to MTK USB Moden Port, and open the Serial Monitor and set baud rate to 9600.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_open_serial_port.png)

**2.** When you got _**...X.509 certificazte... ok**_, it means your device had connected to AWS successful. If there's something wrong, please re-power LinkIt ONE and try again.

Then let's open AWS IoT website, sign in to your account. And click the thing you created minutes ago:

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_return_to_AWS.png)

You will find a control panel on the right side.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_create_rule_in_AWS_console.png)

You can check the status of Touch Sensor now. Try press the Touch Sensor, and update it.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_change_state.png)

**3.** You will find the status of Touch had changed. Then let's try to control the LED Bar. Click Update shadow.

![](https://files.seeedstudio.com/wiki/LinkIT_One_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_update_shadow.png)

**4.** And replace the code with below code(replace all existing code):

```C++
{
      "desired": {
        "ledBarStatus": 5
      },
      "reported": {
        "Touch": false,
        "ledBarStatus": 0
      }
    }
```

## Resource

* [AWS IoT Services Getting Started Guide](http://aws.amazon.com/cn/documentation/iot/)

* [LinkIt ONE Wiki](https://wiki.seeedstudio.com/LinkIt_ONE/)

* [Started with AWS IoT Services on the LinkIt™ ONE Development Platform](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit/get-started/aws/get-started/index.gsp)

* [AWS IoT](https://aws.amazon.com/iot/)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
