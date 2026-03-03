---
description: Seeeduino Cloud と Grove IoT スターターキット（AWS 対応）
title: Seeeduino Cloud と Grove IoT スターターキット（AWS 対応）
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_seeeduino_wiki_cover.JPG)

*主な記事: まずはこちらから <a href="/ja/Grove_IoT_Starter_Kits_Powered_by_AWS" ><span><font size={"3"}> Grove IoT スターターキット（AWS 対応）</font></span></a> 、<a href="/ja/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud ボード</font></span></a>*

**<a href="/ja/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud ボード</font></span></a>** は、Dragino WiFi IoT モジュール [HE](http://www.dragino.com/products/linux-module/item/87-he.html) と ATmega32u4 をベースにしたマイクロコントローラーボードです。**HE** は高性能で低コストの 150M、2.4G WiFi モジュールで、内部にオープンソースの OpenWrt システムを搭載しています。Seeeduino Cloud は [Arduino Yun](https://www.arduino.cc/en/Main/ArduinoBoardYun) 互換ボードでもあります。このキットには、AWS クラウドコンピューティングを活用してアイデアを具体的なアプリケーションに変えるために最も頻繁に使用されるセンサーとアクチュエーターが含まれています。

[![画像の説明を入力してください](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://wwww.amazon.com/dp/B01669BB60)

## 特徴

--------

- 箱から出してすぐに使用可能、プラグアンドプレイ、ブレッドボードやはんだ付け作業は不要。
- AWS のサービスおよび AWS のプラクティスに完全準拠。
- 開発者やメーカー向けのステップバイステップのチュートリアルで、迅速なプロトタイピングをサポート。

## パーツリスト

-------------------

![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_seeeduino_cloud.JPG)

| ボード/パーツ                                                                                                                                            | 数量 | ドキュメント                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----|-------------------------------------------------------------------------------|
| [Seeeduino Cloud 開発ボード](https://www.seeedstudio.com/Seeeduino-Cloud-Arduino-Yun-compatible-openWRT-controller-p-2123.html?cPath=6_7) | 1   | <a href="/ja/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud ボード</font></span></a>                               |
| [Base Shield](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html?cPath=98_16)                                                                | 1   | [こちらを読む](/ja/Base_Shield_V2/ "Base shield v2")                                 |
| [Grove - LCD RGB バックライト](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html?cPath=34_36)                                         | 1   | [こちらを読む](/ja/Grove-LCD_RGB_Backlight "Grove - LCD RGB Backlight")             |
| [Grove - リレー](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)                                                                  | 1   | [こちらを読む](/ja/Grove-Relay "Grove - Relay")                                     |
| [Grove - ブザー](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)                                                                   | 1   | [こちらを読む](/ja/Grove-Buzzer "Grove - Buzzer")                                   |
| [Grove - サウンドセンサー](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html?cPath=25_128)                                                   | 1   | [こちらを読む](/ja/Grove-Sound_Sensor "Grove - Sound Sensor")                       |
| [Grove - タッチセンサー](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)                                                    | 1   | [こちらを読む](/ja/Grove-Touch_Sensor "Grove - Touch Sensor")                       |
| [Grove - ロータリーアングルセンサー](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)                                      | 1   | [こちらを読む](/ja/Grove-Rotary_Angle_Sensor "Grove - Rotary Angle Sensor")         |
| [Grove - 温度センサー](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html?cPath=25_125)                                       | 1   | [こちらを読む](/ja/Grove-Temperature_Sensor_V1.2 "Grove - Temperature Sensor V1.2") |
| [Grove - LED](https://www.seeedstudio.com/Grove-LED-p-767.html)                                                                                  | 1   | [こちらを読む](/ja/Grove-Red_LED "Grove-Red_LED")                                         |
| [Grove - ライトセンサー](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)                                                    | 1   | [こちらを読む](/ja/Grove-Light_Sensor "Grove - Light Sensor")                       |
| [Grove – ボタン](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)                                                                | 1   | [こちらを読む](/ja/Grove-Button "Grove - Button")                                   |
| DIP LED 青-青                                                                                                                                     | 1   |                                                                               |
| DIP LED 緑-緑                                                                                                                                   | 1   |                                                                               |
| DIP LED 赤-赤                                                                                                                                       | 1   |                                                                               |
| ミニサーボ                                                                                                                                            | 1   |                                                                               |
| Micro USB ケーブル - 48cm                                                                                                                                | 1   |                                                                               |

## AWS IoT サービスの設定

------------------------------

このセクションでは、AWS IoT サービスの設定方法を説明します：

- ステップ 1. [AWS アカウント](https://aws.amazon.com/free/?nc1=h_ls)を作成します。

- ステップ 2. [AWS IoT](https://us-west-2.console.aws.amazon.com/iotv2/home?region=us-west-2#/home)にアクセスします。

- ステップ 3. IoT コンソールが読み込まれたら、「Get Started」をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Get%20started.png)

- ステップ 4. 左側のメニューで「Manage」をクリックし、「Register a thing」をクリックします。
- ステップ 5. 任意の名前を入力します（元のチュートリアルでは「temperature」と名付けられています）。その後、「create」をクリックします（「Register a thing」の画像）。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Register%20a%20thing.png)

- ステップ 6. 作成した「thing」をクリックします。
- ステップ 7. 左側のメニューで「Security」をクリックし、「Create certificate」をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Thing%20-%20Security.png)

- ステップ 8. 3つのダウンロードリンクが表示され、それぞれ異なるキーまたは証明書ファイルに対応しています。これらのファイルをダウンロードしてください（後で使用します）。また、「Activate」ボタンの上にあるルート CA もダウンロードしてください。「Activate」をクリックし、その後「Attach a policy」をクリックして「Create a policy」をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificate%20created.png)

- ステップ 9. ポリシーに任意の名前を付けます（例：「policy1」）。初期設定では、アクションに `iot:*`、リソース ARN に `*` を使用できます。「Allow」にチェックを入れ、「create」をクリックします。
将来的に、アクションとリソース ARN に `*` を使用すると、すべてのデバイスで全アクションを実行できるようになります。本番環境のポリシーでは、より具体的に設定するのがベストプラクティスです。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Create%20a%20policy.png)

- ステップ 10. ポリシーが作成されたら、左側のメニューで「Certificates」をクリックします。
作成した証明書をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificates.png)

