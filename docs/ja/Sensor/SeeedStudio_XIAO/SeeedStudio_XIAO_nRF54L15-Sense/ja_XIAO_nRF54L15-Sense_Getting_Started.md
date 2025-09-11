---
title: Seeed Studio XIAO nRF54L15(Sense)
description: |
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /ja/xiao_nrf54l15_sense_getting_started
keywords:
  - XIAO
  - nRF54L15
last_update:
  date: 7/2/2025
  author: Jason
sidebar_position: 0
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:600, height:'auto'}}/></div>

# Seeed Studio XIAO nRF54L15(Sense) 入門ガイド

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15</th>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991421-XIAO-nRF54L14.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## はじめに

**Seeed Studio XIAO nRF54L15**は、最先端のNordic nRF54L15チップを搭載したコンパクトで高性能な開発ボードです。この次世代SoCは、**128 MHz Arm® Cortex®-M33プロセッサ**と高度な電力管理用の**Arm® Cortex®-M0**+を含むMCUと、超低消費電力マルチプロトコル2.4 GHz無線を統合しています。**1.5 MB NVMと256 KB RAM**までのスケーラブルメモリを提供し、内蔵の超低消費電力設計によりバッテリー寿命を大幅に延長します。その強力な無線は**Bluetooth® 6.0（Channel Soundingを含む）、Matter、Thread、Zigbee**、および最大**4 Mbps**の高スループット2.4 GHz独自モードをサポートします。このボードには包括的なペリフェラルセット、統合された**128 MHz RISC-Vコプロセッサ**、および**TrustZone®**分離と暗号化エンジン保護などの高度なセキュリティ機能が含まれています。**内蔵Li-ionバッテリー管理**により、XIAO nRF54L15はスマートウェアラブル、産業用センサー、高度なHMIなどのコンパクトで安全かつエネルギー効率的なIoTソリューションに最適です。

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### 仕様

<table align="center">
  <tr>
      <th>項目</th>
      <th>XIAO nRF54L15</th>
      <th>XIAO nRF54L15 Sense</th>
  </tr>
  <tr>
      <th>MCU</th>
      <td align="center">Arm Cortex-M33 128 MHz<br/>RISC-Vコプロセッサ 128 MHz FLPR</td>
      <td align="center">Arm Cortex-M33 128 MHz<br/>RISC-Vコプロセッサ 128 MHz FLPR</td>
  </tr>
  <tr>
      <th>ワイヤレス接続</th>
      <td align="center">
        Bluetooth LE 6.0（Channel Soundingを含む）<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        独自2.4 GHzプロトコル<br/>
      </td>
      <td align="center">
        Bluetooth LE 6.0（Channel Soundingを含む）<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        独自2.4 GHzプロトコル<br/>
      </td>
  </tr>
  <tr>
      <th>メモリ</th>
      <td align="center">NVM 1.5 MB + RAM256 KB</td>
      <td align="center">NVM 1.5 MB + RAM256 KB</td>
  </tr>
  <tr>
      <th>内蔵センサー</th>
      <td align="center">N/A</td>
      <td align="center">6軸IMU(LSM6DS3TR-C)<br/>マイクロフォン (MSM261DGT006)</td>
  </tr>
  <tr>
      <th>送信電力</th>
      <td align="center">+8 dBm</td>
      <td align="center">+8 dBm</td>
  </tr>
  <tr>
      <th>受信感度</th>
      <td align="center">-96 dBm</td>
      <td align="center">-96 dBm</td>
  </tr>
  <tr>
      <th>主要ペリフェラル</th>
      <td align="center">14ビットADC、グローバルRTC</td>
      <td align="center">14ビットADC、グローバルRTC</td>
  </tr>
  <tr>
      <th>電源</th>
      <td align="center">
        USB Type-Cインターフェース電源供給<br/>
        内蔵PMICがリチウムバッテリー電源供給をサポート<br/>
        リチウムバッテリー電力収集をサポート
      </td>
      <td align="center">
        USB Type-Cインターフェース電源供給<br/>
        内蔵PMICがリチウムバッテリー電源供給をサポート<br/>
        リチウムバッテリー電力収集をサポート
      </td>
  </tr>
  <tr>
      <th>動作温度</th>
      <td align="center">-40 to 105°C</td>
      <td align="center">-40 to 105°C</td>
  </tr>
  <tr>
      <th>供給電圧範囲</th>
      <td align="center">3.7 to 5 V</td>
      <td align="center">3.7 to 5 V</td>
  </tr>
  <tr>
      <th>ESBと2.4 GHz独自プロトコル</th>
      <td align="center">最大4 Mbps</td>
      <td align="center">最大4 Mbps</td>
  </tr>
  <tr>
      <th>タンパー検出器</th>
      <td align="center">YES</td>
      <td align="center">YES</td>
  </tr>
  <tr>
      <th>Bluetooth channel sounding</th>
      <td align="center">YES</td>
      <td align="center">YES</td>
  </tr>
</table>

### 特徴

