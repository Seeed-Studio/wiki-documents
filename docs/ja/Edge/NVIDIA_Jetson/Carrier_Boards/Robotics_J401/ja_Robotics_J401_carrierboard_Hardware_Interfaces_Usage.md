---
description: このwikiは、reComputer Jetson Robotics J401キャリアボードのハードウェア機能とインターフェース使用方法について包括的な紹介を提供します。詳細な仕様、対応モジュール、セットアップ手順、M.2、Ethernet、USB、CAN、UART、I2C、GMSL2カメラ拡張などの各種インターフェースの実用的な使用ガイドを網羅し、ユーザーがJ401プラットフォームでのロボティクス開発を迅速に開始できるよう支援します。
title: インターフェース使用方法
tags:
  - J401-Robotics carrier board
  - Jetson
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer_robotics1.webp
slug: /ja/recomputer_jetson_robotics_j401_getting_started
last_update:
  date: 06/10/2025
  author: Zibo
---

# Robotics J401キャリアボード ハードウェアと入門ガイド

reComputer Robotics J401は、先進的なロボティクス向けに設計されたコンパクトで高性能なエッジAIキャリアボードです。NVIDIA Jetson Orin Nano/Orin NXモジュールのSuper/MAXNモードに対応し、最大157 TOPSのAI性能を提供します。デュアルギガビットEthernetポート、5GおよびWi-Fi/BTモジュール用M.2スロット、6つのUSB 3.2ポート、CAN、GMSL2（オプション拡張経由）、I2C、UARTなどの豊富な接続オプションを備え、様々なセンサーからの複雑なデータを処理できる強力なロボティクスブレインとして機能します。JetPack 6とLinux BSPがプリインストールされており、シームレスな展開を保証します。

NVIDIA Isaac ROS、Hugging Face、PyTorch、ROS 2/1などのフレームワークをサポートするreComputer Robotics J401は、大規模言語モデル駆動の意思決定と、モーションプランニングやセンサーフュージョンなどの物理的ロボティクス制御を橋渡しします。自律ロボットの迅速な開発に最適で、すぐに使用できるインターフェースと最適化されたAIフレームワークにより市場投入時間を短縮します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics-carrier-board.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>

## reComputer Jetson Robotics J401キャリアボード概要

| **上面図** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/top.png) |
| **上面図** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/fornt.png) |
| **上面図** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/bottom.png) |

## パーツリスト

- reComputer Robotics J401キャリアボード x 1
- 電源供給およびJST拡張ボード x 1
- XT30からDCケーブル x 1
- USBケーブル、Type AからType C x 1
- 拡張ボード用ヒートシンク x 1
- スタッド(M3*30) x 5
- M3六角ナット x 5
- ネジ(CM2.5*L.4) JetsonモジュールおよびM.2 Key M用 x3
- ネジ(CM2*3.0) M.2 Key E用 x1
- スタッド(M2*2.0) M.2 Key B用 x1
- ネジ(CM3*4.0) M.2 Key B用 x1
- ユーザーマニュアル x 1

:::note
1.高電圧電源供給および動作温度時には、熱設計ガイドに従って堅牢な放熱ソリューションを設計してください。
2.より良い性能のためにモジュール用ヒートシンクを取り付けてください。
3.高電圧入力および高負荷での動作中は、やけどを防ぐためヒートシンクに触れないでください。
4.検証用電源アダプター推奨、Seed公式ウェブサイトで推奨されている電源アダプターを使用してください。

- 19V/4.74A 5525バレルジャック電源アダプター
- 最大消費電力要件が満たされていることを確認してください。
2.AC電源コード互換性
- お住まいの地域に応じて地域固有のACクローバーリーフ電源コードを購入してください。
3.アクセサリー互換性
- 最適な性能と互換性のために、公式に推奨されたアクセサリー（例：ワイヤレスモジュール、カメラ、周辺機器）のみを使用してください。

:::

## 仕様

### キャリアボード仕様

