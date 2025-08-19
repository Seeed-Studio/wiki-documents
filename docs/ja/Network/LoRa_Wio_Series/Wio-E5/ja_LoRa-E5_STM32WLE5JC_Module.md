---
description: Wio-E5 STM32WLE5JC モジュールの使い方を始める。
title: Wio-E5 STM32WLE5JC モジュール
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/ja/wio_gps_board/
slug: /ja/LoRa-E5_STM32WLE5JC_Module
last_update:
  date: 05/15/2025
  author: hushuxu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![Wio E5](https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

> LoRaWAN® は LoRa Alliance® のライセンスの下で使用される商標です。  
LoRa® マークは Semtech Corporation またはその子会社の商標です。

## 製品紹介

<iframe width={560} height={315} src="https://www.youtube.com/embed/XIksiHEXT3A?si=UNm6zmbeUVhgfWh4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

:::note
最近、Wio-E5 モジュールをベースにした Wio-E5 シリーズをリリースしました。[こちら](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)をクリックして、[Grove モジュール](https://wiki.seeedstudio.com/ja/Grove_LoRa_E5_New_Version/)、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)、[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)など、Wio-E5 ファミリーの新しいメンバーをご覧ください。STM32WLシリーズ(SDK)用のSTM32Cube MCUパッケージを使用して LoRaWAN エンドノードを作成し、LoRaWAN ネットワークに参加してデータを送信する方法については、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)および[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)のWikiページをご覧ください。
:::

Wio-E5 は、Seeed Technology Co., Ltd. によって設計された低コスト、超低消費電力、非常にコンパクトで高性能な LoRaWAN® モジュールです。  
**このモジュールには、LoRa® RF と MCU チップのコンボを統合した世界初の SoC である ST システムレベルパッケージチップ STM32WLE5JC が含まれています。**  
このモジュールはまた、ARM Cortex M4 超低消費電力 MCU と LoRa® SX126X を組み込んでおり、(G)FSK モードと LoRa® をサポートします。LoRa® モードでは 62.5kHz、125kHz、250kHz、500kHz の帯域幅を使用でき、さまざまな IoT ノードの設計に適しており、EU868 および US915 をサポートします。

この Wio E5 モジュールは産業規格で設計されており、-40℃ ～ 85℃ の広い動作温度範囲で、産業用 IoT 製品の設計に非常に適しています。

LoRa® および LoRaWAN® にあまり詳しくない場合は、詳細について [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) をご覧ください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

<!-- ![SIZE COMPARE](https://files.seeedstudio.com/products/317990687/image/3111605248180_.pic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/3111605248180_.pic.jpg" alt="pir" width={600} height="auto" /></p>

*(非常にコンパクトなサイズ、1ユーロ硬貨よりも小さい)*

## 特徴

* **超低消費電力**: WORモードでスリープ電流がわずか2.1uA

* **非常にコンパクトなサイズ**: 12mm * 12mm * 2.5mm、28ピンSMT

* **高性能**: TXOP=22dBm@868/915MHz; 125KHz BWでSF12の場合、感度は-136.5dBm

* **長距離使用**: 158dBのリンクバジェット

* **ワイヤレス接続**: 組み込みのLoRaWAN®プロトコル、ATコマンド、グローバルLoRaWAN®周波数プラン対応

* **世界的な互換性**: 広い周波数範囲; EU868 / US915 / AU915 / AS923 / KR920 / IN865

* **高い柔軟性**: モジュールのMCU上でソフトウェアを開発したいユーザー向けに、MCUの他のGPIO（UART、I2C、ADCなど）を簡単に操作可能。これらの豊富なGPIOインターフェースは、周辺機器を拡張する必要があるユーザーにとって便利です。

* **FCC、CE、IC、Telec認証取得済み**

## アプリケーション

* LoRaWAN®センサーノードおよびその他のワイヤレス通信アプリケーションに対応。

![applications](https://files.seeedstudio.com/products/317990687/image/application.png)

## アプリケーションノート

**1. 工場出荷時のATファームウェア**

Wio-E5シリーズには、ATコマンドファームウェアが内蔵されており、LoRaWAN® Class A/B/Cプロトコルおよび広範な周波数プラン（EU868/US915/AU915/AS923/KR920/IN865）をサポートしています。このATコマンドファームウェアを使用することで、開発者は簡単かつ迅速にプロトタイプやアプリケーションを構築できます。

ATコマンドファームウェアには、DFU用のブートローダーとATアプリケーションが含まれています。"PB13/SPI_SCK/BOOT"ピンは、Wio-E5をブートローダーに留めるか、ATアプリケーションにジャンプさせるかを制御します。PB13がHIGHの場合、リセット後にモジュールはATアプリケーションにジャンプし、デフォルトのボーレートは9600です。PB13がLOWの場合（Wio-E5 mini/ Wio-E5開発キットの"Boot"ボタンを押す）、モジュールはブートローダーに留まり、ボーレート115200で1秒ごとに"C"文字を送信し続けます。

:::note
* 工場出荷時のATファームウェアはRDP（リードプロテクション）レベル1でプログラムされています。開発者はSTM32Cube Programmerを使用してRDPを解除する必要があります。RDPをレベル0に戻すと、フラッシュメモリが全消去され、工場出荷時のATファームウェアは復元できなくなることに注意してください。

* Wio-E5モジュールの"PB13/SPI_SCK/BOOT"ピンは通常のGPIOであり、MCUの"BOOT0"ピンではありません。この"PB13/SPI_SCK/BOOT"ピンは、工場出荷時のATファームウェアのブートローダーで使用され、APPにジャンプするかブートローダーに留まるか（DFU用）を決定します。実際の"BOOT0"ピンはモジュールにピンアウトされていないため、低消費電力アプリケーションを開発する際には注意が必要です。
:::

**2. クロック構成**

2.1 HSE

* 32MHz TCXO

* TCXO電源供給: PB0-VDD_TCXO

2.2 LSE

* 32.768KHz水晶発振器

**3. RFスイッチ**

**Wio-E5モジュールはRFO_HPを通じてのみ送信します:**

* 受信: PA4=1, PA5=0

* 送信（高出力、SMPSモード）: PA4=0, PA5=1

## ハードウェアピンアウト

<!-- ![](https://files.seeedstudio.com/products/317990687/image/pin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/pin.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/products/317990687/image/pinout.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/pinout.png" alt="pir" width={600} height="auto" /></p>

## 仕様

<table class="tg">
<thead>
  <tr>
    <th>項目</th>
    <th>パラメータ</th>
    <th colspan="4">仕様</th>
    <th>単位</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">構造</td>
    <td>サイズ</td>
    <td colspan="4">12(W)*12(L)*2.5(H)</td>
    <td>mm</td>
  </tr>
  <tr>
    <td>パッケージ</td>
    <td colspan="4">28ピン、SMT</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="18">電気的特性</td>
    <td>電源供給</td>
    <td colspan="4">3.3Vタイプ</td>
    <td>V</td>
  </tr>
  <tr>
    <td>スリープ電流</td>
    <td colspan="4">2.1uA(WDTオン)</td>
    <td>uA</td>
  </tr>
  <tr>
    <td rowspan="3">動作電流 (送信機+MCU)</td>
    <td colspan="4">50mA @10dBm in 434MHzタイプ</td>
    <td rowspan="3">mA</td>
  </tr>
  <tr>
    <td colspan="4">111mA @22dBm in 470MHzタイプ</td>
  </tr>
  <tr>
    <td colspan="4">111mA @22dBm in 868MHzタイプ</td>
  </tr>
  <tr>
    <td rowspan="3">動作電流 (受信機+MCU)</td>
    <td colspan="4">6.7mA @BW125kHz, 868MHzタイプ</td>
    <td rowspan="3">mA</td>
  </tr>
  <tr>
    <td colspan="4">6.7mA @BW125kHz, 434MHzタイプ</td>
  </tr>
  <tr>
    <td colspan="4">6.7mA @BW125kHz, 470MHzタイプ</td>
  </tr>
  <tr>
    <td rowspan="3">出力電力</td>
    <td colspan="4">10dBm 最大 @434MHz</td>
    <td rowspan="3">dBm</td>
  </tr>
  <tr>
    <td colspan="4">22dBm 最大 @470MHz</td>
  </tr>
  <tr>
    <td colspan="4">22dBm 最大 @868MHz</td>
  </tr>
  <tr>
    <td rowspan="5">感度</td>
    <td colspan="4">@SF12, BW125kHz</td>
    <td rowspan="5">dBm</td>
  </tr>
  <tr>
    <td>周波数(MHz)</td>
    <td>最小</td>
    <td>標準</td>
    <td>最大</td>
  </tr>
  <tr>
    <td>434</td>
    <td>-</td>
    <td>-134.5</td>
    <td>-136</td>
  </tr>
  <tr>
    <td>470</td>
    <td>-</td>
    <td>-136.5</td>
    <td>-137.5</td>
  </tr>
  <tr>
    <td>868</td>
    <td>-</td>
    <td>-135</td>
    <td>-137</td>
  </tr>
  <tr>
    <td rowspan="2">高調波</td>
    <td colspan="4">&lt; -36dBm 1GHz以下</td>
    <td>dBm</td>
  </tr>
  <tr>
    <td colspan="4">&lt; -40dBm 1GHz以上</td>
    <td>dBm</td>
  </tr>
  <tr>
    <td rowspan="6">インターフェース</td>
    <td>RFIO</td>
    <td colspan="4">RFポート</td>
    <td></td>
  </tr>
  <tr>
    <td>UART</td>
    <td colspan="4">3グループのUART、2ピンを含む</td>
    <td></td>
  </tr>
  <tr>
    <td>I2C</td>
    <td colspan="4">1グループのI2C、2ピンを含む</td>
    <td></td>
  </tr>
  <tr>
    <td>ADC</td>
    <td colspan="4">1つのADC入力、1ピンを含む、12ビット 1Msps</td>
    <td></td>
  </tr>
  <tr>
    <td>NRST</td>
    <td colspan="4">手動リセットピン入力</td>
    <td></td>
  </tr>
  <tr>
    <td>SPI</td>
    <td colspan="4">1グループのSPI、4ピンを含む</td>
    <td></td>
  </tr>
</tbody></table>

## ソース

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 データシートと仕様</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 ATコマンド仕様</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC データシート</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/RHF0M0E5-HF22-BOM20211111.pdf"> Wio-E5 BOM</a></p>

認証:

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 認証 CE-VOC-RED</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC認証 -DSS</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC認証 -DTS</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Wio-E5-HF TELEC認証</a></p>

* <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC認証</a></p>

ライブラリ:

* [Wio-E5 kicadライブラリ](https://files.seeedstudio.com/products/317990687/res/LoRa-E5_kicad_Library.zip)

* [Wio-E5 HF 3Dファイル](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF_3D_File.stp)

* [Wio-E5 Eagleライブラリ](https://files.seeedstudio.com/wiki/Wio-E5/LORA-E5_Eagle_Library.lbr)

関連SDK:

* <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WLシリーズ用STM32Cube MCUパッケージ</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

## はじめに

### 1. ATコマンドのクイックスタート

#### 1.1 準備

* **ステップ 1.** Wio-E5 開発ボードをType-Cケーブルを使用してPCに接続します。

* **ステップ 2.** シリアルツール（例: Arduino Serial Monitor）を開き、正しいCOMポートを選択し、ボーレートを9600に設定し、Both NL & CRを選択します。

* **ステップ 3.** "AT"を送信して応答を確認します。

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 1.2 基本的なATコマンド

* AT+ID // 全てを読み取る: DevAddr(ABP), DevEui(OTAA), AppEui(OTAA)

* AT+ID=DevAddr // DevAddrを読み取る

* AT+ID=DevEui // DevEuiを読み取る

* AT+ID=AppEui // AppEuiを読み取る

* AT+ID=DevAddr,"devaddr" // 新しいDevAddrを設定する

* AT+ID=DevEui,"deveui" // 新しいDevEuiを設定する

* AT+ID=AppEui,"appeui" // 新しいAppEuiを設定する

* AT+KEY=APPKEY,"16 bytes length key" // アプリケーションセッションキーを変更する

* AT+DR=band // バンドプランを変更する

* AT+DR=SCHEME // 現在のバンドを確認する

* AT+CH=NUM, 0-7 // チャンネル0〜7を有効にする

* AT+MODE="mode" // 動作モードを選択: LWOTAA, LWABP または TEST

* AT+JOIN // JOINリクエストを送信する

* AT+MSG="Data to send" // サーバーによる確認が不要な文字列形式のフレームを送信する

* AT+CMSG="Data to send" // サーバーによる確認が必要な文字列形式のフレームを送信する

* AT+MSGHEX="xx xx xx xx" // サーバーによる確認が不要な16進数形式のフレームを送信する

* AT+CMSGHEX="xx xx xx xx" // サーバーによる確認が必要な16進数形式のフレームを送信する

#### 1.3 The Things Networkに接続してデータを送信する

* **ステップ 1.** [The Things Network](https://www.thethingsnetwork.org) のウェブサイトにアクセスし、新しいアカウントを登録します。

* **ステップ 2.** ログイン後、プロフィールをクリックして**Console**を選択します。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 3.** クラスターを選択してデバイスとゲートウェイを追加します。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 4.** **Go to applications** をクリックします。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 5.** **+ Add application** をクリックします。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width="400" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 6.** **Application ID** を入力し、**Create application** をクリックします。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**注意:** **Application name** と **Description** は必須項目ではありません。**Application name** を空白のままにすると、デフォルトで **Application ID** と同じ名前が使用されます。

以下は新しく作成されたアプリケーションです。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width="1000" height="auto"></p> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 7.** **+ Add end device** をクリックします。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 8.** **Manually** をクリックして、登録資格情報を手動で入力します。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width="420" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 9.** 地域に応じた**Frequency plan**を選択します。また、このデバイスを接続するゲートウェイと同じ周波数を使用することを確認してください。**MAC V1.0.2** を **LoRaWAN® version** として選択し、**PHY V1.0.2 REV B** を **Regional Parameters version** として選択します。これらの設定は Wio-E5 のLoRaWAN®スタックに基づいています。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width="450" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 10.** Wio-E5 モジュールがまだシリアルコンソールでアクセス可能な状態で、以下のATコマンドをシリアルモニターで送信します:

  * `AT+ID=DevEui` を送信してDevice EUIを取得します。
  * `AT+ID=AppEui` を送信してApp EUIを取得します。
  * `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` を送信してApp Keyを設定します。

出力は以下のようになります:

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

* **ステップ 11.** 上記の情報を **DevEUI**、**AppEUI**、**AppKey** フィールドにコピー＆ペーストします。**DevEUI** を入力すると **End device ID** フィールドが自動的に入力されます。最後に **Register end device** をクリックします。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width="450" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 12.** TTN コンソールで LoRaWAN® ゲートウェイを登録します。詳細な手順については [こちら](https://wiki.seeedstudio.com/ja/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console) を参照してください。

* **ステップ 13.** 以下の AT コマンドを入力して TTN に接続します。

```
// US915 を使用している場合
AT+DR=US915
AT+CH=NUM,8-15

// EU868 を使用している場合
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

シリアルモニター上の出力は以下のようになります：

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

シリアルコンソール上で **+JOIN: Network joined** が表示された場合、デバイスが TTN に正常に接続されたことを意味します！

**End devices** ページでデバイスのステータスを確認することもできます。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 14.** 以下の AT コマンドを入力して TTN にデータを送信します。

```
// 文字列 "HELLO" を TTN に送信
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

AT コマンドの詳細については、[WIo-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf) を参照してください。

### STM32Cube MCU パッケージを使用した開発

このセクションは、STM32WLシリーズ（SDK）向けの STM32Cube MCU パッケージを使用して、Wio-E5 mini / Wio-E5 開発キットで複数のアプリケーションを構築することを目的としています。

**注意:** ライブラリは STM32WLシリーズ向け STM32Cube MCU パッケージの最新バージョンである v1.1.0 をサポートするように更新されています。

:::note
[Erase Factory AT Firmware](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#21-erase-factory-at-firmware) セクションを最初にお読みください。SDK を使用してプログラムする前に、ファクトリー AT ファームウェアを消去する必要がある場合があります。ファクトリー AT ファームウェアを消去すると、元に戻すことはできません。
:::

#### 準備

ソフトウェア：

* [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): コンパイルとデバッグ用

* [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): STM32 デバイスのプログラミング用

ハードウェア：

* LoRaWAN® ゲートウェイ（LoRaWAN® ネットワークサーバーに接続済み、例: TTN）

* USB Type-C ケーブルと ST-LINK。Type-C ケーブルをボードの Type-C ポートに接続して電源供給とシリアル通信を行います。ST-LINK を SWD ピンに以下のように接続します。

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO 設定の概要

* Wio-E5 シリーズのハードウェア設計は、ST の公式 STM32WL55JC 開発ボードである NUCLEO-WL55JC とは少し異なるため、SDK の例を Wio-E5 シリーズに適応させるために GPIO を再設定する必要があります。GPIO はすでに再設定されていますが、違いを指摘することが重要だと考えています。

|SDK 例のラベル|NUCLEO-WL55JC の GPIO|Wio-E5 mini / Wio-E5 開発キットの GPIO|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|None|
|BUT1|PA0|PB13 (Boot ボタン)|
|BUT2|PA1|None|
|BUT3|PC6|None|
|LED1|PB15|None|
|LED2|PB9|PB5|
|LED3|PB11|None|
|DBG1|PB12|PA0 (D0 ボタン)|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|USART|USART2(PA2/PA3)|USART1: PB6=TX , PB7=RX|

### アプリケーション

ここでは、STM32WLシリーズ（SDK）向け STM32Cube MCU パッケージを使用して、Wio-E5 mini / Wio-E5 開発キットのいくつかのアプリケーションを探ります。

#### LoRaWAN® エンドノード

このアプリケーションでは、Wio-E5 mini / Wio-E5 開発キットを TTN（The Things Network）に接続し、LoRaWAN® ゲートウェイに接続した後にデータを送信します。

* **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2.** ZIP ファイルを解凍し、`Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE` に移動します。

* **ステップ 3.** **.project** ファイルをダブルクリックします。

* **ステップ 4.** プロジェクトを右クリックし、**Properties** をクリックします。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width="280" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

* **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs` に移動し、**Convert to Intel Hex file (-O ihex)** を選択して **Apply and Close** をクリックします。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 6.** **Build 'Debug'** をクリックし、エラーなしでコンパイルされることを確認してください。

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width="520" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

次に、**Device EUI**、**Application EUI**、**Application KEY**、および **LoRawan Region** を変更します。

* **ステップ 7.** [こちらのガイド](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network)に従って TTN アプリケーションを設定し、**Application EUI** を取得して `LoRaWAN/App/se-identity.h` のマクロ定義 `LORAWAN_JOIN_EUI` にコピーしてください。例えば、ここでの Application EUI は `80 00 00 00 00 00 00 0x07` です。

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

* **ステップ 8.** また、**Device EUI** と **Application Key** を変更するには、`LoRaWAN/App/se-identity.h` のマクロ定義 `LORAWAN_DEVICE_EUI` と `LORAWAN_NWK_KEY` を設定してください。`LORAWAN_DEVICE_EUI` と `LORAWAN_NWK_KEY` が TTN コンソールの `Device EUI` と `App Key` と同じであることを確認してください。

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

* **ステップ 9.** デフォルトの LoRaWAN® リージョンは `EU868` です。これを変更するには、`LoRaWAN/App/lora_app.h` のマクロ定義 `ACTIVE_REGION` を設定してください。

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 10.** 上記の変更後、例を再ビルドして Wio-E5 にプログラムしてください。`STM32CubeProgrammer` を開き、ST-LINK を PC に接続し、デバイスの `RESET ボタン` を押しながら `Connect` をクリックし、その後 `RESET ボタン` を離します。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 11.** Read Out Protection が `AA` であることを確認してください。`BB` と表示されている場合は、`AA` を選択して `Apply` をクリックしてください。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 12.** 次に `Erasing & Programming` ページに移動し、hex ファイルのパスを選択します（例: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`）。以下の画像のようにプログラミングオプションを選択し、`Start Programming` をクリックしてください。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

プログラミングが完了すると、**Download verified successfully** というメッセージが表示されます。

* **ステップ 13.** LoRaWAN® ゲートウェイと TTN が設定されている場合、リセット後に Wio-E5 が正常に参加します！確認用の LoRaWAN® パッケージが 30 秒ごとに TTN に送信されます。参加が成功すると、以下のログがシリアルモニター（ここでは Arduino Serial Monitor を使用）に表示されます。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width="600" height="auto"></p> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>

* おめでとうございます！これで Wio-E5 を LoRaWAN® ネットワークに接続しました！これからさらに興味深い LoRaWAN® エンドノードアプリケーションの開発を進めることができます！

**注意:** Wio-E5 は高出力モードのみをサポートしているため、`radio_board_if.h` で以下のマクロ定義を使用することはできません。

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// または
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

**RBI_CONF_RFO** は `radio_board_if.h` 内で **RBI_CONF_RFO_LP_HP** として定義されていますが、**USE_BSP_DRIVER** が定義されているため使用されません。**BSP_RADIO_GetTxConfig()** 関数は **RADIO_CONF_RFO_HP** を返します。

#### FreeRTOS LoRaWAN®

このアプリケーションでは、Wio-E5 mini / Wio-E5 Development Kit を TTN (The Things Network) に接続し、LoRaWAN® ゲートウェイに接続した後にデータを送信します。以前の LoRaWAN End Node アプリケーションとの違いは、以前のものはベアメタルで動作していたのに対し、こちらは FreeRTOS 上で動作する点です。

* **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードしてください。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2.** ZIP ファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN` に移動してください。

* **ステップ 3.** **.project** ファイルをダブルクリックしてください。

* **ステップ 4.** 前の **LoRaWAN® End Node** アプリケーションの **ステップ 4 - ステップ 13** を参照して、Wio-E5 mini / Wio-E5 Development Kit を TTN に接続してください！

#### FreeRTOS LoRaWAN® AT

このアプリケーションでは、Wio-E5 mini / Wio-E5 Development Kit を TTN (The Things Network) に接続し、LoRaWAN® ゲートウェイに接続した後にデータを送信します。このアプリケーションと以前の FreeRTOS LoRaWAN® アプリケーションの違いは、AT コマンドを使用できる点です。

* **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードしてください。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2.** ZIP ファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT` に移動してください。

* **ステップ 3.** **.project** ファイルをダブルクリックしてください。

* **ステップ 4.** 前の **LoRaWAN® End Node** アプリケーションの **ステップ 4 - ステップ 12** を参照してください。

* **ステップ 5.** **Arduino Serial Monitor** などのシリアルモニターを開くと、以下の出力が表示されます。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width="600" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 6.** **AT?** と入力して **ENTER** を押すと、利用可能なすべての AT コマンドが表示されます。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 7.** **Device EUI**、**Application EUI**、**Application KEY**、および **LoRawan Region** を変更したい場合は、AT コマンドを使用して変更できます。ただし、これらのパラメータはこの例ではすでに **se-identity.h** および **lora_app.h** に設定されています。

* **ステップ 8.** **AT+JOIN=1** と入力すると、接続が成功した場合に以下の出力が表示されます！

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width="400" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**注意:** ここでは **AT+JOIN=(Mode)** フォーマットを使用する必要があります。**Mode** は **0 for ABP** または **1 for OTAA** に対応します。

#### FreeRTOS LowPower

このアプリケーションでは、Wio-E5 mini / Wio-E5 Development Kit に低消費電力モードを有効にします。アプリケーションがフラッシュされると、ボードは通常通り 2 秒間動作し、その後 2 秒間低消費電力モードに入るという動作を繰り返します。

* **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードしてください。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2.** ZIP ファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower` に移動してください。

* **ステップ 3.** **.project** ファイルをダブルクリックしてください。

* **ステップ 4.** プロジェクトを右クリックして **Properties** をクリックしてください。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width="280" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

* **ステップ 5.** `C/C++ Build > Settings > MCU Post build outputs` に移動し、**Convert to Intel Hex file (-O ihex)** をチェックして **Apply and Close** をクリックしてください。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width="500" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

* **ステップ 6.** **Build 'Debug'** をクリックすると、エラーなしでコンパイルされるはずです。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width="460" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 7.** `STM32CubeProgrammer` を開き、ST-LINK を PC に接続し、デバイスの `RESET ボタン` を押しながら、`Connect` をクリックしてから `RESET ボタン` を離します:

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 8.** Read Out Protection が `AA` であることを確認してください。`BB` と表示されている場合は、`AA` を選択して `Apply` をクリックします:

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 9.** 次に、`Erasing & Programming` ページに移動し、hex ファイルのパスを選択します（例: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`）。以下の画像のようにプログラミングオプションを選択し、`Start Programming` をクリックします！

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
プログラミングが完了すると、**Download verified successfully** というメッセージが表示されます。

* **ステップ 10.** Wio-E5 mini または Wio-E5 Development Kit を電力計を接続して PC に接続します。ボード上の赤い LED が毎秒点滅し、ボードが通常状態と低電力状態を切り替えるのがわかります（電力計の電流が低電力状態では 1 秒間下がり、通常動作状態では 1 秒間戻ります）。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### 低電力

このアプリケーションは、Wio-E5 mini または Wio-E5 Development Kit に低電力モードを有効にします。以前の FreeRTOS LowPower アプリケーションとこの Low Power アプリケーションの違いは、前者が FreeRTOS 上で動作するのに対し、後者はベアメタル上で動作する点です。

* **ステップ 1.** [こちら](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) をクリックして **Seeed-Studio/LoRaWan-E5-Node** リポジトリにアクセスし、ZIP ファイルとしてダウンロードします。

<!-- <p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width="1000" height="auto"></p> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2.** ZIP ファイルを解凍し、`LoRaWan-E5-Node > Projects > Applications > LowPower` に移動します。

* **ステップ 3.** **.project** ファイルをダブルクリックします。

* **ステップ 4.** 前の **FreeRTOS LowPower** アプリケーションの **ステップ 4 - ステップ 10** を参照し、最終的に電力計で同じ出力が得られることを確認してください！

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)にご投稿ください。

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>