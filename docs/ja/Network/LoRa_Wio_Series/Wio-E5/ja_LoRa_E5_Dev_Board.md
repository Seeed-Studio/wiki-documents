---
description: Wio-E5 開発ボードの使用開始ガイド。
title: Wio-E5 開発キット
keywords:
  - wio 
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /ja/LoRa_E5_Dev_Board
last_update:
  date: 01/30/2023
  author: hushuxu
---

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

<div style={{textAlign: 'center'}}>
    <a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong></a>
</div>

> LoRaWAN® は LoRa Alliance® からライセンスを受けて使用されているマークです。
LoRa® マークは Semtech Corporation またはその子会社の商標です。

Wio-E5 開発キットは、[Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) の強力な性能を引き出すためのコンパクトな開発ツールセットです。Wio-E5 開発ボード、アンテナ（EU868/US915）、USB Type C ケーブル、および 2×AA 3V バッテリーホルダーで構成されています。

Wio-E5 開発ボードには、グローバル周波数帯で LoRaWAN® プロトコルをサポートする Wio-E5 STM32WLE5JC モジュールが組み込まれています。RS-485、Grove、オス/メスヘッダーなど、さまざまなデータプロトコルとインターフェースをサポートする Wio-E5 の全 GPIO を引き出しています。LoRa® IoT プロジェクトの高速テストと迅速なプロトタイピングに最適な選択肢となるでしょう。

Wio-E5 開発ボードには [Wio-E5 STM32WLE5JC モジュール](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) が組み込まれており、これは世界初の LoRa RF と MCU チップを単一の小さなチップに統合したもので、FCC および CE 認証を取得しています。ARM Cortex-M4 コアと Semtech SX126X LoRa® チップによって駆動され、世界的な周波数で LoRaWAN® と LoRa® プロトコルの両方をサポートし、(G)FSK、BPSK、(G)MSK、および LoRa® 変調をサポートします。

[Wio-E5](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/) についてはこちらで詳しく学習できます。

Wio-E5 開発ボードは、開放エリアで最大 10km の長距離伝送範囲を持つ Wio-E5 の長距離伝送機能を備えています。ボード上の Wio-E5 モジュールのスリープ電流は 2.1 uA（WOR モード）と非常に低くなっています。-40℃ ～ 85℃ の広い動作温度範囲、-116.5 dBm ～ -136 dBm の高感度、3.3V で最大 +20.8dBm の出力電力を持つ産業規格で設計されています。

Wio-E5 開発ボードは豊富なインターフェースも備えています。Wio-E5 モジュールの全機能を引き出すために開発された Wio-E5 開発ボードは、Wio-E5 の全 28 ピンを引き出し、Grove コネクタ、RS-485 端子、オス/メスピンヘッダーなどの豊富なインターフェースを提供しており、異なるコネクタやデータプロトコルを持つセンサーやモジュールを接続でき、配線はんだ付けの時間を節約できます。2 本の AA バッテリーでバッテリーホルダーを接続することで簡単にボードに電源を供給でき、外部電源が不足している場合の一時的な使用が可能です。簡単なテストと迅速なプロトタイピングのためのユーザーフレンドリーなボードです。

Wio-E5 は MCU を搭載した LoRaWAN® チップであるため、Wio-E5 開発ボードを活用する主な方法は 3 つあります：

**1: Wio-E5 開発ボードを USB 経由で PC に接続し、AT コマンドで制御**

ボード上には USB to UART 機能が内蔵されているため、USB Type C ケーブルで Wio-E5 開発ボードを PC に接続し、シリアル通信ソフトウェアを使用して AT コマンドを送信し、ボードからデータを読み取ることができます。

**2: Wio-E5 開発ボードを UART 経由で別のメインボードに接続し、AT コマンドで制御**

例えば、Wio-E5 開発ボードを UART 経由で Seeeduino XIAO と拡張ボードに接続し、Arduino IDE シリアルモニターを通じて Seeeduino XIAO から AT コマンドを送信してデータを読み取ります。

**3: SDK を使用してユーザーアプリケーションを開発**

