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

# Seeed Studio XIAO nRF54L15(Sense)の始め方

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## はじめに

**Seeed Studio XIAO nRF54L15**は、最先端のNordic nRF54L15チップを搭載したコンパクトで高性能な開発ボードです。この次世代SoCは、**128 MHz Arm® Cortex®-M33プロセッサ**と高度な電力管理用の**Arm® Cortex®-M0**+を含むMCUと、超低消費電力マルチプロトコル2.4 GHz無線を統合しています。**1.5 MB NVMと256 KB RAM**までのスケーラブルメモリを提供し、内蔵の超低消費電力設計によりバッテリー寿命を大幅に延長します。その強力な無線は**Bluetooth® 6.0（Channel Soundingを含む）、Matter、Thread、Zigbee**、および**4 Mbps**までの高スループット2.4 GHz独自モードをサポートします。このボードには包括的なペリフェラルセット、統合された**128 MHz RISC-Vコプロセッサ**、および**TrustZone®**分離と暗号化エンジン保護などの高度なセキュリティ機能が含まれています。**内蔵Li-ionバッテリー管理**により、XIAO nRF54L15はスマートウェアラブル、産業用センサー、高度なHMIなどのコンパクトで安全かつエネルギー効率的なIoTソリューションに最適です。

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
      <th>Bluetoothチャネルサウンディング</th>
      <td align="center">YES</td>
      <td align="center">YES</td>
  </tr>
</table>

### 特徴

- **強力なCPU**: DSP命令とFPU浮動小数点演算をサポートする128 MHz Arm® Cortex®-M33プロセッサ、32ビットRISCアーキテクチャ、統合128 MHz RISC-Vコプロセッサ。
- **超低消費電力**: 優れた超低消費電力設計により、バッテリー寿命を大幅に延長し、高度な電力管理を含みます。
- **マルチモードワイヤレス伝送**: 統合2.4 GHzマルチプロトコルワイヤレストランシーバーは、Bluetooth Low Energy（Channel Soundingを含む）、802.15.4-2020、Matter、Thread、Zigbee、および2.4 GHz独自モード（最大4 Mbps）をサポートします。
- **堅牢なセキュリティ**: TrustZone®分離、タンパー検出、暗号化エンジン側のチャネルリーク保護を含む高度なセキュリティ機能。
- **豊富なオンチップリソース**: 最大1.5 MB NVMと256 KB RAMまでのスケーラブルメモリ構成により、十分なストレージスペースを提供します。
- **豊富なインターフェース**: 新しいグローバルRTC（System OFFモードで利用可能）、14ビットADC、高速シリアルインターフェースを含む包括的なペリフェラルセット。内蔵リチウムバッテリー管理。

## ハードウェア概要

<Tabs>
<TabItem  value="54l15" label="XIAO nRF54L15" default>

<table align="center">
  <tr>
    <th>XIAO nRF54L15 前面図解</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nRF54L15_front.png" style={{width:680, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 背面図解</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sense_newback.png" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
    <th>XIAO nRF54L15 ピンリスト</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nr_definition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
</table>

 </TabItem>
 <TabItem value="54L15Sense" label="XIAO nRF54L15 Sense" default>

 <table align="center">
  <tr>
    <th>XIAO nRF54L15 Sense 前面図解</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nRF54L15_Sense_Font.png" style={{width:680, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 Sense 背面図解</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/sense_newback.png" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
    <th>XIAO nRF54L15 Sense ピンリスト</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_sensedefinition.png" style={{width:800, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>

## nRFConnect SDK使用方法

nRF Connect SDK（NCS）は、Nordic nRF52、nRF53、nRF54、nRF70、およびnRF91シリーズベースのワイヤレスデバイス向けの低消費電力ワイヤレスアプリケーション構築専用に設計された、Nordic Semiconductorの拡張可能で統一されたソフトウェア開発キットです。

NCSは、開発プロセスを簡素化し、市場投入時間を短縮するように設計された、すぐに使えるサンプルアプリケーション、プロトコルスタック、ライブラリ、ハードウェアドライバーの豊富なエコシステムを提供します。そのモジュラーで設定可能な性質により、開発者はメモリ制約のあるデバイス向けにサイズ最適化されたソフトウェアを構築する柔軟性と、より高度で複雑なアプリケーション向けの強力な機能を得ることができます。NCSはGitHubでホストされているオープンソースプロジェクトで、Visual Studio Codeなどの統合開発環境に対する優れたサポートを提供します。

