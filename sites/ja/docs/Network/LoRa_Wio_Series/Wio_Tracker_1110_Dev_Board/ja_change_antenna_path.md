---
description: Wio Tracker 1110 ボードの LoRa アンテナパスを変更する
title: アンテナパスの変更
keywords:
- Antenna
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/change_antenna_path
sidebar_position: 6
last_update:
  date: 7/8/2024
  author: Jessie
---


Wio Tracker 1110 Dev ボードはデフォルトでオンボード LoRa アンテナを使用していますが、より良い信号を得るために外部アンテナが必要な場合があります。この章では、外部 LoRa アンテナを接続するためにアンテナパスを変更する方法をユーザーに説明します。

- `R3` を取り外します。
- `R4` を 0R に変更します。

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