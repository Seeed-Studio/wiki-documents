---
description: このwikiでは、reComputer Jetson Robotics J401キャリアボードのハードウェア機能とインターフェース使用方法について包括的に紹介します。詳細な仕様、対応モジュール、セットアップ手順、M.2、Ethernet、USB、CAN、UART、I2C、GMSL2カメラ拡張などの各種インターフェースの実用的な使用ガイドを網羅し、ユーザーがJ401プラットフォームでのロボティクス開発を迅速に開始できるよう支援します。
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

reComputer Robotics J401は、高度なロボティクス向けに設計されたコンパクトで高性能なエッジAIキャリアボードです。NVIDIA Jetson Orin Nano/Orin NXモジュールとSuper/MAXNモードで互換性があり、最大157 TOPSのAI性能を提供します。デュアルギガビットEthernetポート、5GおよびWi-Fi/BTモジュール用M.2スロット、6つのUSB 3.2ポート、CAN、GMSL2（オプション拡張経由）、I2C、UARTなどの豊富な接続オプションを備え、様々なセンサーからの複雑なデータを処理できる強力なロボティクスブレインとして機能します。JetPack 6とLinux BSPがプリインストールされており、シームレスな展開を保証します。

NVIDIA Isaac ROS、Hugging Face、PyTorch、ROS 2/1などのフレームワークをサポートするreComputer Robotics J401は、大規模言語モデル駆動の意思決定と、モーションプランニングやセンサーフュージョンなどの物理的ロボティクス制御を橋渡しします。自律ロボットの開発に最適で、すぐに使用できるインターフェースと最適化されたAIフレームワークにより、市場投入時間を短縮します。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics-carrier-board.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font></span></strong>
    </a>
</div>

## reComputer Jetson Robotics J401キャリアボード概要

| **上面図** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/top.png) |
| **正面図** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/fornt.png) |
| **底面図** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/bottom.png) |

## パーツリスト

- reComputer Robotics J401キャリアボード x 1
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
1.高電圧電源供給および動作温度での使用時は、熱設計ガイドに従って堅牢な放熱ソリューションを設計してください。
2.より良い性能のため、モジュール用ヒートシンクを取り付けてください。
3.高電圧入力および高負荷での動作中は、やけどを防ぐためヒートシンクに触れないでください。
4.検証用電源アダプター推奨事項として、Seed公式ウェブサイトで推奨されている電源アダプターを使用してください。

- 19V/4.74A 5525バレルジャック電源アダプター
- 最大消費電力要件が満たされていることを確認してください。
2.AC電源コード互換性
- お住まいの地域に応じて、地域固有のACクローバーリーフ電源コードを購入してください。
3.アクセサリー互換性
- 最適な性能と互換性のため、公式推奨アクセサリー（例：ワイヤレスモジュール、カメラ、周辺機器）のみを使用してください。

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
      <td>1x M.2 KEY M PCIe（M.2 NVMe 2280 SSD 128G付属）</td>
    </tr>
    <tr>
      <th rowSpan="3">ネットワーク</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E（WiFi/Bluetoothモジュール用）</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B（5Gモジュール用）</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>2x RJ45 ギガビットイーサネット</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A（5Gbps）;<br />1x USB 3.0 Type-C（Host/DP 1.4）;<br />1x USB 2.0 Type-C（デバイスモード/デバッグ）</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td>1x 4 in 1 GMSL2（mini fakra）（オプションボード）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0（XT30(2+2)）;<br />3x CAN1（4ピン GH 1.25 ヘッダー）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1x DP1.4（Type C Host）</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4ピン GH 1.25 ヘッダー</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4ピン GH 1.25 ヘッダー</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1x 4ピン ファンコネクタ（5V PWM）;<br />1x 4ピン ファンコネクタ（12V PWM）</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td>1x カメラ拡張ヘッダー（GMSL2ボード用）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2ピン;<br />1x RTCソケット</td>
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
      <td>200g</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td>デスク、壁面取り付け</td>
    </tr>
    <tr>
      <th rowSpan="1">動作温度</th>
      <td colSpan="2">-20℃~60℃（25Wモード）;<br />-20℃~55℃（MAXNモード）;<br />（reComputer Roboticsヒートシンクとファン付き）</td>
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

## Flash JetPack OS

### サポートされているモジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### 前提条件

- Ubuntu ホストPC
- Robotics J401 Carrier Board
- NVIDIA® Jetson Orin™ Nano/NX Module
- Nano/NX Module Active Fan
- NVMe M.2 2280 Internal SSD
- USB Type-C データ転送ケーブル

