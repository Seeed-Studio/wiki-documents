---
description: Seeeduino v4.0
title: Seeeduino v4.0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_v4.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- <p style="text-align:center"><a href=target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/ARD128D2P_1_02.jpg" border=0 /></a></p>  -->
![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/ARD128D2P_1_02.jpg)

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Seeeduino-V4-p-669.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeeduino-V4-p-669.html)
Seeeduino v4.0はATMEGA328マイクロコントローラ開発ボードです。ATMEGA328P-MUは高性能で低消費電力のAVR 8ビットマイクロコントローラです。Seeeduino v4.0には14個のデジタル入力/出力ピン（そのうち6つはPWM出力として使用可能）と6つのアナログピンがあります。また、ATMEGA16U2マイクロコントローラを搭載しており、UART-to-USBコンバータチップとして機能します。これにより、ボードは基本的にFTDIチップのように動作します。

Seeeduino v4.0はArduino DuemilanoveおよびUnoのすべての機能を継承しつつ、独自の機能も追加しています。このボードはDuemilanoveおよびUnoのピンレイアウト、ネジ穴、ボード寸法に対応しています。

すべての機能の詳細な説明と概要については、このWiKiの[ボードインターフェース、機能、およびコンポーネント](https://seeeddoc.github.io/Seeeduino_v4.0/#Board_Interface.2C_Features.2C_and_Components)セクションをご覧ください。

## ボードインターフェース、機能、およびコンポーネント

Seeeduinoボードは、他のduinoボードにはないさまざまな機能を提供します（例：5Vまたは3.3Vロジック、追加のヘッダーパッド、直接USB-to-UARTコネクタなど）。以下に、ボードのインターフェースと独自の機能の詳細な説明を示します。

![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_0_board_sections.png)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_0_board_sections.png" alt="pir" width={600} height="auto" /></p>

### 1. J2パッド

ATMEGA16U2（U5チップ）のピンPB4、PB5、PB6、およびPB7に接続されています。

### 2. LED L、TX、RX

「L」LEDはデジタルピン13に接続されており、プロジェクトで「ステータス」LEDとして使用できます。TXおよびRX LEDは自動的に動作し、それぞれボードが情報を送信または受信していることを知らせます。

### 3. Micro USBポート

ボードをPCに接続してプログラミングするためのポートです。Micro USBはUSBの普及版であり、ほとんどのAndroidスマートフォンやその他のデバイスで使用されています。おそらく家にこのケーブルが何本もあるでしょう。

### 4. SW2スライドスイッチ（5V 3V3）

スライドスイッチは、ボードのロジックレベルと電力出力を5Vまたは3.3Vに変更するために使用されます。現在、多くの新しい優れたセンサーが3.3Vで動作するように開発されています。他のduinoボードでは、ボードとセンサーの間にロジックレベルコンバータを配置する必要がありますが、Seeeduino V4.0ボードではスイッチをスライドさせるだけで済みます！

### 5. DC電源ジャック

DC電源ジャックは、Seeeduinoボードを壁のアダプターから電力供給することを可能にします。これにより、DCモーターやその他の高電力デバイスを使用する場合など、プロジェクトに必要な電力をより多く供給できます。DC入力は7V-12Vです。

### 6. U5 ICSP

ATMEGA16U2チップ用のICSPおよびSPIポート。

### 7. U5

ATMEGA16U2チップ。このチップはUSBからUARTへの接続を担当しており、ATMEGA328P-MU（U1）のプログラミングに使用されるほか、FTDIのようなポートも使用できます。

### 8. SW1ボタン（リセット）

このボタンは側面に便利に配置されており、シールドが上に置かれている場合でもSeeeduinoボードをリセットすることができます。他のduinoボードではボタンが上部に配置されているため、アクセスが困難になることがあります。

### 9. 追加ヘッダーパッド（デジタル）

センサーやデバイスをボードに直接接続することが非常に便利な場合があります。ブレッドボードを介さずに接続したり、プロジェクトが完成したらセンサーをボードに直接はんだ付けしたり、他のデバイスが使用しているピンの出力を監視したりすることができます。これらの追加パッドはそのような状況で役立ちます。

### 10. U1

ATmega328P-MUチップ。このチップはボードの頭脳であり、書いたコードが実行される場所です。

### 11. 追加ヘッダーパッド（電源およびアナログ）

追加ヘッダーデジタルパッドと同様に、これらの追加接続はプロジェクトで必要になることが多いものです。特に、ブレッドボードを使用せずに複数のセンサーやデバイスに電力を供給したい場合に便利です。

### 12. UART-to-USB（FTDI）パッド/ポート

これはATMEGA16U2（U5）チップのUART-to-USB機能の出力/入力です。このポートを使用して、UARTからシリアル接続を必要とするデバイスと直接通信することができます。コードを書かずにこれらのデバイスを迅速にテストするのに最適です。このポートにより、必要に応じてSeeeduinoボードは基本的にFTDIチップのように動作します。

VCCの出力電圧はSW2で選択した5Vまたは3.3Vのいずれかになります。

### 13. U1 ICSP

これはATmega328P-MU用のICSP接続であり、Arduino Uno、Due、Mega、およびLeonardo互換ハードウェア（例：シールド）がこのコネクタを使用する場合に標準的なICSP/SPI位置に配置されています。このポートのSPIピン（MISO、SCK、およびMOSI）は、Arduino Unoと同様にデジタルピン12、13、および11にも接続されています。

### 14. Groveコネクタ

[当社のデポ](https://www.seeedstudio.com/depot/)には、このI2CまたはUART接続を利用できるさまざまなセンサーやデバイスがあります。さらに、独立したGroveコネクタも販売しており、独自のセンサー接続を作成するのに役立ちます。I2C Groveコネクタは、SDAとSCL用にそれぞれアナログピン4と5にも接続されているため、これらのピンを使用することもできます。UART Groveコネクタは、RXとTX用にそれぞれデジタルピン0と1に接続されています。

### 15. PWMピン

デジタルピン3、5、6、8、9、および10は、パルス幅変調（PWM）に使用できます。

## 仕様

* マイクロコントローラ: ATmega328P-MU

* 動作電圧: 5Vまたは3.3V（スライドスイッチで選択可能）
* デジタルI/Oピン: 14

* PWMチャネル: 6

* アナログ入力チャネル: 6

* DCジャック入力: 7V-12V

* I/OピンあたりのDC電流: 40mA

* フラッシュメモリ: 32KB (ATmega328P-MU)

* RAM: 2KB (ATmega328P-MU)

* EEPROM: 1KB (ATmega328P-MU)

* クロックスピード: 16MHz

## ドライバのインストール  

### 自動インストール

Arduino/Seeeduinoドライバは[Arduinoソフトウェア](https://arduino.cc/en/main/software)に含まれています。Windowsでは、Arduinoソフトウェアをインストールした後、SeeeduinoボードをPCのUSBポートに接続すると、以下のスクリーンショットに示されるようにドライバのインストールが自動的に開始されます。

<!-- [](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_first_window.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_first_window.png" alt="pir" width={600} height="auto" /></p>
Windowsで表示されるSeeeduino V4.0ドライバインストールウィンドウ。

数分（2～5分）後、ドライバのインストールが完了し、以下のウィンドウが表示されます。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_final_window.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_final_window.png" alt="pir" width={600} height="auto" /></p>

Windowsで表示されるSeeeduino V4ドライバインストール完了ウィンドウ。

これでSeeeduino V4.0の使用準備が整いました。

### 手動インストール

Windowsで自動ドライバインストールが失敗した場合、ドライバを手動でインストールできます。ドライバはArduinoソフトウェアフォルダ内にあります。以下の手順に従ってください：

**1.** 「デバイスマネージャー」ウィンドウを検索して開き、「デバイスマネージャー」をクリックします。以下のアニメーション画像に示されています。これがうまくいかない場合は、「マイコンピュータ」を右クリックして「管理」-&gt;「デバイスマネージャー」を選択してください。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_how_to_open_device_manager_window.gif)  

**2.** 「デバイスマネージャー」ウィンドウで、「ポート（COM&amp;LPT）」または「その他のデバイス」の下に「USBシリアルポート」を探します。これはSeeeduinoボードですが、まだWindowsに認識されていません。右クリックして「ドライバソフトウェアの更新」を選択します。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver1.jpg" alt="pir" width={600} height="auto" /></p>

**3.** 次に、「コンピュータを参照してドライバソフトウェアを検索」を選択します。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver2.jpg)  -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver2.jpg" alt="pir" width={600} height="auto" /></p>

**4.** 最後に、Arduinoソフトウェアのダウンロードフォルダ内にある「Drivers」という名前のフォルダを見つけて選択します。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Updata_Driver_Software_for_Seeeduino_v4.0.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Updata_Driver_Software_for_Seeeduino_v4.0.jpg" alt="pir" width={600} height="auto" /></p>

**5.** ドライバが正常にインストールされた場合、以下のダイアログボックスが表示されます。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver4.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver4.jpg" alt="pir" width={600} height="auto" /></p>

**6.** 「デバイスマネージャー」ウィンドウで、右クリックしたデバイスが「Arduino Uno (COMXX)」または「USBシリアルポート(COMXX)」として表示されるはずです。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver5.jpg)  -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver5.jpg" alt="pir" width={600} height="auto" /></p>

**7.** Arduino IDEを開くと、同じCOMポートが利用可能になります。ドライバインストール中にArduino IDEが開いていた場合は、シリアルポートが表示されないため、Arduino IDEを閉じて再度開いてください。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver6.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver6.jpg" alt="pir" width={600} height="auto" /></p>

## 例/アプリケーション

### 例 1: 初めての Arduino/Seeeduino プログラム (LED 点滅)

この WiKi の「ボードインターフェース、機能、およびコンポーネント」セクションで説明されているように、Seeeduino ボードにはピン 13 に接続されたオンボード LED が搭載されています。この例では、その LED を点滅させる方法を示します。LED を点滅させるプログラムは、ボードのハードウェアとソフトウェアに慣れるために書くことができる最も簡単なプログラムです。

Seeeduino ボードの LED を点滅させるには、以下のアニメーション画像の手順に従ってください:

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_blink_led_program_step_by_step.gif) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_blink_led_program_step_by_step.gif" alt="pir" width={600} height="auto" /></p>

