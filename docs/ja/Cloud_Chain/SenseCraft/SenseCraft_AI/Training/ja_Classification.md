---
description: トレーニング（分類）の使用方法
title: 分類
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.webp
slug: /ja/sensecraft_ai_training_classification
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# トレーニングの種類 - 分類

分類は、機械学習において強力なツールであり、モデルをトレーニングして異なる種類のデータを認識し、分類することができます。SenseCraft AIプラットフォームでは、分類を使用して、トレーニング中に提供された画像に基づいて、さまざまなオブジェクト、ジェスチャー、またはシーンを識別し区別するモデルを作成することができます。

SenseCraft AIで分類モデルをトレーニングすることで、以下のような幅広いアプリケーションを実現できます：

- インタラクティブな体験のためのジェスチャー認識

- 在庫管理や品質管理のためのオブジェクト検出

- 自律ナビゲーションや環境モニタリングのためのシーン分類

SenseCraft AIプラットフォームは分類プロセスを簡素化し、広範な機械学習の専門知識を必要とせずに、特定のニーズに合わせたカスタムモデルを作成できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックで直接アクセス 🖱️</font></span></strong>
    </a>
</div><br />

## はじめに

この包括的なガイドでは、SenseCraft AIプラットフォームを使用して分類モデルをトレーニングするプロセスを説明します。主にXIAO ESP32S3 Sense向けのモデルトレーニングに焦点を当てますが、このプラットフォームはGrove Vision AIやWatcherなどの他のSeeed Studioデバイスとも互換性があります。

Seeed Studioデバイスをお持ちでない場合でも問題ありません！ノートパソコンの内蔵カメラを使用してトレーニングプロセスを体験することができます。ただし、最適なパフォーマンスと最高の結果を得るためには、ターゲットデバイスを使用してモデルをトレーニングおよびデプロイすることをお勧めします。

## ボディジェスチャーを認識するモデルのトレーニング

このチュートリアルでは、以下の4つの異なるボディジェスチャーを認識するモデルを作成します：腕を交差させる、腕を広げる、気をつけの姿勢、手でハート形を作る。

:::tip
SenseCraft AIプラットフォームは最大200カテゴリの分類をサポートしており、特定のニーズに合わせたモデルを作成する柔軟性を提供します。
:::

### ステップ1. デバイスを接続する

XIAO ESP32S3 SenseのようなSeeed Studioデバイスを使用している場合は、USB-Cケーブルを使用してコンピュータに接続してください。ドロップダウンメニューから対応するデバイスを選択し、**接続**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/35.png" style={{width:1000, height:'auto'}}/></div>

**正しいシリアルポート**を選択して接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/36.png" style={{width:1000, height:'auto'}}/></div>

ノートパソコンのカメラを使用している場合、このステップをスキップできます。このページにアクセスすると、カメラのライブフィードが自動的に表示されます。表示されない場合は、ブラウザの権限を確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/37.png" style={{width:1000, height:'auto'}}/></div>

:::note
**Microsoft Edge**または**Google Chrome**を使用してください。
:::

### ステップ2. カテゴリを作成してラベル付けする

既存のクラス名の右側にある鉛筆ボタンをクリックして、既存のクラス名を変更します。下部の**クラスを追加**ボタンをクリックして、認識したいボディジェスチャーのための4つのカテゴリを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/38.png" style={{width:600, height:'auto'}}/></div>

カテゴリに以下のようにラベルを付けます：「腕を交差させる」、「腕を広げる」、「気をつけの姿勢」、「ハート形」。各カテゴリが正しく名前付けされていることを再確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/39.png" style={{width:600, height:'auto'}}/></div>

### ステップ3. トレーニングデータを収集する

リストから最初のカテゴリ（例：「腕を交差させる」）を選択します。カメラの前に立ち、対応するボディジェスチャーを行います。**録画を保持**ボタンを押し続けてジェスチャーの画像をキャプチャします。ボタンを離すと録画が停止します。各カテゴリにつき**最低40枚の画像**をキャプチャして、堅牢で正確なモデルを確保してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/40.png" style={{width:1000, height:'auto'}}/></div>

残りのカテゴリについても同様のプロセスを繰り返し、各ジェスチャーの多様な画像を収集します。

:::tip
各カテゴリに対して高品質で関連性のある画像を多く収集するほど、モデルの性能が向上します。照明、角度、背景にバリエーションを持たせることで、モデルの一般化能力を向上させることができます。
:::

### ステップ4. モデルをトレーニングする

各カテゴリに十分な数の画像を収集したら、**「トレーニング開始」**ボタンをクリックしてモデルのトレーニングプロセスを開始します。トレーニングプロセスは通常、モデルの複雑さやトレーニングデータの量に応じて1〜3分かかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/41.png" style={{width:1000, height:'auto'}}/></div>

:::tip
モデルをトレーニングしている間は、ウェブページをすぐに閉じないでください。そうしないとページの内容が失われる可能性があります。
:::

### ステップ5. トレーニング済みモデルをデプロイする

:::caution
このモデルを永久に保存したい場合は、必ず**SenseCraftに保存**をクリックして、アカウントにモデルを保存し、失われないようにしてください。
:::

モデルのトレーニングが完了したら、ターゲットデバイスにデプロイする準備が整いました。XIAO ESP32S3 Sense やその他の Seeed Studio デバイスを使用している場合は、ドロップダウンメニューから適切なデバイスを選択し、**「Deploy to device」** をクリックしてください。ラップトップのカメラを使用してモデルをトレーニングした場合、このステップをスキップして結果のデモンストレーションに進むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/42.png" style={{width:1000, height:'auto'}}/></div>

**「Confirm」** をクリックし、デバイス接続用の正しい **シリアルポート** を選択してください。デプロイメントプロセスには1～3分かかる場合があります。完了するまでしばらくお待ちください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## 結果のデモンストレーション

おめでとうございます！ボディジェスチャー認識モデルのトレーニングとデプロイが成功しました。それでは、テストを行いましょう：

- カメラを自分自身またはテスト対象者に向けてください。
- トレーニングした各ボディジェスチャーを1つずつ実行してください。
- モデルのリアルタイム予測と分類結果を観察してください。
- モデルが各ジェスチャーを正確に認識し、分類できることを確認してください。

SenseCraft AI プラットフォームを使用して、異なるオブジェクト、ジェスチャー、またはシナリオのトレーニングモデルを自由に試してみてください。Seeed Studio デバイスまたはラップトップのカメラを使用するかに関わらず、プロセスはほぼ同じです。

<div class="table-center">
<iframe width="760" height="500" src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/result.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

プラットフォームでは任意のカメラを使用してモデルをトレーニングできますが、最良の結果と最適なパフォーマンスを得るために、ターゲットデバイス（現在は Seeed Studio デバイスに限定）を使用してモデルをトレーニングおよびデプロイすることをお勧めします。

この包括的なガイドを通じて、SenseCraft AI プラットフォームを使用して分類モデルをトレーニングする方法についての確かな理解が得られたはずです。トレーニングを楽しみながら、プロジェクトに合わせた強力なカスタム AI モデルを作成してください！

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートをご提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>