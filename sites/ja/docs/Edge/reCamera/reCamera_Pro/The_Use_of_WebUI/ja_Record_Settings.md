---
description: recamera_pro_record_settings
title: 録画設定
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_record_settings_legacy
draft: true
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/recamera_pro_record_settings_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page has been superseded by Build_Your_App/configure_event_recording.md (https://wiki.seeedstudio.com/ja/recamera_pro_record_settings/), which now serves the original slug /recamera_pro_record_settings. This file is kept for history as a draft (slug /recamera_pro_record_settings_legacy) and is excluded from production builds. Do not link here. -->

## コンテンツ移行インデックス（レガシーページ）

| 元のセクション | 新しい場所 |
| --- | --- |
| Recording Configuration (AI Inference Trigger, Scheduled, Loop) | [イベント録画の設定](https://wiki.seeedstudio.com/ja/recamera_pro_record_settings/) (このスラッグ) |
| Recording Configuration (Sound Event Trigger) | [サウンドトリガーキャプチャ](https://wiki.seeedstudio.com/ja/recamera_pro_sound_trigger/) |
| Recording Configuration (GPIO / Serial / HTTPS Trigger) | [UART 経由の外部トリガー](https://wiki.seeedstudio.com/ja/recamera_pro_uart_usage/) |
| Storage Management, File Preview | [録画とストレージの確認](https://wiki.seeedstudio.com/ja/recamera_pro_storage/) |

reCamera Pro にはルールトリガー型のビデオ録画機能が内蔵されています。ユーザーはルールをカスタマイズして、ビデオ録画やキャプチャの時間を設定できます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_gejZVIuI5B.png" />

## 録画設定

reCamera Pro には録画設定ページが用意されており、Web UI 上でビデオ録画ルール、トリガー方式、録画フォーマット、録画スケジュールを設定できるほか、ストレージ管理やファイルプレビューも行えます。この機能は、防犯監視、証拠記録、AI 検出結果のログ取得、定期録画などのシナリオに適しています。

Web UI にアクセスしたら、左側メニューの **Recording Settings** をクリックして録画設定ページに入ります。

### ページ機能の概要

録画設定ページには主に次の機能モジュールが含まれます：

- **録画設定**：ビデオ録画のトリガールール、ビデオフォーマット、録画スケジュールを設定します。
- **ストレージ管理**：デバイスのストレージ容量を表示・管理します。
- **ファイルプレビュー**：録画されたビデオファイルを閲覧します。
- **スケジュール管理**：録画ルールの有効時間帯を設定します。

録画設定ページでは、ユーザーはさまざまなトリガー方式を選択し、録画タスクに適用できます。

### 録画フォーマット

ページ上部では録画ファイルのフォーマットを選択できます。例えば：

| パラメータ   | 説明                                                              |
| ----------- | ------------------------------------------------------------------------ |
| 録画フォーマット | MP4（動画）、JPG 画像データ、RAW 生画像データなど、ビデオファイルの保存形式を設定します。 |
録画フォーマットとして MP4 を選択した場合、各録画の固定時間は 1 分となります。

### トリガー方式

reCamera Pro は複数のビデオ録画トリガー方式をサポートしています。ユーザーは実際のアプリケーションシナリオに応じて適切なトリガールールを選択できます。

#### AI 推論トリガー

**AI 推論トリガー** は、AI モデルの認識結果に基づいて自動的に録画を開始するために使用されます。ユーザーは検出カテゴリ、信頼度スコアの範囲、トリガーエリアを設定できます。条件を満たすターゲットがカメラの画角内に現れると、システムは自動的に録画を開始します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_TmHQB024iW.png" />

AI 推論トリガーで設定できる項目は次のとおりです：

| 設定項目 | 説明                               |
| ------------------ | ----------------------------------------- |
| 推論タスク         | 録画をトリガーする AI 推論タスクを選択します |
| 信頼度範囲         | AI 認識結果の信頼度しきい値の範囲を設定します |
| カテゴリフィルタ   | 録画をトリガーする対象カテゴリを選択します |
| トリガーエリア     | 検出をトリガーする画面領域を定義します |

カテゴリフィルタでは、Person、Vehicle、Hardhat、Mask、Safety Vest、Machinery など、モデルの出力カテゴリに基づいて選択できます。ユーザーは関心のあるカテゴリのみを選択することで、不要なイベントトリガーを減らすことができます。

トリガーエリアでは、ビデオフレーム上に多角形の領域を描画できます。領域を描画しない場合、デフォルトで画面全体がトリガー対象となります。領域を描画した場合、システムは指定したエリア内でのみ録画をトリガーします。この機能は、出入口、危険区域、設備エリアなどの重点監視シナリオに適しています。

#### スケジュールトリガー

**スケジュールトリガー** は、一定の時間間隔で録画をトリガーするために使用されます。ユーザーはトリガー間隔を設定でき、システムは設定された時間周期で自動的に録画タスクを実行します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_uzhd2b91Fx.png" />

| 設定項目 | 説明                               |
| ------------------ | ----------------------------------------- |
| トリガー間隔       | スケジュールトリガーの時間間隔（秒）を設定します |

この方式は、一定間隔で現場の映像を取得したり、設備の稼働状況を記録したり、点検・アーカイブ用途で定期的に録画するシナリオに適しています。

#### GPIO トリガー

**GPIO トリガー** は、外部ハードウェア信号によって録画をトリガーするために使用されます。ユーザーは GPIO ピン、ピン状態、トリガー信号、チャタリング除去時間を選択できます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_tLth7eTsfP.png" />

| 設定項目 | 説明                               |
| ------------------ | ----------------------------------------- |
| GPIO ピン名        | トリガーに使用する GPIO ピンを選択します |
| ピン状態           | 浮動など、デフォルトのピン状態を設定します |
| トリガー信号       | High レベルなど、トリガーレベルを設定します |
| チャタリング除去時間 | トリガー信号のチャタリング除去時間（ミリ秒）を設定します |

GPIO トリガーは、外部センサー、ボタン、ドアマグネット、PIR センサー、リレーなどのデバイスとの連携に適しています。外部デバイスが指定レベルの信号を出力すると、reCamera Pro は自動的に録画を開始できます。

#### シリアルトリガー

**シリアルトリガー** は、シリアルコマンドによって録画をトリガーするために使用されます。ユーザーはシリアルポート名を選択し、トリガーコマンドを設定できます。デバイスが指定したシリアルポート経由で一致するコマンドを受信すると、録画タスクをトリガーできます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_RS8p10rmUL.png" />

| 設定項目 | 説明                               |
| ------------------ | ----------------------------------------- |
| シリアルポート名   | ttyS4 など、リッスンするシリアルポートを選択します |
| トリガーコマンド   | 録画をトリガーするシリアルコマンドを設定します |

この方式は、外部コントローラ、MCU、産業機器、またはカスタムホストシステムとの連携に適しています。

#### HTTPS トリガー

**HTTPS トリガー** は、ネットワークリクエストに基づく録画トリガー方式を提供します。ページには対応する HTTPS トリガーアドレスが表示され、外部システムはそのアドレスにアクセスすることで録画をトリガーできます。

この方式は、サードパーティプラットフォーム、業務システム、警報システム、オートメーションスクリプトなどとの連携に適しています。例えば、外部システムがイベントを検知した際に、HTTPS リクエストを介して reCamera Pro に通知し、録画を開始させることができます。

#### ループトリガー

**ループトリガー** は、録画タスクを連続的または周期的に実行するために使用されます。この方式は、終日監視、現場警備、継続的なデータ取得など、長時間の連続録画が必要なシナリオに適しています。

#### サウンドイベントトリガー

**サウンドイベントトリガー** は、音声イベントに基づいて録画をトリガーするために使用されます。ユーザーは Sound Lab に入り、サウンドモデルの可視化、学習、切り替えを行い、録画をトリガーすべきサウンドカテゴリを選択できます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_7a3c7kZ2np.png" />

サウンドイベントトリガーで設定できる項目は次のとおりです：

| 設定項目 | 説明                               |
| ------------------ | ----------------------------------------- |
| サウンドカテゴリフィルタ | 録画をトリガーするサウンドカテゴリを選択します |
| 連続アクティビティウィンドウ | トリガーに必要な連続アクティビティの継続時間（ミリ秒）を設定します |
| 信頼度範囲         | 音声認識結果の信頼度しきい値の範囲を設定します |

ページ上で選択できるサウンドカテゴリには、Background Noise、Unknown、Stop、Yes、No、Zero、One、Two などがあります。具体的なカテゴリは、現在ロードされている音声認識モデルによって異なります。

この機能は、異常音検知、設備状態の音による認識、音声コマンドによるトリガーなどのシナリオに適しています。

### スケジュール管理

録画設定ページにはスケジュール管理機能があり、ユーザーはタイムテーブルを使って録画ルールの有効時間を設定できます。

スケジュールは曜日と時間ごとに表示されます。ユーザーは時間セルをクリックまたはドラッグして録画時間帯を選択でき、複数の時間帯を設定できます。

ページには次のショートカットボタンが用意されています：

| ショートカットオプション | 説明                               |
| --------------- | ----------------------------------------- |
| 平日（午前 9 時〜午後 6 時） | 日中の勤務時間を素早く選択します |
| 夜間（午後 6 時〜午前 6 時） | 夜間の録画時間を素早く選択します |
| 終日（24 時間） | 終日録画を素早く設定します |
| クリア           | 現在選択されている時間帯をクリアします |

スケジュール管理により、ユーザーは録画ルールを指定した時間帯のみに有効にすることができます。例えば、夜間のみ録画を有効にしたり、勤務時間中のみイベントを記録したりできます。

### アプリケーション設定

各トリガー方式の右側には **Configure** と **Apply** ボタンがあります。

- **Configure** をクリック：このトリガー方式の詳細なパラメータ設定を入力します。
- **Apply** をクリック：現在のトリガー方式を有効にし、録画タスクに適用します。
- 上部のステータスには現在使用中のトリガー方式が表示されます（例："Current: Sound Event Trigger"）。

設定後、システムは現在のトリガー方式、録画フォーマット、およびスケジュールに従って自動的に録画タスクを実行します。

### 代表的なユースケース

録画設定機能は、次のようなシナリオに適しています：

- 人や車両、指定したターゲットが検出されたときの自動録画。
- 指定した時間帯内でのスケジュール録画。
- 外部 GPIO センサーによる録画トリガー。
- シリアルコマンドを介した産業機器との連携。
- HTTPS インターフェースを介したサードパーティ警報システムとの連携。
- 指定した音声イベントを検出した際の自動録画。
- 終日または夜間の録画スケジュール設定。

録画設定ページを通じて、ユーザーは reCamera Pro の録画戦略を柔軟に構成でき、リアルタイムプレビューからイベントトリガー録画までの完全なクローズドループを実現できます。

## ストレージ管理

このページでは、デバイスの現在のディスク使用状況とファイルの保存場所を確認でき、デバイスの状態や素材の保存場所を素早く把握できます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_65N6rhHetJ.png" />

ストレージ設定では、利用可能なストレージ容量やクォータの設定も行えます。古いファイルを上書きするかどうかも設定でき、最新の録画ファイルが常に保存されるようにできます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WZBl9MEr7Z.png" />

## ファイルプレビュー

ここでは、録画済みのファイルを確認できます。各ファイルは日付ごとに異なるディレクトリに保存されます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_0qrpATtHyA.png" />
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_hkMMlkzm7i.png" />

対応するファイルを開くことで、オンラインプレビューや素材に対する各種操作が行えます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_Dr3Rfk11yn.jpg" />

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
