---
description: reTerminal-FAQ
title: タッチスクリーンの精度問題のトラブルシューティング
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/troubleshooting-touch-screen-inaccuracy
last_update:
  date: 6/21/2023
  author: Seraphina
---

 <!-- Q12: Troubleshooting Touch Screen Inaccuracy -->

画面を正しい向きに設定した後でも、タッチ位置が不正確な場合があり、ディスプレイの特定の領域をタッチしたときにカーソルが予期しない方向に移動することがあります。この問題を解決するには、以下の手順を実行することが重要です。

- **ステップ 1** : ターミナルを開き、以下のコマンドを入力してxorg.conf.dフォルダに移動します

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2** : 「40-libinput.conf」ファイルにアクセスできるようになります。このファイルは以下のコマンドで編集できます。

```sh
sudo nano 40-libinput.conf
```

- **ステップ 3**: **touchscreen** InputClassのInputClassセクションを見つけます。

- **ステップ 4**: 以下のフレーズを追加します。スクリーンショットを参照してください

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 5** : Ctrl+Oで保存し、Enterキーを押してからCtrl+Xを押し、その後再起動します

```sh
Sudo reboot 
```

再起動後、タッチ位置が正確になったことがわかります。これは、ディスプレイの特定の領域をタッチしたときに、カーソルが意図した方向に移動することを意味します。