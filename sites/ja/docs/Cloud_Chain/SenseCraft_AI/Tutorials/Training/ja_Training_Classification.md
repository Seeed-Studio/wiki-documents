---
sidebar_position: 5
description: ブラウザのカメラまたは対応するエッジ AI デバイスを使用して、SenseCraft AI でカスタム画像分類モデルを学習、ラベル付け、テスト、およびデプロイします。
title: SenseCraft AI を使った画像分類トレーニング
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-classification
aliases:
  - /sensecraft_ai_training_classification
last_update:
  date: 12/03/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2026-08-13'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/sensecraft-ai-training-classification/
---

# SenseCraft AI で画像分類モデルをトレーニングする

分類は、さまざまな種類のデータを認識して分類するようにモデルを学習させることができる、機械学習における強力なツールです。SenseCraft AI プラットフォームでは、分類機能により、トレーニング時に提供する画像に基づいて、さまざまな物体、ジェスチャー、シーンを識別・区別できるモデルを作成できます。

SenseCraft AI で分類モデルをトレーニングすることで、次のような幅広いアプリケーションを実現できます。

- インタラクティブな体験のためのジェスチャー認識

- 在庫管理や品質管理のための物体検出

- 自律走行や環境モニタリングのためのシーン分類

SenseCraft AI プラットフォームは分類プロセスを簡素化し、豊富な機械学習の専門知識がなくても、特定のニーズに合わせたカスタムモデルを作成できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_training#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックで直接アクセス 🖱️</font></span></strong>
    </a>
</div><br />

## はじめに

この包括的なガイドでは、SenseCraft AI プラットフォームを使用して分類モデルをトレーニングする手順を順を追って説明します。ここでは主に XIAO ESP32S3 Sense 向けのモデル学習に焦点を当てますが、このプラットフォームは Grove Vision AI や Watcher など、その他の Seeed Studio デバイスにも対応していることに注意してください。

Seeed Studio デバイスをお持ちでない場合でも心配はいりません。ノート PC の内蔵カメラを使って、トレーニングプロセスを体験しながら手順を追うことができます。ただし、最適なパフォーマンスと最高の結果を得るためには、ターゲットデバイスを使用してモデルをトレーニングおよびデプロイすることを推奨します。

## ボディジェスチャーを認識するモデルをトレーニングする

このチュートリアルでは、腕組み、両腕を広げる、気をつけの姿勢、手でハートマークを作るという 4 つの異なるボディジェスチャーを認識するモデルを作成します。

:::tip
SenseCraft AI プラットフォームは最大 200 個の分類カテゴリをサポートしており、特定のニーズに合わせたモデルを柔軟に作成できます。
:::

### ステップ 1. デバイスを接続する

XIAO ESP32S3 Sense のような Seeed Studio デバイスを使用している場合は、USB-C ケーブルでコンピュータに接続します。ドロップダウンメニューから該当するデバイスを選択し、**Connect** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/35.png" style={{width:1000, height:'auto'}}/></div>

接続に使用する**正しいシリアルポート**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/36.png" style={{width:1000, height:'auto'}}/></div>

ノート PC のカメラを使用する場合は、このステップをスキップできます。このページを開くと、自動的にカメラのライブ映像が表示されます。表示されない場合は、ブラウザの権限設定を確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/37.png" style={{width:1000, height:'auto'}}/></div>

:::note
**Microsoft Edge** または **Google Chrome** を使用してください。
:::

### ステップ 2. カテゴリを作成してラベル付けする

既存のクラス名の右側にある鉛筆ボタンをクリックすると、そのクラス名を変更できます。下部の **Add a Class** ボタンをクリックして、認識させたいボディジェスチャー用に 4 つのカテゴリを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/38.png" style={{width:600, height:'auto'}}/></div>

カテゴリには次のようにラベルを付けます："Crossed Arms"、"Open Arms"、"Standing at Attention"、"Heart Shape"。それぞれのカテゴリ名が正しく設定されているかを再確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/39.png" style={{width:600, height:'auto'}}/></div>

