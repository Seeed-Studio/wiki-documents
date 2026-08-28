---
description: Python SDK を使用して、リアルタイム Live STT（RTC ストリーミング）、文字起こし、話者分離、要約ワークフローに対応した reSpeaker Clip 向け独自アプリケーションの構築方法を学びます。本チュートリアルでは、BLE および Wi-Fi 通信、RTC オーディオストリーミング、音声録音、ファイル同期、デバイス設定などを扱います。
title: Python SDK を使用して Live STT、文字起こし、話者分離、要約に対応した reSpeaker Clip 向け独自アプリを構築する
keywords:
  - reSpeaker clip
  - Live STT
  - RTC
  - リアルタイム
  - 文字起こし
  - 話者分離
  - STT
  - 要約
  - sdk
slug: /respeaker_clip_python_build_app
sku: 100020126
last_update:
  date: 08/27/2026
  author: Kasun Thushara
createdAt: '2026-07-21'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_python_build_app/
---

## はじめに

**reSpeaker STT Web** は reSpeaker Clip をインテリジェントな AI 搭載の音声・ミーティングアシスタントへと変身させ、組み込みオーディオハードウェアと最新の Web / クラウド AI 技術をつなぎます。BLE または Wi-Fi を使用してデバイスからの録音を継続的に同期し、強力な音声・言語 AI パイプラインで処理します。また、**リアルタイム Live STT タブ** を追加し、Clip のマイク音声を BLE 経由（RTC モード）でストリーミングし、話しているそばからテキストに変換します。

**リアルタイム音声認識（speech-to-text）**、**音声文字起こし**、**話者分離**、**AI 生成ミーティング要約** のための専用ワークフローにより、ユーザーは会話を構造化された実行可能な情報へと変換できます — その場でも、後からでも可能です。Python とモジュラーアーキテクチャで構築された本プロジェクトは、開発者や組み込みエンジニアが reSpeaker Clip を用いて次世代の音声・AI アプリケーションを構築するための柔軟な基盤を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip_python_app_overview.png" alt="pir" width={800} height="auto"/></p>

## 動作概要

このアプリには **4 つのタブ** があります。**Live STT** タブはリアルタイム動作で、他の 3 つは SD カードに録音し、停止後に処理を行います。

**Live STT（リアルタイム、BLE のみ）：**
1. BLE 経由で Clip に接続します（自動スキャン、またはスキャンして特定のデバイスを選択）。
2. **Start Streaming** を押します。バックエンドは `AT+START=RTC`（ライブセッション、SD カードには何も書き込まれない）を送信し、その後 `AT+DOWNLOAD=<session>` を送ってストリームを開始します。
3. Clip は BLE 経由で 1 フレームあたり **20 ms の Opus パケット** を 1 つずつ送信します（File Data キャラクタリスティック）。
4. バックエンドは各パケットを PCM にデコードし、**多層 VAD**（WebRTC + 適応型エナジーゲート）を実行し、完了した **発話区間** のみを Groq に送信します — 無音は一切アップロードされません。
5. 文字起こし結果はテキスト行として WebSocket 経由でブラウザにリアルタイム配信され、`listening` / `SPEAKING` インジケータが VAD の状態を表示します。
6. **Stop** を押すと、最後の発話をフラッシュしてストリームを終了します（`AT+STOP`）。

**録音してから処理するタブ（BLE または WiFi）：**
1. デフォルトでは BLE、または WiFi 経由で Clip に接続します。
2. タブを選択して Start を押します。録音中、オーディオはデバイスからバックグラウンドでストリーミングされます（継続的同期 — 元の `clip-web` ツールと同じ）。どのタブから開始したかによって、その録音に対して実行されるパイプラインが決まります。
3. 録音を停止します。最終同期が完了すると、アプリは次を実行します：
   - マージされたオーディオを `.ogg`（Opus）にエンコード
   - それを 16kHz モノラルの `.wav` に変換（PyAV 経由 — 別途 ffmpeg をインストールする必要はありません）
   - **Transcription タブ：** `.wav` を Groq に送信し、プレーンテキストを取得
   - **Diarization タブ：** `.wav` を Speechmatics に `diarization: "speaker"` 付きで送信し、単語レベルの JSON 文字起こしを取得して、話者ターン（`S1`、`S2`、...）にグループ化
   - **Summary タブ：** `.wav` を Groq に送信して文字起こしを行い、そのテキストを Groq の chat API（`openai/gpt-oss-20b`）に渡して、構造化された議事録（タイトル、要点、アクションアイテム、決定事項）を生成
   - 既存の WebSocket を通じて結果をブラウザにプッシュ
4. 各タブには独自の「Recordings」リストがあり（そのパイプラインで録音されたセッションのみをフィルタリング）、再生および録音ごとの Process / Re-run ボタンが用意されています。

> Live STT セッションは SD カードに保存されないため、Recordings リストには表示されません — 出力は文字起こし結果のみです。

## API キー

