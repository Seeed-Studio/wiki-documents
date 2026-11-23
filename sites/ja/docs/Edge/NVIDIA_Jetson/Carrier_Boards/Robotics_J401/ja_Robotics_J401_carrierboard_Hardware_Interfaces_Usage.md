---
description: "reComputer Robotics J401 キャリアボードのインターフェース: M.2 Key M/B/E、CAN、GMSL2、USB、Ethernet、40ピン。ピン配置、コマンドおよび JetPack 7.2 に関する注意。"
title: reComputer Robotics J401 インターフェース
sidebar_label: インターフェースの使用
tags:
  - J401-Robotics キャリアボード
  - Jetson
  - ロボティクス
  - インターフェースの使用
  - インターフェース
  - ハードウェア
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer_robotics1.webp
slug: /recomputer_jetson_robotics_j401_getting_started
sku: 100071398, 100001302, 100010971
last_update:
  date: 10/19/2026
  author: Zibo
createdAt: '2025-04-29'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/recomputer_jetson_robotics_j401_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# reComputer Robotics J401 インターフェース

reComputer Robotics J401 は、高度なロボティクス向けに設計された、コンパクトで高性能なエッジ AI キャリアボードです。NVIDIA Jetson Orin Nano/Orin NX モジュールの Super/MAXN モードに対応し、最大 157 TOPS の AI 性能を発揮します。デュアル Gigabit Ethernet ポート、5G および Wi-Fi/BT モジュール用 M.2 スロット、6 つの USB 3.2 ポート、CAN、GMSL2（オプション拡張経由）、I2C、UART などの豊富な接続オプションを備え、各種センサーからの複雑なデータを処理できる強力なロボットブレインとして機能します。JetPack 6 と Linux BSP をプリインストールしており、シームレスな導入が可能です。​

NVIDIA Isaac ROS、Hugging Face、PyTorch、ROS 2/1 などのフレームワークをサポートする reComputer Robotics J401 は、大規模言語モデルによる意思決定と、モーションプランニングやセンサーフュージョンといった物理ロボット制御との橋渡しを行います。自律ロボットの迅速な開発に最適で、すぐに使えるインターフェースと最適化された AI フレームワークにより、製品化までの時間を短縮します。

<div align="center">
  <img alt="USB、Ethernet、電源コネクタが見える、reComputer Robotics J401 キャリアボードの斜め前方からのビュー" width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics-carrier-board.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>

## reComputer Jetson Robotics J401 キャリアボード概要

| **上面図** |
|:---------:|
| ![J401 キャリアボード上面図。1〜7 の番号付きコールアウト：Orin モジュール、電源ボード、2 つのファンコネクタ、ピンホールボタン、LED、SIM スロット](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/top.png) |
| **前面図** |
| ![ポートレイアウトが見える reComputer Robotics J401 キャリアボード前面図](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/fornt.png) |
| **底面図** |
| ![J401 キャリアボード底面図。17〜22 の番号付きコールアウト：RTC バッテリーとヘッダー、M.2 Key B、Key E、Key M スロットおよびカメラ拡張ヘッダー](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/bottom.png) |

## 同梱物一覧

- reComputer Robotics J401 キャリアボード x 1
- 電源および JST 拡張ボード x 1
- XT30 から DC ケーブル x 1
- USB ケーブル（Type A - Type C）x 1
- 拡張ボード用ヒートシンク x 1
- スタッド（M3*30）x 5
- M3 六角ナット x 5
- Jetson モジュールおよび M.2 Key M 用ネジ（CM2.5*L.4）x3
- M.2 Key E 用ネジ（CM2*3.0）x1
- M.2 Key B 用スタッド（M2*2.0）x1
- M.2 Key B 用ネジ（CM3*4.0）x1
- ユーザーマニュアル x 1

:::note
1.高電圧電源および高温環境で使用する場合は、Thermal Design Guide に従って堅牢な放熱ソリューションを設計してください。
2.より良い性能のために、モジュールにヒートシンクを取り付けてください。
3.高電圧入力かつ高負荷で動作中は、やけど防止のためヒートシンクに触れないでください。
4.検証用の電源アダプタについては、Seeed 公式サイトで推奨されている電源アダプタを使用してください。