:::info

仮想マシンではなく、物理的なubuntuホストデバイスを使用することをお勧めします。
ホストマシンを準備するには、以下の表を参照してください。

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
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaSRAPdqWthNqVkn0U7ztycBN0SfRdKxmKvWxOHaZq-K9w?e=gbs2Hd">ダウンロード</a></td>
      <td>260D30AF2DF259418A9A3BC47FCFDE9 <br />97428461B133B408FB4B8BAB72F994E82</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYGuJpmGQPBLprByA1CofVcBLzUO5dQ8nIEh1PsFQ0863w?e=Pf4GAv">ダウンロード</a></td>
      <td>379F2AC4BD574A7E5C8F8834F57BDC5<br />9FFA7BCFE0FDCBBF530CB7B4ED95E690D</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETnTL4_b0WJNtTO3oHgh9LUBKeMIf542lud-b4OghQnRXg?e=ODUYI1">ダウンロード</a></td>
      <td>8689D936F400B2AA8E603095E2E5EAA<br />5CF736DBD3EEB34E30DC98BD195B1235A</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVx9z8620hNAjKhj18D1bNkBslhkjvq8fh5CsDB62yBxig?e=76f4wH">ダウンロード</a></td>
      <td> 9CD1EF04A34345B74B7179C1114080<br />5C8D073E8687FD103A385ED8B19E9162A5</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6イメージファイルのサイズは約**14.2GB**で、ダウンロードには約60分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの整合性を確認するには、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンで、ターミナルを開き、`sha256sum <File>`コマンドを実行して、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
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

**ステップ4.** LinuxホストPCでターミナルウィンドウを開き、`lsusb`コマンドを入力します。使用しているJetson SoMに応じて、返される内容に以下の出力のいずれかがある場合、ボードは強制リカバリモードになっています。

- Orin NX 16GBの場合: **0955:7323 NVidia Corp**
- Orin NX 8GBの場合: **0955:7423 NVidia Corp**
- Orin Nano 8GBの場合: **0955:7523 NVidia Corp**
- Orin Nano 4GBの場合: **0955:7623 NVidia Corp**

以下の画像はOrin Nano 8GBの例です

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Jetsonにフラッシュする

**ステップ1:** ダウンロードしたイメージファイルを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-6.2-36.4.3-2025-05-23.tar.gz
```

**ステップ 2:** 以下のコマンドを実行して、jetpack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは2〜10分間実行される場合があります。
:::

**ステップ3:** Robotics J401をディスプレイに接続し、PD to HDMIアダプターを使用してHDMI入力をサポートするディスプレイに接続するか、PDケーブルを使用してPD入力をサポートするディスプレイに直接接続し、初期設定セットアップを完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
必要に応じて**システム設定**を完了してください。
:::

## インターフェースの使用方法

以下では、Robotics J401ボードの各種インターフェースとその使用方法を紹介します。

## M.2 Key M

M.2 Key Mは高速NVMe SSD用に設計されており、ロボティクスアプリケーション向けに超高速データ転送を提供します。

### サポートされているSSDは以下の通りです

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

Jetsonデバイスでターミナルを開き、以下のコマンドを入力してSSDの読み書き速度をテストします。

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

M.2 Key B スロットは5Gモジュール拡張用で、ロボティクスとエッジAIシナリオ向けの高速セルラー接続を可能にします。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/5g_c.jpg"/>
</div>

### 使用方法

**ステップ 1.** ハードウェア認識の確認

```bash
lsusb 
```

このコマンドは、システムに接続されているすべてのUSBデバイスのリストを、製造元（ID）、タイプ、その他の情報と共に表示します。例えば、出力にはQuectel Wireless Solutions Co., Ltd. EM12-Gからのデバイスが表示され、5Gモジュールが存在することを示している可能性があります。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb.png"/>
</div>

**ステップ 2.** ドライバーの読み込み確認
5Gモジュールに必要なoptionドライバーが読み込まれていることを確認することが重要です。lsmodコマンドを使用して確認できます。

```bash
lsmod | grep option 
```

オプションドライバが正常にロードされると、ドライバに関する関連情報が出力に表示されます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsmod.png"/>
</div>

**ステップ 3.** ModemManagerの設定
ModemManagerはモデムデバイスを管理するためのツールで、インストールして再起動する必要があります。

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

5Gモジュールが認識されると、/org/freedesktop/ModemManager1/Modem/0 のような出力が表示され、検出されたモデムデバイスへのパスを示します。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_l.jpg"/>
</div>

**ステップ 5.** APNの設定
APN（Access Point Name）は、モバイルデバイスをネットワークに接続するために重要です。nmcliコマンドを使用してベアラープロファイルを作成します。中国移動を例に、以下のコマンドで設定ファイルを作成できます：

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

このコマンドは、新しいGSM（Global System for Mobile Communications）タイプの接続を追加し、APNを「CMNET」として指定し、自動IPv4設定を使用します。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_con.jpg"/>
</div>

**ステップ6.** 接続をアクティベートする
ベアラープロファイルを作成した後、接続をアクティベートする必要があります。

```bash
sudo nmcli con up "gsm" 
```

このコマンドはGSM接続をアクティベートし、成功すると確認メッセージが表示されます。

**ステップ7.** モジュール識別の再確認
APN設定後にモジュールが認識され続けていることを確認するため、再度mmcli -Lコマンドを実行します。

```bash
mmcli -L 
```

**ステップ 8.** モジュールステータスの確認
最後に、mmcli -m 0 コマンドを使用して、IP割り当て、キャリア、ネットワーク接続ステータスなど、モジュールの詳細情報を確認できます。

```bash
mmcli -m 0 
```

このコマンドは、製造元、モデル、サポートされている現在のネットワーク技術、デバイスステータス、接続されているネットワークオペレーターなど、5Gモジュールに関する包括的な詳細を提供します。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_m.jpg"/>
</div>

## M.2 Key E

M.2 Key Eインターフェースは、主にWi-FiやBluetoothなどのワイヤレスモジュールを接続してワイヤレス通信機能を拡張するために使用される標準的なM.2コネクタです。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/m2_e.jpg"/>
</div>

### 使用方法

Wi-Fiパフォーマンスをテストするには、以下のコマンドを使用してください（IPアドレスをテストサーバーのものに置き換えてください）：

```bash
iperf3 -c 192.168.6.191
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/wifi_speed.png"/>
</div>

