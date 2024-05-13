---
description: Connect N3uron with MQTT and Modbus Support Devices 
title: Connect N3uron with MQTT and Modbus Support Devices 
keywords:
  - Edge Box RPi 200
  - MQTT
  - IIoT
  - Industrial 
  - N3uron
  - Modbus
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox_rpi_200_N3uron_modbus_mqtt_aws
last_update:
  date: 5/10/2024
  author: Kasun Thushara and Xabier Fernández
---
## Introduction 


In industrial automation, Modbus stands out as one of the most common protocols. MQTT has emerged as the leading protocol for IoT in industrial automation due to many characteristics. Its lightweight design, efficiency, scalability, and support for asynchronous messaging are notable. In MQTT, devices communicate only when there's a reportable event, contrasting with constant update checks. This event-driven approach, coupled with reporting by exception—sending data only when it deviates from norms or on specific triggers—conserves bandwidth and resources, optimizing data transmission for critical IoT applications.

The potent pairing of Edge Box RPi 200 and [N3uron](https://n3uron.com/) Duo facilitates efficient plant management by providing robust connectivity and data manipulation capabilities. This Wiki emphasizes the significance of Modbus TCP in industrial settings, highlighting the seamless integration of MQTT devices to further enhance connectivity.



## Prerequisites

### Hardware 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software

We highly recommend studying the [Getting Started with N3uron](https://wiki.seeedstudio.com/Edgebox-rpi-200-n3uron/) guide. It provides essential insights into navigating the N3uron web interface, understanding concepts such as the Web UI and Web Vision module, grasping the concept of tags, and creating basic dashboards. If you haven't explored these fundamentals yet, it's advisable to do so before proceeding further. You can access the guide through the provided link.

### Configure Ethernet settings 

Since your PLC IP domain is different from your wireless settings, you may have to change the IP configuration manually. For that,
- Step 01: Run the following command:

```sh
sudo nano /etc/dhcpcd.conf
```

- Step 02: Then configure the Ethernet port settings according to your PLC network domain and set priorities using the 'metric' command. The lowest metric has the highest priority.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## Modbus Module Create and Configuration

Create a Module Instance Within N3uron’s WebUI Interface

- Step 01: In the Navigation panel, select **Config**.
- Step 02: In the Explorer panel, select **Modules**.
- Step 03: Click on the Model menu and select **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- Step 04: The instance can be given any name but for the example, we will use **ModbusClient**.
- Step 05: Set the Module Type property to **ModbusClient**. Leave the rest of the properties as their default values and click **Save**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### Channel Creation and Configuration

- Step 01: Under the created Modbus Client and Model, select **New Channel**. Give the channel name as **Client**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- Step 02: Now, we are going to communicate with the PLC using Modbus TCP. Please provide the **IP address** for the PLC and the **port address**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/clientconfig.PNG" /></center>


:::note
 If you are using Modbus RTU, there are various configurations to consider. To do that, you need to provide details such as the COM port, baud rate, etc. For more information on configuring both Modbus RTU and TCP protocols on N3uron, refer to the provided [guide](https://docs.n3uron.com/docs/modbus-client-configuration).
:::

- Step 03: Add a device: Each channel can have one or more devices. Set a **name** for the device and proceed with the configuration. In this case, the device name is **PLC**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- Step 04: There are a few settings that you can adjust through this interface. You can find more details from this link. However, for this case, we'll keep them as they are.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## Tag Configuration

- Step 01: Go to the **WebUI**, select **Config**, and then click on **Tag**. In the Model section, click on the menu and choose **New Tag**. Name it Q1. Normally Q is used to indicate the output coil. 

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/addtag.PNG" /></center>


- Step 02: Then you need to do the following configurations. 
    - Source : Enabled/Yes
    - Module Type : ModbusClient 
    - ModuleName: ModbusClient
    - Config: Device: Client/PLC
    - Modbus address: 008931
    - Data type: Boolean 
and **Save** it.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
 It is advisable to refer to the PLC or device manufacturer's datasheet regarding Modbus addresses. There, you will find details about input, output, and holding addresses. According to these specifications, adjustments should be made in the Modbus address line in the tag configuration. For instance, if the manufacturer notates the output coil Q1 as 8193, the address should be configured as 008193. Similarly, if the network input is denoted as 1 and it is a coil type, the address should be set as 000001.
:::

- Step 03: Real-time simulation 

Once connected to the system, you can view the real-time status of output coils and input coils.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
 Interaction with the PLC via the N3uron interface requires appropriate access permissions, including both read and write capabilities.
:::

## Create a MQTT Module Instance Within N3uron’s WebUI Interface

- Step 01: In the Navigation panel, select **Config**.
- Step 02: In the Explorer panel, select **Modules**.
- Step 03: Click on the Model menu and select **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- Step 04: The instance can be given any name but for the example, we will use **MQTT**.
- Step 05: Set the Module Type property to **MqttClient**. Leave the rest of the properties as their default values and click **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## Configure N3uron’s MQTT Module


- Step 01: In the Explorer panel, select the MQTT instance you have just created.
- Step 02: Click on the Model menu button and select New Connection.
- Step 03: Give the New connection a name. In this example, it has been named **MqttClient**:

    - Destination broker : Custom 
    - Authentication mode: Password
    - Username : Your Broker Username
    - Password: Your Broker Password
    - Protocol:MQTT
    - Broker URL:Broker ip
**Save** configurations 

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## Subscribe to a Topic Using N3uron’s MQTT Module

- Step 01: In the Model panel, right-click on the AWS Connection, select New Subscriber, and give it a name. In this example, we will simply use Subscriber.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- Step 02: Click on it and add a name in the Topic field. In this example, we have used device/data.


:::note
For testing and hands-on experience, we have provided you with an [Arduino code](https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/MQTT_N3uron.ino) that can be run on XIAO. Additionally, you will need to input your own credentials into this code before uploading it.
:::


- Step 03: Set the following properties using the values shown below, leaving the rest of them as their default values:

    - Qos: Qos 0.
    - Encoding: UTF8
    - Compression: None
    - Serialization: JSON
    - Data parser/Type: MqttClient JSON
And **Save** it.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
 Here, we utilize a data parser configured for MQTTClient JSON format. The XIAO device publishes data to the broker in this format. If your device does not publish data in this specific format, you will need to identify the format it uses and create a custom JavaScript code snippet to handle the devices accordingly. For further guidance, please refer to the provided [guidelines](https://docs.n3uron.com/docs/mqtt-client-custom-parser).
:::

## Create a Tag

- Step 01: Within the Explorer panel, select **Tags**.
- Step 02: In the Model menu, right-click on the folder icon, select **New Tag**, and give it a name. In this example, we will use **test**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- Step 03: In the Configuration panel, set the following properties using the values shown below, leaving the rest of them as their default values:

    - Type: Number.
    - Source/Enabled: Yes
    - Module Type: MqttClient
    - Module name: MQTT
    - Config/Subscriber: MqttClient/Subscriber
Click on **Save**.

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>


- Step 04: Real-time simulation 
Once connected to the system, you can view the real-time status of output from the MQTT Broker.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## Bonus : Lets Publish Status of Factory with AWS 

:::note
 We have provided step-by-step instructions on how to connect [AWS cloud to your Edge Box RPi 200 device](https://wiki.seeedstudio.com/Edgebox-Rpi-200_N3uron_AWS/). If you are new to this wiki, please refer to this link.

:::

- Step 01: In the Explorer panel, select the **MQTT** instance you have just created.
- Step 02: Click on the Model menu button and select **New Connection**.
- Step 03: Give the New connection a name. In this example, it has been named **MqttPublisher**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- Step 04: Configure the connection properties:

    - A: Select **Amazon Web Services** from the **Destination Broker** drop down menu. **Authentication mode** will be **Certificate**. Also **Client Id** is **N3uron** in this example.
    - B: Load the **Certificate, Private key and CA certificate** you downloaded and saved when you created the Thing in the AWS IoT Console.
    - C: In the AWS IoT console, in the left-hand menu, go to **Settings** and copy your **Device Data Endpoint**. Go back to N3uron and paste it in the **Broker URL** field.
    - D: Leave the rest of the properties as their default values and click on **Save**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- Step 05: Within the Model panel, right-click on the **MqttPublisher** Connection you have just configured, select **New Publisher**, and give it a name. In this example, we will simply use **AWS**.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- Step 06: Click on it and add a name in the **Topic** field. In this example, we have used **N3uron**.

- Step 07: Click on the **Tag Filter** button, select **New Tag Filter**, and change the default name. In this example we have used **TagFilter**. Leave Mode, Path, and Regex pattern as their default values. With this configuration, every tag configured in N3uron will be published to our AWS Broker.

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- Step 08: Go to the AWS IoT console and in the left-hand menu, select **MQTT test client**.Click on the **Subscribe to a topic** tab, enter **N3uron** in the Topic filter to subscribe to everything, and click on **Subscribe**. 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/awsend.PNG" /></center>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>









