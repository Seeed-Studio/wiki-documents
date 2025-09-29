---
description: reTerminal-FAQ
title: スリープ後にreTerminal LCDを復帰させる方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wakeup_reTerminal_LCD_after_sleep
last_update:
  date: 12/16/2024
  author: Joshua Lee
---

<!-- Q6:I cannot wake up the reTerminal LCD after sleep -->

[github.com/Seeed-Studio/pi-gen-expand/commit/8affb3b](https://github.com/Seeed-Studio/pi-gen-expand/commit/8affb3b) の時点で、この問題の修正がドライバーに統合されているため、手動で追加の手順を実行する必要はありません。

以前のバージョンについては、[github.com/Seeed-Studio/seeed-linux-dtoverlays](https://github.com/Seeed-Studio/seeed-linux-dtoverlays) からドライバーを再インストールすることを検討してください。詳細な手順については、[新しいRaspbian OSをフラッシュした後のreTerminalドライバーのインストール](/ja/reterminal-dm-flash-OS/#install-reterminal-drivers-after-flashing-new-raspbian-os) を参照してください。