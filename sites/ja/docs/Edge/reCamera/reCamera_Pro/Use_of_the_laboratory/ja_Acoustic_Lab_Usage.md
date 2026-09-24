---
title: Acoustic Lab の使用方法
description: この記事では、reCamera Pro の Acoustic Lab 機能を使用して環境音サンプルを収集し、カスタム音声モデルを学習させ、それらを音声トリガーイベントとしてデプロイする方法について説明します。
keywords:
  - reCamera
  - reCamera Pro
  - Acoustic Lab
  - Sound Model
  - Sound Trigger
  - Custom Training
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_acoustic_lab_usage_legacy
draft: true
sidebar_position: 1
last_update:
  date: 2026-07-13
  author: sizhaozhou
createdAt: '2026-07-13'
updatedAt: '2026-07-30'
url: https://wiki.seeedstudio.com/ja/recamera_pro_acoustic_lab_usage_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page has been superseded by Build_Your_App/train_sound_model.md (https://wiki.seeedstudio.com/ja/recamera_pro_acoustic_lab_usage/), which now serves the original slug /recamera_pro_acoustic_lab_usage. This file is kept for history as a draft (slug /recamera_pro_acoustic_lab_usage_legacy) and is excluded from production builds. Do not link here. -->

## コンテンツ移行インデックス（レガシーページ）

