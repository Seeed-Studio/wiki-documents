---
description: Python を使用して reSpeaker Clip SDK で独自のアプリケーションを構築する方法を学びます。このチュートリアルでは、BLE および Wi-Fi 通信、音声録音制御、ファイル同期、デバイス設定などを扱います。

title: Python SDK を使用して reSpeaker Clip 用の文字起こし／話者分離／要約アプリを自作する
keywords:
  - reSpeaker clip
  - ble
  - wifi
  - python
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

**reSpeaker STT Web** は、reSpeaker Clip をインテリジェントな AI 搭載の音声・ミーティングアシスタントへと変身させ、組み込みオーディオハードウェアを最新の Web およびクラウド AI 技術とつなぎます。BLE または Wi-Fi を使用してデバイスから録音を継続的に同期し、強力な音声・言語 AI パイプラインで処理します。**音声文字起こし、話者分離、AI によるミーティング要約** の専用ワークフローにより、会話を構造化された実用的な情報へと変換できます。Python とモジュラーアーキテクチャで構築されたこのプロジェクトは、開発者や組み込みエンジニアが reSpeaker Clip を使って次世代の音声・AI アプリケーションを構築するための柔軟な基盤を提供します。


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_32_1.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 仕組み

1. BLE（デフォルト）または WiFi 経由で Clip に接続します。
2. タブを選択して Start を押します。録音中、オーディオはデバイスからバックグラウンドでストリーミングされます（連続同期 — 元の `clip-web` ツールと同じ）。どのタブから開始したかによって、この録音に対して実行されるパイプラインが決まります。
   background as it records (continuous sync — same as the original
   `clip-web` tool). Which tab you started from decides the pipeline
   that runs on this recording.
3. 録音を停止します。最終同期が完了すると、アプリは次を実行します：
   - 結合されたオーディオを `.ogg`（Opus）にエンコード
   - それを 16kHz モノラルの `.wav` に変換（PyAV 経由 — 別途 ffmpeg をインストールする必要はありません）
    - **Transcription タブ：** `.wav` を Groq に送信し、プレーンテキストを取得
    - **Diarization タブ：** `.wav` を Speechmatics に `diarization: "speaker"` 付きで送信し、単語レベルの JSON 文字起こしを取得して、話者ターン（`S1`、`S2`、...）にグループ化
      `diarization: "speaker"`, fetches the word-level JSON transcript,
      and groups it into speaker turns (`S1`, `S2`, ...).
    - **Summary タブ：** `.wav` を Groq に送信して文字起こしを行い、その文字起こしを Groq の chat API（`openai/gpt-oss-20b`）に渡して、構造化された議事録（タイトル、要点、アクションアイテム、決定事項）を生成
      feeds the transcript to Groq's chat API (`openai/gpt-oss-20b`) to
      generate structured meeting minutes (title, key points, action
      items, decisions).
    - 既存の WebSocket を介して結果をブラウザにプッシュ
4. 各タブには独自の「Recordings」リストがあり（どのパイプラインでセッションが録音されたかでフィルタリング）、各録音ごとに再生と Process/Re-run ボタンがあります。
   the session was recorded under), with playback and a
   Process/Re-run button per recording.


  ## API キー

各タブには独自の Settings カードがあります — Transcription タブと Summary タブには Groq キー（共有 — 一度設定すれば両方で使用可能）、Diarization タブには Speechmatics キーを設定します。何もハードコードもコミットもされません。キーはサーバープロセスの存続期間中、メモリ内に保持されます。「Remember on this machine」をチェックすると、`app/settings.local.json`（gitignore 済み）にも保存され、再起動後も保持されます。
Summary tabs (shared — set it once, usable by both), Speechmatics key
on the Diarization tab. Nothing is hardcoded or committed. Keys live in
memory for the life of the server process. Check "Remember on this
machine" to also persist them to `app/settings.local.json` (gitignored)
so they survive a restart.

- **Groq:** https://console.groq.com でキーを取得します — 文字起こし（`whisper-large-v3-turbo`、高速な単一同期呼び出し）と要約（`openai/gpt-oss-20b` の chat completions）の両方に使用されます。
  transcription (`whisper-large-v3-turbo`, fast single synchronous call)
  and summarization (`openai/gpt-oss-20b` chat completions).
- **Speechmatics:** https://portal.speechmatics.com でキーを取得します — `diarization: "speaker"` を指定したバッチ REST API を使用します（送信 → ポーリング → JSON 文字起こしを取得 → 話者ターンにグループ化）、デフォルトでは `enhanced` 動作ポイントです。詳細はドキュメントの
  the batch REST API with `diarization: "speaker"` (submit → poll →
  fetch JSON transcript → group into speaker turns), `enhanced`
  operating point by default. See
  [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization)
  を参照してください。

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

  ## 必要条件

- Python 3.10 以上
- 別途 ffmpeg をインストールする必要はありません — WAV 変換には PyAV
  （PyPI 上の `av`）を使用し、Windows を含め、バンドルされたコーデックライブラリが同梱されています
  including on Windows
- 実際の録音用にペアリング済みの reSpeaker Clip デバイス（BLE）が必要です —
  ハードウェアなしではこの部分を試すことはできません

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


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
