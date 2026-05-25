---
description: このWikiでは、reComputer Jetson Robotics J501キャリアボードのハードウェア機能とインターフェースの使用方法について包括的に紹介します。詳細な仕様、対応モジュール、セットアップ手順、デュアルM.2 Key Mスロット、10GbE + 4x 1GbE Ethernet、USB 3.0、4系統のCANインターフェース（2ネイティブ + 2 SPI-to-CAN）、UART、DI/DO、I2S、GMSL2カメラ拡張など、さまざまなインターフェースの実用的なガイドを網羅し、ユーザーがJ501プラットフォームでのロボット開発を素早く開始できるよう支援します。
title: Jetpack のフラッシュ && インターフェースの使用
tags:
  - reComputer Robotics J501
  - Flash Jetpack
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg
slug: /ai_robotics_recomputer_j501_robotics_getting_started
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 12/09/2025
  author: Lorraine
createdAt: '2026-01-12'
updatedAt: '2026-03-04'
url: https://wiki.seeedstudio.com/ja/ai_robotics_recomputer_j501_robotics_getting_started/
---

# Robotics J501 ハードウェアと入門ガイド

reComputer Robotics J501 は、高度なロボットおよび産業用途向けに設計された高性能エッジAIキャリアボードです。MAXNモードのNVIDIA Jetson AGX Orinモジュール（32GB/64GB）に対応し、最大275 TOPSのAI性能を発揮します。

1x 10GbEおよび4x 1GbE Ethernetポート、NVMe SSD用デュアルM.2 Key Mスロット、5GおよびWi-Fi/BTモジュール用M.2スロット、複数のUSB 3.0ポート、4系統のCANインターフェース（2ネイティブ + 2 SPI-to-CAN）、GMSL2カメラ拡張、DI/DO、I2S、UART、RS485を含む包括的なI/Oなど、豊富な接続オプションを備え、複雑なマルチセンサーフュージョンとリアルタイムAI処理のための強力なロボットブレインとして機能します。

JetPack 6.2.1 と Linux BSP をプリインストールしており、シームレスなデプロイを実現します。NVIDIA Isaac ROS、Hugging Face、PyTorch、ROS 2/1 などのフレームワークをサポートすることで、J501 は大規模言語モデルによる意思決定と実ロボット制御をつなぎ、すぐに使えるインターフェースと最適化されたAIフレームワークによって自律ロボット開発を加速します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>

## 主な特長  

- **高性能AI**: Jetson AGX Orin 32/64GBモジュール、Ampere GPUおよびDLAエンジンにより最大275 TOPS
- **豊富な接続性**: デュアルM.2 Key M（NVMe）、Key E（WiFi/BT）+ Key B（5G）、1x 10GbE + 4x 1GbE、3x USB 3.0、2x USB-C
- **4系統CAN-FD**: 電気的絶縁付き 2x ネイティブ + 2x SPI-to-CAN インターフェース
- **GMSL2 ビジョン**: 高速カメラ接続用シングルGMSL2インターフェース（1x）
- **産業グレード設計**: 19〜48V DC入力、-10〜60°C動作、絶縁インターフェース、JetPack 6.2.1プリインストール
- **ロボティクス対応**: ROS 2/1、Isaac ROS対応、DI/DO、I2S、UART、RS485、AMRおよび自動化向けに最適化

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson AGX Orin システムオンモジュール</th>
    </tr>
    <tr>
      <th style={{width: '25%'}}>仕様</th>
      <th style={{width: '37.5%'}}>reComputer Robotics J5011</th>
      <th style={{width: '37.5%'}}>reComputer Robotics J5012</th>
    </tr>
    <tr>
      <td>モジュール</td>
      <td>NVIDIA Jetson AGX Orin 32GB</td>
      <td>NVIDIA Jetson AGX Orin 64GB</td>
    </tr>
    <tr>
      <td>AI性能</td>
      <td>200 TOPS</td>
      <td>275 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1792コア NVIDIA Ampere @ 930 MHz</td>
      <td>2048コア NVIDIA Ampere @ 1.3 GHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8コア Arm Cortex-A78AE @ 2.0 GHz</td>
      <td>12コア Arm Cortex-A78AE @ 2.2 GHz</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>32GB 256-bit LPDDR5 @ 204.8 GB/s</td>
      <td>64GB 256-bit LPDDR5 @ 204.8 GB/s</td>
    </tr>
    <tr>
      <td>ビデオエンコーダ</td>
      <td>1x 4K60 / 3x 4K30 / 6x 1080p60 / 12x 1080p30 (H.265)</td>
      <td>2x 4K60 / 6x 4K30 / 8x 1080p60 / 16x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>ビデオデコーダ</td>
      <td>1x 8K30 / 2x 4K60 / 4x 4K30 / 9x 1080p60 / 18x 1080p30 (H.265)</td>
      <td>1x 8K30 / 3x 4K60 / 7x 4K30 / 11x 1080p60 / 22x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>CSI カメラ</td>
      <td colSpan={2}>最大6台のカメラ（バーチャルチャネル経由で16台）<br/>16レーン MIPI CSI-2<br/>D-PHY 2.1（最大40Gbps）/ C-PHY 2.0（最大164Gbps）</td>
    </tr>
    <tr>
      <td>メカニカル</td>
      <td colSpan={2}>100mm x 87mm<br/>699ピン Molex Mirror Mezz コネクタ<br/>一体型サーマルトランスファープレート</td>
    </tr>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>キャリアボード</th>
    </tr>
    <tr>
      <th>ストレージ</th>
      <td colSpan={2}>2x M.2 Key-M（NVMe 2280 SSD）<br/>1x M.2 Key-B（4G/5Gモジュール用）</td>
    </tr>
    <tr>
      <th>ネットワーキング</th>
      <td colSpan={2}>1x M.2 Key-E（WiFi/BT）<br/>1x RJ45 10GbE + 4x RJ45 1GbE</td>
    </tr>
    <tr>
      <th>USB</th>
      <td colSpan={2}>3x USB 3.0 Type-A<br/>1x USB 3.0 Type-C（リカバリ）<br/>1x USB 2.0 Type-C（デバッグUART）</td>
    </tr>
    <tr>
      <th>DI/DO/CAN</th>
      <td colSpan={2}>1x 2x10P 3.81mm 端子台 - 4x DI @12V + 4x DO @40V + 4x CAN（CAN-FD対応、電気的絶縁）</td>
    </tr>
    <tr>
      <th>GMSL</th>
      <td colSpan={2}>2x ミニFakraコネクタ（8x GMSL2カメラ用）（オプション）</td>
    </tr>
    <tr>
      <th>シリアル</th>
      <td colSpan={2}>2x DB9（RS232/422/485）</td>
    </tr>
    <tr>
      <th>ディスプレイ</th>
      <td colSpan={2}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <th>ファン</th>
      <td colSpan={2}>1×12 V（2.54 mm）、1×5 V（1.25 mm JST）</td>
    </tr>
    <tr>
      <th>ボタン</th>
      <td colSpan={2}>1x Recovery + 1x Reset</td>
    </tr>
    <tr>
      <th>LED</th>
      <td colSpan={2}>3x LED（PWR、SSD、ユーザーLED）</td>
    </tr>
    <tr>
      <th>RTC</th>
      <td colSpan={2}>1x CR1220 バッテリホルダ、1x RTC 2ピンヘッダ</td>
    </tr>
    <tr>
      <th>電源入力</th>
      <td colSpan={2}>5.08mm端子台経由 19〜48V DC（電源アダプタは付属しません）</td>
    </tr>
    <tr>
      <th>消費電力</th>
      <td colSpan={2}>Jetson AGX Orin モジュール: 最大60W（MAXNモード）<br/>システム全体ピーク: 75W（周辺機器を含む）</td>
    </tr>
    <tr>
      <th>ソフトウェア</th>
      <td colSpan={2}>Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th>メカニカル</th>
      <td colSpan={2}>
        寸法: 210mm x 180mm x 87mm（スタンド含む）<br/>
        重量: 200g<br/>
        取り付け方法: デスク / 壁掛け / DINレール（DINブラケットは付属品に含まれます）<br/>
        動作温度: -10℃〜60℃（25W）/ -10℃〜55℃（MAXN）
      </td>
    </tr>
    <tr>
      <th>保証</th>
      <td colSpan={2}>2年間</td>
    </tr>
    <tr>
      <th>認証</th>
      <td colSpan={2}>RoHS、REACH、CE、FCC、UKCA、KC</td>
    </tr>
  </tbody>
