---
description: Wio Terminal 网络配置
title: Wio Terminal 网络配置
keywords:
- Wio Terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Network-Overview
last_update:
  date: 4/18/2023
  author: Matthew
---

英文 wiki 地址：https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview

Wio Terminal 更新无线核心Realtek RTL8720的最新固件，安装Wio终端的所有依赖库与实现无线连接。

:::note
**我们已将Wi-Fi相关软件升级更加稳定的eRPC结构，并且可同时与蓝牙一起工作**! 请更新eRPC Wi-Fi固件和相关库确保可以正常使用!
:::

## 更新 Wifi（RTL8720 Wireless core） 内核固件

使用前我们要确保 Wio Terminal 的 Realtek RTL8720 内核的固件更新到最新版本。

:::note
使用前更新WIFI模块固件
:::

### 第一步 - 擦除出场固件

拿到Wio Terminal 设备后，我们第一次使用时需要擦除自带的 RTL8720 固件，并且烧录 最新版本的固件。因为我们不方便与RTL8720直接通信，所以我们可以使用 ambd_flash_tool 工具，通过SAMD51与RTL8720用串口连接，从而将固件烧录到RTL8720上。

**Tips**: ambd_flash_tool 这个工具既可以用来擦除RTL8720上现有的固件，又可以烧录最新的固件。

:::note
我们只需要在首次使用擦除出厂固件。之后，我们可以直接烧录新的固件来覆盖现有的固件。
:::

#### Windows 用户

- **第一步 :** 打开 **Windows PowerShell** 并且执行

```sh
cd ~path/to/workspace
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**NOTE**:  **cd ~** 进入到当前用户的工作目录下(可自定义)，我们将把代码下载到这里 **git clone** 用以克隆 ambd_flash_tool 代码到本地

- **第二步:** 进入 **ambd_flash_tool** 目录

```sh
cd ambd_flash_tool
```

- **第三步:** 用电脑连接 Wio Terminal 然后确保 Wio Terminal 开机

- **第四步:** 执行下面的命令用以擦除原始的固件

```sh
.\ambd_flash_tool.exe erase
```

**NOTE:** 擦除固件的过程需要持续一段时间，请耐心等待，在此期间不要关闭进程窗口 。

> Wio Terminal 连接电脑的串口会被自动检测到

**NOTE**: 如果想查看更多的可执行参数, 可以直接输入命令 `.\ambd_flash_tool.exe`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_win_2.png" alt="pir" width={700} height="auto" /></p>

#### Mac/ Linux 用户

- **第一步:在 Mac/Linux** 打开 **Terminal**  执行 下面的命令来下载烧录工具。

```sh
cd ~path/to/workspace
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**NOTE**:  **cd ~** 进入到当前用户的工作目录下(可自定义)，我们将把代码下载到这里 **git clone** 用以克隆 ambd_flash_tool 代码到本地

- **第二步:** 进入 **ambd_flash_tool** 目录

```sh
cd ambd_flash_tool
```

- **第三步:** 用电脑连接 Wio Terminal 然后确保 Wio Terminal 开机

- **第四步:** 执行下面的命令用以擦除原始的固件

```sh
python3 ambd_flash_tool.py erase
```

**NOTE**: 确保 **Mac/ Linux** 设备上正确地安装了 Python3 的环境, 这样才能自动下载并完成安装相关的依赖。

> 根据系统环境选择执行 `python3 ambd_flash_tool.py` 或 `python ambd_flash_tool.py`

**NOTE:** 擦除固件的过程需要持续一段时间，请耐心等待，在此期间不要关闭进程窗口 。

> Wio Terminal 连接电脑的串口会被自动检测到

**NOTE**: 如果想查看更多的可执行参数, 可以直接输入命令 `.\ambd_flash_tool.exe`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_linux.png" alt="pir" width={750} height="auto" /></p>

### 第二步 - 烧录最新的固件

#### Windows 用户

- 进入 **ambd_flash_tool** 目录, 执行下面命令用以将最新固件烧录进 RTL8720

```sh
.\ambd_flash_tool.exe flash
```

#### Mac/ Linux 用户

- 进入 **ambd_flash_tool** 目录, 执行下面命令用以将最新固件烧录进 RTL8720

```sh
python3 ambd_flash_tool.py flash
```

