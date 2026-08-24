---
description: 使用 MeshCore Remote Terminal 在 MeshCore 节点上监控/可视化/运行 mqtt 的指南。
title: MeshCore Remote Terminal 入门
keywords:
  - MeshCore
  - ESP32 MeshCore
  - MeshCore mqtt
  - MeshCore Starter Kit
  - MeshCore network
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/first.png
slug: /get_started_with_meshcore_remote_terminal
sku: 102010611,113110064
sidebar_position: 4
last_update:
  date: 4/20/2026
  author: Michelle Huang
createdAt: '2026-04-20'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/get_started_with_meshcore_remote_terminal/
---
本教程将介绍 [Remote Terminal for MeshCore](https://github.com/jkingsman/Remote-Terminal-for-MeshCore)（RemoteTerm），为 [MeshCore](https://meshcore.io/) 设备提供传输消息的接口。本教程将演示如何在 Raspberry Pi 上运行 RemoteTerm 的基础配置，使用 [Seeed XIAO ESP32S3 & SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) 作为配套射频模块，以及 [Raspberry Pi Zero 2W](https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html) 打造一套紧凑的一体化 MeshCore 解决方案，适合高级用户使用！

## RemoteTerm 简介

[RemoteTerm](https://github.com/jkingsman/Remote-Terminal-for-MeshCore) 是一个开源应用程序，运行在连接了 MeshCore 设备的服务器上。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/first.png" style={{width:900, height:'auto'}}/></div>

它为本地 MeshCore 网络提供接口，使同一局域网中的任意设备（即使离网运行）都可以通过无线电发送和接收消息。RemoteTerm 对移动端极为友好，并提供以下扩展能力：

- 缓存所有接收到的数据包
- 运行多个 Python 机器人
- 监控无限数量的联系人和频道 
- 通过网络或 VPN 远程访问你的无线电
- 将数据包转发到 MQTT、SQS、Apprise 等
- 可视化网状节点地图

## 安装与设置

### 硬件

<table align="center">
<tbody><tr>
<th>XIAO ESP32S3 & Wio-SX1262 套件</th>
<th>Raspberry Pi Zero 2W</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:600, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/ZERO2W.jpg" style={{width:600, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

除了主要硬件外，还需要以下配件：

- 16GB 或更大的 MicroSD 卡
- USB Micro 转 USB-C 线缆（用于连接无线电）
- USB Micro 转 USB-A 或 USB-C 线缆（用于为 Raspberry Pi 供电）
-  为 Raspberry Pi 提供稳定电源（推荐 5V 2.5A）

### 无线电配置

- 使用 B2B 连接器将 Seeed [XIAO ESP32S3 开发板](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) 与 SX1262 模组连接在一起。
- 将 LoRa 天线连接到 SX1262。
- 插入电脑，并通过 [web flasher](https://meshcore.io/flasher) 使用 "Seeed Studio Xiao S3 WIO"（Serial Companion）进行固件烧录。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/Firmware.png" style={{width:900, height:'auto'}}/></div>

:::tip
 本教程指导你配置串口 companion。RemoteTerm 也支持 TCP 和 Bluetooth companion，但配置会稍微复杂一些。 
:::

### Pi 安装

- [点击这里](https://www.raspberrypi.com/software/) 下载 Raspberry Pi Imager
- 打开 Imager，选择你的 Raspberry Pi 型号，并选择 "Raspberry Pi OS Lite (64 bit)"
- 配置 SSH（使用密码或按需使用密钥），并配置 Wi-Fi 连接
- 将 ESP32 MeshCore 连接到 [Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html) 

:::warning
确保 ESP32 LoRa Mesh 节点连接到 `USB` 端口，而不是 `POWER` 端口 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/USB.png" style={{width:900, height:'auto'}}/></div>
:::

完整安装（带直角转接头）可能如下所示：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/HardwareInstallation.png" style={{width:500, height:'auto'}}/></div>

- 将电源连接到 Pi 的 `POWER` 端口
- 使用家用路由器的管理界面确定分配给 Raspberry Pi 的地址。建议为其分配 DHCP 保留地址，以防 IP 地址发生变化。

### Pi 配置

- 打开到 Raspberry Pi 的 SSH 会话
- 确认无线电设备已识别。`find /dev/serial/by-id -maxdepth 1 -type l -print | sort` 应该显示类似 `/dev/serial/by-id/usb-Espressif_USB_JTAG_serial_debug_unit_XX:XX:XX:XX:XX:XX-if00` 的条目
- 更新与升级
    ```bash
    sudo apt update                        # update package repositories
    sudo apt upgrade -y                    # upgrade packages
    sudo apt-get install -y git            # install git
    curl -fsSL https://get.docker.com | sh # install docker
    ```
- 克隆并启动
    ```bash
    git clone https://github.com/jkingsman/Remote-Terminal-for-MeshCore.git
    cd Remote-Terminal-for-MeshCore/

    # configure the docker setup
    ./scripts/setup/install_docker.sh
    ```

#### 配置选项说明

[README](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README.md) 和 [博客](https://jacksbrain.com/2026/04/meshcore-management-remoteterm-seeed-xiao-esp32s2-sx1262/) 提供了更详细的安装说明

### 启动服务器
#### 配置

在你通过安装脚本配置好 dockerfile 之后，运行

```bash
sudo docker compose up -d
```

以启动服务器。以下命令也可能会有帮助：

```bash
sudo docker compose up -d    # start RemoteTerm in the background
sudo docker compose logs -f  # follow the container logs live
sudo docker compose down     # stop and remove the running container
sudo docker compose restart  # restart the container without changing the image
sudo docker compose pull && sudo docker compose up -d   # upgrade to the latest published image and restart
```

:::warning
RemoteTerm 会对无线电进行**完全**管理，这意味着一旦无线电连接到 RemoteTerm，所有联系人/频道都会被导入并卸载到 RemoteTerm，由 RemoteTerm 来管理实际同步到设备上的联系人。 
:::

:::note

**热点配置（可选）**

此步骤为可选，仅推荐用于将远离家庭环境使用的无线电设备。该配置会让无线电断开家庭 Wi-Fi 连接，但会开始广播其自身的 Wi-Fi，从而在无互联网连接的情况下也能访问。

- 设置热点

  ```bash
  sudo nmcli device wifi hotspot ssid <hotspot name> password <hotspot password> ifname wlan0
  ```

- 你很可能需要连接到新的 Wi-Fi 网络并再次通过 SSH 登录 Pi。连接到新网络后，在 Wi-Fi 配置中，“默认网关” 即为你的 Pi 的 URL。

- 配置热点在开机时自动广播

  ```bash
  nmcli connection
  # grab the UUID of the Hotspot connection
  sudo nmcli connection modify <hotspot UUID> connection.autoconnect yes connection.autoconnect-priority 100
  ```
:::

## RemoteTerm 使用入门

### 主界面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/main_screen.png" style={{width:900, height:'auto'}}/></div>

RemoteTerm 主界面会显示已知频道、中继和房间服务器的列表，顶部预留了收藏夹区域。点击任意联系人或频道即可开始消息收发，点击中继则可以登录并查看管理界面。你可以通过顶部的绿色按钮添加频道或联系人。

在联系人列表上方有一组工具：

|通用项目          |功能|
|---------------|-------------------------|
|Packet Feed   |显示原始的实时入站数据包|
|Node Map      |可视化节点位置|
|Mesh Visualizer|以可自定义的 3D 形式实时展示节点和流量|
|Trace          |在中继之间运行多跳追踪以获取信号强度信息|
|Message Search |在频道和消息历史中搜索单词或短语|
|Channel Finder |频道查找器，用于为已接收但未解密的数据包查找频道名称|

### 消息收发（频道）

要创建或加入频道，请点击应用主菜单左上角的 “Add Channel/Contact” 按钮。仅通过密钥标识的私有频道，或通过名称以 #hashtag 标识的 Hashtag 频道，都可以在弹出的菜单中加入。

Public 频道会自动添加到所有新的 RemoteTerm 实例中。你的本地 Mesh 通常会有一些活跃频道：Public、#test 或 #testing，以及 #bots 或 #bot 都是不错的起点，也方便你找到能为新手指路、推荐本地优质房间的用户。

当选中某个频道时，界面大致如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/channel.png" style={{width:900, height:'auto'}}/></div>

在状态栏中：

|图标|功能|
|---------------|---------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/bell.png" style={{width:50, height:'auto'}}/></div>|配置通知，可以是桌面通知（需要浏览器保持打开）或 Web Push（即使浏览器关闭也能推送）。这些功能需要可信的 HTTPS 环境（安装程序提供的 snakeoil 证书是否足以启用通知，取决于你的操作系统和浏览器）|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/earth.png" style={{width:50, height:'auto'}}/></div>|启用区域路由覆盖，仅在此频道中发送消息时限制无线电的区域范围。具有相同或不同区域设置的用户将分别能够看到或自动忽略你的消息|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/chevrons-left-right.png" style={{width:50, height:'auto'}}/></div>|允许为每个频道单独设置跳数宽度，与无线电的默认设置相互独立|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/star.png" style={{width:50, height:'auto'}}/></div>|将频道添加到收藏夹或从收藏夹中移除|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trash-2.png" style={{width:50, height:'auto'}}/></div>|删除频道，但如果你之后重新添加该频道，历史消息仍会保留|
|Room Key|提供当前房间的 MeshCore 密钥|

在左上角是带有信息图标的频道名称；你可以点击它来查看有关频道的信息，例如频道的活跃程度、谁在发送消息以及它的密钥（你也可以通过点击顶部状态栏中的 "Show key" 文本来查看密钥）：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_room_analytic.png" style={{width:300, height:'auto'}}/></div>

### 消息（私信）

发送私信与频道消息类似，只是有一些不同的选项。

|图标|功能|
|---------------|---------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/route.png" style={{width:50, height:'auto'}}/></div>|向联系人发送路由探测，以发现更理想的消息路由路径|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trace.png" style={{width:50, height:'auto'}}/></div>|向联系人发送直接跟踪，包含远端和本地的 SNR 数据|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/bell.png" style={{width:50, height:'auto'}}/></div>|配置通知，可以是桌面通知（需要浏览器保持打开）或 Web Push（即使浏览器关闭也能投递）。这些需要受信任的 HTTPS 环境（安装程序提供的 snakeoil 证书是否足以允许通知，取决于你的操作系统和浏览器）|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/star.png" style={{width:50, height:'auto'}}/></div>|将联系人添加到或从你的收藏中移除|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trash-2.png" style={{width:50, height:'auto'}}/></div>|删除会话，但如果你之后选择重新添加，将保留历史消息|
|联系人密钥|提供给定联系人的 MeshCore 密钥，以及他们上次被听到的时间（广播、消息等）和方式（直接，或数据包经过的路径）|

与频道类似，你可以点击所选联系人的顶部栏中的信息图标或名称来查看该联系人的分析数据。

## MQTT 与自动化

RemoteTerm 在为自动化系统提供丰富集成方面表现出色。当听到某些类型的数据包时，集成会执行操作（例如，当在频道中发送消息或收到私信时）。这些集成包括：

- MQTT，通过 MQTT 转发数据包到：
  - 私有代理
  - 社区聚合器
  - Home Assistant
- Webhooks，将带有消息数据的 GET 或 POST 请求发送到特定 URL
- Apprise，一种灵活的通知分发工具，可以转发到 Discord、Telegram、SMS、电子邮件等
- 将数据包或消息入队到 Amazon SQS 队列中
- Python 机器人

### 为社区 Mesh 地图进行设置

显示 MeshCore 节点位置、消息流动模式和连接性故障等信息，有助于社区构建 MeshCore 网络。为了提供这种调试视图，社区聚合器会从*观察者*那里摄取原始数据包流。

RemoteTerm 让你可以轻松地使用同一台用于收发消息的无线电设备，作为观察者节点参与这些社区映射和可视化工作。

:::warning
MeshCore *不*允许消息通过 MQTT 节点进入 Mesh；社区可观测性工作是只读的。 
:::

有许多社区观察者平台，但 [LetsMesh](https://analyzer.letsmesh.net/) 是其中较为流行的一个，我们将以它为例进行设置。

1. [点击这里](https://analyzer.letsmesh.net/) 访问 LetsMesh，并登录 LetsMesh 分析器。
2. 在 RemoteTerm 中，进入 "Settings"，然后点击 "MQTT & Automation"。
3. 点击 "Add Integration"，并在左侧列表中选择 "LetsMesh (US)"。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/LetsMesh_selected_integration.png" style={{width:900, height:'auto'}}/></div>

4. 点击 "Create"。
5. 填写你在 LetsMesh 注册时使用的相同电子邮件地址，并输入最近机场的 IATA 代码。
6. 点击 "Save as Enabled"。

你应该会看到一个绿色圆点和 "Connected" 状态；一个健康的集成应如下所示：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/healthy_integration.png" style={{width:900, height:'auto'}}/></div>


如果你看到的是琥珀色圆点，请点击 Edit 按钮旁边的 "ⓘ" 符号查看错误信息。

现在，访问这个[链接](https://analyzer.letsmesh.net/my-nodes)。大约 15 分钟内，你应该会看到你的无线电设备在那边显示为绿色，你自己的遥测和数据包也会被转发到 LetsMesh！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/healthy_letsmesh.png" style={{width:400, height:'auto'}}/></div>

### 机器人

RemoteTerm 提供了一个接口来编写你自己的机器人。机器人由简单的 Python 代码组成，每当从联系人或频道收到消息时就会运行。

:::warning
机器人会在响应其他消息时生成自动流量。这意味着你*有责任*确保机器人被谨慎编写，以防止淹没 Mesh 或产生无限循环。 
:::

#### 设置一个简单的掷骰子机器人

下面是一个教程，引导你构建一个具有简单掷骰功能的机器人，以标准形式请求（例如，“3d6” 表示掷 3 个六面骰）。步骤如下：

1. 在 RemoteTerm 中，进入 "Settings"，然后点击 "MQTT & Automation"。
2. 点击 "Add Integration"，并在左侧列表中选择 "Python Bot"。
3. 点击 "Create"。
4. 给机器人起一个有描述性的名字，例如 "Dice Bot"。
5. 清空编辑器中的代码，并粘贴以下代码：

```python
import random
import re

def bot(**kwargs) -> str | list[str] | None:
    """Dice roller — responds to !dice NdS in #bot only."""
    sender_name = kwargs.get("sender_name")
    message_text = kwargs.get("message_text", "")
    channel_name = kwargs.get("channel_name")
    is_outgoing = kwargs.get("is_outgoing", False)

    if is_outgoing or channel_name != "#bot":
        return None

    match = re.match(r"^!dice\s+(\d+)d(\d+)$", message_text.strip())
    if not match:
        return None

    count, sides = int(match.group(1)), int(match.group(2))
    if count < 1 or count > 20 or sides < 2 or sides > 100:
        return "I don't know how to roll that! [1-20]d[2-100]"

    rolls = [random.randint(1, sides) for _ in range(count)]
    parts = " + ".join(str(r) for r in rolls)
    name = sender_name or "Someone"
    return f"@[{name}] rolled {parts} = {sum(rolls)}"
```

6. 点击 "Save as Enabled"。

使用另一台无线电设备，进入 **#bot** 房间并请求一次掷骰（例如 "3d6"）。输出应类似如下：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/dice_bot_in_action.png" style={{width:900, height:'auto'}}/></div>

如果你没有看到预期的响应，可以从 Docker 容器中查看服务器日志，以确认在执行 Python 代码时是否报告了错误。

#### 设置一个路径宽度机器人

MeshCore 固件 v1.14+ 对消息在 Mesh 中的传输方式带来了重大变化；穿过兼容路由器的数据包现在可以携带多字节跳数标识符。

我们可以编写一个机器人，帮助人们判断他们的消息是否关联了多字节路径。该脚本利用一次发送多条消息的能力，分别提供跳数宽度消息和数据包跳数数据本身。

```python
def bot(**kwargs) -> str | list[str] | None:
    """Report the sender's path hop width in #bot."""
    sender_name = kwargs.get("sender_name")
    message_text = kwargs.get("message_text", "")
    channel_name = kwargs.get("channel_name")
    is_outgoing = kwargs.get("is_outgoing", False)
    path = kwargs.get("path")
    path_bytes_per_hop = kwargs.get("path_bytes_per_hop")

    if is_outgoing or channel_name != "#bot":
        return None

    if "!hopwidth" not in message_text.lower():
        return None

    name = sender_name or "Someone"

    if path_bytes_per_hop is None or not path:
        return f"@[{name}]'s hop width is unknown (no path data)"

    hop_count = (len(path) // 2) // path_bytes_per_hop

    if path_bytes_per_hop == 1:
        msg = f"@[{name}]'s hops are 1 byte wide; they might not be on 1.14+ or there may be incompatible repeaters in the path."
    else:
        msg = f"@[{name}]'s hops are {path_bytes_per_hop} bytes wide; they are using firmware v1.14+!"

    return [msg, f"Heard via {hop_count} hop{'s' if hop_count != 1 else ''}"]
```

### 将 MeshCore 频道消息转发到 Discord

[Apprise](https://appriseit.com/) 是 RemoteTerm 支持的一种灵活通知服务。Apprise 允许你选择一个或多个上百种通知服务，将频道或私信发送到这些服务，从 Discord 到 Telegram、SMS、电子邮件等。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/Aprise.png" style={{width:900, height:'auto'}}/></div>  

作为示例，我们将使用 Apprise，通过 RemoteTerm 将某个 MeshCore 频道中的所有消息转发到 Discord。

1. 打开 Discord，进入一个你拥有管理员权限的频道。
2. 右键点击频道名称并选择 "Edit Channel"。
3. 在左侧菜单中点击 "Integrations"，然后点击 "Create Webhook"。
4. 为 webhook 取一个合适的名称，并复制 webhook URL。webhook 的格式应为 `https://discord.com/api/webhooks/<WebhookID>/<WebhookToken>`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_webhook_setup.png" style={{width:900, height:'auto'}}/></div>  

5. 在 RemoteTerm 中，进入 "Settings"，然后点击 "MQTT & Automation"。
6. 点击 "Add Integration"，然后在左侧列表中选择 "Apprise"。
7. 点击 "Create"。
8. 在输入框中添加通知 URL。根据 [Apprise 的 Discord 文档](https://appriseit.com/services/discord/)，其格式应为 `discord://{WebhookID}/{WebhookToken}/`。使用从复制的 URL 中获取的 WebhookID 和 WebhookToken。 
9. 选择是否在可用时使用用户配置的名称和头像来保留用户身份。
10. 选择是否在消息中包含路由路径数据（建议禁用）
11. 选择你希望转发到 Discord 的联系人/频道，并点击 "Save as Enabled"。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_configured.png" style={{width:900, height:'auto'}}/></div>  

启用后，你应该会看到消息开始流动！如果遇到问题或没有看到预期的消息，请检查服务器日志中是否有任何报告的错误，或者尝试启用所有频道，以确保至少 RemoteTerm ↔ Discord 的连接是正常工作的。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_integration_working.png" style={{width:900, height:'auto'}}/></div>   

### 将 RemoteTerm 集成到 Home Assistant

[Home Assistant](https://www.home-assistant.io/) 提供了一个简单易用且功能强大的家庭自动化框架。RemoteTerm 通过内置的 MQTT 集成与 Home Assistant 集成。通过此集成，你可以基于消息触发自动化、监控中继器和本地无线电遥测，并通过其广播中的 GPS 跟踪联系人。

为了利用中继器遥测跟踪，你需要将所需的中继器注册到自动遥测获取中。注册后，RemoteTerm 将以可配置的时间间隔请求遥测数据，保留历史值，并在 Home Assistant 中显示最新的实时值。 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/enrolled_repeater.png" style={{width:900, height:'auto'}}/></div>   

:::tip
自动中继器遥测获取具有可自定义的时间间隔；你可以选择从每小时一次到每天一次的频率，但限制是在 24 小时内自动获取次数不得超过 24 次。 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/repeatertelemetryintervalcustomization.png" style={{width:900, height:'auto'}}/></div> 

:::

在你按需配置好要跟踪的中继器并在 Home Assistant 中启用 MQTT Discovery 之后，你就可以在 RemoteTerm 中配置一个集成来启动数据流。

1. 在 RemoteTerm 中，进入 "Settings"，然后点击 "MQTT & Automation"。
2. 点击 "Add Integration"，然后在左侧列表中选择 "Home Assistant MQTT Discovery"。
3. 点击 "Create"。
4. 输入你的 MQTT broker 信息，包括主机和端口，以及用户名/密码/TLS 配置（如果适用）。
5. 选择要在 Home Assistant 中通过广播 GPS 位置进行跟踪的联系人。
6. 选择你希望在 Home Assistant 中查看的、启用遥测跟踪的中继器。
7. 为 Home Assistant 中的触发器选择消息范围。
8. 点击 "Save as Enabled"。

 请注意，RemoteTerm 集成配置界面在下拉菜单 "What gets created in Home Assistant" 和 "Published Topic Summary" 中提供了精确创建的主题/实体信息。

:::warning
被跟踪的联系人和中继器会在 Home Assistant 中创建实体；你可能希望将选择限制为你真正关心的联系人，以避免使 Home Assistant 变得杂乱。

消息事件*不会*创建实体，仅用于触发器；通常允许所有消息流向 Home Assistant 不会有问题。
:::


要查看新实体，请登录到你的 Home Assistant Web 界面。点击 Settings，然后点击 Devices & Services，再点击 MQTT。你应该会看到显示出的被跟踪实体。 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_ha_device_list.png" style={{width:900, height:'auto'}}/></div> 

点击它们以查看可用的指标。对于中继器，将显示最近可用且未过期的指标；如果你只是最近才启用自动遥测获取，你可能需要等待最长八小时，才能在 Home Assistant 中填充所有中继器和无线电遥测字段。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example.png" style={{width:900, height:'auto'}}/></div> 

如需更多配置指导，请查看 RemoteTerm 仓库中的 [README_HA.md](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README_HA.md)。例如，按照 "[Full monitoring dashboard with message feed](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README_HA.md#full-monitoring-dashboard-with-message-feed)" 中的说明操作，将会得到如下所示的仪表板：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_ha_dashboard.png" style={{width:900, height:'auto'}}/></div> 

## 后续步骤

通过加入 [官方 MeshCore Discord](https://discord.gg/mr3Pt5s5V9)，并关注 [RemoteTerm 的开发主题帖](https://discord.com/channels/1343693475589263471/1477723940951429330)，随时了解 RemoteTerm 的开发进展或提出问题。代码库经常更新，你可以在 [Changelog](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/CHANGELOG.md) 中获取最新版本。当然，RemoteTerm 永远免费、无广告且开源——欢迎在 [GitHub](https://github.com/jkingsman/Remote-Terminal-for-MeshCore) 上为它点亮一颗星。

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>