---
description: 更改 Wio Tracker 1110 开发板的 LoRa 天线路径
title: 更改天线路径
keywords:
- Antenna
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/change_antenna_path
sidebar_position: 6
last_update:
  date: 7/8/2024
  author: Jessie
---


Wio Tracker 1110 开发板默认使用板载 LoRa 天线，为了获得更好的信号，我们可能需要外部天线，本章将指导用户更改天线路径以连接外部 LoRa 天线。

- 移除 `R3`。
- 将 `R4` 更改为 0R。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/path.png" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: 'center' }}>
  <div class="video-container">
  <iframe
      width="666"
      height="360"
      src="https://www.youtube.com/embed/r1hJnt0wZg8"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
  ></iframe>
  </div>
</div>
