---
description: recamera_pro_live_view
title: ライブビュー
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_live_view_legacy
draft: true
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/recamera_pro_live_view_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page was split across the new task guides; its content moved primarily to Build_Your_App/preview_capture_record.md (https://wiki.seeedstudio.com/ja/recamera_pro_live_preview/). The old URL /recamera_pro_live_view/ is redirected to /recamera_pro_live_preview/ via an aliases entry in that page's frontmatter. This file is kept for history as a draft (slug /recamera_pro_live_view_legacy) and is excluded from production builds. Do not link here. -->

## コンテンツ移行インデックス（レガシーページ）

旧 URL /recamera_pro_live_view/ は /recamera_pro_live_preview/ にリダイレクトされます。各セクションの移行先は次のとおりです：

| 元のセクション | 新しい場所 |
| --- | --- |
| Video Preview | [プレビュー、キャプチャ、手動録画](https://wiki.seeedstudio.com/ja/recamera_pro_live_preview/) |
| Basic Settings, Display Settings | [画質と低照度](https://wiki.seeedstudio.com/ja/recamera_pro_image_quality/) |
| OSD Settings, Image Masking | [OSD とプライバシーマスク](https://wiki.seeedstudio.com/ja/recamera_pro_osd_masks/) |
| Streaming Settings | [RTSP でビデオを配信](https://wiki.seeedstudio.com/ja/recamera_pro_rtsp/) |
| AI Results | [検出の設定](https://wiki.seeedstudio.com/ja/recamera_pro_ai_inference/) |
| Typical Use Cases | [reCamera Pro ホーム](https://wiki.seeedstudio.com/ja/recamera_pro/) |
| Field reference (all modules) | [Web UI リファレンス](https://wiki.seeedstudio.com/ja/recamera_pro_webui_reference/) |

reCamera Pro にはリアルタイムのビデオ監視ページが内蔵されており、ブラウザを通じてライブカメラ映像を直接閲覧できます。ユーザーはビデオストリーム、表示設定、OSD オーバーレイ、プライバシーマスキング、およびストリーミングパラメータを設定できます。このページは、機器の設置やデバッグ、映像のプレビュー、ビデオパラメータの調整、および導入前の機能検証に適しています。
reCamera Pro にはリアルタイムのビデオ監視ページが内蔵されており、ブラウザを通じてライブカメラ映像を直接閲覧できます。ユーザーはビデオストリーム、表示設定、OSD オーバーレイ、プライバシーマスキング、およびストリーミングパラメータを設定できます。このページは、機器の設置やデバッグ、映像のプレビュー、ビデオパラメータの調整、および導入前の機能検証に適しています。
リアルタイムビデオ監視ページに入ると、左側にビデオプレビューエリア、右側に機能設定エリアが表示されます。ユーザーは同一ページ上でビデオ再生、ストリーム切り替え、および関連パラメータの設定を完了できます。

## ビデオプレビュー

ページ左側にはリアルタイムビデオプレビューウィンドウがあり、ユーザーはメインストリームまたはサブストリームのいずれかを再生することができます。**Start Playback** をクリックすると、現在のカメラ映像をブラウザで確認できます。

プレビューエリアの下部には、次のような基本的な再生制御機能が用意されています：

- メインストリーム / サブストリームの選択

- 再生開始 / 再生停止

- 音量調整

- 現在の接続状態の表示


デバイスが切断されている場合、ビデオストリームに異常がある場合、またはネットワークに到達できない場合、プレビューウィンドウには接続失敗のメッセージが表示され、ユーザーが現在のビデオストリームの状態を素早く把握しやすくなります。

## 基本設定

右側の機能エリアでは、**Basic Settings** ページにアクセスして、メインストリームとサブストリームそれぞれのビデオエンコードパラメータを設定できます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_5SsPulbjjc.jpg" />

設定可能なパラメータには次のものが含まれます：

| パラメータ | 説明 |
|---|---|
| 解像度 | ビデオ出力解像度を設定します（例：1920×1080（1080P）） |
| エンコード形式 | ビデオエンコード形式を設定します（例：H.264） |
| フレームレート (FPS) | ビデオフレームレートを設定します（例：30 FPS） |
| GOP | キーフレーム間隔を設定し、キーフレーム生成の頻度を制御します |
| ビットレート制御モード | ビットレート制御方式を設定します（例：VBR（可変ビットレート）） |
| 最大ビットレート | ビデオストリームの最大ビットレートを Kbps 単位で設定します |
| ビットレート品質 | ビデオエンコードの品質レベルを設定します |

ユーザーは実際のアプリケーションシナリオに応じて、メインストリームまたはサブストリームのどちらを設定するか選択できます。メインストリームは高精細プレビュー、ビデオ保存、AI 解析に適しており、サブストリームは低帯域幅プレビュー、リモート閲覧、または多チャンネルビデオアクセスシナリオに適しています。

変更後、**Save Video Settings** をクリックして現在の設定を適用します。パラメータを復元または再入力するには、**Reset** をクリックします。

このページには **Audio Settings** および **Audio Storage Settings** などの音声関連スイッチも用意されており、必要に応じて音声の取得および音声保存機能を有効または無効にできます。

## 表示設定

**Display Settings** ページは、カメラの表示効果および基本的な画像パラメータを調整するために使用します。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_B1NHc7CXGa.jpg" />

サポートされている表示設定は次のとおりです：

| パラメータ | 説明 |
|---|---|
| 反転 | 画像を反転させるかどうかを設定し、さまざまな設置方向に対応できます |
| 回転 | 画像の回転角度を設定します（例：0°） |
| ビデオ方式 | ビデオ方式を設定します（例：PAL（50HZ）） |

さらに、このページでは昼夜パラメータの切り替え設定もサポートしており、次の項目が含まれます：

| パラメータ | 説明 |
|---|---|
| 切り替えモード | 昼夜モードの切り替え方法を設定します（例：自動切り替え） |
| 切り替えしきい値感度 | 昼夜切り替えをトリガーする感度を設定します |
| 切り替えヒステリシス時間 | 頻繁な切り替えを避けるため、昼夜モード切り替えの遅延時間を設定します |

基本的な画像調整エリアでは、ユーザーは異なるプロファイルを選択し、次のようなカメラ画像パラメータを調整できます：

- 明るさ

- コントラスト

- 彩度

- シャープネス

- 色相

- 露出モード

- ゲインモード


これらのパラメータは、屋内、屋外、低照度、強い光など、現場の照明環境に応じて画像効果を最適化するために使用できます。

変更後、**Save Display Settings** または **Save Configuration** をクリックして現在の設定を適用します。

## OSD 設定

**OSD Settings** は、チャンネル名、日時、デバイスシリアル番号など、ビデオ映像上に重ねて表示する情報を設定するために使用します。この機能は、ビデオ監視、ビデオ再生、およびデバイス識別といったシナリオに適用できます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_bdTuIGi3cp.jpg" />

サポートされている OSD 設定項目は次のとおりです：

| 設定項目 | 説明 |
|---|---|
| フォントサイズ | OSD テキストのサイズを設定します |
| フォントカラー | OSD テキストの色を設定します |
| カラーモード | OSD のカラーモードを設定し、カスタムカラーも選択できます |
| チャンネル名オーバーレイ | 有効にすると、画面上にチャンネル名を表示します |
| チャンネル名 | 表示するカスタムチャンネル名（例：Camera 01） |
| チャンネル名座標 | 画面上でチャンネル名を表示する位置を設定します |
| 日付と時刻オーバーレイ | 有効にすると、画面上に日付と時刻を表示します |
| 日付形式 | 日付の表示形式を設定します |
| 時刻形式 | 時刻の表示形式を設定します（例：24 時間表示） |
| 曜日の表示 | 曜日情報を表示するかどうかを制御します |
| 日付と時刻の座標 | 画面上で日付と時刻を表示する位置を設定します |
| シリアル番号オーバーレイ | 画面上にデバイスのシリアル番号を表示するかどうかを制御します |

OSD 座標は相対位置で設定されており、画面レイアウトに応じてテキストを適切な位置に配置できます。また、テキストを直接ドラッグして好みの位置に移動することもできます。

設定後、**Save Settings** をクリックして OSD パラメータを適用します。

## 画像マスキング

**Image Masking** 機能は、プライバシーマスク領域を設定するために使用します。ユーザーはプライバシーマスキングを有効にして、ビデオ映像内の機密エリアを隠し、リアルタイムプレビュー、録画、またはストリームで個人情報が露出するのを防ぐことができます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_wj02u6saTl.jpg" />

マスクは手動で追加することも、自動描画することもできます。追加後、設定を保存するとすぐに効果が反映されます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NtmxY1TDqE.png" />

この機能は次のようなシナリオに適用できます：

- オフィスエリア内の機密情報のマスキング

- 住宅、玄関番号、画面などのプライベートエリアのマスキング

- さまざまなシナリオにおける特定のビデオプライバシー保護要件への対応


## ストリーミング設定

**Streaming Settings** ページは、ビデオストリームの出力方法を設定し、reCamera Pro をサードパーティプラットフォーム、NVR、ビデオ管理システム、またはカスタムアプリケーションと連携させるために使用します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZrIYeGVxqa.png" />

サポートされている設定項目は次のとおりです：

| パラメータ | 説明 |
| --------- | ----------------- |
| ストリーム設定スイッチ | 現在のストリームに対するストリーミング機能を有効または無効にします |
| メインストリーム / サブストリーム | 設定するストリームを選択します |
| ストリーミングプロトコル | ストリーミングプロトコルを設定します（例：RTSP） |
| 認証タイプ | ビデオストリームアクセスの認証方式を設定します（例：認証なし） |
| 設定の適用 | 現在のストリーミング設定を保存して適用します |

ユーザーは実際の導入ニーズに応じて、メインストリームまたはサブストリームごとにストリーミングパラメータを個別に設定できます。設定後、サードパーティクライアントやプラットフォームは、対応するストリームアドレスを通じて reCamera Pro のビデオ映像にアクセスできます。

## AI 結果

このページには **AI Results** の項目もあり、AI 推論結果の表示方法を閲覧または設定できます。この機能は、物体検出や分類認識などのエッジ AI アプリケーションシナリオで使用でき、ユーザーはリアルタイム映像内でモデルの出力結果を確認できます。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_4t447lMV5W.png" />

## 代表的な使用例

リアルタイム映像監視ページは、次のようなシナリオに適しています：

- カメラ設置後のリアルタイム映像の確認

- メインストリームおよびサブストリームのパラメータ設定

- 映像解像度、フレームレート、ビットレート、エンコード形式の調整

- 昼夜モードおよび画像パラメータのデバッグ

- OSD 時刻、チャンネル名、デバイス情報のオーバーレイ表示

- プライバシーマスキングエリアの設定

- RTSP ストリーミングを介したサードパーティプラットフォームまたは NVR へのアクセス

- AI 推論結果表示の検証


リアルタイム映像監視ページを通じて、ユーザーは追加のクライアントをインストールすることなく、reCamera Pro のビデオプレビュー、画像デバッグ、ストリーム設定、およびストリーミング設定を完了でき、デバイスの展開とデバッグの効率を大幅に向上させることができます。

## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
