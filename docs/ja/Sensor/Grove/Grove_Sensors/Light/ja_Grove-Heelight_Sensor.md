---
description: Grove - Heelight Sensor
title: Grove - Heelight Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Heelight_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/Heelight%20Sensor%20plus%20coin.jpg" /></div>

Grove – Heelight Sensor は、最大 500 のデジタル音声コマンドを認識できるスマート音声センサーです。もともとは Heelight というデジタル音波で制御可能なスマートなカラフル電球で使用されていました。現在、このセンサーを小型で整然とした Grove モジュールに導入し、Arduino ベースのプロジェクトでスマート制御を実現できるようになりました。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- デジタル音声認識

- 500 以上のデジタル音声コマンドをサポート

- Grove システムとの互換性

## 仕様

| 製品名               | Grove-Heelight Sensor |
|----------------------|-----------------------|
| 動作電圧            | DC 3.3V~5V            |
| 動作電流            | 15mA                  |
| 認識範囲            | 0.1~10m               |
| 角度範囲            | 360°                  |
| サイズ              | 20*20mm               |
| ボーレート          | 115200                |
| シリアルポート出力  | TTL ロジックレベル    |

## はじめに

### 必要なもの

|名前 |機能| 数量 |リンク|
|---|---|---|---|
|Base Shield V2| Grove コネクタを提供 |1 |[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|
|Seeeduino V4.2| コントローラー |1 |[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|
|Grove - Heelight Sensor |センサー| 1| [今すぐ購入](https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html)|

### ハードウェア接続

- Base Shield V2 を Seeeduino V4.2 に接続します。
- Grove - Heelight Sensor を Base Shield V2 の D6 ポートに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/hardware%20connection.JPG" /></div>

### コードのアップロード

コードをアップロードする前に、正しいボードと COM ポートを選択していることを確認してください。Seeeduino V4.2 の場合、Arduino/Genuino Uno を選択できます。

以下はセンサーの能力を示す基本的な例です。異なるデジタル音を受信（または聞く）すると、シリアルモニターに異なる 16 進値を出力します。この例はリソースからもダウンロードできます。

```
/*
  ソフトウェアシリアルの複数シリアルテスト

 ハードウェアシリアルから受信し、ソフトウェアシリアルに送信します。
 ソフトウェアシリアルから受信し、ハードウェアシリアルに送信します。

 回路:
 * RX はデジタルピン 10 (他のデバイスの TX に接続)
 * TX はデジタルピン 11 (他のデバイスの RX に接続)

 注意:
 Mega および Mega 2560 のすべてのピンが変更割り込みをサポートしているわけではないため、
 RX に使用できるのは以下のみです:
 10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69

 Leonardo のすべてのピンが変更割り込みをサポートしているわけではないため、
 RX に使用できるのは以下のみです:
 8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI).

 作成: 過去の時代
 修正: 2012年5月25日
 作成者: Tom Igoe
 Mikal Hart の例に基づく

 この例のコードはパブリックドメインです。
*/

#include <SoftwareSerial.h>

SoftwareSerial mySerial(6, 7); // RX, TX

void setup()
{
  // シリアル通信を開き、ポートが開くのを待ちます:
  Serial.begin(57600);
   mySerial.begin(115200);
  while (!Serial) {
    ; // シリアルポートが接続されるのを待ちます。Leonardo のみ必要
  }


  Serial.println("おやすみなさい、月!");

  // ソフトウェアシリアルポートのデータレートを設定

  //mySerial.println("こんにちは、世界?");
}

void loop() // 繰り返し実行
{
  if (mySerial.available())
  {
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.println();
  }
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

### 結果

シリアルモニターを開き、ボーレートを 57600 に設定してから音を再生します。511 種類の異なる[デジタル音](https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip)を用意しています。音を再生するたびに、Heelight センサーはその音に対応する 16 進値を出力し、16 進値の最後の 2 文字は音の値と同じです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight%20sensor%20output.png" /></div>

:::note
このセンサーが提供された特定の音を PC や他のスピーカーで再生した際にうまく動作しない場合は、音量を低く設定してください。Windows PC では 10/100 を推奨します。
:::

## リソース

- [Heelight の公式ウェブサイト](http://www.heelight.com/)
- [500以上のデジタル音声オーディオ](https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip)
- [サンプルコード](https://github.com/SeeedDocument/Grove_Heelight_Sensor/tree/master/res/Grove_-_Heelight_Sensor_example)

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66の筐体、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには、最新のSenseCAP S210xをお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>