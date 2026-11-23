---
description: 'RTC SDK を使って reSpeaker Clip から BLE 経由でライブ Opus オーディオをストリーミングする方法を学びます。FFT デモを実行し、セッション確立を理解し、最小限のレシーバーを書き、リアルタイム音声をホスト側でデコードします。'
title: reSpeaker Clip RTC SDK でリアルタイム音声ストリーミングを構築する
keywords:
  - reSpeaker clip
  - rtc ストリーミング
  - リアルタイム音声
  - ライブ音声ストリーミング
  - opus
  - ble
  - fft スペクトラム
  - python sdk
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_rtc_streaming
sku: 100020126
last_update:
  date: 11/20/2026
  author: Ray
createdAt: '2026-08-24'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_rtc_streaming/
---

# reSpeaker Clip RTC SDK でリアルタイム音声ストリーミングを構築する

このチュートリアルでは、reSpeaker Clip から録音して後でダウンロードするのではなく、「録音されている最中の」ライブ音声を受信する方法を説明します。リアルタイム FFT スペクトラムのデモを実行し、RTC セッションがどのように確立されるかを理解し、自分で最小限のストリーミングアプリケーションを書き、ホスト側で音声データが実際にどのような形になるのかを学びます。

> **ここでの RTC は reSpeaker Clip のリアルタイム音声ストリーミングを指し、WebRTC ではありません。** ブラウザも SDP も ICE もなく、あるのは Opus フレームを生成する Clip と、それを BLE 経由で消費する Python アプリケーションだけです。

## 1. はじめに

### 1.1 reSpeaker Clip における RTC ストリーミングとは？

通常の録音では、音声は SD カードに書き込まれ、その後でダウンロードします。RTC ストリーミングでは SD カードを完全にスキップし、エンコードされた音声が生成されるそばからホストへ送信されます。

```text
Recording:
Mic -> DSP -> Opus -> SD Card -> Download

RTC:
Mic -> DSP -> Opus -> BLE -> Host Application
```

「今」が重要になる場面では、この違いが効いてきます。ライブスペクトラム表示、ストリーミング ASR、音声活動検出、ウェイクワードパイプライン、あるいはユーザーがまだ話している最中に反応しなければならない音声アシスタントなどです。

### 1.2 学べること

このチュートリアルを終えると、次のことができるようになります：

- Python SDK を使って reSpeaker Clip に接続する
- RTC セッションを作成し、ライブの Opus パケットを受信する
- RTC ストリームのライフサイクル全体を説明する
- FFT デモを実行し、その出力を読み解く
- RTC SDK の上に自分のリアルタイムアプリケーションを構築する

## 2. RTC ストリーミングの仕組み

### 2.1 RTC ストリーミングのアーキテクチャ

RTC モードにおける音声経路は、マイクからあなたのアプリケーションまで一直線のパイプラインです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_streaming_architecture.png" alt="RTC streaming architecture: microphone through DSP and Opus encoder to BLE and the Python SDK" width={900} height="auto" /></p>

RTC モードでは音声はリアルタイムに生成され、SD カードには一切書き込まれません。ホストは到着と同時にそれを処理できます。録音ファイルというものが存在しないため、録音の完了を待つ処理は何もありません。

### 2.2 RTC セッションのライフサイクル

RTC ストリームは 2 段階で確立され、その後あなたが停止するまで流れ続けます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_session_lifecycle.png" alt="RTC session lifecycle sequence diagram between the Python app and reSpeaker Clip" width={900} height="auto" /></p>

この 2 つの呼び出しは、シンプルなメンタルモデルに対応しています：

```text
start_rtc()   =  start producing audio
stream_rtc()  =  start receiving audio
```

`start_rtc()` の後、デバイスはマイクのパイプラインを動かしますが、まだ何も送信しません。`stream_rtc()` の後、デバイスは `STREAM_DATA` フレームをプッシュし始めます — 1 フレームにつき 1 つの Opus パケット — そして `stop_recording()` が `STREAM_END` でセッションを終了するまで続きます。

### 2.3 なぜ RTC はセッションを使うのか？

