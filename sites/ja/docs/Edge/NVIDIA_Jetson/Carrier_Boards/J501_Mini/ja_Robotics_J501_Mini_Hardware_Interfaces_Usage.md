---
description: このWikiでは、Jetson Mini J501キャリアボードのハードウェア機能とインターフェースの使用方法について包括的に紹介します。エッジAIおよびロボティクスのシナリオ向けに設計されており、詳細な仕様、対応モジュール、セットアップ手順、M.2、Ethernet、USB、CAN、UART、DI/DO、I2S、GMSL2カメラ拡張などのインターフェースの実用的な使用ガイドを網羅しています。
title: Mini J501 JetPackのフラッシュとインターフェースの使用
tags:
  - Mini J501 キャリアボード
  - JetPack のフラッシュ
  - ロボティクス
  - インターフェースの使用
  - インターフェース
  - ハードウェア
image: https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg
slug: /recomputer_j501_mini_getting_started
sku: 100020039
last_update:
  date: 07/09/2026
  author: Dayu
createdAt: '2025-11-25'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/ja/recomputer_j501_mini_getting_started/
---
# Mini J501 キャリアボード ハードウェアと入門

Mini J501 は、NVIDIA Jetson AGX Orin モジュール（32GB/64GB）向けのコンパクトで高性能なエッジAIキャリアボードです。MAXNモードで最大275 TOPSのAI性能を発揮し、デュアルGigabit Ethernetポート、5GおよびWi-Fi/Bluetoothモジュール用のM.2スロット、2つのUSB 3.2ポート、CAN、オプション拡張によるGMSL2、I2C、UARTなど、豊富な接続オプションを提供します。JetPack 6.2.1とLinux BSPがプリインストールされており、エッジAIアプリケーションの迅速な展開をサポートします。

Mini J501 はロボティクスのシナリオでも使用できます。NVIDIA Isaac ROS、Hugging Face、PyTorch、ROS 2/1 などのフレームワークをサポートし、モーションプランニング、センサーフュージョン、マルチカメラ認識など、モデル駆動の意思決定と実ロボット制御をつなぐことができます。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-with-GMSL-Bundle-for-Jetson-AGX-Orintm.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>

## reComputer Jetson Mini J501 キャリアボード概要

| **上面図** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png) |
| **側面図** |
| ![fig2](https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png) |
| **底面図** |
| ![fig3](https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png) |

## 📝 同梱物

- Mini J501 キャリアボード x 1
- 電源および JST 拡張ボード x 1
- XT30 から DC ケーブル x 1
- USB ケーブル（Type A to Type C）x 1
- 拡張ボード用ヒートシンク x 1
- スタッド（M3*30）x 5
- M3 六角ナット x 5
- Jetson モジュールおよび M.2 Key M 用ネジ（CM2.5*L.4）x3
- M.2 Key E 用ネジ（CM2*3.0）x1
- M.2 Key B 用スタッド（M2*2.0）x1
- M.2 Key B 用ネジ（CM3*4.0）x1
- ユーザーマニュアル x 1

:::note
1.高電圧電源および高温環境で動作させる場合は、Thermal Design Guide に従って堅牢な放熱ソリューションを設計してください。
2.より良い性能のために、モジュールにヒートシンクを取り付けてください。
3.高電圧入力かつ高負荷で動作中は、やけど防止のためヒートシンクに触れないでください。
4.検証用の電源アダプタの推奨については、Seeed 公式サイトで推奨されている電源アダプタを使用してください。

