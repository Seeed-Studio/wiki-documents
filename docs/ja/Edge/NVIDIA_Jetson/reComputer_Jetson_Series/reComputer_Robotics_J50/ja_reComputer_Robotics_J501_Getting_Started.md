---
description: このwikiは、reComputer Jetson Robotics J501キャリアボードのハードウェア機能とインターフェース使用方法について包括的な紹介を提供します。詳細な仕様、サポートされるモジュール、セットアップ手順、デュアルM.2 Key Mスロット、10GbE + 4x 1GbEイーサネット、USB 3.0、4つのCANインターフェース（2つのネイティブ + 2つのSPI-to-CAN）、UART、DI/DO、I2S、GMSL2カメラ拡張などの様々なインターフェースの実用的なガイドを含み、ユーザーがJ501プラットフォームでのロボティクス開発を迅速に開始できるよう支援します。
title: JetPackフラッシュ && インターフェース使用方法
tags:
  - reComputer Robotics J501
  - Flash Jetpack
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg
slug: /ja/ai_robotics_recomputer_j501_robotics_getting_started
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 12/09/2025
  author: Lorraine
---

# Robotics J501 ハードウェアと入門ガイド

reComputer Robotics J501は、高度なロボティクスと産業用アプリケーション向けに設計された高性能エッジAIキャリアボードです。MAXNモードでNVIDIA Jetson AGX Orinモジュール（32GB/64GB）と互換性があり、最大275 TOPSのAI性能を提供します。

豊富な接続オプション（1x 10GbEと4x 1GbEイーサネットポート、NVMe SSD用デュアルM.2 Key Mスロット、5GとWi-Fi/BTモジュール用M.2スロット、複数のUSB 3.0ポート、4つのCANインターフェース（2つのネイティブ + 2つのSPI-to-CAN）、GMSL2カメラ拡張、DI/DO、I2S、UART、RS485を含む包括的なI/O）を装備し、複雑なマルチセンサー融合とリアルタイムAI処理のための強力なロボティクスブレインとして機能します。

JetPack 6.2.1とLinux BSPがプリインストールされており、シームレスな展開を保証します。NVIDIA Isaac ROS、Hugging Face、PyTorch、ROS 2/1などのフレームワークをサポートし、J501は大規模言語モデル駆動の意思決定と物理的ロボティクス制御を橋渡しし、すぐに使用できるインターフェースと最適化されたAIフレームワークで自律ロボットの開発を加速します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>

## 主な特徴  

- **高性能AI**: Jetson AGX Orin 32/64GBモジュール、AmpereGPUとDLAエンジンで最大275 TOPS
- **豊富な接続性**: デュアルM.2 Key M（NVMe）；Key E（WiFi/BT）+ Key B（5G）；1x 10GbE + 4x 1GbE；3x USB 3.0；2x USB-C
- **クアッドCAN-FD**: 2つのネイティブ + 2つのSPI-to-CANインターフェース（電気的絶縁付き）
- **GMSL2ビジョン**: 高速カメラ接続用の単一GMSL2インターフェース（1x）
- **産業用設計**: 19-48V DC入力；-10~60°C動作；絶縁インターフェース；JetPack 6.2.1プリインストール
- **ロボティクス対応**: ROS 2/1、Isaac ROSサポート；DI/DO、I2S、UART、RS485；AMRと自動化最適化

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson AGX Orin System on Module</th>
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
      <td>32GB 256ビット LPDDR5 @ 204.8 GB/s</td>
      <td>64GB 256ビット LPDDR5 @ 204.8 GB/s</td>
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
      <td>CSIカメラ</td>
      <td colSpan={2}>最大6台のカメラ（仮想チャネル経由で16台）<br/>16レーン MIPI CSI-2<br/>D-PHY 2.1（最大40Gbps）/ C-PHY 2.0（最大164Gbps）</td>
    </tr>
    <tr>
      <td>機械的仕様</td>
      <td colSpan={2}>100mm x 87mm<br/>699ピン Molex Mirror Mezzコネクタ<br/>統合熱伝達プレート</td>
    </tr>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>キャリアボード</th>
    </tr>
    <tr>
      <th>ストレージ</th>
      <td colSpan={2}>2x M.2 Key-M（NVMe 2280 SSD）<br/>1x M.2 Key-B（4G/5Gモジュール用）</td>
    </tr>
    <tr>
      <th>ネットワーク</th>
      <td colSpan={2}>1x M.2 Key-E（WiFi/BT）<br/>1x RJ45 10GbE + 4x RJ45 1GbE</td>
    </tr>
    <tr>
      <th>USB</th>
      <td colSpan={2}>3x USB 3.0 Type-A<br/>1x USB 3.0 Type-C（リカバリ）<br/>1x USB 2.0 Type-C（デバッグUART）</td>
    </tr>
    <tr>
      <th>DI/DO/CAN</th>
      <td colSpan={2}>1x 2x10P 3.81mmターミナルブロック - 4x DI @12V + 4x DO @40V + 4x CAN（CAN-FDサポート、電気的絶縁）</td>
    </tr>
    <tr>
      <th>GMSL</th>
      <td colSpan={2}>2x Mini-Fakraコネクタ（8x GMSL2カメラ用）（オプション）</td>
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
      <td colSpan={2}>1x リカバリ + 1x リセット</td>
    </tr>
    <tr>
      <th>LED</th>
      <td colSpan={2}>3x LED（PWR、SSD、ユーザーLED）</td>
    </tr>
    <tr>
      <th>RTC</th>
      <td colSpan={2}>1x CR1220バッテリーホルダー、1x RTC 2ピンヘッダー</td>
    </tr>
    <tr>
      <th>電源入力</th>
      <td colSpan={2}>19-48V DC（5.08mmターミナルブロック経由）（電源アダプターは含まれません）</td>
    </tr>
    <tr>
      <th>消費電力</th>
      <td colSpan={2}>Jetson AGX Orinモジュール：最大60W（MAXNモード）<br/>システム全体のピーク：75W（周辺機器を含む）</td>
    </tr>
    <tr>
      <th>ソフトウェア</th>
      <td colSpan={2}>Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th>機械的仕様</th>
      <td colSpan={2}>
        寸法：210mm x 180mm x 87mm（スタンド付き）<br/>
        重量：200g<br/>
        取り付け：デスク / 壁 / DINレール（DINブラケットはアクセサリに含まれます）<br/>
        動作温度：-10℃~60℃（25W）/ -10℃~55℃（MAXN）
      </td>
    </tr>
    <tr>
      <th>保証</th>
      <td colSpan={2}>2年</td>
    </tr>
    <tr>
      <th>認証</th>
      <td colSpan={2}>RoHS、REACH、CE、FCC、UKCA、KC</td>
    </tr>
  </tbody>
