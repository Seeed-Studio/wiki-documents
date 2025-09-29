---
description: Learn how to use ThingsBoard on the reComputer device with this step-by-step guide. Discover how to add devices, configure MQTT nodes, and create interactive dashboards using popular features for efficient data monitoring.

title: Create Dynamic IoT Dashboards with ThingsBoard and reComputer R1000
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial 
  - Thingsboard
  - Edge Computing
image: https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard_1.webp
slug: /recomputer_r1000_thingsboard_dashboard
last_update:
  date: 10/25/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:600}}/></div>

## Introduction

The [ThingsBoard Community Edition](https://thingsboard.io/), an open-source platform, offers powerful features for creating interactive dashboards that stand out among other open-source IoT solutions. With a variety of graphical tools, ThingsBoard allows users to easily visualize and monitor data collected from IoT devices, making it ideal for managing and analyzing real-time data. Whether for industrial automation, smart city projects, or environmental monitoring, ThingsBoard provides a versatile and user-friendly way to track and respond to IoT data insights.

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
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

If you're new to ThingsBoard, please ensure it’s installed correctly. Refer to [this wiki](https://wiki.seeedstudio.com/recomputer_r1000_thingsboard_ce/) for guidance.

## Login to ThingsBoard

Use the following credentials to log in:

:::note
Username: tenant@thingsboard.org

Password: tenant
:::

## Step 1: Provision a Device

- Navigate to the `Devices` page under the `Entities` section.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb1.png" style={{width:600}}/></div>

- Click the `+` icon in the top right corner of the table and select `Add new device` from the drop-down menu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb2.png" style={{width:600}}/></div>

- Enter the device name. Give Client Id, Password, Username. Click `Add`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb3.png" style={{width:600}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt4.PNG" style={{width:400}}/></div>

- As you add more devices, they will appear at the top of the table. The table automatically sorts devices by creation time, with the newest ones listed first.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb5.png" style={{width:600}}/></div>

## Step 2: Connect the Device

- Click on your device and then click the `Check connectivity` button in the `Device details` window.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb6.png" style={{width:600}}/></div>

- In the opened window, select the messaging protocol and your operating system.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb7.png" style={{width:600}}/></div>

- Install the necessary client tools and copy the provided command.
- Execute the copied command. Once the `temperature` readings are published successfully, the device state will change from "Inactive" to `Active`. You will also see the published temperature readings.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb8.png" style={{width:600}}/></div>

- Close the connectivity window.

## Step 3: Configure the MQTT Node in Node-RED

- If you collect data using different protocols like Modbus, BACnet, or OPC UA, you can use Node-RED.
- Open Node-RED and add an `MQTT Out` node.
- In the MQTT Out broker setup, configure the `client name, password, broker username, and the IP address of the reComputer`.
- Use the topic `v1/devices/me/telemetry` to send telemetry data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt1.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt2.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt3.PNG" style={{width:400}}/></div>

- If you want to learn more about the MQTT In node, [you can explore it further](https://wiki.seeedstudio.com/recomputer_r1000_nodered_mqtt/).

:::note
You do not need to install the Mosquitto broker on the reComputer.
:::

## Step 4: Create a Dashboard

### Create an Empty Dashboard

- Navigate to the `Dashboards` page from the main menu on the left side of the screen.
- Click the `+` sign in the upper right corner of the screen and select `Create new dashboard` from the drop-down menu.
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb9.png" style={{width:600}}/></div>

- In the dialog box, enter a title for the dashboard (the description is optional). Click `Add`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb10.png" style={{width:600}}/></div>

- After creating the dashboard, it will open automatically, and you can start adding widgets.
- To save the dashboard, click the `Save` button in the upper right corner.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb11.png" style={{width:600}}/></div>

- Your first dashboard is now created. As you add more dashboards, they will appear at the top of the list, sorted by the creation timestamp.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb12.png" style={{width:600}}/></div>

### Add a Chart Widget

- Enter edit mode and click the `Add new widget` button at the top of the screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb13.png" style={{width:600}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb14.png" style={{width:600}}/></div>

- Find the `Charts` widget bundle and click on it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb15.png" style={{width:600}}/></div>

- Select the `Time series chart` widget.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb16.png" style={{width:600}}/></div>

- In the `Device` field, specify the device you created earlier as the data source.
- In the `Series` section, enter the data key `Temperature` to monitor the temperature values of a device.
- Click `Add`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb17.png" style={{width:600}}/></div>

- Resize the widget and apply the changes.

You can explore additional dashboard widgets [here](https://thingsboard.io/docs/user-guide/dashboards/).

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
