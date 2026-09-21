---
description: Watch the live feed in your browser, take photos, start and stop manual recordings, and switch between the main stream and sub-stream on reCamera Pro.
title: "Preview, Capture and Manual Recording"
keywords:
  - reCamera
  - reCamera Pro
  - live preview
  - take photo
  - record video
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_live_preview
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_live_preview/
---

# Preview, Capture and Manual Recording

reCamera Pro has a built-in Web UI, so you never need to install extra client software. As long as your computer is on the same local network as the device, open a browser and go to:

```text
http://<reCamera_IP>
```

On first login the Web UI asks you to change the password. The initial password (old password) is `recamera`; enter a new password of your choice, then log in with the username `admin`.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />

After logging in you can preview the live feed, take photos, record videos, switch streams, and open the image, AI inference, and device settings — everything needed for quick debugging and function verification.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />

## Watch the live preview

On the live view page, the left side is the video preview area and the right side is the function configuration area. Click **Start Playback** to watch the current camera feed in your browser.

The bottom of the preview area provides basic playback controls:

- Main Stream / Sub-Stream selection
- Start Playback / Stop Playback
- Volume adjustment
- Current connection status display

If the device is disconnected, the video stream is abnormal, or the network is unreachable, the preview window shows a connection failure prompt so you can quickly tell what is wrong with the stream.

## Take a photo

**Take Photo** saves the current frame as an image — useful for scene records, debugging archives, or data collection. The image is automatically downloaded to your browser's default download folder.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2XAT0cUJwO.jpg" />

## Record a video manually

You can start and stop recording directly from the Web UI.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_nPNSUbHEOa.jpg" />

1. Click **Start Recording**. The button changes to **End Recording**.
2. When you are done, click **End Recording** and wait a moment while reCamera Pro packages the video.
3. The browser automatically downloads the recording as an MP4 file to your default download folder.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_03SDnfmwp5.jpg" />

:::note
Manual recording from the preview page is different from AI/event-based recording. To record automatically when detections, sounds, or external triggers occur — and to keep recordings on the device's storage — see [Configure Event Recording](/recamera_pro_record_settings/) and [Find Recordings and Storage](/recamera_pro_storage/).
{/* TODO(verify): confirm whether manual Web UI recordings are ever kept on device storage in addition to the browser download, and the exact firmware version behavior */}
:::

## Switch between main stream and sub-stream

The Web UI supports switching between the **main stream** and the **sub-stream**. Choose based on your network bandwidth, image quality needs, or preview scenario:

- **Main stream** — high-definition preview, video storage, and AI analysis.
- **Sub-stream** — low-bandwidth preview, remote viewing, or multi-channel access.

Stream encoding parameters (resolution, frame rate, bitrate, etc.) are configured separately for each stream; see [Image Quality and Low Light](/recamera_pro_image_quality/).

## Next steps

- [Adjust Image Quality and Low-Light Performance](/recamera_pro_image_quality/)
- [Watch the Stream in an External Player (RTSP)](/recamera_pro_rtsp/)
- [Add OSD Overlays and Privacy Masks](/recamera_pro_osd_masks/)

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
