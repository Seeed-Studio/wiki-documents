---
description: Reachy Mini メディアマネージャの完全な API リファレンス。音声、カメラ、ユーティリティ、およびビデオ／オーディオストリーミング用の定数を含みます。
title: メディア API リファレンス
slug: /reachymini_api_media
keywords:
- api
- media
- camera
- audio
- streaming
- webrtc
- gstreamer
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---
# メディア

## メディアマネージャ

### `reachy_mini.media.media_manager.MediaManager`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L56)**

カメラおよびオーディオデバイスを扱うためのメディアマネージャ。

このクラスは、異なるバックエンド間でカメラとオーディオデバイスの両方を管理するための統一インターフェースを提供します。メディアリソースの初期化、設定、およびクリーンアップを処理します。

### メソッド

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L153)**

メディアマネージャを閉じてリソースを解放します。

このメソッドは、メディアマネージャが不要になったときに呼び出して、すべてのメディアリソースを適切にクリーンアップおよび解放する必要があります。進行中の音声録音／再生を停止し、カメラデバイスを閉じます。

:::note

このメソッドを呼び出した後でも、再度適切な初期化メソッドを呼び出すことでメディアマネージャを再利用できますが、必要であれば新しい MediaManager インスタンスを作成することが一般的に推奨されます。

:::

**例:**

```python
media = MediaManager()
try:
    # Use media devices
    frame = media.get_frame()
finally:
    media.close()
```

---

#### `get_DoA`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L410)**

マイクアレイから到来方向（DoA）を取得します。

**戻り値:**

| Type | Description |
|------|-------------|
| `tuple[float, bool] \| None` | タプル (angle_radians, speech_detected)、またはオーディオシステムが利用できない場合は None。 |

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L313)**

オーディオデバイスからオーディオサンプルを取得します。

**戻り値:**

| Type | Description |
|------|-------------|
| `Optional[np.ndarray]` | 記録されたオーディオサンプル。データが利用できない場合は None。 |

---

#### `get_frame`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L216)**

カメラからフレームを取得します。

:::note

このメソッドは、カメラが初期化されていない場合やフレームの取得中にエラーが発生した場合には None を返します。フレームを使用する前に必ず戻り値を確認してください。

:::

**例:**

```python
frame = media.get_frame()
if frame is not None:
    # Process the frame
    cv2.imshow("Camera", frame)
    cv2.waitKey(1)

    # Convert to RGB if needed
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
```

**戻り値:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | 取得された BGR フレームを表す numpy 配列（形状は (height, width, 3)）。カメラが利用できない場合やエラーが発生した場合は None。画像は BGR 形式（OpenCV の規約）であり、OpenCV 関数で直接使用するか、必要に応じて RGB に変換できます。 |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L325)**

オーディオデバイスの入力サンプリングレートを取得します。

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L339)**

オーディオデバイスの入力チャンネル数を取得します。

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L332)**

オーディオデバイスの出力サンプリングレートを取得します。

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L346)**

オーディオデバイスの出力チャンネル数を取得します。

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L294)**

サウンドファイルを再生します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `sound_file` | `str` | 再生するサウンドファイルへのパス。 |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L367)**

オーディオデータを出力デバイスに送信します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `data` | `npt.NDArray[np.float32]` | 出力デバイスに送信するオーディオデータ（モノラル形式）。 |

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L360)**

オーディオの再生を開始します。

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L306)**

オーディオの録音を開始します。

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L403)**

オーディオの再生を停止します。

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L353)**

オーディオの録音を停止します。

---

## オーディオ

### `reachy_mini.media.audio_base.AudioBase`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L25)**

オーディオデバイスを開いて管理するための抽象クラス。

このクラスは、すべてのオーディオ実装が従うべきインターフェースを定義します。共通のオーディオパラメータと、マイク入力およびスピーカー出力機能を含むオーディオデバイスを管理するためのメソッドを提供します。

### メソッド

#### `cleanup`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L64)**

破棄前にリソースをクリーンアップします。

