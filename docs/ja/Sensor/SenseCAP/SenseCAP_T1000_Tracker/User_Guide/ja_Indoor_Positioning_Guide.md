---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: SenseCAP T1000 屋内測位システムガイド
keywords:
- Tracker
- BLE
- Positioning
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/IPS_For_SenseCAP_T1000_Traker
last_update:
  date: 10/20/2023
  author: Jessie
---


この章では、Traxmateを使用して[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)を屋内測位ソリューションに統合する方法について、全体的なガイダンスを提供します。

[Traxmate](https://traxmate.io/)は、あなたやあなたの顧客が、シームレスな屋内外測位、追跡、ルーティング機能を備えた包括的なIoT追跡ソリューションを簡単かつ効率的に展開できるIoTプラットフォームです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## アーキテクチャ概要

以下に簡単な要約を示しますが、全体像を把握するために文書の残りの部分をお読みください。

● Traxmateにログインして建物を作成します。<br/>
● より多くのWi-Fiや[E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/ja/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines)を展開します（必要に応じて）。<br/>
● 既にインストールされているWi-FiやBluetoothインフラストラクチャの提供精度を確認するために屋内調査を実行します。<br/>
● 検証のために新しい屋内調査を実行します。<br/>
● 上記の手順を繰り返すか、屋内測位ソリューションの使用を開始します。<br/>
● デバイスを[TTN](https://www.thethingsnetwork.org/)に接続し、Traxmateにデータを送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## Wi-Fi/Bluetoothビーコンの展開

Wi-FiアクセスポイントやBluetoothビーコンのインフラストラクチャが既にインストールされていない場合は、測位に最適化された展開を行うことができます。既に展開されているWi-Fiアクセスポイントのインフラストラクチャの多くは、データ接続の範囲とパフォーマンスを最適化するために配置されている可能性があります。測位も考慮する場合は、「分散配置し、角や壁の近くに保ち、より高い精度が必要なエリアではより高密度に配置する」ことを考えてください。

:::tip
Bluetoothビーコンは多くの場合バッテリー駆動であり、より簡単に展開できます。Wi-Fiアクセスポイントはより長い範囲を持ちます。Bluetoothビーコンの密なグリッドは、Wi-Fiアクセスポイントの疎なグリッドよりも優れた精度を提供します。
:::

詳細については[E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/ja/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines)を確認してください。

## 場所の追加

`Places` -> `Add New`に移動し、地図をクリックするか住所や名前を検索し、`Add place`ポップアップをクリックして詳細を送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

次のステップは、建物の階数を指定し、屋内測位を有効にしたい階にフロアマップをアップロードすることです。フロアマップのアップロードはPNGおよびJPEGファイルをサポートしています。ファイルをアップロードしたら、ツールを使用してスケール、回転、地図上への正確な配置を行います。建物の形状に沿ってPNG/JPEGファイルをクロップするツールもあります。

建物の設定後、`SAVE`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## 調査の実行

建物が追加され、フロアマップがアップロードされたら、Traxmate App（Android版）を使用して調査を実行します。

:::note
iOS版のTraxmate Appは、iOSがサードパーティアプリによるWi-Fiスキャンをサポートしていないため使用できません。
:::

:::tip
Androidは通常、アプリがWi-Fiをスキャンする頻度に制限があり、30秒に1回に設定されています。より正確な調査を行うために、このスロットリングを無効にすることをお勧めします。これを行うには、Androidを開発者モードに設定する必要があります。

`設定` > `開発者向けオプション` > 「Wi-Fiスキャンスロットリング」を見つける > 無効にする（または設定>システム>詳細設定>開発者向けオプション）。
AndroidでWiFiスキャンスロットリングを無効にすることで、NetSpotが調査、スキャン、ワイヤレスネットワークエリアの分析において最高のパフォーマンスを発揮することを確実にできます。<br/>
詳細情報は[こちら](https://developer.android.com/guide/topics/connectivity/wifi-scan
)をご確認ください。
:::

アプリを開いてログインし、`Places` -> `Select your Place` -> `Select Floor` -> `Start Survey`を選択します。

アプリはWi-FiとBluetoothを継続的にスキャンします。参照ポイントを繰り返し配置することで屋内測位システムを訓練する必要があります。参照ポイントが多いほど良好です。参照ポイントは、あなたが物理的に位置している場所を表すマップ上に配置する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● マップをズームおよびパンして、あなたがいる場所が十字線の下に来るようにして参照ポイントを配置します。正確に狙いを定めたら、プラス（+）記号のボタンをクリックします。<br/><br/>
● その後、一定の速度で直線的に歩くよう最善を尽くして歩き続けます。
通常の歩行速度よりも少し遅めが推奨されます。参照ポイントとして使用する新しい良い場所を目指します。良い場所とは、角、交差点、ドア、エレベーター、階段などのマップ上で容易に認識できる場所です。<br/><br/>
● 少なくとも5-10メートルごとに参照ポイントを配置します。参照ポイントをより正確に配置するほど、屋内測位はより正確になります。<br/><br/>
● セクション全体またはフロア全体を調査したら、赤い停止ボタンを押して調査を停止します。調査はサーバー側に送信され、処理されます。1分または数分で、あなたの建物に対して新しいビルディングモデル（ビルディングモデルに関する章を参照）が自動的に公開されます（調査が良好な方法で貢献し、精度を向上させた場合）。

## 現在提供されている精度の評価

屋内調査を実行したら、結果を評価する必要があります。[Traxmate portal](https://online.traxmate.io/)にログインし、あなたの場所/建物のPositioningタブにアクセスします。
調査からの生データはバックエンドサーバーによって処理され、結果はビルディングモデルとして利用可能になります。最新の公開されたビルディングモデルの詳細がPositioningタブに表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>この画像は中央値誤差が4.33メートルであることを示しています。建物の51%が実行された調査によってカバーされ、Wi-FiとBluetooth（RF Coverage）が建物の13%をカバーしていることが判明しています</i></center>

### ビルディングモデルと中央値誤差

ビルディングモデルは、建物内でビーコンがどこに配置されているかの電子的表現です。ビルディングモデルは、ユーザー（または複数のユーザー）が調査または参照トラックを実行したときに生成されます。これらが完了するとすぐに、システムに送信されてビルディングモデルに計算されます。

各ビルディングモデルに対して中央値誤差が計算されます。中央値誤差は、グラウンドトゥルース/参照トラック（調査中に配置された参照ポイントによって生成）と計算されたトラック（Combain Location APIによって提供される屋内測位に基づく）の差（誤差）に基づいています。システムは利用可能な最良のビルディングモデルを自動的に選択して公開します。「最良」のアルゴリズムは、カバレッジ率と中央値誤差の組み合わせに基づいています。

自動プロセスは、選択されたビルディングモデルを手動で公開することで上書きできます。ビルディングモデルは編集可能です。ユーザーは測位効果をさらに向上させるためにビーコンを追加または編集することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>建物Mattehuset1の公開されたビルディングモデル1892を示しています。合計98の利用可能なビルディングモデルがあります。現在のビルディングモデルには179の一意のWi-Fi MACアドレスが含まれ、6フロアのうち4フロアをカバーしています。全フロアの中央値誤差は4.33mです。最良のフロア（図9参照）はフロア3で、3.9mの中央値誤差があります。</i></center>

### 調査カバレッジ、RFカバレッジ、中央値誤差マップ

特定のビルディングモデルを評価し、精度をどのように改善できるかを確認するために、調査カバレッジ、RFカバレッジ、中央値誤差マップを確認することが有用です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### 屋内測位精度の改善方法

中央値誤差マップを確認し、提供された中央値誤差があなたのユースケースの要件と一致しないことが判明した場合、精度を改善する方法を検討する時です。

●  **ステップ1** - より多くの調査<br/>
屋内測位を使用する予定の建物のすべてのエリアで調査を実行しましたか？
そうでない場合は、より多くの調査を実行してください。

●  **ステップ2** - Wi-FiとBluetoothカバレッジの増加<br/>
屋内測位を使用する予定の建物のすべてのエリアにWi-FiとBluetoothがありますか？
そうでない場合は、これらのエリアにより多くのWi-FiとBluetoothビーコンを配置し、これらのエリアで調査を実行してください。

●  **ステップ 3** - Wi-Fi と Bluetooth の密度を増加<br/>
建物のすべてのエリアに Wi-Fi と Bluetooth がありますが、精度がまだ十分ではありません。
これらのエリアの Wi-Fi と Bluetooth の密度を見直してください。付録 1 の表と比較し、理論的およびシミュレーション的な観点から、要件を満たすために Wi-Fi と Bluetooth の密度を増加することが推奨されるかどうかを確認してください。そうであれば、これらのエリアにより多くの Wi-Fi と Bluetooth ビーコンを配置してください。

●  **ステップ 4** - 測量精度を向上<br/>
建物のすべてのエリアに Wi-Fi と Bluetooth があり、密度も付録 1 で提案されている理論レベルに従って要件を満たしているが、精度がまだ十分ではありません。
より詳細な測量を実行してください。基準点をできるだけ頻繁に（1平方メートルあたり1回が最適）、できるだけ正確に配置するようにしてください。マップ内で基準点を配置する際に、正確で正しいことが重要です。間違いを犯し、実際にいる場所とは異なる場所に配置することは非常に簡単です。

## 使用開始

SenseCAP T1000 Tracker は Wi-Fi と Bluetooth のスキャン情報、MAC アドレス、信号強度を収集し、これを The Things Stack に送信し、その後 API を介して Traxmate ポータルに送信します。

まず [Connect to TTN](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN/) を確認して、トラッカーを正しく設定してください。

### デバイスの追加

Traxmate ポータルにログインし、`Devices` → `Add new` → `Device` に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>

### TTS 設定

[The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3) にログインし、`Integrations` → `Webhooks` に移動し、`Add Webhook` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

`Custom Webhook` テンプレートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

Webhook ID に名前を付け、フォーマットを `JSON` に選択し、Base URL をコピーします。

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

デバイスが正常に接続されたら、traxmate ポータルに戻ると、デバイスのデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## 付録

### 精度要件

**この章で説明する方法と技術は、中央値誤差が約2〜10メートル程度を必要とするユースケースに適しています。**

すべての精度要件は、ユースケースのニーズに基づく必要があります。一部のユースケースは他よりも高い要件を持ち、一部のユースケースは屋内測位インフラストラクチャに対してより高い利用可能予算を持っています。ソリューションは、精度要件と利用可能予算のバランスを見つけることを目指すべきです。経験則として、インフラストラクチャにより多くの資金と労力を投入するほど、精度は向上します。ただし、多くのユースケースは既存のインフラストラクチャを使用することでサポートできることに注意してください。

以下のチャートは、特定の平方メートル数に対して特定の数のWi-Fi/Bluetoothがある場合に期待できる精度を示しています。

### 推定屋内精度マトリックス

以下の表は、AI（ANN）ベースの屋内測位を使用した屋内環境で期待できる推定精度を示しています。精度は、カバーする面積と展開されたWi-Fiアクセスポイント（AP）またはBluetoothビーコンの数に依存します。

中央値誤差精度は：

● 緑色：1〜5メートル<br/>
● 黄色：5〜10メートル<br/>
● 赤色：10メートル<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p><center><i>1平方メートルあたり1つの基準点で非常に詳細な調査を実行した場合の精度を示す表。</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p><center><i>4平方メートルあたり1つの基準点で詳細な調査を実行した場合の精度を示す表。</i></center>
<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p><center><i>100平方メートルあたり1つの基準点でスパースな調査を実行した場合の精度を示す表。</i></center>
