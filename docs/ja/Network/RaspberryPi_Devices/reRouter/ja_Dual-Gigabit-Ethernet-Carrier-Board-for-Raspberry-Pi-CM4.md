---
description: reRouterキャリアボード
title: reRouterキャリアボード
keywords:
- デバイス
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Raspberry Pi Compute Module 4用デュアルギガビットイーサネットキャリアボードの使い方

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/thumb.png" alt="pir" width="600" height="auto"/></p>

Raspberry Pi Compute Module 4を搭載したデュアルギガビットキャリアボードは、デュアルギガビットイーサネットポートとデュアルUSB 3.0ポートを備えており、ソフトルーターアプリケーションに適している一方で、ハードウェアを最小限に抑えています。

MIPI CSI、MIPI DSI、micro-HDMIを使用してディスプレイやカメラを接続できるほか、標準的な9ピンUSB 3.0ヘッダーによるUSB拡張、micro-SDカードスロット、FPCコネクタなど、多様なI/O周辺機器を備えています。また、コンパクトなフォームファクターを維持しています。このボードは、HTPCメーカー、Linux開発者、ソフトウェアルーター愛好家、そして一般的なRaspberry Piユーザーに最適です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- コンパクトサイズ (75x64x21mm) と豊富なI/O周辺機器
- ソフトルーターアプリケーション向けのデュアルギガビットイーサネットコネクタ
- MIPI CSI、MIPI DSI、micro-HDMIインターフェースを使用したカメラ/ディスプレイ接続
- オンボードデュアルUSB 3.0と追加のUSB 3.0 9ピンヘッダーによる外部ポート拡張
- eMMC非搭載版CM4用のシステムイメージをロードするためのmicro-SDカードスロット
- FPCコネクタ(I2C、SPI)によるさらなる拡張性
- ファン電源コネクタによる外部ファン対応
- USB Type-Cによる電源供給

## 仕様

| 仕様 | 詳細 |
|-|-|
| ネットワーキング | デュアルギガビットイーサネットコネクタ |
| USB 3.0 to GbE<br />(ギガビットイーサネットブリッジ) | MicrochipのLAN7800 |
| USB | 2 x USB 3.0ポート<br />1 x USB 3.0 9ピンヘッダー |
| ストレージ | micro-SDカードスロット (eMMC非搭載CM4版用システムイメージロード) |
| カメラ | 1 x MIPI CSIコネクタ |
| ディスプレイ | 1 x MIPI DSIコネクタ<br />1 x micro-HDMIコネクタ |
| FPC | I2CおよびSPI用インターフェース |
| 外部ファン | ファン用電源コネクタ |
| 電源 | USB Type-Cポートを使用した5V/3A |
| 寸法 | 75x64x21mm |
| 重量 | 43g |

