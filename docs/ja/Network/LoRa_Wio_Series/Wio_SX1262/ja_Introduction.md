---
description: Wio-SX1262の紹介
title: Wio-SX1262の紹介
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/34.png
slug: /ja/wio_sx1262
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 概要

Wio-SX1262は、高性能なSemtech SX1262 LoRa®無線通信ICをベースにした、低コスト、超低消費電力、超コンパクトなLoRa® Pure RFモジュールです。868 MHzから915 MHzのLoRaおよびLoRaWAN周波数をサポートし、最大+22 dBmの高効率な送信電力を提供します。オンボードのIPEXアンテナコネクタと高品質のTCXO（温度補償型水晶発振器）を搭載しており、産業用の高温および低温環境でも安定した動作を保証します。このモジュールは、特にバッテリー駆動、低消費電力、長距離接続を必要とするワイヤレスセンサーネットワークやその他のIoTデバイス向けに設計されています。ワイヤレスメーター読み取り、農業センサー、LoRaWANシングルチャネルゲートウェイなどのアプリケーションに最適です。

## 特徴

- Wio SX1262は、Semtech Corporationによって設計されたサブGHz無線トランシーバーであるSX1262をベースにしています。
- Wio SX1262は、統合された高効率のパワーアンプを使用して最大+22 dBmで送信可能です。
- Wio SX1262は、LPWANユースケース向けのLoRa®変調と、従来のユースケース向けの(G)FSK変調をサポートします。
- 868 MHzから960 MHzまでの周波数範囲をカバー。
- SPIインターフェースを搭載。
- Wio SX1272-Nは、IPEXコネクタを含まないSMTパッケージのRFピンを備えており、PCB設計が容易です。

### 他のモジュールとの比較

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/69.png" style={{width:500, height:'auto'}}/></div></td>

## ハードウェア概要

Wio-SX1262モジュールはSX1262をベースにしており、さまざまなIoTノードの設計に最適です。(G)FSKおよびLoRa®変調の両方をサポートし、LoRa®モードでは7.8 kHzから500 kHzの帯域幅範囲を提供します。このモジュールは、外部MCUとの通信のためにSPIインターフェースを提供します。電力分配スキームは、DC-DCまたはリニアレギュレータLDOの2つのハードウェアオプションをサポートしており、Wio-SX1262モジュールはDC-DC設計を採用しています。さらに、高精度のアクティブTCXOを内部RF基準周波数として備えており、DIO3がTCXO電圧電源として機能します。

### 回路図

<td>
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/31.png" style={{width:500, height:'auto'}}/>
</div>
</td>

### ピン配置

<td>
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/30.png" style={{width:500, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/68.jpg" style={{width:700, height:'auto'}}/>
</div>
</td>

## Wio-SX1262モジュールを基にしたリファレンスデザイン

以下は、Wio-SX1262モジュールを使用した典型的なリファレンスデザインです。リファレンスデザインに従ってモジュールをホストMCUに接続するだけです。

アンテナ設計の考慮事項：アンテナインターフェースは50Ωインピーダンスで設計されており、ユーザーはアンテナ用にπ型マッチングネットワークを予約することをお勧めします。

**リファレンスデザイン:**

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/35.png" style={{width:700, height:'auto'}}/></div></td>

## リソース

- [Wio SX1262 モジュールデータシート](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262-N_Module_Datasheet.pdf)
- [Wio SX1262 回路図](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio SX1262 シンボルおよびパッケージファイル](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_symbol_and_package_file.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>