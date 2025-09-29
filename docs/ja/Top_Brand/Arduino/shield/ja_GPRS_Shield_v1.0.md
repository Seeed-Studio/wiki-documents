---
description: GPRS Shield V1.0
title: GPRS Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/GPRS_Shield_v1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_shield_v1.4.jpg)](https://www.seeedstudio.com/depot/gprs-shield-p-779.html)

GPRS Shieldは、GSM携帯電話ネットワークを使用して遠隔地からデータを受信する方法を提供します。このシールドを使用すると、以下の3つの方法でこれを実現できます：

* ショートメッセージサービス（SMS）
* 音声通信
* GPRSサービス

GPRS Shieldは、標準的なArduinoボードと同じフォームファクター（およびピン配置）を持つすべてのボードと互換性があります。GPRS Shieldは、簡単なATコマンドを使用してUARTを介して設定および制御することができます。SIMCOMのSIM900モジュールを基にしたGPRS Shieldは、携帯電話のような機能を持っています。通信機能に加えて、GPRS Shieldには12個のGPIO、2個のPWM、およびADCが搭載されています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/gprs-shield-p-779.html)

## バージョン

| リビジョン    | 説明     |リリース日    |
| :------------- | :------------- |:------------- |
| v0.9b      | 初回公開リリース（ベータ版）       |2011年3月3日       |
| v1.2      | SIM90の電源オン/オフを制御するソフトウェアポートを追加       |2011年12月2日       |
| v1.4     | 電源回路を再設計し、PCBレイアウトを再配置      |2012年8月30日       |

## 特徴

