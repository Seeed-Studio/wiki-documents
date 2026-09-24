---
description: Enable RTSP output on reCamera Pro and watch the video feed in external players such as VLC, or integrate it with NVRs and video management systems.
title: Watch the Stream in an External Player (RTSP)
keywords:
  - reCamera
  - reCamera Pro
  - RTSP
  - streaming
  - VLC
  - NVR
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rtsp
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_rtsp/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Watch the Stream in an External Player (RTSP)

The Web UI's **Streaming Settings** page configures how reCamera Pro outputs its video streams, so you can watch the feed in a third-party player (VLC, ffplay, etc.) or integrate the camera with NVRs, video management systems, or your own applications.

## 1. Enable streaming on the device

1. Log in to the Web UI and open the live view page.
2. Go to **Streaming Settings** on the right.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZrIYeGVxqa.png" />

3. Configure the following items:

| Parameter | Description |
|---|---|
| Stream Setting Switch | Enable or disable streaming for the current stream |
| Main Stream / Sub-Stream | Select which stream to configure |
| Streaming Protocol | Streaming protocol, e.g. RTSP |
| Authentication Type | Authentication required to access the stream, e.g. no authentication |

4. Click **Apply Settings** to save.

The main stream and the sub-stream are configured separately, so you can, for example, send the high-definition main stream to a recorder and the low-bitrate sub-stream to remote viewers.

## 2. Get the stream address

{/* TODO(verify): document exactly where the RTSP URL (including port and stream path) is shown in the Web UI, and the default port/path for main stream and sub-stream */}

The stream address is based on the device IP — `rtsp://<reCamera_IP>:<port>/<stream path>`. Check the Streaming Settings page after applying your configuration for the exact address of each stream.

## 3. Play in an external player

**VLC**: Media → Open Network Stream → paste the RTSP address → Play.

**ffplay** (from FFmpeg):

```bash
ffplay rtsp://<reCamera_IP>:<port>/<stream path>
```

If you enabled an authentication type other than "no authentication", supply the credentials the player asks for.
{/* TODO(verify): confirm how credentials are passed in the RTSP URL / player dialog for each supported authentication type */}

**NVR / VMS**: add the camera as an RTSP device using the same address; select the sub-stream if the NVR manages many channels.

## Troubleshooting

- **No picture in the player** — confirm the Stream Setting Switch is on for the stream you are playing, and that the player is on the same network as the device.
- **Choppy playback over Wi-Fi** — switch to the sub-stream or lower the main stream bitrate in [Basic Settings](/recamera_pro_image_quality/).
- **Stream works in the browser preview but not externally** — check the Authentication Type and any network access controls (see [Network, Time and Access Control](/recamera_pro_device_info/)).

## Related pages

- [Image Quality and Low Light](/recamera_pro_image_quality/) (encoding parameters per stream)
- [Configure Event Recording](/recamera_pro_record_settings/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
