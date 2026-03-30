---
description: 介绍如何将 Grove Vision AI V2 接入 HomeAssistant。
title: HomeAssistant 应用
keywords:
  - vision AI
  - home assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/application-for-homeassistant
aliases:
  - /connect_vision_ai_v2_to_ha
sidebar_position: 1
last_update:
  date: 01/10/2024
  author: Citric
createdAt: '2024-01-11'
updatedAt: '2026-03-23'
url: https://wiki.seeedstudio.com/cn/sensecraft-ai/application/application-for-homeassistant/
---


# 将 Grove Vision AI V2 连接到 Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

将 Grove Vision AI V2 集成到 Home Assistant 中，可以通过加入高级视觉感知能力来提升你的智能家居系统。该集成支持对环境进行实时分析和自定义自动化，使你的家庭环境更加智能和灵敏。

为简化这一集成过程，可通过 HACS 商店获取的 SenseCraft-HomeAssistant 插件，将 Grove Vision AI V2 通过 SenseCraft 数据平台连接到 Home Assistant。整个流程简洁且用户友好，你只需登录 SenseCraft 账号，即可将设备和传感器数据引入 Home Assistant 生态系统，方便你进行自定义和控制。

下面是本文的主要内容框架。

1. [安装 HACS 插件](#安装-hacs-插件)：安装 Home Assistant Community Store（HACS），以便在 Home Assistant 中安装 Seeed Studio 的 SenseCraft 插件。
2. [安装 SenseCraft 插件](#安装-sensecraft-插件)：安装 Seeed Studio 的 SenseCraft 插件，从而可以将 Seeed Studio 的产品快速部署到 Home Assistant 中。
3. [为 Grove Vision AI V2 准备模型](#为-grove-vision-ai-v2-准备模型)：选择并部署你希望在 Grove Vision AI V2 上使用的模型，之后 Home Assistant 将接收来自 Vision AI 的识别场景和结果信息。
4. [在 Home Assistant 中构建 MQTT 服务](#在-home-assistant-中构建-mqtt-服务)：利用本地 MQTT 服务，将 Grove Vision AI V2 和 XIAO 的数据传输到 Home Assistant。
5. [将 Grove Vision AI V2 集成到 Home Assistant](#将-grove-vision-ai-v2-集成到-home-assistant)：将 Grove Vision AI V2 集成进 Home Assistant，并搭建可视化仪表盘进行配置。

## 入门指南

在开始本教程的具体内容之前，你需要准备好以下硬件。

### 所需材料

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
   <th>XIAO ESP32C3</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Home Assistant Green 是自动化你的家庭最简单且最注重隐私的方式。它提供了极其简便的设置流程，并允许你通过一个系统控制所有智能设备，且所有数据默认本地存储。该主板受益于蓬勃发展的 Home Assistant 生态系统，并将通过开源社区在每个月持续改进。

我们推荐在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，当然你也可以使用任何带 Supervisor 的 Home Assistant 主机。

然后你需要通过排针将 XIAO 与 Grove Vision AI V2 连接起来（或者使用扩展板和 Grove 接口）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## 安装 HACS 插件

### 步骤 1. 在 Home Assistant 中打开高级模式

为了释放 Home Assistant 的全部潜能并访问高级功能，你可以在用户界面中启用“Advanced Mode”。

进入你的 [Home Assistant Web 界面](http://homeassistant.local:8123)。点击 Home Assistant 侧边栏左下角的个人资料图标。在个人资料页面向下滚动，找到 **Advanced Mode** 开关。将该开关切换到打开状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 安装 Terminal & SSH

点击侧边栏中的 **Settings** 进入设置菜单。点击 **Add-ons** 进入插件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

使用搜索栏或浏览可用插件，找到 **Terminal & SSH**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

找到 **Terminal & SSH** 后，点击它查看详细信息。在插件页面，你会看到概览、文档和配置选项。要安装该插件，请点击 **Install** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 安装 HACS

在侧边栏中找到刚刚下载的 **Terminal & SSH** 并点击打开。在终端中，导航到 config 目录，该目录是 Home Assistant 配置的根目录：

```
cd /config
```

执行以下命令以下载并运行 HACS 安装脚本：

```
wget -q -O - https://install.hacs.xyz | bash -
```

安装脚本完成后，你需要重启 Home Assistant 以应用更改。你可以通过 UI 前往 **Settings > System > Restart** 来重启 Home Assistant。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

重启后，点击侧边栏中的 **Settings** 打开设置菜单。在设置菜单中，进入 **Devices & Services**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

点击 **ADD INTEGRATION**，为你的 Home Assistant 安装添加一个新的集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

在搜索栏中输入 **HACS**，查找 Home Assistant Community Store 集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

如果找到了 HACS，它会出现在可用集成列表中。点击它以开始安装流程。

可能会弹出许可协议或服务条款。请仔细阅读协议，如果你同意条款，请勾选所有复选框以表示同意。点击 **SUBMIT** 继续安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

接下来，系统会提示你使用 GitHub 账号登录。这是必要步骤，因为 HACS 通过 GitHub 来管理社区创建的集成和插件的安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

按照指引授权 Home Assistant 访问你的 GitHub 账号。通常需要输入 GitHub 提供的验证码以确认你的身份。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

当你授权 Home Assistant 使用你的 GitHub 账号后，HACS 的安装将完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

你可能需要重启 Home Assistant，才能让 HACS 完整集成到系统中。

## 安装 SenseCraft 插件

### 步骤 4. 通过 HACS 安装 SenseCraft 插件

在侧边栏中找到 HACS 并点击打开 HACS 界面。在右下角，你会看到一个菜单按钮（取决于 HACS 版本，可能是三个点或加号）。点击 **Custom repositories**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

会弹出一个对话框，要求你输入仓库 URL。在这里输入 SenseCraft 集成的自定义仓库 URL。输入 URL 后，选择类别（对于 SenseCraft 集成，你需要选择 **Integration**）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

点击 **Add**。该仓库现已添加到你的 HACS 中，你现在应该可以在 **Integrations** 下的列表中找到 SenseCraft 集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

找到 SenseCraft 集成并点击 "DOWNLOAD"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

到这里，我们已经成功完成了 SenseCraft 插件的安装。

## 为 Grove Vision AI V2 准备模型

### 步骤 5. 为 XIAO ESP32C3 烧录固件

使用合适的 USB-C 线将 XIAO ESP32C3 连接到你的电脑。确保设备驱动已正确安装。

在浏览器中打开 [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool)。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI 工具</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

然后选择 **XIAO ESP32S3** 并点击 **Connect**。

:::caution
请注意，尽管这里选择的是 XIAO ESP32-S3，我们实际使用的仍然是 XIAO ESP32-C3！
:::

点击下方按钮下载固件文件，并在网页上点击 **Add File** 按钮，将 `SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin` 固件烧录到 `0x0` 地址。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>下载文件</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最后，点击 **Flash** 按钮，等待程序成功上传后，再将 XIAO ESP32C3 与电脑断开连接。

### 步骤 6. 将 Grove Vision AI V2 连接到 SenseCraft AI Model Assistant

首先，我们需要打开 SenseCraft AI 的主页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>前往 SenseCraft AI</font></span></strong></a>
</div>
<br />

在导航菜单中点击 **Vision Workspace -> Grove Vision AI V2**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/52.png" style={{width:1000, height:'auto'}}/></div>

请使用 Type-C 线缆将 **Grove Vision AI V2** 连接到你的电脑。

然后点击左上角的 **Connect** 按钮，并选择设备的端口号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/53.png" style={{width:500, height:'auto'}}/></div>

### 步骤 7. 上传合适的模型

然后，请在点击 **Select Model** 后选择你想要使用的合适模型，并将其上传到 Grove Vision AI V2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/54.png" style={{width:1000, height:'auto'}}/></div>

等待 1~2 分钟以完成模型上传。

### 步骤 8. 观察结果

模型上传成功后，你就可以在右侧的预览窗口中看到来自 Grove Vision AI V2 摄像头的实时画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/55.png" style={{width:1000, height:'auto'}}/></div>

<br />

我们可以看到，在右侧的 Preview Settings 中，有两个可更改的设置选项，可以用来优化模型的识别精度。

:::tip
如果在 Preview 中没有画面显示，或者在模型信息中没有任何信息，可能是模型存在问题，你需要重新选择模型或重新上传。
:::

## 在 Home Assistant 中构建 MQTT 服务

### 步骤 9. 安装 EMQX

点击侧边栏中的 **Settings** 进入设置菜单。点击 **Add-ons** 进入插件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

使用搜索栏或浏览可用插件，找到 **emqx**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

找到 **EMQX** 后，点击它查看详情。在插件页面，你会看到概览、文档和配置选项。要安装该插件，请点击 **Install** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

EMQX 插件安装完成后，打开 **Start on boot**、**Watchdog** 和 **Show in sidebar** 开关。点击 **Start** 启动 EMQX。

在 EMQX Dashboard 登录页面中，输入默认用户名和密码。

- 默认用户名：**admin**
- 默认密码：**public**

点击 "Login" 按钮进入 EMQX Dashboard。

在 EMQX Dashboard 中，从左侧边栏菜单进入 **Authentication** 部分。点击 **Databases** 选项卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

点击 **Create** 按钮。在 **Mechanism** 下拉菜单中选择 **Password-Based**，在 **Backend** 下拉菜单中选择 **Built-in Database**。点击 "Create" 按钮创建内置数据库。

创建内置数据库后，在 "Authentication" 部分点击 **Users** 选项卡。点击 "Add User" 按钮。

- 在 "Username" 字段中输入 "seeed"。
- 在 "Password" 字段中输入 "seeed"。

返回 "Authentication" 部分中的 "Databases" 选项卡。在数据库列表中找到刚刚创建的数据库。

点击数据库旁边的开关将其启用。数据库状态应变为 "Enabled"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

## 将 Grove Vision AI V2 集成到 Home Assistant 中

### 步骤 10. 为 Grove Vision AI V2 与 XIAO 配置网络

将 Grove Vision AI V2 连接到你的电脑，并打开 Grove Vision AI V2 配置页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/56.png" style={{width:1000, height:'auto'}}/></div>

在点击左上角连接 Grove Vision AI V2 之后，请打开 MQTT 按钮，并在页面中输入你需要填写的以下信息。

- **SSID & Password**：设备需要与安装 Home Assistant 的主机处于同一局域网。因此请在同一局域网下配置网络。XIAO 只支持 2.4G WiFi，不支持 5G 网络。
- **Encryption**：选择 **AUTO**。
- **Host**：安装 Home Assistant 的主机 IP 地址。
- **Port**：`1883`。
- **clientId**：用于设备识别编号，请以 `grove_vision_ai_v2_` 为前缀，后接自定义 ID 编号。
- **username**：你刚刚创建的 EMQX 数据库的用户名。
- **password**：你刚刚创建的 EMQX 数据库的密码。

然后点击下方的 **Apply** 按钮。保存之后，**并不代表 Grove Vision AI 已经连接到网络**，请返回左侧菜单栏中的 **Process**，检查设备的 IP 地址是否已经出现，以及 MQTT 连接状态是否正确。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/57.png" style={{width:1000, height:'auto'}}/></div>

:::caution
当显示 IP Address 时，说明 WIFI 没有问题，并且 Service status 必须与图中的文字一致才表示正常。注意，如果 WIFI 不正常，MQTT 一定不正常；刚切换过来时可能会显示未连接，需要等待大约 10 秒左右，你不需要刷新页面即可看到状态，状态变化后会自动显示最新状态。
:::

### 步骤 11. 集成到 Home Assistant

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Scenario 1. If the device has been found" label="场景 1. 如果已找到设备">

到这里，正常情况下，你已经可以在 Home Assistant 的 **Settings->Devices & services** 中搜索到 Grove Vision AI V2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

请点击 **Configure** 按钮设置相关信息，即可完成设备添加。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

在 **Settings->Devices & services** 中，你可以看到设备的详细信息以及支持显示的标签页，你可以添加任意数量的标签页在概览中显示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::note

1. 如果你在前面的步骤中配置了用户名和密码，那么在添加设备时，系统可能会要求你输入它们。
2. 如果你有多个 Vision AI 设备需要添加到 Home Assistant，请留意设备的 ID 编号，它可以作为区分不同 Grove 标志的标识。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

</TabItem>

<TabItem value="Scenario 2. If the device is not found" label="场景 2. 如果未找到设备">

如果你家中的设备过多，有时 Home Assistant 可能无法直接搜索到它们。这时你可能需要手动添加设备。

在 **Settings** 页面中，选择 **Devices & Services**。

然后点击右下角的 **ADD INTEGRATION** 按钮，并搜索 **SenseCraft**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

点击 SenseCraft，并将 Action 选择为 **Add device using host/id**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

点击 **SUBMIT**，然后在下拉菜单中选择你的设备类型，例如 `Grove Vision AI V2`，再点击 **SUBMIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:500, height:'auto'}}/></div>

在接下来的输入框中，输入你设备的准确 ID。这个 ID 通常可以在设备本体上或 SenseCraft AI 网站上找到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/70.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/58.png" style={{width:1000, height:'auto'}}/></div>

下一步是配置 MQTT 服务。输入与你在网站上设置的 MQTT 服务信息相匹配的内容。如果你之前没有设置用户名和密码，这里就不需要填写。然后点击 **SUBMIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/59.png" style={{width:500, height:'auto'}}/></div>

- **Broker**：Home Assistant 的 IP 地址。
- **Port**：`1883`。
- **clientId**：对于设备识别号，请在自定义 ID 编号前加上前缀 `grove_vision_ai_v2_`。
- **username**：你刚刚创建的 EMQX 数据库的名称。
- **password**：你刚刚创建的 EMQX 数据库的密码。

</TabItem>

</Tabs>

如果设置成功，系统通常会提示你为设备选择一个位置。根据实际情况选择合适的房间或区域，然后点击 **Finish**。

配置完成后，你可以在 Home Assistant 的 "Overview" 页面查看你的设备及其状态。

按照以上步骤操作，你就可以成功将 “SenseCraft” 设备添加到你的 Home Assistant 实例中，并配置其使用 MQTT 服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

## 故障排查

### Q1：如果 Grove Vision AI V2 掉线后，在 HA 中再也看不到数据消息了，我该怎么办？

你可能需要在 SenseCraft 中删除该设备并重新添加。删除后它可能无法再次被自动搜索到，你需要手动添加设备。请参考**[此处的步骤](#第-11-步-集成到-home-assistant)**重新添加设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
