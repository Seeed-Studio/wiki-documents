---
description: 最初のエンドツーエンドの reCamera Pro タスク — AI トリガーの録画ルールを設定し、検出されたターゲットが自動的に録画を開始するようにし、その後ビデオファイルを見つけて再生します。
title: '最初のタスク：検出して録画する'
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - event recording
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_first_recording
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_first_recording/
---

# 最初のタスク：検出して録画する

[quick start](/ja/recamera_pro_getting_started/) では、ライブプレビューで AI 検出が動作していることを確認しました。このチュートリアルでは、その検出をデバイスが自律的に行う処理に変えます：**ターゲットが現れたら、reCamera Pro が自動的に録画を開始**し、Web UI からそのクリップを再生します。

ワークフローは次のとおりです：

1. [準備：モデルとターゲットを選ぶ](#1-準備-モデルとターゲットを選ぶ)
2. [録画フォーマットを設定する](#2-録画フォーマットを設定する)
3. [AI 推論トリガーを設定する](#3-ai-推論トリガーを設定する)
4. [ルールを適用して録画をトリガーする](#4-ルールを適用して録画をトリガーする)
5. [録画を探して再生する](#5-録画を探して再生する)

{/* TODO(verify): run this tutorial end-to-end on a real device — record the exact model and target used, the configuration values (confidence range, category filter), the trigger action, and attach screenshots of the resulting recording and playback. */}

## 1. 準備：モデルとターゲットを選ぶ

- AI 推論が動作していることを確認します：**AI Inference → Inference Configuration → Inference Enable** をオンにし、検出モデルが **Running Model** として選択され、ステータスが **Running** になっていること。まだ設定していない場合は、[quick start のステップ 4](/ja/recamera_pro_getting_started/#4-ai-検出が動作していることを確認する) に従ってください。
- 何をトリガーにして録画するかを決めます。最も簡単な最初のタスクは、**人** が画角に入ってきたときに録画することです。利用可能なカテゴリは、実行中のモデルの出力から取得されます（例：Person、Vehicle、Hardhat、Mask、Safety Vest、Machinery）。

検出パラメータ自体（カテゴリ、confidence/IOU しきい値、推論頻度）は [AI Inference 設定ページ](/ja/recamera_pro_ai_inference/) で設定します — このチュートリアルではそれらを参照するだけです。

## 2. 録画フォーマットを設定する

左側のナビゲーションバーで **Recording Settings** を開きます。ページ上部で録画ファイル形式を選択します：

| パラメータ | 説明 |
| --- | --- |
| Recording Format | 保存ファイルの形式：MP4（動画）、JPG（画像）、RAW（元の画像データ） |

このチュートリアルでは **MP4** を選択します。注意：MP4 が選択されている場合、各録画の長さは固定で **1 分** です。

このページにあるすべての録画オプション — トリガー方法、スケジュール、ストレージクォータ — についての詳細は、[イベント録画設定ページ](/ja/recamera_pro_record_settings/) に記載されています。

## 3. AI 推論トリガーを設定する

トリガー方法の一覧で **AI Inference Trigger** を選択し、**Configure** をクリックします：

| 設定項目 | このチュートリアルでの設定内容 |
| --- | --- |
| Inference Task | 実行中の AI 推論タスクを選択します |
| Confidence Range | 最初の録画ではデフォルトの範囲のままにします |
| Category Filter | **Person**（または検出したいカテゴリ）を選択します |
| Trigger Area | 空のままにします — 領域を描画しない場合、フレーム全体がトリガー対象になります |

{/* TODO(verify): capture the default confidence range shown in the UI and confirm whether the trigger area default is "entire frame" on current firmware. */}

必要に応じて、**Schedule Management** を使用してルールが有効になる時間帯を制限できます（例：夜間のみ）。最初のテストでは、現在時刻を含むスケジュールのままにしておきます。

## 4. ルールを適用して録画をトリガーする

1. AI Inference Trigger の横にある **Apply** をクリックします。ページ上部のステータスに有効なトリガー方法が表示されます（例：*Current: AI Inference Trigger*）。
2. カメラの画角内に歩いて入る（または選んだターゲットをカメラに向けて掲げる）ようにします。
3. システムがターゲットを検出し、自動的に録画を開始します。MP4 フォーマットの場合、クリップの長さは 1 分です。

## 5. 録画を探して再生する

引き続き **Recording Settings** 内で操作します：

1. **File Preview** を開きます — 録画ファイルは日付ごとのディレクトリに一覧表示されます。
2. 今日のファイルを開きます：Web UI 上でインライン再生されるので、何もダウンロードせずにイベントを確認できます。
3. **Storage Management** を確認して、ディスク使用量とファイルの保存場所を確認します。ストレージクォータを設定し、古いファイルの上書きを有効にして、最新の録画が常に保持されるようにできます。

ストレージ動作の詳細（クォータ、ディスクフル時のポリシー、ダウンロード）については、[録画の検索とストレージ](/ja/recamera_pro_storage/) を参照してください。

{/* TODO(verify): confirm playback and download behavior of File Preview on current firmware and attach a screenshot of a recorded clip playing back. */}

## 結果

これでスタンドアロンの AI 録画ルールができました：コンピュータは不要で、デバイスが自律的に検出と録画を行います。典型的な次のステップは次のとおりです：

- **Trigger Area** を使って、トリガーをゾーン（入口、危険区域など）に絞り込みます。
- [イベント録画設定ページ](/ja/recamera_pro_record_settings/) で、スケジュール、GPIO、シリアル、HTTPS、ループ、音声イベントなどのトリガーソースを切り替えたり組み合わせたりします。
- [MQTT](/ja/recamera_pro_mqtt/) や [HTTP/UART](/ja/recamera_pro_http_uart/) を介して、検出結果を自分のシステムに送信します。
- デバイスを恒久的に設置する前に、[導入前チェックリスト](/ja/recamera_pro_deploy_checklist/) を実行します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