- 19V/4.74A 5525 バレルジャック電源アダプタ
- 最大消費電力要件を満たしていることを確認してください。
2.AC 電源コードの互換性
- ご利用地域に応じて、地域仕様の AC クローバーリーフ電源コードを購入してください。
3.アクセサリの互換性
- 最適な性能と互換性のため、公式に推奨されているアクセサリ（ワイヤレスモジュール、カメラ、周辺機器など）のみを使用してください。

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
      <td>1x M.2 KEY M PCIe（M.2 NVMe 2280 SSD 128G 付属）</td>
    </tr>
    <tr>
      <th rowSpan="3">ネットワーキング</th>
      <td>M.2 KEY E</td>
      <td>WiFi/Bluetooth モジュール用 M.2 Key E ×1</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>5G モジュール用 M.2 Key B ×1</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>RJ45 Gigabit Ethernet ×2</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>USB 3.2 Type-A ×6（5Gbps）；<br />USB 3.0 Type-C ×1（Host/DP 1.4）；<br />USB 2.0 Type-C ×1（Device Mode/Debug）</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>4 in 1 GMSL2（mini fakra）×1（オプションボード）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>CAN0（XT30(2+2)）×2；<br />CAN1（4 ピン GH 1.25 ヘッダー）×3</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>DP1.4 ×1（Type C Host）</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>UART 4 ピン GH 1.25 ヘッダー ×1</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>I2C 4 ピン GH 1.25 ヘッダー ×2</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>4 ピンファンコネクタ（5V PWM）×1；<br />4 ピンファンコネクタ（12V PWM）×1</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td>カメラ拡張ヘッダー ×1（GMSL2 ボード用）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>RTC 2 ピン ×1；<br />RTC ソケット ×1</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>LED ×3（PWR、ACT、ユーザー LED）</td>
    </tr>
    <tr>
      <td>ピンホールボタン</td>
      <td>PWR ×1；<br />RESET ×1</td>
    </tr>
    <tr>
      <td>DIP スイッチ</td>
      <td>REC ×1</td>
    </tr>
    <tr>
      <td>アンテナホール</td>
      <td>アンテナホール ×5</td>
    </tr>
    <tr>
      <th rowSpan="1">電源</th>
      <td colSpan="2">19〜54V XT30(2+2)（XT30 から 5525 DC ジャックケーブル付属）</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack バージョン</th>
      <td colSpan="2">JetPack 6 プリインストール済み；JetPack 7.2 対応</td>
    </tr>
    <tr>
      <th rowSpan="3">機構</th>
      <td>寸法（W x D x H）</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>200g</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td>デスク設置、壁掛け</td>
    </tr>
    <tr>
      <th rowSpan="1">動作温度</th>
      <td colSpan="2">-20℃〜60℃（25W モード）；<br />-20℃〜55℃（40W モード）；<br />-20℃〜50℃（MAXN モード）；<br />(reComputer Robotics ファン付きヒートシンク使用時)</td>
    </tr>
    <tr>
      <th rowSpan="1">保証</th>
      <td>2 年</td>
    </tr>
    <tr>
      <th rowSpan="1">認証</th>
      <td>RoHS、REACH、CE、FCC、UKCA、KC</td>
    </tr>
  </tbody>
</table>

## JetPack OS のフラッシュ

### 対応モジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### 事前準備

- Ubuntu ホスト PC
- Robotics J401 キャリアボード
- NVIDIA® Jetson Orin™ Nano/NX モジュール
- Nano/NX モジュール用アクティブファン
- NVMe M.2 2280 内蔵 SSD
- USB Type-C データ転送ケーブル

:::info

仮想マシンではなく、物理的な Ubuntu ホストデバイスを使用することを推奨します。
ホストマシンの準備については、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="4"> Ubuntu Version (Host Computer) </td>
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
      <th>Jetpack Version</th>
      <th>Jetson Module</th>
      <th> GMSL </th>
      <th>Download Link1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBwi3AQXJiaTZiPQaKocDSkAciLsok9znKGnAPczuZ_IfY?e=S2v5QV">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>c63d1219531245abecc7bbdcafc73d34<br />f75547454c7af85de40f08396a87e5ee</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB8NF028_DESZJ9WwSg2Q34AVCNXeZFkwJi8pbvCOcX4cI?e=Zahpfm">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>5d1f3cd28eb44ca60132c87ccce5acaf<br />806ee945b486df9061a34de73fbb582b</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAakIBc6l2wS7qKAy-1ZeHPAbTtT8XLYaIgITvBGy8vezo?e=mPygXS">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>e7f0c8e6b578d411f81122879f92c766<br />6adfada5ed493a4cc458dc169ca8c1b7</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBnWlTaU6nIQLDOcM2KRQM6AQ6A-ODC8DnWFKRSfW8vRmc?e=1AAVH8">ダウンロード</a></td>
      <td style={{overflowWrap: 'anywhere'}}>b08cbdad8ab6e50222146d3175a9d262<br />7d499bf1d67cfaf69cc737b5bfa9e33a</td>
    </tr>
    <tr>
      <td rowSpan={4}>7.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCXU7mPG_OyR7z-VhF3E5j8AcmgsCPAZAuXSdKduZUKtHQ">ダウンロード</a></td>
      <td>6c499899d6c00a1661a48974d4dfc734<br />e9cbfefc06fc9c5c02ac7040dd1f2eb8</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBxz11HG6naSak2wIytiRbXAaqxhsgIWFaVR9H9GfGWqus">ダウンロード</a></td>
      <td>23b68b43e630d166e5079f72509c71ea<br />0e13f76e372ddd06fe22df5494ad3f41</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBw84cKdsnuRYQLA1pkfg3mAY1x0HW0UMppZbnaDBaV6XI">ダウンロード</a></td>
      <td>2712fe373afb3dff8202cdd9288b266f<br />080b76837eb13161918efd80111d9035</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQA9PyE77GhDQLTpgDmAZ8kzAdqGsOC33XuaA6i60KX2k6s">ダウンロード</a></td>
      <td>6d9086d692a0f40fad02c75df1ff56ae<br />d9b368320bb2bfe3a777692513529697</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
