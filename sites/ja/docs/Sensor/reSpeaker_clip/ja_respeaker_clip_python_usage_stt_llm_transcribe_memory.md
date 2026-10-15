---
description: Python SDK を使用して、メモリレイヤーを備えた reSpeaker Clip アプリケーションを構築する方法を学びます。このチュートリアルでは、BLE と Wi-Fi 通信、音声録音、文字起こし、話者分離、要約、そして繰り返しの議論に対するローカルメモリマッチングを扱います。
title: Python SDK を使用してメモリレイヤーを追加した reSpeaker Clip 用独自アプリを構築する
keywords:
  - reSpeaker Clip
  - メモリレイヤー
  - Python SDK
  - 文字起こし
  - 話者分離
  - 要約
  - Firebase
  - SQL
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg
slug: /respeaker_clip_python_build_app_with_memory
sku: 100020126
last_update:
  date: 07/31/2026
  author: Kasun Thushara
createdAt: '2026-07-31'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_python_build_app_with_memory/
---

## はじめに

このガイドでは、reSpeaker Clip を、録音の文字起こしや話者分離、要約を行うだけでなく、以前に話された内容も記憶できる音声アシスタントへと変身させる方法を説明します。Python SDK のワークフローの上にメモリレイヤーを追加することで、アプリは新しい文字起こしを過去の会話と比較し、類似した議論を検出したときに通知できるようになります。

その結果として、reSpeaker Clip を使ったスマートな会議アシスタント、パーソナルなメモ取りツール、あるいは音声駆動のナレッジアプリを構築するための実用的な基盤が得られます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="reSpeaker Clip memory app" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 仕組み

1. BLE（デフォルト）または Wi-Fi を介して Clip に接続します。
2. アプリから録音を開始します。話している間、音声はバックグラウンドでデバイスからストリーミングされます。
3. 録音を停止します。同期が完了すると、アプリは次の処理を行います：
   - 結合された音声を `.ogg`（Opus）にエンコード
   - PyAV を使用して 16kHz モノラルの `.wav` に変換
   - 文字起こし、話者分離、または要約のために選択されたパイプラインを実行
   - 得られた文字起こしテキストに対してメモリレイヤーを実行
   - 結果とメモリ通知（ある場合）を、既存の WebSocket を介してブラウザに送信
4. 各録音は再生および処理用のコントロールとともに保存され、録音を再処理する場合はメモリチェックも再度実行されます。

## このバージョンの特徴

メモリレイヤーは、音声処理の後に新しいステップを追加します：

```text
reSpeaker Clip -> record -> STT / diarization / summary
                                  |
                                  v
                            embed transcript locally
                                  |
                                  v
                    compare with previous recordings
                                  |
                         match found or no match
```

主な機能：

- メモリレイヤー用に音声データは保存されません。保存されるのは文字起こしテキスト、埋め込み、タイムスタンプ、およびマッチのメタデータのみです。
- デフォルトのローカルベクターストアは `data/` フォルダ配下の JSON と NumPy ファイルを使用するため、クラウドサービスなしで動作します。
- 類似した録音が見つかった場合、アプリは「以前にもこの内容を話しました」などのコーナートーストを表示できます。
- メモリレイヤーは付加的な機能です。マッチが見つからなくても、文字起こしや要約自体をブロックすることはありません。

## 対応ワークフロー

アプリは次の 4 つのワークフローパターンをサポートします：

- **Transcription タブ** — Groq ベースのプレーンテキスト文字起こし。
- **Diarization タブ** — Speechmatics ベースの話者ラベル付き文字起こし。
- **Summary タブ** — Groq による文字起こしと、AI 生成の議事録。
- **Memory layer** — 使用したタブに関係なく、すべての録音に対して実行されます。

## API キー

各タブはそれぞれ専用のプロバイダー設定を使用します：

- **Groq** — 文字起こしと要約に使用。
- **Speechmatics** — 話者分離と話者ラベリングに使用。
- **Firebase** — メモリレイヤー用に Firestore バックエンドのストレージオプションへ切り替えたい場合のオプション。

キーはハードコードされていません。現在のサーバーセッションの間だけメモリに一時保存することも、将来の利用のためにローカルへ永続化することもできます。

## 必要条件

- Python 3.10 以上
- 実際の録音とストリーミング用にペアリング済みの reSpeaker Clip デバイス
- PyAV にコーデックが同梱されているため、別途 ffmpeg をインストールする必要はありません
- Firebase やその他のデータベース連携型メモリストレージを試したいチーム向けに、オプションのクラウド連携が利用可能です

## セットアップ

### Linux / macOS

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

cp .env.example .env
python app/main.py
```

### Windows（PowerShell）

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt

Copy-Item .env.example .env
python app/main.py
```

その後、`http://localhost:5000` を開きます。

BLE の代わりに Wi-Fi トランスポートを使用する場合：

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```

## プロジェクト構成

```text
respeaker-stt-memory/
├── clip/                     # vendored Clip SDK for BLE and Wi-Fi device control
├── app/
│   ├── main.py               # FastAPI app for device control, recording, and memory hooks
│   ├── audio_convert.py      # converts audio to 16kHz mono WAV
│   ├── config.py             # runtime settings and provider keys
│   ├── llm/
│   ├── stt/
│   ├── memory/               # memory layer implementation
│   │   ├── config.py         # threshold and model settings
│   │   ├── embeddings.py     # local embedding generation
│   │   ├── local_store.py    # local vector store
│   │   └── memory_service.py # matching and memory orchestration
│   └── static/
├── data/                     # local memories.json and memories.npy
├── recordings/               # synced audio and transcript outputs
├── requirements.txt
```

## メモリレイヤーのチューニング

メモリレイヤーの動作は、類似度のしきい値と検索上限を調整することで変更できます：

- **MEMORY_SIMILARITY_THRESHOLD** — マッチを減らしたい場合は値を上げ、より多くのリコールが欲しい場合は値を下げます。
- **MEMORY_SEARCH_LIMIT** — しきい値を適用する前に、いくつの最近傍を対象とするかを制御します。

これらの値は推測ではなく、実際の利用状況からチューニングするべきです。

## ローカルストアを超えて拡張する

デフォルトの実装ではローカルの JSON と NumPy ベースのストアを使用しており、クラウドへの依存なしにこのアイデアを簡単に試すことができます。後から、より集中管理された、あるいは検索しやすいバックエンドが必要になった場合でも、この設計は、構造化された長期メモリを求めるチーム向けの Firebase バックエンドストレージや SQL ベースの永続化といった、より広いアイデアとも互換性があります。

これにより、このプロジェクトはプロトタイプだけでなく、より本番志向の音声アプリケーションにとっても良い出発点となります。

## インターフェース概要

Groq API キーまたは Speechmatics API キーを追加し、録音を開始して、終わったら停止します。その後、アプリはセッション結果を示す簡単なトースト通知を表示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip_memory_demo.png" alt="Transcription interface" width={800} height="auto" /></p>

## Firebase の概要

クラウドバックエンドのメモリ体験を試したい場合、Firebase をオプションの拡張として使用し、デバイス間でメモリを保存・共有できます。実際には、クラウド側を準備し、バックエンドをそれを使うように設定するだけで済みます。アプリのローカルメモリワークフローはデフォルトのままであり、Firebase への切り替えは、メモリレイヤーがローカルファイルではなくクラウドストアを参照するようにバックエンドを少し調整するだけです。

詳しくは、[こちら](https://github.com/KasunThushara/reSpeaker_Clip_Memory/tree/main/firebase)をご覧ください

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