このメソッドは、オブジェクトが破棄される前に、オーディオ実装が保持しているリソースを解放するために呼び出す必要があります。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `SAMPLE_RATE` | `int` | オーディオ処理のデフォルトサンプリングレート（16000 Hz）。 |
| `CHANNELS` | `int` | デフォルトのオーディオチャンネル数（ステレオの場合は 2）。 |
| `logger` | `logging.Logger` | オーディオ関連メッセージ用のロガーインスタンス。 |
| `_respeaker` | `Optional[ReSpeaker]` | ReSpeaker マイクアレイデバイスハンドラ。 |

---

#### `clear_output_buffer`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L210)**

出力バッファをクリアします。

このメソッドは、プッシュされたサンプルが再生されないように出力バッファをフラッシュします。必要に応じてオーバーライドしてください。gstreamer バックエンドでは、set_max_output_buffers を低い値に設定するだけで十分な場合があります。

---

#### `get_DoA`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L285)**

ReSpeaker デバイスから到来方向（DoA）値を取得します。

空間角度はラジアンで与えられます:
- 0 ラジアンは左
- π/2 ラジアンは前／後
- π ラジアンは右

:::info

この機能をサポートするには、マイクアレイのファームウェアバージョンが 2.1.0 以上である必要があります。ファームウェアは `src/reachy_mini/assets/firmware/*.bin` にあります。アップグレード手順については https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/#update-firmware を参照してください。

:::

**戻り値:**

| Type | Description |
|------|-------------|
| `tuple` | DoA 値（float、ラジアン）と音声検出（bool）を含むタプル。デバイスが見つからない場合は None。 |

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L94)**

デバイスからオーディオデータを読み取ります。データを返すか、エラー時には None を返します。

:::note

このメソッドは `start_recording()` が呼び出された後に使用する必要があります。サンプリングレートとチャンネル数は、それぞれ `get_input_audio_samplerate()` と `get_input_channels()` で取得できます。

:::

**例:**

```python
audio.start_recording()
samples = audio.get_audio_sample()
if samples is not None:
    print(f"Got {len(samples)} audio samples")
```