<table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>カテゴリ</th>
      <th>項目</th>
      <th>詳細</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowSpan="1">ストレージ</th>
      <td>M.2 KEY M PCIe</td>
      <td>1x M.2 KEY M PCIe (M.2 NVMe 2280 SSD 128G付属)</td>
    </tr>
    <tr>
      <th rowSpan="3">ネットワーキング</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E WiFi/Bluetoothモジュール用</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B 5Gモジュール用</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>2x RJ45ギガビットEthernet</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A (5Gbps);<br />1x USB 3.0 Type-C (Host/DP 1.4);<br />1x USB 2.0 Type-C (Device Mode/Debug)</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>1x 4 in 1 GMSL2 (mini fakra) (オプションボード)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (4-Pin GH 1.25ヘッダー)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x DP1.4 (Type C Host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4-Pin GH 1.25ヘッダー</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4-Pin GH 1.25ヘッダー</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1x 4-Pinファンコネクタ (5V PWM);<br />1x 4-Pinファンコネクタ (12V PWM)</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td>1x カメラ拡張ヘッダー (GMSL2ボード用)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin;<br />1x RTCソケット</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR、ACT、およびユーザーLED)</td>
    </tr>
    <tr>
      <td>ピンホールボタン</td>
      <td>1x PWR;<br />1x RESET</td>
    </tr>
    <tr>
      <td>DIPスイッチ</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>アンテナ穴</td>
      <td>5x アンテナ穴</td>
    </tr>
    <tr>
      <th rowSpan="1">電源</th>
      <td colSpan="2">19-54V XT30(2+2) (XT30から5525 DCジャックケーブル付属)</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpackバージョン</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">機械的仕様</th>
      <td>寸法 (W x D x H)</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>200g</td>
    </tr>
    <tr>
      <td>設置</td>
      <td>デスク、壁面取り付け</td>
    </tr>
    <tr>
      <th rowSpan="1">動作温度</th>
      <td colSpan="2">-20℃~60℃ (25Wモード);<br />-20℃~55℃ (MAXNモード);<br />(reComputer Roboticsヒートシンクとファン使用時)</td>
    </tr>
    <tr>
      <th rowSpan="1">保証</th>
      <td>2年</td>
    </tr>
    <tr>
      <th rowSpan="1">認証</th>
      <td>RoHS、REACH、CE、FCC、UKCA、KC</td>
    </tr>
  </tbody>
</table>

## JetPack OSのフラッシュ

### 対応モジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### 前提条件

- UbuntuホストPC
- Robotics J401キャリアボード
- NVIDIA® Jetson Orin™ Nano/NXモジュール
- Nano/NXモジュールアクティブファン
- NVMe M.2 2280内蔵SSD
- USB Type-Cデータ転送ケーブル

:::info

仮想マシンではなく、物理的なubuntuホストデバイスの使用を推奨します。
ホストマシンの準備については、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPackバージョン </td>
        <td class="dbon" colspan="3"> Ubuntuバージョン (ホストコンピュータ) </td>
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

ここでは、使用するJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードする必要があります：

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
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaq3jfzUJiVJpBSdd0UqtKIB8cRP--j90it2K1Vk7Neo3g?e=sYD5S2">ダウンロード</a></td>
      <td>c63d1219531245abecc7bbdcafc73d3<br />4f75547454c7af85de40f08396a87e5ee  </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWIfNPP5Te5CqqiIBwXxilwBeTYuJiXPlO4OVFZxf54-gw?e=fGjs5R">ダウンロード</a></td>
      <td>5d1f3cd28eb44ca60132c87ccce5aca<br />f806ee945b486df9061a34de73fbb582b </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERskD6LNzTRFkvDuLiSubTsBH8_eEFinmE-mPDvUhYZREg?e=deeaoO">ダウンロード</a></td>
      <td>e7f0c8e6b578d411f81122879f92c76<br />66adfada5ed493a4cc458dc169ca8c1b7  </td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETx2PP9D85dHgzljJ_pJH-0Bsss82nPxMbOkJ-JvPA1hrQ?e=cReLPU">ダウンロード</a></td>
      <td> b08cbdad8ab6e50222146d3175a9d2<br />627d499bf1d67cfaf69cc737b5bfa9e33a </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6イメージファイルのサイズは約**14.2GB**で、ダウンロードには約60分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較できます。