### VSCodeでnRF Connect SDKを使用する

<details>

<summary>nRF Connect SDK知識を事前にインストール</summary>

このドキュメントでは、Windows 11コンピューターにnRF Connect SDK開発環境をインストールする方法を詳しく説明します。以下は、インストールが必要なツールの概要です

- VS Studio Codeをインストール

  [Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

- nRF Command Line Tools
- nRF Connect for Desktop
- Git

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
- VSCode nRF Connectプラグイン
***コンピュータに事前にインストールされている場合は、以下のコマンドでツールのバージョン番号を確認できます***

</details>

<Steppers>

<!-- #### SEGGER J-Link v8.18のインストール
https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentPack からお使いのプラットフォーム用のインストーラーをダウンロードしてください。インストーラーを実行し、インストール過程で「Select Optional Components」ウィンドウが表示されたら、「Install legacy USB driver for J-Link」にチェックを入れてください。これは一部のサポートされている開発キットに必要なコンポーネントです。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/jlink2.png" style={{width:600, height:'auto'}}/></div>
#### nrfutilとnrfutil deviceコマンドのインストール

- 2.1. https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download?lang=en#infotabs からお使いのオペレーティングシステムと互換性のあるバイナリファイルをダウンロードし、ディスクドライブに保存してください（例：Windows）。Windowsの場合は、C:\nordic_tools\nrfutil.exe として保存してください。
macOSまたはLinuxを使用している場合は、システムのPATHに追加されているディレクトリ（例：/usr/bin/）に保存し、ステップ2.2をスキップできます。

- 2.2. （Windows）nrfutilが保存されている場所を含むようにシステムのPATHを更新してください。「アカウント環境変数の編集」を開き、nrfutilバイナリが保存されているパス（C:\nordic_tools\）を追加してください。

- 2.3. ダウンロードしたnrfutilバイナリには、事前にインストールされたコマンドは含まれていません。このステップでは、コアnrfutilをアップグレードし、deviceコマンドをダウンロードします。

- 2.3.1 最新バージョンのnrfutilを確実に使用するために、ターミナル（コマンドプロンプトまたはPowerShell）で以下のコマンドを実行してください。ステップ2.2でnrfutilがグローバルに設定されているため、どのターミナルを使用しても問題ありません。
```cpp
nrfutil self-upgrade
```

- 2.3.2 nrfutil deviceコマンドのインストール
deviceコマンドを使用して開発キットにバイナリを書き込む必要があります。
現在アクティブなターミナルで、次のように入力してください：nrfutil install device
以下の出力が表示されるはずです：
```cpp
[00:00:02] ###### 100% [Install packages] Install packages
``` -->

#### VSCodeでボードを設定し、書き込みファイルをビルドする

VS Codeを開き、プラグインセンターでnRF Connect for VS Code Extension Packを検索してください。このプラグインパックは、nRF Connectに必要な他のVS Codeプラグインを自動的にインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>
<br />
nRF Connect for VS Code拡張機能により、開発者は人気のVisual Studio Code統合開発環境（VS Code IDE）を利用して、NordicのnRF Connect SDK（Software Development Kit）に基づく組み込みアプリケーションの開発、ビルド、デバッグ、デプロイを行うことができます。この拡張機能には、コンパイラインターフェース、リンカー、完全なビルドシステム、RTOS対応デバッガー、nRF Connect SDKとのシームレスなインターフェース、デバイスツリー可視化エディター、統合シリアルターミナルなどの便利な開発ツールが含まれています。
VS Code用nRF Connect拡張パッケージには、以下のコンポーネントが含まれています：

- nRF Connect for VS Code：メイン拡張機能で、ビルドシステムとnRF Connect SDKの間のインターフェース、およびnRF Connect SDKバージョンとツールチェーンを管理するインターフェースが含まれています。
- nRF DeviceTree：デバイスツリー言語サポートとデバイスツリー可視化エディターを提供します。
- nRF Kconfig：Kconfig言語サポートを提供します。
- nRF Terminal：シリアルおよびRTTターミナル。
- Microsoft C/C++：IntelliSenseの機能を含むC/C++言語サポートを追加します。
- CMake：CMake言語サポート。
- GNU Linker Mapping Files：リンカーマッピングファイルのサポート。
拡張機能を通じて、nRF Connect SDKとそのツールチェーンの任意の希望するバージョンをダウンロードできます。完全なnRF Connect for VS Codeドキュメントは https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html で利用できます。

#### ツールチェーンのインストール

ツールチェーンは、アセンブラー、コンパイラー、リンカー、CMakeコンポーネントを含む、nRF Connect SDKアプリケーションをビルドするために連携して動作するツールのコレクションです。
nRF Connect for VS Codeを初めて開くと、ツールチェーンのインストールを求められます。これは通常、拡張機能がコンピュータにインストールされたツールチェーンを検出しない場合に発生します。
Install Toolchainをクリックすると、コンピュータにダウンロードしてインストールできるツールチェーンバージョンのリストが表示されます。使用予定のnRF Connect SDKのバージョンと一致するツールチェーンのバージョンを選択してください。常にnRF Connect SDKの最新のタグ付きバージョンを使用することをお勧めします。

デフォルトでは、nRF Connect for VS CodeはツールチェーンのReleasedタブ（つまり、安定版）のみを表示します。新機能を評価していて、PreviewタブまたはCustomer Sampling（-cs）などの他のタイプのタブを使用したい場合は、以下に示すように「Show all toolchain versions」をクリックしてください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/toolchain2.png" style={{width:800, height:'auto'}}/></div>

:::note
**ここでのToolChainは3.0.1以上です**
:::

#### nRF Connect SDKのインストール

VS Code用nRF Connect拡張機能で、Manage SDKをクリックしてください。Manage SDKメニューから、nRF Connect SDKバージョンをインストールまたはアンインストールできます。拡張機能を初めて使用するため、インターフェースには2つのオプションのみが表示されます。

Install SDKをクリックすると、ローカルにダウンロードしてインストールできる利用可能なnRF Connect SDKバージョンがすべて一覧表示されます。プロジェクトの開発に必要なnRF Connect SDKのバージョンを選択してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/install_sdk.png" style={{width:800, height:'auto'}}/></div>

VS CodeでSDKフォルダを開いている場合、Manage SDKメニューオプションの代わりに、Manage west workspaceが表示されます。この問題を解決するには、VS Codeで別のウィンドウまたはフォルダを開いてください。

:::note
**ここでのnRF Connect SDKは3.0.1以上です**
:::

:::tip
これらのオプションのいずれも表示されない場合は、最新バージョンのnRF Connect for VS Code拡張パッケージがインストールされていることを確認してください。
nRF Connect SDKはIDE独立であることに注意することが重要です。つまり、任意のIDEを選択して使用するか、まったく使用しないかを選択できます。nRF Connect SDKは https://www.nordicsemi.com/Products/Development-tools/nRF-Util （nrfutil）コマンドラインインターフェース（CLI）を介して利用でき、nRF Connectをダウンロードしてインストールします。ただし、VS CodeでnRF Connect for VS Code拡張機能を使用することを強くお勧めします。これは、便利なグラフィカルユーザーインターフェース（GUI）と効率的なコマンドラインインターフェース（CLI）を統合するだけでなく、ファームウェア開発を大幅に簡素化する多くの機能も含んでいるためです。nRF Connect SDKで動作するように他のIDEを設定するには、このコースの範囲を超える追加の手動ステップが必要です。
:::

#### ユーザープログラムの作成

この演習では、blinkyサンプルに基づいた簡単なアプリケーションを作成して、開発ボード上のLEDの点滅を制御します。これは、サポートされているすべてのNordicSemiconductor開発ボード（nRF54、nRF53、nRF52、nRF70、またはnRF91シリーズ）に適用されます。目標は、サンプルをビルドして書き込むために必要なすべてのツールが正しく設定されていることを確認することです。焦点は、「Copy Example」テンプレートを使用してアプリケーションを作成し、ビルドして、Nordic チップ開発ボードに書き込む方法を学ぶことです！

- VS Codeで、nRF Connect拡張機能アイコンをクリックしてください。Welcomeビューで、Create New Applicationをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project1.png" style={{width:800, height:'auto'}}/></div>

- 検索バーにblinkyと入力し、以下に示すように2番目のBlinkyサンプル（パス zephyr/samples/basic/blinky）を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project2.png" style={{width:800, height:'auto'}}/></div>

Blinkyサンプルは、開発ボード上のLED1を継続的に点滅させます。
最初のアプリケーションはBlinkyサンプルに基づいて作成されます。BlinkyサンプルはnRF Connect SDK内のZephyrモールドブロックから派生しているため、サンプルパスにzephyrという名前が表示されます：zephyr\samples\basic\blinky。

#### XIAO nRF54L15ボードの追加

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

開始するには、**GitHubリンクからリポジトリをクローンしてください**`git clone https://github.com/Seeed-Studio/platform-seeedboards.git` を希望するローカルフォルダに。クローンしたら、`platform-seeedboards/zephyr/` ディレクトリに移動してください。**この`zephyr`フォルダのパスを覚えておいてください**；

VS CodeでnRF Connect用にボードを設定するには、以下の手順に従ってください：

- VS Codeを開き、設定に移動してください。

- 検索ボックスにnRF Connectと入力してください。
- Board Roots設定項目を見つけて、settings.jsonの編集をクリックします。

- ダウンロードしたXIAO nRF54L15ボードファイルの`zephyr`パスをboardRoots配列に追加します。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config1.jpg" style={{width:600, height:'auto'}}/></div> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_board1.png" style={{width:800, height:'auto'}}/></div>

- アプリケーションビューで、アプリケーション名の下にあるAdd Build Configurationをクリックします。

- Board targetでXIAO nRF54L15のモデルを選択し、Base configuration filesでデフォルトのprj.configファイルを選択し、最後に`Generate and Build`をクリックしてファイルをビルドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_board2.png" style={{width:800, height:'auto'}}/></div>

#### 書き込みプラグインのダウンロード

<Tabs>
<TabItem  value="window" label="Window" default>

**追加プラグイン：**

WindowsではChocolateyパッケージマネージャーを使用してOpenOCDをインストールします。

**1.PowerShellを開く（管理者として実行）：**

- Windowsの検索バーで「PowerShell」と入力します。
- 「Windows PowerShell」を右クリックして「管理者として実行」を選択します。

**2.PowerShell実行ポリシーを確認：**

- `Get-ExecutionPolicy`と入力してEnterを押します。
- `Get-ExecutionPolicy -List`と入力してEnterを押します。

**3.Chocolateyをインストール：**

- 以下のコマンドを貼り付けて実行します：

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

このコマンドは現在のPowerShellセッションの実行ポリシーをバイパスしてChocolateyをインストールします。インストール後、PowerShellウィンドウを閉じて再度開いてください（管理者として実行）。

**4.OpenOCDをインストール：**

- 新しいPowerShellウィンドウ（管理者として）で以下を入力します：

```cpp
choco install openocd
```

**5.OpenOCDインストールの確認：**

- `Get-Command openocd`と入力してEnterを押します。

- インストールが成功した場合、このコマンドはopenocd.exeへのパスを表示します。

</TabItem>

<TabItem value="mac" label="Mac OS" default>

**追加プラグイン：**

macOSではHomebrewパッケージマネージャーを使用して必要なツールをインストールします。

**1.Homebrewをインストール（まだインストールされていない場合）：**

- Terminal.appを開きます。

- 以下のコマンドを実行します：

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 画面の指示に従ってください。macOSユーザーパスワードの入力が必要な場合があります。インストール後、ターミナルが指示するコマンドを実行してHomebrewをPATH環境変数に追加してください`（例：eval "$(/opt/homebrew/bin/brew shellenv)"）`。その後、ターミナルを閉じて再度開いてください。

**2.Ccacheをインストール：**

ターミナルで以下を入力します：

```cpp
brew install ccache
```

**3.OpenOCDをインストール：**

ターミナルで以下を入力します：

```cpp
brew install openocd
```

**4.OpenOCDインストールの確認：**

- `which openocd`と入力してEnterを押します。

- インストールが成功した場合、このコマンドは`openocd`実行ファイルへのパスを表示します。

</TabItem>

</Tabs>

#### West Flash書き込みプログラム

- nRFターミナルを開きます

- `west flash`コマンドを入力するだけです。デバイスをフラッシュするには、単にwest flashコマンドを入力します。赤でハイライトされたパスは、コンパイルされた.elfファイルの場所を示しています。この同じパスを使用して対応する.hexファイルを見つけることができ、これはJ-Linkデバッガーでのプログラミングに適しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/west_flash_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
west flashエラーが発生した場合、VS CodeのCMakeプラグインとの競合があることを意味し、CMakeプラグインを削除する必要があります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:800, height:'auto'}}/></div>
:::