Bluetooth機能はM.2 Key Eスロット経由で利用できます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/bluetooth.png"/>
</div>

## Ethernet

Robotics j401キャリアボードは、高速有線ネットワーク接続のための2つの1Gbps RJ45 Ethernetポートを搭載しています。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/eth.jpg"/>
</div>

Ethernetポートの速度をテストするには、以下のように`iperf3`を使用します：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` は iperf3 サーバーの IP アドレスです。クライアントはこのサーバーに接続して帯域幅テストを実行します。
`<bind_ip>` は、テストトラフィックのソースとして指定されたローカル IP アドレスをバインドします。
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ethnet_speed.png"/>
</div>

## LED

reComputer Jetson Robotics J401 は、電源、システムアクティビティ、およびユーザー定義機能に対して明確なステータスフィードバックを提供する 3 つの LED インジケーター（PWR、ACT、および User LED）を搭載しています。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div>

### 使用方法

User LED は RGB LED で、さまざまなステータスを示すために異なる色を表示でき、ユーザーによって定義される必要があります。

以下は RGB LED を制御するテストスクリプトです：

```bash
touch rgb_test
chmod +x rgb_test
vi rgb_test
```

以下の内容を貼り付けてください：

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

スクリプトを実行してRGB LEDをテストします。

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/rgb_led.gif"/>
</div>

## USB

Robotics j401キャリアボードには、6つのUSB 3.2 Type-Aポート（5Gbps）、DP 1.4対応のUSB 3.0 Type-Cポート1つ（ホストモード）、デバイスモード/デバッグ用のUSB 2.0 Type-Cポート1つなど、多様なUSBポートが搭載されており、汎用性の高い接続オプションを提供します。

### USB速度テスト

USBデバイスの速度をテストするスクリプトを作成します：

```bash
sudo vim test_usb
```

以下の内容を貼り付けてください：

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

USBデバイス名を引数としてスクリプトを実行してください。

### USB 2.0 Type-C ポート

このシリアルポートを使用して、USB C データケーブル経由でPC側の入出力デバッグ情報を監視できます。

**Step1.** スイッチをデバッグモードに切り替えます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug.jpg"/>
</div>

**Step2.** USBデータケーブルでPCに接続し、PCに[CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)をダウンロードします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Step3.** USBデータケーブルでPCに接続し、ダウンロードしたファイルを展開してPCにドライバーをインストールします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Step4.** Windows PCでデバイスマネージャーを開き、reComputer Superに割り当てられたCOMポート番号を確認します。「ポート (COM と LPT)」の下に「Silicon Labs CP210x USB to UART Bridge (COMX)」として表示されます。ここでXはCOMポート番号です。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
</div>

**Step5.** シリアルポートツール（ここではMobaXtermツールを例として使用）を開き、新しいセッションを作成します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Step6.** Serialツールを選択します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Step7.** 対応するシリアルポートを選択し、ボーレートを115200に設定して「OK」をクリックします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**Step8.** ユーザー名とパスワードでreComputer Superにログインします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

### USB Camera

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

- 1x 4ピンファンコネクタ（5V PWM）：低電圧、低消費電力の静音ファン用に設計されており、このコネクタはPWM速度制御をサポートし、システム温度に基づいてインテリジェントなファン速度調整を可能にし、エネルギー効率を向上させ、ノイズを低減します。

- 1x 4ピンファンコネクタ（12V PWM）：標準的な12V PWMファンと互換性があり、精密な速度制御もサポートしており、高性能冷却要件に最適です。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/fan.png"/>
</div>

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)をご確認ください。
:::

**ファン速度を設定するスクリプトを作成：**

```bash
cat test_fanSpeedSet
```

以下の内容を貼り付けてください：

```bash
#!/bin/bash
sudo systemctl stop nvfancontrol
sleep 2
echo "000000" | sudo -S chmod 777 /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
echo $1 > /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
```

> 注意：Jetson Nano 4Gの場合、ファンのパスは `/sys/devices/platform/pwm-fan/hwmon/hwmon0/pwm1` です。

さらに、jtopツールを使用してファン速度を手動で設定することもできます。

## ピンホールボタン

Robotics J401キャリアボードには、ユーザーインタラクション用のピンホールボタンが搭載されており、電源（PWR）ボタンとリセット（RESET）ボタンが含まれています。これらのボタンは、デバイスの電源オン/オフとシステムの再起動を行うために不可欠です。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pinhole_button.jpg"/>
</div>

## CAN

CAN（Controller Area Network）は、マイクロコントローラーとデバイスがホストコンピューターなしで相互に通信できる堅牢な車両バス標準です。
Robotics J401は、便利な電源とデータ伝送のためにXT30（2+2）電源コネクターに統合された1つのCAN0インターフェースを提供します。さらに、柔軟なCANバス接続のために2つの標準JST 4ピンヘッダーを介して3つのCAN1インターフェースを提供します。

### CAN通信

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)では、以下に示すようにCAN0/CAN1インターフェースの配線図を確認できます：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div>

ここでは、[USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)を使用して、CAN1インターフェースを使用したデータ通信の実行方法をデモンストレーションします。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c.png"/>
</div>

下図に示す接続方法に従って、CAN1のCANL、CANH、およびGNDを、USB to CANツールの対応するCANL、CANH、およびGNDポートにそれぞれ接続します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c1.png"/>
</div>

今回の場合、使用したアダプターに従って、[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)で見つけることができるソフトウェアをダウンロードしてインストールしました。

**ステップ 1.** CAN1インターフェースを設定します：

```bash
#Set the bit rate
sudo ip link set can1 type can bitrate 500000
#Enable CAN1
sudo ip link set can1 up
```

**Step 2.** PC データ受信ソフトウェアを設定します。
以下の図に示すように通信設定を構成してください。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_software.png"/>
</div>

**Step 3.** Jetson が PC にデータを送信します：

```bash
cansend can1 123#abcdabcd
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pc_rcan1.png"/>
</div>