STMicroelectronics が公式に提供する SDK である STM32Cube Programmer を使用して、MCU 機能を持つ独自の LoRa® 開発ボードを開発します。この SDK リソースをダウンロードするには、以下の学習とドキュメントのリソースを参照してください。

上記のすべての優れた機能により、Wio-E5 開発ボードは、スマート農業、スマートオフィス、スマート産業などの長距離、超低消費電力 IoT シナリオでの IoT デバイス開発、テスト、プロトタイピング、およびアプリケーションにとって優れた選択肢となるでしょう。

LoRa® および LoRaWAN® 技術に馴染みがない場合は、このブログ [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) を詳しくご確認ください。

## 機能

- 超低消費電力と高性能

- 簡単なテストと迅速なプロトタイピング

- 豊富なインターフェースに全GPIOを引き出し、RS-485、Groveなどを含む

- グローバルLoRaWAN®およびLoRa®周波数プランをサポート

- 最大10kmの長距離伝送範囲（開放エリアでの理想値）

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4071615359366_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/3011615286741_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

## 仕様

<table class="tg">
<thead>
<tr><th class="tg-6cwf">パラメータ</th><th class="tg-6cwf">仕様</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">サイズ</td>
<td class="tg-g9rn">Wio-E5 Dev Board: 85.6*54mm  パッケージ: 200*130*50mm</td>
</tr>
<tr>
<td class="tg-g9rn">電圧 - 供給</td>
<td class="tg-g9rn">3-5V (バッテリー) / 5V(USB Type C)</td>
</tr>
<tr>
<td class="tg-g9rn">電圧 - 出力</td>
<td class="tg-g9rn">EN 3V3 / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">電力 - 出力</td>
<td class="tg-g9rn">3.3Vで最大+20.8dBm</td>
</tr>
<tr>
<td class="tg-g9rn">周波数</td>
<td class="tg-g9rn">EU868 / US915 / AU915 / AS923 / KR920 / IN865</td>
</tr>
<tr>
<td class="tg-g9rn">プロトコル</td>
<td class="tg-g9rn">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-g9rn">感度</td>
<td class="tg-g9rn">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-g9rn">インターフェース</td>
<td class="tg-g9rn">USB Type C / JST2.0 / Grove*3(IIC*2/UART*1) / RS485 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">変調</td>
<td class="tg-g9rn">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">動作温度</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">電流</td>
<td class="tg-g9rn">LoRa-E5モジュールのスリープ電流は2.1uAと低い（WORモード）</td>
</tr>
</tbody>
</table>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">パーツリスト:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5 Dev Board *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">アンテナ(EU868/US915)*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">2*AA 3Vバッテリーホルダー *1</td>
</tr>
</tbody>
</table>

## アプリケーション

- Wio-E5モジュールの簡単なテスト
- Wio-E5を使用したLoRa®デバイスの迅速なプロトタイピング
- あらゆる長距離無線通信アプリケーション開発
- LoRa®およびLoRaWAN®アプリケーションの学習と研究

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## アプリケーションノート

**1. ファクトリーATファームウェア**

Wio-E5シリーズには内蔵ATコマンドファームウェアがあり、LoRaWAN® Class A/B/Cプロトコルと幅広い周波数プラン（EU868/US915/AU915/AS923/KR920/IN865）をサポートしています。このATコマンドファームウェアにより、開発者は簡単かつ迅速にプロトタイプやアプリケーションを構築できます。

ATコマンドファームウェアには、DFU用のブートローダーとATアプリケーションが含まれています。「PB13/SPI_SCK/BOOT」ピンは、Wio-E5をブートローダーに留めるか、ATアプリケーションにジャンプするかを制御するために使用されます。PB13がHIGHの場合、モジュールはリセット後にATアプリケーションにジャンプし、デフォルトのボーレートは9600です。PB13がLOW（Wio-E5開発キットの「Boot」ボタンを押す）の場合、モジュールはブートローダーに留まり、ボーレート115200で1秒ごとに「C」文字を送信し続けます。

:::note