</table>
</div>

**GMSL 拡張ボード仕様（オプション）**

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>デシリアライザ</th>
      <td>MAX96712</td>
    </tr>
    <tr>
      <th>GMSL インターフェース</th>
      <td>2x Robotics-Fakra オスコネクタ</td>
    </tr>
    <tr>
      <th>GMSL 入力</th>
      <td>最大8x GMSL2 カメラ</td>
    </tr>
    <tr>
      <th>接続方法</th>
      <td>GMSL2 Fakra 1-to-4 M-M ケーブル</td>
    </tr>
    <tr>
      <th>POC インターフェース機能</th>
      <td>電源とデータの同時伝送をサポート</td>
    </tr>
  </tbody>
</table>
</div>

## ハードウェア概要

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_2.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_3.png"/>
</div>

## 📦 JetPack OS をフラッシュする

### 対応モジュール

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 事前準備

- Ubuntu ホストPC
- reComputer Robotics J501
- USB Type-C データ転送ケーブル

:::info

仮想マシンではなく、物理的なUbuntuホストデバイスを使用することを推奨します。
ホストマシンを準備するために、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="3"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Jetpack イメージの準備

ここでは、使用しているJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードする必要があります。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack バージョン</th>
      <th>Jetson モジュール</th>
      <th> GMSL </th>
      <th>Download Link1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQClLB_mdGMPQpqEw1jxTRuFAYqxZRQJZIAtiYt7-clcocI">Download</a></td>
      <td>F95E91C3BFB00D50EB999383F85949B4</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAWnjh2iWzeRI1rKN5Bb_HxAX3P3GxPMHSb-60VmCPCgx4?e=a5yyXH">Download</a></td>
      <td>e868fd8c7ad05d3acc8c9808f42e1835<br/>28f11df14f48cb6ae16464adb4f23d1f </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6 のイメージファイルは約 **14.2GB** のサイズがあり、ダウンロードには約60分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの完全性を確認するには、SHA256ハッシュ値を比較します。

Ubuntuホストマシンでターミナルを開き、`sha256sum <File>` コマンドを実行して、ダウンロードしたファイルのSHA256ハッシュ値を取得します。出力されたハッシュがWikiに記載されているSHA256ハッシュと一致すれば、ダウンロードしたファームウェアが完全で破損していないことが確認できます。
:::

⚙️ **SEEED の Jetson キャリアボード向けのすべての `.dts` ファイルおよびその他のソースコードは、** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) からダウンロードできます

### Force Recovery モードに入る

:::info
インストール手順に進む前に、ボードが Force Recovery モードになっていることを確認する必要があります。
:::

<details>

<summary> 手順 </summary>

**Step 1.** USB2.0 DEVICE ポートと Ubuntu ホスト PC の間を、USB Type-C データ転送ケーブルで接続します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/flash_1.png" />
</div>

**Step 2.** ピンを使用して RECOVERY ホールに差し込み、リカバリボタンを押し続けます。

**Step 3.** 電源を接続します。

**Step 4.** リカバリボタンを離します。

**Step 5.** Linux ホスト PC でターミナルウィンドウを開き、`lsusb` コマンドを入力します。使用している Jetson SoM に応じて、返された内容に以下のいずれかの出力が含まれていれば、ボードは Force Recovery モードになっています。

- AGX Orin 32GB の場合: **0955:7223 NVidia Corp**
- AGX Orin 64GB の場合: **0955:7023 NVidia Corp**

以下の画像は AGX Orin 32GB の例です:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Jetson へのフラッシュ

**Step 1:** ダウンロードしたイメージファイルを解凍します:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**Step 2:** 次のコマンドを実行して、JetPack システムを NVMe SSD にフラッシュします:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-robo-agx-orin-j501x
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には 2〜10 分かかる場合があります。
:::

**Step 3:** Robotics J501 をディスプレイに接続します。PD から HDMI へのアダプタを使用して HDMI 入力対応ディスプレイに接続するか、PD ケーブルを使用して PD 入力対応ディスプレイに直接接続し、初期設定を完了します:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
**System Configuration** を、ニーズに応じて完了してください。
:::

## 🔌 インターフェースの使用方法

以下では、Robotics J501 ボードの各種インターフェースとその使用方法について紹介します。

## M.2 Key M

J501 には、PCIe Gen4x4 NVMe SSD に対応したデュアル M.2 Key M スロットが搭載されており、高速なストレージ拡張が可能です。

### 対応 SSD は以下の通りです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-5768.html)

### ハードウェア接続

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m_1.png"/>
</div>

### 使用手順

