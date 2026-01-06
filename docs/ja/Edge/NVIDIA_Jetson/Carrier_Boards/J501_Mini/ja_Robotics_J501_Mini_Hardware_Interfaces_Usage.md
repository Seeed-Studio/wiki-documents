---
description: このwikiは、reComputer Jetson Robotics J501-Miniキャリアボードのハードウェア機能とインターフェース使用方法について包括的な紹介を提供します。詳細な仕様、サポートされるモジュール、セットアップ手順、M.2、Ethernet、USB、CAN、UART、DI/DO、I2S、GMSL2カメラ拡張などの様々なインターフェースの実用的なガイドを網羅し、ユーザーがJ501-Miniプラットフォームでのロボティクス開発を迅速に開始できるよう支援します。
title: Flash Jetpack && インターフェース使用方法
tags:
  - J501-Roboticsキャリアボード
  - Flash Jetpack
  - Robotics
  - インターフェース使用方法
  - インターフェース
  - ハードウェア
image: https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg
slug: /ja/recomputer_j501_mini_getting_started
last_update:
  date: 11/04/2025
  author: Dayu
---

# Robotics J501キャリアボードハードウェアと入門ガイド

reComputer Robotics J501 Miniは、先進的なロボティクス向けに設計されたコンパクトで高性能なエッジAIキャリアボードです。NVIDIA Jetson AGX Orinモジュール（32GB/64GB）のMAXNモードに対応し、最大275 TOPSのAI性能を提供します。デュアルギガビットEthernetポート、5GおよびWi-Fi/BTモジュール用M.2スロット、2つのUSB 3.2ポート、CAN、GMSL2（オプション拡張経由）、I2C、UARTなどの豊富な接続オプションを備え、様々なセンサーからの複雑なデータを処理できる強力なロボティクスブレインとして機能します。JetPack 6.2.1とLinux BSPがプリインストールされており、シームレスな展開を保証します。

NVIDIA Isaac ROS、Hugging Face、PyTorch、ROS 2/1などのフレームワークをサポートするreComputer Robotics J501 Miniは、大規模言語モデル駆動の意思決定と、モーションプランニングやセンサーフュージョンなどの物理的ロボティクス制御を橋渡しします。自律ロボットの迅速な開発に最適で、すぐに使用できるインターフェースと最適化されたAIフレームワークにより市場投入時間を短縮します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>

## reComputer Jetson Robotics J501-Miniキャリアボード概要

| **上面図** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png) |
| **側面図** |
| ![fig2](https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png) |
| **底面図** |
| ![fig3](https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png) |

## 📝 部品リスト

- reComputer Robotics J501-Miniキャリアボード x 1
- 電源供給およびJST拡張ボード x 1
- XT30からDCケーブル x 1
- USBケーブル、Type AからType C x 1
- 拡張ボード用ヒートシンク x 1
- スタッド(M3*30) x 5
- M3六角ナット x 5
- ネジ(CM2.5*L.4) Jetsonモジュールおよび M.2 Key M用 x3
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

## 🔍 仕様

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
      <td>1x M.2 KEY M PCIe (M.2 NVMe 2280 SSD)</td>
    </tr>
    <tr>
      <th rowSpan="2">ネットワーキング</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E WiFi/Bluetoothモジュール用</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>1x RJ45 10GbE && 1x RJ45 1GbE</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>2x USB 3.2 Type-A (10Gbps);<br />1x USB 2.0 Type C (Debug);<br />1x USB 3.0 Type C (Recovery/Debug)</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>2x 4 in 1 GMSL2 Mini-Fakraコネクタ（オプション）;</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN JST 4-Pinコネクタ(GH 1.25);</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>1x DI JST 6-Pinコネクタ(GH 1.25);<br />1x DO JST 5-Pinコネクタ(GH 1.25);</td>
    </tr>
      <tr>
      <td>I2S</td>
      <td>1x I2S JST 6-Pinコネクタ(GH 1.25)</td>
    </tr>
    <tr>
      <td>RS485</td>
      <td>1x RS-485 JST 4-Pinコネクタ(GH 1.25)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART JST 6-Pinコネクタ（DOと多重化）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1x 4 Pinファンコネクタ(12V PWM)</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td>2x カメラ拡張ヘッダー（GMSL2ボード用）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin;</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>1x PWR LED、緑;<br />1x SSD LED、緑;<br />1x USR LED、RGB</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td>1x Recoveryボタン;<br />1x RESETボタン</td>
    </tr>
    <tr>
      <th rowSpan="1">電源</th>
      <td colSpan="2">19-48V XT30（XT30から5525 DCジャックケーブル付属）</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpackバージョン</th>
      <td colSpan="2">Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th rowSpan="3">機械的仕様</th>
      <td>寸法（W x D x H）</td>
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
      <td colSpan="2">-20℃~60℃（25Wモード）;<br />-20℃~55℃（MAXNモード）;<br />（reComputer Roboticsヒートシンクとファン付き）</td>
    </tr>
    <tr>
      <th rowSpan="1">保証</th>
      <td colSpan="2">2年</td>
    </tr>
    <tr>
      <th rowSpan="1">認証</th>
      <td colSpan="2">RoHS、REACH、CE、FCC、UKCA、KC</td>
    </tr>
  </tbody>
