---
title: Overview
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/
slug: /cn/Wio-Terminal-Network-Overview
last_update:
  date: 3/09/2024
  author: jessie
---

# 概述

这篇Wiki介绍了如何为Wio Terminal上的Wireless Core Realtek RTL8720更新最新固件，以及安装所有依赖库以启用无线连接。

:::注
**我们已将Wi-Fi软件迁移到了更稳定的新eRPC结构，可以同时与蓝牙配合使用** ！请按照以下步骤更新到eRPC Wi-Fi固件和相关库！
:::

## 更新Wireless Core固件

首先，我们需要为Wio Terminal上的Realtek RTL8720 Wireless Core更新固件。 **在进行示例之前，这是必不可少的，必须更新到最新固件。**
        
<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Attention</p>
    <p style={{color: '#000000', fontSize: 14}}>Please update the Wi-Fi Core before usage!</p>
  </div>
</div>


### 步骤 1 - 擦除初始 Factory Firmware

当您第一次使用Wio Terminal时，您需要擦除初始的RTL8720固件并刷入最新固件。我们准备了一个名为 **ambd_flash_tool** 的工具，运行该工具时，它首先在SAMD51和RTL8720之间启用了串行连接，以便固件可以安装在RTL8720上。这是因为您无法直接与RTL8720通信。之后，该工具可用于擦除RTL8720上的现有固件并刷入最新固件。

**注**: 您只需要在第一次使用时擦除工厂固件。之后，您可以刷入新固件以覆盖现有固件。

#### For Windows

- **步骤 1:** 在您的PC上打开 **Windows PowerShell** 并执行以下命令下载刷写工具。 

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**注**: 这里的 **cd ~** 命令将您导航到您的主目录， **git clone** 命令从GitHub下载存储库。

- **步骤 2:** 导航到 **ambd_flash_tool** 目录。

```sh
cd ambd_flash_tool
```

- **步骤 3:**  将Wio Terminal连接到电脑并打开它。

- **步骤 4:** 执行以下命令擦除初始固件。

```sh
.\ambd_flash_tool.exe erase
```

**注:** 初始擦除过程可能需要一段时间。请耐心等待， **不要** 关闭窗口。

> Wio Terminal的连接串口将自动检测到！

**注**: 如果您想打开帮助用法，请执行 `.\ambd_flash_tool.exe` 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_win_2.png" alt="pir" width={700} height="auto" /></p>


#### For Mac/ Linux

- **步骤 1:** 在Mac/Linux上打开 **Terminal** 并执行以下命令下载刷写工具。

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**注**: Here **cd ~** 命令将您导航到您的主目录， **git clone** 命令从GitHub下载存储库。

- **步骤 2:** 导航到 **ambd_flash_tool** 目录。

```sh
cd ambd_flash_tool
```

- **步骤 3:** 将Wio Terminal连接到电脑并打开它。

- **步骤 4:** 执行以下命令擦除初始固件。

```sh
python3 ambd_flash_tool.py erase
```

**注**: 确保您的 **Mac/Linux上已安装Python 3 **, 脚本将自动下载所有依赖库。

> 在某些情况下，您的电脑上可能只有Python 3，然后用 `python ambd_flash_tool.py` 替换`python3 ambd_flash_tool.py` 。

**注:** 初始擦除过程可能需要一段时间。请耐心等待， **不要** 关闭窗口。

> Wio Terminal的连接串口将自动检测到！

**注**: 如果您想打开帮助用法，请执行 `python3 ambd_flash_tool.py` 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_linux.png" alt="pir" width={750} height="auto" /></p>


### 步骤 2 - 刷入最新固件

#### For Windows

- 当您位于 **ambd_flash_tool** 目录中时，执行以下命令将 **最新 firmware** 刷入RTL8720。

```sh
.\ambd_flash_tool.exe flash
``` 

#### For Mac/ Linux

- 当您位于 **ambd_flash_tool** 目录中时，执行以下命令将  **最新 firmware** 刷入RTL8720。

```sh
python3 ambd_flash_tool.py flash
```

### 刷入旧固件（附加步骤-可跳过）

如果您想使用旧的固件版本测试您的代码，可以按照以下步骤操作。然而，如果您想使用最新的固件开始，您可以遵循上面的步骤 **(步骤 2)** 并跳过此步骤。

