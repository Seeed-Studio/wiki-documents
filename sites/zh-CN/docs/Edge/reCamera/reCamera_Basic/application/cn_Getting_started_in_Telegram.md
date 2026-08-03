---
description: 提供一个将 reCamera 与 Telegram 集成的教程，依赖于 n8n。
title: 在 Telegram 中快速上手
keywords:
  - reCamera
  - Telegram
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/Telegram_24.png
slug: /getting_started_in_Telegram_work_with_recamera_bak
sku: 102991896, 108990119, 100029708
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
createdAt: '2025-11-20'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/application/getting_started_in_Telegram_work_with_recamera_bak/
---


# reCamera n8n Telegram 联动

## 介绍

在众多物联网应用场景中，设备之间的信息交互与自动处理，往往比单纯的识别能力更能体现系统的价值。reCamera 提供稳定的本地 AI 视觉识别能力，而 n8n 则提供灵活的可视化编排平台，用于数据处理和流程自动化。当两者结合时，检测信息不再局限于本地设备，而是可以成为可进一步利用的事件源。

本教程介绍一种简单高效的集成方式：将 reCamera 的识别结果以文本形式推送到 n8n，然后由 n8n 通过 API 自动发送到用户自建的 Telegram 个人 Bot。通过这一链路，任何识别事件都可以即时推送到移动设备，从而构建一个跨多设备、多平台的轻量级通知系统。整个过程无需编写复杂代码，只需完成必要的节点配置即可快速实现目标。

## 硬件准备

一台 reCamera（可以是 2002 系列、HQ POE 版本或云台版本中的任意一款，但需注意 POE 版本不具备 WiFi 功能，需要通过带 POE 功能的交换机接入同一网段）  
一台电脑（配置 Ubuntu 22.04 的虚拟机，用于安装 n8n）

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera 云台版</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
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

安装完成后，启用并设置为开机自启

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

验证安装是否成功：

```bash
docker --version
```

如果你看到类似下面的内容：

```nginx
Docker version 28.2.2, build ...
```

### (2) 让当前用户可以直接使用 docker（每次无需 sudo）

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

首次运行会自动拉取 n8n 镜像，大约几百 MB，耗时会稍长一些

### (4) 访问 n8n

在虚拟机中打开 Firefox 浏览器并输入：

```bash
http://localhost:5678
```

即可进入 n8n 界面创建账号。

## 2. 配置 n8n

### (1) 创建 “Webhook” 节点以接收 reCamera 数据

点击 Personal - Create workflow

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_1.png" /></div>

点击加号——在搜索框中输入 “webhook”——点击第一个 “Webhook” 节点

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_2.png" /></div>

现在我们已经进入配置界面，这里需要修改两个地方。首先，将 “HTTP Method” 选择为 “POST”。然后，将 “Path” 修改为任意名称，这里我以 “recamera_detect” 为例。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_3.png" /></div>

完成这一步后，它已经自动保存。此时点击左上角的 “Back to canvas” 返回主界面，准备创建下一个节点。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_4.png" /></div>

### (2) 创建 “Code” 节点处理接收到的数据

点击加号——在搜索框中输入 “code”——点击第一个 “Code” 节点

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_5.png" /></div>

然后选择 “Code in JavaScript”

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_6.png" /></div>

将原有内容替换为以下代码：

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_7.png" /></div>

点击左上角 “Back to canvas” 返回主界面

## 3. 配置 Telegram

### (1) 创建 Telegram Bot 并获取其 API

打开 Telegram 并搜索 “BotFather”

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_8.png" /></div>

创建你的 Bot，填写机器人名称和用户名，然后点击 “CREATE BOT”

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_9.png" /></div>

随后会出现这个界面，在钥匙串图标后面有一串字符，这就是你创建的 Bot 的 API。点击 “Copy”，后续会用到。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_10.png" /></div>

### (2) 搜索 userinfobot 获取你的个人 Chat ID

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_11.png" /></div>

点击进入后，点击右上角的 “Start”。此时会返回一条包含你 ID 的消息，记住这个 ID，后面会用到。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_12.png" /></div>

### (3) 继续配置 n8n，添加第三个节点

点击加号——在搜索框中输入 “telegram”——点击第一个 “Telegram” 节点

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_13.png" /></div>

点击后继续输入 “message”，选择 “Send a text message”

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_14.png" /></div>

进入节点后，选择 “Create new credentila”

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_15.png" /></div>

然后将刚才复制的 Bot 的 API 粘贴到 “Access Token” 中，并点击右上角的 “Save”

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_16.png" /></div>

点击 “Save” 后，系统会验证该 API 是否存在，如果一切正确，会出现 “Connection tested successfully” 字样，此时点击右上角的 Exit。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_17.png" /></div>

然后填写你之前获取到的个人 Chat ID。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_18.png" /></div>

然后填写 “Text”：

```
当前人数：{{ $json["peopleCount"] }}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_19.png" /></div>

点击左上角 “Back to canvas” 返回主界面

## 4. 配置 Node-Red

首先打开虚拟机中的 n8n 界面，双击之前配置好的 “Webhook” 节点，进入 Webhook 节点的配置界面，然后点击 “Production URL”，复制下面的 “POST” 地址

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_20.png" /></div>

前面的配置步骤与 [Home Assistant](https://wiki.seeedstudio.com/cn/getting_started_for_home_assistant_with_recamera/) 相同，只是在配置 “http request” 节点时，需要修改 URL 地址，即刚刚在虚拟机中复制的 POST 地址，然后将其中的 localhost 修改为你虚拟机的 IP 地址

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_21.png" /></div>

查看虚拟机 IP

```bash
ifconfig
```

:::note
请记住！一定要确保 Recamera 已连接到网络！！！否则将无法通信。
:::

## 5. 打开 Active 并进入 Executions 界面查看消息

点击右上角的 “Inactive” 开关，将其切换为绿色的 Active，然后点击 “Executions”

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_22.png" /></div>

此时，你会看到左侧有许多时间戳在不断刷新。如果你看到时间戳一直在刷新，就说明你的 reCamera 数据已经成功连接到 n8n 平台了！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_23.png" /></div>

然后检查你的 Telegram，应该会有很多消息提醒，此时，你已经成功将 reCamera 的消息推送到 Telegram 上了！！！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_24.png" /></div>

如果你想查看某个时间点的检测内容，可以双击该时间戳，然后双击 "Code in JavaScript"，即可在右侧查看 OUTPUT。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_25.png" /></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