Seeed Studio XIAO nRF54L15 Senseにプログラムを正常に書き込むと、ボード上のユーザーインジケーターが緑色に点滅し続けるのを確認できます。同じ効果が得られた場合、成功です！🎊

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

#### Blinkyプログラムの説明

```cpp
/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <stdio.h>
#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

/* 1000 msec = 1 sec */
#define SLEEP_TIME_MS   1000

/* The devicetree node identifier for the "led0" alias. */
#define LED0_NODE DT_ALIAS(led0)

/*
 * A build error on this line means your board is unsupported.
 * See the sample documentation for information on how to fix this.
 */
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

int main(void)
{
int ret;
bool led_state = true;

if (!gpio_is_ready_dt(&led)) {
  return 0;
}

ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
if (ret < 0) {
  return 0;
}

while (1) {
  ret = gpio_pin_toggle_dt(&led);
  if (ret < 0) {
    return 0;
  }

  led_state = !led_state;
  printf("LED state: %s\n", led_state ? "ON" : "OFF");
  k_msleep(SLEEP_TIME_MS);
}
return 0;
}
```

**LEDデバイス定義**：

- `#define LED0_NODE DT_ALIAS(led0)`：「led0」エイリアスのデバイスツリーノード識別子を取得し、LEDへのハードウェア非依存の参照を可能にします。
- `static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios)`：デバイスツリーノードを使用してGPIO仕様構造体（`led`）を作成し、LEDのハードウェア詳細（ピン、ポート）を含みます。ここでビルドエラーが発生した場合、サポートされていないハードウェアを示します。

