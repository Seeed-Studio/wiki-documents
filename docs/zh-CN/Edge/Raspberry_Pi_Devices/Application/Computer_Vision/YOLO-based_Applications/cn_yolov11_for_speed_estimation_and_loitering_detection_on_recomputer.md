---
description: 本 wiki 演示如何使用 YOLOv11 进行速度估计和徘徊检测。
title: YOLOv11 速度估计和徘徊检测
keywords:
  - Edge
  - reComputer AI 
  - YOLOv11
  - hailo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/yolov11_for_speed_estimation_and_loitering_detection_on_recomputer
last_update:
  date: 12/16/2025
  author: Jiahao

no_comments: false # for Disqus
---

# YOLOv11 速度估计和徘徊检测

## 简介

[YOLOv11](https://github.com/ultralytics/ultralytics) 是"You Only Look Once"（YOLO）实时目标检测模型系列的最新和最先进版本，由 Ultralytics 于 2024 年末发布。

本 wiki 是一个针对 Hailo AI 加速器优化的综合实时目标检测、跟踪和速度估计系统，使用 yolov11。该项目能够高效检测目标（重点关注人员和车辆），同时具备跟踪和速度计算功能。

## 准备硬件

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
              <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
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

这是因为树莓派上的时间设置不正确，您需要使用以下命令手动设置树莓派的时间：

```
# This command only you can connect google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```

设置树莓派时间后，您可以更新您的树莓派。
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

在树莓派 5 上打开终端，输入以下命令安装 Hailo 软件。

```bash
sudo apt install hailo-all
sudo reboot
```

### 检查软件和硬件

在树莓派 5 上打开终端，输入以下命令检查 hailo-all 是否已安装。

```bash
hailortcli fw-control identify
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

在树莓派 5 上打开终端，输入以下命令检查 hailo-8L 是否已连接。

```bash
lspci | grep Hailo
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## 运行项目

### 安装项目

```bash
cd ~ && git clone https://github.com/Seeed-Projects/YOLOv11-Hailo-Tracker.git
cd YOLOv11-Hailo-Tracker
```

### 准备环境

```bash
python -m venv .env --system-site-packages
source .env/bin/activate
pip install -r requirements.txt
```

### 运行项目

访问 `localhost:5000` 进入前端并配置设置。

```bash
 python run_api.py
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/yolov11/image.png" alt="pir" width={1000} height="auto"/></p>

## 结果

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/cscCVUAidGo" title="YOLOv11n on Raspberry Pi reComputer for Loitering Detection and Speed Estimation (Hailo-8)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
