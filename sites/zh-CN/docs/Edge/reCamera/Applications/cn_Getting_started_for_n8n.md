---
description: 提供将 reCamera 与 n8n 集成的教程。N8N 安装在虚拟机中。
title: n8n 入门指南
keywords:
  - reCamera
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/n8n_11.png
slug: /cn/getting_started_for_n8n_with_recamera
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
---
# reCamera 的 n8n 入门指南

## 简介

reCamera 是一款智能摄像头，支持本地视觉识别，可在设备上实时生成检测结果。n8n 是一个开源的自动化工作流工具。用户可以通过可视化界面快速构建各种通知、存储或应用联动流程。本教程介绍如何将 reCamera 识别的信息以文本形式推送到 n8n，使其能够作为工作流的触发源。这样，用户可以轻松地将摄像头检测事件集成到自己的自动化系统中，实现消息警报、日志记录和第三方服务调用等基本功能，为未来更复杂的业务逻辑奠定基础。

## 硬件准备

一台 reCamera（可以是 2002 系列、HQ POE 版本或云台版本中的任何一种，但请注意 POE 版本没有 WiFi 功能，需要连接具有 POE 功能的交换机在同一网段内）  
一台计算机（配置了 Ubuntu 22.04 的虚拟机，用于安装 n8n）

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera 云台</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. 安装 n8n（在虚拟机中）

### (1) 安装 Docker

```bash
sudo apt update
sudo apt install -y docker.io
```

安装完成后，启用并设置开机启动

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

验证安装是否成功：

```bash
docker --version
```

如果您看到类似以下内容：

```nginx
Docker version 28.2.2, build ...
```

### (2) 让当前用户直接使用 docker（无需每次使用 sudo）

```bash
sudo usermod -aG docker $USER
```

然后退出当前终端并重新登录。

```bash
docker ps
```

### (3) 运行 n8n 容器

```bash
sudo docker run -it --rm \
  --name n8n \
  --network host \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

首次运行将自动拉取 n8n 镜像，大约几百 MB，需要一点时间

### (4) 访问 n8n

在虚拟机中打开 Firefox 浏览器并输入：

```bash
http://localhost:5678
```

您可以进入 n8n 界面创建账户。

## 2. 配置 n8n

### (1) 创建 "Webhook" 节点以接收 ReCamera 数据

点击 Personal-Create workflow

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_1.png" /></div>

点击加号-在搜索框中输入 "webhook"-点击第一个 "Webhook" 节点

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_2.png" /></div>

现在我们进入了配置界面。这里我们需要修改两个地方。首先，将 "HTTP Method" 选择为 "POST"。然后，将 "Path" 修改为任意名称。这里我以 "recamera_detect" 为例。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_3.png" /></div>

完成这一步后，它已经自动保存了。此时，点击左上角的 "Back to canvas" 返回主界面，准备创建下一个节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_4.png" /></div>

### (2) 创建 "Code" 节点以处理接收到的数据

点击加号-在搜索框中输入 "code"-点击第一个 "Code" 节点

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_5.png" /></div>

然后选择 "Code in JavaScript"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_6.png" /></div>

将原始内容替换为以下代码：

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_7.png" /></div>

点击左上角的 "Back to canvas" 返回主界面

## 3. 配置 Node-Red

首先打开虚拟机的 n8n 界面，双击您之前配置的 "Webhook" 节点，进入 Webhook 节点的配置界面，然后点击 "Production URL" 复制以下 "POST" 地址

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_8.png" /></div>

之前的配置步骤与 [Home Assistant](https://wiki.seeedstudio.com/cn/getting_started_for_home_assistant_with_recamera/) 的配置步骤相同，只是在配置 "http request" 节点时，需要修改 URL 地址，即您刚才在虚拟机中复制的 POST 地址，然后需要将 localhost 地址修改为您的虚拟机 IP 地址。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_9.png" /></div>

查看虚拟机 IP

```bash
ifconfig
```

:::note
请记住！确保将 Recamera 连接到网络！！！否则无法进行通信。
:::

## 4. 打开 Active 并进入 Executions 界面查看消息

点击右上角的 "Inactive" 开关将其变为绿色的 Active，然后点击 "Executions"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_10.png" /></div>

此时您会看到左侧有许多时间戳在不断刷新。如果您看到时间戳在不断刷新，说明您的 reCamera 数据已经连接到 n8n 平台！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_11.png" /></div>

如果您想查看某个时间的检测内容，可以双击该时间戳，然后双击 "Code in JavaScript" 查看右侧的 OUTPUT。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_12.png" /></div>

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