**ステップ 3.** PCがJetsonにデータを送信する：

```bash
#CAN1 monitors PC data
candump can1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1.png"/>
</div>

JetsonターミナルがPCから送信されたデータを受信していることが確認できます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_r.png"/>
</div>

### CAN FDモード

ここでは、CAN0をCAN1に接続して、複数のJetsonデバイスがCANインターフェース経由で通信する方法を実演します。

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

**ステップ 3.** 新しいターミナルを開いてCAN1をリッスンし、CAN0経由でCAN1にデータを送信します：

```bash
#open a new terminal and run
candump can1

#another terminal sends data
cansend can0 123##011112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF
```

:::info

- `123` は ID です
- `##` は CAN FD フレームを示します
- 以下は 64 バイトのデータです（合計 128 個の 16 進文字）

:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_fd.png"/>
</div>

## UART

Robotics J401 は、UART シリアル通信用の標準 4 ピン JST ヘッダーを提供します。

### ハードウェア接続

UART 通信については、以下の配線に従ってください。ここでは、USB to TTL ツールを例として使用します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_c.jpg"/>
</div>

### 使用方法

**ステップ 1.** Jetson デバイスでターミナルを開き、以下のコマンドを実行して UART インターフェースを有効にします：

```bash
gpioset --mode=time --sec=100 2 5=0
```