Jetson デバイスでターミナルを開き、次のコマンドを入力して SSD の読み書き速度をテストします。

**Step 1.** テスト用ディレクトリとファイルを作成します:

```bash
mkdir ssd
touch ~/ssd/test
```

**Step 2.** 書き込み性能をテストします:

```bash
dd if=/dev/zero of=/home/$USER/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m2.png"/>
</div>

**Step 3.** SSD 情報を確認します:

```bash
nvme list
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>

:::danger
テスト完了後は、キャッシュファイルを削除するために sudo rm /home/$USER/ssd/test コマンドを実行してください。
:::

## M.2 Key E (WiFi/BT)

M.2 Key E スロットは、Wi-Fi 6 および Bluetooth 5.x モジュールに対応しており、ワイヤレス接続を提供します。


### ハードウェア接続

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_1.png"/>
</div>

:::tip

**注意: インターフェースを使用する前に、筐体のネジを外し、下図のように対応するモジュールを取り付ける必要があります。**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### 使用手順

**性能テスト:**
Wi-Fi の性能をテストするには、次のコマンドを使用します（IP アドレスはテストサーバーのものに置き換えてください）:

```bash
# On server: iperf3 -s
# On client:
iperf3 -c 192.168.7.157
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_2.png"/>
</div>

Bluetooth 機能は M.2 Key E スロット経由で利用できます。
**Bluetooth テスト:**
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_3.png"/>
</div>

## M.2 Key B (4G/5G モジュール)

M.2 Key B スロットは、Nano SIM カードホルダー付きの 4G/5G セルラーモジュールに対応しています。

### ハードウェア接続

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/keyb-keye.png"/>
</div>

:::tip

**注意: インターフェースを使用する前に、筐体のネジを外し、下図のように対応するモジュールを取り付ける必要があります。**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### 使用手順

**Step 1.** ハードウェア認識を確認します

```bash
lsusb 
```

このコマンドは、システムに接続されているすべての USB デバイスの一覧を、メーカー (ID)、種類、その他の情報とともに表示します。たとえば、出力に Quectel Wireless Solutions Co., Ltd. EM12-G というデバイスが表示されていれば、5G モジュールが存在していることを示します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_1.png"/>
</div>

**Step 2.** ドライバのロードを確認します
5G モジュールに必要な option ドライバがロードされていることを確認することが重要です。これを確認するために lsmod コマンドを使用できます。

```bash
lsmod | grep option 
```

option ドライバが正常にロードされていれば、出力にドライバに関する関連情報が表示されます。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_2.png"/>
</div>

**Step 3.** ModemManager を設定します
ModemManager はモデムデバイスを管理するためのツールであり、インストールして再起動する必要があります。

```bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

apt install コマンドは ModemManager パッケージのインストールに使用され、systemctl restart は ModemManager サービスを再起動して、新しい設定が有効になるようにします。

**Step 4.** モジュール認識を確認します
ModemManager が 5G モジュールを正しく認識できるかどうかを確認するために、mmcli -L コマンドを使用できます。

```bash
mmcli -L 
```

5G モジュールが認識されていれば、/org/freedesktop/ModemManager1/Modem/0 のような出力が表示され、検出されたモデムデバイスへのパスを示します。
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_3.png"/>
</div>

**Step 5.** APN を設定します
APN (Access Point Name) は、モバイルデバイスをネットワークに接続するために重要です。ここでは nmcli コマンドを使用してベアラープロファイルを作成します。China Mobile を例に、次のコマンドで設定ファイルを作成できます:

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

このコマンドは、新しい GSM (Global System for Mobile Communications) タイプの接続を追加し、APN を "CMNET" に指定し、IPv4 の自動設定を使用します。

**Step 6.** 接続を有効化します
ベアラープロファイルを作成したら、接続を有効化する必要があります。

```bash
sudo nmcli con up "gsm" 
```

このコマンドは GSM 接続を有効化し、成功すると確認メッセージが表示されます。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_4.png"/>
</div>

**Step 7.** モジュール認識を再確認します
APN を設定した後もモジュールが認識されていることを確認するために、再度 mmcli -L コマンドを実行します。

```bash
mmcli -L 
```

**Step 8.** モジュールステータスを確認します
最後に、mmcli -m 0 コマンドを使用して、IP 割り当て、キャリア、ネットワーク接続状態など、モジュールに関する詳細情報を表示できます。

```bash
mmcli -m 0 
```

このコマンドは、メーカー、モデル、サポートおよび現在使用中のネットワーク技術、デバイスステータス、接続中のネットワークオペレーターなど、5G モジュールに関する包括的な詳細を提供します。
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_5.png"/>
</div>

## Ethernet

Robotics J501 は、1x 10GbE (ネイティブ) と 4x 1GbE (PCIe スイッチ経由) の RJ45 ポートを備えています。10GbE ポートには TI TQSPH-10G PHY が搭載されており、10/5/2.5/1/0.1 GbE の 5 つの速度をサポートします。1GbE ポートは 10/100/1000M の速度をサポートします。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_1.png"/>
</div>

**ポートごとの LED インジケータ:**

- **緑色 LED:** 10G/5G/2.5G/1000M リンク時に点灯
- **黄色 LED:** ネットワークアクティビティ時に点滅

Ethernet ポートの速度をテストするには、次のように `iperf3` を使用します:

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` は iperf3 サーバーの IP アドレスです。クライアントはこのサーバーに接続して帯域幅テストを実行します。
`<bind_ip>` は、テストトラフィックの送信元として使用するローカル IP アドレスを指定してバインドします。
:::

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_speed.png"/>
</div>

## LED

J501 には複数のステータス LED が搭載されています：

- **PWR LED:** 電源ステータス（緑）
- **ACT LED:** システム動作状況（黄）
- **USR LED:** GPIO 制御経由

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_1.png"/>
</div>

### 使用手順

以下では、USER LED を緑、赤、青に制御する方法を示します。

```bash
#change to red
echo 1 | sudo tee /sys/class/leds/on-board:red/brightness
echo 0 | sudo tee /sys/class/leds/on-board:red/brightness
#change to green
echo 1 | sudo tee /sys/class/leds/on-board:green/brightness
echo 0 | sudo tee /sys/class/leds/on-board:green/brightness

#change to blue
echo 1 | sudo tee /sys/class/leds/on-board:blue/brightness
echo 0 | sudo tee /sys/class/leds/on-board:blue/brightness

