---
description: SenseCAP M1 FAQ
title: SenseCAP M1 FAQ
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
---

# ETH または Wi-Fi MAC ID を見つける方法は？

MAC ID は以下に示すように、Hotspot の底面ラベルに記載されています。ETH と Wi-Fi の両方の MAC ID を確認できます。

![SenseCAP M1 Mac-ID](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-ids.png)

---

# デバイスから SN（シリアル番号）を見つける方法は？

シリアル番号は以下に示すように、Hotspot の底面ラベルに記載されています。

![SenseCAP M1 Serial Number](https://www.sensecapmx.com/wp-content/uploads/2022/07/sn.webp)

---

# 2G / 4G / 8G RAM バージョンの違いは何ですか？

2G / 4G / 8G は、SenseCAP M1 内の Raspberry Pi 4 の RAM（ランダムアクセスメモリ）の違いを表しています。ホットスポット機能については、異なる RAM 間で違いはありません。また、Seeed オンラインストアでは、SenseCAP M1 を購入する際に RAM を選択することはできません。すべての配布は在庫に基づいてランダムに行われることにご注意ください。

---

# 自分が持っている RAM バージョンを確認する方法は？

モデル名から判断できます。M1-X の X は RAM を指します。例：M1-2915 は 2GB RAM を指し、M1-4915 は 4GB RAM を指します。

---

# なぜ私の SenseCAP M1 は他の Helium Hotspot を witnessing できないのですか？

Helium Hotspot の RF 信号が低く、送信距離が短くなる可能性のある理由には以下があります：

- 比較的密集した環境での建物、山、森林などの障害物
- 都市周辺に存在する可能性のある電磁干渉、見通し線干渉、フレネルゾーン干渉、または RF 干渉
- 気象条件
- システム動作マージン、シャドウイング、および/またはリンクバジャー

---

# なぜ私の SenseCAP M1 の収益/報酬が期待通りではないのですか？

収益と報酬には複雑なメカニズムがあります。Hotspot の設定が正しく、配置が適切で、リレー状態がなく、インターネット接続が安定している限り、問題ないはずです。
メカニズムについて混乱している場合は、Helium チャンネルでこれについて議論し、さらなる説明を求めることをお勧めします。**[Helium Doc](https://docs.helium.com/)** も詳しく学ぶのに役立ちます。

---

# SenseCAP M1 の RF 信号を改善する方法は？

広くて障害物のない環境（例：窓の近く、または屋根などの屋外にアンテナを設置）にデバイスを設置・配置してください。

---

# SenseCAP M1 はおよそ何ボルトの電力を使用しますか？

約 5W で、普通の電球の消費電力と同じです。

---

# ゲートウェイ間の推奨距離は？

Hotspot は互いに近すぎる場所に配置すべきではありません。経験則として、Hotspot 間には最低 300 から 500 メートルの距離を設けることをお勧めします。ただし、これは環境によって異なる場合があります（密集した都市部ではより近く、より田舎の環境ではより遠く）。

---

# SenseCAP M1 の設定に追加料金はかかりますか？

デバイスには、ユーザーが SenseCAP M1 を設定するための \$40 のアクティベーション料金と、Helium App で SenseCAP M1 の位置を設定するための \$10 の料金が含まれています。

初回以降に別の場所に再アサートする場合のみ、約 \$10 の追加料金を支払うことになります。料金の詳細については、Helium Transaction Fees ページを参照してください。

---

# SenseCAP M1はHelium以外のサードパーティサーバーへの接続をサポートしていますか？

いいえ、SenseCAP M1 LoRaWANゲートウェイはHelium Networkサーバーとのみ互換性があります。

---

# SenseCAP M1はPoEをサポートしていますか？

いいえ。イーサネットポートの隣にあるType-Cコネクタを通じて、5V-3Aの電源アダプターを使用してユニットに電力を供給します。Sensecap M1でPOEをサポートするには、PoEインジェクターとスプリッターが必要です。

---

# 屋内ゲートウェイとして、屋外で使用できますか？

SenseCAP M1は屋内ゲートウェイなので、過酷な屋外環境に耐えるように設計されておらず、追加の保護なしに屋外環境に設置すべきではありません。

---

# SenseCAP LoRaWANセンサーはSenseCAP M1ゲートウェイと互換性がありますか？

はい。エンドノード（つまり、SenseCAP LoRaWANセンサーシリーズ製品）がHelium Networkと互換性があり、Helium Networkに登録されている限り、SenseCAP M1ゲートウェイと連携できます。

---

# SenseCAP M1はフルホットスポットですか、それともライトホットスポットですか？

SenseCAP M1 LoRaWAN Indoor Gatewayは、POCとデータ転送の両方をサポートするフルホットスポットです。

---

# 屋外使用向けのホットスポットはありますか？

現在、SenseCAP M1は屋内使用のみですが、このリクエストを検討いたします。

---

# ライトホットスポットもありますか？

はい、SenseCAP M2 Data Onlyがライトスポットです。

---

# AS923、AU915、IN865、その他の周波数はありますか？

現在、US915（FCC認証付き）とEU868（CE認証付き）のみが利用可能です。その他の周波数はまだサポートされていません。異なる周波数の必要性に気づいています。ハードウェアデバイスの仕様は902Mhz～928Mhz / 863Mhz～870Mhzの範囲内であるため、この範囲内の異なる周波数に設定可能です。ただし、設定後、製品は異なる市場への参入を許可されるために特定の認証を受ける必要があります。

現在、私たちのチームはUS915とEU868のサプライチェーンと製造に焦点を当てています。

---

# すべてのSenseCAP LoRaWANゲートウェイはHeliumホットスポットですか？

SenseCAPをGoogleで検索すると、SenseCAPという名前の他のゲートウェイも見つかります。SenseCAPブランドのゲートウェイがすべてHeliumホットスポットではないことにご注意ください。SenseCAP M1 LoRaWAN Indoor Gatewayは、現在Helium Networkをサポートする唯一のものです。

---

# ヨーロッパでホットスポットを購入してインドに持参した場合、自動的に865 MHzに切り替わりますか？

はい、自動的に切り替わります。ただし、私たちはCEとFCC認証のみを持っており、インドで必要なBIS認証は持っていません。

---

# SenseCAP M1はHeliumアプリにも掲載されていますか？

はい、SenseCAP M1はすでにHeliumアプリに追加されています！

---

# Sensecap M1のアンテナコネクタはどのタイプですか？

SenseCAP M1にはRP-SMAメスコネクタがあり、アンテナはRP-SMAオスコネクタ付きです。私たちの在庫のファイバーグラスアンテナはすべてN型オスコネクタを持ち、N型メスとRP-SMAオスコネクタ付きのLMR200ケーブルが提供されます。

![SenseCAP M1 Antenna Connection](https://www.sensecapmx.com/wp-content/uploads/2022/06/connectors-1.png)

---

# デバイスはどの電圧/アンペアで動作しますか？

電圧は5V DCです。

---

# PCBのサイズ/寸法をご存知ですか？

デバイスのサイズは154×100×44 mmで、重量は370gです。

---

# 5GHzを自分の地域で使いたくない人もいますが、ホットスポット自体のWiFiをオフにすることは可能ですか？

この機器はWi-Fi送信機です。APに接続されていない場合、自動的に電磁波の放射を停止します。

---

# SenseCAP M1がボタンを押してもスローフラッシュモードにならないのはなぜですか？

ボタンを6-10秒間押し続けて、離さないでください。時には背面のボタンを強く押す必要がある場合があります。追加のサポートが必要な場合は、こちらのDiscordにお越しください。  
SenseCAP M1がファームウェアを更新している場合、ボタンを押しても青色LEDがスローフラッシュモードに変わらない可能性があることにご注意ください。10-15分後に再度お試しください。

---

# SenseCAP M1はいつスローフラッシュモードを終了しますか？

スローフラッシュモードは約10分間続き、その後常時点灯LEDまたはファストフラッシュモードに戻ります。

設定中にSenseCAP M1がスローフラッシュモードを終了した場合は、ボタンを5-10秒間押してスローフラッシュモードに戻し、設定を再開してください。

---

# 青色LEDが常にファストフラッシュモードのままなのはなぜですか？

これは、SenseCAP M1がインターネットに接続されていないか、Helium P2Pネットワークに接続しようとしていることを意味します。各起動後、SenseCAP M1がHelium P2Pネットワークに接続するまでに5-20分かかる場合があり、これはネットワーク品質によって異なります。

SenseCAP M1が20分以上起動している場合は、ネットワーク状態を確認し、EthernetケーブルまたはWi-FiがSenseCAP M1に対して正常に動作していることを確認してください。

Ethernetケーブルを使用する場合は、「カチッ」という音が聞こえるまでEthernetケーブルをポートにしっかりと押し込み、ケーブルが故障せず、緩んでいないことを確認してください。

---

# ホットスポットファームウェアバージョンを確認する手順

1. ホットスポットのBluetoothボタンを6-10秒間長押しすると、青色LEDがゆっくり点滅し、ホットスポットとペアリングします。
2. 診断を実行してホットスポットファームウェアバージョンを確認します。または、登録後にSenseCAP Dashboardを使用してファームウェアを確認することもできます。

![SenseCAP M1 Firmware Version](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1.png)

![SenseCAP M1 Firmware Version Step2](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1-1.png)

![SenseCAP M1 Firmware Version Step3](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-2.png)

---

# アンテナなしのSenseCAP M1の送信電力はどのくらいですか？

<table style={{borderCollapse: 'collapse', width: '100%', height: 125}} border={1}><tbody><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>周波数プラン</strong></td><td style={{width: '33.3333%', height: 21}}>EU868</td><td style={{width: '33.3333%', height: 21}}>US915</td></tr><tr style={{height: 20}}><td style={{width: '33.3333%', height: 20}}><strong>認証</strong></td><td style={{width: '33.3333%', height: 20}}>CE</td><td style={{width: '33.3333%', height: 20}}>FCC</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>規制最大送信電力</strong></td><td style={{width: '33.3333%', height: 21}}>14 dBm</td><td style={{width: '33.3333%', height: 21}}>30 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>純正アンテナ使用時の送信電力</strong></td><td style={{width: '33.3333%', height: 21}}>13.487 dBm</td><td style={{width: '33.3333%', height: 21}}>26.7 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>アンテナなしの送信電力</strong></td><td style={{width: '33.3333%', height: 21}}>10.687 dBm</td><td style={{width: '33.3333%', height: 21}}>25 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>純正アンテナゲイン</strong></td><td style={{width: '33.3333%', height: 21}}>2.8 dBi</td><td style={{width: '33.3333%', height: 21}}>2.6 dBi</td></tr></tbody></table>

**FAN自動制御ルールとは何ですか？**
---------------------------------------

![SenseCAP M1 Fan Auto Control Logic](https://www.sensecapmx.com/wp-content/uploads/2022/07/fan-control-logic-1.png)

**SDカードの使用量が85%を超えた場合はどうすればよいですか？**
------------------------------------------------------

通常、システムが自動的に管理するため、SDカードの使用量について心配する必要はありません。SDカードが満杯の使用量から回復できない場合は、デバイスを再起動して正常な状態に戻すことができます。

それでも問題が解決できない場合、またはテクニカルサポートからブロックのリセットを推奨された場合は、こちらをクリックして「ブロックのリセット」方法を学ぶことができます。
