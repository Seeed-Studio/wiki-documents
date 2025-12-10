---
description: reComputer Robotics J401は、高度なロボティクスアプリケーション向けに設計された高性能エッジAIキャリアボードです。NVIDIA Jetson Orin NanoおよびOrin NXモジュールをSuper/MAXNモードでサポートし、最大157 TOPSのAIコンピューティングパワーを提供します。このボードは、デュアルギガビットイーサネット、複数のUSB 3.2ポート、CAN、5G/Wi-Fi/BTモジュール用M.2スロット、オプションのGMSL2カメラサポートなど、豊富な接続オプションを提供します。JetPack 6がプリインストールされており、ロボティクス開発のシームレスな展開を保証します。堅牢な設計により広い動作温度範囲をサポートし、ファン付きヒートシンクがプリインストールされています。セットアップには、互換性のあるUbuntuホストPCを使用してJetPack OSをNVMe SSDにフラッシュし、その後ハードウェア構成とインターフェース使用を行います。開発者向けに詳細なハードウェア仕様、機械図面、技術リソースが提供され、トラブルシューティングと議論のためのコミュニティおよび技術サポートチャネルも用意されています。
title: reComputer Roboticsの入門ガイド
tags:
  - J401-Robotics carrier board
  - Jetson
  - Robotics
  - reComputer
  - reComputer Robotics
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /ja/recomputer_robotics_j401_getting_started
last_update:
  date: 08/06/2025
  author: Zibo
---

<div style={{ textAlign: "justify" }}>
reComputer Robotics J401は、高度なロボティクス向けに設計されたコンパクトで高性能なエッジAIキャリアボードです。NVIDIA Jetson Orin Nano/Orin NXモジュールとSuper/MAXNモードで互換性があり、最大157 TOPSのAI性能を提供します。デュアルギガビットイーサネットポート、5GおよびWi-Fi/BTモジュール用M.2スロット、6つのUSB 3.2ポート、CAN、GMSL2（オプション拡張経由）、I2C、UARTなど豊富な接続オプションを備え、様々なセンサーからの複雑なデータを処理できる強力なロボット頭脳として機能します。JetPack 6とLinux BSPがプリインストールされており、シームレスな展開を保証します。​
</div>

<div align="center">
  <img width ="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## 特徴

- **堅牢なハードウェア設計**: NVIDIA® Jetson™ Orin™ NX 16GBモジュールをSuper/MAXNモードで搭載したコンパクトで高性能なエッジAIコンピューター、最大157 TOPSのAI性能を提供。
- **ロボティクス向け複数インターフェース**: デュアルRJ45、5G/Wi-Fi/BTモジュール用M.2スロット、6x USB 3.2、2x CAN、GMSL2（別途購入）、I2C、UARTを含み、強力なロボット頭脳として機能。
- **ソフトウェアセットアップ**: JetPack 6.2とLinux BSPがプリインストールされ、シームレスな展開を実現。
- **アプリケーションと利点**: 自律ロボットの迅速な開発に最適、すぐに使用できるインターフェースと最適化されたAIフレームワークで市場投入時間を短縮。
- **広い動作範囲**: 25Wモードで-20°C～60°C、40Wモードで-20°C～50°Cの温度範囲で確実に動作

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
      <td>1x M.2 KEY M PCIe（M.2 NVMe 2280 SSD 128G付属）</td>
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
      <td>イーサネット</td>
      <td>2x RJ45 ギガビットイーサネット</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A（5Gbps）;<br />1x USB 3.0 Type-C（Host/DP 1.4）;<br />1x USB 2.0 Type-C（Device Mode/Debug）</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>1x 4 in 1 GMSL2（mini fakra）（オプションボード）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0（XT30(2+2)）;<br />3x CAN1（4-Pin GH 1.25 ヘッダー）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x DP1.4（Type C Host）</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4-Pin GH 1.25 ヘッダー</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4-Pin GH 1.25 ヘッダー</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1x 4-Pin ファンコネクタ（5V PWM）;<br />1x 4-Pin ファンコネクタ（12V PWM）</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td>1x カメラ拡張ヘッダー（GMSL2ボード用）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin;<br />1x RTC ソケット</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED（PWR、ACT、ユーザーLED）</td>
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
      <td>アンテナホール</td>
      <td>5x アンテナホール</td>
    </tr>
    <tr>
      <th rowSpan="1">電源</th>
      <td colSpan="2">19-54V XT30(2+2)（XT30から5525 DCジャックケーブル付属）</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpackバージョン</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">機械的仕様</th>
      <td>寸法（W x D x H）</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td>1100g</td>
    </tr>
    <tr>
      <td>設置</td>
      <td>デスク、壁面取り付け</td>
    </tr>
    <tr>
      <th rowSpan="1">動作温度</th>
      <td colSpan="2">-20℃~55℃（25Wモード）;<br />-20℃~50℃（MAXNモード）;<br />（reComputer Roboticsファン付きヒートシンク使用時）</td>
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