各タブには専用の Settings カードがあります — Live STT、Transcription、Summary タブには Groq キー（共有 — 一度設定すれば 3 つすべてで使用可能）、Diarization タブには Speechmatics キーを設定します。何もハードコードもコミットもされません。キーはサーバープロセスの存続期間中、メモリ内に保持されます。「Remember on this machine」にチェックを入れると、`app/settings.local.json`（gitignore 済み）にも保存され、再起動後も保持されます。

- **Groq:** https://console.groq.com でキーを取得します — ライブ STT（`whisper-large-v3-turbo`、発話ごとの呼び出し）、文字起こし（`whisper-large-v3-turbo`）、要約（`openai/gpt-oss-20b` のチャット補完）に使用されます。
- **Speechmatics:** https://portal.speechmatics.com でキーを取得します — `diarization: "speaker"` を指定したバッチ REST API を使用します（送信 → ポーリング → JSON 文字起こし取得 → 話者ターンにグループ化）、デフォルトで `enhanced` オペレーティングポイントを使用します。詳細はドキュメントの [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization) を参照してください。

## プロジェクト構成

```
respeaker-stt-clip-rtc/
├── clip/                       # vendored Clip SDK (BLE/WiFi device control, RTC stream callbacks)
├── app/
│   ├── main.py                 # FastAPI app: device control + recording + live STT + pipelines
│   ├── stream.py               # RTCStreamManager: BLE RTC stream -> decode -> VAD -> Groq -> WebSocket
│   ├── opus_decode.py          # PyAV raw-Opus -> int16 PCM decoder (48 kHz, 20 ms frames)
│   ├── vad.py                  # StreamVAD: WebRTC VAD AND adaptive energy gate + hangover/pre-roll
│   ├── demo_sample_packets.json  # bundled Opus packets for no-hardware demo mode
│   ├── audio_convert.py        # PyAV-based conversion to 16kHz mono WAV
│   ├── config.py               # runtime settings (per-provider API keys)
│   ├── llm/
│   │   └── groq_summarizer.py  # Groq chat summarization via openai/gpt-oss-20b
│   ├── stt/
│   │   ├── base.py             # STTProvider interface
│   │   ├── groq_provider.py    # transcribe() / transcribe_bytes() — plain text
│   │   └── speechmatics_provider.py # transcribe() + diarize() — speaker turns
│   └── static/
│       └── index.html          # UI — Live STT + three record tabs, settings, results
├── reference/web/              # original browser-only Web Bluetooth streaming reference
├── docs/                       # project documentation
└── requirements.txt
```

同期された各録音には `meta.json` が作成されます（録音開始時に書き込まれ、そのセッションがどのパイプラインに属するかを記録）。処理が完了すると `transcript.json` が追加されます。Live STT の出力はリアルタイムでストリーミングされ、ディスクには保存されません。

## 必要環境

- Python 3.10 以上
- 別途 ffmpeg をインストールする必要はありません — WAV 変換には PyAV（PyPI 上の `av`）を使用し、Windows を含め、必要なコーデックライブラリが同梱されています
- WebRTC VAD レイヤー用の `webrtcvad-wheels`（インストールできない場合は自動的に適応型エナジーゲートにフォールバックします）
- 実際の録音用にペアリング済みの reSpeaker Clip デバイス（BLE）が必要です — この部分はハードウェアなしでは試せません
- **Live STT** タブ用：**RTC ライブストリーミング**（`AT+START=RTC`）をサポートするファームウェアを実行している Clip と BLE トランスポート（RTC ストリーミングは BLE のみ対応）

## セットアップ

```bash
git clone https://github.com/KasunThushara/clip-sdk-python-usage.git && cd clip-sdk-python-usage
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python app/main.py
```

その後、`http://localhost:5000` を開きます。

BLE の代わりに WiFi トランスポートを使用する場合（録音タブのみ — Live STT には BLE が必要）：

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```

## インターフェース概要

### Live STT（RTC ストリーミング）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-6.jpg" alt="pir" width={800} height="auto"/></p>

上部のデバイスカードはすべてのタブで共通です — 近くの Clip をスキャンし、ドロップダウンから自分のデバイスを選択して **Connect** を押します。Connect が Windows の BLE ペアリングエラーで失敗する場合は、**Re-pair & Connect** を使用して古いボンド情報をクリアしてください。

1. Live STT の Settings カードに **Groq API キー** を追加します。
2. Clip に **Connect** します（BLE 自動スキャン、またはスキャン後に選択したデバイス）。
3. **Start Streaming** を押します。話し始めると、各発話（音声＋その後の無音）が文字起こしされ、リアルタイムでトランスクリプトボックスに表示されます。インジケータには `listening` / `SPEAKING` が表示されます。
4. **WebRTC VAD aggressiveness**（0〜3）と **energy threshold (dB)** のスライダーを調整して、無音をどの程度積極的に除去するかをチューニングします。
5. **Stop** を押して、保留中の発話をフラッシュし、ストリームを終了します。

ハードウェアが手元にない場合は、**Demo (no device)** にチェックを入れてください — 同梱の Opus パケットが、同じ decode → VAD → Groq パイプラインを通して再生されるため、まずキーやチューニングを検証できます。

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

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