</table>

## 📦 Flash JetPack OS

### サポートされるモジュール

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 前提条件

- Ubuntu ホストPC
- Robotics J501 Miniキャリアボード
- NVIDIA® Jetson AGX Orinモジュール
- Nano/NXモジュールアクティブファン
- NVMe M.2 2280内蔵SSD
- USB Type-Cデータ転送ケーブル

:::info

仮想マシンではなく、物理的なubuntuホストデバイスを使用することをお勧めします。
ホストマシンを準備するには、以下の表を参照してください。

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
      <td rowSpan={4}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDxBYYGqIfaSZqJT3uPt0alAa47BjjqCGvXWhD5tBsKx1M?e=3SW4Jf">ダウンロード</a></td>
      <td>f0efee5f265dbaef49dc14d517b269e<br />7f6582ff9977d9193d377966f36408ec3  </td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBohA1Z3GuSSJ7tFOQU8v22AYu8NNk9AS-1Cne78jOnSHw?e=dejuH9">ダウンロード</a></td>
      <td>0a97cbb6d708776bd97608594c60c3<br />4208b5d5dc6efbfc5553edd9c5a95802f6 </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6イメージファイルのサイズは約**14.2GB**で、ダウンロードには約60分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの整合性を確認するには、SHA256ハッシュ値を比較できます。

Ubuntuホストマシンで、ターミナルを開き、コマンド`sha256sum <File>`を実行してダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

⚙️ **SEEDのJetsonキャリアボード用のすべての`.dts`ファイルとその他のソースコードは** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) **からダウンロードできます**


### 強制リカバリモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。
:::

<details>

<summary> ステップバイステップ </summary>

**ステップ 1.** RESETモードのボタンを押し続けます。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/reset.png" />
</div>

**ステップ 2.** 電源ケーブルを接続してキャリアボードに電源を供給し、RESTボタンを離します。

**ステップ 3.** USB Type-Cデータ転送ケーブルでボードをUbuntuホストPCに接続します。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/flash-port.png" />
</div>

**ステップ 4.** LinuxホストPCで、ターミナルウィンドウを開き、コマンド`lsusb`を入力します。使用するJetson SoMに応じて、返される内容に以下の出力のいずれかがある場合、ボードは強制リカバリモードになっています。

- AGX Orin 32GB用: **0955:7223 NVidia Corp**
- AGX Orin 64GB の場合: **0955:7023 NVidia Corp**

以下の画像は AGX Orin 32GB 用です：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Jetson へのフラッシュ

**ステップ 1:** ダウンロードしたイメージファイルを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2025-09-08.tar.gz
```

**ステップ 2:** 以下のコマンドを実行して、jetpack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j501 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功すると、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは 2-10 分間実行される場合があります。
:::

**ステップ 3:** Robotics J501-Mini をディスプレイに接続します。PD to HDMI アダプターを使用して HDMI 入力をサポートするディスプレイに接続するか、PD ケーブルを使用して PD 入力をサポートするディスプレイに直接接続し、初期設定セットアップを完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
必要に応じて **System Configuration** を完了してください。
:::

## 🔌 インターフェースの使用方法

以下では、Robotics j501-Mini ボードの各種インターフェースとその使用方法を紹介します。

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
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-real.png"/>
</div>

### 使用方法

SSD の読み書き速度をテストする前に、Jetson ターミナルで以下を入力する必要があります：

```bash
sudo apt update
sudo apt install smartmontools
sudo smartctl -i /dev/nvme0n1
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t.png"/>
</div>


