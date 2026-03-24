---
description: reComputerJ2021 | J202
title: J202 キャリアボード
keywords:
  - Edge
  - Jetson
  - reComputer JetPack™_OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J2021_J202_Flash_Jetpack
sku: 102991695, 102991714, 110061402, 110061481
last_update:
  date: 08/27/2024
  author: Youjiang
no_comments: false
createdAt: '2025-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# reComputer J202 入門ガイド

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/carrier_board-Photoroom.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/recomputer-j202-carrier-board-for-jetson-nano-xavier-nx-without-power-adapter-p-5435.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
  </a>
</div>

reComputer J202 は、NVIDIA® Jetson Xavier NX™ キャリアボードとほぼ同じ設計と機能を備えており、Jetson Nano/Xavier NX/TX2 NX モジュールと完全な互換性があります。4x USB 3.2 gen 2 ポート、WiFi 用 M.2 Key E、SSD 用 M.2 Key M、RTC、CAN、Raspberry Pi GPIO 40 ピンなどで構成されています。

## 特長

- **最適な適合性:** Jetson Nano/Xavier NX/TX2 NX（260 ピン SODIMM）向けに設計されています。
- **豊富な周辺機能:** 高い性能安定性を備え、USB 3.1 ポート（4x）、WiFi 用 M.2 Key E、SSD 用 M.2 Key M、RTC、CAN、Raspberry Pi GPIO 40 ピンなどで構成されています。
- **高い汎用性:** 複雑な AI グラフィカルアプリケーションに適しています。
- **包括的な認証:** FCC、CE、RoHS を取得しています。
- **柔軟なカスタマイズ:** J202 のオリジナル設計に基づき、アクセサリーモジュールの変更、ロゴ、ハードウェアインターフェースの変更サービスを提供します。

:::note

Jetson Nano は PCIe レーンを 1 本しか持たないため、モジュールが Jetson Nano を使用して J202 キャリアボードに接続されている場合、SSD 用の M.2 Key M のみを選択できます。

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
      <td>Ethernet</td>
      <td>1x RJ-45 ギガビット Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E for WiFi/Bluetooth module</td>
    </tr>
    <tr>
      <td rowspan={7}>I/O</td>
      <td>USB</td>
      <td>4x USB 3.1 Type-A (Xavier NX 用 10Gbps、Nano 用 5Gbps) <br/> 1x USB2.0 Type-C (Device Mode)</td>
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
      <td>1x CAN（Nvidia Xavier シリーズ専用）</td>
    </tr>
    <tr>
      <td>多機能ポート</td>
      <td>1x 40 ピン拡張ヘッダ <br/> 1x 12 ピン制御および UART ヘッダ</td>
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
      <td rowspan={2}>機構</td>
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
JetPack をフラッシュすると、デバイス上のすべてのデータが消去されます。十分に注意して作業してください。

キャリアボード単体ではなく完成システムを購入した場合は、JetPack オペレーティングシステムがプリインストールされているため、そのまま起動して使用できます。ただし、必要に応じて、以下のチュートリアルに従って新しいオペレーティングシステムをインストールすることもできます。
:::

以下の内容では、JetPack 4.6.1 システムを J2021 にフラッシュする方法を説明します。この手順を参考にして、お使いのデバイスに任意の JetPack バージョンをフラッシュできます。

