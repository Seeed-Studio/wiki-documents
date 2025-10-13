---
description: Change the LoRa Antenna Path of the Wio Tracker 1110 Board
title:  Change Antenna Path
keywords:
- Antenna
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /change_antenna_path
sidebar_position: 6
last_update:
  date: 7/8/2024
  author: Jessie
---


The Wio Tracker 1110 Dev board is using the onboard LoRa antenna by default, to get a better signal, we may need an external antenna, this chapter will guide users to change the antenna path to connect an external LoRa antenna.

- Remove `R3`.
- Change `R4` to 0R.

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
