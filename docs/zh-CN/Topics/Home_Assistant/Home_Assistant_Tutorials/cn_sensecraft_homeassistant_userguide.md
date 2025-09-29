---
description: 这是 SenseCraft-HomeAssistant 用户手册
title: SenseCraft-HomeAssistant 用户手册
keywords:
- home assistant 
slug: /cn/sensecraft_homeassistant_userguide
last_update:
  date: 04/12/2024
  author: WenHao
---

# SenseCraft-HomeAssistant 用户手册

## 介绍

SenseCraft-HomeAssistant 是一个 HomeAssistant 插件。通过使用此插件，用户可以使用 SenseCraft 数据平台（原 SenseCAP 云平台）账户登录，在 HomeAssistant 平台上访问云设备和传感器数据，生成自定义设备报告仪表板。


:::note
SenseCraft-HomeAssistant 插件目前仅可通过 HACS 安装，HACS 是 HomeAssistant 系统上的第三方应用商店。当 HomeAssistant 提供的官方集成不够用时，HACS 允许轻松添加和管理第三方集成。
:::

### 1.1 HACS 安装步骤

由于下载 HACS 插件需要终端命令，您必须首先安装终端应用程序。

1. **启用高级模式并搜索终端应用程序**

- 打开高级模式并导航到加载项，搜索终端应用程序。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage2.png" alt="pir" width={800} height="auto" /></p>

- 如果找不到，请首先检查您的网络连接，然后尝试重启 HomeAssistant。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage3.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage4.png" alt="pir" width={800} height="auto" /></p>


2. **安装、启动并打开终端界面**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage5.png" alt="pir" width={800} height="auto" /></p>

