---
description: reComputer Robotics J401 は、高度なロボティクス用途向けに設計された高性能エッジ AI キャリアボードです。Super/MAXN モードで動作する NVIDIA Jetson Orin Nano および Orin NX モジュールをサポートし、最大 157 TOPS の AI 演算性能を提供します。デュアル Gigabit Ethernet、複数の USB 3.2 ポート、CAN、5G/Wi-Fi/BT モジュール用の M.2 スロット、オプションの GMSL2 カメラ対応など、豊富な接続オプションを備えています。JetPack 6 をプリインストールしており、ロボティクス開発のシームレスなデプロイを実現します。堅牢な設計により広い動作温度範囲をサポートし、ファン付きヒートシンクもあらかじめ搭載されています。セットアップは、対応する Ubuntu ホスト PC を使用して JetPack OS を NVMe SSD にフラッシュし、その後ハードウェア構成とインターフェースの使用を行います。開発者向けに、詳細なハードウェア仕様、機械図面、技術リソースが提供されており、トラブルシューティングやディスカッションのためのコミュニティおよび技術サポートチャネルも用意されています。
title: reComputer Robotics 入門ガイド
tags:
  - J401-Robotics キャリアボード
  - Jetson
  - ロボティクス
  - reComputer
  - reComputer Robotics
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /recomputer_robotics_j401_getting_started
sku: 100071398, 114110310, 100026552
last_update:
  date: 08/06/2025
  author: Zibo
createdAt: '2025-08-06'
updatedAt: '2026-06-24'
url: https://wiki.seeedstudio.com/ja/recomputer_robotics_j401_getting_started/
---
<div style={{ textAlign: "justify" }}>
reComputer Robotics J401 は、高度なロボティクス向けに設計されたコンパクトで高性能なエッジ AI キャリアボードです。Super/MAXN モードで動作する NVIDIA Jetson Orin Nano/Orin NX モジュールに対応し、最大 157 TOPS の AI 性能を発揮します。デュアル Gigabit Ethernet ポート、5G および Wi-Fi/BT モジュール用の M.2 スロット、6 つの USB 3.2 ポート、CAN、GMSL2（オプション拡張）、I2C、UART など、豊富な接続オプションを備えており、各種センサーからの複雑なデータを処理できる強力なロボットブレインとして機能します。JetPack 6 と Linux BSP をプリインストールしており、シームレスなデプロイを実現します。​
</div>

<div align="center">
  <img width ="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## 特長

- **堅牢なハードウェア設計**: Super/MAXN モードで動作する NVIDIA® Jetson™ Orin™ NX 16GB モジュールを搭載したコンパクトで高性能なエッジ AI コンピュータで、最大 157 TOPS の AI 性能を提供します。
- **ロボティクス向けの多彩なインターフェース**: デュアル RJ45、5G/Wi-Fi/BT モジュール用 M.2 スロット、6x USB 3.2、2x CAN、GMSL2（追加購入）、I2C、UART を備え、強力なロボットブレインとして機能します。
- **ソフトウェアセットアップ**: JetPack 6.2 と Linux BSP をプリインストールしており、シームレスなデプロイが可能です。
- **用途と利点**: 自律ロボットの迅速な開発に最適で、すぐに使えるインターフェースと最適化された AI フレームワークにより、製品化までの時間を短縮します。
- **広い動作範囲**: 25W モードでは -20°C ～ 60°C、40W モードでは -20°C ～ 50°C の温度範囲で安定動作します。

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
      <td>WiFi/Bluetooth モジュール用 1x M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>5G モジュール用 1x M.2 Key B</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>2x RJ45 Gigabit Ethernet</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A（5Gbps）；<br />1x USB 3.0 Type-C（Host/DP 1.4）；<br />1x USB 2.0 Type-C（Device Mode/Debug）</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>1x 4 in 1 GMSL2（mini fakra）（オプションボード）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0（XT30(2+2)）；<br />3x CAN1（4-Pin GH 1.25 ヘッダ）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x DP1.4（Type C Host）</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4-Pin GH 1.25 ヘッダ</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4-Pin GH 1.25 ヘッダ</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1x 4-Pin ファンコネクタ（5V PWM）；<br />1x 4-Pin ファンコネクタ（12V PWM）</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td>1x カメラ拡張ヘッダ（GMSL2 ボード用）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin；<br />1x RTC ソケット</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED（PWR、ACT、ユーザー LED）</td>
    </tr>
    <tr>
      <td>ピンホールボタン</td>
      <td>1x PWR；<br />1x RESET</td>
    </tr>
    <tr>
      <td>DIP スイッチ</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>アンテナホール</td>
      <td>5x アンテナホール</td>
    </tr>
    <tr>
      <th rowSpan="1">電源</th>
      <td colSpan="2">19-54V XT30(2+2)（XT30 から 5525 DC ジャックケーブル付属）</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack バージョン</th>
      <td colSpan="2">JetPack 6 プリインストール；JetPack 7.2 対応</td>
    </tr>
    <tr>
      <th rowSpan="3">機構</th>
      <td>寸法（W x D x H）</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>1100g</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td>デスク、壁掛け</td>
    </tr>
    <tr>
      <th rowSpan="1">動作温度</th>
      <td colSpan="2">-20℃～55℃（25W モード）；<br />-20℃～50℃（MAXN モード）；<br />（reComputer Robotics ヒートシンク（ファン付き）使用時）</td>
    </tr>
    <tr>
      <th rowSpan="1">保証</th>
      <td>2 年</td>
    </tr>
    <tr>
      <th rowSpan="1">認証</th>
      <td>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## ハードウェア概要

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114110308_1.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-1.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-2.jpeg"/>  
</div>

