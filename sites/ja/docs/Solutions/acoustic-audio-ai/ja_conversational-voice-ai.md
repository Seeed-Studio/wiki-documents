---
description: エッジデバイスで割り込み可能な音声端末を構築する方法——必要なボードとマイク、割り込み・ターンテイキングの実際の動作、言語×デバイス対応表、範囲を明記したRK3576 ASR/TTS実測値
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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/solutions/conversational-voice-ai/
generated_from: sensecraft-solutions@aa522af
---

:::caution[利用上の注意]
これは**参考実装**であり、認証済み製品ではありません。音声精度を測定したのは1ボード（RK3576）と1モデル構成（Orin NX上のQwen3-ASR int4）です。言語×デバイス表の18セル中**10セルは導入可能ですが実測値がありません**。割り込みの遅延値も公開されておらず、実際の部屋とスピーカー音量で手動確認します。このページに記載のない数値を前提に計画しないでください。
:::

## このソリューションでできること

人が端末に近づいて話しかけると、端末が音声で答えます。回答の途中で話し始めると、文末まで待たずに直ちに再生を止めます。製品の中心はこの動作であり、設計で保証すべき部分は停止処理です。

サービスカウンター、展示・キオスク、ロボット音声フロントエンド、スマートホームや室内端末など、手がふさがった人が機械に話しかける場所向けです。

