---
description: Mini GSM/GPRS GPS Breakout SIM808
title: Mini GSM/GPRS GPS Breakout SIM808
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Mini_GSM_GPRS_GPS_Breakout_SIM808
last_update:
  date: 05/15/2025
  author: shuxu hu
---


## 概要

このボードは最新のSIMCOM SIM808 GSM/GPSモジュールを基にしており、セルラーGSMおよびGPRSデータと衛星ナビゲーション用のGPS技術を提供します。

ボードはスリープモードで超低消費電力を特徴としており、プロジェクトに非常に長い待機時間を提供します。さらに、LiPoバッテリーで使用可能なオンボードバッテリー充電回路も備えています。

GPS受信機は非常に感度が高く、22の追跡チャンネルと66の取得チャンネルを備えており、屋内位置特定のための補助GPS（A-GPS）もサポートしています。ボードはUART経由でATコマンドによって制御され、3.3Vおよび5Vの論理レベルをサポートします。ミニGPSおよびGSMアンテナが付属していますが、バッテリーはオプションです。

このボードは2G（3GまたはLTEではない）GSMネットワークを使用します。

## 特徴

- クワッドバンド 850/900/1800/1900MHz

- GPRSマルチスロットクラス12接続性：最大85.6kbps（ダウンロード/アップロード）

- GPRSモバイルステーションクラスB

- ATコマンドによる制御（3GPP TS 27.007, 27.005およびSIMCOM拡張ATコマンド）

- リチウムイオンバッテリーの充電制御をサポート

- リアルタイムクロックをサポート

- 電源電圧範囲 3.4V ~ 4.4V

- GPS/CNSS統合およびA-GPSをサポート

- 3.0Vから5.0Vの論理レベルをサポート

- 低消費電力、スリープモードで1mA

- GPS NMEAプロトコルをサポート

- コンパクトサイズ 27mm x 46mm x 10mm

- 標準SIMカード対応

## GPS仕様

- 受信チャンネル：22追跡 / 66取得

- 粗取得コード：GPS L1

- 追跡感度：-165dBm

- コールドスタート時間：30秒（標準）

- ホットスタート時間：1秒（標準）

- ウォームスタート時間：28秒（標準）

- 水平方向位置精度：&lt; 2.5m CEP

- 消費電力 - 取得時：42mA

- 消費電力 - 連続追跡時：24mA

- 更新レート：5Hz

## 機能ブロック

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Lonet_pcb_top.jpg)

- GPSアンテナ：これはuFL GPSアンテナコネクタです。パッシブまたはアクティブGPSアンテナを接続できます。アクティブGPSアンテナは2.8V電圧で動作します。

- MicroUSB：リチウムイオンバッテリーの充電インターフェースで、入力電圧範囲は5Vから7Vです。

- 電源ボタン：モジュールのハード電源スイッチです。モジュールが電源オンの場合、ボタンを2秒間押すことでモジュールをオンまたはオフにできます。

- ネットワークインジケーター：赤色LEDで、モジュールがネットワークに接続している状態を示します。LEDs_ENジャンパーパッドでオフにすることができます。

- ステータスインジケーター：緑色LEDで、モジュールが動作しているかどうかを示します。モジュールが動作中の場合に点灯します。LEDs_ENジャンパーパッドでオフにすることができます。

- リチウムイオンバッテリー：モジュールの電源供給で、入力電圧は3.4Vから4.4Vです。JST-2.0mmコネクタを使用しており、3.7V Li-Poバッテリーへの接続が便利です。

- GSMアンテナ：これはuFL GSMアンテナコネクタで、GSM信号を受信するためにGSMアンテナを接続します。

- SIMカードホルダー：標準SIMカード用のSIMカードホルダーです。

### ピン定義

