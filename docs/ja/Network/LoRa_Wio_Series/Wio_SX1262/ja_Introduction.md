---
description: Wio-SX1262の紹介
title: Wio-SX1262 紹介
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/34.png
slug: /ja/wio_sx1262
sidebar_position: 1
last_update:
  date: 10/12/2024
  author: Evelyn Chen
---

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 紹介

Wio-SX1262は、高性能なSemtech SX1262 LoRa®無線通信ICをベースとした低コスト、超低消費電力、超コンパクトなLoRa® Pure RFモジュールです。868～915 MHzのLoRa & LoRaWAN周波数をサポートし、最大+22 dBmの高効率送信電力を実現します。オンボードIPEXアンテナコネクタとTCXO（温度補償水晶発振器）の高品質発振器を搭載し、産業用の高温・低温環境での安定動作を保証します。ワイヤレスセンサーネットワークやその他のIoTデバイス、特にバッテリー駆動、低消費電力、長距離接続を必要とするアプリケーション向けに設計されています。ワイヤレス検針、農業センサー、LoRaWANシングルチャネルゲートウェイなどのアプリケーションに最適です。

## 特徴

- Wio SX1262は、Semtech Corporationが設計したサブGHz無線トランシーバーSX1262をベースとしています
- Wio SX1262は、高効率統合パワーアンプにより最大+22 dBmまで送信可能です
- Wio SX1262は、LPWAN用途向けのLoRa®変調と、レガシー用途向けの(G)FSK変調をサポートします。
- 868 MHzから960 MHzまでの周波数カバレッジ。
- SPIインターフェースを搭載。
- Wio SX1272-NはPCB設計を容易にするSMTパッケージRFピンを持ち、IPEXコネクタを含まないことを意味します。

### 他のモジュールとの比較

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/69.png" style={{width:500, height:'auto'}}/></div></td>

## ハードウェア概要

Wio-SX1262モジュールはSX1262をベースとしており、様々なIoTノードの設計に最適です。(G)FSKとLoRa®変調の両方をサポートし、LoRa®モードでは7.8～500 kHzの帯域幅範囲を提供します。このモジュールは外部MCUとの通信用にSPIインターフェースを提供します。その電源分配方式は、DC-DCまたはリニアレギュレータLDOの2つのハードウェアオプションをサポートし、Wio-SX1262モジュールはDC-DC設計を採用しています。さらに、内部RF基準周波数として高精度アクティブTCXOを特徴とし、DIO3がTCXO電圧電源として機能します。

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

## Wio-SX1262モジュールベースのリファレンス設計

以下は、Wio-SX1262モジュールを使用した典型的なリファレンス設計です。リファレンス設計に従ってモジュールをホストMCUに接続するだけです。

アンテナ設計の考慮事項：アンテナインターフェースは50Ωインピーダンスで設計されており、ユーザーはアンテナ用にπ型マッチングネットワークを確保することを推奨します。

**リファレンス設計：**

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/35.png" style={{width:700, height:'auto'}}/></div></td>

## リソース

- [Wio SX1262 モジュールデータシート](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262-N_Module_Datasheet.pdf)
- [Wio SX1262 回路図](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio SX1262 シンボルとパッケージファイル](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_symbol_and_package_file.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、様々なサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>