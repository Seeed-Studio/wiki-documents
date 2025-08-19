---
description: XIAO ESP32S3 & Wio-SX1262 キットの紹介
title: XIAO ESP32S3 & Wio-SX1262 キットの紹介
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /ja/wio_sx1262_with_xiao_esp32s3_kit
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

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
    Seeed オンラインストアで購入
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
    Aliexpress で購入
  </a>
</div>

## はじめに

この親指サイズの LoRa 開発キットは、XIAO ESP32S3 と Wio-SX1262 LoRa モジュールで構成されており、Meshtastic や LoRa/LoRaWAN プロジェクトに最適なスターターキットです。WiFi、BLE、LoRa をサポートし、内蔵の電源管理チップを備え、IIC、UART、その他の GPIO インターフェースを介して拡張可能で、Arduino 開発にも対応しています。  
XIAO ESP32S3 & Wio-SX1262 キットは、低価格で高コストパフォーマンスのシングルチャネル LoRaWAN LoRa モジュールです。長距離、低消費電力、小データ量のアプリケーションシナリオに適しており、30 台以上のノードデバイスをサポートします（アップロード間隔、データペイロードなどに依存）。

Seeed は、この XIAO ESP32S3 & Wio-SX1262 キットに対して以下の 3 つのアプリケーションを提供しています。
- Meshtastic を使用したネットワーク通信
- LoRaWAN ノードとしての設定
- LoRaWAN ゲートウェイとしての設定

## 特徴

* **Meshtastic がすぐに使用可能**: Meshtastic ファームウェアがプリフラッシュされており、電源を入れるだけで動作します。
* **優れた RF パフォーマンス**: LoRa (862-930MHz)、2.4GHz Wi-Fi、BLE 5.0 のデュアル無線通信をサポートし、U.FL アンテナ接続時に 2～5km (LoRa) および 100m+ (Wi-Fi/BLE) の遠隔通信が可能です。
* **親指サイズのコンパクト設計**: 21 x 18mm、XIAO のクラシックなフォームファクターを採用し、ウェアラブルデバイスのようなスペース制限のあるプロジェクトに適しています。
* **強力な MCU ボード**: 最大 240MHz で動作する ESP32S3 32ビットデュアルコア Xtensa プロセッサを搭載し、複数の開発ポートを備え、Arduino / MicroPython に対応。
* **精巧な電源設計**: Type-C USB インターフェースとリチウムバッテリー充電管理を含みます。

## 仕様

| 特徴 | 詳細 |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8、Xtensa LX7 デュアルコア、32ビットプロセッサ、最大 240 MHz で動作 |
| LoRa | Semtech SX1262 ベース、862-930MHz をサポート |
| BLE | Bluetooth 5.0、Bluetooth メッシュ |
| Wi-Fi | 完全な 2.4GHz Wi-Fi サブシステム |
| インターフェース (ESP32S3) | 1x UART、1x IIC、1x IIS、1x SPI (SX1262 に接続)、11x GPIO (PWM)、9x ADC、1x ユーザー LED、1x 充電 LED、1x リセットボタン、1x ブートボタン |
| インターフェース (Wio-SX1262) | 1x ユーザーボタン、1x SPI (ESP32S3 に接続) |
| 電源 | 入力電圧 (Type-C): 5V <br/> 入力電圧 (BAT): 4.2V <br/> バッテリー充電電流: 100mA |
| 動作温度 | -40°C ~ 65°C |
| 寸法 | 21 x 17.8mm |

## ハードウェア準備

### 部品リスト

| アイテム | 数量 |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Wio-SX1262 拡張ボード | x1 |
| Wi-Fi アンテナ | x1 |
| LoRa アンテナ | x1 |

### 推奨アクセサリ

XIAO 拡張ボードを使用してスクリーンやセンサーを追加したり、Grove 拡張ボードを介して Grove センサーを追加することができます。

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO 拡張ボード</th>
      <th>Grove ベース for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

このキットでは、多機能アプリケーションをサポートするために2種類のアンテナも提供しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/37.png" style={{width:600, height:'auto'}}/></div>

:::note
オリジナルのFPCアンテナ：**テスト用**のみ。信頼性が必要な場合は、追加でアンテナ2を購入してください。
:::

## ハードウェア概要

<table align="center">
  <tr>
	    <th>Wio-SX1262 拡張ボード図</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
	<tr>
	    <th>XIAO ESP32S3 前面インジケータ図</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3 背面インジケータ図</th>
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

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/AGPZ9xnX3gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## リソース

* [Wio-SX1262 モジュールデータシート](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
* [Wio-SX1262 回路図](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
* [Wio-SX1262 for XIAO 3Dファイル](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>