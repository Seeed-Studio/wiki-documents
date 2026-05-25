---
description: Reachy Mini 向けの Media API リファレンス。メディアマネージャー、オーディオ、カメラ、WebRTC コンポーネントを対象とします。
title: メディア API
slug: /reachymini_api_media
keywords:
  - media
  - api
  - audio
  - camera
  - webrtc
  - gstreamer
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_api_media/
---

# メディア

## メディアマネージャー

### `reachy_mini.media.media_manager.MediaManager`

Reachy Mini ロボット上のオーディオおよびビデオストリームを管理するための MediaManager クラス。

### メソッド

#### `start_audio`

オーディオストリームを開始します。

---

#### `stop_audio`

オーディオストリームを停止します。

---

#### `start_video`

ビデオストリームを開始します。

---

#### `stop_video`

ビデオストリームを停止します。

---

## オーディオ

### `reachy_mini.media.audio_base.AudioBase`

Reachy Mini 上でのオーディオ処理のための基底クラス。

### メソッド

#### `play_sound`

サウンドファイルを再生します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `file_path` | `str` | 再生するサウンドファイルへのパス。 |

---

#### `set_volume`

オーディオの音量を設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | 音量レベル (0-100)。 |

---

#### `get_volume`

現在のオーディオ音量を取得します。

**戻り値:**

`int` — 現在の音量レベル (0-100)。

---

### `reachy_mini.media.audio_gstreamer.GStreamerAudio`

Reachy Mini 向けの GStreamer ベースのオーディオ実装。

### メソッド

#### `start_recording`

オーディオ録音を開始します。

---

#### `stop_recording`

オーディオ録音を停止します。

---

#### `get_audio_stats`

オーディオ統計情報を取得します。

**戻り値:**

`Dict` — オーディオ統計情報を含むディクショナリ。

---

## オーディオユーティリティ関数

### `reachy_mini.media.audio_utils.get_respeaker_card_number`

ReSpeaker デバイスのカード番号を取得します。

**戻り値:**

`int` — ReSpeaker 用の ALSA カード番号。

---

### `reachy_mini.media.audio_utils.has_reachymini_asoundrc`

Reachy Mini の asoundrc 設定ファイルが存在するかを確認します。

**戻り値:**

`bool` — 設定ファイルが存在する場合は True。

---

### `reachy_mini.media.audio_utils.check_reachymini_asoundrc`

Reachy Mini の asoundrc 設定が有効かどうかを確認します。

**戻り値:**

`bool` — 設定が有効な場合は True。

---

### `reachy_mini.media.audio_utils.write_asoundrc_to_home`

asoundrc 設定をユーザーのホームディレクトリに書き込みます。

---

## オーディオ制御ユーティリティ関数

### `reachy_mini.media.audio_control_utils.ReSpeaker`

ReSpeaker USB マイクアレイコントローラ。

### メソッド

#### `set_channel`

ReSpeaker のアクティブチャネルを設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `channel` | `int` | アクティブとして設定するチャネル番号。 |

---

#### `get_volume`

マイクの音量を取得します。

**戻り値:**

`int` — 現在のマイク音量 (0-100)。

---

#### `set_volume`

マイクの音量を設定します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | 音量レベル (0-100)。 |

---

### `reachy_mini.media.audio_control_utils.find`

接続されている ReSpeaker デバイスを検出します。

**戻り値:**

`List[ReSpeaker]` — 検出された ReSpeaker デバイスのリスト。

---

### `reachy_mini.media.audio_control_utils.init_respeaker_usb`

ReSpeaker USB マイクを初期化します。

**戻り値:**

`ReSpeaker` — 初期化された ReSpeaker デバイス。

---

## カメラ

### `reachy_mini.media.camera_gstreamer.GStreamerCamera`

Reachy Mini 向けの GStreamer ベースのカメラ実装。

### メソッド

#### `start`

カメラストリームを開始します。

---

#### `stop`

カメラストリームを停止します。

---

#### `get_frame`

現在のカメラフレームを取得します。

**戻り値:**

`np.ndarray` — numpy 配列としての現在のカメラフレーム。

---

#### `undistort_points`

カメラキャリブレーションパラメータを用いて画像上の点の歪みを補正します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `points` | `np.ndarray` | 歪み補正する入力点。 |
| `camera_matrix` | `np.ndarray` | カメラ内部パラメータ行列。 |
| `dist_coeffs` | `np.ndarray` | 歪み係数。 |