:::caution
この製品は高い統合度を持つため、[CM4ヒートシンク](https://www.seeedstudio.com/Aluminum-Alloy-CNC-Heat-Sink-with-Fan-for-Raspberry-Pi-CM4-Module-p-4923.html)と一緒に使用する必要があります。そうしない場合、USBやイーサネットの不安定性を引き起こす可能性があります。
:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/hw-overview.png" alt="pir" width="900" height="auto"/></p>

## ハードウェア紹介

### Raspberry Pi Compute Module 4用200ピンインターフェース

このキャリアボードには**200ピンインターフェース**があり、各列に100ピンずつ配置されています。これにより、[Raspberry Pi Compute Module 4](https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-CM4001000-p-4720.html)を接続してプロジェクトを実現できます。

#### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/CM4.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/102110497/CM4.png)をクリックしてください。

### デュアルギガビットイーサネットポート

このキャリアボードには**2つのギガビットイーサネットポート(RJ45)**が搭載されています。1つのイーサネットポートは、CM4モジュールの**Gigabit Ethernet PHY**に接続されており、これは**Broadcom BCM54210PE**に基づいています。一方、もう1つのギガビットイーサネットポートは**MicrochipのLAN7800**に接続されており、これは**USB 3.0 to GbE (ギガビットイーサネットブリッジ)**です。ここでの**USB 3.0インターフェース**は、CM4モジュールの**PCIeインターフェース**から拡張されています。また、両方のポートは最大1Gbpsの速度をサポートできます。

#### デュアルギガビットイーサネットポートの回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RJ45.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/102110497/RJ45.png)をクリックしてください。

#### USB 3.0 to GbE (ギガビットイーサネットブリッジ)の回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN7800.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/102110497/LAN7800.png)をクリックしてください。

### CSIカメラインターフェース

このキャリアボードには**MIPI CSIカメラインターフェース**があり、**15ピンCSIフレックスケーブル**を介してカメラを接続できます。このカメラインターフェースは、物体検出や機械学習アプリケーションに使用できます。

#### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/CSI.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/102110497/CSI.png)をクリックしてください。

### DSIディスプレイインターフェース

このキャリアボードには**MIPI DSIディスプレイインターフェース**があり、**15ピンDSIフレックスケーブル**を介してディスプレイを接続できます。このディスプレイインターフェースは、キャリアボードとのインタラクションに使用できます。

#### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/DSI.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/102110497/DSI.png)をクリックしてください。

### FPCインターフェース

このキャリアボードには**8ピンFPC**インターフェースがあり、**0.5mmピッチH2.5**を備えています。このインターフェースを使用して、カメラやディスプレイなどの追加ハードウェアをキャリアボードに接続できます。

#### 仕様

- 定格電流: 0.5A
- 定格電圧: 50V
- 耐電圧: 500V
- 接触抵抗: 20mΩ
- 絶縁抵抗: 800mΩ
- 動作温度: -20°C ~ +85°C

#### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_Schematics.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

### デュアル USB 3.0 ポートと 9 ピンヘッダー

Compute Module 4 は標準で **USB 2.0 インターフェース**のみを備えています。しかし、CM4 の既存の **PCIe インターフェース**を利用し、これを拡張して **2 x USB 3.0 ポートを備えた USB 3.0 インターフェース**を提供しています。この USB ポートは最大 5Gbps の転送速度を提供します。

さらに、**USB 3.0 9 ピンヘッダー**があり、このヘッダーを使用してさらに多くの USB デバイスを接続することができます。

まず、このボードの 9 ピンヘッダーに [9 ピンメスから 20 ピンメスアダプター](https://www.amazon.com/SIENOC-Female-Motherboard-Housing-Adapter/dp/B00EOI3VC8/ref=sr_1_4?dchild=1&keywords=9+pin+to+20+pin&qid=1630315040&sr=8-4) を接続し、その後 [20 ピンオスから USB3.0 アダプター](https://www.amazon.com/Motherboard-Adapter-Header-Convert-Female/dp/B071NZHWHG/ref=sr_1_9?dchild=1&keywords=20-pin+usb3.0&qid=1630315493&sr=8-9) を前述の 20 ピンメスヘッダーに接続します。この 2 つの製品が必要なのは、現在市場に **9 ピンから USB3.0 アダプター**が存在せず、**9 ピンから USB2.0 アダプター**のみが利用可能だからです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/USB-pins.jpg" alt="pir" width="1000" height="auto"/></p>

**注意:** このボードに **ジャンパーワイヤー**を使用して [5V ファン](https://www.seeedstudio.com/Aluminum-Alloy-CNC-Heat-Sink-with-Fan-for-Raspberry-Pi-CM4-Module-p-4923.html) を接続したい場合、ファンの **正極 (+)** を **VBUS** に、ファンの **負極 (-)** を **GND** ピンに接続することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/fan-connect.jpg" alt="pir" width="1000" height="auto"/></p>

#### USB 3.0 HOST の回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/USB3.0.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/102110497/USB3.0.png) をクリックしてください。

#### PCIe から USB 3.0 の回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/PCIe_to_USB.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/102110497/PCIe_to_USB.png) をクリックしてください。

### Micro HDMI ポート

キャリアボードには micro HDMI ポートがあり、**micro HDMI から標準 HDMI ケーブル**を使用して HDMI ディスプレイに接続することができます。最大 4K 解像度で 60fps の動画をサポートしています。

#### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/micro-HDMI.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/102110497/micro-HDMI.png) をクリックしてください。

### UART IO

キャリアボードには **UART 通信**用の **4 ピンインターフェース**があります。このインターフェースを使用して、**USB からシリアルアダプターケーブル**を使用して直接 **Raspberry Pi OS** にログインすることができます。このインターフェースには **TX, RX, 3V3, GND** のピンがあります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

### ブートモードピン

この **3 ピンインターフェース**は、キャリアボードを **USB デバイス**として使用したい場合に使用されます。**GND** と **BOOT** ピンをショートすると、**eMMC ストレージ**または **micro-SD カードストレージ**に **ホスト PC** を使用してアクセスすることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

### リセットボタン

このボタンは CM4 を **リセット**するために使用されます。**ハードウェアリブート**として機能します。

#### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RESET.png" alt="pir" width="650" height="auto"/></p>

### Micro - SD カードスロット

このボードには **micro-sd カードスロット**が装備されています。これは、**eMMC を搭載していない CM4 モジュール**を使用する際に、micro-SD カードに **オペレーティングシステムをインストール**するために便利です。最低でも 8GB 以上のカードを使用することを推奨します。

#### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/micro_SD.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/102110497/micro_SD.png) をクリックしてください。

### USB Type-C ポート

キャリアボードの **USB Type-C ポート**は **5V/3A の電力でキャリアボードを給電**するために使用できます。しかし、このポートは **USB デバイス**としても機能し、キャリアボードを **ホスト PC** に接続すると、キャリアボードが **USB マスストレージデバイス**として動作します。この場合、PC を介してキャリアボードの **オンボード eMMC** および接続された **micro-SD カード**にアクセスすることができます。

#### USB Type-C を USB デバイスとして使用する際の回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/type-c.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/102110497/type-c.png) をクリックしてください。

#### 電源管理の回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/power-manage.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/102110497/power-manage.png) をクリックしてください。

### 4 ピンファンコネクター

**4 ピン PWM ファン**をこのコネクターに接続し、ソフトウェアを使用して制御することができます。

#### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/Fan.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/102110497/Fan.png) をクリックしてください。

### 電源および動作 LED

キャリアボードには3つのLEDがあります。1つは電源がオンであることを示すもので、**青色**に点灯します。他の2つのLEDはキャリアボードの動作状態を示すもので、それぞれ**緑色**と**白色**に点灯します。

#### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LEDs.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度の画像は[こちら](https://files.seeedstudio.com/wiki/102110497/LEDs.png)をクリックしてください。

## はじめに - 必要なハードウェア

Raspberry Pi CM4用デュアルギガビットイーサネットキャリアボードを使用する前に、以下のハードウェアを準備してください。

- Raspberry Pi CM4用デュアルギガビットイーサネットキャリアボード
- 16GB（またはそれ以上）のmicro-SDカード
- micro-SDカードリーダー
- コンピュータ（PC/Mac/Linux）
- 電源アダプタ（5V/3A）
- USB Type-Cケーブル
- USBシリアルコンバータ、イーサネットケーブル（オプション）

## はじめに - ソフトウェアセットアップ

### Raspberry Pi OSのフラッシュ

次に、**Raspberry Pi OS**を**micro-SDカード（非eMMCバージョンの場合）**または**eMMCストレージ（eMMCバージョンの場合）**にフラッシュする必要があります。これにより、Raspberry Pi Compute Module 4で動作するようになります。

#### micro-SDカードへのフラッシュ（CM4非eMMCバージョン）

eMMCを搭載していないCompute Module 4をお持ちの場合は、micro-SDカードを挿入してRaspberry Pi OSをフラッシュする必要があります。以下の手順に従ってください（使用しているオペレーティングシステムに応じて異なります）。

- **ステップ1.** **micro-SDカードリーダー**を使用してmicro-SDカードをコンピュータに挿入するか、ノートパソコンの**内蔵カードリーダー**を使用します。

- **ステップ2.** [このリンク](https://www.raspberrypi.org/software/)から**Raspberry Pi Imager**ソフトウェアをダウンロードします。

**注意:** **Windows、Mac、またはUbuntu**用を選択してダウンロードできます。

- **ステップ3.** Raspberry Pi Imagerソフトウェアを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ4.** **CHOOSE OS**をクリックして、最新バージョンの**Raspberry Pi OS（32-bit）**を選択します。

- **ステップ5.** **CHOOSE STORAGE**をクリックして、接続されたmicro-SDカードを選択します。

- **ステップ6.** 最後に、**WRITE**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

#### eMMCへのフラッシュ（CM4 eMMCバージョン）

eMMCを搭載したCompute Module 4をお持ちの場合は、直接eMMCストレージにRaspberry Pi OSをフラッシュできます。必要なドライバをインストールした後、CM4のUSB Type-CポートをPCに接続すると、外部ドライブとして表示されます。以下の手順に従ってください（使用しているオペレーティングシステムに応じて異なります）。

##### Windowsの場合

- **ステップ1.** 必要なドライバとブートツールをインストールするために、[このインストーラ](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)をダウンロードして実行します。

- **ステップ2.** プログラミングモードを有効にするために、**Boot**ピンと**GND**ピンの間にジャンパーワイヤを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ3.** USB Type-Cケーブルを介してキャリアボードをPCに接続します。

Windowsがハードウェアを検出し、必要なドライバをインストールします。

- **ステップ4.** 先ほどインストールした**rpiboot**ツールを検索して開きます。

- **ステップ5.** **ファイルエクスプローラー**を開くと、Compute Module 4のeMMCが**USBマスストレージデバイス**として表示されます。

- **ステップ6.** [このリンク](https://www.raspberrypi.org/software/)から**Raspberry Pi Imager**ソフトウェアをダウンロードします。

- **ステップ7.** Raspberry Pi Imagerソフトウェアを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ8.** **CHOOSE OS**をクリックして、最新バージョンの**Raspberry Pi OS（32-bit）**を選択します。

- **ステップ9.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します。

- **ステップ10.** 最後に、**WRITE**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

##### Mac/Linuxの場合

Gitを使用して**rpiboot**のソースコードを取得します。そのため、Gitがインストールされていることを確認してください。

- **ステップ1.** **ターミナル**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します。

```sh
sudo apt-get update
```

- **ステップ2.** 以下のコマンドで**Git**をインストールします。

```sh
sudo apt install git
```

- **ステップ3.** 日付が正しく設定されていない場合、Gitがエラーを出すことがあります。以下を入力して修正します。

```sh
sudo date MMDDhhmm
```

**注意:** **MM**は月、**DD**は日付、**hh**は時間、**mm**は分を表します。

- **ステップ4.** **usbboot**ツールリポジトリをクローンします。

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ5.** 以下を入力して**libusb**をインストールします。

```sh
sudo apt install libusb-1.0-0-dev
```

- **ステップ6.** usbbootツールをビルドしてインストールします。

```sh
make
```

- **ステップ7.** usbbootツールを実行し、接続を待機します。

```sh
sudo ./rpiboot
```

- **ステップ8.** プログラミングモードを有効にするために、**Boot**ピンと**GND**ピンの間にジャンパーワイヤを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ9.** USB Type-Cケーブルを介してキャリアボードをPCに接続します。

- **ステップ10.** [このリンク](https://www.raspberrypi.org/software/)から**Raspberry Pi Imager**ソフトウェアをダウンロードします。

- **ステップ11.** Raspberry Pi Imagerソフトウェアを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **ステップ12.** **CHOOSE OS**をクリックして、最新バージョンの**Raspberry Pi OS（32-bit）**を選択します。

- **ステップ13.** **CHOOSE STORAGE**をクリックして、接続されたeMMCドライブを選択します。

- **ステップ14.** 最後に、**WRITE**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

フラッシュプロセスが完了するまで数分お待ちください。

### Raspberry Pi OS にログインする

#### 方法 1: Wi-Fi 経由で SSH を使用する

**Wi-Fi 経由で SSH** を使用して Raspberry Pi OS にログインしたい場合は、以下の手順に従ってください。お使いのオペレーティングシステムに応じて手順を進めてください。

##### Windowsの場合

- **ステップ 1.** **micro-SDカードリーダー**を使用して、またはノートパソコンの**内蔵カードリーダー**を使用して、Raspberry Pi OS がインストールされた micro-SD カードをコンピュータに挿入します。

- **ステップ 2.** **メモ帳**を開き、以下を入力します。

```sh
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

**注意:** 国コード (country) は、ボードを使用している国の [ISO/IEC alpha2 コード](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) に設定してください。

- **ステップ 3.** `ファイル > 名前を付けて保存` をクリックします。

- **ステップ 4.** micro-SD カードの接続されたドライブ名に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/select_USB.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 5.** ファイル名を **wpa_supplicant.conf** と入力し、**保存するファイルの種類**を **すべてのファイル** に設定して **保存** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/wpa_supplicant.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 6.** **コマンドプロンプト**を開き、micro-SD カードに移動します。

```sh
例: 
C:\Users\user> F:
F:\>
```

- **ステップ 7.** micro-SD カード内にいる場合、以下を入力して空のファイル **SSH** を作成します。

```sh
echo > ssh
```

**注意:** これは Raspberry Pi OS で SSH を有効にするために行います。

- **ステップ 8.** PC から micro-SD カードを取り出し、Dual Gigabit Ethernet Carrier Board に挿入します。

- **ステップ 9.** USB Type-C ケーブルをキャリアボードの Type-C ポートに接続し、ケーブルのもう一方を電源アダプタに接続して電源を入れます。

- **ステップ 10.** [このリンク](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)から **Putty** をダウンロードしてインストールします。

**注意:** Putty は SSH および telnet クライアントで、これを使用してキャリアボードに SSH 経由で接続できます。

- **ステップ 11.** PC をキャリアボードに接続するために Putty を開きます。

- **ステップ 12.** **Connection Type** で **SSH** を選択します。

- **ステップ 13.** **Host Name** に **raspberrypi.local** を入力し、**Port** は **22** のままにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png" alt="pir" width="450" height="auto"/></p>

- **ステップ 14.** **Open** をクリックします。

- **ステップ 15.** Putty ウィンドウで以下のログイン情報を入力します。

```sh
- ユーザー名: pi
- パスワード: raspberry
```

- **ステップ 16.** Raspberry Pi OS に正常にログインできた場合、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Mac/Linuxの場合

- **ステップ 1.** **micro-SDカードリーダー**を使用して、またはノートパソコンの**内蔵カードリーダー**を使用して、Raspberry Pi OS がインストールされた micro-SD カードをコンピュータに挿入します。

- **ステップ 2.** **ターミナル**を開き、micro-SD カードに移動します。

```sh
例: 
cd /media/user/boot
```

**注意:** **/media/user/boot** の **user** を PC のユーザー名に置き換えてください。

- **ステップ 3.** micro-SD カード内にいる場合、**wpa_supplicant.conf** というファイルを作成して開きます。

```sh
nano wpa_supplicant.conf
```

- **ステップ 4.** ファイルに以下の内容を入力します。

```sh
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

**注意:** 国コード (country) は、ボードを使用している国の [ISO/IEC alpha2 コード](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) に設定してください。

- **ステップ 5.** キーボードで **Ctrl + x** を押してファイルを保存し、**y** を押して変更を確認し、**Enter** を押します。

- **ステップ 6.** **boot** ドライブ内にいる間に、以下を入力して空のファイル **SSH** を作成します。

```sh
touch ssh
```

**注意:** これは Raspberry Pi OS で SSH を有効にするために行います。

- **ステップ 7.** PC から micro-SD カードを取り出し、Dual Gigabit Ethernet Carrier Board に挿入します。

- **ステップ 8.** USB Type-C ケーブルをキャリアボードの Type-C ポートに接続し、ケーブルのもう一方を電源アダプタに接続して電源を入れます。

- **ステップ 9.** 再び PC 上で **ターミナル** を開き、以下を入力します。

```sh
ssh pi@raspberrypi.local
```

- **ステップ 10.** 以下のメッセージが表示されたら **yes** と入力します。

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 11.** パスワードを求められたら、以下を入力します。

```sh
raspberry
```

- **ステップ 12.** Raspberry Pi OS に正常にログインできた場合、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

#### 方法 2: Ethernet 経由で SSH を使用する

**Ethernet 経由で SSH** を使用して Raspberry Pi OS にログインしたい場合は、以下の手順に従ってください。お使いのオペレーティングシステムに応じて手順を進めてください。

##### Windowsの場合

- **ステップ 1.** **micro-SDカードリーダー**を使用して、またはノートパソコンの**内蔵カードリーダー**を使用して、Raspberry Pi OS がインストールされた micro-SD カードをコンピュータに挿入します。

- **ステップ 2.** **コマンドプロンプト**を開き、micro-SD カードに移動します。

```sh
例: 
C:\Users\user> F:
F:\>
```

- **ステップ 3.** micro-SD カード内にいる場合、以下を入力して空のファイル **SSH** を作成します。

```sh
echo > ssh
```

これは Raspberry Pi OS で SSH を有効にするための手順です。

- **ステップ 4.** PC から micro-SD カードを取り出し、Dual Gigabit Ethernet Carrier Board に挿入します。

- **ステップ 5.** USB Type-C ケーブルをキャリアボードの Type-C ポートに接続し、Ethernet ケーブルをキャリアボードの Ethernet ポートのいずれかに接続します。

- **ステップ 6.** Ethernet ケーブルのもう一方の端をルーターに接続し、Type-C ケーブルのもう一方の端を電源アダプターに接続して電源を入れます。

- **ステップ 7.** [このリンク](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)から **Putty** をダウンロードしてインストールします。

**注意:** Putty は SSH および telnet クライアントであり、これを使用してキャリアボードに SSH 経由で接続できます。

- **ステップ 8.** PC をキャリアボードに接続するために Putty を開きます。

- **ステップ 9.** **Connection Type** で **SSH** を選択します。

- **ステップ 10.** **Host Name** に **raspberrypi.local** と入力し、**Port** は **22** のままにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png" alt="pir" width="450" height="auto"/></p>

- **ステップ 11.** **Open** をクリックします。

- **ステップ 12.** Putty ウィンドウで以下のログイン情報を入力します。

```sh
- ユーザー名: pi
- パスワード: raspberry
```

- **ステップ 13.** Raspberry Pi OS に正常にログインできた場合、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Mac/Linux の場合

- **ステップ 1.** Raspberry Pi OS がインストールされた micro-SD カードを **micro-SD カードリーダー** を使用してコンピュータに挿入するか、ノートパソコンの **内蔵カードリーダー** を使用します。

- **ステップ 2.** **Terminal** を開き、micro-SD カードに移動します。

```sh
例: 
cd /media/user/boot
```

**注意:** **/media/user/boot** の **user** を PC のユーザー名に置き換えてください。

- **ステップ 3.** micro-SD カード内にいる場合、以下を入力して空のファイル **SSH** を作成します。

```sh
touch ssh
```

**注意:** これは Raspberry Pi OS で SSH を有効にするために行います。

- **ステップ 4.** PC から micro-SD カードを取り出し、Dual Gigabit Ethernet Carrier Board に挿入します。

- **ステップ 5.** USB Type-C ケーブルをキャリアボードの Type-C ポートに接続し、Ethernet ケーブルをキャリアボードの Ethernet ポートのいずれかに接続します。

- **ステップ 6.** Ethernet ケーブルのもう一方の端をルーターに接続し、Type-C ケーブルのもう一方の端を電源アダプターに接続して電源を入れます。

- **ステップ 7.** 再度 PC で **Terminal** を開き、以下を入力します。

```sh
ssh pi@raspberrypi.local
```

- **ステップ 8.** 以下のメッセージに対して **yes** と入力します。

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **ステップ 9.** パスワードを求められたら、以下を入力します。

```sh
raspberry
```

- **ステップ 10.** Raspberry Pi OS に正常にログインできた場合、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

#### 方法 3: USB to Serial Converter を使用する

##### Windows の場合

**USB to Serial Converter** を使用して、以下の手順で Raspberry Pi OS にログインできます。

- **ステップ 1.** Raspberry Pi OS がインストールされた micro-SD カードを **micro-SD カードリーダー** を使用してコンピュータに挿入するか、ノートパソコンの **内蔵カードリーダー** を使用します。

- **ステップ 2.** **File Explorer** を開き、接続された micro-SD カードに移動します。

- **ステップ 3.** **config.txt** ファイルを開き、最後に以下の行を追加します。

```sh
enable_uart=1
```

これは PC とキャリアボード間の UART 通信を有効にするためです。

- **ステップ 4.** `File > Save` をクリックして設定を保存します。

- **ステップ 5.** PC から micro-SD カードを取り出し、キャリアボードに戻します。

- **ステップ 6.** キャリアボードの **UART IO** に **4-Pin Male Header** をハンダ付けします。

- **ステップ 7.** USB to Serial Converter のジャンパーワイヤーをキャリアボードの **UART IO ピンヘッダー** に以下のように接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 8.** USB to Serial Converter を PC に接続します。

- **ステップ 9.** Windows の検索ボックスに **Device Manager** と入力して **Device Manager** を開きます。

- **ステップ 10.** **Ports (COM & LPT)** のドロップダウン矢印をクリックし、接続されたシリアルポートの名前を確認します (例: **COM42**)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/com-show.png" alt="pir" width="320" height="auto"/></p>

- **ステップ 11.** [このリンク](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)から **Putty** をダウンロードしてインストールします。

**注意:** Putty は SSH および telnet クライアントであり、これを使用してキャリアボードに SSH 経由で接続できます。すでに Putty をインストールしている場合、このステップはスキップできます。

- **ステップ 12.** PC をキャリアボードに接続するために Putty を開きます。

- **ステップ 13.** **Connection Type** で **Serial** を選択します。

- **ステップ 14.** 以下のように設定を構成します:

  - Serial line: COM4 (使用する COM ポートを選択)
  - Speed: 115200

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/Putty_Serial_1.png" alt="pir" width="450" height="auto"/></p>

- **ステップ 15.** **Open** をクリックします。

- **ステップ 16.** Putty ウィンドウで以下のログイン情報を入力します。

```sh
- ユーザー名: pi
- パスワード: raspberry
```

- **ステップ 17.** Raspberry Pi OS に正常にログインできた場合、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Mac/Linux の場合

**USB to Serial Converter** を使用して、以下の手順で Raspberry Pi OS にログインできます。

- **ステップ 1.** Raspberry Pi OS がインストールされた micro-SD カードを、**micro-SD カードリーダー**を使用してコンピュータに接続するか、ノートパソコンの**内蔵カードリーダー**を使用してコンピュータに挿入します。

- **ステップ 2.** **boot** ドライブを開き、接続された micro-SD カードに移動します。

- **ステップ 3.** **config.txt** ファイルを開き、以下の行を末尾に追加します。

```sh
enable_uart=1
```

**注意:** これは PC とキャリアボード間の UART 通信を有効にするためです。

- **ステップ 4.** `ファイル > 保存` をクリックして設定を保存します。

- **ステップ 5.** micro-SD カードを PC から取り出し、キャリアボードに再挿入します。

- **ステップ 6.** キャリアボードの **UART IO** に **4ピンオスヘッダー** を以下のようにハンダ付けします。

- **ステップ 7.** USB からシリアルコンバータのジャンパーワイヤーをキャリアボードの **UART IO ピンヘッダー** に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 8.** USB からシリアルコンバータを PC に接続します。

- **ステップ 9.** Mac/Linux で **ターミナルウィンドウ** を開きます。

- **ステップ 10.** 以下を入力して **パッケージリスト** を更新します。

```sh
sudo apt-get update
```

- **ステップ 11.** 以下を入力して **minicom** をインストールします。

```sh
sudo apt-get install minicom
```

- **ステップ 12.** ターミナルで以下を入力して接続されたシリアルデバイスを確認します。

```sh
dmesg | grep tty
```

> 例:<br />
  [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device

- **ステップ 13.** 以下を入力してシリアルデバイスに接続します。

```sh
minicom -D /dev/ttyACM0 -b 115200
```

**注意:** ボーレートは 115200 に設定されています。

- **ステップ 14.** 上記のハードウェア接続後、壁の電源ソケットから電源をオンにしてキャリアボードを起動します。

これで Raspberry Pi OS に正常にログインできました。

#### 方法 4: キーボード、マウス、ディスプレイを使用する

**HDMI ディスプレイ、micro-HDMI からフルサイズ HDMI ケーブル、キーボード、マウス**をお持ちの場合、それらをデュアルギガビットイーサネットキャリアボードに接続して Raspberry Pi OS にログインできます。

(図を描く - あまり重要ではありません)

### USB ポートの設定

デフォルトでは、**2つの USB 3.0 ポート**は CM4 の電力を節約するために**無効**になっており、すぐには使用できません。ただし、**USB 3.0 9ピンヘッダー**は初期状態で**使用可能**です。

2つの USB 3.0 ポートを有効にするには、**/boot** ディレクトリ内の **config.txt** ファイルの末尾に以下の行を追加する必要があります。

これを行う方法は2つあります：

#### 方法 1: PC に接続された micro-SD カードからファイルを変更する

- **ステップ 1.** Raspberry Pi OS がインストールされた micro-SD カードをコンピュータに挿入します。

- **ステップ 2.** **ファイルエクスプローラー**を開き、接続された micro-SD カードに移動します。

- **ステップ 3.** **config.txt** ファイルを開き、以下の行を末尾に追加します。

```sh
dtoverlay=dwc2,dr_mode=host
```

- **ステップ 4.** ファイルを保存します。

#### 方法 2: キャリアボードからファイルを変更する

- **ステップ 1.** micro-SD カードをキャリアボードに挿入し、電源をオンにします。

- **ステップ 2.** 前述のいずれかの方法を使用して Raspberry Pi OS にログインします。

- **ステップ 3.** 以下を入力して **boot** ディレクトリに移動します。

```sh
cd /boot
```

- **ステップ 4.** **nano テキストエディタ**を使用して **config.txt** を開きます。

```sh
sudo nano config.txt
```

- **ステップ 5.** 以下の行を末尾に追加します。

```sh
dtoverlay=dwc2,dr_mode=host
```

- **ステップ 6.** キーボードで **Ctrl + X** を押し、**Y** を押してから **Enter** を押してファイルを保存します。

### USB ポート速度テスト

USB ポートの速度をテストする場合、Raspberry Pi OS ターミナルで以下のコマンドを実行できます。

```sh
sudo dd if=/dev/sda1 of=/dev/null bs=512k count=5000
```

出力は以下のようになります。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/USB_test.png" alt="pir" width="900" height="auto"/></p>

**注意:** **if=/dev/sda1** の **sda1** は接続された USB ドライブです。以下のように **lsblk** を入力して確認できます。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/find_usb.png" alt="pir" width="700" height="auto"/></p>

### イーサネットポートの設定

CM4 モジュールに Raspberry Pi OS をフラッシュすると、**Gigabit Ethernet PHY** に接続されたイーサネットポート（右側のポート）でのみフルギガビット速度（1Gbps）を得ることができます。このポートは **Broadcom BCM54210PE** に基づいています。一方、**Microchip の LAN7800 USB 3.0 to GbE (Gigabit Ethernet Bridge)** に接続されたポート（左側のポート）は、フル速度の 1Gbps を提供せず、速度が大幅に低下します。これは、Raspberry Pi コアの lan78xx ドライバーが最新ではないためです。

以下の手順に従ってスクリプトをインストールし、この問題を修正してください：

- **ステップ 1.** Raspberry Pi OS ターミナルウィンドウを開きます。

- **ステップ 2.** 以下を入力してリポジトリをダウンロードします。

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

- **ステップ 3.** リポジトリディレクトリに移動します。

```sh
cd seeed-linux-dtoverlays
```

- **ステップ 4.** 以下を入力してスクリプトをインストールします。

```sh
sudo ./scripts/cm4_lan7800.sh
```

- **ステップ 5.** キャリアボードを再起動します。

```sh
sudo reboot
```

- **ステップ 6.** 以下を入力してインストール状況を確認します。

```sh
dmesg | grep lan
```

以下の出力が表示された場合、ドライバーが正常に動作しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN78_Driver.png" alt="pir" width="900" height="auto"/></p>

**注意:** 使用方法のヘルプにアクセスする場合は、以下を入力してください。

```sh
sudo ./cm4_lan7800.sh -h
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN78_help.png" alt="pir" width="900" height="auto"/></p>

### SD カード速度テスト

Raspberry Pi OS ターミナルウィンドウにアクセスし、以下のコマンドを実行します。

```sh
sudo dd if=/dev/mmcblk0p2 of=/dev/null bs=512k count=5000
```

出力は以下のようになります。

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/SD_Test.png" alt="pir" width="900" height="auto"/></p>

### DSIおよびCSIコネクタの設定

DSIインターフェースを介してディスプレイを接続し、CSIインターフェースを介してカメラをキャリアボードに接続したい場合は、以下の手順に従ってください。

- **ステップ1.** ディスプレイをDSI1ポートに接続し、カメラをCSI1ポートに接続します。接続方法は以下の通りです。

- **ステップ2.** Raspberry Pi OSのターミナルウィンドウ内で以下を実行して、ディスプレイとカメラを有効にします。

```sh
sudo wget https://datasheets.raspberrypi.org/cmio/dt-blob-disp1-cam1.bin -O /boot/dt-blob.bin
```

**注意:** ここでの設定方法は、[cmio-display](https://github.com/raspberrypi/documentation/blob/master/hardware/computemodule/cmio-display.md)および[rpistill](https://www.raspberrypi.org/documentation/configuration/camera.md)から選択されています。

- **ステップ3.** 以下のコマンドを実行して、カメラで写真を撮影し、ディスプレイでプレビューします。

```sh
raspistill -v -o test.jpg 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/DSI_CSI.png" alt="pir" width="850" height="auto"/></p>

### I2Cの設定

#### ハードウェアセットアップ

**I2Cデバイス**を**FPCインターフェース**に接続したい場合は、以下の接続を行ってください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_I2C.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

#### ソフトウェアセットアップ

**8ピンFPCコネクタ**にI2Cデバイスを接続し、Raspberry Pi OSを使用して制御できます。

- **ステップ1.** **Raspberry Piソフトウェア設定ツール**を開きます。

```sh
sudo raspi-config
```

- **ステップ2.** `Interface Options > I2C`に移動し、**Enter**を押します。

- **ステップ3.** **Yes**を選択してI2Cを有効にします。

- **ステップ4.** キャリアボードを**再起動**します。

```sh
sudo reboot
```

### I2Cデバッグ

- **ステップ1.** キャリアボードの**8ピンFPCコネクタ**にI2Cデバイスを接続します。

- **ステップ2.** 利用可能なすべてのI2Cバスをリストします。

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/I2C_Detect.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ3.** 標準アドレスを即座にスキャンします（I2Cバス1（i2c-1）を使用）。

```sh
i2cdetect -y 1
```

**注意:** 1はI2Cバス番号を表します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/detect.png" alt="pir" width="1000" height="auto"/></p>

上記の画像は、I2Cアドレス0x5cでデバイスが検出されたことを示しています。

- **ステップ4.** 以下を入力してレジスタの内容を読み取ります。

```sh
i2cget -f -y 1 0x5c 0x0f
```

- -yはインタラクティブモードを無効にします。デフォルトでは、i2cdetectはI2Cバスを操作する前にユーザーの確認を待ちます。このフラグを使用すると、直接操作を実行します。
- 1はI2Cバス番号を表します。
- 0x5cはI2Cデバイスアドレスを表します。
- 0x0fはメモリアドレスを表します。

出力は以下のようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/i2cget.png" alt="pir" width="400" height="auto"/></p>  

- **ステップ5.** 以下を入力してレジスタにデータを書き込みます。

```sh
i2cset -y 1 0x5c 0x11 0x10
```

- -yはインタラクティブモードを無効にします。デフォルトでは、i2cdetectはI2Cバスを操作する前にユーザーの確認を待ちます。このフラグを使用すると、直接操作を実行します。
- 1はI2Cバス番号を表します。
- 0x5cはI2Cデバイスアドレスを表します。
- 0x11はメモリアドレスを表します。
- 0x10はメモリアドレス内の特定の内容を表します。
<br />

- **ステップ6.** 以下を入力してすべてのレジスタ値を読み取ります。

```sh
i2cdump -y 1 0x5c
```

- -yはインタラクティブモードを無効にします。デフォルトでは、i2cdetectはI2Cバスを操作する前にユーザーの確認を待ちます。このフラグを使用すると、直接操作を実行します。
- 1はI2Cバス番号を表します。
- 0x5cはI2Cデバイスアドレスを表します。

出力は以下のようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/i2cdump.png" alt="pir" width="1000" height="auto"/></p>  

### SPIの設定

#### ハードウェアセットアップ

**SPIデバイス**を**FPCインターフェース**に接続したい場合は、以下の接続を行ってください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_SPI.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

#### ソフトウェアセットアップ

**8ピンFPCコネクタ**にSPIデバイスを接続し、Raspberry Pi OSを使用して制御できます。

- **ステップ1.** **Raspberry Piソフトウェア設定ツール**を開きます。

```sh
sudo raspi-config
```

- **ステップ2.** `Interface Options > SPI`に移動し、**Enter**を押します。

- **ステップ3.** **Yes**を選択してSPIを有効にします。

- **ステップ4.** キャリアボードを**再起動**します。

```sh
sudo reboot
```

### SPIデバッグ

- **ステップ1.** キャリアボードの**8ピンFPCコネクタ**にSPIデバイスを接続します。

- **ステップ2.** 利用可能なすべてのSPIデバイスをリストします。

```sh
ls /dev/spi*
```

出力は以下のようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **ステップ3.** micro-SDカードをPCに挿入します。

- **ステップ4.** **boot**ドライブに移動します。

- **ステップ5.** [このファイル](https://files.seeedstudio.com/wiki/102110497/spidev_test)をダウンロードして**boot**ドライブに移動します。

- **ステップ6.** micro-SDカードをPCから取り外し、キャリアボードに挿入します。

- **ステップ7.** キャリアボードをオンにして**boot**ディレクトリに移動します。

```sh
cd /boot
```

- **ステップ8.** ジャンパーワイヤを使用して**GPIO 10 (Pin 6)**と**GPIO 9 (Pin 7)**をショートします。

**注意:** ここでは**MOSI**と**MISO**ピンを短絡します。

- **ステップ9.** 以下のSPIテストツールを実行します。

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

以下の出力が表示されれば、SPIは正常に動作しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

## リソース

- **[PDF]** [Raspberry Pi CM4用デュアルギガビットイーサネットキャリアボードの回路図](https://files.seeedstudio.com/wiki/102110497/RapberryPi-CM4-Dual-GbE-Carrier-Board-V1.1_SCH.pdf)

- **[PDF]** [Raspberry Pi Compute Module 4 データシート](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Web Page]** [Raspberry Pi 公式ドキュメント](https://www.raspberrypi.org/documentation/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>