<table>
<tr>
<th scope="col"> **名前** </th>
<th scope="col"> **I/O** </th>
<th scope="col"> **説明** </th>
<th scope="col"> **備考** </th>
</tr>
<tr>
<th scope="row"> BAT </th>
<td></td>
<td> 電源入力/出力 </td>
<td> 3.4V - 4.4V DC </td>
</tr>
<tr>
<td> GND </td>
<td></td>
<td> 電源グラウンド/論理グラウンド </td>
<td></td>
</tr>
<tr>
<td> VIO </td>
<td> I </td>
<td> 論理レベル参照 </td>
<td> 3.0V - 5.0V DC </td>
</tr>
<tr>
<td> DTR </td>
<td> I </td>
<td> スリープモードのモジュールを起動するピン </td>
<td></td>
</tr>
<tr>
<td> PWR </td>
<td> O </td>
<td> 電源スイッチ </td>
<td> 低レベルパルス </td>
</tr>
<tr>
<td> RI </td>
<td> O </td>
<td> イベント/メッセージピン </td>
<td></td>
</tr>
<tr>
<td> TXD </td>
<td> O </td>
<td> データ送信 </td>
<td> SIM808からのUART出力 </td>
</tr>
<tr>
<td> RXD </td>
<td> I </td>
<td> データ受信 </td>
<td> SIM808へのUART入力 </td>
</tr>
<tr>
<td> RST </td>
<td> I </td>
<td> モジュールリセット </td>
<td></td>
</tr>
</table>

### インジケーターLED

<table>
<tr>
<th scope="col"> **インジケーターLED** </th>
<th scope="col"> **ステータス** </th>
<th scope="col"> **動作** </th>
</tr>
<tr>
<th scope="row"> 動作ステータス（緑色） </th>
<td> オフ </td>
<td> SIM808が動作していない </td>
</tr>
<tr>
<td></td>
<td> オン </td>
<td> SIM808が動作している </td>
</tr>
<tr>
<th scope="row"> ネットワークステータス（赤色） </th>
<td> オフ </td>
<td> SIM808が動作していない </td>
</tr>
<tr>
<td></td>
<td> 64msオン/800msオフ </td>
<td> SIM808がネットワークに登録されていない </td>
</tr>
<tr>
<td></td>
<td> 64msオン/3000msオフ </td>
<td> SIM808がネットワークに登録されている </td>
</tr>
<tr>
<td></td>
<td> 64msオン/300msオフ </td>
<td> PPP GPRS通信が確立されている </td>
</tr>
</table>

## 使用方法  

### 関連製品

このモジュールにはミニGPSアンテナとGSMアンテナが付属していますが、Li-Poバッテリーは含まれていません。さらに、このモジュールを使用するには、GPRSサービスをサポートするアンロックされたSIMカードが必要です。

- 3.7 V リチウムイオンバッテリー  
- SIMカード  
- USB to UARTツール  

### 参考回路

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Rerfer_Circuit_SIM808.png)

### ATコマンドを使ったセットアップ

