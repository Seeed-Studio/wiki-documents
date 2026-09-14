---
description: "RTC SDK を使って reSpeaker Clip から BLE 経由でライブ Opus オーディオをストリーミングする方法を学びます。FFT デモを実行し、セッション確立を理解し、最小限のレシーバーを書き、リアルタイムオーディオをホスト側でデコードします。"
title: reSpeaker Clip RTC SDK でリアルタイムオーディオストリーミングを構築する
keywords:
  - reSpeaker clip
  - rtc streaming
  - real-time audio
  - live audio streaming
  - opus
  - ble
  - fft spectrum
  - python sdk
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_rtc_streaming
sku: 100020126
last_update:
  date: 08/24/2026
  author: Ray
createdAt: '2026-08-24'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_rtc_streaming/
---

# reSpeaker Clip RTC SDK でリアルタイムオーディオストリーミングを構築する

このチュートリアルでは、reSpeaker Clip から録音して後でダウンロードするのではなく、キャプチャ中のライブオーディオを受信する方法を学びます。リアルタイム FFT スペクトラムデモを実行し、RTC セッションがどのように確立されるかを理解し、自分で最小限のストリーミングアプリケーションを書き、ホスト側でオーディオデータが実際にどのような形をしているかを学びます。

> **ここでの RTC は WebRTC ではなく、reSpeaker Clip のリアルタイムオーディオストリーミングを指します。** ブラウザも SDP も ICE もありません — Opus フレームを生成する Clip と、それを BLE 経由で消費する Python アプリケーションだけです。

## 1. はじめに

### 1.1 reSpeaker Clip における RTC ストリーミングとは？

通常の録音では、オーディオは SD カードに書き込まれ、その後でダウンロードします。RTC ストリーミングでは SD カードを完全にスキップし、エンコードされたオーディオが生成されるそばからホストへ送信されます。

```text
Recording:
Mic -> DSP -> Opus -> SD Card -> Download

RTC:
Mic -> DSP -> Opus -> BLE -> Host Application
```

この違いが効いてくるのは、「今」が重要なときです。ライブスペクトラム表示、ストリーミング ASR、音声活動検出、ウェイクワードパイプライン、あるいはユーザーがまだ話している最中に反応しなければならない音声アシスタントなどです。

### 1.2 学べること

このチュートリアルを終えると、次のことができるようになります：

- Python SDK を使って reSpeaker Clip に接続する；
- RTC セッションを作成し、ライブの Opus パケットを受信する；
- RTC ストリームのライフサイクル全体を説明する；
- FFT デモを実行し、その出力を読み解く；
- RTC SDK の上に自分のリアルタイムアプリケーションを構築する。

## 2. RTC ストリーミングの仕組み

### 2.1 RTC ストリーミングのアーキテクチャ

RTC モードにおけるオーディオパスは、マイクからあなたのアプリケーションまでの一直線のパイプラインです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_streaming_architecture.png" alt="RTC ストリーミングアーキテクチャ：マイクから DSP と Opus エンコーダーを経由して BLE と Python SDK へ" width={900} height="auto" /></p>

RTC モードではオーディオはリアルタイムに生成され、SD カードには一切触れず、ホストは到着と同時に処理できます。録音ファイルが存在しないため、録音の完了を待つものは何もありません。

### 2.2 RTC セッションのライフサイクル

RTC ストリームは 2 段階で確立され、その後あなたが停止するまで流れ続けます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_session_lifecycle.png" alt="Python アプリと reSpeaker Clip 間の RTC セッションライフサイクルシーケンス図" width={900} height="auto" /></p>

この 2 つの呼び出しは、シンプルなメンタルモデルに対応しています：

```text
start_rtc()   =  start producing audio
stream_rtc()  =  start receiving audio
```

`start_rtc()` の後、デバイスはマイクパイプラインを動かしますが、まだ何も送信しません。`stream_rtc()` の後、デバイスは `STREAM_DATA` フレームをプッシュし始めます — 1 フレームにつき 1 つの Opus パケット — そして `stop_recording()` が `STREAM_END` でセッションを終了するまで続きます。

### 2.3 RTC がセッションを使う理由

