---
description: はじめに
title: はじめに
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Introduction
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>



SenseCAP M2 Multi-Platform LoRaWAN Gateway は、さまざまなネットワークサーバーに接続可能な標準的な LoRaWAN® ゲートウェイです。865 MHz から 923 MHz までのグローバル LoRaWAN® 周波数プランをサポートし、スマートビルディング、環境モニタリングシステム、精密農業など、複数の LoRaWAN® アプリケーションで使用できます。広範囲のカバレッジと強力な信号出力能力などの特徴を備えており、LoRaWAN® ネットワークを構築するための理想的なゲートウェイです。


:::tip 注意

*   SenseCAP M2 Multi-Platform LoRaWAN® Gateway は Helium ネットワークをサポートしていません。SenseCAP Hotspot APP および SenseCAP Dashboard には接続できません。
*   技術サポートについては、公式の [**SenseCAP MX Community Discord**](https://discord.com/invite/sensecap) チャンネルで SenseCAP MX チームにお問い合わせください。
:::

### 主な特徴


*   **複数の LoRaWAN® ネットワークサーバーをサポート:** AWS、TTN、ChirpStack などの複数の LNS に対応し、Packet Forwarder / Basics™ Station モードを使用可能。
*   **内蔵 LoRaWAN ネットワークサーバー:** LoRaWAN ネットワークを迅速かつ信頼性の高い方法で立ち上げるためのソリューションを提供。
*   **Power-over-Ethernet (PoE) 対応:** イーサネットでゲートウェイに電力を供給する必要があるユーザー向けに、PoE 機能を追加。この機能により、展開がより信頼性が高く迅速になります。
*   **広範囲のカバレッジと強力な信号:** 最大 10km の LoRaWAN® カバレッジと強力な信号を提供し、低データレートで非常に長距離のデータ送信が可能。
*   **優れた安定したパフォーマンス:** 成熟したハードウェアソリューション MT7628 と Semtech SX1302 ベースバンド Long Range チップを搭載。Cellular（オプション）、Wi-Fi、イーサネット接続をサポート。
*   **プロフェッショナルな管理ツールとクラウドサービス:** Web インターフェースを通じて簡単にゲートウェイを設定可能。SenseCAP Portal と SenseCAP Local Console を使用して、効率的かつ簡単にゲートウェイを監視および管理可能。


### 説明


SenseCAP M2 Multi-Platform LoRaWAN® Gateway は、さまざまなネットワークサーバーに接続可能な標準的な LoRaWAN® ゲートウェイです。

LoRaWAN® ゲートウェイとして、LoRaWAN® デバイスに対して数マイルの無線ネットワークカバレッジとデータ送信能力を提供できます。

SenseCAP M2 Multi-Platform LoRaWAN® Gateway は、スマート農業、スマートシティ、またはネットワーク密度の向上を必要とするあらゆるスマートプロジェクトなど、複数のアプリケーションをサポートし、独自の優れたカバレッジと運用効率を提供します。

このゲートウェイは、箱から出してすぐに簡単に設定できます。ユーザーは **SenseCAP Mate APP** および **[SenseCAP Portal](https://sensecap-docs.seeed.cc/quickstart.html)** を通じて、以下の4つのステップでデバイスをバインドおよび管理できます。その後、同じ方法でセンサーを設定し、LoRaWAN® ネットワークソリューションを作成できます。

1.  デバイスバインディング用の QR コードをスキャン
2.  ゲートウェイをインターネットに接続し、電源をオン
3.  SenseCAP プラットフォームでゲートウェイのステータスを確認
4.  センサーをネットワークに接続し、クラウドにデータをアップロード



<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/senseCAP_01.png" alt="pir" width={800} height="auto" /></p>


### アーキテクチャ


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/_0129.jpg" alt="pir" width={800} height="auto" /></p>


SenseCAP M2 Multi-Platform LoRaWAN® Gateway は、以下の2つの方法で設定できます：  
1\. Wi-Fi/イーサネットを使用して SenseCAP Local Console にアクセス  
2\. SenseCAP Portal を介してリモートで SenseCAP Local Console にアクセス

さらに、SenseCAP M2 Multi-Platform LoRaWAN® Gateway を屋外に展開したい場合は、屋外展開の要件を満たすためにシェルアクセサリを適用する必要があります。高い堅牢性を備えた迅速な展開のための **[SenseCAP Outdoor Enclosure](https://www.seeedstudio.com/SenseCAP-Outdoor-Enclosure-p-5353.html)** を確認してください。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/_6.10_2.png" alt="pir" width={800} height="auto" /></p>


### アプリケーション



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114991726/img/application%20seeed%20page%20for%20sensecap.png" alt="pir" width={800} height="auto" /></p>