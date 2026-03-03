---
description: Edison_4WD_Auto_Robotic_Platform
title: Edison_4WD_Auto_Robotic_Platform 
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edison_4WD_Auto_Robotic_Platform
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform12.jpg)

4WDオートロボティックプラットフォームは、Intel Edison Arduinoキットを搭載した強力なモバイルユニットです。このプラットフォームを制御するには、Wi-Fi接続が可能なスマートフォンまたはコンピュータを使用して、そのWi-Fiアクセスポイントに接続します。ウェブブラウザを開き、アドレス[http://192.168.42.1:8000](http://192.168.42.1:8000)を入力すると、操作ダッシュボードが表示されます。これは、メイカー向けの基本的なプロジェクトであり、このプラットフォームを改造する能力がある場合は、より強力なリメイクを歓迎します。

## はじめに

### 部品リスト

|部品|仕様|素材|数量|
|-----|----|-----|-----|
|ブラケット1|200 * 35 * 20mm * 3.0mm|アルミニウム|2|
|ブラケット2|135 * 35 * 20mm * 3.0mm|アルミニウム|2|
|角ジョイント構造|29 * 12 * 10mm * 2.0mm|金属|4|
|トッププレート|200 * 132 * 1.5mm|アルミニウム|1|
|ボトムボード|199 * 129 * 2.0mm|アクリル|1|
|バッテリーフィクサー|67 * 15 * 2.0mm|アクリル|2|
|アッパーボード|184 * 132 * 2.0mm|アクリル|1|
|ホイール|Ф85mm * W31mm|プラスチック＆ゴム|4|
|シャフトカプラー|Ф4mmシャフト用|金属|4|
|DCモーター|[仕様](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_Spec.pdf)|/|2|
|DCモーター（エンコーダー付き）|[仕様](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_with_Encoder_Spec.pdf)|/|2|
|ディスタンスホルダー|M3.0 * H45+6.0mm|金属|4|
|ディスタンスホルダー|M3 × 10mm|金属|4|
|ディスタンスホルダー|M2 * 10mm|金属|3|
|六角穴付き皿ボルト|M4.0 * H8.0mm|金属|16|
|十字穴付き丸頭ボルト|M4.0 * H8.0mm|金属|4|
|十字穴付き丸頭ボルト|M3 * 35mm|金属|4|
|十字穴付き丸頭ボルト|M3 * 8mm|金属|30|
|ワッシャー付き十字穴付き丸頭ボルト|M3.0 * H6.0mm|金属|8|
|ボルト、スプリングロックワッシャー、平ワッシャーの組み合わせ|M2 * 8mm|金属|6|
|六角ナット|M3|金属|8|
|スプリングロックワッシャー|M4|金属|4|
|平ワッシャー|M3 * 7 * 0.5|金属|4|
|ドライバー|/|金属＆プラスチック|1|
|六角レンチ|/|金属|1|
|[Grove - I2Cモータードライバー](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)|/|PCB|1|
|[Base Shield V2](https://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=132_134)|/|PCB|1|
|[Grove - Universal 4 Pin Buckled 20cm Cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)|/|ケーブル|1|
|ディーン並列アダプター|プラグ|/|1|
|ディーン電源ケーブルのオス|/|ケーブル|1|
|ディーンからDC電源ケーブル|/|ケーブル|1|
|TRXからディーン電源ケーブル|/|ケーブル|1|
|ケーブルタイ|3 * 60mm|プラスチック|3|
|組み立て説明書|A4|コピー用紙|1|

### 組み立て方法

[組み立て説明書.pdf](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Assembly_Instruction_02.pdf)

**1. 本体を組み立てる**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_01.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_02.PNG)

**2. ケーブルを接続する**

1) 以下は接続するケーブル付きの部品です。モータードライバーをねじるには2.5mmのスロット付きドライバーが必要です。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble01.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble17.JPG)

2) アルミニウム製ヒートシンクをモータードライバーのチップに貼り付け、中間ボードを組み立てます。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble12.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble18.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble19.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble14.JPG)

3) モータードライバーを接続します。モーターグループの黒いケーブルを「M1-」「M2-」に、赤いケーブルを「M1+」「M2+」に接続します。電源ケーブルを接続し、黒いケーブルを「GND」に、赤いケーブルを「VS」に接続します。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble04.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble16.png)

4) モーターグループを本体に組み込みます。同じグループのモーターは同じ側に組み込む必要があります。ナイロンケーブルを使用してワイヤーをまとめ、Groveケーブルを接続します。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble05.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_03.PNG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble06.jpg)