JetPack イメージファイルはサイズが大きく、ダウンロードに約 60 分かかる場合があります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの完全性を検証するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、`sha256sum <File>` コマンドを実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全で破損していないことが確認できます。
:::

### 強制リカバリーモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリーモードになっていることを確認する必要があります。
:::

<details>

<summary> 手順ごとの説明 </summary>

**Step 1.** スイッチを RESET モードに切り替えます。

<div align="center">
  <img alt="スイッチが RESET モードに設定され、USB Type-C フラッシュポートがマークされた J401 キャリアボード" width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**Step 2.** 電源ケーブルを接続してキャリアボードの電源を入れます。

**Step 3.** USB Type-C データ転送ケーブルでボードを Ubuntu ホスト PC に接続します。

**Step 4.** Linux ホスト PC でターミナルウィンドウを開き、`lsusb` コマンドを入力します。使用している Jetson SoM に応じて、返された内容に次のいずれかの出力が含まれていれば、ボードは強制リカバリーモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

以下の画像は Orin Nano 8GB の例です

<div align="center">
  <img alt="lsusb の出力で NVIDIA Corp. APX デバイスがハイライトされており、ボードがリカバリーモードであることを確認" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Jetson へのフラッシュ

**Step 1:** ダウンロードしたイメージファイルを解凍します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-gmsl-6.2-36.4.3-2026-02-06.tar.gz
```

**Step 2:** 次のコマンドを実行して、JetPack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます

<div align="center"><img alt="フラッシュスクリプトのターミナルログ。最後にフラッシュ完了のメッセージが表示されている" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には 2〜10 分かかる場合があります。
:::

**Step 3:** Robotics J401 をディスプレイに接続します。PD から HDMI へのアダプタを使用して HDMI 入力対応ディスプレイに接続するか、PD ケーブルを使用して PD 入力対応ディスプレイに直接接続し、初期設定を完了します。

<div align="center">
  <img alt="HDMI 接続されたディスプレイに表示された JetPack 6 の初回起動設定ウィザード" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
ニーズに応じて **System Configuration** を完了してください。
:::

## インターフェースの使用方法

以下では、Robotics J401 ボードの各種インターフェースとその使用方法について紹介します。

## M.2 Key M

M.2 Key M は高速 NVMe SSD 用に設計されており、ロボティクスアプリケーション向けに超高速データ転送を提供します。

### 対応 SSD は次のとおりです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### ハードウェア接続

<div align="center">
  <img alt="キャリアボードの M.2 Key M スロットにヒートシンク付き NVMe SSD が取り付けられている様子" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ssd_c.jpg"/>
</div>

### 使用手順

Jetson デバイスでターミナルを開き、次のコマンドを入力して SSD の読み書き速度をテストします。

```bash
#You need to create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img alt="NVMe SSD のスループットを測定する dd 書き込みテストのターミナル出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
テスト完了後は、`sudo rm /home/seeed/ssd/test` コマンドを実行してキャッシュファイルを削除してください。
:::

## M.2 Key B

M.2 Key B スロットは 5G モジュール拡張用で、ロボティクスやエッジ AI シナリオ向けに高速セルラー接続を可能にします。

### ハードウェア接続

<div align="center">
  <img alt="J401 キャリアボードの M.2 Key B スロットに取り付けられた 5G モジュール" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/5g_c.jpg"/>
</div>

### 使用手順

**Step 1.** ハードウェア認識の確認

```bash
lsusb 
```

このコマンドは、システムに接続されているすべての USB デバイスの一覧を、メーカー（ID）、種類、その他の情報とともに表示します。たとえば、出力に Quectel Wireless Solutions Co., Ltd. EM12-G というデバイスが表示されていれば、5G モジュールが存在していることを示します。

<div align="center">
  <img alt="USB バス上で認識された Quectel 5G モジュールを示す lsusb の出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb.png"/>
</div>

**Step 2.** ドライバー読み込みの確認
5G モジュールに必要な option ドライバーが読み込まれていることを確認することが重要です。これを確認するために lsmod コマンドを使用します。

```bash
lsmod | grep option 
```

option ドライバーが正常に読み込まれていれば、出力にドライバーに関する関連情報が表示されます。

<div align="center">
  <img alt="5G モジュール用の option ドライバーが読み込まれていることを示す lsmod の出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsmod.png"/>
</div>

**Step 3.** ModemManager の設定
ModemManager はモデムデバイスを管理するツールであり、インストールして再起動する必要があります。

```bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

apt install コマンドは ModemManager パッケージのインストールに使用され、systemctl restart は ModemManager サービスを再起動して新しい設定を有効にします。

**Step 4.** モジュール認識の確認
ModemManager が 5G モジュールを正しく認識できているかを確認するために、mmcli -L コマンドを使用します。

```bash
mmcli -L 
```

5G モジュールが認識されている場合、/org/freedesktop/ModemManager1/Modem/0 のような出力が表示され、検出されたモデムデバイスへのパスを示します。
<div align="center">
  <img alt="mmcli -m 0 の出力で、ModemManager に登録された Quectel EM12 モデムが表示されている" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_l.jpg"/>
</div>

**Step 5.** APN の設定
APN（Access Point Name）は、モバイルデバイスをネットワークに接続するために重要です。nmcli コマンドを使用してベアラープロファイルを作成します。ここでは China Mobile を例に、次のコマンドで設定ファイルを作成します。

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

このコマンドは、新しい GSM（Global System for Mobile Communications）タイプの接続を追加し、APN を "CMNET" に指定し、IPv4 自動設定を使用します。
<div align="center">
  <img alt="APN CMNET を指定して GSM 接続を追加する nmcli コマンド" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_con.jpg"/>
</div>

**Step 6.** 接続の有効化
ベアラープロファイルを作成したら、接続を有効化する必要があります。

```bash
sudo nmcli con up "gsm" 
```

このコマンドは GSM 接続を有効化し、成功すると確認メッセージが表示されます。

**Step 7.** モジュール識別を再確認する
APN を設定した後もモジュールが認識されたままであることを確認するために、再度 mmcli -L コマンドを実行します。

```bash
mmcli -L 
```

**Step 8.** モジュールステータスを確認する
最後に、mmcli -m 0 コマンドを使用して、IP 割り当て、キャリア、ネットワーク接続状態など、モジュールに関する詳細情報を表示できます。

```bash
mmcli -m 0 
```

このコマンドは、メーカー、モデル、対応および現在使用中のネットワーク技術、デバイスステータス、接続中のネットワークオペレーターなど、5G モジュールに関する包括的な詳細を提供します。
<div align="center">
  <img alt="Quectel EM12 の mmcli -m 0 詳細表示：IMEI、ファームウェア、対応モードおよび CHINA MOBILE オペレーター" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_m.jpg"/>
</div>

## M.2 Key E

M.2 Key E インターフェースは標準的な M.2 コネクタで、主に Wi-Fi や Bluetooth などの無線モジュールを接続し、無線通信機能を拡張するために使用されます。

### ハードウェア接続

<div align="center">
  <img alt="J401 キャリアボードの M.2 Key E スロットに装着された Wi-Fi モジュール" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/m2_e.jpg"/>
</div>

### 使用手順

Wi-Fi パフォーマンスをテストするには、次のコマンドを使用します（IP アドレスはテストサーバーのものに置き換えてください）:

```bash
iperf3 -c 192.168.6.191
```

<div align="center">
  <img alt="M.2 Key E Wi-Fi リンク経由の iperf3 スループット結果" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/wifi_speed.png"/>
</div>

Bluetooth 機能は M.2 Key E スロット経由で利用できます。

<div align="center">
  <img alt="M.2 Key E モジュール経由で検出されたペアリング済みデバイスを表示する Bluetooth 設定画面" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/bluetooth.png"/>
</div>

## Ethernet

Robotics J401 キャリアボードには、高速な有線ネットワーク接続のために 1Gbps RJ45 Ethernet ポートが 2 つ搭載されています。

<div align="center">
  <img alt="J401 キャリアボード上の 2 つの 1 Gbps RJ45 Ethernet ポート" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/eth.jpg"/>
</div>

Ethernet ポートの速度をテストするには、次のように `iperf3` を使用します：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` は iperf3 サーバーの IP アドレスです。クライアントはこのサーバーに接続して帯域幅テストを実行します。
`<bind_ip>` は、テストトラフィックの送信元として使用するローカル IP アドレスをバインドします。
:::

<div align="center">
  <img alt="ホストと Jetson 間の 1 Gbps Ethernet スループットを測定する iperf3 の出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ethnet_speed.png"/>
</div>

## LED

reComputer Jetson Robotics J401 には、電源、システムアクティビティ、およびユーザー定義機能の状態を明確に示す 3 つの LED インジケーター（PWR、ACT、User LED）が搭載されています。

<div align="center">
  <img alt="J401 キャリアボード上の PWR、ACT、および User LED インジケーター" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div>

### 使用手順

User LED は RGB LED で、さまざまなステータスを示すために異なる色を表示できます。動作はユーザーによって定義する必要があります。

以下は RGB LED を制御するためのテストスクリプトです：

```bash
touch rgb_test
chmod +x rgb_test
vi rgb_test
```

次の内容を貼り付けます：

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
  <img alt="RGB LED テスト中の J401 ボード。USER インジケーターが点灯している様子" width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/rgb_led.gif"/>
