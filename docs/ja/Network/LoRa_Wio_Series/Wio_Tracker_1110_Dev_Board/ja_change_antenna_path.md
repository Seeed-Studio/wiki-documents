---
description: Wio Tracker 1110 ボードの LoRa アンテナパスを変更する
title: アンテナパスの変更
keywords:
- アンテナ
- トラッカー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/change_antenna_path
sidebar_position: 6
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

Wio Tracker 1110 開発ボードはデフォルトでオンボードの LoRa アンテナを使用していますが、より良い信号を得るために外部アンテナが必要になる場合があります。この章では、外部 LoRa アンテナを接続するためにアンテナパスを変更する方法を説明します。

* `R3` を取り外します。
* `R4` を 0Ω に変更します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/path.png" alt="pir" width={600} height="auto" /></p>

<div style={{ textAlign: 'center' }}>
  <iframe
      width="666"
      height="360"
      src="https://www.youtube.com/embed/r1hJnt0wZg8"
      title="YouTube 動画プレーヤー"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
  ></iframe>
</div>