* [SIMCom](http://simcomm2m.com/En/)のSIM900モジュールを基に構築
* クワッドバンド 850 / 900 / 1800 / 1900 MHz - 世界中のGSMネットワークで動作可能。
* ATコマンドによる制御 - 標準コマンド：GSM 07.07 &amp; 07.05 | 拡張コマンド：SIMCOM ATコマンド。
* ショートメッセージサービス - ネットワークを介して少量のデータ（ASCIIまたは生の16進数）を送信可能。
* 組み込みTCP/UDPスタック - データをウェブサーバーにアップロード可能。
* スピーカーおよびヘッドフォンジャック - DTMF信号を送信したり、留守番電話のように録音を再生可能。
* SIMカードホルダーおよびGSMアンテナ - 基板上に搭載。
* 12個のGPIO、2個のPWM、およびADC（すべて2.8ボルトロジック） - Arduinoを拡張可能。
* 低消費電力 - 1.5mA（スリープモード）
* 工業用温度範囲 - -40°Cから+85°C

## アプリケーションアイデア

* M2M（Machine to Machine）アプリケーション - SMSまたはGPRSを使用して、異なる工場にある2つの機械間で制御データを転送。
* 家電の遠隔操作 - オフィスにいる間にSMSを送信して自宅の洗濯機をオンまたはオフにする。
* 遠隔気象観測所またはワイヤレスセンサーネットワーク - [Seeeduino Stalker](https://wiki.seeedstudio.com/ja/Seeeduino_Stalker_V3.1/)を使用して、センサーノードを作成し、気象観測所（温度、湿度など）からのセンサーデータをウェブサーバー（例：[pachube.com](http://www.pachube.com)）に転送。
* インタラクティブ音声応答システム - GPRS ShieldをMP3デコーダーおよびDTMFデコーダー（Arduinoとともに）と組み合わせて、[インタラクティブ音声応答システム（IVRS）](https://en.wikipedia.org/wiki/Interactive_voice_response)を作成。
* 車両追跡システム - GPRS ShieldをArduinoおよびGPSモジュールと組み合わせて車に設置し、インターネット上で位置情報をライブ配信。自動車盗難警報として使用可能。

## 注意事項

* SIMカードがロック解除されていることを確認してください。
* 本製品は絶縁ケースなしで提供されます。特に乾燥した（湿度が低い）天候では、ESD（静電気放電）対策を徹底してください。
* GPRS ShieldのUARTの工場出荷時設定は19200 bps 8-N-1です。（ATコマンドで変更可能です）。
* [Seeeduino Stalker](https://wiki.seeedstudio.com/ja/Seeeduino_Stalker_V3.1/)とGPRS Shieldを使用する場合は、**OK_READ**ジャンパーを取り外す（つまり開く）ことを忘れないでください。これにより、バッテリーチャージャーICのOKピンがマイクロコントローラーのデジタルピン7から切断され、NewSoftSerialライブラリを使用してGPRS Shieldとの通信が妨げられなくなります。

## 仕様

SIM900の仕様については、以下のPDFファイルを参照してください：[SIM900_SPEC.pdf](https://wiki.seeedstudio.com/ja/images/0/0b/SIM900_SPEC.pdf)

<table cellspacing="0" width="80%">
  <tr>
    <th scope="col"> 項目 </th>
    <th scope="col"> 最小 </th>
    <th scope="col"> 標準 </th>
    <th scope="col"> 最大 </th>
    <th scope="col"> 単位 </th>
  </tr>
  <tr>
    <th scope="row"> 電圧 </th>
    <td>4.8</td>
    <td>5.0</td>
    <td>5.2</td>
    <td>VDC</td>
  </tr>
  <tr>
    <th scope="row"> 電流 </th>
    <td>/</td>
    <td>50</td>
    <td>450</td>
    <td>mA</td>
  </tr>
  <tr>
    <th scope="row"> 寸法（アンテナ含む） </th>
    <td colspan="3"> 110x58x19 </td>
    <td>mm</td>
  </tr>
  <tr>
    <th scope="row"> 正味重量 </th>
    <td colspan="3"> 76±2 </td>
    <td>g</td>
  </tr>
</table>

## インターフェース機能

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_Shield_interface.png)

* **電源選択** - GPRS Shieldの電源を選択（外部電源またはArduinoの5V）
* **電源ジャック** - 外部4.8～5VDC電源に接続
* **アンテナインターフェース** - 外部アンテナに接続
* **シリアルポート選択** - GPRS Shieldに接続するソフトウェアシリアルポートまたはハードウェアシリアルポートを選択
* **ハードウェアシリアル** - Arduino/SeeeduinoのD0/D1
* **ソフトウェアシリアル** - Arduino/SeeeduinoのD7/D8のみ
* **ステータスLED** - SIM900の電源がオンかどうかを表示
* **ネットライト** - SIM900がネットワークに接続している状態を表示
* **SIM900のUART** - SIM900のUARTピンのブレークアウト
* **マイク** - 音声を電気信号に変換
* **スピーカー** - 電気信号を音声に変換
* **SIM900のGPIO、PWM、ADC** - SIM900のGPIO、PWM、ADCピンのブレークアウト
* **電源キー** - SIM900の電源オン/オフ

### Arduinoでのピン使用

* **D0** - GPRS Shieldとの通信にソフトウェアシリアルポートを選択した場合は未使用
* **D1** - GPRS Shieldとの通信にソフトウェアシリアルポートを選択した場合は未使用
* **D7** - GPRS Shieldとの通信にソフトウェアシリアルポートを選択した場合に使用
* **D8** - GPRS Shieldとの通信にソフトウェアシリアルポートを選択した場合に使用
* **D9** - SIM900の電源オン/オフをソフトウェアで制御するために使用
* **注意:** A4とA5はSIM900のI2Cピンに接続されています。SIM900はI2C経由でアクセスできません。

## 初めての使用

### ライトステータス

<table>
  <tbody>
    <tr>
      <th> LED </th>
      <th> 状態 </th>
      <th> 機能 </th>
    </tr>
    <tr>
      <td width="300px" rowSpan={2}> ステータス </td>
      <td width="300px"> オフ </td>
      <td width="400px"> 電源オフ </td>
    </tr>
    <tr>
      <td width="300px"> オン </td>
      <td width="400px"> 電源オン </td>
    </tr>
    <tr>
      <td width="300px" rowSpan={4}> ネットライト </td>
      <td width="300px"> オフ </td>
      <td width="400px"> SIM900が動作していない </td>
    </tr>
    <tr>
      <td width="300px"> 64msオン/800msオフ </td>
      <td width="400px"> SIM900がネットワークを見つけていない </td>
    </tr>
    <tr>
      <td width="300px"> 64msオン/3000msオフ </td>
      <td width="400px"> SIM900がネットワークを見つけた </td>
    </tr>
    <tr>
      <td width="300px"> 64msオン/300msオフ </td>
      <td width="400px"> GPRS通信中 </td>
    </tr>
  </tbody>
</table>

### ハードウェアのインストール

* **ロック解除されたSIMカードをSIMカードホルダーに挿入** - SIMカード用の6ピンホルダー。SIM900は1.8ボルトおよび3.0ボルトのSIMカードをサポートしており、SIMカードの電圧タイプは自動的に検出されます。
  * SIMカードをホルダーに挿入
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Insert_an_unlock_SIM_card.jpg)
  * SIMカードホルダーをロック
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/SIM_card_inserted.jpg)

* **アンテナパッドが正しく固定されていることを確認** - GPRS ShieldボードにはGSMアンテナを接続するための小型同軸RFコネクタが搭載されています。GPRS Shieldに搭載されているコネクタは[U.FLコネクタ](https://en.wikipedia.org/wiki/Hirose_U.FL)と呼ばれます。GPRS Shieldに取り付けられるGSMアンテナには[SMAコネクタ](https://en.wikipedia.org/wiki/SMA_connector)（RP-SMAコネクタではありません）が付属しています。アンテナをボードに接続するためのパッチコードもGPRS Shieldに付属しています。接続トポロジーは以下の図に示されています：

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/The_antenna_pad.jpg)

* **GSMアンテナを組み立てる**

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Assemble_GSM_antenna.jpg)

* **GPRS Shieldの電源供給** - ボード上のスイッチで電源を選択します。Arduinoの5V電源または外部電源を選択できます。以下の画像のようにArduinoの5V電源を選択します：

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_select_5v_of_arduino.jpg)

