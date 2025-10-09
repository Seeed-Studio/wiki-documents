---
description:  Grove - Starter Kit v3
title: Grove - Starter Kit v3
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Starter_Kit_v3
last_update:
  date: 05/15/2025
  author: shuxu hu
---


Groveは便利で迅速なプロトタイピングのためのモジュラー電子プラットフォームです。多くの構成をはんだ付けやブレッドボードを必要とせずに組み立てることができます。GroveモジュールをGroveシールドに単純にケーブル接続し、各Groveモジュールに提供されたサンプルコードを活用するだけです。Grove Starter Kitには、オーディオ、光、動作、触覚、その他のインタラクションモードをサポートする多数のセンサーとアクチュエーターが含まれています。そのため、様々なプロジェクトをすぐに始めることができます。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Starter_Kit_v2_Photo.jpg)

##  前書き

###  Groveについて

Groveは適度に調整された、すぐに使えるツールセットです。レゴのように、電子機器の組み立てにビルディングブロックアプローチを採用しています。ブレッドボードと様々な電子部品を使用してプロジェクトを組み立てる従来の複雑な学習方法と比較して、Groveは学習プロセスを大幅に簡素化し、凝縮します。Groveシステムは、ベースシールドと標準化されたコネクタを持つ様々なモジュールで構成されています。

ベースシールドにより、Groveモジュールからの任意のマイクロプロセッサの入力または出力を簡単に接続できます。すべてのGroveモジュールは、シンプルなボタンからより複雑な心拍数センサーまで、単一の機能に対応しています。それぞれには明確なドキュメントとデモコードが付属しており、迅速に開始できるようサポートします。

###  Arduinoについて知る

これがあなたにとって初めてのArduinoの使用である場合、以下の手順を完了する必要があります：

<!-- *   [Getting Started with Arduino](/ja/Getting_Started_with_Arduino)

*   [Install your microcontroller](/ja/Getting_Started_with_Seeeduino)

*   [Download and import the Grove - Starter Kit Sketchbook](/ja/How_To_Use_Sketchbook) -->

Grove - Starter Kit Sketchbookのダウンロードアドレスは[こちら](https://github.com/Seeed-Studio/Sketchbook_Starter_Kit_V2.0)です。

これで、Groveエコシステムを探索する準備が整いました。

###  パーツリスト

*   1*ベースシールド
*   1*Grove - LCD RGB バックライト
*   1*Grove - スマートリレー
*   1*Grove - ブザー
*   1*Grove - サウンドセンサー
*   1*Grove - タッチセンサー
*   1*Grove - 回転角度センサー
*   1*Grove - 温度センサー
*   1*Grove - LED
*   1*Grove - 光センサー
*   1*Grove – ボタン
*   1*DIP LED ブルー-ブルー
*   1*DIP LED グリーン-グリーン
*   1*DIP LED レッド-レッド
*   1*ミニサーボ
*   10*Groveケーブル
*   1*9Vからバレルジャックアダプター
*   1*Grove starter kitマニュアル
*   1*グリーンプラスチックボックス


###  モジュール詳細

#### Grove - ベースシールド

Groveベースシールドボードから始めましょう。「Grove - Base Shield」は「Electronic Brick Shield」の新バージョンです。ベースシールドはSeeeduino v3.0（168pおよび328p）、ならびにArduino UNOおよびDuemilanoveと互換性があります。ベースシールドには16のGroveポートがあり、4つの機能エリアに分かれています：アナログ（4）、デジタル（7）、I2C（4）、およびUART（1）。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Base_Shield_IO.jpg)

*   デジタルポート

写真に示すように、D2-D8とラベル付けされた7つのデジタルポートがあります。これらのそれぞれは、Arduino Unoの一対のデジタルピン（2/3 ... 8/9）を処理します。デジタルセンサー（例：プッシュボタン）の読み取りやデジタル（またはPWMによるアナログ）アクチュエーターの制御に使用できます。いずれの場合も、各ポートは0または1の2つの論理状態のみを処理できます。

*   アナログポート

左側には、アナログ読み取りを行うための4つのGroveポートがあります。アナログセンサーは0から1023の範囲の読み取り値を返すことができます。0または1のみを返すデジタルセンサーと比較して、アナログ読み取り値はより詳細で精密です。

*   I2Cポート

デジタルポートの下には4つのI2C Groveポートがあります。I2Cは、SCLとSDAの2本のワイヤーを介してデータを転送する低速バスプロトコルです。SCLはI2Cバス上でのデータ転送を同期するためのクロックラインです。SDAはデータラインです。