```

LED 制御の効果は、次の図のようになります：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_test.png"/>
</div>

## USB

Robotics J501 には、4 つの USB 3.2 Type-A ポート（内部 USB 3.1 Gen1 ハブ経由で、最大 5Gbps のデータレートをサポートし、高速な周辺機器、ストレージデバイス、カメラなどの接続が可能）と、1 つの USB 2.0 Type-C デバッグポート（シリアルコンソールとして機能し、システムログへのアクセス、ブート問題のデバッグ、ファームウェア更新の実行に使用）があります。

### USB-A スピードテスト

USB デバイスの速度をテストするスクリプトを作成します：

```bash
vim test_usb.sh
```

次の内容を貼り付けます：
<details>
<summary> test_usb.sh </summary>
```bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF

```

</details>

スクリプトに実行権限を付与してテストします：

```bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/USB-A_Speed_Test.png"/>
</div>

:::note
まず `df -h` または `lsblk` コマンドを使用して、USB デバイスの実際のマウントポイントを確認してください！
:::

### USB 2.0 Type-C ポート

このシリアルポートを USB-C データケーブル経由で使用することで、PC 側で入出力のデバッグ情報をモニタリングできます。

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug.png"/>
</div>

**Step 1.** シリアルポートツールを開きます（ここでは例として MobaXterm ツールを使用します）。新しいセッションを作成します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Step 2.** Serial ツールを選択します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Step 3.** 対応するシリアルポートを選択し、ボーレートを 115200 に設定して "OK" をクリックします。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_1.png"/>
</div>

**Step 4.** ユーザー名とパスワードを使用して reComputer Super にログインします。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_2.png"/>
</div>

## Fan

Robotics J501 には、Jetson モジュールおよびキャリアボード上のコンポーネントを冷却するために設計された 4 ピン PWM ファンコネクタが 2 つ搭載されています：

- **12V Fan**: 2.54 mm コネクタ、最大 1.5A、高性能冷却に適しています
- **5V Fan**: 1.25 mm JST コネクタ、最大 1.5A、低消費電力かつ静音冷却に最適です

PWM 制御により、システム温度に基づいてファン速度を動的かつ精密に調整でき、効率的な冷却を実現しつつ、ノイズと消費電力を最小限に抑えることができます。

**12V Fan ピン配置:**

12V ファンコネクタ（2.54 mm）のピン配置は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan_12v_pinout.png"/>
</div>

### 使用手順

**手動 PWM 制御:**

```bash
# Set fan speed (0-255)
sudo -i
echo 200 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan.png"/>
</div>

:::note
デフォルトのサーマルポリシーは `/etc/nvpmodel.conf` に事前設定されています。カスタムプロファイルについては、[NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control) を参照してください。
:::

さらに、`jtop` ツールを使用してファン速度を手動で設定することもできます。

ターミナルで次のコマンドを入力して **jtop** をインストールできます。

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

その後、reComputer Mini を再起動します：

```bash
sudo reboot
```

**jtop** をインストールしたら、ターミナルで起動できます：

```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## CAN

reComputer Robotics J501 には、4 つの独立した CAN インターフェース（CAN 0、CAN 1、CAN 2、CAN 3）が搭載されており、DI/DO インターフェースと J25 2x10P コネクタを共有しています。これらのインターフェースは Classic CAN と CAN FD の両方の通信プロトコルをサポートし、高い耐干渉性能とリアルタイムなデータ伝送を備えているため、自動車電子機器、産業オートメーション、ロボティクスなどの産業用制御シナリオに適しています。

### 使用手順

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_1.png"/>
</div>
これは CAN インターフェースの回路図です。

### CAN 通信

このセクションでは、Jetson 上で CAN0↔CAN1 および CAN2↔CAN3 を接続し、Classic CAN モードと CAN‑FD モードの両方で、それぞれのペア間でデータを送受信する方法を示します。

| チャンネル名 | インターフェース種別 | ピン名 | GPIO チップ | GPIO 番号 | 終端抵抗制御 |
|--------------|----------------|----------|-----------|-------------|------------------------------|
| CAN0         | ネイティブ     | PAA.04   | gpiochip1 | 4           | gpiochip1 line4 (PAA.04)    |
| CAN1         | ネイティブ     | PAA.07   | gpiochip1 | 7           | gpiochip1 line7 (PAA.07)    |
| CAN2         | SPI-to-CAN     | -        | gpiochip2 | 10          | gpiochip2 line10             |
| CAN3         | SPI-to-CAN     | -        | gpiochip2 | 12          | gpiochip2 line12             |

CAN0 と CAN1 の終端抵抗は、2 つのピン PAA.04（gpiochip1 line4 に位置）と PAA.07（gpiochip1 line7 に位置）によって制御できます。  

終端抵抗の制御は次のルールに従います：  

```
When `PAA.04 = 1`, the 120 Ω termination resistor of CAN0 is **disconnected**;  
when `PAA.04 = 0`, the 120 Ω termination resistor of CAN0 is **connected**.

When `PAA.07 = 1`, the 120 Ω termination resistor of CAN1 is **disconnected**;  
when `PAA.07 = 0`, the 120 Ω termination resistor of CAN1 is **connected**.
```

次のコマンドを入力して、gpiochip 1 上のピンを表示します：

```bash
gpioinfo gpiochip1
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gpiochip1-can.png"/>
</div>

次のコマンドを参照して、`PAA.04` と `PAA.07` を 0 に設定します：

```bash
sudo gpioset --mode=wait gpiochip1 4=0
sudo gpioset --mode=wait gpiochip1 7=0
```

次のコマンドを参照して、`PAA.04` と `PAA.07` を 1 に設定します：

```bash
sudo gpioset --mode=wait gpiochip1 4=1
sudo gpioset --mode=wait gpiochip1 7=1
```

#### Classic CAN モード

次のスクリプトは、CAN0/CAN1 および CAN2/CAN3 間のループバック通信テストを実装しており、終端抵抗の有効化、ビットレートの設定、双方向データ伝送を含みます。

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_2.png"/>
</div>

配線図は次のとおりです：

| From | To |
| --- | --- |
| CAN0_H | CAN1_H |
| CAN0_L | CAN1_L |
| CAN2_H | CAN3_H |
| CAN2_L | CAN3_L |

配線図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/CAN-connect.png"/>
</div>

標準モードで CAN0↔CAN1 および CAN2↔CAN3 間のデータ送受信をテストするために、`test_can.sh` を作成します：

```bash
touch test_can.sh
sudo chmod +x test_can.sh
sudo ./test_can.sh
```

`test_can.sh` のスクリプトコードは次のとおりです：

<details>
<summary> test_can.sh </summary>

```sh
#!/bin/bash
set -e

