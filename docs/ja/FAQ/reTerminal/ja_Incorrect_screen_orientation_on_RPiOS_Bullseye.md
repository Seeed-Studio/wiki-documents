---
description: reTerminal-FAQ
title: Raspberry Pi OSインストール後に画面の向きが正しくない
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Incorrect_screen_orientation_on_RPiOS_Bullseye
last_update:
  date: 11/24/2023
  author: Seraphina
---

<!-- Q11: Raspberry Pi OS Bullseyeインストール後に画面の向きが正しくない -->
### Raspberry Pi OS Bullseye

**Raspberry Pi OS Bullseye**をインストールした後に画面の向きが間違っていることに気づいた場合は、以下の手順に従ってください：

- **ステップ 1.** **Raspberry Pi OS Bullseye**をreTerminal eMMCにフラッシュした後、[このガイド](https://wiki.seeedstudio.com/ja/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)に従って必要なドライバーをインストールしてください

- **ステップ 2.** **.config**ディレクトリの下に**monitors.xml**という名前の新しいファイルを作成します

```sh
sudo vi ~/.config/monitors.xml
```

- **ステップ 3.** 以下の内容を上記のファイルにコピーしてLCDディスプレイ（DSI-1）を明示的に設定し、**ESC**を押した後に**:wq**と入力してファイルを保存します

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **ステップ 4.** **/boot/config.txt**を開きます

```sh
sudo vi /boot/config.txt
```

- **ステップ 5.** ファイルに以下を追加します

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **ステップ 6.** reTerminalを再起動します

```sh
sudo reboot
```

これでRaspberry Pi OS Bullseyeで画面が正しい向きで表示されます！

### Raspberry Pi OS Bookworm

**Raspberry Pi OS Bookworm**をインストールした後に画面の向きが間違っていることに気づいた場合は、以下の手順に従ってください：

- **ステップ 1.** **Raspberry Pi OS Bookworm**をreTerminal eMMCにフラッシュした後、[このガイド](https://wiki.seeedstudio.com/ja/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)に従って必要なドライバーをインストールしてください


root以外のユーザーを設定し、7月24日のBookwormイメージを使用している場合、以下を実行する必要があることがわかりました：
```sh
sudo chown $USER ~/.config
sudo chgrp $USER ~/.config
sudo chmod u+rwx ~/.config
```

- **ステップ 2.** .config/wayfire.iniを開きます

```sh
sudo vi ~/.config/wayfire.ini
```

- **ステップ 3.** 以下の内容を上記のファイルにコピーしてLCDディスプレイ（DSI-1）を明示的に設定し、**ESC**を押した後に**:wq**と入力してファイルを保存します

```sh
[output:DSI-1]
mode = 720x1280@60
transform = 270
```


- **ステップ 4.** **/boot/config.txt**を開きます

```sh
sudo vi /boot/config.txt
```

- **ステップ 5.** ファイルに以下を追加します

```sh
dtoverlay=reTerminal
```

- **ステップ 6.** reTerminalを再起動します

```sh
sudo reboot
```

これでRaspberry Pi OS Bookwormで画面が正しい向きで表示されます！