`start_rtc()` はリアルタイムオーディオセッションを作成し、そのセッション ID を返します。`stream_rtc(session, receiver)` は次にデバイスへ、「ホストは今、このセッションのライブオーディオを消費したい」と伝えます。具体的には `AT+DOWNLOAD=<session>` を発行し、ファームウェアはその時点より前にキューされていたものを破棄します — RTC は「今」を届けるので、購読前に生成されたオーディオは決して送られません。

これはファイルダウンロードとの重要な違いです。RTC セッションを、デバイス上で成長していくファイルだと考えないでください。それはあなたが接続するライブソースであり、接続前に取り逃したものは、設計上戻ってこないのです。

## 3. RTC SDK の準備

### 3.1 必要なもの

- reSpeaker Clip 本体；
- RTC ストリーミングをサポートするファームウェア（`feat/rtc-live-streaming` 開発ライン）；
- Python 3.10 以上；
- ホスト側で動作する BLE 環境；
- ソースからチェックアウトした reSpeaker Clip Python SDK。

### 3.2 SDK をインストールする

RTC ストリーミングは開発ブランチで提供されているため、それをチェックアウトし、BLE と examples の extras を付けて SDK をインストールします：

```bash
git clone https://github.com/rayheto/reSpeaker_Clip.git
cd reSpeaker_Clip
git checkout feat/rtc-live-streaming

cd sdk
python -m pip install -e '.[ble,examples]'
```

この 2 つの extras は、このチュートリアルにとって重要です：

- `ble` は BLE トランスポート（Bleak）をインストールします；
- `examples` は FFT デモに必要な依存関係（Opus デコーダーと NumPy）をインストールします。

Wi-Fi/UDP トランスポートには追加の依存関係は不要ですが、このチュートリアルの RTC ストリーミングは BLE 上で動作します。

## 4. RTC FFT デモを実行する

ここが実質的な入口です：まずデモを実行し、理解するのはその後です。

### 4.1 デモを起動する

リポジトリのルートから、デバイスアドレスを指定してサンプルを実行します：

```bash
python sdk/examples/demo_stream_fft_display.py \
  --address AA:BB:CC:DD:EE:FF \
  --duration 30
```

`--address` を省略すると、"Clip" という名前の BLE デバイスを自動的にスキャンし、`--duration` を省略すると Ctrl-C を押すまでストリーミングを続けます：

```bash
python sdk/examples/demo_stream_fft_display.py
```

### 4.2 デモ開始時に何が起きているか

デモが動作している間、Clip に向かって話しかけてください。ターミナルには、あなたの声に合わせて動くライブの Unicode スペクトラムが表示されます。これは次のホスト側パイプラインから構成されています：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="FFT デモパイプライン：Clip から BLE 経由で StreamReceiver、JitterBuffer、Opus デコーダー、PCM、FFT を通りターミナルスペクトラムへ" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_terminal.gif" alt="ライブ RTC FFT スペクトラムデモのターミナル録画" width={900} height="auto" /></p>

> あなたが見ているスペクトラムは、デバイスに保存された録音からではなく、**まさに今** BLE 経由で送信されているオーディオに基づいています。マイクに向かって手を振ると、バーがコンマ数秒以内に反応します。

### 4.3 デモ出力を理解する

ストリームが終了すると、デモは統計情報を表示します。最も意味のあるものは次のとおりです：

```text
RTC session: 00000000082552
Streaming for 50s ...

frames received : 2503
bytes received  : 191846
seq discontin.  : 0
avg inter-frame : 20.0 ms (max 35 ms)
```

- **frames received / bytes received** — 受信した Opus パケット数とその合計サイズ。
- **avg inter-frame** — パケット到着間の平均ギャップ。RTC は約 20 ms ごとに 1 つの Opus フレームを生成するため、ストリーム動作中は 1 秒あたりおよそ 50 パケット、平均は 20 ms 付近になるはずです。
- **seq discontin.** — 観測されたシーケンスの不連続数。健全な BLE リンクでは 0 のままです。

この下には、JitterBuffer の統計（アンダーラン、追いつくためのドロップ、キュー深度分布）とレイテンシーの内訳（キュー / デコード / FFT）も表示されます。これらの意味についてはセクション 7 で説明します。

## 5. 最小限の RTC ストリーミングアプリケーションを構築する