**main()関数の初期化**：

- **変数設定**：
  - `int ret`：関数の戻り値を格納して操作の成功を確認します。
  - `bool led_state = true`：LED状態を追跡します（「ON」に初期化）。

- **GPIO準備確認**：
  - `if (!gpio_is_ready_dt(&led)) { return 0; }`：LEDのGPIOハードウェアが準備完了かを確認します（例：ドライバーがロードされている）。準備ができていない場合は終了します。

- **GPIO設定**：
  - `ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE)`：LEDのGPIOピンをアクティブハイ出力として設定します。
  - 失敗時（`ret < 0`）は無効な操作を防ぐために終了します。

**メインループ**：
無限の`while (1)`ループで実行され、LEDを定期的に切り替えます：

- **LED状態の切り替え**：
  - `ret = gpio_pin_toggle_dt(&led)`：LEDのGPIO出力を反転します（ON ↔ OFF）。失敗時は終了します。

- **状態追跡の更新**：
  - `led_state = !led_state`：ソフトウェア状態フラグをハードウェア状態と同期します。

- **ログと遅延**：
  - `printf("LED state: %s\n", led_state ? "ON" : "OFF")`：シリアル出力を通じて現在のLED状態を印刷します。
  - `k_msleep(SLEEP_TIME_MS)`：ZephyrのRTOS遅延関数を使用して1000ms（1秒）一時停止し、点滅頻度を制御します。