- 19V/4.74A 5525 バレルジャック電源アダプタ
- 最大消費電力要件を満たしていることを確認してください。
2.AC 電源コードの互換性
- ご利用地域に応じて、地域仕様の AC クローバーリーフ電源コードを購入してください。
3.アクセサリの互換性
- 最適な性能と互換性のために、公式に推奨されているアクセサリ（例：無線モジュール、カメラ、周辺機器）のみを使用してください。

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
      <td>1x M.2 KEY M PCIe（M.2 NVMe 2280 SSD）</td>
    </tr>
    <tr>
      <th rowSpan="2">ネットワーキング</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E（WiFi/Bluetooth モジュール用）</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>1x RJ45 10GbE ＆＆ 1x RJ45 1GbE</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>2x USB 3.2 Type-A（10Gbps）；<br />1x USB 2.0 Type C（デバッグ）；<br />1x USB 3.0 Type C（リカバリ/デバッグ）</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>2x 4 in 1 GMSL2 Mini-Fakra コネクタ（オプション）；</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN JST 4ピンコネクタ（GH 1.25）；</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>1x DI JST 6ピンコネクタ（GH 1.25）；<br />1x DO JST 5ピンコネクタ（GH 1.25）；</td>
    </tr>
      <tr>
      <td>I2S</td>
      <td>1x I2S JST 6ピンコネクタ（GH 1.25）</td>
    </tr>
    <tr>
      <td>RS485</td>
      <td>1x RS-485 JST 4ピンコネクタ（GH 1.25）</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART JST 6ピンコネクタ（DO と多重化）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1x 4ピンファンコネクタ（12V PWM）</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td>2x カメラ拡張ヘッダ（GMSL2 ボード用）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2ピン；</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>1x PWR LED（緑）；<br />1x SSD LED（緑）；<br />1x USR LED（RGB）</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td>1x リカバリボタン；<br />1x RESET ボタン</td>
    </tr>
    <tr>
      <th rowSpan="1">電源</th>
      <td colSpan="2">19-48V XT30（XT30 から 5525 DC ジャックケーブル付属）</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack バージョン</th>
      <td colSpan="2">Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th rowSpan="3">機構</th>
      <td>寸法（W x D x H）</td>
      <td>110mm x 110mm x 38mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>200g</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td>デスク、壁掛け</td>
    </tr>
    <tr>
      <th rowSpan="1">動作温度</th>
      <td colSpan="2">-20℃～60℃（25W モード）；<br />-20℃～55℃（MAXN モード）；<br />（対応するファン付きヒートシンク使用時）</td>
    </tr>
    <tr>
      <th rowSpan="1">保証</th>
      <td colSpan="2">2 年</td>
    </tr>
    <tr>
      <th rowSpan="1">認証</th>
      <td colSpan="2">RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## 📦 JetPack OS をフラッシュする

### 対応モジュール

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 事前準備

- Ubuntu ホスト PC
- Mini J501 キャリアボード
- NVIDIA® Jetson AGX Orin モジュール
- Nano/NX モジュール用アクティブファン
- NVMe M.2 2280 内蔵 SSD
- USB Type-C データ転送ケーブル

:::info

仮想マシンではなく、物理的な Ubuntu ホストデバイスを使用することを推奨します。
ホストマシンを準備する際は、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="4"> Ubuntu Version（ホストコンピュータ） </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 7.2</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> JetPack 7.2 では、Ubuntu 24.04 はフラッシュおよびターゲット側コンポーネントのインストールのみサポートされます。ホスト開発コンポーネントが必要な場合は、Ubuntu 20.04 または 22.04 を使用してください。</p>

:::

### Jetpack イメージの準備

ここでは、使用している Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードする必要があります。

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
      <td rowSpan={2}>7.2</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBraqxVv-rUQKkcwG2EXybtAUKJgIvgi77ze4eig_Hj3Ns">Download</a></td>
      <td>1cd0d7004f426a524a55761bf01dd22280829b9834cbd11d4094b29865f46fe9</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBj3DRU7fhETozDjV3BAOG2Ac69rCRZhqNqr_RXuCliXXM">Download</a></td>
      <td>c369b02c979a8d0e1bd926725e94eba19be0e1b6a1a145e03a1179e77b72c5fd</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAUQ4ithrVMQLSE274ftNcLAdScXb2OFE8LXfabvKzaGS8">Download</a></td>
      <td>53859b314aba332c417c7295d9f6b6711bc7d8c4352dad55aa917af80757330c</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBvVrfoK43HRL2Y3PDLtz8wAUzka-auuvvWTx0J4QCrtwc">Download</a></td>
      <td>16408ec8d3b8b0e01eb7edd81b0367357f7dddfdee09388da4c74591d31f917a</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack イメージファイルは大容量のため、ダウンロードに約60分かかる場合があります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの完全性を確認するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、`sha256sum <File>` コマンドを実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが Wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全で破損していないことが確認できます。