### 老版本固件恢复 (可跳过)

如果想测试编写支持老版本固件的代码，我们可以按照如下步骤来恢复老版本的固件，如果想用最新版固件可以直接按照步骤二的说明执行相应操作并跳过这个步骤。

#### For Windows

- **第一步:** 访问 [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) 固件仓库

- **第二步:** 选择对应的发布版本 **release version** 诸如 click on **xxx-seeed-ambd-firmware-rpc-vxxx.zip** 并点击 Download 完成下载 。 我们会得到一个 **.zip 压缩文件**

- **第三步:**  打开 **Windows PowerShell** 进入 **ambd_flash_tool** 并执行一下命令。

```sh
.\ambd_flash_tool.exe flash -d [RTL8720 固件的下载路径]
```

**NOTE:** 用刚刚下载的 RTL8720 对应的路径 替换【】的内容. 这个目录应该包含三个文件: `km0_boot_all.bin`, `km0_km4_image2.bin` and `km4_boot_all.bin`

如果顺利的完成烧录，我们可以看到执行成功提示消息。此时已经完成固件更新。

#### Mac/ Linux 用户

- **第一步:** 访问 [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) 固件仓库

- **第二步:** 选择对应的发布版本 **release version** 诸如 click on **xxx-seeed-ambd-firmware-rpc-vxxx.zip** 并点击 Download 完成下载 。 我们会得到一个 **.zip 压缩文件**

- **第三步:**  打开 **Windows PowerShell** 进入 **ambd_flash_tool** 并执行一下命令。

```sh
python3 ambd_flash_tool.py flash -d [RTL8720 固件的下载路径]
```

**NOTE:** 用刚刚下载的 RTL8720 对应的路径 替换【】的内容. 这个目录应该包含三个文件: `km0_boot_all.bin`, `km0_km4_image2.bin` and `km4_boot_all.bin`

## Arduino IDE 端检测 RTL8720 版本信息

在完成上述固件烧录之后，我们可以用 Arduino IDE 编写下面代码，编译上传至 Wio Terminal 设备来检测模块是否可以正常使用。

```cpp
#include "rpcWiFi.h"
 
void setup() {
    Serial.begin(115200);
    while(!Serial); // Wait to open Serial Monitor
    Serial.printf("RTL8720 Firmware Version: %s", rpc_system_version());
}
 
void loop() {
}
```

我们打开串口助手。将会看到打印固件的版本信息。

## 更新 Seeed SAMD ArduinoCore

!!!Note
    请将 **Seeed SAMD ArduinoCore 更新到最新版本 (1.8.1)**!

- **第一步:** 打开 **Arduino IDE**, 依次点击 `Tools` -> `Board` -> `Boards Manager`, 然后搜索 **Wio Terminal** 。

- **第二步:** 我们可以在 目录上点击 `Select version` , 选择最新版本并点击 `Install`。确保最新版本 (1.8.1) 正确安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>


> 我们可以在这里 查看 Seeed SAMD ArduinoCore [**相关源代码**](https://github.com/Seeed-Studio/ArduinoCore-samd).

## 安装依赖函数库

为了实现无线连接，有数个 Arduino 库需要额外安装。为了方便 Wio Terminal 使用 ，我们将必要的库整合在一起，只需要打开 **Arduino Library Manager** 并按照如下说明就可以轻松的搞定。

### 从 Arduino Library Manager 完成依赖安装

- **第一步:** 打开 **Arduino IDE**, 依次点击 `Sketch` -> `Include Library` -> `Manage Libraries...`

- **第二步:** 输入我们需要的 **依赖仓库的名字** 以及选择对应的版本，通常推荐选择最新版本 **latest version**。

- **第三步:** 点击 **Install** ，等待下载 解压 完成安装

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>


### Wi-fi 相关功能的必要依赖

在 Wio Terminal 使用 Wi-Fi 功能时候，我们需要确保以下的依赖完成安装。我们可以在 Arduino Library Manager 里面搜索对应的名字来检查。

- [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) - 搜索 `"seeed rpcwifi"`

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - 搜索  `"seeed rpcunified"`

- [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) - 搜索  `"seeed mbedtls"`

- [**Seeed_Arduino_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) - 搜索  `"seeed fs"`

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) - 搜索  `"seeed sfud"`
