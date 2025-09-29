---
description: 使用 reComputer-R1000 Raspberry Pi 上的 Node-RED 高效管理和自动化您的 IIoT 解决方案。无缝集成来自各种工业协议的数据，实时可视化，并通过这个强大、用户友好的平台提升运营效率。
title: reComputer-R1000 Node Red 入门指南
keywords:
  - Edge Controller
  - reComputer
  - IoT
  - Node-Red
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_getting_started_node_red
last_update:
  date: 07/01/2024
  author: Kasun Thushara
---
## 介绍

[Node-RED](https://nodered.org/) 是一个多功能编程工具，旨在无缝连接硬件设备、API 和在线服务。其基于浏览器的流程编辑器简化了使用调色板中各种节点将不同组件连接在一起的过程。凭借基于 Node.js 构建的轻量级运行时，它高效利用 Raspberry Pi 和其他低成本硬件，使其非常适合边缘网络应用。

## 开始使用

在开始此项目之前，您可能需要按照此处描述的方式提前准备硬件和软件。

### 硬件准备

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a></div></td>
    </tr>
  </table>
</div>

### 软件准备

reComputer-R1000 预装了 Raspberry Pi OS。如果您是第一次启动此设备，请阅读我们的[入门指南](https://wiki.seeedstudio.com/cn/recomputer_r/) Wiki

## 在 reComputer-R1000 上安装 Node Red

- **步骤 01**：SSH 连接到 reComputer-R1000
如果您使用 Windows，请打开 PowerShell，或者如果您使用其他系统，请打开终端应用程序，然后输入 ssh `{USERNAME}@{RECOMPUTER_IP_ADDRESS}`。例如

```sh
ssh pi@192.168.43.100
```

然后请输入您在 reComputer 上设置的操作系统的 `{USER}` 密码。

- **步骤 02**：安装 Node-RED

Node-RED 团队为我们准备了一个一体化脚本，您只需在 reComputer 原生终端应用程序（通过 VNC 查看器）或上述步骤中的 SSH Shell 中输入以下命令即可。

```sh
bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
```

在安装结束时，提示符会询问几个问题，您需要回答这些问题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 03**：设置 Node-Red
使用一体化脚本完成安装后，您可以相应地使用以下命令：

使用 `node-red-start`                   启动 Node-RED<br />
使用 `node-red-stop`                    停止 Node-RED <br />
使用 `node-red-start`                   再次启动 Node-RED <br />
使用 `node-red-log`                     查看最近的日志输出 <br />
使用 `sudo systemctl enable nodered.service`在每次启动时自动启动 Node-RED <br />
使用 `sudo systemctl disable nodered.service`禁用启动时自动启动 <br />

- **步骤 04**：访问 Node-RED 编辑器

现在请打开您喜欢的网页浏览器并输入如下所述的网址：

- 选项 1：如果网页浏览器通过 VNC 在您的 reComputer 上本地运行，请使用 `http://127.0.0.1:1880`。

- 选项 2：如果网页浏览器在主机计算机上远程运行，请使用 `http://{reComputer_IP_ADDRESS}:1880`，请将 `{reComputer_IP_ADDRESS}` 替换为 reComputer 的 IP 地址。

## 熟悉 Node-RED

现在您应该看到与下图类似的结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/noderedinterface.PNG" style={{width:600, height:'auto'}}/></div>

### Node-RED 编辑器概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/node-editor.png" style={{width:600, height:'auto'}}/></div>

- **节点面板**：用户可以浏览和从调色板中选择节点以添加到其流程中的区域。
- **流程编辑器**：用户可视化连接节点以创建其流程的工作区。
- **配置面板**：用户可以配置所选节点的属性和设置的部分。
- **设置按钮**：允许用户访问和调整 Node-RED 编辑器的各种设置和首选项。
- **部署按钮**：使用户能够将其流程部署到 Node-RED 运行时，使其处于活动和可操作状态。

### 安装节点

有几个选项：一个是使用命令行，另一个是使用 Node-RED 编辑器。在这里，我将解释最简单的方法，即使用 Node-RED 编辑器。

- **步骤 1**：点击位于右上角的**三条横线**图标的设置按钮，然后选择管理调色板

- **步骤 2**：在调色板选项卡中点击安装选项卡

- **步骤 3**：在节点搜索栏中搜索节点并点击安装按钮进行安装

- **步骤 4**：从下拉警告窗口中点击**安装**按钮确认安装

- **步骤 5**：等待安装完成，您应该看到安装按钮变为已安装。

- **步骤 6**：您应该在侧边栏中看到已安装的节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

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
