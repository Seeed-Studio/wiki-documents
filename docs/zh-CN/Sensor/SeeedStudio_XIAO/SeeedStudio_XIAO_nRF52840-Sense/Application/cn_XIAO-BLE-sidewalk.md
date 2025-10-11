---
description: 介绍如何在 XIAO nRF52840 上部署 Amazon Sidewalk 服务。
title: Seeed Studio XIAO nRF52840 在 Amazon Sidewalk 上的应用
keywords:
- sidewalk
- XIAO BLE
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-ble-sidewalk
last_update:
  date: 05/17/2023
  author: Citric
---

# Seeed Studio XIAO nRF52840 在 Amazon Sidewalk 上的应用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/19.jpg" style={{width:1000, height:'auto'}}/></div>

## 介绍

Seeed Studio 很荣幸成为 Amazon Sidewalk 生态系统合作伙伴的一员，提供支持 Sidewalk 的产品和解决方案，在 Sidewalk 网络上实现多样化的物联网用例。

Amazon Sidewalk 是一个安全的无线社区网络，使用 Amazon Sidewalk 网关（也称为 Sidewalk 桥接器），如兼容的 Amazon Echo 和 Ring 设备，为物联网终端设备提供云连接。

Amazon Sidewalk 使用蓝牙低功耗进行短距离通信，使用 900MHz 频率的 LoRa 和 FSK 无线协议覆盖更长距离，在家庭内外实现低带宽和长距离连接。Sidewalk 网关共享用户互联网带宽的一小部分，然后用于将终端连接到网络。Amazon Sidewalk 网络的强度随着网关数量的增加而增强。了解更多关于 [Amazon Sidewalk](https://www.aboutamazon.com/news/devices/everything-you-need-to-know-about-amazon-sidewalk) 的信息。

:::note
Amazon Sidewalk 目前在美国可用。开发者被允许在美国以外地区使用 Sidewalk 网关功能，仅用于其支持 Sidewalk 的终端开发和测试目的。此外，我们建议您咨询当地监管机构并验证网关是否被允许在您的地区操作其无线电，因为美国免许可频段设备仅用于开发目的。
:::

### Amazon Sidewalk 的差异化优势

Sidewalk 与当今可用的其他网络的不同之处：

- **持续连接**

    Amazon Sidewalk 网络由数百万参与的 Amazon Echo 和 Ring 设备作为 Amazon Sidewalk 桥接器提供支持，为物联网设备提供云连接。这确保了超出家庭 Wi-Fi 网络范围或依赖移动应用程序或专有网关进行云连接的设备的持续连接。

- **连接多样性**

    Amazon Sidewalk 允许智能设备通过蓝牙低功耗（BLE）和 900MHz/亚千兆赫波等无线协议进行通信。这提供了安全、可靠和多样化的连接，以支持广泛的物联网用例。

- **自动设备入网**

    Amazon Sidewalk 无接触注册过程在 Sidewalk 网关和未注册终端彼此接近时自动启动。客户可以将其支持 Sidewalk 的设备连接到 Amazon Sidewalk 网络，无需任何复杂配置。这种简便的设置增强了整体用户体验。

- **成本**

    Amazon Sidewalk 是一个免费连接的网络，覆盖美国 90% 以上的人口。您无需构建或管理单独的网络基础设施，这有助于降低资本投资和运营成本。

- **简单的开发体验**

    支持 Sidewalk 的设备预配置了与 AWS IoT Core 建立加密连接所需的安全证书。这使您能够创建物联网解决方案，快速将边缘设备连接到 AWS，为客户提供无缝的即插即用设置体验。

- **隐私和安全**

    Amazon Sidewalk 设计了多种隐私和安全功能来保护在网络上传输的数据，确保客户数据和隐私保护。

## Seeed Studio XIAO nRF52840 for Amazon Sidewalk

XIAO nRF52840 是一个通过 Amazon Sidewalk 认证的无线模块，通过 Amazon Sidewalk 网络上的蓝牙低功耗无线电技术为物联网设备提供连接。

该型号具有强大而紧凑的 SoM（系统级模块）设计，用于 Amazon Sidewalk 集成。凭借其内置的 nRF52840 芯片组，该模块提供 BLE 功能，为物联网应用实现无缝连接。Seeed Studio XIAO 拥有小巧的外形尺寸，使其非常适合空间受限的部署。凭借其可靠的性能和对 Amazon Sidewalk 的支持，它简化并加速了安全可靠的物联网解决方案的开发。

有关模块技术规格的更多详细信息，请点击[这里](https://wiki.seeedstudio.com/cn/XIAO_BLE/)。

本文档将指导您完成：

1. 安装和配置 Amazon Sidewalk 的开发环境。

2. 配置您的云服务并管理您的 XIAO nRF52840。

3. 运行 Amazon Sidewalk 的 BLE 示例程序。

完成后，您将能够运行示例应用程序并使用 Amazon Sidewalk 进行测试。

## 硬件准备

本教程的内容将最大限度地减少焊接或额外布线的需要。因此，我们将使用两个目前可用的扩展板来帮助我们尽快完成项目。当然，如果您不想额外花费，您也可以选择通过面包板或双工线缆直接将设备连接到 XIAO。也就是说，Essential 中的设备是您必须拥有的基本硬件，而 Optional 不是必需的。

### Essential

要完成本示例教程的内容，可能需要准备以下物品。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO nRF52840 Sense</th>
   <th>Amazon Sidewalk 网关 (Echo Gen4)</th>
            <th>Grove - 红色 LED 按钮</th>
            <th>J-Link</th>
            <th>USB 转 UART</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/20.jpeg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/21.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/22.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-Button.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td></td>
            <td></td>
  </tr>
 </table>
</div>

:::tip
为了便于在**美国东部-1**（北弗吉尼亚）地区之外工作的非美国开发者进行Amazon Sidewalk测试和端点开发，需要设置VPN。这样可以实现无缝访问，并确保高效参与开发过程。
:::

### 可选

为了便于接线和Grove扩展，或者通过JLink轻松连接到XIAO，您可能需要以下扩展板。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO扩展板</th>
   <th>Seeed Studio XIAO Grove底板</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 配置 Amazon Sidewalk 的开发环境

:::tip
nRF Connect SDK 快速安装的原始教程可以在[这里](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/assistant.html#installing-automatically)阅读。
:::

Nordic Semiconductor 的 Amazon Sidewalk 解决方案基于 nRF Connect SDK v2.3.0。您可以通过以下安装方法之一来设置开发环境：

- 自动安装（工具链管理器）
- [手动安装](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/gs_installing.html#install-the-required-tools)

本节将重点介绍如何通过工具链管理器安装 nRF Connect SDK，即自动安装方法。系统基于 Windows 11。

完成以下步骤，使用工具链管理器应用程序自动安装 nRF Connect SDK。该应用程序安装 nRF Connect SDK 的完整工具链，包括 nRF Connect for VS Code 扩展和 nRF Connect SDK 源代码。

### 安装先决条件

在开始设置工具链之前，请为您的操作系统安装可用的更新。有关支持的操作系统和 Zephyr 功能的信息，请参阅[要求](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/recommended_versions.html#gs-recommended-versions)。

此外，请确保安装 SEGGER J-Link 的通用版本。这是 SEGGER J-Link 与 Intel 和 ARM 程序集正常工作所必需的。

### 安装工具链管理器

工具链管理器可从 nRF Connect for Desktop 获得，这是一个跨平台工具，提供不同的应用程序来简化 nRF Connect SDK 的安装。该工具和应用程序都适用于 Windows、Linux 和 macOS。

**步骤 1**. 为您的操作系统下载 [nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/1.png" style={{width:1000, height:'auto'}}/></div>

**步骤 2**. 在您的机器上安装并运行该工具。

**步骤 3**. 在 **APPS** 部分，点击 **Toolchain Manager** 旁边的 **Install**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/2.png" style={{width:600, height:'auto'}}/></div>

**步骤 4**. 应用程序安装在您的机器上，**Install** 按钮变为 **Open**。

**步骤 5**. 在 nRF Connect for Desktop 中打开工具链管理器。

在导航栏中点击 **SDK ENVIRONMENTS** 来指定您想要安装 nRF Connect SDK 的位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/3.png" style={{width:600, height:'auto'}}/></div>

**步骤 6**. 在 SDK ENVIRONMENTS 中，点击您想要安装的 **nRF Connect SDK 版本**旁边的 **Install** 按钮。

您选择的 nRF Connect SDK 版本将安装在您的机器上。Install 按钮变为 **Open VS Code**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/30.png" style={{width:600, height:'auto'}}/></div>

:::tip
安装时间与您环境中的网络相关，预计安装需要大约**一小时**。在此期间软件可能不会有任何动作，所以请不要认为出现了卡顿，您可以通过日志检查安装进度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/4.png" style={{width:600, height:'auto'}}/></div>
:::

### 下载 Amazon Sidewalk 仓库

安装完成后，您可以通过两种方式构建应用程序：

- 使用 Visual Studio Code 和 nRF Connect for VS Code 扩展
- 使用命令行

**步骤 7**. 对于我们的项目，使用命令行就足够了。点击您安装的版本旁边的向下箭头，然后选择 **Open bash**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/23.png" style={{width:600, height:'auto'}}/></div>

您的目录结构应该如下所示：

```
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

**步骤 8**. 通过运行以下命令，从 sdk-sidewalk 仓库克隆 [Amazon Sidewalk 应用程序仓库](https://github.com/nrfconnect/sdk-sidewalk) 到 nRF Connect SDK 文件夹，并将其命名为 `sidewalk`：

```
git clone https://github.com/nrfconnect/sdk-sidewalk.git sidewalk
```
**步骤 9**. 安装 Amazon Sidewalk 的 Python 依赖项。

```
pip install -r sidewalk/requirements.txt
```

:::note
如果您的计算机尚未安装 Python 环境，请阅读[此处](https://www.digitalocean.com/community/tutorials/install-python-windows-10)的教程，在您的计算机上安装最新的 Python 3。
:::

**步骤 10**. 设置 Amazon Sidewalk 应用程序清单并更新。

检查当前清单路径：

```
west manifest --path
```

返回的路径应类似于以下格式。

```
> /path-to-ncs-folder/nrf/west.yml
```

将清单路径设置为 Amazon Sidewalk 仓库：

```
west config manifest.path sidewalk
```

Update all repositories:

```
west update
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/32.png" style={{width:800, height:'auto'}}/></div>

根据您的连接情况，更新可能需要一些时间。

验证新的清单路径：

```
west manifest --path
```

返回的路径应类似于以下格式。

```
> /path-to-ncs-folder/sidewalk/west.yml
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/31.png" style={{width:600, height:'auto'}}/></div>

请保持 Bash 窗口打开，我们几分钟后会回来。

## 配置您的 AWS 云服务

:::tip
设置 Amazon Sidewalk 产品的原始教程可以在[这里](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html)阅读。
:::

接下来我们需要配置 AWS 云服务，以便设备通过密钥连接到您的 AWS 账户。

**步骤 1**. 将 Amazon Sidewalk 示例 IoT 应用程序存储库下载到您的本地机器。打开一个新的终端（如果您使用的是 Windows，则打开一个新的 Powershell）并输入以下命令来克隆存储库。

```
git clone https://github.com/aws-samples/aws-iot-core-for-amazon-sidewalk-sample-app.git
```

**步骤 2**. 如果您是第一次使用 Amazon IoT Core，那么您可能需要注册一个根账户，或者如果您已经有根账户或 IAM 账户，请登录到 [Amazon IoT Core 控制台](https://console.aws.amazon.com/iam)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/6.png" style={{width:800, height:'auto'}}/></div>

**步骤 3**. 获取账户密钥。

登录后，在控制台右上角，点击您的用户名并选择 Security credentials。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/33.png" style={{width:400, height:'auto'}}/></div>

然后请创建一个新的凭证并保存您的 **Access Key ID** 和 **Secret Access Key**。我们将在后续步骤中使用它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/34.png" style={{width:1000, height:'auto'}}/></div>

**步骤 4**. 在您的本地机器上配置 *credentials* 文件。

:::note
如果您还没有安装 [AWS CLI](https://aws.amazon.com/cli/)，那么您可能需要安装它。
:::

如果您已经安装了 AWS CLI，那么您可以使用 aws configure 命令来配置您的凭证文件。如果您使用的是 Windows 系统，您需要在具有管理员权限的 **CMD 窗口**中执行该命令。

```
aws configure
```

然后窗口会要求您输入密钥，请分别输入并按回车键确认。

```
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY
```

接下来是选择国家和地区,这里我们需要选择 **us-east-1**。

```
region=us-east-1
```

对于其余部分，我们只需输入并保留默认设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/35.png" style={{width:800, height:'auto'}}/></div>

**步骤 5**. 添加用户权限以创建资源。

如果您的用户具有管理员权限，则已满足先决条件，您可以跳过此步骤。

:::note
本教程默认使用管理员权限账户，如果您使用的是 IAM 账户，请联系您的管理员为您的账户启用特定权限。

- 运行 `python aws-iot-core-for-amazon-sidewalk-sample-app/ApplicationServerDeployment/policies/generate_policy.py` 脚本，这将在 *ApplicationServerDeployment/policies/* 目录中生成个性化的策略文档
- 转到 IAM 控制台，使用 *DeployStackPolicy.json* 内容创建策略
- 将创建的策略分配给您的用户
请参考 [IAM 教程：创建并附加您的第一个客户托管策略](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_managed-policies.html) 获取进一步指导。

确保 *Simplicity Commander*（用于 SiLabs）存在于您的系统 PATH 环境变量中。

尝试在终端中调用 `commander --version` 以确保 Simplicity Commander 可用。
:::

## 运行 Amazon Sidewalk 的 BLE 示例

:::tip
Template Bluetooth LE 的原始教程可以在[这里](https://nrfconnect.github.io/sdk-sidewalk/testing_samples/sidewalk_application_samples/template_ble.html#template-ble)阅读。
:::

### 配置生成

**步骤 1**. 转到 AWS IoT Core for Amazon Sidewalk 工具。

打开我们之前克隆的文件夹 **aws-iot-core-for-amazon-sidewalk-sample-app**。

**步骤 2**. 填充 `config.yaml` 配置文件。设置 **NORDIC** 硬件平台。

在文件夹中打开名为 **config.yaml** 的文件（使用合适的编辑器，例如 VS Code）。粘贴以下内容并保存。

```
Config:
AWS_PROFILE: default  # Name of your AWS profile from .aws/credentials
DESTINATION_NAME: SensorAppDestination  # Sidewalk destination used for uplink traffic routing
HARDWARE_PLATFORM: NORDIC  # Available values: NORDIC, TI, SILABS or ALL
USERNAME: null
PASSWORD: null
INTERACTIVE_MODE: True
Outputs:
    DEVICE_PROFILE_ID: null
    WEB_APP_URL: null
_Paths:
    PROVISION_SCRIPT_DIR: tools/provision
    SILABS_COMMANDER_TOOLS_DIR: null  # Not needed if Silabs Commander is already in system Path. Only needed for SILABS.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/36.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3**. 为配置工具设置 Python 虚拟环境：

```
cd aws-iot-core-for-amazon-sidewalk-sample-app
python -m pip install --user virtualenv
python -m venv sample-app-env
sample-app-env\Scripts\activate.bat
pip install pip==22.3.1
python -m pip install -r requirements.txt
python -m pip install pyjwt -t .\ApplicationServerDeployment\lambda\authLibs
```

**步骤 4**. 此时您可能想要运行 `helper env_check.py` 脚本来对您的环境进行健全性检查，以防范最常见的错误。

```
python env_check.py
```

如果消息如图所示显示，那么您的环境安装已经成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/37.png" style={{width:900, height:'auto'}}/></div>

**步骤 5**. 运行设备配置脚本：

```
python EdgeDeviceProvisioning/provision_sidewalk_end_device.py
```

您应该看到以下输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/9.png" style={{width:800, height:'auto'}}/></div>

我们需要在这里生成的 `Nordic_MFG.hex` 文件，该文件最终将被烧录到 XIAO nRF52840 中。

:::note
**Nordic_MFG.hex** 是设备与您的 Amazon IoT Core 建立通信链路的唯一凭证，每个设备或账户都不相同。
:::

您的配置文件位于 `EdgeDeviceProvisioning` 目录中。设备按设备配置文件的子目录分组，如下面的结构所示：

```
EdgeDeviceProvisioning \
- DeviceProfile_<profile-id> \
- DeviceProfile.json
- WirelessDevice_<device-id>\
    --  Nordic_MFG.bin
    --  Nordic_MFG.hex
    --  WirelessDevice.json
```

请复制 **Nordic_MFG.hex** 文件并将其保存在您可以轻松找到的位置。

**步骤 6**. 退出 Python 虚拟环境：

```
deactivate
```

### 添加 MQTT 到目标

:::tip
对于本教程的这一部分，您可以阅读 Sidewalk 提供的[官方教程](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html#add-mqtt-to-destination)。
:::

### 示例概述

该示例演示了 Amazon Sidewalk 终端节点应用程序的模板。它针对蓝牙低功耗进行了优化。

该示例支持以下开发套件：

| 硬件平台 | PCA | 开发板名称 | 构建目标 |
| ------------------ | --- | ---------- | ------------ |
| nRF52840 DK        | PCA10056 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

由于Amazon Sidewalk尚未合并我们的PR提交，我们目前将通过修改支持的nRF52840 DK平台来支持XIAO nRF52840。

| 硬件平台 | 开发板名称 | 构建目标 |
| ------------------ | ---------- | ------------ |
| Seeed Studio XIAO nRF52840 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

该示例展示了蓝牙LE传输协议的Amazon Sidewalk API实现。这是一个内存优化的Amazon Sidewalk配置示例，仅支持蓝牙LE传输协议。由于占用空间较小，应用程序的两个引导加载程序分区都放置在支持的SoC（nRF52840）的内部闪存中。

#### 用户界面

按钮动作在您释放按钮时触发。要使用长按动作，请按住按钮2秒或更长时间，然后释放。

按钮分配如下：

- **按钮1（长按）-- D1**：

    恢复出厂设置 - 应用程序通知Amazon Sidewalk堆栈恢复出厂设置事件。Amazon Sidewalk库从非易失性存储中清除其配置。成功重置后，设备需要重新向云服务注册。

- **按钮2 -- D3**：

    切换连接请求 - 设备请求Amazon Sidewalk网关在设备通过蓝牙LE广播时发起连接。连接断开后，用户必须再次设置信标状态。网关可能无法始终处理此请求，因为这取决于连接到它的设备数量。

- **按钮3 -- D4**：

    发送Hello - 此操作将向云端排队一条消息。如果Amazon Sidewalk未准备就绪，它将简单地显示错误而不发送消息。队列最终会被处理，所有排队的消息都将被发送。

- **按钮4（短按）-- D9**：

    设置虚拟电池电量 - 此操作设置模拟电池电量。

- **按钮4（长按）-- D9**：
    进入DFU状态 - 此操作禁用Amazon Sidewalk堆栈并启动蓝牙LE SMP服务器。您可以使用nRF Connect移动应用程序更新固件映像。要退出DFU状态，请对设备执行电源循环。

LED表示应用程序的当前状态（尚未实现）：

- **LED 1 -- D0**：

    应用程序连接成功。

- **LED 2 -- D2**：

    应用程序注册成功。

- **LED 3 -- D5**：

    应用程序时间同步成功。

- **LED 4 -- D8**：

    应用程序链路已启动。

### 准备示例固件

此示例使用Amazon Sidewalk提供的BLE示例程序，硬件驱动程序的固件对所有XIAO nRF52840都是通用的，如果您不想执行本节中的步骤，也可以直接下载我们提供的**merged.hex**文件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/merged.hex" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>下载文件</font></span></strong>
    </a>
</div><br />

以下是要遵循的确切步骤。

**步骤1**. 从Github下载为XIAO nRF52840编写的程序。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-nRF52840-sidewalk/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载发布版本</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

**步骤2**. 下载完成后，请将文件夹解压到ncs目录中。默认路径如下：

```
C:\ncs\v2.3.0\zephyr\boards\arm\nrf52840dk_nrf52840
```

:::caution
文件目录最初保存的是 nRF52840 DK 的开发文件。为了简化操作，我们通过重命名 XIAO nRF52840 程序来覆盖开发板。

所以您需要做的就是用压缩包中的所有文件覆盖原始文件 **nrf52840dk_nrf52840** 中的所有文件。
:::

**步骤 3**. 让我们回到 nRF Connect SDK 的 Bash 窗口。输入以下命令来执行固件生成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/38.png" style={{width:600, height:'auto'}}/></div>

```
cd sidewalk/samples/template_ble/
west build -b nrf52840dk_nrf52840
```

如果执行顺利，您将看到以下输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/10.png" style={{width:800, height:'auto'}}/></div>

此时我们已经获得了示例固件，它被命名为：`merged.hex` 并存储在默认位置：

```
C:\ncs\v2.3.0\sidewalk\samples\template_ble\build\zephyr
```

您可以先将此文件与我们之前准备的 **Nordic_MFG.hex** 文件放在一起，稍后我们将一起使用它们。

### 为 XIAO nRF52840 刷写固件

**步骤 1**. 打开 **nRF Connect for Desktop**，在 APPS 中找到 **Programmer** 并安装它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/11.png" style={{width:600, height:'auto'}}/></div>

**步骤 2**. 通过 JLink 连接 XIAO nRF52840。

请通过 SWD 接口将 XIAO nRF52840 连接到 JLink。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF52840</th>
   <th>JLink（非教育版）</th>
  </tr>
  <tr>
   <td align="center">3V3</td>
   <td align="center">Vterf</td>
  </tr>
  <tr>
   <td align="center">GND</td>
   <td align="center">GND</td>
  </tr>
        <tr>
   <td align="center">SWDIO</td>
   <td align="center">SWIO</td>
  </tr>
        <tr>
   <td align="center">SWCLK</td>
   <td align="center">SWCK</td>
  </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/24.jpg" style={{width:600, height:'auto'}}/></div><br />

如果您不打算使用 XIAO 扩展板，那么您可以参考 [XIAO nRF52840 Wiki](https://wiki.seeedstudio.com/cn/XIAO_BLE#access-the-swd-pins-for-debugging-and-reflashing-bootloader) 关于使用 SWD 接口的说明，额外焊接双工线到 JLink。

**步骤 3**. 打开 Programmer 并将两个固件烧录到 XIAO nRF52840。

点击软件左上角的 **Add file** 按钮，分别添加本文中准备的 **merged.hex** 文件和 **Nordic_MFG.hex**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/12.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/13.png" style={{width:800, height:'auto'}}/></div>

然后将 JLink 连接到您的计算机，点击左上角选择您的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/14.png" style={{width:800, height:'auto'}}/></div>

连接后，点击左侧的 Read 按钮获取 XIAO 的内存分区。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/15.png" style={{width:800, height:'auto'}}/></div>

接下来点击 **Erase & write** 将固件烧录到 XIAO 中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/16.png" style={{width:800, height:'auto'}}/></div>

完成后您可以点击 **Read** 查看内存的形状是否大致正确，这样可以检查烧录是否成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/17.png" style={{width:800, height:'auto'}}/></div>

**步骤 4**. 组装 Amazon Sidewalk 设备并使其工作。

在示例预览中，我们已经标记了 LED 和按钮连接的引脚位置。接下来我们需要使用四个 Grove LED 按钮，它们不仅允许我们控制 XIAO 的工作，还可以通过按钮上的 LED 显示不同的工作状态。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF52840</th>
   <th>LED</th>
            <th>Button</th>
            <th>USB to UART</th>
  </tr>
  <tr>
   <td align="center">D0</td>
   <td align="center">LED1</td>
            <td align="center"></td>
            <td align="center"></td>
  </tr>
  <tr>
   <td align="center">D1</td>
   <td align="center"></td>
            <td align="center">Button1</td>
            <td align="center"></td>
  </tr>
        <tr>
   <td align="center">D2</td>
   <td align="center">LED2</td>
            <td align="center"></td>
            <td align="center"></td>
  </tr>
        <tr>
   <td align="center">D3</td>
   <td align="center"></td>
            <td align="center">Button2</td>
            <td align="center"></td>
  </tr>
        <tr>
            <td align="center">D4</td>
            <td align="center">LED3</td>
            <td align="center"></td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D5</td>
            <td align="center"></td>
            <td align="center">Button3</td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D8</td>
            <td align="center">LED4</td>
            <td align="center"></td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D9</td>
            <td align="center"></td>
            <td align="center">Button4</td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">RX (D7)</td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center">TX</td>
        </tr>
        <tr>
            <td align="center">TX (D6)</td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center">RX</td>
        </tr>
    </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/25.jpg" style={{width:600, height:'auto'}}/></div>

XIAO 通过 USB 供电，然后使用按钮控制 XIAO nRF52840，XIAO 操作日志可通过 UART 获取。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/18.png" style={{width:600, height:'auto'}}/></div>

## 资源

- [Amazon Sidewalk 规范](https://docs.sidewalk.amazon/specifications/)
- [Amazon Sidewalk 隐私和安全白皮书](https://m.media-amazon.com/images/G/01/sidewalk/final_privacy_security_whitepaper.pdf)

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
