---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: SenseCAP T1000 屋内測位システムガイド
keywords:
  - トラッカー
  - BLE
  - 測位
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /IPS_For_SenseCAP_T1000_Traker
sku: E2025081201,E2025081501
last_update:
  date: 10/20/2023
  author: Jessie
createdAt: '2023-10-19'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/ja/IPS_For_SenseCAP_T1000_Traker/
---


本章では、Traxmate を使用して [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) を屋内測位ソリューションに統合する方法について、全体的なガイダンスを提供します。

[Traxmate](https://traxmate.io/) は、シームレスな屋内外の測位、トラッキング、ルーティング機能を備えた包括的な IoT トラッキングソリューションを、あなたやあなたの顧客が簡単かつ効率的に展開できる IoT プラットフォームです。

:::tip 自前ホスティングの代替手段をお探しですか？
サードパーティプラットフォームのサブスクリプションなしで独自のダッシュボードを運用したい場合は、**[Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)** をチェックしてください。これは、SenseCraft Solution でワンクリック起動（または Docker によるセルフホスト）が可能な、すぐに展開できる BLE ビーコン + LoRaWAN ソリューションです。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## アーキテクチャ概要

以下に簡単な要約を示しますが、全体像を把握するために残りのドキュメントも必ずお読みください。

● Traxmate にログインし、建物を作成します。<br/>
● 追加の Wi-Fi および/または [E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/ja/bluetooth_beacon_for_SenseCAP_Traker/#配置ガイドライン) を展開します（必要に応じて）。<br/>
● すでに設置されている Wi-Fi および/または Bluetooth インフラストラクチャが提供する精度を確認するために、屋内サーベイを実施します。<br/>
● 検証のために新たな屋内サーベイを実施します。<br/>
● 上記の手順を繰り返すか、屋内測位ソリューションの使用を開始します。<br/>
● デバイスを [TTN](https://www.thethingsnetwork.org/) に接続し、Traxmate にデータを送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## Wi-Fi/Bluetooth ビーコンの展開

すでに Wi-Fi アクセスポイントおよび/または Bluetooth ビーコンのインフラストラクチャが設置されていない場合は、測位に最適化された展開を行うことができます。既存の Wi-Fi アクセスポイントのインフラストラクチャの多くは、おそらくデータ接続の到達範囲と性能を最適化するために配置されています。測位も考慮する場合は、「広く分散させ、角や壁の近くに配置し、高い精度が必要なエリアでは密度を高くする」ことを意識してください。

:::tip
Bluetooth ビーコンはほとんどの場合バッテリー駆動であり、より容易に展開できます。Wi-Fi アクセスポイントは到達範囲が長いという特徴があります。高密度に配置された Bluetooth ビーコンのグリッドは、疎な Wi-Fi アクセスポイントのグリッドよりも高い精度を提供します。
:::

詳細については [E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/ja/bluetooth_beacon_for_SenseCAP_Traker/#配置ガイドライン) を確認してください。

## プレイスの追加

`Places` -> `Add New` に移動し、地図をクリックするか住所または名称を検索し、`Add place` ポップアップをクリックして詳細を送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

次のステップでは、建物の階数を指定し、屋内測位を有効にしたいフロアにフロアマップをアップロードします。フロアマップのアップロードは PNG および JPEG ファイルに対応しています。ファイルをアップロードしたら、ツールを使用して地図上でスケール、回転、位置合わせを正しく行います。建物の形状に沿って PNG/JPEG ファイルをトリミングするツールも用意されています。

建物の設定が完了したら、`SAVE` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## サーベイの実施

建物が追加され、フロアマップがアップロードされたら、Traxmate アプリ（Android 版）を使用してサーベイを実施します。

:::note
iOS 版の Traxmate アプリは、iOS がサードパーティアプリによる Wi-Fi スキャンをサポートしていないため使用できません。
:::

:::tip
Android には通常、アプリが Wi-Fi をスキャンできる頻度に制限があり、30 秒に 1 回に設定されています。より正確なサーベイを行うためには、このスロットリングをオフにすることを推奨します。そのためには、Android を開発者モードに設定する必要があります。

`Settings` > `Developer options` > "Wi-Fi scan throttling" を探して > 無効にします（または Settings>System>Advanced>Developer options）。
Android で WiFi scan throttling を無効にすると、NetSpot はサーベイ、スキャン、無線ネットワークエリアの解析において最大限の性能を発揮できます。<br/>
詳細は[こちら](https://developer.android.com/guide/topics/connectivity/wifi-scan
)を確認してください。
:::

アプリを開いてログインし、`Places` -> `Select your Place` -> `Select Floor` -> `Start Survey` を選択します。

アプリは継続的に Wi-Fi と Bluetooth をスキャンします。参照点（Reference Points）を繰り返し配置することで、屋内測位システムをトレーニングする必要があります。参照点は多ければ多いほど良いです。参照点は、あなたが実際にいる場所を表すようにマップ上に配置する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● 参照点は、ズームやパンでマップを操作し、自分がいる場所が十字線の下に来るようにして配置します。正しく狙いを定めたら、プラス（+）記号のボタンをクリックします。<br/><br/>
● その後も歩き続け、できるだけ一定の速度で直線的に歩くようにします。
通常の歩行速度より少し遅い速度を推奨します。次の参照点として使用するのに適した場所を目指して歩きます。良い参照点は、角、交差点、ドア、エレベーター、階段など、マップ上で容易に認識できる場所です。<br/><br/>
● 参照点は少なくとも 5〜10 メートルごとに配置します。参照点を正確に配置すればするほど、屋内測位の精度は高くなります。<br/><br/>
● セクションまたはフロア全体のサーベイが完了したら、赤い停止ボタンを押してサーベイを終了します。サーベイはサーバー側に送信され、処理されます。1 分から数分で、新しいビルディングモデル（ビルディングモデルについては該当章を参照）が自動的にあなたの建物に対して公開されます（サーベイが精度向上に有効に貢献した場合）。

## 現在提供されている精度の評価

屋内サーベイを実施したら、その結果を評価する必要があります。[Traxmate ポータル](https://online.traxmate.io/) にログインし、対象の Place/Building の Positioning タブを開きます。
サーベイからの生データはバックエンドサーバーで処理され、その結果はビルディングモデルとして利用可能になります。最新の公開済みビルディングモデルの詳細は、Positioning タブに表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>この図では、中央値誤差が 4.33 メートルであることを示しています。建物の 51% が実施済みサーベイによってカバーされており、Wi-Fi および Bluetooth（RF Coverage）は建物の 13% をカバーしていることが分かります。</i></center>

### ビルディングモデルと中央値誤差

ビルディングモデルとは、建物内にビーコンがどこに配置されているかを電子的に表現したものです。ビルディングモデルは、ユーザー（複数の場合もあり）がサーベイまたはリファレンストラックを実行したときに生成されます。これらが完了するとすぐに、システムに送信され、ビルディングモデルとして計算されます。

各ビルディングモデルについて中央値誤差が計算されます。中央値誤差は、地上真値/リファレンストラック（サーベイ中に配置された参照点によって生成）と、Combain Location API によって提供される屋内測位に基づいて計算されたトラックとの間の差（誤差）に基づいています。システムは、利用可能なビルディングモデルの中から最適なものを自動的に選択して公開します。「最適」のアルゴリズムは、カバレッジ率と中央値誤差の組み合わせに基づいています。

この自動プロセスは、特定のビルディングモデルを手動で公開することで上書きできます。ビルディングモデルは編集可能であり、ユーザーはビーコンを追加または編集して、測位性能をさらに向上させることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>建物 Mattehuset1 に対して公開されているビルディングモデル 1892 を示しています。合計で 98 個のビルディングモデルが利用可能です。現在のビルディングモデルには 179 個のユニークな Wi-Fi MAC アドレスが含まれ、6 フロア中 4 フロアをカバーしています。全フロアの中央値誤差は 4.33 m です。最も良いフロア（図 9 参照）は 3 階で、中央値誤差は 3.9 m でした。</i></center>

### サーベイカバレッジ、RF カバレッジ、および中央値誤差マップ

特定のビルディングモデルを評価し、その精度をどのように改善できるか、または改善すべきかを確認する際には、サーベイカバレッジ、RF カバレッジ、および中央値誤差マップを確認することが有用です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### 屋内測位精度の向上方法

中央値誤差マップを確認し、提供されている中央値誤差がユースケースの要件と一致していない場合は、精度をどのように改善できるか検討する段階です。

●  **Step 1** - サーベイを増やす<br/>
屋内測位を利用する予定の建物内のすべてのエリアでサーベイを実施しましたか？
まだであれば、追加のサーベイを実施してください。

●  **Step 2** - Wi-Fi と Bluetooth のカバレッジを拡大する<br/>
屋内測位を利用する予定の建物内のすべてのエリアに Wi-Fi と Bluetooth はありますか？
ない場合は、これらのエリアに Wi-Fi および Bluetooth ビーコンを追加で展開し、そのエリアでサーベイを実施してください。

●  **Step 3** - Wi-Fi と Bluetooth の密度を高める<br/>
建物内のすべてのエリアに Wi-Fi と Bluetooth はありますが、それでも精度が十分ではない場合。
これらのエリアにおける Wi-Fi と Bluetooth の密度を確認します。付録1の表と比較し、理論的およびシミュレーションの観点から、要件を満たすために Wi-Fi と Bluetooth の密度を高めることが推奨されているかどうかを確認してください。推奨される場合は、これらのエリアにより多くの Wi-Fi と Bluetooth ビーコンを展開します。

●  **ステップ 4** - サーベイ精度の向上<br/>
建物内のすべてのエリアに Wi-Fi と Bluetooth があり、その密度は要件を満たすために付録1で示されている理論レベルに従っていますが、それでも精度が十分ではありません。
より詳細なサーベイを実施します。できるだけ頻繁に（1 平方メートルあたり 1 回が最適）かつ可能な限り正確にリファレンスポイントを配置してください。マップ上でリファレンスポイントを配置する際に、正確かつ正しい位置に置くことが重要です。実際にいる場所とは異なる場所に配置してしまうミスは、かなり起こりやすいです。

## 使い始める

SenseCAP T1000 Tracker は Wi-Fi と Bluetooth のスキャン情報、MAC アドレスおよび信号強度を収集し、これを The Things Stack に送信し、その後 API を介して Traxmate ポータルに送信します。

まず [Connect to TTN](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN/) を確認して、トラッカーを正しくセットアップしてください。

### デバイスの追加

Traxmate ポータルにログインし、`Devices` -> `Add new` -> `Device` に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>

### TTS 設定

[The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3) にログインし、`Integrations` → `Webhooks` に移動して、`Add Webhook` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

`Custom Webhook` テンプレートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

Webhook ID に名前を付け、フォーマットを `JSON` に設定し、Base URL をコピーします。

```cpp
https://capture.v1.traxmate.io/service/<Service Token>/device
```

:::tip
`Settings` -> `Account` に移動し、Service Token をコピーします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/service-token.png" alt="pir" width={800} height="auto" /></p>
:::

以下の推奨イベントタイプを有効にし、`Add webhook` をクリックします。

- Uplink message
- Normalized uplink

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/websettings.png" alt="pir" width={800} height="auto" /></p>

### デバイスデータの確認

デバイスが正常に接続されると、Traxmate ポータルに戻り、デバイスのデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## 付録

### 精度要件

**本章で説明する手法と技術は、中央値誤差がおおよそ 2〜10 メートルであることを要件とするユースケースに適しています。**

すべての精度要件は、ユースケースのニーズに基づいて決定する必要があります。ユースケースによって精度要件が高いものもあれば、屋内測位インフラに割り当てられる予算が高いものもあります。ソリューションは、精度要件と利用可能な予算のバランスを取ることを目指すべきです。経験則としては、インフラに投入する資金と労力が多いほど、精度は向上します。ただし、多くのユースケースは、既存のインフラを利用することで対応可能である点に注意してください。

以下のチャートは、一定の平方メートル数に対して、一定数の Wi-Fi/Bluetooth を設置した場合に期待できる精度を示しています。

### 推定屋内精度マトリクス

以下の表は、AI（ANN）ベースの屋内測位を使用した屋内環境において、期待できる推定精度を示しています。精度は、カバーすべきエリアと、展開された Wi-Fi アクセスポイント（AP）または Bluetooth ビーコンの数に依存します。

中央値誤差の精度は次のとおりです：

● 緑：1 メートル以上 5 メートル以下<br/>
● 黄：5 メートル超 10 メートル以下<br/>
● 赤：10 メートル<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p><center><i>1 平方メートルあたり 1 つのリファレンスポイントで非常に詳細なサーベイを実施した場合の精度を示す表。</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p><center><i>4 平方メートルあたり 1 つのリファレンスポイントで詳細なサーベイを実施した場合の精度を示す表。</i></center>
<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p><center><i>100 平方メートルあたり 1 つのリファレンスポイントで疎なサーベイを実施した場合の精度を示す表。</i></center>
