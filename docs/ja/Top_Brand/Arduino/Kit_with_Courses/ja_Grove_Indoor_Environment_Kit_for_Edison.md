---
description: Grove Indoor Environment Kit for Edison
title: Grove Indoor Environment Kit for Edison
keywords:
- コース付きキット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Indoor_Environment_Kit_for_Edison
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove Indoor Environment Kit for Edison
category: その他
bzurl: https://www.seeedstudio.com/Grove-Indoor-Environment-Kit-for-Intel%C2%AE-Edison-p-2427.html
oldwikiname:  Grove Indoor Environment Kit for Edison
prodimagename: Grove_Indoor_Environment_Kit_for_Edison_with_case.JPG
surveyurl: https://www.research.net/r/Grove_Indoor_Environment_Kit_for_Edison
sku:  110060064
--- -->

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_KIT_for_Edison/img/Grove_Indoor_Environment_Kit_for_Edison_with_case.JPG)

Grove Indoor Environment Kit for Edisonは、Intel EdisonとArduino Breakout Boardを使用して完全な屋内環境アプリケーションを簡単に作成できるキットです。Base Shield V2を使用することで、開発者は最大11種類のGroveセンサーやアクチュエータを迅速に接続できます。私たちはクールなデモコードを提供しており、これらのセンサーやアクチュエータをプログラミング経験がなくても非常に簡単に操作できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Indoor-Environment-Kit-for-Intel%C2%AE-Edison-p-2427.html)

## キットに含まれるもの

---

* [Base Shield V2](/ja/Base_Shield_V2)  x1

* [Grove - 温度＆湿度センサー（高精度＆ミニ）](/ja/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0)  x1

* [Grove - 土壌湿度センサー](/ja/Grove-Moisture_Sensor)  x1

* [Grove - 光センサー](/ja/Grove-Light_Sensor)  x1

* [Grove - UVセンサー](/ja/Grove-UV_Sensor)  x1

* [Grove - PIRモーションセンサー](/ja/Grove-PIR_Motion_Sensor)  x1

* [Grove - エンコーダー](/ja/Grove-Encoder)  x1

* [Grove - ボタン](/ja/Grove-Button)  x1

* [Grove - LCD RGBバックライト](/ja/Grove-LCD_RGB_Backlight)  x1

* [Grove - リレー](/ja/Grove-Relay)  x1

* [Grove - サーボ](/ja/Grove-Servo)  x1

* [Grove - ブザー](/ja/Grove-Buzzer)  x1

* [9V to バレルジャックアダプター](https://www.seeedstudio.com/depot/9V-to-Barrel-Jack-Adapter-p-1481.html)  x1

* 26AWG Groveケーブル  x10

* USBケーブル  x1

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Grove-Indoor-Environment-Kit-for-Edison.jpg)

## Edison Arduino IDEのインストール

---

Intel Edison公式サイトを参照してください: [Edison Getting Started Guide](https://communities.intel.com/docs/DOC-23147)

1. Edison Arduino IDEをダウンロードします。（注: お使いのOSを選択してください。）

2. ダウンロードした.zip形式のEdison Arduino IDEが保存されているフォルダに移動します。

3. .7zファイルを右クリックし、「7-zip」を選択して、「“arduino-…”に展開」を選択します。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/IndoorKit_Extract_7z.png)

4. 作成されたフォルダをクリックして進み、「arduino.exe」ファイルが表示されるまで進みます。このファイルをダブルクリックすると、以下のウィンドウが開きます。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/IndoorKit_ArduinoIDE.png)

## 必要なドライバのインストール

---
1. [FTDI ドライバ](https://www.ftdichip.com/Drivers/CDM/CDM%20v2.10.00%20WHQL%20Certified.exe) をダウンロードします。

2. ダウンロードした「CDM...」という名前の .exe ファイルを右クリックし、「管理者として実行」を選択します。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver.jpg)

3. 「Extract」をクリックします。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver_Install.jpg)

4. 「Next」をクリックします。

5. 以下の画面が表示されたら「Finish」をクリックします。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver_Install_ok.jpg)

6. 必要な RNDIS、CDC、および DFU ドライバをインストールするために [Intel Edison ドライバ](https://communities.intel.com/docs/DOC-23242) をダウンロードします。

7. .exe ファイルをダブルクリックしてインストールを開始します。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Intel_Edison_Driver.jpg)

## ハードウェア接続

---
26AWG の Grove ケーブルを使用して、以下の接続を行います：