* **通信ポートの設定** - GPRS ShieldはArduinoのハードウェアシリアルポートまたはソフトウェアシリアルポートを介して制御できます。ジャンパーでソフトウェアシリアルポートを選択します：

|GPRSがArduinoとソフトウェアシリアルで通信| GPRSがArduinoとハードウェアシリアルで通信|
|---|---|
|![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_communicate_with_arduino_with_software_serial.jpg) |![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_communicate_with_arduino_with_hardware_serial.jpg) |

* **Arduino UNO R3に接続** - GPRS Shieldは、他の設計の良いシールドと同様に、以下の写真のようにスタック可能です。

* GPRS Shield + Arduino UNO R3
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Plug_GPRS_to_arduino.jpg)

### 電源オンとオフ

* **ハードウェアトリガー**  
電源キーを約2秒間押すことで、電源をオンまたはオフにします。  
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Button_to_power_up_and_down.jpg)

* **ソフトウェアトリガー**  
ArduinoのD9ピンを使用して、ファームウェアにソフトウェアトリガーを追加することで、シールドの電源をオン/オフできます。

:::note
ソフトウェアで電源のオン/オフを行うには、シールド上のピン9用のJPをはんだ付けする必要があります。
:::

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Shixu.jpg)

電源のオン/オフのタイミングとして、オン/オフをトリガーするには1秒以上のパルスが必要で、タイミングを安定させるには3.2秒以上の遅延が必要です。以下のコードをファームウェアに追加することで、ボタンを押さずにシールドをオン/オフできます：

```
void powerUpOrDown()
{
    pinMode(9, OUTPUT);
    digitalWrite(9,LOW);
    delay(1000);
    digitalWrite(9,HIGH);
    delay(2000);
    digitalWrite(9,LOW);
    delay(3000);
}
```

### はじめに - ATコマンドで遊ぶ

GPRSシールドには、GSMネットワークを介してデータを送信するために必要なアクセサリがすべて付属しています。ただし、ArduinoボードとGSM SIMカードは別途必要です。音声通話を行いたい場合は、マイク付きヘッドセットも必要です。

**ステップ1: GPRSシールドのテストセットアップを作成する**

GPRSシールドを受け取ったら、最初に何をしたいですか？テキストメッセージ（SMS）を送信しますか？それとも誰かに電話をかけますか（ヘッドセットが必要）？これらすべてを、GPRSシールドにATコマンドを送信することで実現できます。ATコマンドは、GPRSモデムが理解する特別な言語で、シリアルインターフェース（UART）を介して送信される簡単なテキストコマンドです。そのため、任意のシリアルターミナルソフトウェアを使用して通信できます。

:::note
ほとんどのATコマンドは**キャリッジリターン**を伴って送信する必要があり、シリアルポートターミナルで「+CR」オプションを選択する必要があります。
:::