SSD の読み書き速度をテストするスクリプトファイルを作成します：


```bash
#You need to create a blank test file first
cat <<'EOF' | sudo tee test_nvme.sh >/dev/null
#!/usr/bin/env bash
set -e

sudo dd if=/dev/zero of=test bs=1000M count=1 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=test of=/dev/null bs=1000M count=1
sudo rm -rf test
EOF
```

スクリプトを実行して SSD の読み書き速度をテストします：
```bash
sudo chmod +x test_nvme.sh
./test_nvme
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>



## M.2 Key E

M.2 Key E インターフェースは標準的な M.2 コネクタで、主に Wi-Fi や Bluetooth などのワイヤレスモジュールの接続に使用され、ワイヤレス通信機能を拡張します。

### ハードウェア接続

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/KEY-E.png"/>
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

Robotics j501-Mini キャリアボードは、高速有線ネットワーク接続用の 2 つの 1Gbps RJ45 Ethernet ポートを搭載しています。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-real.png"/>
</div>

Ethernet ポートの速度をテストするには、以下のように `iperf3` を使用します：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` は iperf3 サーバーの IP アドレスです。クライアントはこのサーバーに接続して帯域幅テストを実行します。
`<bind_ip>` は指定されたローカル IP アドレスをテストトラフィックのソースとしてバインドします。
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-speed.png"/>
</div>

## LED

J501 mini には制御可能な 2 つの LED があります。以下では、LED を**緑**、**赤**、または**青**に制御する方法を示します。

<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div> -->

### 使用方法

LED を制御するための参考コマンドは以下の通りです：

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

LED 制御効果は以下の図に示されています：

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-rg.jpg"/>
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-gg.jpg"/>
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-bg.jpg"/>
</div>

## USB

Robotics j501-Mini キャリアボードには、2 つの USB 3.2 Type-A ポート（10Gbps）、USB 3.0 Type-C ポート、およびデバイスモード/デバッグ用の USB 2.0 Type-C ポートなど、さまざまな USB ポートが搭載されており、多様な接続オプションを提供します。

### USB-A 速度テスト

USB デバイス速度をテストするスクリプトを作成します：

```bash
sudo vim test_usb
```

以下の内容を貼り付けます：

```bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
sudo dd if=/dev/zero of=/dev/$1 bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=/dev/$1 of=/dev/null bs=1000M count=2
EOF
```

スクリプトを実行可能にしてテストします：

```bash
sudo chmod +x test_usb
./test_usb
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/usba-test.png"/>
</div>



### USB 2.0 Type-C ポート

このシリアルポートを使用して、USB-C データケーブル経由で PC 側の入出力デバッグ情報を監視できます。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/debug-port-real.png"/>
</div>


PC（Jetson ではない）でシリアルポートログインツールをインストールし、`/dev/ttyUSB0`（`ttyUSB1`、2 の場合もあります）にログインします：

```bash
sudo apt update
sudo apt install screen
screen /dev/ttyUSB0 115200
```

その後、以下に示すように、別の Linux ホストのシリアルポート経由で Jetson のターミナルを制御できます：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/login-usb.png"/>
</div>


## ファン

reComputer Jetson Robotics j501-Mini には以下が搭載されています：

- 1x 4 ピンファンコネクタ（12V PWM）：標準的な 12V PWM ファンと互換性があり、精密な速度制御もサポートしているため、高性能冷却要件に最適です。

### ハードウェア接続

Robotics J501 Mini はファン用の標準 4 ピンヘッダーを提供します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan0.png"/>
</div>

**ファン**のデータシート回路図は以下に示されています：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan1.png"/>
</div>

**J1** のピン定義は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan2.png"/>
</div>

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)をご確認ください。
:::

### 使用方法

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


さらに、`jtop` ツールを使用してファン速度を手動で設定することもできます。


## CAN

CAN（Controller Area Network）は、マイクロコントローラーとデバイスがホストコンピューターなしで相互に通信できるようにする堅牢な車両バス標準です。

J501 Mini は JST 4 ピン（GH1.25）に統合された 2 つの CAN インターフェースを提供します。さらに、両方の CAN インターフェースは **CAN-FD をサポート**しており、CAN0 と CAN1 は以下に示されています：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-real.png"/>
</div>

**CAN0** と **CAN1** のピンアウト定義は類似しており、インターフェース図は以下に示されています：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-jst.png"/>
</div>

**CAN0** は **J6** に対応し、ピン定義は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can0-ds.png"/>
</div>

**CAN1** は **J7** に対応し、ピン定義は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can1-ds.png"/>
</div>

### CAN通信
このセクションでは、Jetson上のCAN0とCAN1を接続し、`Classic CANモード`と`CAN-FDモード`でCAN0とCAN1間のデータ送受信方法を実演します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/CAN-connect.png"/>
</div>

CAN0とCAN1の終端抵抗は、gpiochip1 line4にあるPAA.04とgpiochip1 line7にあるPAA.07の2つのピンで制御できます。

終端抵抗制御は以下のルールに従います：
```
When `PAA.04 = 1`, the 120 Ω termination resistor of CAN0 is **disconnected**;  
when `PAA.04 = 0`, the 120 Ω termination resistor of CAN0 is **connected**.