5) 中間ボードを取り付けます。電源ケーブルとGroveケーブルは右側の穴を通します。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble07.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble08.jpg)

6) 1対2の電源コネクター、バッテリーアダプターケーブル、Arduinoボード電源ケーブルを接続します。GroveケーブルはBase ShieldのA0ピンに接続します。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble09.jpg)

7) バッテリーコネクターを慎重に接続して電源を入れます。正しく接続されているかテストします。LEDが点灯しない場合は問題を確認してください。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble10.JPG)

8) USBケーブルを接続してソフトウェアをテストします。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble11.JPG)

**3.組み立てを続ける**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_03.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_04.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_05.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_06.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_07.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_08.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_09.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_10.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_11.PNG)

### 開発環境

Edison ArduinoはArduino IDEでプログラム可能ですが、より強力な開発を行うためにLinuxシステムに入り、低レベルの開発を行います。最も重要なリソースはIntelが提供するmraaライブラリです。初期の開発では困難がありましたが、便利な開発環境を構築するために、必要なリソースをすべて構成し、4WDプラットフォームプロジェクトを構築したLinuxファイルシステムのrootfsパーティションをコピーしました。このプラットフォームを動作させるために必要なのは、Edisonに新しいファームウェアをフラッシュすることだけです。Linuxシステムで行ったことや独自のプロジェクトを作成する方法については、以下のGitHubリポジトリをご覧ください：

[https://github.com/Seeed-Studio/Edison_WiFi_Car](https://github.com/Seeed-Studio/Edison_WiFi_Car)

#### Windowsユーザー向け

##### ツールのインストール

**Edison公式ウェブサイトのスタートガイド**に従って、必要なドライバーとターミナルエミュレーターPuTTyをインストールしてください。

[dfu-util - Device Firmware Upgrade Utilities](http://dfu-util.sourceforge.net/releases/dfu-util-0.8-binaries.tar.xz)をダウンロードし、xzファイルを「C:\」または他のディレクトリに解凍してください。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform22.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform21.png)

**環境変数の追加**

「このPC」を右クリック &gt; 「詳細設定」 &gt; 「環境変数」 &gt; dfu-util.exeのパスをコピーして「Path」環境変数に追加します。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform22.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform23.png)

##### 新しいファームウェアのフラッシュ

**1.ダウンロードと解凍**

[Seeed Wikiからカスタマイズされたファームウェアをダウンロード](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip)

[OneDriveからカスタマイズされたファームウェアをダウンロード](https://onedrive.live.com/?cid=b24d52d93861663f&amp;id=B24D52D93861663F%212178&amp;ithint=file,7z&amp;authkey=!AIH0ajk2jCZzTFE)

**2.PuTTyを使用**

公式のEdisonスタートガイドに従ってPuTTyでEdisonにログインします。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform25.png)

**3.ファームウェアのフラッシュ**

以下の手順に従ってください。

**ステップ1. flashall.batをダブルクリック**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform26.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform27.png)

**ステップ2. PuTTyでコマンドラインに「reboot」と入力するか、Edison ArduinoボードのRESETボタンを押します。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform28.png)

**ステップ3. ファームウェアのフラッシュ**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform29.png)

**ステップ4. Edisonが再起動し、Wi-Fi Carサービスが開始されます。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform30.png)

**ステップ5: 電源を再起動**

バッテリーを切断して再接続します。

#### Macユーザー向け

[Intel Edison公式ウェブサイト](https://communities.intel.com/docs/DOC-23193)の「Alternate Flashing Method」を参照してください。

#### Linuxユーザー向け

**1.カスタマイズされたイメージをダウンロード**

<pre>
&gt;&gt;wget https://www.seeedstudio.com/wiki/images/a/a6/Edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip
&gt;&gt;unzip edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip
&gt;&gt;7z x edison-image-rel1-maint-rel1-ww42-14-for-wificar.7z
</pre>

**2.イメージをフラッシュ**

1) dfu-utilをインストール

<pre>
sudo apt-get install dfu-util
</pre>

2) Edison用のデバイスを確認：

<pre>
&gt;&gt;ls /dev/ttyUSB*
</pre>

3) シリアルターミナルを開く

<pre>
&gt;&gt;sudo screen /dev/ttyUSB0 115200
</pre>

4) flashall.shを実行

<pre>
&gt;&gt;cd edison-image-rel1-maint-rel1-ww42-14-for-car
&gt;&gt;sudo ./flashall.sh
</pre>

5) Edisonで「reboot」と入力

