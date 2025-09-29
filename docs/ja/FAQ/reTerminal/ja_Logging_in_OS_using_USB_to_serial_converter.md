---
description: reTerminal-FAQ
title: USB to シリアルコンバーターを使用してRaspberry Pi OS/ Ubuntu OSまたは他のOSにログインする方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Logging_in_OS_using_USB_to_serial_converter
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- ## Q5: How can I log in to Raspberry Pi OS/ Ubuntu OS or other OS using a USB to serial converter -->

**USB to シリアルコンバーター**をお持ちの場合、以下の手順でRaspberry Pi OSにログインできます

USB to シリアルコンバーターからreTerminalの40ピンGPIOヘッダーの**UARTピン**にジャンパーワイヤーを以下のように接続します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

次に、コンピューター上でソフトウェアを設定しましょう。お使いのオペレーティングシステムに従って進めてください

### Windows の場合

- **ステップ 1.** USB to シリアルコンバーターをPCに接続します

- **ステップ 2.** Windowsの検索ボックスで**デバイスマネージャー**と入力して**デバイスマネージャー**を開きます

- **ステップ 3.** **ポート (COM と LPT)** のドロップダウン矢印をクリックし、接続されたシリアルポートの名前を見つけます（例：**COM7**）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **ステップ 4.** [このリンク](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)にアクセスして**Putty**をダウンロードしてインストールします

**注意：** PuttyはSSHおよびtelnetクライアントで、SSH経由でreTerminalに接続するために使用できます。既にPuttyがインストールされている場合は、この手順をスキップできます

- **ステップ 5.** Puttyを開いてPCをreTerminalに接続します

- **ステップ 6.** **接続タイプ**で**Serial**を選択します

- **ステップ 7.** 以下のように設定を構成します：

  - シリアルライン: COM7（お使いのCOMポートを選択）
  - 速度: 9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **ステップ 8.** **Open**をクリックします

- **ステップ 9.** Puttyウィンドウで、以下のようにログイン詳細を入力します

```sh
- ユーザー名: pi
- パスワード: raspberry
```

- **ステップ 10.** Raspberry Pi OSに正常にログインできた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### Mac/Linux の場合

- **ステップ 1.** USB to シリアルコンバーターをPCに接続します

- **ステップ 2.** Mac/Linuxで**ターミナルウィンドウ**を開きます

- **ステップ 3.** 以下を入力して**パッケージリスト**を更新します

```sh
sudo apt-get update
```

- **ステップ 4.** 以下を入力して**minicom**をインストールします

```sh
sudo apt-get install minicom
```

- **ステップ 5.** ターミナルで以下を入力して、接続されたシリアルデバイスを表示します

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>例: <br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **ステップ 6.** 以下を入力してシリアルデバイスに接続します

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**注意：** ボーレートは9600に設定されています

- **ステップ 7.** 上記のハードウェア接続の後、壁のコンセントから電源を入れてreTerminalの電源をオンにします

これでRaspberry Pi OSに正常にログインできました！