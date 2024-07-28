---
description: In this wiki, we will explore how to use the EdgeBox RPi 200 for Building Management Systems (BMS) with N3uron and BACnet IoT. Learn how to integrate and simulate devices, enhancing your BMS solutions effectively.
title: Connect N3uron with BACnet on EdgeBox RPi 200
keywords:
  - Edge Box Rpi 200
  - Getting started
  - IIoT
  - BMS
  - N3uron
  - BACnet
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /edgebox_rpi_200_n3uron_bacnet
last_update:
  date: 6/20/2024
  author: Kasun Thushara
---

BACnet is a widely adopted protocol in Building Management Systems (BMS) due to its open standard, which allows seamless integration and communication between devices from different manufacturers. Its popularity is also driven by its flexibility, supporting various network configurations and providing robust interoperability. [N3uron](https://n3uron.com/), a powerful and versatile platform, enhances the capabilities of BACnet by enabling efficient data acquisition and management. Using BACnet TCP with the YABE Room Simulator, users can simulate and visualize BACnet devices, facilitating testing and development. This combination ensures a comprehensive and effective approach to BMS solutions, leveraging the strengths of each technology.


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

### YABE

Please go to this [link](https://sourceforge.net/projects/yetanotherbacnetexplorer/) and download YABE (Yet Another BACnet Explorer). YABE is a versatile tool that allows you to simulate and explore BACnet devices, making it ideal for testing and development purposes. Once downloaded and installed on your Host PC, YABE will be used to simulate room temperature data, which we will then read and process using Node-RED on the Edge Box.

### Configure Ethernet settings 

Since your PLC IP domain is different from your wireless settings, you may have to change the IP configuration manually. For that,
- Step 01: Run the following command:

```sh
sudo nano /etc/dhcpcd.conf
```

- Step 02: Then configure the Ethernet port settings according to your PLC network domain and set priorities using the 'metric' command. The lowest metric has the highest priority.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## Connecting to a Room Control from N3uron using BACnet Client

**Create the Module**
- Navigate to `Config => Modules => Model => New Module`.
  
  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/Module.PNG" /></center>

**Configure the Module**
- Provide a name for the module (e.g., `BACnetClient`).
- Assign the module type (`BacnetClient`).
- Save the new configuration.

  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/bacnetmodule.PNG" /></center>


**Create a New Channel**
- Click the button on the left-hand side of the Model header.
- Select `New Channel`.
- Name the channel (e.g., `CH01`).
  
  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/channeladd.PNG" /></center>


**Configure the BACnet Client**
- Click the `Network interface discovery` button to the right of the Network interface field.
- Select the corresponding interface of the network you want to connect to (e.g., use `0.0.0.0` for all interfaces).

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/networkad.PNG" /></center>

- The default BACnet communication port is `47808` (BAC0 in HEX).
- Leave the broadcast address as `255.255.255.255`.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/CH1.PNG" /></center>

- Once the module is configured, click `Save`.
- Restart the module.

**Discover and Select the Device**
- Click the `Browse Devices` button to the right of the Devices field.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/browsedevice.PNG" /></center>

- Discover and select the corresponding device you want to connect to.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/searcheddevices.PNG" /></center>

- Leave the other parameters as their default values.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/room_1.PNG" /></center>

- Once the module and the device are configured, click `Save`.
- Restart the module.

- The "BACnet Browser" in N3uron is opened, and after selecting the device, "Rebrowse" is clicked to view a list of objects. 

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/browser.PNG" /></center>

- The "Temperature Indoor" folder is located and dragged to the "Model" section. In the "Data" section under the "Real Time" tab, the tag values for "Temperature Indoor" are correctly displayed.

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/drag.gif" /></center>

 At this point, the connection is ready and we can move on to creating new tags from scratch.


## Create a New Tag
- In the Explorer panel, select `Tags`.
- In the Model panel, create a new tag and name it `PRESENT_VALUE`.

**Configure the Tag**

- Set the configuration parameters as follows:
  - **Type**: `Number`
  - **Format**: `Default`
  - **Client Access**: `R`
  - **Details**:
    - **Description**: `Present value` (Optional)
  - **Scaling**:
    - **Enabled**: `Yes`
  - **Source**:
    - **Enabled**: `Yes`
    - **Module type**: `BacnetClient`
    - **Module name**: `BACnetClient`
    - **Config**:
      - **Scan rate**: `5000`
      - **Property**: Browse and discover the property by clicking the button to the right. Select `ANALOG_INPUT:0`, then `PRESENT_VALUE`. Choose `From device` in the write priority mode.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/tag-config.PNG" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/search-tag.png" /></center>

Now, go to the Data/Real-Time section in the Navigation panel where you should be able to see all the data read from that device.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/realtime.png" /></center>

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
