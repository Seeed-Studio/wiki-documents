---
description: XIAO ESP32S3 & Wio-SX1262 キット、XIAO拡張ボード、groveセンサー、L76K GNSSモジュールとアクリルケースを使用したDIY meshtasticキット。
title: Meshtastic用4層サンドイッチキット
image: https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg
slug: /ja/4_layer_sandwich_for_meshtastic
sidebar_position: 6
last_update:
  date: 12/13/2024
  author: Evelyn Chen
---

# DIY 4層サンドイッチ Meshtasticキット

XIAO ESP32S3 & Wio-SX1262 キットをベースにした、フル機能のmeshtasticノードが開発されました。この4層サンドイッチ構造のmeshtasticキットは、XIAO拡張ボードを基盤として使用しています。groveインターフェースとピン対ピンインターフェースを通じて、meshtasticファームウェアでサポートされる様々な拡張可能なモジュールをサポートします。また、制御可能な環境照明、テレメトリセンサー、環境センサー、GPSモジュールを含むI2C通信プロトコルもサポートします。meshtastic通信技術を使用したモジュラー設計と機能アプリケーションを簡単にセットアップできます。さらに、JSTバッテリーコネクタを通じて外部3.7Vバッテリーに接続して、モバイルノードを実現できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-08.jpg" alt="pir" width={600} height="auto" /></p>

## ハードウェア準備

| SKU | 製品名 |
| ---- | ---- |
| 102010611 | XIAO ESP32S3 & Wio-SX1262 キット|
| 103030356 | XIAO拡張ボード|
| 110010024 | XIAO拡張ボード用アクリルケース |
| 109100021 | GNSSモジュール、Quectel L76K搭載 |
| 101020513 | Grove - 温度、湿度、圧力、ガスセンサー (BME680) |
|  | JSTコネクタ付き403040-450mA LiPoバッテリー |

:::note

1. GNSSモジュールは、XIAO ESP32S3モジュールにピン対ピンで接続できるように、前身の競合するピンを修正する必要があります。そのため、**2024年12月22日**以降に新しく入荷されたGNSSモジュールをご購入ください。
2. アクリルケースのDXFファイルが提供されています。3mm厚のアクリル板を使用して自分でカットして組み立てることができます。

:::

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262 キット</th>
      <th>XIAO拡張ボード</th>
      <th>XIAO拡張ボード用アクリルケース</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110010024_preview-08.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Quectel L76K搭載GNSSモジュール</th>
      <th>Grove - 温度、湿度、気圧、ガスセンサー (BME680)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-l76k-gnss-module-for-seeed-studio-xiao-feature.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar896611_img_0076a.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

上記のモジュールに加えて、このキットは以下のgroveモジュールもサポートしています。ご自身のニーズに応じてご購入ください。

追加サポートモジュール：

| SKU | 製品名 | 購入リンク|
| ---- | ---- |---- |
| 101020932 | Grove - Temperature & Humidity Sensor V2.0 (DHT20) / Upgraded DHT11/ I2C Port | [Get One](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) |
| 101020192 | Grove - Barometer Sensor (BMP280) | [Get One](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html) |
| 101020193 | Grove - Temp&Humi&Barometer Sensor (BME280) | [Get One](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) |
| 101020556 | Grove - I2C High Accuracy Temperature Sensor(MCP9808) | [Get One](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) |
| 101020212 | Grove - Temp&Humi Sensor(SHT31) | [Get One](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html) |
| 101020513 | Grove - Temperature, Humidity, Pressure and Gas Sensor (BME680) | [Get One](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) |

## ステップ 1: Meshtastic ファームウェアをフラッシュする

XIAO ESP32S3 に Meshtastic ファームウェアが既にプリフラッシュされていることを確認してください。まだの場合は、[この手順](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_meshtastic/#flash-firmware)に従ってフラッシュしてください。

## ステップ 2: XIAO 拡張ボードのピンヘッダーを再はんだする

XIAO 拡張ボードの底面にピン対ピン接続で GNSS モジュールを取り付けるために、XIAO 拡張ボードのメスヘッダーを再はんだし、オスピン付きのメスヘッダーに交換する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/120.png" alt="pir" width={400} height="auto" /></p>

## ステップ 3: 3mm アクリルケースをレーザーカットする

レーザーカット用の dxf ファイルが提供されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/1.png" alt="pir" width={400} height="auto" /></p>

- [dxf ファイル](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dxf)
- [dwg ファイル](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/4_layer_kit/4_layer_sandwich_Casing.dwg)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
