---
title: Grove - Wio-E5
nointro: null
keywords:
  - LoRa
  - E5
  - Grove
description: Grove LoRa-E5は、Seeed Studioによる強力で多用途なLoRaモジュールです。その機能、データシート、認証、および関連SDKを探索してください。
image: https://files.seeedstudio.com/wiki/Grove-Wio-E5/1.jpg
slug: /ja/Grove_LoRa_E5_New_Version
last_update:
  date: 05/15/2025
  author: Spencer
---


<div class="table-center">
  <table align="center">
    <tr>
        <th>Grove Wio E5</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/1.jpg" style={{width:'auto', height:320}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

> LoRaWAN®は、LoRa Alliance®からライセンスを受けて使用される商標です。  
LoRa®マークは、Semtech Corporationまたはその子会社の商標です。

Grove Wio-E5について詳しく説明する前に、まずWio-E5について簡単に理解しましょう。

[Wio-E5](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html)は、ARM Cortex M4超低消費電力MCUとLoRa® RFラジオSX126xを1つのチップに統合したSTM32WLE5JCを搭載しています。このモジュールは、EU868およびUS915周波数でLoRa®およびLoRaWAN®プロトコルをサポートし、(G)FSK、BPSK、(G)MSK、およびLoRa®変調にも対応しています。また、FCC、CE、IC、Telecの認証を取得しています（Wio-E5の詳細については、[Wio-E5 wiki](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/)を参照してください）。

[Grove Wio-E5](https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html)は、この超低消費電力のWio-E5を組み込んでいます。オンボードのGroveコネクタにより、簡単にプラグアンドプレイで統合でき、開発ボードに超長距離伝送の強力な機能を提供します。

旧バージョンである[RFM95超長距離トランシーバーモジュール](https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module-LoRa-Module-support-868M-frequency-p-2807.html)を搭載した[Grove - Long Range 868MHz](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz.html)のアップグレード版として、Grove LoRa-E5は[Wio-E5 STM32WLE5JCモジュール](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html)を組み込み、LoRaWAN®プロトコルをサポートする高性能で使いやすい無線LoRa®モジュールです。

Wio-E5とRFM95チップのさらなる比較:
![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png)

Grove - Wio-E5を開発ボードに接続することで、UART接続を介してATコマンドを使用してWio-E5を簡単に操作および制御できます。Grove Wio-E5は、IoTデバイスの開発、テスト、長距離・超低消費電力のIoTシナリオ（例：スマート農業、スマートオフィス、スマート産業）に最適な選択肢となるでしょう。工業規格に基づいて設計されており、動作温度範囲は-40℃〜85℃、高感度は-116.5 dBmから-136 dBm、出力電力は10 dBmから22 dBmです。

## 特徴

- Wio-E5 (STM32WLE5JC) 搭載
- EU868/US915周波数帯域でLoRaWAN®プロトコルをサポート
- 最大10kmの超長距離送信範囲（理想的な条件下での値）
- UART接続を介したATコマンドによる簡単な制御
- プラグアンドプレイのGroveインターフェースによる迅速なプロトタイピング
- 超低消費電力と高性能

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4081615359627_.pic_hd.jpg)

1. Wio-E5 STM32WLE5JC ([データシート](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf))

2. MHF IPEXコネクタ

3. ワイヤアンテナ

4. Groveコネクタ

5. LEDインジケータ

<!-- 不正確、これは単なるモジュールであり、プログラミングをサポートしていません -->
<!-- ## 対応プラットフォーム
<table>
  <tr>
    <th>Arduino</th>
    <th>Raspberry Pi</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/products/113020091/Raspberry_Pi-Logo.wine.png" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
    <td style={{ textAlign: 'center' }}>
      <img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" />
    </td>
  </tr>
</table> -->

## 仕様

<!-- <style type="text/css" xml="space" dangerouslySetInnerHTML={{__html: "<!--\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}\n.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}\n" }} /> -->

<div class="table-center">
<table class="tg" align="center">
<thead>
<tr><th class="tg-f2tp" colspan="2">部品リスト:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Grove - Wio-E5 PCBA *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Groveユニバーサルケーブル *1</td>
</tr>
</tbody>
</table>
</div>