When `PAA.07 = 1`, the 120 Ω termination resistor of CAN1 is **disconnected**;  
when `PAA.07 = 0`, the 120 Ω termination resistor of CAN1 is **connected**.
```

gpiochip 1のピンを表示するには、以下のコマンドを入力します：
```bash
gpioinfo gpiochip1
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gpiochip1-can.png"/>
</div>


`PAA.04`と`PAA.07`を0に設定するには、以下のコマンドを参照してください：
```bash
sudo gpioset --mode=wait gpiochip1 4=0
sudo gpioset --mode=wait gpiochip1 7=0
```

`PAA.04`と`PAA.07`を1に設定するには、以下のコマンドを参照してください：
```bash
sudo gpioset --mode=wait gpiochip1 4=1
sudo gpioset --mode=wait gpiochip1 7=1
```



#### Classic CANモード

標準モードで**CAN0**と**CAN1**間のデータ送受信をテストするために`test_can.sh`を作成します：

```bash
touch test_can.sh
chmod +x test_can.sh
./tets_can.sh
```
`test_can.sh`のスクリプトコードは以下の通りです：

<details>
<summary> test_can.sh </summary>

```sh
#!/bin/bash

echo "000000" | sudo -S ip link set can0 down
echo "000000" | sudo -S ip link set can1 down

# set buffer size
echo "000000" | sudo -S sysctl -w net.core.rmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.rmem_default=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_default=524288

 #set to 2M bps
echo "000000" | sudo -S ip link set can0 type can bitrate 2000000
echo "000000" | sudo -S ip link set can0 up

echo "000000" | sudo -S ip link set can1 type can bitrate 2000000
echo "000000" | sudo -S ip link set can1 up

sleep 2

#Enable 5s to test
sudo pkill -f gpioset
gpioset --mode=time --sec=200000 gpiochip1 7=0 &
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip1 4=0 &
GPIO2_PID=$!

cangen can1 &
candump can0
```

</details>

**CAN0**と**CAN1**間のデータ送受信が完了します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can_normal.jpg"/>
</div>


#### CAN-FDモード

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)では、**CAN0/CAN1**インターフェースの配線図を以下のように確認できます：


<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div> -->

<!-- Here we will demonstrate to you how to conduct data communication using the CAN1 interface, by utilizing the [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html). -->

CAN-FDモードでCAN0とCAN1間のデータ送受信をテストするために`test_canfd.sh`を作成します：

```bash
touch test_canfd.sh
chmod +x test_can.sh
./tets_can.sh
```
`test_canfdfd.sh`のスクリプトコードは以下の通りです：

<details>
<summary> test_canfd.sh </summary>

```sh
#!/bin/bash

# configure CAN FD mode
#CAN bus rate set to 500 kbps, data rate set to 5 Mbps.
echo "000000" | sudo -S ip link set can0 down
echo "000000" | sudo -S sudo ip link set can0 type can bitrate 500000 dbitrate 5000000 berr-reporting on fd on restart-ms 100
echo "000000" | sudo -S ip link set can0 up

echo "000000" | sudo -S ip link set can1 down
echo "000000" | sudo -S sudo ip link set can1 type can bitrate 500000 dbitrate 5000000 berr-reporting on fd on restart-ms 100
echo "000000" | sudo -S ip link set can1 up


# config buffer size
echo "000000" | sudo -S sysctl -w net.core.rmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.rmem_default=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_default=524288


# check CAN FD status
echo "CAN0 status:"
ip -details link show can0

echo "CAN1 status:"
ip -details link show can1

#Enable 5s to test
sudo pkill -f gpioset
gpioset --mode=time --sec=200000 gpiochip1 7=0 &
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip1 4=0 &
GPIO2_PID=$!

candump can0 &
cangen can1 -f

```

