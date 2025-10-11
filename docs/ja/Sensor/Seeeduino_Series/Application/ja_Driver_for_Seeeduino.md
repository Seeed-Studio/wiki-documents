---
description: Seeeduino用ドライバー
title: Seeeduino用ドライバー
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Driver_for_Seeeduino
last_update:
  date: 05/15/2025
  author: shuxu hu
---


## ドライバーのインストール

### Windows 7でSeeeduinoのドライバーをインストールする

* ボードを接続し、Windowsがドライバーのインストールプロセスを開始するのを待ちます。数分後、プロセスは失敗します。
* 「マイコンピュータ」を右クリックしてコントロールパネルを選択し、デバイスマネージャーを開きます。

* 「ポート（COM & LPT）」の下を確認します。「USBシリアルポート」という名前のオープンポートが表示されるはずです。「USBシリアルポート」を右クリックし、「ドライバーソフトウェアの更新」オプションを選択します。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver1.jpg)

* 次に、「コンピュータを参照してドライバーソフトウェアを検索する」オプションを選択します。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver2.jpg)

* 最後に、Arduinoソフトウェアのダウンロード内の「Drivers」フォルダにある「FTDI USB Drivers」という名前のドライバーファイルを選択します。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver3.jpg)

**注意:** FTDI USB DriversはArduinoから提供されています。ただし、Xadow Main Board、Seeeduino Clio、Seeeduino Liteなどの他のコントローラーのドライバーをインストールする場合は、対応するドライバーファイルをダウンロードして保存し、ダウンロードしたドライバーファイルを選択する必要があります。

* ドライバーが正常にインストールされると、以下のダイアログボックスが自動的に表示されます。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver4.jpg)

* Windowsデバイスマネージャーを開いて、ドライバーがインストールされていることを確認できます。「ポート」セクションに「USBシリアルポート」が表示されます。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver5.jpg)

* Arduino環境でもシリアルポートを確認できます。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver6.jpg)

### Windows 8でSeeeduinoのドライバーをインストールする

Windows 8でドライバーをインストールする前に、編集中のファイルを保存してください。操作中に数回の電源オフが発生する可能性があります。

* 「Windowsキー」+「R」を押します。
* shutdown.exe /r /o /f /t 00 を入力します。
* 「OK」ボタンをクリックします。
* システムが再起動し、「オプションを選択」画面が表示されます。
* 「オプションを選択」画面から「トラブルシューティング」を選択します。
* 「トラブルシューティング」画面から「詳細オプション」を選択します。
* 「詳細オプション」画面から「Windowsスタートアップ設定」を選択します。
* 「再起動」ボタンをクリックします。
* システムが「詳細ブートオプション」画面に再起動します。
* 「ドライバー署名の強制を無効にする」を選択します。
* システムが起動したら、Windows 7と同じ方法でArduinoドライバーをインストールできます。

### Mac OSでSeeeduinoのドライバーをインストールする

* ページにアクセスします: [https://www.ftdichip.com](https://www.ftdichip.com)。

* Mac OS Xバージョン用のドライバーをダウンロードします。名前は2.2.18（32bit）です。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver7.png)

* ダウンロードしたドライバーファイルを開き、FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkgをダブルクリックします。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver8.png)

* ダブルクリックすると、インストーラーウィンドウが表示されます。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver9.png)

* 「続行」をクリックします。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver10.png)

* ドライバーが正常にインストールされると、以下のダイアログボックスが表示されます。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver11.png)

* Seeeduinoでテストします。

![画像をここに入力](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver12.png)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>