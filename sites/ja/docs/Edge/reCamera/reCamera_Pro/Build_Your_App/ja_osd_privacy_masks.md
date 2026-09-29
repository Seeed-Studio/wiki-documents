---
description: reCamera Pro の映像上にチャンネル名、日時、シリアル番号をオーバーレイ表示（OSD）し、プライバシーマスクで機密エリアを隠します。
title: OSD オーバーレイとプライバシーマスク
keywords:
  - reCamera
  - reCamera Pro
  - OSD
  - privacy mask
  - image masking
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_osd_masks
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_osd_masks/
---

# OSD オーバーレイとプライバシーマスク

どちらの機能も Web UI のライブビュー画面から設定します。**OSD Settings** は映像にテキストオーバーレイを追加し、**Image Masking** は機密エリアを非表示にします。

## OSD Settings

**OSD (On-Screen Display)** は、チャンネル名、日時、デバイスのシリアル番号などの情報を映像に重ねて表示します。監視、録画の再生確認、デバイスの識別に役立ちます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_bdTuIGi3cp.jpg" />

| 設定項目 | 説明 |
|---|---|
| Font Size | OSD テキストのサイズ |
| Font Color | OSD テキストの色 |
| Color Mode | OSD のカラーモード（カスタムカラーオプションあり） |
| Channel Name Overlay | 画面上にチャンネル名を表示 |
| Channel Name | カスタムチャンネル名（例：Camera 01） |
| Channel Name Coordinates | チャンネル名を画面上のどこに表示するか |
| Date and Time Overlay | 画面上に日時を表示 |
| Date Format | 日付の表示形式 |
| Time Format | 時刻の表示形式（例：24 時間表示） |
| Show Weekday | 曜日を表示するかどうか |
| Date and Time Coordinates | 日時を画面上のどこに表示するか |
| Serial Number Overlay | デバイスのシリアル番号を表示するかどうか |

OSD の位置は相対座標で指定されるため、レイアウトが許す範囲でテキストを任意の場所に配置できます。また、プレビュー画面で**テキストをドラッグ**して好みの位置に移動することもできます。

設定後、**Save Settings** をクリックして OSD パラメータを適用します。

## Image Masking（プライバシーマスク）

**Image Masking** では、シーン内の機密部分を隠すプライバシーマスク領域を設定します。これにより、ライブプレビュー、録画、配信のいずれにも個人情報が映り込みません。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_wj02u6saTl.jpg" />

マスクは手動で追加することも、Web UI に自動で描画させることもできます。追加後に設定を保存すると、その効果はすぐにプレビューに反映されます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NtmxY1TDqE.png" />

代表的な利用シーン：

- オフィスエリア内の機密情報をマスクする
- 住宅、玄関番号、画面などのプライベートエリアをマスクする
- 公共空間や共有スペースで、会議映像のプライバシー保護要件を満たす

## 結果の確認

保存後、画像が出力される次の 2 つの場所を確認します：

1. **ライブプレビュー** — 現在の解像度で OSD テキストが読みやすく、マスクが意図したエリアを完全に覆っていることを確認します。
2. **録画と配信** — 写真を撮影し、短い録画を行い、（有効にしている場合は）RTSP ストリームを視聴して、オーバーレイ／マスクがブラウザ上だけでなく、出力映像に焼き込まれていることを確認します。

{/* TODO(verify): confirm whether privacy masks and OSD apply identically to snapshots, event recordings, and RTSP output on production firmware, and whether masks affect AI detection in masked areas */}

## 関連ページ

- [プレビュー、キャプチャ、手動録画](/ja/recamera_pro_live_preview/)
- [画質と低照度](/ja/recamera_pro_image_quality/)
- [検出の設定：クラス、しきい値、レート](/ja/recamera_pro_ai_inference/)

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
