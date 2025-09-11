---
description: SenseCAP M2 Multi-Platform Gateway 概要
title: SenseCAP M2 Multi-Platform Gateway 概要
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview
last_update:
  date: 08/28/2023
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

SenseCAP M2 Multi-Platform LoRaWAN Gateway は、異なるネットワークサーバーへの接続をサポートする標準的な LoRaWAN® ゲートウェイです。865 MHz から 923 MHz までのグローバル LoRaWAN® 周波数プランをサポートし、スマートビルディング、環境監視システム、精密農業などの複数の LoRaWAN® アプリケーションで使用できます。広範囲カバレッジと強力な信号出力能力などの機能を備えており、LoRaWAN® ネットワーク構築に最適なゲートウェイです。

:::tip Note

- SenseCAP M2 Multi-Platform LoRaWAN® Gateway は Helium ネットワークをサポートしていません。SenseCAP Hotspot APP および SenseCAP Dashboard に接続することは**できません**。
- 技術サポートについては、公式 [**SenseCAP MX Community Discord**](https://discord.com/invite/sensecap) チャンネルで SenseCAP MX チームにお問い合わせください。
:::

### 主な機能

- **複数の LoRaWAN® ネットワークサーバーをサポート:** Packet Forwarder / Basics™ Station モードを使用して、AWS、TTN、ChirpStack などの複数の LNS と互換性があります。
- **内蔵 LoRaWAN ネットワークサーバー**: LoRaWAN ネットワークの立ち上げに高速で信頼性の高いソリューションを提供します。
- **Power-over-Ethernet (PoE) をサポート:** 追加の電源ケーブルではなく Ethernet でゲートウェイに電力を供給する必要があるユーザー向けに、PoE 機能も追加されており、より信頼性が高く迅速な展開が可能です。
- **広範囲カバレッジと強力な信号:** 最大 10km の LoRaWAN® カバレッジと強力な信号を提供し、ユーザーが低データレートで極めて長距離でデータを送信できます。
- **優れた安定したパフォーマンス:** ゲートウェイは成熟したハードウェアソリューション MT7628 と Semtech SX1302 ベースバンド Long Range チップによって駆動されます。Cellular（オプション）、Wi-Fi、Ethernet インターネット接続をサポートします。
- **プロフェッショナルな管理ツールとクラウドサービス:** ユーザーは Web インターフェースを通じて数ステップでゲートウェイを簡単にセットアップできます。SenseCAP Portal と SenseCAP Local Console も、ユーザーがゲートウェイを効率的かつ簡単に監視・管理できるよう開発されています。

### 説明

SenseCAP M2 Multi-Platform LoRaWAN® Gateway は、異なるネットワークサーバーへの接続をサポートする標準的な LoRaWAN® ゲートウェイです。

LoRaWAN® ゲートウェイとして、LoRaWAN® デバイスに数マイルのワイヤレスネットワークカバレッジとデータ伝送能力を提供できます。

SenseCAP M2 Multi-Platform LoRaWAN® Gateway は、スマート農業、スマートシティ、またはネットワーク高密度化を必要とするあらゆるスマートプロジェクトなどの複数のアプリケーションをサポートし、独自の優れたカバレッジと運用の卓越性の両方を提供します。

ゲートウェイは箱から出してすぐに簡単にセットアップできます。ユーザーは **SenseCAP Mate APP** と **[SenseCAP Portal](https://sensecap-docs.seeed.cc/quickstart.html)** を通じて 4 ステップでデバイスをバインドし管理できます。その後、ユーザーは同じ方法でセンサーの設定を開始し、LoRaWAN® ネットワークソリューションを作成できます。

1. デバイスバインディング用の QR コードをスキャン
2. ゲートウェイをインターネットに接続し電源を入れる
3. SenseCAP プラットフォームでゲートウェイステータスを確認
4. センサーをネットワークに接続しデータをクラウドにアップロード

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/senseCAP_01.png" alt="pir" width={800} height="auto" /></p>

### アーキテクチャ

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/_0129.jpg" alt="pir" width={800} height="auto" /></p>

SenseCAP M2 Multi-Platform LoRaWAN® Gateway は 2 つの方法で設定できます：  
1. Wi-Fi/ Ethernet アクセスで SenseCAP Local Console にアクセス  
2. SenseCAP Portal 経由でリモートから SenseCAP Local Console にアクセス

さらに、SenseCAP M2 Multi-Platform LoRaWAN® Gateway を屋外に展開したい場合は、屋外展開の要件を満たすためにシェルアクセサリを適用する必要があるかもしれません。迅速な展開のための高い堅牢性を持つ **[SenseCAP Outdoor Enclosure](https://www.seeedstudio.com/SenseCAP-Outdoor-Enclosure-p-5353.html)** をご確認ください。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/_6.10_2.png" alt="pir" width={800} height="auto" /></p>

### アプリケーション

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114991726/img/application%20seeed%20page%20for%20sensecap.png" alt="pir" width={800} height="auto" /></p>