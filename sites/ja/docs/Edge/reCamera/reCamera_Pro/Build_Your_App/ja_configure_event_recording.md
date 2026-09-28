---
description: AI 検出、スケジュールタイマー、GPIO、シリアルポート、HTTPS、ループ、またはサウンドイベントトリガーを使用して、reCamera Pro でイベントトリガー録画を設定します。
title: イベント録画を設定する
keywords:
  - reCamera
  - reCamera Pro
  - recording
  - event trigger
  - GPIO
  - AI trigger
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_record_settings
sku: 10003420
sidebar_position: 6
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_record_settings/
---

# イベント録画を設定する

reCamera Pro は、ルールトリガーによるビデオ録画をサポートしています。Web UI で左側メニューの **Recording Settings** をクリックし、続いて **Recording Configuration** をクリックします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_gejZVIuI5B.png" />

このページには 4 つのモジュールがあります：

- **Recording Configuration** — トリガールール、ビデオ形式、録画スケジュール
- **Storage Management** — デバイスのストレージ容量
- **File Preview** — 録画されたビデオファイル
- **Schedule Management** — 録画ルールが有効となる時間帯

## 録画形式

| パラメータ | 説明 |
|---|---|
| Recording Format | MP4（ビデオ）、JPG 画像データ、または RAW オリジナル画像データ |

MP4 を選択した場合、各録画の長さは 1 分に固定されます。

## トリガー方法

録画設定ページでは、各トリガー方法に **Configure** と **Apply** ボタンがあります。**Configure** をクリックしてパラメータを設定し、その後 **Apply** をクリックして有効化します。上部のステータスには現在有効なトリガー方法が表示されます（例："Current: Sound Event Trigger"）。

### AI 推論トリガー

AI モデルの認識結果が条件に一致したときに自動的に録画をトリガーします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_TmHQB024iW.png" />

| 設定項目 | 説明 |
|---|---|
| Inference Task | 録画をトリガーする AI 推論タスクを選択します |
| Confidence Range | AI 認識結果の信頼度しきい値の範囲 |
| Category Filter | 録画をトリガーする対象カテゴリ（例：Person、Vehicle、Hardhat） |
| Trigger Area | トリガー用の多角形の画面領域。デフォルトはフレーム全体 |

{/* TODO(verify): confirm whether multiple trigger methods can be active simultaneously or are mutually exclusive */}

### スケジュールトリガー

一定の時間間隔で録画をトリガーします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_uzhd2b91Fx.png" />

| 設定項目 | 説明 |
|---|---|
| Trigger Interval | 秒単位の時間間隔 |

:::note
**Scheduled Trigger** は一定間隔で録画を発火させます。**Schedule Management**（下記）は、どのトリガーでも発火が許可される「時間帯」を制御します。これらは独立した機能です。
:::

### GPIO トリガー

外部ハードウェア信号によって録画をトリガーします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_tLth7eTsfP.png" />

| 設定項目 | 説明 |
|---|---|
| GPIO Pin Name | GPIO ピンを選択します |
| Pin State | デフォルトのピン状態（例：フローティング） |
| Trigger Signal | トリガーレベル（例：High レベル） |
| Debounce Duration | デバウンス時間（ミリ秒） |

外部センサー、ボタン、ドアマグネット、PIR センサー、リレーとの連携に適しています。

### シリアルトリガー

シリアルコマンドによって録画をトリガーします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_RS8p10rmUL.png" />

| 設定項目 | 説明 |
|---|---|
| Serial Port Name | 監視するシリアルポート（例：ttyS4） |
| Trigger Command | 録画をトリガーするシリアルコマンド |

外部コントローラ、MCU、産業機器との連携に適しています。

### HTTPS トリガー

ネットワークリクエストによって録画をトリガーします。ページには、外部システムから呼び出せる HTTPS トリガーアドレスが表示されます。

サードパーティプラットフォーム、警報システム、自動化スクリプトとの連携に適しています。

{/* TODO(verify): document the exact HTTPS trigger URL format, authentication method, and request body schema */}

### ループトリガー

終日監視や連続データ取得のための連続または周期的な録画を行います。

### サウンドイベントトリガー

サウンドモデルが認識した音声イベントに基づいて録画をトリガーします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_7a3c7kZ2np.png" />

| 設定項目 | 説明 |
|---|---|
| Sound Category Filter | 録画をトリガーするサウンドカテゴリ |
| Continuous Activity Window | 連続したアクティビティが必要な時間（ms） |
| Confidence Range | 音声認識の信頼度しきい値 |

カスタムサウンドモデルを学習させるには、[Train a Sound Model](/ja/recamera_pro_acoustic_lab_usage/) を参照してください。

## スケジュール管理

週単位のタイムテーブル（曜日 × 時間のグリッド）を使用して、録画ルールが有効となる時間帯を設定します。セルをクリックまたはドラッグして時間帯を選択します。

| ショートカット | 説明 |
|---|---|
| Weekdays (9 AM – 6 PM) | 平日の昼間の勤務時間 |
| Night (6 PM – 6 AM) | 夜間録画 |
| All Day (24 Hours) | 終日録画 |
| Clear | 選択した時間帯をクリア |

## 関連ページ

- [録画とストレージを確認する](/ja/recamera_pro_storage/)
- [Train a Sound Model](/ja/recamera_pro_acoustic_lab_usage/)
- [音声でキャプチャをトリガーする](/ja/recamera_pro_sound_trigger/)
- [外部デバイスからキャプチャをトリガーする](/ja/recamera_pro_uart_usage/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
