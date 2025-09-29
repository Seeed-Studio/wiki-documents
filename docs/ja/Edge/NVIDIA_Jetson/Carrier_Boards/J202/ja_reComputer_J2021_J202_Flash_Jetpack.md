---
description: reComputerJ2021 | J202
title: J202 キャリアボード
keywords:
  - Edge 
  - Jetson
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J2021_J202_Flash_Jetpack
last_update:
  date: 08/27/2024
  author: Youjiang

no_comments: false # for Disqus

---

# reComputer J202 の使用開始

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/carrier_board-Photoroom.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/recomputer-j202-carrier-board-for-jetson-nano-xavier-nx-without-power-adapter-p-5435.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
  </a>
</div>

reComputer J202 は NVIDIA® Jetson Xavier NX™ キャリアボードとほぼ同じ設計と機能を持ち、Jetson Nano/Xavier NX/TX2 NX モジュールと完璧に動作し、4x USB 3.2 gen 2 ポート、WIFI 用 M.2 key E、SSD 用 M.2 Key M、RTC、CAN、Raspberry Pi GPIO 40 ピンなどで構成されています。

## 特徴

- **完璧な適合性：** Jetson Nano/Xavier NX/TX2 NX（260 ピン SODIMM）向けに設計。
- **豊富な周辺機器：** USB 3.1 ポート（4x）、WIFI 用 M.2 key E、SSD 用 M.2 Key M、RTC、CAN、Raspberry Pi GPIO 40 ピンなどで構成された高性能安定性。
- **高い汎用性：** 複雑な AI グラフィカルアプリケーションに適用。
- **包括的な認証：** FCC、CE、RoHS を含む。
- **柔軟なカスタマイゼーション：** J202 オリジナル設計に基づいたアクセサリモジュール、ロゴ、ハードウェアインターフェース変更サービスを提供。

:::note

Jetson Nano は PCIe レーンが 1 つしかないため、モジュールが Jetson Nano を使用して J202 キャリアボードに接続する場合、SSD 用の M.2 Key M のみを選択できます。

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
      <td rowspan={2}>ネットワーク</td>
      <td>イーサネット</td>
      <td>1x RJ-45 ギガビットイーサネット（10/100/1000M）</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E（WiFi/Bluetooth モジュール用）</td>
    </tr>
    <tr>
      <td rowspan={7}>I/O</td>
      <td>USB</td>
      <td>4x USB 3.1 Type-A（Xavier NX で 10Gbps、Nano で 5Gbps）<br/> 1x USB2.0 Type-C（デバイスモード）</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>2x CSI</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x HDMI 2.1、1x DP</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1x ファンコネクタ</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>1x CAN（Nvidia Xavier シリーズのみ）</td>
    </tr>
    <tr>
      <td>多機能ポート</td>
      <td>1x 40 ピン拡張ヘッダー<br/> 1x 12 ピン制御・UART ヘッダー</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 ピン</td>
    </tr>
    <tr>
      <td colspan={2}>電源</td>
      <td>DC 12V/5A</td>
    </tr>
    <tr>
      <td rowspan={2}>機械的仕様</td>
      <td>寸法（幅 x 奥行き）</td>
      <td>100mm x 80mm</td>
    </tr>
    <tr>
      <td>設置</td>
      <td>デスク、壁面取り付け</td>
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

## サポートされるモジュール

- [NVIDIA® Jetson Nano™ 4GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Nanotm-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 8GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-1.html)
- [NVIDIA® Jetson Xavier™ NX 16GB](https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-16GB-1.html)

## JetPackのフラッシュ

:::danger
JetPackをフラッシュすると、デバイス上のすべてのデータが消去されます。慎重に進めてください。

キャリアボードのみではなく完全なシステムを購入した場合、JetPackオペレーティングシステムがプリインストールされており、起動してすぐに使用できます。ただし、お好みに応じて以下のチュートリアルに従って新しいオペレーティングシステムをインストールすることもできます。
:::

以下の内容では、J2021にJetPack 4.6.1システムをフラッシュする方法を説明します。このプロセスを参考にして、他のデバイスに希望するJetPackバージョンをフラッシュできます。

