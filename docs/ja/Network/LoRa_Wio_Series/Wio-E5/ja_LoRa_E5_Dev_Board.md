---
description: Wio-E5 開発ボードの使い方を始めましょう。
title: Wio-E5 開発キット
keywords:
  - wio 
image: https://wiki.seeedstudio.com/ja/wio_gps_board/
slug: /ja/LoRa_E5_Dev_Board
last_update:
  date: 05/15/2025
  author: hushuxu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

> LoRaWAN® は、LoRa Alliance® のライセンスの下で使用される商標です。  
LoRa® マークは、Semtech Corporation またはその子会社の商標です。

Wio-E5 開発キットは、[Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) の強力な性能を引き出すためのコンパクトな開発ツールセットです。このキットには、Wio-E5 開発ボード、アンテナ（EU868/US915）、USB Type-C ケーブル、2*AA 3V バッテリーホルダーが含まれています。

Wio-E5 開発ボードは、LoRaWAN® プロトコルをグローバル周波数帯域でサポートする Wio-E5 STM32WLE5JC モジュールを搭載しています。Wio-E5 の全 GPIO を引き出し、RS-485、Grove、オス/メスヘッダーなど、さまざまなデータプロトコルやインターフェースをサポートします。これは、LoRa® IoT プロジェクトの迅速なテストやプロトタイピングに最適な選択肢となるでしょう。

Wio-E5 開発ボードは、[Wio-E5 STM32WLE5JC モジュール](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) を搭載しており、これは世界初の LoRa RF と MCU チップを1つの小型チップに統合したもので、FCC および CE 認証を取得しています。ARM Cortex-M4 コアと Semtech SX126X LoRa® チップを搭載し、LoRaWAN® および LoRa® プロトコルをグローバル周波数帯域でサポートし、(G)FSK、BPSK、(G)MSK、LoRa® 変調をサポートします。

[Wio-E5](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/) についてさらに詳しく学ぶことができます。

Wio-E5 開発ボードは、開けた場所で最大 10km の長距離伝送範囲を持っています。ボード上の Wio-E5 モジュールのスリープ電流は 2.1 uA（WOR モード）と非常に低く、-40 ℃ ～ 85 ℃ の広い動作温度範囲、高感度（-116.5 dBm ～ -136 dBm）、および 3.3V で最大 +20.8dBm の出力を備えた産業基準で設計されています。

Wio-E5 開発ボードは、豊富なインターフェースも備えています。Wio-E5 モジュールの全機能を引き出すために開発されており、Wio-E5 の全 28 ピンを引き出し、Grove コネクタ、RS-485 端子、オス/メスピンヘッダーなど、さまざまなコネクタやデータプロトコルを持つセンサーやモジュールを接続できる豊富なインターフェースを提供します。これにより、配線のはんだ付けにかかる時間を節約できます。また、2 本の AA 電池を使用するバッテリーホルダーを接続することで、外部電源がない場合でも一時的にボードに電力を供給することができます。これは、簡単なテストや迅速なプロトタイピングに適したユーザーフレンドリーなボードです。

Wio-E5 は MCU を備えた LoRaWAN® チップであるため、Wio-E5 開発ボードを利用する主な方法は以下の 3 つです：

**1: USB 経由で Wio-E5 開発ボードを PC に接続し、AT コマンドで制御する**

ボードには USB から UART への機能が内蔵されており、USB Type-C ケーブルを使用して Wio-E5 開発ボードを PC に接続し、シリアル通信ソフトウェアを使用して AT コマンドを送信し、ボードからデータを読み取ることができます。

**2: UART 経由で Wio-E5 開発ボードを別のメインボードに接続し、AT コマンドで制御する**

例えば、Wio-E5 開発ボードを Seeeduino XIAO と拡張ボードに UART 経由で接続し、Arduino IDE のシリアルモニターを通じて Seeeduino XIAO から AT コマンドを送信し、データを読み取ることができます。

**3: SDK を使用してユーザーアプリケーションを開発する**

STMicroelectronics が公式に提供する SDK である STM32Cube Programmer を使用して、MCU 機能を備えた独自の LoRa® 開発ボードを開発します。この SDK リソースをダウンロードするには、以下の学習およびドキュメントセクションでリソースを見つけてください。

上記の優れた機能をすべて備えた Wio-E5 開発ボードは、IoT デバイスの開発、テスト、プロトタイピング、そしてスマート農業、スマートオフィス、スマート産業などの長距離・超低消費電力 IoT シナリオでのアプリケーションにおいて優れた選択肢となるでしょう。

LoRa® および LoRaWAN® 技術に不慣れな場合は、このブログ [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) を詳細に確認してください。

