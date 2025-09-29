---
description: reTerminal-FAQ
title: reTerminalで画面回転を無効にする方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/disable_screen_rotation_on_reTerminal
last_update:
  date: 6/21/2023
  author: Seraphina
---

画面が正常に表示されるがreTerminalと一緒に回転する場合、加速度計を削除することで画面の自動回転を無効にし、静的な横向き表示にすることができます。<br/>
画面回転を無効にする手順は以下の通りです：

- **ステップ 1** : ターミナルを開き、パスに移動して**raspi-blacklist.conf**を見つけて開きます。

```
/etc/modprobe.d/raspi-blacklist.conf 
```

- **ステップ 2** : **raspi-blacklist.conf**に以下のコード行を追加します。

```
blacklist lis331dlh_i2c
```

- **ステップ 3** : reTerminalを再起動します

```sh
sudo reboot
```

これらの手順に従うことで、静的な横向き表示になります！