</table>
</div>

**GMSL拡張ボード仕様（オプション）**

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>デシリアライザ</th>
      <td>MAX96712</td>
    </tr>
    <tr>
      <th>GMSLインターフェース</th>
      <td>2x Robotics-Fakraオスコネクタ</td>
    </tr>
    <tr>
      <th>GMSL入力</th>
      <td>最大8x GMSL2カメラ</td>
    </tr>
    <tr>
      <th>接続方法</th>
      <td>GMSL2 Fakra 1対4 M-Mケーブル</td>
    </tr>
    <tr>
      <th>POCインターフェース機能</th>
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

## 📦 JetPack OSのフラッシュ

### サポートされるモジュール

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 前提条件

- UbuntuホストPC
- reComputer Robotics J501
- USB Type-Cデータ伝送ケーブル

:::info

仮想マシンではなく、物理的なUbuntuホストデバイスを使用することをお勧めします。
ホストマシンを準備するために、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPackバージョン </td>
        <td class="dbon" colspan="3"> Ubuntuバージョン（ホストコンピュータ） </td>
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

### Jetpackイメージの準備

ここでは、使用しているJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードする必要があります：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpackバージョン</th>
      <th>Jetsonモジュール</th>
      <th> GMSL </th>
      <th>ダウンロードリンク1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDPKrVl7UDaTYXmxi1CoTu2AcsHUPKLqNw_olmvlPBODqQ?e=gWuNzv">ダウンロード</a></td>
      <td>ed82745decdf554d82bd93441f1f4ad<br/>149f395a4ba5719664ce2351be8201522  </td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB3JLwYRpS8SqoqjWuXJmmmAW56Nvpdn8YnbYLW7g5_FHM?e=Gqe1XR">ダウンロード</a></td>
      <td>58fa8b76754449b0a49ad7d5f273edd<br/>f3e1d1f458cdb34994f6d8643da7a1249 </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6イメージファイルのサイズは約**14.2GB**で、ダウンロードには約60分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較できます。

Ubuntuホストマシンで、ターミナルを開いて`sha256sum <File>`コマンドを実行し、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

⚙️ **SEEDのJetsonキャリアボード用のすべての`.dts`ファイルとその他のソースコードは** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) **からダウンロードできます**

### 強制リカバリモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。
:::

<details>

<summary> ステップバイステップ </summary>

**ステップ1.** USB2.0 DEVICEポートとUbuntuホストPC間にUSB Type-Cデータ転送ケーブルを接続します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/flash_1.png" />
</div>

**ステップ2.** ピンを使ってRECOVERYホールに挿入し、リカバリボタンを押しながら保持します。

**ステップ3.** 電源を接続します。

**ステップ4.** リカバリボタンを離します。

**ステップ5.** LinuxホストPCでターミナルウィンドウを開き、`lsusb`コマンドを入力します。使用するJetson SoMに応じて、返される内容に以下の出力のいずれかが含まれている場合、ボードは強制リカバリモードになっています。

- AGX Orin 32GBの場合：**0955:7223 NVidia Corp**
- AGX Orin 64GBの場合：**0955:7023 NVidia Corp**

以下の画像はAGX Orin 32GBの場合です：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Jetsonにフラッシュする

