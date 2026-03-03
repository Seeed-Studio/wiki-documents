---
description: reTerminal-FAQ
title: reTerminalドライバーインストール後にブザーやLEDが動作しない問題の解決方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/buzzer-leds-not-work_by_drivers
last_update:
  date: 6/21/2023
  author: Seraphina
---


<!-- Q13: LEDs and Buzzer do not work after installing reTerminal drivers -->

この問題は長く続くことはありません。後でreTerminalドライバー自体からこの問題を完全に解決する予定です

- **ステップ 1.** **/boot/config.txt**を開く

```sh
sudo vi /boot/config.txt
```

- **ステップ 2.** 以下の行をコメントアウトし、**ESC**を押した後に**:wq**と入力してファイルを保存する

```sh
#dtoverlay=reTerminal-bridge
```

- **ステップ 3.** reTerminalを再起動する

```sh
sudo reboot
```

これでLEDとブザーが正常に動作するようになります。