:::info
異なる[Jetsonモジュール](#supported-module)でサポートされるシステムバージョンを確認するには、[こちら](https://developer.nvidia.com/embedded/jetson-linux-archive)を参照してください。
:::

### 前提条件

- **Ubuntu 18.04 OSまたはUbuntu 20.04 OS**を搭載した**ホストコンピュータ**
- reComputer J1020/J2021/J2022またはJ202キャリアボード + Nvidia Jetsonモジュール
- 9V-12V/5A電源
- USB Type-Cケーブル
- ジャンパーピンまたはメス-メスデュポンワイヤー

### 強制リカバリモードへの入り方

インストール手順に進む前に、reComputerが強制リカバリモードになっていることを確認する必要があります。

**ステップ1.** 開始する前に、reComputerの電源を切断する必要があります。

**ステップ2.** リカバリモードに入るには、ジャンパーを使用して**FC REC**と**GND**を接続する必要があります。

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

**ステップ 3.** reComputerの左側にある12V/5A DCケーブルでreComputerに電源を供給し、Type-CケーブルでreComputerの右側をLinux Host PCに接続します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

**ステップ 4.** Linux host PCの画面で、マウスを右クリックしてターミナルを開き、コマンド `lsusb` を入力します。返される内容に `ID 0955:xxxx NVidia Corp.` が含まれている場合、J202 Carrier Boardが強制リカバリモードになっていることを意味し、後続の操作に進むことができます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::note

- NVIDIA® Jetson Nano™の場合: 0955:7f21 NVidia Corp
- NVIDIA® Jetson Xavier™ NXの場合: 0955:7e19 NVidia Corp

:::

:::caution
Jetson-NanoのSPIインターフェースはデフォルトでGPIOと多重化されており、有効になっていません。有効にする方法については、[**このガイド**](/ja/enable_spi_interface_on_jetsonnano)を参照してください。
:::

### Jetsonへのフラッシュ

reComputer J2021にJetPack OSをフラッシュする方法は2つあります。NVIDIA Jetsonの初心者には、NVIDIA SDK Managerを強く推奨します：

- [NVIDIA SDK Managerを使用したJetPack OSのフラッシュ](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [コマンドラインを使用したJetPack OSのフラッシュ](#flashing-to-emmc-with-command-line)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="SDK Manager" label="SDK Manager">

NVIDIA SDK Managerは、開発者ソフトウェアをバンドルし、NVIDIA SDKのエンドツーエンドの開発環境セットアップソリューションを提供するオールインワンツールです。そのため、初心者に推奨されます。

:::note
 このチュートリアルでは、ホストコンピューターでUbuntu 18.04 LTS オペレーティングシステムを使用し、このガイドでインストールするJetpackバージョンは4.6.1です。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

**ステップ 1.**  Linux Host PCにNVIDIA SDK Managerをインストール

まず、sdkmanagerを使用するために<a href="https://developer.nvidia.com/login" target="_blank">NVIDIAアカウント</a>を作成する必要があります。次に、Linux Host PCでNVIDIA公式ウェブサイトから<a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank">NVIDIA SDK Manager</a>をダウンロードします。

**ステップ 2.**  NVIDIA SDK Managerを開いてログイン

Linux host PCの画面で、マウスを右クリックしてターミナルを開きます。次に、以下のコマンドを入力してSDK Managerを起動できます：

```bash
sdkmanager
```

:::note
NVIDIA SDK Managerを初めて使用する際、以前に登録したNVIDIAアカウントでログインするよう促すWebページがポップアップ表示されます。
:::

**ステップ 3.**  ターゲットデバイスを選択する

reComputer J2021をすでに接続しているため、ハードウェアデバイスを選択するウィンドウがポップアップ表示されます。

reComputer J2021には**NVIDIA Jetson Xavier 8GBモジュール**が搭載されているため、`Jetson Xavier NX`（最初のオプション）を選択できます。

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/select_target_device.png" />
</div> -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/1.png"/></div>

:::info
SDK Managerのバージョンによってインターフェースが若干異なる場合があることにご注意ください。実際の状況に基づいて適切なオプションを選択してください。
:::

最初の画面では、さらに多くの選択肢があります：

- Product Categoryパネルの**Jetson**を選択する必要があります。
- Hardware Configurationパネルでは、**Host Machineを選択しない**ことをお勧めします。これを選択すると、現在のUbuntuホスト用のNVIDIAコンポーネントのインストールにより多くの時間がかかります。必要に応じて選択できます。
- Target Operating Systemパネルでは、異なる**オペレーティングシステム**と**JetPackバージョン**を選択できます。ただし、JetPackのバージョンには注意してください。異なるモジュールは`JetPack 4.6.1`、`JetPack 5.1.x`などの異なるタイプのJetPackをサポートする場合があります。ここでは**JetPack 4.6.1**をお勧めします。
- Additional SDKsでは、eMMCのストレージ容量が16GBのみであるため、ここでDeepStreamをインストールするとメモリ不足になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

Continueをクリックして次のステップに進みます。

**ステップ 4.**  必要なコンポーネントを確認する

**Details and License**から、ホストコンポーネントとターゲットコンポーネントのパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのインストールのみが必要な場合は、SDKコンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

:::tip
インストールするコンポーネントを選択する際は、使用される容量に注意を払うことをお勧めします。内蔵eMMCのサイズは16GBのみです。実際のニーズに応じて、この容量を賢く配分して使用してください。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
実際のテストの結果、SDKコンポーネント一式をインストールした後、eMMC容量は約500MBしか残りません。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
容量不足の問題を解決する方法を確認したい場合は、以下を参照してください：

https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space .
:::

SDK Managerにすべてのファイルをデフォルトパス以外の場所にダウンロードさせたい場合は、画面下部にあるDownload & Install Optionsに移動し、使用したいパスを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

Continueを選択して次のステップに進みます。

**ステップ 5.** システムをインストールする

インストールが開始される前に、SDK Managerは`sudo`パスワードの入力を求めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

しばらくすると、reComputer用の新しいシステムをセットアップするよう求められます。手動でリカバリモードに強制的に入ったため、ここでは`Manual setup: set the target to Force Recovery Mode via manual operations`を選択します。同時に、デフォルトの**Pre-Config**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

その後、reComputerの新しいJetsonシステムの名前とパスワードを入力する必要があります。これは自分で設定します。

準備ができたら、`Flash`をクリックして続行します。

ディスプレイにはソフトウェアのダウンロードとインストールの進行状況が表示されます。インストールが完了するまで辛抱強くお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

**（オプション）ステップ 6.** SDKコンポーネントをインストールする

前の**ステップ 4**でコンポーネントのインストールにチェックを入れた場合、このステップを実行する必要があります。

しばらくすると、NVIDIA SDK Managerに新しいウィンドウがポップアップ表示され、IPアドレス経由でデバイスに接続する必要があることが示されます。これは、システムがすでにインストールされ、コンポーネントのインストールが進行されることを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この場合、**ジャンパーを抜いて**reComputerを再起動できます。次に、HDMI経由でreComputerをモニターに接続し、**ステップ 4**で入力したパスワードを入力して、メインインターフェースにログインする必要があります。

この時点で、reComputerをLinuxホストPCと同じLANに接続し、`ifconfig`コマンドを使用してJetsonの**IPアドレス**を確認する必要があります。

LinuxホストPCに戻り、先ほど取得したIPアドレスを入力します。NVIDIA SDK ManagerはJetsonデバイスへの接続を試行し、次のSDKコンポーネントのインストールを完了するために進行します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

以下のウィンドウが表示されると、インストールが完了しています。Jetsonの使用を開始するか、以下の手順に従って新しいシステムの基本設定を完了することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

:::note
システムに再度電源を投入する前に、必ずジャンパーを抜いて強制リカバリモードを終了してください。
:::
</TabItem>

<TabItem value="Command Line" label="Command Line">

BSP（NVIDIA Linux Driver Package）をカスタマイズする自由度のおかげで、コマンドラインを介してJetPack OSをフラッシュすることは、Linuxの知識ベースを持つユーザーにとって非常に簡単です。

**ステップ 1.** 適切なNVIDIA Linux Driver Packageをダウンロードする

**Linux ホストPC**で、ブラウザを開いて<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>にアクセスする必要があります。まず、Jetson Linuxのバージョンが私たちのreComputer Jetsonモジュールをサポートしているかどうかを確認する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack2.png" /></div>

適切なバージョンを見つけたら、クリックしてダウンロードページに移動します。「L4T Driver Package (BSP)」と「Sample Root Filesystem」を見つけてクリックし、ドライバーファイルをダウンロードします。ファイル名は`Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2`と`Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`のようになります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

例として、NVIDIA L4T 35.1バージョンを選択します。これはJetPack 5.0.2の一部として含まれており、Jetson Xavier NXモジュールをサポートしているためです。ファイル名は以下の通りです：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

:::info
Jetpack 4.6.2をサポートするNVIDIA L4T 32.7.2などの他のバージョンを選択することもできます。
:::

**ステップ 2.** パッケージファイルを解凍し、コマンドラインでRootfsを組み立てる

Linux ホストPCで、以前にダウンロードしたパッケージファイルを保存するフォルダを見つける必要があります。次に、そのフォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドラインを使用してファイルを解凍し、rootfsを組み立てます：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::note
`${}` は、ファイル名を入力する場所です。
:::

**NVIDIA L4T 35.1** の例として、ダウンロードしたファイルは `/Desktop/L4T_Drivers` に保存されているため、'/Desktop/L4T_Drivers' パスでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドを実行します。

```sh
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

出力は次のようになります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

**ステップ 3.**  reComputerにシステムをフラッシュする

reComputer J2021を既にリカバリモードに強制的に移行し、モジュールがJetson Xavier NXであるため、以下のコマンドを実行してreComputerに直接システムをフラッシュできます：

```sh
sudo ./flash.sh jetson-xavier-nx-devkit-emmc mmcblk0p1
```

Jetson nanoモジュールを使用する場合、フラッシュコマンドは以下の通りです：

```sh
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

:::note
L4Tのフラッシュには約10分、またはホストコンピュータが遅い場合はそれ以上の時間がかかります。
:::

この時点で、ジャンパーを取り外してからreComputerを再度電源投入して使用することができます。

</TabItem>

<TabItem value="With Seeed BSP (nano)" label="With Seeed BSP (nano)">

:::info

最近、NVIDIAはDRAMモデルを更新し、Seeedは現在このモジュール更新に対応した新しいファームウェアをリリースしています。

公式のNVIDIAイメージをフラッシュする過程で、DP信号によりシステムがフリーズする場合（フラッシュできずNVIDIAインターフェースで停止する現象として現れる）、更新されたモジュールを購入したことを証明します。この場合、現在提供している工場出荷時イメージをフラッシュする必要があります。

現在のこの工場出荷時イメージと元のイメージとの違いは以下の通りです：

1. DP設定が変更されています（一部のモジュールでDP信号によるシステムフリーズを防ぐため）。
2. SDカードスロットはデフォルトで利用可能な状態に設定されており、SDカードスロット機能を有効にするためにデバイスツリーを追加で変更する必要がありません。
3. イメージにはJetpack4.6.6が含まれています。
4. 最新のPCNが組み込まれています。

:::

### ステップ1. 適切なNVIDIA Linux Driver Packageをダウンロード

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

### ステップ2. パッケージファイルを解凍し、コマンドラインでRootfsを組み立て

LinuxホストPC上で、事前にダウンロードしたパッケージファイルを保存するフォルダを見つけます。次に、そのフォルダでコマンドラインウィンドウ（ターミナル）を開き、以下のコマンドラインを使用してファイルを解凍し、rootfsを組み立てます：

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### ステップ 3. システムを reComputer にフラッシュする

すでに reComputer J1010 をリカバリモードに強制的に移行し、モジュールが Jetson Nano であるため、以下のコマンドを実行して reComputer にシステムを直接フラッシュできます：

```bash
sudo ./nvmflash.sh --showlogs
```

</TabItem>

<TabItem value="With Seeed BSP (Xavier NX)" label="With Seeed BSP (Xavier NX)">

ここでは、reComputerにJetpack 5.1.3をインストールします。

**ステップ1:** 使用しているJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードします：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetsonモジュール</th>
      <th>ダウンロードリンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Xavier NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfKRq92vAAxEhDx43JOBDxkBCQvjy_-h8UC7HmWK6COMEg?e=PCDzib" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>0cded5b093da648e5371c880037601d1593132780bb869c814ac21b11f2aae5c</td>
    </tr>
    <tr>
      <td>Xavier NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaNbv75ItvNHqdsj9LEW4E0BvP_CCTRWMyUvJOA2JUQv8g?e=lToSlK" target="_blank" rel="noopener noreferrer">ダウンロード</a>
      </td>
      <td>db960d3f0e31909aa443e3d4317c737de6cec4de9a7df7c09801fcb1574f4595</td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較することができます。

Ubuntホストマシンで、ターミナルを開き、コマンド `sha256sum <File>` を実行してダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

**ステップ2:** ダウンロードしたイメージファイルを展開します：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**ステップ3:** 解凍されたディレクトリに移動し、以下のコマンドを実行してjetpackシステムをNVMe SSDにフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flash-jetpack.png"/></div>

:::note
フラッシュコマンドの実行には2〜10分かかる場合があります。
:::

**ステップ 4:** ボード上のHDMIコネクタを使用してJ20をディスプレイに接続し、初期設定セットアップを完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
必要に応じて**システム設定**を完了してください。
:::

</TabItem>

</Tabs>

## トラブルシューティング

### NVIDIA SDK Managerでのインストールのトラブルシューティング

様々なインストールエラーには多くの原因があります。以下は一般的なインストール問題のチェックリストで、破損したインストールからの復旧に役立つ場合があります。

1. サマリーテーブルを確認して、どのコンポーネントが失敗したかを特定します。

    a. 「Error」ステータスのグループを展開します。

    b. 失敗したコンポーネントを見つけたら、Install Errorの右側にある詳細アイコンをクリックして、正確なエラーを表示するTerminalタブにリダイレクトされます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. エラーが破損したaptリポジトリや不足している前提条件などの環境問題に関連している場合は、手動で修正してから、Retry Failed Itemsボタンをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. インストールの再試行は他の2つの方法でも利用できます：

    a. **SDK ManagerでeMMCにフラッシュ -- ステップ 3**から、Repair/UninstallボタンでManage NVIDIA SDKsページに移動します。必要に応じて、「Broken」ステータスのSDKを展開し、関連する部分（HostまたはTarget）のRepairをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. **SDK ManagerでeMMCにフラッシュ -- ステップ 3**で、必要なSDKを選択して再度インストールを実行します。

5. 最後に、関連するSDKをアンインストールして再インストールしてみてください。

### コマンドラインを使用したインストールのトラブルシューティング

コマンドラインインストール方法は比較的シンプルで、強制リカバリモードが使用されるシナリオでエラーが発生しやすいです。

**コマンドラインでeMMCにフラッシュ -- ステップ 2**で以下に示すエラーが発生した場合、Jetson-202キャリアボードを強制リカバリモードに正常に入れることができなかった可能性があります。特に注意してください。Jetson-202キャリアボードの電源がオンの状態で強制リカバリモードに入らないでください。これは無効です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

**コマンドラインでeMMCにフラッシュ -- ステップ 3**でシステムに入ることができず、起動表示コマンドラインで止まっている場合、強制リカバリモードを正常に終了していない可能性があります。同様に、Jetson-202キャリアボードの電源がオンの状態でジャンパーを抜いて強制リカバリモードを終了することは無効です。これらはすべて電源がオフの状態で行う必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
より多くのストレージ容量が必要な場合は、SDカードを使用して容量を拡張するか、SDカードにシステムを書き込むことができます。推奨ソリューション[SDカードにシステムをフラッシュ](/ja/J101_Enable_SD_Card)を参照してください。
:::

## リソース

[reComputer J202x データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202x-datasheet.pdf)

[reComptuer J202x キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J202x 3Dファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetsonシリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio Edge AI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetsonシリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetsonデバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