**戻り値:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.float32]]` | float32 形式のオーディオサンプルを含む numpy 配列。データが利用できない場合やエラーが発生した場合は None。配列の形状は、モノラルでは通常 (num_samples,)、マルチチャンネルオーディオでは (num_samples, num_channels)。 |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L121)**

オーディオデバイスの入力サンプリングレートを取得します。

:::note

この値は、各チャンネルについて 1 秒あたりに取得されるオーディオサンプル数を表します。

:::

**戻り値:**

| Type | Description |
|------|-------------|
| `int` | オーディオが取得されているサンプリングレート（Hz）。デフォルトは 16000 Hz。 |

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L149)**

オーディオデバイスの入力チャンネル数を取得します。

:::note

ReSpeaker マイクアレイでは、通常ステレオマイク構成を表す 2 チャンネルを返します。

:::

**戻り値:**

| Type | Description |
|------|-------------|
| `int` | オーディオ入力チャンネル数（例: モノラルなら 1、ステレオなら 2）。デフォルトは 2 チャンネル。 |

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L135)**

オーディオデバイスの出力サンプリングレートを取得します。

:::note

この値は、各チャンネルについて 1 秒あたりに再生されるオーディオサンプル数を表します。

:::

**戻り値:**

| Type | Description |
|------|-------------|
| `int` | オーディオが再生されているサンプリングレート（Hz）。デフォルトは 16000 Hz。 |

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L163)**

オーディオデバイスの出力チャンネル数を取得します。

:::note

これは、`push_audio_sample()` メソッドに渡すオーディオデータのフォーマット方法を決定します。

:::

**戻り値:**

| 型 | 説明 |
|------|-------------|
| `int` | オーディオ出力チャネル数（例：モノラルなら 1、ステレオなら 2）。デフォルトは 2 チャネルです。 |

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L263)**

サウンドファイルを再生します。

:::note

これは、サウンドファイルの再生を開始から終了まで一括して処理するための便利メソッドです。オーディオ再生をより細かく制御したい場合は、`start_playing()`、`push_audio_sample()`、`stop_playing()` メソッドを使用してください。

:::

**例:**

```python
audio.play_sound("/path/to/sound.wav")
```

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `sound_file` | `str` | 再生するサウンドファイルへのパス。サポートされるフォーマットは具体的な実装に依存します。 |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L230)**

オーディオデータを出力デバイスに送信します。

:::note

このメソッドは `start_playing()` を呼び出した後に使用する必要があります。オーディオデータは `get_output_audio_samplerate()` によって返されるサンプルレートで再生されます。

:::

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `data` | `npt.NDArray[np.float32]` | 再生するオーディオサンプル。配列には通常 [-1.0, 1.0] の範囲の float32 値を含める必要があります。モノラル音声の場合: 形状は (num_samples,) である必要があります。ステレオ音声の場合: 形状は (num_samples, 2) である必要があります。 |

---

#### `set_max_output_buffers`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L220)**

プレーヤーにキューイングする出力バッファの最大数を設定します。

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `max_buffers` | `int` | キューイングするバッファの最大数。 |

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L191)**

オーディオの再生を開始します。

このメソッドはオーディオ再生システムを初期化し、`push_audio_sample()` を介してオーディオデータを受信できるように準備する必要があります。

:::note

実装では、必要なリソースの割り当てとエラーチェックを適切に処理する必要があります。再生を開始できない場合は、適切なエラーメッセージをログに記録する必要があります。

:::

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L74)**

オーディオの録音を開始します。

このメソッドはオーディオ録音システムを初期化し、オーディオデータを取得できるように準備する必要があります。このメソッドを呼び出した後は、`get_audio_sample()` によって録音されたオーディオデータを取得できるようになるはずです。

:::note

実装では、必要なリソースの割り当てとエラーチェックを適切に処理する必要があります。録音を開始できない場合は、適切なエラーメッセージをログに記録する必要があります。

:::

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L249)**

オーディオの再生を停止し、リソースを解放します。

このメソッドは進行中のオーディオ再生をすべて停止し、関連するすべてのリソースを解放する必要があります。このメソッドを呼び出した後は、`start_playing()` が再度呼び出されるまで、`push_audio_sample()` の呼び出しは効果を持ちません。

:::note

実装では、リソースリークを防ぐために適切なクリーンアップが行われるようにする必要があります。

:::

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L177)**

オーディオデバイスを閉じてリソースを解放します。

このメソッドは進行中のオーディオ録音をすべて停止し、関連するすべてのリソースを解放する必要があります。このメソッドを呼び出した後は、`start_recording()` が再度呼び出されるまで、`get_audio_sample()` は None を返すはずです。

:::note

実装では、リソースリークを防ぐために適切なクリーンアップが行われるようにする必要があります。

:::

---

### `reachy_mini.media.audio_gstreamer.GStreamerAudio`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L76)**

GStreamer を使用したオーディオ実装です。

### メソッド

#### `clear_player`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L398)**

プレーヤーの appsrc をフラッシュして、キューに入っているオーディオを即座に破棄します。

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L253)**

オーディオカードからサンプルを読み取ります。サンプルを返すか、エラー時には None を返します。

完全なドキュメントについては `AudioBase.get_audio_sample()` を参照してください。

**戻り値:**

| 型 | 説明 |
|------|-------------|
| `Optional[npt.NDArray[np.float32]]` | 取得された生形式のサンプル。エラー時には None。 |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L267)**

オーディオデバイスの入力サンプルレートを取得します。

完全なドキュメントについては `AudioBase.get_input_audio_samplerate()` を参照してください。

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L281)**

オーディオデバイスの入力チャネル数を取得します。

完全なドキュメントについては `AudioBase.get_input_channels()` を参照してください。

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L274)**

オーディオデバイスの出力サンプルレートを取得します。

完全なドキュメントについては `AudioBase.get_output_audio_samplerate()` を参照してください。

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L288)**

オーディオデバイスの出力チャネル数を取得します。

完全なドキュメントについては `AudioBase.get_output_channels()` を参照してください。

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L330)**

サウンドファイルを再生します。

完全なドキュメントについては `AudioBase.play_sound()` を参照してください。

:::tip

TODO: 現時点では、この関数はワイヤレス版で使用されることを想定しています。

:::

**パラメータ:**

| 名前 | 型 | 説明 |
|------|------|-------------|
| `sound_file` | `str` | 再生するサウンドファイルへのパス。 |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L317)**

オーディオデータを出力デバイスに送信します。

完全なドキュメントについては `AudioBase.push_audio_sample()` を参照してください。

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L302)**

GStreamer を使用してオーディオ出力を開きます。

完全なドキュメントについては `AudioBase.start_playing()` を参照してください。

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L233)**

GStreamer を使用してオーディオカードを開きます。

完全なドキュメントについては `AudioBase.start_recording()` を参照してください。

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L310)**

オーディオの再生を停止し、リソースを解放します。

完全なドキュメントについては `AudioBase.stop_playing()` を参照してください。

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L295)**

カメラリソースを解放します。

完全なドキュメントについては `AudioBase.stop_recording()` を参照してください。

---

## オーディオユーティリティ関数

### `reachy_mini.media.audio_utils.get_respeaker_card_number`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L67)**

ReSpeaker サウンドカードのカード番号、または見つからない場合は 0 を返します。

:::note

この関数は 'arecord -l' を実行して利用可能なオーディオキャプチャデバイスを一覧表示し、その出力を処理して Reachy Mini Audio または ReSpeaker デバイスを検出します。主に ALSA オーディオ設定を使用する Linux システムで利用されます。

この関数は次の値を返します:
- 正の整数: 検出された Reachy Mini Audio デバイスのカード番号
- 0: Reachy Mini Audio デバイスが見つからなかった場合（デフォルトのサウンドカードを使用）
- -1: オーディオデバイスの検出中にエラーが発生した場合

:::

**例:**

```python
card_num = get_respeaker_card_number()
if card_num > 0:
    print(f"Using Reachy Mini Audio card {card_num}")