## 特徴

- 超低消費電力と高性能

- 簡単なテストと迅速なプロトタイピング

- RS-485、Groveなどを含む豊富なインターフェースに対応したフルGPIO出力

- グローバルなLoRaWAN®およびLoRa®周波数プランに対応

- 最大10kmの長距離通信範囲（開けた場所での理想値）

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
<td class="tg-g9rn">Wio-E5 開発ボード: 85.6*54mm  パッケージ: 200*130*50mm</td>
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
<td class="tg-g9rn">最大 +20.8dBm (3.3V時)</td>
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
<td class="tg-g9rn">変調方式</td>
<td class="tg-g9rn">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">動作温度</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">電流</td>
<td class="tg-g9rn">LoRa-E5 モジュールのスリープ電流は最低2.1uA (WORモード)</td>
</tr>
</tbody>
</table>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">部品リスト:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5 開発ボード *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">アンテナ(EU868/US915)*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">2*AA 3V バッテリーホルダー *1</td>
</tr>
</tbody>
</table>

## 応用例

- Wio-E5 モジュールの簡単なテスト
- Wio-E5 を使用したLoRa®デバイスの迅速なプロトタイピング
- 長距離無線通信アプリケーションの開発
- LoRa®およびLoRaWAN®アプリケーションの学習と研究

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## アプリケーションノート

**1. 工場出荷時のATファームウェア**

Wio-E5 シリーズには、LoRaWAN® Class A/B/CプロトコルとEU868/US915/AU915/AS923/KR920/IN865の広範な周波数プランをサポートするATコマンドファームウェアが内蔵されています。このATコマンドファームウェアを使用することで、開発者は簡単かつ迅速にプロトタイプやアプリケーションを構築できます。

ATコマンドファームウェアには、DFU用のブートローダーとATアプリケーションが含まれています。"PB13/SPI_SCK/BOOT"ピンは、Wio-E5をブートローダーに留めるか、ATアプリケーションにジャンプさせるかを制御します。PB13がHIGHの場合、モジュールはリセット後にATアプリケーションにジャンプし、デフォルトのボーレートは9600です。PB13がLOWの場合（Wio-E5開発キットの"Boot"ボタンを押す）、モジュールはブートローダーに留まり、ボーレート115200で1秒ごとに"C"文字を送信し続けます。

:::note

- 工場出荷時のATファームウェアはRDP（リードプロテクション）レベル1でプログラムされています。開発者はSTM32Cube Programmerを使用して最初にRDPを解除する必要があります。RDPをレベル0に戻すと、フラッシュメモリが全消去され、工場出荷時のATファームウェアは再度復元できなくなることに注意してください。
- Wio-E5 モジュールの"PB13/SPI_SCK/BOOT"ピンは通常のGPIOであり、MCUの"BOOT0"ピンではありません。この"PB13/SPI_SCK/BOOT"ピンは、工場出荷時のATファームウェアのブートローダーで使用され、APPにジャンプするかブートローダーに留まるか（DFU用）を決定します。実際の"BOOT0"ピンはモジュールにピンアウトされていないため、低消費電力アプリケーションを開発する際には注意が必要です。
:::

**2. クロック構成**

2.1 HSE

- 32MHz TCXO

- TCXO電源供給: PB0-VDD_TCXO

2.2 LSE

- 32.768KHz 水晶発振器

**3. RFスイッチ**

**Wio-E5 モジュールはRFO_HPを通じてのみ送信します:**

- 受信: PA4=1, PA5=0

- 送信（高出力、SMPSモード）: PA4=0, PA5=1

## はじめに

### ATコマンドのクイックスタート

#### 準備

- **ステップ 1.** Wio-E5 開発キットをType-CケーブルでPCに接続します。

- **ステップ 2.** シリアルツール（例: Arduino Serial Monitor）を開き、正しいCOMポートを選択し、ボーレートを9600に設定し、Both NL & CRを選択します。

- **ステップ 3.** "AT"を送信して、応答が表示されることを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 基本的なATコマンド

- AT+ID // すべてを読み取る（DevAddr(ABP)、DevEui(OTAA)、AppEui(OTAA)）

- AT+ID=DevAddr // DevAddrを読み取る

- AT+ID=DevEui // DevEuiを読み取る

- AT+ID=AppEui // AppEuiを読み取る

- AT+ID=DevAddr,"devaddr" // 新しいDevAddrを設定する

- AT+ID=DevEui,"deveui" // 新しいDevEuiを設定する

- AT+ID=AppEui,"appeui" // 新しいAppEuiを設定する

