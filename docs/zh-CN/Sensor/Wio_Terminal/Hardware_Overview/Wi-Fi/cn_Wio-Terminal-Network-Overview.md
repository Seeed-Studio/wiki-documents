---
title: 概述
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-Network-Overview/
slug: /cn/Wio-Terminal-Network-Overview
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 概述

本wiki介绍如何为Wio Terminal上的无线核心Realtek RTL8720更新最新固件，以及安装Wio Terminal的所有依赖库以启用无线连接功能。

:::note
**我们已将Wi-Fi软件迁移到新的eRPC结构，该结构更加稳定，可以与蓝牙同时工作**！请按照说明更新到eRPC Wi-Fi固件和相关库！
:::

## 更新无线核心固件

首先，我们需要为Wio Terminal上的Realtek RTL8720无线核心更新固件。**这是必需的，在进行示例之前必须更新到最新固件。**
        
<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>使用前请更新Wi-Fi核心！</p>
  </div>
</div>


### 步骤1 - 擦除初始出厂固件

当您第一次拿到Wio Terminal时，需要擦除初始的RTL8720固件并刷入最新固件。我们为此准备了一个名为**ambd_flash_tool**的工具，当您运行此工具时，它首先启用从SAMD51到RTL8720的串行连接，以便将固件安装到RTL8720上。这样做是因为您无法直接与RTL8720通信。之后，此工具可用于擦除RTL8720上的现有固件并刷入最新固件。

**注意**：您只需要在第一次擦除出厂固件。之后，您可以刷入新固件来覆盖现有固件

#### Windows系统

- **步骤1：** 在PC上打开**Windows PowerShell**并执行以下命令下载刷写工具

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**注意**：这里**cd ~**命令将您导向主目录，**git clone**命令从GitHub下载仓库

- **步骤2：** 导航到**ambd_flash_tool**目录

```sh
cd ambd_flash_tool
```

- **步骤3：** 将Wio Terminal连接到PC并开机

- **步骤4：** 执行以下命令擦除初始固件

```sh
.\ambd_flash_tool.exe erase
```

**注意：** 初始擦除过程可能需要一段时间。请耐心等待，**不要**关闭窗口

> Wio Terminal的连接串口将被自动检测！

**注意**：如果您想打开帮助用法，请执行`.\ambd_flash_tool.exe`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_win_2.png" alt="pir" width={700} height="auto" /></p>


#### Mac/Linux系统

- **步骤1：** 在Mac/Linux上打开**终端**并执行以下命令下载刷写工具

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**注意**：这里**cd ~**命令将您导向主目录，**git clone**命令从GitHub下载仓库

- **步骤2：** 导航到**ambd_flash_tool**目录

```sh
cd ambd_flash_tool
```

- **步骤3：** 将Wio Terminal连接到PC并开机

- **步骤4：** 执行以下命令擦除初始固件

```sh
python3 ambd_flash_tool.py erase
```

**注意**：确保您的Mac/Linux上**安装了Python 3**，脚本将自动下载所有依赖库

> 在某些情况下，您的PC上可能只有Python 3，那么将`python3 ambd_flash_tool.py`替换为`python ambd_flash_tool.py`

**注意：** 初始擦除过程可能需要一段时间。请耐心等待，**不要**关闭窗口

> Wio Terminal的连接串口将被自动检测！

**注意**：如果您想打开帮助用法，请执行`python3 ambd_flash_tool.py`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_linux.png" alt="pir" width={750} height="auto" /></p>


### 步骤2 - 刷入最新固件

#### Windows系统

- 在**ambd_flash_tool**目录中，执行以下命令将**最新固件**刷入RTL8720

```sh
.\ambd_flash_tool.exe flash
``` 

#### Mac/Linux系统

- 在**ambd_flash_tool**目录中，执行以下命令将**最新固件**刷入RTL8720

```sh
python3 ambd_flash_tool.py flash
```

### 刷入旧固件（额外 - 可跳过）

如果您想使用旧固件版本测试代码，可以按照以下步骤操作。但是，如果您想使用最新固件开始，可以坚持上述步骤**（步骤2）**并跳过此步骤

#### Windows系统

- **步骤1：** 访问GitHub上的[**RTL8720固件**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases)仓库

- **步骤2：** 选择您想要的**发布版本**并点击**xxx-seeed-ambd-firmware-rpc-vxxx.zip**将其下载为**.zip文件**

- **步骤3：** 如前所述使用**Windows PowerShell**导航到**ambd_flash_tool**目录并执行以下命令

