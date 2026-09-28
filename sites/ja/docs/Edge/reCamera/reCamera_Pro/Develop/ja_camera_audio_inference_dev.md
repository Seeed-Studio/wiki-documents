---
description: 独自の reCamera Pro アプリケーション内で、カメラキャプチャ、オーディオの録音と再生、RKNN 推論、および RTSP ストリーミングパイプラインを開発します。
title: カメラ・オーディオ・推論の開発
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - GStreamer
  - RKNN
  - ALSA
  - RTSP
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_media_dev
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_media_dev/
---

# カメラ・オーディオ・推論の開発

このページでは、ネイティブな reCamera Pro アプリケーションの構成要素である、GStreamer を用いたカメラキャプチャ、ALSA を用いたオーディオの録音と再生、RKNN 推論、および RTSP ビデオ出力について説明します。ここに記載されている内容はすべて、実際にデバイス上で動作するプロジェクトに基づいており、多くの例は [Visual Wake and Offline Speech Recognition](/ja/recamera_pro_visual_wake_stt/) アプリケーションからのものです。

環境構築とデプロイについては、[SDK and Minimal Application](/ja/recamera_pro_sdk_setup/) を参照してください。

## 参照パイプライン

完全なオンデバイス AI アプリケーションは、以下のステージを連結します。これは Visual Wake プロジェクトの実際のパイプラインです：

```text
GStreamer camera
  -> SCRFD face detection (RKNN)
  -> IoU tracking + PFLD 98-point landmarks (RKNN)
  -> OpenCV solvePnP head-pose estimation
  -> EMA smoothing, hysteresis, and continuous-look timer
  -> visual-wake event
  -> bilingual streaming Zipformer STT (RKNN)
```

独自アプリケーションにおける重要なポイントは次のとおりです。カメラフレームは GStreamer を通じて流れ、各フレーム（またはダウンスケールしたコピー）が 1 つ以上の RKNN モデルに入力され、アプリケーションロジックがモデル出力を利用します。オーディオキャプチャはアプリケーションロジックが要求したときにのみ開始され、アプリは常時録音は行いません。

## カメラキャプチャ

- カメラデバイス: `/dev/video13`、GStreamer（`v4l2src`）によって読み取り
- デフォルトのキャプチャ形式: `1920x1080`、最大 30 fps（実際の処理レートは推論時間に依存）
- 実動作プロジェクトで使用されているファームウェアの GStreamer 要素: `appsrc`, `videoconvert`, `jpegenc`, `rtpjpegpay`

アプリケーション内で GStreamer パイプラインを通じてフレームをキャプチャし、その後、モデルが要求する前処理を正確に実行します。

:::warning
NV12 カメラバイト列を RGB または BGR モデルに直接入力しないでください。パイプラインまたはアプリケーション側で、モデルが要求する NV12 から RGB/BGR への変換と正規化を行う必要があります。色順序や正規化が一致しないと、色が誤り、推論結果も誤ったものになります。
:::

## オーディオの録音と再生

### マイク入力

ファームウェアはアプリケーション向けに専用の PCM オーディオデバイスを提供します：

- デバイス名: `ai_asr` — 16 kHz、S16_LE、4 チャンネル構成で、通常はチャンネル 0 を選択
- `ai_asr` を使用することで、`hw:0,0` を占有しているベンダープロセスとの競合を避けられます

オーディオ入力経路を確認するため、デバイス上で直接テスト用クリップを録音します：

```bash
arecord -D ai_asr -f S16_LE -r 16000 -c 4 -d 5 /tmp/test.wav
```

### スピーカー出力

オンボードスピーカーは標準的な Linux ALSA インターフェース経由で駆動されます。WAV ファイルを再生するには次を実行します：

```bash
aplay test.wav
```

`aplay` は ALSA の PCM プレーヤーであり、PCM/WAV データのみを再生でき、MP3 をデコードすることはできません。必要に応じて事前に変換してください：

