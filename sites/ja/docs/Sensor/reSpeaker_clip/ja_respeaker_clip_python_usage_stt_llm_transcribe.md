---
description: Python SDK を使用して、文字起こし、話者分離、要約ワークフロー向けの reSpeaker Clip 独自アプリケーションを構築する方法を学びます。本チュートリアルでは、BLE および Wi-Fi 通信、音声録音、ファイル同期、デバイス設定などを扱います。

title: Python SDK を使用して reSpeaker Clip 向けに文字起こし・話者分離・要約対応の独自アプリを構築する
keywords:
  - reSpeaker clip
  - 文字起こし
  - 話者分離
  - STT
  - 要約
  - sdk
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/c/h/chatgpt_image_2026_7_3_10_12_05.png
slug: /respeaker_clip_python_build_app
sku: 100020126
last_update:
  date: 07/21/2026
  author: Kasun Thushara
createdAt: '2026-07-21'
updatedAt: '2026-07-21'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_python_build_app/
---

## はじめに 

**reSpeaker STT Web** は、reSpeaker Clip をインテリジェントな AI 搭載の音声・会議アシスタントへと変身させ、組み込みオーディオハードウェアと最新の Web / クラウド AI 技術をつなぎます。BLE または Wi-Fi を使用して、デバイスからの録音を継続的に同期し、強力な音声・言語 AI パイプラインで処理します。**音声文字起こし、話者分離、AI 生成の会議要約** に特化したワークフローにより、会話を構造化された実用的な情報へと変換できます。Python とモジュラーアーキテクチャで構築された本プロジェクトは、開発者や組み込みエンジニアが reSpeaker Clip を用いて次世代の音声・AI アプリケーションを構築するための柔軟な基盤を提供します。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 動作概要

1. BLE（デフォルト）または WiFi 経由で Clip に接続します。
2. タブを選択して Start を押します。録音中、デバイスからの音声はバックグラウンドでストリーミングされます（連続同期 — 元の `clip-web` ツールと同じ）。どのタブから開始したかによって、その録音に対して実行されるパイプラインが決まります。
3. 録音を停止します。最終同期が完了すると、アプリは次を実行します：
   - 結合された音声を `.ogg`（Opus）にエンコード
   - それを 16kHz モノラルの `.wav` に変換（PyAV 経由 — 別途 ffmpeg をインストールする必要はありません）
    - **Transcription タブ:** `.wav` を Groq に送信し、プレーンテキストを取得。
    - **Diarization タブ:** `.wav` を Speechmatics に `diarization: "speaker"` 付きで送信し、単語レベルの JSON 文字起こしを取得して、話者ターン（`S1`、`S2`、...）にグループ化。
    - **Summary タブ:** `.wav` を Groq に送信して文字起こしを行い、その文字起こしを Groq の chat API（`openai/gpt-oss-20b`）に渡して、構造化された議事録（タイトル、要点、アクションアイテム、決定事項）を生成。
    - 既存の WebSocket を介して結果をブラウザにプッシュ。
4. 各タブには独自の「Recordings」リストがあり（そのセッションがどのパイプラインで録音されたかでフィルタリング）、各録音ごとに再生と Process/Re-run ボタンがあります。


## API キー

各タブには独自の Settings カードがあります — Transcription と Summary タブには Groq キー（共有 — 一度設定すれば両方で使用可能）、Diarization タブには Speechmatics キーです。何もハードコードもコミットもされません。キーはサーバープロセスの存続期間中、メモリ内に保持されます。"Remember on this machine" をチェックすると、`app/settings.local.json`（gitignore 済み）にも保存され、再起動後も保持されます。

- **Groq:** https://console.groq.com でキーを取得します — 文字起こし（`whisper-large-v3-turbo`、高速な単一同期呼び出し）と要約（`openai/gpt-oss-20b` の chat completions）の両方に使用されます。
- **Speechmatics:** https://portal.speechmatics.com でキーを取得します — `diarization: "speaker"` を指定したバッチ REST API を使用します（送信 → ポーリング → JSON 文字起こし取得 → 話者ターンにグループ化）、デフォルトでは `enhanced` オペレーティングポイントを使用します。詳細はドキュメントの [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization) を参照してください。

## プロジェクト構成

```
respeaker-stt-web/
├── clip/                   # vendored Clip SDK (BLE/WiFi device control)
├── app/
│   ├── main.py              # FastAPI app: device control + recording + pipeline orchestration
│   ├── audio_convert.py     # PyAV-based conversion to 16kHz mono WAV
│   ├── config.py            # runtime settings (per-provider API keys)
│   ├── llm/
│   │   └── groq_summarizer.py  # Groq chat summarization via openai/gpt-oss-20b
│   ├── stt/
│   │   ├── base.py          # STTProvider interface
│   │   ├── groq_provider.py         # transcribe() — plain text
│   │   └── speechmatics_provider.py # transcribe() + diarize() — speaker turns
│   └── static/
│       └── index.html       # UI — three tabs, each with recording controls, settings, results
├── recordings/               # synced audio + meta.json + transcript.json per session (gitignored)
└── requirements.txt
```

## 必要要件

- Python 3.10 以上
- 別途 ffmpeg をインストールする必要はありません — WAV 変換には PyAV（PyPI 上の `av`）を使用し、Windows を含む各環境向けにコーデックライブラリが同梱されています
- 実際の録音用にペアリング済みの reSpeaker Clip デバイス（BLE）が必要です — この部分はハードウェアなしでは試せません

## セットアップ

```bash
git clone https://github.com/KasunThushara/clip-sdk-python-usage.git && cd clip-sdk-python-usage
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python app/main.py
```

その後、`http://localhost:5000` を開きます。

BLE の代わりに WiFi トランスポートを使用する場合：

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```
## インターフェース概要

### Transcription
Groq API キーを追加します。録音ボタンを押し、停止したいタイミングで stop を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app.jpg" alt="pir" width={800} height="auto"/></p>

### Diarization
Speechmatics API キーを追加します。録音ボタンを押し、停止したいタイミングで stop を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-3.jpg" alt="pir" width={800} height="auto"/></p>

### Summary
Groq API キーを追加します。録音ボタンを押し、停止したいタイミングで stop を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-4.jpg" alt="pir" width={800} height="auto"/></p>


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