- ファクトリーATファームウェアはRDP（読み取り保護）レベル1でプログラムされており、開発者はまずSTM32Cube ProgrammerでRDPを削除する必要があります。RDPをレベル0に戻すとフラッシュメモリの一括消去が発生し、ファクトリーATファームウェアは再度復元できないことに注意してください。
- Wio-E5モジュールの「PB13/SPI_SCK/BOOT」ピンは通常のGPIOであり、MCUの「BOOT0」ピンではありません。この「PB13/SPI_SCK/BOOT」ピンは、ファクトリーATファームウェアのブートローダーで使用され、APPにジャンプするかブートローダーに留まる（DFU用）かを決定します。実際の「BOOT0」ピンはモジュールにピンアウトされていないため、低消費電力アプリケーションを開発する際にはユーザーは注意が必要です。

:::

**2. クロック設定**

2.1 HSE

- 32MHz TCXO

- TCXO電源：PB0-VDD_TCXO

2.2 LSE

- 32.768KHz水晶発振器

**3. RFスイッチ**

**Wio-E5モジュールはRFO_HPを通してのみ送信します：**

- 受信：PA4=1、PA5=0

- 送信（高出力、SMPSモード）：PA4=0、PA5=1

## はじめに

### ATコマンドのクイックスタート

#### 準備

- **ステップ1.** Type-CケーブルでWio-E5開発キットをPCに接続

- **ステップ2.** シリアルツール（例：Arduino Serial Monitor）を開き、正しいCOMポートを選択し、ボーレートを9600に設定し、Both NL & CRを選択

- **ステップ3.** 「AT」を送信してみると、応答が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 基本ATコマンド

- AT+ID // すべて読み取り、DevAddr（ABP）、DevEui（OTAA）、AppEui（OTAA）

- AT+ID=DevAddr // DevAddrを読み取り

- AT+ID=DevEui // DevEuiを読み取り

- AT+ID=AppEui // AppEuiを読み取り

- AT+ID=DevAddr,"devaddr" // 新しいDevAddrを設定

- AT+ID=DevEui,"deveui" // 新しいDevEuiを設定

- AT+ID=AppEui,"appeui" // 新しいAppEuiを設定

- AT+KEY=APPKEY,"16 bytes length key" // アプリケーションセッションキーを変更

- AT+DR=band // バンドプランを変更

- AT+DR=SCHEME // 現在のバンドを確認

- AT+CH=NUM, 0-7 // チャンネル0〜7を有効化

- AT+MODE="mode" // 動作モードを選択：LWOTAA、LWABPまたはTEST

- AT+JOIN // JOIN要求を送信

- AT+MSG="Data to send" // サーバーによる確認が不要な文字列形式フレームの送信に使用

- AT+CMSG="Data to send" // サーバーによる確認が必要な文字列形式フレームの送信に使用

- AT+MSGHEX="xx xx xx xx" // サーバーによる確認が不要な16進形式フレームの送信に使用

- AT+CMSGHEX="xx xx xx xx" // サーバーによる確認が必要な16進形式フレームの送信に使用

#### The Things Networkへの接続とデータ送信