**ステップ1：** ダウンロードしたイメージファイルを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-agx-orin-32g-j501-6.2.1-36.4.4-2025-11-01.tar.gz
```

**ステップ2：** 以下のコマンドを実行してjetpackシステムをNVMe SSDにフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-robo-agx-orin-j501x
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは2〜10分間実行される場合があります。
:::

**ステップ3：** Robotics J501をPD to HDMIアダプターを使用してHDMI入力をサポートするディスプレイに接続するか、PDケーブルを使用してPD入力をサポートするディスプレイに直接接続し、初期設定セットアップを完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
必要に応じて**System Configuration**を完了してください。
:::

## 🔌 インターフェース使用方法

以下では、Robotics J501ボードの様々なインターフェースとその使用方法を紹介します。

## M.2 Key M

J501には、高速ストレージ拡張用のPCIe Gen4x4 NVMe SSDをサポートするデュアルM.2 Key Mスロットが含まれています。

### サポートされているSSDは以下の通りです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-5768.html)

### ハードウェア接続

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m_1.png"/>
</div>

### 使用方法

Jetsonデバイスでターミナルを開き、以下のコマンドを入力してSSDの読み書き速度をテストします。

**ステップ1.** テストディレクトリとファイルを作成：

```bash
mkdir ssd
touch ~/ssd/test
```

**ステップ2.** 書き込み性能をテスト：

```bash
dd if=/dev/zero of=/home/$USER/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m2.png"/>
</div>

**ステップ3.** SSD情報を確認：

```bash
nvme list
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>

:::danger
テスト完了後は、sudo rm /home/$USER/ssd/testコマンドを実行してキャッシュファイルを削除してください。
:::

## M.2 Key E (WiFi/BT)

M.2 Key Eスロットは、ワイヤレス接続用のWi-Fi 6およびBluetooth 5.xモジュールをサポートします。


### ハードウェア接続

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_1.png"/>
</div>

:::tip

**注意：インターフェースを使用する前に、筐体のネジを外し、以下の図に示すように対応するモジュールを取り付ける必要があります。**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### 使用方法

**性能テスト：**
Wi-Fi性能をテストするには、以下のコマンドを使用します（IPアドレスをテストサーバーのものに置き換えてください）：

```bash
# On server: iperf3 -s
# On client:
iperf3 -c 192.168.7.157
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_2.png"/>
</div>

Bluetooth機能はM.2 Key Eスロット経由で利用できます。
**Bluetoothテスト：**
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_3.png"/>
</div>

## M.2 Key B (4G/5Gモジュール)

M.2 Key Bスロットは、Nano SIMカードホルダー付きの4G/5Gセルラーモジュールをサポートします。

### ハードウェア接続

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/keyb-keye.png"/>
</div>

:::tip

**注意：インターフェースを使用する前に、筐体のネジを外し、以下の図に示すように対応するモジュールを取り付ける必要があります。**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### 使用方法

**ステップ1.** ハードウェア認識を確認

```bash
lsusb 
```

このコマンドは、システムに接続されているすべてのUSBデバイスのリストを、製造元（ID）、タイプ、その他の情報と共に表示します。例えば、出力にQuectel Wireless Solutions Co., Ltd. EM12-Gのデバイスが表示される場合、5Gモジュールが存在することを示しています。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_1.png"/>
</div>

**ステップ2.** ドライバーの読み込みを確認
5Gモジュールに必要なoptionドライバーが読み込まれていることを確認することが重要です。lsmodコマンドを使用して確認できます。

```bash
lsmod | grep option 
```

optionドライバーが正常に読み込まれている場合、出力にドライバーに関する関連情報が表示されます。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_2.png"/>
</div>

**ステップ3.** ModemManagerを設定
ModemManagerはモデムデバイスを管理するためのツールで、インストールして再起動する必要があります。

```bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

apt installコマンドはModemManagerパッケージをインストールするために使用され、systemctl restartは新しい設定が有効になるようにModemManagerサービスを再起動します。

**ステップ4.** モジュール識別を確認
mmcli -Lコマンドを使用して、ModemManagerが5Gモジュールを正しく識別できるかどうかを確認できます。

```bash
mmcli -L 
```

5Gモジュールが認識されている場合、/org/freedesktop/ModemManager1/Modem/0のような出力が表示され、検出されたモデムデバイスへのパスを示します。
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_3.png"/>
</div>

**ステップ5.** APNを設定
APN（Access Point Name）は、モバイルデバイスをネットワークに接続するために重要です。nmcliコマンドを使用してベアラープロファイルを作成します。中国移動を例に、以下のコマンドで設定ファイルを作成できます：

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

このコマンドは、新しいGSM（Global System for Mobile Communications）タイプの接続を追加し、APNを「CMNET」として指定し、自動IPv4設定を使用します。

**ステップ6.** 接続をアクティベート
ベアラープロファイルを作成した後、接続をアクティベートする必要があります。

```bash
sudo nmcli con up "gsm" 
```

このコマンドはGSM接続をアクティベートし、成功した場合は確認メッセージが表示されます。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_4.png"/>
</div>

**ステップ7.** モジュール識別を再確認
APNを設定した後、モジュールが認識されたままであることを確認するために、mmcli -Lコマンドを再度実行します。

```bash
mmcli -L 
```

**ステップ8.** モジュールステータスを確認
最後に、mmcli -m 0コマンドを使用して、IP割り当て、キャリア、ネットワーク接続ステータスなど、モジュールの詳細情報を表示できます。

```bash
mmcli -m 0 
```

このコマンドは、製造元、モデル、サポートされている現在のネットワーク技術、デバイスステータス、接続されているネットワークオペレーターなど、5Gモジュールに関する包括的な詳細を提供します。
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_5.png"/>
</div>

## Ethernet

Robotics J501は、1x 10GbE（ネイティブ）と4x 1GbE（PCIeスイッチ経由）RJ45ポートを提供します。10GbEポートはTI TQSPH-10G PHYを搭載し、5つの速度をサポートします：10/5/2.5/1/0.1 GbE。1GbEポートは10/100/1000M速度をサポートします。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_1.png"/>
</div>

**ポートごとのLEDインジケーター：**

- **緑色LED：** 10G/5G/2.5G/1000Mリンクで点灯
- **黄色LED:** ネットワークアクティビティで点滅

Ethernetポートの速度をテストするには、次のように `iperf3` を使用します：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` は iperf3 サーバーの IP アドレスです。クライアントはこのサーバーに接続して帯域幅テストを実行します。
`<bind_ip>` は、テストトラフィックのソースとして指定されたローカル IP アドレスをバインドします。
:::

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_speed.png"/>
</div>

