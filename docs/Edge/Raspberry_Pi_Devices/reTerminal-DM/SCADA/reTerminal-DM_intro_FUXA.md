---
description: Getting Start with FUXA
title: Getting Start with FUXA - Web Based SCADA Tool
keywords:
  - reTerminal Dm
  - Getting started
  - SCADA
  - Industrial 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM_intro_FUXA
last_update:
  date: 1/27/2024
  author: Kasun Thushara
---

## What is SCADA?

**Supervisory Control and Data Acquisition (SCADA)** is a critical system in industrial settings designed to monitor and control processes. It serves as a **centralized platform that gathers real-time data from various sensors and devices across the industrial network**. SCADA enables operators to **visualize, analyze, and respond to this data, facilitating efficient decision-making**. Additionally, it provides **remote access and control capabilities, allowing operators to manage processes from a central location**. The integration of SCADA enhances the overall efficiency, safety, and reliability of industrial operations by providing a comprehensive overview and control of the entire system.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-editor.png" /></center>

## FUXA

FUXA stands as a robust web-based software, enabling the swift creation and deployment of scalable SCADA, HMI, Dashboard, or IIoT systems. With FUXA, you have the capability to craft contemporary process visualizations tailored to your machines, showcasing real-time data and controlling instruments in automated industrial plants.

## Installation FUXA on reTerminal DM

:::note

Need to have installed Node Version 14.21.3. Execute below commands one by one in terminal.

:::

```sh
wget https://nodejs.org/dist/v14.21.3/node-v14.21.3-linux-arm64.tar.xz

tar -xf node-v14.21.3-linux-arm64.tar.xz

cd node-v14.21.3-linux-arm64

sudo cp -R * /usr/local/

node -v

npm -v

```

**Next Install FUXA from NPM**

```sh
sudo npm install -g --unsafe-perm @frangoteam/fuxa

sudo fuxa

```
FUXA UI will be available using the URL: **http://localhost:1881**.

Principally FUXA web server performs two page:

- Visualization for end-user **http://localhost:1881/home**
- Editor to project and design **http://localhost:1881/editor**

## How To Add the Devices and tags ?

To establish a connection with a device, the first step is to obtain the necessary device credentials. FUXA boasts support for a range of devices, including Modbus RTU/TCP, Siemens S7 Protocol, OPC-UA, BACnet IP, MQTT, and Ethernet/IP (Allen Bradley). Once connected to a device, you can proceed to configure subscriptions for live values, Tags, Sensors, and more.

**Step 1**

Navigate to the settings menu and select "Connections" to access the device settings.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/tagdevice.PNG" /></center>

**Step 2**

Click on the "+" icon located at the bottom of the screen.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/devicesadd.PNG" /></center>

**Step 3**

In this example , we are going to connect MQTT server .Depending on your device type (Modbus RTU/TCP, Siemens S7 Protocol, OPC-UA, BACnet IP, MQTT, or Ethernet/IP), choose the appropriate connection type.

**For more details** [Click Here](https://github.com/frangoteam/FUXA/wiki/HowTo-Devices-and-Tags)

Select the device type, set the polling interval to your desired number of seconds, and enable it. Then, provide the necessary credentials to the server, including the address, client ID, username, and password.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtdevice.PNG" /></center>

## Select Tags 

**Step 1**

Following that, you'll observe a green indicator confirming the successful connection to the MQTT server. Subsequently, click on the attach icon.

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtgreen.PNG" /></center>


**Step 2**

Click on the "+" icon to add an MQTT broker. Subscribe to relevant topics, and then proceed by clicking on the search icon.


<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe.png" /></center>


**Step 3**

Next, choose the desired topic from the list for subscription. Provide a name and click on "Subscribe." You have the flexibility to add multiple topics for subscription.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe2.png" /></center>


To publish a topic, you need to specify it. Provide a name for identification and specify the topic.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/publishmqqt.png" /></center>

Afterward, you will have a list of topics, allowing you to choose whether to publish or subscribe.

## Adjust the value sent to the end device using the slider.

In this example, we'll bind the controllers to the device tag. The Control tab offers various features for inputting values, and in this case, we'll use a slider. The slider can be customized to suit your specific requirements.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-slider-control.gif" /></center>

## Displaying Data from Devices

In your system, there might be sensor values to showcase. For this purpose, you can utilize tools like Circular Gauge, Bar Gauge, etc. For the purpose of this demonstration, we will employ the Circular Gauge, which can be found under the Controls tab.

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/gauge.png" /></center>

Next, you will encounter an interactive user interface to modify your circular gauge. Choose the tag and customize it according to your preferences. You have the option to divide it into subdivisions, assign colors to these divisions, and even change the text position, among other customization features.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/bar.gif" /></center>

## Add Process Engineering stuff

In this section, you'll discover a wealth of process engineering components such as **pumps, motors, blowers, tanks, mixers**, and more. For our demonstration, we'll focus on setting on and off colors for a pump. Simply select the relevant tag and specify the colors for both on and off situations.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/processengineer.gif" /></center>

## How to Animate a Pipe

First you design your pipe form and then you define the action by bind the Device-Tag (Variable) with the animation.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-pipe.gif" /></center>

## How to Add a Chart 

To add a Chart Control to a View. going in editor and select the View.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-chart.gif" /></center>

## Demo

In this comprehensive demonstration, the setup includes three tanks, with two of them filled with various solutions. Additionally, two independent valves and pumps are present to transfer the solutions into a mixing tank. Following the mixing process, a separate valve is in place to obtain the resultant solution. Throughout this operation, the temperature of the mixing tank is continuously monitored.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" /></center>


We extend our sincere gratitude to the **frangoteam** for their support and guidance throughout the creation of this wiki. For more details on the FUXA project, please refer to the resources tab below.

## Resources

- **[Web Page]** [FUXA Official Documentation](https://github.com/frangoteam/FUXA/wiki)


# Tech support



Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>