</div>

## USB

Robotics J401 キャリアボードには、6 つの USB 3.2 Type-A ポート（5Gbps）、DP 1.4 対応の USB 3.0 Type-C ポート（ホストモード）1 つ、およびデバイスモード/デバッグ用の USB 2.0 Type-C ポート 1 つなど、さまざまな USB ポートが搭載されており、柔軟な接続オプションを提供します。

### USB 速度テスト

USB デバイスの速度をテストするスクリプトを作成します：

```bash
sudo vim test_usb
```

次の内容を貼り付けます：

```bash
#!/bin/bash
sudo dd if=/dev/zero of=/dev/$1 bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=/dev/$1 of=/dev/null bs=1000M count=2
```

スクリプトに実行権限を付与します：

```bash
sudo chmod +x test_usb
```

USB デバイス名を引数として指定し、スクリプトを実行します。

### USB 2.0 Type-C ポート

このシリアルポートを USB Type-C データケーブル経由で使用することで、PC 側で入出力のデバッグ情報をモニタリングできます。

**Step1.** スイッチをデバッグモードに切り替えます。

<div align="center">
  <img alt="J401 キャリアボード上のデバッグ/フラッシュモードスイッチがデバッグモードに設定されている様子" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug.jpg"/>
</div>

**Step2.** USB データケーブルで PC と接続し、PC に [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) をダウンロードします。

<div align="center">
  <img alt="Silicon Labs CP210x VCP ドライバーのダウンロードページ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Step3.** USB データケーブルで PC と接続し、ダウンロードしたファイルを解凍して PC にドライバーをインストールします。

<div align="center">
  <img alt="解凍したドライバーフォルダ内で選択された CP210xVCPInstaller_x64.exe" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Step4.** Windows PC でデバイスマネージャーを開き、reComputer Super に割り当てられた COM ポート番号を確認します。"Ports (COM & LPT)" の下に "Silicon Labs CP210x USB to UART Bridge (COMX)" として表示され、X が COM ポート番号になります。

<div align="center">
  <img alt="Ports の下に CP210x の COM ポートが表示されている Windows デバイスマネージャー" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
</div>

**Step5.** シリアルポートツールを開きます（ここでは例として MobaXterm ツールを使用）、新しいセッションを作成します。

<div align="center">
  <img alt="セッションリストと最近使用した COM3 シリアルセッションが表示された MobaXterm のメインウィンドウ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Step6.** Serial ツールを選択します。

<div align="center">
  <img alt="Serial オプションが選択された MobaXterm のセッション設定ページ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Step7.** 対応するシリアルポートを選択し、ボーレートを 115200 に設定して "OK" をクリックします。

<div align="center">
  <img alt="COM ポートと 115200 のボーレートが選択された MobaXterm のシリアル設定画面" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**Step8.** ユーザー名とパスワードを使用して reComputer Super にログインします。

<div align="center">
  <img alt="USB Type-C デバッグポート経由で reComputer にログインしたシリアルコンソール" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

### USB カメラ

USB 3.2 Type-A ポート経由で USB カメラを使用するには、`guvcview` をインストールして実行します：

```bash
sudo apt-get install guvcview
guvcview -d /dev/video0
```

<div align="center">
  <img alt="/dev/video0 の USB カメラからライブ映像をストリーミングしている guvcview ウィンドウ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/usb_camera.png"/>
</div>

## Fan

reComputer Jetson Robotics J401 には、異なる電圧および冷却ニーズに対応する 2 種類のファンコネクタが搭載されています：

- 1x 4 ピンファンコネクタ（5V PWM）：低電圧・低消費電力の静音ファン向けに設計されており、PWM による回転数制御をサポートします。これにより、システム温度に応じたインテリジェントなファン速度調整が可能となり、省エネと騒音低減に貢献します。

- 1x 4 ピンファンコネクタ（12V PWM）：標準的な 12V PWM ファンに対応しており、精密な回転数制御もサポートするため、高性能な冷却が必要な用途に最適です。

### ハードウェア接続

<div align="center">
  <img alt="5V PWM と 12V PWM コネクタがラベル表示された J401 キャリアボードのファンヘッダー" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/fan.png"/>
</div>

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)を参照してください。
:::

**ファン速度を設定するスクリプトを作成します：**

```bash
cat test_fanSpeedSet
```

次の内容を貼り付けます：

```bash
#!/bin/bash
sudo systemctl stop nvfancontrol
sleep 2
echo "000000" | sudo -S chmod 777 /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
echo $1 > /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
```

> 注：Jetson Nano 4G の場合、ファンパスは `/sys/devices/platform/pwm-fan/hwmon/hwmon0/pwm1` です。

さらに、jtop ツールを使用してファン速度を手動で設定することもできます。

## ピンホールボタン