</details>

CAN0とCAN1間のデータ送受信が完了します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-fd.jpg"/>
</div>


## GPI && GPO

### GPI

Robotics J501 MiniはGPI用の標準6ピンJSTヘッダーを提供します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-real.png"/>
</div>

**GPI**データシート回路図は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-jst.png"/>
</div>

**J12**のピン定義は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-ds.png"/>
</div>


入力状態を読み取るために**GPI 1**から**GPI 4**を有効にします：
```bash
sudo gpioset --mode=wait 0 131=0
```


**GPI 1**から**GPI 4**の入力を読み取るには、以下のコマンドを参照してください：
```bash
sudo gpioget 0 96  #read the input of GPI 1
sudo gpioget 0 104 #read the input of GPI 2
sudo gpioget 0 86  #read the input of GPI 3
sudo gpioget 0 83  #read the input of GPI 4
```

ハイレベルが読み取られると1を返し、ローレベルが読み取られると0を返します。

### GPO

Robotics J501 MiniはGPO用の標準6ピンJSTヘッダーを提供します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-real.png"/>
</div>


**GPO**データシート回路図は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

**J14**のピン定義は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>

出力状態のために**GPO 1**から**GPO 4**を有効にします：
```bash
sudo gpioset --mode=wait 0 79=1
```


**GPO 1**から**GPO 4**の出力を設定するには、以下のコマンドを参照してください：

```bash
sudo gpioset --mode=wait 0 110=1  #set output of GPO 1 to high voltag
sudo gpioset --mode=wait 0 112=1  #set output of GPO 2 to high voltag
sudo gpioset --mode=wait 0 111=1  #set output of GPO 3 to high voltag
sudo gpioset --mode=wait 0 113=1  #set output of GPO 4 to high voltag


sudo gpioset --mode=wait 0 110=1  #set output of GPO 1 to low voltag
sudo gpioset --mode=wait 0 112=1  #set output of GPO 2 to low voltag
sudo gpioset --mode=wait 0 111=1  #set output of GPO 3 to low voltag
sudo gpioset --mode=wait 0 113=1  #set output of GPO 4 to low voltag
```


## UART

Robotics J501 MiniはUARTシリアル通信用の標準6ピンJSTヘッダーを提供します。
UARTとGPOは同じJSTインターフェースを使用します。このインターフェースはデフォルトでGPO機能になっています。**UART機能に切り替える必要がある場合は、新しいデバイスツリーを指定してデバイスを再起動し、変更を有効にする必要があります。**


**UART**通信については、以下の配線に従ってください。ここでは、USB to TTLツールを例として使用します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/uart-real.png"/>
</div>

**UART**データシート回路図は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

**J14**のピン定義は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>



:::warning
UARTとGPOは同じ物理インターフェースを共有します。デフォルトでは、このインターフェースはGPOとして機能します。UARTに切り替える必要がある場合は、このセクションの内容を参照してください。
:::

異なるモジュールについては、対応するデバイスツリーファイルをダウンロードする必要があります。

AGX Orin 32G用の`.dtb`ダウンロードリンク：
[https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb](https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb)

AGX Orin 64G用の`.dtb`ダウンロードリンク：
[https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb](https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb)

デバイスツリーを指定されたパスにコピーします：
```bash
# AGX Orin 32G
sudo cp tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb /boot/

# AGX Orin 64G
sudo cp tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb /boot/
```

`/boot/extlinux/extlinux.conf`をバックアップして修正し、新しい`.dtb`ファイルを指す行を追加します：

```bash
sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
sudo vim /boot/extlinux/extlinux.conf
```

使用しているデバイスツリーファイル名に基づいて、`extlinux.conf`に`FDT=/your_path`の行を追加します。AGX Orin 32Gを例にします：