- **強力なCPU**: DSP命令とFPU浮動小数点演算をサポートする128 MHz Arm® Cortex®-M33プロセッサ、32ビットRISCアーキテクチャ、統合128 MHz RISC-Vコプロセッサ。
- **超低消費電力**: 優れた超低消費電力設計により、バッテリー寿命を大幅に延長し、高度な電源管理を含む。
- **マルチモードワイヤレス伝送**: 統合2.4 GHzマルチプロトコルワイヤレストランシーバーは、Bluetooth Low Energy（Channel Soundingを含む）、802.15.4-2020、Matter、Thread、Zigbee、および2.4 GHz独自モード（最大4 Mbps）をサポート。
- **堅牢なセキュリティ**: TrustZone®分離、タンパー検出、暗号化エンジン側でのチャネルリーク保護を含む高度なセキュリティ機能。
- **豊富なオンチップリソース**: 最大1.5 MB NVMと256 KB RAMまでのスケーラブルなメモリ構成により、十分なストレージ容量を提供。
- **豊富なインターフェース**: 新しいGlobal RTC（System OFFモードで利用可能）、14ビットADC、高速シリアルインターフェースを含む包括的なペリフェラルセット。内蔵リチウムバッテリー管理。

## ハードウェア概要

<Tabs>
<TabItem  value="54l15" label="XIAO nRF54L15" default>

<table align="center">
  <tr>
    <th>XIAO nRF54L15 ピンリスト</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/definition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 前面表示図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_Font.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 背面表示図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/newback8.png" style={{width:850, height:'auto'}}/></div></td>
  </tr>
</table>

</TabItem>
 <TabItem value="54L15Sense" label="XIAO nRF54L15 Sense" default>

 <table align="center">
  <tr>
    <th>XIAO nRF54L15 Sense ピンリスト</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sensedefinition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 Sense 表面表示図</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_Sense_Font.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 Sense 裏面表示図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/newback8.png" style={{width:850, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>

## nRFConnect SDKの使用方法

nRF Connect SDK（NCS）は、Nordic Semiconductorが提供する拡張可能で統合されたソフトウェア開発キットであり、NordicのnRF52、nRF53、nRF54、nRF70、nRF91シリーズに基づく低消費電力ワイヤレスアプリケーションを構築するために特別に設計されています。

NCSは、開発プロセスを簡素化し、市場投入までの時間を短縮するために設計された、既製のサンプルアプリケーション、プロトコルスタック、ライブラリ、ハードウェアドライバの豊富なエコシステムを提供します。そのモジュール化され、設定可能な性質により、メモリ制約のあるデバイス向けにサイズ最適化されたソフトウェアを構築する柔軟性と、より高度で複雑なアプリケーション向けの強力な機能を提供します。NCSはGitHubでホストされているオープンソースプロジェクトであり、Visual Studio Codeなどの統合開発環境に優れたサポートを提供します。

### VSCodeを使用したインストール

<details>

<summary>事前に知っておくべきnRF Connect SDKのインストール知識</summary>

このドキュメントでは、Windows 11コンピュータにnRF Connect SDK開発環境をインストールする方法を詳しく説明します。以下はインストールする必要があるツールの概要です。

- Visual Studio Code
- nRF Command Line Tools
- nRF Connect for Desktop
- Git

```cpp
git --version
```

- Python

```cpp
python --version
```

- Ninja

```cpp
ninja --version
```

- CMake

```cpp
cmake --version
```

- Zephyr SDK

```cpp
west --version
```

- nRF Connect SDK
- VSCode nRF Connect plugin

***コンピュータに事前にインストールしている場合は、以下のコマンドでツールのバージョン番号を確認できます***

</details>

<Steppers>

<!-- #### SEGGER J-Link v8.18のインストール
https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack からお使いのプラットフォーム用のインストーラーをダウンロードしてください。インストーラーを実行し、インストール過程で「Select Optional Components」ウィンドウが表示されたら、必ず「Install legacy USB driver for J-Link」にチェックを入れてください。これは一部のサポートされている開発キットに必要なコンポーネントです。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/jlink2.png" style={{width:600, height:'auto'}}/></div>
#### nrfutilとnrfutil deviceコマンドをインストールします。

- 2.1. https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download?lang=en#infotabs からお使いのオペレーティングシステムと互換性のあるバイナリファイルをダウンロードし、ディスクドライブに保存してください（例：Windows）。Windowsの場合は、C:\nordic_tools\nrfutil.exe として保存してください。
macOSまたはLinuxを使用している場合は、システムのPATHに追加されているディレクトリ（例：/usr/bin/）に保存し、ステップ2.2をスキップできます。

- 2.2. （Windows）nrfutilが保存されている場所を含むようにシステムのPATHを更新してください。「アカウント環境変数の編集」を開き、nrfutilバイナリが保存されているパス（C:\nordic_tools\）を追加してください。

- 2.3. ダウンロードしたnrfutilバイナリには、事前にインストールされたコマンドは含まれていません。このステップでは、コアnrfutilをアップグレードし、deviceコマンドをダウンロードします。

- 2.3.1 nrfutilの最新バージョンを確実に入手するために、ターミナル（コマンドプロンプトまたはPowerShell）で以下のコマンドを実行してください。ステップ2.2でnrfutilがグローバルに設定されているため、どのターミナルを使用しても問題ありません。
```cpp
nrfutil self-upgrade
```

- 2.3.2 nrfutil device コマンドのインストール
device コマンドを使用して開発キットにバイナリを書き込む必要があります。
現在アクティブなターミナルで、次のように入力します：nrfutil install device
次の出力が表示されるはずです：
```cpp
[00:00:02] ###### 100% [Install packages] Install packages
``` -->

