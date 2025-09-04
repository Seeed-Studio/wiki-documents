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

**Seeed Studio XIAO nRF54L15**は、最先端のNordic nRF54L15チップを搭載したコンパクトで高性能な開発ボードです。この次世代SoCは、超低消費電力マルチプロトコル2.4 GHz無線と、**128 MHz Arm® Cortex®-M33プロセッサ**および高度な電力管理用の**Arm® Cortex®-M0**+を含むMCUを統合しています。**1.5 MB NVMおよび256 KB RAM**までのスケーラブルメモリを提供し、内蔵の超低消費電力設計によりバッテリー寿命を大幅に延長します。その強力な無線は**Bluetooth® 6.0（チャネルサウンディングを含む）、Matter、Thread、Zigbee**、および**最大4 Mbps**の高スループット2.4 GHz独自モードをサポートします。このボードには包括的なペリフェラルセット、統合された**128 MHz RISC-Vコプロセッサ**、および**TrustZone®**分離と暗号化エンジン保護などの高度なセキュリティ機能が含まれています。**内蔵Li-ionバッテリー管理**により、XIAO nRF54L15はスマートウェアラブル、産業用センサー、高度なHMIなどのコンパクトで安全かつエネルギー効率的なIoTソリューションに最適です。

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
      <td align="center">Arm Cortex-M33 128 MHz<br/>RISC-V コプロセッサ 128 MHz FLPR</td>
      <td align="center">Arm Cortex-M33 128 MHz<br/>RISC-V コプロセッサ 128 MHz FLPR</td>
  </tr>
  <tr>
      <th>ワイヤレス接続</th>
      <td align="center">
        Bluetooth LE 6.0（チャネルサウンディングを含む）<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        独自2.4 GHzプロトコル<br/>
      </td>
      <td align="center">
        Bluetooth LE 6.0（チャネルサウンディングを含む）<br/>
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
      <th>ESBおよび2.4 GHz独自プロトコル</th>
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

- **強力なCPU**: DSP命令とFPU浮動小数点演算をサポートする128 MHz Arm® Cortex®-M33プロセッサ、32ビットRISCアーキテクチャ、および統合された128 MHz RISC-Vコプロセッサ。
- **超低消費電力**: 優れた超低消費電力設計により、バッテリー寿命を大幅に延長し、高度な電力管理を含みます。
- **マルチモードワイヤレス伝送**: 統合された2.4 GHzマルチプロトコルワイヤレストランシーバーは、Bluetooth Low Energy（チャネルサウンディングを含む）、802.15.4-2020、Matter、Thread、Zigbee、および2.4 GHz独自モード（最大4 Mbps）をサポートします。
- **堅牢なセキュリティ**: TrustZone®分離、タンパー検出、暗号化エンジン側のチャネルリーク保護を含む高度なセキュリティ機能。
- **豊富なオンチップリソース**: 最大1.5 MB NVMおよび256 KB RAMまでのスケーラブルメモリ構成により、十分なストレージスペースを提供します。
- **豊富なインターフェース**: 新しいグローバルRTC（システムOFFモードで利用可能）、14ビットADC、高速シリアルインターフェースを含む包括的なペリフェラルセット。内蔵リチウムバッテリー管理。


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
    <th>XIAO nRF54L15 前面図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_Font.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 背面図</th>
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
    <th>XIAO nRF54L15 Sense 前面図</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15_Sense_Font.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF54L15 Sense 背面図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/newback8.png" style={{width:850, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>


## nRFConnect SDK の使用方法
nRF Connect SDK（NCS）は、Nordic nRF52、nRF53、nRF54、nRF70、およびnRF91シリーズベースのワイヤレスデバイス向けの低消費電力ワイヤレスアプリケーション構築専用に設計された、Nordic Semiconductorの拡張可能で統一されたソフトウェア開発キットです。

NCSは、開発プロセスを簡素化し、市場投入時間を短縮するために設計された、すぐに使えるサンプルアプリケーション、プロトコルスタック、ライブラリ、ハードウェアドライバーの豊富なエコシステムを提供します。そのモジュラーで設定可能な性質により、開発者はメモリ制約のあるデバイス向けにサイズ最適化されたソフトウェアを構築する柔軟性と、より高度で複雑なアプリケーション向けの強力な機能を得ることができます。NCSはGitHubでホストされているオープンソースプロジェクトであり、Visual Studio Codeなどの統合開発環境に対する優れたサポートを提供します。

### Vscodeでのインストール

<details>