**ステップ2.** USB to TTLツールをRobotics J401のUARTポートとPCに接続します。

**ステップ3.** PC側でシリアルポートツールを開き（ここでは、xcomツールを例として使用します）、ボーレートを115200に設定します。

**ステップ4.** シリアル通信用のシンプルなPythonスクリプトを作成します：

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

**Step 5.** Run the Python script on the Jetson device:

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
センサーや周辺機器の簡単な接続を可能にし、システム拡張を実現します。

### ハードウェア接続

Robotics J401 は 2 つの 4 ピン GH-1.25 IIC インターフェース、IIC0 と IIC1 を搭載しています。
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic.jpg"/>
</div>

[データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)では、IIC0/IIC1 4 ピン GH-1.25 インターフェースの配線図を以下のように確認できます：
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/12c.png"/>
</div>
テスト用の IIC インターフェースデバイスを選択してください。選択はお任せします。ここでは、[Arduino-Uno-Rev4-Minima](https://www.seeedstudio.com/Arduino-Uno-Rev4-Minima-p-5716.html) を使用して I2C0/I2C1 をテストします。

ここでのテストプロセスは、IIC0/IIC1 に外部接続されたデバイスのアドレスをスキャンすることです。
:::info
以下の接続に従ってデバイス（IIC0/IIC1 ↔ Device）を接続してください：

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

**Step 4.** Jetson install the tools for IIC testing.

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**ステップ5.** ターミナルで以下のコマンドを実行して、IICバス上のマップされた名前を表示します：

```bash
i2cdetect -l
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_l.png"/>
</div>

**ステップ 6.** 以下のコマンドを実行してIIC0をスキャンします：

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_detect.png"/>
</div>

IIC0に接続されたデバイスがアドレス0x08に設定されていることがわかります。

## 拡張ポート

Robotics j401キャリアボードは、GMSL拡張ボード用のカメラ拡張ヘッダーを搭載しています。同時に4台のGMSLカメラを接続して動作させることができます。

### ハードウェア接続

以下は、Robotics j401キャリアボードのGMSLカメラ拡張ボード接続スロットです（事前に拡張ボードを準備する必要があります）：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/exb.png"/>
</div>

以下は、すでにサポートしているGMSLカメラモデルです：

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- Orbbec Gemini 335Lg

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
合計3つのオーバーレイファイルがあります。それぞれSeeed GMSL 1X4 3G、Seeed GMSL 1X4 6G、Seeed GMSL 1X4、およびOrbbec Gemini 335Lgです。これらはそれぞれSG3Sの3Gカメラ、SG2とSG8Sの6Gカメラ、およびOrbbecのカメラに対応しています。図3に示すように、お使いのカメラのモデルに応じてioファイルを設定してください。
:::

**step 2.** ビデオインターフェース設定ツールをインストールします。

```bash
sudo apt update
sudo apt install v4l-utils
```

### Gemini 335Lgのカメラを使用する

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

### SGxxxシリーズのカメラを使用する

**ステップ1.** シリアライザーとデシリアライザーのチャンネル形式を設定します。図中のインターフェース番号は、シリアライザー/デシリアライザー番号に対応しています。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/interface.jpg"/>
</div>

```bash
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1080]'
media-ctl -d /dev/media0 --set-v4l2 '"des_ch_0":0[fmt:YUYV8_1X16/1920x1080]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_0":1[fmt:YUYV8_1X16/1920x1080]'
media-ctl -d /dev/media0 --set-v4l2 '"des_ch_1":0[fmt:YUYV8_1X16/1920x1080]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_0":1[fmt:YUYV8_1X16/3840x2160]'
media-ctl -d /dev/media0 --set-v4l2 '"des_ch_3":0[fmt:YUYV8_1X16/3840x2160]' 
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
`--set-fmt-video` は接続されているカメラに基づいて選択される解像度に従います。sensor_mode も同様に選択されます。現在、3つのsensor_modeオプションがあり、それぞれ異なる解像度に対応しています。

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**ステップ 3.** カメラを起動します。

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

reComputer Jetson Robotics J401 は、高解像度ディスプレイ出力用の DP1.4（Type-C Host に含まれる）を搭載しています。

## リソース

- [reComputer Robotics J401 キャリアボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [reComputer Robotics J401 キャリアボード データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