- ステップ 11. 「Actions」ボタンをクリックし、メニューから「Attach policy」を選択します。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificate%20Actions.png)

- ステップ 12. 作成したポリシーを選択し、「Attach」をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Attach%20policy.png)

## Seeeduino Cloud (Arduino Yun) のセットアップ

-----------------------------------------

### Seeeduino Cloud (Arduino Yun) の初期設定

初めて Seeeduino Cloud または Arduino Yun を使用する場合は、<a href="/ja/Seeeduino_Cloud"><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a> をクリックして開始してください。以下の手順を進める前に、**expect** がコンピュータにインストールされており、[Arduino IDE](https://www.arduino.cc/en/Main/OldSoftwareReleases) が正しくインストールされていることを確認してください。

### AWS-IoT-Arduino-Yún-SDK のダウンロード

[AWS-IoT-Arduino-Yún-SDK zip パッケージ](https://s3.amazonaws.com/aws-iot-device-sdk-arduino-yun/AWS-IoT-Arduino-Yun-SDK-latest.zip)をダウンロードし、コンピュータ上の AWS-IoT-Arduino-Yun-SDK に解凍します。

### Mac OS/Linux へのインストール

以下の手順を進める前に、コンピュータに Arduino IDE が正しくインストールされていることを確認してください。

#### Ubuntu のインストール

Ubuntu の場合、以下のコマンドを実行してください：
```
sudo apt-get install expect
```
Mac OS X では、**expect** はデフォルトでインストールされています。

#### Arduino IDE のインストール

Linux 上での Arduino IDE のインストールについては、[こちら](http://playground.arduino.cc/Linux/All)を参照してください。

#### 開発ボードのセットアップ

- ステップ 1. Arduino Yún ボードをセットアップし、WiFi に接続します。その IP アドレスとパスワードを取得してください。設定方法がわからない場合は、<a href="/ja/Seeeduino_Cloud#getting-started"><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a> を参照してください。
- ステップ 2. コンピュータが同じネットワーク（ローカル IP アドレス範囲）に接続されていることを確認してください。
- ステップ 3. [こちら](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem)から AWS IoT CA ファイルをダウンロードし、*root-CA.crt* として保存します。
- ステップ 4. AWS IoT CA ファイル、プライベートキー、証明書を AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Python-Runtime/certs に配置します。
- ステップ 5. ターミナルを開き、**AWS-IoT-Arduino-Yun-SDK** に移動します。以下のコマンドを実行してスクリプトを実行します：
```
chmod 755 AWSIoTArduinoYunInstallAll.sh
./AWSIoTArduinoYunInstallAll.sh <Board IP> <UserName> <Board Password>
```
デフォルトでは、Seeeduino Cloud のユーザー名は `root`、パスワードは `seeeduino` です。Arduino Yún ボードの場合、ユーザー名は `root`、パスワードは `Arduino` です。ステップ 5 では、デバイスが必要なパッケージ（distribute、python-OpenSSL、pip、paho-MQTT）をダウンロードしてインストールするのに 15～20 分かかる場合があります。スクリプトが終了する前にターミナルを閉じないでください。閉じた場合は、ステップ 5 を最初からやり直す必要があります。

- ステップ 6. **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Arduino-Yun-Library** フォルダを Arduino SDK インストール時に作成された Arduino ライブラリフォルダにコピーします。Mac OS のデフォルトでは、**Documents/Arduino/libraries** にあります。

- ステップ 7. インストール中に Arduino IDE が起動していた場合は再起動してください。IDE の Examples フォルダ内に AWS IoT の例が表示されるはずです。他に **AWSIoTArduinoYunScp.sh** と **AWSIoTArduinoYunSetupEnvironment.sh** という 2 つのスクリプトがありますが、これらは **AWSIoTArduinoYunInstallAll.sh** 内で使用されます。新しい認証情報をボードにアップロードする際には、常に **AWSIoTArduinoYunScp.sh** を使用できます。ディレクトリ **AWS-IoT-Arduino-Yun-SDK/** にいる場合、コマンドは以下のようになります：

```
./AWSIoTArduinoYunScp.sh <ボードのIP> <ユーザー名> <ボードのパスワード> <ファイル> <宛先>
```

### Windowsでのインストール

以下の手順を進める前に、PCに Putty と WinSCP がインストールされていることを確認してください。他のツールを使用して Arduino Yún ボードに SSH 接続したりファイルを転送したりする場合は、以下の手順をツールに合わせて調整する必要があります。Putty は [こちら](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) からダウンロードできます。WinSCP は [こちら](http://winscp.net/eng/download.php) からダウンロードできます。ボードをセットアップしてください。

- ステップ 1. Arduino Yún Cloud ボードをセットアップし、WiFi に接続します。その IP アドレスとパスワードを取得してください。方法がわからない場合は、<a href="/ja/Seeeduino_Cloud#getting-started" ><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a> を参照してください。

- ステップ 2. PC が同じネットワーク（ローカル IP アドレス範囲）に接続されていることを確認してください。

- ステップ 3. AWS IoT CA ファイルを [こちら](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem) からダウンロードし、**root-CA.crt** として保存します。

- ステップ 4. 保存した AWS IoT CA ファイル、プライベートキー、および証明書を **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Python-Runtime/certs** フォルダに配置します。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_certs.png)

- ステップ 5. WinSCP を起動し、AWS-IoT-Python-Runtime/ フォルダをボード上の /root にアップロードします。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_run_time_file.png)

- ステップ 6. Putty を使用してボード上の OpenWRT に SSH 接続し、以下のコマンドを実行して必要なライブラリをインストールします。必要なパッケージをダウンロードしてインストールするのに 15～20 分かかる場合があります。

```
opkg update
opkg install distribute
opkg install python-openssl
easy_install pip
pip install AWSIoTPythonSDK==1.0.0
```

- ステップ 7. **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Arduino-Yun-Library** フォルダを Arduino SDK インストール時に作成された Arduino ライブラリフォルダにコピーします。Windows のデフォルトでは、**Documents/Arduino/libraries** にあります。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_AWS_library_file_to_arduino_library.png)

- ステップ 8. インストール中に Arduino IDE が起動していた場合は再起動してください。IDE の Examples フォルダ内に AWS IoT の例が表示されるはずです。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_load_example.png)

### Grove モジュールを接続する

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_hardware_connection.png)

例を実行する
------------

### サンプルプロジェクトをダウンロードする

- ステップ 1. まず [こちら](https://github.com/Lee-Kevin/10.GroveWithAWSIot/) からサンプルプロジェクトをダウンロードしてください。

- ステップ 2. ダウンロードした zip ファイルをコンピュータに解凍し、解凍されたファイル名から **-master** を削除します。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_open_example_sketch.png)

### ヘッダーファイルを修正する

- ステップ 1. **aws_iot_config.h** ファイルを開き、以下の画像の赤枠部分を、事前に保存したアカウントに基づくサンプルコードに置き換えます。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_replace_header_file.png)

- ステップ 2. **GroveWithAWSIot.ino** をダブルクリックし、以下のマークされたコードを先ほど保存したヘッダーファイルに置き換え、アップロードをクリックします。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_select_serial_port.png)

- ステップ 3. 以下の情報が表示されたら、コードが Seeeduino Cloud に正常にダウンロードされたことを意味します。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_upload_complete.png)

### 結果を確認する

- ステップ 1. シリアルモニターを開くと、以下のような情報が表示されます。

![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_view_result_in_serial_monitor.png)

- ステップ 2. 次に AWS IoT のウェブサイトを開き、アカウントにサインインします。そして、数分前に作成した Thing をクリックします。

- ステップ 3. **Update shadow** ボタンをクリックします。これで温度がウェブサイトにアップロードされたことが確認できます。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_reopen_thing_and_update_shadow.png)

## リソース

---------

- [AWS IoT ドキュメント](http://aws.amazon.com/documentation/iot/)
- <a href="/ja/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud ウィキページ</font></span></a>
- [AWS IoT Arduino Yún SDK](https://github.com/aws/aws-iot-device-sdk-arduino-yun)

## 技術サポート & 製品ディスカッション

   <br />
 当社の製品をお選びいただきありがとうございます！お客様が当社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>