PW="000000"

echo "$PW" | sudo -S ip link set can0 down || true
echo "$PW" | sudo -S ip link set can1 down || true
echo "$PW" | sudo -S ip link set can2 down || true
echo "$PW" | sudo -S ip link set can3 down || true

# Set socket buffer sizes
echo "$PW" | sudo -S sysctl -w net.core.rmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.rmem_default=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_default=524288

# Set bitrate, 1 Mbps
BITRATE=1000000
echo "$PW" | sudo -S ip link set can0 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can1 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can0 up
echo "$PW" | sudo -S ip link set can1 up

echo "$PW" | sudo -S ip link set can2 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can3 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can2 up
echo "$PW" | sudo -S ip link set can3 up

sleep 1

# Enable termination resistors
sudo pkill -f gpioset || true
gpioset --mode=time --sec=200000 gpiochip2 8=0 & # enable CAN1 120R
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 9=0 & # enable CAN0 120R
GPIO2_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 12=0 & # enable CAN3 120R
GPIO3_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 10=0 & # enable CAN2 120R
GPIO4_PID=$!

echo "Start candump on can0 & can1..."
candump can0 &
DUMP0_PID=$!
candump can1 &
DUMP1_PID=$!

echo "Start candump on can2 & can3..."
candump can2 &
DUMP2_PID=$!
candump can3 &
DUMP3_PID=$!

echo "Start cangen on can0 & can1 and can2 & can3 (bi-directional test)..."
# -g 10 sends one frame every 10 ms; adjust as needed
cangen can0 -g 10 &
GEN0_PID=$!
cangen can1 -g 10 & 
GEN1_PID=$!
cangen can2 -g 10 &
GEN2_PID=$!
cangen can3 -g 10 &
GEN3_PID=$!

# Cleanup background processes on Ctrl+C
cleanup() {
  echo
  echo "Stopping CAN test..."
  kill $GEN0_PID $GEN1_PID $DUMP0_PID $DUMP1_PID $GPIO1_PID $GPIO2_PID 2>/dev/null || true
  kill $GEN2_PID $GEN3_PID $DUMP2_PID $DUMP3_PID $GPIO3_PID $GPIO4_PID 2>/dev/null || true
  echo "$PW" | sudo -S ip link set can0 down || true
  echo "$PW" | sudo -S ip link set can1 down || true
  echo "$PW" | sudo -S ip link set can2 down || true
  echo "$PW" | sudo -S ip link set can3 down || true
  echo "Done."
}
trap cleanup INT TERM

# Wait for child processes (candump runs until you Ctrl+C)
wait
```

</details>

:::note
CAN テストスクリプト内の PW を、ご自身の Jetson のパスワードに置き換えてください。
:::

**CAN0** と **CAN1** 間のデータ送受信が完了します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test.png"/>
</div>

#### CAN-FD モード

CAN FD は、より高いデータ伝送レートと、より大きなデータフレーム長をサポートします。以下のスクリプトは、CAN FD のループバックテストを実装します。

CAN-FD モードで **CAN0↔CAN1** および **CAN2↔CAN3** 間のデータ送受信をテストするために `test_canfd.sh` を作成します：

```bash
touch test_canfd.sh
sudo chmod +x test_canfd.sh
sudo ./test_canfd.sh
```

`test_canfd.sh` のスクリプトコードは次のとおりです：

<details>
<summary> test_canfd.sh </summary>

```sh
#!/bin/bash
set -e

PW="000000"

echo "$PW" | sudo -S ip link set can0 down || true
echo "$PW" | sudo -S ip link set can1 down || true
echo "$PW" | sudo -S ip link set can2 down || true
echo "$PW" | sudo -S ip link set can3 down || true

# Set socket buffers
echo "$PW" | sudo -S sysctl -w net.core.rmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.rmem_default=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_default=524288

# ---- CAN-FD parameters ----
BITRATE=500000        # Arbitration (nominal) bitrate
DBITRATE=5000000      # Data phase bitrate (FD fast mode)

# Configure CAN-FD: arbitration bitrate + data bitrate + FD on + error reporting + auto restart
echo "$PW" | sudo -S ip link set can0 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can1 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can2 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can3 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100

echo "$PW" | sudo -S ip link set can0 up
echo "$PW" | sudo -S ip link set can1 up
echo "$PW" | sudo -S ip link set can2 up
echo "$PW" | sudo -S ip link set can3 up

sleep 1

# Enable termination resistors
sudo pkill -f gpioset || true
gpioset --mode=time --sec=200000 gpiochip2 8=0 &   # enable CAN1 120R
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 9=0 &   # enable CAN0 120R
GPIO2_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 12=0 &  # enable CAN3 120R
GPIO3_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 10=0 &  # enable CAN2 120R
GPIO4_PID=$!

echo "Start candump on can0 & can1..."
candump can0 &
DUMP0_PID=$!
candump can1 &
DUMP1_PID=$!

echo "Start candump on can2 & can3..."
candump can2 &
DUMP2_PID=$!
candump can3 &
DUMP3_PID=$!

echo "Start cangen on can0 & can1 and can2 & can3 (bi-directional test)..."
# -g 10 sends one frame every 10 ms; adjust as needed
cangen can0 -g 10 &
GEN0_PID=$!
cangen can1 -g 10 &
GEN1_PID=$!
cangen can2 -g 10 &
GEN2_PID=$!
cangen can3 -g 10 &
GEN3_PID=$!

# Cleanup background processes on Ctrl+C
cleanup() {
  echo
  echo "Stopping CAN-FD test..."
  kill $GEN0_PID $GEN1_PID $DUMP0_PID $DUMP1_PID $GPIO1_PID $GPIO2_PID 2>/dev/null || true
  kill $GEN2_PID $GEN3_PID $DUMP2_PID $DUMP3_PID $GPIO3_PID $GPIO4_PID 2>/dev/null || true
  echo "$PW" | sudo -S ip link set can0 down || true
  echo "$PW" | sudo -S ip link set can1 down || true
  echo "$PW" | sudo -S ip link set can2 down || true
  echo "$PW" | sudo -S ip link set can3 down || true
  echo "Done."
}
trap cleanup INT TERM

