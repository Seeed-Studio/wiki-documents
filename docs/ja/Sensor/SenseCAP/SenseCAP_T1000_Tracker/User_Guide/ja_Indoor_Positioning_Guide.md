---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: SenseCAP T1000 室内位置測定システムガイド
keywords:
- トラッカー
- BLE
- 位置測定
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/IPS_For_SenseCAP_T1000_Traker
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

この章では、Traxmate を使用して [SenseCAP T1000 トラッカー](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) を室内位置測定ソリューションに統合する方法についての全体的なガイドを提供します。

[Traxmate](https://traxmate.io/) は IoT プラットフォームであり、シームレスな室内および屋外の位置測定、追跡、ルーティング機能を備えた包括的な IoT トラッキングソリューションを簡単かつ効率的に展開できるようにします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## アーキテクチャ概要

以下に簡単な概要を示しますが、全体像を把握するために文書全体をお読みください。

● Traxmate にログインし、建物を作成します。<br/>
● 必要に応じて、Wi-Fi をさらに展開するか、[E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/ja/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) を展開します。<br/>
● 既に設置されている Wi-Fi および/または Bluetooth インフラストラクチャの提供される精度を確認するために室内調査を実施します。<br/>
● 新しい室内調査を行い、検証します。<br/>
● 上記の手順を繰り返すか、室内位置測定ソリューションの使用を開始します。<br/>
● デバイスを [TTN](https://www.thethingsnetwork.org/) に接続し、Traxmate にデータを送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## Wi-Fi/Bluetooth ビーコンの展開

既に Wi-Fi アクセスポイントや Bluetooth ビーコンのインフラストラクチャが設置されていない場合、位置測定に最適化された展開を行うことができます。ほとんどの既存の Wi-Fi アクセスポイントのインフラストラクチャは、データ接続の範囲と性能を最適化するために配置されている可能性が高いです。位置測定も考慮する場合は、「広げて、角や壁の近くに配置し、精度を高めたいエリアでは密度を高くする」ことを考えてください。

:::tip
Bluetooth ビーコンは通常バッテリー駆動であり、より簡単に展開できます。Wi-Fi アクセスポイントはより長い範囲を持っています。Bluetooth ビーコンの密なグリッドは、Wi-Fi アクセスポイントの疎なグリッドよりも良い精度を提供します。
:::

詳細については、[E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/ja/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) を確認してください。

## 場所を追加する

`Places` -> `Add New` に移動し、地図をクリックするか住所や名前を検索し、`Add place` ポップアップをクリックして詳細を送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

次のステップでは、建物の階数を指定し、室内位置測定を有効にしたい階にフロアマップをアップロードします。フロアマップのアップロードは PNG および JPEG ファイルをサポートしています。ファイルをアップロードした後、ツールを使用して地図上で正確にスケール、回転、配置します。また、建物の形状に沿って PNG/JPEG ファイルを切り取るツールもあります。

建物の設定が完了したら、`SAVE` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## 調査を実施する

建物が追加され、フロアマップがアップロードされたら、Traxmateアプリ（Android版）を使用して調査を実施する時です。

:::note
TraxmateアプリのiOS版は使用できません。iOSはサードパーティアプリによるWi-Fiスキャンをサポートしていないためです。
:::

:::tip
通常、AndroidにはアプリがWi-Fiをスキャンする頻度に制限があり、30秒に1回に設定されています。より正確な調査を行うためには、この制限を解除することをお勧めします。これを行うには、Androidを開発者モードに設定する必要があります。

`設定` > `開発者オプション` > 「Wi-Fiスキャンスロットリング」を探して無効にします（または、設定 > システム > 詳細設定 > 開発者オプション）。
AndroidでWi-Fiスキャンスロットリングを無効にすると、NetSpotが調査中にワイヤレスネットワークエリアをスキャンおよび分析する際に最大限のパフォーマンスを発揮することができます。<br/>
詳細情報は[こちら](https://developer.android.com/guide/topics/connectivity/wifi-scan)をご覧ください。
:::

アプリを開いてログインし、`Places` -> `Select your Place` -> `Select Floor` -> `Start Survey`を選択します。

アプリはWi-FiとBluetoothを継続的にスキャンします。屋内位置決定システムをトレーニングするために、参照ポイントを繰り返し配置する必要があります。参照ポイントが多いほど良いです。参照ポイントは、物理的に位置している場所を表すマップ上に配置する必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● 参照ポイントを配置するには、マップをズームおよびパンして、現在いる場所を十字線の下に配置します。正確に狙いを定めたら、プラス（+）記号のボタンをクリックします。<br/><br/>
● その後、歩き続け、できるだけ直線で一定速度で歩くようにします。通常の歩行速度より少し遅い速度が推奨されます。次の良い参照ポイントとして使用できる場所を目指します。良い場所は、マップ上で簡単に認識できる場所（角、交差点、ドア、エレベーター、階段など）です。<br/><br/>
● 参照ポイントは少なくとも5〜10メートルごとに配置してください。参照ポイントを正確に配置するほど、屋内位置決定の精度が向上します。<br/><br/>
● セクションまたはフロア全体を調査したら、赤い停止ボタンを押して調査を終了します。調査結果はサーバー側に送信され、処理されます。1分または数分後に、新しい建物モデル（調査が精度向上に貢献した場合）が自動的に公開されます（建物モデルについては後述の章を参照してください）。

## 提供される精度を評価する

屋内調査を実施した後、結果を評価する必要があります。[Traxmateポータル](https://online.traxmate.io/)にログインし、Place/BuildingのPositioningタブを訪問します。  
調査の生データはバックエンドサーバーで処理され、結果は建物モデルとして利用可能になります。最新の公開された建物モデルの詳細はPositioningタブに表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>この画像は、中央値誤差が4.33メートルであることを示しています。調査によって建物の51%がカバーされ、Wi-FiとBluetooth（RFカバレッジ）が建物の13%をカバーしていることがわかります。</i></center>

### 建物モデルと中央値誤差

建物モデルは、建物内にビーコンが配置されている場所を電子的に表現したものです。建物モデルは、ユーザー（または複数のユーザー）が調査または参照トラックを実施することで生成されます。これらが完了すると、システムに送信され、建物モデルとして計算されます。

各建物モデルには中央値誤差が計算されます。中央値誤差は、調査中に配置された参照ポイントによって生成された地上真値/参照トラックと、Combain Location APIによって提供される屋内位置決定に基づく計算トラックとの間の差（誤差）に基づいています。システムは、利用可能な最良の建物モデルを自動的に選択して公開します。「最良」のアルゴリズムは、カバレッジ率と中央値誤差の組み合わせに基づいています。

この自動プロセスは、選択された建物モデルを手動で公開することで上書きすることができます。建物モデルは編集可能です。ユーザーはビーコンを追加または編集して位置決定の精度をさらに向上させることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>建物Mattehuset1の公開された建物モデル1892を表示しています。合計で98の利用可能な建物モデルがあります。現在の建物モデルには179のユニークなWi-Fi MACアドレスが含まれており、6階のうち4階をカバーしています。全階の中央値誤差は4.33メートルです。最良の階（画像9参照）は3階で、中央値誤差は3.9メートルです。</i></center>

### 調査カバレッジ、RFカバレッジ、中央値誤差マップ

特定の建物モデルを評価し、精度を向上させる方法を確認する際には、調査カバレッジ、RFカバレッジ、中央値誤差マップを確認することが役立ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### 屋内位置決定精度を向上させる方法

中央値誤差マップを確認し、提供される中央値誤差が使用ケースの要件に合致していない場合は、精度を向上させる方法を検討する時です。

● **ステップ1** - 調査を増やす<br/>
建物内で屋内位置決定を使用する予定のすべてのエリアで調査を実施しましたか？  
もし実施していない場合は、さらに調査を行ってください。

● **ステップ2** - Wi-FiとBluetoothのカバレッジを増やす<br/>
建物内で屋内位置決定を使用する予定のすべてのエリアにWi-FiとBluetoothがありますか？  
もしない場合は、これらのエリアにWi-FiとBluetoothビーコンを設置し、調査を実施してください。

● **ステップ 3** - Wi-Fi と Bluetooth の密度を増加させる<br/>
建物内のすべてのエリアに Wi-Fi と Bluetooth が設置されていますが、精度がまだ十分ではありません。  
これらのエリアにおける Wi-Fi と Bluetooth の密度を確認してください。付録 1 の表と比較し、理論的およびシミュレーションの観点から、要件を満たすために Wi-Fi と Bluetooth の密度を増加させることが推奨されるかどうかを確認してください。必要であれば、これらのエリアに Wi-Fi と Bluetooth ビーコンを追加で設置してください。

● **ステップ 4** - 調査精度を向上させる<br/>
建物内のすべてのエリアに Wi-Fi と Bluetooth が設置され、密度が付録 1 で提案された理論的レベルに従っているにもかかわらず、精度がまだ十分ではありません。  
より詳細な調査を実施してください。できるだけ頻繁に（1 平方メートルごとが最適）参照ポイントを配置し、できるだけ正確に配置してください。地図上で参照ポイントを配置する際には、正確で正しい位置に配置することが重要です。誤って実際の位置とは異なる場所に配置してしまうことは非常に簡単です。



## 使用開始

SenseCAP T1000 トラッカーは、Wi-Fi と Bluetooth のスキャン情報、MAC アドレス、信号強度を収集し、それを The Things Stack に送信した後、API を介して Traxmate ポータルに送信します。

まず、トラッカーを正しく設定するために [TTN に接続](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN/) を確認してください。

### デバイスを追加する

Traxmate ポータルにログインし、`Devices` -> `Add new` -> `Device` に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>



### TTS 設定

[The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3) にログインし、`Integrations` → `Webhooks` に移動して、`Add Webhook` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

`Custom Webhook` テンプレートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

Webhook ID を命名し、フォーマットを `JSON` に設定して、Base URL をコピーします。

```cpp
https://capture.v1.traxmate.io/service/<Service Token>/device
```

:::tip
`Settings` -> `Account` に移動し、Service Token をコピーします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/service-token.png" alt="pir" width={800} height="auto" /></p>
:::

以下の推奨イベントタイプを有効にしてから、`Add webhook` をクリックします。
* Uplink message
* Normalized uplink

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/websettings.png" alt="pir" width={800} height="auto" /></p>



### デバイスデータを確認する

デバイスが正常に接続されると、Traxmate ポータルに戻り、デバイスのデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## 付録

### 精度要件

**この章で説明する方法と技術は、中央値誤差が約2〜10メートルの精度を必要とするユースケースに適しています。**

すべての精度要件は、ユースケースのニーズに基づいて設定されるべきです。一部のユースケースでは他よりも高い精度要件があり、また一部のユースケースでは屋内測位インフラストラクチャに利用可能な予算が多い場合があります。ソリューションは、精度要件と利用可能な予算のバランスを取ることを目指すべきです。経験則として、インフラストラクチャに多くの資金と労力を投入すればするほど、精度は向上します。ただし、多くのユースケースでは、既存のインフラストラクチャを使用することで対応可能であることに注意してください。

以下のチャートは、特定の平方メートル数に対して一定数のWi-FiまたはBluetoothデバイスを使用した場合に期待できる精度を示しています。

### 推定屋内精度マトリックス

以下の表は、AI（ANN）ベースの屋内測位を使用した場合に屋内環境で期待できる推定精度を示しています。精度は、カバーするエリアと設置されたWi-Fiアクセスポイント（AP）またはBluetoothビーコンの数に依存します。

中央値誤差の精度は以下の通りです：

● 緑色：1〜5メートル<br/>
● 黄色：5〜10メートル<br/>
● 赤色：10メートル以上<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p><center><i>1平方メートルごとに1つの参照ポイントを使用して非常に詳細な調査を行った場合の精度を示す表。</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p><center><i>4平方メートルごとに1つの参照ポイントを使用して詳細な調査を行った場合の精度を示す表。</i></center>
<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p><center><i>100平方メートルごとに1つの参照ポイントを使用して疎な調査を行った場合の精度を示す表。</i></center>