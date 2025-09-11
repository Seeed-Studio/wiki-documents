---
description: reComputerJ2021 | J202
title: J202 キャリアボード
keywords:
  - Edge 
  - Jetson
  - reComputer JetPack™_OS_インストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J2021_J202_Flash_Jetpack
last_update:
  date: 05/15/2025
  author: Youjiang

no_comments: false # for Disqus

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer J202 の使い方


<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/carrier_board-Photoroom.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/recomputer-j202-carrier-board-for-jetson-nano-xavier-nx-without-power-adapter-p-5435.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
  </a>
</div>

reComputer J202 は、NVIDIA® Jetson Xavier NX™ キャリアボードとほぼ同じ設計と機能を持ち、Jetson Nano/Xavier NX/TX2 NX モジュールと完全に互換性があります。4つの USB 3.2 Gen 2 ポート、M.2 Key E（WiFi用）、M.2 Key M（SSD用）、RTC、CAN、Raspberry Pi GPIO 40ピンなどを備えています。

## 特徴 

- **完全な適合性:** Jetson Nano/Xavier NX/TX2 NX (260ピン SODIMM) 用に設計。
- **豊富な周辺機器:** 高性能で安定性の高い USB 3.1 ポート（4つ）、M.2 Key E（WiFi用）、M.2 Key M（SSD用）、RTC、CAN、Raspberry Pi GPIO 40ピンなどを搭載。
- **高い汎用性:** 複雑な AI グラフィックアプリケーションに適応。
- **包括的な認証:** FCC、CE、RoHS を含む。
- **柔軟なカスタマイズ:** J202 のオリジナル設計に基づき、アクセサリーモジュール、ロゴ、ハードウェアインターフェースの変更サービスを提供。

:::note

Jetson Nano は PCIe レーンが1つしかないため、モジュールが J202 キャリアボードに接続される場合、M.2 Key M（SSD用）のみを選択できます。

:::


## 仕様
<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <td colspan={2}>ストレージ</td>
      <td>1x M.2 Key M</td>
    </tr>
    <tr>
      <td rowspan={2}>ネットワーキング</td>
      <td>イーサネット</td>
      <td>1x RJ-45 ギガビットイーサネット (10/100/1000M)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E（WiFi/Bluetooth モジュール用）</td>
    </tr>
    <tr>
      <td rowspan={7}>I/O</td>
      <td>USB</td>
      <td>4x USB 3.1 Type-A (Xavier NX 用は 10Gbps、Nano 用は 5Gbps) <br/> 1x USB2.0 Type-C (デバイスモード)</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>2x CSI</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x HDMI 2.1, 1x DP</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1x ファンコネクタ</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>1x CAN (Nvidia Xavier シリーズ専用)</td>
    </tr>
    <tr>
      <td>多機能ポート</td>
      <td>1x 40ピン拡張ヘッダー <br/> 1x 12ピン制御および UART ヘッダー</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2ピン</td>
    </tr>
    <tr>
      <td colspan={2}>電源</td>
      <td>DC 12V/5A</td>
    </tr>
    <tr>
      <td rowspan={2}>機械的仕様</td>
      <td>寸法 (W x D)</td>
      <td>100mm x 80mm</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td>デスク、壁掛け</td>
    </tr>
    <tr>
      <td colspan={2}>動作温度</td>
      <td>10℃~60℃</td>
    </tr>
  </tbody>
</table>
</div>

## ハードウェア概要

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_1.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_2.jpg"/></div>

## 対応モジュール

- [NVIDIA® Jetson Nano™ 4GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Nanotm-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 8GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 16GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-16GB-1.html)

## JetPack のフラッシュ

:::danger
JetPack をフラッシュすると、デバイス上のすべてのデータが消去されます。慎重に進めてください。

完全なシステムを購入した場合（キャリアボードのみではなく）、JetPack オペレーティングシステムがプリインストールされており、すぐに起動して使用できます。ただし、新しいオペレーティングシステムをインストールしたい場合は、以下のチュートリアルに従うことができます。
:::