<summary>事前にnRF Connect SDK知識をインストール</summary>

このドキュメントでは、Windows 11コンピューターにnRF Connect SDK開発環境をインストールする方法を詳しく説明します。以下は、インストールが必要なツールの概要です
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

***コンピューターに事前にインストールされている場合は、以下のコマンドでツールのバージョン番号を確認できます***

</details>


<Steppers>

<!-- #### Installation of SEGGER J-Link v8.18

https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack からお使いのプラットフォーム用のインストーラーをダウンロードしてください。インストーラーを実行し、インストール過程で「Select Optional Components」ウィンドウが表示されたら、「Install legacy USB driver for J-Link」にチェックを入れてください。これは一部のサポートされている開発キットに必要なコンポーネントです。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/jlink2.png" style={{width:600, height:'auto'}}/></div>
#### nrfutil と nrfutil device コマンドをインストールします。

- 2.1. https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download?lang=en#infotabs からお使いのオペレーティングシステムに対応したバイナリファイルをダウンロードし、ディスクドライブに保存してください（例：Windows）。Windowsの場合は、C:\nordic_tools\nrfutil.exe として保存してください。
macOS または Linux をお使いの場合は、システムの PATH に追加されているディレクトリ（例：/usr/bin/）に保存してください。この場合、ステップ 2.2 をスキップできます。

- 2.2. （Windows）nrfutil が保存されている場所を含むようにシステムの PATH を更新してください。「アカウント環境変数の編集」を開き、nrfutil バイナリが保存されているパス（C:\nordic_tools\）を追加してください。

- 2.3. ダウンロードした nrfutil バイナリには、プリインストールされたコマンドは含まれていません。このステップでは、コア nrfutil をアップグレードし、device コマンドをダウンロードします。

- 2.3.1 最新バージョンの nrfutil があることを確認するため、ターミナル（コマンドプロンプトまたは PowerShell）で以下のコマンドを実行してください。ステップ 2.2 で nrfutil がグローバルに設定されているため、どのターミナルを使用しても問題ありません。
```cpp
nrfutil self-upgrade
```

- 2.3.2 nrfutil device コマンドのインストール
device コマンドを使用して開発キットにバイナリを書き込む必要があります。
現在アクティブなターミナルで、次のように入力してください：nrfutil install device
以下の出力が表示されるはずです：
```cpp
[00:00:02] ###### 100% [Install packages] Install packages
``` -->

#### VScode でボードを設定し、書き込みファイルをビルドします。

