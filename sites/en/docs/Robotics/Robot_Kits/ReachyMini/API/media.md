---
description: Complete API reference for Reachy Mini media manager including audio, camera, utils, and constants for video and audio streaming.
title: Media API Reference
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
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/reachymini_api_media/
---
# Media

## Media Manager

### `reachy_mini.media.media_manager.MediaManager`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L56)**

Media Manager for handling camera and audio devices.

This class provides a unified interface for managing both camera and audio devices across different backends. It handles initialization, configuration, and cleanup of media resources.

### Methods

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L153)**

Close the media manager and release resources.

This method should be called when the media manager is no longer needed to properly clean up and release all media resources. It stops any ongoing audio recording/playback and closes the camera device.

:::note

After calling this method, the media manager can be reused by calling the appropriate initialization methods again, but it's generally recommended to create a new MediaManager instance if needed.

:::

**Example:**

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

Get the Direction of Arrival (DoA) from the microphone array.

**Returns:**

| Type | Description |
|------|-------------|
| `tuple[float, bool] \| None` | A tuple (angle_radians, speech_detected), or None if the audio system is not available. |

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L313)**

Get an audio sample from the audio device.

**Returns:**

| Type | Description |
|------|-------------|
| `Optional[np.ndarray]` | The recorded audio sample, or None if no data is available. |

---

#### `get_frame`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L216)**

Get a frame from the camera.

:::note

This method returns None if the camera is not initialized or if there's an error capturing the frame. Always check the return value before using the frame.

:::

**Example:**

```python
frame = media.get_frame()
if frame is not None:
    # Process the frame
    cv2.imshow("Camera", frame)
    cv2.waitKey(1)

    # Convert to RGB if needed
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
```

**Returns:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | The captured BGR frame as a numpy array with shape (height, width, 3), or None if the camera is not available or an error occurred. The image is in BGR format (OpenCV convention) and can be directly used with OpenCV functions or converted to RGB if needed. |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L325)**

Get the input samplerate of the audio device.

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L339)**

Get the number of input channels of the audio device.

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L332)**

Get the output samplerate of the audio device.

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L346)**

Get the number of output channels of the audio device.

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L294)**

Play a sound file.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `sound_file` | `str` | Path to the sound file to play. |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L367)**

Push audio data to the output device.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `data` | `npt.NDArray[np.float32]` | The audio data to push to the output device (mono format). |

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L360)**

Start playing audio.

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L306)**

Start recording audio.

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L403)**

Stop playing audio.

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/media_manager.py#L353)**

Stop recording audio.

---

## Audio

### `reachy_mini.media.audio_base.AudioBase`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L25)**

Abstract class for opening and managing audio devices.

This class defines the interface that all audio implementations must follow. It provides common audio parameters and methods for managing audio devices, including microphone input and speaker output functionality.

### Methods

#### `cleanup`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L64)**

Cleanup resources before destruction.

This method should be called to release any resources held by the audio implementation before the object is destroyed.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `SAMPLE_RATE` | `int` | Default sample rate for audio operations (16000 Hz). |
| `CHANNELS` | `int` | Default number of audio channels (2 for stereo). |
| `logger` | `logging.Logger` | Logger instance for audio-related messages. |
| `_respeaker` | `Optional[ReSpeaker]` | ReSpeaker microphone array device handler. |

---

#### `clear_output_buffer`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L210)**

Clear the output buffer.

This method flushes the output buffer to prevent push samples from being played. Overwrite if necessary. It seems that set_max_output_buffers with a low value may be enough for gstreamer backend.

---

#### `get_DoA`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L285)**

Get the Direction of Arrival (DoA) value from the ReSpeaker device.

The spatial angle is given in radians:
- 0 radians is left
- π/2 radians is front/back
- π radians is right

:::info

The microphone array requires firmware version 2.1.0 or higher to support this feature. The firmware is located in `src/reachy_mini/assets/firmware/*.bin`. Refer to https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#update-firmware for the upgrade process.

:::

**Returns:**

| Type | Description |
|------|-------------|
| `tuple` | A tuple containing the DoA value as a float (radians) and the speech detection as a bool, or None if the device is not found. |

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L94)**

