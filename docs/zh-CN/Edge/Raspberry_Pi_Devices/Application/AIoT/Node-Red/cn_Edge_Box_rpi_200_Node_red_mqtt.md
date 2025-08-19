---
description: 使用 Node-RED 和 MQTT 的 Edge Box RPi 200
title: 使用 Node-RED 和 MQTT 的 Edge Box RPi 200
keywords:
  - 边缘控制器
  - Edge-Box
  - Node-Red
  - MQTT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edge-Box-Node-Red-MQTT
last_update:
  date: 2024/05/16
  author: Kasun Thushara
---

## 简介

**MQTT（消息队列遥测传输协议）** 是一种轻量级的消息协议，非常适合物联网（IoT）应用，因为它高效且对带宽需求低。它通过发布-订阅模型促进设备之间的通信，允许在不可靠的网络上进行实时数据交换。结合 Node-RED，集成 MQTT 可以实现边缘设备与中央服务器或其他设备之间的无缝连接，从而提高数据传输和处理效率。EdgeBox 边缘控制器通过原生支持 MQTT，允许直接在 EdgeBox 上安装 MQTT 代理，无需额外的硬件网关。这减少了系统复杂性，最小化了延迟，并提高了可靠性，因为数据可以在边缘处理和执行，而无需依赖外部中介，从而优化了物联网系统架构。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/noderedmqtt.png" style={{width:800, height:'auto'}}/></div>

## 入门

在开始此项目之前，您需要提前准备好硬件和软件，如下所述。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