## LED

J501 には複数のステータス LED が搭載されています：

- **PWR LED:** 電源ステータス（緑色）
- **ACT LED:** システムアクティビティ（黄色）
- **USR LED:** GPIO 制御経由

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_1.png"/>
</div>

### 使用方法

以下では、USER LED を緑、赤、または青に制御する方法を示します。

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

LED 制御効果は下図に示されています：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_test.png"/>
</div>

## USB

Robotics J501 は、4つの USB 3.2 Type-A ポート（内部 USB 3.1 Gen1 ハブ経由、高速周辺機器、ストレージデバイス、またはカメラの接続用に最大 5Gbps のデータレートをサポート）と 1つの USB 2.0 Type-C デバッグポート（システムログへのアクセス、ブート問題のデバッグ、ファームウェア更新を行うためのシリアルコンソールとして機能）を提供します。

### USB-A 速度テスト

USB デバイスの速度をテストするスクリプトを作成します：

```bash
vim test_usb.sh
```

以下の内容を貼り付けます：
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

スクリプトを実行可能にしてテストします：

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

このシリアルポートを使用して、USB-C データケーブル経由で PC 側の入出力デバッグ情報を監視できます。

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug.png"/>
</div>

**ステップ 1.** シリアルポートツール（ここでは MobaXterm ツールを例として使用）を開き、新しいセッションを作成します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**ステップ 2.** Serial ツールを選択します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**ステップ 3.** 対応するシリアルポートを選択し、ボーレートを 115200 に設定して "OK" をクリックします。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_1.png"/>
</div>

**ステップ 4.** ユーザー名とパスワードで reComputer Super にログインします。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_2.png"/>
</div>

## ファン

Robotics J501 は、Jetson モジュールとキャリアボードコンポーネントの両方を冷却するために設計された 2つの 4ピン PWM ファンコネクタを提供します：

- **12V ファン**: 2.54 mm コネクタ、最大 1.5A、高性能冷却に適している
- **5V ファン**: 1.25 mm JST コネクタ、最大 1.5A、低電力静音冷却に最適

PWM 制御により、システム温度に基づく動的で精密な速度調整が可能になり、ノイズと消費電力を最小限に抑えながら効率的な冷却を実現します。

**12V ファンピン配置：**

12V ファンコネクタ（2.54 mm）のピン配置は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan_12v_pinout.png"/>
</div>

### 使用方法

**手動 PWM 制御：**

```bash
# Set fan speed (0-255)
sudo -i
echo 200 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan.png"/>
</div>

:::note
デフォルトの熱ポリシーは `/etc/nvpmodel.conf` で事前設定されています。カスタムプロファイルについては、[NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control) を参照してください。
:::

さらに、`jtop` ツールを使用してファン速度を手動で設定することもできます。

ターミナルで以下のコマンドを入力して **jtop** をインストールできます。

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

次に reComputer Mini を再起動します：

```bash
sudo reboot
```

**jtop** をインストール後、ターミナルで起動できます：

```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## CAN

reComputer Robotics J501 は、DI/DO インターフェースと J25 2x10P コネクタを共有する 4つの独立した CAN インターフェース（CAN 0、CAN 1、CAN 2、CAN 3）を搭載しています。これらのインターフェースは Classic CAN と CAN FD 通信プロトコルの両方をサポートし、高い抗干渉性能とリアルタイムデータ伝送を特徴とし、自動車電子機器、産業オートメーション、ロボティクスなどの産業制御シナリオに適しています。

### 使用方法

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_1.png"/>
</div>
これは CAN インターフェースの回路図です。

### CAN 通信