:::info
さまざまな[Jetson modules](#対応モジュール)でサポートされているシステムバージョンを確認するには、[here](https://developer.nvidia.com/embedded/jetson-linux-archive) を参照してください。
:::

### 前提条件

- **Ubuntu 18.04 OS または Ubuntu 20.04 OS** を搭載した **ホストコンピュータ**
- reComputer J1020/J2021/J2022 または J202 キャリアボード + Nvidia Jetson モジュール
- 9V-12V/5A 電源
- USB Type-C ケーブル
- ジャンパーピンまたはメス-メスのデュポンワイヤ

### Force Recovery モードに入る

インストール手順に進む前に、reComputer が force recovery モードになっていることを確認する必要があります。

**ステップ 1.** 作業を開始する前に、reComputer の電源を切断する必要があります。

**ステップ 2.** リカバリーモードに入るには、ジャンパーを使用して **FC REC** と **GND** を接続する必要があります。

<table align="center">
  <tbody><tr>
      <th> </th>
      <th align="center">ボタンヘッダ</th>
      <th align="center">説明</th>  
      <th align="center">ボタンヘッダ</th>
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

**ステップ 3.** reComputer の左側にある 12V/5A DC ケーブルで reComputer の電源を入れ、右側にある Type-C ポートと Linux ホスト PC を Type-C ケーブルで接続します。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png" /></div>

**ステップ 4.** Linux ホスト PC の画面で、マウスを右クリックして Terminal を開き、コマンド `lsusb` を入力します。返された内容に `ID 0955:xxxx NVidia Corp.` が含まれていれば、J202 キャリアボードが force recovery モードになっており、後続の操作に進むことができます。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png" /></div>

:::note

- NVIDIA® Jetson Nano™ の場合: 0955:7f21 NVidia Corp
- NVIDIA® Jetson Xavier™ NX の場合: 0955:7e19 NVidia Corp

:::

:::caution
Jetson-Nano 上の SPI インターフェースは、デフォルトでは GPIO と多重化されており、有効になっていません。有効化する手順については、[**this guide**](/ja/enable_spi_interface_on_jetsonnano) を参照してください。
:::

### Jetson へのフラッシュ

reComputer J2021 に JetPack OS をフラッシュする方法は 2 通りあります。NVIDIA Jetson を初めて使用する方には、NVIDIA SDK Manager を強く推奨します。

- [NVIDIA SDK Managerを使用したJetPack OSのフラッシュ](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [コマンドラインを使用したJetPack OSのフラッシュ](#flashing-to-emmc-with-command-line)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="SDK Manager" label="SDK Manager">

NVIDIA SDK Manager は、開発者向けソフトウェアを一括で提供し、NVIDIA SDK 向けのエンドツーエンドの開発環境セットアップソリューションを提供するオールインワンツールです。そのため、初心者に推奨されます。

:::note
 このチュートリアルでは、ホストコンピュータに Ubuntu 18.04 LTS オペレーティングシステムを使用し、本ガイドでインストールする Jetpack Verison は 4.6.1 です。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>

**ステップ 1.**  Linux ホスト PC に NVIDIA SDK Manager をインストールする

まず、sdkmanager を使用するために <a href="https://developer.nvidia.com/login" target="_blank">NVIDIA account</a> を作成する必要があります。その後、Linux ホスト PC 上で NVIDIA 公式サイトから <a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank">NVIDIA SDK Manager</a> をダウンロードします。

**ステップ 2.**  NVIDIA SDK Manager を開き、ログインする

Linux ホスト PC の画面で、マウスを右クリックして Terminal を開きます。その後、以下のコマンドを入力して SDK Manager を起動します。

```bash
sdkmanager
```

:::note
NVIDIA SDK Manager を初めて使用する場合は、事前に登録した NVIDIA アカウントでログインするよう求める Web ページがポップアップ表示されます。
:::

**ステップ 3.**  ターゲットデバイスを選択する

reComputer J2021 はすでに接続しているため、ハードウェアデバイスを選択するウィンドウがポップアップ表示されます。

reComputer J2021 には **NVIDIA Jetson Xavier 8GB module** が搭載されているので、`Jetson Xavier NX`（最初のオプション）を選択します。

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/select_target_device.png" />
</div> -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/1.png"/></div>

:::info
SDK Manager のバージョンによってインターフェースが多少異なる場合があります。実際の状況に応じて適切なオプションを選択してください。
:::

最初の画面では、さらに選択肢があります。

- Product Category パネルでは **Jetson** を選択する必要があります。
- Hardware Configuration パネルでは、**Host Machine を選択しないことを推奨します**。これを選択すると、現在の Ubuntu ホスト向けの NVIDIA コンポーネントのインストールにより多くの時間がかかります。必要であれば選択しても構いません。
- Target Operating System パネルでは、異なる**オペレーティングシステム**と**JetPack バージョン**を選択できます。ただし JetPack のバージョンには注意してください。`JetPack 4.6.1`、`JetPack 5.1.x` など、モジュールによってサポートされる JetPack の種類が異なります。ここでは **JetPack 4.6.1** を推奨します。
- Additional SDKs では、eMMC のストレージ容量が 16GB しかないため、ここで DeepStream をインストールすると容量不足になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>

次のステップに進むには Continue をクリックします。

**ステップ 4.**  必要なコンポーネントの確認

**Details and License** から、ホストコンポーネントとターゲットコンポーネントのパネルを展開して、システムにインストールされるコンポーネントを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>

システムのみをインストールしたい場合は、SDK コンポーネントのチェックを外すことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>

:::tip
インストールするコンポーネントを選択する際は、使用される容量に注意してください。内蔵 eMMC のサイズは 16GB のみなので、実際のニーズに応じてこの容量を賢く割り当てて使用してください。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>
実際のテストでは、SDK コンポーネント一式をインストールした後、eMMC の空き容量は約 500MB しか残りません。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>
容量不足の問題を解決する方法を確認したい場合は、次を参照してください：

https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space .
:::

SDK Manager にすべてのファイルをデフォルトパス以外の場所にダウンロードさせたい場合は、画面下部にある Download & Install Options に移動し、使用したいパスを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>

次のステップに進むには Continue を選択します。

**ステップ 5.** システムをインストールする

インストールが始まる前に、SDK Manager から `sudo` パスワードの入力を求められます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>

しばらくすると、reComputer 用の新しいシステムをセットアップするよう求められます。手動で強制リカバリモードに入れているので、ここでは `Manual setup: set the target to Force Recovery Mode via manual operations` を選択します。同時に、デフォルトの **Pre-Config** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>

その後、新しい Jetson システムのユーザー名とパスワードを reComputer 用に入力する必要があります。これは任意に設定してください。

準備ができたら、`Flash` をクリックして続行します。

ディスプレイにはソフトウェアのダウンロードとインストールの進行状況が表示されます。インストールが完了するまでしばらくお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>

**(Optional)ステップ 6.** SDK コンポーネントをインストールする

前の **step 4** でコンポーネントのインストールにチェックを入れた場合は、このステップを実行する必要があります。

しばらくすると、NVIDIA SDK Manager に新しいウィンドウがポップアップし、IP アドレス経由でデバイスに接続する必要があることが表示されます。これは、システムのインストールがすでに完了しており、コンポーネントのインストールが進行することを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

この時点で、**ジャンパを抜いて** reComputer を再起動できます。その後、reComputer を HDMI でモニターに接続し、**step 4** で入力したパスワードを入力してメインインターフェースにログインします。

ここで、reComputer を Linux ホスト PC と同じ LAN に接続し、`ifconfig` コマンドを使用して Jetson の **IP アドレス** を確認する必要があります。

Linux ホスト PC に戻り、先ほど取得した IP アドレスを入力します。NVIDIA SDK Manager は Jetson デバイスへの接続を試み、その後の SDK コンポーネントのインストールを完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

次のウィンドウが表示されたら、インストールは完了です。Jetson の使用を開始するか、以下の手順に従って新しいシステムの基本的な設定を完了させることができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

:::note
システムに再度電源を入れる前に、必ずジャンパを抜いて強制リカバリモードを終了してください。
:::
</TabItem>

<TabItem value="Command Line" label="Command Line">

BSP（NVIDIA Linux Driver Package）を自由にカスタマイズできるおかげで、Linux の知識があるユーザーにとっては、コマンドライン経由で JetPack OS をフラッシュするのは非常に簡単です。

**ステップ 1.** 適切な NVIDIA Linux Driver Package をダウンロードする

**Linux ホスト PC** 上でブラウザを開き、<a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a> にアクセスする必要があります。まず、Jetson Linux のバージョンが使用している reComputer Jetson モジュールをサポートしているか確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack2.png" /></div>

適切なバージョンを見つけたら、クリックしてダウンロードページに移動します。ドライバファイルをダウンロードするために "L4T Driver Package (BSP)" と "Sample Root Filesystem" を探してクリックします。ファイル名は `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` や `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2` のようになります。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png" /></div>

例として、JetPack 5.0.2 の一部として含まれ、Jetson Xavier NX モジュールをサポートする NVIDIA L4T 35.1 バージョンを選択します。ファイル名は次のとおりです：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

:::info
Jetpack 4.6.2 をサポートする NVIDIA L4T 32.7.2 など、他のバージョンを選択することもできます。
:::

**ステップ 2.**  コマンドラインでパッケージファイルを解凍し rootfs を構成する

Linux ホスト PC 上で、事前にダウンロードしたパッケージファイルを保存するフォルダを用意します。次に、そのフォルダでコマンドラインウィンドウ（Terminal）を開き、以下のコマンドラインを使用してファイルを解凍し rootfs を構成します：

```sh
tar xf ${L4T_RELEASE_PACKAGE}
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
cd ..
sudo ./apply_binaries.sh
```

:::note
`${}` はファイル名を入れる場所です。
:::

**NVIDIA L4T 35.1** の例では、ダウンロードしたファイルは `/Desktop/L4T_Drivers` に保存されているので、`/Desktop/L4T_Drivers` パスでコマンドラインウィンドウ（Terminal）を開き、次のコマンドを実行します。

```sh
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

出力は次のようになります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

**ステップ 3.**  システムを reComputer にフラッシュする

すでに reComputer J2021 をリカバリモードに強制的に入れており、モジュールは Jetson Xavier NX なので、次のコマンドを実行してシステムを直接 reComputer にフラッシュできます：

```sh
sudo ./flash.sh jetson-xavier-nx-devkit-emmc mmcblk0p1
```

Jetson nano モジュールを使用している場合、フラッシュコマンドは次のとおりです：

```sh
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

:::note
L4T のフラッシュには約 10 分かかり、ホストコンピュータが遅い場合はさらに時間がかかります。
:::

この時点で、ジャンパを抜いてから reComputer の電源を入れ直し、使用を開始できます。

</TabItem>

<TabItem value="With Seeed BSP (nano)" label="With Seeed BSP (nano)">

:::info

最近、NVIDIA は DRAM モデルを更新しており、Seeed は現在、このモジュールの更新と互換性のある新しいファームウェアをリリースしています。

公式の NVIDIA イメージをフラッシュする過程で、DP 信号が原因でシステムがフリーズする（フラッシュできず NVIDIA の画面で止まってしまう）場合は、更新されたモジュールを購入していることを意味します。この場合、現在提供しているファクトリーイメージをフラッシュする必要があります。

現在のこのファクトリーイメージと元のイメージの違いは次のとおりです：

1. 一部のモジュールで DP 信号が原因でシステムがフリーズするのを防ぐため、DP 設定が変更されています。
2. SD カードスロットはデフォルトで使用可能な状態に設定されており、SD カードスロット機能を有効にするためにデバイスツリーを追加で変更する必要はありません。
3. イメージには Jetpack4.6.6 が含まれています。
4. 最新の PCN が組み込まれています。

:::

### ステップ 1. 適切な NVIDIA Linux Driver Package をダウンロードする

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Download Link</th>
      <th>SHA265</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.6.6</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV7LGr3R0VRDsgfFibgOgfsBam44-zEqOrQJoUKpHXEmRw?e=gJEHhU" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>138547DF526D19F737DEC27856C078217D15FE9160F2669DF57823916BAA260E</td>
    </tr>
  </tbody>
</table>
</div>

### ステップ 2.  パッケージファイルを解凍し、コマンドラインで rootfs を構成する

Linux ホスト PC 上で、フォルダを作成して、前にダウンロードしたパッケージファイルを保存します。次に、そのフォルダでコマンドラインウィンドウ（Terminal）を開き、以下のコマンドラインを使用してファイルを解凍し、rootfs を構成します：

```sh
tar xpf  mfi_recomputer-nano-4g-4.6.6-32.7.6-2024-12-23.tbz2
cd mfi_jetson-nano-devkit-emmc
```

### ステップ 3.  システムを reComputer にフラッシュする

すでに reComputer J1010 をリカバリモードに強制的に入れており、モジュールは Jetson Nano なので、以下のコマンドを実行してシステムを直接 reComputer にフラッシュできます：

```bash
sudo ./nvmflash.sh --showlogs
```

</TabItem>

<TabItem value="With Seeed BSP (Xavier NX)" label="With Seeed BSP (Xavier NX)">

ここでは Jetpack 5.1.3 を reComputer にインストールします。

**ステップ 1：** 使用している Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードします：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson モジュール</th>
      <th>ダウンロードリンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Xavier NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfKRq92vAAxEhDx43JOBDxkBCQvjy_-h8UC7HmWK6COMEg?e=PCDzib" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>0cded5b093da648e5371c880037601d1593132780bb869c814ac21b11f2aae5c</td>
    </tr>
    <tr>
      <td>Xavier NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaNbv75ItvNHqdsj9LEW4E0BvP_CCTRWMyUvJOA2JUQv8g?e=lToSlK" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>db960d3f0e31909aa443e3d4317c737de6cec4de9a7df7c09801fcb1574f4595</td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの完全性を検証するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全で破損していないことが確認できます。
:::

**ステップ 2：** ダウンロードしたイメージファイルを解凍します：

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**ステップ 3：** 解凍したディレクトリに移動し、以下のコマンドを実行して Jetpack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功すると、次のような出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flash-jetpack.png"/></div>

:::note
フラッシュコマンドの実行には 2～10 分かかる場合があります。
:::

**ステップ 4：** ボード上の HDMI コネクタを使用して J20 をディスプレイに接続し、初期設定を完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
ニーズに応じて **System Configuration** を完了してください。
:::

</TabItem>

</Tabs>

## トラブルシューティング

### NVIDIA SDK Manager を使用したインストールのトラブルシューティング

さまざまなインストールエラーには多くの原因があります。以下は一般的なインストール問題のチェックリストで、破損したインストールから復旧するのに役立つ場合があります。

1. サマリーテーブルを確認して、どのコンポーネントが失敗したかを特定します。

    a. ステータスが "Error" のグループを展開します。

    b. 失敗したコンポーネントを見つけたら、Install Error の右側にある詳細アイコンをクリックして Terminal タブに移動し、正確なエラー内容を表示します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. エラーが壊れた apt リポジトリや不足している前提条件などの環境問題に関連している場合は、それを手動で修正してから、Retry Failed Items ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. インストールの再試行には、他にも 2 つの方法があります：

    a. **Flashing to eMMC with SDK Manager -- ステップ 3** から、Repair/Uninstall ボタンを使用して Manage NVIDIA SDKs ページに移動します。必要に応じて、ステータスが "Broken" の SDK を展開し、該当する部分（Host または Target）に対して Repair をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. **Flashing to eMMC with SDK Manager -- ステップ 3** で、必要な SDK を選択し、もう一度インストールを実行します。

5. 最後に、該当する SDK をアンインストールしてから再インストールしてみてください。

### コマンドラインを使用したインストールのトラブルシューティング

コマンドラインによるインストール方法は比較的シンプルですが、force recovery モードを使用するシナリオではエラーが発生しやすくなります。

**Flashing to eMMC with command-line -- ステップ 2** で以下のようなエラーが発生した場合、Jetson-202 Carrier Board を force recovery モードに入れることに失敗している可能性があります。特に注意すべき点として、Jetson-202 Carrier Board の電源が入った状態で force recovery モードに入らないでください。これは有効ではありません。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

**Flashing to eMMC with command-line -- ステップ 3** でシステムに入れず、起動時の表示コマンドラインで止まってしまう場合は、force recovery モードを終了できていない可能性があります。同様に、Jetson-202 Carrier Board の電源が入ったままジャンパを抜いて force recovery モードを終了することも無効です。これらはすべて、電源が切れている状態で行う必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
より多くのストレージ容量が必要な場合は、SD カードを使用して容量を拡張するか、システムを SD カードに書き込むことができます。推奨ソリューションである [Flash System on SD card](/ja/J101_Enable_SD_Card) を参照してください。
:::

## リソース

[reComputer J202x データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202x-datasheet.pdf)

[reComputer J202x 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson シリーズ カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio Edge AI 導入事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson デバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)



## 参考資料

<JetsonLeadQuote
  buttonText="見積もり依頼"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