Robotics J401 キャリアボードには、ユーザー操作用として Power（PWR）ボタンと Reset（RESET）ボタンを備えたピンホールボタンが搭載されています。これらのボタンは、それぞれデバイスの電源オン/オフおよびシステム再起動を行うために不可欠です。

<div align="center">
  <img alt="J401 キャリアボード上の PWR および RESET ピンホールボタン" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pinhole_button.jpg"/>
</div>

## CAN

CAN（Controller Area Network）は、ホストコンピュータを必要とせずにマイコンやデバイス同士が通信できる、堅牢な車載バス規格です。
Robotics J401 は、電源およびデータ伝送を容易にするために XT30（2+2）電源コネクタに統合された 1 つの CAN0 インターフェースを提供します。さらに、柔軟な CAN バス接続のために、2 つの標準 JST 4 ピンヘッダーを介して 3 つの CAN1 インターフェースも提供します。

### CAN 通信

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)では、以下に示すように CAN0/CAN1 インターフェースの配線図を確認できます。

<div align="center">
  <img alt="データシートに記載されている CAN1 GH-1.25 ヘッダーピン表: Ground、CAN1_L、CAN1_H、VDD_5V_CAN" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div>

ここでは、[USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) を使用して CAN1 を動作させます。PC から 1 フレーム送信し、Jetson から 1 フレーム返信します。

### ハードウェア接続

<div align="center">
  <img alt="J401 キャリアボードコネクタ上の CAN1 の CANL、CANH、GND ピン" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c.png"/>
</div>

下図に示す接続方法に従って、CAN1 の CANL、CANH、GND を USB to CAN ツール側の対応する CANL、CANH、GND ポートにそれぞれ接続します。

<div align="center">
  <img alt="CAN1 を CANL、CANH、GND を用いて USB-to-CAN アナライザに配線した様子" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c1.png"/>
</div>

本手順では、使用するアダプタに応じて、[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program) から入手できるソフトウェアをダウンロードしてインストールしています。

**ステップ 1.** CAN1 インターフェースを設定します：

```bash
#Set the bit rate
sudo ip link set can1 type can bitrate 500000
#Enable CAN1
sudo ip link set can1 up
```

**ステップ 2.** PC 側のデータ受信ソフトウェアを設定します。
次の図のように通信設定を行ってください。
<div align="center">
  <img alt="バスおよびタイミング設定が行われた USB-to-CAN アナライザソフトウェア" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_software.png"/>
</div>


**ステップ 3.** GPIO を設定します。

Robotics J401 の CAN トランシーバにはアイドルモードがあるため、GPIO を介してウェイクアップする必要があります。Jetson のターミナルで次のコマンドを実行してください：

```bash
# Install the toolkit (skip if already installed)
sudo apt-get update && sudo apt-get install -y libgpiod-utils

# Activate the CAN0 and CAN1 transceivers (pull the STB pin low)
# It is necessary to use the '&' symbol to make it run in the background.
# Otherwise, the pin state will be reset after the command exits.
sudo gpioset --mode=wait 2 3=0 &
sudo gpioset --mode=wait 2 4=0 &
```

:::note
ここで、2 3 = 0 は CAN0 に対応し、2 4 = 0 は CAN1 に対応します。どちらか一方のポートのみを使用する場合は、対応するコマンドだけを実行してください。
:::

**ステップ 4.** Jetson から PC へデータを送信します：

```bash
cansend can1 123#abcdabcd
```

<div align="center">
  <img alt="CAN1 上で Jetson から送信されたフレームを受信している USBCAN ツール" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pc_rcan1.png"/>
</div>

**ステップ 5.** PC から Jetson へデータを送信します：

```bash
#CAN1 monitors PC data
candump can1
```

<div align="center">
  <img alt="CAN1 テスト配線用として再掲された、データシートの CAN1 GH-1.25 ヘッダーピン表" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1.png"/>
</div>

Jetson のターミナルが、PC から送信されたデータを受信していることが確認できます。

<div align="center">
  <img alt="PC から can1 経由で受信した CAN フレームを表示している Jetson ターミナル" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_r.png"/>
</div>

### CAN FD モード

ここでは、CAN0 を CAN1 に接続し、複数の Jetson デバイスが CAN インターフェースを介してどのように通信できるかをデモします。

### ハードウェア接続

<div align="center">
  <img alt="CAN FD ループバックテストのために CAN0 を CAN1 に配線した様子" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can0_can1_c.jpg"/>
</div>

**ステップ 1.** 底面カバーを取り外し、両方の 120Ω 終端抵抗スイッチを ON 位置に設定します。

<div align="center">
  <img alt="底面カバー内部で ON に設定された 120 オーム終端抵抗スイッチ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/on.jpg"/>
</div>

**ステップ 2.** CAN0 および CAN1 インターフェースを設定します：

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

sudo gpioset --mode=wait 2 3=0 &
sudo gpioset --mode=wait 2 4=0 &

```

**ステップ 3.** 新しいターミナルを開き、CAN1 をリッスンしつつ、CAN0 経由で CAN1 にデータを送信します：

```bash
#open a new terminal and run
candump can1

