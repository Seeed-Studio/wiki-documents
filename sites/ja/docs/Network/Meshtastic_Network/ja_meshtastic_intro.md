---
description: Meshtastic® ネットワーク概要
title: Meshtastic® ネットワーク概要
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /meshtastic_introduction
sidebar_position: 1
last_update:
  date: 12/11/2025
  author: Michelle
createdAt: '2024-06-17'
updatedAt: '2025-12-11'
url: https://wiki.seeedstudio.com/ja/meshtastic_introduction/
---


[Meshtastic®](https://meshtastic.org/) は、オープンソースで、オフグリッドかつ分散型のメッシュネットワークであり、手頃な価格の低消費電力デバイス上で動作するように構築されています。既存の、あるいは信頼できる通信インフラが存在しない地域において、安価な LoRa 無線機を長距離オフグリッド通信プラットフォームとして利用できるようにします。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/T1000-E-_-05.jpg" alt="pir" width={800} height="auto" /></p>

## 特長

- 長距離通信（kboxlabs による 254km の記録）
- メッシュ通信にスマートフォンは不要
- 分散型通信 - 専用ルーター不要
- 暗号化された通信
- 優れたバッテリー寿命
- メッシュメンバー間でテキストメッセージの送受信が可能
- オプションの GPS ベース位置情報機能
- そのほか多数！

## 動作の仕組み

Meshtastic は LoRa という長距離無線プロトコルを利用しており、HAM 無線の運用とは異なり、ほとんどの地域で追加の免許や認証を必要とせずに広く利用できます。

これらの無線機は、受信したメッセージを再送信するように設計されており、メッシュネットワークを形成します。この構成により、最も離れた場所にいるメンバーを含め、グループの全員がメッセージを受信できるようになります。使用する設定によっては、Meshtastic メッシュネットワークは最大 100 台のデバイスを同時にサポートできます。

さらに、Meshtastic 無線機は 1 台のスマートフォンとペアリングできるため、友人や家族はあなたの特定の無線機に直接メッセージを送信できます。なお、各デバイスは同時に 1 人のユーザーからの接続のみをサポートできる点に注意してください。

Meshtastic ネットワークの詳細については[こちら](https://meshtastic.org/docs/)をクリックしてください。

## 対応ハードウェア

- [SenseCAP Card Tracker T1000-E for Meshtastic](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)

- [Wio Tracker L1](https://wiki.seeedstudio.com/ja/wio_tracker_node/)

- [SenseCAP Solar Node](https://wiki.seeedstudio.com/ja/solar_node/)

- [SenseCAP Indicator for Meshtastic](https://www.seeedstudio.com/SenseCAP-Indicator-D1Pro-p-5644.html)

- [XIAO ESP32S3 & Wio-SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html)

- [XIAO nRF52840 & Wio-SX1262 Kit](https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html)

- [Tracker Dev Kit for Meshtastic® – Wio Tracker 1110](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Kit-for-Meshtastic.html)

:::note
Meshtastic® は Meshtastic LLC の登録商標です。Meshtastic のソフトウェアコンポーネントはさまざまなライセンスの下で公開されています。詳細は GitHub を参照してください。いかなる保証も提供されません。ご自身の責任でご利用ください。
:::

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>