---
description: 本 wiki 演示如何在 reComputer 上部署视频监控系统 zoneminder。
title: reComputer 上的 Zoneminder
keywords:
  - reComputer
  - NVR
  - Zoneminder
  - video surveillance system
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zone_m.webp
slug: /cn/zoneminder_on_recomputer
last_update:
  date: 09/05/2025
  author: Jiahao

no_comments: false # for Disqus
---

# 在 reComputer 上使用 Zoneminder

## 简介

[Zoneminder](https://github.com/ZoneMinder/zoneminder) 是一个开源视频监控软件，允许您监控和管理安全摄像头。它支持各种类型的摄像头，包括 IP 摄像头、USB 网络摄像头和模拟摄像头。ZoneMinder 提供运动检测、视频录制、报警通知和通过 Web 界面远程查看等功能。它高度可定制，适用于个人和专业监控需求。此外，作为开源软件，它免费使用，可以适应不同的设置。

## 先决条件

### 硬件要求

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 下载 Zoneminder

### 更新系统

运行以下命令。

```bash
sudo apt update
sudo apt upgrade -y
```

### 安装 MariaDB 并进行初始数据库配置

运行以下命令。

```bash
sudo apt install apache2 mariadb-server
```

切换到 root 用户并创建数据库和数据库用户。

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

默认情况下，MariaDB 使用 [unix socket authentication](https://mariadb.com/kb/en/authentication-plugin-unix-socket/)，因此不需要 root 用户密码（root MariaDB 用户访问仅对本地 root Linux 用户可用）。如果您愿意，可以通过运行 [mariadb-secure-installation](https://mariadb.com/kb/en/mysql_secure_installation/) 来设置 root MariaDB 密码（并应用其他安全调整）。

### 安装 Zoneminder

默认情况下，Debian 将安装在 Debian（稳定版）中发布的版本。但是，通过使用 backports 可能有更新的版本。在撰写本文时，bookworm（稳定版）附带 v.1.36.33。

要安装 bookworm 稳定版中的版本，只需运行以下命令。

```bash
sudo apt install zoneminder
```

如果您更愿意使用 backports 安装更新版本，请运行以下命令。第一行将添加此 bookworm-backports 存储库。backports 存储库默认情况下是停用的，因此在第二行中我们明确声明我们想要 zoneminder 的 backported 版本。

```bash
sudo bash -c "echo 'deb http://deb.debian.org/debian bookworm-backports main contrib' >> /etc/apt/sources.list"
sudo apt update
sudo apt -t bookworm-backports install zoneminder
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_2.png" alt="pir" width="1000" height="auto"/></p>

## 配置 Zoneminder

### 配置数据库

运行以下命令，使用 `zmpass` 作为密码。

```bash
mariadb -u zmuser -p zm < /usr/share/zoneminder/db/zm_create.sql
```

### 设置 zm.conf 的权限

为确保 zoneminder 可以读取配置文件，请运行以下命令。

```bash
sudo chgrp -c www-data /etc/zm/zm.conf
```

### 调整 Apache 配置

```bash
sudo a2enconf zoneminder
sudo a2enmod cgi
sudo systemctl reload apache2.service
sudo systemctl restart zoneminder.service
sudo systemctl status zoneminder.service
sudo systemctl enable zoneminder.service   
```

如果 zoneminder.service 显示为活动状态且没有任何错误，您应该能够在 `http://yourhostname/zm` 访问 zoneminder

### 配置 Zoneminder

将视频源添加到 zoneminder。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_3.png" alt="pir" width="1000" height="auto"/></p>

## 结果

一旦我们配置了所有内容，我们就可以查看当前摄像头的实时画面，当检测到运动时，它将被录制。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zone_m.gif" alt="pir" width="1000" height="auto"/></p>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
