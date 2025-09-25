---
description: Arduino をダウンロードして Arduino ドライバーをインストールする
title: Arduino をダウンロードして Arduino ドライバーをインストールする

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Download-Arduino-and-install-Arduino_Driver
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus 用

---


![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Arduino_quickstart.jpg)

## Arduino 環境をダウンロードする

現在、Arduino IDE は Windows、Mac OS X、Linux 用に利用可能です。以下のボタンをクリックしてダウンロードしてください。

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

:::note
    最新バージョンの Arduino IDE を使用することをお勧めします。
:::

## Arduino IDE のセットアップ

### Windows および Mac OS X 用

対応するソフトウェアをダウンロードし、setup.exe をクリックして、指示に従えば完了します。

### Linux 用

こちらをご覧ください：![Linux での Arduino のインストール](http://playground.arduino.cc/Learning/Linux)

## Seeeduino を PC に接続する

USB ケーブルを使用して Seeeduino ボードをコンピュータに接続します。緑色の電源 LED（PWR とラベル付けされています）が点灯するはずです。

## ドライバーをインストールする

### Windows 7 での Seeeduino 用ドライバーのインストール

* ボードを接続し、Windows がドライバーのインストールプロセスを開始するのを待ちます。数秒後、プロセスは失敗します。
* 「マイコンピュータ」を右クリックしてコントロールパネルを選択し、デバイスマネージャーを開きます。

* 「ポート (COM &amp; LPT)」の下を確認します。「USB シリアルポート」という名前の開いているポートが表示されるはずです。「USB シリアルポート」を右クリックし、「ドライバーソフトウェアの更新」オプションを選択します。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver1.jpg)

* 次に、「コンピュータを参照してドライバーソフトウェアを検索」を選択します。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver2.jpg)

* 最後に、Arduino ソフトウェアのダウンロード内の「Drivers」フォルダにある「FTDI USB Drivers」という名前のドライバーファイルを選択します。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver3.jpg)

<font color="red"><strong>注意:</strong> FTDI USB ドライバーは Arduino から提供されています。ただし、Xadow Main Board、Seeeduino Clio、Seeeduino Lite などの他のコントローラー用のドライバーをインストールする場合は、対応するドライバーファイルをダウンロードして保存し、ダウンロードしたドライバーファイルを選択する必要があります。</font>

* ドライバーが正常にインストールされると、以下のダイアログボックスが自動的に表示されます。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver4.jpg)

* Windows デバイスマネージャーを開いて、ドライバーがインストールされていることを確認できます。「ポート」セクションに「USB シリアルポート」が表示されます。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver5.jpg)

* Arduino 環境でもシリアルポートを確認できます。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver6.jpg)

### Windows 8 での Seeeduino 用ドライバーのインストール

Windows 8 でドライバーをインストールする前に、編集中のファイルを保存してください。操作中に数回の再起動が発生します。

* 「Windows キー」+「R」を押します。

* shutdown.exe /r /o /f /t 00 を入力します。

* 「OK」ボタンをクリックします。

* システムが「オプションの選択」画面に再起動します。

* 「オプションの選択」画面から「トラブルシューティング」を選択します。

* 「トラブルシューティング」画面から「詳細オプション」を選択します。

* 「詳細オプション」画面から「Windows スタートアップ設定」を選択します。

* 「再起動」ボタンをクリックします。

* システムが「詳細ブートオプション」画面に再起動します。

* 「ドライバー署名の強制を無効にする」を選択します。

* システムが起動したら、Windows 7 と同じ手順で Arduino ドライバーをインストールできます。

### Mac OS での Seeeduino 用ドライバーのインストール

* ページにアクセスします：[https://www.ftdichip.com](https://www.ftdichip.com)。

* Mac OS X バージョン用のドライバー（2.2.18 (32bit)）をダウンロードします。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver7.png)

* ダウンロードしたドライバーファイルを開き、FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkg をダブルクリックします。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver8.png)

* ダブルクリックすると、インストーラーウィンドウが表示されます。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver9.png)

* 「続ける」をクリックします。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver10.png)

* ドライバーが正常にインストールされると、以下のダイアログボックスが表示されます。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver11.png)

* Seeeduino でテストします。

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver12.png)

-----------------------------

# 追加

## ドライバのインストール

まず最初に以下を行ってください：

* **Micro-USBケーブルを用意する**
  * まずMicro-USBケーブルが必要です。Androidスマートフォンのデータケーブルでも問題ありません。
もし見つからない場合は、[こちら](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100)で購入できます。

* **ボードを接続する**
  * Seeeduino V4.2は、コンピュータへのUSB接続または外部電源供給のいずれかから自動的に電力を供給します。USBケーブルを使用してArduinoボードをコンピュータに接続してください。緑色の電源LED（**PWR**とラベル付けされています）が点灯するはずです。

### Windowsの場合

:::note
このドライバはWindows XP、Windows Vista、Windows 7、Windows 8/8.1、Windows 10で利用可能です。
:::

[![ここに画像の説明を入力](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

* ボードを接続し、Windowsがドライバのインストールプロセスを開始するのを待ちます。数分後、プロセスは最善を尽くしても失敗します。
* スタートメニューをクリックし、コントロールパネルを開きます。
* コントロールパネル内で「システムとセキュリティ」に移動します。次に「システム」をクリックします。「システム」ウィンドウが開いたら、**デバイスマネージャー**を開きます。
* 「ポート（COM & LPT）」の下を確認します。「Seeeduino v4.2」という名前のオープンポートが見つかるはずです。「COM & LPT」セクションがない場合は、「その他のデバイス」の下に「不明なデバイス」があるか確認してください。
* 「Seeeduino v4.2」ポートを右クリックし、「ドライバーソフトウェアの更新」オプションを選択します。
* 次に、「コンピューターを参照してドライバーソフトウェアを検索」を選択します。
* 最後に、「seeed_usb_serial.inf」という名前のドライバファイルを選択します。
* これでWindowsがドライバのインストールを完了します。

### Mac OSXの場合

ドライバをインストールする必要はありません。

### Linuxの場合

## Linuxでの使用開始

Linuxで使用する場合は、[LinuxでのArduinoのインストール](http://playground.arduino.cc/Learning/Linux)をご覧ください。

ドライバをインストールする必要はありません。

-----------------------
まず最初に、Arduinoソフトウェアをインストールする必要があります。

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

-------------

#### Q1. Arduino UNOとSeeeduino v4.2の違いは何ですか？

Seeeduino v4.2はArduino UNOと完全に互換性があります。主な違いは以下の通りです：

* ボードの電源供給とプログラムにMicro USBを使用
* 3つのオンボードGroveコネクタ
* 3.3V/5Vシステム電源スイッチ
* LDOの代わりにDCDC回路を使用し、効率が向上
* その他の回路改善

#### Q2. Seeeduino v4.2にスケッチをアップロードできません

以下を確認してください：

* 電源LEDが点灯しているか
* 正しいポートとボード（Seeeduino v4.2）を選択しているか
* Arduino IDEを閉じて再度開き、再試行してください

#### Q3. 他の問題がある場合、技術サポートはどこで受けられますか？

[Seeedフォーラム](https://community.seeedstudio.com/discover.html?t=Arduino)に質問を投稿できます。

## 技術サポートと製品ディスカッション

<br />

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>