#### VScode configures the board and builds the burn-in file

***1.install VS Studio Code***
[Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

2.Open VS Code and search for nRF Connect for VS Code Extension Pack in the Plugin Center. This plugin pack will automatically install other VS Code plugins required for nRF Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>

The nRF Connect for VS Code extension enables developers to utilize the popular Visual Studio Code Integrated Development Environment (VS Code IDE) to develop, build, debug and deploy embedded applications based on Nordic's nRF Connect SDK (Software Development Kit). The extension includes useful development tools such as a compiler interface, linker, complete build system, RTOS-enabled debugger, seamless interfacing with the nRF Connect SDK, device tree visualization editor, and an integrated serial terminal.
The nRF Connect extension package for VS Code includes the following components:

- nRF Connect for VS Code: The main extension contains the interface between the build system and the nRF Connect SDK, as well as an interface to manage the nRF Connect SDK version and toolchain.
- nRF DeviceTree: Provides device tree language support and a device tree visualization editor.
- nRF Kconfig: Provides Kconfig language support.
- nRF Terminal: Serial and RTT terminals.
- Microsoft C/C++: Adds language support for C/C++, including features of IntelliSense.
- CMake: CMake language support.
- GNU Linker Mapping Files: Support for linker mapping files.
We can download any preferred version of the nRF Connect SDK and its toolchain via the extension. The full nRF Connect for VS Code documentation is available at https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html.

#### Installing the toolchain

The toolchain is a collection of tools that work together to build nRF Connect SDK applications, including assembler, compiler, linker, and CMake components.
The first time you open nRF Connect for VS Code, you will be prompted to install the toolchain. This usually happens if the extension does not detect any installed toolchain on your computer.
Click Install Toolchain and a list of toolchain versions will be listed that can be downloaded and installed on your computer. Select the version of the toolchain that matches the version of the nRF Connect SDK you plan to use. We always recommend using the latest tagged version of the nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown1.png" style={{width:600, height:'auto'}}/></div>

By default, nRF Connect for VS Code only displays the Released tab (i.e., the stable version) of the toolchain. If you are evaluating a new feature and would like to use the Preview tab or another type of tab (e.g. Customer Sampling -cs), click on "Show all toolchain versions" as shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown2.png" style={{width:600, height:'auto'}}/></div>

:::note
**The ToolChain here is 3.0.1 or above**
:::

#### Installing the nRF Connect SDK

In the nRF Connect extension for VS Code, click on Manage SDK. from the Manage SDK menu, we can install or uninstall the nRF Connect SDK version. Since this is the first time we are using the extension, the interface will only show two options.

Clicking Install SDK will list all available nRF Connect SDK versions that can be downloaded and installed locally. Select the version of the nRF Connect SDK that is required for the development of your project.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown3.png" style={{width:600, height:'auto'}}/></div>

If you have opened the SDK folder in VS Code, instead of the Manage SDK menu option, you will see the Manage west workspace. To resolve this issue, open another window or folder in VS Code.

:::note
**The nRF Connect SDK here is 3.0.1 or above**
:::

:::tip
If you do not see either of these options, make sure you have the latest version of the nRF Connect for VS Code extension package installed.
It is important to note that the nRF Connect SDK is IDE independent, which means you can choose to use any IDE or none at all. The nRF Connect SDK is available via the https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil) command line The  (nrfutil) command line interface (CLI) will download and install nRF Connect. However, we highly recommend using our nRF Connect for VS Code extension with VS Code, as it integrates not only a convenient graphical user interface (GUI) and an efficient command line interface (CLI), but also includes a number of features that will greatly simplify firmware development. Configuring other IDEs to work with the nRF Connect SDK requires additional manual steps beyond the scope of this course.
:::

#### Creating User Programs

In this exercise we will write a simple application based on the blinky example to control blinking LEDs on a development board. The same applies to all supported NordicSemiconductor development boards (nRF54, nRF53, nRF52, nRF70 or nRF91 series). The goal is to make sure that all the tools needed to build and burn the example are set up correctly. The focus is on learning how to create an application, build it and burn it to a Nordic chip development board using the “Copy Example” template!

- In VS Code, click the nRF Connect extension icon. In the Welcome view, click Create New Application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blinky.png" style={{width:600, height:'auto'}}/></div>

- Type blinky in the search bar and select the second Blinky sample (path zephyr/samples/basic/blinky), as shown below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blinky2.png" style={{width:600, height:'auto'}}/></div>

The Blinky example will cause the LED1 on the development board to blink continuously.
Our first application will be based on the Blinky example. The Blinky example is derived from the Zephyr mold block in the nRF Connect SDK, so you will see the zephyr name in the sample path: zephyr\samples\basic\blinky.

#### Add XIAO nRF54L15 Board

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

To get started, **clone the repository from the GitHub link**`git clone https://github.com/Seeed-Studio/platform-seeedboards.git` into your preferred local folder. Once cloned, navigate to the `platform-seeedboards/zephyr/` directory. **Remember this `zephyr` folder Path**;

To configure your board for nRF Connect in VS Code, you can follow these steps:

- Open VS Code and go to Settings.

- Type nRF Connect in the search box.

- Find the Board Roots settings item and click Edit in settings.json.