<table>
<tr>
<th>Grove モジュール</th>
<th>接続先</th>
</tr>
<tr>
<td width="200px">温度＆湿度センサー</td>
<td width="100px">I2C</td>
</tr>
<tr>
<td width="200px">土壌湿度センサー</td>
<td width="100px">A1</td>
</tr>
<tr>
<td width="200px">光センサー</td>
<td width="100px">A2</td>
</tr>
<tr>
<td width="200px">UV センサー</td>
<td width="100px">A3</td>
</tr>
<tr>
<td width="200px">PIR モーションセンサー</td>
<td width="100px">D7</td>
</tr>
<tr>
<td width="200px">エンコーダー</td>
<td width="100px">D2</td>
</tr>
<tr>
<td width="200px">ボタン</td>
<td width="100px">UART(D1)</td>
</tr>
<tr>
<td width="200px">LCD RGB バックライト</td>
<td width="100px">I2C</td>
</tr>
<tr>
<td width="200px">リレー</td>
<td width="100px">D5</td>
</tr>
<tr>
<td width="200px">サーボ</td>
<td width="100px">D6</td>
</tr>
<tr>
<td width="200px">ブザー</td>
<td width="100px">D4</td>
</tr>
</table>

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_Indoor_Wire_Figure.png)

## サンプルの実行

---
1. [Grove_Indoor_Environment_Demo](https://github.com/Seeed-Studio/Grove_Indoor_Environment_Demo) のウェブサイトを開き、プロジェクト全体をダウンロードします。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Github_Demo.png)

2. **Tools &gt; Serial Port** をクリックし、Intel Edison が接続されている Com # を選択します。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Import_Indoor_Kit_Demo.png)

3. **Sketch&gt;Import Library…&gt;Add Library** をクリックし、**ステップ 1** でダウンロードしたライブラリをインポートします。

4. **File&gt;Examples&gt; Grove_Indoor_Environment_Demo** をクリックし、デモを選択して **upload** アイコンをクリックします。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Upload_Indoor_Kit_Demo.png)

5. **Serial Monitor** を開くと、センサーの情報が表示されます：

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Serial_Monitor.png)

6. エンコーダーを回して、LCD にセンサー値を確認します。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Rotate_Encoder.png)

7. **“Send TextBox”** に以下のコマンドを入力して、センサーやアクチュエーターを操作できます：

_set [sensor][condition:&gt;, &lt; or =][ threshold],[actuator]=[action]_

<table>
<tr>
<th>例</th>
<th>説明</th>
</tr>
<tr>
<td width="300px">_set temp&gt;40, relay=1_</td>
<td width="500px">温度が 40℃ を超えた場合、リレーが開きます。</td>
</tr>
<tr>
<td width="300px">_set temp&gt;40, sleep=1_</td>
<td width="500px">温度が 40℃ を超えた場合、何もしません。</td>
</tr>
<tr>
<td width="300px">_set humi&gt;60, buzzer=1_</td>
<td width="500px">湿度が 60% を超えた場合、ブザーが鳴ります。</td>
</tr>
<tr>
<td width="300px">_set light&gt;600, servo=90_</td>
<td width="500px">光強度が 600 を超えた場合、サーボが 90° 回転します。</td>
</tr>
<tr>
<td width="300px">_set uv&gt;80, relay=0_</td>
<td width="500px">UV 強度が 80 を超えた場合、リレーが閉じます。</td>
</tr>
<tr>
<td width="300px">_set pir=1, buzzer=1_</td>
<td width="500px">人を検知した場合、ブザーが鳴ります。</td>
</tr>
<tr>
<td width="300px">_set ms&gt;40, relay=1_</td>
<td width="500px">土壌湿度が 40 を超えた場合、リレーが開きます。</td>
</tr>
<tr>
<td width="300px">_set ssid=name, psw=password_</td>
<td width="500px">WiFi の SSID とパスワードを設定します。シリアルモニターまたは LCD に表示される IP アドレスをブラウザで開きます。デフォルトのポートは 88 です。例：192.168.1.101:88</td>
</tr>
</table>

注意：

* コマンドは「/n」で終了する必要があるため、シリアルモニターで **“NewLine”** を選択してください。

* アクチュエーターは 1 つのセンサーによってのみ制御されます。あるセンサーがアクチュエーターを制御したい場合、他のセンサーがそのアクチュエーターを制御している場合は、そのセンサーをスリープ状態に設定する必要があります。

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_command.png)

8. WiFi 接続。シリアルモニターを開き、SSID とパスワードを設定します（以下参照）。LCD またはシリアルモニターでローカル IP を確認します。同じネットワークに接続されたデバイスでブラウザを開き、上記の IP アドレスにアクセスすると、センサー値を確認できます。

_**注意：ウェブサーバーにアクセスする際、ポート番号（88）を追加する必要があります。例：172.20.10.2:88。**_

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_SSID_PSW.png)

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Local_IP.png)

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Web_Server.png)

## リソース

---

* [Grove Indoor Environment Kit ソースコード](https://github.com/Seeed-Studio/Grove_Indoor_Environment_Demo)

* [Edison スタートガイド](https://communities.intel.com/community/makers/edison/getting-started)

* [Intel Edison ソフトウェア &amp; ドキュメント](https://communities.intel.com/community/makers/edison/documentation)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>