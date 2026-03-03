---
description: Meshtastic® ネットワーク入門
title:  Meshtastic® ネットワーク入門
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/meshtastic_introduction
sidebar_position: 1
last_update:
  date: 12/11/2025
  author: Michelle
---


[Meshtastic®](https://meshtastic.org/) は、手頃な価格で低消費電力のデバイス上で動作するように構築されたオープンソースのオフグリッド分散メッシュネットワークです。既存の通信インフラがない、または信頼性の低い地域で、安価な LoRa 無線機を長距離オフグリッド通信プラットフォームとして使用することを可能にします。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/T1000-E-_-05.jpg" alt="pir" width={800} height="auto" /></p>

## 特徴

- 長距離通信（kboxlabs による 254km の記録）
- メッシュ通信に電話は不要
- 分散通信 - 専用ルーターは不要
- 暗号化通信
- 優れたバッテリー寿命
- メッシュメンバー間でのテキストメッセージの送受信
- オプションの GPS ベース位置機能
- その他多数！

## 動作原理

Meshtastic は、HAM 無線操作とは異なり、追加のライセンスや認証を必要とせず、ほとんどの地域で広くアクセス可能な長距離無線プロトコルである LoRa を利用しています。

これらの無線機は、受信したメッセージを再ブロードキャストするように設計されており、メッシュネットワークを形成します。この設定により、最も遠い距離にいるメンバーを含む、すべてのグループメンバーがメッセージを受信できることが保証されます。使用される設定によって、Meshtastic メッシュネットワークは最大 100 台のデバイスを同時にサポートできます。

さらに、Meshtastic 無線機は単一の電話とペアリングでき、友人や家族があなたの特定の無線機に直接メッセージを送信できます。各デバイスは一度に一人のユーザーからの接続のみをサポートできることに注意することが重要です。

Meshtastic ネットワークについて詳しく学ぶには[こちら](https://meshtastic.org/docs/)をクリックしてください！

## サポートされているハードウェア

- [SenseCAP Card Tracker T1000-E for Meshtastic](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)

- [Wio Tracker L1](https://wiki.seeedstudio.com/ja/wio_tracker_node/)

- [SenseCAP Solar Node](https://wiki.seeedstudio.com/ja/solar_node/)

- [SenseCAP Indicator for Meshtastic](https://www.seeedstudio.com/SenseCAP-Indicator-D1Pro-p-5644.html)

- [XIAO ESP32S3 & Wio-SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html)

- [XIAO nRF52840 & Wio-SX1262 Kit](https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html)

- [Tracker Dev Kit for Meshtastic® – Wio Tracker 1110](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Kit-for-Meshtastic.html)

:::note
Meshtastic® は Meshtastic LLC の登録商標です。Meshtastic ソフトウェアコンポーネントは様々なライセンスの下でリリースされています。詳細は GitHub をご覧ください。保証は提供されません - 自己責任でご使用ください。
:::
