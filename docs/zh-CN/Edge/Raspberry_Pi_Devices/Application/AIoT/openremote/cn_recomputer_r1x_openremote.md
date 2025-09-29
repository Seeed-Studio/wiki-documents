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
  date: 9/29/2025
  author: Kasun Thushara
---

## 介绍

OpenRemote 是一个开源物联网平台，旨在简化网络设备的连接和管理。系统的核心是管理器，这是一个无头 Java 应用程序，充当物联网上下文代理，实时捕获和管理资产状态。通过动态资产建模，您可以表示环境的各种组件——如建筑物、房间和传感器——根据您的特定需求进行定制。用 Groovy、JavaScript 或 JSON 编写的规则基于资产状态变化或事件序列触发操作。例如，这些规则可以在满足某些阈值时通知用户，比如房间湿度上升时。该平台通过代理支持网络设备，代理与第三方 API 和服务协议接口，可以与管理器共同部署或安装在边缘网关上。通过在 Raspberry Pi 驱动的 Recomputer R1000 和 R1100 设备上部署 OpenRemote，您可以在边缘管理您的物联网生态系统，为您的设备提供高效的本地化控制。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 安装 Docker 和 Docker-Compose

按照以下步骤在您的 Ubuntu 系统上安装 Docker 和 Docker-Compose：

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

这将启动 OpenRemote 管理器和支持服务。

**5. 访问 OpenRemote**

启动后，您可以使用默认凭据登录 OpenRemote 管理器：

- **用户名：** `admin`
- **密码：** `secret`

现在您已经在 Recomputer R1000 / R1100 上运行了 OpenRemote 作为**边缘物联网平台**来管理和控制您的连接设备。

## 使用 HTTP 协议

按照以下步骤将 OpenWeatherMap API 与您的 Recomputer R1000 / R1100 上的 OpenRemote 集成。本指南涵盖如何为天气数据创建代理、将其链接到资产以及设置配置。

### 获取 OpenWeatherMap API 密钥

要使用 OpenWeatherMap API，您需要一个免费的 API 密钥。在 [OpenWeatherMap](https://openweathermap.org/) 注册免费账户并获取您的 API 密钥。

### 创建代理

**创建 HTTP API 代理**  

- 导航到**资产**页面。
- 点击左侧资产列表顶部的 **+** 图标以添加新的**代理**或**资产**。
- 在出现的对话框中，从列表中选择 **HTTP Agent**。
- **名称：** `HTTP API Agent`
- 点击**添加**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote2.png" alt="pir" width={800} height="auto" /></p>

代理现在已创建并具有预配置的属性。您需要配置它以连接到 OpenWeatherMap API。

### 配置 HTTP API 代理

现在 HTTP API 代理已创建，使用以下详细信息进行配置：

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

点击**保存**以确认配置。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote3.png" alt="pir" width={800} height="auto" /></p>

### 创建天气资产

**添加新的天气资产**

- 点击 **+** 图标添加资产。
- 从列表中选择**Weather Asset**。
- **名称：** `Weather Rotterdam`
- 点击**添加**。

天气资产现在将作为 HTTP API 代理的子项出现在列表中。如果需要，您可以更改其父项。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote4.png" alt="pir" width={800} height="auto" /></p>


### 添加代理链接

**修改资产配置**
通过点击资产页面顶部的切换按钮进入**修改模式**。在此模式下，您可以更改资产的属性并配置其设置。

### 设置湿度属性

- 展开**humidity**属性。
- 点击**添加配置项**并选择**Agent link**。
- 选择 **HTTP API Agent**。
- 添加以下参数：

  - **Polling millis：** `60000`（每分钟轮询一次）
  - **Path：** `weather`
  - **Value filters：** `JsonPathFilter-2`
  - **Path (JSON)：** `$.main.humidity`


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote5.png" alt="pir" width={800} height="auto" /></p>

### 设置温度属性：


- 展开**temperature**属性。
- 点击**添加配置项**并选择**Agent link**。
- 选择 **HTTP API Agent**。
- 添加以下参数：

  - **Polling millis：** `60000`（每分钟轮询一次）
  - **Path：** `weather`
  - **Value filters：** `JsonPathFilter-2`
  - **Path (JSON)：** `$.main.temp`

点击右上角的**保存**以应用这些更改。

### 查看实时天气数据

添加属性后，切换到**查看模式**以查看实时天气数据。现在您已经将鹿特丹的当前温度和湿度链接到天气资产。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote1.png" alt="pir" width={800} height="auto" /></p>

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
