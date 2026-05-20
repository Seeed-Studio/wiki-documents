---
description: Media API reference for Reachy Mini covering media manager, audio, camera, and WebRTC components.
title: Media API
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
url: https://wiki.seeedstudio.com/reachymini_api_media/
---

# Media

## Media Manager

### `reachy_mini.media.media_manager.MediaManager`

MediaManager class for managing audio and video streams on the Reachy Mini robot.

### Methods

#### `start_audio`

Start the audio stream.

---

#### `stop_audio`

Stop the audio stream.

---

#### `start_video`

Start the video stream.

---

#### `stop_video`

Stop the video stream.

---

## Audio

### `reachy_mini.media.audio_base.AudioBase`

Base class for audio handling on Reachy Mini.

### Methods

#### `play_sound`

Play a sound file.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `file_path` | `str` | Path to the sound file to play. |

---

#### `set_volume`

Set the audio volume.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Volume level (0-100). |

---

#### `get_volume`

Get the current audio volume.

**Returns:**

`int` — Current volume level (0-100).

---

### `reachy_mini.media.audio_gstreamer.GStreamerAudio`

GStreamer-based audio implementation for Reachy Mini.

### Methods

#### `start_recording`

Start audio recording.

---

#### `stop_recording`

Stop audio recording.

---

#### `get_audio_stats`

Get audio statistics.

**Returns:**

`Dict` — Dictionary containing audio statistics.

---

## Audio Utils Functions

### `reachy_mini.media.audio_utils.get_respeaker_card_number`

Get the card number for the ReSpeaker device.

**Returns:**

`int` — The ALSA card number for the ReSpeaker.

---

### `reachy_mini.media.audio_utils.has_reachymini_asoundrc`

Check if the Reachy Mini asoundrc configuration file exists.

**Returns:**

`bool` — True if the configuration file exists.

---

### `reachy_mini.media.audio_utils.check_reachymini_asoundrc`

Check if the Reachy Mini asoundrc configuration is valid.

**Returns:**

`bool` — True if the configuration is valid.

---

### `reachy_mini.media.audio_utils.write_asoundrc_to_home`

Write the asoundrc configuration to the user's home directory.

---

## Audio Control Utils Functions

### `reachy_mini.media.audio_control_utils.ReSpeaker`

ReSpeaker USB microphone array controller.

### Methods

#### `set_channel`

Set the active channel for the ReSpeaker.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `channel` | `int` | Channel number to set as active. |

---

#### `get_volume`

Get the microphone volume.

**Returns:**

`int` — Current microphone volume (0-100).

---

#### `set_volume`

Set the microphone volume.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `volume` | `int` | Volume level (0-100). |

---

### `reachy_mini.media.audio_control_utils.find`

Find connected ReSpeaker devices.

**Returns:**

`List[ReSpeaker]` — List of found ReSpeaker devices.

---

### `reachy_mini.media.audio_control_utils.init_respeaker_usb`

Initialize the ReSpeaker USB microphone.

**Returns:**

`ReSpeaker` — Initialized ReSpeaker device.

---

## Camera

### `reachy_mini.media.camera_gstreamer.GStreamerCamera`

GStreamer-based camera implementation for Reachy Mini.

### Methods

#### `start`

Start the camera stream.

---

#### `stop`

Stop the camera stream.

---

#### `get_frame`

Get the current camera frame.

**Returns:**

`np.ndarray` — Current camera frame as a numpy array.

---

#### `undistort_points`

Undistort image points using camera calibration parameters.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `points` | `np.ndarray` | Input points to undistort. |
| `camera_matrix` | `np.ndarray` | Camera intrinsic matrix. |
| `dist_coeffs` | `np.ndarray` | Distortion coefficients. |

**Returns:**

`np.ndarray` — Undistorted points.

---

## Camera Utils Functions

### `reachy_mini.media.camera_utils.undistort_points`

Undistort points using camera calibration parameters.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `points` | `np.ndarray` | Input points to undistort. |
| `camera_matrix` | `np.ndarray` | Camera intrinsic matrix. |
| `dist_coeffs` | `np.ndarray` | Distortion coefficients. |

**Returns:**

`np.ndarray` — Undistorted points.

---

### `reachy_mini.media.camera_utils.scale_intrinsics`

Scale camera intrinsic parameters for different image resolutions.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `intrinsics` | `np.ndarray` | Original camera intrinsic matrix. |
| `scale_factor` | `float` | Scale factor for the intrinsics. |

**Returns:**

`np.ndarray` — Scaled camera intrinsic matrix.

---

## Camera Constants

### `reachy_mini.media.camera_constants.CameraResolution`

Camera resolution configuration class.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `width` | `int` | Image width in pixels. |
| `height` | `int` | Image height in pixels. |

---

### `reachy_mini.media.camera_constants.CameraSpecs`

Base class for camera specifications.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `resolution` | `CameraResolution` | Camera resolution. |
| `frame_rate` | `int` | Frame rate in fps. |
| `camera_matrix` | `np.ndarray` | Camera intrinsic matrix. |
| `dist_coeffs` | `np.ndarray` | Distortion coefficients. |

---

### `reachy_mini.media.camera_constants.ArducamSpecs`

Specifications for the Arducam camera module.

---

### `reachy_mini.media.camera_constants.ReachyMiniLiteCamSpecs`

Specifications for the Reachy Mini Lite camera.

---

### `reachy_mini.media.camera_constants.ReachyMiniWirelessCamSpecs`

Specifications for the Reachy Mini Wireless camera.

---

### `reachy_mini.media.camera_constants.OlderRPiCamSpecs`

Specifications for older Raspberry Pi camera modules.

---

### `reachy_mini.media.camera_constants.MujocoCameraSpecs`

Specifications for the MuJoCo simulation camera.

---

### `reachy_mini.media.camera_constants.GenericWebcamSpecs`

Specifications for generic USB webcams.

---

## WebRTC

### `reachy_mini.media.webrtc_client_gstreamer.GstWebRTCClient`

WebRTC client using GStreamer for streaming audio and video.

### Methods

#### `connect`

Connect to the signaling server.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `signaling_url` | `str` | URL of the signaling server. |
| `token` | `str` | Authentication token. |

---

#### `disconnect`

Disconnect from the signaling server.

---

#### `start_stream`

Start streaming audio and video.

---

#### `stop_stream`

Stop streaming audio and video.

---

#### `attach_video`

Attach a video element to receive the stream.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `video_element` | `HTMLVideoElement` | Video element to attach. |

---

#### `set_audio_muted`

Mute or unmute the audio.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `muted` | `bool` | Whether to mute the audio. |

---

### `reachy_mini.media.media_server.GstMediaServer`

GStreamer-based media server for handling WebRTC streams.

### Methods

#### `start`

Start the media server.

---

#### `stop`

Stop the media server.

---

#### `create_offer`

Create a WebRTC offer for incoming connections.

**Returns:**

`str` — SDP offer string.

---

#### `handle_answer`

Handle a WebRTC answer from a client.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `answer` | `str` | SDP answer from the client. |

---

#### `add_track`

Add a media track to the connection.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `track` | `MediaStreamTrack` | Media track to add. |

---

#### `remove_track`

Remove a media track from the connection.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `track` | `MediaStreamTrack` | Media track to remove. |