このセクションでは、Jetson 上で CAN0↔CAN1 と CAN2↔CAN3 を接続し、Classic CAN モードと CAN‑FD モードの両方でこれらのペア間でデータを送受信する方法を示します。

| チャンネル名 | インターフェースタイプ | ピン名 | GPIO チップ | GPIO 番号 | 終端抵抗制御 |
|--------------|----------------|----------|-----------|-------------|------------------------------|
| CAN0         | ネイティブ         | PAA.04   | gpiochip1 | 4           | gpiochip1 line4 (PAA.04)    |
| CAN1         | ネイティブ         | PAA.07   | gpiochip1 | 7           | gpiochip1 line7 (PAA.07)    |
| CAN2         | SPI-to-CAN     | -        | gpiochip2 | 10          | gpiochip2 line10             |
| CAN3         | SPI-to-CAN     | -        | gpiochip2 | 12          | gpiochip2 line12             |

CAN0 と CAN1 の終端抵抗は、gpiochip1 line4 にある PAA.04 と gpiochip1 line7 にある PAA.07 の 2つのピンで制御できます。

終端抵抗制御は以下のルールに従います：

```
When `PAA.04 = 1`, the 120 Ω termination resistor of CAN0 is **disconnected**;  
when `PAA.04 = 0`, the 120 Ω termination resistor of CAN0 is **connected**.

When `PAA.07 = 1`, the 120 Ω termination resistor of CAN1 is **disconnected**;  
when `PAA.07 = 0`, the 120 Ω termination resistor of CAN1 is **connected**.
```

以下のコマンドを入力して gpiochip 1 のピンを表示します：