<div class="table-center">
<table class="tg" align="center">
<thead>
<tr><th class="tg-f2tp" colspan="2">一般的なパラメータ</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j">電圧供給:</td>
<td class="tg-uu1j">3.3V - 5V</td>
</tr>
<tr>
<td class="tg-uu1j">電力出力:</td>
<td class="tg-uu1j">3.3Vで最大+20 dBm</td>
</tr>
<tr>
<td class="tg-uu1j">動作周波数</td>
<td class="tg-uu1j">868/915MHz</td>
</tr>
<tr>
<td class="tg-uu1j">プロトコル</td>
<td class="tg-uu1j">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-uu1j">感度</td>
<td class="tg-uu1j">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-uu1j">変調方式</td>
<td class="tg-uu1j">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-uu1j">電流</td>
<td class="tg-uu1j">スリープモードでわずか60uA</td>
</tr>
<tr>
<td class="tg-uu1j">サイズ</td>
<td class="tg-uu1j">20*40mm</td>
</tr>
<tr>
<td class="tg-uu1j">動作温度</td>
<td class="tg-uu1j">-40℃ ~ 85℃</td>
</tr>
</tbody>
</table>
</div>

<!-- <style type="text/css" xml="space" dangerouslySetInnerHTML={{__html: "<!--\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}\n.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}\n" }} /> -->

## アプリケーション

- LoRaWAN®センサーノードおよび任意のワイヤレス通信アプリケーションに対応
- IoTデバイスのテストと開発