elif card_num == 0:
    print("Using default sound card")
else:
    print("Error detecting audio devices")
```

**戻り値:**

| 型 | 説明 |
|------|-------------|
| `int` | 検出された ReSpeaker/Reachy Mini Audio デバイスのカード番号。特定のデバイスが見つからない場合は 0（デフォルトのサウンドカードを使用）、検出コマンドの実行中にエラーが発生した場合は -1 を返します。 |

---

### `reachy_mini.media.audio_utils.has_reachymini_asoundrc`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L110)**

~/.asoundrc が存在し、reachymini_audio_sink と reachymini_audio_src の両方を含んでいるかどうかを確認します。

:::note

この関数は ALSA 設定ファイル ~/.asoundrc の存在を確認し、Reachy Mini オーディオデバイス用の必要な設定エントリ（reachymini_audio_sink および reachymini_audio_src）が含まれていることを検証します。これらのエントリは、適切なオーディオルーティングとデバイス管理に必要です。

:::

**例:**

```python
if has_reachymini_asoundrc():
    print("Reachy Mini audio configuration is properly set up")
else:
    print("Need to configure Reachy Mini audio devices")
    write_asoundrc_to_home()  # Create the configuration
```

**戻り値:**

| 型 | 説明 |
|------|-------------|
| `bool` | ~/.asoundrc が存在し、必要な Reachy Mini オーディオ設定エントリを含んでいる場合は True、それ以外の場合は False。 |

---

### `reachy_mini.media.audio_utils.check_reachymini_asoundrc`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L141)**

~/.asoundrc が存在し、Reachy Mini Audio 用に正しく構成されているか確認します。

---

### `reachy_mini.media.audio_utils.write_asoundrc_to_home`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L160)**

.asoundrc ファイルに Reachy Mini のオーディオ設定を書き込み、ユーザーのホームディレクトリに保存します。

この関数は、ユーザーのホームディレクトリに ALSA 設定ファイル (.asoundrc) を作成し、ReSpeaker サウンドカードの適切なオーディオルーティングとマルチクライアント対応を構成します。この設定により、同時オーディオ入力および出力アクセスが有効になり、Reachy Mini Wireless バージョンのオーディオ機能に不可欠です。

生成される設定には次の内容が含まれます：
- ReSpeaker サウンドカードを指すデフォルトのオーディオデバイス設定
- マルチクライアントのオーディオ出力用 dmix プラグイン（reachymini_audio_sink）
- マルチクライアントのオーディオ入力用 dsnoop プラグイン（reachymini_audio_src）
- 最適なパフォーマンスのための適切なバッファおよびサンプルレート設定

:::info

この関数は ReSpeaker のカード番号を自動検出し、検出されたハードウェアに合わせた設定を作成します。主に Reachy Mini Wireless バージョンで使用されます。

設定ファイルは ~/.asoundrc に作成され、同名の既存ファイルがある場合は上書きされます。この関数を呼び出す前に、既存のオーディオ設定はバックアップしておく必要があります。

:::

---

## オーディオ制御ユーティリティ関数

### `reachy_mini.media.audio_control_utils.ReSpeaker`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L172)**

ReSpeaker XVF3800 USB デバイスとインターフェースするためのクラスです。

### メソッド

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L317)**

インターフェースを閉じます。

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L240)**

ReSpeaker デバイス上の指定されたパラメータからデータを読み取ります。

---

#### `write`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L181)**

ReSpeaker デバイス上の指定されたパラメータにデータを書き込みます。

---

### `reachy_mini.media.audio_control_utils.find`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L322)**

指定された Vendor ID と Product ID を持つ ReSpeaker USB デバイスを検索して返します。

:::note

この関数は、指定された Vendor ID と Product ID を持つ USB デバイスを libusb バックエンドを使用して検索します。デフォルト値は、ReSpeaker マイクアレイで使用される XMOS XVF3800 デバイスを対象としています。

:::

**例：**

```python
from reachy_mini.media.audio_control_utils import find

