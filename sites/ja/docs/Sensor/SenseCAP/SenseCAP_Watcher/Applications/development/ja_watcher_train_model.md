---
description: SenseCraft から Watcher へ AI モデルをデプロイする
title: Watcher 用モデルのトレーニング
image: https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png
slug: /training_model_for_watcher
sidebar_position: 2
last_update:
  date: 10/9/2024
  author: Jason
createdAt: '2024-10-11'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/ja/training_model_for_watcher/
---

# Watcher 用モデルのトレーニング

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{width:1000, height:'auto'}}/></div>

この WiKi 記事では、SenseCraft を使って独自の AI モデルをトレーニングし、それを Watcher にデプロイする方法を説明します。とても興味深いプロセスになります。まだ SenseCraft が何か分からない場合は、[here](https://sensecraft.seeed.cc/) をクリックしてください。これは、さまざまなオープンソース AI モデルを Seeed Studio デバイス上にデプロイできるプラットフォームです。

## SenseCraft Web サイトで AI モデルをセットアップ

### Step 1 . [SenseCraft AI](https://sensecraft.seeed.cc/ai) を開く

[SenseCraft AI](https://sensecraft.seeed.cc/ai) プラットフォームを開き、**`Models`** > **`Training`** に移動してモデルのトレーニングを開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{width:800, height:'auto'}}/></div>

### Step 2 . トレーニングタイプを設定

:::tip
**_ここではカメラからトレーニングデータを収集するために Grove Vision AI (V2) を使用することを推奨します。Watcher は Grove Vision AI V2（Arm Cortex-M55）と同じチップを使用しているため、Watcher のモデルをトレーニングするデバイスとして Grove Vision AI V2 が選ばれています。写真撮影に使用するデバイスは、実際にデプロイするデバイスと同じものを使うのが最適であり、それが最終的な精度に直接影響します。_**
:::

ここでは手軽さを優先して、PC のカメラを使ってデータを取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{width:800, height:'auto'}}/></div>

### Step 3 . データ収集

**トレーニング手順**

- カテゴリを追加
- カテゴリのタグを編集
- 選択したカテゴリで "Hold to Record" をクリック
- Grove Vision AI(V2) を選択
- トレーニングを開始

Collect Classification Data では、必要なカテゴリを追加できます。ここでは、カテゴリとして car と doll を追加し、タグを編集しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{width:800, height:'auto'}}/></div>

:::tip
取得するデータ量が多く、かつ画素が鮮明であるほど、トレーニング結果は良くなります。
:::

トレーニング後、Start Training の下にある "Click here" タグをクリックする必要があります。

### Step 4 . モデルを選択

トレーニングが完了すると、モデルファイルを確認できます。

- モデルファイルをクリック
- "Save to SenseCraft" をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{width:800, height:'auto'}}/></div>

### Step 5 . モデルの説明

**Model Name**、**Model Excerpt**、**Model Introduction**、**Model Deployment Preparation** を入力してください。モデルを公開する場合、この情報は多くの人にとって非常に有用です。これはテスト用なので、ここでは簡単に記入しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{width:800, height:'auto'}}/></div>

:::tip
Supported Devices で SenseCAP Watcher と Grove-Vision AI V2 を選択してください。
:::

### Step 6 . モデルパラメータを設定

モデルに応じて、使用したい AI Framework を選択できます。

Confidence Threshold

- Confidence とは、モデルが予測に対してどの程度確信を持っているか、あるいはどの程度の確率を割り当てているかを指します。

- Confidence は、モデルが予測結果に対して持つ確信度や確率の度合いであり、通常は 0% から 100% のパーセンテージで表されます。

IOU Threshold

- IoU は、予測されたバウンディングボックスと真のバウンディングボックスを比較して、その精度を評価するために使用されます。

- IoU は物体検出モデルの性能を評価するための重要な指標であり、予測バウンディングボックスと実際のバウンディングボックスの重なり具合を測定します。

- 0% は重なりがまったくないことを示します。
- 100% は完全に重なっていることを示します。

すべての設定が完了したら、Confirm をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{width:800, height:'auto'}}/></div>

**`Models`** > **`My Models`** を開くと、トレーニングしたモデルを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{width:800, height:'auto'}}/></div>

## SenseCraft APP で Watcher をセットアップ

### Step 1 . 使用する Watcher を選択

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{width:300, height:'auto'}}/></div>

### Step 2 . Manually Set Up Task を見つけて入る

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{width:300, height:'auto'}}/></div>

### Step 3 . 'Use TinyML Model' にチェックを入れる

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{width:300, height:'auto'}}/></div>

### Step 4 . デプロイしたモデルを探す

名前を入力するかスクロールして、デプロイした AI モデルを見つけてチェックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{width:300, height:'auto'}}/></div>

### Step 5 . しきい値と条件を設定

Confidence は、モデルが予測結果に対してどの程度の確信を持っているかを示す指標で、通常は 0〜1 の値、または 0%〜100% のパーセンテージで表されます。
例えば、モデル出力の信頼度が 80% の場合、その予測が正しいとモデルが 80% の確率で判断していることを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{width:300, height:'auto'}}/></div>

### Step 6 . タスク名を設定

タスク名を設定すると、そのタスクを直接 Watcher に送信してモデルを実行させることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{width:300, height:'auto'}}/></div>

### Step 7 . Watcher がモデルをデプロイするのを待つ

AI モデルを選択し、対応するパラメータを設定したら、Watcher がモデルをダウンロードするのを待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
この間、外部要因によりダウンロードが失敗する場合があります。その場合は、再度選択してパラメータを設定し、ダウンロードを続行してください。
:::

## Watcher の AI モデル表示

### 結果のデモ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{width:500, height:'auto'}}/></div>

これは、私の AI モデルを Watcher 上で表示したシンプルな例です。皆さんの AI モデルが Watcher 上で輝くことを楽しみにしています！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