Read audio data from the device. Returns the data or None if error.

:::note

This method should be called after `start_recording()` has been called. The sample rate and number of channels can be obtained via `get_input_audio_samplerate()` and `get_input_channels()` respectively.

:::

**Example:**

```python
audio.start_recording()
samples = audio.get_audio_sample()
if samples is not None:
    print(f"Got {len(samples)} audio samples")
```

**Returns:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.float32]]` | A numpy array containing audio samples in float32 format, or None if no data is available or an error occurred. The array shape is typically (num_samples,) for mono or (num_samples, num_channels) for multi-channel audio. |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L121)**

Get the input samplerate of the audio device.

:::note

This value represents the number of audio samples captured per second for each channel.

:::

**Returns:**

| Type | Description |
|------|-------------|
| `int` | The sample rate in Hz at which audio is being captured. Default is 16000 Hz. |

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L149)**

Get the number of input channels of the audio device.

:::note

For the ReSpeaker microphone array, this typically returns 2 channels representing the stereo microphone configuration.

:::

**Returns:**

| Type | Description |
|------|-------------|
| `int` | The number of audio input channels (e.g., 1 for mono, 2 for stereo). Default is 2 channels. |

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L135)**

Get the output samplerate of the audio device.

:::note

This value represents the number of audio samples played per second for each channel.

:::

**Returns:**

| Type | Description |
|------|-------------|
| `int` | The sample rate in Hz at which audio is being played back. Default is 16000 Hz. |

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L163)**

Get the number of output channels of the audio device.

:::note

This determines how audio data should be formatted when passed to `push_audio_sample()` method.

:::

**Returns:**

| Type | Description |
|------|-------------|
| `int` | The number of audio output channels (e.g., 1 for mono, 2 for stereo). Default is 2 channels. |

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L263)**

Play a sound file.

:::note

This is a convenience method that handles the complete playback of a sound file from start to finish. For more control over audio playback, use `start_playing()`, `push_audio_sample()`, and `stop_playing()` methods.

:::

**Example:**

```python
audio.play_sound("/path/to/sound.wav")
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `sound_file` | `str` | Path to the sound file to play. Supported formats depend on the specific implementation. |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L230)**

Push audio data to the output device.

:::note

This method should be called after `start_playing()` has been called. The audio data will be played at the sample rate returned by `get_output_audio_samplerate()`.

:::

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `data` | `npt.NDArray[np.float32]` | Audio samples to be played. The array should contain float32 values typically in the range [-1.0, 1.0]. For mono audio: shape should be (num_samples,). For stereo audio: shape should be (num_samples, 2). |

---

#### `set_max_output_buffers`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L220)**

Set the maximum number of output buffers to queue in the player.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `max_buffers` | `int` | Maximum number of buffers to queue. |

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L191)**

Start playing audio.

This method should initialize the audio playback system and prepare it to receive audio data via `push_audio_sample()`.

:::note

Implementations should handle any necessary resource allocation and error checking. If playback cannot be started, implementations should log appropriate error messages.

:::

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L74)**

Start recording audio.

This method should initialize the audio recording system and prepare it to capture audio data. After calling this method, `get_audio_sample()` should be able to retrieve recorded audio data.

:::note

Implementations should handle any necessary resource allocation and error checking. If recording cannot be started, implementations should log appropriate error messages.

:::

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L249)**

Stop playing audio and release resources.

This method should stop any ongoing audio playback and release all associated resources. After calling this method, `push_audio_sample()` calls will have no effect until `start_playing()` is called again.

:::note

Implementations should ensure proper cleanup to prevent resource leaks.

:::

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_base.py#L177)**

Close the audio device and release resources.

This method should stop any ongoing audio recording and release all associated resources. After calling this method, `get_audio_sample()` should return None until `start_recording()` is called again.

:::note

Implementations should ensure proper cleanup to prevent resource leaks.

:::

---

### `reachy_mini.media.audio_gstreamer.GStreamerAudio`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L76)**

Audio implementation using GStreamer.

### Methods

#### `clear_player`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L398)**

Flush the player's appsrc to drop any queued audio immediately.

---