Ubuntuホストマシンでターミナルを開き、`sha256sum <File>`コマンドを実行してダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

### 強制リカバリモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。
:::

<details>

<summary> ステップバイステップ </summary>

**ステップ 1.** スイッチをRESETモードに切り替えます。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**ステップ 2.** 電源ケーブルを接続してキャリアボードに電源を供給します。

**ステップ 3.** USB Type-C データ転送ケーブルでボードを Ubuntu ホスト PC に接続します。

**ステップ 4.** Linux ホスト PC でターミナルウィンドウを開き、`lsusb` コマンドを入力します。使用している Jetson SoM に応じて、返される内容に以下の出力のいずれかが含まれている場合、ボードは強制リカバリモードになっています。

- Orin NX 16GB の場合：**0955:7323 NVidia Corp**
- Orin NX 8GB の場合：**0955:7423 NVidia Corp**
- Orin Nano 8GB の場合：**0955:7523 NVidia Corp**
- Orin Nano 4GB の場合：**0955:7623 NVidia Corp**

以下の画像は Orin Nano 8GB の場合です

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Jetson へのフラッシュ

**ステップ 1：** ダウンロードしたイメージファイルを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-6.2-36.4.3-2025-05-23.tar.gz
```

**ステップ 2：** 以下のコマンドを実行して、jetpack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは 2～10 分間実行される場合があります。
:::

**ステップ 3：** Robotics J401 をディスプレイに接続します。PD to HDMI アダプターを使用して HDMI 入力をサポートするディスプレイに接続するか、PD ケーブルを使用して PD 入力をサポートするディスプレイに直接接続し、初期設定セットアップを完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
必要に応じて **System Configuration** を完了してください。
:::

## インターフェースの使用方法

以下では、Robotics J401 ボードの各種インターフェースとその使用方法を紹介します。

## M.2 Key M

M.2 Key M は高速 NVMe SSD 用に設計されており、ロボティクスアプリケーション向けに超高速データ転送を提供します。

### サポートされている SSD は以下の通りです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ssd_c.jpg"/>
</div>

### 使用方法

Jetson デバイスでターミナルを開き、以下のコマンドを入力して SSD の読み書き速度をテストします。

```bash
#You need to create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
テスト完了後は、`sudo rm /home/seeed/ssd/test` コマンドを実行してキャッシュファイルを削除してください。
:::

## M.2 Key B

M.2 Key B スロットは 5G モジュール拡張用で、ロボティクスとエッジ AI シナリオ向けに高速セルラー接続を可能にします。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/5g_c.jpg"/>
</div>

### 使用方法

**ステップ 1.** ハードウェア認識の確認

```bash
lsusb 
```

このコマンドは、システムに接続されているすべての USB デバイスのリストを、メーカー（ID）、タイプ、その他の情報と共に表示します。例えば、出力には Quectel Wireless Solutions Co., Ltd. EM12-G のデバイスが表示され、5G モジュールが存在することを示します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb.png"/>
</div>

**ステップ 2.** ドライバーの読み込み確認
5G モジュールに必要な option ドライバーが読み込まれていることを確認することが重要です。lsmod コマンドを使用して確認できます。

```bash
lsmod | grep option 
```

option ドライバーが正常に読み込まれている場合、出力にドライバーに関する関連情報が表示されます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsmod.png"/>
</div>

**ステップ 3.** ModemManager の設定
ModemManager はモデムデバイスを管理するためのツールで、インストールして再起動する必要があります。

```bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

apt install コマンドは ModemManager パッケージをインストールするために使用され、systemctl restart は ModemManager サービスを再起動して新しい設定が有効になることを確認します。

**ステップ 4.** モジュール識別の確認
mmcli -L コマンドを使用して、ModemManager が 5G モジュールを正しく識別できるかどうかを確認できます。

```bash
mmcli -L 
```

5G モジュールが認識されている場合、/org/freedesktop/ModemManager1/Modem/0 のような出力が表示され、検出されたモデムデバイスへのパスを示します。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_l.jpg"/>
</div>

**ステップ 5.** APN の設定
APN（Access Point Name）は、モバイルデバイスをネットワークに接続するために重要です。nmcli コマンドを使用してベアラープロファイルを作成します。中国移動を例に、以下のコマンドで設定ファイルを作成できます：

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

このコマンドは、新しい GSM（Global System for Mobile Communications）タイプの接続を追加し、APN を "CMNET" として指定し、自動 IPv4 設定を使用します。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_con.jpg"/>
</div>

**ステップ 6.** 接続のアクティベート
ベアラープロファイルを作成した後、接続をアクティベートする必要があります。

```bash
sudo nmcli con up "gsm" 
```

このコマンドは GSM 接続をアクティベートし、成功した場合は確認メッセージが表示されます。

**ステップ 7.** モジュール識別の再確認
APN を設定した後、モジュールが認識されたままであることを確認するために、mmcli -L コマンドを再度実行します。

```bash
mmcli -L 
```

**ステップ 8.** モジュールステータスの確認
最後に、mmcli -m 0 コマンドを使用して、IP 割り当て、キャリア、ネットワーク接続ステータスなど、モジュールの詳細情報を表示できます。

```bash
mmcli -m 0 
```

このコマンドは、メーカー、モデル、サポートされている現在のネットワーク技術、デバイスステータス、接続されているネットワークオペレーターなど、5G モジュールに関する包括的な詳細を提供します。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_m.jpg"/>
</div>

## M.2 Key E

M.2 Key E インターフェースは標準的な M.2 コネクターで、主に Wi-Fi や Bluetooth などのワイヤレスモジュールを接続して、ワイヤレス通信機能を拡張するために使用されます。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/m2_e.jpg"/>
</div>

### 使用方法

Wi-Fi パフォーマンスをテストするには、以下のコマンドを使用します（IP アドレスをテストサーバーのものに置き換えてください）：

```bash
iperf3 -c 192.168.6.191
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/wifi_speed.png"/>
</div>

Bluetooth 機能は M.2 Key E スロット経由で利用できます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/bluetooth.png"/>
</div>

## Ethernet

Robotics j401 キャリアボードは、高速有線ネットワーク接続のために 2 つの 1Gbps RJ45 Ethernet ポートを備えています。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/eth.jpg"/>
</div>

Ethernet ポートの速度をテストするには、以下のように `iperf3` を使用します：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` は iperf3 サーバーの IP アドレスです。クライアントはこのサーバーに接続して帯域幅テストを実行します。
`<bind_ip>` は、指定されたローカル IP アドレスをテストトラフィックのソースとしてバインドします。
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ethnet_speed.png"/>
</div>

## LED

reComputer Jetson Robotics J401 は、電源、システムアクティビティ、ユーザー定義機能の明確なステータスフィードバックを提供する 3 つの LED インジケーター（PWR、ACT、User LED）を備えています。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div>

### 使用方法

User LED は RGB LED で、さまざまなステータスを示すために異なる色を表示でき、ユーザーによって定義される必要があります。

RGB LED を制御するテストスクリプトは以下の通りです：

```bash
touch rgb_test
chmod +x rgb_test
vi rgb_test
```

以下の内容を貼り付けます：

```bash
#!/bin/bash
# RED ON
gpioset --mode=time --sec=1 2 0=1
sleep 2
# RED OFF
gpioset --mode=time --sec=1 2 0=0

# Blue ON
gpioset --mode=time --sec=1 2 1=1
sleep 2
# Blue OFF
gpioset --mode=time --sec=1 2 1=0