`start_rtc()` はリアルタイム音声セッションを作成し、そのセッション ID を返します。続く `stream_rtc(session, receiver)` はデバイスに対して、「ホストは今、このセッションのライブ音声を消費したい」と伝えます。具体的には `AT+DOWNLOAD=<session>` を発行し、ファームウェアはその時点より前にキューされていたものを破棄します — RTC は「今」を届けるため、購読前に生成された音声は決して送られません。

これはファイルダウンロードとの重要な違いです。RTC セッションを、デバイス上で伸びていくファイルだと考えないでください。それはあなたが接続するライブソースであり、接続前に取り逃したものは、設計上戻ってこないのです。

## 3. RTC SDK の準備

### 3.1 必要なもの

- reSpeaker Clip 本体
- ファームウェア **v0.1.5 以降**（`AT+START=rtc` を含む最初の正式リリース。`AT+VERSION` または `clip.firmware_version()` で確認してください。Clip がそれ以前のビルドを実行している場合は、[Firmware Update Guide](/ja/respeaker_clip#firmware-update-guide) に従って更新してください）
- Python 3.10 以上
- ホスト側で動作する BLE 環境
- 公式リポジトリ [`Seeed-Studio/reSpeaker_Clip`](https://github.com/Seeed-Studio/reSpeaker_Clip) からチェックアウトした reSpeaker Clip Python SDK

### 3.2 SDK をインストールする

RTC ストリーミングは公式リリース v0.1.5 に含まれています。公式リポジトリをクローンし、そのタグをチェックアウトして、BLE と examples のエクストラ付きで SDK をインストールします：

```bash
git clone https://github.com/Seeed-Studio/reSpeaker_Clip.git
cd reSpeaker_Clip
git checkout v0.1.5

cd sdk
python -m pip install -e '.[ble,examples]'
```

タグはこのチュートリアルが対象とするリリースを固定します。`main` は同じ RTC API を追従しつつ、その後の修正を取り込みます。

このチュートリアルでは、次の 2 つのエクストラが重要です：

- `ble` は BLE トランスポート（Bleak）をインストールします
- `examples` は FFT デモに必要な依存関係（Opus デコーダーと NumPy）をインストールします

このリリースにおける RTC ライブストリーミングは BLE 専用です。Wi-Fi/UDP トランスポートではなく、BLE のファイルデータ通知で運ばれます。

## 4. RTC FFT デモを実行する

ここが実質的な入口です。まずデモを実行し、その仕組みは後から理解しましょう。

### 4.1 デモを起動する

インストール手順で移動した `sdk` ディレクトリから、デバイスアドレスを指定してサンプルを実行します：

```bash
python examples/demo_stream_fft_display.py \
  --address AA:BB:CC:DD:EE:FF \
  --duration 30
```

`--address` を省略すると、「Clip」という名前の BLE デバイスを自動的にスキャンします。`--duration` を省略すると、Ctrl-C を押すまでストリーミングを続けます：

```bash
python examples/demo_stream_fft_display.py
```

まだコードを読む前に、まずリリース済みファームウェアが本当にストリーミングしていることだけ確認したい場合は、SDK がインストールする `clip.stream` も利用できます。これは同じライブフレームを `rtc-<session>.bin` にキャプチャし、ストリームの診断情報を表示します：

```bash
clip.stream --transport ble --address AA:BB:CC:DD:EE:FF --duration 10
```

このデモは `--depth-frames` も受け付け、ジッタバッファの深さを変更できます（デフォルトは 5 フレーム。`0` でバッファリングを無効化）。

### 4.2 デモ起動時に何が起きているか

デモの実行中に Clip に向かって話しかけてみてください。ターミナルには、あなたの声に合わせて動くライブの Unicode スペクトラムが表示されます。これはホスト側で次のようなパイプラインを通して構築されています：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="FFT demo pipeline: Clip over BLE into StreamReceiver, JitterBuffer, Opus decoder, PCM, FFT and terminal spectrum" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_terminal.gif" alt="Terminal recording of the live RTC FFT spectrum demo" width={900} height="auto" /></p>

> 画面に表示されているスペクトラムは、デバイスに保存された録音からではなく、**まさに今** BLE 経由で送信されている音声に基づいています。マイクに向かって手を振ると、バーがコンマ数秒以内に反応するはずです。

### 4.3 デモ出力を読み解く

ストリームが終了すると、デモは統計情報を表示します。特に意味のあるものは次のとおりです：

```text
RTC session: 00000000082552
Streaming for 50s ...

frames received : 2503
bytes received  : 191846
seq discontin.  : 0
avg inter-frame : 20.0 ms (max 120 ms)
```

- **frames received / bytes received** — 受信した Opus パケット数と、その合計サイズ。
- **avg inter-frame** — パケット到着間隔の平均値。RTC は約 20 ms ごとに 1 つの Opus フレームを生成するため、ストリーム中は 1 秒あたりおよそ 50 パケット、平均値は 20 ms 付近になるはずです。
- **seq discontin.** — 観測されたシーケンス番号の不連続イベント数。ファームウェアは、フレームが BLE リンクに渡された後にのみシーケンス番号を進めるため、デバイス側のキューや一時停止によるドロップでは番号は消費されません。したがって、ゼロ以外の値は、直接的なパケットロス数というより、プロトコルまたはリンクの異常として扱ってください。

具体的な数値は、BLE リンクの状態やストリーミング時間によって変動します。その下には、JitterBuffer の統計（アンダーラン、追いつくためのドロップ、キュー深度の分布）とレイテンシの内訳（キュー / デコード / FFT）も表示されます。これらの意味についてはセクション 7 で説明します。

## 5. 最小限の RTC ストリーミングアプリケーションを構築する

このセクションがチュートリアルの核心です。デモが行っている RTC セッション確立処理を、本質だけにそぎ落とした形で示し、その上に自分の処理を構築できるようにします。

### 5.1 reSpeaker Clip に接続する

すべてはトランスポートとクライアントから始まります。これは [Basic SDK Guide](/ja/respeaker_clip_basic_sdk_guide) とまったく同じです：

```python
import asyncio

from clip import BleTransport, ClipClient


async def main() -> None:
    transport = BleTransport(name="Clip")   # or BleTransport(address="AA:BB:CC:DD:EE:FF")

    async with ClipClient(transport) as clip:
        ...  # the rest of this tutorial goes here


asyncio.run(main())
```

`BleTransport` は BLE 通信を管理し、その上に `ClipClient` が高レベルな Clip API を提供します。

### 5.2 StreamReceiver を作成する

レシーバーは、受信したストリームフレームをコールバック呼び出しに変換します。最も単純なコンシューマーは、各パケットの長さを表示するだけです：

```python
from clip.stream import StreamReceiver


def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))


receiver = StreamReceiver(on_frame=on_frame)
```

コールバックの 1 回の呼び出しが、1 つの Opus パケットに対応します。`on_frame` は受信パス上でインライン実行されるため、ブロッキングしないようにしてください。バイト列はキューやスレッド、別タスクに渡し、重い処理は別の場所で行いましょう。

### 5.3 RTC セッションを開始する

```python
session = await clip.start_rtc()
print("RTC session:", session)
```

これは `AT+START=rtc` を送信します。デバイスは RTC 音声パイプラインを開始し、セッション ID を返します。この時点でデバイスは音声を生成しているだけで、ホストはまだ購読しておらず、あなたの側には何も流れてきません。

### 5.4 RTC 音声の受信を開始する

```python
token = await clip.stream_rtc(session, receiver)
await receiver.wait_start(timeout=10)
```

`stream_rtc()` は、レシーバーをトランスポートのフレームパスに接続し、`AT+DOWNLOAD=<session>` を発行します。これ以降、デバイスは `STREAM_START`、続いて `STREAM_DATA` フレームを `receiver` にプッシュします。`wait_start()` は `STREAM_START` が到着した時点で戻ります — それが、ライブデータチャネルが真に確立された瞬間です。

ファームウェアは `STREAM_START` を送る前に、厳密な BLE 接続パラメータが整うのを待ちます（最大で約 5 秒）。したがって、ここで少し待たされるのは正常であり、`timeout=10` はそのための余裕を持たせています。

返される `token` はトランスポートのフレームハンドラースロットに対するリースであり、ストリームが終了したときにそれを解放します（セクション 5.6）。

### 5.5 Opus パケットの受信

コールバックに戻りましょう：

```python
def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))
```

ここがアプリケーションのエントリーポイントです。FFT、VAD、ストリーミング ASR、WebSocket リレーなど、あなたが構築するものはすべてこのバイト列から始まります。次のセクションでは、それらが正確に何を含んでいるかを説明します。

### 5.6 RTC ストリームの停止

停止処理は録音 API を反映しています：`stop_recording()` が `AT+STOP` を送信し、デバイスは `STREAM_END` で応答し、あなたはハンドラーリースを解放します：

```python
try:
    await clip.stop_recording()
    await receiver.wait_end(timeout=5)
finally:
    transport.detach_file_frame_handler(token)
```

`finally` 内でリースを解放することで、ストリームが失敗した場合やスクリプトが中断された場合でも、トランスポートのフレームハンドラースロットをクリーンな状態に保ちます。

組み立て済みの、完全な最小アプリケーションは次のとおりです：

```python
import asyncio

from clip import BleTransport, ClipClient
from clip.stream import StreamReceiver


async def main() -> None:
    transport = BleTransport(name="Clip")
    async with ClipClient(transport) as clip:
        receiver = StreamReceiver(on_frame=lambda p: print(len(p)))

        session = await clip.start_rtc()
        token = await clip.stream_rtc(session, receiver)
        try:
            await receiver.wait_start(timeout=10)

            await asyncio.sleep(10)      # consume the live stream for 10 s

            await clip.stop_recording()
            await receiver.wait_end(timeout=5)
        finally:
            transport.detach_file_frame_handler(token)

        print("frames:", receiver.frames_received, "bytes:", receiver.bytes_received)


asyncio.run(main())
```

したがって、ライフサイクル全体は次のようになります：

```text
BLE connect -> start_rtc() -> stream_rtc() -> STREAM_START
-> STREAM_DATA x N -> stop_recording() -> STREAM_END -> detach handler
```

## 6. RTC オーディオデータの理解

### 6.1 StreamReceiver は何を返すか？

コールバックはプレーンな `bytes` を受け取ります — 呼び出しごとに 1 つの Opus エンコード済みオーディオパケットです。WAV でも PCM でも生の BLE 通知でもありません。SDK はすでに RTC トランスポートフレーム（`STREAM_START` / `STREAM_DATA` / `STREAM_END`）をパースしており、ペイロードだけを渡します。

```text
BLE STREAM_DATA -> SDK parses the frame -> StreamReceiver -> Opus payload (bytes)
```

レシーバーは、いつでも読み取ることができるライブ統計も保持します：`frames_received`、`bytes_received`、`sequence_gaps`、`avg_inter_frame_ms`、`max_inter_frame_ms`、`first_frame_delay_s`。`STREAM_END` の後は、`receiver.end_reason` がストリームが終了した理由（停止、タイムアウト、切断）を示します。

1 つのレシーバーから複数のコンシューマーに供給することもできます：`receiver.add_sink(sink)` は `on_frame` の前に実行される追加の生フレームタップを登録します。SDK には 2 つの既製シンクが同梱されています — `StreamCapture` は同じ Opus パケットを長さプレフィックス付きの `.bin` ログに書き込み、`StreamConsumer` は制限付きチャンクとスタックを非同期コールバックにプッシュして転送やストリーミング ASR を行います。セクション 4.1 の `clip.stream` コマンドは `StreamCapture` の上に構築されています。

### 6.2 RTC オーディオフォーマット

現在の RTC ストリームは次のとおりです：

```text
Codec: Opus
Sample rate: 16 kHz
Channels: mono
Frame duration: ~20 ms (320 samples)
```

したがって、約 20 ms ごとに 1 フレーム、つまりストリーム実行中は 1 秒あたり約 50 フレームとなります — これはデモの `avg inter-frame` 出力で見たのと同じ値です。

### 6.3 Opus から PCM へ

ペイロードは圧縮された Opus なので、それをサンプルとして再解釈してはいけません：

```python
# WRONG — the packet is compressed Opus, not samples
import numpy as np
samples = np.frombuffer(opus_packet, dtype=np.int16)
```

まずデコードし、その結果を PCM として扱います：

```python
import opuslib

decoder = opuslib.Decoder(16000, 1)          # 16 kHz, mono
pcm = decoder.decode(opus_packet, 320)       # 320 samples = 20 ms
samples = np.frombuffer(pcm, dtype=np.int16)
```

このデコードステップだけが、あなたのコールバックと実際のオーディオサンプルとの間に存在する唯一のものです — そしてそれこそが、あなたが今書いた最小アプリケーションの上に FFT デモが追加しているものです。

## 7. demo_stream_fft_display.py の理解

このセクションでは、デモをこれまで学んだ内容に対応付けます。そうすることで、デモは「魔法のスクリプト」ではなく「自分の最小プログラムにデコーダーと FFT を足したもの」になります。

### 7.1 デモの構造

デモは、`on_frame` に処理チェーンを接続した最小アプリケーションの構造になっています：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="FFT デモのパイプラインを SDK コンポーネントにマッピングした図" width={900} height="auto" /></p>

`on_frame` は各 Opus パケットを `LiveSpectrum` オブジェクトに渡します。バックグラウンドスレッドが 1 フレームあたり 20 ms のペースで消費を行い、デコードし、FFT を実行し、ターミナルの 1 行を再描画します。

### 7.2 デモにおける RTC の確立

デモの `run()` 関数は、セクション 5 のシーケンスをそのまま実行します：

```text
BleTransport / ClipClient          (5.1)
receiver = StreamReceiver(on_frame)  (5.2)
session = await clip.start_rtc()     (5.3)
token = await clip.stream_rtc(...)   (5.4)
await receiver.wait_start(timeout=10)
... frames flow ...
await clip.stop_recording()          (5.6)
await receiver.wait_end(timeout=5)
transport.detach_file_frame_handler(token)
```

セクション 5 を理解していれば、すでにデモの中核は理解できています — それ以外はすべてオーディオ処理です。

### 7.3 RTC オーディオのデコード

デモはセクション 6.3 とまったく同じようにデコードします：`opuslib.Decoder(16000, 1)` が各パケットを 320 個の int16 サンプルに変換します。Opus コーデックが内部的にどのように動作するかを知る必要はありません。重要な境界は「コールバックは Opus バイト列を渡し、デコーダーは PCM サンプルを返す」という点だけです。

### 7.4 デモがジッタバッファーを使う理由

BLE の配送は完全に均一な間隔では到着しません。次のようなフレーム間ギャップが見られるかもしれません：

```text
20 ms, 20 ms, 35 ms, 5 ms, 20 ms, ...
```

SDK の `clip.jitter.JitterBuffer` はこれを滑らかな一定ペースの消費リズムに変換します：

```text
BLE packets -> JitterBuffer -> steady 20 ms audio frames
```

デモは `JitterBuffer(depth_frames)`（デフォルト 5 フレーム、つまり最初に 100 ms 分を蓄える）を作成し、`on_frame` から到着するすべてのパケットを `put()` し、処理スレッドから 20 ms ごとのティックで 1 フレームずつ `get()` します。アンダーラン時には `get()` は `None` を返し（無音の間は FFT は描画されません）、ホスト側が処理に追いつかない場合は、バッファーが最も古いフレームをドロップしてライブエッジに追いつこうとします。ジッタバッファーとはそれだけのものです：不均一なプロデューサーと一定ペースのコンシューマーの間にある小さなショックアブソーバーです。

### 7.5 PCM から FFT へ

デコードされた各 20 ms フレームは窓関数（Hann）をかけられ、`np.fft.rfft` で変換され、64 個の表示バンドにビン分けされ、Unicode ブロック文字として描画されます。したがってターミナルのスペクトラムは、パイプライン全体が端から端まで動作していることの証拠です：

```text
Mic -> Clip -> BLE -> SDK -> Opus decode -> PCM -> FFT -> your eyes
```

バーがあなたの発話に合わせて動くとき、そのチェーンのあらゆる段階 — セクション 5 で自分で構築した RTC の確立も含めて — が動作していることになります。

## 8. 次のステップ

RTC SDK は、アプリケーションにライブで、デコードするだけで使えるオーディオを渡します。その先はすべてあなた次第です：

```text
RTC SDK -> Opus decode -> PCM
    ├── FFT spectrum (this tutorial)
    ├── VAD / wake word
    ├── Streaming ASR
    ├── WebSocket relay
    └── Voice assistant
```

デバイス制御、録音、ファイルダウンロードについては [reSpeaker Clip Basic SDK Guide](/ja/respeaker_clip_basic_sdk_guide) を、製品のセットアップについては [Getting Started](/ja/respeaker_clip) を参照してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