<!-- For detailed information on how to use your Grove – Base Shield, go to [Base Shield V2](/ja/Base_Shield_V2). -->

####  Grove - LCD RGB バックライト

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Serial_LEC_RGB_Backlight_Lcd.jpg)

Grove - LCD RGB バックライトは、ユーザー定義文字を使用したテキスト表示をサポートします。シンプルで簡潔なGroveインターフェースを使用してバックライトの色を設定できます。ArduinoとのコミュニケーションにはI2Cを使用します。そのため、データ交換とバックライト制御に必要なピン数が〜10から2に縮小され、他の困難なタスクのためにより多くのI/O能力を残します。

Grove_LCD_RGB_BacklightはMBEDもサポートするようになりました。コミュニティからの熱心な貢献に多大な感謝を申し上げます。詳細については、[こちら](https://github.com/DavidElmoRoss/Grove_LCD_RGB_Backlight_V5)をご覧ください。

**例**

この例では、画面にテキストを印刷し、バックライトの色を変更する方法を示します。次のパスで見つけてください：

File -&gt; Sketchbook -&gt; Grove_RGB_Backlight_LCD -&gt; HelloWorld

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/RGBbacklight.jpg)

**ヒント**

これは16x2 LCDスクリーンです。英語と日本語などの言語をサポートし、16文字のテキストの2行を表示することができます。表示パターンを定義することで、カスタム文字を作成して使用することもできます。カスタム文字を作成する例は、こちらで見つけることができます：

[https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)

####  Grove – リレー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Twig-Relay.jpg)

リレーは、Arduinoの制御能力を拡大するための有用なツールです！ Groveインターフェースを通じて制御信号を供給すると、リレーはスクリューターミナルに接続された外部回路を開いたり閉じたりします。外部回路の電圧は最大220Vまで動作できます！このリレーを手に取って、本当にタフなプロジェクトを始めましょう！

**例**

この例では、ボタンでリレーを制御する方法を示します：File -&gt; Sketchbook -&gt; Grove_Relay。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Relay_Ex.jpg)

**ヒント**

リレーは電子制御された機械的スイッチです。リレーのサイズは、電流を運ぶ能力に応じて変わります。リレー（本質的には、プラスチックボックス部分だけ）が大きいほど、より大きな電流を運ぶことができます。

<font color="red">
主電源電圧を扱う際は十分にご注意ください - 疑問がある場合は、ライセンスを持つ電気技師などの専門家に助けを求めてください。
</font>

<!-- For detailed information on how to use your Grove – Relay, you can go to [Grove – Relay page](/ja/Grove-Relay). -->

####  Grove – ブザー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Buzzer1.jpg)

ブザーは、シンプルながら楽しく使えるGroveです。シンプルな制御回路と組み合わせた圧電スピーカーです。デジタル出力に接続すると、出力がハイの時に音を発します。または、アナログ（実際には、パルス幅変調デジタル）出力に接続して、様々な音やエフェクトを生成することができます。

**例**

Grove – Buttonのコードを使用して、ボタンを押すとブザーがビープ音を鳴らすようにできます。しかし、Grove – Buzzerはもっと楽しいことができます - 曲を演奏できるのです！これはOomlout.comからの簡単な例で、家庭で親しまれている子守唄 - 「Twinkle Twinkle Little Star」を演奏します。

次のパスで例を見つけてください：File -&gt; Sketchbook -&gt; Grove_Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Buzzer_Ex.jpg)

**ヒント**

圧電ブザーは実際にどのように動作するのでしょうか？通常、各圧電ブザーには2つのセラミックウェーハがあります。異なる電圧が与えられると、それらは引き合ったり反発したりします。これらのウェーハの動きが空気の振動（つまり、音）を引き起こします。振動の周波数が変わると、音の周波数もそれに応じて変わります。

<!-- For detailed information on how to use your Grove - Buzzer, go to [Grove - Buzzer page](/ja/Grove-Buzzer) -->

####   Grove - サウンドセンサー

サウンドセンサーモジュールはシンプルなマイクロフォンです。LM358アンプとエレクトレットマイクロフォンに基づいており、環境内の音レベルを検出するために使用できます。

**例**

Grove – Sound Sensorのコードは、周囲の音の強度を反映した明度のLEDライトを制御するために使用できます。

File -&gt; Sketchbook -&gt; Grove_Sound_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Sound_Sensor_Ex.jpg)

**ヒント**

