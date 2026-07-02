---
description: XIAO ESP32S3 & Wio-SX1262 キットの紹介
title: XIAO ESP32S3 & Wio-SX1262 キット概要
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /wio_sx1262_with_xiao_esp32s3_kit
sku: 102010611
sidebar_position: 1
last_update:
  date: 09/30/2024
  author: Evelyn Chen
createdAt: '2024-10-08'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/wio_sx1262_with_xiao_esp32s3_kit/
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
    Seeed オンラインストアで入手
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
    Aliexpress で入手
  </a>
</div>

## はじめに

親指サイズのこの LoRa 開発キットは、XIAO ESP32S3 と Wio-SX1262 LoRa モジュールで構成されており、Meshtastic や LoRa/LoRaWAN プロジェクトに最適なスターターキットです。WiFi、BLE、LoRa をサポートし、電源管理チップを内蔵、IIC、UART などの GPIO インターフェースで拡張可能で、Arduino 開発にも対応しています。
XIAO ESP32S3 & Wio-SX1262 キットは、低価格かつ高いコストパフォーマンスを備えたシングルチャネル LoRaWAN LoRa モジュールです。長距離、低消費電力、小容量データといったアプリケーションシナリオに適しており、30 台以上のノードデバイスをサポートします（アップロード間隔、データペイロードなどに依存）。

Seeed は、この XIAO ESP32S3 & Wio-SX1262 キット向けに 3 種類のアプリケーションを提供しています。

- Meshtastic を使用したネットワーク通信
- LoRaWAN ノードとしての構成
- LoRaWAN ゲートウェイとしての構成

## 特長

- **Meshtastic がすぐに使える**: Meshtastic ファームウェアがプリインストールされており、電源を入れるだけですぐに動作します。
- **優れた RF 性能**: LoRa（862〜930MHz）、2.4GHz Wi-Fi および BLE 5.0 のデュアル無線通信をサポートし、U.FL アンテナ接続時に 2〜5km（LoRa）および 100m 以上（Wi-Fi/BLE）の長距離通信が可能です。
- **親指サイズのコンパクト設計**: 21 x 18mm、XIAO のクラシックなフォームファクタを採用し、ウェアラブルデバイスなどスペース制約のあるプロジェクトに適しています。
- **高性能 MCU ボード**: 最大 240MHz で動作する ESP32S3 32 ビット、デュアルコア Xtensa プロセッサを搭載し、複数の開発ポートを備え、Arduino / MicroPython をサポートします。
- **入念な電源設計**: Type-C USB インターフェースとリチウムバッテリー充電管理を備えています。

## 仕様

| 項目 | 詳細 |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8、Xtensa LX7 デュアルコア、最大 240 MHz で動作する 32 ビットプロセッサ |
| LoRa | Semtech SX1262 ベース、862〜930MHz をサポート |
| BLE | Bluetooth 5.0、Bluetooth メッシュ |
| Wi-Fi | 完全な 2.4GHz Wi-Fi サブシステム |
| インターフェース (ESP32S3) | 1x UART、1x IIC、1x IIS、1x SPI（SX1262 接続）、11x GPIO（PWM）、9x ADC、1x ユーザー LED、1x 充電 LED、1x リセットボタン、1x ブートボタン |
| インターフェース (Wio-SX1262) | 1x ユーザーボタン、1x SPI（ESP32S3 接続） |
| 電源 | 入力電圧 (Type-C): 5V <br/> 入力電圧 (BAT): 4.2V <br/> 充電バッテリー電流: 100mA |
| 動作温度 | -40°C ～ 65°C |
| 寸法 | 21 x 17.8mm |

## ハードウェアの準備

### パーツリスト

| 品目 | 数量 |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Wio-SX1262 拡張ボード | x1 |
| Wi-Fi アンテナ | x1 |
| LoRa アンテナ | x1 |

### 推奨アクセサリ

画面やセンサーを追加するための XIAO Expansion Board に対応し、Grove Expansion Board を介して Grove センサーを追加できます。

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO Expansion Board</th>
      <th>Grove Base for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

また、このキット向けに 2 種類のアンテナも提供しており、多機能なアプリケーションをサポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/37.png" style={{width:600, height:'auto'}}/></div>

:::note
標準付属の FPC アンテナ: **テスト用途のみ**です。信頼性が求められる要件の場合は、別途 Antenna 2 をご購入ください。
:::

## ハードウェア概要

<table align="center">
  <tr>
     <th>Wio-SX1262 拡張ボード 図</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
     <th>Wio-SX1262 拡張ボード 比較</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/extension_comparation.jpg" style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
     <th>XIAO ESP32S3 表面インジケータ図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3 裏面インジケータ図</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3 ピン一覧</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
</table>

:::note
`Wio-SX1262 for XIAO ESP32S3` は B2B コネクタ接続を使用し、`Wio-SX1262 for XIAO nRF52840` はスルーホールピンヘッダ接続を使用します。どちらの拡張ボードも、対応する XIAO 開発ボードと組み合わせて使用する必要があります。
:::

## ビデオ解説

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/AGPZ9xnX3gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## リソース

- [Wio-SX1262 モジュール データシート](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- [Wio-SX1262 回路図](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio-SX1262 for XIAO 3D ファイル](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
