---
description: Wio-E5 STM32WLE5JC モジュールの使用開始ガイド。
title: Wio-E5 STM32WLE5JC モジュール
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /ja/LoRa-E5_STM32WLE5JC_Module
last_update:
  date: 01/30/2023
  author: hushuxu
---

<!-- ![Wio E5](https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) -->

<div style={{textAlign: 'center'}}>
    <a href="https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong></a>
</div>

> LoRaWAN® は LoRa Alliance® からライセンスを受けて使用されているマークです。
LoRa® マークは Semtech Corporation またはその子会社の商標です。

## 製品紹介

<iframe width={560} height={315} src="https://www.youtube.com/embed/XIksiHEXT3A?si=UNm6zmbeUVhgfWh4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

:::note
最近、Wio-E5 モジュールをベースとした Wio-E5 シリーズをリリースしました。[こちら](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)をクリックして、[Grove モジュール](https://wiki.seeedstudio.com/ja/Grove_LoRa_E5_New_Version/)、[mini 開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)から[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)まで、Wio-E5 ファミリーの新しいメンバーをご覧ください。STM32WL シリーズ用 STM32Cube MCU パッケージ（SDK）を使用して LoRaWAN エンドノードを作成し、LoRaWAN ネットワークに参加してデータを送信する方法について詳しく学ぶには、[mini 開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)と[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)の wiki ページをお読みください。
:::

Wio-E5 は、Seeed Technology Co., Ltd. によって設計された低コスト、超低消費電力、極めてコンパクト、高性能な LoRaWAN® モジュールです。**世界初の LoRa® RF と MCU チップの組み合わせを統合した SoC である ST システムレベルパッケージチップ STM32WLE5JC を搭載しています。** このモジュールには ARM Cortex M4 超低消費電力 MCU と LoRa® SX126X も組み込まれており、(G)FSK モードと LoRa® をサポートしています。LoRa® モードでは 62.5kHz、125kHz、250kHz、500kHz の帯域幅を使用でき、EU868 と US915 をサポートして、さまざまな IoT ノードの設計に適しています。

この Wio E5 モジュールは産業規格で設計されているため、-40℃ ~ 85℃ の広い動作温度範囲で産業用 IoT 製品の設計に非常に適しています。

LoRa® と LoRaWAN® にあまり馴染みがない場合は、詳細について [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) の記事をご確認ください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

<!-- ![SIZE COMPARE](https://files.seeedstudio.com/products/317990687/image/3111605248180_.pic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/3111605248180_.pic.jpg" alt="pir" width={600} height="auto" /></p>

*（極めてコンパクトなサイズ、1ユーロ硬貨より小さい）*

## 特徴

- **超低消費電力**: 2.1uAの低スリープ電流（WORモード）

- **極めてコンパクトなサイズ**: 12mm *12mm* 2.5mm 28ピンSMT

- **高性能**: TXOP=22dBm@868/915MHz; 125KHz BWでSF12の-136.5dBm感度

- **長距離使用**: 158dBリンクバジェット

- **ワイヤレス接続**: 組み込みLoRaWAN®プロトコル、ATコマンド、グローバルLoRaWAN®周波数プランをサポート

- **世界的な互換性**: 広い周波数範囲; EU868 / US915 / AU915 / AS923 / KR920 / IN865

- **優れた柔軟性**: モジュールのMCU上でソフトウェアを開発したいユーザーのために、MCUの他のGPIOを簡単に操作できます。UART、I2C、ADCなどが含まれます。これらの豊富なGPIOインターフェースは、周辺機器を拡張する必要があるユーザーにとって有用です。

- **FCC、CE、ICおよびTelec認証済み**

## アプリケーション

- LoRaWAN®センサーノードおよびあらゆるワイヤレス通信アプリケーションに対応。

![applications](https://files.seeedstudio.com/products/317990687/image/application.png)

## アプリケーションノート

**1. ファクトリーATファームウェア**

Wio-E5シリーズには内蔵ATコマンドファームウェアがあり、LoRaWAN® Class A/B/Cプロトコルと広い周波数プラン（EU868/US915/AU915/AS923/KR920/IN865）をサポートしています。このATコマンドファームウェアにより、開発者は簡単かつ迅速にプロトタイプやアプリケーションを構築できます。

ATコマンドファームウェアには、DFU用のブートローダーとATアプリケーションが含まれています。「PB13/SPI_SCK/BOOT」ピンは、Wio-E5をブートローダーに留めるか、ATアプリケーションにジャンプするかを制御するために使用されます。PB13がHIGHの場合、モジュールはリセット後にATアプリケーションにジャンプし、デフォルトのボーレートは9600です。PB13がLOW（Wio-E5 mini/ Wio-E5開発キットの「Boot」ボタンを押す）の場合、モジュールはブートローダーに留まり、ボーレート115200で1秒ごとに「C」文字を送信し続けます。

:::note

- ファクトリーATファームウェアはRDP（読み取り保護）レベル1でプログラムされており、開発者はSTM32Cube ProgrammerでまずRDPを削除する必要があります。RDPをレベル0に戻すとフラッシュメモリの一括消去が発生し、ファクトリーATファームウェアは再度復元できないことに注意してください。

- Wio-E5モジュールの「PB13/SPI_SCK/BOOT」ピンは通常のGPIOであり、MCUの「BOOT0」ピンではありません。この「PB13/SPI_SCK/BOOT」ピンは、ファクトリーATファームウェアのブートローダーで使用され、APPにジャンプするかブートローダーに留まる（DFU用）かを決定します。実際の「BOOT0」ピンはモジュールにピンアウトされていないため、低消費電力アプリケーションを開発する際にはユーザーは注意が必要です。

:::

**2. クロック設定**

2.1 HSE

- 32MHz TCXO

- TCXO電源: PB0-VDD_TCXO

2.2 LSE

- 32.768KHz水晶発振器

**3. RFスイッチ**

**Wio-E5モジュールはRFO_HPを通してのみ送信します:**

- 受信: PA4=1, PA5=0

- 送信（高出力、SMPSモード）: PA4=0, PA5=1

## ハードウェアピンアウト

<!-- ![](https://files.seeedstudio.com/products/317990687/image/pin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/pin.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/products/317990687/image/pinout.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/pinout.png" alt="pir" width={600} height="auto" /></p>

## 仕様

<table class="tg">
<thead>
  <tr>
    <th >項目</th>
    <th >パラメータ</th>
    <th colspan="4">仕様</th>
    <th >単位</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td  rowspan="2">構造</td>
    <td >サイズ</td>
    <td  colspan="4">12(W)*12(L)*2.5(H)</td>
    <td >mm</td>
  </tr>
  <tr>
    <td >パッケージ</td>
    <td  colspan="4">28ピン、SMT</td>
    <td ></td>
  </tr>
  <tr>
    <td  rowspan="18">電気的特性</td>
    <td >電源</td>
    <td  colspan="4">3.3Vタイプ</td>
    <td >V</td>
  </tr>
  <tr>
    <td >スリープ電流</td>
    <td  colspan="4">2.1uA(WDTオン)</td>
    <td >uA</td>
  </tr>
  <tr>
    <td rowspan="3">動作電流（送信機+MCU）</td>
    <td  colspan="4">50mA @10dBm 434MHzタイプ</td>
    <td  rowspan="3">mA</td>
  </tr>
  <tr>
    <td  colspan="4">111mA @22dBm 470MHzタイプ</td>
  </tr>
  <tr>
    <td  colspan="4">111mA @22dBm 868MHzタイプ</td>
  </tr>
  <tr>
    <td rowspan="3">動作電流（受信機+MCU）</td>
    <td  colspan="4">6.7mA @BW125kHz、868MHzタイプ</td>
    <td rowspan="3">mA</td>
  </tr>
  <tr>
    <td  colspan="4">6.7mA @BW125kHz、434MHzタイプ</td>
  </tr>
  <tr>
    <td  colspan="4">6.7mA @BW125kHz、470MHzタイプ</td>
  </tr>
  <tr>
    <td  rowspan="3">出力電力</td>
    <td  colspan="4">10dBm最大 @434MHz</td>
    <td  rowspan="3">dBm</td>
  </tr>
  <tr>
    <td colspan="4">22dBm最大 @470MHz</td>
  </tr>
  <tr>
    <td colspan="4">22dBm最大 @868MHz</td>
  </tr>
  <tr>
    <td  rowspan="5">感度</td>
    <td  colspan="4">@SF12、BW125kHz</td>
    <td  rowspan="5">dBm</td>
  </tr>
  <tr>
    <td >Fr(MHz)</td>
    <td >最小</td>
    <td >標準</td>
    <td >最大</td>
  </tr>
  <tr>
    <td >434</td>
    <td >-</td>
    <td >-134.5</td>
    <td >-136</td>
  </tr>
  <tr>
    <td >470</td>
    <td >-</td>
    <td >-136.5</td>
    <td >-137.5</td>
  </tr>
  <tr>
    <td >868</td>
    <td >-</td>
    <td >-135</td>
    <td >-137</td>
  </tr>
  <tr>
    <td rowspan="2">高調波</td>
    <td  colspan="4">&lt; -36dBm 1GHz以下</td>
    <td >dBm</td>
  </tr>
  <tr>
    <td  colspan="4">&lt; -40dBm 1GHz以上</td>
    <td >dBm</td>
  </tr>
  <tr>
    <td rowspan="6">インターフェース </td>
    <td >RFIO</td>
    <td colspan="4">RFポート</td>
    <td ></td>
  </tr>
  <tr>
    <td >UART</td>
    <td colspan="4">3グループのUART、2ピンを含む</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td >I2C</td>
    <td colspan="4">1グループのI2C、2ピンを含む</td>
    <td ></td>
  </tr>
  <tr>
    <td >ADC</td>
    <td colspan="4">1つのADC入力、1ピンを含む、12ビット 1Msps</td>
    <td ></td>
  </tr>
  <tr>
    <td >NRST</td>
    <td  colspan="4">手動リセットピン入力</td>
    <td ></td>
  </tr>
  <tr>
    <td >SPI</td>
    <td colspan="4">1グループのSPI、4ピンを含む</td>
    <td ></td>
  </tr>
</tbody></table>

## ソース

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 データシートと仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 ATコマンド仕様</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC データシート</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/RHF0M0E5-HF22-BOM20211111.pdf"> Wio-E5 BOM</a></p>

認証：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 認証 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC 認証 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC 認証 -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Wio-E5-HF TELEC 認証</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC 認証</a></p>

ライブラリ：

- [Wio-E5 kicad ライブラリ](https://files.seeedstudio.com/products/317990687/res/LoRa-E5_kicad_Library.zip)

- [Wio-E5 HF 3D ファイル](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF_3D_File.stp)

- [Wio-E5 Eagle ライブラリ](https://files.seeedstudio.com/wiki/Wio-E5/LORA-E5_Eagle_Library.lbr)

関連 SDK：

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WL シリーズ用 STM32Cube MCU パッケージ</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

## はじめに

### 1. ATコマンドのクイックスタート

#### 1.1 準備

- **ステップ 1.** Wio-E5 開発ボードを Type-C ケーブルで PC に接続します

- **ステップ 2.** シリアルツール（例：Arduino シリアルモニター）を開き、正しい COM ポートを選択し、ボーレートを 9600 に設定し、Both NL & CR を選択します

- **ステップ 3.** "AT" を送信してみると、応答が表示されます。

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 1.2 基本的な AT コマンド

- AT+ID // すべて読み取り、DevAddr(ABP)、DevEui(OTAA)、AppEui(OTAA)

- AT+ID=DevAddr // DevAddr を読み取り

- AT+ID=DevEui // DevEui を読み取り

- AT+ID=AppEui // AppEui を読み取り

- AT+ID=DevAddr,"devaddr" // 新しい DevAddr を設定

- AT+ID=DevEui,"deveui" // 新しい DevEui を設定

- AT+ID=AppEui,"appeui" // 新しい AppEui を設定

- AT+KEY=APPKEY,"16 bytes length key" // アプリケーションセッションキーを変更

- AT+DR=band // バンドプランを変更

- AT+DR=SCHEME // 現在のバンドを確認

- AT+CH=NUM, 0-7 // チャンネル 0～7 を有効化

- AT+MODE="mode" // 動作モードを選択：LWOTAA、LWABP または TEST

- AT+JOIN // JOIN リクエストを送信

- AT+MSG="Data to send" // サーバーによる確認が不要な文字列形式のフレームを送信するために使用

- AT+CMSG="Data to send" // サーバーによる確認が必要な文字列形式のフレームを送信するために使用

- AT+MSGHEX="xx xx xx xx" // サーバーによる確認が不要な16進形式のフレームを送信するために使用

- AT+CMSGHEX="xx xx xx xx" // サーバーによる確認が必要な16進形式のフレームを送信するために使用

#### 1.3 The Things Network への接続とデータ送信

- **ステップ 1.** [The Things Network](https://www.thethingsnetwork.org) ウェブサイトにアクセスし、新しいアカウントにサインアップします

- **ステップ 2.** ログイン後、プロフィールをクリックし、**Console** を選択します

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** デバイスとゲートウェイの追加を開始するクラスターを選択します

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** **Go to applications** をクリックします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** **+ Add application** をクリックします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width="400" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Application ID** を入力し、**Create application** をクリックします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**注意：** ここで **Application name** と **Description** は必須フィールドではありません。**Application name** を空白のままにすると、デフォルトで **Application ID** と同じ名前が使用されます

以下が新しく作成されたアプリケーションです

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width="1000" height="auto"></p> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **+ Add end device** をクリックします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** **Manually** をクリックして、登録認証情報を手動で入力します

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width="420" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** お住まいの地域に応じて **Frequency plan** を選択します。また、このデバイスを接続するゲートウェイと同じ周波数を使用することを確認してください。**LoRaWAN® version** として **MAC V1.0.2** を、**Regional Parameters version** として **PHY V1.0.2 REV B** を選択します。これらの設定は Wio-E5 の LoraWAN® スタックに対応しています。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width="450" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 10.** Wio-E5 モジュールがシリアルコンソール経由でまだアクセス可能な状態で、シリアルモニターで以下の AT コマンドを送信します：

  - `AT+ID=DevEui` で Device EUI を取得
  - `AT+ID=AppEui` で App EUI を取得
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` で App Key を設定

出力は以下のようになります：

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **ステップ 11.** 上記の情報を**DevEUI**、**AppEUI**、**AppKey**フィールドにコピー＆ペーストします。**End device ID**フィールドは**DevEUI**を入力すると自動的に入力されます。最後に**Register end device**をクリックします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width="450" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 12.** LoRaWAN®ゲートウェイをTTNコンソールに登録します。[こちら](https://wiki.seeedstudio.com/ja/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)に示されている手順を参照してください

- **ステップ 13.** TTNに接続するために以下のATコマンドを入力します

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

デバイスのステータスは **End devices** ページでも確認できます

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width="1000" height="auto"></p> -->
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

ATコマンドの詳細については、[WIo-E5 ATコマンド仕様書](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)を参照してください。

### STM32Cube MCU Packageを使用した開発

このセクションは、STM32WLシリーズ用STM32Cube MCUパッケージ（SDK）を使用して複数のアプリケーションを構築することを目的とした、Wio-E5 mini/ Wio-E5 Development Kit向けです。

**注意:** STM32WLシリーズ用STM32Cube MCUパッケージの最新バージョンであるv1.1.0をサポートするようにライブラリを更新しました。

:::note
SDKでプログラムする前に工場出荷時のATファームウェアを消去する必要があるため、まず[工場出荷時ATファームウェアの消去](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#21-erase-factory-at-firmware)セクションをお読みください。工場出荷時のATファームウェアを消去すると、復元することはできません。
:::

#### 準備

ソフトウェア：

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html)：コンパイルとデバッグ用

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html)：STM32デバイスのプログラミング用

ハードウェア：

- LoRaWAN®ネットワークサーバーに接続されたLoRaWAN®ゲートウェイ（例：TTN）

- USB Type-Cケーブルと ST-LINK。Type-Cケーブルをボードの Type-Cポートに接続して電源とシリアル通信を行います。ST-LINKを以下のようにSWDピンに接続します

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO設定の概要

- Wio-E5シリーズのハードウェア設計は、STの公式STM32WL55JC開発ボードであるNUCLEO-WL55JCと少し異なるため、開発者はSDKサンプルをWio-E5シリーズに適応させるために一部のgpioを再設定する必要があります。私たちはすでにGPIOを再設定していますが、その違いを指摘することが必要だと考えています。

|SDKサンプルラベル|NUCLEO-WL55JCのGPIO|Wio-E5 mini/ Wio-E5 Development KitのGPIO|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|なし|
|BUT1|PA0|PB13 (ブートボタン)|
|BUT2|PA1|なし|
|BUT3|PC6|なし|
|LED1|PB15|なし|
|LED2|PB9|PB5|
|LED3|PB11|なし|
|DBG1|PB12|PA0 (D0ボタン)|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|USART|USART2(PA2/PA3)|USART1: PB6=TX , PB7=RX|

### アプリケーション

ここでは、STM32WL シリーズ用 STM32Cube MCU パッケージ（SDK）を使用した Wio-E5 mini/ Wio-E5 Development Kit のいくつかのアプリケーションを探索します。

#### LoRaWAN® エンドノード

このアプリケーションは、Wio-E5 mini/ Wio-E5 Development Kit を TTN（The Things Network）に接続し、LoRaWAN® ゲートウェイとの接続後にデータを送信します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを展開し、`Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE` に移動します

- **ステップ 3.** **.project** ファイルをダブルクリックします

  **注意:** MAC の場合、以下のオプションのいずれかを使用してプロジェクトを開く必要があります：

  - **1.** `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node` に移動します。ファイル "LoRaWAN_End_Node.ioc" をダブルクリックします。

  - **2.** 以下の画像のように「Import Projects from File System or Archieve」を使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** プロジェクトを右クリックし、**Properties** をクリックします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width="280" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs` に移動し、**Convert to Intel Hex file (-O ihex)** にチェックを入れ、**Apply and Close** をクリックします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'** をクリックし、エラーなしでコンパイルされることを確認します

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width="520" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

次に、**Device EUI**、**Application EUI**、**Application KEY**、および **LoRawan Region** を変更します

- **ステップ 7.** [こちらのガイド](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network)に従って TTN アプリケーションをセットアップし、**Application EUI** を取得して `LoRaWAN/App/se-identity.h` のマクロ定義 `LORAWAN_JOIN_EUI` にコピーします。例えば、ここでの Application EUI は `80 00 00 00 00 00 00 0x07` です：

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

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** デフォルトのLoRaWAN®リージョンは`EU868`です。`LoRaWAN/App/lora_app.h`の`ACTIVE_REGION`マクロ定義を設定することで変更できます。

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

- **ステップ 12.** 次に、`Erasing & Programming`ページに移動し、hexファイルのパスを選択してください（例：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`）。以下の画像のようにプログラミングオプションを選択し、`Start Programming`をクリックしてください！

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

このアプリケーションは、Wio-E5 mini/ Wio-E5 Development Kit を TTN (The Things Network) に接続し、LoRaWAN® ゲートウェイとの接続後にデータを送信します。以前の LoRaWAN End Node アプリケーションとこの FreeRTOS LoRaWAN® アプリケーションの違いは、前者がベアメタル上で動作するのに対し、こちらは FreeRTOS 上で動作することです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN` に移動します

- **ステップ 3.** **.project** ファイルをダブルクリックします

- **ステップ 4.** 以前の **LoRaWAN® End Node** アプリケーションの **ステップ 4 - ステップ 13** を参照して、Wio-E5 mini/ Wio-E5 Development Kit を TTN に接続してください！

#### FreeRTOS LoRaWAN® AT

このアプリケーションも、Wio-E5 mini/ Wio-E5 Development Kit を TTN (The Things Network) に接続し、LoRaWAN® ゲートウェイとの接続後にデータを送信します。以前の FreeRTOS LoRaWAN® アプリケーションとこのアプリケーションの違いは、AT コマンドを使用できることです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT` に移動します

- **ステップ 3.** **.project** ファイルをダブルクリックします

- **ステップ 4.** 以前の **LoRaWAN® End Node** アプリケーションの **ステップ 4 - ステップ 12** を参照してください

- **ステップ 5.** **Arduino Serial Monitor** などのシリアルモニターを開くと、以下の出力が表示されます

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **AT?** と入力して **ENTER** を押すと、利用可能なすべての AT コマンドが表示されます

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **Device EUI**、**Application EUI**、**Application KEY**、**LoRawan Region** を変更したい場合は、AT コマンドを使用して変更できます。ただし、これらのパラメータはこの例では **se-identity.h** と **lora_app.h** で既に設定されています

- **ステップ 8.** **AT+JOIN=1** と入力すると、接続が成功すると以下の出力が表示されます！

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width="400" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**注意:** ここでは **AT+JOIN=(Mode)** 形式を使用する必要があります。**Mode** は **ABP の場合は 0**、**OTAA の場合は 1** に対応します。

#### FreeRTOS LowPower

このアプリケーションは、Wio-E5 mini/ Wio-E5 Development Kit で低電力モードを有効にします。アプリケーションがフラッシュされると、ボードは 2 秒間通常の電力を消費し、2 秒間低電力モードに入る、というサイクルを繰り返します。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIP ファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower` に移動します

- **ステップ 3.** **.project** ファイルをダブルクリックします

- **ステップ 4.** プロジェクトを右クリックして **Properties** をクリックします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width="280" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs` に移動し、**Convert to Intel Hex file (-O ihex)** にチェックを入れて **Apply and Close** をクリックします

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **Build 'Debug'** をクリックすると、エラーなしでコンパイルされるはずです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** `STM32CubeProgrammer`を開き、ST-LINKをPCに接続し、デバイスの`RESETボタン`を押したまま、`Connect`をクリックして`RESETボタン`を離します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** Read Out Protectionが`AA`であることを確認し、`BB`と表示されている場合は、`AA`を選択して`Apply`をクリックします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 9.** 次に、`Erasing & Programming`ページに移動し、hexファイルのパスを選択します（例：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`）、以下の画像のようにプログラミングオプションを選択し、`Start Programming`をクリックします！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
プログラミングが完了すると、**Download verified successfully**というメッセージが表示されます。

- **ステップ 10.** 電力計を接続してWio-E5 mini/ Wio-E5 Development KitをPCに接続します。ボード上の赤色LEDが1秒ごとに点滅し、ボードが通常状態と低電力状態を切り替えることがわかります（電力計の電流が低電力状態では1秒間下がり、通常動作状態では1秒間上がります）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### Low Power

このアプリケーションは、Wio-E5 mini/ Wio-E5 Development Kitで低電力モードも有効にします。前のFreeRTOS LowPowerアプリケーションとこのLow Powerアプリケーションの違いは、前者がFreeRTOS上で動作するのに対し、こちらはベアメタル上で動作することです。

- **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)をクリックして**Seeed-Studio/LoRaWan-E5-Node**リポジトリにアクセスし、ZIPファイルとしてダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2.** ZIPファイルを展開し、`LoRaWan-E5-Node > Projects > Applications > LowPower`に移動します

- **ステップ 3.** **.project**ファイルをダブルクリックします

- **ステップ 4.** 前の**FreeRTOS LowPower**アプリケーションの**ステップ 4 - ステップ 10**を参照すると、最終的に電力計で同じ出力が確認できます！

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