Edge Box-200 随附预装的 Raspberry Pi OS。如果您是第一次启动此设备，请阅读我们的 [入门指南](https://wiki.seeedstudio.com/cn/Edge_Box_introduction/) Wiki。
我们还准备了一份 [Node-RED 入门指南](https://wiki.seeedstudio.com/cn/Edge-Box-Getting-Started-with-Node-Red/)。建议您在继续阅读本 Wiki 之前先查看该指南。

## 将 EdgeBox 设置为 MQTT 代理

- **步骤 01**：通过 SSH 或 VNC 连接到 EdgeBox RPi 200，并更新 Raspberry Pi OS：
```sh
sudo apt update
```
- **步骤 02**：然后，在设备上安装 Mosquitto。打开终端并执行以下命令：

```sh
sudo apt-get install mosquitto 
```

- **步骤 03**：接下来，通过在终端中执行以下命令安装 Mosquitto 命令行客户端：

```sh
sudo apt-get install mosquitto-clients -y
```
- **步骤 04**：完成 MQTT 代理安装后，需要调整其配置文件。默认配置文件位于 `/etc/mosquitto/mosquitto.conf`。要访问并修改此文件，请在终端中执行以下命令，使用 nano 编辑器：

```sh
sudo nano /etc/mosquitto/mosquitto.conf
```

在配置文件中，我们将通过以下行禁用默认配置设置：

```sh
include_dir /etc/mosquitto/conf.d
```
改为

```sh
#include_dir /etc/mosquitto/conf.d
```

接下来，我们将添加一条策略，禁止匿名用户连接到代理：

```sh
allow_anonymous false
```

为了安全地存储密码，我们将指定一个文件位置，添加以下内容：

```sh
password_file /etc/mosquitto/pwfile
```
然后，为了将监听端口设置为 1883，我们添加以下内容：

```sh
listener 1883
```
按下 Ctrl+S 保存修改，并使用 Ctrl+X 退出编辑器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttconfig.PNG" style={{width:800, height:'auto'}}/></div>

- **步骤 05**：为了创建用户名和密码以允许 MQTT 客户端访问，或重置现有密码，请在终端中使用以下命令：

```sh
sudo mosquitto_passwd -c /etc/mosquitto/pwfile <username>
```
生成用户名和密码后，重启 EdgeBox：

```sh
sudo reboot
```

您可以通过在终端中输入以下命令启动 Mosquitto 代理：

```sh
sudo systemctl start mosquitto
```
`sudo systemctl status mosquitto`   验证 Mosquitto 代理是否正在运行

`sudo systemctl stop mosquitto`     停止 Mosquitto 代理

`sudo systemctl restart mosquitto`  重启 Mosquitto 代理

`sudo systemctl enable mosquitto`   确保 Mosquitto 代理在系统启动时自动初始化

## 测试连接

- **步骤 01**：打开一个新的 SSH 会话或终端，运行以下命令订阅一个主题：

```sh
mosquitto_sub -h localhost -t test -u <USER> -P <PASSWORD>
```

- **步骤 02**：在另一个 SSH 会话或终端中，运行以下命令向同一主题发布一条消息。请确保正确输入用户名和密码。

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!" -u <USER> -P <PASSWORD>
```

您应该会在运行 `mosquitto_sub` 命令的第一个 SSH 会话窗口中看到消息 "Hello, world!"。请确保正确输入用户名和密码。



## 编辑流程

**MQTT 输入节点**

MQTT-in 节点订阅 MQTT 主题并从代理接收消息。当某个已订阅主题收到消息时，MQTT-in 节点会激活并将接收到的消息转发到流程中的后续节点以进行进一步处理。

- **步骤 01** 从 Node-RED 的调色板中拖放一个 MQTT-in 节点到画布上。
- **步骤 02** 双击 MQTT-in 节点以打开其配置对话框。
- **步骤 03** 在配置对话框中，配置以下字段：
  - **服务器**：确保代理的详细信息已预填充。如果没有，点击铅笔图标添加代理的 IP 地址、用户名和密码。
  - **操作**：选择是订阅单个主题还是使用动态订阅。对于动态订阅，可以使用函数节点或其他处理节点从消息负载中提取所需的 MQTT 主题。在这里，我们将订阅一个单一主题。
  - **主题**：输入您想要订阅的 MQTT 主题。
  - **QoS**：选择消息传递的所需服务质量 (QoS) 级别（0、1 或 2）。
  - **名称**：可选，为您的节点分配一个有意义的名称。

- **步骤 04** 点击“完成”以保存配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/connection.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttin.PNG" style={{width:600, height:'auto'}}/></div>

**MQTT 输出节点**

MQTT-out 节点（MQTT 输出）用于向 MQTT 主题发布消息。您可以配置要发布的主题和消息负载，这些负载可以是静态的，也可以是基于流程中其他节点的数据动态生成的。

- **步骤 01** 从 Node-RED 的调色板中拖放一个 MQTT-out 节点到画布上。

- **步骤 02** 双击 MQTT-out 节点以打开其配置对话框。

- **步骤 03** 在配置对话框中，点击服务器字段旁边的铅笔图标以创建新的代理配置。

- **步骤 04** 编辑 MQTT 代理设置，在服务器字段中添加代理地址、端口以及任何必要的身份验证凭据（例如用户名和密码）。

- **步骤 05** 点击“完成”以保存代理设置。

- **步骤 06** 在配置对话框中，配置以下字段：

  - **主题**：输入您想要发布消息的 MQTT 主题。
  
  - **QoS**：选择消息传递的所需服务质量 (QoS) 级别（0、1 或 2）。
  
  - **保留**：选择是否在代理上保留已发布的消息（true 或 false）。
  
  - **名称**：可选，为您的节点分配一个有意义的名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttout.PNG" style={{width:600, height:'auto'}}/></div>

- **步骤 07** 点击“完成”以保存配置。

我们使用 inject 节点以一定的时间间隔注入消息，同时使用 debug 节点检查已发布的消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debugnode.PNG" style={{width:600, height:'auto'}}/></div>

您可以查看以下图形化表示，以了解如何连接和配置 MQTT-in、MQTT-out、debug 和 inject 节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqtt-edgebox.gif" style={{width:800, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>