エレクトレットマイクロフォンはすべての周波数の音の強度を収集しますが、ポテンショメーターがドアマンの役割を果たすことができます。例えば、シャフトを完全に時計回りに回転させると、ポテンショメーターはすべてを通すことができます。完全に反時計回りに回転させると、何も通さなくなります。

<!-- For a detailed information on how to use your Grove - Sound Sensor, go to [Grove - Sound Sensor page](/ja/Grove-Sound_Sensor) -->

####   Grove - タッチセンサー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-touch_sensor_Photo.jpg)

Grove - Touch Sensorを使用すると、ボタンへの圧力を検出面への接触に置き換えることができます。指が近くにあるときの静電容量の変化を検出できます。そのため、指がパッドに直接触れても、近くにあるだけでも、Grove - Touch SensorはHIGHを出力します。

**例**

Grove – Buttonのコードがこのモジュールで動作します。次のパスで例を見つけてください：File -&gt; Sketchbook -&gt; Grove_Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Touch_Sensor_Ex.jpg)

**ヒント**

これは瞬間接触ボタンの代替品です。Grove – Touch Sensorは底部の円形（非塗装）領域の静電容量の変化を検出します。指がこの領域に近いほど、静電容量の変化が大きくなります。指とセンサーの間に紙があっても、依然として確実に機能します。

<!-- For detailed information on how to use your Grove - Touch Sensor, go to [Grove - Touch Sensor page](/ja/Grove-Touch_Sensor). -->

####   Grove - 回転角度センサー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Potentiometer1.jpg)

Groveポテンショメーターは0とVCC（3.3または5 VDC）の間のアナログ出力を生成します。角度範囲は300度で、値の線形変化があります。抵抗値は10kオームで、Arduino使用に最適です。これは「回転角度センサー」としても知られる場合があります。

**例**

この例では、回転角度センサーの値を読み取る方法を示します：

File -&gt; Sketchbook -&gt; Grove_Rotary_Angle_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Rotary_Angle_Sensor_Ex.jpg)

**ヒント**

回転ポテンショメーターは回転エンコーダーと非常に似て見えますが、同じものではありません。回転ポテンショメーターは本質的に、円形形状で構成されたスライドポテンショメーターです。スライド接触によって使用されている抵抗要素の割合を、アナログ方式で報告します。

<!-- For a detailed information on how to use your Grove - Rotary Angle Sensor,you can go to [Grove - Rotary Angle Sensor page](/ja/Grove-Rotary_Angle_Sensor) -->

####   Grove – 温度センサー

![400px](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Tempreture_Sensor_Connector.jpg)

Grove - Temperature Sensorは、周囲温度を返すサーミスタを使用します。私たちのボードは、アナログ入力ピンで測定されたこの電圧値を温度に変換します。動作範囲は-40から125度摂氏です。

**例**

この例では、センサーの生出力を温度に変換する方法を示します。シリアルモニターで摂氏でのデータを見ることができます。

File -&gt; Sketchbook -&gt; Grove_Temperature_Sensor。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Temperature_Sensor_Ex.jpg)

**ヒント**

Grove – Temperature Sensorは環境温度を検出するために使用されます。

<!-- For a detailed information on how to use your Grove - Temperature Sensor,you can go to [Grove - Temperature Sensor](/ja/Grove-Temperature_Sensor) -->

#### Grove - LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-LED_Photo.jpg)

Grove - LEDは、Arduino/Seeeduinoの初心者がデジタルポートからの制御を監視するために設計されています。ボックスや机の表面に簡単に取り付けることができ、電源や信号のパイロットランプとして使用できます。

**例**

この例では、呼吸効果のあるLEDライトを作ります：

File -&gt; Sketchbook -&gt; Grove_LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-LED_Ex.jpg)

**ヒント**

3色のLED電球をご用意していますので、小さなGrove – LED SocketのLEDを交換することで、お望みの色を得ることができます。LEDは電球の平坦な側にカソードがあり、丸い側にアノードがあります。LEDが正常に動作するためには、アノードがソケットの「+」サインに対応するように取り付ける必要があります。

<!-- For a detailed information on how to use your Grove - LED,you can go to [Grove - Red LED](/ja/Grove-Red_LED) -->

####   Grove - 光センサー

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Light_Sensor_photo.jpg)

光センサーは、光依存抵抗器（LDR）としても知られています。通常、周囲光強度が増加すると、光センサーの抵抗は減少します。

**例**

この例では、光強度が設定閾値を下回るとLEDが点灯します：

File -&gt; Sketchbook -&gt; Grove_Light_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Light_Sensor_Ex.jpg)

**ヒント**

