---
description: ブラウザでライブ映像を視聴し、写真を撮影し、手動録画を開始・停止し、reCamera Pro でメインストリームとサブストリームを切り替えます。
title: "プレビュー、撮影、手動録画"
keywords:
  - reCamera
  - reCamera Pro
  - live preview
  - take photo
  - record video
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_live_preview
aliases:
  - /recamera_pro_live_view
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_live_preview/
---

# プレビュー、撮影、手動録画

reCamera Pro には Web UI が内蔵されているため、追加のクライアントソフトウェアをインストールする必要はありません。PC がデバイスと同じローカルネットワーク上にあれば、ブラウザを開いて次のアドレスにアクセスします：

```text
http://<reCamera_IP>
```

初回ログイン時、Web UI はパスワードの変更を求めます。初期パスワード（旧パスワード）は `recamera` です。任意の新しいパスワードを入力し、その後ユーザー名 `admin` でログインします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />

ログイン後は、ライブ映像のプレビュー、写真撮影、ビデオ録画、ストリームの切り替え、画像・AI 推論・デバイス設定の表示など、クイックデバッグや機能検証に必要な操作をすべて行えます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />

## ライブプレビューを視聴する

ライブビューのページでは、左側がビデオプレビューエリア、右側が機能設定エリアです。**Start Playback** をクリックすると、ブラウザで現在のカメラ映像を視聴できます。

プレビューエリアの下部には、基本的な再生コントロールがあります：

- メインストリーム / サブストリームの選択
- Start Playback / Stop Playback
- 音量調整
- 現在の接続状態の表示

デバイスが切断されている場合、ビデオストリームに異常がある場合、またはネットワークに到達できない場合、プレビューウィンドウには接続失敗のメッセージが表示され、ストリームに何が問題があるのかをすばやく把握できます。

## 写真を撮る

**Take Photo** は現在のフレームを画像として保存します。シーンの記録、デバッグ用アーカイブ、データ収集などに便利です。画像はブラウザのデフォルトのダウンロードフォルダに自動的に保存されます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2XAT0cUJwO.jpg" />

## 手動でビデオを録画する

Web UI から直接、録画の開始と停止を行うことができます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_nPNSUbHEOa.jpg" />

1. **Start Recording** をクリックします。ボタンは **End Recording** に変わります。
2. 終了したら **End Recording** をクリックし、reCamera Pro がビデオをパッケージするまで少し待ちます。
3. ブラウザが録画ファイルを MP4 形式で自動的にダウンロードし、デフォルトのダウンロードフォルダに保存します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_03SDnfmwp5.jpg" />

:::note
プレビューページからの手動録画は、AI / イベントベースの録画とは異なります。検出、音声、外部トリガーが発生したときに自動で録画し、録画をデバイスのストレージに保存したい場合は、[イベント録画を設定する](/ja/recamera_pro_record_settings/) および [録画とストレージを確認する](/ja/recamera_pro_storage/) を参照してください。
{/* TODO(verify): confirm whether manual Web UI recordings are ever kept on device storage in addition to the browser download, and the exact firmware version behavior */}
:::

## メインストリームとサブストリームを切り替える

Web UI は **メインストリーム** と **サブストリーム** の切り替えに対応しています。ネットワーク帯域、画質の要件、プレビューの用途に応じて選択してください：

- **メインストリーム** — 高精細プレビュー、ビデオ保存、AI 解析向け。
- **サブストリーム** — 低帯域幅プレビュー、リモート視聴、多チャンネルアクセス向け。

ストリームのエンコードパラメータ（解像度、フレームレート、ビットレートなど）はストリームごとに個別に設定します。詳しくは [画質と低照度性能](/ja/recamera_pro_image_quality/) を参照してください。

## 次のステップ

- [画質と低照度性能を調整する](/ja/recamera_pro_image_quality/)
- [外部プレーヤーでストリームを視聴する（RTSP）](/ja/recamera_pro_rtsp/)
- [OSD オーバーレイとプライバシーマスクを追加する](/ja/recamera_pro_osd_masks/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
