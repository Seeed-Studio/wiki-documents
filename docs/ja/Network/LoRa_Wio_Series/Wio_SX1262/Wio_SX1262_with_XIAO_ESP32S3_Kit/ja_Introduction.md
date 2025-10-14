---
description: XIAO ESP32S3 & Wio-SX1262 キットの紹介
title: XIAO ESP32S3 & Wio-SX1262 キット紹介
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /ja/wio_sx1262_with_xiao_esp32s3_kit
sidebar_position: 1
last_update:
  date: 09/30/2024
  author: Evelyn Chen
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:600, height:'auto'}}/></div>

<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <a
    href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
    style={{
      display: 'inline-block',
      margin: '0 12px',
      padding: '12px 24px',
      backgroundColor: '#4ec354',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      textDecoration: 'none',
    }}
  >
    Seeedオンラインストアで購入
  </a>

  <a
    href="https://s.click.aliexpress.com/e/_o2E9vLh"
    style={{
      display: 'inline-block',
      margin: '0 12px',
      padding: '12px 24px',
      backgroundColor: '#4ec354',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      textDecoration: 'none',
    }}
  >
    Aliexpressで購入
  </a>
</div>

## 紹介

XIAO ESP32S3とWio-SX1262 LoRaモジュールで構成されるこの親指サイズのLoRa開発キットは、MeshtasticおよびLoRa/LoRaWANプロジェクトに最適なスターターキットです。WiFi、BLE、LoRaをサポートし、内蔵電源管理チップを搭載し、IIC、UART、その他のGPIOインターフェースを介して拡張でき、Arduino開発に対応しています。
XIAO ESP32S3 & Wio-SX1262キットは、低価格で高いコストパフォーマンスを持つシングルチャネルLoRaWAN LoRaモジュールです。長距離、低消費電力、小データ量のアプリケーションシナリオに適しています。30台以上のノードデバイスをサポートします（アップロード間隔、データペイロードなどに依存）。

SeeedはこのXIAO ESP32S3 & Wio-SX1262キット用に3つのアプリケーションを提供しています。

- ネットワーク通信にMeshtasticを使用
- LoRaWANノードとして設定
- LoRaWANゲートウェイとして設定

## 特徴

- **Meshtasticがすぐに動作**: Meshtasticファームウェアがプリフラッシュされており、電源を入れるだけですぐに動作します。
- **優れたRF性能**: LoRa（862-930MHz）2.4GHz Wi-FiおよびBLE 5.0デュアルワイヤレス通信をサポートし、U.FLアンテナ接続時に2～5km（LoRa）および100m+（Wi-Fi/BLE）の遠距離通信をサポートします。
- **親指サイズのコンパクト設計**: 21 x 18mm、XIAOのクラシックなフォームファクターを採用し、ウェアラブルデバイスなどのスペース制限のあるプロジェクトに適しています。
- **強力なMCUボード**: 最大240MHzで動作するESP32S3 32ビット、デュアルコア、Xtensaプロセッサを搭載し、複数の開発ポートを実装、Arduino / MicroPythonをサポートします。
- **精巧な電源設計**: Type-C USBインターフェースとリチウムバッテリー充電管理を含みます。

## 仕様

| 機能 | 詳細 |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8、Xtensa LX7デュアルコア、最大240MHzで動作する32ビットプロセッサ |
| LoRa | Semtech SX1262ベース、862-930MHzをサポート |
| BLE | Bluetooth 5.0、Bluetoothメッシュ |
| Wi-Fi | 完全な2.4GHz Wi-Fiサブシステム |
| インターフェース（ESP32S3） | 1x UART、1x IIC、1x IIS、1x SPI（SX1262に接続）、11x GPIO（PWM）、9x ADC、1xユーザーLED、1x充電LED、1xリセットボタン、1xブートボタン |
| インターフェース（Wio-SX1262） | 1xユーザーボタン、1x SPI（ESP32S3に接続） |
| 電源 | 入力電圧（Type-C）: 5V <br/> 入力電圧（BAT）: 4.2V <br/> バッテリー充電電流: 100mA |
| 動作温度 | -40°C ～ 65°C |
| 寸法 | 21 x 17.8mm |

## ハードウェア準備

### パーツリスト

| アイテム | 数量 |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Wio-SX1262拡張ボード | x1 |
| Wi-Fiアンテナ | x1 |
| LoRaアンテナ | x1 |

### 推奨アクセサリ

XIAO拡張ボードと互換性があり、スクリーンやセンサーを追加でき、Grove拡張ボード経由でGroveセンサーを追加できます。

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO拡張ボード</th>
      <th>Grove Base for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

このキットには、多機能アプリケーションをサポートするために2種類のアンテナも提供しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/37.png" style={{width:600, height:'auto'}}/></div>

:::note
オリジナルFPCアンテナ：**テスト**専用です。信頼性の高い要件については、アンテナ2を追加でご購入ください。
:::

## ハードウェア概要

<table align="center">
  <tr>
     <th>Wio-SX1262拡張ボード図</th>
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

## ビデオ説明

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/AGPZ9xnX3gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## リソース

- [Wio-SX1262 モジュールデータシート](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- [Wio-SX1262 回路図](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio-SX1262 for XIAO 3Dファイル](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
