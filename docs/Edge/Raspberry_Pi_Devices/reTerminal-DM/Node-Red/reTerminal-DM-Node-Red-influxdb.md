---
description: Deploy InfluxDB on an reTerminal DM for efficient time-series data collection and analysis in IoT applications. This guide covers installation, configuration, and usage to leverage the power of InfluxDB on your Raspberry Pi-powered HMI. Achieve real-time insights and robust monitoring capabilities directly at the edge of your network.

title: reTerminal DM with Node Red and InfluxDB
keywords:
  - Raspberry Pi
  - HMI
  - Node-Red
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/reterminal-influx.png
slug: /reterminal_dm_200_node_red_influxdb
last_update:
  date: 06/28/2024
  author: Kasun Thushara
---
## Introduction

Deploying [InfluxDB](https://www.influxdata.com/) on an reTerminal DM, a Raspberry Pi-powered HMI, enables robust time-series data collection and analysis at the edge of your network. This setup is ideal for IoT applications, providing real-time insights and monitoring capabilities. By leveraging the lightweight yet powerful InfluxDB database, you can efficiently manage and analyze sensor data directly on the reTerminal DM. The following guide outlines the steps to install, configure, and use InfluxDB on your reTerminal DM, ensuring a seamless integration into your data infrastructure.

### Hardware Preparation


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

### Software Preparation

We have prepared a [Getting started Guide on Node-RED](https://wiki.seeedstudio.com/reTerminal-DM-Getting-Started-with-Node-Red/). It is recommended that you review this guide before proceeding to the wiki.

## Installing InfluxDB on reTerminal DM

This guide covers the steps to install and set up InfluxDB on an reTerminal DM HMI.

**Step 1**: Update the System

First, ensure your system is up-to-date by running the following command: SSH to reTerminal DM and

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

**Step 1**. Open your Node-RED in your browser (typically `http://<your-reTerminal-DM-ip>:1880`).

**Step 2**. Install the `node-red-contrib-influxdb` using the Node-RED manage palette.

**Step 3**. Drag and drop an `inject` node, a `function` node, and an `influxdb out` node onto the flow canvas, and connect them as follows:

```
[Inject Node] -> [Function Node] -> [InfluxDB Out Node]
```
<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ifdb-flow.PNG" /></center>

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
<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/js-influxdb.PNG" /></center>

**Step 4**. Click "Done".


### InfluxDB Out Node

This node sends the formatted data to InfluxDB.

**Step 1**. Double-click the `influxdb out` node.
   
**Step 2**. Enter the following details:

- **Name**: labdata
- **Database**: data (previously created)
- **Measurement**: lab

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/influxin.PNG" /></center>

  
**Step 3**. Click the pencil icon to add a new InfluxDB server configuration.
   
**Step 4**. Enter the following details:

- **Name**: InfluxDB
- **Version**: 1.8-flux
- **URL**: `http://localhost:8086`
- **Username**: admin
- **Password**: `<password>` (the password you created)

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/server-ifdb.PNG" /></center>

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

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/result-lab.PNG" /></center>


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