アナログ光センサーの出力は0から1023の範囲ですが、出力は周囲光強度に対して線形ではありません。

<!-- For a detailed information on how to use your Grove - Light Sensor,you can go to [Grove - Light Sensor](/ja/Grove-Light_Sensor) -->

####   Grove – ボタン

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Button1.jpg)

この新バージョンのボタンGroveモジュールには1つの独立したボタンが含まれており、プルダウン抵抗で構成されています - マイクロコントローラーとデジタル入力として使用する準備ができています。ボタンはSIGワイヤーに信号を送り、このGroveモジュールではNCは使用されません。

**例**

この例では、このボタンでLEDをオンまたはオフにする方法を示します。

File -&gt; Sketchbook -&gt; Grove_Button

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Button_Ex.jpg)

**ヒント**

「瞬間的」とは、ボタンが押された後に跳ね返ることを意味します。このボタンは押されるとHIGHを出力し、離されるとLOWを出力します。

####  Grove -  サーボ

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Servo_Photo.jpg)

これは位置を精密に制御できるアクチュエーターです。

**例**

ポテンショメーターを使用してサーボの位置を制御する例を用意しました：

File --&gt; Sktechbook --&gt; Servo

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Starter_Kit_Servo.jpg)

**ヒント**

Grove – Servoには異なる目的のための取り付けハードウェアオプションがあります：小さなファンを駆動したり、物体を持ち上げたり、時計の針を模倣したりするために使用できます。

##  デモプロジェクト
---
###  1. 花の一杯

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/A_Cup_of_Flower.jpg)

**説明**

疲れた心を癒すための花の一杯はいかがですか？このプロジェクトはGrove – LEDと1つのGrove – Touch Sensorで構成されています。センサーに触れると、これらの美しいLEDが暖かく快適な光の効果であなたを照らします。

**材料リスト**

<dl><dd>1. Arduino x 1;</dd><dd>2. Grove – Base Shield x 1;</dd><dd>3. Grove – LED x 6;</dd><dd>4. Grove – Touch Sensor x 1;</dd><dd>5. 6 x 6cmカラーペーパー x 6;</dd><dd>6. 9Vバッテリー & 9Vバッテリークリップ x 1。</dd></dl>

:::note
    LEDの数は任意です。基本キットには3つが含まれています。しかし、カップの容量に応じて増減できます。ここでは大きなカップを使用しているため、ウェブサイトからさらに3つ追加しました。
:::
**手順**

**1. つぼみを折る **

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Fold_the_buds.jpg)

お好みの花のパターンを選択し、その手順に従っていくつか作成してください。Googleで検索すると非常に役立ちます。インターネット上には、手工芸を共有したい多くの折り紙愛好家やアーティストがいます。

ここではチューリップを選びましたが、ひまわり、バラ、ユリも素晴らしく聞こえます！

つぼみを折るときは、Groveケーブルが通るように、その底部に小さな穴を残す必要があります。

**2. セットアップ**


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Set_up.jpg)


つぼみとタッチセンサーを10cmのGroveケーブルでGrove – Base Shieldに接続します。その後、コードをコントローラーにアップロードします。
```
<pre>void setup()
{
    pinMode(2, OUTPUT);
    pinMode(4, OUTPUT);
    pinMode(6, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(11, OUTPUT);
    pinMode(13, OUTPUT);
    pinMode(9, INPUT); //pin of touch sensor
}

void loop()
{
    int switchState = digitalRead(9);
    if(switchState == HIGH)
    {
        digitalWrite(2, HIGH);
        digitalWrite(4, HIGH);
        digitalWrite(6, HIGH);
        digitalWrite(7, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(13, HIGH);
    }
    else
    {
        digitalWrite(2, LOW);
        digitalWrite(4, LOW);
        digitalWrite(6, LOW);
        digitalWrite(7, LOW);
        digitalWrite(11, LOW);
        digitalWrite(13, LOW);
    }
    delay(100);
}</pre>
```
**3. 電源投入 & 設置**


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Battery.jpg)


ポータブル9Vバッテリーを使用して花に電源を供給し、カップに設置します。完成！あなたの花の一杯をお楽しみください！

###   2. 調子はどう！

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/How_you_doing.jpg)

(think.bigchief.itからダウンロード)

**説明**

友達にどのように挨拶しますか？Big Chiefは「握手より良いものは何か？」と言うでしょう。これらのBig Chiefペーパートイの1つが他のものに背中を寄りかからせると、挨拶するために振動します！
**材料リスト**