```bash
ffmpeg -i test.mp3 test.wav
```

音量調整やデバイス一覧（`aplay -l`, `amixer`）については、[Play Audio and Control Volume](/ja/recamera_pro_speaker_usage/) で説明しています。

{/* TODO(verify): document how the vendor audio service coexists with user applications — which processes hold hw:0,0, how to release audio/camera resources safely, and how to restore vendor services after stopping them */}

## RKNN 推論

- ネイティブ C/C++ アプリケーションには **RKNN Runtime C API** を使用します。`rknn-toolkit-lite2` はこのワークフローでは使用しません
- ツールキットとランタイムのバージョン: **RKNN-Toolkit2 2.3.2 / RKNN Runtime 2.3.2**、ターゲット `rv1126b`
- ボード互換の RKNN Runtime とリンクし、デバイスに既にインストールされているランタイムを使用してください — アプリケーション側でこれを置き換えるべきではありません
- モデル変換が成功しても、正しい推論が保証されるわけではありません。RKNN の数値出力を元の ONNX モデルと比較し、前処理は明示的に保つようにしてください

ONNX からのモデル変換（FP16 および、キャリブレーション画像を用いた INT8 量子化を含む）については、[Develop with AI Coding Agents](/ja/recamera_pro_development_cpp_skill/) および本 Wiki のモデルデプロイメントセクションで扱っています。

## RTSP ビデオ出力

アプリケーションは、リモート監視用に注釈付きビデオストリームを RTSP 経由で公開できます。Visual Wake プロジェクトは、以下のデフォルト設定で RTSP サーバーを実行します：

| 項目 | デフォルト |
| --- | --- |
| ポート | `8554` |
| マウントパス | `/visual-wake` |
| 出力解像度 | `960x540` |
| 宣言フレームレート | 15 fps（実際のレートは推論スループットに依存） |

ホストコンピュータから TCP トランスポートを使用してストリームを再生します：

```bash
ffplay -rtsp_transport tcp rtsp://192.168.42.1:8554/visual-wake
```

標準ファームウェアも、WebUI で設定されたパイプライン用に独自の RTSP ストリームを提供しています — Build Your Own App セクションの RTSP ドキュメントを参照してください。

{/* TODO(verify): document whether a user application's RTSP server can run at the same time as the stock firmware's RTSP service, and which ports each uses by default */}

## モニタリングとデバッグ支援

実際に動作するアプリケーションは、複数のチャネルを通じてステータスを公開しています。プロジェクトに適したものを採用してください：

- **ターミナルイベント** — 実行可能なイベント（例：`VISUAL_WAKE track=1`, `STT_RESULT ...`）を stdout に出力
- **デバッグログ** — 起動時、フレームごとのポーズ、オーディオレベル、RTSP、および推論性能ログを `--debug` フラグの背後に配置
- **Web ダッシュボード** — クラウド依存のない HTTP/WebSocket サービス（デフォルトポート `8080`、ヘルスエンドポイント `/health`）
- **ターミナルダッシュボード** — ターミナル内でのインタラクティブなビュー（最小 80×18 文字）

## クイックトラブルシューティング

| 問題 | 想定される原因 | 解決策 |
| --- | --- | --- |
| カメラフレームがない | 誤ったビデオデバイス | `/dev/video13` が存在し、他のプロセスに占有されていないことを確認する |
| 色がおかしい、または検出精度が悪い | NV12 から RGB/BGR への変換または正規化の不一致 | モデルの前提条件を再確認し、前処理を明示的に行う |
| オーディオ録音に失敗する | `ai_asr` が利用できない、またはフォーマットが異なる | デバイス上で上記の `arecord` テストコマンドを実行する |
| RTSP を再生できない | ネットワーク、ポート、または GStreamer プラグインの問題 | TCP 再生を使用し、必要なファームウェア GStreamer 要素を確認する |

デバイス全体に関わる問題については、[Troubleshooting](/ja/recamera_pro_faqs/) を参照してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