# Find default ReSpeaker device
respeaker = find()
if respeaker is not None:
    print("Found ReSpeaker device")
    respeaker.close()

# Find specific device
custom_device = find(vid=0x1234, pid=0x5678)
```

**パラメータ：**

| Name | Type | Description |
|------|------|-------------|
| `vid` | `int` | 検索対象の USB Vendor ID。デフォルト：0x2886（XMOS）。 |
| `pid` | `int` | 検索対象の USB Product ID。デフォルト：0x001A（XMOS XVF3800）。 |

**戻り値：**

| Type | Description |
|------|-------------|
| `ReSpeaker \| None` | デバイスが見つかった場合は ReSpeaker オブジェクト、見つからない場合は None。 |

---

### `reachy_mini.media.audio_control_utils.init_respeaker_usb`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L360)**

ReSpeaker USB デバイスを初期化します。新旧両方のデバイス ID を探します。

:::info

この関数は、既知の Vendor ID と Product ID を持つ USB デバイスを検索することで ReSpeaker マイクアレイの初期化を試みます。次の順に試行します：
1. 新しい Reachy Mini Audio ファームウェア（0x38FB:0x1001）- 推奨
2. 古い ReSpeaker ファームウェア（0x2886:0x001A）- アップデートを促す警告付き

この関数は USB バックエンドエラーを適切に処理し、互換性のあるデバイスが見つからない場合や初期化に失敗した場合は None を返します。

:::

**例：**

```python
from reachy_mini.media.audio_control_utils import init_respeaker_usb

# Initialize ReSpeaker device
respeaker = init_respeaker_usb()
if respeaker is not None:
    print("ReSpeaker initialized successfully")
    # Use the device...
    doa = respeaker.read("DOA_VALUE_RADIANS")
    respeaker.close()
else:
    print("No ReSpeaker device found")
