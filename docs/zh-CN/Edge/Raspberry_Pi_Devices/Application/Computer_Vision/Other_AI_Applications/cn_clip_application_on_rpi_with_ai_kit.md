---
description: 本wiki演示如何在配备AI套件的树莓派5上使用clip。
title: 在配备AI套件的树莓派上运行Clip应用
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/clip_application_on_rpi5_with_ai_kit
last_update:
  date: 09/27/2024
  author: Jiahao

no_comments: false # for Disqus
---

# 在配备AI套件的树莓派上运行Clip应用

## 介绍

[CLIP](https://github.com/openai/CLIP)（对比语言-图像预训练）是一个在各种（图像，文本）对上训练的神经网络。它可以通过自然语言指令来预测给定图像最相关的文本片段，而无需直接针对该任务进行优化，这类似于GPT-2和GPT-3的零样本能力。我们发现CLIP在ImageNet上的"零样本"性能与原始ResNet50相匹配，而无需使用原始的128万个标记样本中的任何一个，克服了计算机视觉中的几个主要挑战。

本wiki将教您如何在[树莓派5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)或[Recomputer r1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html)上部署clip应用，clip将在[AI套件](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html)上进行推理。

## 准备硬件

### 对于Recomputer R1000

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>树莓派AI套件</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 适用于 Raspberry Pi 5

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 安装 Hailo 软件并验证安装

### 更新系统

```
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

这是因为树莓派上的时间设置不正确，您需要使用以下命令手动设置树莓派上的时间：

```
# This command only you can connect google.com
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
```

设置好你的树莓派时间后，你可以更新你的树莓派。
:::

### 设置 pcie 为 gen2/gen3（gen3 比 gen2 更快）

将以下文本添加到 ```/boot/firmware/config.txt```

```
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

```
sudo apt install hailo-all
sudo apt-get -y install libblas-dev nlohmann-json3-dev
sudo reboot
```

### 检查软件和硬件

在 Raspberry Pi5 上打开终端，输入以下命令检查是否已安装 hailo-all。

```
hailortcli fw-control identify
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

在 Raspberry Pi5 上打开终端，输入以下命令检查 hailo-8L 是否已连接。

```
lspci | grep Hailo
```

正确的结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## 运行项目

### 安装项目

```
git clone https://github.com/hailo-ai/hailo-CLIP.git
cd hailo-CLIP
./install.sh
```

### 运行项目

输入以下命令，您将看到一个 clip 演示：

```
 source setup_env.sh
 clip_app --input demo
```

如果您想使用摄像头，在确保树莓派连接了您自己的摄像头后，您应该输入以下命令：

```
clip_app --input /dev/video0
```

## 结果

在下面显示的视频中，您可以看到当我输入"banana"时，CLIP模型识别出了香蕉，当我输入"apple"时，模型识别出了苹果。您只需要输入不同的单词，CLIP模型就会识别不同的物体。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