#### `get_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L253)**

Read a sample from the audio card. Returns the sample or None if error.

See `AudioBase.get_audio_sample()` for complete documentation.

**Returns:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.float32]]` | The captured sample in raw format, or None if error. |

---

#### `get_input_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L267)**

Get the input samplerate of the audio device.

See `AudioBase.get_input_audio_samplerate()` for complete documentation.

---

#### `get_input_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L281)**

Get the number of input channels of the audio device.

See `AudioBase.get_input_channels()` for complete documentation.

---

#### `get_output_audio_samplerate`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L274)**

Get the output samplerate of the audio device.

See `AudioBase.get_output_audio_samplerate()` for complete documentation.

---

#### `get_output_channels`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L288)**

Get the number of output channels of the audio device.

See `AudioBase.get_output_channels()` for complete documentation.

---

#### `play_sound`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L330)**

Play a sound file.

See `AudioBase.play_sound()` for complete documentation.

:::tip

TODO: for now this function is meant to be used on the wireless version.

:::

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `sound_file` | `str` | Path to the sound file to play. |

---

#### `push_audio_sample`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L317)**

Push audio data to the output device.

See `AudioBase.push_audio_sample()` for complete documentation.

---

#### `start_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L302)**

Open the audio output using GStreamer.

See `AudioBase.start_playing()` for complete documentation.

---

#### `start_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L233)**

Open the audio card using GStreamer.

See `AudioBase.start_recording()` for complete documentation.

---

#### `stop_playing`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L310)**

Stop playing audio and release resources.

See `AudioBase.stop_playing()` for complete documentation.

---

#### `stop_recording`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_gstreamer.py#L295)**

Release the camera resource.

See `AudioBase.stop_recording()` for complete documentation.

---

## Audio Utils Functions

### `reachy_mini.media.audio_utils.get_respeaker_card_number`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L67)**

Return the card number of the ReSpeaker sound card, or 0 if not found.

:::note

This function runs 'arecord -l' to list available audio capture devices and processes the output to find Reachy Mini Audio or ReSpeaker devices. It's primarily used on Linux systems with ALSA audio configuration.

The function returns:
- Positive integer: Card number of detected Reachy Mini Audio device
- 0: No Reachy Mini Audio device found, using default sound card
- -1: Error occurred while trying to detect audio devices

:::

**Example:**

```python
card_num = get_respeaker_card_number()
if card_num > 0:
    print(f"Using Reachy Mini Audio card {card_num}")
elif card_num == 0:
    print("Using default sound card")
else:
    print("Error detecting audio devices")
```

**Returns:**

| Type | Description |
|------|-------------|
| `int` | The card number of the detected ReSpeaker/Reachy Mini Audio device. Returns 0 if no specific device is found (uses default sound card), or -1 if there's an error running the detection command. |

---

### `reachy_mini.media.audio_utils.has_reachymini_asoundrc`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L110)**

Check if ~/.asoundrc exists and contains both reachymini_audio_sink and reachymini_audio_src.

:::note

This function checks for the presence of the ALSA configuration file ~/.asoundrc and verifies that it contains the necessary configuration entries for Reachy Mini audio devices (reachymini_audio_sink and reachymini_audio_src). These entries are required for proper audio routing and device management.

:::

**Example:**

```python
if has_reachymini_asoundrc():
    print("Reachy Mini audio configuration is properly set up")
else:
    print("Need to configure Reachy Mini audio devices")
    write_asoundrc_to_home()  # Create the configuration
```

**Returns:**

| Type | Description |
|------|-------------|
| `bool` | True if ~/.asoundrc exists and contains the required Reachy Mini audio configuration entries, False otherwise. |

---

### `reachy_mini.media.audio_utils.check_reachymini_asoundrc`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L141)**

Check if ~/.asoundrc exists and is correctly configured for Reachy Mini Audio.

---

### `reachy_mini.media.audio_utils.write_asoundrc_to_home`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_utils.py#L160)**

Write the .asoundrc file with Reachy Mini audio configuration to the user's home directory.

This function creates an ALSA configuration file (.asoundrc) in the user's home directory that configures the ReSpeaker sound card for proper audio routing and multi-client support. The configuration enables simultaneous audio input and output access, which is essential for the Reachy Mini Wireless version's audio functionality.

