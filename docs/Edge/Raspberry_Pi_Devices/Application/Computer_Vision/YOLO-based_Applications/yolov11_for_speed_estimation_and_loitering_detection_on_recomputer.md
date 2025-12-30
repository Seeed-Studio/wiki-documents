---
description: This wiki demonstrates how to uses YOLOv11 for speed estimation and loitering detection.. 
title: YOLOv11 for Speed Estimation and Loitering Detection
keywords:
  - Edge
  - reComputer AI 
  - YOLOv11
  - hailo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /yolov11_for_speed_estimation_and_loitering_detection_on_recomputer
last_update:
  date: 12/16/2025
  author: Jiahao

no_comments: false # for Disqus
---

# YOLOv11 for Speed Estimation and Loitering Detection

## Introduction

[YOLOv11](https://github.com/ultralytics/ultralytics) is the latest and most advanced version of the "You Only Look Once" (YOLO) family of real-time object detection models，it was released in late 2024 by Ultralytics.

This wiki is a comprehensive real-time object detection, tracking, and speed estimation system optimized for Hailo AI accelerators use yolov11. This project enables efficient detection of objects (with focus on persons and vehicles) with simultaneous tracking and speed calculation capabilities.

## Prepare Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer AI Industrial R2000</th>
        <th>reComputer AI R2000</th>
        <th>reComputer Industrial R2045</th>
        <th>reComputer Industrial R2135</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
              <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
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


<div style={{ color: 'red', fontWeight: 'bold' }}>
  Note: You need a USB camera as the input.
</div>

## Install Hailo Software & Verify Installation

### update the system

```bash
sudo apt update
sudo apt full-upgrade
```

:::note
Sometimes you may encounter the following issues during updates.

```
Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
Get:2 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
Get:3 http://deb.debian.org/debian bookworm-updates InRelease [55.4 kB]
Get:4 http://archive.raspberrypi.com/debian bookworm InRelease [39.0 kB]
Reading package lists... Done                                   
E: Release file for http://deb.debian.org/debian/dists/bookworm/InRelease is not valid yet (invalid for another 58d 8h 26min 35s). Updates for this repository will not be applied.
E: Release file for http://deb.debian.org/debian-security/dists/bookworm-security/InRelease is not valid yet (invalid for another 84d 18h 23min 59s). Updates for this repository will not be applied.
E: Release file for http://archive.raspberrypi.com/debian/dists/bookworm/InRelease is not valid yet (invalid for another 84d 13h 13min 5s). Updates for this repository will not be applied.
E: Release file for http://deb.debian.org/debian/dists/bookworm-updates/InRelease is not valid yet (invalid for another 85d 0h 52min 29s). Updates for this repository will not be applied. 
```

This is because the time on the Raspberry Pi is set incorrectly, and you need to manually set the time on the Raspberry Pi with command below:

```
# This command only you can connect google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```

After set your raspberry time, you can update your raspberry.
:::

### Set pcie to gen2/gen3(gen3 is faster than gen2)

Add following text to ```/boot/firmware/config.txt```

```bash
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
If you want to use gen2, please comment dtparam=pciex1_gen=3
:::

### Install hailo-all and reboot

Open terminal on the Raspberry Pi5, and input command as follows to install Hailo software.

```bash
sudo apt install hailo-all
sudo reboot
```

### Check Software and Hardware

Open terminal on the Raspberry Pi5, and input command as follows to check if hailo-all have been installed.

```bash
hailortcli fw-control identify
```

The right result show as bellow:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Open terminal on the Raspberry Pi5, and input command as follows to check if hailo-8L have been connected.

```bash
lspci | grep Hailo
```

The right result show as bellow:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## Run Project

### Install Project

```bash
cd ~ && git clone https://github.com/Seeed-Projects/YOLOv11-Hailo-Tracker.git
cd YOLOv11-Hailo-Tracker
```

### Prepare the environment

```bash
python -m venv .env --system-site-packages
source .env/bin/activate
pip install -r requirements.txt
```

### Run the project

Access `localhost:5000` to reach the frontend and configure settings.

```bash
 python run_api.py
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/yolov11/image.png" alt="pir" width={1000} height="auto"/></p>

## Result

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/cscCVUAidGo" title="YOLOv11n on Raspberry Pi reComputer for Loitering Detection and Speed Estimation (Hailo-8)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