```sh
.\ambd_flash_tool.exe flash -d [RTL8720-firmware-path]
```

**注意：** 将 `[RTL8720-firmware-path]` 替换为您从上面下载的 RTL8720 的路径。此文件夹应包含所有这 3 个文件：`km0_boot_all.bin`、`km0_km4_image2.bin` 和 `km4_boot_all.bin`

如果一切顺利，您应该会看到成功消息。现在您已经将 RTL8720 固件刷入了 RTL8720 核心！

#### 对于 Mac/ Linux

- **步骤 1：** 访问 GitHub 上的 [**RTL8720 固件**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) 仓库

- **步骤 2：** 选择您想要的发布版本，点击 **xxx-seeed-ambd-firmware-rpc-vxxx.zip** 将其下载为 **.zip 文件**

- **步骤 3：** 如前所述，使用**终端**导航到 **ambd_flash_tool** 目录并执行以下命令

```sh
python3 ambd_flash_tool.py flash -d [RTL8720-firmware-path]
``` 

**注意：** 将 `[RTL8720-firmware-path]` 替换为您从上面下载的 RTL8720 的路径。此文件夹应包含所有这 3 个文件：`km0_boot_all.bin`、`km0_km4_image2.bin` 和 `km4_boot_all.bin`

如果一切顺利，您应该会看到成功消息。现在您已经将 RTL8720 固件刷入了 RTL8720 核心！

## 从 Arduino IDE 检查 RTL8720 固件版本

安装上述固件后，您可以通过 **Arduino IDE** 将以下代码上传到 Wio Terminal 来检查固件是否正确安装

```cpp
#include "rpcWiFi.h"
#include <erpc/erpc_port.h>
 
void setup() {
    Serial.begin(115200);
    while(!Serial); // Wait to open Serial Monitor
    char* version = rpc_system_version();
    Serial.print("RTL8720 Firmware Version: ");
    Serial.println(version);
    erpc_free(version);
}
 
void loop() {
}
```

打开**串口监视器**后，您应该会看到打印的**固件版本**

## 更新 Seeed SAMD ArduinoCore

:::note
请将 **Seeed SAMD ArduinoCore 更新到最新版本 (1.8.1)**！
:::
- **步骤 1：** 打开 **Arduino IDE**，点击 `工具` -> `开发板` -> `开发板管理器`，在搜索框中搜索 **Wio Terminal**

- **步骤 2：** 确保安装了最新版本 (1.8.1)。如果没有，点击 `选择版本` 下拉菜单，选择最新版本并点击 `安装`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>


> 您也可以在[**这里**](https://github.com/Seeed-Studio/ArduinoCore-samd)找到 Seeed SAMD ArduinoCore 的源代码。    

## 库安装

无线连接需要一些 Arduino 库。我们已经在 **Arduino 库管理器**中包含了 Wio Terminal 的所有无线相关库。因此，您只需在 Arduino IDE 中打开 Arduino 库管理器，搜索您需要的库并轻松安装它们！

### 如何从 Arduino 库管理器安装库

- **步骤 1：** 打开 **Arduino IDE**，点击 `项目` -> `加载库` -> `管理库...`

- **步骤 2：** 输入我们需要的**库名称**，并从下拉菜单中选择**最新版本**（如果可用）

- **步骤 3：** 点击 **安装**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>


### Wi-Fi 所需的库

我们需要以下库来开始在 Wio Terminal 上使用 Wi-Fi。您可以在 Arduino 库管理器的搜索框中输入库名称来搜索这些库。

为了您的方便，我们已经将所有库组装在一起。因此，对于未来的文档和更新当前文档，您只需要安装 rpcwifi，然后它会为您安装所有 wifi 依赖库。

- [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) - 搜索 `"seeed rpcwifi"` 

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - 搜索 `"seeed rpcunified"`

- [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) - 搜索 `"seeed mbedtls"`

- [**Seeed_Arduino_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) - 搜索 `"seeed fs"`

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) - 搜索 `"seeed sfud"`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/newliarary.png" alt="pir" width={700} height="auto" /></p>

## 发布

<table align="center">
  <tbody><tr>
      <td align="center">更新日期</td>
      <td align="center">作者</td>
      <td align="center">详情</td>
    </tr>
    <tr>
      <td align="center">10.12</td>
      <td align="center">BILL and LAKSHANTHA</td>
      <td align="center">将所有必需的库组装在一起</td>
    </tr>
  </tbody></table>


## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>