#### For Windows

- **步骤 1:** 访问GitHub上的 [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) 存储库。

- **步骤 2:** 选择您喜欢的 **发布版本** 然后单击 **xxx-seeed-ambd-firmware-rpc-vxxx.zip** 以将其下载为 **.zip 文件**。

- **步骤 3:** 使用前面提到的 **Windows PowerShell** 导航到 **ambd_flash_tool** 目录，并执行以下命令。

```sh
.\ambd_flash_tool.exe flash -d [RTL8720-firmware-path]
``` 

**注:** 将 `[RTL8720-firmware-path]` 替换为您上面下载RTL8720的路径。此文件夹应包含以下3个文件: `km0_boot_all.bin`, `km0_km4_image2.bin` 和 `km4_boot_all.bin`。

如果一切顺利，您应该看到成功的消息。现在，您已经将RTL8720固件刷入RTL8720核心！

#### For Mac/ Linux

- **步骤 1:** 访问GitHub上的 [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) 存储库。

- **步骤 2:** 选择您喜欢的发布版本，然后单击 **xxx-seeed-ambd-firmware-rpc-vxxx.zip** 以将其下载为 **.zip 文件** 。

- **步骤 3:** 使用前面提到的 **terminal** 目录，导航到  **ambd_flash_tool** 并执行以下命令。

```sh
python3 ambd_flash_tool.py flash -d [RTL8720-firmware-path]
``` 

**注:** 将 `[RTL8720-firmware-path]` 替换为您上面下载RTL8720的路径。此文件夹应包含以下3个文件: `km0_boot_all.bin`, `km0_km4_image2.bin` 和 `km4_boot_all.bin` 。

如果一切顺利，您应该看到成功的消息。现在，您已经将RTL8720固件刷入RTL8720核心！

## 从Arduino IDE检查RTL8720固件版本

安装上述固件后，您可以通过 **Arduino IDE** 将以下代码上传到Wio Terminal，以检查固件是否正确安装。

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

一旦您打开 **串口监视器**, 您应该会看到打印的 **固件版本** 。

## 更新Seeed SAMD ArduinoCore

:::注
请将 **Seeed SAMD ArduinoCore更新为最新版本（1.8.1）**!
:::
- **步骤 1:** 打开 **Arduino IDE**, 点击 `Tools` -> `Board` -> `Boards Manager`, 并在搜索框中搜索 **Wio Terminal** 。

- **步骤 2:** 确保安装了最新版本（1.8.1）。如果没有安装，请点击 `Select version` 下拉菜单，选择最新版本，然后点击 `Install` 。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>


> 您也可以在 [**此处**](https://github.com/Seeed-Studio/ArduinoCore-samd) 找到Seeed SAMD ArduinoCore的源代码。    

## 安装库

有几个Arduino库需要用于无线连接。我们已经在 **Arduino 库管理器** 中包含了Wio Terminal的所有与无线相关的库。因此，您只需在Arduino IDE中打开Arduino库管理器，搜索所需的库并轻松安装它们！

### 如何从Arduino库管理器安装库

- **步骤 1:** 打开 **Arduino IDE**, 点击 `Sketch` -> `Include Library` -> `Manage Libraries...`

- **步骤 2:** 输入我们需要的 **库的名称** 并从下拉菜单中选择 **最新版本** （如果可用）。

- **步骤 3:** 点击 **Install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>


### Wi-Fi所需的库

我们需要以下库来开始在Wio Terminal上使用Wi-Fi。您可以通过在Arduino库管理器的搜索框中输入库名称来搜索这些库。

为了方便起见，我们已经将所有库组合在一起。因此，在将来的文档和更新当前文档时，您只需安装rpcwifi，然后它将为您安装所有的Wi-Fi依赖库。

- [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) - 在搜索框中搜索 `"seeed rpcwifi"` 

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - 在搜索框中搜索 `"seeed rpcunified"`

- [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) - 在搜索框中搜索 `"seeed mbedtls"`

- [**Seeed_Arduino_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) - 在搜索框中搜索 `"seeed fs"`

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) - 在搜索框中搜索 `"seeed sfud"`

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
      <td align="center">将所有所需的库集合在一起</td>
    </tr>
  </tbody></table>


## 技术支持 & 产品讨论

 如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