- オープンソース実装： [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- 構成の選択と導入： [参考設計ページ](https://www.seeed.co.jp/solutions/reference-designs/conversational_voice_ai)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>すべての構成で音声処理はローカル</h3>
                <p>Qwen3-ASRとMatcha-TTSはエッジボード上で動作します。リモートにできるのは対話モデルだけで、単一の環境変数で指定します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>割り込みにはハードウェアAECが必要</h3>
                <p>マイクはエコー除去済みのキャプチャチャンネルを提供する必要があります。再生中もキャプチャを開いたままにするため、AECがなければ端末自身のスピーカーを拾い、端末が自分で割り込みます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>言語は発話ごとではなく起動前に解決</h3>
                <p>（言語、デバイス）の組み合わせは必ず1つの音声プロファイルになり、対応できない組み合わせは品質を下げず導入を失敗させます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>1枚のボードで音声処理一式</h3>
                <p>RK3576、2026-09-06測定：オフラインエンドポイントで短い中国語発話の文字誤り率1.05%、合成はリアルタイム比0.204倍。</p>
            </div>
        </li>
    </ul>
</div>

<!-- TODO image: microphone array and speaker as installed on a service desk or kiosk — needs a field shoot -->

## 必要な機器

現場で必要なのは、マイクアレイ、スピーカー、エッジボード1台、そして対話をローカルに保つ場合はアクセラレータカードまたは4Bモデルを保持できるボードです。

**① マイクアレイ**は代替できない部品です。ハードウェアで音響エコーキャンセルを行う必要があります。

| | マイク | これを選ぶ理由 |
|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-respeaker-xvf3800-4-mic-array.jpg" alt="reSpeaker XVF3800" width="110" /> | [reSpeaker XVF3800 USB 4-Mic Array](https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html)<br/>USB array with hardware AEC, noise suppression and beamforming | 検証済みの標準構成です。2チャンネルと6チャンネルのファームウェア配置を認識し、処理済みチャンネルを自動選択します。その他のアレイはキャプチャチャンネル1にフォールバックするため、先に現場で音響確認が必要です。 |

**② スピーカー** — 同じデバイスにUSBまたはアナログで接続します。再生中にマイクをミュートする回避策は認められません。エコーだけでなく割り込みも失われるためです。

**③ 音声ホスト**は認識・合成・常駐エージェントを実行し、提供できる言語も決めます。

| | 音声ホスト | 対応言語 | 選択する条件 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>Rockchip NPU, Qwen3-ASR W8A8 + Matcha | Chinese, English | ローカル音声スタック全体を動かせる最安ボードで、公開ベンチがある唯一の構成 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Rockchip NPU, adds Kokoro RKNN for TTS | All 30 | 残り28言語、または将来RK1828カードを搭載してローカル対話を行うホスト |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Qwen3-ASR int4 + Matcha on the GPU | 全 30 言語 | 他の AI 処理とボードを共有し、GPU に余裕が必要な場合。ここではローカル 4B モデルを起動しない |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>同じボード上の Speech + Qwen3.5-4B | 全 30 言語 | 対話テキストを現場外へ出せない場合 |

reComputer R2000シリーズもCPU音声スタック（英語のみ、sherpa-onnx）を実行できます。まだコンフィギュレーターには未掲載のため購入プロファイルはありません。設計上中国語を拒否し、CPUのみのASRとTTSは4コアを共有します。

**④ RK構成で完全ローカル対話を行う場合**、RK3588ホストに接続したRK1828 / RM182X PCIe NPUカードでQwen3-4Bを実行します。独立した12 V電源、ホストドライバー、デバイスノードが必要で、一度に常駐できる大きなモデルは1つだけです。

さらに初回起動にはインターネットと空きディスク（Orin NXは少なくとも25 GB）、導入ツールからボードへ到達できるネットワークが必要です。

## 現場への導入

作業は2つです。音響環境を整え、導入ウィザードを実行します。

### 1. マイクとスピーカーの配置

:::tip[AECチャンネルが成立条件]
後続の割り込み・ターン検出・再生中にミュートしない判断はすべて、キャプチャチャンネルからスピーカー出力がハードウェアで除去済みであることを前提にします。AECのないマイクは誤割り込みやエコーループを起こし、ソフトウェア設定では復旧できません。
:::

- 現場で代替品を測定していない限りreSpeaker XVF3800を使います。ファームウェアのチャンネル配置は自動検出し、未知のアレイはチャンネル1になります。
- 受入試験ではスピーカーを通常の室内音量にします。低音量で試験した端末は、モデルと無関係な音響要因により運用音量で失敗することがあります。
- reSpeakerは導入前に接続しても後からホットプラグしても構いません。エージェントは安定したUSB製品識別子で物理キャプチャデバイスを選択し、HDMI/DPの疑似入力を無視し、コンテナ再起動なしで抜き差しから復旧します。

### 2. ソフトウェアの導入

導入はSenseCraft SolutionアプリからSSH経由でボードに対して実行します（JetPack 6.2のJetson Orin上にいる場合はローカル実行も可能です）。機器ごとの手順は導入ガイドにあり、概要は4ステップです。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/conversational_voice_ai" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んで導入 🖱️</font></span></strong>
    </a>
</div><br />

1. **プリセットを選択** — クラウド/OpenAI互換または完全ローカル。現場外へデータが出るかを決める唯一の選択です。
2. **対話言語を選択** — サービス開始前に導入処理が`(language, device)`を1つの音声プロファイルへ解決します。reComputer R2000シリーズの中国語など非対応の組み合わせはコード2で終了し、`docker compose up`全体を停止します。部分的には起動しません。
3. **エンドポイントと人格を入力** — クラウドプリセットの base URL、キー、モデル ID（既定値は `qwen3.5-flash` を使う北京 Qwen エンドポイント）、およびシステムプロンプトを設定する。必要に応じて **常時リスニング** から **ウェイクワード必須** に切り替え、短い中国語または英語のフレーズを入力する。オープンボキャブラリ対応の sherpa-onnx 検出器が起動時にローカルでコンパイルする。
4. **ダッシュボードで確認** — ポート18000のWebダッシュボードにlistening / thinking / speaking / barged-inが表示されます。

<!-- TODO image: 4 つのダッシュボード状態と 1 回の割り込みの画面録画 — 導入済みデバイスでの撮影が必要 -->

 受入確認は実際の部屋と音量で3ターン行い、各回答開始から0.5–1秒後に割り込みます。元の回答が直ちに止まり、割り込み発話が失われないことを確認します。

所要時間はクラウドプリセットで約30分です。完全ローカルは初回起動でモデルアーティファクトをダウンロードするため長くなります。一度オンライン起動に成功すると、イメージとアーティファクトがキャッシュされ、端末はオフラインで動作します。

## 自社システムとの接続

**統合ポイントはメッセージバスではなくLLMエンドポイントです。**エージェントはストリーミング対応のOpenAI互換Chat Completions APIを呼び、`LLM_BASE_URL`に文書RAG、ツール呼び出し対応エージェント、ロボット命令層、注文・チケット基盤など自社サービスを指定します。音声層は変わりません。

- **ホスト型モデルを使う** — デフォルトを使うか、base URL・キー・モデルIDを置き換えます。ストリーミングChat Completions対応だけが必要です。
- **自社サービスを使う** — 同じインターフェースを実装します。エージェントは文字起こしをユーザーターンとして送り、返答を合成へストリーミングするため、サービスの生成完了前に最初の文の再生が始まります。
- **音声層を直接読む** — 付属エージェント以外のものを構築する場合、双方向WebSocketと以下のオフラインエンドポイントを直接利用できます。

### ポートとエンドポイント一覧

すべてのサービスはホストネットワークで待ち受けるため、`<host>`は音声ホスト自身のアドレスです。

| エンドポイント | 対応する導入形態 | 提供する内容 |
|---|---|---|
| `ws://<host>:8621/v2v/stream` | すべてのプリセット | 双方向セッション：PCM入力、文字起こしとTTS PCM出力、割り込みが発生させる中断 |
| `POST http://<host>:8621/asr` | すべてのプリセット | オフラインのファイル全体文字起こし — VADなし、ストリーミングなし。付録の精度値はここで測定 |
| `POST http://<host>:8621/tts` | すべてのプリセット | 合成。レスポンスにリアルタイム係数を示す`x-rtf`ヘッダー |
| `GET http://<host>:8621/health` | すべてのプリセット | 準備状態。Composeのヘルスチェックで使用 |
| `http://<host>:18000` | すべてのプリセット | Webダッシュボード：ターン状態と各ターンの文字起こし |
| `http://<host>:1828/v1`, `/health` | RK3588 + RK1828 local preset | デバイス上のQwen3-4B向けOpenAI互換Chat Completions |
| `http://<host>:8000/v1`, `/health` | Orin NX local preset | デバイス上のQwen3.5-4B向けOpenAI互換Chat Completions |
| `LLM_BASE_URL` (outbound) | cloud preset | 任意のOpenAI互換エンドポイント |

2つのローカル経路はクラウド経路と同じインターフェースを公開するため、切替時に変えるのは1つの変数だけです。`LLM_BASE_URL`を外部へ向けない限り、データ経路にブローカーやクラウド部品はありません。

## エンジニア向け：実装詳細

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/openvoicestream" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>openvoicestream</font></span></strong>
    </a>
</div><br />

### 音声：1つのプロトコル、4つのランタイム

双方向プロトコル、エージェント状態機械、プロファイル解決器はすべてのボードで同一です。異なるのはASRとTTSを実行するバックエンドです。

| 音声ホスト | ASRバックエンド / モデル | TTSバックエンド / モデル | 解決済みプロファイル |
|---|---|---|---|
| RK3576 | `rk.asr` — Qwen3-ASR、RKNN encoder + RKLLM decoder、W8A8 | `rk.tts` — matcha-icefall-zh-en、ORT acoustic + RKNN Vocos | `rk3576-default` |
| RK3588 (zh / en) | `rk.asr` — 上記と同じ | `rk.tts` — matcha-icefall-zh-en | `rk3588-default` |
| RK3588 (other 28) | `rk.asr` — 上記と同じ | `rk.tts` — Kokoro v1.0 hybrid、RKNN INT8 decoder-front + CPU ONNX prefix/tail | `rk3588-kokoro-rknn` |
| Orin Nano 8GB / Orin NX 16GB (zh / en) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B、int4 | `jetson.matcha_trt` — matcha-icefall-zh-en、bf16/fp16 Vocos | `jetson-edgellm-v091-matcha` |
| Orin NX 16GB (other 28) | `jetson.trt_edge_llm` — Qwen3-ASR 0.6B、int4 | `jetson.trt_edge_llm` — Qwen3-TTS CustomVoice、int4 | `jetson-edgellm-v091-customvoice` |
| reComputer R2000 series (en) | `cpu.sherpa_asr` — sherpa-onnx ストリーミング zh-en、int8 CPU | `cpu.sherpa` — sherpa-onnx CPU 音声、int8 | `rpi5-default` |

移植を計画する前に知っておくべき制約が 2 つある。完全ローカルの Orin NX プリセットは **TensorRT-Edge-LLM v0.9.1** イメージを使い、エンジン系列はクラウド LLM の Orin NX プリセットとは別である。言語を切り替えても同じ系列内に収まるよう、マトリクスには固有の device id を持たせている。別の TensorRT/JetPack バージョンで構築したエンジンはロードせず、由来チェックに失敗する。RK 側では初回起動時にモデルアーティファクトを取得し（`RK1828_ARTIFACT_AUTO_DOWNLOAD=1`）、ボード上には一度に 1 つの大きなモデルを常駐させる。

### 言語×デバイス表と非対応の理由

`profile-init`は他のサービスより先に`network_mode: none`で実行され、`language_device.yaml`を読み、解決済みプロファイル1つと小さなenvオーバーレイを書き出します。結果は3種類です。

| `status` | 意味 | 解決器の動作 |
|---|---|---|
| `measured` | プロファイルが指定するASR+TTSの組み合わせに`evidence[]`内のデバイス実測値がある | 継続 |
| `unsupported` | この組み合わせを提供するプロファイルがない | **exit 2**、サービス開始前に`docker compose up`を停止 |

言語カタログは RK ランタイムの 30 言語セット（`qwen3asr_rk/python/qwen3asr/config.py:3-9`）である。利用可能な 2 つのリストのうち意図的に狭い方を採用している。Qwen3-ASR 上流は 52 言語、Whisper は 99 言語を掲げているが、1 つのリストですべてのボードをカバーし、どのセルからも言語を失わないようにするためである。

3 つの `unsupported` セルは、reComputer R2000 series の中国語、および RK3576 と reComputer R2000 series の other-28 グループである。中国語を拒否するのは数値に基づく設計判断である。測定したすべてのボードで Whisper の中国語上限は CER 35–56% なので、黙ってフォールバックすると動作しているように見えて実用にならない導入になる。RK3576 が other 28 を拒否するのは、利用できる TTS 音声が Matcha zh-en だけだからである。ボードはそれらの言語を文字起こしできても、回答を発話できない。

対象ベンチが整ったら読み直すべき差分がある。多言語仕様は Orin NX / RK3576 / RK3588 の「English and other」列に Whisper + Kokoro を記載しているが、`configs/profiles/` のプロファイルには Whisper ASR バックエンドと TTS バックエンドを組み合わせたものがない。そこにある Whisper プロファイルはすべて ASR 専用である。その組み合わせが構築されるまでは、該当レーンを既存の統合プロファイルへ振り分け、各セルに意図した組み合わせを `planned_alternative` として記録する。

### 割り込み：実際に返答を止めるもの

割り込みは4つの条件の連鎖で、最後の条件が特に間違えやすい。

| 段階 | 条件 | 設定値 |
|---|---|---|
| 再生中のキャプチャ | TTS 再生中もマイク側の VAD を実行 | `client_vad_backend` `silero` |
| 音声検出 | Silero の音声確率とネイティブしきい値 | `client_vad_threshold` `null`（Silero 固有の 0.5。意図的に RMS 値ではない） |
| 有効と数える最小発話 | 一過性のノイズを除外 | `client_vad_speech_min_ms` `200` |
| クライアント側の発話終了 | サーバーを待たず、クライアントが EOS を駆動 | `client_vad_silence_ms` `600`、`client_vad_drive_eos` `true` |
| 割り込みの許可条件 | 返答が実際に開始済みで、割り込みが 1 音節を超えること | `barge_in_enabled` `true`、`barge_in_min_speaking_ms` `500`、`barge_in_min_chars` `2` |
| **再生の末尾** | **ローカルバッファが聴感上空になるまでエージェントを SPEAKING に保つ** | `playback_drain_enabled` `true`、`playback_drain_timeout_s` `15.0` |

**再生ドレインが必要なゲートです。**音声サービスはPCM送信を終えるとすぐ`TTSDone`を通知しますが、ローカルのPortAudioバッファはまだ聴こえる状態で排出中です。ドレインがないと、その末尾に発話した内容が割り込みではなく新しいアイドル状態のターンに分類され、古い返答が再生され続けます。無効にしても割り込み機能が見かけ上消えるのではなく、ユーザーが実際に割り込む時間帯で失敗します。

見た目だけに思えて実際にはそうでない設定がさらに 2 つある。`client_vad_backend` は明示的に `silero` に固定し、壊れたイメージやカスタムイメージが、発話を断片化して自己割り込みを起こし得る固定 RMS エネルギー VAD に黙ってフォールバックせず、目に見える形で失敗するようにする。`asr_language` は `auto` のままにせずオペレーターの選択値に固定する。この値がセッションの `asr_language` になり、RK と Jetson の Qwen3-ASR バックエンドが持つ唯一の言語設定だからである。

### ターンテイキング：ライブ文字起こしが音声より短い理由

**サーバー側**のターン終了は、上記のクライアント VAD とは別である。silero と**400 ms の無音**、`QWEN3_ASR_FRONTEND_EOU_MIN_AUDIO_S=2.5` を使うため、セッションは最初に検出した自然な間で確定する。発話途中に間を含む長い文は、最初の節の後で応答される。これは対話遅延に合わせたターンテイキング方針であり、認識失敗ではない。これを反証する試験は付録に記載している。

### オプションのウェイクワード

**Wake word required**を選ぶと、イメージを再構築せず`pipeline_mode`が`always_on`からウェイクワードソースへ切り替わります。オープンボキャブラリ対応sherpa-onnx KWSアセットはすでに含まれています。

| Setting | Value |
|---|---|
| `WAKEWORD_BACKEND` | `sherpa_onnx` |
| `WAKEWORD_PHRASE` | any short Chinese or English phrase (default `你好小智`) |
| `WAKEWORD_THRESHOLD` | `0.25` |
| `WAKEWORD_MIC_SKIP_MS` | `120` |
| 確認 | 検出成功後の短い 880 Hz トーン |

フレーズは起動時にローカルでコンパイルされ、感度設定とともにエージェントの状態ボリュームへ保持されます。既存のハンズフリー導入に影響しないよう、デフォルトは常時リスニングです。

## 付録：実測データ {#measured-detail}

この節は数値を確認したい読者向けです。読み飛ばしても導入には影響しません。以下は記載したハードウェアでの1回の測定で、**独立再現されておらず**、いかなる認証でもありません。

### 測定済みの項目と未測定の項目

| 項目 | 状態 |
|---|---|
| 言語×デバイス表、18セル | **5 測定済み**、10 は導入可能だが未定量、3 は拒否 |
| RK3576、中国語と英語、ASR + TTS + ライブセッション | 2026-09-06 測定 |
| Orin NX, Qwen3-ASR 0.6B int4, Chinese | 2026-07-04測定 — ゴールデンセットでCER 0、ストリーミングとオフライン |
| Conversation latency including an LLM | 未収集 — 以下のライブ値はモデルを経路に含まないエコーモード |

「導入可能だが未定量」とは、構成要素にはデバイス上の数値があるが、組み合わせ全体の数値はないという意味である。該当セルが測定済みセルと同じ性能だという主張ではない。

### RK3576の詳細

**環境。** reComputer RK3576シリーズ、Rockchip BSP付きDebian 12。 openvoicestreamのコミット `a0b043a6` (branch `feature/language-device-resolver`）、イメージ `openvoicestream:rk-20260903.10` (`sha256:fdc480da3061…`). ベンチスクリプトと音声コンテナは同じマシン上で`127.0.0.1:8621`経由で実行し、数値にネットワーク往復は含みません。 解決済みプロファイル：`rk3576-default`.

**オフラインエンドポイントのASR** (`POST /asr`, ファイル全体、VADなし・ストリーミングなし — デコーダー性能の測定):

| 言語 | セット | n | 誤り |
|---|---|---:|---:|
| 中国語 | 短い発話 | 5 | 1.05% CER |
| 中国語 | 長文、10–20秒 | 5 | 9.62% CER |
| 英語 | 短い発話 | 5 | 3.65% WER / 1.11% CER |
| 英語 | 長文、10–20秒 | 5 | 6.99% WER / 4.16% CER |

英語の長文は全ファイルで複数節を含む全文を復元しました。残る誤りは実際の認識ミス（`"3:2"`を`"three to two"`と文字起こし）であり、切り詰めではありません。

**ライブセッションのASR** (`/v2v/stream`, 出荷時デフォルト `ASR_MAX_NEW_TOKENS=64`, `ASR_FINAL_STOP_ON_PUNCT=1`）、全文の参照テキストと比較:

| 言語 | セット | n | 誤り |
|---|---|---:|---:|
| 中国語 | 短い発話 | 5 | 29.09% CER |
| 中国語 | 長文、10–20秒 | 5 | 84.06% CER |
| 英語 | 短い発話 | 5 | 16.95% WER / 10.16% CER |
| 英語 | 長文、10–20秒 | 5 | 63.38% WER / 62.58% CER |

**デコーダーが切り詰めているという仮説は検証され、否定されました。** `ASR_MAX_NEW_TOKENS=256`と`ASR_FINAL_STOP_ON_PUNCT=0`で再実行しました（アーティファクトセットのランタイム契約チェックによるコンテナのクラッシュループを止めるため、追加で`RK_ARTIFACT_CONTRACT_STRICT=0`が必要でした）。両言語で**バイト単位で同一の文字起こし**となり、たとえば`en_long_03`は43メッセージ・7.5秒後も「To prevent possible infection of others.」で終了しました。オーバーライドが適用されたことはサーバー起動ログで確認しました。ターンを早く終了させるのはデコーダーのトークン予算や句読点停止フラグではなく、VADエンドポイント（silero、無音400 ms、最小音声2.5秒）です。発話途中の間を含む対話ターンを維持するようエンドポイントを緩和する作業は今後の課題で、まだ実施していません。

**TTS**（`POST /tts`、サーバーから直接取得した`x-rtf`レスポンスヘッダー、Matcha ORT音響モデル＋RKNN Vocos、icefall zh-en音声）：

| 言語 | n | リアルタイム係数 | 範囲 |
|---|---:|---:|---|
| 中国語 | 5 | 0.204 | 0.190–0.216 |
| 英語 | 5 | 0.194 | 0.158–0.216 |

英語の各文は2.5–4.3秒の音声でした。

**ライブセッションの遅延** — エコーモード、LLMなし：

| 測定項目 | 言語 | n | p50 | 平均 | 最小–最大 |
|---|---|---:|---:|---:|---|
| 発話終了 → ASR確定（`stop_to_final`） | 中国語 | 10 | 1771 ms | 1732 ms | 1284–2049 ms |
| 発話終了 → 最初のTTSフレーム（`stop_to_tts_audio`） | 中国語 | 5 | 3782 ms | 3640 ms | 3061–3892 ms |
| ASR確定 → 最初のTTSフレーム（`final_to_tts_audio`） | 英語 | 5 | 1127 ms | 1126 ms | 1021–1232 ms |

**2026-09-20 の再測定により置き換え。** アイドル状態の端末、イメージ `rk-20260913.3` で `stop_to_tts_audio` を再測定したところ 1575/1624/1596/1580 ms（約 1.6 s、n=4）でした。上表の 3782 ms は 2 発話目がタイムアウトした状態での集計値である可能性が高いです。同じ実行の `stop_to_final` は約 5.1 s で、本来それより後に出るはずの音声応答より大きいため、この値も上表の 1771 ms も引用できません。詳細は openvoicestream の `docs/known-issues/rk3576-v2v-multi-utterance-timeout.md` を参照してください。


**報告上の注意点はそのまま記載します。**英語の`/v2v/stream`実行では毎回、`stop_to_final`と`stop_to_tts_audio`がnullでしたが、同じ実行の`final_to_tts_*`は正常に埋まりました。そのため英語ASR遅延行（`eos_to_final`平均2837 ms、n=5）は統合V2V実行ではなく、別の`asr_stream_ws_bench.py`実行から取得しています。往復ではなく英語の`final_to_tts_audio`を報告しています。英語音声のVADエンドポイント差なのか、`--multi 2`に対するスクリプトのインデックス問題なのかは未解決です。完全な返答（最終フレーム / `tts_done`）はどちらの言語でも取得していません。

**コーパス。**ASRには新規のCommon Voiceダウンロードではなく、既存のFLEURSコーパス（CC BY 4.0、sha256検証済み）を再利用し、各言語で短文5件＋長文5件を使いました。TTSには各言語で自作文5件を使いました。 V2V実行では、セッションが早期終了する問題を回避するため、1つの3.84秒クリップを`--multi 2`で繰り返しました。

### 性能が低下する条件

- **ボードよりマイクの影響が大きい。** 上記の数値はすべてハードウェアAECキャプチャチャンネルを前提とします。AECのないマイクは誤割り込みやエコーループを起こし、設定値では補償できません。
- **ライブ対話はオフラインエンドポイントと同じではない。** 同じ音声で9.62%と84.06% CERに差が出た理由はターンテイキング方針だけです。発話途中に間がある場合、エンドポイントを調整するまでは最初の節だけで回答されます。
- **受入時はスピーカー音量が重要。** 低音量で検証した端末は、音響上の理由だけで運用音量では失敗することがあります。
- **公開値の対象はRK3576ボードとOrin NX Qwen3-ASR int4構成です。** RK3588、Orin Nano、reComputer R2000シリーズ、および中国語・英語以外の全セルは導入可能です。遅延や精度の目標を決める前に自分で測定してください。

## データと素材の出典

- **FLEURS** — RK3576ベンチのASRコーパス、CC BY 4.0。 ファイルはsha256検証済みで、デバイス間Whisper比較の出典は `docs/perf/whisper-cross-device-20260827.md`（openvoicestreamリポジトリ）に記載されています。
- **実行の生記録** — `docs/perf/rk3576-matrix-20260906.md`（openvoicestreamリポジトリ）は解決器の全出力、ファイルごとのASR JSON行、TTSヘッダーダンプ、コンテナの変更前後の状態を保持しています。このページの数値はすべてそこにある行へ追跡できます。
- **音声モデル** — Qwen3-ASR、Matcha-TTS（icefall zh-en音声）、Kokoro v1.0、Qwen3-TTS CustomVoice、sherpa-onnxの各モデルは上流のライセンス条件に従います。商用製品を出荷する前に導入モデルのライセンスを確認してください。ランタイムは文書化されたインターフェース内でモデルに依存しません。
- コーパスはリポジトリに含まれず、別途取得する必要があります。