または、以下に各ステップをリストアップして説明しています:

**1.** Arduino IDE を開きます  
**2.** Tools-&gt;Board-&gt;Arduino Uno に移動して Seeeduino ボードを選択します。Seeeduino ボードは Arduino Uno ボードとして認識されます。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload3.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload3.jpg" alt="pir" width={600} height="auto" /></p>

**3.** Tools-&gt;Serial Port-&gt;COMXX に移動して、Seeeduino ボードが接続されているシリアル COM ポートが選択されていることを確認します。COMXX はボードの COM ポートです。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload4.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload4.jpg" alt="pir" width={600} height="auto" /></p>

**4.** File-&gt;Examples-&gt;0.1Basics-&gt;Blink に移動して「Blink」例を開きます。コードが表示された新しいウィンドウが開きます。以前の/元の Arduino ウィンドウは閉じても構いません。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload2.jpg" alt="pir" width={600} height="auto" /></p>

**5.** この新しいウィンドウで「Upload」ボタンをクリックします。これによりコードが Seeeduino ボードにアップロード/送信されます。「Done Uploading」というメッセージが表示されるまで数秒待ちます。このメッセージはコードが正常にボードに書き込まれ、使用準備が整ったことを示します。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload1.jpg" alt="pir" width={600} height="auto" /></p>