# Green ON
gpioset --mode=time --sec=1 2 2=1
sleep 2
# Green OFF
gpioset --mode=time --sec=1 2 2=0
```

スクリプトを実行して RGB LED をテストします。

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/rgb_led.gif"/>
</div>

## USB

Robotics j401 キャリアボードには、6 つの USB 3.2 Type-A ポート（5Gbps）、DP 1.4 対応の USB 3.0 Type-C ポート 1 つ（ホストモード）、デバイスモード/デバッグ用の USB 2.0 Type-C ポート 1 つなど、さまざまな USB ポートが搭載されており、多様な接続オプションを提供します。

### USB速度テスト

USBデバイスの速度をテストするスクリプトを作成します：

```bash
sudo vim test_usb
```

以下の内容を貼り付けます：

```bash
#!/bin/bash
sudo dd if=/dev/zero of=/dev/$1 bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=/dev/$1 of=/dev/null bs=1000M count=2
```

スクリプトを実行可能にします：

```bash
sudo chmod +x test_usb
```

USBデバイス名を引数としてスクリプトを実行します。

### USB 2.0 Type-Cポート

このシリアルポートを使用して、USB Cデータケーブル経由でPC側の入出力デバッグ情報を監視できます。

**ステップ1.** スイッチをデバッグモードに切り替えます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug.jpg"/>
</div>

**ステップ2.** USBデータケーブルでPCに接続し、PC上で[CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)をダウンロードします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**ステップ3.** USBデータケーブルでPCに接続し、ダウンロードしたファイルを展開してPC上でドライバーをインストールします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**ステップ4.** Windows PCでDevice Managerを開き、reComputer Superに割り当てられたCOMポート番号を確認します。「Ports (COM & LPT)」の下に「Silicon Labs CP210x USB to UART Bridge (COMX)」として表示されます（XはCOMポート番号）。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
</div>

**ステップ5.** シリアルポートツール（ここではMobaXtermツールを例として使用）を開き、新しいセッションを作成します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**ステップ6.** Serialツールを選択します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**ステップ7.** 対応するシリアルポートを選択し、ボーレートを115200に設定して「OK」をクリックします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**ステップ8.** ユーザー名とパスワードでreComputer Superにログインします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

### USBカメラ

USB 3.2 Type-Aポート経由でUSBカメラを使用し、`guvcview`をインストールして実行します：

```bash
sudo apt-get install guvcview
guvcview -d /dev/video0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/usb_camera.png"/>
</div>

## ファン

reComputer Jetson Robotics J401は、異なる電圧と冷却ニーズに対応するため、2種類のファンコネクタを搭載しています：

- 1x 4ピンファンコネクタ（5V PWM）：低電圧、低消費電力の静音ファン用に設計されており、PWM速度制御をサポートし、システム温度に基づいてファン速度を知的に調整することで、エネルギー効率を向上させ、ノイズを低減します。

- 1x 4ピンファンコネクタ（12V PWM）：標準的な12V PWMファンと互換性があり、精密な速度制御もサポートしており、高性能冷却要件に最適です。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/fan.png"/>
</div>

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)をご確認ください。
:::

**ファン速度を設定するスクリプトを作成します：**

```bash
cat test_fanSpeedSet
```

以下の内容を貼り付けます：

```bash
#!/bin/bash
sudo systemctl stop nvfancontrol
sleep 2
echo "000000" | sudo -S chmod 777 /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
echo $1 > /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
```

> 注意：Jetson Nano 4Gの場合、ファンパスは`/sys/devices/platform/pwm-fan/hwmon/hwmon0/pwm1`です。

さらに、jtopツールを使用してファン速度を手動で設定することもできます。

## ピンホールボタン

Robotics J401キャリアボードには、ユーザーインタラクション用のピンホールボタンが搭載されており、電源（PWR）ボタンとリセット（RESET）ボタンが含まれています。これらのボタンは、デバイスの電源オン/オフとシステム再起動を行うために不可欠です。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pinhole_button.jpg"/>
</div>

## CAN

CAN（Controller Area Network）は、マイクロコントローラーとデバイスがホストコンピューターなしで相互に通信できる堅牢な車両バス標準です。
Robotics J401は、便利な電源とデータ伝送のためにXT30（2+2）電源コネクタに統合された1つのCAN0インターフェースを提供します。さらに、柔軟なCANバス接続のために2つの標準JST 4ピンヘッダー経由で3つのCAN1インターフェースを提供します。

### CAN通信

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)では、以下に示すCAN0/CAN1インターフェースの配線図を確認できます：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div>