このセクションがチュートリアルの核です。デモが行っているのと同じ RTC 確立処理を、本質だけにそぎ落として示すので、その上に自分の処理を構築できます。

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

レシーバーは、受信したストリームフレームをコールバック呼び出しへと変換します。最も単純なコンシューマーは、各パケットの長さを表示するだけです：

```python
from clip.stream import StreamReceiver


def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))


receiver = StreamReceiver(on_frame=on_frame)
```

コールバックの 1 回の呼び出しが 1 つの Opus パケットに対応します。`on_frame` は受信パス上でインライン実行されるため、ブロックしないように保ってください — バイト列をキューやスレッド、別タスクに渡し、重い処理は別の場所で行います。

### 5.3 RTC セッションを開始する

```python
session = await clip.start_rtc()
print("RTC session:", session)
```

これは `AT+START=rtc` を送信します。デバイスは RTC オーディオパイプラインを開始し、セッション ID を返します。この時点でデバイスはオーディオを生成しているだけで、ホストはまだ購読しておらず、あなたの側には何も流れてきません。

### 5.4 RTC オーディオの受信を開始する

```python
token = await clip.stream_rtc(session, receiver)
await receiver.wait_start(timeout=10)
```

`stream_rtc()` は、レシーバーをトランスポートのフレームパスに接続し、`AT+DOWNLOAD=<session>` を発行します。これ以降、デバイスは `STREAM_START`、続いて `STREAM_DATA` フレームを `receiver` にプッシュします。`wait_start()` は `STREAM_START` が到着した時点で戻ります — それがライブデータチャネルが真に確立された瞬間です。

返される `token` は、トランスポートのフレームハンドラースロットに対するリースです。ストリームが終わったら（セクション 5.6）、これを解放します。

### 5.5 Opus パケットを受信する

コールバックに話を戻します：

```python
def on_frame(opus_packet: bytes) -> None:
    print(len(opus_packet))
```

ここがあなたのアプリケーションの入口です。FFT、VAD、ストリーミング ASR、WebSocket リレーなど、あなたが構築するものはすべて、このバイト列から始まります。次のセクションでは、その中身が正確に何であるかを説明します。

### 5.6 RTC ストリームを停止する

停止処理は録音 API を反映しています。`stop_recording()` が `AT+STOP` を送信し、デバイスは `STREAM_END` で応答し、あなたはハンドラーリースを解放します：

```python
await clip.stop_recording()
await receiver.wait_end(timeout=5)
transport.detach_file_frame_handler(token)
```

最小限のアプリケーション全体を組み立てると、次のようになります：

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
        await receiver.wait_start(timeout=10)

        await asyncio.sleep(10)          # consume the live stream for 10 s

        await clip.stop_recording()
        await receiver.wait_end(timeout=5)
        transport.detach_file_frame_handler(token)

        print("frames:", receiver.frames_received, "bytes:", receiver.bytes_received)