:::

⚙️ **SEEED の Jetson キャリアボード向けのすべての `.dts` ファイルおよびその他のソースコードは** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) **からダウンロードできます**


### Force Recovery モードに入る

:::info
インストール手順に進む前に、ボードが Force Recovery モードになっていることを確認する必要があります。
:::

<details>

<summary> 手順 </summary>

**Step 1.** **REC** ボタンを押し続けます。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/reset.png" />
</div>

**ステップ 2.** 電源ケーブルを接続してキャリアボードの電源を入れ、その後 **REC** ボタンを離します。

**ステップ 3.** USB Type-C データ転送ケーブルを使用して、ボードを Ubuntu ホスト PC に接続します。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/flash-port.png" />
</div>

**ステップ 4.** Linux ホスト PC でターミナルウィンドウを開き、コマンド `lsusb` を入力します。使用している Jetson SoM に応じて、返された内容に以下のいずれかの出力が含まれていれば、ボードはフォースリカバリモードになっています。

- AGX Orin 32GB の場合: **0955:7223 NVidia Corp**
- AGX Orin 64GB の場合: **0955:7023 NVidia Corp**

以下の画像は AGX Orin 32GB の例です: 

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Jetson へのフラッシュ

**ステップ 1:** ダウンロードしたイメージファイルを解凍します:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For JetPack 7.2 example: sudo tar xpf mfi_recomputer-mini-agx-orin-j501x-32g-7.2.0-39.2.0-2026-06-25.tar.gz
# For JetPack 6.2.1 example: sudo tar xpf mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**ステップ 2:** 次のコマンドを実行して、JetPack システムを NVMe SSD にフラッシュします:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には 2〜10 分かかる場合があります。
:::

**ステップ 3:** PD から HDMI へのアダプタを使用して Mini J501 をディスプレイに接続するか、PD 入力をサポートするディスプレイに PD ケーブルで直接接続し、初期設定を完了します:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
**System Configuration** をニーズに応じて完了してください。
:::

## 🔌 インターフェースの使用方法

以下のセクションでは、Mini J501 ボードの各種インターフェースとその使用方法について説明します。

## M.2 Key M

M.2 Key M は高速 NVMe SSD 用に設計されており、ロボティクスアプリケーション向けに超高速データ転送を提供します。

### 対応 SSD は以下のとおりです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### ハードウェア接続

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-real.png"/>
</div>

### 使用手順

SSD の読み書き速度をテストする前に、Jetson のターミナルで次のコマンドを入力する必要があります:

```bash
sudo apt update
sudo apt install smartmontools
sudo smartctl -i /dev/nvme0n1
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t.png"/>
</div>


SSD の読み書き速度をテストするスクリプトファイルを作成します:


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

スクリプトを実行して SSD の読み書き速度をテストします:
```bash
sudo chmod +x test_nvme.sh
./test_nvme
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>



## M.2 Key E

M.2 Key E インターフェースは標準的な M.2 コネクタで、主に Wi-Fi や Bluetooth などの無線モジュールを接続し、無線通信機能を拡張するために使用されます。

### ハードウェア接続

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/KEY-E.png"/>
</div>

### 使用手順

Wi-Fi の性能をテストするには、次のコマンドを使用します（IP アドレスはテストサーバーのものに置き換えてください）:

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

Mini J501 キャリアボードには、1Gbps と 10Gbps の RJ45 Ethernet ポートがそれぞれ 1 つずつ搭載されており、高速な有線ネットワーク接続が可能です。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-real.png"/>
</div>