- Add the `zephyr` path of the downloaded XIAO nRF54L15 board file to the boardRoots array.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config1.jpg" style={{width:600, height:'auto'}}/></div> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config_new.jpg" style={{width:600, height:'auto'}}/></div>

- In the application view, click Add Build Configuration below the application name .

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config3.png" style={{width:600, height:'auto'}}/></div>

- We can select the model of XIAO nRF54L15 in the Board target, and select the default prj.config file in the Base configuration files, and finally click `Generate and Build` to build the file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config2.jpg" style={{width:600, height:'auto'}}/></div>

#### Download Burn-in Plug-in

<Tabs>
<TabItem  value="window" label="Window" default>

**Additional Plugins:**

On Windows, we'll use the Chocolatey package manager to install OpenOCD.

**1.Open PowerShell (Run as Administrator):**

- In the Windows search bar, type "PowerShell".
- Right-click "Windows PowerShell" and select "Run as administrator".

**2.Check PowerShell Execution Policy:**

- Type `Get-ExecutionPolicy` and press Enter.
- Type `Get-ExecutionPolicy -List` and press Enter.

**3.Install Chocolatey:**

- Paste and run the following command:

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

このコマンドは現在のPowerShellセッションの実行ポリシーをバイパスし、Chocolateyをインストールします。インストール後、PowerShellウィンドウを閉じて再度開いてください（引き続き管理者として実行）。

**4.OpenOCDをインストール:**

- 新しいPowerShellウィンドウ（管理者として）で、以下を入力してください:

```cpp
choco install openocd
```

**5.OpenOCDのインストールを確認:**

- `Get-Command openocd` と入力してEnterを押します。

- インストールが成功した場合、このコマンドはopenocd.exeへのパスを表示します。

</TabItem>

<TabItem value="mac" label="Mac OS" default>

**追加プラグイン:**

macOSでは、Homebrewパッケージマネージャーを使用して必要なツールをインストールします。

**1.Homebrewをインストール（まだインストールされていない場合）:**

- Terminal.appを開きます。

- 以下のコマンドを実行します:

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 画面上のプロンプトに従ってください。macOSのユーザーパスワードの入力が必要な場合があります。インストール後、ターミナルで表示されるコマンドを実行してHomebrewをPATH環境変数に追加してください `(例: eval "$(/opt/homebrew/bin/brew shellenv)")`。その後、ターミナルを閉じて再度開いてください。

**2.Ccacheのインストール:**

ターミナルで以下を入力してください:

```cpp
brew install ccache
```

**3.OpenOCDをインストール:**

ターミナルで以下を入力してください:

```cpp
brew install openocd
```

**4.OpenOCDインストールの確認:**

- `which openocd` と入力してEnterを押します。

- インストールが成功した場合、このコマンドは `openocd` 実行ファイルのパスを表示します。

</TabItem>

</Tabs>

#### West Flash書き込みプログラム

- nRFターミナルを開きます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn12.png" style={{width:600, height:'auto'}}/></div>

- `west flash` コマンドを入力するだけです。デバイスをフラッシュするには、単純にwest flashコマンドを入力します。赤でハイライトされたパスは、コンパイルされた.elfファイルの場所を示しています。この同じパスを使用して対応する.hexファイルを見つけることができ、これはJ-Linkデバッガーでのプログラミングに適しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn13.png" style={{width:600, height:'auto'}}/></div>

:::tip
west flashエラーが発生した場合、VS CodeのCMakeプラグインとの競合があることを意味し、CMakeプラグインを削除する必要があります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:600, height:'auto'}}/></div>
:::

#### LEDを点灯させる

Seeed Studio XIAO nRF54L15 Senseにプログラムを正常に書き込むと、ボード上のユーザーインジケーターが緑色の光で絶え間なく点滅しているのを見ることができます。あなたの手元でも同じ効果が得られている場合、それは成功したことを意味します！🎊

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

#### nRF Connect SDK内部の詳細理解

nRF Connect SDKを真にマスターするには、その構成要素を内側から理解する必要があります。これらのコースに飛び込んで知識を向上させましょう：

- [**nRF Connect SDK Fundamentals**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)

- [**nRF Connect SDK Intermediate**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-intermediate/)

- [**nRF Connect Vscode**](https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html)

</Steppers>

## バッテリー駆動ボード

XIAO nRF54L15には内蔵の電源管理チップがあり、XIAO nRF54L15をバッテリーで独立して電源供給したり、XIAO nRF54L15のUSBポートを通じてバッテリーを充電したりできます。

XIAOにバッテリーを接続したい場合は、認定された充電式3.7Vリチウムバッテリーの購入をお勧めします。バッテリーをはんだ付けする際は、正極と負極を区別するよう注意してください。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_connect.jpg" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:500, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>バッテリー接続回路図</em></p>
</div>

**バッテリー使用に関する注意事項：**

1. 仕様に適合した認定バッテリーを使用してください。
2. XIAOはバッテリー使用中でもデータケーブルでコンピューターデバイスに接続できます。XIAOには内蔵回路保護チップがあるため安全です。
3. XIAO nRF54L15はバッテリー駆動時にはLEDが点灯しません（特定のプログラムを書いていない限り）。LEDの状態でXIAO nRF54L15が動作しているかどうかを判断しないでください。プログラムによって合理的に判断してください。