# Wait for child processes (candump will run until you Ctrl+C)
wait
```

</details>

:::note
CAN テストスクリプト内の PW を、ご自身の Jetson のパスワードに置き換えてください。
:::

**CAN0↔CAN1** および **CAN2↔CAN3** 間のデータ送受信が完了します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test_2.png"/>
</div>

## DI/DO

reComputer Robotics J501 の DI/DO インターフェースは、J25 2x10P コネクタ上に統合されており、CAN インターフェースとインターフェースを共有しています。4 チャンネルのデジタル入力と 4 チャンネルのデジタル出力をサポートし、安定した信号伝送と産業グレードの電圧適応を備えているため、デジタルセンサ、リレー、その他の周辺機器の接続に適しています。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_test.png"/>
</div>

### ハードウェア接続

#### デジタル入力（DI）チャネル

| チャネル名 | 電圧特性 | GPIO ラベル | ピン名 | GPIO チップ | GPIO 番号 |
|--------------|-------------------------|------------|----------|-----------|-------------|
| DI_12V_1     | 12V 入力適応           | DI_1_GPIO17 | PP.04    | gpiochip0 | 96          |
| DI_12V_2     | 12V 入力適応           | DI_1_GPIO18 | PQ.04    | gpiochip0 | 104         |
| DI_12V_3     | 12V 入力適応           | DI_1_GPIO19 | PN.02    | gpiochip0 | 86          |
| DI_12V_4     | 12V 入力適応           | DI_1_GPIO33 | PM.07    | gpiochip0 | 83          |

#### デジタル出力（DO）チャネル

| チャネル名 | 電圧特性 | GPIO ラベル | ピン名 | GPIO チップ | GPIO 番号 | 追加情報 |
|--------------|-------------------------|------------|----------|-----------|-------------|-----------------|
| DO_40V_1     | オープンドレイン出力；プルアップされていないときは約 0V（Low）、プルアップされているときは 12V（High） | DO_1_GPIO | PAA.04 | gpiochip1 | 4 | 対応番号：320 |
| DO_40V_2     | オープンドレイン出力；プルアップされていないときは約 0V（Low）、プルアップされているときは 12V（High） | DO_2_GPIO | PAA.07 | gpiochip1 | 7 | 対応番号：323 |
| DO_40V_3     | オープンドレイン出力；プルアップされていないときは約 0V（Low）、プルアップされているときは 12V（High） | DO_3_GPIO | PBB.01 | gpiochip1 | 9 | 対応番号：325 |
| DO_40V_4     | オープンドレイン出力；プルアップされていないときは約 0V（Low）、プルアップされているときは 12V（High） | DO_4_GPIO | PBB.00 | gpiochip1 | 8 | 対応番号：324 |

J25 コネクタ上の DI/DO インターフェースの主要なピン定義は次のとおりです（ピン番号は物理コネクタに対応します）：

| ピン番号 | 機能ラベル | 説明 |
|------------|----------------|-------------|
| 1          | DI_12V_1       | 12V デジタル入力チャネル 1 |
| 3          | DI_12V_2       | 12V デジタル入力チャネル 2 |
| 5          | DI_12V_3       | 12V デジタル入力チャネル 3 |
| 7          | DI_12V_4       | 12V デジタル入力チャネル 4 |
| 9          | GND_DI         | デジタル入力チャネル用 GND |
| 2          | DO_40V_1       | 40V デジタル出力チャネル 1 |
| 4          | DO_40V_2       | 40V デジタル出力チャネル 2 |
| 6          | DO_40V_3       | 40V デジタル出力チャネル 3 |
| 8          | DO_40V_4       | 40V デジタル出力チャネル 4 |
| 10         | GND_DO         | デジタル出力チャネル用 GND |

:::note
完全なピン配置（CAN インターフェースを含む）については、誤接続を避けるために reComputer Robotics J501 のハードウェアドキュメントを参照してください。
:::

### 使用手順

**デジタル出力（DO）の操作**

DO インターフェースはオープンドレイン出力を採用しています。コマンドによって出力レベル（High/Low）を設定し、リレーや LED などの周辺機器を制御できます。

次のコマンドを実行して DO チャネルを有効化します（外部プルアップ抵抗および 12V 電源により 12V を出力）：

```
# Enable DO_40V_1 (gpiochip1 4)
sudo gpioset --mode=wait 1 4=1

# Enable DO_40V_2 (gpiochip1 7)
sudo gpioset --mode=wait 1 7=1

# Enable DO_40V_3 (gpiochip1 9)
sudo gpioset --mode=wait 1 9=1

# Enable DO_40V_4 (gpiochip1 8)
sudo gpioset --mode=wait 1 8=1
```

DO プルアップ前：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_before.png"/>
</div>

DO プルアップ後：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/do_after.png"/>
</div>

次のコマンドを実行して DO チャネルを無効化します（出力約 0V）：

```
# Disable DO_40V_1 (gpiochip1 4)
sudo gpioset --mode=wait 1 4=0

# Disable DO_40V_2 (gpiochip1 7)
sudo gpioset --mode=wait 1 7=0

# Disable DO_40V_3 (gpiochip1 9)
sudo gpioset --mode=wait 1 9=0

# Disable DO_40V_4 (gpiochip1 8)
sudo gpioset --mode=wait 1 8=0
```

**デジタル入力（DI）の操作**

`gpioget` コマンドを使用して DI チャネルの入力レベルを読み取り（戻り値 `1` = High レベル、`0` = Low レベル）、周辺機器の状態を取得します。

DI チャネルレベルを読み取るコマンドは次のとおりです：

```
# Read DI_12V_1 (gpiochip0 96) status
gpioget gpiochip0 96

# Read DI_12V_2 (gpiochip0 104) status
gpioget gpiochip0 104

# Read DI_12V_3 (gpiochip0 86) status
gpioget gpiochip0 86