Ethernet ポートの速度をテストするには、次のように `iperf3` を使用します:

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` は iperf3 サーバーの IP アドレスです。クライアントはこのサーバーに接続して帯域幅テストを実行します。
`<bind_ip>` は、テストトラフィックの送信元として使用するローカル IP アドレスを指定してバインドします。
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-speed.png"/>
</div>

## LED

Mini J501 には制御可能な LED が 2 つ搭載されています。以下では、LED を **緑**、**赤**、**青** に制御する方法を示します。

<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div> -->

### 使用手順

LED を制御するための参考コマンドは次のとおりです:

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

LED 制御の効果は、以下の図のとおりです:

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-rg.jpg"/>
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-gg.jpg"/>
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-bg.jpg"/>
</div>

## USB

Mini J501 キャリアボードには、2 つの USB 3.2 Type-A ポート（10Gbps）、1 つの USB 3.0 Type-C ポート、およびデバイスモード/デバッグ用の USB 2.0 Type-C ポートが搭載されており、多様な接続オプションを提供します。

### USB-A 速度テスト

USB デバイスの速度をテストするスクリプトを作成します:

```bash
sudo vim test_usb
```

次の内容を貼り付けます:

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

スクリプトに実行権限を与えてテストします: 

```bash
sudo chmod +x test_usb
./test_usb
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/usba-test.png"/>
</div>



### USB 2.0 Type-C ポート

このシリアルポートを USB-C データケーブル経由で使用することで、PC 側で入出力のデバッグ情報をモニタリングできます。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/debug-port-real.png"/>
</div>


PC（Jetson ではなく）側でシリアルポートログインツールをインストールし、`/dev/ttyUSB0` にログインします（`ttyUSB1` や 2 の場合もあります）:

```bash
sudo apt update
sudo apt install screen
screen /dev/ttyUSB0 115200
```

その後、別の Linux ホスト上のシリアルポート経由で Jetson のターミナルを、以下のように操作できます:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/login-usb.png"/>
</div>


## Fan

reComputer Jetson Mini J501 には次のものが搭載されています:

- 1x 4 ピンファンコネクタ (12V PWM): 標準的な 12V PWM ファンと互換性があり、精密な回転数制御もサポートするため、高性能な冷却が必要な用途に最適です。

### ハードウェア接続

Mini J501 には、ファン用の標準 4 ピンヘッダが用意されています。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan0.png"/>
</div>

**Fan** のデータシート回路図は以下のとおりです:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan1.png"/>
</div>

**J1** のピン定義は次のとおりです:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan2.png"/>
</div>

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)を参照してください。
:::

### 使用手順

**ファン速度を設定するスクリプトを作成します:**

```bash
cat test_fanSpeedSet
```

次の内容を貼り付けます:

```bash
#!/bin/bash
sudo systemctl stop nvfancontrol
sleep 2
echo "000000" | sudo -S chmod 777 /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
echo $1 > /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
```


さらに、`jtop` ツールを使用してファン速度を手動で設定することもできます。


## CAN

CAN（Controller Area Network）は、ホストコンピュータを必要とせずにマイコンやデバイス同士が相互に通信できる、堅牢な車載バス規格です。

Mini J501 は JST 4-pin(GH1.25) に統合された 2 つの CAN インターフェースを提供します。さらに、両方の CAN インターフェースは **CAN-FD をサポート**しており、CAN0 と CAN1 は次のように示されています：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-real.png"/>
</div>

**CAN0** と **CAN1** のピン配置定義は類似しており、インターフェース図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-jst.png"/>
</div>

**CAN0** は **J6** に対応しており、ピン定義は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can0-ds.png"/>
</div>

**CAN1** は **J7** に対応しており、ピン定義は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can1-ds.png"/>
</div>

### CAN 通信
このセクションでは、Jetson 上の CAN0 と CAN1 を接続し、`Classic CAN mode` と `CAN-FD mode` で CAN0 と CAN1 間のデータ送受信を行う方法を説明します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/CAN-connect.png"/>
</div>

CAN0 と CAN1 の終端抵抗は、gpiochip1 line4 にある PAA.04 と、gpiochip1 line7 にある PAA.07 の 2 つのピンで制御できます。  

終端抵抗の制御は次のルールに従います：  
```
When `PAA.04 = 1`, the 120 Ω termination resistor of CAN0 is **disconnected**;  
when `PAA.04 = 0`, the 120 Ω termination resistor of CAN0 is **connected**.

When `PAA.07 = 1`, the 120 Ω termination resistor of CAN1 is **disconnected**;  
when `PAA.07 = 0`, the 120 Ω termination resistor of CAN1 is **connected**.
```

