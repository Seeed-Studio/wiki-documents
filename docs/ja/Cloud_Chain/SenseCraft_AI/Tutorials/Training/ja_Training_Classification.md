---
sidebar_position: 5
description: Training(Classification)の使用方法
title: Training - Classification
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.webp
slug: /ja/sensecraft-ai/tutorials/sensecraft-ai-training-classification
aliases:
  - /ja/sensecraft_ai_training_classification
last_update:
  date: 12/03/2024
  author: Citric
---

# トレーニングの種類 - 分類

分類は機械学習における強力なツールで、さまざまなタイプのデータを認識し分類するモデルをトレーニングできます。SenseCraft AIプラットフォームでは、分類機能により、トレーニング中に提供した画像に基づいて、さまざまなオブジェクト、ジェスチャー、シーンを識別し区別できるモデルを作成できます。

SenseCraft AIで分類モデルをトレーニングすることで、以下のような幅広いアプリケーションを実現できます：

- インタラクティブ体験のためのジェスチャー認識

- 在庫管理や品質管理のためのオブジェクト検出

- 自律ナビゲーションや環境モニタリングのためのシーン分類

SenseCraft AIプラットフォームは分類プロセスを簡素化し、広範な機械学習の専門知識を必要とせずに、特定のニーズに合わせたカスタムモデルを作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリック直接アクセス 🖱️</font></span></strong>
    </a>
</div><br />

## はじめに

この包括的なガイドでは、SenseCraft AIプラットフォームを使用して分類モデルをトレーニングするプロセスを説明します。主にXIAO ESP32S3 Sense用のモデルトレーニングに焦点を当てますが、このプラットフォームはGrove Vision AIやWatcherなど、他のSeeed Studioデバイスとも互換性があることに注意してください。

Seeed Studioデバイスをお持ちでない場合でも問題ありません！ノートパソコンの内蔵カメラを使用してトレーニングプロセスを体験できます。ただし、最適なパフォーマンスと最良の結果を得るために、ターゲットデバイスを使用してモデルをトレーニングし展開することをお勧めします。

## 身体ジェスチャーを認識するモデルのトレーニング

このチュートリアルでは、4つの異なる身体ジェスチャーを認識するモデルを作成します：腕組み、腕を広げる、気をつけの姿勢、手でハートの形を作る。

:::tip
SenseCraft AIプラットフォームは分類において最大200カテゴリをサポートしており、特定のニーズに合わせたモデルを作成するための十分な柔軟性を提供します。
:::

### ステップ1. デバイスを接続する

XIAO ESP32S3 SenseなどのSeeed Studioデバイスを使用している場合は、USB-Cケーブルでコンピューターに接続します。ドロップダウンメニューから対応するデバイスを選択し、**Connect**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/35.png" style={{width:1000, height:'auto'}}/></div>

接続用の**正しいシリアルポート**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/36.png" style={{width:1000, height:'auto'}}/></div>

ノートパソコンのカメラを使用している場合は、このステップをスキップできます。このページにアクセスすると、カメラのライブフィードが自動的に表示されるためです。表示されない場合は、ブラウザの権限を確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/37.png" style={{width:1000, height:'auto'}}/></div>

:::note
**Microsoft Edge**または**Google Chrome**をご使用ください。
:::

### ステップ2. カテゴリを作成してラベル付けする

既存のクラス名の右側にある鉛筆ボタンをクリックして、既存のクラスの名前を変更します。下の**Add a Class**ボタンをクリックして、認識したい身体ジェスチャー用の4つのカテゴリを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/38.png" style={{width:600, height:'auto'}}/></div>

カテゴリを次のようにラベル付けします：「Crossed Arms」、「Open Arms」、「Standing at Attention」、「Heart Shape」。各カテゴリが正しく名前付けされていることを再確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/39.png" style={{width:600, height:'auto'}}/></div>

### ステップ3. トレーニングデータを取得する

リストから最初のカテゴリ（例：「Crossed Arms」）を選択します。カメラの前に立ち、対応する身体ジェスチャーを行います。**Hold to Record**ボタンを押し続けて、ジェスチャーの画像を取得します。ボタンを離すと録画が停止します。堅牢で正確なモデルを確保するために、カテゴリごとに**少なくとも40枚の画像**を取得することを目指してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/40.png" style={{width:1000, height:'auto'}}/></div>

残りの各カテゴリについてもこのプロセスを繰り返し、各ジェスチャーについて多様な画像を取得します。

:::tip
各カテゴリについて収集する高品質で関連性の高い画像が多いほど、モデルのパフォーマンスが向上します。モデルの汎化能力を向上させるために、照明、角度、背景の多様性を目指してください。
:::

### ステップ4. モデルをトレーニングする

各カテゴリについて十分な数の画像を収集したら、**'Start Training'**ボタンをクリックしてモデルトレーニングプロセスを開始します。トレーニングプロセスは通常、モデルの複雑さとトレーニングデータの量に応じて1〜3分かかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/41.png" style={{width:1000, height:'auto'}}/></div>

:::tip
モデルをトレーニング中は、Webページをすぐに閉じ**ないでください**。そうしないと、ページの内容が失われる可能性があります。
:::

### ステップ5. トレーニング済みモデルを展開する

:::caution
このモデルを永続的に保存したい場合は、まず**Save to SenseCraft**をクリックして、モデルを失わないようにアカウントの下にモデルを保存してください。
:::

モデルのトレーニングが完了したら、ターゲットデバイスにデプロイする時です。XIAO ESP32S3 SenseまたはSeeed Studioの他のデバイスを使用している場合は、ドロップダウンメニューから適切なデバイスを選択し、**'Deploy to device'**をクリックしてください。ラップトップのカメラを使用してモデルをトレーニングした場合は、このステップをスキップして結果のデモンストレーションに進むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/42.png" style={{width:1000, height:'auto'}}/></div>

**'Confirm'**をクリックし、デバイス接続用の正しい**シリアルポート**を選択してください。デプロイプロセスには1〜3分かかる場合があります。完了するまで辛抱強くお待ちください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## 結果のデモンストレーション

おめでとうございます！ボディジェスチャー認識モデルのトレーニングとデプロイが正常に完了しました。テストしてみましょう：

- カメラを自分またはテスト対象者に向けてください。
- トレーニングした各ボディジェスチャーを一つずつ実行してください。
- モデルのリアルタイム予測と分類結果を観察してください。
- モデルが各ジェスチャーを正確に認識し分類することを確認してください。

SenseCraft AIプラットフォームを使用して、異なるオブジェクト、ジェスチャー、またはシナリオのモデルをトレーニングすることを自由に試してみてください。Seeed Studioデバイスまたはラップトップのカメラのどちらを使用していても、プロセスはほぼ同じです。

<div class="table-center">
<iframe width="760" height="500" src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/result.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

プラットフォームでは任意のカメラを使用してモデルをトレーニングできますが、最良の結果と最適なパフォーマンスを得るために、ターゲットデバイス（現在はSeeed Studioデバイスに限定）を使用してモデルをトレーニングし、デプロイすることをお勧めします。

この包括的なガイドにより、SenseCraft AIプラットフォームを使用して分類モデルをトレーニングする方法について確実な理解を得られたはずです。楽しいトレーニングを、そしてプロジェクト用の強力でカスタムなAIモデルの作成をお楽しみください！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
