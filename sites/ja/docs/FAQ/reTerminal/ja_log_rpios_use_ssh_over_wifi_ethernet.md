---
description: reTerminal-FAQ
title: Wi-Fi/イーサネット経由でSSHを使用してRaspberry Pi OS/Ubuntu OSまたはその他のOSにログインする
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/log_rpios_use_ssh_over_wifi_ethernet
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Log in to Raspberry Pi OS/ Ubuntu OS or Other OS using SSH over Wi-Fi/ Ethernet -->

**Wi-Fi/イーサネット経由でSSH**を使用してRaspberry Pi OSにログインしたい場合は、以下の手順に従ってください。まずreTerminalでWi-Fi/イーサネットを設定し、次にWindows/Mac/LinuxでSSHを使用します。

## ステップ1：reTerminalでWi-Fi/イーサネットを設定する

:::caution
Raspberry Pi ImagerでWiFiを設定し、SSHを有効にしている場合は、ステップ1をスキップできます
:::

- **1.** **Wi-Fi接続がある**場合は、Raspberry Pi OSデスクトップの右上角にある**Wi-Fiアイコン**をクリックし、Wi-Fiネットワークを選択して、画面上の仮想キーボードを使用してパスワードを入力します

**注意：** 他のOSではWi-Fi設定の場所が異なる場合があります

- **2.** **Wi-Fi接続がない**場合は、ルーターからreTerminalのイーサネットポートにイーサネットケーブルを接続できます

**注意：** reTerminalとコンピューターが同じネットワークに接続されていることを確認してください

- **3.** 左上角のRaspberry Piアイコンをタッチし、`Preferences > Raspberry Pi Configuration`に移動して**Interfaces**タブをクリックします

- **4.** **SSH**の横にある**Enable**を選択し、**OK**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

次に、コンピューター上でソフトウェアを設定しましょう。お使いのオペレーティングシステムに従って進めてください

## ステップ2：Windows/Mac/LinuxでSSHを設定する

### Windows用

- **1.** **コマンドプロンプト**を開き、以下を入力します

```sh
ssh pi@raspberrypi.local
```

- **2.** プロンプトに対して**yes**と入力します

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **3.** パスワードを以下のように入力します

```sh
raspberry
```

- **4.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

### Mac/Linux用

- **1.** コンピューターで**ターミナル**を開き、以下を入力します

```sh
ssh pi@raspberrypi.local
```

- **2.** 以下のメッセージに対して**yes**と入力します

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **3.** パスワードを求められたら、以下を入力します

```sh
raspberry
```

- **4.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>