```

**戻り値：**

| Type | Description |
|------|-------------|
| `Optional[ReSpeaker]` | 互換性のあるデバイスが見つかった場合は ReSpeaker オブジェクト、見つからない場合は None。 |

---

## カメラ

### `reachy_mini.media.camera_base.CameraBase`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L39)**

カメラを開いて管理するための抽象クラスです。

このクラスは、すべてのカメラ実装が従うべきインターフェースを定義します。画像キャプチャ、解像度管理、カメラキャリブレーションなど、カメラデバイスを管理するための共通のカメラパラメータとメソッドを提供します。

### メソッド

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L275)**

カメラを閉じてリソースを解放します。

このメソッドは、進行中の画像キャプチャを停止し、関連するすべてのリソースを解放する必要があります。このメソッドを呼び出した後は、`open()` が再度呼び出されるまで `read()` は None を返すべきです。

:::note

実装では、リソースリークを防ぐために適切なクリーンアップが行われるようにする必要があります。

:::

**パラメータ：**

| Name | Type | Description |
|------|------|-------------|
| `logger` | `logging.Logger` | カメラ関連メッセージ用の Logger インスタンス。 |
| `_resolution` | `Optional[CameraResolution]` | 現在のカメラ解像度設定。 |
| `camera_specs` | `Optional[CameraSpecs]` | 対応解像度やキャリブレーションパラメータを含むカメラ仕様。 |
| `resized_K` | `Optional[npt.NDArray[np.float64]]` | 現在の解像度に合わせてリサイズされたカメラ内部パラメータ行列。 |

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L227)**

カメラを開きます。

このメソッドはカメラデバイスを初期化し、画像キャプチャの準備を行う必要があります。このメソッドを呼び出した後は、`read()` によってカメラフレームを取得できるようになるべきです。

:::note

実装では、必要なリソース割り当て、カメラ設定、およびエラーチェックを適切に処理する必要があります。カメラを開けない場合は、適切なエラーメッセージをログに記録する必要があります。

:::

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L247)**

カメラから画像を読み取ります。画像を返すか、エラー時は None を返します。

:::note

このメソッドは `open()` が呼び出された後に呼び出す必要があります。画像の解像度は resolution プロパティから取得できます。

:::

**例：**

```python
camera.open()
frame = camera.read()
if frame is not None:
    cv2.imshow("Camera Frame", frame)
    cv2.waitKey(1)
```

**戻り値：**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | 取得した画像を BGR 形式（OpenCV の規約）で含む numpy 配列、または画像が利用できない場合やエラーが発生した場合は None。配列の形状は (height, width, 3) で、最後の次元は BGR カラーチャンネルを表します。 |

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L175)**

カメラの解像度を設定します。

:::note

このメソッドはカメラの解像度を更新し、新しい解像度に合わせてカメラ内部パラメータ行列（K）を自動的にリスケールします。このリスケールにより、カメラの視野と主点位置は画像サイズに対して同じ関係が保たれます。

:::

**例：**

```python
from reachy_mini.media.camera_constants import CameraResolution
camera.set_resolution(CameraResolution.R1280x720at30fps)
```

**パラメータ：**

| Name | Type | Description |
|------|------|-------------|
| `resolution` | `CameraResolution` | CameraResolution enum から選択する、希望するカメラ解像度。 |

---

### `reachy_mini.media.camera_opencv.OpenCVCamera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L76)**

OpenCV を使用したカメラ実装です。

このクラスは OpenCV を使用して CameraBase インターフェースを実装し、Reachy Mini ロボット向けにクロスプラットフォームのカメラサポートを提供します。対応するカメラモデルを自動検出して構成します。

### メソッド

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L173)**

カメラリソースを解放します。

完全なドキュメントについては `CameraBase.close()` を参照してください。

**パラメータ：**

| Name | Description |
|------|-------------|
| CameraBase からすべての属性を継承します。 | - |
| さらに OpenCV の VideoCapture オブジェクトとカメラ接続を管理します。 | - |

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L117)**

OpenCV VideoCapture を使用してカメラを開きます。

完全なドキュメントについては `CameraBase.open()` を参照してください。

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L151)**

カメラからフレームを読み取ります。

完全なドキュメントについては `CameraBase.read()` を参照してください。

**戻り値：**

フレームを表す uint8 の numpy 配列、またはフレームを読み取れなかった場合は None。

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L108)**

カメラの解像度を設定します。

---

### `reachy_mini.media.camera_gstreamer.GStreamerCamera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L79)**

GStreamer を使用したカメラ実装です。

### メソッド

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L292)**

カメラリソースを解放します。

---

#### `get_video_device`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L297)**

Gst.DeviceMonitor を使用して、Unix カメラパス /dev/videoX を検索します。

デバイスパス（例: '/dev/video2'）を返し、見つからない場合は '' を返します。

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L255)**

GStreamer を使用してカメラを開きます。

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L276)**

カメラからフレームを読み取ります。フレームを返し、エラー時は None を返します。

**戻り値:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | 取得した BGR フレームを表す NumPy 配列。エラー時は None。 |

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L230)**

