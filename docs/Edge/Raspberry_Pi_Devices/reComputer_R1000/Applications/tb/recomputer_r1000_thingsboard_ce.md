---
description: The ThingsBoard Installation Guide for reComputer provides step-by-step instructions to set up ThingsBoard v3.8 and PostgreSQL on a reComputer device. It covers Java 17 installation, ThingsBoard service configuration, PostgreSQL setup, and troubleshooting tips for seamless IoT data management.

title: Getting Started ThingsBoard With reComputer R1000
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial 
  - Thingsboard
  - Edge Computing
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_thingsboard_ce
last_update:
  date: 10/14/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:600}}/></div>

## Introduction

[ThingsBoard](https://thingsboard.io/) is an open-source IoT platform designed for rapid development, management, and scaling of IoT projects. It offers an out-of-the-box solution for both cloud and on-premises IoT infrastructure, enabling you to provision devices, manage assets, collect and visualize data, and analyze telemetry with ease. In this guide, we will walk through the installation of ThingsBoard Community Edition on a reComputer, providing a robust foundation for your IoT applications.

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

:::note
Hardware requirements depend on the chosen database and the number of devices connected to the system. To run ThingsBoard with PostgreSQL, you will need **at least 4GB of RAM**.
:::

## Step 1: Install Java 17 (OpenJDK)

ThingsBoard requires Java 17 to run.Open Terminal.

1. Update your package index:
   ```bash
   sudo apt update
   ```
2. Install OpenJDK 17:
   ```bash
   sudo apt install openjdk-17-jdk
   ```
3. Configure your system to use OpenJDK 17 by default:
   ```bash
   sudo update-alternatives --config java
   ```
4. Verify the installation:
   ```bash
   java -version


## Step 2: Install ThingsBoard Service

1. Download the ThingsBoard `.deb` package:
   ```bash
   wget https://github.com/thingsboard/thingsboard/releases/download/v3.8/thingsboard-3.8.deb
   ```
2. Install ThingsBoard as a service:
   ```bash
   sudo dpkg -i thingsboard-3.8.deb

## Step 3: Install PostgreSQL Database

1. Install **wget** if not already installed:
   ```bash
   sudo apt install -y wget
   ```
2. Add the PostgreSQL repository and install the service:
   ```bash
   wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
   echo "deb https://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list
   sudo apt update
   sudo apt -y install postgresql
   sudo service postgresql start
   ```

3. Set the password for the `postgres` user:
   ```bash
   sudo -u postgres psql
   \password
   ```

4. Create the ThingsBoard database:
   ```bash
   psql -U postgres -d postgres -h 127.0.0.1 -W
   CREATE DATABASE thingsboard;
   ```

## Step 4: Configure ThingsBoard

1. Open the ThingsBoard configuration file:
   ```bash
   sudo nano /etc/thingsboard/conf/thingsboard.conf
   ```

2. Add the following database configuration (replace `PUT_YOUR_POSTGRESQL_PASSWORD_HERE` with the password set for the `postgres` user):
   ```bash
   # DB Configuration 
   export DATABASE_TS_TYPE=sql
   export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
   export SPRING_DATASOURCE_USERNAME=postgres
   export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
   export SQL_POSTGRES_TS_KV_PARTITIONING=MONTHS
   ```

3. (Optional) Update memory settings for machines with 4GB of RAM:
   ```bash
   export JAVA_OPTS="$JAVA_OPTS -Xms2G -Xmx2G"
   ```

## Step 5: Run Installation Script

1. Execute the ThingsBoard installation script:
   ```bash
   sudo /usr/share/thingsboard/bin/install/install.sh --loadDemo
   ```

   The `--loadDemo` option will load demo data such as users, devices, assets, and more.

## Step 6: Start ThingsBoard Service

Start the ThingsBoard service:
```bash
sudo service thingsboard start
```

Once started, you can access the ThingsBoard Web UI using the following link:

- **URL:** [http://localhost:8080](http://localhost:8080)

#### Default Credentials:
- **System Administrator:** sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator:** tenant@thingsboard.org / tenant
- **Customer User:** customer@thingsboard.org / customer

## Troubleshooting

If you encounter any issues, check the ThingsBoard logs for errors:

```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```

For additional log files:
```bash
/var/log/thingsboard
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/openingwindow.PNG" style={{width:600}}/></div>

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