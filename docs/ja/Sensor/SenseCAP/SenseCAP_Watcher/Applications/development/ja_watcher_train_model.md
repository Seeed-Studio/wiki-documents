---
description: SenseCraftを使用してAIモデルをWatcherにデプロイする方法
title: Watcher用モデルのトレーニング
image: "https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png"
slug: /ja/training_model_for_watcher
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Jason
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher用モデルのトレーニング

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{width:1000, height:'auto'}}/></div>

このWiKi記事では、SenseCraftを使用して独自のAIモデルをトレーニングし、Watcherにデプロイする方法を学びます。非常に興味深いプロセスになるでしょう。SenseCraftが何かまだ分からない場合は、[こちら](https://sensecraft.seeed.cc/)をクリックしてください。このプラットフォームでは、Seeed Studioデバイス上でさまざまなオープンソースAIモデルをデプロイすることができます。

## SenseCraftウェブサイトでAIモデルをセットアップする

### ステップ1 . [SenseCraft](https://sensecraft.seeed.cc/)ウェブサイトを開く

トップメニューバーの「Products」をクリックしてドロップダウンオプションを表示し、「SenseCraft AI」を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{width:800, height:'auto'}}/></div>

### ステップ2 . トレーニングタイプを設定する

:::tip
**_ここではGrove Vision AI (V2)を使用してカメラからトレーニングデータを収集することをお勧めします。WatcherはGrove Vision AI V2と同じチップ（Arm Cortex-M55）を使用しているため、WatcherのモデルをトレーニングするためにGrove Vision AI V2が選ばれました。写真を撮るために使用するデバイスはデプロイ先のデバイスであるべきであり、これが最終的な精度に直接影響します。_**
:::

ここでは利便性のためにコンピュータのカメラを使用してデータを収集します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{width:800, height:'auto'}}/></div>

### ステップ3 . データを収集する

**トレーニング手順**

- カテゴリを追加
- カテゴリタグを修正
- 選択したカテゴリで「Hold to Record」をクリック
- Grove Vision AI(V2)を選択
- トレーニングを開始

分類データを収集する際に、必要なカテゴリを追加できます。ここでは、車と人形をカテゴリとして追加し、タグを修正しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{width:800, height:'auto'}}/></div>

:::tip
取得するデータが多く、ピクセルが鮮明であるほど、トレーニング結果が良くなります。
:::

トレーニング後、「Click here」タグをクリックしてトレーニングを開始します。

### ステップ4 . モデルを選択する

トレーニング完了後にモデルファイルを確認できます。

- モデルファイルをクリック
- 「Save to SenseCraft」をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{width:800, height:'auto'}}/></div>

### ステップ5 . モデルの説明を記入する

**モデル名**、**モデル概要**、**モデル紹介**、**モデルデプロイ準備**を記入してください。モデルを公開する場合、この情報は他の人にとって非常に役立ちます。これはテストなので、簡単に記入しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{width:800, height:'auto'}}/></div>

:::tip
対応デバイスとしてSenseCAP WatcherとGrove-Vision AI V2を選択してください。
:::

### ステップ6 . モデルパラメータを設定する

モデルに基づいて希望するAIフレームワークを選択できます。

Confidence Threshold（信頼度閾値）
- 信頼度は、モデルが予測に割り当てる確実性または確率のレベルを指します。

- 信頼度は、モデルが予測結果に対して持つ確実性または確率の度合いを示します。通常、0%から100%の範囲でパーセンテージとして表されます。

IOU Threshold（IoU閾値）
- IoUは、予測されたバウンディングボックスと真実のバウンディングボックスを比較してその精度を評価するために使用されます。

- IoUは、物体検出モデルの性能を評価するための重要な指標です。予測されたバウンディングボックスと実際のバウンディングボックスの重なりの程度を測定します。

- 0%は重なりがないことを示します。
- 100%は完全に重なっていることを示します。

すべての設定が完了したら、「Confirm」をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{width:800, height:'auto'}}/></div>

Pretrained Modelsに戻り、「My Own Models」をクリックしてトレーニングしたモデルを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{width:800, height:'auto'}}/></div>

## SenseCraft APP ウォッチャーのセットアップ

### ステップ 1. ウォッチャーを選択
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 2. 手動セットアップタスクを見つけて入力
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 3. 「TinyMLモデルを使用」を確認
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 4. デプロイしたモデルを見つける

名前を入力するか、スクロールしてデプロイしたAIモデルを見つけて選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 5. 閾値と条件を設定

信頼度（Confidence）は、モデルが予測結果に対して持つ信頼の度合いを示します。通常、0から1の値、または0%から100%のパーセンテージで表されます。  
例えば、モデル出力の信頼度が80%である場合、それは予測が正しいと信じる確率が80%であることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 6. タスク名を設定

タスク名を設定することで、モデルを実行するために直接ビューアに送信できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 7. ウォッチャーがモデルをデプロイするのを待つ

AIモデルを選択し、対応するパラメータを設定したら、ビューアがダウンロードするのを待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
この期間中、外部の問題によりダウンロードが失敗する場合があります。その場合は、再度選択してパラメータを設定し、ダウンロードを続行してください。
:::

## ウォッチャー AI モデルの表示

### 結果のデモンストレーション

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{width:500, height:'auto'}}/></div>

これはウォッチャー上でのAIモデルの簡単な表示効果です。皆さんのAIモデルがウォッチャー上で輝くことを楽しみにしています！

## 技術サポート & 製品ディスカッション
弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>