```python
LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      FDT=/boot/tegra234-j501x-0000+p3701-0004-recomputer-mini.dtb
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/uart-edit.png"/>
</div>


6ピンJSTヘッダー **UART** は、Jetson上の `/dev/ttyTHS1` にマッピングされています。`minicom` を使用してシリアルポートのデータ送受信を確認できます：

```bash
sudo apt install minicom
sudo minicom -D /dev/ttyTHS1
```


## RS485

RS485インターフェースは、産業環境で一般的に使用される堅牢でノイズ耐性のある差動通信チャネルを提供します。長距離、マルチドロップシリアル通信をサポートし、センサー、モーターコントローラー、PLC、その他の産業機器の接続に最適です。

### ハードウェア接続

Robotics J501-MiniはRS485用のJST 4ピン（GH 1.25）ヘッダーを提供します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-real.png"/>
</div>

**RS485** データシートの回路図を以下に示します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-jst.png"/>
</div>

**J8** のピン定義は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-ds.png"/>
</div>



### 使用方法
**RS485** インターフェースを有効にするには、以下のコマンドを参照してください：

```bash
sudo gpioset --mode=wait 1 9=0  # Enable 120R resistance

sudo gpioset --mode=wait 0 126=0 # Enable RS485
```


**RS485** インターフェースは、Jetson上の `/dev/ttyTHS4` にマッピングされています。`cutecom` を使用してPCとのシリアルデータ送受信をテストできます：

```bash
sudo apt install cutecom
sudo cutecom
```

`/dev/ttyTHS4` を選択し、JetsonとPCの両方のボーレートを9600に設定し、RS485からUSBモジュール経由でJetsonとPCを接続します。
シリアルデータの送受信効果を以下の図に示します：

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_jetson.png" alt="Jetson side" height={200} />
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_PC.png" alt="PC side" height={200} />
</div>

## I2S

I2Sインターフェースは、デバイス間でステレオオーディオデータを送信するために設計されたデジタルオーディオ通信バスを提供します。Robotics J501-Miniは標準的なI2Sシグナリングをサポートし、音声対話、音源定位、リアルタイムオーディオ処理などのアプリケーション向けに高品質、低遅延のオーディオ入出力を可能にします。

### ハードウェア接続
Robotics J501-Miniは **I2S** 用の1x JST 5ピンコネクタ（GH 1.25）を提供します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/I2S-real.png"/>
</div>


**I2S** データシートの回路図を以下に示します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-jst.png"/>
</div>


**J9** のピン定義は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-ds.png"/>
</div>


### 使用方法

**I2S** を有効にするには、`jetson-io.py` で設定する必要があります。ターミナルで以下を実行してください：

```bash
sudo python /opt/nvidia/jetson-io/jetson-io.py
```

次に、以下の4つのステップを参照してI2Sインターフェースを有効にしてください：

- ステップ1：**Jetson 40-pin header** オプションを選択
- ステップ2：**Configure header pins manually** を選択
- ステップ3：`i2s2` を選択；選択後、`[*]` でマークされます
- ステップ4：設定を保存してJetsonを再起動

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: '1fr 1fr', 
  gap: '10px', 
  justifyContent: 'center', 
  alignItems: 'center' 
}}>

  <!-- Step 1 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>ステップ 1</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/1-i2s.png" 
         alt="Step 1" 
         height={300} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 3 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>ステップ 3</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/3-i2s.png" 
         alt="Step 3" 
         height={300} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 2 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>ステップ 2</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-i2s.png" 
         alt="Step 2" 
         height={500} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 4 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>ステップ 4</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/4-i2s.png" 
         alt="Step 4" 
         height={460} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

</div>


**I2S** を有効にした後、このセクションではI2Sを使用してデュアルチャンネルスピーカーを駆動する方法を説明します。まず、ターミナルで以下を入力してください：

```bash
amixer -c APE cset name="I2S2 Mux" "ADMAIF1" # Speaker
```

マイクを使用している場合：
```bash
amixer -c APE cset name="ADMAIF2 Mux" "I2S2" # Microphone
```

スピーカーを駆動するには以下のコマンドを参照してください。`-c` は使用しているスピーカーのチャンネル数に変更してください：

```bash
speaker-test -t sine -f 440 -c 2
```

スピーカーが正常に駆動されている場合、以下の図に示すようにターミナルで出力を確認できます。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-speaker.png"/>
</div>

## RTC


Robotics J501-Miniは **RTC**（3V）用の標準2ピンヘッダーを提供します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc0.png"/>
</div>

**RTC** データシートの回路図を以下に示します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc1.png"/>
</div>

**J15** のピン定義は以下の通りです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc2.png"/>
</div>



外部バッテリーを接続した後、ターミナルで `rtc0`（メインRTC、オンボードバッテリーに対応）の動作状態を確認できます：

```bash
cat /sys/class/rtc/rtc0/power/runtime_status
```


## 拡張ポート - GMSL

Robotics j501-Miniキャリアボードは、GMSL拡張ボード用のカメラ拡張ヘッダーを搭載しています。4台のGMSLカメラを同時に接続して動作させることができます。

### ハードウェア接続

以下は、Robotics j501-MiniキャリアボードのGMSLカメラ拡張ボード接続スロットです（事前に拡張ボードを準備する必要があります）：

<div align="center">
  <img width="450" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-real1.png"/>
  <img width="450" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-real2.png"/>
</div>

以下は、すでにサポートしているGMSLカメラモデルです：

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A

### 使用方法

:::note
GMSL機能を有効にする前に、GMSL拡張ボードドライバーを含むJetPackバージョンがインストールされていることを確認してください。
:::

### Jetson IOファイルの設定

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
オーバーレイファイルは合計3つあり、それぞれSeeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4、およびOrbbec Gemini 335Lgです。これらはそれぞれSG3Sの3Gカメラ、SG2とSG8Sの6Gカメラ、およびOrbbecのカメラに対応しています。図3に示すように、お使いのカメラのモデルに応じてioファイルを設定してください。
:::

**ステップ 2.** ビデオインターフェース設定ツールをインストールします。

```bash
sudo apt update
sudo apt install v4l-utils
```

<!-- ### Use the camera of Gemini 335Lg

```bash
#Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
#unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