gpiochip 1 上のピンを表示するには、次のコマンドを入力します：
```bash
gpioinfo gpiochip1
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gpiochip1-can.png"/>
</div>


`PAA.04` と `PAA.07` を 0 に設定するには、次のコマンドを参照してください：
```bash
sudo gpioset --mode=wait gpiochip1 4=0
sudo gpioset --mode=wait gpiochip1 7=0
```

`PAA.04` と `PAA.07` を 1 に設定するには、次のコマンドを参照してください：
```bash
sudo gpioset --mode=wait gpiochip1 4=1
sudo gpioset --mode=wait gpiochip1 7=1
```



#### Classic CAN mode

標準モードで **CAN0** と **CAN1** 間のデータ送受信をテストするために `test_can.sh` を作成します：

```bash
touch test_can.sh
chmod +x test_can.sh
sudo ./tets_can.sh
```
`test_can.sh` のスクリプトコードは次のとおりです：

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

**CAN0** と **CAN1** 間のデータ送受信が完了します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can_normal.jpg"/>
</div>


#### CAN-FD mode

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf) では、以下に示すような **CAN0/CAN1** インターフェースの配線図を確認できます：


<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div> -->

<!-- Here we will demonstrate to you how to conduct data communication using the CAN1 interface, by utilizing the [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html). -->

CAN-FD モードで CAN0 と CAN1 間のデータ送受信をテストするために `test_canfd.sh` を作成します：

```bash
touch test_canfd.sh
chmod +x test_can.sh
sudo ./tets_can.sh
```
`test_canfdfd.sh` のスクリプトコードは次のとおりです：

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

CAN0 と CAN1 間のデータ送受信が完了します：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-fd.jpg"/>
</div>


## GPI および GPO

### GPI

Mini J501 は GPI 用に標準的な 6 ピン JST ヘッダを提供します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-real.png"/>
</div>

**GPI** のデータシート回路図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-jst.png"/>
</div>

**J12** のピン定義は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-ds.png"/>
</div>


入力状態を読み取るために **GPI 1** から **GPI 4** を有効にします：
```bash
sudo gpioset --mode=wait 0 131=0
```


**GPI 1** から **GPI 4** の入力を読み取るには、次のコマンドを参照してください：
```bash
sudo gpioget 0 96  #read the input of GPI 1
sudo gpioget 0 104 #read the input of GPI 2
sudo gpioget 0 86  #read the input of GPI 3
sudo gpioget 0 83  #read the input of GPI 4
```

High レベルを読み取ると 1 を返し、Low レベルを読み取ると 0 を返します。

### GPO

Mini J501 は GPO 用に標準的な 6 ピン JST ヘッダを提供します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-real.png"/>
</div>


**GPO** のデータシート回路図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

**J14** のピン定義は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>

出力状態のために **GPO 1** から **GPO 4** を有効にします：
```bash
sudo gpioset --mode=wait 0 79=1
```


**GPO 1** から **GPO 4** の出力を設定するには、次のコマンドを参照してください：

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

Mini J501 は UART シリアル通信のために標準的な 6 ピン JST ヘッダを提供します。
UART と GPO は同じ JST インターフェースを使用します。このインターフェースはデフォルトで GPO 機能になっています。**UART 機能に切り替える必要がある場合は、新しいデバイスツリーを指定し、変更を有効にするためにデバイスを再起動する必要があります。**


**UART** 通信を行うには、次の配線に従ってください。ここでは例として USB to TTL ツールを使用します。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/uart-real.png"/>
</div>

**UART** のデータシート回路図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

**J14** のピン定義は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>



:::warning
UART と GPO は同じ物理インターフェースを共有します。デフォルトでは、このインターフェースは GPO として機能します。UART に切り替える必要がある場合は、このセクションの内容を参照してください。
:::

モジュールごとに、対応するデバイスツリーファイルをダウンロードする必要があります。

AGX Orin 32G 用の `.dtb` ダウンロードリンク：  
[https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb](https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb)  

AGX Orin 64G 用の `.dtb` ダウンロードリンク：  
[https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb](https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb)  

デバイスツリーを指定されたパスにコピーします：
```bash
# AGX Orin 32G
sudo cp tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb /boot/