**6.** Seeeduino ボードの青色のオンボード LED が以下のように点滅を開始するはずです:

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_led_blink.gif) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_led_blink.gif" alt="pir" width={600} height="auto" /></p>

### 例 2: UART-to-USB (FTDI) と 3.3V ロジック - 追加回路やソフトウェアなしで ESP8266 WiFi モジュールを使い始める

Seeeduino V4.0 ボードの競合製品と比較した際の優れた特徴の 2 つは、5V と 3.3V ロジックの切り替えが可能であることと、USB-to-UART ポートが実質的に FTDI のようなデバイスとして機能し、UART プロトコル/インターフェースを使用するデバイスを迅速に使い始めるのに適していることです。

この例では、人気のある [ESP8266 WiFi モジュール](https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html?cPath=19_20) を使用する方法を示します。この例は非常に便利で、他の duino ボードでは電圧コンバーター、ロジックコンバーター、および 2 つの独立したシリアルポートを制御するソフトウェアが必要ですが、Seeeduino ボードではこれら 3 つのものが不要です。

**ステップ 1: ボードを 3.3V モードに設定する**

**1.** Seeeduino ボードからすべての電源を取り外し、完全にオフにします。  
**2.** SW2 スイッチを 3V3 設定にスライドします。

**ステップ 2: ESP8266-Seeeduino の接続**

ESP8266 WiFi モジュールを以下のように Seeeduino ボードに接続します (以下の写真で回路図を参照してください):

<table>
<tr>
<th>Seeeduino ピン</th>
<th>ESP8266 ピン</th>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>TX</td>
<td>RX</td>
</tr>
<tr>
<td>RX</td>
<td>TX</td>
</tr>
<tr>
<td>CH_PD</td>
<td>VCC</td>
</tr>
<tr>
<td>VCC</td>
<td>VCC</td>
</tr>
</table>

:::note
Seeeduino V4.0 と ESP8266 の回路図。SW2 は 5V 設定を示していますが、3V3 にスライドしてください。
:::
<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_esp8266_schematic.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_esp8266_schematic.png" alt="pir" width={600} height="auto" /></p>

