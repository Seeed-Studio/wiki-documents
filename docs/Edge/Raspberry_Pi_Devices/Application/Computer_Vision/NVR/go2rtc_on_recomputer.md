---
description: This wiki demonstrates how to use go2rtc on recomputer. 
title: go2rtc on reComputer
keywords:
  - reComputer
  - go2rtc
  - NVR
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif
slug: /go2rtc_on_recomputer
last_update:
  date: 11/05/2025
  author: Jiahao

no_comments: false # for Disqus
---

# go2rtc on reComputer

## Introduction

[go2rtc](https://github.com/AlexxIT/go2rtc) is an open-source WebRTC framework designed to facilitate real-time media streaming over the internet. It is developed by the XTLS team and aims to combine WebRTC with other media protocols like RTSP, RTMP, and HLS for efficient real-time video and audio transmission.

[WebRTC](https://github.com/webrtc) (Web Real-Time Communication) is a widely used protocol for establishing peer-to-peer connections and enabling real-time media exchange such as video calls, live broadcasts, and other real-time applications. go2rtc makes it easier to implement WebRTC in environments where different media protocols need to be converted into WebRTC streams for low-latency and scalable transmission.

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
   <td><div class="get_one_now_container" styl  e={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Download and run go2rtc

### Update system

Please use the following command to run.

```bash
sudo apt update
sudo apt upgrade -y
```

### Download go2rtc

Please use the following command to run.

```bash
wget https://nightly.link/AlexxIT/go2rtc/workflows/build/master/go2rtc_linux_arm64.zip
tar -xvzf go1.24.0.linux-arm64.tar.gz
chmod +x go2rtc_linux_arm64
```

### Create go2rtc.yaml

Please use the following command to run.

```bash 
nano go2rtc.yaml
```

Please fill in the following configuration with your actual IP address.

```bash
streams:
  stream1:
    url: rtsp://admin:passw0rd@10.1.1.200:554/cam/realmonitor?channel=1&subtype=1
    protocol: rtsp
    codec: h264

server:
  api: :1984 
  rtsp: :8554  
  webrtc: :8555  
```

### Run go2rtc

Please use the following command to run.

```bash
 ./go2rtc_linux_arm64 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/run_go2rtc.png" alt="pir" width="1000" height="auto"/></p>

Open port `1984` on the host, and click the `Stream`button.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.png" alt="pir" width="1000" height="auto"/></p>

## Result

Once we have configured everything, we can view the live feed from the current camera.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif" alt="pir" width="1000" height="auto"/></p>

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