#another terminal sends data
cansend can0 123##011112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF
```

:::info

- `123` は ID です
- `##` は CAN FD フレームを示します
- 以下は 64 バイトのデータです（合計 128 文字の 16 進数）

:::

<div align="center">
  <img alt="終端を有効にした状態で can0 と can1 間でやり取りされる CAN FD フレーム" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_fd.png"/>
</div>

## UART

Robotics J401 は、UART シリアル通信のための標準 4 ピン JST ヘッダーを提供します。

### ハードウェア接続

UART 通信を行うには、以下の配線に従ってください。ここでは例として USB to TTL ツールを使用します。

<div align="center">
  <img alt="J401 キャリアボード上で UART ピンを USB-to-TTL アダプタに配線した様子" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_c.jpg"/>
</div>

### 使用手順

**ステップ 1.** Jetson デバイス上でターミナルを開き、次のコマンドを実行して UART インターフェースを有効にします：

```bash
gpioset --mode=time --sec=100 2 5=0
```

**ステップ 2.** USB to TTL ツールを Robotics J401 の UART ポートおよび PC に接続します。

**ステップ 3.** PC 側でシリアルポートツール（ここでは例として xcom ツールを使用）を開き、ボーレートを 115200 に設定します。

**ステップ 4.** シリアル通信のための簡単な Python スクリプトを作成します：

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

**ステップ 5.** Jetson デバイス上で Python スクリプトを実行します：

```bash
python3 uart_test.py
```

**ステップ 6.** これで PC 側に出力が表示され、PC から Jetson デバイスへデータを送信することもできます：

<div align="center">
  <img alt="Jetson UART から受信したデータを表示している PC 上のシリアルターミナル" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_s.jpg"/>
</div>

<div align="center">
  <img alt="PC から UART 経由で受信したデータを表示している Jetson ターミナル" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_r.png"/>
</div>

## I2C

Robotics J401 は、標準 JST 4 ピンヘッダーを介して 2 つの I2C インターフェース（IIC0 および IIC1）を提供します。
これにより、センサーや周辺機器を容易に接続してシステム拡張を行うことができます。

### ハードウェア接続

Robotics J401 には、IIC0 と IIC1 の 2 つの 4 ピン GH-1.25 IIC インターフェースがあります。
<div align="center">
  <img alt="J401 キャリアボード上の IIC0 および IIC1 4 ピン GH-1.25 コネクタ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic.jpg"/>
</div>

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)では、以下に示すように IIC0/IIC1 4 ピン GH-1.25 インターフェースの配線図を確認できます。
<div align="center">
  <img alt="データシートに記載されている I2C GH-1.25 ヘッダーピン表: Ground、I2C1_SDA、I2C1_SCL、VDD_I2C1" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/12c.png"/>
