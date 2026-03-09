---
description: 刷写原生固件
title: 更新和刷写固件
keywords:
  - SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_How_To_Flash_The_Default_Firmware
toc_max_heading_level: 4
sidebar_position: 3
last_update:
  date: 11/17/2023
  author: Spencer
createdAt: '2025-05-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **如何刷写原生固件**

SenseCAP indicator 有两个 MCU，ESP32-S3 和 RP2040。本教程提供了全面的指南来帮助开发者上手，包括刷写开箱即用的工厂原生固件以及将早期出货的设备更新到最新固件。

固件更新特别适用于两种情况：

1. 如果您在 2023 年 6 月之前购买了不带 OpenAI 固件的产品，固件版本为 `1.0.0`，您可以下载并更新到包含 OpenAI 功能的最新固件。最新固件可以从[这里](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases)下载。
2. 如果您已经开发了一个应用程序并希望刷写自定义固件，您可以按照[下面提供的教程](#flash-esp32-s3-frimware-using-espressif-idf)进行操作。

简而言之，您需要本教程是因为：

1. 您有一个需要刷写到 ESP32-S3 或 RP2040 的固件。
2. 您已经修改了代码，需要编译并刷写到设备中。

让我们开始这个教程。

## 准备工作

要开始，您只需要您的 SenseCAP Indicator 和一台 Windows/Mac/Linux 计算机。

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"/></div>

## 获取原生固件

SenseCAP Indicator 的默认出货固件对于 ESP32-S3 和 RP2040 都是完全开源的。

:::tip 您有两种选择来获取开箱即用固件：

- **源代码：** 在刷写之前，您可以选择根据您的需求修改代码。您需要一个工具链（[ESP-IDF](#ESP-IDF)、[Arduino](#RP_Arduino)）来**编译**它。
- **固件：** 直接刷写预编译的二进制文件，无需任何代码修改或编译。使用诸如 [Esptool](#ESPTOOL) 和 [Flash Download Tools](#Flash_Tools) 等工具。
:::

**源代码**

- [🖱️点击获取 ESP32-S3 固件源代码](https://github.com/Seeed-Solution/sensecap_indicator_esp32)
- [🖱️点击获取 RP2040 Arduino 示例源代码](https://github.com/Seeed-Solution/sensecap_indicator_rp2040)

**固件**

- [🖱️点击下载 ESP32-S3 固件](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0)
- [🖱️点击下载 RP2040 固件](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0)

## 针对 **ESP32-S3**

### **ESP-IDF** {#ESP-IDF}

> ESP-IDF（Espressif IoT 开发框架）是 Espressif Systems 提供的软件开发框架，专门用于为其 ESP32 和 ESP8266 系列微控制器设计固件和应用程序。有关更多信息，您可以参考 [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)

如果您选择将源代码编译成固件，您需要 ESP-IDF 来执行编译过程。

:::note **注意**：
ESP-IDF 版本必须大于 v5.0。如果您使用的是较旧版本，您需要将其更新到最新版本。
:::

对于新用户，这个视频可能会帮助您更好地理解以下步骤：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/oqJz6zKfc4A?si=glzTFfR7m392eITb" title="Set Up the ESP-IDF Toolchain for SenseCAP Indicator on Windows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

#### **工具链安装**

<Tabs
groupId="operating-systems"
defaultValue='Win'
values={[
{label: 'Windows', value: 'Win'},
{label: 'Linux and MacOS', value: 'Unix'},
]}>
<TabItem value="Win">

  > 官方 Espressif 文档：[Windows 工具链标准设置](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/windows-setup.html)

  **选项 1：使用离线安装程序**

  对于 Windows 用户，您可以选择直接下载 ESP-IDF 离线安装程序。这里是直接下载链接：[🖱️下载离线安装程序 v5.1.1](https://dl.espressif.com/dl/idf-installer/esp-idf-tools-setup-offline-5.1.1.exe)

  **选项 2：使用推荐脚本**

导航到[使用命令提示符](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html#using-the-command-prompt)

</TabItem>

<TabItem value="Unix">

  > 官方 Espressif 文档：[Linux 和 macOS 标准工具链设置](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/linux-macos-setup.html)

  如果在 Linux 或 MacOS 中，您可以按照此指南更改 git 仓库的版本。

  ```
  git clone --recursive https://github.com/espressif/esp-idf.git
  ```

**导航到 esp-idf 目录**：

1. 运行 `./install.sh esp32s3`，添加 ESP32-S3 支持（SenseCAP indicator 需要）
2. 输入 `./export.sh` 在当前终端会话中设置 PATH 和 IDF_PATH 变量。

如果您想在任何 shell 会话中调用，您可以将以下行添加到您的 shell 配置文件中（例如 ~/.bash_profile）：

```
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

然后您可以使用 `get_idf` 来激活环境。[^refer](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html#step-4-set-up-the-environment-variables)

</TabItem>
</Tabs>

#### 构建项目和刷写 {#BUILD}

如果您选择将源代码编译成固件，您需要 ESP-IDF 来执行编译过程。

<!-- Please differentiate between flashing compiled firmware and directly downloading firmware using IDF! -->

要构建、刷写和监控您的项目，请执行以下命令：

```
cd  <your_sdk_path>/examples/indicator_basis/
idf.py -p PORT build flash monitor
```

:::tip
没有 `PORT` 时，IDF 将自动选择可用端口。
:::

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"/></div>

<!-- Need to change the PIcure -->

到此为止，通过输入命令 `idf.py -p PORT flash`，固件已成功刷写到 ESP32-S3 中。

<!-- Why is this patch not placed in the later Q/A section? Also, are there too few Compile Code instructions? There's no Compile Code, just direct flashing. -->

### **Esptool** {#ESPTOOL}

> [ESPtool - GitHub](https://github.com/espressif/esptool) 是一个基于 Python 的开源实用程序，提供了与 Espressif 芯片中 ROM 引导加载程序通信的平台无关方式。

Esptool 可以作为您的 Python 脚本的一部分使用。在本指南中，我们将使用 [Esptool 发布页面](https://github.com/espressif/esptool/releases)上提供的`打包软件`。选择与您计算机操作系统对应的软件。

#### 使用 Esptool 进行刷写

提供了两个脚本，展示了如何有效利用 Esptool 将固件刷写到 ESP32-S3 微控制器上。

:::note **注意**：
请注意，提供的脚本是为 Windows 操作系统量身定制的。如果您使用不同的操作系统，您需要调整脚本以适应您的环境。
:::

merge.bat 脚本特别有用，因为它智能地将引导加载程序、分区表和指示器基础二进制文件合并为单个固件文件。合并后，此固件可以使用 flash.bat 脚本无缝刷写到 ESP32-S3 上。当提示时，输入与您设备对应的 COM 端口，刷写过程将开始。完整操作可以总结如下：

```sh title="merge.bat"
esptool.exe --chip esp32s3 ^
merge_bin -o sensecap_indicator_basis_v1.0.0.bin ^ # Target file name
--flash_mode dio ^
--flash_size 8MB ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

或者，如果您更喜欢刷写单独的二进制文件而不是合并文件然后刷写，您可以直接使用 `just_flash.bat` 脚本：

```sh title="just_flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

对于使用合并固件的直接刷写过程：

```sh title="flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z 0x0 indicator_basis_v1.0.0.bin
```

> 请密切注意起始地址（0x0），特别是在不合并二进制文件时。对于单独的二进制文件，请参考 [Flash Download Tools 单独二进制文件](#Address_Note) 中的说明。遵循这些指导原则确保无错误刷写。

要使用这些脚本，将代码保存到项目文件夹中名为 `merge.bat` 和 `flash.bat` 的单独文本文件中。这种组织方法简化了访问和使用。

通过使用这些脚本，您简化了固件准备和刷写阶段，有助于实现更流畅、更可靠的过程。

```
├── indicator_basis
│   ├── CMakeLists.txt
│   ├── build
│   ├── docs
│   ├── main
│   ├── partitions.csv
│   ├── sdkconfig
│   └── .defaults
│   └── flash.bat
│   └── merge.bat
```

1. 使用 `merge.bat` 合并二进制文件。
2. 使用 `flash.bat` 刷写合并的固件。

#### 刷写固件

对于刷写固件，您可以使用提供的 `flash.bat` 脚本。此脚本旨在简化将固件刷写到 ESP32-S3 微控制器的过程。

<details>
   <summary>显示 flash.bat 代码</summary>
   ```bat
   @echo off
   setlocal
   cd /d "%~dp0"
   :: Set Chip
   set chip=esp32s3
   :: Set Baud
   set baud=921600
   :: List COM ports
   echo Available ports and devices:
   echo.
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"COM" ^| findstr /C:"CH340"') do (
   echo %%A
   )
   :: Prompt for port
   :chooseport
   echo.
   echo Please enter the COM port to use (e.g., COM5):
   set /p port=
   :: Check if chosen port is valid and contains "CH340"
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"%port%" ^| findstr /C:"CH340"') do (
   set device=%%A
   goto :flash
   )
   echo Port %port% not found
   goto :chooseport
   :flash:: Print chosen parameters
   echo.
   echo You have chosen:
   echo Chip: %chip%
   echo Port: %port% - %device%
   echo Baud: %baud%
   @REM echo Press any key to continue to...
   @REM pause >nul
   :: Run esptool for the single file
   esptool.exe --chip %chip% --port %port% --baud %baud% write_flash -z 0x0 indicator_basis_v1.0.0.bin
   if ERRORLEVEL 1 (
   echo Flashing with the single file failed with error %ERRORLEVEL%.
   goto :end
   )
   :: End of script
   :end
   endlocal
   ```
</details>

#### 合并二进制文件

提供的 `merge.bat` 脚本可用于将必要的二进制文件合并为一个固件文件。此脚本简化了流程并确保正确合并以成功刷写，这样您就可以刷写单个 bin 文件而不必[刷写单独的文件](#Address_Note)。

<details>
   <summary>显示 merge.bat 代码</summary>
   ```bat
   @echo off
   SETLOCAL
   SET CurrentDir=%cd%
   SET ScriptDir=%~dp0
   SET CurrentDir=%CurrentDir:~0,-1%
   SET ScriptDir=%ScriptDir:~0,-1%
   IF NOT "%CurrentDir%"=="%ScriptDir%" (
   cd /d "%ScriptDir%"
   )
   esptool.exe --chip esp32s3 ^
   merge_bin -o indicator_basis_v1.0.0.bin ^
   --flash_mode dio ^
   --flash_size 8MB ^
   0x0 ../../build/bootloader/bootloader.bin ^
   0x8000 ../../build/partition_table/partition-table.bin ^
   0x10000 ../../build/indicator_basis.bin
   ENDLOCAL
   ```
</details>

### **Flash Download Tools**（仅限 Windows）{#Flash_Tools}

> **Flash Download Tools** 用于对 ESP8266 和 ESP32 系列微控制器进行编程或刷写固件。它们提供图形用户界面（GUI），让用户可以轻松地将固件刷写到 ESP 微控制器上。

按照以下步骤刷写预编译固件：

**下载：**
[Flash Download Tools（仅限 Windows）](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

- **步骤 1**：**双击** `.exe` 文件进入工具的主界面。

- **步骤 2**：选择以下选项：

<div class="table-center">
  <table align="center">
    <tr>
        <th>选项</th>
        <th>参数</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>Chip Type</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>ESP32-S3</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>WorkMode</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>Develop</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>LoadMode</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>UART</div>
        </td>
    </tr>
  </table>
</div>

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"/></div>

- **步骤 3**：使用 USB Type-C 线缆将 SenseCAP Indicator 连接到您的笔记本电脑。

- **步骤 4**：在 SPI Download 选项卡中点击 "..." 并导航到您刚下载的固件。

- **步骤 5**：配置 SPI Flash：

<div class="table-center">
  <table align="center">
    <tr>
        <th>选项</th>
        <th>参数</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>SPI SPEED</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>40MHz</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>SPI MODE</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>DIO</div>
        </td>
    </tr>
  </table>
</div>

- **步骤 6**：配置下载面板：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>

- **COM**：检查设备管理器中的端口，USB-SERIAL 是正确的端口。
（`这里我们选择 COM4`）
- **Baud**：921600（推荐值）

<!-- Previous: Click `Start` Downloading -->

然后点击 `START` 开始刷写。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"/></div>

当显示 `FINISH` 时，固件刷写已完成。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"/></div>

#### 用于单独二进制文件的 Flash Download Tools {#Address_Note}

在前面提到的指南中，二进制文件 "Default_Factory_Firmware_ESP32-S3.bin" 将三个二进制文件合并为一个。

但是，如果您使用 ESP-IDF 构建固件，直接刷写单个文件可能会导致错误。相反，您需要找到您构建的**三个单独的二进制文件**并指定正确的地址（您可以使用自己的地址），如下所示：

- **bootloader.bin** ----> **0x0**
- **partion-table.bin** ----> **0x6800**
- **termial_demo.bin** ----> **0x10000**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"/></div>

## 对于 **RP2040**

### 通过 Arduino IDE 刷写 {#RP_Arduino}

RP2040 开发工具利用 Arduino 来增强您的编码体验。

> Arduino IDE 是用于编写 Arduino 板代码的免费软件。凭借其用户友好的界面，您可以轻松编写和上传代码。基于简化版的 C++，它提供库和示例，非常适合初学者。

**下载：**

- **步骤 1**：安装 [Arduino IDE](https://www.arduino.cc/en/software)

- **步骤 2**：添加 Raspberry Pi Pico 板

打开您的 Arduino IDE，点击 **Arduino IDE** > **Preferences**，并将以下 URL 复制到 **Additional Boards Manager URLs**：

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div>
        </td>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
  </table>
</div>

点击 **Tools** > **Board** > **Board Manager**。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"/></div>

搜索 "indicator" 并在 Boards Manager 中安装 "Raspberry Pi Pico/RP2040"

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"/></div>

- **步骤 3**：添加库

:::note **参考库**

- Sensirion Core：[Sensirion Arduino Core 库](https://github.com/Sensirion/arduino-core)
- PacketSerial：[串行通信协议](https://github.com/bakercp/PacketSerial)
- Sensirion I2C SGP40：[SGP40 TVOC 传感器库](https://github.com/Sensirion/arduino-i2c-sgp40)
- Sensirion I2C SCD4x：[SCD41 CO2 传感器库](https://github.com/Sensirion/arduino-i2c-scd4x)
- Sensirion Gas Index Algorithm：[传输索引库](https://github.com/Sensirion/arduino-gas-index-algorithm)
- Seeed_Arduino_AHT20：[AHT20 温湿度传感器库](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20)
:::

在 Arduino IDE 中，您可以在 `Library Manager` 中搜索它，例如 `Seeed_Arduino_AHT20`，然后安装它。

<details>
<summary>点击预览离线安装</summary>

要*离线*安装，您可以从 GitHub **下载仓库 zip 文件**，导航到 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择您下载的库。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

- **步骤 4**：使用提供的 USB Type-C 线缆将设备连接到您的 PC。

- **步骤 5**：选择板和端口

搜索 "Indicator" 并选择 `Seeed INDICATOR RP2040` 板，然后选择 `usbmodem` 串行端口。

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
     <td>
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png" style={{width:680, height:'auto'}}/></div>
    </td>
  </table>
</div>

- **步骤 6**：打开示例代码文件

**File** -> **Open**，然后选择示例代码文件（[.ino 文件](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/tree/main/examples/indicator_rp2040)）。

我们提供了一个示例代码文件，您可以根据需要修改代码。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **步骤 7**：验证并上传文件。

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
  </table>
</div>

至此，我们已经完成了在 RP2040 上构建和刷写（下载）固件。

### 刷写 .uf2 文件

- **步骤 1**：将设备连接到您的 PC

使用针长按此内部按钮，然后通过提供的 USB Type-C 线缆将设备连接到您的 PC，连接后释放按钮。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"/></div>

- **步骤 2**：固件烧录

连接成功后，您的电脑将显示一个磁盘。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"/></div>

将 [.uf2](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2) 文件复制到磁盘中，然后磁盘将注销。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"/></div>

升级将自动运行。

## ESP32 与 RP2040 通信协议

ESP32 和 RP2040 使用串口通信，采用 [cobs](http://www.stuartcheshire.org/papers/COBSforToN.pdf) 通信协议。演示中使用的命令列表如下：

命令格式由数据包类型和数据包参数组成。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"/></div>

## 资源

[SenseCAP Indicator ESP32 SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)

[SenseCAP Indicator RP2040 演示](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main)

## 常见问题

<details>
    <summary>如何区分串口？</summary>
    <Tabs
    groupId="operating-systems"
    defaultValue='Win'
    values={[
    {label: 'Windows', value: 'Win'},
    {label: 'MacOS', value: 'Unix'},
    ]}
    >
    <TabItem value="Win" >
      在设备管理器中检查端口
      - "USB Serial Device(COMx)" 或 "USB 串行设备" 是 RP2040 的端口
      - "USB-SERIAL CH340" 是 ESP32 的端口
      简而言之，CH340 端口是 ESP32 的端口。
      <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"/></div>
    </TabItem>
    <TabItem value="Unix">
      - "/dev/cu.usbmodem" 是 RP2040 的端口
      <div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"/></div>
    </TabItem>
    </Tabs>
</details>

# **最近更新**

- 2023-11-17
  - 移除了补丁部分
- 2023-08-25
  - 使补丁部分更加清晰
- 2023-07-25
  - 添加了使用 Esptool 烧录固件的内容
- 2023-05-29
  - 添加了补丁部分

# **技术支持**

**需要 SenseCAP Indicator 的帮助？我们随时为您提供协助！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