カメラの解像度を設定します。

---

## カメラユーティリティ関数

### `reachy_mini.media.camera_utils.find_camera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_utils.py#L44)**

Reachy Mini カメラを検出して返します。

まず Reachy Mini カメラを探し、次に Arducam、その後に古い Raspberry Pi Camera を探します。カメラが見つからない場合は None を返します。特定のカメラが検出されない場合は、汎用 Web カメラにフォールバックします。

:::info

この関数は次の順序でカメラの検出を試みます:
1. Reachy Mini Lite Camera（優先）
2. 古い Raspberry Pi Camera
3. Arducam
4. 汎用 Web カメラ（フォールバック）

この関数は、互換性を確保するために、Reachy Mini および Raspberry Pi カメラに対して適切なビデオコーデック（MJPG）を自動的に設定します。

:::

**例:**

```python
cap, specs = find_camera()
if cap is not None:
    print(f"Found {specs.name} camera")
    # Set resolution
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)
    # Capture a frame
    ret, frame = cap.read()
    cap.release()
else:
    print("No camera found")
```

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `apiPreference` | `int` | カメラに対して優先する API バックエンド。デフォルトは cv2.CAP_ANY。オプションには cv2.CAP_V4L2（Linux）、cv2.CAP_DSHOW（Windows）、cv2.CAP_MSMF（Windows）などがあります。 |
| `no_cap` | `bool` | True の場合、検出後にカメラを閉じます。カメラを開いたままにせず検出のみをテストしたい場合に便利です。デフォルトは False。 |

**戻り値:**

| Type | Description |
|------|-------------|
| `Tuple[Optional[cv2.VideoCapture], Optional[CameraSpecs]]` | タプルを返します: cv2.VideoCapture（カメラが検出され正常にオープンされた場合は VideoCapture オブジェクト、それ以外は None）と CameraSpecs（検出されたカメラの仕様。カメラが見つからない場合は None）。 |

---

### `reachy_mini.media.camera_utils.find_camera_by_vid_pid`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_utils.py#L128)**

指定された VID と PID を持つカメラを検出して返します。

:::note

この関数は、cv2_enumerate_cameras パッケージを使用して利用可能なカメラを列挙し、指定された USB Vendor ID と Product ID を持つカメラを探します。これは、システムに複数のカメラが接続されている場合に特定のカメラモデルを選択するのに役立ちます。

Arducam カメラは 2 つの /dev/videoX デバイスを作成しますが、enumerate_cameras はそれらを区別できないため、この関数は動作するデバイスが見つかるまで、候補となる各デバイスを順番に開こうとします。

:::

**例:**

```python
# Find Reachy Mini Lite Camera by its default VID/PID
cap = find_camera_by_vid_pid()
if cap is not None:
    print("Found Reachy Mini Lite Camera")
    cap.release()

# Find a specific camera by custom VID/PID
cap = find_camera_by_vid_pid(vid=0x0C45, pid=0x636D)  # Arducam
if cap is not None:
    print("Found Arducam")
```

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `vid` | `int` | カメラの Vendor ID。デフォルトは ReachyMiniLiteCamSpecs.vid (0x38FB)。 |
| `pid` | `int` | カメラの Product ID。デフォルトは ReachyMiniLiteCamSpecs.pid (0x1002)。 |
| `apiPreference` | `int` | カメラに対して優先する API バックエンド。デフォルトは cv2.CAP_ANY。Linux では、互換性向上のため自動的に cv2.CAP_V4L2 が使用されます。 |

**戻り値:**

| Type | Description |
|------|-------------|
| `cv2.VideoCapture \| None` | 指定された VID/PID に一致するカメラが検出され正常にオープンされた場合は VideoCapture オブジェクト、それ以外は None。 |

---

## カメラ定数

### `reachy_mini.media.camera_constants.CameraResolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L34)**

カメラ解像度の基底クラス。

Reachy Mini カメラでサポートされる標準化されたカメラ解像度とフレームレートの列挙型です。各列挙値は (width, height, fps) のタプルを保持します。

:::note