同時に、バッテリー充電用の赤色インジケーターライトを設計し、インジケーターライトの表示を通じてバッテリーの現在の充電状態をユーザーに知らせます。

<!-- 1. XIAO nRF54L15がバッテリーに接続されていない場合、Type-Cケーブルが接続されると赤いライトが点灯し、30秒後に消灯します。
2. バッテリーが接続され、Type-Cケーブルが充電のために接続されると、赤いライトが点滅します。
3. Type-Cを接続してバッテリーが完全に充電されると、赤いライトが消灯します。 -->

:::caution
はんだ付け時に正極と負極をショートさせてバッテリーと機器を焼損させないよう注意してください。
:::

### バッテリー電圧検出

XIAO nRF54L15は、TPS22916CYFPRロードスイッチを使用してバッテリー電力測定を効率的に管理することを中心としたバッテリー電圧検出機能を統合しています。このガイドでは、バッテリー検出のソフトウェア実装の分析（**特にmain.cコード**）に焦点を当て、Zephyr NCS SDKの複雑さを避けて、PlatformIO環境でこの機能を簡単にデプロイして使用する方法を案内します。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_A.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>バッテリー検出回路図</em></p>
</div>

TPS22916CYFPRチップの機能：

- これは、必要に応じてバッテリー電圧のオン・オフを制御するインテリジェント電源スイッチです。バッテリー電圧を測定する必要がある場合はオンになり、バッテリーを分圧回路に接続します。測定する必要がない場合はオフになり、接続を切断します。

- この機能は何に役立つのでしょうか？
このオンデマンドスイッチング機構により、チップは不要な電流消費を大幅に削減し、バッテリー寿命を効果的に延長します。後続の分圧回路とnRF54L15のADC（アナログ-デジタルコンバーター）と組み合わせることで、XIAO nRF54L15はバッテリーの残量を正確に監視でき、IoTデバイスなどのバッテリー駆動、低電力アプリケーションに重要な範囲最適化を提供します。

:::note
以下のサンプルコードはPlatformIO用に設計されていますが、nRF Connect SDKとも互換性があります。