The generated configuration includes:
- Default audio device settings pointing to the ReSpeaker sound card
- dmix plugin for multi-client audio output (reachymini_audio_sink)
- dsnoop plugin for multi-client audio input (reachymini_audio_src)
- Proper buffer and sample rate settings for optimal performance

:::info

This function automatically detects the ReSpeaker card number and creates a configuration tailored to the detected hardware. It is primarily used for the Reachy Mini Wireless version.

The configuration file will be created at ~/.asoundrc and will overwrite any existing file with the same name. Existing audio configurations should be backed up before calling this function.

:::

---

## Audio Control Utils Functions

### `reachy_mini.media.audio_control_utils.ReSpeaker`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L172)**

Class to interface with the ReSpeaker XVF3800 USB device.

### Methods

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L317)**

Close the interface.

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L240)**

Read data from a specified parameter on the ReSpeaker device.

---

#### `write`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L181)**

Write data to a specified parameter on the ReSpeaker device.

---

### `reachy_mini.media.audio_control_utils.find`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L322)**

Find and return the ReSpeaker USB device with the given Vendor ID and Product ID.

:::note

This function searches for USB devices with the specified Vendor ID and Product ID using libusb backend. The default values target XMOS XVF3800 devices used in ReSpeaker microphone arrays.

:::

**Example:**

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

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `vid` | `int` | USB Vendor ID to search for. Default: 0x2886 (XMOS). |
| `pid` | `int` | USB Product ID to search for. Default: 0x001A (XMOS XVF3800). |

**Returns:**

| Type | Description |
|------|-------------|
| `ReSpeaker \| None` | A ReSpeaker object if the device is found, None otherwise. |

---

### `reachy_mini.media.audio_control_utils.init_respeaker_usb`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/audio_control_utils.py#L360)**

Initialize the ReSpeaker USB device. Looks for both new and beta device IDs.

:::info

This function attempts to initialize a ReSpeaker microphone array by searching for USB devices with known Vendor and Product IDs. It tries:
1. New Reachy Mini Audio firmware (0x38FB:0x1001) - preferred
2. Old ReSpeaker firmware (0x2886:0x001A) - with warning to update

The function handles USB backend errors gracefully and returns None if no compatible device is found or if initialization fails.

:::

**Example:**

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

**Returns:**

| Type | Description |
|------|-------------|
| `Optional[ReSpeaker]` | A ReSpeaker object if a compatible device is found, None otherwise. |

---

## Camera

### `reachy_mini.media.camera_base.CameraBase`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L39)**

Abstract class for opening and managing a camera.

This class defines the interface that all camera implementations must follow. It provides common camera parameters and methods for managing camera devices, including image capture, resolution management, and camera calibration.

### Methods

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L275)**

Close the camera and release resources.

This method should stop any ongoing image capture and release all associated resources. After calling this method, `read()` should return None until `open()` is called again.

:::note

Implementations should ensure proper cleanup to prevent resource leaks.

:::

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `logger` | `logging.Logger` | Logger instance for camera-related messages. |
| `_resolution` | `Optional[CameraResolution]` | Current camera resolution setting. |
| `camera_specs` | `Optional[CameraSpecs]` | Camera specifications including supported resolutions and calibration parameters. |
| `resized_K` | `Optional[npt.NDArray[np.float64]]` | Camera intrinsic matrix resized to match the current resolution. |

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L227)**

Open the camera.

This method should initialize the camera device and prepare it for capturing images. After calling this method, `read()` should be able to retrieve camera frames.

:::note

Implementations should handle any necessary resource allocation, camera configuration, and error checking. If the camera cannot be opened, implementations should log appropriate error messages.

:::

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L247)**

Read an image from the camera. Returns the image or None if error.

:::note

This method should be called after `open()` has been called. The image resolution can be obtained via the resolution property.

:::

**Example:**

```python
camera.open()
frame = camera.read()
if frame is not None:
    cv2.imshow("Camera Frame", frame)
    cv2.waitKey(1)
```

