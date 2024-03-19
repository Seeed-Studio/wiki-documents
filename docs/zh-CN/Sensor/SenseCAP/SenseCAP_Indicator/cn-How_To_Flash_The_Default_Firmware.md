---
description: Flash The Native Firmware
title: Update and Flash Firmware  
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware
toc_max_heading_level: 4
sidebar_position: 3
last_update:
  date: 3/3/2024
  author: Dukaiyin
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **如何刷新原生固件**

SenseCAP指示灯具有两个MCU，ESP32-S3和RP2040。本教程提供了全面的指南，以帮助开发人员入门，包括刷新开箱即用的原生固件和将早期发货的设备更新到最新固件。


固件更新特别适用于两种情况：

1. 如果您在2023年6月之前购买的产品没有OpenAI固件，固件版本为`1.0.0`，您可以下载并更新到包含OpenAI功能的最新固件。最新固件可从[这里](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases).
2. 如果您已经开发了一个应用程序并希望刷新自定义固件，您可以按照 [下面提供的教程](#flash-esp32-s3-frimware-using-espressif-idf)进行操作。.

简而言之，您需要本教程的原因是：
1. 您有一个需要刷新到ESP32-S3或RP2040的固件。
2.您已经修改了代码，并且需要将其编译并刷新到设备上。

让我们进入这个教程。

## 准备工作

要开始，您只需要您的 SenseCAP Indicator和一台Windows/Mac/Linux计算机。






<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"/></div>

## 获取原生固件

SenseCAP Indicator的默认发货固件对于ESP32-S3和RP2040都是完全开源的。

:::提示 获取开箱即用固件有两种选项：
- **源代码:** B 在刷新之前，您可以根据需要修改代码您需要一个工具链([ESP-IDF](#ESP-IDF), [Arduino](#RP_Arduino)) 来进行**编译** 
- **固件:** 直接刷新预编译的二进制文件，无需进行任何代码修改或编译。 使用类似  [Esptool](#ESPTOOL) 和
[Flash Download Tools](#Flash_Tools)的工具。
:::

**源代码**

- [🖱️点击获取ESP32-S3固件源代码](https://github.com/Seeed-Solution/sensecap_indicator_esp32)
- [🖱️点击获取RP2040 Arduino示例源代码](https://github.com/Seeed-Solution/sensecap_indicator_rp2040)

**固件**

- [🖱️点击下载ESP32-S3固件](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0)
- [🖱️点击下载RP2040固件](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0)

## For **ESP32-S3**

### **ESP-IDF** {#ESP-IDF}

> 
ESP-IDF（Espressif IoT Development Framework）是由Espressif Systems提供的软件开发框架，专门用于设计其ESP32和ESP8266系列微控制器的固件和应用程序。有关更多信息，您可以参考 [ESP-IDF编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)。


如果您选择将源代码编译为固件，您将需要ESP-IDF来执行编译过程

:::note **注意**:
ESP-IDF版本必须大于v5.0。如果您使用的是旧版本，您需要将其更新到最新版本。
:::

#### **工具链安装**

<Tabs
groupId="operating-systems"
defaultValue='Win'
values={[
{label: 'Windows', value: 'Win'},
{label: 'Linux and MacOS', value: 'Unix'},
]}>
<TabItem value="Win">

  > 官方Espressif文档: [Windows平台工具链标准设置](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.htmll)

  **Option 1:使用离线安装程序**

  对于Windows用户，您可以选择直接下载ESP-IDF离线安装程序。这是直接的下载链接：[🖱️下载离线安装程序 v5.1.1](https://dl.espressif.com/dl/idf-installer/esp-idf-tools-setup-offline-5.1.1.exe)

  **Option 2:  使用推荐的脚本**

转到 [使用命令提示符](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html#using-the-command-prompt)

</TabItem>

<TabItem value="Unix">

  > Official Espressif Docs: [Standard Toolchain Setup for Linux and macOS](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html)

 如果在Linux或MacOS上，您可以按照此指南更改git存储库的版本。

  ```
  git clone --recursive https://github.com/espressif/esp-idf.git
  ```

**导航到esp-idf目录**:
1. 运行`./install.sh esp32s3`, 以添加ESP32-S3支持( SenseCAP indicator所需 )
2. 输入`./export.sh` 来设置当前终端会话中的 PATH 和 IDF_PATH 变量.

如果您想在任何shell会话中调用，可以将以下行添加到您的shell配置文件（例如 ~/.bash_profile）：

```
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

然后，您可以使用  `get_idf` 来激活环境.[^引用](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html#step-4-set-up-the-environment-variables)

</TabItem>
</Tabs>

---

#### 构建项目和烧录 {#BUILD}

如果选择将源代码编译为固件，您将需要ESP-IDF来执行编译过程。
<!-- Please differentiate between flashing compiled firmware and directly downloading firmware using IDF! -->

要构建、烧录和监视您的项目，请执行以下命令：

```
cd  <your_sdk_path>/examples/indicator_basis/
idf.py -p PORT build flash monitor
```

:::提示
如果没有指定 `PORT`，IDF 将自动选择可用的端口
:::

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"/></div>

<!-- Need to change the PIcure -->


到目前为止，通过输入命令  `idf.py -p PORT flash`，固件已成功烧录到ESP32-S3。

<!-- Why is this patch not placed in the later Q/A section? Also, are there too few Compile Code instructions? There's no Compile Code, just direct flashing. -->

### **Esptool** {#ESPTOOL}

> [ESPtool - GitHub](https://github.com/espressif/esptool) 是一个基于Python的开源实用程序，为与Espressif芯片中的ROM引导加载程序通信提供了一个跨平台的方式


Esptool可以作为您Python脚本的一部分。在本指南中，我们将使用[Esptool发布页面](https://github.com/espressif/esptool/releases). 上提供的`打包软件`。选择与您计算机操作系统相对应的软件。

#### 使用Esptool进行烧录
提供了两个脚本，展示了如何有效地利用Esptool将固件烧录到ESP32-S3微控制器上。


:::note **注意**:
请注意，提供的脚本专为Windows操作系统定制。如果您使用不同的操作系统，您需要调整脚本以适应您的环境。
:::

merge.bat脚本特别有用，因为它智能地将引导加载程序、分区表和指示灯基础二进制文件合并成一个单独的固件文件。合并后，可以使用flash.bat脚本轻松将此固件烧录到ESP32-S3上。在提示时，输入与您的设备对应的COM端口，烧录过程将启动。完整的操作可以总结如下：


```sh title="merge.bat"
esptool.exe --chip esp32s3 ^
merge_bin -o sensecap_indicator_basis_v1.0.0.bin ^ # Target file name
--flash_mode dio ^
--flash_size 8MB ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

或者，如果您喜欢烧录单独的二进制文件而不是合并文件再进行烧录，您可以直接使用 `just_flash.bat`  脚本：

```sh title="just_flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```


对于使用合并的固件进行简单烧录的过程：

```sh title="flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z 0x0 indicator_basis_v1.0.0.bin
```

> 特别是在不合并二进制文件时，要特别注意起始地址（0x0）。对于单独的二进制文件，请参阅 [单独二进制文件的Flash下载工具说明](#Address_Note). 中的说明。遵循这些指南可以确保无错误烧录。

为了使用这些脚本，将代码保存到名为`merge.bat`和 `flash.bat` 的两个文本文件中，放在项目文件夹内。这种组织方式简化了访问和使用。

通过使用这些脚本，您可以简化固件准备和烧录阶段，从而实现更加顺畅和可靠的流程。

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

1. 合并二进制文件使用 `merge.bat`.
2. 使用以下命令烧录合并的固件 `flash.bat`.

#### 烧录固件

要烧录固件，您可以使用提供的 `flash.bat` 脚本。该脚本旨在简化将固件烧录到ESP32-S3微控制器的过程。

<details>
   <summary>显示flash.bat代码</summary>
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

#### 二进制文件合并
提供的`merge.bat`  脚本可用于将必要的二进制文件合并成一个固件文件。此脚本简化了流程，确保正确合并以便成功烧录，从而允许您烧录单个 bin 文件,而不是[烧录单独的文件](#Address_Note).

<details>
   <summary>Show merge.bat code</summary>
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

### **Flash Download Tools** (Windows only) {#Flash_Tools}

> **Flash Download Tools** 用于将固件编程或烧录到ESP8266和ESP32系列微控制器上。它们为用户提供了一个图形用户界面（GUI），以便轻松地将固件烧录到ESP微控制器上。


按照以下步骤烧录预编译的固件

**下载:**
[Flash Download Tools（仅适用于Windows）)](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

- **Step 1**: **双击**  `.exe` 文件进入工具的主界面。
- **Step 2**: 选择以下选项：
<div class="table-center">
  <table align="center">
    <tr>
        <th>Option</th>
        <th>Param</th>
    </tr>
    <tr>
        <td>
        <div style={{textAlign: 'center'}}><strong>Chip Type</strong></div>
        </td>
        <td><div  style={{textAlign: 'center'}}>ESP32-S3</div>
        </td>
    </tr>
    <tr>
      <td>
      <div  style={{textAlign: 'center'}}> <strong>WorkMode</strong></div>
      </td>
      <td>
      <div  style={{textAlign: 'center'}}> Develop </div>
      </td>
    </tr>
    <tr>
      <td>
      <div  style={{textAlign: 'center'}}> <strong>LoadMode</strong></div>
      </td>
      <td>
      <div  style={{textAlign: 'center'}}> UART </div>
      </td>
    </tr>
  </table>
</div>

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"/></div>

- **Step 3**: 使用USB Type-C电缆将SenseCAP Indicator连接到您的笔记本电脑。

- **Step 4**: 在SPI Download选项卡中点击 "..."，然后导航到您刚刚下载的固件文件。

* **Step 5**:配置SPI Flash：
<div class="table-center">
  <table align="center">
    <tr>
        <th>Option</th>
        <th>Param</th>
    </tr>
    <tr>
        <td>
        <div style={{textAlign: 'center'}}><strong>SPI SPEED</strong></div>
        </td>
        <td><div  style={{textAlign: 'center'}}>40MHz</div>
        </td>
    </tr>
    <tr>
      <td>
      <div  style={{textAlign: 'center'}}> <strong>SPI MODE</strong></div>
      </td>
      <td>
      <div  style={{textAlign: 'center'}}> DIO </div>
      </td>
    </tr>
  </table>
</div>

- **Step 6**: 配置下载面板：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>

- **COM**: 检查您的设备管理器上的端口，USB-SERIAL 是正确的端口。
(`这里我们选择COM4`)
- **波特率**: 921600(建议的值)

<!-- Previous: Click `Start` Downloading -->

然后点击 `START`开始烧录。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"/></div>

当显示 `FINISH` 时，固件烧录已完成。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"/></div>

#### 用于单独的二进制文件的 Flash Download 工具{#Address_Note}


在先前提到的指南中，二进制文件 "Default_Factory_Firmware_ESP32-S3.bin" 将三个二进制文件合并为一个。

然而，如果您使用 ESP-IDF 构建固件，直接烧录一个单独的文件可能会导致错误。相反，您需要找到**三个单独的二进制文件**，这些文件是您构建的，并按照以下方式指定正确的地址（您可以使用自己的地址）

- **bootloader.bin** ----> **0x0**
- **partion-table.bin** ----> **0x6800**
- **termial_demo.bin** ----> **0x10000**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"/></div>

## For **RP2040**

### 通过Arduino IDE烧录 {#RP_Arduino}
RP2040开发工具借助Arduino提升您的编码体验。

> 
Arduino IDE是用于编写Arduino板代码的免费软件。借助其用户友好的界面，您可以轻松编写和上传代码。基于C++的简化版本，它提供了丰富的库和示例，非常适合初学者。

**Download:**

- **Step 1**: 安装 [Arduino IDE](https://www.arduino.cc/en/software)

- **Step 2**: 添加Raspberry Pi Pico开发板

打开你的Arduino IDE, 并点击 **Arduino IDE** > **Reference**, 并将以下URL复制到 **Additional Boards Manager URLs**:

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

点击**Tools** > **Board** > **Board Manager**.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"/></div>

在板管理器中搜索 "indicator" 并安装 "Raspberry Pi Pico/RP2040"
<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"/></div>

- **Step 3**: 添加库

:::note **供参考的库**
* Sensirion Core: [Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core)
* PacketSerial : [Serial communication protoco](https://github.com/bakercp/PacketSerial)
* Sensirion I2C SGP40 : [SGP40 TVOC sensor library](https://github.com/Sensirion/arduino-i2c-sgp40)
* Sensirion I2C SCD4x : [SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)
* Sensirion Gas Index Algorithm : [Transfer index library](https://github.com/Sensirion/arduino-gas-index-algorithm)
*  Seeed_Arduino_AHT20 : [AHT20 temperature and humidity sensor library](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20)
:::

在Arduino IDE中，您可以在 `Library Manager` 中搜索它，例如 `Seeed_Arduino_AHT20`，然后安装它。

<details>
<summary>点击预览离线安装</summary>

要进行 离线 安装，您可以从 **GitHub下载库的存储库zip** f然后导航到  **Sketch** -> **Include Library** -> **Add .ZIP Library**,然后选择您下载的库。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

- **Step 4**: 使用提供的USB Type-C电缆将设备连接到您的PC。

- **Step 5**: 选择板和端口


搜索 "Indicator"，选择 `Seeed INDICATOR RP2040` 板，并选择 `usbmodem` 串口

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png" style={{width:680, height:'auto'}}/></div></td>
  </table>
</div>

- **Step 6**: 打开示例代码文件

**文件** -> **打开**, t然后选择示例代码文件 ([.ino 文件](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main/examples/terminal_rp2040)).

我们提供了一个示例代码文件，您可以根据需要修改代码。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **Step 7**: 验证并上传文件。
<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png"style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

在这里，我们已经完成了在RP2040上构建和烧录（下载）固件的过程。

### 烧录 .uf2 文件

- **Step 1**: 将设备连接到您的PC

使用针长按此内部按钮，然后通过提供的USB Type-C电缆将设备连接到您的PC，连接后释放按钮。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"/></div>

- **Step 2**: 固件烧录：

连接成功后，您的PC将显示一个磁盘。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"/></div>


将[.uf2](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2) 文件复制到磁盘中，然后磁盘将退出。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"/></div>

升级将自动运行。
## ESP32和RP2040使用串口通信


ESP32和RP2040使用串口通信，使用[cobs](http://www.stuartcheshire.org/papers/COBSforToN.pdf) 通信协议。演示中使用的命令列表如下：

命令格式包括数据包类型和数据包参数。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"/></div>

## Resource

[SenseCAP Indicator ESP32 SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)

[SenseCAP Indicator RP2040 Demo](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main)

## FAQ

<details>
    <summary>如何区分串口?</summary>
    <Tabs>
    groupId="operating-systems"
    defaultValue='Win'
    values={[
    {label: 'Windows', value: 'Win'},
    {label: 'MacOS', value: 'Unix'},
    ]}
    >
    <TabItem value="Win" >
      检查您的设备管理器上的端口：

"USB Serial Device(COMx)" 或 "USB 串行设备" 用于RP2040
"USB-SERIAL CH340" 用于ESP32
总的来说，CH340端口用于ESP32。
      <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"/></div>
    </TabItem>
    <TabItem value="Unix">
      - "/dev/cu.usbmodem" 是用于 RP2040
      <div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"/></div>
    </TabItem>
    </Tabs>
</details>


# **最近的更新：**

- 2023-11-17 
  -移除修补部分
- 2023-08-25
  - 使修补部分更清晰
- 2023-07-25
  - 添加使用Esptool烧录固件的内容
- 2023-05-29
  - 添加修补部分

# **技术支持**

**需要帮助解决SenseCAP Indicator的问题吗？我们在这里提供协助！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
