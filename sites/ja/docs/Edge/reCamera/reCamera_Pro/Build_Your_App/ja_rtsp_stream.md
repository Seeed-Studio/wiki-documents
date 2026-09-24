---
description: reCamera Pro で RTSP 出力を有効にし、VLC などの外部プレーヤーで映像を視聴したり、NVR やビデオ管理システムと連携したりできるようにします。
title: 外部プレーヤーでストリームを視聴する（RTSP）
keywords:
  - reCamera
  - reCamera Pro
  - RTSP
  - streaming
  - VLC
  - NVR
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rtsp
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_rtsp/
---

# 外部プレーヤーでストリームを視聴する（RTSP）

Web UI の **Streaming Settings** ページでは、reCamera Pro がビデオストリームをどのように出力するかを設定できます。これにより、サードパーティプレーヤー（VLC、ffplay など）で映像を視聴したり、カメラを NVR、ビデオ管理システム、または独自アプリケーションと統合したりできます。

## 1. デバイスでストリーミングを有効にする

1. Web UI にログインし、ライブビューのページを開きます。
2. 右側の **Streaming Settings** に移動します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZrIYeGVxqa.png" />

3. 次の項目を設定します：

| Parameter | Description |
|---|---|
| Stream Setting Switch | 現在のストリームに対してストリーミングを有効または無効にします |
| Main Stream / Sub-Stream | 設定するストリームを選択します |
| Streaming Protocol | ストリーミングプロトコル（例：RTSP） |
| Authentication Type | ストリームへアクセスする際に必要な認証方式（例：認証なし） |

4. **Apply Settings** をクリックして保存します。

メインストリームとサブストリームは別々に設定されるため、例えば高精細なメインストリームをレコーダーに送り、低ビットレートのサブストリームをリモート視聴者向けに送る、といった使い分けができます。

## 2. ストリームアドレスを取得する

{/* TODO(verify): document exactly where the RTSP URL (including port and stream path) is shown in the Web UI, and the default port/path for main stream and sub-stream */}

ストリームアドレスはデバイスの IP に基づきます — `rtsp://<reCamera_IP>:<port>/<stream path>`。設定を適用した後、各ストリームの正確なアドレスは Streaming Settings ページで確認してください。

## 3. 外部プレーヤーで再生する

**VLC**：Media → Open Network Stream → RTSP アドレスを貼り付け → 再生。

**ffplay**（FFmpeg の一部）：

```bash
ffplay rtsp://<reCamera_IP>:<port>/<stream path>
```

"no authentication" 以外の認証タイプを有効にした場合は、プレーヤーから求められた認証情報を入力してください。
{/* TODO(verify): confirm how credentials are passed in the RTSP URL / player dialog for each supported authentication type */}

**NVR / VMS**：同じアドレスを使用して、カメラを RTSP デバイスとして追加します。NVR が多数のチャンネルを管理する場合は、サブストリームを選択してください。

## トラブルシューティング

- **プレーヤーに映像が表示されない** — 再生しているストリームの Stream Setting Switch がオンになっていること、およびプレーヤーがデバイスと同じネットワーク上にあることを確認してください。
- **Wi-Fi 経由で再生がカクつく** — サブストリームに切り替えるか、[Basic Settings](/ja/recamera_pro_image_quality/) でメインストリームのビットレートを下げてください。
- **ブラウザのプレビューではストリームが見えるが、外部では見えない** — Authentication Type と、ネットワークアクセス制御（[Network, Time and Access Control](/ja/recamera_pro_device_info/) を参照）を確認してください。

## 関連ページ

- [Image Quality and Low Light](/ja/recamera_pro_image_quality/)（ストリームごとのエンコードパラメータ）
- [Configure Event Recording](/ja/recamera_pro_record_settings/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