asyncio.run(main())
```

したがって、完全なライフサイクルは次のとおりです：

```text
BLE connect -> start_rtc() -> stream_rtc() -> STREAM_START
-> STREAM_DATA x N -> stop_recording() -> STREAM_END -> detach handler
```

## 6. RTC オーディオデータを理解する

### 6.1 StreamReceiver は何を返すか？

あなたのコールバックはプレーンな `bytes` を受け取ります — 呼び出しごとに 1 パケットの Opus でエンコードされたオーディオです。WAV でも PCM でもなく、生の BLE 通知でもありません。SDK はすでに RTC トランスポートフレーム（`STREAM_START` / `STREAM_DATA` / `STREAM_END`）をパースしており、ペイロードだけを渡してくれます。

```text
BLE STREAM_DATA -> SDK parses the frame -> StreamReceiver -> Opus payload (bytes)
```

レシーバはまた、いつでも読み取れるライブ統計情報も保持しています：`frames_received`、`bytes_received`、`sequence_gaps`、`avg_inter_frame_ms`、`max_inter_frame_ms`、`first_frame_delay_s`。`STREAM_END` の後は、`receiver.end_reason` がストリーム終了の理由（停止、タイムアウト、切断）を教えてくれます。

### 6.2 RTC オーディオフォーマット

現在の RTC ストリームは次のとおりです：

```text
Codec: Opus
Sample rate: 16 kHz
Channels: mono
Frame duration: ~20 ms (320 samples)
```

したがって、およそ 20 ms ごとに 1 フレーム、つまりストリーム動作中は 1 秒あたり約 50 フレームです — これはデモの `avg inter-frame` 出力で見た値と同じです。

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

このデコード処理こそが、あなたのコールバックと実際のオーディオサンプルとの間にある唯一のステップです — そして、まさに FFT デモが、あなたが今書いた最小アプリケーションの上に追加しているものです。

## 7. demo_stream_fft_display.py を理解する

このセクションでは、デモをこれまで学んだ内容に対応付けます。そうすることで、デモは「魔法のスクリプト」ではなく「自分の最小プログラムにデコーダと FFT を足したもの」になります。

### 7.1 デモの構造

デモは、`on_frame` に処理チェーンを接続した最小アプリケーションの構造になっています：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/rtc/rtc_fft_demo_pipeline.png" alt="FFT デモのパイプラインを SDK コンポーネントに対応付けた図" width={900} height="auto" /></p>

`on_frame` は各 Opus パケットを `LiveSpectrum` オブジェクトに渡します。バックグラウンドスレッドが 1 フレーム 20 ms のペースで取り出し、デコードし、FFT を実行し、ターミナルの 1 行を再描画します。

### 7.2 デモにおける RTC の確立

デモの `run()` 関数は、セクション 5 とまったく同じシーケンスを実行します：

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

### 7.3 RTC オーディオをデコードする

デモはセクション 6.3 とまったく同じようにデコードします：`opuslib.Decoder(16000, 1)` が各パケットを 320 個の int16 サンプルに変換します。Opus コーデックが内部でどのように動作しているかを知る必要はありません。重要な境界は「コールバックは Opus のバイト列を渡し、デコーダは PCM サンプルを返す」という点だけです。

### 7.4 デモがジッタバッファを使う理由

BLE の配送は完全に均一な間隔で届くわけではありません。次のようなフレーム間隔のギャップが見られるかもしれません：

```text
20 ms, 20 ms, 35 ms, 5 ms, 20 ms, ...
```

SDK の `clip.jitter.JitterBuffer` は、これを一定の消費リズムに平滑化します：

```text
BLE packets -> JitterBuffer -> steady 20 ms audio frames
```

デモは `JitterBuffer(depth_frames)`（デフォルトは 5 フレーム、つまり最初に 100 ms 分を蓄える）を作成し、`on_frame` から到着するすべてのパケットを `put()` し、処理スレッドから 20 ms ごとに 1 フレームを `get()` します。アンダーラン時には `get()` は `None` を返し（無音の間は FFT は描画されません）、ホスト側が処理に追いつけない場合は、バッファが最も古いフレームをドロップしてライブエッジに追いつこうとします。ジッタバッファとはそれだけのものです：不均一なプロデューサと一定ペースのコンシューマの間にある小さなショックアブソーバです。

### 7.5 PCM から FFT へ

デコードされた各 20 ms フレームは窓関数（Hann）をかけられ、`np.fft.rfft` で変換され、64 個の表示バンドにビン分けされ、Unicode のブロック文字として描画されます。したがって、ターミナルのスペクトラムは、パイプライン全体が端から端まで動作していることの証拠です：

```text
Mic -> Clip -> BLE -> SDK -> Opus decode -> PCM -> FFT -> your eyes
```

あなたが話すとバーが動くとき、そのチェーンのあらゆる段階 — セクション 5 で自分で構築した RTC の確立も含めて — が動作しているということです。

## 8. 次のステップ

RTC SDK は、アプリケーションにライブで、デコードするだけの状態のオーディオを渡します。その先はすべてあなた次第です：

```text
RTC SDK -> Opus decode -> PCM
    ├── FFT spectrum (this tutorial)
    ├── VAD / wake word
    ├── Streaming ASR
    ├── WebSocket relay
    └── Voice assistant
```

デバイス制御、録音、ファイルダウンロードについては、[reSpeaker Clip Basic SDK Guide](/ja/respeaker_clip_basic_sdk_guide) を参照してください。製品のセットアップについては、[Getting Started](/ja/respeaker_clip) を参照してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