3. **在终端中输入以下命令下载 HACS 安装包**（详情请见 [https://hacs.xyz/docs/setup/download](https://hacs.xyz/docs/setup/download)）：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage6.png" alt="pir" width={800} height="auto" /></p>

- 进入配置目录：

```
cd config
```

- 下载并安装 HACS：

```
wget -q -O - https://install.hacs.xyz | bash -
```

4. **重启 Home Assistant**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage7.png" alt="pir" width={800} height="auto" /></p>

5. **搜索并安装 HACS 插件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage8.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage9.png" alt="pir" width={800} height="auto" /></p>

6. **将弹出许可协议；勾选所有协议并提交**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage10.png" alt="pir" width={800} height="auto" /></p>

7. **点击链接转到 GitHub 页面并登录，然后将底部的 8 位字母代码输入到 GitHub 界面中**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage11.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage12.png" alt="pir" width={800} height="auto" /></p>

8. **授权**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage13.png" alt="pir" width={800} height="auto" /></p>

9. **此时，HACS 商店已安装完成**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage14.png" alt="pir" width={800} height="auto" /></p>

### 1.2 安装 SenseCraft 插件

1. 完成上述步骤后，左侧菜单栏将出现新的"HACS"项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage15.png" alt="pir" width={800} height="auto" /></p>

2. 输入 SenseCraft 仓库 URL 和类别，然后点击"添加"按钮：

:::note
   - 仓库：`https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git`
   - 类别：`Integration`
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage16.png" alt="pir" width={800} height="auto" /></p>

3. 在搜索框中输入 'sensecraft' 并找到 SenseCraft 插件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage17.png" alt="pir" width={800} height="auto" /></p>

4. 点击 SenseCraft 插件，进入插件介绍页面并点击"下载"按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage18.png" alt="pir" width={800} height="auto" /></p>

这完成了将 SenseCraft 添加到您当前的 Home Assistant 设置中。

## Grove Vision AI(V2) 与 SenseCraft-HomeAssistant

如果您刚刚获得了没有固件或模型的设备，您需要先烧录固件和模型。

如果设备已经有固件和模型，您可以跳过**步骤 2**。以下是如何检查您的设备是否包含固件和模型，因为固件和模型是捆绑在一起的。

### 2.1 检查设备是否包含固件和模型

1. 打开网站 [https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) 并将设备连接到您的计算机。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage19.png" alt="pir" width={800} height="auto" /></p>

2. 将 Grove Vision AI V2 连接到计算机

3. 切换到 Grove Vision AI 选项。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage20.png" alt="pir" width={800} height="auto" /></p>

4. 如果是第一次，系统会提示您授权，选择出现的设备并点击连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage21.png" alt="pir" width={800} height="auto" /></p>

5. 如果显示的信息和图像与截图中的相似，则表示工作正常。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage22.png" alt="pir" width={800} height="auto" /></p>

### 2.2 烧录固件和模型

如果没有检测到模型信息且没有实时预览，则表示需要重新烧录固件和模型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage23.png" alt="pir" width={800} height="auto" /></p>

选择一个预设模型（例如，性别检测）并点击"发送"。等待固件完成烧录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage24.png" alt="pir" width={800} height="auto" /></p>

### 2.3 设置 MQTT 服务

#### 选项 1：在 Home Assistant 中设置 MQTT 服务

1. **打开"配置 > 加载项 > 加载项商店"**，在右下角找到"加载项商店"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage25.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage26.png" alt="pir" width={300} height="auto" /></p>

2. 在商店中搜索"mqtt"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage27.png" alt="pir" width={800} height="auto" /></p>

3. 点击安装并使用用户名和密码配置 MQTT 服务：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage28.png" alt="pir" width={400} height="auto" /></p>

4. 导航到"选项 > 登录"，将用户或密码替换为您想要的用户名和密码。保存配置。

:::note
- 用户名：user
- 密码：passwd
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage29.png" alt="pir" width={800} height="auto" /></p>

:::note
如果没有错误，表示成功，如果有错误，您可以尝试卸载并重新安装，然后重新配置。
:::

#### 选项 2：在您自己的计算机上安装 MQTT 服务

1. **下载 EMQX**，从 [https://www.emqx.com/en/downloads/broker/5.4.0](https://www.emqx.com/en/downloads/broker/5.4.0) 为您的系统下载并按照给定的操作系统说明进行操作。

2. 以 MacOS 为例：

使用：

```
wget https://www.emqx.com/en/downloads/broker/5.4.0/emqx-5.4.0-macos13-amd64.zip
```

下载包。并安装 EMQX：

```
mkdir -p emqx && unzip emqx-5.4.0-macos13-amd64.zip -d emqx
```

最后运行 EMQX：

```
./emqx/bin/emqx start
```

3. 测试是否正常工作：

前往 [MQTT 下载](https://mqttx.app/downloads) 下载终端。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage30.png" alt="pir" width={800} height="auto" /></p>

### 验证 MQTT 服务成功

- 从 [MQTTX 下载页面](https://mqttx.app/downloads) 下载 MQTTX 客户端，确保您的 MQTT 服务可以从您的 PC 访问（无论是部署在公共网络服务器上还是在与您的 PC 相同的网段内）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage31.png" alt="pir" width={800} height="auto" /></p>

- 连接成功表示没有问题。

### 2.4 配置 WIFI 和 MQTT

#### 为什么要配置这两个？

因为 Grove Vision AI 在 Home Assistant 中的操作是通过 MQTT 完成的，而 MQTT 本身需要网络连接，这就是为什么需要配置 WIFI 的原因。注意您不能选择 5G WIFI。前往配置页面：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage32.png" alt="pir" width={800} height="auto" /></p>

输入相应信息并点击保存。但是，这里的保存只是保存信息，并不知道是否实际配置成功。您需要切换回 Process 页面：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage33.png" alt="pir" width={800} height="auto" /></p>

当 IP Address 显示 IP 地址时，表示 WIFI 没有问题。Service status 必须如图所示才表示正常运行。注意，如果 WIFI 不正常，那么 MQTT 肯定也不会正常。

切换过来时，可能最初显示为断开连接，您可能需要等待大约 10 秒，但通常不超过 20 秒。

**您不需要刷新来查看状态；状态会自动更新以显示最新状态。**

### 2.5 通过发现功能集成到 HA

要让您的设备出现在发现部分，您需要确保设备和 HA 在同一网段，否则不会出现。如果您不确定网段，可以将 HA 和设备的网络连接到同一个 WIFI，或者说，通过以太网连接到同一个路由器。

如果您刚刚完成上述操作，最好将设备断电并重新插入。进入配置页面：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage34a.png" alt="pir" width={800} height="auto" /></p>

然后您会看到以下页面：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage34.png" alt="pir" width={800} height="auto" /></p>

在这里，我们可以看到发现的第一个设备。您可以检查相应的 id 来查看是否是您的设备：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage35.png" alt="pir" width={400} height="auto" /></p>

圈出的部分是设备 ID，对应网站上的设备 ID：
https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage36.png" alt="pir" width={400} height="auto" /></p>

如果确实是您的设备，那么点击配置。在这里，如果您的 MQTT 服务没有用户名和密码，将显示以下对话框，否则会提示您输入用户名和密码。然后点击提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage37.png" alt="pir" width={800} height="auto" /></p>

如果您的 MQTT 服务有用户名和密码，那么：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage38.png" alt="pir" width={600} height="auto" /></p>

然后是选择区域，即您的设备所在位置，如客厅、厨房等。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage39.png" alt="pir" width={600} height="auto" /></p>

我在这里选择了客厅，然后点击完成，这样设备就添加到 HA 中了。此时，您可以点击概览来查看完成配置的效果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage40.png" alt="pir" width={800} height="auto" /></p>

### 2.6 手动集成到 HA

如果您可以使用发现的设备，请从发现部分进行配置，因为这比手动配置更简单。选择配置，然后选择设备和服务。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage41.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage42.png" alt="pir" width={800} height="auto" /></p>

然后选择 **Another instance of the device "SenseCraft"**，如图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage43.png" alt="pir" width={500} height="auto" /></p>

然后选择 **Add device using host/id (LAN integration)**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage44.png" alt="pir" width={500} height="auto" /></p>

然后点击提交，从下拉菜单中选择 `grove_vision_ai_we2`，并点击提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage45.png" alt="pir" width={500} height="auto" /></p>

然后输入设备 ID，这是对应网站的设备 ID，不是任意的。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage46.png" alt="pir" width={500} height="auto" /></p>

然后点击提交，接下来是配置 MQTT 服务。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage47.png" alt="pir" width={500} height="auto" /></p>

这里填写的详细信息应与网站上配置的一致；之前没有用户名和密码，所以这里也不需要填写。然后点击提交，如果成功，您将被要求为设备选择一个位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage48.png" alt="pir" width={500} height="auto" /></p>

根据实际情况选择位置，然后点击完成。这样您就可以在概览中看到效果，其余操作与"已发现"方法相同。

## 将传感器节点集成到 HA

我们公司有许多传感器，如光照、二氧化碳等，也可以轻松集成到 HA 中。要集成传感器节点，需要在 [SENSECAP 网站](https://sensecap.seeed.cc/portal/) 上拥有一个账户，因此您首先需要在那里注册一个账户，根据您是在国际站还是国内站注册，并将您的传感器节点添加到您的账户中。

下面我们将首先讨论如何通过应用程序添加设备：

- [SenseCAP Mate App](https://sensecap-mate-download.seeed.cn/)

### 3.1 通过 sensecap mate 应用程序添加传感器节点

请先登录应用程序的主页。按照以下步骤进行添加。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage49.png" alt="pir" width={800} height="auto" /></p>

### 3.2 通过网站添加传感器节点

前往 [SENSECAP 网站](https://sensecap.seeed.cc/portal/)，输入您传感器设备的 EUI、Key 等信息，然后点击确认。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage50.png" alt="pir" width={800} height="auto" /></p>

然后您可以在传感器节点列表中看到您已添加的设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage51.png" alt="pir" width={800} height="auto" /></p>

### 3.3 添加到 HA

前往"配置 > 添加集成"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage52.png" alt="pir" width={800} height="auto" /></p>

在出现的对话框中，搜索"sensecraft"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage53.png" alt="pir" width={500} height="auto" /></p>

然后点击筛选结果，输入并选择**设备"SenseCraft"的另一个实例**，然后选择"使用 SenseCraft 账户添加设备"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage54.png" alt="pir" width={800} height="auto" /></p>

点击提交，然后输入注册的账户和密码，并选择一个环境，即您注册的是国际站（global）还是国内站（china）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage55.png" alt="pir" width={500} height="auto" /></p>

添加完成后，您可以根据需要配置传感器设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage56.png" alt="pir" width={500} height="auto" /></p>

## 更多内容

将 Home Assistant 集成到 NVIDIA Jetson 即将推出！

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