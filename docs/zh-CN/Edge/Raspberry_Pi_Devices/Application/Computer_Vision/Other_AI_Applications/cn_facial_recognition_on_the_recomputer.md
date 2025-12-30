---
description: 本 wiki 演示如何在 reComputer 上部署人脸识别。
title: 在 reComputer 上部署人脸识别
keywords:
  - Edge
  - reComputer AI 
  - face recognition
  - hailo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/facial_recognition_on_the_recomputer
last_update:
  date: 11/18/2025
  author: Jiahao

no_comments: false # for Disqus
---

# 在 reComputer 上部署人脸识别

## 简介

本 wiki 将指导您使用配备 `Hailo` NPU 的 reComputer 实现实时人脸识别。在这个项目中，我们使用 `SCRFD-10G` 进行高效的人脸检测，能够快速准确地检测各种尺度的人脸，包括小人脸，确保实时性能。同时，我们采用 `ArcFace-MobileFaceNet` 模型进行轻量级人脸识别，该模型利用 ArcFace 损失函数来提高识别精度并实现高效的身份验证。

## 准备硬件

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


<div style={{ color: 'red', fontWeight: 'bold' }}>
  注意：您需要一个 USB 摄像头作为输入。
</div>

## 安装 Hailo 软件并验证安装

### 更新系统

```bash
sudo apt update
sudo apt full-upgrade
```

:::note
有时您在更新过程中可能会遇到以下问题。

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

这是因为 Raspberry Pi 上的时间设置不正确，您需要使用以下命令手动设置 Raspberry Pi 上的时间：

```
# This command only you can connect google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```

设置好 raspberry 时间后，您可以更新您的 raspberry。
:::

### 设置 pcie 为 gen2/gen3（gen3 比 gen2 更快）

将以下文本添加到 ```/boot/firmware/config.txt```

```bash
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
如果您想使用 gen2，请注释掉 dtparam=pciex1_gen=3
:::

### 安装 hailo-all 并重启

在 Raspberry Pi5 上打开终端，输入以下命令来安装 Hailo 软件。

```bash
sudo apt install hailo-all
sudo apt-get -y install libblas-dev nlohmann-json3-dev
sudo reboot
```

### 检查软件和硬件

在 Raspberry Pi5 上打开终端，输入以下命令来检查 hailo-all 是否已安装。

```bash
hailortcli fw-control identify
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

在 Raspberry Pi5 上打开终端，输入以下命令来检查 hailo-8L 是否已连接。

```bash
lspci | grep Hailo
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## 运行项目

### 安装项目

```bash
cd ~ && git clone https://github.com/Seeed-Projects/hailo-apps-infra
cd hailo-apps-infra
./install.sh
source venv_hailo_apps/bin/activate
```

### 添加您的照片

```bash
cd /resources/face_recon/train
# change name to the name of the person to be recognized
mkdir name
```

<div style={{ color: 'red', fontWeight: 'bold' }}>
  注意：将要识别的人的照片放入刚刚创建的文件夹中。
</div>

### 将信息添加到数据库

```bash
cd ~/hailo-apps-infra/hailo_apps/hailo_app_python/apps/face_recognition
python face_recognition.py --mode train
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/face/face_1.png" alt="pir" width={1000} height="auto"/></p>

### 运行项目

输入以下命令，您将看到人脸识别演示：

```bash
 python face_recognition.py --input usb
```

## 结果

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/wcT_ZYsRbAE" title="Facial Recognition On Raspberry Pi CM5 reComputer with Hailo-8 NPU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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
