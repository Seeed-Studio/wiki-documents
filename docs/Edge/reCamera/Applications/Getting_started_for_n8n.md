---
description: Provide a tutorial for integrating reCamera with n8n. N8N is installed in the virtual machine.
title: Getting started for n8n
keywords:
  - reCamera
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/n8n_11.png
slug: /getting_started_for_n8n_with_recamera
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
---
# Getting started for n8n with reCamera

## Introduction

reCamera is an intelligent camera that supports local visual recognition and can generate detection results in real time on the device. n8n is an open-source automation workflow tool. Users can quickly build various notification, storage or application linkage processes through a visual interface. This tutorial introduces how to push the information recognized by reCamera in text form to n8n, enabling it to serve as the trigger source for the workflow. In this way, users can easily integrate camera detection events into their own automation systems, achieving basic functions such as message alerts, log recording, and third-party service calls, laying the foundation for more complex business logic in the future.

## Hardware Preparation

One reCamera (it can be any of the 2002 series, HQ POE version, or pan-tilt version, but note that the POE version does not have WiFi functionality and requires a switch with POE function to be connected in the same network segment)  
one computer (A virtual machine configured with Ubuntu 22.04, used for installing n8n)

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. Install n8n (in virtual machine)

### (1) Install Docker

```bash
sudo apt update
sudo apt install -y docker.io
```

After the installation is complete, enable and set the boot

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Verify that the installation was successful:

```bash
docker --version
```

If you see something like:

```nginx
Docker version 28.2.2, build ...
```

### (2) Let the current user use docker directly (without sudo every time)

```bash
sudo usermod -aG docker $USER
```

Then exit the current terminal and log in again.

```bash
docker ps
```

### (3) Run n8n container

```bash
sudo docker run -it --rm \
  --name n8n \
  --network host \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

The first run will automatically pull n8n image, about several hundred MB, a little long

### (4) Access n8n

Open a Firefox browser in the virtual machine and enter:

```bash
http://localhost:5678
```

You can enter the n8n interface to create an account.

## 2. Configure n8n

### (1) Create a "Webhook" node to receive ReCamera data

Click Personal-Create workflow

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_1.png" /></div>

Click the plus sign-search box to enter "webhook"-click the first "Webhook" node

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_2.png" /></div>

Now we have entered the configuration interface. Here we need to modify two places. First, select "HTTP Method" as "POST". Then, modify "Path" as any name. Here I will take "recamera_detect" as an example.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_3.png" /></div>

After this step, he has automatically saved it. At this time, click "Back to canvas" in the upper left corner to return to the main interface and prepare to create the next node.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_4.png" /></div>

### (2) Create "Code" node to process received data

Click the plus sign-enter "code" in the search box-click the first "Code" node

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_5.png" /></div>

Then select "Code in JavaScript"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_6.png" /></div>

Replace the original content with the following code:

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_7.png" /></div>

Click "Back to canvas" in the upper left corner to return to the main interface

## 3. Configure Node-Red

first open the n8n interface of the virtual machine, double-click the "Webhook" node you configured earlier, enter the configuration interface of the Webhook node, and then click "Production URL" to copy the following "POST" address

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_8.png" /></div>

The previous configuration steps are the same as those of [Home Assistant](https://wiki.seeedstudio.com/getting_started_for_home_assistant_with_recamera/), except that when configuring the "http request" node, the URL address needs to be modified, that is, the POST address you just copied in the virtual machine, and then the localhost address needs to be modified to your virtual machine IP address.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_9.png" /></div>

View Virtual Machine IP

```bash
ifconfig
```

:::note
Please remember! Make sure to connect Recamera to the network!!! Otherwise, communication will not be possible.
:::

## 4. Open Active and enter the Executions interface to view the message

Click the "Inactive" switch in the upper right corner to turn it into green Active, then click "Executions"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_10.png" /></div>

At this time, you will see that there are many timestamps on the left that have been refreshing. If you see that the timestamps have been refreshing, it means that your reCamera data has been connected to the n8n platform!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_11.png" /></div>

If you want to view the detection content of a certain time, you can double-click that timestamp, and then double-click "Code in JavaScript" to view the OUTPUT on the right.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_12.png" /></div>

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