**Returns:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | A numpy array containing the captured image in BGR format (OpenCV convention), or None if no image is available or an error occurred. The array shape is (height, width, 3) where the last dimension represents the BGR color channels. |

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_base.py#L175)**

Set the camera resolution.

:::note

This method updates the camera's resolution and automatically rescales the camera intrinsic matrix (K) to match the new resolution. The rescaling preserves the camera's field of view and principal point position relative to the image dimensions.

:::

**Example:**

```python
from reachy_mini.media.camera_constants import CameraResolution
camera.set_resolution(CameraResolution.R1280x720at30fps)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `resolution` | `CameraResolution` | The desired camera resolution from the CameraResolution enum. |

---

### `reachy_mini.media.camera_opencv.OpenCVCamera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L76)**

Camera implementation using OpenCV.

This class implements the CameraBase interface using OpenCV, providing cross-platform camera support for Reachy Mini robots. It automatically detects and configures supported camera models.

### Methods

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L173)**

Release the camera resource.

See `CameraBase.close()` for complete documentation.

**Parameters:**

| Name | Description |
|------|-------------|
| Inherits all attributes from CameraBase. | - |
| Additionally manages OpenCV VideoCapture objects and camera connections. | - |

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L117)**

Open the camera using OpenCV VideoCapture.

See `CameraBase.open()` for complete documentation.

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L151)**

Read a frame from the camera.

See `CameraBase.read()` for complete documentation.

**Returns:**

The frame as a uint8 numpy array, or None if no frame could be read.

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_opencv.py#L108)**

Set the camera resolution.

---

### `reachy_mini.media.camera_gstreamer.GStreamerCamera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L79)**

Camera implementation using GStreamer.

### Methods

#### `close`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L292)**

Release the camera resource.

---

#### `get_video_device`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L297)**

Use Gst.DeviceMonitor to find the unix camera path /dev/videoX.

Returns the device path (e.g., '/dev/video2'), or '' if not found.

---

#### `open`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L255)**

Open the camera using GStreamer.

---

#### `read`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L276)**

Read a frame from the camera. Returns the frame or None if error.

**Returns:**

| Type | Description |
|------|-------------|
| `Optional[npt.NDArray[np.uint8]]` | The captured BGR frame as a NumPy array, or None if error. |

---

#### `set_resolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_gstreamer.py#L230)**

Set the camera resolution.

---

## Camera Utils Functions

### `reachy_mini.media.camera_utils.find_camera`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_utils.py#L44)**

Find and return the Reachy Mini camera.

Looks for the Reachy Mini camera first, then Arducam, then older Raspberry Pi Camera. Returns None if no camera is found. Falls back to generic webcam if no specific camera is detected.

:::info

This function tries to detect cameras in the following order:
1. Reachy Mini Lite Camera (preferred)
2. Older Raspberry Pi Camera
3. Arducam
4. Generic Webcam (fallback)

The function automatically sets the appropriate video codec (MJPG) for Reachy Mini and Raspberry Pi cameras to ensure compatibility.

:::

**Example:**

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

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `apiPreference` | `int` | Preferred API backend for the camera. Default is cv2.CAP_ANY. Options include cv2.CAP_V4L2 (Linux), cv2.CAP_DSHOW (Windows), cv2.CAP_MSMF (Windows), etc. |
| `no_cap` | `bool` | If True, close the camera after finding it. Useful for testing camera detection without keeping the camera open. Default is False. |

**Returns:**

| Type | Description |
|------|-------------|
| `Tuple[Optional[cv2.VideoCapture], Optional[CameraSpecs]]` | A tuple containing: cv2.VideoCapture (A VideoCapture object if the camera is found and opened successfully, otherwise None) and CameraSpecs (The camera specifications for the detected camera, or None if no camera was found). |

---

### `reachy_mini.media.camera_utils.find_camera_by_vid_pid`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_utils.py#L128)**

Find and return a camera with the specified VID and PID.

:::note

This function uses the cv2_enumerate_cameras package to enumerate available cameras and find one with the specified USB Vendor ID and Product ID. This is useful for selecting specific camera models when multiple cameras are connected to the system.

