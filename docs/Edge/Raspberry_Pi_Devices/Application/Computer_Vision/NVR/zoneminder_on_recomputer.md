---
description: This wiki demonstrates how to deploy video surveillance system zoneminder to recomputer. 
title: Zoneminder on reComputer
keywords:
  - reComputer
  - NVR
  - Zoneminder
  - video surveillance system
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zone_m.webp
slug: /zoneminder_on_recomputer
last_update:
  date: 09/05/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Use Zoneminder on reComputer

## Introduction

[Zoneminder](https://github.com/ZoneMinder/zoneminder) is an open-source video surveillance software that allows you to monitor and manage security cameras. It supports various types of cameras, including IP cameras, USB webcams, and analog cameras. ZoneMinder offers features like motion detection, video recording, alarm notifications, and remote viewing through a web interface. It's highly customizable, making it suitable for both personal and professional surveillance needs. Plus, being open-source, it’s free to use and can be adapted to different setups.

## Prerequisites

### Hardware Requirements

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Download Zoneminder

### Update system

Run the following commands.

```bash
sudo apt update
sudo apt upgrade -y
```

### Install MariaDB and do initial database configuration

Run the following commands.

```bash
sudo apt install apache2 mariadb-server
```

Switch into root user and create database and database user.

```bash
sudo su
mariadb
CREATE DATABASE zm;
CREATE USER zmuser@localhost IDENTIFIED BY 'zmpass';
GRANT ALL ON zm.* TO zmuser@localhost;
FLUSH PRIVILEGES;
exit;
exit
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_1.png" alt="pir" width="1000" height="auto"/></p>

By default MariaDB uses [unix socket authentication](https://mariadb.com/kb/en/authentication-plugin-unix-socket/), so no root user password is required (root MariaDB user access only available to local root Linux user). If you wish, you can set a root MariaDB password (and apply other security tweaks) by running [mariadb-secure-installation](https://mariadb.com/kb/en/mysql_secure_installation/).

### Install Zoneminder

By default Debian will install the version published in Debian (stable). However there may be newer versions by using backports. At the time of this writing, bookworm (stable) ships with v.1.36.33.

To install the version in bookworm stable, just run the following command.

```bash
sudo apt install zoneminder
```

If instead you prefer to install the newer version using backports, run the following commands. The first line will add this bookworm-backports repository. The backports repository is deactivated by default, so with the second line we explicitly state we want the backported version of zoneminder.

```bash
sudo bash -c "echo 'deb http://deb.debian.org/debian bookworm-backports main contrib' >> /etc/apt/sources.list"
sudo apt update
sudo apt -t bookworm-backports install zoneminder
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_2.png" alt="pir" width="1000" height="auto"/></p>

## Configure Zoneminder

### Configure database

Run the following commands, Use `zmpass` as password.

```bash
mariadb -u zmuser -p zm < /usr/share/zoneminder/db/zm_create.sql
```

### Setup permissions for zm.conf

To make sure zoneminder can read the configuration file, run the following command.

```bash
sudo chgrp -c www-data /etc/zm/zm.conf
```

### Tweak Apache configuration

```bash
sudo a2enconf zoneminder
sudo a2enmod cgi
sudo systemctl reload apache2.service
sudo systemctl restart zoneminder.service
sudo systemctl status zoneminder.service
sudo systemctl enable zoneminder.service   
```

If the zoneminder.service show to be active and without any errors, you should be able to access zoneminder at `http://yourhostname/zm`

### Configure Zoneminder

Add the video source to the zoneminder.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_3.png" alt="pir" width="1000" height="auto"/></p>

## Result

Once we have configured everything, we can view the live feed from the current camera, and when motion is detected, it will be recorded.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zone_m.gif" alt="pir" width="1000" height="auto"/></p>

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