- **ステップ1.** [The Things Network](https://www.thethingsnetwork.org)ウェブサイトにアクセスし、新しいアカウントにサインアップ

- **ステップ2.** ログイン後、プロフィールをクリックし、**Console**を選択

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ3.** デバイスとゲートウェイの追加を開始するクラスターを選択

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ4.** **Go to applications**をクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **ステップ5.** **+ Add application**をクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **ステップ6.** **Application ID**を入力し、**Create application**をクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**注意：** ここで**Application name**と**Description**は必須フィールドではありません。**Application name**を空白のままにすると、デフォルトで**Application ID**と同じ名前が使用されます。

以下が新しく作成されたアプリケーションです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **ステップ7.** **+ Add end device**をクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **ステップ8.** **Manually**をクリックして、登録認証情報を手動で入力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **ステップ9.** お住まいの地域に応じて**Frequency plan**を選択します。また、このデバイスを接続するゲートウェイと同じ周波数を使用することを確認してください。**LoRaWAN® version**として**MAC V1.0.2**を、**Regional Parameters version**として**PHY V1.0.2 REV B**を選択します。これらの設定はWio-E5のLoraWAN®スタックに従っています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **ステップ10.** Wio-E5モジュールがまだシリアルコンソール経由でアクセス可能な間に、シリアルモニターで以下のATコマンドを送信します：

  - `AT+ID=DevEui` でDevice EUIを取得
  - `AT+ID=AppEui` でApp EUIを取得
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` でApp Keyを設定

出力は以下のようになります：

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **ステップ 11.** 上記の情報を **DevEUI**、**AppEUI**、**AppKey** フィールドにコピー＆ペーストします。**End device ID** フィールドは **DevEUI** を入力すると自動的に入力されます。最後に **Register end device** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 12.** LoRaWAN® ゲートウェイを TTN コンソールに登録します。[こちら](https://wiki.seeedstudio.com/ja/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)に示されている手順を参照してください

- **ステップ 13.** 以下のATコマンドを入力して TTN に接続します

```
// If you are using US915
AT+DR=US915
AT+CH=NUM,8-15

// If you are using EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

シリアルモニターの出力は以下のようになります：

```
Tx: AT+DR=US915
Rx: +DR: US915
Tx: AT+CH=NUM,8-15
Rx: +CH: NUM, 8-15

Tx: AT+MODE=LWOTAA
Rx: +MODE: LWOTAA

Tx: AT+JOIN
Rx: +JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 000013 DevAddr 26:01:5F:66
+JOIN: Done
```

シリアルコンソールで **+JOIN: Network joined** が表示されれば、デバイスがTTNへの接続に成功したことを意味します！

**End devices**ページでデバイスのステータスも確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 14.** 以下のATコマンドを入力してTTNにデータを送信します

```
// send string "HELLO" to TTN 
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// send hex "00 11 22 33 44" 
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

ATコマンドの詳細については、[Wio-E5 ATコマンド仕様書](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)を参照してください。

### STM32Cube MCUパッケージを使用した開発

このセクションはWio-E5開発キット向けで、STM32WLシリーズ用STM32Cube MCUパッケージ（SDK）を使用していくつかのアプリケーションを構築することを目的としています。

**注意:** STM32WLシリーズ用STM32Cube MCUパッケージの最新バージョンであるv1.1.0をサポートするようにライブラリを更新しました。

:::note
SDKでプログラムする前に工場出荷時のATファームウェアを消去する必要があるため、まず[工場出荷時ATファームウェアの消去](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/#application-notes)セクションをお読みください。工場出荷時のATファームウェアを消去すると、復元することはできません。
:::

#### 準備

ソフトウェア：

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html)：コンパイルとデバッグ用

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html)：STM32デバイスのプログラミング用

ハードウェア：

- LoRaWAN®ネットワークサーバー（例：TTN）に接続されたLoRaWAN®ゲートウェイ

- USB Type-Cケーブル1本とST-LINK1個。Type-CケーブルをボードのType-Cポートに接続して電源とシリアル通信を行います。ST-LINKを以下のようにSWDピンに接続します

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO設定の概要

- Wio-E5シリーズのハードウェア設計は、STの公式STM32WL55JC開発ボードであるNUCLEO-WL55JCと少し異なるため、開発者はSDKサンプルをWio-E5シリーズに適応させるために一部のgpioを再設定する必要があります。私たちはすでにGPIOを再設定していますが、その違いを指摘することが必要だと考えています。

|SDKサンプルラベル|NUCLEO-WL55JCのGPIO|Wio-E5開発キットのGPIO|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|なし|
|BUT1|PA0|PB13（ブートボタン）|
|BUT2|PA1|なし|
|BUT3|PC6|なし|
|LED1|PB15|なし|
|LED2|PB9|PB5|
|LED3|PB11|なし|
|DBG1|PB12|PA0（D0ボタン）|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

### アプリケーション

ここでは、STM32WLシリーズ用STM32Cube MCUパッケージ（SDK）を使用したWio-E5開発キットのいくつかのアプリケーションを探索します。

#### LoRaWAN® エンドノード

このアプリケーションは、Wio-E5開発キットをTTN（The Things Network）に接続し、LoRaWAN®ゲートウェイとの接続後にデータを送信します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`に移動します

- **ステップ 3.** **.project**ファイルをダブルクリックします

  **注意：** Macの場合は、以下のオプションのいずれかを使用してプロジェクトを開く必要があります：

  - **1.** `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node`に移動します。ファイル「LoRaWAN_End_Node.ioc」をダブルクリックします。

  - **2.** 以下の画像のように「Import Projects from File System or Archieve」を使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** プロジェクトを右クリックし、**Properties**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs`に移動し、**Convert to Intel Hex file (-O ihex)**にチェックを入れ、**Apply and Close**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'**をクリックすると、エラーなしでコンパイルされるはずです

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

次に、**Device EUI**、**Application EUI**、**Application KEY**、および**LoRawan Region**を変更します

- **ステップ 7.** [こちらのガイド](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network)に従ってTTNアプリケーションをセットアップし、**Application EUI**を取得して`LoRaWAN/App/se-identity.h`のマクロ定義`LORAWAN_JOIN_EUI`にコピーしてください。例えば、ここでのApplication EUIは`80 00 00 00 00 00 00 0x07`です：

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **ステップ 8.** また、`LoRaWAN/App/se-identity.h`でマクロ定義`LORAWAN_DEVICE_EUI`と`LORAWAN_NWK_KEY`を設定することで、**Device EUI**と**Application Key**を変更することができます。`LORAWAN_DEVICE_EUI`と`LORAWAN_NWK_KEY`がTTNコンソールの`Device EUI`と`App Key`と同じであることを確認してください。

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * end-device IEEE EUI (big endian)
 */
#define LORAWAN_DEVICE_EUI                                 { 0x2C, 0xF7, 0xF1, 0x20, 0x24, 0x90, 0x03, 0x63 }

/*!
 * Network root key
 */
#define LORAWAN_NWK_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** デフォルトのLoRaWAN®リージョンは`EU868`です。`LoRaWAN/App/lora_app.h`内のマクロ定義`ACTIVE_REGION`を設定することで変更できます。

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 10.** 上記の変更後、サンプルを**リビルド**してWio-E5にプログラムしてください。`STM32CubeProgrammer`を開き、ST-LINKをPCに接続し、デバイスの`RESETボタン`を押したまま、`Connect`をクリックして`RESETボタン`を離してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 11.** Read Out Protectionが`AA`であることを確認してください。`BB`と表示されている場合は、`AA`を選択して`Apply`をクリックしてください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 12.** 次に、`Erasing & Programming`ページに移動し、hexファイルのパス（例：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`）を選択し、以下の画像のようにプログラミングオプションを選択してから、`Start Programming`をクリックしてください！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
プログラミングが完了すると、**Download verified successfully**のメッセージが表示されます。

- **ステップ 13.** LoRaWAN®ゲートウェイとTTNがセットアップされている場合、Wio-E5はリセット後に正常に接続されます！確認用のLoRaWAN®パッケージが30秒ごとにTTNに送信されます。接続が成功した場合、シリアルモニター（ここではArduino Serial Monitorを使用）に以下のログが出力されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>
- おめでとうございます！これでWio-E5をLoRaWAN®ネットワークに接続できました！これで、より魅力的なLoRaWAN®エンドノードアプリケーションの開発を進めることができます！

**注意：** Wio-E5は高出力モードのみをサポートしているため、`radio_board_if.h`でこれらのマクロ定義を使用することはできません：

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

**RBI_CONF_RFO** が `radio_board_if.h` で **RBI_CONF_RFO_LP_HP** として定義されていても、**USE_BSP_DRIVER** が定義されており、**BSP_RADIO_GetTxConfig()** 関数が **RADIO_CONF_RFO_HP** を返すため、使用されません。

#### FreeRTOS LoRaWAN®

このアプリケーションは、Wio-E5 Development Kit を TTN (The Things Network) に接続し、LoRaWAN® ゲートウェイとの接続後にデータを送信します。以前の LoRaWAN® End Node アプリケーションとこの FreeRTOS LoRaWAN® アプリケーションの違いは、前者がベアメタル上で動作するのに対し、こちらは FreeRTOS 上で動作することです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN` に移動します

- **ステップ 3.** **.project** ファイルをダブルクリックします

- **ステップ 4.** 以前の **LoRaWAN® End Node** アプリケーションの **ステップ 4 - ステップ 13** を参照して、Wio-E5 Development Kit を TTN に接続してください！

#### FreeRTOS LoRaWAN® AT

このアプリケーションも Wio-E5 Development Kit を TTN (The Things Network) に接続し、LoRaWAN® ゲートウェイとの接続後にデータを送信します。以前の FreeRTOS LoRaWAN® アプリケーションとこのアプリケーションの違いは、AT コマンドを使用できることです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT` に移動します

- **ステップ 3.** **.project** ファイルをダブルクリックします

- **ステップ 4.** 以前の **LoRaWAN® End Node** アプリケーションの **ステップ 4 - ステップ 12** を参照してください

- **ステップ 5.** **Arduino Serial Monitor** などのシリアルモニターを開くと、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **AT?** と入力して **ENTER** を押すと、利用可能なすべての AT コマンドが表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **Device EUI**、**Application EUI**、**Application KEY**、**LoRawan Region** を変更したい場合は、AT コマンドを使用して変更できます。ただし、これらのパラメータはこの例では **se-identity.h** と **lora_app.h** で既に設定されています

- **ステップ 8.** **AT+JOIN=1** と入力すると、接続が成功すると以下の出力が表示されます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**注意:** ここでは **AT+JOIN=(Mode)** 形式を使用する必要があります。**Mode** は **ABP の場合は 0**、**OTAA の場合は 1** に対応します

#### FreeRTOS LowPower

このアプリケーションは、Wio-E5 Development Kit で低電力モードを有効にします。アプリケーションがフラッシュされると、ボードは 2 秒間通常の電力を消費し、2 秒間低電力モードに入る、というサイクルを繰り返します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower` に移動します

- **ステップ 3.** **.project** ファイルをダブルクリックします

- **ステップ 4.** プロジェクトを右クリックして **Properties** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs` に移動し、**Convert to Intel Hex file (-O ihex)** にチェックを入れて **Apply and Close** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'** をクリックすると、エラーなしでコンパイルされるはずです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** `STM32CubeProgrammer` を開き、ST-LINK を PC に接続し、デバイスの `RESET Button` を押したまま `Connect` をクリックして `RESET Button` を離します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** Read Out Protection が `AA` であることを確認し、`BB` と表示されている場合は `AA` を選択して `Apply` をクリックします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** 次に、`Erasing & Programming` ページに移動し、hex ファイルのパス（例：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`）を選択し、以下の画像のようにプログラミングオプションを選択して、`Start Programming` をクリックします！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

プログラミングが完了すると、**Download verified successfully** というメッセージが表示されます。

- **ステップ 10.** 電力計を接続してWio-E5 Development KitをPCに接続します。ボードの赤色LEDが1秒ごとに点滅し、ボードが通常状態と低電力状態を切り替えることがわかります（電力計の電流が低電力状態では1秒間下がり、通常動作状態では1秒間上がります）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### 低電力

このアプリケーションは、Wio-E5 Development Kitで低電力モードも有効にします。前のFreeRTOS LowPowerアプリケーションとこのLow Powerアプリケーションの違いは、前者がFreeRTOS上で動作するのに対し、こちらはベアメタル上で動作することです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリの**qian**ブランチにアクセスし、ZIPファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/lora-e5-qian-github.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > LowPower`に移動します

- **ステップ 3.** **.project**ファイルをダブルクリックします

- **ステップ 4.** 前の**FreeRTOS LowPower**アプリケーションの**ステップ 4 - ステップ 10**を参照すると、最終的に電力計で同じ出力が表示されます！

## リソース

Wio-E5 Development Boardデータシート：

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.brd">Wio-E5 Development Board v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.pdf">Wio-E5 Development Board v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.sch">Wio-E5 Development Board v1.0.sch</a></p>

Wio-E5データシート：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5データシートと仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 ATコマンド仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JCデータシート</a></p>

Wio-E5認証：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF認証 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC認証 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC認証 -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Wio-E5-HF TELEC認証</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC認証</a></p>

関連SDK：

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WLシリーズ用STM32Cube MCUパッケージ</a></p>

## 技術サポート & 製品ディスカッション

技術的な問題については、[フォーラム](http://forum.seeedstudio.com/)にお送りください。

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験を可能な限りスムーズにするため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