ATコマンドを試すには、GPRSシールドを電源オンし、通信する方法が必要です。以下に説明するArduino Duemilanoveボードを使用するのが最適です。同じ手順は[Seeeduino](https://wiki.seeedstudio.com/ja/Seeeduino_v4.2/)や[Seeeduino Stalker](https://wiki.seeedstudio.com/ja/Seeeduino_Stalker_V3.1/)にも適用されます。

* 前述のハードウェアインストール手順に従ってハードウェアシステムをセットアップします。
* GPRSシールド上のGPRS_TX & GPRS_RXジャンパーがSWSerial位置に取り付けられていることを確認します。これにより、GPRS_TXがD7（RX）に、GPRS_RXがD8（TX）に接続されます。
* Arduino Duemilanove（またはSeeeduino）をUSBケーブルでコンピュータに接続します。
* Duemilanoveボード上のATmega328Pマイクロコントローラーには、PCとの通信に使用される1つのUARTしかありません。必要なのは、デジタルピンD8とD7を使用してソフトウェアシリアルで2番目のシリアルポート（UART）をエミュレートするArduinoスケッチです。すべての通信はソフトウェアシリアルポートと実際のハードウェアシリアルポートを介して行われます。これにより、コンピュータ（実際のハードウェアUARTに接続）からのすべてのデータがGPRSシールド（ソフトウェアUARTに接続）にルーティングされ、ATコマンドを使用してGPRSシールドを制御できるようになります。このスキームを示すブロック図は以下の通りです。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_aurduino_uart.jpg)

このようなプログラムを開発するには、SoftwareSerialライブラリを使用する必要があります。以下はデモコードです。

```
//シリアルリレー - ArduinoはコンピュータとGPRSシールド間の
//シリアルリンクを19200 bps 8-N-1で接続します。
//コンピュータはハードウェアUARTに接続されています。
//GPRSシールドはソフトウェアUARTに接続されています。

#include <SoftwareSerial.h>

SoftwareSerial GPRS(7, 8);
unsigned char buffer[64]; // シリアルポート経由で受信するデータ用のバッファ配列
int count=0;     // バッファ配列のカウンタ
void setup()
{
    GPRS.begin(19200);               // GPRSのボーレート
    Serial.begin(19200);             // Arduinoのシリアルポートのボーレート
}

void loop()
{
    if (GPRS.available())              // ソフトウェアシリアルポートからデータが来ている場合 ==> GPRSシールドからデータが来ている
    {
        while(GPRS.available())          // データを文字配列に読み込む
        {
            buffer[count++]=GPRS.read();     // 配列にデータを書き込む
            if(count == 64)break;
        }
        Serial.write(buffer,count);            // データ送信が終了したら、バッファをハードウェアシリアルポートに書き込む
        clearBufferArray();              // 配列に保存されたデータをクリアする関数を呼び出す
        count = 0;                       // whileループのカウンタをゼロに設定
    }
    if (Serial.available())            // ハードウェアシリアルポートにデータがある場合 ==> PCまたはノートブックからデータが来ている
    GPRS.write(Serial.read());       // GPRSシールドに書き込む
}
void clearBufferArray()              // バッファ配列をクリアする関数
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // 配列のすべてのインデックスをNULLでクリア
}
```

* スケッチをArduinoボードにアップロードします。
* シリアルツールを持っていない場合は、[serial tool](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Sscom32E.zip)をダウンロードします。Arduino用の正しいCOMポートを選択し、**19200** 8-N-1で動作するように設定して「Open COM」をクリックします。
* SIM900を電源オンまたはオフにするには、ボタンを約2秒間押します。電源オン後、赤色LEDが点灯し、その隣の緑色LEDが点滅します。緑色LEDが3秒ごとに点滅する場合、シールドがネットワークを見つけたことを示します。以下は電源オン/オフボタンです。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Power_on_and_off_for_SIM900.jpg)

また、シリアルモニターに以下のようなメッセージが表示されるはずです：  
`RDY` `+CFUN: 1` `+CPIN: READY` `Call Ready`  
シリアルモニターにメッセージが表示されない場合は、「send new」オプションをクリックしてATコマンドの末尾にキャリッジリターンを追加し、ATコマンド`AT+IPR=19200`を送信してSIM900のボーレートを設定してください。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_set_baud_rate.jpg)

GPRSシールドのボーレートを設定する前に、GPRSシールドとArduinoのシリアルポートのボーレートが同じであることを確認してください。

