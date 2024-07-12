---
description: Learn how to integrate the N3uron application on the reComputer R1000 with edge computing capabilities and interact with AWS IoT Core. In this tutorial, we will cover the steps to subscribe to outcome data efficiently.

title: reComputer R1000 Connect AWS IoT Core with N3uron
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial 
  - N3uron
  - AWS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_n3uron_aws
last_update:
  date: 7/11/2024
  author: Kasun Thushara
---
## Introduction

We have outlined the process of transmitting data from your [reComputer-R1000 device with AWS IoT Core using the MQTT protocol](https://wiki.seeedstudio.com/recomputer_r1000_aws/). This tutorial will seamlessly integrate with the aforementioned process. In this tutorial, we will delve into the intricacies of interfacing between the N3uron Edge IIoT platform and AWS IoT Core.

## Prerequisites

### Hardware 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>



### Software

We highly recommend studying the [Getting Started with N3uron](https://wiki.seeedstudio.com/recomputer_r1000_n3uron/) guide. It provides essential insights into navigating the N3uron web interface, understanding concepts such as the Web UI and Web Vision module, grasping the concept of tags, and creating basic dashboards. If you haven't explored these fundamentals yet, it's advisable to do so before proceeding further. You can access the guide through the provided link.

If you haven't explored our guide on integrating [AWS IoT Core with reComputer-R1000](https://wiki.seeedstudio.com/recomputer_r1000_aws/), we recommend doing so as well. This comprehensive guide covers everything from the basics to the advanced steps of publishing a value to IoT Core. **As it complements the current tutorial, it's beneficial to familiarize yourself with this content too**.

## Configure N3uron IIoT Platform

**Create a Module Instance Within N3uron’s WebUI Interface**

- Step 01: In the **Navigation** panel, select **Config**.
- Step 02: In the **Explorer** panel, select **Modules**.
- Step 03: Click on the **Model** menu and select **New Module**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/createmodel.PNG" /></center>

- Step 04: The instance can be given any name but for the example we will use **MQTT**.
- Step 05: Set the **Module Type** property to **MqttClient**. Leave the rest of the properties as their default values and click **Save**.


<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selectmodeltype.PNG" /></center>

## Configure N3uron’s MQTT Module within the WebUI’s Explorer Panel

- Step 01: In the **Explorer** panel, select the **MQTT** instance you have just created.
- Step 02: Click on the Model menu button and select **New Connection**.
- Step 03: Give the New connection a name. In this example, it has been named **AWS**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconnection.PNG" /></center>

- Step 04: Configure the connection properties:

    - A: Select **Amazon Web Services** from the **Destination Broker** drop down menu. **Authentication mode** will be **Certificate**. Also **Client Id** is **N3uron** in this example.
    - B: Load the **Certificate, Private key and CA certificate** you downloaded and saved when you created the Thing in the AWS IoT Console.
    - C: In the AWS IoT console, in the left-hand menu, go to **Settings** and copy your **Device Data Endpoint**. Go back to N3uron and paste it in the **Broker URL** field.
    - D: Leave the rest of the properties as their default values and click on **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconfig.PNG" /></center>

## Subscribe to a Topic Using N3uron’s MQTT Module

- Step 01: In the **Model** panel, right-click on the **AWS** Connection, select **New Subscriber**, and give it a name. In this example, we will simply use **Subscriber**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newsubscriber.PNG" /></center>

- Step 02: Click on it and add a name in the Topic field. In this example, we have used device/data.(In our AWS tutorial , we have published data under this topic.)

- Step 03: Set the following properties using the values shown below, leaving the rest of them as their default values:
    - **Qos**: Qos 0.
    - **Encoding**: UTF8
    - **Compression**: None
    - **Serialization**: JSON
    - **Data parser/Type**: MqttClient JSON

And Save it.
<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/Subscriberconfig.PNG" /></center>

## Create a Tag
- Step 01: Within the **Explorer panel**, select **Tags**.
- Step 02: In the Model menu, right-click on the folder icon, select **New Tag**, and give it a name. In this example, we will use **Subscribed_value**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newtag.PNG" /></center>


- Step 03: In the Configuration panel, set the following properties using the values shown below, leaving the rest of them as their default values:
    - **Type**: Number.
    - **Source/Enabled**: Yes
    - **Module Type**: MqttClient
    - **Module name**: MQTT
    - **Config/Subscriber**: AWS/Subscriber

- Step 04: Click on **Save**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagconfig.PNG" /></center>

After you run the python script which we provide on AWS IoT and reComputer-R1000 and AWS IoT.
Go back to the N3uron WebUI interface and in the left-hand panel, select **Data/Real Time**. You should now see the **Subscribed_Value** tag you created before with a value.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/realtimedata.PNG" /></center>

## Visualization 

If you have create a webvision module you can start this steps. 

- Step 01: Navigate to **WebVision** in the **Config** section and click on **Open Designer**. Log in using your Administrator credentials.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/wenvision.PNG" /></center>

- Step 02: In the Templates section, create a new Container named as you wish. Then, designate this container as the startup. This will set this as our initial WebVision screen. It will appear with an asterisk symbol (*) beside it.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/webvison.PNG" /></center>

- Step 03: Change the background color of the  container.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/colorchabge.PNG" /></center>

- Step 04: Inside the Main container, navigate to **Components** and add a new component. For this example, select the **Label** component.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/addnewcomp.PNG" /></center>

- Step 05: You can modify the properties of the label for a better appearance.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/changeproperties.PNG" /></center>

- Step 06: Within the **Label component**, select the tag that will provide the values displayed on the Label component.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selecttag.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/taglist.PNG" /></center>

- Step 07: Select tag Property 

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagproperty.PNG" /></center>

- Step 08: Next, navigate to WebVision in the Config section and click on Open UI. Log in using your Administrator credentials.

 <center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>
 
 Subsequently, you will witness the ultimate result, which involves updating the label values in accordance with the data subscribed from the cloud.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/output.PNG" /></center>

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