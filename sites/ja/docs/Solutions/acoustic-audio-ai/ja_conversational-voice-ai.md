---
description: エッジデバイスで割り込み可能な音声端末を構築する方法——必要なボードとマイク、利用できるインターフェース、言語×デバイス対応表、RK3576でのASR/TTS実測データ
title: 'エッジで割り込み可能な対話音声AI：構築・導入・実測結果'
keywords:
  - conversational voice AI
  - barge-in voice assistant
  - edge voice terminal
  - AEC microphone array
  - Qwen3-ASR
  - Matcha-TTS
  - sherpa-onnx wake word
  - RK3576
  - RK3588
  - RK1828
  - Jetson Orin NX
  - OpenAI-compatible Chat Completions
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg
slug: /solutions/conversational-voice-ai
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/ja/solutions/conversational-voice-ai/
generated_from: sensecraft-solutions@aa522af
---

:::caution[利用上の注意]
これはオープンソースの参考実装であり、認証済み製品ではありません。音声精度を実測したのはRK3576とOrin NX（Qwen3-ASR int4）のみです。
:::

## このソリューションでできること

人が端末に近づいて話しかけると、端末が音声で答えます。回答の途中で話し始めると、文末まで待たずにすぐ再生を止めます。

サービスカウンター、展示・キオスク、ロボット音声フロントエンド、スマートホームや室内端末など、手がふさがった状態で機械に話しかける場所向けです。

