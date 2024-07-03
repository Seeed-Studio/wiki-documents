---
description: In this tutorial, we will guide you through installing Grafana on a Raspberry Pi-powered reComputer R1000 . We will also show you how to connect Grafana to an existing InfluxDB database and create a detailed, illustrative dashboard
title: reComputer R1000 with Grafana
keywords:
  - reComputer R1000
  - IIoT
  - Grafana
  - Dash board
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif
slug: /recomputer_r1000_grafana
last_update:
  date: 6/24/2024
  author: Kasun Thushara
---
## Introduction

[Grafana](https://grafana.com/oss/grafana/) is an open-source visualization and analytics software that enables you to query, visualize, alert on, and explore your metrics, logs, and traces from any storage location. It offers tools to transform your time-series database (TSDB) data into insightful graphs and visualizations. As a powerful monitoring solution, Grafana helps in making informed decisions, enhancing system performance, and streamlining troubleshooting. In this wiki, we will guide you through the installation of Grafana on a Raspberry Pi-powered reComputer R1000 , connect it to an existing InfluxDB database, and create an illustrative dashboard.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" /></center>

### Hardware Preparation

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

### Software Preparation

It is recommended to refer to a previous tutorial on [How to create the InfluxDB database](https://wiki.seeedstudio.com/recomputer_r1000_node_red_influxdb/). In this tutorial, we will use an existing InfluxDB connection for the setup.

## Adding Grafana Repository


**Ensure all currently installed packages on your Raspberry Pi OS are up to date**:

```bash
sudo apt update
```

**Add the Grafana APT Key:**

To add the Grafana APT key to your Raspberry Pi’s keychain, run the following command:

```bash
curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null
```

**Add the Grafana Repository:**

Use the following command on your Raspberry Pi to add the Grafana repository to the list:

```bash
echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

**Update Package List:**

As we have made changes to our package list, we need to run an update:

```bash
sudo apt update
```

## Installing Grafana on reComputer R1000

Install the latest version of Grafana by running the following command:

```bash
sudo apt install grafana
```

**Configuring Grafana to Start at Boot**

Enable Grafana to start at boot:

```bash
sudo systemctl enable grafana-server
```

**Starting Grafana**

Start the Grafana server software by running the command below:

```bash
sudo systemctl start grafana-server
```

**Accessing Grafana**

To access the Grafana web interface, open a web browser and navigate to:

```
http://<IPADDRESS>:3000
```

Replace `<IPADDRESS>` with the IP address of your reComputer R1000 RPi 200.

**Logging In**

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/login.PNG" /></center>

The default username and password are:

- **Username:** `admin`
- **Password:** `admin`

Once you have logged in, you will be prompted to change the default password.



<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/updatepsw.PNG" /></center>

## Create Your First Dashboard

**Navigate to Dashboards:**
   
Click on **Dashboards** in the left-side menu.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard1.PNG" /></center>

**Create a New Dashboard:**
   
On the Dashboards page, click **New** and select **New Dashboard**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard2.PNG" /></center>

**Add a Visualization:**
   
On the dashboard, click **+ Add visualization**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard3.PNG" /></center>

**Select Data Source:**
   
You will be redirected to select a data source. In the last tutorial, we created an InfluxDB database. Click on **Configure a new data source**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/configuresource.PNG" /></center>

**Configure InfluxDB:**
   
   - Select **InfluxDB** under time series databases.
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/addsource.PNG" /></center>

   - Provide the **URL**, **database name**, and **user privileges**.
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/configuresource2.PNG" /></center>

   - Click **Save & Test**. If there are no warnings, you are good to go.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/saveandtest.PNG" /></center>


**Build Your Dashboard:**
   
You will see a message confirming the data source configuration. Click on **Building a dashboard**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/saveandtest2.png" /></center>

**Add Visualization:**
   
You will be redirected to the new dashboard page. Click on **Add visualization**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard3.PNG" /></center>

**Select Data Source:**
   
You will be redirected to select a data source. we created an InfluxDB database connection. Click on **InfluxDB**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/datasource.PNG" /></center>

**Configure Visualization**

Grafana provides a user-friendly interface to select measurements, fields, and other relevant data points. We will create a time series visualization. On the left-hand side, you will see options to enter the Panel title, Legends, Axis settings, and Graph settings.
Pay attention to the following visual elements to add a simple graph to your first dashboard.
For more detailed settings and customization, refer to the [Grafana documentation](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/).

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana.gif" /></center>

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
