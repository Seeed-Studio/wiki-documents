---
description: reTerminal && reTerminal DM-FAQ
title: 画面のリフレッシュレートが低すぎる問題の解決方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/screen_refresh_rate_low
last_update:
  date: 7/2/2024
  author: Parker
---

<!-- ### Q17: How to solve screen refresh rate is too low -->

## 問題の説明

画面に明らかなリフレッシュのちらつき縞模様が発生します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/DM_bug.gif" alt="pir" width={600} height="auto" /></p>

## 問題の解決

- **ステップ 1.** ターミナルで以下のコマンドを入力します。

```sh
sudo raspi-config
```

- **ステップ 2.** `6 Advanced Options` を選択してEnterキーを押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/01.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** `A9 Wayland` を選択してEnterキーを押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/02.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** `Yes` を選択してEnterキーを押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/03.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 5.** `Ok` を選択してEnterキーを押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/04.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** `Finish` を選択してEnterキーを押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/05.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** 今すぐ再起動を選択し、`Yes` を選択してEnterキーを押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/06.png" alt="pir" width={600} height="auto" /></p>

:::note
bullseyeシステムを使用している場合、waylandモードに切り替えるとリモートログインソフトウェアVNCが無効になる可能性があります。
bookwormシステムを使用している場合は、この問題は発生しません。
:::