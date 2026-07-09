---
description: recamera_pro_live_preview
title: recamera_pro_live_preview
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_live_preview
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/recamera_pro_live_preview/
---

## Web UI Introduction
reCamera Pro has a built-in Web UI management interface, eliminating the need for users to install additional client software. As long as the computer is on the same local area network as reCamera Pro, you can directly access the camera's IP address through a browser to enter the device management page. Access is as follows:
```text
http://<reCamera_IP>
```

After entering the Web UI, you will need to enter a password for the first login. The initial password (old password) is `recamera`. Enter your new password as needed.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />
Log in using the newly set password. The username is `admin`.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_a6gnjmMqnt.png" />After logging in with the new password, users can perform real-time preview, take photos, record videos, switch streams, view device information, set image parameters, and configure AI inference-related settings, facilitating quick device debugging and function verification.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />
## Main Functions
### Real-time Preview
Users can directly view the real-time video feed from reCamera Pro in their browser, which is convenient for device installation, lens adjustment, and image confirmation. Click "Start" to begin playback and view the camera's live feed.

### Take Photo
Supports saving the current frame as an image, suitable for scene recording, debugging archives, or data collection. The image data will then be automatically downloaded to your browser's default download path.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2XAT0cUJwO.jpg" />

### Record Video
Supports starting or stopping the recording function via the Web UI. Videos can be saved to the device's local storage for later viewing and analysis.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_nPNSUbHEOa.jpg" />
After starting recording, the "Start Recording" button will change to "End Recording". After clicking it again, wait a moment for reCamera to package the image data. The browser will automatically download the corresponding MP4 format video stream data, which can be found in your browser's default download path.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_03SDnfmwp5.jpg" />

### Stream Switching
Supports switching between the main stream and sub-stream. Users can select the appropriate stream based on network bandwidth, image quality requirements, or preview scenarios.

Through the built-in Web UI, reCamera Pro can be accessed and configured without additional software, making it suitable for rapid deployment, function verification, and edge AI camera application development.

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
