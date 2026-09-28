---
description: recamera_pro_live_preview
title: ライブプレビュー
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_live_preview_legacy
draft: true
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/recamera_pro_live_preview_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page has been superseded by Build_Your_App/preview_capture_record.md (https://wiki.seeedstudio.com/ja/recamera_pro_live_preview/), which now serves the original slug /recamera_pro_live_preview. This file is kept for history as a draft (slug /recamera_pro_live_preview_legacy) and is excluded from production builds. Do not link here. -->

## コンテンツ移行インデックス（レガシーページ）

| 元のセクション | 新しい場所 |
| --- | --- |
| Web UI の概要 | [First AI Detection](https://wiki.seeedstudio.com/ja/recamera_pro_getting_started/)、[reCamera Pro ホーム](https://wiki.seeedstudio.com/ja/recamera_pro/) |
| 主な機能 | [プレビュー、キャプチャ、手動録画](https://wiki.seeedstudio.com/ja/recamera_pro_live_preview/)（このスラッグ） |

## Web UI の概要
reCamera Pro には Web UI 管理インターフェースが内蔵されており、ユーザーが追加のクライアントソフトウェアをインストールする必要はありません。PC が reCamera Pro と同じローカルエリアネットワーク上にあれば、ブラウザからカメラの IP アドレスに直接アクセスしてデバイス管理ページに入ることができます。アクセス方法は次のとおりです：
```text
http://<reCamera_IP>
```

Web UI に初めてアクセスするときは、パスワードの入力が必要です。初期パスワード（旧パスワード）は `recamera` です。必要に応じて新しいパスワードを入力してください。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />
新しく設定したパスワードを使用してログインします。ユーザー名は `admin` です。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_a6gnjmMqnt.png" />新しいパスワードでログインすると、ユーザーはリアルタイムプレビュー、写真撮影、ビデオ録画、ストリーム切り替え、デバイス情報の表示、画像パラメータの設定、AI 推論関連設定の構成などを行うことができ、デバイスの迅速なデバッグと機能検証に役立ちます。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />
## 主な機能
### リアルタイムプレビュー
ユーザーはブラウザ上で reCamera Pro からのリアルタイム映像を直接確認でき、機器の設置、レンズ調整、画像確認に便利です。"Start" をクリックすると再生が開始され、カメラのライブ映像を確認できます。

### 写真撮影
現在のフレームを画像として保存することをサポートしており、シーン記録、デバッグ記録、データ収集などに適しています。画像データはブラウザのデフォルトのダウンロードパスに自動的にダウンロードされます。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2XAT0cUJwO.jpg" />

### ビデオ録画
Web UI を介して録画機能の開始および停止をサポートします。ビデオはデバイスのローカルストレージに保存され、後から再生および解析することができます。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_nPNSUbHEOa.jpg" />
録画を開始すると、"Start Recording" ボタンは "End Recording" に変わります。再度クリックした後、reCamera が画像データをパッケージするまでしばらくお待ちください。ブラウザは対応する MP4 形式のビデオストリームデータを自動的にダウンロードし、ブラウザのデフォルトのダウンロードパスで確認できます。
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_03SDnfmwp5.jpg" />

### ストリーム切り替え
メインストリームとサブストリームの切り替えをサポートします。ユーザーはネットワーク帯域幅、画質要件、プレビューシナリオに応じて適切なストリームを選択できます。

内蔵 Web UI を通じて、reCamera Pro は追加ソフトウェアなしでアクセスおよび設定が可能であり、迅速な展開、機能検証、エッジ AI カメラアプリケーション開発に適しています。

## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