- AT+KEY=APPKEY,"16 bytes length key" // アプリケーションセッションキーを変更する

- AT+DR=band // バンドプランを変更する

- AT+DR=SCHEME // 現在のバンドを確認する

- AT+CH=NUM, 0-7 // チャンネル0〜7を有効にする

- AT+MODE="mode" // 動作モードを選択する: LWOTAA、LWABPまたはTEST

- AT+JOIN // JOINリクエストを送信する

- AT+MSG="Data to send" // サーバーによる確認が不要な文字列形式のフレームを送信する

- AT+CMSG="Data to send" // サーバーによる確認が必要な文字列形式のフレームを送信する

- AT+MSGHEX="xx xx xx xx" // サーバーによる確認が不要な16進形式のフレームを送信する

- AT+CMSGHEX="xx xx xx xx" // サーバーによる確認が必要な16進形式のフレームを送信する

#### The Things Networkに接続してデータを送信する

- **ステップ 1.** [The Things Network](https://www.thethingsnetwork.org)のウェブサイトにアクセスし、新しいアカウントを作成します。

- **ステップ 2.** ログイン後、プロフィールをクリックして**Console**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** クラスターを選択して、デバイスとゲートウェイの追加を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** **Go to applications**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** **+ Add application**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Application ID**を入力し、**Create application**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**注意:** **Application name**と**Description**は必須項目ではありません。**Application name**を空白のままにすると、デフォルトで**Application ID**と同じ名前が使用されます。

以下は新しく作成されたアプリケーションの例です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **+ Add end device**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** **Manually**をクリックして、登録情報を手動で入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** 地域に応じた**Frequency plan**を選択します。また、このデバイスを接続するゲートウェイと同じ周波数を使用していることを確認してください。**MAC V1.0.2**を**LoRaWAN® version**として選択し、**PHY V1.0.2 REV B**を**Regional Parameters version**として選択します。これらの設定はWio-E5のLoRaWAN®スタックに基づいています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 10.** Wio-E5モジュールがシリアルコンソールでアクセス可能な状態で、以下のATコマンドをシリアルモニターで送信します：

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

- **ステップ 11.** 上記の情報を**DevEUI**、**AppEUI**、**AppKey**フィールドにコピー＆ペーストします。**End device ID**フィールドは**DevEUI**を入力すると自動的に埋められます。最後に**Register end device**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 12.** TTNコンソールでLoRaWAN®ゲートウェイを登録します。詳細な手順は[こちら](https://wiki.seeedstudio.com/ja/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)を参照してください。

- **ステップ 13.** 以下のATコマンドを入力してTTNに接続します：

```
// US915を使用している場合
AT+DR=US915
AT+CH=NUM,8-15

// EU868を使用している場合
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

シリアルコンソールに**+JOIN: Network joined**と表示された場合、デバイスがTTNに正常に接続されたことを意味します！

**End devices**ページでデバイスのステータスを確認することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 14.** 以下のATコマンドを入力してTTNにデータを送信します：

```
// 文字列 "HELLO" をTTNに送信
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// 16進数 "00 11 22 33 44" を送信
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

ATコマンドに関する詳細情報については、[Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf) を参照してください。

### STM32Cube MCUパッケージを使用した開発

このセクションはWio-E5開発キット向けで、STM32WLシリーズ(SDK)用のSTM32Cube MCUパッケージを使用していくつかのアプリケーションを構築することを目的としています。

**注意:** 現在、STM32WLシリーズ用の最新バージョンであるv1.1.0をサポートするようにライブラリを更新しました。

:::note
[Erase Factory AT Firmware](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/#application-notes) セクションを最初にお読みください。SDKでプログラムする前に、工場出荷時のATファームウェアを消去する必要がある場合があります。工場出荷時のATファームウェアを消去すると、復元することはできません。
:::

#### 準備

ソフトウェア:

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): コンパイルとデバッグ用

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): STM32デバイスのプログラミング用

ハードウェア:

- LoRaWAN®ゲートウェイ（例: TTN）に接続されたLoRaWAN®ネットワークサーバー

- USB Type-CケーブルとST-LINK。Type-CケーブルをボードのType-Cポートに接続して電源供給とシリアル通信を行います。ST-LINKを以下のようにSWDピンに接続します。

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO設定の概要

- Wio-E5シリーズのハードウェア設計は、STの公式STM32WL55JC開発ボードであるNUCLEO-WL55JCとは少し異なるため、SDKの例をWio-E5シリーズに適応させるためにいくつかのGPIOを再設定する必要があります。GPIOはすでに再設定されていますが、違いを指摘することが必要だと考えています。

| SDK例のラベル | NUCLEO-WL55JCのGPIO | Wio-E5開発キットのGPIO |
|---------------|---------------------|-----------------------------|
| RF_CTRL1      | PC4                | PA4                         |
| RF_CTRL2      | PC5                | PA5                         |
| RF_CTRL3      | PC3                | None                        |
| BUT1          | PA0                | PB13 (Bootボタン)           |
| BUT2          | PA1                | None                        |
| BUT3          | PC6                | None                        |
| LED1          | PB15               | None                        |
| LED2          | PB9                | PB5                         |
| LED3          | PB11               | None                        |
| DBG1          | PB12               | PA0 (D0ボタン)              |
| DBG2          | PB13               | PB10                        |
| DBG3          | PB14               | PB3                         |
| DBG4          | PB10               | PB4                         |
| Usart         | Usart2(PA2/PA3)    | Usart1(PB6/PB7)             |

### アプリケーション

ここでは、STM32WLシリーズ(SDK)用のSTM32Cube MCUパッケージを使用してWio-E5開発キット向けのいくつかのアプリケーションを探ります。

#### LoRaWAN®エンドノード

このアプリケーションでは、Wio-E5開発キットをTTN（The Things Network）に接続し、LoRaWAN®ゲートウェイに接続した後にデータを送信します。

- **ステップ1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ2.** ZIPファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`に移動します。

- **ステップ3.** **.project**ファイルをダブルクリックします。

- **ステップ4.** プロジェクトを右クリックして**Properties**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ5.** `C/C++ Build > Settings > MCU Post build outputs`に移動し、**Convert to Intel Hex file (-O ihex)**をチェックして**Apply and Close**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **ステップ6.** **Build 'Debug'**をクリックし、エラーなしでコンパイルされることを確認します。

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

次に、**Device EUI**、**Application EUI**、**Application KEY**、および**LoRaWAN Region**を変更します。

- **ステップ7.** [こちらのガイド](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network)に従ってTTNアプリケーションを設定し、**Application EUI**を取得して`LoRaWAN/App/se-identity.h`のマクロ定義`LORAWAN_JOIN_EUI`にコピーします。例えば、ここでのApplication EUIは`80 00 00 00 00 00 00 0x07`です。

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **ステップ8.** また、**Device EUI**と**Application Key**を変更するには、`LoRaWAN/App/se-identity.h`のマクロ定義`LORAWAN_DEVICE_EUI`と`LORAWAN_NWK_KEY`を設定します。`LORAWAN_DEVICE_EUI`と`LORAWAN_NWK_KEY`がTTNコンソールの`Device EUI`と`App Key`と一致していることを確認してください。

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

- **ステップ9.** デフォルトのLoRaWAN®リージョンは`EU868`です。これを変更するには、`LoRaWAN/App/lora_app.h`のマクロ定義`ACTIVE_REGION`を設定します。

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 10.** 上記の変更を行った後、例を**再構築**し、Wio-E5にプログラムしてください。`STM32CubeProgrammer`を開き、ST-LINKをPCに接続し、デバイスの`RESETボタン`を押しながら、`Connect`をクリックしてから`RESETボタン`を離します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 11.** Read Out Protectionが`AA`であることを確認してください。もし`BB`と表示されている場合は、`AA`を選択して`Apply`をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 12.** 次に、`Erasing & Programming`ページに移動し、hexファイルのパスを選択します（例: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`）。以下の画像のようにプログラミングオプションを選択し、`Start Programming`をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
プログラミングが完了すると、**Download verified successfully**というメッセージが表示されます。

- **ステップ 13.** もしLoRaWAN® GatewayとTTNがセットアップされている場合、Wio-E5はリセット後に正常に接続されます！確認用のLoRaWAN®パッケージがTTNに30秒ごとに送信されます。接続が成功すると、以下のログがシリアルモニター（ここではArduino Serial Monitorを使用）に表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>
- おめでとうございます！これでWio-E5をLoRaWAN®ネットワークに接続しました！さらに興味深いLoRaWAN®エンドノードアプリケーションの開発を進めることができます！

**注意:** Wio-E5は高出力モードのみをサポートしているため、`radio_board_if.h`で以下のマクロ定義を使用することはできません。

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// または
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

**RBI_CONF_RFO**が`radio_board_if.h`で**RBI_CONF_RFO_LP_HP**として定義されていても、**USE_BSP_DRIVER**が定義されており、**BSP_RADIO_GetTxConfig()**関数が**RADIO_CONF_RFO_HP**を返すため使用されません。

#### FreeRTOS LoRaWAN®

このアプリケーションでは、Wio-E5開発キットをTTN（The Things Network）に接続し、LoRaWAN®ゲートウェイに接続した後にデータを送信します。以前のLoRaWAN®エンドノードアプリケーションとの違いは、以前のものはベアメタルで動作するのに対し、こちらはFreeRTOS上で動作する点です。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`に移動します。

- **ステップ 3.** **.project**ファイルをダブルクリックします。

- **ステップ 4.** 前の**LoRaWAN®エンドノード**アプリケーションの**ステップ 4 - ステップ 13**を参照して、Wio-E5開発キットをTTNに接続してください！

#### FreeRTOS LoRaWAN® AT

このアプリケーションでは、Wio-E5開発キットをTTN（The Things Network）に接続し、LoRaWAN®ゲートウェイに接続した後にデータを送信します。以前のFreeRTOS LoRaWAN®アプリケーションとの違いは、ATコマンドを使用できる点です。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`に移動します。

- **ステップ 3.** **.project**ファイルをダブルクリックします。

- **ステップ 4.** 前の**LoRaWAN®エンドノード**アプリケーションの**ステップ 4 - ステップ 12**を参照してください。

- **ステップ 5.** Arduino Serial Monitorなどのシリアルモニターを開き、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **AT?**と入力して**ENTER**を押すと、利用可能なATコマンドがすべて表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** もし**Device EUI**、**Application EUI**、**Application KEY**、および**LoRawan Region**を変更したい場合は、ATコマンドを使用して変更できます。ただし、これらのパラメータはこの例ではすでに**se-identity.h**および**lora_app.h**に設定されています。

- **ステップ 8.** **AT+JOIN=1**と入力すると、接続が成功した際に以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**注意:** ここでは**AT+JOIN=(Mode)**形式を使用する必要があります。**Mode**は**0（ABP）**または**1（OTAA）**を意味します。

#### FreeRTOS LowPower

このアプリケーションでは、Wio-E5開発キットで低消費電力モードを有効にします。アプリケーションがフラッシュされると、ボードは通常通り2秒間動作し、その後2秒間低消費電力モードに入るという動作を繰り返します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`に移動します。

- **ステップ 3.** **.project**ファイルをダブルクリックします。

- **ステップ 4.** プロジェクトを右クリックし、**Properties**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs`に移動し、**Convert to Intel Hex file (-O ihex)**を選択して、**Apply and Close**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'**をクリックすると、エラーなしでコンパイルされるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** `STM32CubeProgrammer`を開き、ST-LINKをPCに接続し、デバイスの`RESETボタン`を押しながら`Connect`をクリックし、その後`RESETボタン`を離します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** Read Out Protectionが`AA`であることを確認します。`BB`と表示されている場合は、`AA`を選択して`Apply`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** 次に、`Erasing & Programming`ページに移動し、hexファイルのパス（例: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`）を選択し、以下の画像のようにプログラミングオプションを設定して、`Start Programming`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

プログラミングが完了すると、**Download verified successfully**というメッセージが表示されます。

- **ステップ 10.** Wio-E5開発キットをPCに接続し、電力計を取り付けます。ボード上の赤いLEDが1秒ごとに点滅し、ボードが通常状態と低電力状態を切り替えるのが確認できます（電力計の電流が1秒間低電力状態で下がり、1秒間通常動作状態で戻ります）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### 低電力モード

このアプリケーションは、Wio-E5開発キットで低電力モードを有効にします。以前のFreeRTOS LowPowerアプリケーションとの違いは、以前のものはFreeRTOS上で動作するのに対し、こちらはベアメタルで動作する点です。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして、**Seeed-Studio/LoRaWan-E5-Node**リポジトリの**qian**ブランチにアクセスし、ZIPファイルとしてダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/lora-e5-qian-github.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > LowPower`に移動します。

- **ステップ 3.** **.project**ファイルをダブルクリックします。

- **ステップ 4.** 前述の**FreeRTOS LowPower**アプリケーションの**ステップ 4 - ステップ 10**を参照し、最終的に電力計で同じ出力が確認できます！

## リソース

Wio-E5 開発ボードデータシート:

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.brd">Wio-E5 開発ボード v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.pdf">Wio-E5 開発ボード v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.sch">Wio-E5 開発ボード v1.0.sch</a></p>

Wio-E5 データシート:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 データシートと仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 ATコマンド仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC データシート</a></p>

Wio-E5 認証:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 認証 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC 認証 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC 認証 -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Wio-E5-HF TELEC 認証</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC 認証</a></p>

関連SDK:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WLシリーズ用STM32Cube MCUパッケージ</a></p>

## 技術サポート & 製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に投稿してください。

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>