***1.VS Studio Code をインストール***
[Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

2.VS Code を開き、プラグインセンターで nRF Connect for VS Code Extension Pack を検索してください。このプラグインパックは、nRF Connect に必要な他の VS Code プラグインを自動的にインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>

nRF Connect for VS Code 拡張機能により、開発者は人気の Visual Studio Code 統合開発環境（VS Code IDE）を利用して、Nordic の nRF Connect SDK（ソフトウェア開発キット）に基づく組み込みアプリケーションの開発、ビルド、デバッグ、デプロイを行うことができます。この拡張機能には、コンパイラインターフェース、リンカー、完全なビルドシステム、RTOS 対応デバッガー、nRF Connect SDK とのシームレスなインターフェース、デバイスツリー可視化エディター、統合シリアルターミナルなどの便利な開発ツールが含まれています。
VS Code 用 nRF Connect 拡張パッケージには、以下のコンポーネントが含まれています：
- nRF Connect for VS Code：メイン拡張機能で、ビルドシステムと nRF Connect SDK 間のインターフェース、および nRF Connect SDK バージョンとツールチェーンを管理するインターフェースが含まれています。
- nRF DeviceTree：デバイスツリー言語サポートとデバイスツリー可視化エディターを提供します。
- nRF Kconfig：Kconfig 言語サポートを提供します。
- nRF Terminal：シリアルおよび RTT ターミナル。
- Microsoft C/C++：IntelliSense の機能を含む C/C++ 言語サポートを追加します。
- CMake：CMake 言語サポート。
- GNU Linker Mapping Files：リンカーマッピングファイルのサポート。
拡張機能を通じて、nRF Connect SDK とそのツールチェーンの任意の推奨バージョンをダウンロードできます。完全な nRF Connect for VS Code ドキュメントは https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html で入手できます。

#### ツールチェーンのインストール
ツールチェーンは、アセンブラー、コンパイラー、リンカー、CMake コンポーネントを含む、nRF Connect SDK アプリケーションをビルドするために連携して動作するツールのコレクションです。
nRF Connect for VS Code を初めて開くと、ツールチェーンのインストールを求められます。これは通常、拡張機能がコンピューターにインストールされたツールチェーンを検出しない場合に発生します。
Install Toolchain をクリックすると、コンピューターにダウンロードしてインストールできるツールチェーンバージョンのリストが表示されます。使用予定の nRF Connect SDK のバージョンに一致するツールチェーンのバージョンを選択してください。常に nRF Connect SDK の最新のタグ付きバージョンを使用することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown1.png" style={{width:600, height:'auto'}}/></div>

デフォルトでは、nRF Connect for VS Code はツールチェーンの Released タブ（つまり、安定版）のみを表示します。新機能を評価していて Preview タブや他のタイプのタブ（例：Customer Sampling -cs）を使用したい場合は、以下に示すように「Show all toolchain versions」をクリックしてください：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown2.png" style={{width:600, height:'auto'}}/></div>

:::note
**ここでの ToolChain は 3.0.1 以上です**
:::
#### nRF Connect SDK のインストール
VS Code の nRF Connect 拡張機能で、Manage SDK をクリックしてください。Manage SDK メニューから、nRF Connect SDK バージョンをインストールまたはアンインストールできます。拡張機能を初めて使用するため、インターフェースには 2 つのオプションのみが表示されます。

Install SDK をクリックすると、ダウンロードしてローカルにインストールできる利用可能な nRF Connect SDK バージョンがすべて一覧表示されます。プロジェクトの開発に必要な nRF Connect SDK のバージョンを選択してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfdown3.png" style={{width:600, height:'auto'}}/></div>

VS Code で SDK フォルダーを開いている場合、Manage SDK メニューオプションの代わりに Manage west workspace が表示されます。この問題を解決するには、VS Code で別のウィンドウまたはフォルダーを開いてください。

:::note
**ここでの nRF Connect SDK は 3.0.1 以上です**
:::

:::tip
これらのオプションのいずれも表示されない場合は、最新バージョンの nRF Connect for VS Code 拡張パッケージがインストールされていることを確認してください。
nRF Connect SDK は IDE に依存しないことに注意することが重要です。つまり、任意の IDE を選択するか、まったく使用しないことも可能です。nRF Connect SDK は https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil) コマンドライン (nrfutil) コマンドラインインターフェース（CLI）を介して利用でき、nRF Connect をダウンロードしてインストールします。ただし、VS Code と nRF Connect for VS Code 拡張機能の使用を強くお勧めします。これは、便利なグラフィカルユーザーインターフェース（GUI）と効率的なコマンドラインインターフェース（CLI）を統合するだけでなく、ファームウェア開発を大幅に簡素化する多数の機能も含んでいるためです。nRF Connect SDK で動作するように他の IDE を設定するには、このコースの範囲を超える追加の手動ステップが必要です。
:::


#### ユーザープログラムの作成

この演習では、開発ボード上の LED の点滅を制御するために、blinky サンプルに基づいた簡単なアプリケーションを作成します。これは、サポートされているすべての NordicSemiconductor 開発ボード（nRF54、nRF53、nRF52、nRF70、または nRF91 シリーズ）に適用されます。目標は、サンプルをビルドして書き込むために必要なすべてのツールが正しく設定されていることを確認することです。焦点は、「Copy Example」テンプレートを使用してアプリケーションを作成し、ビルドして Nordic チップ開発ボードに書き込む方法を学ぶことです！

- VS Code で、nRF Connect 拡張機能アイコンをクリックしてください。Welcome ビューで、Create New Application をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blinky.png" style={{width:600, height:'auto'}}/></div>

- 検索バーに blinky と入力し、以下に示すように 2 番目の Blinky サンプル（パス zephyr/samples/basic/blinky）を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blinky2.png" style={{width:600, height:'auto'}}/></div>

Blinky サンプルは、開発ボード上の LED1 を継続的に点滅させます。
最初のアプリケーションは Blinky サンプルに基づいています。Blinky サンプルは nRF Connect SDK の Zephyr モールドブロックから派生しているため、サンプルパスに zephyr という名前が表示されます：zephyr\samples\basic\blinky。

#### XIAO nRF54L15 ボードの追加

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


開始するには、**GitHub リンクからリポジトリをクローン**してください `git clone https://github.com/Seeed-Studio/platform-seeedboards.git` をお好みのローカルフォルダーに。クローンしたら、`platform-seeedboards/zephyr/` ディレクトリに移動してください。**この `zephyr` フォルダーのパスを覚えておいてください**；

