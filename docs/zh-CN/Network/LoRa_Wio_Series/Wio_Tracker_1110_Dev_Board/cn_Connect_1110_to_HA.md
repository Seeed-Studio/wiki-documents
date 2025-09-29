---
description: 将 Wio Tracker 1110 连接到 Home Assistant
title: Home Assistant 集成
keywords:
- Home assistant
- Wio tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/wio_tracker_home_assistant
sidebar_position: 5
last_update:
  date: 1/25/2024
  author: Jessie
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>

将 [Wio Tracker 1110 开发板](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) 集成到 Home Assistant 中，实现实时跟踪和实时环境分析。[Wio Tracker 1110 开发板](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) 是一个用户友好的基于 LoRa 的跟踪开发平台，您可以使用该开发板开发更多自定义功能，让您的家庭环境更加智能和响应迅速。

## 开始使用

在本教程中，我们使用 [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) 作为 Home Assistant 主机，您可以使用任何带有 Supervisor 的 Home Assistant 主机。查看[安装指南](https://www.home-assistant.io/installation/)了解更多详情。

### 设备配置

在开始之前，请确保您已阅读 Wio Tracker 1110 开发板的[用户指南](https://wiki.seeedstudio.com/cn/Get_Started_with_Wio-Trakcer_1110/)，并将平台选择为 `SenseCAP`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

### Home Assistant 配置

导航到您的 [Home Assistant 网页界面](http://homeassistant.local:8123/)。

为了充分发挥 Home Assistant 的潜力并获得高级功能的访问权限，建议在用户界面中启用 `高级模式`。

点击您的个人资料，并启用 `高级模式`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png" alt="pir" width={800} height="auto" /></p>

#### 安装附加组件

转到[设置 > 附加组件](https://my.home-assistant.io/redirect/supervisor)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-ons.png" alt="pir" width={800} height="auto" /></p>

在官方 `附加组件` 部分下，您将找到 `File editor` 和 `Advanced SSH & Web Terminal` 附加组件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/2-ons.png" alt="pir" width={800} height="auto" /></p>

建议启用 `在侧边栏中显示`，这样您可以更容易地找到它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/show-sidebar.png" alt="pir" width={800} height="auto" /></p>

#### 安装 HACS

Home Assistant 社区商店为您提供了一个强大的用户界面来处理所有自定义需求的下载。

打开您的终端并导航到配置目录：

```cpp
cd /config
```
下载并运行 HACS 安装脚本：

```cpp
wget -q -O - https://install.hacs.xyz | bash -
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/comand-page.png" alt="pir" width={600} height="auto" /></p>

安装脚本完成后，重启 Home Assistant 以应用更改。

转到 `Settings` > `System` > `Restart`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png" alt="pir" width={800} height="auto" /></p>

导航到 `Settings` ->  `Devices & Services`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-service.png" alt="pir" width={800} height="auto" /></p>

点击 `ADD INTEGRATION` 添加新的集成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-inte.png" alt="pir" width={800} height="auto" /></p>

搜索 `HACS` 并点击它。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/HACS.png" alt="pir" width={800} height="auto" /></p>

只有最后一项（实验性功能）是可选的，您需要接受上面的所有内容才能设置 HACS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/submit.png" alt="pir" width={600} height="auto" /></p>

按照说明授权 Home Assistant 访问您的 GitHub 账户。这通常涉及输入 GitHub 提供的验证码来确认您的身份。

HACS 使用设备 OAuth 流程对 GitHub API 进行身份验证。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png
" alt="pir" width={600} height="auto" /></p>

#### 安装 SenseCraft 插件

导航到 `HACS`，点击右上角的图标，选择 `Custom repositories`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png
" alt="pir" width={800} height="auto" /></p>

复制 `Repositorie`：

**Repository**：

```cpp
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

**类别**: `集成`

点击 `Add`。现在仓库已添加到您的 HACS 中，您也可以在 `Integrations` 下的列表中找到 SenseCraft 集成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/custom-re.png" alt="pir" width={800} height="auto" /></p>

导航到 `SenseCraft` 集成并点击 `DOWNLOAD`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" alt="pir" width={800} height="auto" /></p>

我们现在已经成功完成了 SenseCraft 插件的安装。

#### 添加设备

导航到 `Settings` -> `Devices & Services` -> `SenseCraft`，点击 `ADD DEVICE`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-device-.png" alt="pir" width={800} height="auto" /></p>

选择 `Add devices using SenseCraft Account(账号集成)`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/account-inte.png" alt="pir" width={800} height="auto" /></p>

使用您的 SenseCAP Mate APP 账户登录，并选择 `global` 版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-login.png" alt="pir" width={800} height="auto" /></p>

然后您账户中的所有设备将被列出，选择您想要连接的设备，然后点击 `SUBMIT`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-device.png" alt="pir" width={800} height="auto" /></p>

连接成功后，您将看到设备和实体显示出来。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cloud-device.png" alt="pir" width={800} height="auto" /></p>

点击设备，您将看到所有上传的数据，点击 `ADD TO DASHBOARD`
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-dashboard.png" alt="pir" width={800} height="auto" /></p>

#### 添加地图卡片

在我们添加地图卡片之前，我们需要先添加一个位置实体。

打开 `File Editor` 并导航到 `configuration.yaml` 文件，添加以下代码：

```cpp
template:
  - sensor:
      - name: "Device Location"
        state: >
          {{ states('sensor.latitude') }},{{ states('sensor.longitude') }}
        attributes:
          latitude: "{{ states('sensor.latitude') }}"
          longitude: "{{ states('sensor.longitude') }}"
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/yaml2.png" alt="pir" width={800} height="auto" /></p>

:::tip
`name` 可以自定义，`states` 应该与您设备的实体 ID 相同。

您可以在 `Settings` -> `Devices and Services` -> `Entities` 中查看实体 ID
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-id.png" alt="pir" width={600} height="auto" /></p>
:::

在仪表板上点击 `ADD CARD`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-card.png" alt="pir" width={800} height="auto" /></p>

选择地图卡片。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-card.png" alt="pir" width={800} height="auto" /></p>

将代码复制到 `CODE EDITOR` 中并点击 `SAVE`。

```cpp
type: map
entities:
  - entity: sensor.device_location
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/code-editor.png" alt="pir" width={800} height="auto" /></p>

:::tip
实体应该与您的实体 ID 相同，您可以在 `设置` -> `设备和服务` -> `实体` 中查看实体 ID
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-location.png" alt="pir" width={600} height="auto" /></p>
:::

您现在可以在地图上查看实时位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-map.png" alt="pir" width={800} height="auto" /></p>

开发板的所有数据都可以在仪表板中查看。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>