# Read DI_12V_4 (gpiochip0 83) status
gpioget gpiochip0 83
```

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_set.png"/>
</div>

## SPI

### ハードウェア接続

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi.png"/>
</div>

### 使用手順

Dupont ワイヤを使用して、対象 SPI チャネルのコアピンを接続します（/dev/spidev2.0 を例とします）：
SPI2.0 の MOSI ピンをその MISO ピンに接続します（データのループバック送受信を実現）。

配線図は次のとおりです：
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_conn_2.png"/>
</div>

:::note
SPI を使用するには、上図のようにドライバーを使ってデバイスの側面カバーを取り外してください。
:::

**ステップ 1：SPI カーネルモジュールのロード（前提条件）**
SPI インターフェースを操作する前に、`spidev` カーネルモジュールがロードされていることを確認します（デフォルトのシステムでは事前にロードされている場合がありますが、手動で確認することを推奨します）：

```bash
sudo modprobe spidev
```

:::note
コマンド実行時にエラーが表示されなければ、モジュールが正常にロードされていることを意味します。すでにロード済みの場合、コマンドは何も情報を返しませんが、これは正常な動作です。
:::

**ステップ 2：SPI デバイスノードの確認**
reComputer Robotics J501 の SPI インターフェースにマッピングされているデバイス名を確認するために、ターミナルで次のコマンドを入力します：

```bash
ls /dev/spidev*
```

デバイスノードが表示されない場合は、`spidev` モジュールが正常にロードされていないことを意味します。`sudo modprobe spidev` を再実行し、システムログを確認してトラブルシューティングを行ってください。

**ステップ 3: SPI テストコードの取得とコンパイル**
GitHub から `spidev-test` テストコードを取得し、コンパイルします：

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**ステップ 4: SPI テストプログラムの実行**
ターミナルで次のコマンドを入力して SPI テストプログラムを実行します（`/dev/spidev2.0` を例とします）：

```bash
sudo ./spidev_test -v -D /dev/spidev2.0 -s 100000
```

**ステップ 5: テスト結果の確認**
テストコマンドを実行した後、ターミナル上で SPI2.0 インターフェースのデータ送受信状況を確認できます。主な出力は次のとおりです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_out.png"/>
</div>

> 重要な判定基準：TX（送信）データと RX（受信）データが一致していれば、SPI ループバックテストが成功し、SPI インターフェース機能が正常であることを示します。

## UART

reComputer Robotics J501 には、RS232、RS422、および RS485 通信モードをサポートする 2 つの独立した UART インターフェース（UART1 と UART2）が搭載されており、信号伝送が安定しており、周辺機器との高い互換性を備えています。

### ハードウェア接続

#### UART インターフェースチャネル

| チャネル名 | デバイスノード | 対応モード | デフォルトボーレート | GPIO 有効化コマンド | モード切り替え方法 |
|--------------|-------------|-----------------|-------------------|--------------------|-------------------|
| UART1 (DB9-1) | /dev/ttyTHS1 | RS232, RS422, RS485 | RS232: 115200 bps; RS422/RS485: 9600 bps | `gpioset --mode=wait gpiochip0 2=0` | SW3 ディップスイッチ（8 ピン DIP） |
| UART2 (DB9-2) | /dev/ttyTHS4 | RS232（デフォルト） | 115200 bps | `gpioset --mode=wait gpiochip2 15=0` | RS232 固定（スイッチなし） |

**ピン配置定義（DB9 コネクタ）**

各 DB9 ピンの機能は通信モードによって異なります。正確な配線のために、以下の表を参照してください（ピン番号は標準的な DB9 オスコネクタ仕様に従います）：

| DB9 ピン番号 | RS232 モード機能 | RS422 モード機能 | RS485 モード機能 |
|----------------|---------------------|---------------------|---------------------|
| 1              | -                   | TXD-（送信データ -） | Data-（差動データ -） |
| 2              | RXD（受信データ）   | TXD+（送信データ +） | Data+（差動データ +） |
| 3              | TXD（送信データ）   | RXD+（受信データ +） | -                   |
| 4              | -                   | RXD-（受信データ -） | -                   |
| 5              | GND（グラウンド）   | GND（グラウンド）   | GND（グラウンド）   |
| 6              | -                   | -                   | -                   |
| 7              | RTS（送信要求）     | -                   | -                   |
| 8              | CTS（送信許可）     | -                   | -                   |
| 9              | -                   | -                   | -                   |

**モード設定（SW3 ディップスイッチ）**

モード切り替えに SW3 ディップスイッチを使用できるのは UART1（DB9-1）のみです（UART2 は RS232 固定）。スイッチは 8 ピン DIP タイプで、回路図上では MODE_0、MODE_1、MODE_2 として示されるコア設定ピンがあります。

インターフェースは次の図のようになっています：
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/Switch.png"/>
</div>

**設定ルール**

| 動作モード | ディップスイッチの組み合わせ（MODE_2, MODE_1, MODE_0） | スイッチ状態の操作 |
|--------------|------------------------------------------------|------------------------|
| RS232        | 0 (OFF), 0 (OFF), 1 (ON)                       | MODE_0：ON に切り替え；MODE_1/MODE_2：OFF のまま |
| RS422        | 0 (OFF), 0 (OFF), 0 (OFF) または 1 (ON), 0 (OFF), 0 (OFF) | MODE_0/MODE_1：OFF のまま；MODE_2：任意（ON/OFF） |
| RS485        | 0 (OFF), 1 (ON), 0 (OFF) または 1 (ON), 1 (ON), 0 (OFF) | MODE_1：ON に切り替え；MODE_0/MODE_2：任意（ON/OFF） |

:::note
ハードウェア接続が完了したら、ターミナルソフトウェア（例：CuteCom）を使用して UART 通信機能をテストします。CuteCom がインストールされていない場合は、`sudo apt-get install cutecom` を実行してインストールしてください。UART チャネルが GPIO コマンドによって有効化されていることを確認してください。
:::

### 使用手順

**GPIO 有効化コマンド**

接続前に、ターミナルで GPIO 有効化コマンドを実行して、対応する UART チャネルを有効にします：

```bash
# Enable UART1 (ttyTHS1)
sudo gpioset --mode=wait gpiochip0 2=0