PlatformIOでXIAO nRF54L15を使用する
PlatformIOでXIAO nRF54L15を使用したい場合は、このチュートリアルを参照して設定してください：[XIAO nRF54L15 PlatformIO 設定](https://wiki.seeedstudio.com/xiao_nrf54l15_with_platform_io/)。

nRF Connect SDKでXIAO nRF54L15を使用する
nRF Connect SDKでこのコードを使用するには、以下の3つのファイル `main.c`、`prj.conf`、`app.overlay` をポートする必要があります
[XIAO nRF54L15 PlatformIO 設定](http://localhost:3000/xiao_nrf54l15_sense_getting_started/#power-consumpitons-code-example-for-xiao-nrf54l15-platformio)
:::
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### コアコード

```cpp
#include <inttypes.h>
#include <stddef.h>
#include <stdint.h>
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/kernel.h>


#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
 !DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "No suitable devicetree overlay specified"
#endif

#define DT_SPEC_AND_COMMA(node_id, prop, idx) \
 ADC_DT_SPEC_GET_BY_IDX(node_id, idx),

/* Data of ADC io-channels specified in devicetree. */
static const struct adc_dt_spec adc_channels[] = {
 DT_FOREACH_PROP_ELEM(DT_PATH(zephyr_user), io_channels,
       DT_SPEC_AND_COMMA)};

static const struct device *const vbat_reg = DEVICE_DT_GET(DT_NODELABEL(vbat_pwr));

int main(void)
{
 int err;
 uint16_t buf;
 int32_t val_mv;
 struct adc_sequence sequence = {
  .buffer = &buf,
  /* buffer size in bytes, not number of samples */
  .buffer_size = sizeof(buf),
 };

 regulator_enable(vbat_reg);
 k_sleep(K_MSEC(100));

 /* Configure channels individually prior to sampling. */
 if (!adc_is_ready_dt(&adc_channels[7]))
 {
  printf("ADC controller device %s not ready\n", adc_channels[7].dev->name);
  return 0;
 }

 err = adc_channel_setup_dt(&adc_channels[7]);
 if (err < 0)
 {
  printf("Could not setup channel #7 (%d)\n", err);
  return 0;
 }

 (void)adc_sequence_init_dt(&adc_channels[7], &sequence);

 err = adc_read_dt(&adc_channels[7], &sequence);
 if (err < 0)
 {
  printf("Could not read (%d)\n", err);
  return 0;
 }

 /*
  * If using differential mode, the 16 bit value
  * in the ADC sample buffer should be a signed 2's
  * complement value.
  */
 if (adc_channels[7].channel_cfg.differential)
 {
  val_mv = (int32_t)((int16_t)buf);
 }
 else
 {
  val_mv = (int32_t)buf;
 }
 err = adc_raw_to_millivolts_dt(&adc_channels[7],
           &val_mv);
 /* conversion to mV may not be supported, skip if not */
 if (err < 0)
 {
  printf(" value in mV not available\n");
 }
 else
 {
  printf("bat vol = %" PRId32 " mV\n", val_mv * 2);
 }

 regulator_disable(vbat_reg);
 return 0;
}
```

## J-Linkピンにアクセスしてプログラムを書き込む

**必要なハードウェア**

- [Seeed Studio XIAO nRF54L15](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Jlink](https://www.segger.com/downloads/jlink/)

:::tip
nRF54L15モデルボードのサポートを受けるには、J-Linkの最新バージョンをダウンロードする必要があります。
:::

**必要なソフトウェア**

ウェブサイトから[Segger](https://www.segger.com/downloads/jlink/)ソフトウェアをダウンロードする必要があります。

- **ステップ 1.** Jlinkを使用して以下のピンを接続します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link.png" alt="pir" width={250} height="auto" /></p>

- **ステップ 2.** J-Flashを起動し、nRF54L15_M33を検索して新しいプロジェクトを作成します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link4.jpg" alt="pir" width={700} height="auto" /></p>

- **ステップ 3.** 「Target」をクリックし、「Connect」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link3.jpg" alt="pir" width={700} height="auto" /></p>

- **ステップ 4.** binまたは[hexファイル](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/zephyr.hex)をソフトウェアにドラッグします。その後、F4とF5をその順序で押します。再フラッシュが完了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link2.jpg" alt="pir" width={700} height="auto" /></p>

## オンボードキー

XIAO nRF54L15(Sense)には、デバイスの動作とファームウェアプログラミングにおいて重要な役割を果たす2つの重要な物理ボタンが搭載されています：**リセットボタン**と**ユーザーボタン**です。これらの機能を理解することは、日常使用とファームウェア更新において不可欠です。

---

### リセットボタン

リセットボタンは、デバイスでハードリセット操作を実行するために使用されます。

- **機能：**
  - **強制再起動：** このボタンを押すと、現在のデバイス操作がすべて即座に中断され、電源サイクルと同様に再起動します。
  - **スタックしたプログラムの解決：** デバイスで実行中のプログラムがクラッシュ、無限ループに入る、または応答しなくなった場合、リセットボタンを押すことが正常な動作状態に強制的に戻す最も迅速な方法です。
  - **ファームウェアへの影響なし：** リセット操作は、デバイスにすでにプログラムされているファームウェアを消去または変更しません。現在実行中のアプリケーションを単純に再起動するだけです。
- **使用例：**
  - 開発/デバッグ中にプログラムを迅速に再実行する。
  - デバイスが予期しない動作を示したり、スタックしたりした場合。

---

### ユーザーボタン

ユーザーボタンは、アプリケーション内で柔軟な制御を提供する多用途でプログラム可能な入力です。

**機能：**

- カスタマイズ可能な入力：リセットボタンの固定機能とは異なり、ユーザーボタンのアクションは、プログラムされたファームウェアによって完全に定義されます。

- イベントトリガー：特定のイベントをトリガーしたり、異なる機能を制御したり、アプリケーションの汎用入力として機能するようにプログラムできます。

**使用例：**

- カスタムアプリケーション内の特定の機能やモードを有効化する。

:::note
以下のサンプルコードはPlatformIO用に設計されていますが、nRF Connect SDKとも互換性があります。

PlatformIOでXIAO nRF54L15を使用する
PlatformIOでXIAO nRF54L15を使用したい場合は、設定についてこのチュートリアルを参照してください：[XIAO nRF54L15 PlatformIO設定](https://wiki.seeedstudio.com/xiao_nrf54l15_with_platform_io/)。

nRF Connect SDKでXIAO nRF54L15を使用する
nRF Connect SDKでこのコードを使用するには、以下の3つのファイル`main.c`、`prj.conf`、`app.overlay`を移植する必要があります
[XIAO nRF54L15 PlatformIO設定](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/#power-consumpitons-code-example-for-xiao-nrf54l15-platformio)
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-button" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

キーを押すたびにライトが一度点灯します
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/button.gif" style={{width:400, height:'auto'}}/></div>

## XIAO nRF54L15の電力消費コード例（PlatformIO）

以下のサンプルコードはPlatformIO用に設計されていますが、nRF Connect SDKとも互換性があります。

PlatformIOでXIAO nRF54L15を使用する
PlatformIOでXIAO nRF54L15を使用したい場合は、このチュートリアルを参照して設定してください：[XIAO nRF54L15 PlatformIO設定](https://wiki.seeedstudio.com/xiao_nrf54l15_with_platform_io/)。

nRF Connect SDKでXIAO nRF54L15を使用する
nRF Connect SDKでこのコードを使用するには、以下の3つのファイル`main.c`、`prj.conf`、`app.overlay`を移植する必要があります。

**main.cの移植**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/d1.jpg" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/f1.jpg" style={{width:600, height:'auto'}}/></div>

**prj.conf/app.overlayの移植、プロジェクト設定を行う際に以下のファイルが表示される場合があります：**

- prj.conf：このファイルは、特定の周辺機器や機能を有効にするなど、プロジェクトのKconfig設定オプションを設定するために使用されます。

- app.overlay：このファイルは、ピン機能の変更やハードウェア設定の調整など、Device Tree設定を変更するために使用されます。

以下のコード例にこれらの個別ファイルが含まれている場合は、それらの内容をnRF Connect SDKプロジェクトにマージする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/h1.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/g1.jpg" style={{width:600, height:'auto'}}/></div>

**配置位置**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/replace.jpg" style={{width:600, height:'auto'}}/></div>

- `app.overlayファイル：` boardフォルダに配置してください。

- `prj.confファイル：` プロジェクトのルートフォルダに配置してください。

- `main.cファイル：` srcフォルダに配置してください。

### Bluetooth接続

このセクションでは、デバイスがBluetooth Low Energy（BLE）ペリフェラルとしてアクティブにアドバタイジングしている間の電力消費特性について詳しく説明します。デバイスはカスタムBLEサービスを実装し、他のセントラルデバイスが接続して相互作用できるようにします。

以下のグラフは、デバイスが継続的にアドバタイジングしている際の典型的な電力消費プロファイルを示しています：

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/7.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>BLEアドバタイジング中のデバイス電力消費</em></p>
</div>

グラフに示されているように、デバイスは各アドバタイジングイベントに対応する周期的な電流ピークを示し、その後により低い電流消費の期間が続きます。アドバタイジング中の平均電力消費は、ブロードキャストに必要なアクティブな無線動作を反映して、System Offモードよりも高くなります。

---

#### BLEアドバタイジングコード例

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-ble" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下は、BLEアドバタイジング中の電力消費をテストするために使用されるコードです：

```c
#include <stdio.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/uuid.h>
#include <zephyr/bluetooth/gatt.h>

// Custom 128-bit UUID for the ONOFF Service
#define BT_UUID_ONOFF_VAL BT_UUID_128_ENCODE(0x8e7f1a23, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF     BT_UUID_DECLARE_128(BT_UUID_ONOFF_VAL)

// Custom 128-bit UUID for the ONOFF Action Characteristic (Write)
#define BT_UUID_ONOFF_ACTION_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a24, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF_ACTION BT_UUID_DECLARE_128(BT_UUID_ONOFF_ACTION_VAL)

// Custom 128-bit UUID for the ONOFF Read Characteristic (Read)
#define BT_UUID_ONOFF_READ_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a25, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120003)
#define BT_UUID_ONOFF_READ BT_UUID_DECLARE_128(BT_UUID_ONOFF_READ_VAL)

// Static flag to hold the on/off state, initialized to 0 (off)
static uint8_t onoff_flag = 0;

// Advertising data: flags and complete device name
static const struct bt_data ad[] = {
 BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)), // General Discoverable, No BR/EDR
 BT_DATA(BT_DATA_NAME_COMPLETE, CONFIG_BT_DEVICE_NAME, sizeof(CONFIG_BT_DEVICE_NAME) - 1), // Device Name
};

// Scan response data: include the 128-bit UUID of our custom service
static const struct bt_data sd[] = {
 BT_DATA_BYTES(BT_DATA_UUID128_ALL, BT_UUID_ONOFF_VAL), // Service UUID
};

/**
 * @brief GATT read callback for the ONOFF Read characteristic.
 *
 * This function is called when a connected central device attempts to read
 * the ONOFF Read characteristic. It returns the current value of onoff_flag.
 *
 * @param conn Pointer to the connection object.
 * @param attr Pointer to the GATT attribute being read.
 * @param buf Buffer to store the read value.
 * @param len Maximum length of the buffer.
 * @param offset Offset from which to read the attribute value.
 * @return Number of bytes read, or a negative error code.
 */
static ssize_t read_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
                  void *buf, uint16_t len, uint16_t offset)
{
    // The user_data field of the attribute points to onoff_flag
    const uint8_t *value = attr->user_data;
    // Perform the GATT attribute read operation
    return bt_gatt_attr_read(conn, attr, buf, len, offset, value, sizeof(*value));
}

/**
 * @brief GATT write callback for the ONOFF Action characteristic.
 *
 * This function is called when a connected central device attempts to write
 * to the ONOFF Action characteristic. It updates the onoff_flag based on
 * the received value.
 *
 * @param conn Pointer to the connection object.
 * @param attr Pointer to the GATT attribute being written.
 * @param buf Buffer containing the value to be written.
 * @param len Length of the value in the buffer.
 * @param offset Offset at which to write the attribute value.
 * @param flags Flags for the write operation.
 * @return Number of bytes written, or a negative error code.
 */
static ssize_t write_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
          const void *buf, uint16_t len, uint16_t offset, uint8_t flags)
{
 uint8_t val;

 // Ensure the length of the written data is 1 byte
 if (len != 1U) {
  return BT_GATT_ERR(BT_ATT_ERR_INVALID_ATTRIBUTE_LEN);
 }

 // Ensure the write operation starts from offset 0
 if (offset != 0) {
  return BT_GATT_ERR(BT_ATT_ERR_INVALID_OFFSET);
 }

 // Get the value from the buffer
 val = *((uint8_t *)buf);

 // Update onoff_flag based on the received value
 if (val == 0x00U) {
  printf("Write: 0\n");
  onoff_flag = 0; // Set to off
 } else if (val == 0x01U) {
  printf("Write: 1\n");
  onoff_flag = 1; // Set to on
 } else {
  // Return error if value is not 0 or 1
  return BT_GATT_ERR(BT_ATT_ERR_VALUE_NOT_ALLOWED);
 }

 return len; // Return number of bytes successfully written
}

// Define the custom GATT service and its characteristics
BT_GATT_SERVICE_DEFINE(lbs_svc, 
    BT_GATT_PRIMARY_SERVICE(BT_UUID_ONOFF), // Primary Service: ONOFF Service
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_ACTION, BT_GATT_CHRC_WRITE, // Characteristic: ONOFF Action (Write)
        BT_GATT_PERM_WRITE, NULL, write_onoff_val, NULL), // Permissions, callbacks
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_READ, BT_GATT_CHRC_READ, // Characteristic: ONOFF Read (Read)
        BT_GATT_PERM_READ, read_onoff_val, NULL, &onoff_flag), // Permissions, callbacks, user_data (onoff_flag)
);

/**
 * @brief Callback function for successful Bluetooth connection.
 *
 * @param conn Pointer to the connection object.
 * @param err Error code (0 if successful).
 */
static void connected(struct bt_conn *conn, uint8_t err)
{
 if (err != 0U) {
  printf("Connection failed (%02x, %s)\n", err, bt_hci_err_to_str(err));
  return;
 }

 printf("Connected\n");
}

/**
 * @brief Callback function for Bluetooth disconnection.
 *
 * @param conn Pointer to the connection object.
 * @param reason Reason for disconnection.
 */
static void disconnected(struct bt_conn *conn, uint8_t reason)
{
 printf("Disconnected (%02x, %s)\n", reason, bt_hci_err_to_str(reason));
}

// Define connection callbacks
BT_CONN_CB_DEFINE(conn_callbacks) = {
 .connected = connected,
 .disconnected = disconnected,
};

/**
 * @brief Main function of the application.
 *
 * Initializes the Bluetooth stack, starts advertising, and enters the main loop.
 * @return 0 on success, negative error code on failure.
 */
int main(void)
{
 int err;

 // Enable the Bluetooth stack
 err = bt_enable(NULL);
 if (err < 0) {
  printf("Bluetooth enable failed (err %d)", err);
  return err;
 }

 // Start BLE advertising
 err = bt_le_adv_start(BT_LE_ADV_CONN_FAST_1, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
 if (err < 0) {
  printf("Advertising failed to start (err %d)", err);
  return err;
 }

 printf("Bluetooth enabled");
 return 0;
}
```

### 超低消費電力状態

デバイスの極めて低い消費電力を実現するため、**System Off**モードでの消費電力テストを実施しました。System OffモードはZephyr OSが提供する深いスリープモードで、ほとんどの周辺機器とCPUがオフになり、必要最小限のウェイクアップソース（GPIO割り込みなど）のみを保持して消費電力を最小化します。

以下のグラフは、デバイスがSystem Offモードに入った後の典型的な消費電力カーブを示しています：

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/6.png" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>System Offモードでのデバイス消費電力</em></p>
</div>

グラフに示されているように、System Offモードに入った後、消費電力は大幅に削減され、マイクロアンペアレベルのみを維持し、バッテリー寿命を大幅に延長します。`sw0`ボタンが押されると、デバイスはSystem Offモードから復帰し、再起動します。

---

#### 消費電力コード例

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-lowpower" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下は、上記で説明したSystem Offモードでの消費電力をテストするために使用されたコードです：

```c
/*
 * Copyright (c) 2019 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */
#include <inttypes.h>
#include <stdio.h>

#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/hwinfo.h>
#include <zephyr/drivers/comparator.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/device.h>
#include <zephyr/sys/poweroff.h>
#include <zephyr/sys/util.h>

static const struct gpio_dt_spec sw0 = GPIO_DT_SPEC_GET(DT_ALIAS(sw0), gpios);

void print_reset_cause(void)
{
 uint32_t reset_cause;

 hwinfo_get_reset_cause(&reset_cause);
 if (reset_cause & RESET_DEBUG) {
  printf("Reset by debugger.\n");
 } else if (reset_cause & RESET_CLOCK) {
  printf("Wakeup from System OFF by GRTC.\n");
 } else  {
  printf("Other wake up cause 0x%08X.\n", reset_cause);
 }
}

int main(void)
{
 int rc;
 const struct device *const cons = DEVICE_DT_GET(DT_CHOSEN(zephyr_console));

 if (!device_is_ready(cons)) {
  printf("%s: device not ready.\n", cons->name);
  return 0;
 }

 printf("\n%s system off demo\n", CONFIG_BOARD);
 print_reset_cause();


 /* configure sw0 as input, interrupt as level active to allow wake-up */
 rc = gpio_pin_configure_dt(&sw0, GPIO_INPUT);
 if (rc < 0) {
  printf("Could not configure sw0 GPIO (%d)\n", rc);
  return 0;
 }

 rc = gpio_pin_interrupt_configure_dt(&sw0, GPIO_INT_LEVEL_LOW);
 if (rc < 0) {
  printf("Could not configure sw0 GPIO interrupt (%d)\n", rc);
  return 0;
 }

 printf("Entering system off; press sw0 to restart\n");


 rc = pm_device_action_run(cons, PM_DEVICE_ACTION_SUSPEND);
 if (rc < 0) {
  printf("Could not suspend console (%d)\n", rc);
  return 0;
 }

 hwinfo_clear_reset_cause();
 sys_poweroff();

 return 0;
}
```

## リソース

### Seeed Studio XIAO nRF54L15

- **[PDF]** [Seeed Studio XIAO nRF54L15 回路図](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 KiCAD ライブラリ](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 DXF寸法図](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)

### Seeed Studio XIAO nRF54L15 Sense

- **[PDF]** [Seeed Studio XIAO nRF54L15 Sense 回路図](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 Sense KiCAD ライブラリ](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 Sense DXF寸法図](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 Sense ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
