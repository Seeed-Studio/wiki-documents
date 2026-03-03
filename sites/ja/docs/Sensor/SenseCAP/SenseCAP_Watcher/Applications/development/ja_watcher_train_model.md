---
description: SenseCraftからWatcher用のAIモデルをデプロイする
title: Watcher用モデルのトレーニング
image: "https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png"
slug: /ja/training_model_for_watcher
sidebar_position: 2
last_update:
  date: 10/9/2024
  author: Jason
---

# Watcher用モデルのトレーニング

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{width:1000, height:'auto'}}/></div>

このWiKi記事では、SenseCraftを使用して独自のAIモデルをトレーニングし、Watcherにデプロイする方法を説明します。これは非常に興味深いプロセスになるでしょう。SenseCraftが何かまだご存じでない場合は、[こちら](https://sensecraft.seeed.cc/)をクリックしてください。これは、Seeed Studioデバイス上で様々なオープンソースAIモデルをデプロイできるプラットフォームです。

## SenseCraft WebサイトでのAIモデルセットアップ

### ステップ1. [SenseCraft](https://sensecraft.seeed.cc/)ウェブサイトを開く

トップメニューバーの「Products」をクリックしてドロップダウンオプションを表示し、「SenseCraft AI」を選択してクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{width:800, height:'auto'}}/></div>

### ステップ2. トレーニングタイプの設定

:::tip
**_ここではカメラからトレーニングデータを収集するためにGrove Vision AI (V2)を使用することをお勧めします。WatcherはGrove Vision AI V2と同じチップ（Arm Cortex-M55）を使用しているため、WatcherのモデルをトレーニングするためにGrove Vision AI V2が選択されました。写真撮影に使用する最適なデバイスは、デプロイ先のデバイスであり、これが最終的な精度に直接影響します。_**
:::

便宜上、ここではコンピューターのカメラを使用してデータをキャプチャします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{width:800, height:'auto'}}/></div>

### ステップ3. データの収集

**トレーニング手順**

- カテゴリを追加
- カテゴリタグを修正
- 選択したカテゴリで「Hold to Record」をクリック
- Grove Vision AI(V2)を選択
- トレーニング開始

Collect Classification Dataで、必要なカテゴリを追加できます。ここでは、carとdollをカテゴリとして追加し、タグを修正しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{width:800, height:'auto'}}/></div>

:::tip
取得するデータが多く、ピクセルが鮮明であるほど、トレーニング結果が良くなります。
:::

トレーニング後、Start Trainingタグの下にある「Click here」をクリックする必要があります。

### ステップ4. モデルの選択

トレーニング完了後、モデルファイルを確認できます

- モデルファイルをクリック
- 「Save to SenseCraft」をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{width:800, height:'auto'}}/></div>

### ステップ5. モデルの説明

**Model Name**、**Model Excerpt**、**Model Introduction**、**Model Deployment Preparation**を提供してください。モデルを公開する場合、この情報は皆にとって非常に役立ちます。これはテストなので、簡潔に記述されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{width:800, height:'auto'}}/></div>

:::tip
Supported DevicesでSenseCAP WatcherとGrove-Vision AI V2を選択してください。
:::

### ステップ6. モデルパラメータの設定

モデルに基づいて希望するAI Frameworkを選択できます。

Confidence Threshold

- Confidenceは、モデルがその予測に割り当てる確実性または確率のレベルを指します。

- Confidenceは、モデルが予測結果に対して持つ確実性または確率の度合いです。通常、パーセンテージで表され、0%から100%の範囲です。

IOU Threshold

- IoUは、真実の境界ボックスと比較した予測境界ボックスの精度を評価するために使用されます。

- IoUは、物体検出モデルの性能を評価する重要な指標です。予測境界ボックスと実際の境界ボックス間の重複度を測定します。

- 0%は重複なしを示します。
- 100%は完全な重複を示します。

すべてを設定した後、Confirmをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{width:800, height:'auto'}}/></div>

Pretrained Modelsに戻り、My Own Modelsをクリックして、トレーニングしたモデルを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{width:800, height:'auto'}}/></div>

## SenseCraft APP ウォッチャーのセットアップ

### ステップ 1 . Watcherを選択する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 2 . 手動セットアップタスクを見つけて入る

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 3 . 'Use TinyML Model'をチェックする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 4 . デプロイしたモデルを見つける

名前を入力するか、下にスクロールしてデプロイしたAIモデルを見つけてチェックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 5 . 閾値と条件を設定する

信頼度は、モデルが予測結果に対して持つ信頼の度合いで、通常0から1の値、または0%から100%のパーセンテージで表されます。
例えば、モデル出力の信頼度が80%の場合、予測が正しいと信じる確率が80%であることを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 6 . タスク名を設定する

タスク名を設定して、ビューアーに直接送信してモデルを実行できるようにします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 7 . Watcherのモデルデプロイを待つ

AIモデルを選択し、対応するパラメータを設定したら、ビューアーがダウンロードするのを待つことができます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
この期間中、他の外部要因によりダウンロードが失敗する場合があります。パラメータを再選択・設定して、ダウンロードを続行するだけで済みます。
:::

## Watcher AIモデル表示

### 結果デモンストレーション

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{width:500, height:'auto'}}/></div>

これは私のAIモデルがWatcher上で動作する簡単な表示効果です。皆さんのAIモデルがWatcher上で輝くことを楽しみにしています！

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