## ハードウェア概要

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-_J4011-3.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-1.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-2.jpeg"/>  
</div>

## JetPack OSのフラッシュ

### サポートされるモジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### 前提条件

- UbuntuホストPC
- reComputer Robotics
- NVIDIA® Jetson Orin™ Nano/NXモジュール
- USB Type-Cデータ転送ケーブル

:::info

仮想マシンではなく、物理的なubuntuホストデバイスを使用することをお勧めします。
ホストマシンを準備するには、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPackバージョン </td>
        <td class="dbon" colspan="3"> Ubuntuバージョン（ホストコンピューター） </td>
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
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWqAOoqYYxNAky0Dbo847q0BDWsiSBUmyrxAMzNV9SQyNw?e=ZuOFnx">ダウンロード</a></td>
      <td>c63d1219531245abecc7bbdcafc73d3<br />4f75547454c7af85de40f08396a87e5ee</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERy0O0zUQGlKh8cDHZIoSPEBcHFJOGY6rE0gVBGCE6tBvA?e=eDw71c">ダウンロード</a></td>
      <td>5d1f3cd28eb44ca60132c87ccce5aca<br />f806ee945b486df9061a34de73fbb582b</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EewEJTne6ltJlP0IDzahaCYB9rJWUIvKXe5b0p76rlYr_A?e=tsuNbP">ダウンロード</a></td>
      <td>e7f0c8e6b578d411f81122879f92c76<br />66adfada5ed493a4cc458dc169ca8c1b7</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdXbblXVvqZDv3DqdJOR8u8BXV6rW6BVwoss0EMC-sLcfQ?e=WiW2F9">ダウンロード</a></td>
      <td> b08cbdad8ab6e50222146d3175a9d2<br />627d499bf1d67cfaf69cc737b5bfa9e33a</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6イメージファイルのサイズは約**14.2GB**で、ダウンロードには約60分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの整合性を確認するには、SHA256ハッシュ値を比較できます。

Ubuntuホストマシンで、ターミナルを開き、コマンド`sha256sum <File>`を実行して、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

### 強制リカバリモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。
:::

<details>

<summary> ステップバイステップ </summary>

**ステップ1.** スイッチをRESETモードに切り替えます。

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**ステップ2.** 電源ケーブルを接続してキャリアボードに電源を供給します。

**ステップ3.** USB Type-Cデータ転送ケーブルでボードをUbuntuホストPCに接続します。

**ステップ4.** LinuxホストPCで、ターミナルウィンドウを開き、コマンド`lsusb`を入力します。使用するJetson SoMに応じて、返される内容に以下の出力のいずれかがある場合、ボードは強制リカバリモードになっています。

- Orin NX 16GB用: **0955:7323 NVidia Corp**
- Orin NX 8GB用: **0955:7423 NVidia Corp**
- Orin Nano 8GB用: **0955:7523 NVidia Corp**
- Orin Nano 4GB用: **0955:7623 NVidia Corp**

以下の画像はOrin Nano 8GB用です

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Jetsonへのフラッシュ

**ステップ1:** ダウンロードしたイメージファイルを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-6.2-36.4.3-2025-05-23.tar.gz
```

**ステップ2:** 以下のコマンドを実行してjetpackシステムをNVMe SSDにフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功すると、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは2〜10分間実行される場合があります。
:::

**ステップ3:** Robotics J401をディスプレイに接続します。PD to HDMIアダプターを使用してHDMI入力をサポートするディスプレイに接続するか、PDケーブルを使用してPD入力をサポートするディスプレイに直接接続し、初期設定セットアップを完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
必要に応じて**System Configuration**を完了してください。
:::

## ハードウェアインターフェースの使用方法

:::info
ハードウェアインターフェースの詳細な仕様と使用方法について詳しく知りたい場合は、[このwiki](https://wiki.seeedstudio.com/ja/recomputer_jetson_robotics_j401_getting_started/#interfaces-usage)を参照してください。
:::

## リソース

- [reComputer Robotics J401 キャリアボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [reComputer Robotics J401 キャリアボードデータシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [reComputer Robotics 3Dファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [機械図面-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Seeed NVIDIA Jetson製品カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Nvidia Jetson比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Nvidia Jetson成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetsonワンページャー](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
