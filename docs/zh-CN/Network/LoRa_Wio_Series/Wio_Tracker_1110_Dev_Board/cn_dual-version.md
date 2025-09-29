---
description: Wio Tracker 双栈版本
title: 使用 Amazon Sidewalk 和 LoRaWAN 网络实现无缝资产跟踪
keywords:
- Tracker
- AWS
- Sidewalk
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/wio_tracker_dual_stack
sidebar_position: 8
sidebar_class_name: hidden
last_update:
  date: 3/4/2024
  author: Jessie
---


## 介绍

通过这个双设备演示体验无缝网络集成。该设置包含多功能的 Seeed Studio Wio Tracker 开发板和强大的 Seeed Studio SenseCAP T1000-S 跟踪器设备，两者都展示了在 LoRaWAN 和 Sidewalk 网络之间的无缝切换，以实现最佳覆盖。

- **双网络支持**：只需按一下按钮，即可在 LoRaWAN 和 Sidewalk 之间切换，保持持续连接。
- **云端连接**：实时观察数据传输到 AWS IoT Core，通过笔记本电脑显示器/监视器上的 AWS Web 应用程序进行可视化。
- **电池供电效率**：设备确保持续运行，无需电线束缚，实现真正的移动体验。

该过程分为以下主要步骤：

