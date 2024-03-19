---
description: To preview LoRaWAN feature of SenseCAP Indicator
title: LoRaWAN End Node - SenseCAP Indicator
keywords:
- indicator
- Touch
- Screen
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png
slug: /cn/SenseCAP_Indicator_Application_LoRaWAN
toc_max_heading_level: 4
sidebar_position: 4
last_update:
  date: 2024-3-3
  author: guiying zhao
tags:
  - device
categories:
  - SenseCAP
---

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png"/>
</div>
## 实践演示

在本节中，我们将通过实际演示深入了解SenseCAP Indicator的基本LoRaWAN（*Class C*和*OTAA*）功能。该过程分为三个主要步骤：

1. [获取固件](https://chat.openai.com/c/897d73c3-8b5c-48b1-a06c-a26707ca48fd#flash_firmware)：根据需要自定义并安装固件。
2. [注册设备](https://chat.openai.com/c/897d73c3-8b5c-48b1-a06c-a26707ca48fd#HEAD_register_device)：将您的设备添加到LoRaWAN网络服务器中。
3. [配置LoRaWAN凭据](https://chat.openai.com/c/897d73c3-8b5c-48b1-a06c-a26707ca48fd#configure_credentials)：在SenseCAP Indicator上输入必要的网络详细信息。

在我们开始之前，让我们先了解一些关于LoRaWAN的背景知识。

## LoRaWAN

LoRaWAN被描述为一种低功率、广域（LPWA）网络协议，可将电池供电的设备无线连接到大范围或网络中的互联网。它是LoRa无线系统的一部分，并在无许可频谱上运行，支持带宽有限的长距离通信。它以长距离通信（最多10英里）、长电池寿命（最长10年）、低成本和低功耗使用为特点，数据负载大小在51到241字节之间不等，具体取决于数据[^1].

[^1]: [A Gentle Introduction to LoRaWAN Gateways & Nodes
](https://www.seeedstudio.com/blog/2021/04/27/a-gentle-introduction-to-lorawan-gateways-nodes/)

<div style={{ textAlign: 'center' }}>
<img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" alt="LoRaWAN Framework " />

<div style={{ marginTop: '-8px' }}><em>LoRaWAN Network Framework（
LoRaWAN网络框架）</em></div>

</div>  

##  先进感知系统

Seeed Studio的“先进感知系统”是一种[物联网解决方案](https://chat.openai.com/SenseCAP_introduction)，提供了一整套传感、网络、边缘计算工具和云平台，旨在增强各行业对环境的感知。该系统配备了各种模块和设备[^2]，充当数字世界的“眼睛和耳朵”，促进对真实世界的深刻理解。

<div style={{ textAlign: 'center' }}>
<img class='border-radius: 10px;' width={680} src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/03/Seeed-Studio-Advanced-Perception-System-2048x1150.png" alt="Advanced Perception System" />

<div style={{ marginTop: '-8px' }}><em>Advanced Perception System Layers（先进感知系统层）</em></div>

<br/>
</div>

SenseCAP团队主要专注于传感器和网络组件，致力于提供一流的质量和定制的行业解决方案。他们的工作导致了一系列备受赞誉的产品的诞生，如创新的[智慧村解决方案](https://www.seeedstudio.com/smart-village)，该解决方案因其实用性和前瞻性设计而受到赞扬。

在Helium网络领域，团队的贡献尤其引人注目。像SenseCAP M1、M2和M4这样的设备不仅是高性能的Helium热点，而且在帮助用户赚取HNT加密货币的同时，构建了一个去中心化的无线LoRaWAN®网络基础设施起着关键作用。SenseCAP M4 Square因其能够运行多个Web 3.0应用程序而脱颖而出，从而简化了复杂的多应用系统的部署。[^3]

凭借着这一深厚的专业知识和与多样化客户群体的持续互动，SenseCAP团队战略性地决定将LoRa功能集成到SenseCAP Indicator中。

[^2]: [SenseCAP Products - Bazzar](https://www.seeedstudio.com/SenseCAP-c-1825.html)
[^3]: [SenseCAP MX](https://www.sensecapmx.com/)

让我们更仔细地了解[SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html)的LoRaWAN功能。

## 概述

| Feature（功能）                      | Details（详细信息）                                               |
|:---:|:---:|
| Radio Transceivers（无线收发器）        | SX1262                                                       |
| Classes Supported（支持的类别）         | Class A/B/C                                                  |
| Supported Frequency Bands（支持的频段） | AS923, AU915, CN779, EU433, EU868, KR920, IN865, US915, RU864, US915 |
| LoRaWAN Mac Version（LoRaWAN MAC版本） | 1.0.4/1.1.0                                                  |
| End-device LoRaWAN Stack Adopted（采用的终端设备LoRaWAN协议栈） | [LoRaMac-node](https://github.com/Lora-net/LoRaMac-node/releases/tag/v4.7.0)     |
| Documentation（文档资料）              | [LoRaMac Documentation](http://stackforce.github.io/LoRaMac-doc/) |

<!-- |Regional parameters|RP002-1.0.3| -->

## Step 1. 获取固件 {#flash_firmware}

### 1.1 下载固件:

To begin,从 GitHub 发布页面下载 SenseCAP Indicator 的 LoRaWAN 固件 `indicator_lorawan.bin`。

<div class="github_container" style={{textAlign: 'center'}}>

<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases">

<strong><span><font color={'FFFFFF'} size={"4"}> Download the Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>

</div>
<br />

:::信息：对定制固件感兴趣吗？

[ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/index.html#ide)(v5.1) 提供了构建自己固件的见解。您可以访问和修改 [源代码](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) 来满足您的特定需求。

:::



### 1.2 刷写固件:

要将固件刷写到 SenseCAP 指示器上，请先下载固件，然后使用 esptool（如果您有 ESP-IDF 环境，则使用 `esptool.py`）进行刷写（具体指南请参阅[说明](https://chat.openai.com/SenseCAP_Indicator_Application_LoRaWAN)）。

**在 Windows 上使用 esptool 刷写固件：**

在 Windows 命令提示符中使用以下命令进行固件刷写：

```jsx
<tool_path>/esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 <firmware_path>/indicator_lorawan.bin 
```

例如，如果您的 `flash_bin` 文件夹位于 `D:` 盘，并包含以下结构：

```sh
flash_bin/
├── esptool.exe
└── indicator_lorawan.bin
```

您的命令将如下所示：

```sh
./esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_nonport_flash.png.png"/>
</div>

如果您有多个端口并需要指定其中一个，请使用 `-p` 或 `--port` 参数：

```sh
./esptool.exe --chip esp32s3 -p COM20 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_port_flash.png"/>
</div>
:::注意：

Mac 用户应将 `./esptool.exe` 替换为 `./esptool`。

如果在刷写过程中遇到问题，请考虑降低 **波特率** 或参考[这些故障排除步骤](https://askubuntu.com/questions/1411463/dev-ttyusb0-file-disappears-from-dev-directory-while-using-device)。:::

固件成功刷写后，从随后的步骤中获取 LoRaWAN 网络服务器的关键参数，如设备 EUI 和 APPkey。

## Step 2. 在 LoRaWAN 网络服务器上注册设备 {#HEAD_register_device}

> 在开始之前，请确保您的设备位于 LoRaWAN 网络的覆盖范围内。

本节将指导您连接到本地 LoRaWAN 网络服务器。我们将以 [ChirpStack](https://www.chirpstack.io/) 平台为例，结合 [SenseCAP M2 多平台 LoRaWAN 室内网关 (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)。 *如果您使用的是不同的网络服务器，操作步骤将类似*；您需要收集激活所需的关键信息：

- OTAA（空中激活）:
  - DevEUI（设备EUI）
  - AppKey（应用密钥）
  - JoinEUI/AppEUI（需要Mac版本1.1.0）
- ABP（个性化激活）:
  - DevEUI（设备EUI）
  - DevAddr（设备地址）
  - AppSKey（应用会话密钥）
  - NwkSKey（网络会话密钥）

<!-- lorawan --eui c53364863bca6cad --app_key 220a52c272e2b1151ef5b626c0dab025 -->
<!-- lorawan --eui 97752c0092d12add --apps_key 22222222222222222222222222222222 --nwks_key 11111111111111111111111111111111 --dev_addr 33333333 -->
### 2.1 配置 SenseCAP LoRaWAN 网关

要配置您的 SenseCAP 网关，请访问其 Web 界面，在那里您将开始设置 ChirpStack 网络服务器。下面是显示配置页面的视觉指南：

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/gateway_config.png"/>
</div>
调整设置后，单击 `保存并应用` 以提交您的更改。然后，您可以使用提供的 URL（例如，http://192.168.1.102:8080）访问 ChirpStack 界面。

使用以下默认凭据登录：

- **用户名：** `admin`
- **密码：** `admin`

有关更多详细信息和高级配置选项，请访问 [SenseCAP M2 网关 LNS 配置指南](https://wiki.seeedstudio.com/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/)。

### 2.2 配置本地网络服务器 (ChirpStack)

有关详细功能和 LoRaWAN 版本支持，请参阅 ChirpStack 文档：[ChirpStack 网络服务器文档](https://www.chirpstack.io/network-server/features/lorawan-versions/)。

以下是使用 ChirpStack 配置本地网络服务器的步骤：

1. **[创建设备配置文件](https://chat.openai.com/c/80faa03b-5ba5-4c79-8f78-a07669c3247b#create_dev_profile):** 这将标准化您的设备设置和功能。这对于确保您的设备在网络内有效通信至关重要。
2. **[添加应用程序](https://chat.openai.com/c/80faa03b-5ba5-4c79-8f78-a07669c3247b#add_appication):** 这有助于组织和管理您的设备。应用程序用于分组共享相同目的或特征的设备，使管理更加简单。
3. **[在应用程序下注册设备](https://chat.openai.com/c/80faa03b-5ba5-4c79-8f78-a07669c3247b#register_device):** 这一步将您的设备与您在应用程序中建立的特定设置和数据处理规则联系起来。这是确保您的设备在您的网络内正常运行的关键步骤。

#### 2.2.1 创建设备配置文件 {#create_dev_profile}

在 `Device profiles（设备配置文件）` 中创建新的设备配置文件，请转到侧边栏中的 `Tenant`，然后选择 `设备配置文件`。

<div align="center">
  <img class='border-radius: 10px;' width={220} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/sidebar_device_profile.png"/>
</div>
创建设备配置文件是确保您的设备在 LoRaWAN 网络上有效通信的关键步骤。这涉及选择影响设备性能和兼容性的技术参数。以下是设置的步骤：

- **MAC 版本：** 这指的是您的设备使用的介质访问控制（MAC）协议版本。MAC 协议对于管理设备如何访问网络至关重要。您可以选择 v1.0.4 和 v1.1.0 之间的版本。
- **区域参数修订：** 这些是根据设备地理位置需要配置的特定参数。它们确保设备符合当地的法规和网络规范。

**选择 MAC 版本**

您选择的 MAC 版本至关重要，因为它确定设备所需的一组凭据：

<Tabs> <TabItem value='MAC Version 1.0.4'>

您将需要以下凭据：

- **DevEUI：** 这是为您的设备分配的唯一标识符，确保全球唯一性。
- **AppKey：** 用于加密和保护设备通信的秘钥。

</TabItem> <TabItem value='MAC Version 1.1.0'>

您的设备将需要以下凭据：

- **DevEUI：** 用于您的设备的全局唯一标识符。
- **AppEUI/JoinEUI：** 用于连接到您的设备的应用程序的唯一标识符。
- **AppKey：** 用于保护通信的加密密钥。

</TabItem> </Tabs>

**选择区域参数修订**

在设置 LoRaWAN 网络的设备配置文件的上下文中，您选择的区域参数（RP）版本对于确保您的设备符合特定区域标准和规范至关重要。

**当前设置**

目前，我们正在设置一个 MAC version为 `1.0.4` 和Regional Parameters Revision（区域参数修订）为 `RP002-1.0.2` 的设备配置文件。

:::info 区域参数修订 对于在 LoRaWAN 网络上配置设备配置文件，`RP002-1.0.2` 是当前需求的一个合适选择。根据 `v4.7.0` LoRaMac-node 规范，建议使用 `RP002-1.0.3`。:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_device_profile_check.png"/>
</div>
正确理解并配置必要的元素是确保您的设备在 LoRaWAN 网络上有效且安全通信的关键。

要使用 **Class C（C类）** 设备类型，重要的是在您的设备配置文件中明确启用此功能。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_classC_enable.png"/>
</div>


**解码器函数**

确实，要使您的设备传输的有效载荷数据具有意义并可解释，必须在设备配置文件中实现一个解码器。该解码器将把原始二进制数据转换为可读格式，让您能够有效地理解和利用设备发送的信息。

<details> <summary>点击复制 Decoder.js</summary>

解码器来自 [GitHub 仓库](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/docs/ChirpStackV4_Decoder.js)

```js
function decodeUplink(input) {
    var decoded = {
        data:[]
    };
    var type;
    var floatNumber;

    if ( (input.bytes.length  % 5) !== 0) {
        decoded.data.push({
            type: "error",
            Value: -1
        });

        return { data: decoded }
    }

    const arrayBuffer = new ArrayBuffer(4);
    const dataView = new DataView(arrayBuffer);
    
    for(let j =0 ; j < input.bytes.length; j+=5) {
        var num =0;
        switch ( input.bytes[j]) {
            case 0:
                type = 'Temp';
                num  = 2;
                break;
            case 1:
                type = 'Humidity';
                num  = 2;
                break;
            case 2:
                type = 'CO2';
                num  = 0;
                break;
            case 3:
                type = 'TVOC';
                num  = 0;
                break;
            case 4:
                type = 'Light';
                num  = 0;
                break;
            default:
                type = 'unknown';
                break;
        }
        for (let i = 0; i < 4; i++) {
            dataView.setUint8(i, input.bytes[j+i+1]);
        }
        floatNumber = dataView.getFloat32(0, true); 
        decoded.data.push({
            type:  type,
            Value: floatNumber.toFixed(num)
        });
    }
    return { data: decoded }
}

function encodeDownlink(input) {
  return {
    bytes: [225, 230, 255, 0]
  };
}
```

</details>

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_decoder.png"/>
</div>

设备配置文件创建完成后，下一步是添加一个应用程序。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_profile.png"/>
</div>


#### 2.2.2 Add an Application（添加一个应用程序） {#add_appication}

在您的 LoRaWAN 网络服务器中创建和配置一个应用程序来管理您的设备。

要创建一个新的应用程序，请转到侧边栏中的 'Tenant'，然后选择 'Application'。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_create.png"/>
</div>

To submit, set the Name and optionally provide a description.

#### 2.2.3 在应用程序下注册一个设备 {#register_device}

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_device.png"/>
</div>

在您的应用程序中点击 `Add device（添加设备）` 按钮。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_device_add.png"/>
</div>
要添加设备，您需要指定一个 Name（`名称）`，并提供一个` Device EUI（设备 EUI）`，以及之前创建的 `Device Profile（设备配置文件）`。

您可以选择自动生成Device EUI，也可以使用设备中现有的Device EUI。

在这个过程中，我们将使用自动生成的Device EUI。在提交这些详细信息后，设备将被添加到应用程序中，并且您将被自动重定向到 OTAA 密钥部分。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_otaa.png"/>
</div>
点击按钮生成一个随机的 **应用密钥 (AppKey)**，或选择使用预先存在的密钥。确保您具有所有必要的凭据和参数。对于 *MAC 版本 1.0.4*，所需的凭据是：

- **DevEUI (示例):** `5d61e4648dc926e2`
- **AppKey (示例):** `ec2b966c2c4bbe94a6ef79d0479db0e5`

有了这些详细信息，我们有以下命令：

```sh
lorawan --eui 5d61e4648dc926e2 --app_key ec2b966c2c4bbe94a6ef79d0479db0e5
```

要获取额外命令和帮助，请参阅 [控制台命令](https://chat.openai.com/c/80faa03b-5ba5-4c79-8f78-a07669c3247b#commands) 部分。

## Step 3. 配置 SenseCAP 指示器加入网络 {#configure_credentials}

要与您的 SenseCAP 指示器建立连接，您可以使用任何 **串口工具**（[Minicom](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom)、[Putty](https://www.putty.org/)等），或者只需使用 `idf monitor`（请参考 ESP-IDF 文档中提供的详细[说明](https://docs.espressif.com/projects/esp-idf/en/v5.1.2/esp32/api-guides/tools/idf-monitor.html)）：

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esp_idf_monitor.png"/>
</div>
:::注意： 在进行此步骤之前，请确保您的设备尚未启动 LoRaWAN 连接。 如果已经启动了连接，您需要停止它。

 :::

在控制台中输入包括凭据的命令。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_otaa_config.png"/>
</div>

现在，您应该能够在您的 SenseCAP 指示器上查看密钥。如有必要，进行任何必要的配置更新。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_press_join.png"/>
</div>

当您按下 *Join* 按钮时，您将能够直接通过 *控制台* 观察连接过程，从而监视和验证连接成功建立。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_console.png"/>
</div>

## Step 4 **发送和接收消息** {#uplink_and_downlink}

在本节中，我们将为您介绍监视设备与 LoRaWAN 网络之间的上行和下行通信的过程。

### Uplink Message（上行消息）

在 LoRaWAN 网络中，上行消息是至关重要的，它使设备（如 SenseCAP 指示器）能够向网络服务器传输数据。这些消息对于报告 *传感器数据*、设备状态和其他遥测信息至关重要。

<details> <summary>上行消息的概念</summary>

**LoRaWAN 中的上行消息：**

在 LoRaWAN 网络中，上行消息是由终端设备（如 SenseCAP 指示器）发起并通过网关发送到网络服务器的任何通信。这些消息通常用于传输传感器读数或设备状态。

1. **数据收集：** SenseCAP 指示器从其传感器或内部流程中收集数据。这可能包括环境读数、设备状态或其他相关指标。
2. **数据封装：** 然后，收集到的数据被打包成适合传输的*预定义格式*。这可能涉及对数据进行编码以优化负载大小并确保有效的传输。
3. **发送消息：** 设备通过 LoRaWAN 网络传输上行消息。这种传输通常根据特定的间隔（例如，每 5 分钟）进行安排，或者由某些事件（例如，阈值违规）触发。

**在网络服务器上接收和处理：**

一旦 SenseCAP 指示器发送了上行消息，它将通过网关接收到 LoRaWAN 网络服务器。然后，网络服务器会按以下方式处理消息：

1. **接收消息：** 网络服务器从网关接收到上行消息并对其进行解码。
2. **数据处理和分析：** 解码后，服务器处理数据，这可能涉及记录数据、触发警报或进行进一步分析。数据可以包括各种类型的信息，例如温度读数、湿度水平或其他传感器数据，具体取决于设备的能力。
3. **响应操作：** 基于收到的数据，网络服务器可能会采取行动，例如向设备发送包含指令或更新的下行消息。这种响应可以根据预定义的规则自动进行，也可以由监控系统的用户手动触发。

</details>

#### 上行消息：上传传感器数据

在使用 SenseCAP 指示器进行 LoRaWAN 演示时，上行消息可能包括简单的传感器数据，如温度或湿度读数。

一旦 *加入过程* 成功，您可以在 `LoRaWAN frames` 部分中查看日志，监视数据传输，并获得设备与网络通信的详细说明。

:::提示    导航到您创建的应用程序中的设备的 *LoRaWAN 帧* 部分，并找到您的特定设备。在这里，您可以监视和管理设备传输和接收的数据包，确保在 LoRaWAN 网络中进行顺畅的通信和操作。 :::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_frame.png"/>
</div>

现在，启用了解码器功能后，您应该能够在事件部分看到解析后的数据（您可以通过点击 `+up` 按钮来显示）。这将使您能够更有效地理解和分析来自您的设备的传入数据。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_event_view.png"/>
</div>

### Downlink Message（下行消息）

LoRaWAN 网络中的下行过程对于双向通信至关重要，它允许网络服务器将数据和命令传输回 SenseCAP 指示器设备。这种能力特别适用于各种操作命令、配置更改或固件更新。

<details>
<summary>The Concept of Downlink Message（下行消息的概念）</summary>
**LoRaWAN中的下行消息:**

在LoRaWAN演示环境中，下行消息用于控制SenseCAP指示器上的动画灯泡，允许用户将其开启或关闭。然而，此功能可以根据需要扩展以执行特定的命令或配置。

**发送下行消息**

1. **启动下行消息**：要发送下行消息，通常会使用网络服务器的界面。导航到您可以为设备安排下行消息的部分。

2. **启动下行消息**：要发送下行消息，通常会使用网络服务器的界面。导航到您可以为设备安排下行消息的部分。

3. **安排消息**：撰写消息后，安排在适当的时间发送。定时可能取决于各种因素，例如设备的数据传输计划或其预期的活动时间。

**Receiving and Processing the Downlink Message on the Device**

一旦LoRaWAN网络服务器发送了下行消息，SenseCAP指示器将在其下一个接收窗口期间接收到该消息。设备会按照以下方式处理消息：

1. **消息接收**：SenseCAP指示器在预定义的接收窗口期间监听下行消息。设备在这些时间段内处于接收状态是至关重要的。

2. **处理消息**：收到下行消息后，设备将处理其内容。这可能涉及更改设置、更新参数，或触发类似切换继电器或调整传感器阈值的动作。[^5].

[^5]: [TxData Function - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L445)

3. **反馈和确认**：如果下行消息需要确认（例如确认下行消息），设备将在其下一个上行消息中发送确认。

</details>

#### 演示消息：控制灯泡

在这个演示中，我们将演示如何通过LoRaWAN网络使用下行消息来控制SenseCAP指示器上的模拟灯泡。这个例子展示了下行通信在远程设备管理中的实际应用。

**1. 场景概述：**

- 在这个演示中，SenseCAP指示器配置了一个虚拟灯泡，代表了一个简单的可控设备。
- 该灯泡有两种状态：'开启'和'关闭'，可以通过从LoRaWAN网络服务器发送的下行消息进行控制。

**2. 准备下行消息：**

- 为了控制灯泡，为下行消息定义了特定的负载结构。为简单起见，假设：
  - 发送负载 `0001` 打开灯泡。
  - 发送负载 `0000` 关闭灯泡。

 - 这些负载被编码成SenseCAP指示器程序可理解并执行的格式。.[^6]

[^6]: [lorawan_rx_data_handle function - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L591C33-L591C33)

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bulb_payload.png"/>
</div>
**3. 发送下行消息：**

 - 通过网络服务器的界面，您可以安排带有相应负载的下行消息。
- 然后，消息被排队并在SenseCAP指示器的下一个可用接收窗口期间发送（因此存在延迟）。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/queue_packet.png"/>
</div>
**4. 接收下行消息：**

要打开灯泡，您安排了一个带有负载 `0001` 的下行消息。要关闭它，您使用负载 `0000`。由于我已经排队了一个带有负载 `0001` 的下行消息，现在我想发送一个负载 `0000` 的下行消息来关闭灯泡。

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/console_bulb.png"/>
</div>
您可以看到灯泡已经 **关闭**。

## 待探索的功能 {#function}

SenseCAP指示器具有广泛的功能等待探索。在这个演示中，我们演示了上传传感器数据和使用下行消息来控制SenseCAP指示器的虚拟灯泡。

**待探索的关键功能：**

**1. 命令接收和执行：**

- SenseCAP指示器有效地接收下行消息。
- 它处理这些消息，解释命令，如打开或关闭虚拟灯泡。
- 灯泡的状态相应地发生变化，提供了设备控制的真实模拟。

**2. 确认和验证：**

- 在命令执行之后，SenseCAP指示器发送回一个上行消息作为确认。
- 可以通过网络服务器的界面跟踪这个确认，确保命令被有效接收和执行。

**3. 实际应用：**

- 这个简单的演示突显了LoRaWAN下行消息在操作物联网设备中的实用性。
- 它展示了物联网生态系统的一个关键方面：远程指导和管理设备的能力，展示了其实际价值。

这个演示只是一个开始。SenseCAP指示器为各种物联网应用提供了一个多功能平台，从环境监测到智能自动化。通过深入了解其功能，您可以释放出这个强大工具的全部潜力，为您的物联网项目提供创新解决方案和增强控制。我们鼓励您进行实验，发现SenseCAP指示器在增强物联网工作中的各种方法。

## 控制台手册页面 {#commands} 

<!-- check the [indicator_lorawan - README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/README.md)): -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_cmd_all.png"/>
</div>
### **lorawan**

此命令用于配置设备的LoRaWAN网络信息。它允许您设置用于OTAA（空中激活）和ABP（个性化激活）方法的各种参数。

##### 用法:

```sh
lorawan [--eui=] [--join_eui=] [--app_key=] [--dev_addr=] [--apps_key=] [--nwks_key=]
```

##### Options:
- `--eui=`: 设置设备的扩展唯一标识符（EUI）。它需要8位十六进制数字，最高有效位（MSB）在前。
  
- `--join_eui=`: 设置JOIN EUI（曾称为APP EUI），它是OTAA中的应用标识符。它需要8位十六进制数字，最高有效位在前。
- `--app_key=`: 设置APP KEY，它是OTAA加入过程中使用的加密密钥。它需要16位十六进制数字，最高有效位在前。
- `--dev_addr=`: 设置ABP的设备地址。它是4位十六进制数字标识符，最高有效位在前。
- `--apps_key=`: 设置ABP的APPS KEY，用于加密应用负载。它需要16位十六进制数字，最高有效位在前。
- `--nwks_key=`: 设置ABP的NWKS KEY，用于加密网络负载和设备身份验证。它需要16位十六进制数字，最高有效位在前。

## 常见问题

<details>
<summary> SenseCAP指示器能否作为我的LoRaWAN网关？</summary>

不，根据SX1262 lora收发器，SenseCAP指示器并非设计用于作为LoRaWAN网关。它主要是LoRaWAN网络架构中的终端设备。LoRaWAN网关通常具有不同的硬件和软件能力，旨在将多个终端设备（如SenseCAP指示器）连接到网络服务器。如果您正在寻找LoRaWAN网关，应考虑专门设计用于此目的的设备。
</details>

<details>
<summary>为什么真实的网络服务器没有发送joinAccept？</summary>

**注意：** 设备未能从网络服务器接收到 `joinAccept` 的情况可能有几种：

- **频率更改：** 如果您更改了频率设置但保留了相同的设备凭据在网络服务器上，设备可能无法正确同步。
- **设备 Flash 清除：** 如果您清除了设备的 Flash 存储但继续使用相同的凭据，则可能会导致同步问题。

在这两种情况下，确保 OTAA（Over-the-Air Activation）设备的一次性数字 (nonces) 同步是至关重要的。为了解决这个问题，可以在网络服务器上使用 `Flush OTAA device nonces` 功能。这个操作将重置一次性数字，并帮助重新建立正确的连接。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_flush_nonces.png"/>
</div>
</details>

<details>
<summary>发送哪个FPort下行消息?</summary>

在我们当前的LoRaWAN演示设置中，没有预定义用于发送下行消息的端口。演示代码设计得很灵活，可以根据您的特定需求进行调整。

如果您需要在特定端口上以特定方式处理消息，您可以相应地修改代码。这种定制化可以根据不同的端口定制下行消息的处理方式，使您能够更好地控制设备如何解释和响应这些通信。

</details>

<details>
<summary>如何使用MAC 1.1.0版本?</summary>


要使用LoRaWAN MAC版本1.1.0的功能，必须适当配置加密设置。您可以使用`idf.py menuconfig`命令启用`USE LRWAN_1_1_X_CRYPTO`选项来完成此操作。

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/menuconfig_110.png"/>
</div>
LoRaWAN版本`1.1.0`的实施需要特定的加密算法来增强安全性。通过设置此选项，您确保您的设备与此版本中引入的增强安全功能和协议兼容。
</details>

## ODM 服务

Seeed Studio 提供全面的一站式 ODM 服务，以满足不同需求的快速定制和扩展要求。如果您希望通过专业功能定制您的项目，或者需要帮助高效扩展您的业务，请与我们联系。如需咨询和更详细的信息，请通过 iot@seeed.cc 与我们联系。我们将竭诚帮助您将独特的想法变为现实。

## 技术支持

**需要帮助解决 SenseCAP Indicator 的问题吗？我们在这里帮助您！**

如果您在按照本教程操作时遇到任何问题或有任何疑问，请随时联系我们的技术支持团队。我们随时为您提供帮助！

访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提出您的问题，或者通过 [GitHub 讨论区](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) 分享您的想法！
