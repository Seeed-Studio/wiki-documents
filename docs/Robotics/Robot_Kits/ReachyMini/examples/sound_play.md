---
description: Example demonstrating audio playback through Reachy Mini's speaker using WAV files or continuous live audio with push_audio_sample API.
title: Sound Playback
keywords:
- audio
- sound
- speaker
- wav
- playback
- live audio
- sine tone
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Sound Playback

This example demonstrates two ways to play audio through Reachy Mini's speaker:
- **`--wav`**: Play a WAV file using the `play_sound()` API.
- **`--live`**: Push a continuous sine tone using the low-level `push_audio_sample()` API, useful for real-time audio sources such as text-to-speech engines or microphone input.

**Usage:**
```bash
# Play a wav file
python sound_play.py --wav /path/to/file.wav --backend webrtc

# Push a continuous sine tone (Ctrl+C to stop)
python sound_play.py --live --backend webrtc --tone-hz 440
```

**Options:**
- `--wav <path>`: Path to a WAV file to play.
- `--live`: Push a continuous sine tone.
- `--tone-hz <freq>`: Sine wave frequency in Hz (`--live` mode only, default: 440).
- `--backend`: Media backend to use (`default_no_video`, `gstreamer_no_video`, or `webrtc`).

See the full example at: [sound_play.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/sound_play.py)