</div>
テスト用に任意の IIC インターフェースデバイスを選択してください。ここでは [Arduino-Uno-Rev4-Minima](https://www.seeedstudio.com/Arduino-Uno-Rev4-Minima-p-5716.html) を使用して I2C0/I2C1 をテストします。

ここでのテスト手順は、IIC0/IIC1 に外部接続されたデバイスのアドレスをスキャンすることです。
:::info
デバイス（IIC0/IIC1 ↔ Device）は、次の接続に従って接続してください：

- Power → Power

- SDA → SDA

- SCL → SCL

- Ground → Ground

:::

<div align="center">
  <img alt="テスト用に IIC0 コネクタへ配線された Arduino Uno R4 Minima" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_connect.jpg"/>
</div>

### 使用手順

**ステップ 1.** [Arduino IDE](https://www.arduino.cc/en/software/) をダウンロードしてコードを書き込みます。

**ステップ 2.** 開発ボードの種類を選択します。

<div align="center">
  <img alt="Uno R4 Minima 用の Arduino IDE ボード選択画面" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/slect_board.png"/>
</div>

**ステップ 3.** IDE を再起動し、コードをアップロードします。

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

**ステップ 4.** Jetson に IIC テスト用ツールをインストールします。

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**ステップ 5.** ターミナルで次のコマンドを実行し、IIC バス上でマッピングされた名前を確認します：

```bash
i2cdetect -l
```

<div align="center">
  <img alt="Jetson モジュール上の I2C バスを一覧表示する i2cdetect -l の出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_l.png"/>
</div>

**Step 6.** IIC0 をスキャンするために、次のコマンドを実行します：

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img alt="IIC0 上の接続デバイスがアドレス 0x08 に表示されている i2cdetect スキャン" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_detect.png"/>
</div>

IIC0 に接続されているデバイスがアドレス 0x08 に設定されていることが分かります。

## 拡張ポート

Robotics j401 キャリアボードには、GMSL 拡張ボード用のカメラ拡張ヘッダが搭載されています。これにより、4 台の GMSL カメラを同時に接続して動作させることができます。

### ハードウェア接続

以下は Robotics j401 キャリアボードの GMSL カメラ拡張ボード接続スロットです（事前に拡張ボードを用意する必要があります）：

<div align="center">
  <img alt="J401 キャリアボード上の GMSL カメラ拡張ボードスロット" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/exb.png"/>
</div>

以下は、すでにサポートしている GMSL カメラモデルです：

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### 使用手順

:::note
GMSL 機能を有効にする前に、GMSL 拡張ボードドライバを含む JetPack バージョンをインストールしていることを確認してください。
:::

### Jetson IO ファイルを設定する

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img alt="40 ピンヘッダの設定オプションを一覧表示する jetson-io.py メインメニュー" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p1.png"/>
</div>

<div align="center">
  <img alt="Seeed OSS 194 と Orbbec Gemini 335Lg のオーバーレイが選択された Jetson Expansion Header Tool のカメラメニュー" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p2.png"/>
</div>

:::note
オーバーレイファイルは全部で 3 つあり、Seeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4、および Orbbec Gemini 335Lg です。これらはそれぞれ、SG3S の 3G カメラ、SG2 と SG8S の 6G カメラ、そして Orbbec のカメラに対応しています。図 3 に示すように、お使いのカメラのモデルに応じて io ファイルを設定してください。
:::

**step 2.** ビデオインターフェース設定ツールをインストールします。

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

初回起動時には、ファームウェアを更新する必要がある場合があります。
<div align="center">
  <img alt="Gemini 335Lg カメラ用のファームウェア更新を促す Orbbec viewer" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

データストリームを開くと、カメラからの映像を表示できます。
<div align="center">
  <img alt="Orbbec viewer に表示された Gemini 335Lg カメラの Depth ストリーム" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div>

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
  <img alt="Qt viewer で 4 つの GMSL カメラストリーム（/dev/video2 〜 /dev/video5）が並べて表示されている様子" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/camera1.png"/>
</div>

## ディスプレイ

reComputer Jetson Robotics J401 には、高解像度ディスプレイ出力用に DP1.4（Type-C Host に含まれます）が搭載されています。

## リソース

- [reComputer Robotics J401 キャリアボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [reComputer Robotics J401 キャリアボードデータシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [reComputer Robotics 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [Mechanical Document-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Seeed NVIDIA Jetson 製品カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Nvidia Jetson 比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Nvidia Jetson 導入事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson ワンページ資料](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## FAQ

**GMSL2 カメラ拡張は、標準の JetPack イメージで動作しますか？**
いいえ。拡張ヘッダには GMSL 拡張ボードドライバを含む JetPack ビルドが必要であり、JetPack 6.2 のイメージ一覧には、モジュールごとに GMSL 対応版と非対応版が別々に記載されています。フラッシュ後、`jetson-io.py` で対応するオーバーレイを選択してください — SG3S には Seeed GMSL 1X4 3G、SG2 と SG8S には Seeed GMSL 1X4 6G、または Orbbec Gemini 335Lg を選びます。

**ホスト PC はどの Ubuntu バージョンを実行すべきですか？**
JetPack 6.x の場合は Ubuntu 20.04 または 22.04 からフラッシュしてください。JetPack 7.2 は Ubuntu 24.04 もサポートしますが、これはフラッシュおよびターゲット側コンポーネントのインストール専用です。ホスト側の開発コンポーネントも必要な場合は、Ubuntu 20.04 または 22.04 を使用し続けてください。

**CAN は動作しますが、CAN FD フレームが拒否されます。何が足りませんか？**
CAN FD はデフォルトで無効です。名目ビットレートとデータビットレートの両方を指定してインターフェースを設定してください。例えば `bitrate 500000 dbitrate 2000000 fd on` のようにし、CAN0 と CAN1 が同じバス上にある場合は、両方の 120Ω 終端抵抗を ON に切り替えます。

**5G モジュールは `lsusb` に表示されますが、ネットワークインターフェースがありません。**
ModemManager が使用できるようにするには、`option` ドライバがモジュールを認識している必要があります。`lsmod` で `option` を確認し、その後 `nmcli` で接続を作成して有効化してください。JetPack 6.2 では、上記の M.2 Key B セクションで使用している手順がこれに該当します。

**同時に動作させることができる GMSL カメラは何台ですか？**
4 台です。カメラ拡張ヘッダは 4-in-1 の GMSL2 mini-FAKRA ボードを駆動するため、対応するオーバーレイが読み込まれると 4 台のカメラが同時にストリーミングします。

## 関連リソース

- [Getting Started with reComputer Robotics J401](/ja/recomputer_robotics_j401_getting_started/)
- [Run Multiple GMSL Cameras on Jetson with the GMSL Expansion Board](/ja/multiple_cameras_with_jetson/)
- [Implement EtherCAT Communication on reComputer](/ja/recomputer_ethercat_communication/)
- [reComputer Robotics J4012 製品ページ](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)
- [wiki-documents リポジトリとディスカッション](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
