---
description: Connect N3uron with MQTT and Modbus Support Devices 
title: Connect N3uron with MQTT and Modbus Support Devices 
keywords:
  - reTerminal DM
  - MQTT
  - IIoT
  - Industrial 
  - N3uron
  - Modbus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminalDM_N3uron_modbus_mqtt
last_update:
  date: 5/6/2024
  author: Kasun Thushara and Xabier Fernández
---
## Introduction 

In industrial automation, Modbus stands out as one of the most common protocols, while MQTT dominates the wireless protocol domain. The potent pairing of ReTerminal DM and [N3uron](https://n3uron.com/) Duo facilitates efficient plant management by providing robust connectivity and data manipulation capabilities. This Wiki emphasizes the significance of Modbus TCP in industrial settings, highlighting the seamless integration of MQTT devices to further enhance connectivity.

## Prerequisites

### Hardware 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>


### Software

We highly recommend studying the [Getting Started with N3uron](https://wiki.seeedstudio.com/reTerminalDM_N3uron_Get_Start/) guide. It provides essential insights into navigating the N3uron web interface, understanding concepts such as the Web UI and Web Vision module, grasping the concept of tags, and creating basic dashboards. If you haven't explored these fundamentals yet, it's advisable to do so before proceeding further. You can access the guide through the provided link.

## Modbus Module Create and Configuration

Create a Module Instance Within N3uron’s WebUI Interface

- Step 01: In the Navigation panel, select **Config**.
- Step 02: In the Explorer panel, select **Modules**.
- Step 03: Click on the Model menu and select **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- Step 04: The instance can be given any name but for the example, we will use **ModbusClient**.
- Step 05: Set the Module Type property to **ModbusClient**. Leave the rest of the properties as their default values and click **Save**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### Channel Creation and Configuration

- Step 01: Under the created Modbus Client and Model, select **New Channel**. Give the channel name as **Client**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- Step 02: Now, we are going to communicate with the PLC using Modbus TCP. Please provide the **IP address** for the PLC and the **port address**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/clientconfig.PNG" /></center>


:::note
 If you are using Modbus RTU, there are various configurations to consider. To do that, you need to provide details such as the COM port, baud rate, etc. For more information on configuring both Modbus RTU and TCP protocols on N3uron, refer to the provided [guide](https://docs.n3uron.com/docs/modbus-client-configuration).
:::

- Step 03: Add a device: Each channel can have one or more devices. Set a **name** for the device and proceed with the configuration. In this case, the device name is **PLC**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- Step 04: There are a few settings that you can adjust through this interface. You can find more details from this link. However, for this case, we'll keep them as they are.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## Tag Configuration

- Step 01: Go to the **WebUI**, select **Config**, and then click on **Tag**. In the Model section, click on the menu and choose **New Tag**. Name it Q1. Normally Q is used to indicate the output coil. 

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/addtag.PNG" /></center>


- Step 02: Then you need to do the following configurations. 
    - Source : Enabled/Yes
    - Module Type : ModbusClient 
    - ModuleName: ModbusClient
    - Config: Device: Client/PLC
    - Modbus address: 008931
    - Data type: Boolean 
and **Save** it.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
 It is advisable to refer to the PLC or device manufacturer's datasheet regarding Modbus addresses. There, you will find details about input, output, and holding addresses. According to these specifications, adjustments should be made in the Modbus address line in the tag configuration. For instance, if the manufacturer notates the output coil Q1 as 8193, the address should be configured as 008193. Similarly, if the network input is denoted as 1 and it is a coil type, the address should be set as 000001.
:::

- Step 03: Real-time simulation 

Once connected to the system, you can view the real-time status of output coils and input coils.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
 Interaction with the PLC via the N3uron interface requires appropriate access permissions, including both read and write capabilities.
:::

## Create a MQTT Module Instance Within N3uron’s WebUI Interface

- Step 01: In the Navigation panel, select **Config**.
- Step 02: In the Explorer panel, select **Modules**.
- Step 03: Click on the Model menu and select **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- Step 04: The instance can be given any name but for the example, we will use **MQTT**.
- Step 05: Set the Module Type property to **MqttClient**. Leave the rest of the properties as their default values and click **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## Configure N3uron’s MQTT Module


- Step 01: In the Explorer panel, select the MQTT instance you have just created.
- Step 02: Click on the Model menu button and select New Connection.
- Step 03: Give the New connection a name. In this example, it has been named **MqqtClient**:

    - Destination broker : Custom 
    - Authentication mode: Password
    - Username : Your Broker Username
    - Password: Your Broker Password
    - Protocol:MQTT
    - Broker URL:Broker ip
**Save** configurations 

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## Subscribe to a Topic Using N3uron’s MQTT Module

- Step 01: In the Model panel, right-click on the AWS Connection, select New Subscriber, and give it a name. In this example, we will simply use Subscriber.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- Step 02: Click on it and add a name in the Topic field. In this example, we have used device/data.


:::note
For testing and hands-on experience, we have provided you with an [Arduino code](https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/MQTT_N3uron.ino) that can be run on XIAO. Additionally, you will need to input your own credentials into this code before uploading it.
:::


- Step 03: Set the following properties using the values shown below, leaving the rest of them as their default values:

    - Qos: Qos 0.
    - Encoding: UTF8
    - Compression: None
    - Serialization: JSON
    - Data parser/Type: MqttClient JSON
And **Save** it.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
 Here, we utilize a data parser configured for MQTTClient JSON format. The XIAO device publishes data to the broker in this format. If your device does not publish data in this specific format, you will need to identify the format it uses and create a custom JavaScript code snippet to handle the devices accordingly. For further guidance, please refer to the provided [guidelines](https://docs.n3uron.com/docs/mqtt-client-custom-parser).
:::

## Create a Tag

- Step 01: Within the Explorer panel, select **Tags**.
- Step 02: In the Model menu, right-click on the folder icon, select **New Tag**, and give it a name. In this example, we will use **test**.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- Step 03: In the Configuration panel, set the following properties using the values shown below, leaving the rest of them as their default values:

    - Type: Number.
    - Source/Enabled: Yes
    - Module Type: MqttClient
    - Module name: MQTT
    - Config/Subscriber: MqqtClient/Subscriber
Click on **Save**.

<center><img width={500} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>


- Step 04: Real-time simulation 
Once connected to the system, you can view the real-time status of output from the MQTT Broker.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

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









