---
description: This wiki demonstrates how to deploy facial recognition on the reComputer. 
title: Deploy Facial Recognition on reComputer
keywords:
  - Edge
  - reComputer AI 
  - face recognition
  - hailo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /facial_recognition_on_the_recomputer
last_update:
  date: 11/18/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Deploy Facial Recognition on reComputer

## Introduction

This wiki will guide you through using a reComputer equipped with a `Hailo` NPU to implement real-time facial recognition. In this project, we use `SCRFD-10G` for efficient face detection, capable of quickly and accurately detecting faces of various scales, including small faces, ensuring real-time performance. At the same time, we employ the `ArcFace-MobileFaceNet` model for lightweight face recognition, which leverages the ArcFace loss function to enhance recognition accuracy and enable efficient identity verification.

## Prepare Hardware

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
sudo apt-get -y install libblas-dev nlohmann-json3-dev
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
cd ~ && git clone https://github.com/Seeed-Projects/hailo-apps-infra
cd hailo-apps-infra
./install.sh
source venv_hailo_apps/bin/activate
```

### Add your photo

```bash
cd /resources/face_recon/train
# change name to the name of the person to be recognized
mkdir name
```

<div style={{ color: 'red', fontWeight: 'bold' }}>
  Note: Place the photo of the person to be recognized into the folder that was just created.
</div>

### Add information to the database

```bash
cd ~/hailo-apps-infra/hailo_apps/hailo_app_python/apps/face_recognition
python face_recognition.py --mode train
```

The right result show as bellow:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/face/face_1.png" alt="pir" width={1000} height="auto"/></p>

### Run the project

Input the command below you will see a face recognition demo:

```bash
 python face_recognition.py --input usb
```

## Result

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/wcT_ZYsRbAE" title="Facial Recognition On Raspberry Pi CM5 reComputer with Hailo-8 NPU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