**ステップ 3: コマンドの送信**

**1.** Seeeduino ボードを PC の USB ポートに接続します。  
**2.** Arduino IDE を開きます。  
**3.** ボードに空のプログラムをアップロードするか、現在のプログラムがシリアル関数を使用していないことを確認します。

```cpp
void setup()
{

    }

    void loop()
{

    }
```

**4.** Arduino の「Serial Monitor」ウィンドウを開きます。  
**5.** Serial Monitor ウィンドウで設定を「Both NL &amp; CR」に変更し、ボーレートを「9600」に設定します。または、ESP8266 の正しいボーレートに設定してください (異なる場合があります)。  
**6.** ESP8266 は情報/コマンドの送受信が可能になります。「AT+RST」を送信してモジュールをリセットし、「AT+CWLAP」を送信して ESP8266 が検出可能なアクセスポイントをすべてリストアップしてみてください。以下の画像は応答例を示しています。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Esp8266-output.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Esp8266-output.png" alt="pir" width={600} height="auto" /></p>

## バージョントラッカー

以下は、Seeeduinoボードの各バージョンにおける変更点の一覧です。

<table>
  <tbody><tr>
      <th> リビジョン </th>
      <th> 説明 </th>
      <th> リリース日 </th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width="300px"> Seeeduino V0.9 </td>
      <td width="500px"> 初回公開リリース </td>
      <td width="200px"> </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Seeeduino v1.1 </td>
      <td> 1. バグ修正 - Pin4の配線に不要なビアを削除。<br />2. バグ修正 - ラベルがスイッチによって誤って覆われていた問題を修正。<br />3. I2Cおよびセンサーポートを追加。<br />4. VCCスイッチ用に100uFコンデンサを追加。<br />5. 新しい100milグリッドピンをグループ化。<br />6. リセットボタンを金属製のものに交換。<br />7. テキストとラベルを再配置し、より明確な表示を実現。 </td>
      <td> </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Seeeduino v2.12 </td>
      <td> 1. 電源オフ時の外部電力消費ゼロ。<br />2. より強力なスイッチ。<br />3. 5V直接入力用の第2電源供給。[注意] 5Vのみ使用してください！<br />4. 3.3Vで150mAのドライバ容量。<br />5. 軽量化のための1.0mm薄型PCB。<br />6. ピンヘッダー用に追加の列を予約。 </td>
      <td> </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Seeeduino v2.2 </td>
      <td> 1. USB/EXT電源の自動選択。<br />2. 電源コンデンサのアップグレード。<br />3. レイアウトの整理。<br />4. リセットが簡単に。<br />5. 本物の水晶振動子。<br />6. 外部電源ダイオードを1N4004に変更（Vinピンでより多くの電力を供給）。 </td>
      <td> 2010年12月16日 </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Seeeduino v2.21 </td>
      <td> 1. より強力なミニUSBコネクタにアップグレード。 </td>
      <td> 2011年1月12日 </td>
    </tr>
    <tr>
      <td> Seeeduino v3.0 </td>
      <td> 1. JSTコネクタをDCジャックコネクタに変更。 </td>
      <td> 2012年1月1日 </td>
    </tr>
    <tr>
      <td> Seeeduino v4.0 </td>
      <td> 1. RSTスイッチを削除。<br />2. ATMEGA16U2をUSBバスコンバータチップとして採用。<br />3. 電力消費を削減するDC-to-DCコンバータ。<br />4. マイクロUSB。<br />5. UNOブートローダー。 </td>
      <td> 2014年9月1日 </td>
    </tr>
  </tbody></table>

## バグ報告

*   PWMのシルク印刷に誤りがあります。PWMのピンはD9、D10、D11であるべきです。このエラーはできるだけ早く修正します。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_bug.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_bug.png" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース/参考資料

- **[Eagle]** [Seeeduino v4.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_Eagle.zip)
- **[PDF]** [Seeeduino v4.0 PDF](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino%20v4.0.pdf)
- **[EAGLE]** [Seeeduino v4.0 回路図](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino%20v4.0.sch)
- **[PDF]** [Seeeduino v4.0 回路図 PDFファイル](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_pdf.pdf)
- **[Datasheet]** [ATMEGA328P-MU 概要](http://www.atmel.com/Images/Atmel-8271-8-bit-AVR-Microcontroller-ATmega48A-48PA-88A-88PA-168A-168PA-328-328P_datasheet_Summary.pdf)
- **[Datasheet]** [ATMEGA16U2 概要](http://www.atmel.com/Images/7799S.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>