| 元のセクション | 新しい場所 |
| --- | --- |
| Introduction, Accessing the Feature, Feature Overview, Local Training, SenseCraft Training, Troubleshooting | [Train a Sound Model](https://wiki.seeedstudio.com/ja/recamera_pro_acoustic_lab_usage/) (this slug) |
| Deploying the Model (sound-triggered recording) | [Sound-Triggered Capture](https://wiki.seeedstudio.com/ja/recamera_pro_sound_trigger/) |

## はじめに

reCamera Pro には、Acoustic Lab と呼ばれるローカル音声学習プラットフォームが搭載されています。このプラットフォームを通じて、ユーザーは環境音サンプルを収集し、カスタム音声モデルを学習させ、インターネット接続なしで音声トリガーイベントとしてデプロイできます。この記事では、Acoustic Lab 内の各機能モジュールについて詳しく説明し、音声取得、モデル学習からデプロイおよび使用までの一連のワークフローをカバーします。

## 機能へのアクセス方法

1. **Record Settings** ボタンをクリックして録画設定画面に入ります。
2. **Recording Configuration** ボタンをクリックして録画オプション画面に入ります。
3. **Sound Event Trigger** ボタンの下にある **Open Acoustic Lab** ボタンをクリックして、音声学習画面に入ります。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## 機能概要

Acoustic Lab のメイン画面には、次のコア領域が含まれます：

1. **リアルタイム音声スペクトログラム**：現在取得している音声信号の周波数スペクトルをリアルタイムで表示し、音の特徴を把握するのに役立ちます。
2. **リアルタイム信頼度ランキング**：現在の環境音の信頼度ランキングを表示し、音の分布を把握するのに役立ちます。
3. **マイク設定**：マイク入力ソースとチャンネル数を選択します。
4. **音声サンプリング周波数**：周波数を低くすると取得応答は速くなりますが、システムリソースの消費が増加します。
5. **信頼度ランキング表示精度**：ランキングに表示される数値の精度をカスタマイズします。
6. **ステータス情報**：最初のパラメータはアルゴリズムの実行時間を示し、2 つ目のパラメータは現在のワークスペース内の音声モデル数を示します。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## カスタム音声モデルの学習

内蔵の音声モデルに加えて、ユーザーは自分のニーズに応じてカスタム音声モデルを学習させることができます。学習方法としては、ローカルでの学習、または [SenseCraft](https://sensecraft.seeed.cc/ai/#/home) プラットフォーム上での学習を選択できます。

### ローカル学習

#### 1. 音声取得

1. Acoustic Lab で **Workspace** ボタンをクリックしてワークスペースに入ります。
2. **New workspace** ボタンをクリックし、新しいワークスペースに名前を付けてから **Create** ボタンをクリックします。
3. **Dataset** エリアで、まず環境のバックグラウンドノイズサンプルを収集します（推奨時間：20 秒）。**Background Noise** ボタンをクリックし、次に **Record** をクリックして取得を開始します。隣のドロップダウンメニューでマイク入力ソースを選択できます。デフォルトはデバイスオーディオです。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

4. 取得が完了したら **Stop** ボタンをクリックします。その後 **Slice** ボタンをクリックして、バックグラウンドノイズサンプルを 1 秒ごとのセグメントに分割します。
   - (1) バックグラウンドノイズの先頭からトリミングする部分を指定
   - (2) バックグラウンドノイズの末尾からトリミングする部分を指定
   - (3) バックグラウンドノイズサンプルを分割
   - (4) 分割されたサンプルの表示エリア

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

5. 右上の **Add category** ボタンをクリックして音声カテゴリを追加し、名前を付けます（例：学習させたい音の名前）。
6. **Record** ボタンをクリックして音声サンプルの録音を開始します（推奨時間：10 秒）。その後の手順はステップ 4 と同じです。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

#### 2. 学習の開始

音声サンプルの収集が完了したら、モデル学習を実行できます。

1. **Hyperparameter** ボタンをクリックしてハイパーパラメータ設定画面に入り（特別な要件がない場合はデフォルト設定のままにします）、設定します。
2. **Train model** ボタンをクリックして音声モデルの学習を開始します。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

### SenseCraft でのモデル学習

[SenseCraft model training](https://sensecraft.seeed.cc/ai/training) プラットフォームにアクセスし、**Audio Classification Detection** ボタンをクリックして音声学習画面に入ります。

#### 1. 音声入力ソースの選択

SenseCraft プラットフォームでは、複数の音声入力ソースが利用可能です。ユーザーは実際の状況に応じて適切なマイク入力ソースを選択できます。デフォルトはコンピュータオーディオです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_SenseCraft_Source.png" /></div>

:::warning
現在、SenseCraft プラットフォームはまだデバイスオーディオ入力をサポートしておらず、モデルの認識精度に影響を与える可能性があります。詳細については、[Decreased accuracy or false recognition after SenseCraft model deployment](#SenseCraft-音声分類モデルの精度低下または誤認識) を参照してください。
:::

#### 2. バックグラウンドノイズの収集

環境のバックグラウンドノイズを収集する際は、モデル学習の精度を確保するために 20 秒以上の環境バックグラウンドノイズを収集することを推奨します。***Collect Training Data*** ボタンをクリックしてデータ収集を開始します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Voice_Noice_Capture.png" /></div>

#### 3. 音声サンプルの収集

音声サンプルを収集する際、ユーザーは各音声セグメントの長さを設定できます。デフォルトは 2 秒です。下図のように設定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Sample_Set_data.png" /></div>

#### 4. モデルの学習

***Train Model*** ボタンをクリックして音声モデルの学習を開始します。

## モデルのデプロイ

1. Acoustic Lab 画面の下部で **Deploy** オプションを見つけます。**MODELS** リストから先ほど学習したモデルを探し、クリックして選択し、デプロイします。
   - (1) モデルリスト
   - (2) リアルタイム音声スペクトログラム

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. WebUI のメイン画面に戻り、**Record Settings** ボタンをクリックして録画設定画面に入ります。
3. **Sound Event Trigger** オプションを見つけ、右側の **Configuration** ボタンをクリックして音声トリガー設定画面に入ります。
4. 先ほど学習した音声カテゴリを選択し、**Confirm** ボタンをクリックして音声トリガー設定を完了します。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## トラブルシューティング

### 問題：学習済みモデルがデプロイリストに表示されない

- 学習プロセスが完了しており、ワークスペース内にモデルファイルが生成されていることを確認します。
- 現在のワークスペースが学習時に使用したものと同じであるか確認します。
- Acoustic Lab ページを更新するか、再度入り直してみてください。

### 問題：音声トリガーの感度が低い、または誤トリガーが発生する

- バックグラウンドノイズサンプルが十分か確認します。20 秒以上の環境バックグラウンドノイズを再収集することを推奨します。
- ハイパーパラメータ内の信頼度しきい値を調整します。
- マイク入力ソースとチャンネル設定が正しいことを確認します。

### 問題：SenseCraft 音声分類モデルをデバイスにデプロイした後、精度が低下する、または誤認識が発生する {#SenseCraft-音声分類モデルの精度低下または誤認識}

SenseCraft での学習時に使用した音声取得デバイスと、実際にモデル推論を行うデバイスが異なるため、音声特徴に一定の差異が生じます。デプロイ後のモデル精度を最適化するには、以下の方法を参照してください：

- SenseCraft でデプロイする際、データセットを含めてデバイスにデプロイするオプションにチェックを入れます。
- デバイス上で対応するワークスペースを開き、実際の検出結果に基づいて、デバイスのマイクで収集したデータのサンプルスライス（5 秒以上）を少量データセットに追加します： 
***A.*** 非ターゲット音の誤認識：デバイスのマイクを使用してその音をバックグラウンドノイズカテゴリで録音し、スライスを追加します。 
***B.*** ターゲット音の誤認識：デバイスのマイクを使用してその音をターゲットカテゴリで録音し、スライスを追加します。

- デバイス上の学習ボタンをクリックしてモデルを再学習します。学習完了後、モデルを切り替えて再度認識性能を確認します。それでも期待に達しない場合は、上記の手順を繰り返してください。

今後も最適化を続け、将来的には SenseCraft 上でデバイスのマイクを使用した音声取得をサポートする予定です。続報をお待ちください。

## リソース

- [reCamera Pro 製品ページ](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [reCamera Pro 入門ガイド](https://wiki.seeedstudio.com/ja/recamera_pro_getting_started/)

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をスムーズにご利用いただけるよう、複数レベルのサポートを提供することに尽力しています。さまざまなユーザーの好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>