```bash
gpioinfo gpiochip1
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gpiochip1-can.png"/>
</div>

以下のコマンドを参照して `PAA.04` と `PAA.07` を 0 に設定します：

```bash
sudo gpioset --mode=wait gpiochip1 4=0
sudo gpioset --mode=wait gpiochip1 7=0
```

以下のコマンドを参照して `PAA.04` と `PAA.07` を 1 に設定します：

```bash
sudo gpioset --mode=wait gpiochip1 4=1
sudo gpioset --mode=wait gpiochip1 7=1
```

#### Classic CAN モード

以下のスクリプトは、終端抵抗の有効化、ビットレートの設定、双方向データ伝送を含む、CAN0/CAN1 と CAN2/CAN3 間のループバック通信テストを実装します。

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_2.png"/>
</div>

配線図は以下の通りです：

| From | To |
| --- | --- |
| CAN0_H | CAN1_H |
| CAN0_L | CAN1_L |
| CAN2_H | CAN3_H |
| CAN2_L | CAN3_L |

配線図は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/CAN-connect.png"/>
</div>

標準モードで CAN0↔CAN1 と CAN2↔CAN3 間のデータ送受信をテストする `test_can.sh` を作成します：

```bash
touch test_can.sh
sudo chmod +x test_can.sh
sudo ./test_can.sh
```

`test_can.sh` のスクリプトコードは以下の通りです：

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
CANテストスクリプトでは、PWを自分のJetsonパスワードに置き換えてください。
:::

**CAN0**と**CAN1**間でのデータ送受信が完了します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test.png"/>
</div>

#### CAN-FDモード

CAN FDはより高いデータ伝送速度とより大きなデータフレーム長をサポートします。以下のスクリプトはCAN FDループバックテストを実装します。

CAN-FDモードで**CAN0↔CAN1**と**CAN2↔CAN3**間のデータ送受信をテストするために`test_canfd.sh`を作成します：

```bash
touch test_canfd.sh
sudo chmod +x test_canfd.sh
sudo ./test_canfd.sh
```

`test_canfd.sh`のスクリプトコードは以下の通りです：

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
CANテストスクリプトでは、PWを自分のJetsonパスワードに置き換えてください。
:::

**CAN0↔CAN1**と**CAN2↔CAN3**間でのデータ送受信が完了します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test_2.png"/>
</div>

## DI/DO

reComputer Robotics J501のDI/DOインターフェースはJ25 2x10Pコネクタに統合されており、CANインターフェースとインターフェースを共有しています。4チャンネルのデジタル入力と4チャンネルのデジタル出力をサポートし、安定した信号伝送と産業グレードの電圧適応を特徴とし、デジタルセンサー、リレー、その他の周辺機器の接続に適しています。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_test.png"/>
</div>

### ハードウェア接続

#### デジタル入力（DI）チャンネル

| チャンネル名 | 電圧特性 | GPIOラベル | ピン名 | GPIOチップ | GPIO番号 |
|--------------|-------------------------|------------|----------|-----------|-------------|
| DI_12V_1     | 12V入力適応      | DI_1_GPIO17 | PP.04    | gpiochip0 | 96          |
| DI_12V_2     | 12V入力適応      | DI_1_GPIO18 | PQ.04    | gpiochip0 | 104         |
| DI_12V_3     | 12V入力適応      | DI_1_GPIO19 | PN.02    | gpiochip0 | 86          |
| DI_12V_4     | 12V入力適応      | DI_1_GPIO33 | PM.07    | gpiochip0 | 83          |

#### デジタル出力（DO）チャンネル

| チャンネル名 | 電圧特性 | GPIOラベル | ピン名 | GPIOチップ | GPIO番号 | 追加情報 |
|--------------|-------------------------|------------|----------|-----------|-------------|-----------------|
| DO_40V_1     | オープンドレイン出力；プルアップされていない時は~0V（低）、プルアップされた時は12V（高） | DO_1_GPIO | PAA.04 | gpiochip1 | 4 | 対応番号：320 |
| DO_40V_2     | オープンドレイン出力；プルアップされていない時は~0V（低）、プルアップされた時は12V（高） | DO_2_GPIO | PAA.07 | gpiochip1 | 7 | 対応番号：323 |
| DO_40V_3     | オープンドレイン出力；プルアップされていない時は~0V（低）、プルアップされた時は12V（高） | DO_3_GPIO | PBB.01 | gpiochip1 | 9 | 対応番号：325 |
| DO_40V_4     | オープンドレイン出力；プルアップされていない時は~0V（低）、プルアップされた時は12V（高） | DO_4_GPIO | PBB.00 | gpiochip1 | 8 | 対応番号：324 |

J25コネクタのDI/DOインターフェースの主要ピン定義は以下の通りです（ピン番号は物理コネクタに対応）：

| ピン番号 | 機能ラベル | 説明 |
|------------|----------------|-------------|
| 1          | DI_12V_1       | 12Vデジタル入力チャンネル1 |
| 3          | DI_12V_2       | 12Vデジタル入力チャンネル2 |
| 5          | DI_12V_3       | 12Vデジタル入力チャンネル3 |
| 7          | DI_12V_4       | 12Vデジタル入力チャンネル4 |
| 9          | GND_DI         | デジタル入力チャンネル用グラウンド |
| 2          | DO_40V_1       | 40Vデジタル出力チャンネル1 |
| 4          | DO_40V_2       | 40Vデジタル出力チャンネル2 |
| 6          | DO_40V_3       | 40Vデジタル出力チャンネル3 |
| 8          | DO_40V_4       | 40Vデジタル出力チャンネル4 |
| 10         | GND_DO         | デジタル出力チャンネル用グラウンド |

:::note
完全なピン配置（CANインターフェースを含む）については、誤った接続を避けるためにreComputer Robotics J501のハードウェアドキュメントを参照してください。
:::

### 使用方法

**デジタル出力（DO）操作**

DOインターフェースはオープンドレイン出力を採用しています。コマンドで出力レベル（高/低）を設定して、リレーやLEDなどの周辺機器を制御できます。

DOチャンネルを有効にする（12Vを出力、外部プルアップ抵抗と12V電源によって供給）には、以下のコマンドを実行します：

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

DOプルアップ前：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_before.png"/>
</div>

DOプルアップ後：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/do_after.png"/>
</div>

DOチャンネルを無効にする（~0Vを出力）には、以下のコマンドを実行します：

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

**デジタル入力（DI）操作**

`gpioget`コマンドを使用してDIチャンネルの入力レベルを読み取り（戻り値`1`=高レベル、`0`=低レベル）、周辺機器の状態を取得します。

DIチャンネルレベルを読み取るコマンドは以下の通りです：

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

### 使用方法

デュポンワイヤーを使用して対象SPIチャンネルのコアピンを接続します（/dev/spidev2.0を例とします）：
SPI2.0のMOSIピンをMISOピンに接続します（データループバック送受信を実現）。

配線図は以下の通りです：
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_conn_2.png"/>
</div>

:::note
SPIを使用するには、上図のようにドライバーでデバイスのサイドカバーを取り外してください。
:::

**ステップ1：SPIカーネルモジュールの読み込み（前提条件）**
SPIインターフェースを操作する前に、`spidev`カーネルモジュールが読み込まれていることを確認してください（デフォルトシステムでは事前に読み込まれている場合がありますが、手動で確認することをお勧めします）：

```bash
sudo modprobe spidev
```

:::note
コマンドがエラープロンプトなしで実行された場合、モジュールが正常に読み込まれたことを意味します；モジュールが既に読み込まれている場合、コマンドは何も情報を返しませんが、これは正常な現象です。
:::

**ステップ2：SPIデバイスノードの確認**
ターミナルで以下のコマンドを入力して、reComputer Robotics J501のSPIインターフェースにマッピングされたデバイス名を確認します：

```bash
ls /dev/spidev*
```

デバイスノードが表示されない場合は、`spidev`モジュールが正常にロードされていないことを意味します。`sudo modprobe spidev`を再実行し、システムログを確認してトラブルシューティングを行ってください。

**ステップ3：SPIテストコードの取得とコンパイル**
GitHubから`spidev-test`テストコードを取得してコンパイルします：

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**ステップ4：SPIテストプログラムの実行**
ターミナルで以下のコマンドを入力してSPIテストプログラムを実行します（`/dev/spidev2.0`を例とします）：

```bash
sudo ./spidev_test -v -D /dev/spidev2.0 -s 100000
```

**ステップ5：テスト結果の確認**
テストコマンドを実行した後、ターミナルでSPI2.0インターフェースのデータ送受信状況を確認できます。主要な出力は以下の通りです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_out.png"/>
</div>

> 重要な判定基準：TX（送信）データとRX（受信）データが一致していることで、SPIループバックテストが成功し、SPIインターフェース機能が正常であることを示します。

## UART

reComputer Robotics J501には、RS232、RS422、RS485通信モードをサポートする2つの独立したUARTインターフェース（UART1とUART2）が搭載されており、安定した信号伝送と周辺機器との幅広い互換性を特徴としています。

### ハードウェア接続

#### UARTインターフェースチャンネル

| チャンネル名 | デバイスノード | サポートモード | デフォルトボーレート | GPIO有効化コマンド | モード切替方法 |
|--------------|-------------|-----------------|-------------------|--------------------|-------------------|
| UART1 (DB9-1) | /dev/ttyTHS1 | RS232, RS422, RS485 | RS232: 115200 bps; RS422/RS485: 9600 bps | `gpioset --mode=wait gpiochip0 2=0` | SW3 DIPスイッチ（8ピンDIP） |
| UART2 (DB9-2) | /dev/ttyTHS4 | RS232（デフォルト） | 115200 bps | `gpioset --mode=wait gpiochip2 15=0` | RS232固定（スイッチなし） |

**ピン配置定義（DB9コネクタ）**

各DB9ピンの機能は通信モードによって異なります。正確な配線については以下の表を参照してください（ピン番号は標準DB9オスコネクタ仕様に従います）：

| DB9ピン番号 | RS232モード機能 | RS422モード機能 | RS485モード機能 |
|----------------|---------------------|---------------------|---------------------|
| 1              | -                   | TXD- (送信データ-) | Data- (差動データ-) |
| 2              | RXD (受信データ)  | TXD+ (送信データ+) | Data+ (差動データ+) |
| 3              | TXD (送信データ) | RXD+ (受信データ+) | -                   |
| 4              | -                   | RXD- (受信データ-) | -                   |
| 5              | GND (グランド)        | GND (グランド)        | GND (グランド)        |
| 6              | -                   | -                   | -                   |
| 7              | RTS (送信要求) | -                   | -                   |
| 8              | CTS (送信許可) | -                   | -                   |
| 9              | -                   | -                   | -                   |

**モード設定（SW3 DIPスイッチ）**

UART1（DB9-1）のみがSW3 DIPスイッチによるモード切替をサポートします（UART2はRS232固定）。スイッチは8ピンDIPタイプで、回路図ではMODE_0、MODE_1、MODE_2とラベル付けされた主要設定ピンがあります。

インターフェースは以下の図に示されています：
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/Switch.png"/>
</div>

**設定ルール**

| 動作モード | DIPスイッチ組み合わせ（MODE_2、MODE_1、MODE_0） | スイッチ状態操作 |
|--------------|------------------------------------------------|------------------------|
| RS232        | 0 (OFF), 0 (OFF), 1 (ON)                       | MODE_0: ONに切替; MODE_1/MODE_2: OFFを維持 |
| RS422        | 0 (OFF), 0 (OFF), 0 (OFF) または 1 (ON), 0 (OFF), 0 (OFF) | MODE_0/MODE_1: OFFを維持; MODE_2: オプション（ON/OFF） |
| RS485        | 0 (OFF), 1 (ON), 0 (OFF) または 1 (ON), 1 (ON), 0 (OFF) | MODE_1: ONに切替; MODE_0/MODE_2: オプション（ON/OFF） |

:::note
ハードウェア接続完了後、ターミナルソフトウェア（例：CuteCom）を使用してUART通信機能をテストしてください。CuteComがインストールされていない場合は、`sudo apt-get install cutecom`を実行してインストールしてください。UARTチャンネルがGPIOコマンドで有効化されていることを確認してください。
:::

### 使用方法

**GPIO有効化コマンド**

接続前に、ターミナルでGPIO有効化コマンドを実行して対応するUARTチャンネルを有効化します：

```bash
# Enable UART1 (ttyTHS1)
sudo gpioset --mode=wait gpiochip0 2=0

