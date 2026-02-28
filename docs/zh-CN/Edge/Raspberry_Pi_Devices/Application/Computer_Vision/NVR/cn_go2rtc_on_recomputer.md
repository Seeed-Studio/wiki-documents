---
description: 本 wiki 演示如何在 recomputer 上使用 go2rtc。
title: reComputer 上的 go2rtc
keywords:
  - reComputer
  - go2rtc
  - NVR
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif
slug: /cn/go2rtc_on_recomputer
sku: 113991274,E24010521,113991294,113991295,113991314,113991334,113991374,113991375,114993560,114993627,114993595,103990763,100020831,100045506,100080766,100026042,100099044,100061305,100091962,100097052,E2025091901,E2025091902
last_update:
  date: 11/05/2025
  author: Jiahao
no_comments: false # for Disqus
---

# reComputer 上的 go2rtc

## 简介

[go2rtc](https://github.com/AlexxIT/go2rtc) 是一个开源的 WebRTC 框架，旨在促进通过互联网进行实时媒体流传输。它由 XTLS 团队开发，旨在将 WebRTC 与其他媒体协议（如 RTSP、RTMP 和 HLS）结合，以实现高效的实时视频和音频传输。

[WebRTC](https://github.com/webrtc)（Web 实时通信）是一种广泛使用的协议，用于建立点对点连接并实现实时媒体交换，如视频通话、直播和其他实时应用。go2rtc 使在需要将不同媒体协议转换为 WebRTC 流以实现低延迟和可扩展传输的环境中实现 WebRTC 变得更加容易。

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
   <td><div class="get_one_now_container" styl  e={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 下载并运行 go2rtc

### 更新系统

请使用以下命令运行。

```bash
sudo apt update
sudo apt upgrade -y
```

### 下载 go2rtc

请使用以下命令运行。

```bash
wget https://nightly.link/AlexxIT/go2rtc/workflows/build/master/go2rtc_linux_arm64.zip
tar -xvzf go1.24.0.linux-arm64.tar.gz
chmod +x go2rtc_linux_arm64
```

### 创建 go2rtc.yaml

请使用以下命令运行。

```bash 
nano go2rtc.yaml
```

请使用您的实际 IP 地址填写以下配置。

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

### 运行 go2rtc

请使用以下命令运行。

```bash
 ./go2rtc_linux_arm64 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/run_go2rtc.png" alt="pir" width="1000" height="auto"/></p>

在主机上打开端口 `1984`，然后点击 `Stream` 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.png" alt="pir" width="1000" height="auto"/></p>

## 结果

一旦我们配置好所有内容，就可以查看当前摄像头的实时画面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/go2rtc/go2rtc.gif" alt="pir" width="1000" height="auto"/></p>

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