* 次に、「send new」オプションをクリックし、「AT」（引用符なし）をArduinoボードに送信します。GPRSシールドは「OK」と応答するはずです。これにより、GPRSシールドの設定が正常に完了したことを意味します。これで、さまざまなATコマンドを試すことができます。（Arduino IDEのシリアルモニターを使用している場合は、行末設定を「キャリッジリターン」に設定し、ボーレートを19200に設定してください）。

**ステップ2: テキストメッセージ（SMS）の送信**

テストセットアップが準備できたので、Arduinoをプログラムする前に、いくつかのATコマンドを手動で試してみましょう。まずはSMSを送信してみます。

* ステップ1で説明したセットアップを作成します。
* シリアルターミナルソフトウェアを使用して、**AT+CMGF=1** を送信し、Enterキーを押します。GPRSシールドは、テキストモードとPDU（またはバイナリ）モードの2つのモードでSMSを送信できます。人間が読めるメッセージを送信したいので、テキストモードを選択します。GPRSシールドは **OK** と応答します。
* 「send new」オプションをクリックし、**AT+CMGS="+918446043032"** を送信します。これにより、GPRSシールドが新しいメッセージのテキストを受け入れる準備を開始します。この番号は指定された電話番号を意味します（番号をターゲット電話の電話番号に置き換えてください）。GPRSシールドは、メッセージを入力するよう促す '_**&gt;'**_ を送信します。ATコマンド内の電話番号は、[E.123形式](https://en.wikipedia.org/wiki/E.123)に従う必要があることに注意してください。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_send_a_message.jpg)

* メッセージを入力し終えたら、「send hex」オプションをクリックして、16進数の **1A** を送信します。モデムはメッセージを受け入れ、**OK** と応答します。数秒後、指定した番号の携帯電話にメッセージが届くはずです。以下の画像を参照してください。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Gprssendsms1.jpg)

:::note
上記の手順に従ってもターゲットの携帯電話でメッセージを受信できない場合は、SMSメッセージセンター番号を設定する必要があるかもしれません。
:::

**AT+CSCA="+919032055002"** コマンドを送信し、Enterキーを押します。このコマンドは、AT+CMGFとAT+CMGSコマンドの間に送信してください。上記のコマンドで指定された電話番号を、GSMサービスプロバイダーのSMSセンター番号に置き換えてください。

メッセージセンター番号は各サービスプロバイダーごとに異なります（例: +919032055002は_Tata DoCoMo, Pune, India_のメッセージセンター番号です）。GSMサービスプロバイダーのカスタマーセンターに連絡して、メッセージセンター番号を確認してください。

**ステップ3: さらなる探求**

ATコマンドの使い方を理解したので、GPRSシールドを使用してArduino用のスケッチを開発する前に、他のコマンドを試してみましょう。

これには、シリアルポートを介してGPRSシールドにこれらのATコマンドのシーケンスを送信し、SMSの送信、通話の発信、またはGPRS接続を介したデータ送信を行うスケッチを作成することが含まれます。