# AGX Orin 64G
sudo cp tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb /boot/
```

`/boot/extlinux/extlinux.conf` をバックアップして編集し、新しい `.dtb` ファイルを指す行を追加します：

```bash
sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
sudo vim /boot/extlinux/extlinux.conf
```

使用しているデバイスツリーファイル名に基づいて、`extlinux.conf` に `FDT=/your_path` という行を追加します。AGX Orin 32G を例にすると次のようになります：

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


6 ピン JST ヘッダ **UART** は Jetson 上の `/dev/ttyTHS1` にマッピングされています。`minicom` を使用してシリアルポートのデータ送受信を確認できます：

```bash
sudo apt install minicom
sudo minicom -D /dev/ttyTHS1
```


## RS485

RS485 インターフェースは、産業環境で一般的に使用される、堅牢でノイズ耐性の高い差動通信チャネルを提供します。長距離かつマルチドロップのシリアル通信をサポートし、センサー、モータードライバ、PLC などの産業用デバイスの接続に最適です。 

### ハードウェア接続

Mini J501 は RS485 用に JST 4 ピン（GH 1.25）ヘッダを 1 つ備えています。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-real.png"/>
</div>

**RS485** のデータシート上の回路図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-jst.png"/>
</div>

**J8** のピン定義は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-ds.png"/>
</div>



### 使用手順
**RS485** インターフェースを有効にするには、次のコマンドを参照してください：

```bash
sudo gpioset --mode=wait 1 9=0  # Enable 120R resistance