**戻り値:**

`np.ndarray` — 歪み補正後の点。

---

## カメラユーティリティ関数

### `reachy_mini.media.camera_utils.undistort_points`

カメラキャリブレーションパラメータを用いて点の歪みを補正します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `points` | `np.ndarray` | 歪み補正する入力点。 |
| `camera_matrix` | `np.ndarray` | カメラ内部パラメータ行列。 |
| `dist_coeffs` | `np.ndarray` | 歪み係数。 |

**戻り値:**

`np.ndarray` — 歪み補正後の点。

---

### `reachy_mini.media.camera_utils.scale_intrinsics`

異なる画像解像度に対してカメラ内部パラメータをスケーリングします。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `intrinsics` | `np.ndarray` | 元のカメラ内部パラメータ行列。 |
| `scale_factor` | `float` | 内部パラメータに適用するスケール係数。 |

**戻り値:**

`np.ndarray` — スケーリング後のカメラ内部パラメータ行列。

---

## カメラ定数

### `reachy_mini.media.camera_constants.CameraResolution`

カメラ解像度設定クラス。

### プロパティ

| Property | Type | Description |
|----------|------|-------------|
| `width` | `int` | 画像の幅（ピクセル単位）。 |
| `height` | `int` | 画像の高さ（ピクセル単位）。 |

---

### `reachy_mini.media.camera_constants.CameraSpecs`

カメラ仕様のための基底クラス。

### プロパティ

| Property | Type | Description |
|----------|------|-------------|
| `resolution` | `CameraResolution` | カメラ解像度。 |
| `frame_rate` | `int` | フレームレート（fps）。 |
| `camera_matrix` | `np.ndarray` | カメラ内部パラメータ行列。 |
| `dist_coeffs` | `np.ndarray` | 歪み係数。 |

---

### `reachy_mini.media.camera_constants.ArducamSpecs`

Arducam カメラモジュールの仕様。

---

### `reachy_mini.media.camera_constants.ReachyMiniLiteCamSpecs`

Reachy Mini Lite カメラの仕様。

---

### `reachy_mini.media.camera_constants.ReachyMiniWirelessCamSpecs`

Reachy Mini Wireless カメラの仕様。

---

### `reachy_mini.media.camera_constants.OlderRPiCamSpecs`

旧型 Raspberry Pi カメラモジュールの仕様。

---

### `reachy_mini.media.camera_constants.MujocoCameraSpecs`

MuJoCo シミュレーションカメラの仕様。

---

### `reachy_mini.media.camera_constants.GenericWebcamSpecs`

汎用 USB ウェブカメラの仕様。

---

## WebRTC

### `reachy_mini.media.webrtc_client_gstreamer.GstWebRTCClient`

オーディオおよびビデオをストリーミングするための GStreamer ベースの WebRTC クライアント。

### メソッド

#### `connect`

シグナリングサーバーに接続します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `signaling_url` | `str` | シグナリングサーバーの URL。 |
| `token` | `str` | 認証トークン。 |

---

#### `disconnect`

シグナリングサーバーから切断します。

---

#### `start_stream`

オーディオおよびビデオのストリーミングを開始します。

---

#### `stop_stream`

オーディオおよびビデオのストリーミングを停止します。

---

#### `attach_video`

ストリームを受信するための video 要素をアタッチします。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `video_element` | `HTMLVideoElement` | アタッチする video 要素。 |

---

#### `set_audio_muted`

オーディオをミュートまたはミュート解除します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `muted` | `bool` | オーディオをミュートするかどうか。 |

---

### `reachy_mini.media.media_server.GstMediaServer`

WebRTC ストリームを処理するための GStreamer ベースのメディアサーバー。

### メソッド

#### `start`

メディアサーバーを起動します。

---

#### `stop`

メディアサーバーを停止します。

---

#### `create_offer`

着信接続用の WebRTC オファーを作成します。

**戻り値:**

`str` — SDP オファー文字列。

---

#### `handle_answer`

クライアントからの WebRTC アンサーを処理します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `answer` | `str` | クライアントからの SDP アンサー。 |

---

#### `add_track`

接続にメディアトラックを追加します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `track` | `MediaStreamTrack` | 追加するメディアトラック。 |

---

#### `remove_track`

接続からメディアトラックを削除します。

**パラメータ:**

| Name | Type | Description |
|------|------|-------------|
| `track` | `MediaStreamTrack` | 削除するメディアトラック。 |