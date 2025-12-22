---
description: This wiki demonstrates how to deploy moonfire nvr on recomputer. 
title: iSpy on reComputer
keywords:
  - reComputer
  - iSpy
  - NVR
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_5.webp
slug: /ispy_on_recomputer
last_update:
  date: 11/10/2025
  author: Jiahao

no_comments: false # for Disqus
---

# iSpy on reComputer

## Introduction

[iSpy](https://www.ispyconnect.com/) is an open-source video surveillance application, designed to work with consumer webcams and IP cameras. It was originally launched in 2007 and has evolved into a full-featured monitoring solution.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/ispy_1.png" alt="pir" width="800" height="auto"/></p>


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

## Download iSpy

### Update system

Please use the following command to run.

```bash
sudo apt update
sudo apt upgrade -y
```

### Download docker and docker compose

Please use the following command to install docker.

```bash
wget https://get.docker.com -O get-docker.sh
chmod +x 
sudo sh get-docker.sh
sudo systemctl start docker
sudo systemctl enable docker
docker --version
```
The result is shown as below:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/docker_install.png" alt="pir" width="800" height="auto"/></p>


Please use the following command to install docker compose.

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | jq -r .tag_name)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

The result is shown as below:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/moonfire/docker_compose_version.png" alt="pir" width="800" height="auto"/></p>


### Create `docker-compose.yaml` 


Please use the following command to create `docker-compose.yaml`.

```bash
cd ~ && nano docker-compose.yaml
```

Then input the following content into the `YAML` file.

```bash
services:
  agentdvr:
    image: mekayelanik/ispyagentdvr:latest
    container_name: AgentDVR
    restart: unless-stopped
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
      - AGENTDVR_WEBUI_PORT=8090
    ports:
      - "8090:8090"
      - "3478:3478/udp"
      - "50000-50100:50000-50100/udp"
    volumes:
      - /appdata/AgentDVR/config/:/AgentDVR/Media/XML/
      - /appdata/AgentDVR/media/:/AgentDVR/Media/WebServerRoot/Media/
      - /appdata/AgentDVR/commands:/AgentDVR/Commands/
```

Please use the following command to create necessary folder.

```bash
sudo mkdir -p /appdata/AgentDVR/config /appdata/AgentDVR/media /appdata/AgentDVR/commands
```

## Configure iSpy

### Run docker compose

Please use the following command to init database.

```bash
sudo docker compose up -d
```

The result is shown as below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/ispy_docker.png" alt="pir" width="800" height="auto"/></p>


### Configure

Open the `localhost:8090` port:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/ispy_windows.png" alt="pir" width="800" height="auto"/></p>

Add a camera by following the steps below：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_1.png" alt="pir" width="800" height="auto"/></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_2.png" alt="pir" width="800" height="auto"/></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_3.png" alt="pir" width="800" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_4.png" alt="pir" width="800" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/config_5.png" alt="pir" width="800" height="auto"/></p>

## Result

Once we have configured everything, we can view the live feed from the current camera.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/ispy/result.gif" alt="pir" width="800" height="auto"/></p>


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