[ATコマンドリファレンスマニュアル](https://wiki.seeedstudio.com/ja/images/a/a0/SIM900_ATC_V1_00.pdf)を参照して、コマンドのシーケンスを確認してください。Arduinoスケッチを開発してもGPRSシールドが期待通りに動作しない場合は、ATコマンドとそのシーケンスを確認する必要があります。そのためには、入門セクションで添付されているシリアルリレースケッチをATmega328Pに再ロードし、ATコマンドを手動で入力して出力を確認してください。GPRSシールドから返される応答は、ATコマンドシーケンスのデバッグに役立ちます。

:::note
同じタスクを実行するためのCプログラムも開発され、添付されています：[Softuart relay atmega328p.zip](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Softuart_relay_atmega328p.zip "File:Softuart relay atmega328p.zip")。
:::

このプログラムはWindows PC上で開発されました。[AVRStudio4](http://www.atmel.com/dyn/products/tools_card.asp?tool_id=2725)がIDEとして使用され、[WinAVR](http://winavr.sourceforge.net/)がコンパイラとして使用されました。ZIPファイルにはAVRStudio4プロジェクトが含まれています。Cコンパイラ（WinAVR）はIntel Hex（.hex）を生成します。この.hexファイルをArduino IDE以外でArduinoボードにアップロードするには、Arduinoボードのブートローダーと通信できるプログラムが必要です。[XLoader](http://xloader.russemotto.com/)はそのようなプログラムで、Windows上で動作し、さまざまなコンパイラで生成された.hexファイルをArduinoボードにアップロードできます。

### SoftwareSerialライブラリに関する注意事項

Arduino 1.0では、NewSoftSerialの代わりに配布に含まれるSoftwareSerialライブラリを使用できるはずです。ただし、ライブラリヘッダー「SoftwareSerial.h」において、受信メッセージ用に予約されたバッファが64バイトにハードコードされていることに注意してください：

```
 define _SS_MAX_RX_BUFF 64 // RXバッファサイズ
```

これは、GPRSモジュールがバッファより多くのデータを受信した場合、バッファオーバーフローでデータを失う可能性があることを意味します！たとえば、「AT+CMGR=xx」（xxはメッセージインデックス）を使用してモジュールからSMSを読み取る場合、電話番号や時間などのヘッダー情報が多くのスペースを占有するため、メッセージ部分が表示されない可能性があります。この問題を解決するには、**_SS_MAX_RX_BUFF** を手動でより大きな値（ただし、メモリをすべて使い果たさないように適切な値）に変更する必要があります。

[SoftwareSerialライブラリ](https://arduino.cc/hu/Reference/SoftwareSerial)には以下の制限があります（Arduinoページから引用）。複数のソフトウェアシリアルポートを使用する場合、一度にデータを受信できるのは1つだけです。
これは、たとえばGroveシリアルLCDなどの別のシリアルデバイスを追加しようとすると、コードを慎重に作成しない限り通信エラーが発生する可能性があることを意味します。

## 簡単なソースコード例

以下のデモコードは、Xduinoを使用してSMSメッセージを送信し、音声通話を発信し、ウェブサイトにHTTPリクエストを送信し、Pachubeにデータをアップロードするためのものです。このコードはArduino Duemilanoveでテストされており、他の互換性のあるプラットフォームでも動作します。このスケッチはATmega328PのソフトウェアUARTを使用していることに注意してください。以下の手順に従ってこのスケッチを実行してください。

1. GPRSシールドを取り外し、このスケッチをArduinoにダウンロードします。
2. XduinoをUSBポートから切断して電源をオフにします。
3. GPRSシールドのシリアルポートジャンパーをSWserial位置に設定し、Arduinoのソフトシリアルポートを使用します。
4. GPRSシールドにアンテナを接続し、SIMカードを挿入します。
5. GPRSシールドをArduinoに取り付けます。
6. ArduinoをUSBでコンピュータに接続し、お気に入りのシリアルターミナルソフトウェアを起動します。ArduinoのCOMポートを選択し、19200 8-N-1で動作するように設定します。
7. ターミナルでコマンドを入力して異なる機能を実行します。デモには以下の4つの機能があります：

    * a. **'t'** を入力すると、指定した別の携帯電話番号（コード内で設定する必要があります）にSMSメッセージを送信します。
    * b. **'d'** を入力すると、指定した別の携帯電話番号（コード内で設定する必要があります）に通話を発信します。
    * c. **'h'** を入力すると、アクセスしたいウェブサイトにHTTPリクエストを送信します（コード内でウェブアドレスを設定する必要があります）。正しく動作すればウェブサイトから文字列が返されます。
    * d. **'s'** を入力すると、Pachubeにデータをアップロードします（詳細はコード内の説明を参照してください）。Pachubeにデータをアップロードするには設定が必要なため、**'s'** を入力する前に **'h'** を入力することを強くお勧めします。HTTPリクエストを送信する機能を実行すると、設定が実行されます。

8. コマンドを入力した後にターミナルでエラーが返された場合は、心配せずにもう一度コマンドを入力してください。

```cpp
/*注意: このコードは、GPRSシールドを使用してSMSメッセージを送信し、音声通話を発信し、
  ウェブサイトにHTTPリクエストを送信し、TCP接続を介してpachube.comにデータをアップロードする方法を示すデモです。

  マイクロコントローラーのデジタルピン7を使用して、SoftSerialライブラリを使用したGPRSシールドとの通信を可能にします。
  IDE: Arduino 1.0以降
  以下の項目をコード内で置き換えてください：
  1. 電話番号（国コードを忘れずに追加してください）
  2. アクセスポイント名（APN）
  3. Pachube APIキーを、cosm.comのアカウントで割り当てられた個人用キーに置き換えてください。
*/

#include <SoftwareSerial.h>
#include <String.h>

SoftwareSerial mySerial(7, 8);

void setup()
{
    mySerial.begin(19200);               // GPRSのボーレート
    Serial.begin(19200);                 // GPRSのボーレート
    delay(500);
}

void loop()
{
    // プログラム起動後、ターミナルを使用してGPRSシールドのシリアルに接続できます。
    // ターミナルで 't' を入力すると、SendTextMessage() が実行され、SMSメッセージの送信方法を示します。
    // 'd' を入力すると、DialVoiceCall() が実行されます。その他も同様です。

    if (Serial.available())
    switch(Serial.read())
    {
        case 't':
        SendTextMessage();
        break;
        case 'd':
        DialVoiceCall();
        break;
        case 'h':
        SubmitHttpRequest();
        break;
        case 's':
        Send2Pachube();
        break;
    }
    if (mySerial.available())
    Serial.write(mySerial.read());
}

///SendTextMessage()
///この関数はSMSメッセージを送信します
void SendTextMessage()
{
    mySerial.print("AT+CMGF=1\r");    // SMSをテキストモードで送信するため
    delay(100);
    mySerial.println("AT + CMGS = \"+86138xxxxx615\""); // SMSメッセージを送信（電話番号の前に国コードを追加する必要があります）
    delay(100);
    mySerial.println("テストメッセージ！"); // メッセージの内容
    delay(100);
    mySerial.println((char)26); // Ctrl+ZのASCIIコードは26
    delay(100);
    mySerial.println();
}

///DialVoiceCall
///この関数は音声通話を発信します
void DialVoiceCall()
{
    mySerial.println("ATD + +86138xxxxx615;"); // 電話番号に発信
    delay(100);
    mySerial.println();
}

///SubmitHttpRequest()
///この関数はHTTPリクエストを送信します
///注意: delayの時間は非常に重要で、十分に設定する必要があります
void SubmitHttpRequest()
{
    mySerial.println("AT+CSQ");
    delay(100);

    ShowSerialData(); // GPRSシールドからのデータを表示するコードです。HTTPリクエストのプロセスを簡単に確認するためのものです。

    mySerial.println("AT+CGATT?");
    delay(100);

    ShowSerialData();

    mySerial.println("AT+SAPBR=3,1,\"CONTYPE\",\"GPRS\""); // SAPBRを設定、接続タイプはGPRSを使用
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+SAPBR=3,1,\"APN\",\"CMNET\""); // APNを設定、2番目の引数はローカルAPNサーバーを入力
    delay(4000);

    ShowSerialData();

    mySerial.println("AT+SAPBR=1,1"); // SAPBRを設定、詳細はATコマンドマニュアルを参照
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+HTTPINIT"); // HTTPリクエストを初期化

    delay(2000);
    ShowSerialData();

    mySerial.println("AT+HTTPPARA=\"URL\",\"www.google.com.hk\""); // HTTPパラメータを設定、2番目の引数はアクセスしたいウェブサイト
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+HTTPACTION=0"); // リクエストを送信
    delay(10000); // delayは非常に重要です。ウェブサイトからの返答データが大きい場合、必要な時間が長くなります。

    ShowSerialData();

    mySerial.println("AT+HTTPREAD"); // アクセスしたウェブサイトからデータを読み取る
    delay(300);

    ShowSerialData();

    mySerial.println("");
    delay(100);
}

///send2Pachube()///
///この関数はセンサーデータをPachubeに送信します。この関数を実行するとPachubeで新しい値を確認できます。
void Send2Pachube()
{
    mySerial.println("AT+CGATT?");
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+CSTT=\"CMNET\""); // タスクを開始し、APNを設定
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+CIICR"); // ワイヤレス接続を確立
    delay(3000);

    ShowSerialData();

    mySerial.println("AT+CIFSR"); // ローカルIPアドレスを取得
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+CIPSPRT=0");
    delay(3000);

    ShowSerialData();

    mySerial.println("AT+CIPSTART=\"tcp\",\"api.cosm.com\",\"8081\""); // 接続を開始
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+CIPSEND"); // リモートサーバーにデータを送信開始
    delay(4000);
    ShowSerialData();
    String humidity = "1031"; // これらの4行のコードは実際のセンサーデータを模倣しています。このデモでは他のセンサーを追加していないため、4つの文字列変数を使用しています。
    String moisture = "1242"; // プロジェクトでこれらの変数を実際のセンサーデータに置き換えることができます。
    String temperature = "30"; //
    String barometer = "60.56"; //
    mySerial.print("{\"method\": \"put\",\"resource\": \"/feeds/42742/\",\"params\""); // ここはPachubeで申請したフィード
    delay(500);
    ShowSerialData();
    mySerial.print(": {},\"headers\": {\"X-PachubeApiKey\":"); // ここでPachube APIキーを置き換える必要があります
    delay(500);
    ShowSerialData();
    mySerial.print(" \"_cXwr5LE8qW4a296O-cDwOUvfddFer5pGmaRigPsiO0"); // Pachube APIキー
    delay(500);
    ShowSerialData();
    mySerial.print("jEB9OjK-W6vej56j9ItaSlIac-hgbQjxExuveD95yc8BttXc"); // Pachube APIキー
    delay(500);
    ShowSerialData();
    mySerial.print("Z7_seZqLVjeCOmNbEXUva45t6FL8AxOcuNSsQS\"},\"body\":");
    delay(500);
    ShowSerialData();
    mySerial.print(" {\"version\": \"1.0.0\",\"datastreams\": ");
    delay(500);
    ShowSerialData();
    mySerial.println("[{\"id\": \"01\",\"current_value\": \"" + barometer + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"02\",\"current_value\": \"" + humidity + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"03\",\"current_value\": \"" + moisture + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"04\",\"current_value\": \"" + temperature + "\"}]},\"token\": \"lee\"}");

    delay(500);
    ShowSerialData();

    mySerial.println((char)26); // 送信
    delay(5000); // 応答を待つ、重要！時間はインターネットの状況に依存します
    mySerial.println();

    ShowSerialData();

    mySerial.println("AT+CIPCLOSE"); // 接続を閉じる
    delay(100);
    ShowSerialData();
}

void ShowSerialData()
{
    while(mySerial.available()!=0)
    Serial.write(mySerial.read());
}
```

## FAQ

以下は GPRS シールドに関するよくある質問（FAQ）です。使用前にお読みください：

* なぜ GPRS シールドは Stalker v2.1/2.0 でソフトウェアシリアルポート（D7/D8）を使用して動作しないのですか？

    Stalker v2.1/2.0 はデジタルピン（D7/D8）を使用しているため、GPRS_TX/GPRS_RX を他のデジタルピンに接続してソフトウェアシリアルポートとして使用する必要があります。この問題は Stalker 2.2 バージョンで解決されています。

* GPRS シールドを Stalker や他の Arduino ボードに組み込むと、なぜ I2C が使用できなくなるのですか？

    GPRS シールドが他のモジュールと I2C を介して競合するためです。GPRS シールド自体は I2C ポートを使用していません。SIM900 の I2C ポートから A4/A5 への接続を切断することで解決できます。

## 関連プロジェクト

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Recipe-arduinophone.png)

これは GPRS シールド V2.0 を使用したデモです。

このデモでは、Arduino、GPRS シールド、および他のモジュールを使用して「Arduino Phone」という携帯電話を作成しました。

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ArduinoPhone/)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRS_shield_v1.4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [GPRS Shield v1.4 回路図（PDF形式）](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRSshield_Schematic.pdf)

* [GPRS Shield v1.4 PCB（PDF形式）](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRSshield%20v1.4.pdf)
* [GPRS Shield v1.4 回路図とPCB（Eagle形式）](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRS_shield_v1.4.zip)
* [ATコマンド v1.00](https://wiki.seeedstudio.com/ja/images/a/a0/SIM900_ATC_V1_00.pdf)
* [ATコマンド v1.03](https://wiki.seeedstudio.com/ja/images/a/a8/SIM900_AT_Command_Manual_V1.03.pdf)
* [ATコマンド v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/AT_Commands_v1.11.pdf)
* [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
* [SIM900 ハードウェア設計](https://wiki.seeedstudio.com/ja/images/e/e3/SIM900_HD_V1.05.pdf)
* [SIM900 ファームウェアとツール（ファームウェア:1137B08SIM900M64_ST）](https://wiki.seeedstudio.com/ja/images/8/87/SIM900_firmware_and_tool.zip)
* [SIM900 データシート](https://www.seeedstudio.com/document/SIM900datasheeet.zip)

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