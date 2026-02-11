---
description: Example demonstrating how to record audio from Reachy Mini's microphone array and save it to a WAV file for audio processing.
title: Sound Recording
keywords:
- Reachy Mini
- Example
- Audio
- Recording
- Microphone Array
- WAV File
- Audio Processing
slug: /reachymini/examples/sound_record
last_update:
  date: 02/11/2026
  author: Tienjui Wong
translation:
  skip: [zh-CN]
---

# Sound Recording

This example demonstrates how to record audio from Reachy Mini's microphone array and save it to a WAV file. The script records for 5 seconds and saves the audio to `recorded_audio.wav`.

**How it works:**
1. Starts audio recording using `start_recording()`
2. Continuously retrieves audio samples using `get_audio_sample()`
3. Collects samples until the desired duration is reached
4. Stops recording and concatenates all samples
5. Saves the audio data to a WAV file using `soundfile`

**Features:**
- Configurable recording duration (default: 5 seconds)
- Automatic sample rate detection
- Timeout protection to prevent infinite loops
- Support for different media backends

**Usage:**
```bash
python sound_record.py --backend [default_no_video|gstreamer_no_video|webrtc]
```

The recorded audio will be saved to `recorded_audio.wav` in the current directory.

```python title="sound_record.py"
# See ../../../examples/sound_record.py for the full code
# This example demonstrates audio recording from the microphone array
```