- [SDK 安装和设置](https://wiki.seeedstudio.com/cn/wio_tracker_dual_stack#setup-toolchain)
- [固件烧录](https://wiki.seeedstudio.com/cn/wio_tracker_dual_stack#build-and-flash-the-demo)
- AWS IoT Core 配置
- Amazon Location 配置
- [Web 应用程序配置](https://wiki.seeedstudio.com/cn/wio_tracker_dual_stack#building-web-app)

## 先决条件

### 安装 nRF Connect SDK

有多种方式安装 nRF Connect SDK，取决于您首选的开发环境和[工具链管理工具](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#toolchain-management-tools)：

- 使用 Visual Studio Code 和 nRF Connect for VS Code 扩展（推荐）

- 使用命令行和 nRF Util

**步骤 1：更新操作系统**

在开始设置工具链之前，请为您的操作系统安装可用更新。有关支持的操作系统信息，请参阅[要求](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements)。

**步骤 2：安装先决条件**

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="VSc" label="Visual Studio Code">

- 最新版本的 <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a> 包。从 <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a> 页面下载。<br/>

- 适用于您操作系统的最新版本 Visual Studio Code，从 <a href="https://code.visualstudio.com/download">Visual Studio Code 下载页面</a>获取。<br/>

- 在 Visual Studio Code 中，安装最新版本的 <a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect-extension-pack">nRF Connect for VS Code Extension Pack</a>。

</TabItem>
<TabItem value="CLine" label="Command Line">

- 最新版本的 <a href="https://www.nordicsemi.com/Products/Development-tools/nrf-util">nRF Util 开发工具</a>，这是 Nordic 产品的统一命令行实用程序。<br/>

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
  <p style={{marginBottom: '0.5em'}}>
    <strong>注意：</strong>
  </p>
  <p style={{marginTop: '0'}}>
      下载 nRF Util 可执行文件后，将其移动到系统 <code>PATH</code> 中的目录。在 macOS 和 Linux 上，下载的文件还需要通过输入 <code>chmod +x nrfutil</code> 或在文件属性中勾选复选框来获得执行权限。
  </p>
</div>

- 最新版本的 <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a> 包，从 <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a> 页面下载。

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>注意：</strong>
    </p>
    <p style={{marginTop: '0'}}>
      下载并安装工具后，在环境变量中将 nrfjprog 添加到系统 <code>PATH</code>。
    </p>
  </div>

</TabItem>
</Tabs>

**步骤 3：安装 nRF Connect SDK 工具链**

<Tabs>
<TabItem value="VScode" label="nRF Connect for Visual Studio Code">
  
- 通过点击 <code>Activity Bar</code> 中的图标在 Visual Studio Code 中打开 nRF Connect 扩展。<br/><br/>
- 在扩展的 <code>Welcome View</code> 中，点击 <code>Install Toolchain</code>。<br/><br/>
- 选择要安装的工具链版本。工具链版本应与您将要使用的 nRF Connect SDK 版本匹配。我们使用 <code>V2.5.0</code>（推荐）。<br/><br/>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/bar2.png"/></div>
安装工具链后，您可以通过点击 <code>Manage toolchains</code> 来访问 <code>Install Toolchain</code> 选项。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-toolchain.png"/></div>

</TabItem>
<TabItem value="CL" label="Command Line">

- 打开终端窗口。

- 运行以下命令安装 nRF Util toolchain-manager 命令：

 ```cpp
 nrfutil install toolchain-manager
 ```

- 运行以下命令列出可用的安装:

 ```cpp
 nrfutil toolchain-manager search
 ```

此列表中的版本对应于 nRF Connect SDK 版本，将在以下步骤中进行版本控制。

- 运行以下命令为您选择的 SDK 版本安装工具链版本：

 ```cpp
 nrfutil toolchain-manager install --ncs-version version
 ```

 For example:

 ```cpp
 nrfutil toolchain-manager install --ncs-version v2.5.0
 ```

此示例命令安装 nRF Connect SDK v2.5.0（推荐）所需的工具链。

:::tip
工具链默认安装在 Windows 的 C:/ncs/toolchains、Linux 的 ~/ncs/toolchains 和 macOS 的 /opt/nordic/ncs/toolchains。
:::

要检查当前配置设置，请使用 <code>nrfutil toolchain-manager config --show</code> 命令。<br/>要了解更多关于这些命令的信息，请使用 <code>nrfutil toolchain-manager --help</code> 命令。
  </TabItem>
</Tabs>

**步骤 4：获取 nRF Connect SDK 代码**

  <Tabs>
  <TabItem value="VScode4" label="nRF Connect for Visual Studio Code">

要克隆 nRF Connect SDK 代码，请完成以下步骤：

- 通过点击 <code>Activity Bar</code> 中的图标在 Visual Studio Code 中打开 nRF Connect 扩展。

- 在扩展的 <code>Welcome View</code> 中，点击 <code>Manage SDKs</code>。操作列表将出现在 Visual Studio Code 的快速选择中。

- 点击 <code>Install SDK</code>。可用的 SDK 版本列表将出现在 Visual Studio Code 的快速选择中。

- 选择要安装的 SDK 版本，我们使用 `V2.5.0`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-sdk2.png"/></div>

SDK 安装开始，可能需要几分钟时间。

  </TabItem>
  <TabItem value="CLine4" label="Command Line">

要克隆仓库，请完成以下步骤：

- 在命令行中，打开目录 `ncs`。默认情况下，这比您安装工具链的位置高一级。此目录将保存所有 nRF Connect SDK 仓库。

- 使用以下命令为您的操作系统启动工具链环境：

  Windows

  ```cpp
  nrfutil toolchain-manager launch --terminal
  ```

  Linux/macOS

  ```cpp
  nrfutil toolchain-manager launch --shell
  ```

- 确定您想要使用的 nRF Connect SDK 修订版本的标识符。有关更多信息，请参见上表。当您首次安装 nRF Connect SDK 时，建议安装 SDK 和工具链的最新发布版本。

- 使用您想要检出的 nRF Connect SDK 修订版本初始化 west，将 nRFConnectSDK_revision 替换为标识符：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr nRFConnectSDK_revision
  ```

For example:

  **特定版本**：要检出 v2.5.0 版本，请输入以下命令：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v2.5.0
  ```

  **开发标签**：要检出 v1.9.2-dev1 标签，请输入以下命令：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.9.2-dev1
  ```

  **分支**：要检出包含最新开发状态的主分支，请输入以下命令：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr main
  ```

这将把清单仓库 sdk-nrf 克隆到 nrf 目录中。

使用清单文件的特定版本初始化 west 并不会将您的仓库锁定到此版本。在 sdk-nrf 仓库中检出不同的分支或标签并运行 west update 会改变您使用的 nRF Connect SDK 版本。

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>注意：</strong>
    </p>
    <p style={{marginTop: '0'}}>
      如果在运行 west 时收到错误消息，请将 west 更新到最新版本。更多信息请参见 Zephyr 文档中的 <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/zephyr/develop/west/troubleshooting.html#west-troubleshooting">West 故障排除</a>。
    </p>
  </div>
  
- 输入以下命令来克隆项目仓库：

  ```cpp
  west update
  ```

根据您的连接情况，这可能需要一些时间。

- 导出一个 Zephyr CMake 包。这允许 CMake 自动加载构建 nRF Connect SDK 应用程序所需的样板代码：

  ```cpp
  west zephyr-export
  ```

查看 [安装 nRF Connect SDK](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/install_ncs.html#id9) 了解更多详情。

</TabItem>
</Tabs>

### 设置 Sidewalk 环境

按照以下步骤为 nRF Connect SDK 下载 Sidewalk 应用程序：

- 打开终端窗口。您的目录结构应如下所示：

```cpp
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

- 确保清单路径指向 nrf 目录内的 west.yml:

```cpp
west manifest --path
/path-to-ncs-folder/nrf/west.yml
```

如果你的清单路径指向不同的文件，请使用以下命令：

```cpp
west config manifest.path nrf
```

* 为西部启用人行道组过滤器。

```cpp
west config manifest.group-filter "+sidewalk"
```

检查西边是否存在人行道：

```cpp
west list sidewalk
sidewalk     sidewalk                     <sidewalk_revision> https://github.com/nrfconnect/sdk-sidewalk
```

- Update all repositories:

```cpp
west update
```

根据您的网络连接情况，更新可能需要一些时间。

- 安装 Sidewalk 的 Python 依赖项。

```cpp
pip install -r sidewalk/requirements.txt
```

### 将 LR11xx 添加到 nRF Connect SDK Sidewalk 扩展

此仓库包含软件驱动程序，使 [LR11xx 系列](https://www.semtech.com/products/wireless-rf/lora-edge) 芯片能够在与 [Nordic nRF52840 MCU](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dk) 和 nRF Connect SDK 配对时支持 Sidewalk 协议。该驱动程序以二进制形式提供，作为静态库实现支持 LoRa 或 FSK 连接所需的"平台抽象层"接口。静态库内部包含 Semtech SWDR001（LR11xx 驱动程序）的完整实现，可用于访问 LR11xx 芯片的其他功能，如 WIFI 和 GNSS 扫描及测距。

- 下载 [SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

- 在克隆的 nordic 仓库的工作目录中，位于顶级目录，即 ``~/ncs/<version>/sidewalk``：

 ```cpp
 patch -p1 < ../nRF52840_LR11xx_driver_v010000.diff
 ```

父目录路径 `..` 假设您将差异文件放在那里，否则您可以指定其位置的完整路径。

- 将无线电驱动程序库 ``lib*.a`` 复制到 sidewalk 项目的 ``~/ncs/<version>/sidewalk/lib/lora_fsk/`` 目录中  
提供了两个库，一个启用了 ``LOG_RUNTIME_FILTERING``，另一个没有启用。

- 将 ``~/template_lbm_wio_tracker/boards/arm/wio_tracker_1110`` 文件夹复制到 ``~/ncs/v2.5.0/zephyr/boards/arm``。

```cpp
·
├─── .west/
├─── modules/
├─── nrf/
├─── ...
└─── zephyr/
     └─── Boards/
          └─── arm/
               └─── wio_tracker_1110/
```

### 创建资源

**步骤 1：部署 Cloud9 环境**

在本节中，您将创建开始之前所需的所有资源。首先，您将创建一个 Cloud9 工作空间，用于构建和部署其他资源。然后，您将部署一个包含资产跟踪器应用程序所有后端资源的 CDK 堆栈。最后，您将安装所有前端依赖项并配置应用程序。

- 打开 [AWS Cloud9 控制台](https://us-east-1.console.aws.amazon.com/cloud9/home?region=us-east-1)，点击 `Create Environment`

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/cloud-9-environment.png"/></div>

- 除了 **实例类型** 外，其他所有设置保持默认。选择 `m5.large`。

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/001/002/c9.3.png"/></div>

**步骤 2：配置先决条件**

- 打开 Cloud9 IDE。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-cloud9.png"/></div>

- 在您的 Cloud9 环境终端中输入以下命令来克隆 github 仓库：

 ```cpp
 git clone --recurse-submodules https://github.com/aws-samples/aws-iot-asset-tracker-demo.git /home/ec2-user/environment/asset-tracking-workshop
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-could9.png"/></div>

- 导航到示例应用程序目录：

 ```cpp
 cd ~/environment/asset-tracking-workshop
 ```

- 调整底层 EC2 实例的 EBS 卷大小。

 ```cpp
 npm run utils:resizeC9EBS
 ```

- Install the project's dependencies:

 ```cpp
 npm ci
 ```

- Deploy the backend infrastructure:

 ```cpp
 # Prepare the AWS account for CDK
 npm run infra:bootstrap
 # Deploy the backend resources
 npm run infra:deploy
 ```

- Create a config file:

 ```cpp
 npm run utils:createConfig
 ```

## LoRaWAN 配置

### 在 AWS 上添加 LoRaWAN 网关

查看此[入门指南](https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/#add-gateway)，将 [SenseCAP M2 多平台网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)添加到 AWS IoT Core。

### 在 AWS 上添加 LoRaWAN 设备

**步骤 1：定义密钥**

在 `src/lorawan_v4/example_options.h` 中定义 `DevEUI/JoinEUI/APPkey` 和 `REGION`。

:::tip
JoinEUI 也称为 AppEUI
:::

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/3-params.png"/></div>

**步骤 2：创建配置文件**

登录到 [AWS IoT 控制台](https://console.aws.amazon.com/iot/home)，导航到 `Devices`，点击 `Profiles`。

- 设备配置文件

设备配置文件定义了网络服务器用于设置 LoRaWAN 无线接入服务的设备功能和启动参数。它包括 LoRa 频段、LoRa 区域参数版本和设备 MAC 版本等参数的选择。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/device-profiles.png"/></div>

要了解不同的频段，请参阅[为您的网关和设备连接考虑选择 LoRa 频段](https://docs.aws.amazon.com/iot-wireless/latest/developerguide/lorawan-rfregion-permissions.html#lorawan-frequency-bands)。

- 服务配置文件

我们建议您保持 `AddGWMetaData` 设置启用，这样您将收到每个有效载荷的额外网关元数据，例如数据传输的 RSSI 和 SNR。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/service-profiles.png"/></div>

**步骤 3：添加设备**

导航到 `LPWAN devices` > `Devices`，点击 `Add wireless device`。

`Wireless device specification`：OTAAv1.0x

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

选择您在上一步中创建的设备配置文件和目标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

导航到设备页面并选择您之前添加的设备。

## Sidewalk 配置

### 设置 Sidewalk 网关（可选）

您可以设置 Sidewalk 网关，配置它，并将您的网关与您的 Amazon 账户关联。您的 Sidewalk 端点在注册到 Amazon Sidewalk 后将连接到 Sidewalk 网关并与其通信。

查看[设置 Sidewalk 网关](https://docs.sidewalk.amazon/getting-started/sidewalk-onboard-prereq-gateway.html)了解更多详情。

### 设置您的 Sidewalk 设备

#### 添加您的 Sidewalk 设备

**步骤 1：添加您的设备配置文件和 Sidewalk 终端设备**

在创建无线设备之前，首先创建设备配置文件。

导航到[设备中心的 Sidewalk 选项卡](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk)，选择 `Provision device`，然后执行以下步骤。

**步骤 2：获取设备 JSON 文件**

要获取用于配置您的 Sidewalk 设备的 JSON 文件：

- 转到 [Sidewalk 设备中心](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk)。

- 选择您添加到 AWS IoT Core for Amazon Sidewalk 的设备以查看其详细信息。

- 通过在您添加的设备详细信息页面中选择 `Download device JSON file` 来获取 JSON 文件。

将下载一个包含配置您的终端设备所需信息的 `certificate.json` 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/dual/download-json.png" alt="pir" width={800} height="auto" /></p>

**步骤 3：配置您的 Sidewalk 端点**

**生成二进制镜像**

- 安装需求文件

转到 Sidewalk SDK 文件夹 `$[Amazon Sidewalk repository]/tools/scripts/public/provision/`，然后运行以下命令来安装 `requirements` 文件。

 ```cpp
 pip3 install -r requirements.txt
 ```

- 生成制造二进制镜像

 运行 `provision.py` 脚本来生成制造二进制镜像文件，该文件将用于配置您用作 Sidewalk 端点的开发板。

- 如果您使用的是从 AWS IoT 控制台获得的组合设备 JSON 文件，请在运行配置脚本时使用 certificate_json 参数来指定此文件作为输入。

 ```cpp
 python3 provision.py aws --output_bin mfg.bin --certificate_json certificate.json \ 
    --config config/[device_vendor]/[device]_dk/config.yaml
 ```

 如果您使用的是从 GetDeviceProfile 和 GetWirelessDevice API 操作响应中获得的单独设备 JSON 文件，请在运行配置脚本时使用 wireless_device_json 和 device_profile_json 参数来指定这些文件作为输入。

 ```cpp
 python3 provision.py aws --output_bin mfg.bin \  
    --wireless_device_json wireless_device.json \
    --device_profile_json device_profile.json \ 
    --config config/[device_vendor]/[device]_dk/config.yaml
 ```

您应该看到以下输出：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/gen-files.png"/></div>

- 烧录 mfg.hex 文件

 您的配置文件通常位于 `EdgeDeviceProvisioning` 目录中。

 要烧录二进制镜像，请使用地址 `0xFD000` 在 Nordic Semiconductor HDK 上加载二进制镜像。有关烧录二进制镜像的信息，请参阅 Nordic Semiconductor 文档。

**步骤 4：构建并烧录演示程序**

- 打开终端窗口。

- 进入 `template_lbm_wio_tracker` 目录。

 例如：

  ```cpp
  cd /opt/nordic/ncs/v2.5.0/sidewalk/samples/template_lbm_wio_tracker
  ```

- 使用以下west命令构建应用程序：

 ```cpp
 west build --board wio_tracker_1110 -- -DRADIO=LR1110_SRC
 ```

或使用预编译的无线电驱动程序库：

 ```cpp
 west build --board wio_tracker_1110 -- -DRADIO=LR1110
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/comparing.png"/></div>

- 使用以下 west 命令刷写应用程序：

 ```cpp
 west flash
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/flash-suc.png"/></div>

### Sidewalk 注册

在您配置了 Sidewalk 端点后，必须注册该端点，以便它能够通过 Sidewalk 网络进行通信。

要注册您的 Sidewalk 端点，可以使用 Sidewalk 无忧网络 (FFN) 的自动无接触注册，或者使用运行注册脚本的 Mac 或原生 Ubuntu 机器手动注册您的设备。

|标准 自动| 注册（使用 Sidewalk FFN）|手动注册|
 |--|--|--|
 |用户和端点关联| 此注册方法不需要 Sidewalk 端点与用户之间的任何关联。端点可以加入 Sidewalk 网络而无需与任何用户关联。 |此注册方法需要 Sidewalk 端点与用户的 Amazon 账户之间的关联。|
 |LWA（使用 Amazon 登录）| 不需要 LWA。| 需要 LWA 来链接用户的 Amazon 账户和 Sidewalk 端点开发者使用的 AWS 账户。|

**使用 Sidewalk FFN 执行注册：**

- 您的 Sidewalk 网关和端点必须已开机。
- 您的网关必须已选择加入 Sidewalk，并且在端点的近距离范围内。我们建议您将设备保持在彼此 10 米范围内。

有关 `手动 Sidewalk 注册` 和其他详细信息，请查看 [这里](https://docs.sidewalk.amazon/provisioning/iot-sidewalk-register-endpoint.html)。

### 网络切换

 默认为 LoRaWAN 网络，点击 `用户按钮` 切换网络。

 <div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/click-button.png"/></div>

### 查看消息

#### 添加目标

在 [IoT Core 控制台](https://us-east-1.console.aws.amazon.com/iot/home?region=us-east-1#/home) 中，从左侧菜单选择 `LPWAN devices`，然后选择 `Destinations`。

选择 `Edit` 并选择 `Publish to AWS IoT Core message broker`。在主题文本框中，输入 assets 作为 MQTT 主题。

在 `Permissions` 下选择 `Create a new service role` 并将 `Role name` 留空。

- **ExpressionType**: `MqttTopic`
- **Expression**: `EmbeddedWorldTrackerDemo`

#### 添加解码器规则

导航到 `Message routing` 选项卡 → `Rules`，然后点击 `Create Rule` 按钮。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png"/></div>

为您的规则命名并提交。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png"/></div>

从 IoT Core 规则中，选择 `Lambda` 函数。然后点击 `Create a Lambda function`。

从头开始创建<br/>
`Function name`: 为您的函数命名。<br/>
`Runtime`: Node.js 14.x<br/>
`Architexture`: x86_64<br/>

点击 `Create function` 按钮创建新函数

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png"/></div>

在以下函数配置页面上，删除所有代码并用以下脚本替换，然后点击 `Deploy` 按钮。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png"/></div>

<details>
<summary>Lambda 代码</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");
const {IoTWirelessClient, GetWirelessDeviceCommand} = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

function decodeUplink(input) {
    const originMessage = input.toLocaleUpperCase()
    const decoded = {
        valid: true,
        err: 0,
        payload: input,
        messages: []
    }
    let measurement = messageAnalyzed(originMessage)
    if (measurement.length === 0) {
        decoded.valid = false
        return {data: decoded}
    }

    for (let message of measurement) {
        if (message.length === 0) {
            continue
        }
        let elements = []
        for (let element of message) {
            if (element.errorCode) {
                decoded.err = element.errorCode
                decoded.errMessage = element.error
            } else {
                elements.push(element)
            }
        }
        if (elements.length > 0) {
            decoded.messages.push(elements)
        }
    }
    return {data: decoded}
}

function messageAnalyzed(messageValue) {
    try {
        let frames = unpack(messageValue)
        let measurementResultArray = []
        for (let i = 0; i < frames.length; i++) {
            let item = frames[i]
            let dataId = item.dataId
            let dataValue = item.dataValue
            let measurementArray = deserialize(dataId, dataValue)
            measurementResultArray.push(measurementArray)
        }
        return measurementResultArray
    } catch (e) {
        return e.toString()
    }
}

function unpack(messageValue) {
    return [{dataId: 0, dataValue: messageValue}]
}

function deserialize(dataId, dataValue) {
    let measurementArray = null
    measurementArray = [
        {
            measurementId: '4198',
            type: 'Latitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(0, 8), 1000000))
        },
        {
            measurementId: '4197',
            type: 'Longitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(8, 16), 1000000))
        },
        {
            measurementId: '4097',
            type: 'Air Temperature',
            measurementValue: getSensorValue(dataValue.substring(16, 20), 10)
        },
        {
            measurementId: '4098',
            type: 'Air Humidity',
            measurementValue: getSensorValue(dataValue.substring(20, 22))
        }
    ]
    return measurementArray
}

function getSensorValue(str, dig) {
    if (str === '8000') {
        return null
    } else {
        return loraWANV2DataFormat(str, dig)
    }
}

function bytes2HexString(arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp
        var num = arrBytes[i]
        if (num < 0) {
            tmp = (255 + num + 1).toString(16)
        } else {
            tmp = num.toString(16)
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp
        }
        str += tmp
    }
    return str
}

function loraWANV2DataFormat(str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        let arr = str2.split('')
        let reverseArr = arr.map((item) => {
            if (parseInt(item) === 1) {
                return 0
            } else {
                return 1
            }
        })
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return '-' + str2 / divisor
    }
    return parseInt(str2, 2) / divisor
}

function bigEndianTransform(data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    return dataArray
}

function toBinary(arr) {
    let binaryData = arr.map((item) => {
        let data = parseInt(item, 16)
            .toString(2)
        let dataLength = data.length
        if (data.length !== 8) {
            for (let i = 0; i < 8 - dataLength; i++) {
                data = `0` + data
            }
        }
        return data
    })
    return binaryData.toString().replace(/,/g, '')
}

exports.handler = async (event) => {
    try {
        let device_id = event['WirelessDeviceId'];
        let lorawan_info = null;
        let sidewalk_info = null;
        let payload = null
        let timestamp = null

        let queryDeviceRequest = {
            Identifier: device_id,
            IdentifierType: "WirelessDeviceId"
        }
        let deviceInfo = await wireless_client.send(new GetWirelessDeviceCommand(queryDeviceRequest))
        console.log("device_info：" + JSON.stringify(deviceInfo))
        if (!deviceInfo || deviceInfo.name) {
            return {
                statusCode: 500,
                body: 'can not find this wirelessDeviceId: ' + device_id
            };
        }
        let device_name = deviceInfo.Name

        if (event["WirelessMetadata"]["LoRaWAN"]) {
            lorawan_info = event["WirelessMetadata"]["LoRaWAN"]
            timestamp = lorawan_info["Timestamp"]
            let bytes = Buffer.from(event["PayloadData"], 'base64');
            payload = bytes2HexString(bytes)
        } else if (event["WirelessMetadata"]["Sidewalk"]) {
            timestamp = new Date().getTime()
            let origin = new Buffer(event["PayloadData"], 'base64')
            payload = origin.toString('utf8')
        }

        console.log(`event.PayloadData: ${payload}`)
        const resolved_data = decodeUplink(payload);
        
        // publish all measurement data
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/sensor/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                DeviceName: "assettracker",
                timestamp: timestamp,
                data: resolved_data.data,
                WirelessDeviceId: device_id,
                PayloadData: event['PayloadData'],
                WirelessMetadata: event["WirelessMetadata"]
            })
        };

        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("response: " + JSON.stringify(response));
        return {
            statusCode: 200,
            body: 'Message published successfully' + JSON.stringify(event)
        };
    } catch (error) {
        console.error('Error publishing message:', error);

        return {
            statusCode: 500,
            body: 'Error publishing message'
        };
    }
};
```

</details>

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/004/001/lambda.1.png"/></div>

现在回到 `Device Destination`，选择 Enter a rule name 并输入我们刚刚创建的名称。

导航到 `AWS IoT Core Console` 并选择 `MQTT Test Client` 并订阅该主题。

#### 添加跟踪器规则

重复上述步骤创建一个新规则，并复制以下 Lambda 代码：

<details>
<summary>Lambda 代码</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");

const {LocationClient, BatchUpdateDevicePositionCommand} = require("@aws-sdk/client-location")

const {IoTWirelessClient, UpdateResourcePositionCommand } = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

exports.handler = async (event) => {
    console.log(`message received: ${JSON.stringify(event)}`)
    let device_id = event['WirelessDeviceId']
    let device_name = event['DeviceName']
    let measurements = event['data']['messages']
    let resolver_time = event['timestamp']
    let network = 1; // 1: lorawan 2: sidewalk
    if (event["WirelessMetadata"] && event["WirelessMetadata"]["Sidewalk"]) {
        network = 2
    }

    let longitude;
    let latitude;
    let gps_data = null
    let sensor_map = {}
    if (measurements && measurements.length > 0) {
        for (let i = 0; i < measurements.length; i++) {
            for (let j = 0; j < measurements[i].length; j++) {
                if (measurements[i][j].measurementId === "4097") {
                    sensor_map["Temperature"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4098") {
                    sensor_map["Humidity"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4197") {
                    longitude = measurements[i][j]["measurementValue"];
                }
                if (measurements[i][j].measurementId === "4198") {
                    latitude = measurements[i][j]["measurementValue"];
                }

                if (latitude && longitude) {
                    try {
                        gps_data = {
                            "type": "Point",
                            "coordinates": [longitude, latitude]
                            // "coordinates": [33.3318, -22.2155, 13.123]
                        }
                    } catch (e) {
                        console.log(`===>error`, e)
                    }
                }
            }
        }
    }

    if (gps_data) {
        console.log(`update device location : ${JSON.stringify(gps_data)}`)
        await updateDevicePosition(gps_data, device_id);
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/location/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                timestamp: resolver_time,
                deviceId: device_id,
                deviceName: device_name,
                latitude: gps_data.coordinates[1],
                longitude: gps_data.coordinates[0],
                positionProperties: {'batteryLevel': 90, "sensor:": 60}
            })
        };
        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("mqtt push response: " + JSON.stringify(response));

        let locationClient = new LocationClient()
        let location_info = {
            TrackerName: 'AssetTracker',
            Updates: [
                {
                    DeviceId: 'assettracker',
                    SampleTime: new Date(resolver_time),
                    Position: [
                        gps_data.coordinates[0], gps_data.coordinates[1]
                    ],
                    Accuracy: {
                        Horizontal: 1,
                    },
                    PositionProperties: {
                        "context": JSON.stringify({net: network}),
                        "sensor": JSON.stringify(sensor_map)
                    }
                }
            ]
        }
        let loc_response = await locationClient.send(new BatchUpdateDevicePositionCommand(location_info))
        console.log("loc update response: " + JSON.stringify(loc_response));

    }
}

async function updateDevicePosition(gps_data, device_id) {
    const input = { // UpdateResourcePositionRequest
        ResourceIdentifier: device_id, // required
        ResourceType: "WirelessDevice", // required
        GeoJsonPayload: JSON.stringify(gps_data),
    };
    const command = new UpdateResourcePositionCommand(input);
    const wireless_response = await wireless_client.send(command);
    console.log(wireless_response)
}
```

</details>

## 构建 Web 应用

我们将部署必要的 Amazon Location Service 资源，以便在地图上显示我们的设备。

### 创建地图

首先，您需要创建一个新的 Amazon Location Service 地图资源。您将使用 AWS 控制台来完成此操作。

- 打开 [Amazon Location Service 控制台](https://console.aws.amazon.com/location/home)。

- 然后展开屏幕左侧的导航栏，选择地图。

- 在此屏幕中，创建一个新地图：

- 输入地图名称并选择 `HERE Explore` 地图样式，然后点击 `创建地图`。

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/003/create-map.2.png"/></div>

### 创建路由计算器

- 打开 [Amazon Location Service 控制台](https://console.aws.amazon.com/location/home)。

- 然后展开屏幕左侧的导航栏，选择 `路由计算器`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/router-cal.png"/></div>

继续选择 `HERE` 作为数据提供商，点击 `创建路由计算器` 按钮。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/create-router.png"/></div>

### 创建跟踪器

导航到 `跟踪器` -> `创建跟踪器`：

输入跟踪器名称，并在位置过滤下选择 `基于时间的过滤`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/time-based.png"/></div>

然后向下滚动，在 EventBridge 配置下标记 `启用 EventBridge 事件` 设置，然后点击 `创建跟踪器`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/enable-bridge.png"/></div>

### 创建地理围栏集合

导航到 `地理围栏集合`，点击 `创建地理围栏集合`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/geolocate.png"/></div>

## 显示 Web 应用

### 将应用部署到 Cloudfront

- 在您的 Cloud9 终端中，导航到 `/home/ec2-user/environment/asset-tracking-workshop`：

 ```cpp
 cd /home/ec2-user/environment/asset-tracking-workshop
 ```

- Run the following command:

 ```cpp
 npm run frontend:publish
 ```

- 完成后，您将收到网站URL。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/web-url.png"/></div>

- 在浏览器中导航到此URL以查看您的跟踪应用程序。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/s3-map.png"/></div>

## 资源

[SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

[template_lbm_wio_tracker](https://drive.google.com/drive/folders/1UVte1UbfFor1remgAcpfmCHSKXvOGyYn)