#### nRF Connect SDK内部の詳細解説

nRF Connect SDKの内部原理をより深く理解したい場合は、以下のコースを参照してください：

- [**nRF Connect SDK Fundamentals**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)

- [**nRF Connect SDK Intermediate**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-intermediate/)

- [**nRF Connect Vscode**](https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html)

</Steppers>

## プログラム書き込み用J-Linkピンへのアクセス

JLinkを使用してプログラミングしたい場合は、以下の手順に従ってください。ただし、Seeed Studio XIAO nRF54L15ボードに内蔵されているシリアルポートを使用してプログラミングすることをお勧めします。これははるかに便利です。

**必要なハードウェア**

- [Seeed Studio XIAO nRF54L15](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Jlink](https://www.segger.com/downloads/jlink/)

:::tip
nRF54L15モデルボードサポートを得るために、最新バージョンのJ-Linkをダウンロードする必要があります。
:::

**必要なソフトウェア**

ウェブサイトから[Segger](https://www.segger.com/downloads/jlink/)ソフトウェアをダウンロードする必要があります。

- **ステップ 1.** Jlinkを使用して以下のピンを接続します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link.png" alt="pir" width={250} height="auto" /></p>

- **ステップ 2.** J-Flashを起動してnRF54L15_M33を検索し、新しいプロジェクトを作成します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link4.jpg" alt="pir" width={700} height="auto" /></p>

- **ステップ 3.** 「Target」をクリックして「Connect」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link3.jpg" alt="pir" width={700} height="auto" /></p>

- **ステップ 4.** binまたは[hexファイル](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/zephyr.hex)をソフトウェアにドラッグします。その後、F4とF5をその順序で押します。再フラッシュが完了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link2.jpg" alt="pir" width={700} height="auto" /></p>

## バッテリー駆動ボード

XIAO nRF54L15には内蔵の電源管理チップがあり、バッテリーを使用してXIAO nRF54L15を独立して電源供給したり、XIAO nRF54L15のUSBポートを通じてバッテリーを充電したりできます。

XIAOにバッテリーを接続したい場合は、認定された充電式3.7Vリチウムバッテリーの購入をお勧めします。バッテリーをはんだ付けする際は、正極と負極の端子を注意深く区別してください。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_connect.jpg" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:500, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>バッテリー接続回路図</em></p>
</div>
**バッテリー使用に関する注意事項：**

1. 仕様に適合する認定されたバッテリーを使用してください。
2. バッテリー使用中でも、XIAOはデータケーブルでコンピューターデバイスに接続できます。XIAOには回路保護チップが内蔵されているため安全です。
3. XIAO nRF54L15はバッテリー駆動時にはLEDが点灯しません（特定のプログラムを書いていない限り）。LEDの状態でXIAO nRF54L15が動作しているかどうかを判断せず、プログラムによって合理的に判断してください。

同時に、バッテリー充電用の赤色インジケーターライトを設計し、インジケーターライトの表示を通じて充電中のバッテリーの現在の状態をユーザーに知らせます。

<!-- 1. When XIAO nRF54L15 is not connected to the battery, the red light comes on when the Type-C cable is connected and goes off after 30 seconds.
2. The red light flashes when the battery is connected and the Type-C cable is connected for charging.
3. When connecting Type-C to charge the battery fully, the red light turns off. -->

:::caution
はんだ付け時に正極と負極をショートさせてバッテリーや機器を焼損させないよう注意してください。
:::

### バッテリー電圧検出

XIAO nRF54L15は、TPS22916CYFPRロードスイッチを使用してバッテリー電力測定を効率的に管理することを中心としたバッテリー電圧検出機能を統合しています。このガイドでは、バッテリー検出のソフトウェア実装の分析**（特にmain.cコード）**に焦点を当て、Zephyr NCS SDKの複雑さを避けて、PlatformIO環境でこの機能を簡単にデプロイして使用する方法をガイドします。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_A.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>バッテリー検出回路図</em></p>
</div>

TPS22916CYFPRチップの機能：

- オンデマンドでバッテリー電圧のオン・オフを制御するインテリジェント電源スイッチです。バッテリー電圧を測定する必要がある場合はオンになり、バッテリーを分圧回路に接続します。測定する必要がない場合はオフになり、接続を切断します。

- この機能は何に役立つのでしょうか？
このオンデマンドスイッチング機構により、チップは不要な電流消費を大幅に削減し、バッテリー寿命を効果的に延長します。後続の分圧回路とnRF54L15のADC（アナログ-デジタル変換器）と組み合わせることで、XIAO nRF54L15はバッテリーの残量を正確に監視でき、IoTデバイスなどのバッテリー駆動・低消費電力アプリケーションに重要な範囲最適化を提供します。

:::note
以下のサンプルコードはPlatformIO用に設計されていますが、nRF Connect SDKとも互換性があります。

PlatformIOでXIAO nRF54L15を使用する
PlatformIOでXIAO nRF54L15を使用したい場合は、このチュートリアルを参照して設定してください：[XIAO nRF54L15 PlatformIO設定](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_with_platform_io/)。

:::
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### overlayの追加とconfファイルの変更

nRF Connect SDKでこのバッテリールーチンを使用したい場合は、app.overlayを追加し、prj.confファイルを変更する必要があります。

- プロジェクトディレクトリの下に`app.overlay`という名前の新しいファイルを作成します。次に以下のコードを貼り付け、最後にCtrl + Sを押して保存します。

  - overlayファイルはハードウェア記述層を拡張し、デバイスツリーを通じて物理的なハードウェア接続をカスタマイズします。コードロジックを変更するのではなく、実際のハードウェアの詳細を宣言して、ドライバーが物理デバイスを正しく初期化できるようにします。
<br />
  <details>

  <summary>app.overlayコード</summary>

  ```cpp
  / {
  /*
    * @brief Device Tree Overlay for XIAO nRF54L15
    *
    * This file customizes the base board device tree to configure
    * peripherals for a specific application, including:
    * - User-defined ADC channels
    * - PWM-controlled LED
    * - Buttons and a relay
    * - E-paper display (UC8179) via SPI
    * - OLED display (SSD1306) via I2C
    *
    * To switch between the two displays, simply uncomment one and comment
    * out the other in the "chosen" node below.
    */

  /************************************************************
    * Aliases for easy access to devices in application code
    ************************************************************/
  aliases {
    pwm-led = &pwm0_led0;
    sw1 = &xiao_button0;
    relay0 = &xiao_relay0;
  };

  /************************************************************
    * Display selection (choose one if multiple)
    ************************************************************/
  chosen {
    zephyr,display = &uc8179_7inch5_epaper_gdew075t7;
    zephyr,display = &ssd1306_128x64;
  };

  /************************************************************
    * PWM LED, Button, and Relay configuration
    ************************************************************/
  pwm_leds {
    compatible = "pwm-leds";
    pwm0_led0: my_pwm_led {
      // PWM channel 0 on PWM instance 20
      // PWM_MSEC(20) sets a period of 20ms
      pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
      status = "okay";
    };
  };

  buttons {
    compatible = "gpio-keys";
    xiao_button0: button_0 {
      // Connect to the XIAO nRF54L15 pin D1
      // GPIO_PULL_UP ensures the pin is high when the button is not pressed
      // GPIO_ACTIVE_LOW means the button press drives the pin low
      gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
      zephyr,code = <INPUT_KEY_0>;
    };
  };

  relay {
    compatible = "gpio-leds";
    xiao_relay0: relay_0 {
      // Connect to the XIAO nRF54L15 pin D0
      gpios = <&xiao_d 0 GPIO_ACTIVE_HIGH>;
    };
  };

  /************************************************************
    * Local nodes that don't modify existing ones
    ************************************************************/
  zephyr,user {
    io-channels = <&adc 0>, <&adc 1>, <&adc 2>, <&adc 3>,
            <&adc 4>, <&adc 5>, <&adc 6>, <&adc 7>;
  };

  // MIPI-DBI SPI interface for the E-paper display
  mipi_dbi_xiao_epaper {
    compatible = "zephyr,mipi-dbi-spi";
    spi-dev = <&xiao_spi>;
    // D3 pin for Data/Command control
    dc-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
    // D0 pin for Reset
    reset-gpios = <&xiao_d 0 GPIO_ACTIVE_LOW>;
    write-only;
    #address-cells = <1>;
    #size-cells = <0>;

    uc8179_7inch5_epaper_gdew075t7: uc8179@0 {
      compatible = "gooddisplay,gdew075t7", "ultrachip,uc8179";
      // Max SPI frequency for the display
      mipi-max-frequency = <4000000>;
      reg = <0>;
      width = <800>;
      height = <480>;
      // D2 pin for Busy signal from the display
      busy-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;
      softstart = [17 17 17 17];
      full {
        pwr = [07 07 3f 3f];
        cdi = <07>;
        tcon = <0x22>;
      };
    };
  };
  };

  /************************************************************
  * Device fragments (modifying nodes from the base board DTS)
  ************************************************************/
  // PWM instance 20
  &pwm20 {
  status = "okay";
  pinctrl-0 = <&pwm20_default>;
  pinctrl-1 = <&pwm20_sleep>;
  pinctrl-names = "default", "sleep";
  };

  // GPIO pin control
  &pinctrl {
  pwm20_default: pwm20_default {
    group1 {
      // Configure PWM channel 0 on P1.04 pin (Pin D0)
      psels = <NRF_PSEL(PWM_OUT0, 1, 4)>;
    };
  };

  pwm20_sleep: pwm20_sleep {
    group1 {
      psels = <NRF_PSEL(PWM_OUT0, 1, 4)>;
      low-power-enable;
    };
  };
  };

  // PDM instance 20 for DMIC
  dmic_dev: &pdm20 {
  status = "okay";
  };

  // Power configuration
  &pdm_imu_pwr {
  /delete-property/ regulator-boot-on;
  };

  // UART instance 20
  &uart20 {
  current-speed = <921600>;
  };

  // SPI peripheral
  &xiao_spi {
  status = "okay";
  // D1 pin for Chip Select
  cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>;
  };

  // I2C peripheral
  &xiao_i2c {
  status = "okay";
  zephyr,concat-buf-size = <2048>;

  ssd1306_128x64: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
  };
  ```

  </details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_overlay1.png" style={{width:800, height:'auto'}}/></div>

- prj.confファイルに以下の内容を追加します
  - prj.confはZephyrプロジェクトのコア設定ファイルです。コンパイル時のソフトウェア機能選択のためにKconfigシステムによって管理されます。どのドライバー（ADC、ディスプレイ、Bluetoothなど）、ミドルウェア（LVGLなど）、システムサービス（ログ、メモリ管理など）をファームウェアに含めるかを決定し、それらの動作パラメータ（ログレベル、ヒープサイズなど）を設定します。最後にCtrl + Sを押して保存してください。
<br />
  <details>

  <summary>prj.confコード</summary>

    ```python
    # =========================================================
    # Basic system configuration
    # =========================================================
    CONFIG_GPIO=y
    CONFIG_I2C=y
    CONFIG_ADC=y
    CONFIG_ADC_ASYNC=y
    CONFIG_PWM=y
    CONFIG_SENSOR=y
    CONFIG_INPUT=y

    # =========================================================
    # Power management
    # =========================================================
    CONFIG_PM_DEVICE=y
    CONFIG_NRFX_POWER=y
    CONFIG_POWEROFF=y
    CONFIG_HWINFO=y
    CONFIG_CRC=y

    # =========================================================
    # Serial port and console configuration
    # =========================================================
    CONFIG_SERIAL=y
    CONFIG_CONSOLE=y
    CONFIG_STDOUT_CONSOLE=y
    CONFIG_UART_CONSOLE=y
    CONFIG_UART_ASYNC_API=y
    CONFIG_UART_INTERRUPT_DRIVEN=y
    CONFIG_UART_NRFX_UARTE_ENHANCED_RX=y
    CONFIG_CBPRINTF_FP_SUPPORT=y

    # =========================================================
    # Log and Debugging
    # =========================================================
    CONFIG_LOG=y
    CONFIG_LOG_PRINTK=y
    CONFIG_LOG_MODE_IMMEDIATE=y
    CONFIG_LOG_DEFAULT_LEVEL=3
    CONFIG_PWM_LOG_LEVEL_DBG=y
    CONFIG_PRINTK=y

    # =========================================================
    #  Memory and Stack
    # =========================================================
    CONFIG_MAIN_STACK_SIZE=4096
    CONFIG_HEAP_MEM_POOL_SIZE=16384
    CONFIG_NEWLIB_LIBC=y
    CONFIG_NEWLIB_LIBC_FLOAT_PRINTF=y

    # =========================================================
    # Bluetooth configuration
    # =========================================================
    CONFIG_BT=y
    CONFIG_BT_PERIPHERAL=y
    CONFIG_BT_DEVICE_NAME="zephyr-ble"

    # =========================================================
    # Audio configuration
    # =========================================================
    CONFIG_AUDIO=y
    CONFIG_AUDIO_DMIC=y

    # =========================================================
    # Display and Graphics
    # =========================================================
    CONFIG_DISPLAY=y
    CONFIG_MIPI_DBI_SPI=y
    CONFIG_SSD1306=y
    CONFIG_CHARACTER_FRAMEBUFFER=y

    # LVGL Graphics Library
    CONFIG_LVGL=y
    CONFIG_LV_Z_MEM_POOL_SIZE=49152
    CONFIG_LV_Z_SHELL=y
    CONFIG_LV_USE_MONKEY=y
    CONFIG_LV_USE_LABEL=y
    CONFIG_LV_COLOR_DEPTH_1=y
    CONFIG_LV_FONT_MONTSERRAT_12=y
    CONFIG_LV_FONT_MONTSERRAT_14=y
    CONFIG_LV_FONT_MONTSERRAT_16=y
    CONFIG_LV_FONT_MONTSERRAT_18=y
    CONFIG_LV_FONT_MONTSERRAT_24=y
    CONFIG_LV_USE_FONT_COMPRESSED=y

    # =========================================================
    # Shell configuration
    # =========================================================
    CONFIG_SHELL=y
    CONFIG_SHELL_BACKEND_DUMMY=y
    ```

  </details>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/add_prj1.png" style={{width:800, height:'auto'}}/></div>

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

## リソース

### Seeed Studio XIAO nRF54L15

- **[PDF]** [Seeed Studio XIAO nRF54L15 回路図](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 KiCADライブラリ](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 DXF寸法図](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)

### Seeed Studio XIAO nRF54L15 Sense

- **[PDF]** [Seeed Studio XIAO nRF54L15 Sense 回路図](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 Sense KiCADライブラリ](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Sense_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 Sense DXF寸法図](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 Sense ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
