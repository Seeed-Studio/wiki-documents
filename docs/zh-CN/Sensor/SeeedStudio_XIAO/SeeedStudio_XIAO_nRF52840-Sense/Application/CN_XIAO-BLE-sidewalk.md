---
description: Introducing how to deploy Amazon Sidewalk's services on the XIAO nRF52840.
title: Amazon Sidewalk 应用
keywords:
- sidewalk
- XIAO BLE
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-ble-sidewalk
last_update:
  date: 10/17/2023
  author: 赵桂莹
---

# 将 Amazon Sidewalk 部署在 XIAO nRF52840

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/19.jpg" style={{width:1000, height:'auto'}}/></div>

## 介绍

Seeed Studio 很荣幸成为 Amazon Sidewalk 生态系统合作伙伴的一员，提供支持 Sidewalk 的产品和解决方案，从而在 Sidewalk 网络上实现各种物联网用例。Amazon Sidewalk 是一个安全的无线社区网络，它使用 Amazon Sidewalk Gateway（也称为 Sidewalk Bridge）（例如兼容的 Amazon Echo 和 Ring 设备）为 IoT 端点设备提供云连接。Amazon Sidewalk 使用低功耗蓝牙进行短距离通信，并使用 900MHz 频率的 LoRa 和 FSK 无线电协议来覆盖更远的距离，从而在家庭内外实现低带宽和远程连接。Sidewalk 网关共享用户互联网带宽的一小部分，然后将其用于将端点连接到网络。Amazon Sidewalk 网络的强度随着网关数量的增加而增强。学习更多关于 [Amazon Sidewalk](https://www.aboutamazon.com/news/devices/everything-you-need-to-know-about-amazon-sidewalk).

:::注意
Amazon Sidewalk 目前已在美国推出。开发人员只能出于其支持 Sidewalk 的端点开发和测试目的在美国境外使用 Sidewalk 网关功能。此外，我们建议您咨询当地监管机构，并验证网关是否被允许在您所在的地区运行其无线电，因为美国免许可频段设备仅用于开发目的。
:::

### Amazon Sidewalk的差异化

Sidewalk 与当今可用的其他网络有何不同：

- **持续连接**

    Amazon Sidewalk 网络由数百万个参与的 Amazon Echo 和 Ring 设备（作为 Amazon Sidewalk Bridge）提供支持，为 IoT 设备提供云连接。这可确保家庭 Wi-Fi 网络范围之外的设备或依赖移动应用程序或专有网关进行云连接的设备保持持续连接。

- **连接多功能性**

    Amazon Sidewalk 允许智能设备通过低功耗蓝牙 (BLE) 和 900MHz/sub-GHz 波等无线协议进行通信。这提供了安全、可靠和多功能的连接，以支持广泛的物联网用例。

- **自动设备登录**

    当 Sidewalk 网关和未注册的终端节点彼此距离很近时，Amazon Sidewalk 非接触式注册过程会自动启动。客户可以将支持 Sidewalk 的设备连接到 Amazon Sidewalk 网络，无需任何复杂的配置。这种简单的设置增强了整体用户体验。

- **成本**

    Amazon Sidewalk 是一个免费连接的网络，覆盖超过 90% 的美国人口。您无需构建或管理单独的网络基础设施，这有助于降低资本投资和运营成本。

- **简单开发体验**

    支持 Sidewalk 的设备预先配置了与 AWS IoT Core 建立加密连接所需的安全证书。这使您能够创建 IoT 解决方案，将边缘设备快速连接到 AWS，从而为客户提供无缝的即插即用设置体验。

- **隐私和安全**

    Amazon Sidewalk 设计有多种隐私和安全功能，可以保护网络上传输的数据，确保客户数据和隐私得到保护。

## 适用于 Amazon Sidewalk 的 Seeed Studio XIAO nRF52840

XIAO nRF52840 是一款符合 Amazon Sidewalk 标准的无线模块，可通过 Amazon Sidewalk 网络上的蓝牙低功耗无线电技术提供物联网设备连接。

该模型具有强大而紧凑的 SoM（模块上系统）设计，用于 Amazon Sidewalk 集成。该模块内置 nRF52840 芯片组，提供 BLE 功能，支持物联网应用的无缝连接。Seeed Studio XIAO 外形小巧，非常适合空间有限的部署。凭借其可靠的性能和对 Amazon Sidewalk 的支持，它简化并加速了安全可靠的 IoT 解决方案的开发。

有关模块技术规格的更多详细信息，请点击 [此处](https://wiki.seeedstudio.com/XIAO_BLE/).

该文档将指导您完成：

1. 安装并配置Amazon Sidewalk的开发环境。

2. 配置您的云服务并管理您的 XIAO nRF52840。

3. 运行 Amazon Sidewalk 的 BLE 示例程序。

完成后，您将能够运行示例应用程序并使用 Amazon Sidewalk 进行测试。

## 硬件准备

本教程的内容将最大限度地减少焊接或额外接线的需要。因此我们将使用目前可用的两块扩展板来帮助我们尽快完成项目。当然，如果您不想增加额外费用，也可以选择通过面包板或双工电缆将设备直接连接到XIAO。也就是说，Essential 中的设备是您必须具备的基本硬件，Optional 则不是必需的。

### 基本硬件组件

要完成本示例教程的内容，可能需要准备以下组件。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO nRF52840 Sense</th>
			<th>Amazon Sidewalk gateway (Echo Gen4)</th>
            <th>Grove - Red LED Button</th>
            <th>J-Link</th>
            <th>USB to UART</th>
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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
            <td></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-Button.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
            <td></td>
            <td></td>
		</tr>
	</table>
</div>
:::提示
为了方便在 **US-East-1**（弗吉尼亚北部）区域之外工作的非美国开发人员进行 Amazon Sidewalk 测试和终端节点开发，需要设置 VPN。这可以实现无缝访问并确保高效参与开发过程。
:::


### 可选硬件组件

为了方便接线和 Grove 扩展，或者通过 JLink 轻松连接到 XIAO，您可能需要以下扩展板。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio Expansion board for XIAO</th>
			<th>Seeed Studio Grove Base for XIAO</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 配置Amazon Sidewalk的开发环境

:::提示
快速安装 nRF Connect SDK 的原始教程可以阅读 [此处](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/assistant.html#installing-automatically).
:::

Nordic Semiconductor的Amazon Sidewalk解决方案基于nRF Connect SDK v2.3.0。你可以通过下面的安装方法来设置开发环境。

- Automatic installation (Toolchain Manager)
- [Manual installation](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/gs_installing.html#install-the-required-tools)

本节将重点介绍如何通过工具链管理器(Toolchain Manager，自动安装方法)安装nRF Connect SDK。本系统基于Windows 11操作系统。

完成下面的步骤，使用Toolchain管理器应用程序自动安装nRF Connect SDK。该应用程序安装了nRF Connect SDK的完整工具链，包括nRF Connect for VS Code扩展和nRF Connect SDK源代码。

### 安装前准备

在开始设置工具链之前，请为操作系统安装可用的更新。有关支持的操作系统和Zephyr特性的信息，请参阅 [Requirements](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/recommended_versions.html#gs-recommended-versions) 

此外，请确保您安装了通用版本的SEGGER J-Link。这是SEGGER J-Link在Intel和ARM组件上正确工作所必需的。

### 安装Toolchain管理器

工具链管理器可从nRF Connect for Desktop获得，这是一个跨平台工具，它提供了不同的应用程序，简化了nRF Connect SDK的安装。该工具和应用程序都可以在Windows、Linux和macOS上使用。

**Step 1**. 下载适用于您的操作系统的  [nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop) 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/1.png" style={{width:1000, height:'auto'}}/></div>

**Step 2**. 在您的计算机上安装并运行该工具。

**Step 3**. 在 **APPS** 部分中，单击 **Toolchain Manager** 旁边的 **Install**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/2.png" style={{width:600, height:'auto'}}/></div>

**Step 4**. 该应用程序已安装在您的计算机上，并且 **Install** 按钮更改为**Open**。

**Step 5**. 在 nRF Connect for Desktop 中打开工具链管理器。

单击导航栏中的 **SDK ENVIRONMENTS** 以指定要安装 nRF Connect SDK 的位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/3.png" style={{width:600, height:'auto'}}/></div>

**Step 6**. 在 SDK 环境中，单击要安装的 **nRF Connect SDK 版本**旁边的 **Install** 按钮。您选择的 nRF Connect SDK 版本已安装在您的计算机上。安装按钮更改为 **打开 VS Code**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/30.png" style={{width:600, height:'auto'}}/></div>

:::提示
安装时间与您环境中的网络有关，安装预计大约需要**一小时**。这段时间软件可能不会做任何事情，所以请不要以为出现了卡顿，您可以通过日志查看安装进度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/4.png" style={{width:600, height:'auto'}}/></div>
:::

### 下载 Amazon Sidewalk 存储库

安装后，您可以通过两种方式构建应用程序：

- 使用 Visual Studio Code 和 nRF Connect for VS Code 扩展
- 使用command line（命令行）

**Step 7**. 对于我们的项目来说，使用命令行就足够了。单击您安装的版本旁边的向下箭头，然后选择“**打开 bash**”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/23.png" style={{width:600, height:'auto'}}/></div>

您的目录结构应如下所示：

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

**Step 8**. 将 [Amazon Sidewalk 应用程序存储库](https://github.com/nrfconnect/sdk-sidewalk) 从 sdk-sidewalk 存储库克隆到 nRF Connect SDK 文件夹，并通过运行以下命令将其命名为“sidewalk”：

```
git clone https://github.com/nrfconnect/sdk-sidewalk.git sidewalk
```

**Step 9**. 安装 Amazon Sidewalk 的 Python 要求。

```
pip install -r sidewalk/requirements.txt
```

:::note
如果您的计算机尚未安装Python环境，请阅读[此处](https://www.digitalocean.com/community/tutorials/install-python-windows-10)的教程，在您的计算机上安装最新的Python 3电脑。
:::

**Step 10**. 设置 Amazon Sidewalk 应用程序清单并更新。

检查当前清单路径:

```
west manifest --path
```

返回的路径应类似于以下格式：

```
> /path-to-ncs-folder/nrf/west.yml
```

设置 Amazon Sidewalk 存储库的清单路径：

```
west config manifest.path sidewalk
```

更新所有存储库：

```
west update
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/32.png" style={{width:800, height:'auto'}}/></div>

根据您的连接情况，更新可能需要一些时间。

验证新的清单路径：

```
west manifest --path
```

返回的路径应类似于以下格式：

```
> /path-to-ncs-folder/sidewalk/west.yml
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/31.png" style={{width:600, height:'auto'}}/></div>

请保持 Bash 窗口打开，我们将在一会后回来。

## 配置您的 AWS 云服务

:::提示
您可以在[此处](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html)阅读有关设置 Amazon Sidewalk 产品的原始教程。
:::

接下来，我们需要配置 AWS 云服务，以便设备通过密钥连接到您的 AWS 账户。

**Step 1**. 将 Amazon Sidewalk 示例 IoT 应用程序存储库下载到您的本地计算机。打开一个新终端（如果您使用的是 Windows，则打开一个新的 Powershell）并输入以下命令来克隆存储库。

```
git clone https://github.com/aws-samples/aws-iot-core-for-amazon-sidewalk-sample-app.git
```

**Step 2**. 如果您是第一次使用 Amazon IoT Core，那么您可能需要注册 root 账户，或者如果您已经拥有 root 或 IAM 账户，请登录 [Amazon IoT Core 控制台](https:// console.aws.amazon.com/iam)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/6.png" style={{width:800, height:'auto'}}/></div>

**Step 3**. 获取帐户密钥。

登录后，在控制台的右上角，单击您的username（用户名）并选择Security credentials（安全凭据）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/33.png" style={{width:400, height:'auto'}}/></div>

然后，请创建一个新的凭据并保存您的**Access Key ID**（**访问密钥 ID**） 和  **Secret Access Key**（**秘密访问密钥**）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/34.png" style={{width:1000, height:'auto'}}/></div>

**Step 4**. 在本地计算机上配置 *credentials* 文件。

:::note
如果您尚未安装 [AWS CLI](https://aws.amazon.com/cli/)，则可能需要安装它。
:::

如果您安装了 AWS CLI，则可以使用 aws configure 命令来配置凭证文件。如果您使用的是Windows系统，则需要以管理员权限在**CMD窗口**中执行命令。

```
aws configure
```

然后窗口会要求您输入密钥，请分别输入并回车确认。

```
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY
```

接下来是国家和地区的选择，这里我们需要选择**us-east-1**

```
region=us-east-1
```

对于其余部分，我们只需输入并保留默认值即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/35.png" style={{width:800, height:'auto'}}/></div>

**Step 5**. 添加创建资源的用户权限。 

如果您的用户具有Admin权限，则已经满足了先决条件，可以跳过这一点。

:::note
本教程默认使用管理员权限帐户，如果您使用的是IAM帐户，请联系您的管理员为您的帐户启用特定权限。 

- 运行`python aws-iot-core-for-amazon-sidewalk-sample-app/ApplicationServerDeployment/policies/generate_policy.py`脚本，它将在*ApplicationServerDeployment/policies/*目录中生成个性化策略文件 

- 进入IAM控制台，使用*DeployStackPolicy创建策略。json内容* 

- 将创建的策略分配给用户 

  

请参阅[IAM教程:创建并附加您的第一个客户管理策略](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_managed-policies.html)以获得进一步指导。 

确保在系统路径环境变量中存在*Simplicity Commander*(用于SiLabs)。 

尝试在终端中调用`commander——version`来确保Simplicity commander可用。
:::

## 运行Amazon Sidewalk的BLE示例

::提示
蓝牙LE模板的原始教程可以在[这里](https://nrfconnect.github.io/sdk-sidewalk/testing_samples/sidewalk_application_samples/template_ble.html#template-ble)阅读
:::

### 配置生成

**Step 1**. 转至 AWS IoT Core 了解 Amazon Sidewalk 工具。打开我们之前克隆的文件夹 **aws-iot-core-for-amazon-sidewalk-sample-app**。

**Step 2**. 填充`config. txt `文件。配置文件。设置**NORDIC**硬件平台。 

打开名为**config. js **的文件。(使用合适的编辑器，例如VS Code)。粘贴下面的代码并保存。

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

**Step 3**. 为了配置工具设置Python虚拟环境:

```
cd aws-iot-core-for-amazon-sidewalk-sample-app
python -m pip install --user virtualenv
python -m venv sample-app-env
sample-app-env\Scripts\activate.bat
pip install pip==22.3.1
python -m pip install -r requirements.txt
python -m pip install pyjwt -t .\ApplicationServerDeployment\lambda\authLibs
```

**Step 4**. 此时，您可能需要运行一个`helper env_check.py`脚本来对您的环境进行完整性检查，以防止最常见的错误。

```
python env_check.py
```

如果出现如图所示的消息，则说明环境安装进展顺利。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/37.png" style={{width:900, height:'auto'}}/></div>

**Step 5**.运行设备发放脚本:

```
python EdgeDeviceProvisioning/provision_sidewalk_end_device.py
```

你应该能看到如下输出:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/9.png" style={{width:800, height:'auto'}}/></div>

我们需要此处生成的“Nordic_MFG.hex”文件，该文件最终将被闪存到 XIAO nRF52840 中。

:::note
**Nordic_MFG.hex** 是设备与您的 Amazon IoT Core 建立通信链接的唯一凭证，每个设备或账户的凭证都不同。
:::

您的配置文件位于“EdgeDeviceProvisioning”目录中。设备分组在设备配置文件的子目录中，如下结构所示：

```
EdgeDeviceProvisioning \
- DeviceProfile_<profile-id> \
- DeviceProfile.json
- WirelessDevice_<device-id>\
    --  Nordic_MFG.bin
    --  Nordic_MFG.hex
    --  WirelessDevice.json
```

请复制 **Nordic_MFG.hex** 文件并将其保存在您可以轻松找到的地方。

**Step 6**. 退出Python虚拟环境：

```
deactivate
```

### 将 MQTT 添加到目的地

:::tip
对于本部分教程，您可以阅读 Sidewalk 提供的[官方教程](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html#add-mqtt-to-destination)。
:::

### 示例概述

该示例演示了 Amazon Sidewalk 终端节点应用程序的模板。

它针对蓝牙 LE 进行了优化。该示例支持以下开发套件：

| 硬件平台 | PCA | 主板名称 | 构建目标 |
| ------------------ | --- | ---------- | ------------ |
| nRF52840 DK        | PCA10056 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

由于Amazon Sidewalk尚未合并我们提交的PR，目前我们将通过修改支持的nRF52840 DK平台来支持XIAO nRF52840。

| 硬件平台 | 主板名称 | 构建目标 |
| ------------------ | ---------- | ------------ |
| Seeed Studio XIAO nRF52840 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

该示例展示了针对蓝牙 LE 传输协议的 Amazon Sidewalk API 的实现。这是 Amazon Sidewalk 配置的内存优化示例，仅支持蓝牙 LE 传输协议。由于占用空间较小，应用程序的两个引导加载程序分区都放置在支持的 SoC (nRF52840) 的内部闪存中。

#### 用户界面

释放按钮时会触发按钮操作。

要使用长按操作，请按住按钮 2 秒或更长时间，然后松开。按钮分配如下：

- **Button 1 (long press) -- D1**:

    恢复出厂设置 - 应用程序向 Amazon Sidewalk 堆栈通知恢复出厂设置事件。Amazon Sidewalk 库从非易失性存储中清除其配置。重置成功后，设备需要重新注册云服务。

- **Button 2 -- D3**:

    切换连接请求 - 当设备通过蓝牙 LE 进行广告时，设备请求 Amazon Sidewalk Gateway 启动连接。连接断开后，用户必须重新设置信标状态。网关可能并不总是能够处理此请求，因为这取决于连接到它的设备的数量。

- **Button 3 -- D4**:

    发送问候 - 此操作会将消息排队到云端。如果 Amazon Sidewalk 尚未准备好，它只会显示错误而不发送消息。队列最终会被处理，所有排队的消息都会被发送。

- **Button 4 (short press) -- D9**:

    设置假电池电量 - 该操作设置模拟电池电量。

- **Button 4 (long press) -- D9**:
    进入 DFU 状态 - 此操作将禁用 Amazon Sidewalk 堆栈并启动蓝牙 LE SMP 服务器。您可以使用适用于移动应用程序的 nRF Connect 更新固件映像。要退出 DFU 状态，请在设备上执行电源循环。

LED 代表应用程序的当前状态（尚未实现）：

- **LED 1 -- D0**:

    应用程序连接成功

- **LED 2 -- D2**:

    应用程序注册成功

- **LED 3 -- D5**:

    应用程序时间同步成功

- **LED 4 -- D8**:

    应用程序链接已打开

### 准备示例固件

本示例使用Amazon Sidewalk提供的BLE示例程序，硬件驱动程序的固件对于所有XIAO nRF52840都是通用的，如果您不想执行本节中的步骤，您也可以直接下载**merged.txt。我们提供的 hex** 文件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/merged.hex">
            <strong><span><font color={'FFFFFF'} size={"4"}>下载文件</font></span></strong>
    </a>
</div><br />


以下是要遵循的具体步骤。

**Step 1**. 从 Github 下载为 XIAO nRF52840 编写的程序。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-nRF52840-sidewalk/releases/tag/v1.0.0">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载版本</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

**Step 2**. 下载后，请将文件夹解压到 ncs 目录中。默认路径如下：

```
C:\ncs\v2.3.0\zephyr\boards\arm\nrf52840dk_nrf52840
```

:::警告
该文件目录最初包含 nRF52840 DK 的开发文件。为了简单起见，我们通过重命名XIAO nRF52840程序来覆盖开发板。

因此，您需要做的就是用 zip 存档中的所有文件覆盖原始文件 **nrf52840dk_nrf52840** 中的所有文件。
:::

**Step 3**. 让我们回到 nRF Connect SDK 的 Bash 窗口。输入以下命令来执行固件生成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/38.png" style={{width:600, height:'auto'}}/></div>

```
cd sidewalk/samples/template_ble/
west build -b nrf52840dk_nrf52840
```

如果执行顺利，您将看到以下输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/10.png" style={{width:800, height:'auto'}}/></div>

此时，我们已经获得了示例固件，其名称为：“merged.hex”并存储在默认位置：

```
C:\ncs\v2.3.0\sidewalk\samples\template_ble\build\zephyr
```

您可以首先将此文件与我们之前准备的**Nordic_MFG.hex** 文件放在一起，稍后我们将一起使用它们。

### XIAO nRF52840 的闪存固件 

**Step 1**. 打开**nRF Connect for Desktop**，在应用程序中找到**Programmer**并安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/11.png" style={{width:600, height:'auto'}}/></div>

**Step 2**. 通过 JLink 连接 XIAO nRF52840。

请通过SWD接口将XIAO nRF52840连接到JLink。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO nRF52840</th>
			<th>JLink (Non-educational version)</th>
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

如果您不打算使用XIAO扩展板，那么您可以参考 [XIAO nRF52840 Wiki](https://wiki.seeedstudio.com/XIAO_BLE#access-the-swd-pins-for-debugging-and-reflashing-bootloader) 使用 SWD 接口将双工线另外焊接到 JLink。

**Step 3**. 打开编程器并将两个固件刻录到 XIAO nRF52840。

点击软件左上角的**Add file**按钮，分别添加本文准备的**merged.hex**文件和**Nordic_MFG.hex**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/12.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/13.png" style={{width:800, height:'auto'}}/></div>

然后将 JLink 连接到您的计算机，然后单击左上角选择您的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/14.png" style={{width:800, height:'auto'}}/></div>

连接后，单击左侧的“Read”按钮即可获取XIAO的内存分区。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/15.png" style={{width:800, height:'auto'}}/></div>

接下来单击 **Erase & write** 将固件刷新到 XIAO 中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/16.png" style={{width:800, height:'auto'}}/></div>

完成后可以点击**Read**查看内存的形状是否近似，这样可以检查闪存是否成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/17.png" style={{width:800, height:'auto'}}/></div>

**Step 4**. 组装 Amazon Sidewalk 设备并使其工作。

在示例的预览中，我们标记了 LED 和按钮所连接的引脚位置。接下来我们需要使用四个 Grove LED 按钮，它们不仅可以让我们控制 XIAO 的工作，还可以通过按钮上的 LED 来显示不同的工作状态。

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

XIAO 通过 USB 供电，然后使用按钮控制 XIAO nRF52840，并且可通过 UART 获取 XIAO 操作日志。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/18.png" style={{width:600, height:'auto'}}/></div>

## 资源

- [Amazon Sidewalk specification](https://docs.sidewalk.amazon/specifications/)
- [Amazon Sidewalk Privacy 和 Security whitepaper](https://m.media-amazon.com/images/G/01/sidewalk/final_privacy_security_whitepaper.pdf)

## 技术支持和产品讨论

感谢您选择我们的产品！我们随时为您提供不同的支持，以确保您尽可能顺利地使用我们的产品。我们提供多种沟通渠道来满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


