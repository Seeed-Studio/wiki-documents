---
description: Meshtastic® ネットワークの紹介
title: Meshtastic® ネットワークの紹介
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/meshtastic_introduction
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Meshtastic®](https://meshtastic.org/) は、オープンソースのオフグリッドで分散型のメッシュネットワークであり、手頃な価格で低消費電力のデバイス上で動作するように設計されています。これにより、既存の通信インフラがない、または信頼性が低い地域で、安価なLoRa無線を長距離オフグリッド通信プラットフォームとして使用することが可能になります。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/T1000-E-_-05.jpg" alt="pir" width={800} height="auto" /></p>


## 特徴

* 長距離通信（kboxlabsによる254kmの記録）
* メッシュ通信に電話不要
* 分散型通信 - 専用ルーター不要
* 暗号化通信
* 優れたバッテリー寿命
* メッシュ内のメンバー間でテキストメッセージの送受信が可能
* GPSベースの位置情報機能（オプション）
* その他多数！


## 動作の仕組み


Meshtastic はLoRaを利用しています。LoRaは長距離無線プロトコルであり、HAM無線操作とは異なり、追加のライセンスや認証を必要とせず、ほとんどの地域で広く利用可能です。

これらの無線は受信したメッセージを再送信するよう設計されており、メッシュネットワークを形成します。この仕組みにより、最も遠くにいるメンバーを含むすべてのグループメンバーがメッセージを受信できるようになります。使用する設定によっては、Meshtastic メッシュネットワークは最大100台のデバイスを同時にサポートすることが可能です。

さらに、Meshtastic 無線は1台の電話とペアリングすることができ、友人や家族が特定の無線に直接メッセージを送信することが可能です。ただし、各デバイスは一度に1人のユーザーとの接続のみをサポートすることに注意してください。

[こちらをクリック](https://meshtastic.org/docs/)して、Meshtastic ネットワークについてさらに詳しく学んでください！


## 対応ハードウェア


* [SenseCAP Card Tracker T1000-E for Meshtastic](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)

* [SenseCAP Indicator for Meshtastic](https://www.seeedstudio.com/SenseCAP-Indicator-D1Pro-p-5644.html)

* [XIAO ESP32S3 & Wio-SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html)

* [XIAO nRF52840 & Wio-SX1262 Kit](https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html)

* [Tracker Dev Kit for Meshtastic® – Wio Tracker 1110](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Kit-for-Meshtastic.html)


:::note
Meshtastic® は Meshtastic LLC の登録商標です。Meshtastic のソフトウェアコンポーネントはさまざまなライセンスの下でリリースされています。詳細はGitHubをご覧ください。保証は提供されません - 使用は自己責任でお願いします。
:::