VS Code で nRF Connect 用にボードを設定するには、以下の手順に従ってください：

- VS Code を開き、Settings に移動してください。

- 検索ボックスに nRF Connect と入力してください。


- Board Roots設定項目を見つけて、settings.jsonの編集をクリックします。

- ダウンロードしたXIAO nRF54L15ボードファイルの`zephyr`パスをboardRoots配列に追加します。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config1.jpg" style={{width:600, height:'auto'}}/></div> -->


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config_new.jpg" style={{width:600, height:'auto'}}/></div>

- アプリケーションビューで、アプリケーション名の下にあるAdd Build Configurationをクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config3.png" style={{width:600, height:'auto'}}/></div>

- Board targetでXIAO nRF54L15のモデルを選択し、Base configuration filesでデフォルトのprj.configファイルを選択し、最後に`Generate and Build`をクリックしてファイルをビルドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/config2.jpg" style={{width:600, height:'auto'}}/></div>

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

このコマンドは現在のPowerShellセッションの実行ポリシーをバイパスし、Chocolateyをインストールします。インストール後、PowerShellウィンドウを閉じて再度開いてください（引き続き管理者として実行）。

**4.OpenOCDをインストール：**
- 新しいPowerShellウィンドウ（管理者として）で、以下を入力します：
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

- 画面の指示に従ってください。macOSユーザーパスワードの入力が必要な場合があります。インストール後、ターミナルで促されたコマンドを実行してHomebrewをPATH環境変数に追加してください`（例：eval "$(/opt/homebrew/bin/brew shellenv)"）`。その後、ターミナルを閉じて再度開いてください。

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
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn12.png" style={{width:600, height:'auto'}}/></div>

- `west flash`コマンドを入力するだけです。デバイスにフラッシュするには、単純にwest flashコマンドを入力します。赤でハイライトされたパスは、コンパイルされた.elfファイルの場所を示しています。この同じパスを使用して対応する.hexファイルを見つけることができ、これはJ-Linkデバッガーでのプログラミングに適しています。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn13.png" style={{width:600, height:'auto'}}/></div>

:::tip
west flashエラーが発生した場合、VS CodeのCMakeプラグインとの競合があることを意味し、CMakeプラグインを削除する必要があります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:600, height:'auto'}}/></div>
:::
#### LEDを点灯させる

Seeed Studio XIAO nRF54L15 Senseにプログラムを正常に書き込むと、ボード上のユーザーインジケーターが緑色の光で絶え間なく点滅しているのを見ることができます。あなたの手元でも同じ表示効果が得られれば、成功したことを意味します！🎊

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

#### nRF Connect SDK内部の詳細な理解
nRF Connect SDKを真にマスターするには、その構成要素を内側から理解する必要があります。以下のコースに飛び込んで知識を向上させましょう：

- [**nRF Connect SDK Fundamentals**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)

