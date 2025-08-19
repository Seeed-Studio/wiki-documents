---
description: 本文档演示如何使用 YOLOv8 的姿态估计功能来控制灯光。
title: 基于姿态的灯光控制：结合 Node-Red 和 Raspberry Pi 的 AIkit
keywords:
  - Edge
  - reComputer r1000
  - 目标检测
  - AI kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/pose_based_light_control_with_nodered_and_rpi_with_aikit
last_update:
  date: 07/26/2024
  author: Jiahao

no_comments: false # 用于 Disqus
---

# 基于姿态的灯光控制：结合 Node-Red 和 Raspberry Pi 的 AIkit

## 简介
本文档将指导您如何使用 AI 套件运行 YOLOv8，利用 YOLOv8 监测您的姿态，并最终根据您的姿态控制灯光。在本项目中，USB 摄像头捕捉您的姿态，YOLOv8n 在 [AI 套件](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) 和 [reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html) 上运行以检测您的姿态。处理后的视频会实时通过 [gstreamer](https://gstreamer.freedesktop.org/) 流式传输到 [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-CM4104032-p-5898.html)。同时，关节坐标通过 [mqtt](https://mqtt.org/) 发送到部署在 reComputer R1000 上的 [Node-RED](https://nodered.org/)。最后，Node-RED 流程根据关节坐标控制智能灯光。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/pose_control.jpeg" alt="pir" width={1000} height="auto"/></p>

## 准备硬件

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer r1000</th>
		<th>reTerminal DM</th>
		<th>Raspberry Pi AI Kit</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/k/sku114070262.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-CM4104032-p-5898.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 运行此项目

### 在 reComputer R1000 上

#### 第 1 步：安装 AI 套件

请参考[此 Wiki](https://wiki.seeedstudio.com/cn/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)，确保您已在 reComputer R1000 上安装 AI 套件。

#### 第 2 步：安装项目

使用以下命令下载项目：
```
git clone https://github.com/LJ-Hao/Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit.git && cd Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit
```

#### 第 3 步：运行姿态估计

编辑 ```pose_estimation.py``` 文件，将 ```mqtt_server``` 修改为您的 reTerminal DM 的 IP 地址，并将 ```Gstreamer pipeline``` 修改为您的 reTerminal DM 的 IP 地址。然后运行以下命令以启动姿态估计。

```
bash run.sh
```

#### 第 4 步：安装 Node-RED

安装 Node-RED。您可以使用以下一行命令下载 Node-RED：

```
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

#### 第 5 步：导入 flows.json

导入项目文件。点击右上角的 ```Settings => Import```，在新弹出的窗口中点击 ```select a file``` 选择文件，选择 ```flows.json```，最后点击 ```Import```。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_import.gif" alt="pir" width={1000} height="auto"/></p>

#### 第 6 步：下载所需控件

导入项目文件后，系统可能提示您的 Node-RED 缺少一些控件。您需要下载以下控件：

```
@bartbutenaers/node-red-rtsp-to-mjpeg
@chirpstack/node-red-contrib-chirpstack
@flowfuse/node-red-dashboard
node-bacnet-contrib-extended
node-red-contrib-buffer-parser
node-red-contrib-image-output
node-red-contrib-image-tools
node-red-contrib-modbus
node-red-contrib-msg-speed
node-red-contrib-multipart-stream-encoder
node-red-contrib-onvif
node-red-contrib-play-audio
node-red-dashboard
node-red-node-base64
node-red-node-mysql
node-red-node-pi-gpio
node-red-node-ping
node-red-node-serialport
node-red-node-smooth
node-red-sensecap-paas
node-red-node-random
```

以 ```node-red-node-random``` 为例，点击右上角的 ```Settings => Manage Palette```，在新窗口中选择 ```Install``` 栏目，输入 ```node-red-node-random```，最后点击 ```Install``` 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_dowload_patelle.gif" alt="pir" width={1000} height="auto"/></p>

#### 第 7 步：部署项目

点击右上角的部署按钮，系统将正常运行。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/nodered_deploy.png" alt="pir" width={1000} height="auto"/></p>

### 在 reTerminal DM 上

#### 第 1 步：在 reTerminal DM 上安装 gstreamer

使用以下命令下载 gstreamer：

```
sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio
```

#### 第 2 步：安装仓库

使用以下命令下载仓库：
```
git clone https://github.com/LJ-Hao/Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit.git && cd Pose-Based_Light_Control_with_Node-Red_and_Raspberry_Pi_with_AIkit
```

#### 第 3 步：运行视频接收器

```
python3 video_receiver.py
```

## 结果

我们在 YouTube 的直播中展示了这个演示，直播开始时间为 ```19:47```。您可以看到，当主持人拍手时，灯会亮起；当主持人挥手时，灯会熄灭。请欣赏这个演示：

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/v-S6_tH75NI" title="制作下一代设备：AI增强的树莓派用于现实世界应用" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>