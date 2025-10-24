---
description: OpenRemote 是一个完全开源的物联网平台，简化了网络设备与移动和网络应用程序的连接。通过在 Raspberry Pi 驱动的设备（如 Recomputer R1000 和 R1100）上部署，OpenRemote 提供了一个灵活的边缘解决方案，用于管理和控制您环境中的物联网设备
title: 在 reComputer R1x 上部署 OpenRemote 在边缘管理物联网设备
keywords:
- IIoT
- OpenRemote
- Raspberry-Pi 
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /cn/openremote_r1x00
last_update:
  date: 9/30/2025
  author: Kasun Thushara
---

## 介绍

[OpenRemote](https://openremote.io/) 是一个开源物联网平台，旨在简化网络设备的连接和管理。系统的核心是 Manager，这是一个无头 Java 应用程序，充当物联网上下文代理，实时捕获和管理资产状态。通过动态资产建模，您可以表示环境的各种组件——如建筑物、房间和传感器——根据您的特定需求进行定制。用 Groovy、JavaScript 或 JSON 编写的规则基于资产状态变化或事件序列触发操作。例如，这些规则可以在满足某些阈值时通知用户，比如房间湿度上升时。该平台通过 Agents 支持网络设备，这些 Agents 与第三方 API 和服务协议接口，可以与管理器共同部署或安装在边缘网关上。通过在 Raspberry Pi 驱动的 Recomputer R1000 和 R1100 设备上部署 OpenRemote，您可以在边缘管理您的物联网生态系统，为您的设备提供高效的本地化控制。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 安装 Docker 和 Docker-Compose

按照以下步骤在您的 Ubuntu 系统上安装 Docker 和 Docker-Compose：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremoter11.jpg" alt="pir" width={600} height="auto" /></p>

**1. 更新系统包**

首先，更新包列表并升级已安装的包，以确保您的系统是最新的。

```bash
sudo apt update
sudo apt upgrade
```

**2. 安装 Docker**

接下来，使用官方安装脚本下载并安装 Docker。这将自动安装 Docker 及其所有依赖项。

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

**3. 将您的用户添加到 Docker 组**

默认情况下，Docker 需要 root 权限。要在不使用 `sudo` 的情况下运行 Docker 命令，请将您的用户添加到 Docker 组：

```bash
sudo usermod -aG docker ${USER}
```

运行此命令后，注销并重新登录，或重启系统以使更改生效。

**4. 重启系统**

重启系统以确保更改生效并将您的用户添加到 Docker 组。

```bash
sudo reboot
```

**5. 测试 Docker 安装**

重启后，通过运行 `hello-world` 镜像来验证 Docker 安装，这将确认 Docker 正常工作。

```bash
docker run hello-world
```

**6. 安装 Docker-Compose**

最后，安装 Docker-Compose，这是一个用于定义和运行多容器 Docker 应用程序的工具。要安装它，请运行：

```bash
sudo apt install docker-compose
```

## 在 Recomputer R1000 / R1100 上安装 OpenRemote

**1. 下载 Docker Compose 文件**

直接从 OpenRemote 仓库获取官方 `docker-compose.yml` 文件：

```bash
wget https://raw.githubusercontent.com/openremote/openremote/master/docker-compose.yml
```

**2. 导航到目录**

切换到 YAML 文件所在的目录：

```bash
cd /path/to/yaml
```

**3. 拉取 Docker 镜像**

下载所需的 Docker 镜像：

```bash
docker-compose pull
```

**4. 启动 OpenRemote**

使用 Docker Compose 运行 OpenRemote：

```bash
docker-compose -p openremote up
```

这将启动 OpenRemote Manager 和支持服务。

**5. 访问 OpenRemote**

启动后，您可以使用默认凭据登录到 OpenRemote Manager：

- **用户名：** `admin`
- **密码：** `secret`

现在您已经在 Recomputer R1000 / R1100 上运行了 OpenRemote 作为**边缘物联网平台**来管理和控制您的连接设备。

## 使用 HTTP 协议

按照以下步骤将 OpenWeatherMap API 与您的 Recomputer R1000 / R1100 上的 OpenRemote 集成。本指南涵盖如何为天气数据创建 Agent、将其链接到资产以及设置配置。

### 获取 OpenWeatherMap API 密钥

要使用 OpenWeatherMap API，您需要一个免费的 API 密钥。在 [OpenWeatherMap](https://openweathermap.org/) 注册免费账户并获取您的 API 密钥。

### 创建 Agent

**创建 HTTP API Agent**  

- 导航到 **Assets** 页面。
- 点击左侧资产列表顶部的 **+** 图标以添加新的 **Agent** 或 **Asset**。
- 在出现的对话框中，从列表中选择 **HTTP Agent**。
- **名称：** `HTTP API Agent`
- 点击 **Add**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote2.png" alt="pir" width={800} height="auto" /></p>

现在已创建了具有预配置属性的 agent。您需要配置它以连接到 OpenWeatherMap API。

### 配置 HTTP API Agent

现在 HTTP API Agent 已创建，使用以下详细信息进行配置：

- **Base URI：** `https://api.openweathermap.org/data/2.5/`  
  *（不要忘记通过点击右侧的发送按钮或按 Enter 键发送值。）*

- **Request Query Parameters：**  
  输入您的 OpenWeatherMap 账户的 API 密钥并按如下设置参数：

```json
{
   "appid": ["YOUR_API_KEY"],
   "q": ["Rotterdam,nl"],
   "units": ["metric"]
}
```

点击 **Save** 确认配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote3.png" alt="pir" width={800} height="auto" /></p>

### 创建天气资产

**添加新的天气资产**

- 点击 **+** 图标添加资产。
- 从列表中选择 **Weather Asset**。
- **名称：** `Weather Rotterdam`
- 点击 **Add**。

天气资产现在将作为 HTTP API Agent 的子项出现在列表中。如果需要，您可以更改其父项。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote4.png" alt="pir" width={800} height="auto" /></p>

### 添加 Agent 链接

**修改资产配置**
通过点击资产页面顶部的切换按钮进入 **Modify Mode**。在此模式下，您可以更改资产的属性并配置其设置。

### 设置湿度属性

- 展开 **humidity** 属性。
- 点击 **Add configuration item** 并选择 **Agent link**。
- 选择 **HTTP API Agent**。
- 添加以下参数：

  - **Polling millis：** `60000`（每分钟轮询一次）
  - **Path：** `weather`
  - **Value filters：** `JsonPathFilter-2`
  - **Path (JSON)：** `$.main.humidity`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote5.png" alt="pir" width={800} height="auto" /></p>

### 设置温度属性：

- 展开 **temperature** 属性。
- 点击 **Add configuration item** 并选择 **Agent link**。
- 选择 **HTTP API Agent**。
- 添加以下参数：

  - **Polling millis：** `60000`（每分钟轮询一次）
  - **Path：** `weather`
  - **Value filters：** `JsonPathFilter-2`
  - **Path (JSON)：** `$.main.temp`

点击右上角的 **Save** 应用这些更改。

### 查看实时天气数据

添加属性后，切换到 **View Mode** 查看实时天气数据。现在您已经将鹿特丹的当前温度和湿度链接到天气资产。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote1.png" alt="pir" width={800} height="auto" /></p>

## MQTT Agent 与 ChirpStack LoRaWAN 网关集成

本教程将指导您完成将 MQTT Agent 与 ChirpStack 集成并在 OpenRemote 管理器上配置它以与 Dragino LHT65 和 SenseCap S210x 传感器等设备一起使用的过程。在继续之前，请确保您已在 ReComputer R1X 设备上安装了 ChirpStack 并配对了设备（例如 SenseCap S210X）。有关 ChirpStack 安装详细信息，请参阅官方 [ChirpStack LoRa Gateway on ReComputer R1X](https://wiki.seeedstudio.com/cn/chirpstack_lora_gateway_r1x00/) 指南。

### 先决条件

- OpenRemote Manager UI 正在运行。
- ChirpStack LoRaWAN Gateway 已安装在您的 ReComputer R1X 设备上。
- 一个 LoRaWAN 设备 SenseCap S210X。

### 创建 OpenRemote MQTT Agent

1. **登录到 OpenRemote Manager UI**：  
   打开浏览器并转到 OpenRemote Manager UI

2. **导航到 Assets 页面**：  
   在页面左侧，点击 **Assets** 选项卡。

3. **创建新的 MQTT Agent**：  
   - 点击左侧资产树中的 **+** 按钮。
   - 在 **Add asset** 对话框中，从资产类型列表中选择 **MQTT Agent**。
   - 将资产命名为 **ChirpStack MQTT Agent**。
   - 点击 **ADD** 创建资产。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote6.png" alt="pir" width={800} height="auto" /></p>

4. **配置 MQTT Agent**：
   - 点击 **Modify** 编辑资产配置。
   - 设置以下属性：
     - **Host**：您的 ChirpStack 服务器的 IP 地址（例如 `10.0.0.208`）。
     - **Port**：`1883`（默认 MQTT 端口）。
   - 点击 **SAVE** 保存您的更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote7.png" alt="pir" width={800} height="auto" /></p>

### 创建 OpenRemote LoRaWAN 设备资产

1. **添加新的 LoRaWAN 设备**：
   - 在 **Assets** 页面中，点击左侧资产树中的 **+**。
   - 在 **Add asset** 对话框中，选择 **Thing Asset**。
   - 将资产命名为 **S2101**（或您的特定设备名称）。
   - 点击 **ADD** 创建资产。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote8.png" alt="pir" width={800} height="auto" /></p>

2. **修改设备资产**：
   - 点击 **Modify** 编辑资产配置。

3. **为温度添加自定义属性**：
   - 点击 **ADD ATTRIBUTE** 添加新属性。
   - 在 **Add attribute** 对话框中，配置以下内容：
     - **Type**：**Custom attribute**
     - **Name**：**Temperature**
     - **Value type**：**Number**
   - 点击 **ADD** 保存属性。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote9.png" alt="pir" width={800} height="auto" /></p>

4. **为 MQTT Agent 添加配置项**：
   - 展开 **Temperature** 属性并点击 **ADD CONFIGURATION ITEMS**。
   - 在 **Add configuration items** 对话框中，配置如下：
     - **Select**：**Agent link**
   - 点击 **ADD** 创建到 MQTT Agent 的链接。
   - 展开 **Agent link** 配置项并设置 **Agent ID**：
     - **Agent ID**：**ChirpStack MQTT Agent**。
   - 点击 **ADD** 保存 Agent 链接。

### 配置传感器数据的 MQTT 订阅

1. **为 MQTT 主题添加参数**：
   - 点击 **ADD PARAMETER** 添加新的配置项。
   - 在 **Add parameter** 对话框中，选择 **Subscription Topic** 并点击 **ADD**。

2. **配置 MQTT 订阅主题**：
   - 使用以下 ChirpStack MQTT 主题格式编辑 **Subscription Topic** 字段：

     ```
     application/+/device/+/event/up
     ```

   - 此主题将订阅来自 LoRaWAN 设备的传入传感器数据。

3. **添加值过滤器**：
   - 点击 **ADD** 添加新的 **Value Filters** 参数。
   - 展开 **Value Filters** 部分并点击 **ADD ITEM**。
   - 在 **Add item** 对话框中，选择 **JSON Path** 并点击 **ADD**。

4. **配置传感器数据的 JSON 路径**：
   - 展开新创建的 **JSON Path** 项并将 **Path** 设置为：

     ```
     $.object.messages[?(@.measurementId==4097)].measurementValue
     ```

   - 这是 SenseCap S2101 数据解码器的示例。根据您的具体设备需要调整路径。
   - 启用 **Return First** 选项。

5. **保存配置**：
   - 设置完所有配置后，点击 **SAVE** 完成设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote10.png" alt="pir" width={800} height="auto" /></p>

### 测试集成

1. **检查 MQTT 通信**：  
   确保 MQTT Agent 已连接到 ChirpStack 服务器，并且主题 `application/+/device/+/event/up` 正在接收数据。

2. **监控温度**：  
   **SenseCap S2101**（或您配置的设备）现在应该发送温度读数，OpenRemote 管理器将在 **Temperature** 属性下显示这些值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote11.png" alt="pir" width={800} height="auto" /></p>

### 演示

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/vYmtEf-7j2I"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
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
