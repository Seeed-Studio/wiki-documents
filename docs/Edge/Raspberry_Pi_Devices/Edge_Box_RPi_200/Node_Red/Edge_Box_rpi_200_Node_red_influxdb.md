---
description: Deploy InfluxDB on an Edgebox RPi 200 for efficient time-series data collection and analysis in IoT applications. This guide covers installation, configuration, and usage to leverage the power of InfluxDB on your Raspberry Pi-powered edge controller. Achieve real-time insights and robust monitoring capabilities directly at the edge of your network.

title: Edge Box RPi 200 with Node Red and InfluxDB
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - InfluxDB
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /edge_box_rpi_200_node_red_influxdb
last_update:
  date: 06/13/2024
  author: Kasun Thushara
---
## Introduction

Deploying [InfluxDB](https://www.influxdata.com/) on an Edgebox RPi 200, a Raspberry Pi-powered edge controller, enables robust time-series data collection and analysis at the edge of your network. This setup is ideal for IoT applications, providing real-time insights and monitoring capabilities. By leveraging the lightweight yet powerful InfluxDB database, you can efficiently manage and analyze sensor data directly on the Edgebox. The following guide outlines the steps to install, configure, and use InfluxDB on your Edgebox RPi 200, ensuring a seamless integration into your data infrastructure.

### Hardware Preparation

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software Preparation

Edge Box comes to your hand pre-installed with Raspberry Pi OS. If you are booting this device for the first time, please read our [Getting Started Wiki](https://wiki.seeedstudio.com/Edge_Box_introduction/). We have prepared a [Getting Started Guide on Node-RED](https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/). It is recommended that you review this guide before proceeding to the wiki. In this tutorial, we are going to connect the Host PC running the YABE room temperature simulator with Node-RED running on Edge Box.

## Installing InfluxDB on Edgebox RPi 200

This guide covers the steps to install and set up InfluxDB on an Edgebox RPi 200 edge controller.

**Step 1**: Update the System

First, ensure your system is up-to-date by running the following command: SSH to EdgeBox and

```sh
sudo apt update
```

**Step 2**: Add the InfluxDB Repository

Add the InfluxDB GPG key and repository to your system.

Add the GPG key:
   
```sh
curl https://repos.influxdata.com/influxdata-archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/influxdb-archive-keyring.gpg >/dev/null
 ```

Add the repository to the sources list:

```sh
echo "deb [signed-by=/usr/share/keyrings/influxdb-archive-keyring.gpg] https://repos.influxdata.com/debian stable main" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

**Step 3**: Update Package List

Update the package list to include the InfluxDB repository:

```sh
sudo apt update
```

**Step 4**: Install InfluxDB

Install InfluxDB version 1

```sh
sudo apt install influxdb
```

## Start InfluxDB Server

Enable and start the InfluxDB service:

**Step 1**. Unmask the service:

```sh
sudo systemctl unmask influxdb
 ```

**Step 2**. Enable the service:

```sh
sudo systemctl enable influxdb
```

**Step 3**. Start the service:

```sh
sudo systemctl start influxdb
```

## Testing InfluxDB

Access the InfluxDB CLI tool to perform basic database operations.

**Step 1**. Open terminal :
   
```sh
influx
```

**Step 2**. Create a database:

```sh
CREATE DATABASE data
 ```

**Step 3**. Use the database:

```sh
USE data
```

**Step 4**. Insert a sample data point:

```sh
INSERT room,temperature=30.1 humidity=80.2
 ```

**Step 5**. Query the inserted data:

```sh
SELECT * FROM room
 ```

## Adding Authentication to InfluxDB

**Step 1**. Open terminal:

```sh
influx
```

**Step 2**. Create an admin user with all privileges (replace `<password>` with your secure password):
   
```sh
CREATE USER admin WITH PASSWORD '<password>' WITH ALL PRIVILEGES
 ```

**Step 3**. Exit the InfluxDB CLI:

```sh
exit
```

**Step 4**. Edit the InfluxDB configuration to enable authentication:

```sh
sudo nano /etc/influxdb/influxdb.conf
```

Under the `[HTTP]` section, add or modify the following lines:

```
    auth-enabled = true
    pprof-enabled = true
    pprof-auth-enabled = true
    ping-auth-enabled = true
    enabled=true
    bind-address=":8086"
```

**Step 5**. Restart the InfluxDB service to apply the changes:

```sh
sudo systemctl restart influxdb
```

**Step 6**. Connect to InfluxDB with the admin user:

```sh
influx -username admin -password <password>
```

Make sure to replace `<password>` with the password you set for the admin user.

## Sending Data to InfluxDB via Node-RED

**Step 1**. Open your Node-RED in your browser (typically `http://<your-edgebox-ip>:1880`).

**Step 2**. Install the `node-red-contrib-influxdb` using the Node-RED manage palette.

**Step 3**. Drag and drop an `inject` node, a `function` node, and an `influxdb out` node onto the flow canvas, and connect them as follows:

```
[Inject Node] -> [Function Node] -> [InfluxDB Out Node]
```
<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ifdb-flow.PNG" /></center>

### Function Node

This node formats the data to be sent to InfluxDB.

**Step 1**. Double-click the `function` node.

**Step 2**. Enter a name (e.g., `Format Data for InfluxDB`).

**Step 3**. Enter the following code in the function editor:

```javascript
msg.payload = [
    {
        temperature: 30.1,
        humidity: 80.2
    }
];
return msg;
```
<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/js-influxdb.PNG" /></center>

**Step 4**. Click "Done".


### InfluxDB Out Node

This node sends the formatted data to InfluxDB.

**Step 1**. Double-click the `influxdb out` node.
   
**Step 2**. Enter the following details:

- **Name**: labdata
- **Database**: data (previously created)
- **Measurement**: lab

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxin.PNG" /></center>

  
**Step 3**. Click the pencil icon to add a new InfluxDB server configuration.
   
**Step 4**. Enter the following details:

- **Name**: InfluxDB
- **Version**: 1.8-flux
- **URL**: `http://localhost:8086`
- **Username**: admin
- **Password**: `<password>` (the password you created)

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server-ifdb.PNG" /></center>

**Step 5**. Click "Add" and then "Done".

**Step 6**. Click "Deploy" to save and deploy your flow.

### Test the Flow

1. Click the button on the `inject` node to trigger the flow manually.
   
2. Check your InfluxDB database to see if the data has been successfully written by running the following commands on terminal:

```sh
influx -username admin -password <password>
USE data
SELECT * FROM lab
```

Make sure to replace `<password>` with the password you set for the admin user.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/result-lab.PNG" /></center>



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

