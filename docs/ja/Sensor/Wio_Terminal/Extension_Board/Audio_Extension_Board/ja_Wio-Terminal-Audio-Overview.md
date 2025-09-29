---
description: 概要
title: Wio Terminal 用オーディオライブラリ概要
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Audio-Overview
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal 用オーディオライブラリ概要

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak.gif"/></div>

この Wiki では、[**ReSpeaker 2-Mic Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html) を使用して Wio Terminal でオーディオライブラリを使用する方法を紹介します。このライブラリを利用することで、Wio Terminal を使用して音声の録音、再生、分析が可能になります！さらに、このオーディオライブラリは音声認識などのさまざまな分野に実装することができます。

## 必要なハードウェア

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**ReSpeaker 2-Mics Pi HAT**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

- *Wio Terminal 用 40 ピン Pi HAT アダプタボード（未発売）*

## ハードウェア接続

> 現時点では、ソフトウェアをテストする場合、リード線を飛ばして接続する必要があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/ai-wt.png"/></div>

## はじめに

Wio Terminal 用オーディオライブラリを使用するには、以下の手順に従ってください。

## Seeed_Arduino_Audio のインストール

1. [Seeed_Arduino_Audio](https://github.com/Seeed-Studio/Seeed_Arduino_Audio) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、このライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_Audio` ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Wio Terminal 用 FS ライブラリのインストール

- 公式の [**Wio Terminal ファイルシステム Wiki**](https://wiki.seeedstudio.com/ja/Wio-Terminal-FS-Overview/) ページをご覧ください。