- オープンソース実装： [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- 構成の選択と導入： [参考設計ページ](https://www.seeed.co.jp/solutions/reference-designs/conversational_voice_ai)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>音声処理はデバイス上で完結</h3>
                <p>認識（Qwen3-ASR）と合成（Matcha-TTS）はエッジデバイス上で動作します。完全ローカルのプリセットでは対話モデルもデバイス上で動き、初回起動後はオフラインで使えます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>マイクを挿せば割り込める</h3>
                <p>reSpeaker XVF3800はハードウェアでエコーを除去し、USB接続で自動認識されます（ホットプラグ対応）。回答の再生中に話すと、端末はすぐに止まります。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>オープンソース、自社システムに接続可能</h3>
                <p>コードは公開されています。対話はOpenAI互換APIを通るため、自社のナレッジベース、エージェント、注文システムへの切り替えはURLの変更だけで済み、音声層はそのまま使えます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>中国語と英語は実測済み</h3>
                <p>RK3576で実測：短い中国語発話の文字誤り率1.05%、合成のリアルタイム係数0.204。RK3588とJetsonでは30言語を選べます。</p>
            </div>
        </li>
    </ul>
</div>

<!-- TODO image: microphone array and speaker as installed on a service desk or kiosk — needs a field shoot -->

## 必要な機器

現場で必要なのは、マイクアレイ、スピーカー、音声ホストの3点です。対話テキストを現場外に出せない場合は、アクセラレータカードか4Bモデルを動かせるホストも加えます。

**① マイクアレイ**はハードウェアで音響エコーキャンセル（AEC）を行うものが必要です。

| | マイク | 説明 |
|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg" alt="reSpeaker XVF3800" width="110" /> | [reSpeaker XVF3800 USB 4-Mic Array](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html)<br/>ハードウェアAEC・ノイズ抑制・ビームフォーミング搭載のUSBアレイ | 検証済みの標準マイクです。2チャンネルと6チャンネルのファームウェア配置をどちらも認識し、処理済みチャンネルを自動で選びます。その他のアレイはキャプチャチャンネル1を使うため、稼働前に現場で音響テストを行ってください。 |

**② スピーカー**：USBまたは3.5 mmで同じデバイスに接続します。エコー対策として再生中にマイクをミュートすると、割り込みも使えなくなります。

**③ 音声ホスト**は認識・合成・常駐エージェントを実行し、提供できる言語もこれで決まります。

| | 音声ホスト | 対応言語 | 選ぶ条件 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>Rockchip NPU、Qwen3-ASR W8A8 + Matcha | 中国語、英語 | ローカル音声スタック全体を動かせる最も低コストのホストです。「性能と実測データ」の実測データはこの機種で取得しています |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Rockchip NPU、TTSにKokoro RKNNを追加 | 全30言語 | 中国語・英語以外の28言語が必要な場合、または後からRK1828カードを追加してローカル対話を行う場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>GPUでQwen3-ASR int4 + Matcha | 全30言語 | ホストで他のAI処理も動かし、GPUに余裕が必要な場合。このホストでローカル4Bモデルは動かさないでください |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>音声処理とQwen3.5-4Bを同じホストで実行 | 全30言語 | 対話テキストを現場外に出せない場合 |

reComputer R2000シリーズでもCPU音声スタック（sherpa-onnx、英語のみ）を動かせますが、参考設計ページのコンフィギュレーターにはまだ掲載していません。中国語には対応せず、ASRとTTSが4つのCPUコアを共有します。

**④ RK構成で完全ローカル対話を行う場合**：RK3588ホストにRK1828 / RM182X PCIe NPUカードを追加し、Qwen3-4Bを動かします。カードには独立した12 V電源が必要で、ホスト側にはドライバーとデバイスノードが必要です。カードに常駐できる大規模モデルは一度に1つです。

このほか、初回起動にはインターネット接続と空きディスク（Orin NXでは25 GB以上）が必要です。導入ツールからネットワーク経由でホストに到達できる必要もあります。

## 現場への導入

先にマイクとスピーカーを設置し、その後で導入ウィザードを実行します。

### 1. マイクとスピーカーの配置

:::tip[マイクがハードウェアエコーキャンセルに対応しているか確認してください]
割り込み、ターン検出、再生中もマイクを開いておく動作は、いずれもスピーカー出力がハードウェアで除去済みのキャプチャチャンネルを前提にしています。ハードウェアAECのないマイクでは誤割り込みやエコーループが起き、ソフトウェア設定では解消できません。
:::

- 標準ではreSpeaker XVF3800を使います。別のアレイを使う場合は、先に現場で音響テストを行ってください。未知のアレイはチャンネル1を使います。
- 受入確認はスピーカーを通常の室内音量にして行います。低音量で合格した端末でも、運用音量ではモデルと無関係な音響要因で失敗することがあります。
- reSpeakerは導入前に接続しても、エージェント起動後にホットプラグしても構いません。エージェントはUSB製品識別子でキャプチャデバイスを選び、HDMI/DPの疑似入力は無視します。抜き差ししてもコンテナの再起動は不要です。

### 2. ソフトウェアの導入

導入はSenseCraft SolutionアプリからSSH経由でホストに対して実行します（JetPack 6.2のJetson Orin上で作業している場合はローカル導入も可能です）。機器ごとの手順は導入ガイドにあり、ここでは4ステップの流れだけを示します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/conversational_voice_ai" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んで導入 🖱️</font></span></strong>
    </a>
</div><br />

1. **プリセットを選択**：クラウド / OpenAI互換、または完全ローカル。クラウドでは対話テキストが外部エンドポイントに送られ、完全ローカルではデータは現場外に出ません。
2. **対話言語を選択**：導入処理は他のサービスを起動する前に`(language, device)`を1つの音声プロファイルに解決します。reComputer R2000シリーズでの中国語など非対応の組み合わせはコード2で終了し、`docker compose up`全体を止めます。一部だけ起動した状態にはなりません。
3. **エンドポイントとペルソナを入力**：クラウドプリセットではbase URL、キー、モデルID（既定値は北京リージョンのQwenエンドポイントと`qwen3.5-flash`）とシステムプロンプトを入力します。**常時リスニング**を**ウェイクワード必須**に切り替え、短い中国語または英語のフレーズを入力することもできます。イメージ内蔵のオープンボキャブラリ対応sherpa-onnx検出器が起動時にローカルでコンパイルします。
4. **ダッシュボードで確認**：ポート18000のWebダッシュボードにlistening / thinking / speaking / barged-inが表示されます。

<!-- TODO image: 4 つのダッシュボード状態と 1 回の割り込みの画面録画 — 導入済みデバイスでの撮影が必要 -->

受入確認：実際の部屋と実際の音量で3ターン行い、各回答の開始0.5–1秒後に割り込みます。元の回答がすぐ止まり、割り込んだ発話が失われないことを確認します。

所要時間：クラウドプリセットで約30分です。完全ローカルは初回起動でモデルファイルをダウンロードするため長くかかります。一度オンラインで起動に成功すれば、イメージとモデルファイルはキャッシュされ、端末はオフラインで動作します。

## 利用できるインターフェース

エージェントはストリーミング対応のOpenAI互換Chat Completions APIを呼び出します。`LLM_BASE_URL`を自社サービスに向ければ接続できます。文書検索のRAGエンドポイント、ツール呼び出し対応のエージェントフレームワーク、ロボット命令層、注文・チケットのバックエンドなどです。音声層は変更不要です。

- **ホスト型モデルを使う**：既定値のまま使うか、base URL・キー・モデルIDを置き換えます。エンドポイントはストリーミングChat Completionsに対応している必要があります。
- **自社サービスを使う**：同じインターフェースを実装します。エージェントは文字起こしをユーザーターンとして送り、返答を生成と並行して合成に流すため、サービスが生成を終える前に最初の文の再生が始まります。
- **音声層だけを使う**：別のエージェントを上に構築する場合は、以下の双方向WebSocketとオフラインエンドポイントを直接呼び出せます。

### ポートとエンドポイント一覧

すべてのサービスはホストネットワークで動作するため、`<host>`は音声ホスト自身のアドレスです。

| エンドポイント | 対応する導入形態 | 提供する内容 |
|---|---|---|
| `ws://<host>:8621/v2v/stream` | すべてのプリセット | 双方向セッション：PCM入力、文字起こしとTTS PCM出力、割り込み時のabortもここを通ります |
| `POST http://<host>:8621/asr` | すべてのプリセット | オフラインのファイル全体文字起こし。VADなし、ストリーミングなし。「性能と実測データ」のオフライン精度値はここで測定 |
| `POST http://<host>:8621/tts` | すべてのプリセット | 合成。レスポンスヘッダー`x-rtf`にリアルタイム係数 |
| `GET http://<host>:8621/health` | すべてのプリセット | 準備状態。Composeのヘルスチェックで使用 |
| `http://<host>:18000` | すべてのプリセット | Webダッシュボード：ターン状態と各ターンの文字起こし |
| `http://<host>:1828/v1`, `/health` | RK3588 + RK1828 ローカルプリセット | デバイス上のQwen3-4B向けOpenAI互換Chat Completions |
| `http://<host>:8000/v1`, `/health` | Orin NX ローカルプリセット | デバイス上のQwen3.5-4B向けOpenAI互換Chat Completions |
| `LLM_BASE_URL`（外向き） | クラウドプリセット | 任意のOpenAI互換エンドポイント |

2つのローカル構成もクラウド構成と同じインターフェースを公開しているため、切り替えで変えるのは`LLM_BASE_URL`だけです。外部に向けない限り、データ経路にブローカーやクラウド部品はありません。

## 性能と実測データ {#measured-detail}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/openvoicestream" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>openvoicestream</font></span></strong>
    </a>
</div><br />

### ランタイムと主要パラメータ

双方向プロトコルとエージェントはすべてのホストで共通で、ASRとTTSを実行するバックエンドだけが異なります。

| 音声ホスト | ASRバックエンド / モデル | TTSバックエンド / モデル | 解決済みプロファイル |
|---|---|---|---|
| RK3576 | `rk.asr` — Qwen3-ASR、RKNN encoder + RKLLM decoder、W8A8 | `rk.tts` — matcha-icefall-zh-en、ORT acoustic + RKNN Vocos | `rk3576-default` |
| RK3588（中 / 英） | `rk.asr` — 上記と同じ | `rk.tts` — matcha-icefall-zh-en | `rk3588-default` |
| RK3588（その他28言語） | `rk.asr` — 上記と同じ | `rk.tts` — Kokoro v1.0 hybrid、RKNN INT8 decoder-front + CPU ONNX prefix/tail | `rk3588-kokoro-rknn` |
| Orin Nano 8GB / Orin NX 16GB（中 / 英） | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B、int4 | `jetson.matcha_trt` — matcha-icefall-zh-en、bf16/fp16 Vocos | `jetson-edgellm-v091-matcha` |
| Orin NX 16GB（その他28言語） | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B、int4 | `jetson.trt_edge_llm` — Qwen3-TTS CustomVoice、int4 | `jetson-edgellm-v091-customvoice` |
| reComputer R2000シリーズ（英語） | `cpu.sherpa_asr` — sherpa-onnx ストリーミング zh-en、int8 CPU | `cpu.sherpa` — sherpa-onnx CPU 音声、int8 | `rpi5-default` |

完全ローカルのOrin NXプリセットはTensorRT-Edge-LLM v0.9.1イメージを使います。別のTensorRT / JetPackバージョン向けにビルドしたエンジンはロードされません。RK側のモデルファイルは初回起動時に取得します。

**言語×デバイス表。** 導入時に（言語、デバイス）からプロファイルを選びます。18セルのうち15セルが導入可能、3セルが非対応です。導入可能なセルのうち5セルはエンドツーエンドの実測があり、残り10セルは各構成要素にデバイス上の実測値があります。非対応はreComputer R2000シリーズの中国語と、RK3576およびreComputer R2000シリーズのその他28言語です。中国語をWhisperで代替しないのは、測定したすべてのボードでWhisperの中国語CERが35–56%だったためです。RK3576はTTS音声がMatcha zh-enしかないため、その他28言語は文字起こしできても回答を合成できません。

導入結果に影響する3つのパラメータ：

- `barge_in_min_speaking_ms` `500`、`barge_in_min_chars` `2`：返答の再生が始まっていて、割り込みが1音節より長い場合にだけ割り込みが成立します。
- `playback_drain_enabled` `true`：ローカルの再生バッファが空になるまでエージェントはSPEAKINGを維持します。無効にすると、返答の余韻の間に話した内容が新しいターンとして扱われ、古い返答が再生され続けます。
- サーバー側のターン終了判定：silero、400 msの無音 + `QWEN3_ASR_FRONTEND_EOU_MIN_AUDIO_S=2.5`で、最初の自然な間でターンを終了します。途中に間がある長い文には、最初の節に対する返答しか返りません。

### reComputer RK3576シリーズの実測

条件：Rockchip BSP付きDebian 12、プロファイル`rk3576-default`。テストスクリプトと音声コンテナは同じデバイス上で`127.0.0.1:8621`経由で通信しており、数値にネットワーク転送は含まれません。

**オフラインエンドポイントでのASR**（`POST /asr`、ファイル全体を入力、VADなし・ストリーミングなし）：

| 言語 | セット | n | 誤り率 |
|---|---|---:|---:|
| 中国語 | 短い発話 | 5 | CER 1.05% |
| 中国語 | 長文 10–20 s | 5 | CER 9.62% |
| 英語 | 短い発話 | 5 | WER 3.65% / CER 1.11% |
| 英語 | 長文 10–20 s | 5 | WER 6.99% / CER 4.16% |

英語の長文はすべてのファイルで複数の節を含む全文が出力されました。残る誤りは認識のずれ（`"3:2"`が`"three to two"`になる）で、打ち切りではありません。

**ライブセッションでのASR**（`/v2v/stream`、出荷時既定値`ASR_MAX_NEW_TOKENS=64`、`ASR_FINAL_STOP_ON_PUNCT=1`）、参照テキスト全体に対して採点：

| 言語 | セット | n | 誤り率 |
|---|---|---:|---:|
| 中国語 | 短い発話 | 5 | CER 29.09% |
| 中国語 | 長文 10–20 s | 5 | CER 84.06% |
| 英語 | 短い発話 | 5 | WER 16.95% / CER 10.16% |
| 英語 | 長文 10–20 s | 5 | WER 63.38% / CER 62.58% |

ライブセッションの誤り率が高いのはサーバー側のターン終了判定によるもので、デコーダーの打ち切りではありません。`ASR_MAX_NEW_TOKENS`を256、`ASR_FINAL_STOP_ON_PUNCT`を0にしても、両言語とも文字起こしはバイト単位で同一です。

**TTS**（`POST /tts`、サーバーのレスポンスヘッダー`x-rtf`を読み取り、Matcha ORT acoustic + RKNN Vocos、icefall zh-en音声）：

| 言語 | n | リアルタイム係数 | 範囲 |
|---|---:|---:|---|
| 中国語 | 5 | 0.204 | 0.190–0.216 |
| 英語 | 5 | 0.194 | 0.158–0.216 |

英語の各文の音声長は2.5–4.3 sです。

**ライブセッションの遅延**（エコーモード、LLMなし）：

| 指標 | 言語 | n | 値 |
|---|---|---:|---|
| 発話終了 → TTS最初のフレーム（`stop_to_tts_audio`） | 中国語 | 4 | 1575 / 1624 / 1596 / 1580 ms（約1.6 s） |
| ASR確定 → TTS最初のフレーム（`final_to_tts_audio`） | 英語 | 5 | p50 1127 ms、平均1126 ms、1021–1232 ms |
| 発話終了 → ASR確定（`eos_to_final`） | 英語 | 5 | 平均2837 ms |

中国語の発話終了 → ASR確定（`stop_to_final`）の実測値は音声返答より後に出ているため、引用しません。

再現：openvoicestreamリポジトリの`docs/perf/rk3576-matrix-20260906.md`、`docs/known-issues/rk3576-v2v-multi-utterance-timeout.md`。英語の`eos_to_final`は`asr_stream_ws_bench.py`で取得します。

### reComputer J40シリーズの実測

| 指標 | 値 | 条件 |
|---|---|---|
| 中国語ASR | ゴールデンセットでストリーミング・オフラインともCER 0 | Qwen3-ASR 0.6B int4 |

### 既知の性能低下

- **ハードウェアAECのないマイク。** 上記の数値はすべてハードウェアAECのキャプチャチャンネルで測定しています。AECがないと誤割り込みやエコーループが起き、設定値では補えません。
- **文中の間。** 同じ音声で、オフラインエンドポイントのCERは9.62%、ライブセッションでは84.06%です。この差はターンテイキングの方針によるもので、文中の間の後の内容には返答がありません。
- **運用音量より低い音量での受入確認。** 低音量で合格した端末でも、運用音量では音響的な理由で失敗することがあります。

### 次のステップ

- サーバー側の発話終了判定を調整し、文中の間でターンが早く終わらないようにします。
- 言語×デバイス表の残り10セルの導入可能な組み合わせについて、エンドツーエンドの遅延と精度を実測します。

## データと素材の出典

- **FLEURS**：RK3576の実測に使ったASRコーパス、CC BY 4.0。各言語で短文5件と長文5件、ファイルはsha256確認済みです。TTSは各言語5文の自作文を使いました。デバイス横断のWhisper比較の出典はopenvoicestreamリポジトリの`docs/perf/whisper-cross-device-20260827.md`にあります。
- **生の実行記録**：openvoicestreamリポジトリの`docs/perf/rk3576-matrix-20260906.md`。上記のRK3576の数値はすべてここの記録と対応します。
- **音声モデル**：Qwen3-ASR、Matcha-TTS（icefall zh-en音声）、Kokoro v1.0、Qwen3-TTS CustomVoice、sherpa-onnxはそれぞれ上流のライセンス条件に従います。商用出荷の前に、実際に導入するモデルのライセンスを確認してください。
- コーパスはリポジトリに含まれていないため、別途入手してください。
