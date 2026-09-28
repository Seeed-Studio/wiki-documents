---
description: 学習済みのサウンドモデルをデプロイし、reCamera Pro 上でサウンドイベントトリガーを設定して、特定の音が検出されたときに自動で写真撮影や録音を行います。
title: 音でキャプチャをトリガーする
keywords:
  - reCamera
  - reCamera Pro
  - sound trigger
  - acoustic lab
  - recording
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sound_trigger
sku: 10003420
sidebar_position: 9
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_sound_trigger/
---

# 音でキャプチャをトリガーする

サウンドモデルを学習した後（[サウンドモデルを学習する](/ja/recamera_pro_acoustic_lab_usage/) を参照）、それをデプロイし、特定の音が検出されたときに自動で写真撮影や録音を行うようにサウンドイベントトリガーを設定します。

## モデルをデプロイする

1. Acoustic Lab で、画面下部にある **Deploy** オプションを探します。
2. **MODELS** リストから学習済みモデルを選択し、デプロイします。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

## サウンドイベントトリガーを設定する

1. Web UI のメイン画面に戻り、**Record Settings** → **Recording Configuration** を開きます。
2. **Sound Event Trigger** オプションを見つけて **Configure** をクリックします。
3. 録画をトリガーしたいサウンドカテゴリを選択します。
4. **Confirm** をクリックして適用します。

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

### 設定項目

| 設定項目 | 説明 |
|---|---|
| Sound Category Filter | 録画をトリガーするサウンドカテゴリ |
| Continuous Activity Window | 連続したアクティビティが必要な時間（ms） |
| Confidence Range | 音声認識の信頼度しきい値 |

{/* TODO(verify): デフォルトの信頼度しきい値と、連続アクティビティウィンドウが必須か任意かを確認する */}

## 代表的なユースケース

- 異常音検知（ガラス破損、アラーム、機械故障）
- 音声コマンドによるトリガー（例："help"、"stop"）
- 設備状態のサウンド認識
- 環境モニタリング

## 関連ページ

- [サウンドモデルを学習する](/ja/recamera_pro_acoustic_lab_usage/)
- [イベント録画を設定する](/ja/recamera_pro_record_settings/)
- [録画とストレージを確認する](/ja/recamera_pro_storage/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
