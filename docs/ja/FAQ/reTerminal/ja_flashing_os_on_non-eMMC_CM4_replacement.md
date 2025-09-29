---
description: reTerminal-FAQ
title: eMMC非搭載版CM4に交換した場合のOS書き込み方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/flashing_os_on_non-eMMC_CM4_replacement
last_update:
  date: 6/21/2023
  author: Seraphina
---


<!-- Q4: How can I flash OS if I replace the CM4 with non-eMMC version -->

reTerminalでeMMC非搭載のCompute Module 4を使用したい場合は、micro-SDカードを挿入して、お好みのOSを書き込む必要があります。お使いのオペレーティングシステムに応じて、以下の手順に従ってください。

- **ステップ1.** コンピュータに接続された**micro-SDカードリーダー**を使用するか、ノートパソコンの**内蔵カードリーダー**を使用して、micro-SDカードをコンピュータに挿入します

- **ステップ2.** [このリンク](https://www.raspberrypi.org/software/)にアクセスして**Raspberry Pi Imager**ソフトウェアをダウンロードします

:::note
**Windows、Mac、Ubuntu**のいずれかを選択してダウンロードできます
:::

- **ステップ3.** Raspberry Pi Imagerソフトウェアを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **ステップ4.** キーボードで**CTRL + SHIFT + X**を押して**詳細オプション**ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

ここで**ホスト名の設定、SSHの有効化、パスワードの設定、wifiの設定、ロケール設定**などを行うことができます

- **ステップ5.** **CHOOSE OS**をクリックして、お好みのOSを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

:::note
**Other general purpose OS**に移動することで、**64-bit Ubuntu**などのOSを選択できます
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ6.** **CHOOSE STORAGE**をクリックして、接続されたmicro-sdカードを選択します

- **ステップ7.** 最後に、**WRITE**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

書き込みプロセスが完了するまで数分間お待ちください。

- **ステップ8.** micro-SDカードをコンピュータから取り出し、reTerminalに挿入します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**注意:** micro-sdカードスロットにアクセスするには、reTerminalのシェルを開く必要があります