<dl><dd>1. Arduini x 1;</dd><dd>2. Grove – Base Shield x 1;</dd><dd>3. Grove – Magnetic Switch x 1;</dd><dd>4. Grove – Vibrator x 1;</dd><dd>5. Paper toys x 2;</dd><dd>6. Magnet x 1;</dd><dd>7. 9Vバッテリー & 9Vバッテリークリップ x 1。</dd></dl>

**注：** LEDの数は任意です。基本キットには3つが含まれています。しかし、カップの容量に応じて増減できます。ここでは大きなカップを使用しているため、ウェブサイトからさらに3つ追加しました。

**手順**

**1. プリントアウト！ **

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Print_it_out.jpg)

インターネットでお気に入りのパターンを選択してください。磁石または磁気スイッチとバイブレーターのための十分なスペースがあることを確認してください。上記の折り紙の花と同様に、インターネット上で多数見つけることができます。

**2. 臓器を詰める **

ペーパートイをカットするときは集中してください。そうすることでのみ、きれいなものを得ることができます。その後、いくつかの臓器を詰める時間です。
Big Cihef A（この名前で呼びましょう！）の背中に磁石を貼りました。両面テープで貼り付けました。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck1.jpg)

Big Chief Bについては、Aと同じ位置の背中に磁気スイッチを貼り、足にバイブレーターを貼りました。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck2.jpg)

**3. 貼り合わせる **

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck3.jpg)

印刷シートの指示に注意深く従ってください。Big Chief Bで使用した2つのGroveモジュールにGroveケーブルを差し込みます。すると、上記のような2つの可愛いペーパートイができます。

**4. プログラムアップロード **

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck4.jpg)

下記のコードをArduinoにアップロードします。これにより、彼らに命を吹き込みます。
```
<pre>void setup()
{
    pinMode(11, INPUT);
    pinMode(9, OUTPUT);
}

void loop()
{
    int sensorState = digitalRead(11);
    if (sensorState == 1) digitalWrite(9, HIGH);
    else digitalWrite(9, LOW);
    delay(100);
}</pre>
```

##   機能
---
*   **標準化** – スケーラブルなジグソー形状、統一された4ピンコネクター、ネジ穴グリッド、エッジはんだパッド、重複開発の削減、異なるプロジェクトでの再利用により環境への影響を削減

*   **コンパクト** – 2cm*2 cmからのサイズ、シームレスな組み合わせ、表面実装部品、2.0mmピッチケーブル

*   **フレンドリー** – 簡単なバックル接続、間違い防止、様々な拡張モード、DIYに開放的、ライブラリとデモコード

*   **豊富**- 基本（ボタン、LED）から専門センサー（ジャイロ、コンパス）までの豊富な一般的回路の選択、需要に応じて追加継続、サードパーティの貢献、再利用可能

*   **コミュニティベース** – 投票による需要の満足、民主的設計、プロジェクトとレシピの共有、利益共有ビジネスパターン、レンタルと再利用


## FAQ

**Q1:  これはIntel Galileo Gen 1 Boardで動作しますか？**
     
A1: はい、このキットをIntel Galileo Gen1/Gen2ボードおよびEdison for Arduinoで使用できます。

**Q2: Grove - RGB LCD backlightに何も表示されませんが、背景色は正常に動作します。**

A2: 電源スイッチ（3.3V/5V）が5V側にあるかどうか確認してください。



##   リソース
---
*   [Sch pdf](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Starter_Kit_v3_sch_pdf.zip)

*   [Sch Eagle](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Starter_Kit_Eagle.zip)

*   [Grove - Button Source File](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Button_v1.0_Source_File.zip)

*   [Grove - LED Source File](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-LED_v1.0_Source_File.zip)

*   [Grove - Buzzer Source File](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Buzzer_v1.0_Source_File.zip)

*   [Grove - Rotary Angle Sensor Source File](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Rotary_Angle_Sensor_v1.2.zip)

*   [Grove -  Relay Source File](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Relay_v1.2_Eagle.zip)

*   [Base Shield Source File](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Base_Shield_v2.zip)

*   [Grove - Sound Sensor Source File](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Sound_Sensor_v1.3_eagle.zip)

*   [Grove - Buzzer Source File](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Buzzer_V1.1_eagle.zip)

私たちは[geppetto](https://geppetto.seeedstudio.com/)でこの部品を利用可能にしています。SeeedとGeppetoによる簡単なモジュラー電子設計です。今すぐ構築してください。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

##   謝辞
より適切な文法と語彙でこの文書を修正してくれたRich Morinに感謝の意を表したいと思います。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験を可能な限りスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに応えるために、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>