The first time you turn it on, you might need to update the firmware.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

Opening the data stream, you can view the video from the camera.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div> -->

### SGxxx シリーズのカメラを使用する

**ステップ 1.** シリアライザーとデシリアライザーのチャンネル形式を設定します。図中のインターフェース番号はシリアライザー/デシリアライザー番号に対応しています。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-Interface.png"/>
</div>

```bash
  media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'

```

:::note
`ser_0_ch_0`はデコーダーの最初のチャンネル、`des_ch_0`は最初のカメラのシリアライザーで、他も同様です。接続されたカメラの解像度が異なる場合、ここでの設定はカメラの実際のフォーマットに基づきます。
デバイスが再起動するたびに、シリアライザーとデシリアライザーのチャンネルフォーマットを設定する必要があります。
:::

**ステップ 2.** カメラの解像度を設定します。

:::info
ここでは、異なるモデルと解像度のカメラを設定する方法を説明します。
:::

```bash
v4l2-ctl -V --set-fmt-video=width=1920,height=1080 -c sensor_mode=1  -d /dev/video0
v4l2-ctl -V --set-fmt-video=width=1920,height=1080 -c sensor_mode=1  -d /dev/video1
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0  -d /dev/video2
v4l2-ctl -V --set-fmt-video=width=3840,height=2160 -c sensor_mode=2  -d /dev/video3 
```

:::note
`--set-fmt-video`は接続されているカメラに基づいて選択された解像度に従います。sensor_modeも同様に選択されます。現在、3つのsensor_modeオプションがあり、それぞれ異なる解像度に対応しています。

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**ステップ 3.** カメラを開始します。

```bash
gst-launch-1.0 v4l2src device=/dev/video0 ! \
'video/x-raw,width=1920,height=1080,framerate=30/1,format=UYVY' ! \
videoconvert ! xvimagesink -ev

gst-launch-1.0 v4l2src device=/dev/video1 ! \
'video/x-raw,width=1920,height=1080,framerate=30/1,format=UYVY' ! \
videoconvert ! xvimagesink -ev

gst-launch-1.0 v4l2src device=/dev/video2 ! \
'video/x-raw,width=1920,height=1536,framerate=30/1,format=UYVY' ! \
videoconvert ! xvimagesink -ev

gst-launch-1.0 v4l2src device=/dev/video3 ! \
'video/x-raw,width=3840,height=2160,framerate=30/1,format=UYVY' ! \
videoconvert ! xvimagesink -ev
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/camera1.png"/>
</div>

## ディスプレイ

Robotics J501 Miniは高解像度ディスプレイ出力用のHDMIを搭載しています。

## リソース

- [reComputer Robotics J501-Mini キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/reComputer_mini_J501_datasheet.pdf)

<!-- - [reComputer Robotics J501-Mini Carrier Board Datasheet]() -->

- [SeeedのL4Tソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