以下の内容では、JetPack 4.6.1 システムを J2021 にフラッシュする方法を説明します。このプロセスを参考にして、他のデバイスに希望する JetPack バージョンをフラッシュすることができます。

:::info
異なる [Jetson モジュール](#supported-module) の対応システムバージョンを確認するには、[こちら](https://developer.nvidia.com/embedded/jetson-linux-archive) を参照してください。
:::

### 必要条件

- **ホストコンピュータ**（**Ubuntu 18.04 OS または Ubuntu 20.04 OS**）
- reComputer J1020/J2021/J2022 または J202 キャリアボード + Nvidia Jetson モジュール
- 9V-12V/5A 電源
- USB Type-C ケーブル
- ジャンパーピンまたはメス-メスのデュポンワイヤー

### 強制リカバリモードに入る

インストール手順に進む前に、reComputer が強制リカバリモードにあることを確認する必要があります。

**ステップ 1.** 開始する前に、reComputer の電源を切断してください。

**ステップ 2.** リカバリモードに入るには、ジャンパーを使用して **FC REC** と **GND** を接続します。

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">ボタンヘッダー</th>
      <th align="center">説明</th>  
      <th align="center">ボタンヘッダー</th>
      <th align="center">説明</th>
    </tr>
    <tr>
      <td rowSpan={6}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/J202-b.png" /></div></td>
      <td align="center">1</td>
      <td align="center">PWR BTN</td>
      <td align="center">7</td>
      <td align="center">AUTO ON</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="center">GND</td>
      <td align="center">8</td>
      <td align="center">DISABLE</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td align="center">FC REC</td>
      <td align="center">9</td>
      <td align="center">UART TXD</td>
    </tr>
    <tr>
      <td align="center">4</td>
      <td align="center">GND</td>
      <td align="center">10</td>
      <td align="center">UART RXD</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td align="center">SYS RET</td>
      <td align="center">11</td>
      <td align="center">LED +</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td align="center">GND</td>
      <td align="center">12</td>
      <td align="center">LED -</td>
    </tr>
  </tbody></table>

**ステップ 3.** reComputer の左側に 12V/5A DC ケーブルを接続して電源を入れ、右側に Type-C ケーブルを使用して Linux ホスト PC に接続します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

**ステップ 4.** Linux ホスト PC の画面で、マウスを右クリックしてターミナルを開き、コマンド `lsusb` を入力します。返された内容に `ID 0955:xxxx NVidia Corp.` が含まれている場合、J202 キャリアボードが強制リカバリモードにあることを意味し、次の操作に進むことができます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::note
- NVIDIA® Jetson Nano™ の場合: 0955:7f21 NVidia Corp
- NVIDIA® Jetson Xavier™ NX の場合: 0955:7e19 NVidia Corp
:::

### Jetson へのフラッシュ

JetPack OS を reComputer J2021 にフラッシュする方法は 2 つあります。NVIDIA Jetson 初心者には NVIDIA SDK Manager を強くお勧めします。

- [NVIDIA SDK Manager を使用した JetPack OS のフラッシュ](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [コマンドラインを使用した JetPack OS のフラッシュ](#flashing-to-emmc-with-command-line)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="SDK Manager" label="SDK Manager">

NVIDIA SDK Manager は、開発者向けソフトウェアをバンドルし、NVIDIA SDK のエンドツーエンドの開発環境セットアップソリューションを提供するオールインワンツールです。そのため、初心者に推奨されます。

:::note
このチュートリアルでは、ホストコンピュータに Ubuntu 18.04 LTS オペレーティングシステムを使用し、このガイドでインストールする JetPack バージョンは 4.6.1 です。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

**ステップ 1.** Linux ホスト PC に NVIDIA SDK Manager をインストールする

まず、sdkmanager を使用するには <a href="https://developer.nvidia.com/login" target="_blank">NVIDIA アカウント</a> を作成する必要があります。その後、Linux ホスト PC で NVIDIA 公式ウェブサイトから <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank">NVIDIA SDK Manager</a> をダウンロードします。

**ステップ 2.** NVIDIA SDK Manager を開いてログインする

Linux ホスト PC の画面で、マウスを右クリックしてターミナルを開きます。その後、以下のコマンドを入力して SDK Manager を起動します。

```bash
sdkmanager
```

:::note
NVIDIA SDK Manager を初めて使用する場合、以前に登録した NVIDIA アカウントでログインするよう促すウェブページが表示されます。
:::

**ステップ 3.** 対象デバイスを選択する

すでに reComputer J2021 を接続しているため、ハードウェアデバイスを選択するウィンドウが表示されます。

reComputer J2021は**NVIDIA Jetson Xavier 8GBモジュール**を搭載しているため、`Jetson Xavier NX`（最初のオプション）を選択できます。

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/select_target_device.png" />
</div> -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/1.png"/></div>

:::info
SDK Managerのバージョンによってインターフェースが若干異なる場合があります。実際の状況に応じて適切なオプションを選択してください。
:::

最初の画面では、以下の選択肢があります：

- **Product Category**パネルで**Jetson**を選択する必要があります。
- **Hardware Configuration**パネルでは、**Host Machine**を選択しないことを推奨します。これを選択すると、現在のUbuntuホストにNVIDIAコンポーネントをインストールするのに時間がかかります。ただし、必要に応じて選択することもできます。
- **Target Operating System**パネルでは、異なる**オペレーティングシステム**と**JetPackバージョン**を選択できます。ただし、JetPackのバージョンには注意してください。異なるモジュールは異なるタイプのJetPackをサポートする場合があります（例：`JetPack 4.6.1`、`JetPack 5.1.x`など）。ここでは**JetPack 4.6.1**を推奨します。
- **Additional SDKs**では、eMMCのストレージ容量が16GBしかないため、ここでDeepStreamをインストールするとメモリ不足になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

続行をクリックして次のステップに進みます。

**ステップ 4.** 必要なコンポーネントを確認する

**Details and License**から、ホストコンポーネントとターゲットコンポーネントのパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのみをインストールする場合は、SDKコンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

:::tip
インストールするコンポーネントを選択する際には、使用される容量に注意してください。内蔵eMMCのサイズは16GBしかないため、実際のニーズに応じてこのスペースを賢く割り当てて使用してください。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
実際のテストでは、SDKコンポーネントの完全セットをインストールした後、eMMCの空き容量は約500MBしか残りません。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
容量不足の問題を解決する方法については、以下を参照してください：

https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space .
:::

SDK Managerがすべてのファイルをデフォルトのパス以外の場所にダウンロードするようにしたい場合は、画面下部にある**Download & Install Options**に移動し、使用したいパスを選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

続行を選択して次のステップに進みます。

**ステップ 5.** システムをインストールする

インストールが始まる前に、SDK Managerは`sudo`パスワードの入力を求めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

しばらくすると、reComputerの新しいシステムを設定するよう求められます。手動でリカバリモードに強制的に移行したため、ここでは`Manual setup: set the target to Force Recovery Mode via manual operations`を選択します。同時に、デフォルトの**Pre-Config**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

その後、新しいJetsonシステムの名前とパスワードをreComputerに入力する必要があります。これは自分で設定します。

準備ができたら、`Flash`をクリックして続行します。

画面にはソフトウェアのダウンロードとインストールの進行状況が表示されます。インストールが完了するまでしばらくお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

**（オプション）ステップ 6.** SDKコンポーネントをインストールする

前の**ステップ 4**でコンポーネントのインストールをチェックした場合、このステップを実行する必要があります。

しばらくすると、NVIDIA SDK Managerに新しいウィンドウが表示され、IPアドレスを介してデバイスに接続する必要があることが通知されます。これはシステムがすでにインストールされており、コンポーネントのインストールが進行することを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この場合、**ジャンパーを抜き取って**reComputerを再起動します。その後、reComputerをHDMI経由でモニターに接続し、**ステップ 4**で入力したパスワードを入力してメインインターフェースにログインします。

この時点で、reComputerをLinuxホストPCと同じLANに接続し、`ifconfig`コマンドを使用してJetsonの**IPアドレス**を確認する必要があります。

LinuxホストPCに戻り、先ほど取得したIPアドレスを入力します。NVIDIA SDK ManagerはJetsonデバイスに接続し、次のSDKコンポーネントのインストールを完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

以下のウィンドウが表示されたら、インストールが完了しています。Jetsonの使用を開始するか、以下の手順に従って新しいシステムの基本設定を完了してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

:::note
ジャンパーを抜き取り、強制リカバリモードを終了してからシステムに再電源を入れることを忘れないでください。
:::
</TabItem>

<TabItem value="Command Line" label="Command Line">

NVIDIA Linux Driver Package (BSP) をカスタマイズできる自由度のおかげで、Linux の知識があるユーザーにとって、コマンドラインを使用して JetPack OS をフラッシュするのは非常に簡単です。

**ステップ 1.** 適切な NVIDIA Linux Driver Package をダウンロードする

**Linux ホスト PC** で、ブラウザを開き、<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a> にアクセスします。まず、Jetson Linux のバージョンが reComputer Jetson モジュールをサポートしているか確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack2.png" /></div>

適切なバージョンを見つけたら、ダウンロードページに移動します。「L4T Driver Package (BSP)」および「Sample Root Filesystem」を見つけてクリックし、ドライバーファイルをダウンロードします。ファイル名は `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` および `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2` のようになります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

例として、JetPack 5.0.2 の一部として含まれており、Jetson Xavier NX モジュールをサポートする NVIDIA L4T 35.1 バージョンを選択します。ファイル名は以下の通りです：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

:::info
JetPack 4.6.2 をサポートする NVIDIA L4T 32.7.2 など、他のバージョンを選択することもできます。
:::

**ステップ 2.** パッケージファイルを解凍し、コマンドラインで Rootfs を組み立てる

Linux ホスト PC で、ダウンロードしたパッケージファイルを保存するフォルダを見つけます。そのフォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを使用してファイルを解凍し、rootfs を組み立てます：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::note
`${}` はファイル名を指定する場所です。
:::

**NVIDIA L4T 35.1** の例では、ダウンロードしたファイルは `/Desktop/L4T_Drivers` に保存されているため、`/Desktop/L4T_Drivers` パスでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを実行します。

```sh
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

出力は以下のようになります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

**ステップ 3.** システムを reComputer にフラッシュする

すでに reComputer J2021 をリカバリーモードにし、モジュールが Jetson Xavier NX であるため、以下のコマンドを実行してシステムを reComputer に直接フラッシュできます：

```sh
sudo ./flash.sh jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

:::note
L4T のフラッシュには約 10 分かかります。ホストコンピュータが遅い場合はさらに時間がかかることがあります。
:::

この時点で、ジャンパーを取り外し、reComputer の電源を再投入して使用できます。

</TabItem>


<TabItem value="With Seeed BSP" label="Seeed BSP を使用する場合">

:::info

最近、NVIDIA は DRAM モデルを更新しました。Seeed は、このモジュール更新に対応する新しいファームウェアをリリースしました。

公式 NVIDIA イメージをフラッシュする過程で、DP 信号が原因でシステムがフリーズする場合（フラッシュできず、NVIDIA インターフェースで停止する現象）、更新されたモジュールを購入したことを意味します。この場合、現在提供されているファクトリーイメージをフラッシュする必要があります。

現在のファクトリーイメージと元のイメージの違いは以下の通りです：
1. DP 設定が変更されています（一部のモジュールで DP 信号が原因でシステムがフリーズするのを防ぐため）。
2. SD カードスロットがデフォルトで有効状態に設定されており、SD カードスロット機能を有効にするためにデバイスツリーを追加で変更する必要がありません。
3. イメージには Jetpack 4.6.6 が含まれています。
4. 最新の PCN が組み込まれています。

:::

### ステップ 1. 適切な NVIDIA Linux Driver Package をダウンロードする

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack バージョン</th>
      <th>ダウンロードリンク</th>
      <th>SHA265</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.6.6</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV7LGr3R0VRDsgfFibgOgfsBam44-zEqOrQJoUKpHXEmRw?e=gJEHhU" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>138547DF526D19F737DEC27856C078217D15FE9160F2669DF57823916BAA260E</td>
    </tr>
  </tbody>
</table>
</div>

### ステップ 2. パッケージファイルを解凍し、コマンドラインで Rootfs を組み立てる

Linux ホスト PC で、ダウンロードしたパッケージファイルを保存するフォルダを見つけます。そのフォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを使用してファイルを解凍し、rootfs を組み立てます：

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### ステップ 3. システムを reComputer にフラッシュする

すでに reComputer J1010 をリカバリーモードにし、モジュールが Jetson Nano であるため、以下のコマンドを実行してシステムを reComputer に直接フラッシュできます：

```bash
sudo ./nvmflash.sh --showlogs
```

</TabItem>


</Tabs>

## トラブルシューティング

### NVIDIA SDK Manager を使用したインストールのトラブルシューティング

さまざまなインストールエラーには多くの原因があります。以下は一般的なインストール問題のチェックリストで、壊れたインストールから復旧するのに役立つかもしれません。

1. サマリーテーブルを確認して、どのコンポーネントが失敗したかを特定します。

    a. ステータスが「エラー」となっているグループを展開します。

    b. 失敗したコンポーネントを見つけたら、インストールエラーの右側にある詳細アイコンをクリックして、ターミナルタブにリダイレクトします。そこに正確なエラーが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. エラーが壊れた apt リポジトリや不足している前提条件などの環境問題に関連している場合は、それを手動で修正し、「Retry Failed Items」ボタンをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. インストールの再試行は、以下の2つの方法でも可能です：

    a. **Flashing to eMMC with SDK Manager -- Step 3** から、「Repair/Uninstall」ボタンを使用して「Manage NVIDIA SDKs」ページに移動します。必要に応じて、「Broken」ステータスのSDKを展開し、関連する部分（ホストまたはターゲット）に対して「Repair」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. **Flashing to eMMC with SDK Manager -- Step 3** で必要なSDKを選択し、再度インストールを実行します。

5. 最後に、関連するSDKをアンインストールして再インストールを試みてください。

### コマンドラインを使用したインストールのトラブルシューティング

コマンドラインによるインストール方法は比較的簡単ですが、フォースリカバリーモードを使用するシナリオではエラーが発生しやすいです。

**Flashing to eMMC with command-line -- Step 2** で以下のエラーが発生した場合、Jetson-202 キャリアボードをフォースリカバリーモードに正しく移行できなかった可能性があります。特に注意してください。Jetson-202 キャリアボードが電源オンの状態でフォースリカバリーモードに入ることは無効です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

**Flashing to eMMC with command-line -- Step 3** でシステムに入れず、起動時のコマンドライン表示で止まってしまう場合、フォースリカバリーモードを正しく終了できていない可能性があります。同様に、Jetson-202 キャリアボードが電源オンの状態でジャンパーを外してフォースリカバリーモードを終了することは無効です。これらはすべて電源オフの状態で行う必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
より多くのストレージスペースが必要な場合、SDカードを使用して容量を拡張するか、システムをSDカードに書き込むことができます。推奨ソリューションについては、[Flash System on SD card](/ja/J101_Enable_SD_Card) を参照してください。
:::

## リソース

[reComputer J202x データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202x-datasheet.pdf)

[reComputer J202x キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J202x 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio エッジAI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson デバイスワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>