The Arducam camera creates two /dev/videoX devices that enumerate_cameras cannot differentiate, so this function tries to open each potential device until it finds a working one.

:::

**Example:**

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

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `vid` | `int` | Vendor ID of the camera. Default is ReachyMiniLiteCamSpecs.vid (0x38FB). |
| `pid` | `int` | Product ID of the camera. Default is ReachyMiniLiteCamSpecs.pid (0x1002). |
| `apiPreference` | `int` | Preferred API backend for the camera. Default is cv2.CAP_ANY. On Linux, this automatically uses cv2.CAP_V4L2 for better compatibility. |

**Returns:**

| Type | Description |
|------|-------------|
| `cv2.VideoCapture \| None` | A VideoCapture object if the camera with matching VID/PID is found and opened successfully, otherwise None. |

---

## Camera Constants

### `reachy_mini.media.camera_constants.CameraResolution`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L34)**

Base class for camera resolutions.

Enumeration of standardized camera resolutions and frame rates supported by Reachy Mini cameras. Each enum value contains a tuple of (width, height, fps).

:::note

The enum values are tuples containing (width, height, frames_per_second). Not all resolutions are supported by all camera models - check the specific camera specifications for available resolutions.

:::

**Example:**

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

**Available Resolutions:**

| Resolution | Description |
|------------|-------------|
| `R1536x864at40fps` | 1536x864 resolution at 40 fps |
| `R1280x720at60fps` | 1280x720 resolution at 60 fps (HD) |
| `R1280x720at30fps` | 1280x720 resolution at 30 fps (HD) |
| `R1920x1080at30fps` | 1920x1080 resolution at 30 fps (Full HD) |
| `R1920x1080at60fps` | 1920x1080 resolution at 60 fps (Full HD) |
| `R2304x1296at30fps` | 2304x1296 resolution at 30 fps |
| `R1600x1200at30fps` | 1600x1200 resolution at 30 fps |
| `R3264x2448at30fps` | 3264x2448 resolution at 30 fps |
| `R3264x2448at10fps` | 3264x2448 resolution at 10 fps |
| `R3840x2592at30fps` | 3840x2592 resolution at 30 fps |
| `R3840x2592at10fps` | 3840x2592 resolution at 10 fps |
| `R3840x2160at30fps` | 3840x2160 resolution at 30 fps (4K UHD) |
| `R3840x2160at10fps` | 3840x2160 resolution at 10 fps (4K UHD) |
| `R3072x1728at10fps` | 3072x1728 resolution at 10 fps |
| `R4608x2592at10fps` | 4608x2592 resolution at 10 fps |

---

### `reachy_mini.media.camera_constants.CameraSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L107)**

Base camera specifications.

Dataclass containing specifications for a camera model, including supported resolutions, calibration parameters, and USB identification information.

:::note

The intrinsic matrix K has the format:
```
[[fx,  0, cx],
 [ 0, fy, cy],
 [ 0,  0,  1]]
```

Where fx, fy are focal lengths in pixels, and cx, cy are the principal point coordinates (typically near the image center).

:::

**Example:**

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

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `name` | `str` | Human-readable name of the camera model. |
| `available_resolutions` | `List[CameraResolution]` | List of supported resolutions and frame rates for this camera model. |
| `default_resolution` | `CameraResolution` | Default resolution used when the camera is initialized. |
| `vid` | `int` | USB Vendor ID for identifying this camera model. |
| `pid` | `int` | USB Product ID for identifying this camera model. |
| `K` | `npt.NDArray[np.float64]` | 3x3 camera intrinsic matrix containing focal lengths and principal point coordinates. |
| `D` | `npt.NDArray[np.float64]` | 5-element array containing distortion coefficients (k1, k2, p1, p2, k3) for radial and tangential distortion. |

---

### `reachy_mini.media.camera_constants.ArducamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L163)**

Arducam camera specifications.

---

### `reachy_mini.media.camera_constants.ReachyMiniLiteCamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L182)**

Reachy Mini Lite camera specifications.

---

### `reachy_mini.media.camera_constants.ReachyMiniWirelessCamSpecs`


**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/media/camera_constants.py#L229)**

Reachy Mini Wireless camera specifications.
