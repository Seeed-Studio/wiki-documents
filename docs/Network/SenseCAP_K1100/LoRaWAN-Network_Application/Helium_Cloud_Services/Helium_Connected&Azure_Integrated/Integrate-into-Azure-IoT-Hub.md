---
description: Integrate into Azure IoT Hub
title: Integrate into Azure IoT Hub
keywords:
- SenseCap
image: https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4
slug: /Integrate-into-Azure-IoT-Hub
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Integrate into Azure IoT Hub

The Internet of Things (IoT) is a network of physical devices that connect to and exchange data with other devices and services over the Internet or other network. There are currently over ten billion connected devices in the world and more are added every year. Anything that can be embedded with the necessary sensors and software can be connected over the internet.

Azure IoT Hub is a managed service hosted in the cloud that acts as a central message hub for communication between an IoT application and its attached devices. You can connect millions of devices and their backend solutions reliably and securely. Almost any device can be connected to an IoT hub.

Several messaging patterns are supported, including device-to-cloud telemetry, uploading files from devices, and request-reply methods to control your devices from the cloud. IoT Hub also supports monitoring to help you track device creation, device connections, and device failures.

- For more information on using Microsoft Azure IoT Hub, please refer [here](https://docs.microsoft.com/en-us/azure/iot-hub/iot-concepts-and-iot-hub).

In this chapter, you’ll need to switch over to [Microsoft Azure](https://portal.azure.com/#home). After that, maybe you will need to sign up to get a free account. A new [account registration](https://azure.microsoft.com/en-gb/free/?v=exp&adobe_mc_sdid=SDID%3D15AD43418726D152-6CD00D48F523D667%7CMCORGID%3DEA76ADE95776D2EC7F000101%40AdobeOrg%7CTS%3D1646905124&adobe_mc_ref=https%3A%2F%2Fazure.microsoft.com%2Fzh-cn%2Ffree%2F) will get you a free $200 credit, which you can fully use to complete our routines.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/143.png" /></div>

## Create resource groups

A resource group is a container that holds related resources for an Azure solution. The resource group can include all the resources for the solution, or only those resources that you want to manage as a group. You decide how you want to allocate resources to resource groups based on what makes the most sense for your organization. Generally, add resources that share the same lifecycle to the same resource group so you can easily deploy, update, and delete them as a group.

Then first, please login to [Azure portal](https://portal.azure.com/) with your registered account.

Select **Resource groups**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/144.png" /></div>

Select **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/145.png" /></div>

Enter the following values:

- **Subscription**: Select your Azure subscription.

- **Resource group**: Enter a new resource group name.

- **Region**: Select an Azure location, such as North Europe.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/146.png" /></div>

Select **Review + Create**.

Select **Create**. It takes a few seconds to create a resource group.

Select Refresh from the top menu to refresh the resource group list, and then select the newly created resource group to open it. Or select Notification(the bell icon) from the top, and then select Go to resource group to open the newly created resource group.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/147.png" /></div>

## Create a Microsoft Azure IoT Hub

This step describes how to create and manage Microsoft Azure IoT Hub using the Microsoft Azure portal. From the Microsoft Azure homepage, select the **Create a resource** button, and then enter IoT Hub in the Search the Marketplace field.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/11.jpg" /></div>

Select IoT Hub from the search results, and then select Create.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/12.jpg" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/13.jpg" /></div>

On the Basics tab, complete the fields as follows:

- **Subscription**: Select the subscription to use for your hub.

- **Resource Group**: Select a resource group or create a new one. To create a new one, select Create new and fill in the name you want to use. To use an existing resource group, select that resource group. For more information, see [Manage Azure Resource Manager resource groups](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal).

- **Region**: Select the region in which you want your hub to be located. Select the location closest to you. Some features, such as [IoT Hub device streams](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-device-streams-overview), are only available in specific regions. For these limited features, you must select one of the supported regions.

- **IoT Hub Name**: Enter a name for your hub. This name must be globally unique, with a length between 3 and 50 alphanumeric characters. The name can also include the dash ('-') character.

:::note
Because the IoT hub will be publicly discoverable as a DNS endpoint, be sure to avoid entering any sensitive or personally identifiable information when you name it.
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/148.png" /></div>

Select **Next: Networking** to continue creating your hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/149.png" /></div>

Select **Next: Management** to continue creating your hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/150.png" /></div>

You can accept the default settings here. If desired, you can modify any of the following fields:

Choose the endpoints that devices can use to connect to your IoT hub. You can select the default setting, Public access, or choose Private access. Accept the default setting for this example.

- **Pricing and scale tier**

Your selected tier. You can choose from several tiers, depending on how many features you want and how many messages you send through your solution per day. The free tier is intended for testing and evaluation. It allows 500 devices to be connected to the hub and up to 8,000 messages per day. Each Azure subscription can create one IoT hub in the free tier.

If you are working through a Quickstart for IoT Hub device streams, select the free tier.

- **IoT Hub units**

The number of messages allowed per unit per day depends on your hub's pricing tier. For example, if you want the hub to support ingress of 700,000 messages, you choose two S1 tier units. For details about the other tier options, see [Choosing the right IoT Hub tier](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling).

- **Microsoft Defender for IoT**

Turn this on to add an extra layer of threat protection to IoT and your devices. This option is not available for hubs in the free tier. Learn more about security recommendations for IoT Hub in Defender for IoT.

- **Role-based access control**

Choose how access to the IoT hub is managed, whether shared access policies are allowed or only role-based access control is supported. For more information, see [Control access to IoT Hub by using Azure Active Directory](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-dev-guide-azure-ad-rbac).

- **Device-to-cloud partitions**

This property relates the device-to-cloud messages to the number of simultaneous readers of the messages. Most hubs need only four partitions.

Select **Next: Tags** to continue to the next screen.

Tags are name/value pairs. You can assign the same tag to multiple resources and resource groups to categorize resources and consolidate billing. In this document, you won't be adding any tags. For more information, see [Use tags to organize your Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/151.png" /></div>

Select **Next: Review + create** to review your choices. You see something similar to this screen, but with the values you selected when creating the hub.

We leave the rest of the content as default and do not modify it.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/33.jpg" /></div>

Select **Create** to start the deployment of your new hub. Your deployment will be in progress a few minutes while the hub is being created. Once the deployment is complete, select **Go to resource** to open the new hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/16.jpg" /></div>

You can change the settings of an existing IoT hub after it's created from the IoT Hub pane.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/17.jpg" /></div>

## Create share secret key

Click **Add Shared Access Policy** and create a new access policy with the following permissions: **Registry Read**, **Registry Write**, **Device Connect**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/35.jpg" /></div>

After creation, four sets of secret keys will be generated automatically, the one we need to copy is the **Primary connection string**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/154.png" /></div>

:::note
Don't leak your Primary connection string, otherwise others can access your Azure IoT Hub at any time and get all the permissions you've set up for it.
:::

## Integration to Helium

So now we can go back to the [Helium console](https://console.helium.com/integrations) and create the Azure to Helium integration.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/152.png" /></div>

Click **Add Integration** in the new page.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/153.png" /></div>

Fill in the **Primary connection string** generated above on the new page and Helium will automatically generate the rest of the content.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/155.png" /></div>

Finally, just name this integration.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/156.png" /></div>

## Connection Integration

Now, use the click and drag interface in the Helium Console to connect the device to the function (Decoder) to the Azure Integration as shown [previously](https://wiki.seeedstudio.com/Helium-Introduction/#helium-console-flows).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/21.jpg" /></div>

At this point, follow the [previous steps](https://wiki.seeedstudio.com/Connecting-to-Helium/#upload-code-send-data-to-helium) to upload the code again, and Wio Terminal will reconnect to Helium and upload the data.

After the integration is complete and your device joins LoRaWAN® to send data to Helium all the time. A device should show up in the Device pane of Azure IoT hubs with the Device ID from the Helium Network.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/37.jpg" /></div>

We can also find out about the success of sending data by checking the data returned by the serial monitor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

When you click on “Overview” on IoT Hubs, you should also see messages flowing through IoT hubs and a device listed as “Connected”.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/23.jpg" /></div>

- **Number of messages used:** Total number of messages used (Max).

- **Device to cloud messages:** Telemetry messages sent (Count).

- **Connected Devices:** Connexted devices (Max).

- **Total IoT Devices:** Total devices (Max).

So at this point in the tutorial, you have completed the entire deployment of the local sensor to the Azure cloud. Next, you have the option to customize the processing of the data according to your needs, refer [here](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-messaging).

Of course, you can also continue our tutorial content to learn how to use Microsoft's Web APP integration to complete the visualization of your data.

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/webapp.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Configuring Web APP Visualization</strong><br /><br />This section describes how to visualize the data information received by Microsoft Azure using the free Web APP integration.<br /><br /><a href="https://wiki.seeedstudio.com/Configuring-Web-APP-Visualization">Let's get started &gt;</a></td>
    </tr>
  </tbody></table>

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>

## Statement

- The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.
- LoRaWAN® is a mark used under license from the LoRa Alliance®.
