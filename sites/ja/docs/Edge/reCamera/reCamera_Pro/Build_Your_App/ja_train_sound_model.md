---
description: reCamera Pro または SenseCraft 上で音声サンプルを収集し、カスタム音声分類モデルを学習して、音声トリガーイベント用にデプロイします。
title: 音声モデルを学習する
keywords:
  - reCamera
  - reCamera Pro
  - Acoustic Lab
  - sound model
  - training
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_acoustic_lab_usage
sku: 10003420
sidebar_position: 8
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_acoustic_lab_usage/
---

# 音声モデルを学習する

reCamera Pro には **Acoustic Lab** と呼ばれるローカル音声学習プラットフォームが含まれています。環境音のサンプルを収集し、カスタム音声モデルを学習し、音声トリガーイベントとしてデプロイすることができます。これらはすべてデバイス上で、インターネット接続なしで実行できます。

## Acoustic Lab へのアクセス

1. Web UI で **Record Settings** をクリックします。
2. **Recording Configuration** をクリックします。
3. **Sound Event Trigger** ボタンの下にある **Open Acoustic Lab** をクリックします。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## インターフェース概要

Acoustic Lab のメインインターフェースには次が含まれます：

1. **リアルタイム音声スペクトログラム** — 現在の音声の周波数スペクトル
2. **リアルタイム信頼度リーダーボード** — 現在の音の信頼度ランキング
3. **マイク設定** — 入力ソースとチャンネル数
4. **音声サンプリング周波数** — 低いほど応答は速くなり、より多くのリソースを使用
5. **信頼度リーダーボード表示精度** — 数値の精度
6. **ステータス情報** — アルゴリズムの実行時間 + ワークスペース内の音声モデル数

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## ローカル学習

### 1. 音声取得

1. **Workspace** をクリックし、次に **New workspace** をクリックします。名前を付けて **Create** をクリックします。
2. **Dataset** エリアで、まず背景ノイズを収集します（推奨：20 秒）。**Background Noise** → **Record** をクリックします。ドロップダウンでマイク入力ソースを選択できます。デフォルトはデバイス音声です。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

3. 録音後、**Stop** をクリックし、次に **Slice** をクリックして背景ノイズを 1 秒ごとのセグメントに分割します：
   - (1) 先頭をトリミング
   - (2) 末尾をトリミング
   - (3) サンプルを分割
   - (4) 分割されたサンプルの表示エリア

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

4. **Add category** をクリックして音のカテゴリを追加し、名前を付けます。
5. **Record** をクリックして音声サンプルを録音します（推奨：10 秒）。同じ方法でスライスします。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

### 2. 学習を開始する

1. **Hyperparameter** をクリックして学習パラメータを確認します（特別な要件がない限りデフォルトのままにします）。
2. **Train model** をクリックして開始します。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

## SenseCraft での学習

[SenseCraft model training](https://sensecraft.seeed.cc/ai/training) プラットフォームにアクセスし、**Audio Classification Detection** をクリックします。

### 1. 音声入力ソースを選択する

複数の入力ソースが利用可能です。デフォルトはコンピュータ音声です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_SenseCraft_Source.png" /></div>

:::warning
SenseCraft はまだデバイス音声入力をサポートしていないため、デプロイ後のモデル認識精度に影響する可能性があります。下記の [SenseCraft model accuracy](#SenseCraft-model-accuracy) を参照してください。
:::

### 2. 背景ノイズを収集する

少なくとも 20 秒間の環境背景ノイズを収集します。**Collect Training Data** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Voice_Noice_Capture.png" /></div>

### 3. 音声サンプルを収集する

各音声セグメントの長さを設定します（デフォルト：2 秒）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Sample_Set_data.png" /></div>

### 4. 学習

**Train Model** をクリックします。

## モデルをデプロイする

1. Acoustic Lab で、下部にある **Deploy** オプションを見つけます。**MODELS** リストで学習済みモデルを選択し、デプロイします。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. Web UI のメインインターフェースに戻り、**Record Settings** → **Sound Event Trigger** → **Configuration** を開きます。
3. 学習済みの音カテゴリを選択し、**Confirm** をクリックします。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## トラブルシューティング

### 学習済みモデルがデプロイ一覧に表示されない
- 学習が完了し、モデルファイルが生成されていることを確認します。
- 学習時と同じワークスペースにいることを確認します。
- Acoustic Lab のページを更新します。

### 音声トリガーの感度が低い、または誤検知が多い
- 背景ノイズを 20 秒以上取り直します。
- ハイパーパラメータで信頼度のしきい値を調整します。
- マイク入力ソースとチャンネル設定を確認します。

### SenseCraft モデルの精度がデプロイ後に低下する {#SenseCraft-model-accuracy}

SenseCraft での学習時の音声特徴は、デバイス上での推論時と異なります。最適化するには：

1. SenseCraft でデプロイする際、データセットを含めるオプションにチェックを入れます。
2. デバイス上でワークスペースを開きます。実際の検出結果に基づき、デバイスのマイクで録音した 5 秒以上の音声を追加します：
   - **A.** 非ターゲット音が誤認識される場合 → その音を背景ノイズとして録音し、スライスを追加します。
   - **B.** ターゲット音が誤認識される場合 → その音をターゲットカテゴリとして録音し、スライスを追加します。
3. デバイス上で再学習し、新しいモデルに切り替えます。

{/* TODO(verify): confirm whether local training supports multi-category models and maximum number of categories per model */}

## 関連ページ

- [音で撮影をトリガーする](/ja/recamera_pro_sound_trigger/)
- [イベント録画を設定する](/ja/recamera_pro_record_settings/)

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
