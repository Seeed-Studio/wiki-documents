---
description: Wio-SX1262 と XIAO ESP32S3 キットの紹介および 3D プリントケースを使用した組み立てガイド
title: XIAO ESP32S3 & Wio-SX1262 キット（3D ケース付き）
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/12.jpg
slug: /ja/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/7.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

このデバイスは XIAO ESP32S3 と Wio-SX1262 LoRa モジュールをベースにしています。精巧な 3D プリントケースと組み合わせ、868 - 915MHz の広い周波数範囲と 2dBi の利得を持つ外部アンテナを備えています。2.5km の単一チャネル LoRaWAN ゲートウェイおよび Meshtastic 通信をサポートします。GPIO ポートを介して GNSS モジュールやその他の追加モジュールとペアリングすることが可能です。

## 特徴

* **高い RF 性能**: LoRa (862 - 930MHz)、2.4GHz Wi-Fi、および BLE 5.0 のデュアル無線通信をサポート。外部アンテナに接続すると、2.5km（LoRa）および 100m+（Wi-Fi / BLE）の遠距離通信が可能です。
* **LoRaWAN ハブ**: 単一チャネル LoRaWAN ファームウェアがプリフラッシュされており、電源を入れるだけで動作します。
* **3D ケースデザイン**: サイズは 22x23x57mm で、黒色の ABS 素材を使用し、広い温度範囲（-40℃ ~ 100℃）に対応しており、屋外やスペースが限られたプロジェクトに最適です。
* **強力な MCU ボード**: 最大 240MHz で動作する ESP32S3 32ビットデュアルコア Xtensa プロセッサを搭載し、複数の開発ポートを備え、Arduino / MicroPython をサポートします。
* **精巧な電源設計**: Type-C USB インターフェース、複数の GPIO/I2C/UART インターフェース、およびリチウムバッテリー充電管理を備えています。
* **多用途ハードウェアで多様なアプリケーションに対応**: [Meshtastic](https://meshtastic.org/) のノードまたはルーター、[単一チャネル LoRaWAN ゲートウェイ](https://github.com/Lora-net/one_channel_hub) 用デバイス、または LoRa & LoRaWAN センサーとして開発可能です。

## 仕様

| 特徴 | 詳細 |
| ---- | ---- |
| プロセッサ | ESP32-S3R8、Xtensa LX7 デュアルコア、32ビットプロセッサ、最大 240 MHz で動作 |
| メモリ | オンチップ 8M PSRAM & 8MB フラッシュ |
| ワイヤレス | 完全な 2.4GHz Wi-Fi サブシステム<br/>BLE: Bluetooth 5.0、Bluetooth メッシュ<br/>LoRa: 単一チャネルゲートウェイ |
| インターフェース | 1x UART、1x IIC、1x IIS、1x SPI、11x GPIOs (PWM)、9x ADC、1x ユーザー LED、1x 充電 LED<br/>1x リセットボタン、1x ブートボタン |
| 電源 | 入力電圧 (Type-C): 5V<br/>入力電圧 (BAT): 4.2V<br/>充電バッテリー電流: 100mA |
| 動作温度 | -40 ~ 65°C | 
| **アンテナ** |
| タイプ | SMA から I-PEX 外部アンテナ |
| 最大利得 | 2 dBi |
| 寸法 | 13.0x195mm |
| 設置 | ケース外部に設置 |
| 通信距離 | 開放環境で 2.5km |
| アプリケーション | ほとんどのシナリオに適し、屋内および屋外向けに設計 |
| **機械的仕様** |
| 寸法 | 22x23x57mm |
| 材質 | ABS |
| 重量 | 37.1g |

## ハードウェア概要

<table align="center">
  <tr>
	    <th>Wio-SX1262 拡張ボード図</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
	    <th>XIAO ESP32S3 前面表示図</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3 背面表示図</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3 ピンリスト</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
</table>

### 部品リスト
| アイテム | 数量 |
| ---- | ---- |
| XIAO ESP32S3 & Wio-SX1262 キット（3Dケース付き） | x1 |
| 20cm USB Type-C ケーブル | x1 |

### 推奨アクセサリ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/10.jpg" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO 用 L76K GNSS モジュール</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## アプリケーション

このキットには2つのアプリケーションが提供されています。

- LoRaWAN ゲートウェイとして設定する場合（事前にフラッシュ済み）、[LoRaWAN ゲートウェイ設定](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/)および[LNS接続の手順](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_LNS_TTN/)に従ってください。
- Meshtastic を使用してネットワーク通信を行う場合、[Meshtastic の手順](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_meshtastic/)に従ってください。

## リソース

* [Wio-SX1262 for XIAO 3D ファイル](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
* [Wio-SX1262 for XIAO 回路図](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
* [Wio-SX1262 モジュールデータシート](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
* [Github One-Channel Hub プロジェクト](https://github.com/Lora-net/one_channel_hub)
* [ケース 3D ファイル](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/XIAO_ESP32S3_Meshtastic%26LoRa_24.11.20.zip)