列挙値は (width, height, frames_per_second) を含むタプルです。すべての解像度がすべてのカメラモデルでサポートされているわけではないため、利用可能な解像度については各カメラモデルの仕様を確認してください。

:::

**例:**

```python
from reachy_mini.media.camera_constants import CameraResolution

# Get resolution information
res = CameraResolution.R1280x720at30fps
width, height, fps = res.value
print(f"Resolution: {width}x{height}@{fps}fps")

# Check if a resolution is supported by a camera
from reachy_mini.media.camera_constants import ReachyMiniLiteCamSpecs
res = CameraResolution.R1920x1080at60fps
if res in ReachyMiniLiteCamSpecs.available_resolutions:
    print("This resolution is supported")
```

**利用可能な解像度:**

| Resolution | Description |
|------------|-------------|
| `R1536x864at40fps` | 1536x864 解像度、40 fps |
| `R1280x720at60fps` | 1280x720 解像度、60 fps（HD） |
| `R1280x720at30fps` | 1280x720 解像度、30 fps（HD） |
| `R1920x1080at30fps` | 1920x1080 解像度、30 fps（フル HD） |
| `R1920x1080at60fps` | 1920x1080 解像度、60 fps（フル HD） |
| `R2304x1296at30fps` | 2304x1296 解像度、30 fps |
| `R1600x1200at30fps` | 1600x1200 解像度、30 fps |
| `R3264x2448at30fps` | 3264x2448 解像度、30 fps |
| `R3264x2448at10fps` | 3264x2448 解像度、10 fps |
| `R3840x2592at30fps` | 3840x2592 解像度、30 fps |
| `R3840x2592at10fps` | 3840x2592 解像度、10 fps |
| `R3840x2160at30fps` | 3840x2160 解像度、30 fps（4K UHD） |
| `R3840x2160at10fps` | 3840x2160 解像度、10 fps（4K UHD） |
| `R3072x1728at10fps` | 3072x1728 解像度、10 fps |
| `R4608x2592at10fps` | 4608x2592 解像度、10 fps |

---

### `reachy_mini.media.camera_constants.CameraSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L107)**

カメラ仕様の基底クラス。

サポートされる解像度、キャリブレーションパラメータ、USB 識別情報など、カメラモデルの仕様を保持するデータクラスです。

:::note

内部パラメータ行列 K の形式は次のとおりです:
```
[[fx,  0, cx],
 [ 0, fy, cy],
 [ 0,  0,  1]]
```

ここで fx, fy はピクセル単位の焦点距離、cx, cy は主点（通常は画像中心付近）の座標です。

:::

**例:**

```python
from reachy_mini.media.camera_constants import CameraSpecs

# Create a custom camera specification
custom_specs = CameraSpecs(
    name="custom_camera",
    available_resolutions=[CameraResolution.R1280x720at30fps],
    default_resolution=CameraResolution.R1280x720at30fps,
    vid=0x1234,
    pid=0x5678,
    K=np.array([[800, 0, 640], [0, 800, 360], [0, 0, 1]]),
    D=np.zeros(5)
)
```

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `name` | `str` | カメラモデルの人間が読める名称。 |
| `available_resolutions` | `List[CameraResolution]` | このカメラモデルでサポートされる解像度とフレームレートのリスト。 |
| `default_resolution` | `CameraResolution` | カメラ初期化時に使用されるデフォルト解像度。 |
| `vid` | `int` | このカメラモデルを識別するための USB Vendor ID。 |
| `pid` | `int` | このカメラモデルを識別するための USB Product ID。 |
| `K` | `npt.NDArray[np.float64]` | 焦点距離と主点座標を含む 3x3 のカメラ内部パラメータ行列。 |
| `D` | `npt.NDArray[np.float64]` | 放射歪みおよびタンジェンシャル歪みの係数（k1, k2, p1, p2, k3）を含む 5 要素の配列。 |

---

### `reachy_mini.media.camera_constants.ArducamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L163)**

Arducam カメラの仕様。

---

### `reachy_mini.media.camera_constants.ReachyMiniLiteCamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L182)**

Reachy Mini Lite カメラの仕様。

---

### `reachy_mini.media.camera_constants.ReachyMiniWirelessCamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L229)**

Reachy Mini Wireless カメラの仕様。