ここでは、[USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)を使用して、CAN1インターフェースを使用したデータ通信の実行方法をデモンストレーションします。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c.png"/>
</div>

下図に示す接続方法に従って、CAN1のCANL、CANH、GNDをUSB to CANツールの対応するCANL、CANH、GNDポートにそれぞれ接続します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c1.png"/>
</div>

今回の場合、使用したアダプターに応じて、[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)で見つけることができるソフトウェアをダウンロードしてインストールしました。

**ステップ1.** CAN1インターフェースを設定します：

```bash
#Set the bit rate
sudo ip link set can1 type can bitrate 500000
#Enable CAN1
sudo ip link set can1 up
```

**ステップ2.** PCデータ受信ソフトウェアを設定します。
以下の画像に示すように通信設定を構成してください。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_software.png"/>
</div>

**ステップ3.** JetsonからPCにデータを送信します：

```bash
cansend can1 123#abcdabcd
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pc_rcan1.png"/>
</div>

**ステップ3.** PCからJetsonにデータを送信します：

```bash
#CAN1 monitors PC data
candump can1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1.png"/>
</div>

JetsonターミナルがPCから送信されたデータを受信したことが確認できます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_r.png"/>
</div>

### CAN FDモード

ここでは、CAN0をCAN1に接続して、複数のJetsonデバイスがCANインターフェース経由で通信する方法をデモンストレーションします。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can0_can1_c.jpg"/>
</div>

**ステップ1.** 底面カバーを取り外し、両方の120Ω終端抵抗をON位置に設定します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/on.jpg"/>
</div>

**ステップ2.** CAN0とCAN1インターフェースを設定します：

```bash
#close the interface

sudo ip link set can0 down
sudo ip link set can1 down

#Set to FD mode

sudo ip link set can0 type can bitrate 500000 dbitrate 2000000 fd on
sudo ip link set can1 type can bitrate 500000 dbitrate 2000000 fd on

#open the interface
sudo ip link set can0 up
sudo ip link set can1 up

```

**ステップ3.** 新しいターミナルを開いてCAN1をリッスンし、CAN0経由でCAN1にデータを送信します：

```bash
#open a new terminal and run
candump can1

#another terminal sends data
cansend can0 123##011112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF
```

:::info

- `123`はID
- `##`はCAN FDフレームを示します
- 以下は64バイトのデータ（合計128個の16進文字）

:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_fd.png"/>
</div>

## UART

Robotics J401は、UARTシリアル通信用の標準4ピンJSTヘッダーを提供します。

### ハードウェア接続

UART通信については、以下の配線に従ってください。ここでは、USB to TTLツールを例として使用します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_c.jpg"/>
</div>

### 使用方法

**ステップ1.** Jetsonデバイスでターミナルを開き、以下のコマンドを実行してUARTインターフェースを有効にします：

```bash
gpioset --mode=time --sec=100 2 5=0
```

**ステップ2.** USB to TTLツールをRobotics J401 UARTポートとPCに接続します。

**ステップ3.** PC側でシリアルポートツール（ここではxcomツールを例として使用）を開き、ボーレートを115200に設定します。

**ステップ4.** シリアル通信用の簡単なPythonスクリプトを作成します：

```python

import serial
import time

ser = serial.Serial('/dev/ttyTHS1', 115200, timeout=1)
ser.write(b'Hello Jetson!\n')
while True:

    if ser.in_waiting:
        data = ser.readline()
        print("get:", data.decode('utf-8').strip())
    time.sleep(0.1)

ser.close()
```

**ステップ 5.** Jetson デバイスで Python スクリプトを実行します：

```bash
python3 uart_test.py
```

**ステップ 6.** これで PC 側で出力を確認でき、PC から Jetson デバイスにデータを送信することもできます：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_s.jpg"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_r.png"/>
</div>

## I2C

Robotics J401 は標準的な JST 4 ピンヘッダーを通じて 2 つの I2C インターフェース（IIC0 と IIC1）を提供します。
システム拡張のためのセンサーや周辺機器の簡単な接続を可能にします。

### ハードウェア接続

