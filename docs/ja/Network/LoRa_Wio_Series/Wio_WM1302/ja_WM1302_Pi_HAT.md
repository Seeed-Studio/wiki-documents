---
description: Raspberry Pi用WM1302 Pi Hatの使用開始ガイド。
title: Raspberry Pi用WM1302 Pi Hat
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /ja/WM1302_Pi_HAT
last_update:
  date: 01/30/2023
  author: hushuxu
---

<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)

## 製品紹介

:::note
        最近、LoRa-E5モジュールをベースとした[WM1302 LoRaWANゲートウェイモジュール](https://wiki.seeedstudio.com/ja/WM1302_module/)とLoRa-E5シリーズをリリースしました。[こちら](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)をクリックして、[Groveモジュール](https://wiki.seeedstudio.com/ja/Grove_LoRa_E5_New_Version/)、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)から[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)まで、LoRa-E5ファミリーの新しいメンバーをご覧ください。STM32WLシリーズ用STM32Cube MCUパッケージ（SDK）を使用してLoRaWANエンドノードを作成し、LoRaWANネットワークに参加してデータを送信する方法については、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)と[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)のwikiページで詳細をご覧ください。
:::

WM1302 Pi HATは、SX1302をベースとしたWM1302 LoRaWANゲートウェイモジュールをRaspberry Pi 4Bまでのバージョンに接続するために特別に設計されたアドオン拡張ボードです。また、LoRaWAN認証チップとGPSモジュールも統合されています。

[WM1302モジュール](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)は、mini-PCIeフォームファクターを採用した新世代のLoRaWANゲートウェイモジュールです。Semtech® SX1302ベースバンドLoRaWAN®チップをベースとしたWM1302は、ゲートウェイ製品の長距離無線伝送のより大きな潜在能力を引き出します。従来のSX1301およびSX1308 LoRa®チップと比較して、より高い感度、より少ない消費電力、より低い動作温度を特徴としています。

WM1302 Pi HATはWM1302モジュールのmini-PCIeフォームファクターをサポートし、標準52ピンゴールドフィンガーを40ピン互換ヘッダーでRaspberry Pi GPIOコネクターに自動的に構成できます。これにより、ユーザーがRaspberry Piと統合する開発プロセスが簡素化されます。WM1302 Pi HATは拡張ボードとして機能し、Raspberry PiにSX1302の機能を追加して、長距離無線伝送用のLoRaWANおよびLoRaプロトコルをサポートします。統合されたGPSモジュールは、WM1302モジュールのタイミングと位置の精度も向上させます。

WM1302 Pi HATは、WM1302ゲートウェイモジュールとRaspberry Piと組み合わせることで、スマート農業、スマートシティ、その他のIoTシナリオをサポートする完全でコンパクトなLoRaWAN無線通信ゲートウェイの構築を支援します。

## 機能

- 40ピン雌ピンヘッダー付き標準Pi Hatフォームファクター

- Raspberry Pi 3 Model B+/ Raspberry 4 対応

- GPS モジュール内蔵

- LoRaWAN 認証チップ内蔵

## ハードウェア概要

<!-- ![](https://files.seeedstudio.com/products/113100022/5371617183671_.pic_hd.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/5371617183671_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113100022/pi%20hat.png" alt="pir" width={600} height="auto" /></p>

## アプリケーション

- LoRaWAN ゲートウェイデバイス/ホットスポット開発

- 長距離無線通信アプリケーション開発

- Raspberry Pi ベースの学習と実験

- LoRa および LoRaWAN アプリケーションの学習と研究

## 仕様

<table class="tg">
<thead>
  <tr>
    <th >寸法</th>
    <th >56*65mm</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td >重量</td>
    <td >0.501</td>
  </tr>
  <tr>
    <td>動作電圧</td>
    <td >5V</td>
  </tr>
  <tr>
    <td >電源インターフェース</td>
    <td >40 Pin Header または USB</td>
  </tr>
  <tr>
    <td >Raspberry Pi 40-Pin Headers</td>
    <td >Raspberry Pi 5 対応 / Raspberry Pi 4 B 対応 / Raspberry Pi 3 A+/B/B+ 対応 / Raspberry Pi 2 B 対応 / Raspberry Pi A+/B+ 対応 /   Raspberry Pi Zero/Zero W 対応</td>
  </tr>
  <tr>
    <td >PCIe Header</td>
    <td >52 Pin Mini-PCIe Header</td>
  </tr>
  <tr>
    <td >GNSS</td>
    <td >GPS L1、GLONASS L1、BeiDou B1 対応</td>
  </tr>
  <tr>
    <td >バッテリー</td>
    <td >除外</td>
  </tr>
</tbody>
</table>

<table class="tg">
<thead>
  <tr><th class="tg-f2tp" colspan="2">パーツリスト:</th></tr>
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
## 技術サポート & 製品ディスカッション

技術的な問題については、[フォーラム](http://forum.seeedstudio.com/)にお送りください。

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
