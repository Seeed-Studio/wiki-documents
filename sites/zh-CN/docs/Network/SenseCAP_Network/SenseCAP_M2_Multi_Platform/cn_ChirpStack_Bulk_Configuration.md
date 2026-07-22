---
description: 本维基将指导你使用 Python 脚本在 M2 网关本地 LNS 上批量创建和配置设备实例。
title: 在 M2 网关上批量配置 ChirpStack
keywords:
  - M2 gateway
  - LoRaWAN
  - Configuration
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /bulk_configuration_chirpstack
sku: 114992982, 114993135, 114992983, 114993088, 114992981, 114993080, 114993079
sidebar_position: 6
last_update:
  date: 6/12/2026
  author: David Du
createdAt: '2026-06-12'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/cn/bulk_configuration_chirpstack/
---

本教程将指导你使用 Python 脚本，通过网关内置的 ChirpStack 平台上的 gRPC 接口，以 ABP（个性化激活）模式批量添加和激活 LoRaWAN 设备。此方法非常适合一次性部署大量设备（例如传感器节点）的场景，可显著提升配置效率。

## 1. 准备工作

在开始之前，请确保你满足以下条件：

- 一台运行 ChirpStack 的 **M2 室内网关**，并且你知道它的 IP 地址。

- 你已经创建了至少一个 **Application** 并获取了它的 **Application ID**。

- 你已经创建了一个 **Device Profile**（ABP 类型）并获取了它的 **Device Profile ID**。

- 你已经准备好一批待配置的设备，并为每个设备记录了以下信息：

    `dev_eui`（设备唯一标识符）

    `name`（设备名称，可选）

    `description`（设备描述，可选）

    `dev_addr`（设备地址）

    `nwk_s_key`（网络会话密钥）

    `app_s_key`（应用会话密钥）

:::note
你需要自行为 ABP 设备分配密钥。请确保每个设备的 `dev_addr` 在网络中是唯一的，并且密钥符合 LoRaWAN 规范（32 个十六进制字符，即 16 字节）。
:::

## 2. 环境搭建

1. **获取脚本文件**
下载或创建以下两个文件，并将它们放在同一目录下：

    `chirpstack-v3-bulk-deploy.py` – 主 Python 脚本

    `device_list.xlsx` – 包含设备列表的 Excel 文件（稍后填写）

你也可以从 [这里](https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/chirpstack-v3-bulk-deploy.py) 下载脚本。

2. **安装 Python 依赖**
此脚本需要 Python 3.7 或更高版本，并依赖 `grpcio`、`openpyxl` 和 `chirpstack-api`。我们建议使用虚拟环境，以避免污染系统自带的 Python 安装。

**适用于 macOS/Linux 用户：**

```bash 
# create project directory
mkdir chirpstack-bulk-deploy && cd chirpstack-bulk-deploy

# create virtual environment
python3 -m venv .venv

# activate the virtual environment
source .venv/bin/activate

# install dependencies
pip install chirpstack-api openpyxl
```

**适用于 Windows 用户：**

```bash 
# create project directory
mkdir chirpstack-bulk-deploy
cd chirpstack-bulk-deploy

# create virtual environment
python -m venv .venv

# activate the virtual environment
.venv\Scripts\activate

# install dependencies
pip install chirpstack-api openpyxl
```

## 3. 准备设备清单（Excel 文件）

使用 Excel、WPS 或 LibreOffice 创建一个名为 `device_list.xlsx` 的文件。第一行必须包含列标题；脚本将使用这些标题来识别列。列名（**区分大小写**）如下：

|dev_eui|    name|    description|    dev_addr|    nwk_s_key|    app_s_key|
|---|---|---|---|---|---|
|0016c001f0abcde1|abp-device-1|test device|02010101|2B7E151628AED2A6ABF7158809CF4F31|2B7E151628AED2A6ABF7158809CF4F41|
|...|abp-device-2|test device|...|...|...|

<br />

:::note
`dev_eui` 必须是 16 位十六进制字符串（例如 0101010101010101）。

`nwk_s_key` 和 `app_s_key` 必须是 32 位十六进制字符串（即 16 字节）。

如果某个设备的 dev_eui 为空，脚本会自动跳过该行。

如果 name 或 description 为空，脚本会填入空字符串。
:::

## 4. 修改脚本配置
打开 `chirpstack-v3-bulk-deploy.py`，并修改文件顶部的配置参数，使其与你的实际环境相匹配。

```python
# ===== Configuration =====
GRPC_SERVER = "192.168.x.x:8080"   # replace with the real IP of the gateway + ChirpStack gRPC port（default 8080）
API_TOKEN = "YOUR API TOKEN"
APPLICATION_ID = "YOUR APPLICATION ID"
DEVICE_PROFILE_ID = "YOUR DEVICE PROFILE ID"
EXCEL_FILE = "device_list.xlsx"
# =================
```

**参数说明：**

- **GRPC_SERVER**：网关的 IP 地址和 ChirpStack gRPC 端口。默认的 ChirpStack gRPC 端口为 8080。请确保你的电脑与网关处于同一子网，或可以路由访问网关。

- **API_TOKEN**：ChirpStack API 密钥。获取方式：登录 ChirpStack Web 界面 → 右上角用户菜单 → “API Keys” → 创建新的 API 密钥，并至少赋予以下权限：Device: create、Device: activate 和 Device keys: create。

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/get-api.png" style={{width:900, height:'auto'}}/></div></td>

<br />

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/api-token.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **APPLICATION_ID**：目标 Application 的 UUID。在 ChirpStack Web 界面中 → Applications → 选择你的 Application。

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/application-id.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **DEVICE_PROFILE_ID**：Device Profile 的 UUID。路径：Device profiles → 选择你的 ABP Profile → 从 URL 中获取。

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/ChirpStack/Bulk_Deploy/device-profile-id.png" style={{width:900, height:'auto'}}/></div></td>

<br />

- **EXCEL_FILE**：Excel 文件名；默认位于与脚本相同的目录中。

:::caution
API Token 拥有高权限，请勿泄露或将其上传到公共代码仓库。
:::

## 5. 运行脚本进行批量部署

确保虚拟环境已激活，并且 `chirpstack-v3-bulk-deploy.py` 和 `device_list.xlsx` 位于同一目录下，然后运行：

```bash
python3 chirpstack-v3-bulk-deploy.py
```

执行过程中会实时打印日志。以下是一次成功执行的示例：

```bash
Starting batch configuration of ABP devices...
✓ Successfully read 2 devices from device_list.xlsx
✓ Device 0101010101010101 created 
✓ Device 0101010101010101 keys configured 
✓ Device 0101010101010101 ABP activated 
----------------------------------------
✓ Device 0202020202020202 created 
✓ Device 0202020202020202 keys configured 
✓ Device 0202020202020202 ABP activated 
----------------------------------------
...
Batch configuration completed.
```

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>