- [**nRF Connect SDK Intermediate**](https://academy.nordicsemi.com/courses/nrf-connect-sdk-intermediate/)

- [**nRF Connect Vscode**](https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html)

</Steppers>


## バッテリー駆動ボード
XIAO nRF54L15には内蔵の電源管理チップがあり、バッテリーを使用してXIAO nRF54L15を独立して電源供給したり、XIAO nRF54L15のUSBポートを通じてバッテリーを充電したりできます。

XIAOにバッテリーを接続したい場合は、認定された充電式3.7Vリチウムバッテリーの購入をお勧めします。バッテリーをはんだ付けする際は、正極と負極を区別するよう注意してください。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_connect.jpg" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:500, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>バッテリー接続回路図</em></p>
</div>

**バッテリー使用に関する注意事項：**

1. 仕様に適合した認定バッテリーを使用してください。
2. XIAOはバッテリーを使用しながらデータケーブルでコンピューターデバイスに接続できます。XIAOには内蔵回路保護チップがあるため安全です。
3. XIAO nRF54L15はバッテリー駆動時にはLEDが点灯しません（特定のプログラムを書いていない限り）。LEDの状態でXIAO nRF54L15が動作しているかどうかを判断しないでください。プログラムによって合理的に判断してください。

同時に、バッテリー充電用の赤いインジケーターライトを設計し、インジケーターライトの表示を通じてユーザーに現在のバッテリーの充電状態を知らせます。

<!-- 1. When XIAO nRF54L15 is not connected to the battery, the red light comes on when the Type-C cable is connected and goes off after 30 seconds.
2. The red light flashes when the battery is connected and the Type-C cable is connected for charging.
3. When connecting Type-C to charge the battery fully, the red light turns off. -->

:::caution
はんだ付け時に正極と負極をショートさせてバッテリーと機器を焼損させないよう注意してください。
:::


### バッテリー電圧検出

XIAO nRF54L15は、TPS22916CYFPRロードスイッチを使用してバッテリー電力測定を効率的に管理することを中心としたバッテリー電圧検出機能を統合しています。このガイドでは、バッテリー検出のソフトウェア実装の分析**（特にmain.cコード）**に焦点を当て、Zephyr NCS SDKの複雑さを避けて、PlatformIO環境でこの機能を簡単にデプロイして使用する方法を案内します。


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/battery_A.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>バッテリー検出回路図</em></p>
</div>

TPS22916CYFPRチップの機能：
- これは、必要に応じてバッテリー電圧のオン・オフを制御するインテリジェント電源スイッチです。バッテリー電圧を測定する必要がある場合はオンになり、バッテリーを分圧回路に接続します。測定する必要がない場合はオフになり、接続を切断します。

- この機能は何に役立つのでしょうか？
このオンデマンドスイッチング機構により、チップは不要な電流消費を大幅に削減し、バッテリー寿命を効果的に延長します。後続の分圧回路とnRF54L15のADC（アナログ-デジタル変換器）と組み合わせることで、XIAO nRF54L15はバッテリーの残量を正確に監視でき、IoTデバイスなどのバッテリー駆動、低消費電力アプリケーションに重要な範囲最適化を提供します。
:::note
以下のサンプルコードはPlatformIO用に設計されていますが、nRF Connect SDKとも互換性があります。

PlatformIOでXIAO nRF54L15を使用する
PlatformIOでXIAO nRF54L15を使用したい場合は、このチュートリアルを参照して設定してください：[XIAO nRF54L15 PlatformIO設定](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_with_platform_io/)。

nRF Connect SDKでXIAO nRF54L15を使用する
nRF Connect SDKでこのコードを使用するには、以下の3つのファイル`main.c`、`prj.conf`、`app.overlay`を移植する必要があります
[XIAO nRF54L15 PlatformIO Configuration](http://localhost:3000/xiao_nrf54l15_sense_getting_started/#power-consumpitons-code-example-for-xiao-nrf54l15-platformio)
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


## プログラムを書き込むためのJ-Linkピンへのアクセス

**必要なハードウェア**

- [Seeed Studio XIAO nRF54L15](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Jlink](https://www.segger.com/downloads/jlink/)

:::tip
nRF54L15モデルボードのサポートを受けるには、最新バージョンのJ-Linkをダウンロードする必要があります。
:::

**必要なソフトウェア**

ウェブサイトから[Segger](https://www.segger.com/downloads/jlink/)ソフトウェアをダウンロードする必要があります。

- **ステップ 1.** Jlinkを使用して以下のピンを接続します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link.png" alt="pir" width={250} height="auto" /></p>

- **ステップ 2.** J-Flashを起動してnRF54L15を検索し、新しいプロジェクトを作成します：


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link4.jpg" alt="pir" width={700} height="auto" /></p>


- **ステップ 3.** 「Target」をクリックして「Connect」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link3.jpg" alt="pir" width={700} height="auto" /></p>

- **ステップ 4.** binまたは[hexファイル](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/zephyr.hex)をソフトウェアにドラッグします。その後、F4とF5をその順序で押します。再フラッシュが完了します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/j_link2.jpg" alt="pir" width={700} height="auto" /></p>



## オンボードキー

XIAO nRF54L15(Sense)には、デバイスの動作とファームウェアプログラミングにおいて重要な役割を果たす2つの重要な物理ボタンが搭載されています：**リセットボタン**と**ユーザーボタン**です。これらの機能を理解することは、日常使用とファームウェア更新において不可欠です。

---
### リセットボタン

リセットボタンは、デバイスでハードリセット操作を実行するために使用されます。

* **機能：**
    * **強制再起動：** このボタンを押すと、現在のデバイス操作がすべて即座に中断され、電源サイクルと同様にデバイスが再起動します。
    * **スタックしたプログラムの解決：** デバイスで実行中のプログラムがクラッシュ、無限ループに入る、または応答しなくなった場合、リセットボタンを押すことが正常な動作状態に強制的に戻す最も迅速な方法です。
    * **ファームウェアへの影響なし：** リセット操作は、デバイスにすでにプログラムされているファームウェアを消去または変更しません。現在実行中のアプリケーションを単純に再起動するだけです。
* **使用例：**
    * 開発/デバッグ中にプログラムを迅速に再実行する。
    * デバイスが予期しない動作を示したり、スタックしたりした場合。

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
PlatformIOでXIAO nRF54L15を使用したい場合は、このチュートリアルを参照して設定してください：[XIAO nRF54L15 PlatformIO設定](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_with_platform_io/)。

nRF Connect SDKでXIAO nRF54L15を使用する
nRF Connect SDKでこのコードを使用するには、以下の3つのファイル`main.c`、`prj.conf`、`app.overlay`を移植する必要があります
[XIAO nRF54L15 PlatformIO Configuration](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#power-consumpitons-code-example-for-xiao-nrf54l15-platformio)
:::


<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-button" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />



キーを押すたびにライトが一度点灯します
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/button.gif" style={{width:400, height:'auto'}}/></div>


## XIAO nRF54L15の消費電力コード例（PlatformIO）

以下のサンプルコードはPlatformIO用に設計されていますが、nRF Connect SDKとも互換性があります。

PlatformIOでXIAO nRF54L15を使用する
PlatformIOでXIAO nRF54L15を使用したい場合は、このチュートリアルを参照して設定してください：[XIAO nRF54L15 PlatformIO設定](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_with_platform_io/)。

nRF Connect SDKでXIAO nRF54L15を使用する
nRF Connect SDKでこのコードを使用するには、以下の3つのファイル`main.c`、`prj.conf`、`app.overlay`を移植する必要があります

**main.cの移植**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/d1.jpg" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/f1.jpg" style={{width:600, height:'auto'}}/></div>

**prj.conf/app.overlayの移植、プロジェクト設定を行う際に以下のファイルが表示される場合があります：**

- prj.conf：このファイルは、特定の周辺機器や機能を有効にするなど、プロジェクトのKconfig設定オプションを設定するために使用されます。

- app.overlay：このファイルは、ピン機能の変更やハードウェア設定の調整など、Device Tree設定を変更するために使用されます。

以下のコード例にこれらの個別ファイルが含まれている場合、それらの内容をnRF Connect SDKプロジェクトにマージする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/h1.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/g1.jpg" style={{width:600, height:'auto'}}/></div>

**置換位置**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/replace.jpg" style={{width:600, height:'auto'}}/></div>


- `app.overlay ファイル:` ボードフォルダに配置してください。

- `prj.conf ファイル:` プロジェクトのルートフォルダに配置してください。

- `main.c ファイル:` src フォルダに配置してください。

### Bluetooth 接続

このセクションでは、デバイスが Bluetooth Low Energy (BLE) ペリフェラルとしてアクティブにアドバタイジングしている間の消費電力特性について詳しく説明します。デバイスはカスタム BLE サービスを実装し、他のセントラルデバイスが接続して相互作用できるようにします。

以下のグラフは、デバイスが継続的にアドバタイジングしている際の典型的な消費電力プロファイルを示しています：

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/7.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>BLE アドバタイジング中のデバイス消費電力</em></p>
</div>

グラフに示されているように、デバイスは各アドバタイジングイベントに対応する周期的な電流ピークを示し、その後により低い電流消費期間が続きます。アドバタイジング中の平均消費電力は System Off モードよりも高く、ブロードキャストに必要なアクティブな無線操作を反映しています。

---
#### BLE アドバタイジングコード例

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-ble" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


以下は BLE アドバタイジング中の消費電力をテストするために使用されたコードです：

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

デバイスの極めて低い消費電力を実現するため、**System Off** モードでの消費電力テストを実施しました。System Off モードは Zephyr OS が提供するディープスリープモードで、ほとんどのペリフェラルと CPU がオフになり、必要最小限のウェイクアップソース（GPIO 割り込みなど）のみを保持して消費電力を最小化します。

以下のグラフは、デバイスが System Off モードに入った後の典型的な消費電力カーブを示しています：

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/6.png" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>System Off モードでのデバイス消費電力</em></p>
</div>

グラフに示されているように、System Off モードに入った後、消費電力は大幅に削減され、マイクロアンペアレベルのみを維持し、バッテリー寿命を大幅に延長します。`sw0` ボタンが押されると、デバイスは System Off モードから復帰し、再起動します。

---

#### 消費電力コード例

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-lowpower" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />




以下は、上記で説明したSystem Offモードでの消費電力をテストするために使用されるコードです：

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

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
