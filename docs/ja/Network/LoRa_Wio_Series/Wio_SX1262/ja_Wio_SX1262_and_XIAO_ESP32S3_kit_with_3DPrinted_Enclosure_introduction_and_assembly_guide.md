---
description: Wio-SX1262とXIAO ESP32S3キットの3Dプリント筐体付きの紹介と組み立てガイド
title: XIAO ESP32S3 & Wio-SX1262キット（3Dケース付き）
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/12.jpg
slug: /ja/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide
sidebar_position: 3
last_update:
  date: 11/21/2024
  author: Evelyn Chen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/7.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 紹介

このデバイスはXIAO ESP32S3とWio-SX1262 LoRaモジュールをベースにしています。精巧な3Dプリント筐体と組み合わせ、868-915MHzの広い周波数範囲と2dBiゲインの外部アンテナを装備しています。2.5kmのシングルチャネルLoRaWANゲートウェイとMeshtastic通信をサポートできます。GPIOポートを通じて、GNSSモジュールやその他の追加モジュールとペアリングできます。

## 特徴

- **高いRF性能**: LoRa（862-930MHz）、2.4GHz Wi-Fi、BLE 5.0デュアルワイヤレス通信をサポート。外部アンテナに接続すると、2.5km（LoRa）および100m+（Wi-Fi/BLE）の遠距離通信が可能。
- **LoRaWANハブ**: シングルチャネルLoRaWANファームウェアがプリフラッシュされており、電源投入後すぐに動作可能。
- **3D筐体設計**: 22x23x57mmのサイズで、広い温度範囲（-40℃～100℃）の黒色ABS材料を使用し、屋外や空間制約のあるプロジェクトに最適。
- **強力なMCUボード**: 最大240MHzで動作するESP32S3 32ビット、デュアルコア、Xtensaプロセッサを搭載し、複数の開発ポート、Arduino/MicroPythonをサポート。
- **精巧な電源設計**: Type-C USBインターフェース、複数のGPIO/I2C/UARTインターフェース、リチウムバッテリー充電管理を含む。
- **多用途アプリケーション対応ハードウェア**: [Meshtastic](https://meshtastic.org/)のノードやルーター、[シングルチャネルLoRaWANゲートウェイ](https://github.com/Lora-net/one_channel_hub)のデバイス、またはLoRa & LoRaWANセンサーとして開発可能。

## 仕様

| 機能 | 詳細 |
| ---- | ---- |
| プロセッサ | ESP32-S3R8、Xtensa LX7デュアルコア、最大240MHzで動作する32ビットプロセッサ |
| メモリ | オンチップ8M PSRAM & 8MB Flash |
| ワイヤレス | 完全な2.4GHz Wi-Fiサブシステム<br/>BLE: Bluetooth 5.0、Bluetooth mesh、<br/>LoRa: シングルチャネルゲートウェイ |
| インターフェース | 1x UART、1x IIC、1x IIS、1x SPI、11x GPIOs（PWM）、9x ADC、1x ユーザーLED、1x 充電LED<br/>1x リセットボタン、1x ブートボタン |
| 電源 | 入力電圧（Type-C）: 5V<br/>入力電圧（BAT）: 4.2V<br/>バッテリー充電電流: 100mA |
| 動作温度 | -40 ~ 65°C |
| **アンテナ** |
| タイプ | SMAからI-PEX外部アンテナ |
| 最大ゲイン | 2 dBi |
| 寸法 | 13.0x195mm |
| 設置 | 筐体の外側に設置 |
| 距離 | 開放環境で2.5km |
| 用途 | ほとんどのシナリオに適用可能、屋内外用に設計 |
| **機械的仕様** |
| 寸法 | 22x23x57mm |
| 材質 | ABS |
| 重量 | 37.1g |

## ハードウェア概要

<table align="center">
  <tr>
     <th>Wio-SX1262拡張ボード図</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
     <th>XIAO ESP32S3 フロント表示図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3 バック表示図</th>
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

### パーツリスト

| アイテム | 数量 |
| ---- | ---- |
| XIAO ESP32S3 & Wio-SX1262 Kit with 3D case | x1 |
| 20cm USB type C ケーブル | x1 |

### 推奨アクセサリー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/10.jpg" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>L76K GNSS Module for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## アプリケーション

このキット用に2つのアプリケーションが提供されています。

- LoRaWANゲートウェイとして設定する（プリフラッシュ済み）場合は、[LoRaWANゲートウェイ設定](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/)と[LNS接続の手順](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_LNS_TTN/)に従ってください
- ネットワーク通信にMeshtasticを使用する場合は、[meshtasticの手順](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_meshtastic/)に従ってください

## リソース

- [Wio-SX1262 for XIAO 3Dファイル](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- [回路図 Wio-SX1262 for XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio-SX1262モジュールデータシート](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- [Github One-Channel Hubプロジェクト](https://github.com/Lora-net/one_channel_hub)
- [ケーシング3Dファイル](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/XIAO_ESP32S3_Meshtastic%26LoRa_24.11.20.zip)