# Enable UART2 (ttyTHS4)
sudo gpioset --mode=wait gpiochip2 15=0
```

#### RS232モードテスト

ここでは、USB to RS232アダプタを使用してインターフェースをテストできます。テストには[UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1)を使用しました。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_1.png"/>
</div>

配線図は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/232-PC.png"/>
</div>

**ステップ1：CuteComの起動**
`sudo cutecom`を実行してCuteComターミナルソフトウェアを起動します。

**ステップ2：シリアルポートパラメータの設定**
以下のパラメータでシリアルポートを設定します：

- デバイス：`/dev/ttyTHS1`（UART1）または`/dev/ttyTHS4`（UART2）
- ボーレート：115200 bps
- データビット：8、パリティ：なし、ストップビット：1、フロー制御：なし

**ステップ3：シリアルポートを開く**
"Open Device"をクリックしてシリアルポートを開きます。

**ステップ4：テストデータの送信**
テストデータ（例："232 test from jetson"）を送信し、周辺機器からのデータ受信を確認します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_2.png"/>
</div>
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_3.png"/>
</div>

#### RS485モードテスト

ここでは、USB to RS485アダプタを使用してインターフェースをテストできます。テストには[DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)を使用しました。

配線図は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**ステップ1：CuteComの起動**
`sudo cutecom`を実行してCuteComターミナルソフトウェアを起動します。

**ステップ2：シリアルポートパラメータの設定**
以下のパラメータでシリアルポートを設定します：

- デバイス：`/dev/ttyTHS1`
- ボーレート：9600 bps
- データビット：8、パリティ：なし、ストップビット：1、フロー制御：なし

**ステップ3：シリアルポートを開く**
"Open Device"をクリックしてシリアルポートを開きます。

**ステップ4：テストデータの送信**
テストデータ（例："485 test from jetson"）を送信し、周辺機器からのデータ受信を確認します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs485_1.png"/>
</div>

#### RS422モードテスト

ここでは、USB to RS422アダプタを使用してインターフェースをテストできます。テストには[DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)を使用しました。

配線図は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**ステップ1：CuteComの起動**
`sudo cutecom`を実行してCuteComターミナルソフトウェアを起動します。

**ステップ2：シリアルポートパラメータの設定**
以下のパラメータでシリアルポートを設定します：

- デバイス：`/dev/ttyTHS1`
- ボーレート：9600 bps
- データビット：8、パリティ：なし、ストップビット：1、フロー制御：なし

**ステップ3：シリアルポートを開く**
"Open Device"をクリックしてシリアルポートを開きます。

**ステップ4：テストデータの送信**
テストデータ（例："422 test from jetson"）を送信し、周辺機器からのデータ受信を確認します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs422.png"/>
</div>

## RTC

reComputer Robotics J501には、正確な時刻管理のためのバッテリーバックアップ付きハードウェアRTCが搭載されています。RTCにバックアップ電源を供給する方法は2つあります：

1. CR1220コイン電池ホルダー（J14）を使用
2. RTC 2ピンヘッダー - J4を使用した外部電源接続

### ハードウェア接続

**方法1：CR1220コイン電池ホルダーの使用**

以下に示すように、3V CR1220コイン電池をボード上のRTCソケットに接続します。電池の正極（+）側が上向きになるようにしてください。

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_0.png"/>
</div>

**方法2：RTC 2ピンヘッダーの使用**

RTC 2ピンヘッダーは、RTCに外部電源を接続する代替方法を提供します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2pin_pinout.png"/>
</div>

### 使用方法

**ステップ1.** 上記のようにRTCバッテリーを接続します。

**ステップ2.** reComputer Robotics J501の電源を入れます。

**ステップ3.** Ubuntuデスクトップで、右上角のドロップダウンメニューをクリックし、`Settings > Date & Time`に移動し、イーサネットケーブルでネットワークに接続して**Automatic Date & Time**を選択し、日付/時刻を自動的に取得します。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_1.png"/>
</div>

:::note
イーサネット経由でインターネットに接続していない場合は、ここで日付/時刻を手動で設定できます。
:::

**ステップ4.** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロック時刻を確認します：

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**ステップ 5.** ネットワーク接続を切断してデバイスを再起動します。システム時刻は電源を失いましたが、まだ正常に機能していることがわかります。
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2.png"/>
</div>

## ディスプレイ

Robotics J501 は高解像度ディスプレイ出力用の HDMI を搭載しています。

## 拡張ポート

Robotics J501 キャリアボードは GMSL 拡張ボード用のカメラ拡張ヘッダーを備えています。4台の GMSL カメラを同時に接続して動作させることができます。

### ハードウェア接続

以下は Robotics J501 キャリアボード GMSL カメラ拡張ボード接続スロットです（事前に拡張ボードを準備する必要があります）：

<div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_1.png"/>
  </div>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_2.png"/>
  </div>
</div>

以下は、すでにサポートしている GMSL カメラモデルです：

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### 使用方法

:::note
GMSL 機能を有効にする前に、GMSL 拡張ボードドライバーを含む JetPack バージョンがインストールされていることを確認してください。
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
オーバーレイファイルは合計3つあり、それぞれ Seeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4、および Orbbec Gemini 335Lg です。これらはそれぞれ SG3S の 3G カメラ、SG2 と SG8S の 6G カメラ、および Orbbec のカメラに対応しています。図3に示すように、お使いのカメラのモデルに応じて io ファイルを設定してください。
:::

**ステップ 2.** ビデオインターフェース設定ツールをインストールします。

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

**ステップ 1.** フレーム同期モードを設定します（デフォルトでは有効になっていません！）。

:::info
ここでは、異なるモデルと解像度のカメラを設定する方法を説明します。
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

`--set-fmt-video` は接続されているカメラに基づいて選択される解像度に従います。現在、3つの sensor_mode オプションがあり、それぞれ異なる解像度に対応しています。

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**ステップ 2.** カメラを起動します。

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
- [Seeed Nvidia Jetson 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson ワンページャー](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Seeed の L4T ソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

<!-- - [reComputer Robotics 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp) -->
<!-- - [Mechanical Document-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf) -->
## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