![](https://files.seeedstudio.com/products/317990687/image/application.png)

## アプリケーションノート

#### ノート 1. 工場出荷時のATファームウェア

Wio-E5シリーズには**組み込みのATコマンドファームウェア**が搭載されており、LoRaWAN® *Class A/B/C*プロトコルと幅広い周波数プラン（*EU868/US915/AU915/AS923/KR920/IN865*）をサポートしています。このATコマンドファームウェアを使用することで、開発者は簡単かつ迅速にプロトタイプやアプリケーションを構築できます。

ATコマンドファームウェアにはDFU用のブートローダーとATアプリケーションが含まれています。"PB13/SPI_SCK/BOOT"ピンは、Wio-E5がブートローダーに留まるかATアプリケーションにジャンプするかを制御するために使用されます。PB13がHIGHの場合、モジュールはリセット後にATアプリケーションにジャンプし、デフォルトのボーレートは9600です。PB13がLOWの場合（Wio-E5 Dev BoardまたはWio-E5 miniの"Boot"ボタンを押す）、モジュールはブートローダーに留まり、ボーレート115200で毎秒1回"C"文字を送信し続けます。

:::caution 注意

- 工場出荷時のATファームウェアはRDP（Read Protection）レベル1でプログラムされています。開発者はSTM32Cube Programmerを使用してまずRDPを解除する必要があります。RDPをレベル0に戻すとフラッシュメモリが全消去され、工場出荷時のATファームウェアは再び復元できなくなることに注意してください。
- Wio-E5モジュールの"PB13/SPI_SCK/BOOT"ピンは通常のGPIOであり、MCUの"BOOT0"ピンではありません。この"PB13/SPI_SCK/BOOT"ピンは工場出荷時のATファームウェアのブートローダーで使用され、APPにジャンプするかブートローダーに留まるか（DFU用）を決定します。実際の"BOOT0"ピンはモジュールにピンアウトされていないため、低消費電力アプリケーションを開発する際には注意が必要です。
:::

#### ノート 2. クロック構成

2.1 HSE

- 32MHz TCXO
- TCXO電源供給: PB0-VDD_TCXO

2.2 LSE

- 32.768KHzクリスタルオシレーター

#### ノート 3. RFスイッチ

**Wio-E5モジュールはRFO_HPを通じてのみ送信します:**

- 受信: PA4=1, PA5=0
- 送信（高出力、SMPSモード）: PA4=0, PA5=1

#### ノート 4. 一般的なワークフローガイド - Grove LoRa E5の構成と使用

Grove LoRa E5には組み込みのLoRaWANファームウェアが搭載されており、ATサーバーを提供します（[LoRa-E5 ATコマンド仕様](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)を参照してください）。

ハードコードされていないデバイスと同様に、必要に応じてすべてのEUIおよびAPIキーを定義できます。このワークフローの詳細については、[SenseCAP Indicator Application LoRaWAN](https://wiki.seeedstudio.com/ja/SenseCAP_Indicator_Application_LoRaWAN/#HEAD_register_device)を参照してください。

あなたの製品（XIAO [任意のマイクロコントローラー] + Grove E5）の典型的なワークフローは以下の通りです：

1. デバイスをLoRaWANネットワークサーバーに登録して、EUIとキーの資格情報を取得します。
2. LoRa E5デバイスを構成して、EUIおよびその他のパラメータを設定します。
3. 使用開始: メッセージを送受信します。注意: 利用可能なLoRaWANゲートウェイの範囲内である必要があります。

Arduinoプロジェクトの場合、デバイスを構成するためにこのライブラリ（リポジトリ）を推奨します：[andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5)。

LNS（LoRaWANネットワークサーバー）が正しく設定されていることを確認し、資格情報とLoRaパラメータが一致していることを検証してください。

## 例とデモ

1. [Grove - Wio-E5 P2P 例](https://wiki.seeedstudio.com/ja/Grove_Wio_E5_P2P/) 純粋なUART機能を使用して2つのWio-E5デバイス間で通信
2. [Grove - Wio-E5 TTN デモ](https://wiki.seeedstudio.com/ja/Grove_Wio_E5_TTN_Demo/) Wio-E5を介してTTN LoRaWANネットワークにアクセス
3. [Grove - Wio-E5 Helium デモ](https://wiki.seeedstudio.com/ja/Grove_Wio_E5_Helium_Demo/) Grove - Wio-E5モジュールとSeeeduino XIAOモジュールを使用してHelium IoTネットワークに接続
4. [Grove - Wio-E5 Arduino Uno R4と使用するデモ](https://wiki.seeedstudio.com/ja/Grove_Wio_E5_SenseCAP_Cloud_Demo/)
5. [Grove - Wio-E5 XIAO ESP32S3と使用するデモ](https://wiki.seeedstudio.com/ja/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3/)
6. [Wio-E5とXIAO ESP32S3を使用してPlatformIO(Arduino)でLoRaWANネットワークにアクセス](/ja/platformio_wio_e5/) 実践ガイド。PlatformIOを使用してArduino互換ボードとWio-E5を統合し、効率的なLoRaWAN接続を実現する詳細な手順を提供。

## リソース

**データシート:**

- [Grove Wio-E5 v1.0.brd](http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd)
- [Grove Wio-E5 v1.0.pdf](https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf)
- [Grove Wio-E5 v1.0.sch](http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch)
- [Wio-E5 データシートと仕様](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf)
- [Wio-E5 ATコマンド仕様](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
- [STM32WLE5JC データシート](https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf)

**認証:**

- [Wio-E5-HF 認証 CE-VOC-RED](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf)
- [Wio-E5-HF FCC 認証 -DSS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf)
- [Wio-E5-HF FCC 認証 -DTS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf)
- [Wio-E5-HF TELEC 認証](https://files.seeedstudio.com/products/317990687/res/Telec.zip)
- [Wio-E5-HF IC 認証](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf)

**関連SDK:**

- [STM32WLシリーズ用STM32Cube MCUパッケージ](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

## ✨ コントリビュータープロジェクト

- Seeed Studioの友人Andresに感謝します。彼は[複数の例を提供するGrove - Wio-e5ライブラリ](https://github.com/andresoliva/LoRa-E5)を構築しました。このライブラリはArduino Nano 33 BLE SenseのようなArduinoボードに適しており、さらに[XIAO ESP32S3 Sense](https://github.com/andresoliva/LoRa-E5)とも互換性があります。
- これにより、ユーザーはSeedStudio LoRaモジュールGrove - Wio-E5との簡単で明確かつ安全なやり取りが可能になり、**LoRaの初歩を学ぶ人々の教育ツール**として、また**低消費電力プロジェクトでこのモジュールを使用したい人々のための準備**として役立つことを期待しています。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>