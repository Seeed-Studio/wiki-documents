---
description: NPi i.MX6ULL 開発ボード - Linux SBC
title: NPi i.MX6ULL 開発ボード - Linux SBC
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/NPi-i.MX6ULL-Dev-Board-Linux-SBC
last_update:
  date: 05/15/2025
  author: jianjing Huang 
---


<!-- ---
name: NPi i.MX6ULL 開発ボード - Linux SBC
category: シングルボードコンピュータ 
bzurl: https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-eMMC-Version-p-4221.html
bzurl: https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-NAND-Version-p-4220.html
wikiurl:
sku: 102991306(emmc)
sku: 102991306(NANO)
--- -->

# NPi i.MX6ULL 開発ボード - Linux SBC

 ![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/preview_3.jpg)

NPi i.MX6ULL 開発ボードは、強力な i.MX6ULL を中心に構築された低消費電力の Linux シングルボードコンピュータです。オンボードの 512MB DDR3L と 512MB NAND に加え、豊富なインターフェースと I/O リソースが魅力です。

同時に、豊富なソフトウェアリソースも提供しています。[こちら](https://github.com/Seeed-Studio/image-builder)で debian/ubuntu/yocto およびシステムディストリビューションイメージを見つけることができます。また、多くの Pi ハットのカーネルとアプリケーション層も提供しています。そのため、お気に入りの Pi ハットをこのボードに直接接続して使用することができます。SeeedStudio のほとんどの Pi ハットは NPi i.MX6ULL 開発ボードと互換性があります（ただし、NPi i.MX6ULL 開発ボード 6-Mic Circular Array Kit for Raspberry Pi および NPi i.MX6ULL 開発ボード 4-Mic Linear Array Kit for Raspberry Pi を除く）。また、Grove ベースの PI ハットを使用して、Grove モジュールを使ったプロトタイピングも可能です。最新のソフトウェアアップデートについては、Github をフォローしてください。

このボード全体は、コアモジュールとブレイクアウトボードで構成されており、すべてのコンポーネントは産業用グレードです。

コアモジュールは、i.MX6ULL コアと 512MB DDR3L、512MB NAND FLASH（または 8GB eMMC）で構成されています。実際、フラッシュの種類に応じて、NPi i.MX6ULL 開発ボードは 2 つの異なるバージョンに分けられます。

ブレイクアウトボードには、さまざまな周辺インターフェースや入出力、IO 拡張が含まれています。これには、2 つの 100M イーサネットポート、1 つの USB ホストポートと 1 つの USB OTG ポート、1 つの 24 ビット RGB LCD インターフェース、2x 40 ピン I/O 拡張ヘッダーなどが含まれますが、これらに限定されません。このような豊富なリソースは、さまざまな制御ニーズを満たします。これらの特徴により、産業用制御、鉄道輸送、ドローン制御、オーディオ出力などに最適なソリューションとなります。

NPi i.MX6ULL 開発ボード - 8G eMMC バージョン:

[![今すぐ購入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-eMMC-Version-p-4221.html)

NPi i.MX6ULL 開発ボード - 512MB NAND FLASH バージョン:

[![今すぐ購入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-NAND-Version-p-4220.html)

## 特徴

- Arm-Cortex-A7 コアプロセッサ
- 産業用グレード
- 低消費電力
- debian/ubuntu/yocto OS 対応
- Raspberry Pi 40 ピン互換キャリアボード

## 仕様

|項目|値|
|----|------|
|周辺インターフェース| 1 x USBホスト<br />2 x 100Mイーサネットインターフェース<br />1 x FPC LCDインターフェース（24ビットRGBおよびI2Cタッチ制御を含む）<br />1 x SDカードインターフェース（基板の裏側）<br />1 x UARTインターフェース<br />2 x 40ピンヘッダー|
|オンボードLED|3 x ユーザー定義LED<br />1 x 電源LED<br />1 x ハートビートLED|
|電源|1 x DCインターフェース（5V±2%）<br />1 x USB Type-C|
|ボタン|4 x キー|
|スイッチ|1 x 8桁DIPスイッチ|
|RTC|1 x RTCバッテリースロット|
|CPU|1 x NXP MCIMX6Y2CVM08AB|
|周波数|最大800MHz|
|DDR3L|オンボード512MB|
|eMMC|オンボード8GB（NPi i.MX6ULL Dev Board - 8G eMMCバージョン）|
|NAND|オンボード512M（NPi i.MX6ULL Dev Board - 512MB NAND FLASHバージョン）|
|寸法|61mm x 100mm|
|動作温度（NPi i.MX6ULL Dev Board - 8G eMMCバージョン）| -20℃ ~ 80℃ |
|動作温度（NPi i.MX6ULL Dev Board - 512MB NAND FLASHバージョン）| -40℃ ~ 80℃ |

:::note
ここでの動作温度はコアモジュールを特に指しており、ブレイクアウトボードの温度範囲は狭くなります。ブレイクアウトボードの具体的な温度範囲はテストしていません。
:::

## アプリケーション

- 産業用途（CAN-Ethernetゲートウェイなど）
- 家電製品（冷蔵庫、Type-C波形など）
- スマートホームデバイス

## ハードウェア概要

### インターフェース

 ![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/NAND-over.jpg)

**100MイーサネットインターフェースとLED**: 2 x 100Mイーサネットインターフェース

**5V電源ジャック**: 5V ± 2%の単一電源を使用

**過電圧保護インジケーター**: このランプが点灯している場合、電圧が範囲外であることを示します

**USBデバイスタイプC**: USB Type-Cインターフェース

**UART TTL**: メインコントローラーのシリアルポートから直接引き出し

**ハートビートLED**: システムが稼働するとハートビートライトが連続して点滅します

**電源LED**: ボードに電源を入れるとLEDが点灯します

**Raspberry Pi互換ヘッダー**: UART、I2C、SPI、PWMなどのRaspberry Pi互換IOインターフェースを含む

**LCD FPCインターフェース**: 24ビットRGBインターフェースおよびI2Cタッチスクリーン制御インターフェースを含む

**リセット＆ユーザーボタン**: リセット、ON/OFF、通常ボタン、モード切替ボタンの合計4つのボタンがあります

**USBホストタイプA**: USBホストインターフェース

**8桁DIPスイッチ**: NAND、eMMC、SD、およびUSBブートモードの切り替えをサポートする8ビットDIPスイッチ

**追加GPIOヘッダー**: 74LV595PWチップを含み、4チャネルIOを8チャネルに拡張

**ユーザーLED**: プログラム可能なLED

**RTCバッテリースロット**: CR1220バッテリーを接続してRTCに電力を供給可能

**Type-C SDカードスロット**: Type-C SDカードスロット、SDカード3.0をサポート

### ピン機能

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/eMMC-c.jpg)

詳細情報は[PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665)をご覧ください。

## ソフトウェアの紹介

### 準備作業

**必要な材料**

- NPi i.MX6ULL Dev Board - Linux SBC NANDバージョン（またはeMMCバージョン）
- 4GB（またはそれ以上のメモリ）のSDカードとSDカードリーダー
- PCまたはMac
- [USB To Uartアダプター](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（オプション）
- USB Type-Cケーブル

:::caution
USBケーブルを優しく差し込んでください。そうしないとインターフェースを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、<a href="https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"><strong>こちら</strong></a>をクリックして購入できます。
:::

**ミラーインストール**

NPi i.MX6ULL Dev Board - Linux SBCイメージをSDカードからインストールして起動する必要があります。NPi i.MX6ULL Dev Board - Linux SBCを起動する方法は2つあります。SDカードから起動するか、eMMC（またはNAND）から起動するかです。

**A. SDカードから起動**

- **ステップ1.** 最新の[ファームウェア](https://files.seeedstudio.com/linux/NPi+i.MX6ULL/imx6ull-debian-buster-console-armhf-latest-2gb.img.xz)を選択します。

- **ステップ2.** SDカードリーダーを使用してSDカードをPCまたはMacに接続します。4GB以上のメモリを持つSDカードが必要です。

- **ステップ3.** <a href="https://etcher.io/">Etcher</a>をダウンロードし、Etcherを使用して```*.img.xz```ファイルを直接SDカードに書き込みます。または、```*.img.xz```ファイルを```*.img```ファイルに解凍し、別のミラー書き込みツールを使用してSDカードに書き込みます。
<br />
<br />プラスアイコンをクリックして新しくダウンロードしたイメージファイルを追加すると、ソフトウェアが挿入したSDカードを自動的に選択します。その後、Flash!をクリックして書き込みを開始します。完了まで約10分かかります。

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/etcher.png)

- **ステップ4.** イメージをSDカードに書き込んだ後、SDカードをNPi i.MX6ULL Dev Board - Linux SBCに挿入します。8桁DIPスイッチを2-5-8モードに設定してSDカードからの起動を有効にします。

- **ステップ5.** USB Type-Cポートを使用してボードに電力を供給します。書き込み中にSDカードを取り出さないでください。NPi i.MX6ULL Dev Board - Linux SBCはSDカードから起動し、ボード上のPWRおよびハートビートLEDが点灯しているのが確認できます。

:::note
ハートビートLEDが点滅しない場合、起動に失敗したことを意味します。イメージが正しくインストールされているか確認してください。
:::

**B. eMMC（NAND）カードから起動**

- **ステップ1.** 初めてNPi i.MX6ULL Dev Boardを起動する場合、手順は**A. SDカードから起動**と同じです。

- **ステップ2.** `fire-config`でP22を選択してフラッシュブートを有効にし、その後再起動します。

```bash
sudo fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/flasher.png)

- **ステップ3.** NPi i.MX6ULL Dev Board上のLEDが連続して点滅するのを待ちます。LEDが連続して点滅する場合、eMMC（またはNAND）の書き込みが成功したことを示します。

- **ステップ4.** 電源を切り、SDカードを取り外します。

- **ステップ5.** 8桁DIPスイッチをEMMC（2-4-5-7）またはNAND（2-3-6）に設定し、再起動します。

**シリアルコンソール**

これでNPi i.MX6ULL Dev Board - Linux SBCが起動できるようになりました。コンソールを介してLinuxシステムにアクセスし、WiFiの設定などを行うことができます。
<!-- コンソールを取得する方法は2つあります： -->

<!-- - A. OTG USBポート - ボード上でLinuxシステムが稼働している必要があります -->

- B. UARTポート  
  - これはコンソールにアクセスするための難しい方法ですが、低レベルの問題をデバッグする際に使用できます。

<!-- **A. OTG経由の接続**

- **ステップ 1.** Type-C USBケーブルを用意してください。このケーブルがデータケーブル（電源供給専用ケーブルではない）であることを確認してください。Type-C USB端をNPi i.MX6ULL開発ボードのType-C USBポートに接続し、もう一方の端をコンピュータに接続します。

- **ステップ 2.** コンピュータでシリアルポートが認識されているか確認します：

    - Windows: デバイスマネージャを確認し、新しいシリアルデバイスが```COMx```（xは増加する番号）として表示されます。
    - Linux: `ls /dev/ttyACM*`を実行し、```/dev/ttyACMx```（xは使用したUSBポートに応じて変化）を確認します。
    - Mac: `ls /dev/cu.usb*`を実行し、```/dev/cu.usbmodem14xx```（xxは使用したUSBポートに応じて変化）を確認します。

- **ステップ 3.** お気に入りのシリアルデバッグツールを使用してシリアルポートに接続します。シリアル設定は以下の通りです：115200ボーレート、8ビット、パリティなし、ストップビット1、フロー制御なし。例：

    - Windows: [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)を使用し、```Serial```プロトコルを選択し、NPi i.MX6ULL開発ボードの正しいCOMポートを入力、```115200```ボーレート、8ビット、パリティなし、ストップビット1、フロー制御なしを設定します。
    - Linux: USB To TTLアダプタに応じて、```screen /dev/ttyACM0(,1, ...) 115200```または```screen /dev/ttyUSB0(,1, ...) 115200```を使用します。
    - Mac: USB To TTLアダプタに応じて、```screen /dev/cu.usbserial1412(,1422, ...) 115200```または```screen /dev/cu.usbmodem1412(,1422, ...) 115200```を使用します。

- **ステップ 4.** デフォルトのユーザー名は```debian```、パスワードは```temppwd```です。 -->

**B. UARTポート経由の接続**

このセクションでは、USB To TTLアダプタを使用してコンピュータからNPi i.MX6ULL開発ボードのUARTポートに接続する方法を説明します。

- **ステップ 1.** UARTポートとPC/MacをUSB To TTLアダプタで接続します。USB To TTLアダプタをお持ちでない場合は、[こちら](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)から購入できます。

- **ステップ 2.** 以下のシリアルデバッグツールを使用して115200ボーレートで接続します：
  - Windows: [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)を使用し、```Serial```プロトコルを選択し、NPi i.MX6ULL開発ボードの正しいCOMポートを入力、115200ボーレート、8ビット、パリティなし、ストップビット1、フロー制御なしを設定します。
  - Linux: USB To TTLアダプタに応じて、```screen /dev/ttyACM0(,1, ...) 115200```または```screen /dev/ttyUSB0(,1, ...) 115200```を使用します。
  - Mac: USB To TTLアダプタに応じて、```screen /dev/cu.usbserial1412(,1422, ...) 115200```または```screen /dev/cu.usbmodem1412(,1422, ...) 115200```を使用します。

- **ステップ 3.** デフォルトのユーザー名は```debian```、パスワードは```temppwd```です。

- **ステップ 4.** USB To TTLアダプタをお持ちでない場合は、Arduinoを使用することもできます。Arduinoを使用する場合、ジャンパーワイヤの一端をArduinoのRESETピンに、もう一端をGNDピンに接続します。これにより、ArduinoのATMEGA MCUをバイパスし、ArduinoをUSB To TTLアダプタとして使用できます。ビデオチュートリアルは[こちら](https://www.youtube.com/watch?v=qqSLwK1DP8Q)をご覧ください。次に、ArduinoのGNDピンをNPi i.MX6ULL開発ボードのUARTポートのGNDピンに接続します。ArduinoのRxピンをUARTポートのRxピンに、TxピンをUARTポートのTxピンに接続します。最後に、ArduinoをArduinoのUSBケーブルを使用してPC/Macに接続します。次のコマンドを入力して、MacまたはLinux PCがArduinoを認識しているか確認します：

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

以下のような出力が得られるはずです：

```
/dev/cu.usbmodem14XX (Macの場合、XXは使用したUSBポートに応じて変化)
/dev/ttyACMX (Linuxの場合、Xは使用したUSBポートに応じて変化)
```

その後、上記の手順に従って、このシリアル接続を介してNPi i.MX6ULL開発ボードに接続してください。

### ピン制御

このセクションでは、NPi i.MX6ULL開発ボードのピンをシェルを使用して制御する方法を説明します。コマンドを実行するには、root権限が必要です。

```bash
su root
username root password root
```

#### GPIO

このセクションでは、Linux GPIOサブシステムドライバに関連するアプリケーション層プログラムの制御原理を説明します。ここでは、Grove - Buzzerを制御する方法を例に説明します。

**必要な材料**

- NPi i.MX6ULL開発ボード - Linux SBC NANDバージョン（またはeMMCバージョン）
- [Grove - 4ピンメスジャンパーからGrove 4ピン変換ケーブル](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer.html)

- **ステップ 1.** GPIO 19を/sys/class/gpioでエクスポートするよう設定します。

```
echo 19 > /sys/class/gpio/export
```

NPi i.MX6ULL開発ボード上のGPIO 19の位置は、[PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665)を参照してください。取得したピン番号はGPIOx_IOnであり、以下の式を使用してGPIOのインデックスに変換する必要があります。

```
index = GPIO1_IO19 = (1-1)*32 + 19 = 19
index = GPIO4_IO20 = (4-1)*32 + 20 = 116
```

- **ステップ 2.** Grove - BuzzerをGrove - 4ピンメスジャンパーからGrove 4ピン変換ケーブルを使用してNPi i.MX6ULL開発ボードのGPIO 19に接続します。

- **ステップ 3.** GPIO 19を出力モードに設定します。

```
echo out > /sys/class/gpio/gpio19/direction
```

- **ステップ 4.** GPIO 19をハイに設定します。

```
echo 1 > /sys/class/gpio/gpio19/value
```

最後に、Grove - Buzzerが音を鳴らすのが聞こえるはずです。また、GPIOのsysfsに関する詳細情報は[こちら](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt)をご覧ください。

#### 入力

このセクションでは、Linux入力サブシステムドライバー関連のアプリケーション層プログラムの制御原理について説明します。ここでは、NPi i.MX6ULL Dev Boardの`KEY Button`を使用して、その使い方を説明します。

**必要な材料**

- NPi i.MX6ULL Dev Board - Linux SBC NANDバージョン（またはeMMCバージョン）

**ソフトウェア**

- **ステップ 1.** `evtest`をインストールして`KEY Button`の状態を取得します。

```
apt install evtest -y
```

- **ステップ 2.** `/dev/input/by-path`に`KEY Button`が存在するか確認します。

```
root@npi:~# ls -lh /dev/input/by-path
total 0
lrwxrwxrwx 1 root root 9 Feb 14  2019 platform-gpio-keys-event -> ../event0
```

この結果が得られない場合は、ドライバツリーを調整する必要があります。

- **ステップ 3.** `evtest`を使用して`KEY Button`の状態を取得します。NPi i.MX6ULL Dev Boardには異なる機能を制御する4つのボタンがありますが、ここでは`KEY Button`のみを制御します。

```
root@npi:~# evtest
No device specified, trying to scan all of /dev/input/event*
Available devices:
/dev/input/event0:      gpio-keys
Select the device event number [0-0]: 0
Input driver version is 1.0.1
Input device ID: bus 0x19 vendor 0x1 product 0x1 version 0x100
Input device name: "gpio-keys"
Supported events:
  Event type 0 (EV_SYN)
  Event type 1 (EV_KEY)
    Event code 11 (KEY_0)
Properties:
Testing ... (interrupt to exit)
Event: time 1583478811.552488, type 1 (EV_KEY), code 11 (KEY_0), value 1
Event: time 1583478811.552488, -------------- SYN_REPORT ------------
Event: time 1583478811.752195, type 1 (EV_KEY), code 11 (KEY_0), value 0
Event: time 1583478811.752195, -------------- SYN_REPORT ------------
```

最終的に、上記の情報が得られます。

#### UART

このセクションでは、シリアルポートと端末機器の基本的な使用方法について説明します。ここでは、uart3を制御してその使い方を説明します。

**必要な材料**

- NPi i.MX6ULL Dev Board - Linux SBC NANDバージョン（またはeMMCバージョン）
- PCまたはMac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)

**ソフトウェア**

- **ステップ 1.** `fire-config`でP17を選択してuart3を有効化します。

```
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/fire-config-uart3-enable.png)

有効化に成功すると、以下のコマンドが得られます。

```
root@npi:~# ls /dev/ttymxc2
/dev/ttymxc2
```

- **ステップ 2.** `stty`を使用してuart3を設定します。

```
stty -F /dev/ttymxc2 ispeed 115200 ospeed 115200
```

- **ステップ 3.** [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665)を参照して、NPi i.MX6ULL Dev Boardのuart3のピン番号を確認します。

- **ステップ 4.** USB To TTL Adapterを使用して、uart3をPC/Macに接続します。USB To TTL Adapterを持っていない場合は、[こちら](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)から購入できます。

- **ステップ 5.** 以下のシリアルデバッグツールを使用して、115200ボーで通信します：
  - Windows: [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)を使用し、```Serial```プロトコルを選択し、NPi i.MX6ULL Dev Board - Linux SBCの正しいCOMポートを入力、115200ボー、8ビット、パリティなし、ストップビット1、フロー制御なしを設定します。
  - Linux: USB To TTL Adapterに応じて、```screen /dev/ttyACM0(,1,など) 115200```または```screen /dev/ttyUSB0(,1,など) 115200```を使用します。
  - Mac: USB To TTL Adapterに応じて、```screen /dev/cu.usbserial1412(,1422,など) 115200```または```screen /dev/cu.usbmodem1412(,1422,など) 115200```を使用します。

- **ステップ 6.** 以下のコマンドを使用してデータの送受信をテストします：

```
echo seeedstduio > /dev/ttymxc2
```

最終的に、接続が成功すると、PUTTYで「seeedstduio」という文字列が表示されます。

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/putty_recive.png)

#### I2C

このセクションでは、Linux i2cドライバー関連のアプリケーション層プログラムの制御原理について説明します。ここでは、i2c1とGrove - Barometer Sensor (BMP280)を使用してその使い方を説明します。

**必要な材料**

- NPi i.MX6ULL Dev Board - Linux SBC NANDバージョン（またはeMMCバージョン）
- [Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - BME280 Environmental Sensor (Temperature Humidity Barometer)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)

**ソフトウェア**

**ステップ 1.** `apt`を使用してi2c-toolsをインストールします。

```
apt install i2c-tools -y
```

**ステップ 2.** [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665)を参照して、NPi i.MX6ULL Dev BoardのI2C1のピン番号を確認します。

**ステップ 3.** Grove - BME280をGrove - 4 pin Female Jumper to Grove 4 pin Conversion Cableを使用してNPi i.MX6ULL Dev BoardのI2C1に接続します。

**ステップ 4.** `i2cdetect`を使用してGrove - BME280のI2Cアドレスを検出します。0はi2c1を意味するため、i2c2を検出する場合は`i2cdetect -y 1`を使用します。

```
root@npi:~# i2cdetect -y 0
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- 77
```

これで、Grove - BME280のI2Cアドレスが0x77であることが確認できます。

**ステップ 5.** `i2cget`を使用してGrove - BME280のIDを取得します。

```
root@npi:~# i2cget -y 0 0x77 0xD0
0x58
```

最終的に、Grove - BME280のIDである0x58を取得できます。Grove - BME280に関する詳細情報は、[wiki](https://wiki.seeedstudio.com/ja/Grove-Barometer_Sensor-BME280/)を参照してください。また、i2c-toolの使用方法については[リンク](https://www.mankier.com/package/i2c-tools)を参照してください。

#### ADC

このセクションでは、Linux ADCドライバー関連のアプリケーション層プログラムの制御原理について説明します。ここでは、ADC1とGrove - Rotary Angle Sensorを使用してその使い方を説明します。

**必要な材料**

- NPi i.MX6ULL Dev Board - Linux SBC NANDバージョン（またはeMMCバージョン）
- [Grove - 4ピンメスジャンパーからGrove 4ピン変換ケーブル](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)

**ソフトウェア**

- **ステップ1.** `fire-config`でP12を選択してADC1を有効化します。

```
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/enable-adc.png)

成功すると以下のようなコマンドが表示されます。

```
root@npi:~# ls /sys/bus/iio/devices/iio\:device0
buffer              in_voltage3_raw                sampling_frequency_available
dev                 in_voltage_sampling_frequency  scan_elements
in_conversion_mode  in_voltage_scale               subsystem
in_voltage0_raw     name                           trigger
in_voltage1_raw     of_node                        uevent
in_voltage2_raw     power
```

- **ステップ2.** [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665)を参照して、NPi i.MX6ULL Dev BoardのADC1のピン番号を確認します。以下の画像のようにGPIO番号を確認できます。

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/adc-pin-map.png)

**ステップ3.** Grove - Rotary Angle SensorをGrove - 4ピンメスジャンパーからGrove 4ピン変換ケーブルを使用してNPi i.MX6ULL Dev BoardのADC1に接続します。

**ステップ4.** Grove - Rotary Angle SensorのADデータを取得します。

```
root@npi:~# cat /sys/bus/iio/devices/iio\:device0/\\in_voltage3_raw
82
```

上記の情報を参照すると、GPIO1_IO3ピンのアナログ値を読み取っていることがわかります。

#### SPI

このセクションでは、Linux SPIプログラムの制御原理を説明します。ここではSPIと2-Channel CAN-BUS(FD) Shield for Raspberry Piを使用してその使い方を説明します。

**必要な材料**

- NPi i.MX6ULL Dev Board - Linux SBC NANDバージョン（またはeMMCバージョン）
- [2-Channel CAN-BUS(FD) Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)

**ソフトウェア**

- **ステップ1.** [インストールガイド](https://wiki.seeedstudio.com/ja/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#mounting-guide)に従って、2-Channel CAN BUS FD Shield for Raspberry PiをNPi i.MX6ULL Dev Boardに挿入します。

- **ステップ2.** `fire-config`でP23を選択してファイルシステムを拡張します。

```bash
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/ExpandSDCard.png)

- **ステップ3.** `seeed-linux-dtoverlays`に関する依存関係をインストールします。

```bash
apt install -y make git device-tree-compiler linux-headers-$(uname -r) gcc
```

- **ステップ4.** GitHubの`seeed-linux-dtverlays`からNPi i.MX6ULL Dev Boardのドライバを作成してインストールします。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_imx6ull && make install_imx6ull
```

:::note
作成中にエラーが発生した場合は、`mkdir -p /lib/modules/$(uname -r)/extra/seeed`を使用してファイルを作成できます。
:::

- **ステップ5.** `/boot/uEnv.txt`にdtboパッケージを追加して、再起動後に有効化します。

```bash
echo dtoverlay=/lib/firmware/imx-MCP2517FD-can0-overlay.dtbo >> /boot/uEnv.txt
reboot
```

- **ステップ6.** `dmesg`を使用してドライバが正常にインストールされたか確認します。成功すると以下の情報が表示されます。

```bash
root@npi:~ insmod /lib/modules/$(uname -r)/extra/seeed/mcp25xxfd-can.ko
root@npi:~ dmesg | grep spi
[    1.057609] spi_imx 44009000.spi: driver initialized
[    9.852726] mcp25xxfd spi0.0: Linked as a consumer to regulator.6
[    9.966510] mcp25xxfd spi0.0: MCP2517 successfully initialized.

root@npi:~ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

2-Channel CAN-BUS(FD) Shieldの詳細については[wiki](https://wiki.seeedstudio.com/ja/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#install-can-hat)を参照してください。

#### IIS

このセクションでは、Linux IISプログラムの制御原理を説明します。ここではIISとReSpeaker 2-Mics Pi HATを使用してその使い方を説明します。

**必要な材料**

- NPi i.MX6ULL Dev Board - Linux SBC NANDバージョン（またはeMMCバージョン）
- [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

**ソフトウェア**

- **ステップ1.** [インストールガイド](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT/#getting-started)に従って、ReSpeaker 2-Mics Pi HATをNPi i.MX6ULL Dev Boardに挿入します。

- **ステップ2.** `apt`を使用してalsa-utilsをインストールします。

```bash
sudo apt install alsa-utils -y
```

- **ステップ3.** `/boot/uEnv.txt`にdtboパッケージを追加して、再起動後に有効化します。

```bash
sudo sh -c  "echo dtoverlay=/lib/firmware/imx-seeed-voicecard-2mic-overlay.dtbo >> /boot/uEnv.txt"
```

:::note
`imx-seeed-voice card-2mic-overlay.dtbo`が見つからない場合は、SPIのガイドを参照して依存関係をインストールしてください。
:::

- **ステップ4.** `aplay`を使用してドライバが正常にインストールされたか確認します。成功すると以下の情報が表示されます。

```sh
debian@npi:~$ sudo insmod /lib/modules/$(uname -r)/extra/seeed/snd-soc-seeed-voicecard.ko
debian@npi:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 2028000.sai-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
debian@npi:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 2028000.sai-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- **ステップ5.** `seeed-linux-dtverlays`フォルダに移動し、以下のようにsoundstateを設定します。

```sh
debian@npi:~$ cd seeed-linux-dtverlays/
debian@npi:~/seeed-linux-dtverlays$ sudo cp extras/wm8960_asound.state /var/lib/alsa/asound.state
debian@npi:~/seeed-linux-dtverlays$ sudo alsactl restore
```

- **ステップ 6.** これで、ReSpeaker 2-Mics Pi Hat を使い始めることができます！簡単な録音と再生テストを行うには、以下のコマンドを実行してください：

1. 音声を `test.wav` に録音するには：

```sh
arecord -f cd -r 48000 -Dhw:0 test.wav
```

2. `test.wav` を再生するには、ヘッドフォンまたはスピーカーを接続して音声を出力してください。

```sh
aplay -Dhw:0 -r 48000 test.wav
```

ReSpeaker 2-Mics Pi HAT に関する詳細情報は、[wiki](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT/) をご覧ください。

## リソース

-----

- **[PDF]** [i.MX 6ULL データシート](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/IMX6ULLCEC.pdf)
- **[PDF]** [NPi i.MX6ULL 開発ボード - Linux SBC 機械的寸法](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/Mechanical_Dimensions.pdf)
- **[PDF]** [NPi i.MX6ULL 開発ボード - Linux SBC ブレイクアウトボード](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/NPi-i.MX6ULL-Breakout-Board-Schematic-V1.0.pdf)
- **[PDF]** [NPi i.MX6ULL 開発ボード - Linux SBC コアモジュール](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/NPi-i.MX6ULL-Core-Module-Schematic-V1.0.pdf)
- **[URL]** [高度なシステム開発](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL)

## NPi i.MX6ULL 高度なシステム開発

- [入手可能性](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Availability)
- [ベンダーのドキュメント](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-VendorDocumentation)
- [基本要件](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-BasicRequirements)
- [ARM クロスコンパイラ: GCC](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-ARMCrossCompiler:GCC)
- [ブートローダー: U-Boot](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Bootloader:U-Boot)
- [Linux カーネル](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-LinuxKernel)
- [ルートファイルシステム](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-RootFileSystem)
  - [Debian 10](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Debian10)
  - [Ubuntu 20.04 LTS](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Ubuntu20.04LTS)
- [microSD カードのセットアップ](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-SetupmicroSDcard)
- [カーネルとルートファイルシステムのインストール](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-InstallKernelandRootFileSystem)
- [ルートファイルシステムのコピー](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyRootFileSystem)
- [/boot/uEnv.txt 内の uname_r を設定](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Setuname_rin/boot/uEnv.txt)
- [デバイスツリーバイナリ](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-DeviceTreeBinary)
- [カーネルイメージのコピー](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelImage)
- [カーネルデバイスツリーバイナリのコピー](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelDeviceTreeBinaries)
- [カーネルモジュールのコピー](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelModules)
- [ファイルシステムテーブル (/etc/fstab)](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-FileSystemsTable(/etc/fstab))
- [microSD/SD カードの取り外し](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-RemovemicroSD/SDcard)
- [コメント](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Comments)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>