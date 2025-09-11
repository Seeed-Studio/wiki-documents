---
description: Raspberry Pi 用 WM1302 Pi Hat の使い方を始めましょう。
title: Raspberry Pi 用 WM1302 Pi Hat
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/ja/wio_gps_board/
slug: /ja/WM1302_Pi_HAT
last_update:
  date: 05/15/2025
  author: hushuxu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html) 
## 製品紹介:


:::note
        最近、[WM1302 LoRaWAN ゲートウェイモジュール](https://wiki.seeedstudio.com/ja/WM1302_module/)およびLoRa-E5モジュールに基づくLoRa-E5シリーズをリリースしました。[こちら](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)をクリックして、[Groveモジュール](https://wiki.seeedstudio.com/ja/Grove_LoRa_E5_New_Version/)、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)、[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)など、LoRa-E5ファミリーの新しいメンバーをご覧ください。STM32WLシリーズ(SDK)用のSTM32Cube MCUパッケージを使用してLoRaWANエンドノードを作成し、LoRaWANネットワークに参加してデータを送信する方法については、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)および[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)のWikiページをご覧ください。
:::

WM1302 Pi HATは、SX1302に基づくWM1302 LoRaWAN ゲートウェイモジュールをRaspberry Pi（Raspberry Pi 4Bまでのバージョン）に接続するために設計された拡張ボードです。また、LoRaWAN認証チップとGPSモジュールも統合されています。

[WM1302モジュール](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)は、mini-PCIeフォームファクターを備えた新世代のLoRaWANゲートウェイモジュールです。Semtech® SX1302ベースバンドLoRaWAN®チップに基づいており、ゲートウェイ製品の長距離無線通信の潜在能力をさらに引き出します。従来のSX1301およびSX1308 LoRa®チップと比較して、高感度、低消費電力、低動作温度を特徴としています。

WM1302 Pi HATは、WM1302モジュールのmini-PCIeフォームファクターをサポートし、標準的な52ピンのゴールデンフィンガーをRaspberry Piの40ピン互換ヘッダーに自動的に構成できます。これにより、Raspberry Piとの統合開発プロセスが簡素化されます。WM1302 Pi HATは拡張ボードとして機能し、Raspberry PiにSX1302の機能を追加して、LoRaWANおよびLoRaプロトコルをサポートする長距離無線通信を可能にします。また、統合されたGPSモジュールにより、WM1302モジュールのタイミングと位置の精度が向上します。

WM1302 Pi HATは、WM1302ゲートウェイモジュールおよびRaspberry Piと組み合わせることで、スマート農業、スマートシティ、その他のIoTシナリオをサポートする非常に完成度が高くコンパクトなLoRaWAN無線通信ゲートウェイを構築するのに役立ちます。

## 特徴

- 40ピンのメスピンヘッダーを備えた標準的なPi Hatフォームファクター

- Raspberry Pi 3 Model B+/ Raspberry 4 互換

- GPSモジュール内蔵

- LoRaWAN 認証チップ内蔵

## ハードウェア概要

<!-- ![](https://files.seeedstudio.com/products/113100022/5371617183671_.pic_hd.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/5371617183671_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/pi%20hat.png" alt="pir" width={600} height="auto" /></p>

## アプリケーション

- LoRaWAN ゲートウェイデバイス/ホットスポット開発

- 長距離無線通信アプリケーション開発

- Raspberry Pi を基盤とした学習および実験

- LoRa および LoRaWAN アプリケーションの学習と研究

## 仕様

<table class="tg">
<thead>
  <tr>
    <th>寸法</th>
    <th>56*65mm</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>重量</td>
    <td>0.501</td>
  </tr>
  <tr>
    <td>動作電圧</td>
    <td>5V</td>
  </tr>
  <tr>
    <td>電源インターフェース</td>
    <td>40ピンヘッダーまたはUSB</td>
  </tr>
  <tr>
    <td>Raspberry Pi 40ピンヘッダー</td>
    <td>Raspberry Pi 4 B 対応 / Raspberry Pi 3 A+/B/B+ 対応 / Raspberry Pi 2 B 対応 / Raspberry Pi A+/B+ 対応 / Raspberry Pi Zero/Zero W 対応</td>
  </tr>
  <tr>
    <td>PCIeヘッダー</td>
    <td>52ピンMini-PCIeヘッダー</td>
  </tr>
  <tr>
    <td>GNSS</td>
    <td>GPS L1、GLONASS L1、BeiDou B1 対応</td>
  </tr>
  <tr>
    <td>バッテリー</td>
    <td>含まれていません</td>
  </tr>
</tbody>
</table>

<table class="tg">
<thead>
  <tr><th class="tg-f2tp" colspan="2">部品リスト:</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-uu1j" colspan="2">WM1302 Pi Hat *1</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">APM2.5*6mm ネジ *8</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">M2.5*11.0mm スタッド *4</td>
  </tr>
  <tr>
    <td class="tg-uu1j" colspan="2">PM2.0*H6.0mm ネジ *2</td>
  </tr>
</tbody>
</table>

## 寸法

<!-- ![](https://files.seeedstudio.com/products/113100022/WM1302%20PiHat_Size-17.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/WM1302%20PiHat_Size-17.png" alt="pir" width={600} height="auto" /></p>

## 技術サポートと製品ディスカッション

技術的な問題については、[フォーラム](http://forum.seeedstudio.com/)にご提出ください。

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>