Robotics J401 は 2 つの 4 ピン GH-1.25 IIC インターフェース、IIC0 と IIC1 を備えています。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic.jpg"/>
</div>

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)では、以下に示すように IIC0/IIC1 4 ピン GH-1.25 インターフェースの配線図を確認できます：
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/12c.png"/>
</div>
テスト用の IIC インターフェースデバイスを選択してください。選択はお任せします。ここでは、[Arduino-Uno-Rev4-Minima](https://www.seeedstudio.com/Arduino-Uno-Rev4-Minima-p-5716.html) を使用して I2C0/I2C1 をテストします。

ここでのテストプロセスは、IIC0/IIC1 に外部接続されたデバイスのアドレスをスキャンすることです。
:::info
以下の接続に従ってデバイス（IIC0/IIC1 ↔ デバイス）を接続してください：

- Power → Power

- SDA → SDA

- SCL → SCL

- Ground → Ground

:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_connect.jpg"/>
</div>

### 使用方法

**ステップ 1.** [Arduino IDE](https://www.arduino.cc/en/software/) をダウンロードしてコードをアップロードします。

**ステップ 2.** 開発ボードのタイプを選択します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/slect_board.png"/>
</div>

**ステップ 3.** IDE を再起動してコードをアップロードします。

```bash
#code example
#include <Wire.h>

void setup() {
  Wire.begin(0x08); // Set the I2C slave address to 0x08
  Wire.onReceive(receiveEvent);
  Wire.onRequest(requestEvent);
}

void loop() {
  delay(100);
}

void receiveEvent(int howMany) {
  // Callback when receiving host data
  while (Wire.available()) {
    char c = Wire.read();
    // Data received can be processed here.
  }
}

void requestEvent() {
  // Callback when the host requests data
  Wire.write("A"); // Return a byte of data
}
```

**ステップ 4.** Jetson に IIC テスト用のツールをインストールします。

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**ステップ 5.** ターミナルで以下のコマンドを実行して、IIC バス上のマップされた名前を表示します：

```bash
i2cdetect -l
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_l.png"/>
</div>

**ステップ 6.** 以下のコマンドを実行して IIC0 をスキャンします：

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_detect.png"/>
</div>

IIC0 に接続されたデバイスがアドレス 0x08 に設定されていることがわかります。

## 拡張ポート

Robotics j401 キャリアボードは、GMSL 拡張ボード用のカメラ拡張ヘッダーを備えています。同時に 4 台の GMSL カメラを接続して動作させることができます。

### ハードウェア接続

以下は Robotics j401 キャリアボードの GMSL カメラ拡張ボード接続スロットです（事前に拡張ボードを準備する必要があります）：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/exb.png"/>
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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p2.png"/>
</div>

:::note
オーバーレイファイルは合計 3 つあり、それぞれ Seeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4、および Orbbec Gemini 335Lg です。これらはそれぞれ SG3S の 3G カメラ、SG2 と SG8S の 6G カメラ、および Orbbec のカメラに対応しています。図 3 に示すように、お使いのカメラのモデルに応じて io ファイルを設定してください。
:::

**ステップ 2.** ビデオインターフェース設定ツールをインストールします。

```bash
sudo apt update
sudo apt install v4l-utils
```

### Gemini 335Lg のカメラを使用する

```bash
#Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
#unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

初回起動時には、ファームウェアの更新が必要な場合があります。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

データストリームを開くと、カメラからの映像を表示できます。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div>

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

`--set-fmt-video` は接続されているカメラに基づいて選択される解像度に従います。現在、3 つの sensor_mode オプションがあり、それぞれ異なる解像度に対応しています。
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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/camera1.png"/>
</div>

## ディスプレイ

reComputer Jetson Robotics J401 は、高解像度ディスプレイ出力用の DP1.4（Type-C Host に含まれる）を搭載しています。

## リソース

- [reComputer Robotics J401 キャリアボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [reComputer Robotics J401 キャリアボードデータシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [reComputer Robotics 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [機械図面-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Seeed NVIDIA Jetson 製品カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Nvidia Jetson 比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Nvidia Jetson 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson ワンページャー](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験を可能な限りスムーズにするため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