### ステップ 3. トレーニングデータを収集する

リストから最初のカテゴリ（例："Crossed Arms"）を選択します。カメラの前に立ち、対応するボディジェスチャーを行います。**Hold to Record** ボタンを押し続けて、そのジェスチャーの画像を撮影します。録画を停止するにはボタンから指を離します。堅牢で高精度なモデルにするために、各カテゴリにつき**少なくとも 40 枚の画像**を収集することを目標にしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/40.png" style={{width:1000, height:'auto'}}/></div>

残りの各カテゴリについても同様の手順を繰り返し、それぞれのジェスチャーに対して多様な画像を収集します。

:::tip
各カテゴリに対して高品質で関連性の高い画像を多く収集するほど、モデルの性能は向上します。モデルの汎化能力を高めるために、照明、角度、背景にバリエーションを持たせるよう心がけてください。
:::

### ステップ 4. モデルをトレーニングする

各カテゴリについて十分な数の画像を収集したら、**'Start Training'** ボタンをクリックしてモデルのトレーニングプロセスを開始します。トレーニングには通常 1〜3 分ほどかかりますが、モデルの複雑さやトレーニングデータの量によって変動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/41.png" style={{width:1000, height:'auto'}}/></div>

:::tip
モデルをトレーニングしている間は、すぐにウェブページを離れないでください。そうしないとページの内容が失われる可能性があります。
:::

### ステップ 5. 学習済みモデルをデプロイする

:::caution
このモデルを恒久的に保存したい場合は、必ず先に **Save to SenseCraft** をクリックして、モデルを自分のアカウントに保存し、失われないようにしてください。
:::

モデルのトレーニングが完了したら、ターゲットデバイスへのデプロイを行います。XIAO ESP32S3 Sense やその他の Seeed Studio デバイスを使用している場合は、ドロップダウンメニューから適切なデバイスを選択し、**'Deploy to device'** をクリックします。ノート PC のカメラを使ってモデルをトレーニングした場合は、このステップをスキップして結果のデモンストレーションに進むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/42.png" style={{width:1000, height:'auto'}}/></div>

**'Confirm'** をクリックし、デバイス接続用の**正しいシリアルポート**を選択します。デプロイには 1〜3 分ほどかかる場合があります。完了するまでしばらくお待ちください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## 結果のデモンストレーション

おめでとうございます。ボディジェスチャー認識モデルのトレーニングとデプロイに成功しました。さっそく動作を確認してみましょう。

- カメラを自分自身またはテスト対象者に向けます。
- 学習させた各ボディジェスチャーを 1 つずつ行います。
- モデルによるリアルタイムの予測と分類結果を観察します。
- モデルが各ジェスチャーを正確に認識・分類できているか確認します。

SenseCraft AI プラットフォームを使って、さまざまな物体、ジェスチャー、シナリオ向けのモデルを自由にトレーニングしてみてください。Seeed Studio デバイスを使用する場合でも、ノート PC のカメラを使用する場合でも、基本的なプロセスはほぼ同じです。

<div class="table-center">
<iframe width="760" height="500" src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/result.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

プラットフォームでは任意のカメラを使ってモデルをトレーニングできますが、最良の結果と最適なパフォーマンスを得るためには、ターゲットデバイス（現在は Seeed Studio デバイスに限定）を使用してモデルをトレーニングおよびデプロイすることを推奨します。

この包括的なガイドにより、SenseCraft AI プラットフォームを使用して分類モデルをトレーニングする方法について、十分な理解が得られたはずです。ぜひトレーニングを楽しみながら、プロジェクト向けの強力なカスタム AI モデルを作成してください。

## 関連ガイド

- [SenseCraft AI overview](/ja/sensecraft-ai/overview/) でプラットフォームの機能について学びましょう。
- 別のコンピュータビジョンタスクとして、[object detection model training guide](/ja/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection/) に従ってみましょう。
- [SenseCraft AI documentation center](/ja/sensecraft-ai/sensecraft-ai-main/) で、さらに多くのチュートリアルやリソースを参照できます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