# Enable UART2 (ttyTHS4)
sudo gpioset --mode=wait gpiochip2 15=0
```

#### RS232 モードテスト

ここでは、USB から RS232 へのアダプタを使用してインターフェースをテストできます。テストには [UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) を使用しました。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_1.png"/>
</div>

配線図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/232-PC.png"/>
</div>

**ステップ 1: CuteCom の起動**
`sudo cutecom` を実行して、CuteCom ターミナルソフトウェアを起動します。

**ステップ 2: シリアルポートパラメータの設定**
シリアルポートを次のパラメータで設定します：

- デバイス: `/dev/ttyTHS1`（UART1）または `/dev/ttyTHS4`（UART2）
- ボーレート: 115200 bps
- データビット: 8、パリティ: なし、ストップビット: 1、フロー制御: なし

**ステップ 3: シリアルポートを開く**
"Open Device" をクリックしてシリアルポートを開きます。

**ステップ 4: テストデータの送信**
テストデータ（例："232 test from jetson"）を送信し、周辺機器からのデータ受信を確認します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_2.png"/>
</div>
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_3.png"/>
</div>

#### RS485 モードテスト

ここでは、USB から RS485 へのアダプタを使用してインターフェースをテストできます。テストには [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) を使用しました。

配線図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**ステップ 1: CuteCom の起動**
`sudo cutecom` を実行して、CuteCom ターミナルソフトウェアを起動します。

**ステップ 2: シリアルポートパラメータの設定**
シリアルポートを次のパラメータで設定します：

- デバイス: `/dev/ttyTHS1`
- ボーレート: 9600 bps
- データビット: 8、パリティ: なし、ストップビット: 1、フロー制御: なし

**ステップ 3: シリアルポートを開く**
"Open Device" をクリックしてシリアルポートを開きます。

**ステップ 4: テストデータの送信**
テストデータ（例："485 test from jetson"）を送信し、周辺機器からのデータ受信を確認します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs485_1.png"/>
</div>

#### RS422 モードテスト

ここでは、USB から RS422 へのアダプタを使用してインターフェースをテストできます。テストには [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) を使用しました。

配線図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**ステップ 1: CuteCom の起動**
`sudo cutecom` を実行して、CuteCom ターミナルソフトウェアを起動します。

**ステップ 2: シリアルポートパラメータの設定**
シリアルポートを次のパラメータで設定します：

- デバイス: `/dev/ttyTHS1`
- ボーレート: 9600 bps
- データビット: 8、パリティ: なし、ストップビット: 1、フロー制御: なし

**ステップ 3: シリアルポートを開く**
"Open Device" をクリックしてシリアルポートを開きます。

**ステップ 4: テストデータの送信**
テストデータ（例："422 test from jetson"）を送信し、周辺機器からのデータ受信を確認します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs422.png"/>
</div>

## RTC

reComputer Robotics J501 には、バッテリバックアップ付きのハードウェア RTC が搭載されており、正確な時刻保持が可能です。RTC にバックアップ電源を供給する方法は 2 通りあります：

1. CR1220 コイン電池ホルダ（J14）を使用する
2. RTC 2 ピンヘッダ J4 を使用して外部電源を接続する

### ハードウェア接続

**方法 1: CR1220 コイン電池ホルダを使用**

下図のように、3V CR1220 コイン電池をボード上の RTC ソケットに接続します。電池のプラス（+）側が上向きになっていることを確認してください。

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_0.png"/>
</div>

**方法 2: RTC 2 ピンヘッダを使用**

RTC 2 ピンヘッダは、RTC に外部電源を接続するための代替手段を提供します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2pin_pinout.png"/>
</div>

### 使用手順

**ステップ 1.** 上述のいずれかの方法で RTC バッテリを接続します。

**ステップ 2.** reComputer Robotics J501 の電源を入れます。

**ステップ 3.** Ubuntu デスクトップで右上のドロップダウンメニューをクリックし、`Settings > Date & Time` に移動して、Ethernet ケーブルでネットワークに接続し、**Automatic Date & Time** を選択して日付と時刻を自動取得します。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_1.png"/>
</div>

:::note
Ethernet 経由でインターネットに接続していない場合は、ここで日付と時刻を手動で設定できます。
:::

**ステップ 4.** ターミナルウィンドウを開き、次のコマンドを実行してハードウェアクロックの時刻を確認します：

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Step 5.** ネットワーク接続を切断してデバイスを再起動します。システム時刻は電源を失っていますが、引き続き正常に動作していることが分かります。
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2.png"/>
</div>

## ディスプレイ

Robotics J501 には、高解像度ディスプレイ出力用の HDMI が搭載されています。

## 拡張ポート

Robotics J501 キャリアボードには、GMSL 拡張ボード用のカメラ拡張ヘッダが搭載されています。4 台の GMSL カメラを同時に接続して動作させることができます。

### ハードウェア接続

以下は Robotics J501 キャリアボードの GMSL カメラ拡張ボード接続スロットです（事前に拡張ボードを用意しておく必要があります）:

<div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_1.png"/>
  </div>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_2.png"/>
  </div>
</div>

以下は、すでにサポートしている GMSL カメラのモデルです：

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### 使用手順

:::note
GMSL 機能を有効にする前に、GMSL 拡張ボードドライバを含む JetPack バージョンをインストールしていることを確認してください。
:::

### Jetson IO ファイルの設定

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_1.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_2.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_3.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_4.png"/>
</div>

:::note
オーバーレイファイルは全部で 3 つあり、それぞれ Seeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4、および Orbbec Gemini 335Lg です。これらはそれぞれ、SG3S の 3G カメラ、SG2 および SG8S の 6G カメラ、そして Orbbec のカメラに対応しています。図 3 に示すように、お使いのカメラのモデルに応じて io ファイルを設定してください。
:::

**step 2.** ビデオインターフェース設定ツールをインストールします。

```bash
sudo apt update
sudo apt install v4l-utils wmctrl
```
<!-- 
### Use the camera of Gemini 335Lg

The first time you turn it on, you might need to update the firmware.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

Opening the data stream, you can view the video from the camera.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div> -->

### SGxxx シリーズのカメラを使用する

**step 1.** フレーム同期モードを設定します（デフォルトでは有効になっていません！）。

:::info
ここでは、異なるモデルおよび解像度のカメラを設定する方法を示します。
:::

```bash
#enables frame synchronization
v4l2-ctl -d /dev/video0 --set-ctrl=trig_mode=1
#Set the frame rate of the camera
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0 --stream-mmap -d /dev/video0
#Set the camera format
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0 -d /dev/video0
```

:::note
`trig_mode = 1` はフレーム同期を有効にし、`trig_mode = 0` はフレーム同期を無効にします。デフォルト設定はフレーム同期を無効にすることです。

`--set-fmt-video` は、接続されているカメラに基づいて選択された解像度に従います。現在、3 つの sensor_mode オプションがあり、それぞれ異なる解像度に対応しています。

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**step 2.** カメラを起動します。

```bash
gst-launch-1.0 \
    v4l2src device=/dev/video0 ! \
    video/x-raw,format=YUY2,width=1920,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video1 ! \
    video/x-raw,format=YUY2,width=1920,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video2 ! \
    video/x-raw,format=YUY2,width=1536,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video3 ! \
    video/x-raw,format=YUY2,width=3840,height=2160,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_preview.png"/>
</div>

## リソース

- [reComputer Robotics J501 キャリアボード回路図](https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer%20Robotics%20J501%20Main%20Board%20for%20Jetson%20AGX%20Orin_V1.0_SCH_2512161.pdf)
- [reComputer Robotics J501 キャリアボードデータシート](https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer_robotics_J501_datasheet.pdf)
- [Seeed NVIDIA Jetson 製品カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Nvidia Jetson 比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Nvidia Jetson 導入事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson ワンページ資料](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Seeed の L4T ソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

<!-- - [reComputer Robotics 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp) -->
<!-- - [Mechanical Document-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf) -->
## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