このモジュールはシリアルポート経由でATコマンドによって制御されます。ここでは、ArduinoをUSBからシリアルツールとして使用します。以下のコードをArduinoにアップロードし、シリアルモニターを開きます。他のUSBからシリアルツールを使用する場合は、[AT Command Tester](https://seeeddoc.github.io/AT_Command_Tester_Application/)や[SSCOM32](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/Sscom32E.zip)を使用してATコマンドをテストできます。

```c
// このスケッチはArduinoでLoNetをテストするためのものです

// VIOを+5Vに接続
// GNDをグラウンドに接続
// RX（SIM808へのデータ入力）をデジタル11に接続
// TX（SIM808からのデータ出力）をデジタル10に接続

#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void setup()  
{
  // シリアル通信を開き、ポートが開くのを待つ
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() // 繰り返し実行
{
  if (mySerial.available())
    Serial.write(mySerial.read());

  if (Serial.available())
  {
    while(Serial.available())
    {
      mySerial.write(Serial.read());
    }
    mySerial.println();
  }
}
```

#### ボーレートの設定と充電機能の有効化

初めてモジュールを使用する際には、このプロセスを実行することを推奨します。以下の表のシリアルモニター列では、ATコマンドの入力は黒色、モジュールの返答はオレンジ色で表示されています。

<table cellPadding="0">
<tr>
<th scope="col" width="50">シリアルモニタ</th>
<th scope="col" width="100">説明</th>
</tr>
<tr>
<td> AT <span style={{color: 'rgb(242,133,0)'}}>OK</span> </td>
<td>コマンド "AT" を送信してボーレートを同期します。モジュールのシリアルポートはデフォルトで自動ボーレートモードに設定されており、このモードではモジュール起動時に出力はありません。</td>
</tr>
<tr>
<td> AT+IPR=9600 <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td>ボーレートを9600bpsに設定します。1200bpsから115200bpsまでサポートしています。</td>
</tr>
<tr>
<td> AT+ECHARGE=1 <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td>"AT+ECHARGE=1" コマンドを送信してバッテリー充電機能を有効化します。デフォルトでは充電機能は無効です。</td>
</tr>
<tr>
<td> AT&amp;W <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td>パラメータ設定を保存します。</td>
</tr>
<tr>
<td> AT+CPOWD=1 <span style={{color: 'rgb(242,133,0)'}}>NORMAL POWER DOWN</span></td>
<td>モジュールの電源を切ります。</td>
</tr>
<tr>
<td>
<span style={{color: 'rgb(242,133,0)'}}>RDY
+CFUN: 1
GPS Ready
+CPIN: READY
Call Ready
SMS Ready</span>
</td>
<td>電源ボタンでモジュールを再度オンにすると、GPSとGSMの状態が応答されます。</td>
</tr>
<tr>
<td> AT+CBC <span style={{color: 'rgb(242,133,0)'}}> +CBC: 1,96,4175 OK</span></td>
<td>充電状態とバッテリー残量を照会します。</td>
</tr>
<tr>
<td> AT+CSQ <span style={{color: 'rgb(242,133,0)'}}> +CSQ: 14,0 OK</span></td>
<td>GSM信号品質を照会します。</td>
</tr>
</table>

#### GPSを使用して位置情報を取得

<table cellPadding="0">
<tr>
<th scope="col" width="11">シリアルモニタ</th>
<th scope="col" width="700">説明</th>
</tr>
<tr>
<td> AT+CGPSPWR=1 <span style={{color: 'rgb(242,133,0)'}}>OK</span> </td>
<td>GPSをオンにします</td>
</tr>
<tr>
<td> AT+CGPSSTATUS? <span style={{color: 'rgb(242,133,0)'}}> +CGPSSTATUS: Location Not FixOK</span></td>
<td>GPS固定状態を読み取ります。"Location Not Fix" は位置情報が取得できていないことを意味します。初回起動時は少なくとも30秒かかります。_**GPSは窓際または屋外でテストする必要があります。**_</td>
</tr>
<tr>
<td> AT+CGPSSTATUS? <span style={{color: 'rgb(242,133,0)'}}> +CGPSSTATUS: Location 3D Fix OK</span></td>
<td>GPSが3D固定状態で取得されました。</td>
</tr>
<tr>
<td> AT+CGPSINF=0 <span style={{color: 'rgb(242,133,0)'}}> +CGPSINF: 0,2234.931817,11357.122485,92.461185,20141031041141.000,88,12,0.000000,0.000000 </span></td>
<td>現在のGPS位置情報を取得します。パラメータ形式: &lt;mode&gt;, &lt;altitude&gt;, &lt;longitude&gt;, &lt;UTC time&gt;, &lt;TTFF&gt;, &lt;num&gt;, &lt;speed&gt;, &lt;course&gt;</td>
</tr>
<tr>
<td>
AT+CGPSOUT=32
<span style={{color: 'rgb(242,133,0)'}}>OK
\$GPRMC,043326.000,A,
2234.9414,N,11357.1187,E,
0.000,143.69,311014,,,A*50 </span>
</td>
<td>NMEA \$GPRMC データを読み取ります。"2234.9414 N, 11357.1187 E" が位置座標です。NMEA文の詳細は、[こちらのサイト](http://www.gpsinformation.org/dale/nmea.htm)を参照してください。</td>
</tr>
<tr>
<td>
AT+CGPSRST=0
<span style={{color: 'rgb(242,133,0)'}}> OK</span>
</td>
<td>GPSをコールドスタートモードでリセットします。</td>
</tr>
<tr>
<td> AT+CGPSRST=1 <span style={{color: 'rgb(242,133,0)'}}> OK</span></td>
<td>GPSをホットスタートモードでリセットします。</td>
</tr>
<tr>
<td> AT+CGPSPWR=0 <span style={{color: 'rgb(242,133,0)'}}> OK</span></td>
<td>GPSをオフにします。</td>
</tr>
</table>

## リソース  

- **[PDF]**   [LoNet_DesignSchematic](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/LoNet_DesignSchematic.pdf)

- **[PDF]**    [SIM800_ATCommand_Manual](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM800_ATCommand_Manual_V1.02.pdf)

- **[PDF]**   [SIM808_HardwareDesign_Manual](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM808_Hardware_Design_V1.00.pdf)

- **[PDF]**   [SIM808_GPSApplication_Note](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM808_GPS_Application_Note_V1.00.pdf)

- **[ライブラリ]**    [GPRS_Shield library on gitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)

- **[ライブラリ]**   [Adafruit_FONA_Library](https://github.com/adafruit/Adafruit_FONA_Library/)

## 関連プロジェクト

残念ながら、[Recipe](https://www.seeedstudio.com/recipe/)にはLoNet-GSM/GPRS/GPS Breakoutに関するデモがまだありません。

LoNet-GSM/GPRS/GPS Breakoutに関する素晴らしいプロジェクトを投稿して、<font color="#FF0000">$100クーポンを獲得！</font> お気軽にお問い合わせください: **recipe@seeed.cc**

ここでは、参考として[GPRS Shield](https://www.seeedstudio.com/depot/GPRS-Shield-V30-p-2333.html)に関するいくつかのプロジェクトを紹介します。

### GPRS Shieldとは

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/113030009_1.jpg)

特徴:

- 標準ArduinoおよびArduino Megaと互換性あり

- クアッドバンド対応: 850/900/1800/1900MHz

- ATコマンドセットによる完全制御: 標準 - GSM 07.07 &amp; 07.05および拡張 - SIMCOM ATコマンド

- TCP/UDPプロトコル対応

### SMSリモートコントロール

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/54c720959dae7.JPG)

このプロジェクトでは、SMSを使用して温水器をオン/オフにし、その状態を確認する方法を説明します。

以下の理由から、信頼性が高く、安全で、簡単かつ柔軟です:

- コマンドには常に応答があり、失われたメッセージは再要求されます

- 128ビットのパスワード保護を使用

- pfodDesignerがすべてのコードを生成し、独自のカスタムメニューを作成できます

- SMS経由で利用可能なすべてのpfod画面（サブメニュー、複数選択および単一選択リスト、テキスト入力、データログおよびプロットなど）

[**作りたい！**](https://www.seeedstudio.com/recipe/98-sms-remote-control.html)

### Arduino Phone

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Recipe-arduinophone.png)

Arduino Phoneは、Arduinoと他のシールドモジュールを組み合わせて自作した携帯電話です。

このプロジェクトでは、Arduino Phoneアプリがニーズに合わない場合に何をすべきかを教えてくれます。

このArduino Phoneには以下の主な機能が含まれています。

- メッセージの送受信、文字入力

- 通話の発信および応答

- リアルタイム時計表示

- 便利で簡潔なUI

[**作りたい！**](https://www.seeedstudio.com/recipe/37-arduinophone.html)

[**GPRSによるさらに素晴らしいプロジェクト**](https://www.seeedstudio.com/recipe/index.php?query=GPRS)

### 素晴らしいプロジェクトを私たちと共有してください

作ることと共有することの精神を持って生まれた、それが私たちが信じる「メイカー」の本質です。

そしてこれこそが、オープンソースコミュニティが今日のように繁栄している理由です。

あなたが何者であるか、何を作ったかは関係ありません。ハッカー、メイカー、アーティスト、エンジニアであろうと。

他の人と自分の作品を共有し始めるだけで、あなたはオープンソースコミュニティの一員となり、貢献をしているのです。

今すぐ[Recipe](https://www.seeedstudio.com/recipe/)で素晴らしいプロジェクトを共有し、Seeedのコアユーザーになるチャンスを手に入れましょう。

- コアユーザーは、Seeed製品に高い関心を持ち、Recipeで重要な貢献をする人々です。
- 私たちはコアユーザーと協力して新製品の開発を行います。つまり、コアユーザーはSeeedの新製品を公式発売前に体験する機会を得ることができ、その代わりに製品性能やユーザー体験を向上させるための貴重なフィードバックを期待しています。また、コアユーザーが良いアイデアを持っている場合、ハードウェア部品、PCBAサービス、技術サポートを提供します。さらに、コアユーザーとの商業的な協力が可能性として広がります。

<font color="#FF0000">コアユーザーに関する詳細情報については、以下にメールしてください:</font> **recipe@seeed.cc**

## サポート

技術サポートについては、[_support@deegou.com_](http://www.deegou.com) にお問い合わせください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるご要望やお好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
