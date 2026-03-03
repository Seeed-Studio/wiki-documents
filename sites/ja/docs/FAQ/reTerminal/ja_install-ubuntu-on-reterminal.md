---
description: reTerminal-FAQ
title: reTerminalにUbuntuをインストールする方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/install-ubuntu-on-reterminal
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q10: How can I install Ubuntu on reTerminal? -->

reTerminalにUbuntuをインストールしたい場合は、以下の手順に従って段階的に進めてください：

- **ステップ 1.** [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi)をreTerminalのeMMCストレージにフラッシュします

:::note
フラッシュ手順については[こちら](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)を参照してください。**Raspberry Pi Imager**を開いた後、`CHOOSE OS > Use custom`に移動し、上記のイメージを選択してフラッシュしてください
:::

- **ステップ 2.** reTerminalにSSHで接続し、以下のコマンドを順番に実行します。ユーザー名として**ubuntu**、パスワードとして**ubuntu**を使用してください

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **ステップ 3.** これで、reTerminalはUbuntuデスクトップで起動しますが、向きが間違っています

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 4.** 右上角の**電源アイコン**をクリックし、**Settings**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **ステップ 5.** **Displays**を選択し、**Orientation**の下で**Portrait Left**を選択して**Apply**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

最終的に、適切な向きでUbuntuデスクトップが表示されます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>