## JetPack OS をフラッシュする

### 対応モジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### 事前準備

- Ubuntu ホスト PC
- reComputer Robotics
- NVIDIA® Jetson Orin™ Nano/NX モジュール
- USB Type-C データ転送ケーブル

:::info

仮想マシンではなく、物理的な Ubuntu ホストデバイスを使用することを推奨します。
ホストマシンの準備については、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack バージョン </td>
        <td class="dbon" colspan="4"> Ubuntu バージョン（ホストコンピュータ） </td>
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

<p><strong>Note:</strong> JetPack 7.2 では、Ubuntu 24.04 はフラッシュおよびターゲット側コンポーネントのインストールのみに対応しています。ホスト開発コンポーネントが必要な場合は、Ubuntu 20.04 または 22.04 を使用してください。</p>

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
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBwi3AQXJiaTZiPQaKocDSkAciLsok9znKGnAPczuZ_IfY?e=S2v5QV">Download</a></td>
      <td>3dc9d5b27e01f223e6d75b50a8cd5fa3<br />3b0fb259018011418f0692ff0eb91a54</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB8NF028_DESZJ9WwSg2Q34AVCNXeZFkwJi8pbvCOcX4cI?e=Zahpfm">Download</a></td>
      <td>9b8a11bfb335fd159bbc2f29ef47f3d0<br />0d94a88c190a58ea94762954c476c176</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAakIBc6l2wS7qKAy-1ZeHPAbTtT8XLYaIgITvBGy8vezo?e=mPygXS">Download</a></td>
      <td>dade14539ef525506dba4f59a2e99254<br />48621d89db52b8a94417f438c0cf8024</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBnWlTaU6nIQLDOcM2KRQM6AQ6A-ODC8DnWFKRSfW8vRmc?e=1AAVH8">Download</a></td>
      <td>2ed5792564202430c1550183158d2f4a<br />6c47d65af248a634cf1d4d13ee465bf4</td>
    </tr>
    <tr>
      <td rowSpan={4}>7.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCXU7mPG_OyR7z-VhF3E5j8AcmgsCPAZAuXSdKduZUKtHQ">Download</a></td>
      <td>6c499899d6c00a1661a48974d4dfc734<br />e9cbfefc06fc9c5c02ac7040dd1f2eb8</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBxz11HG6naSak2wIytiRbXAaqxhsgIWFaVR9H9GfGWqus">Download</a></td>
      <td>23b68b43e630d166e5079f72509c71ea<br />0e13f76e372ddd06fe22df5494ad3f41</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBw84cKdsnuRYQLA1pkfg3mAY1x0HW0UMppZbnaDBaV6XI">Download</a></td>
      <td>2712fe373afb3dff8202cdd9288b266f<br />080b76837eb13161918efd80111d9035</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDqVVHOlgc7T6b5LbNYFImdAaUr2OlKT1IkQKk2P89lCW8">ダウンロード</a></td>
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

Ubuntu ホストマシンでターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全かつ正常であることが確認できます。
:::

### 強制リカバリーモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリーモードになっていることを確認する必要があります。
:::

<details>

<summary> 手順 </summary>

**Step 1.** スイッチを RESET モードに切り替えます。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**Step 2.** 電源ケーブルを接続してキャリアボードの電源を入れます。

**Step 3.** USB Type-C データ転送ケーブルで、ボードを Ubuntu ホスト PC に接続します。

**Step 4.** Linux ホスト PC でターミナルウィンドウを開き、コマンド `lsusb` を入力します。使用している Jetson SoM に応じて、返された内容に次のいずれかの出力が含まれていれば、ボードは強制リカバリーモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

以下の画像は Orin Nano 8GB の例です

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Jetson へフラッシュする

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

フラッシュ処理が成功すると、次のような出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には 2〜10 分かかる場合があります。
:::

**Step 3:** Robotics J401 をディスプレイに接続します。PD から HDMI へのアダプタを使用して HDMI 入力対応ディスプレイに接続するか、PD ケーブルを使用して PD 入力対応ディスプレイに直接接続し、初期設定を完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
ニーズに応じて **System Configuration** を完了してください。
:::

## ハードウェアインターフェースの使用

:::info
ハードウェアインターフェースの詳細な仕様や使用方法についてさらに知りたい場合は、[この wiki](https://wiki.seeedstudio.com/ja/recomputer_jetson_robotics_j401_getting_started/#インターフェースの使用) を参照してください。
:::

## リソース

- [reComputer Robotics J401 キャリアボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [reComputer Robotics J401 キャリアボードデータシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [reComputer Robotics 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [Mechanical Document-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Seeed NVIDIA Jetson 製品カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Nvidia Jetson 比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Nvidia Jetson 導入事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson ワンページ資料](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
