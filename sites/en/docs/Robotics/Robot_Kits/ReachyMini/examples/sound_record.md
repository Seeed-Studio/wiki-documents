---
description: Example demonstrating audio recording from Reachy Mini's microphone array and saving to WAV file with configurable duration.
title: Sound Recording
slug: /reachymini_examples_sound_record
keywords:
  - audio recording
  - microphone
  - wav file
  - soundfile
  - recording
  - microphone array
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/reachymini_examples_sound_record/
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

See the full example at: [sound_record.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/sound_record.py)
