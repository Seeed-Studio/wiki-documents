---
title: Acoustic Lab の使用方法
description: この記事では、reCamera Pro 上の Acoustic Lab 機能を使用して環境音サンプルを収集し、カスタム音響モデルを学習させ、それらを音トリガーイベントとしてデプロイする方法を紹介します。
keywords:
  - reCamera
  - reCamera Pro
  - Acoustic Lab
  - Sound Model
  - Sound Trigger
  - Custom Training
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_acoustic_lab_usage
sidebar_position: 1
last_update:
  date: 2026-07-13
  author: sizhaozhou
createdAt: '2026-07-13'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/ja/recamera_pro_acoustic_lab_usage/
---


## はじめに

reCamera Pro には、Acoustic Lab と呼ばれるローカル音響学習専用プラットフォームが搭載されています。このプラットフォームを通じて、ユーザーは環境音サンプルを収集し、カスタム音響モデルを学習させ、インターネット接続なしで音トリガーイベントとしてデプロイできます。この記事では、Acoustic Lab 内の各機能モジュールについて詳しく説明し、音声収集、モデル学習からデプロイと利用までの一連のワークフローを解説します。

## 機能へのアクセス

1. **Record Settings** ボタンをクリックして録音設定画面に入ります。
2. **Recording Configuration** ボタンをクリックして録音オプション画面に入ります。
3. **Sound Event Trigger** ボタンの下にある **Open Acoustic Lab** ボタンをクリックして、音響学習画面に入ります。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## 機能概要

Acoustic Lab のメイン画面には、次のコア領域が含まれます。

1. **リアルタイム音声スペクトログラム**：現在取得している音声信号のスペクトルをリアルタイムで表示し、音の特徴を把握するのに役立ちます。
2. **リアルタイム信頼度ランキング**：現在の環境音の信頼度ランキングを表示し、音の分布状況を把握するのに役立ちます。
3. **マイク設定**：マイクの入力ソースとチャンネル数を選択します。
4. **音声取得頻度**：頻度を低くすると取得応答は速くなりますが、システムリソースの消費が増加します。
5. **信頼度ランキング表示精度**：ランキングの数値表示精度をカスタマイズします。
6. **ステータス情報**：最初のパラメータはアルゴリズムの実行時間を示し、2 つ目のパラメータは現在のワークスペース内の音響モデル数を示します。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## カスタム音響モデルの学習

内蔵の音響モデルに加えて、ユーザーは自身のニーズに応じてカスタム音響モデルを学習させることができます。

### 音声の収集

1. Acoustic Lab で **Workspace** ボタンをクリックしてワークスペースに入ります。
2. **New workspace** ボタンをクリックし、新しいワークスペースに名前を付けてから **Create** ボタンをクリックします。
3. **Dataset** エリアで、まず環境の背景雑音サンプルを収集します（推奨時間：20 秒）。**Background Noise** ボタンをクリックし、続いて **Record** ボタンをクリックして取得を開始します。隣のドロップダウンメニューでマイク入力ソースを選択できます。デフォルトはデバイスオーディオです。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

4. 収集が完了したら **Stop** ボタンをクリックします。その後 **Slice** ボタンをクリックして、背景雑音サンプルを 1 秒ごとのセグメントに分割します。
   - (1) 背景雑音の先頭からトリミングする部分を指定
   - (2) 背景雑音の末尾からトリミングする部分を指定
   - (3) 背景雑音サンプルを分割
   - (4) 分割されたサンプルの表示エリア

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

5. 右上の **Add category** ボタンをクリックして音カテゴリを追加し、名前を付けます（例：学習させたい音の名称）。
6. **Record** ボタンをクリックして音声サンプルの録音を開始します（推奨時間：10 秒）。その後の手順はステップ 4 と同じです。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

### 学習の開始

音声サンプルの収集が完了したら、モデル学習を実行できます。

1. **Hyperparameter** ボタンをクリックしてハイパーパラメータ設定画面に入ります（特別な要件がない限り、デフォルトのままにしておきます）。
2. **Train model** ボタンをクリックして音響モデルの学習を開始します。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

## モデルのデプロイ

1. Acoustic Lab 画面の下部で **Deploy** オプションを見つけます。**MODELS** リストから、先ほど学習したモデルを探してクリックし、選択してデプロイします。
   - (1) モデルリスト
   - (2) リアルタイム音声スペクトログラム

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. WebUI のメイン画面に戻り、**Record Settings** ボタンをクリックして録音設定画面に入ります。
3. **Sound Event Trigger** オプションを見つけ、右側の **Configuration** ボタンをクリックして音トリガー設定画面に入ります。
4. 先ほど学習した音カテゴリを選択し、**Confirm** ボタンをクリックして音トリガー設定を完了します。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## トラブルシューティング

**問題：学習したモデルがデプロイリストに表示されない**

- 学習プロセスが完了し、ワークスペース内にモデルファイルが生成されていることを確認してください。
- 現在のワークスペースが、学習時に使用したものと同じであることを確認してください。
- Acoustic Lab ページを再読み込みするか、入り直してみてください。

**問題：音トリガーの感度が低い、または誤検知が多い**

- 背景雑音サンプルが十分か確認してください。20 秒以上の環境背景雑音を再収集することを推奨します。
- ハイパーパラメータ内の信頼度しきい値を調整してください。
- マイク入力ソースとチャンネル設定が正しいことを確認してください。

## リソース

- [reCamera Pro 製品ページ](https://www.seeedstudio.com/)
- [reCamera Pro クイックスタート](https://wiki.seeedstudio.com/ja/recamera_pro_getting_started/)

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなレベルのサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>