sudo gpioset --mode=wait 0 126=0 # Enable RS485
```


**RS485** インターフェースは Jetson 上の `/dev/ttyTHS4` にマッピングされています。`cutecom` を使用して、PC とシリアルデータの送受信テストを行うことができます：

```bash
sudo apt install cutecom
sudo cutecom
```

`/dev/ttyTHS4` を選択し、Jetson と PC の両方をボーレート 9600 に設定し、RS485-USB 変換モジュールを介して Jetson と PC を接続します。
シリアルデータの送受信の様子は、次の図のように確認できます：

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_jetson.png" alt="Jetson side" height={200} />
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_PC.png" alt="PC side" height={200} />
</div>

## I2S

I2S インターフェースは、デバイス間でステレオオーディオデータを送信するために設計されたデジタルオーディオ通信バスを提供します。Mini J501 は標準的な I2S 信号をサポートしており、音声対話、音源定位、リアルタイム音声処理などのアプリケーション向けに、高品質かつ低遅延のオーディオ入出力を実現します。

### ハードウェア接続
Mini J501 は **I2S** 用に 1x JST 5 ピンコネクタ（GH 1.25）を備えています。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/I2S-real.png"/>
</div>


**I2S** のデータシート上の回路図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-jst.png"/>
</div>


**J9** のピン定義は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-ds.png"/>
</div>


### 使用手順

**I2S** を有効にするには、`jetson-io.py` で設定する必要があります。ターミナルで次を実行します：

```bash
sudo python /opt/nvidia/jetson-io/jetson-io.py
```

その後、以下の 4 つの手順に従って I2S インターフェースを有効にします：

- step1: **Jetson 40-pin header** オプションを選択します  
- step2: **Configure header pins manually** を選択します  
- step3: `i2s2` を選択します。選択後は `[*]` でマークされます  
- step4: 設定を保存し、Jetson を再起動します  

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
    }}>Step 1</div>
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
    }}>Step 3</div>
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
    }}>Step 2</div>
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
    }}>Step 4</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/4-i2s.png" 
         alt="Step 4" 
         height={460} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

</div>


**I2S** を有効にした後、このセクションでは I2S を使用して 2 チャンネルスピーカーを駆動する方法を説明します。まず、ターミナルで次を入力します：

```bash
amixer -c APE cset name="I2S2 Mux" "ADMAIF1" # Speaker
```

マイクを使用する場合：
```bash
amixer -c APE cset name="ADMAIF2 Mux" "I2S2" # Microphone
```

次のコマンドを参照してスピーカーを駆動します。このとき、`-c` は使用しているスピーカーチャンネル数に変更してください：

```bash
speaker-test -t sine -f 440 -c 2
```

スピーカーが正常に駆動されると、次の図のようにターミナルに出力が表示されます。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-speaker.png"/>
</div>

## RTC


Mini J501 は **RTC**（3V）用に標準的な 2 ピンヘッダを備えています。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc0.png"/>
</div>

**RTC** のデータシート上の回路図は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc1.png"/>
</div>

**J15** のピン定義は次のとおりです：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc2.png"/>
</div>



外部バッテリーを接続した後、ターミナルで `rtc0`（メイン RTC、オンボードバッテリーに対応）の動作状態を確認できます：

```bash
cat /sys/class/rtc/rtc0/power/runtime_status
```


## 拡張ポート - GMSL

Mini J501 キャリアボードには、GMSL 拡張ボード用のカメラ拡張ヘッダが搭載されています。これにより、4 台の GMSL カメラを同時に接続して動作させることができます。

### ハードウェア接続

以下は、Mini J501 キャリアボードの GMSL カメラ拡張ボード接続スロットです（事前に拡張ボードを用意しておく必要があります）：

<div align="center">
  <img width="450" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-real1.png"/>
  <img width="450" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-real2.png"/>
</div>

以下は、すでにサポートしている GMSL カメラモデルです：

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A

### 使用手順

:::note
GMSL 機能を有効にする前に、GMSL 拡張ボードドライバを含む JetPack バージョンをインストールしていることを確認してください。
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
オーバーレイファイルは全部で 3 つあり、それぞれ Seeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4、および Orbbec Gemini 335Lg です。これらはそれぞれ、SG3S の 3G カメラ、SG2 および SG8S の 6G カメラ、そして Orbbec のカメラに対応します。図 3 に示すように、お使いのカメラのモデルに応じて io ファイルを設定してください。
:::

**step 2.** ビデオインターフェース設定ツールをインストールします。

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

データストリームを開くと、カメラからの映像を表示できます。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div> -->

### SGxxx シリーズのカメラを使用する

**step 1.** シリアライザとデシリアライザのチャネルフォーマットを設定します。図中のインターフェース番号は、シリアライザ／デシリアライザ番号に対応しています。

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
`ser_0_ch_0` はデコーダの最初のチャネル、`des_ch_0` は最初のカメラ上のシリアライザを表し、他についても同様です。接続されているカメラの解像度が異なる場合は、ここでの設定はカメラの実際のフォーマットに基づきます。
デバイスを再起動するたびに、シリアライザとデシリアライザのチャネルフォーマットを設定する必要があります。
:::

**step 2.** カメラの解像度を設定します。

:::info
ここでは、異なるモデルおよび解像度のカメラを設定する方法を示します。
:::

```bash
v4l2-ctl -V --set-fmt-video=width=1920,height=1080 -c sensor_mode=1  -d /dev/video0
v4l2-ctl -V --set-fmt-video=width=1920,height=1080 -c sensor_mode=1  -d /dev/video1
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0  -d /dev/video2
v4l2-ctl -V --set-fmt-video=width=3840,height=2160 -c sensor_mode=2  -d /dev/video3 
```

:::note
`--set-fmt-video` の後には、接続されているカメラに基づいて選択された解像度が続きます。sensor_mode もそれに応じて選択されます。現在、3 つの sensor_mode オプションがあり、それぞれ異なる解像度に対応しています。

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**step 3.** カメラを起動します。

```bash
gst-launch-1.0 v4l2src device=/dev/video0 ! \
'video/x-raw,width=1920,height=1080,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video1 ! \
'video/x-raw,width=1920,height=1080,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video2 ! \
'video/x-raw,width=1920,height=1536,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video3 ! \
'video/x-raw,width=3840,height=2160,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/camera1.png"/>
</div>

## ディスプレイ

Mini J501 には、高解像度ディスプレイ出力用の HDMI が搭載されています。

## リソース

- [reComputer Mini J501 キャリアボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_J501_datasheet.pdf)

<!-- - [reComputer Mini J501 Carrier Board Datasheet]() -->

- [Seeed の L4T のソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