<pre>
&gt;&gt;reboot
</pre>

### アプリケーション

スマートフォンまたはコンピュータを使用してWi-Fiアクセスポイントを検索します。SSIDは、Edisonメインボード上のS/N IDによって一意のシリアル番号で命名されており、例：EDIOSN-FZED445001UCV501、パスフレーズは12345678です。
Wi-Fiに接続した後、任意のウェブブラウザを開き、[http://192.168.42.1:8000](http://192.168.42.1:8000)にアクセスすると、4WDプラットフォームを制御するためのダッシュボードが表示されます。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform15.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform13.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform14.png)

[Wi-Fi 車 Android アプリ](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/WiFiCarcn.xiongyihui.wificar2.apk.zip)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform33.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform34.png)

###  プログラム方法

`/usr/share/car` に移動するとプロジェクトが見つかります。これらのファイルは以下の通りです：

<pre>
&gt;&gt;cd /usr/share/wificar
&gt;&gt;ls
</pre>

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform31.png)

<table  cellspacing="0">
<tr>
<th scope="col"> car.py</th>
<td> 車の動作クラス</td>
</tr>
<tr>
<th> car_httpd.py</th>
<td> Webサーバープロセス</td>
</tr>
<tr>
<th> i2c_motor.py</th>
<td> i2c モータードライバー</td>
</tr>
<tr>
<th> softi2c.py</th>
<td> Edison 用の softi2c ドライバー</td>
</tr>
<tr>
<th> www</th>
<td> Webサーバーのソースファイル</td>
</tr>
</table>

###   強化 - 2つのモータードライバー

**1. 配線**

ここでは、ワイヤーストリッパー、はんだごて、ハサミを使用してモーターの延長ワイヤーを切断し、そのうちの1つを使用して新しい1対2のモーターパワーケーブルを作成します。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring09.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring02.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring10.JPG)

**2. 組み立て**

**ステップ 1. モーターを接続する**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring01.JPG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble16.png)

**ステップ 2. モーターとモータードライバーを組み立てる。黄色の矢印に注意してください。2つのモータードライバーは2本のネジだけで固定されています。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring13.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring11.png)

**ステップ 3. 電源ケーブルと2本のGroveケーブルを接続する。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring06.JPG)

**ステップ 4. 中央のボードを取り付ける。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring07.JPG)

**ステップ 5. GroveケーブルをD4(D4,D5)およびD8(D8,D9)に接続する。特別な定義はありません。バッテリーを接続して接続をテストしてください。**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring08.JPG)

**3. ソフトウェアの変更**

仮想ターミナルを開き、`car.py` を開いて以下の変更を行います。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring14.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring15.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring16.png)

## FAQ

1. エジソンのWiFiに接続し、ダッシュボードが表示されたが、ローバーを操作できない場合。

A: 電源を再起動してください。

2. エジソンArduinoボードの2つのUSBポートが車輪に遮られている場合、USBケーブルを接続するにはどうすればよいですか？

A: USBケーブルを接続する際には車輪を取り外す必要があります。Linuxシステムにアクセスするだけであれば、WiFi APに接続し、SSHツール（PuTTyはSSHに対応しています）を使用してアクセスすることができます。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform33.jpg)

3. Wi-Fiカーサーバーを実行し、スマートフォンがダッシュボードを受信したが、ローバーを操作できない場合。なぜですか？

A: i2cモータードライバーにはバグがあり、送信中の命令の完全なバイトが中断されると、モータードライバーが制御を失います。ドライバーボードのリセットボタンを押してリセットしてください。

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform32.png)

## サポート

*   [github-Edison_WiFi_Car](https://github.com/Seeed-Studio/Edison_WiFi_Car)

*   [Intel Edison公式ウェブサイト](https://www.intel.com/content/www/us/en/do-it-yourself/edison.html)

*   [Edison - ソフトウェアダウンロード](https://communities.intel.com/docs/DOC-23242)

*   [Intel公式フォーラム](https://communities.intel.com/community/makers/edison/forums)

*   [intel-iot-devkit/mraa](https://github.com/intel-iot-devkit/mraa)

*   [Intel Edison入門ガイド](https://communities.intel.com/docs/DOC-23147)

*   [Edisonのフラッシング（有線） - Windows（Mac、Linux）](https://communities.intel.com/docs/DOC-23192)

*   [Edison 4WD Auto Robotic Platform DCモータースペック](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_Spec.pdf)

*   [Edison 4WD Auto Robotic Platform DCモーター（エンコーダ付き）スペック](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_with_Encoder_Spec.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>