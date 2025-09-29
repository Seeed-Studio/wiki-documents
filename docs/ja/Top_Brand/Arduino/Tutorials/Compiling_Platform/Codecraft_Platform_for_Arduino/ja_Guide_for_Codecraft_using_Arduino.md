---
description: Arduinoを使用したCodecraftガイド
title: Arduinoを使用したCodecraftガイド
keywords:
- Arduino
- チュートリアル
- Codecraft_Platform_for_Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Guide_for_Codecraft_using_Arduino
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Arduinoを使用したCodecraftガイド

CodecraftはScratch3.0に基づいたプログラミングソフトウェアで、グラフィカルおよびテキストプログラミング言語の両方をサポートしています。これはSTEM教育において多用途に使用できるソフトウェアツールです。Codecraftを使用すると、子供たちは魅力的なストーリー、ゲーム、アニメーションをデザインし、CH Maker EdやSeeedstudioが提供するさまざまな電子キットを使用してインタラクティブなスマートアプリケーションを作成できます。さらに、準備が整ったら、コードブロックをArduino、Python、またはJavaScriptに変換して、最も人気のある言語について学ぶことができます。

Codecraftには「ステージモード」と「デバイスモード」の2つのモードがあります。ステージモードでは、「スプライト」と呼ばれるオブジェクトをコードブロックを使用して制御できます。このモードは、学生が形状、算術、その他の数学分野を学ぶのに役立ちます。

デバイスモードでは、Grove ZeroやArduinoを接続して、コードブロックをIDEにドラッグ＆ドロップするだけでクールなプロジェクトを構築できます。

## Codecraft

### デバイスモードのブロック

以下は、Codecraftで使用される主なブロックの種類です。

**スタックブロック**

![スタックブロック](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p1.png)

スタックブロックは、主なコマンドを実行するブロックです。上部にノッチがあり、下部に突起がある形状をしており、ブロックを上下に配置できます。

**ブールブロック**

![ブールブロック](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p2.png)

ブールブロックは条件を表します - それは「真」または「偽」のいずれかです。たとえば、コンピュータに「2+2=4ですか？」と尋ねると、「はい」または「いいえ」と答えます。ブールブロックは六角形の形をしています。

**レポーターブロック**

![レポーターブロック](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p3.png)

レポーターブロックは値を表します。レポーターブロックは数値や文字列を保持できます。たとえば、友達に「2+2は何ですか？」と尋ねると、「4」と答えるでしょう。これは単なる方程式だけでなく、変数を報告することもできます。たとえば、「あなたの年齢は？」と尋ねると、「15」と答えるかもしれません。丸いエッジの形状をしています。

**Cブロック**

![Cブロック](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p4.png)

Cブロックは「C」の形をしたブロックです。「ラップブロック」とも呼ばれ、Cの中にあるブロックをループさせたり、条件が真であるかを確認します。Cブロックは5種類あり、コントロールカテゴリにあります。Cブロックは下部に突起を持つことも、キャップされることもあります。

**出力ブールブロック**

![出力ブールブロック](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p5.png)

出力ブールブロックは六角形の形をしたブロックで、条件が「真」または「偽」であるかを確認し、条件が満たされた場合に操作を実行します。これらのブロックはブールブロックやCブロックの中に配置できます。

### 対応するGrove

お使いのGroveがサポートされているかどうかを確認するには、[CodeCraft Grove Compatible List](https://wiki.seeedstudio.com/ja/Codecraft_Grove_Compatible_List/)をご参照ください。

### 基本チュートリアル

**ステップ1. Arduinoサポートを追加する**

CodecraftはGrove ZeroとArduino Uno/Megaの両方をサポートしているため、ArduinoでCodecraftを使用する前にArduinoサポートを追加する必要があります。

[Codecraft](https://ide.chmakered.com/)にアクセスし、左側のサイドバーで「デバイスを追加」をクリックし、「Arduino Uno/Mega」を選択してください。

![デバイスを追加](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/add_device.png)

**ステップ2. Codecraft Assistantをインストールする**

Codecraft Assistantは、Codecraftで作成したコードをArduinoにアップロードするのを支援します。[CH MAKER Ed-Documents](https://ide.tinkergen.com/download/en/#:~:text=Mac%20v2.6.4.25-,Codecraft%20Assistant,-Codecraft%20Assistant%20is)を参照してダウンロードおよびインストールしてください。

**ステップ3. Arduinoのメイン手順**

通常、Arduinoのメイン手順には2つのサブ手順が含まれます。それらを`setup`と`loop`と呼びます。`setup`内のコードはArduinoが電源オンされたときに1回実行され、`loop`内のコードは繰り返し実行されます。

メイン手順ブロックは左側の「スタート」タブに含まれており、マウスを使って作業エリアにドラッグできます。

![メイン手順](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/main_procedure.png)

**ステップ4. LEDを点滅させる**

Arduinoの学習は通常、LEDの点滅から始まります。ArduinoボードにはビルドインLEDがあり、これはArduinoのピンD13に接続されています。

LEDブロックは「Grove Digital」タブにあります。これを`loop`手順にドラッグすると、自動的に結合されます。

LEDピンをD2からD13に変更して、D13ピンのLEDを制御できるようにします。その後、もう1つのLEDブロックをその下にドラッグし、「ON」を「OFF」に変更します。メイン手順は次のようになります。

![LED点滅](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/blink_led.png)

LEDの点滅を見るためには、LEDのオンとオフの間に間隔を追加する必要があります。「ディレイブロック」は「コントロール」タブにあり、遅延を作るために使用されます。2つのディレイブロックを2つのLEDブロックの間にドラッグし、間隔を1000ms（1000ms = 1秒）に設定します。

![点滅デモ](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/blink_demo.png)

これでプログラムが完成しました。

**ステップ5. Arduinoにアップロードする**

完成したプログラムをArduinoにアップロードして有効にすることができます。ArduinoをPCに接続してください。デバイスマネージャでArduinoのシリアルポート番号を確認し、今後の使用のために覚えておいてください。

次に、Codecraftの右下隅にある「アップロード」をクリックし、Arduinoのシリアルポート番号を選択します。それを確認してしばらく待つと、ArduinoでLEDが点滅するのが見えるはずです。

![アップロード](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/upload.png)

## Grove スターターキット for Arduino

以下の10のレッスンでは、Codecraftの使用方法に慣れるための手助けをします。これらのレッスンで使用するGroveモジュールはすべて、Grove - スターターキット for Arduinoに含まれています。

### レッスン 1. Grove - LCD RGB バックライトの使用

![Grove - LCD RGB Backlight](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_lcd.jpg)

Grove - LCD RGB バックライトは、ユーザー定義の文字を使用してテキストを表示することができます。また、シンプルで簡潔なGroveインターフェースを使用してバックライトの色を設定することができます。このモジュールはI2Cを通信方法として使用しており、Arduinoとのデータ交換とバックライト制御に必要なピン数が約10本から2本に減少します。そのため、他の高度なタスクのためにより多くのI/O能力を確保できます。

![lcd color block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_color_block.png)

"LCD RGB setColor"ブロックを使用して、R、G、B値からLCDのバックライトの色を設定できます。このブロックはGrove I2Cタブにあります。

![lcd print block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_print_block.png)

"LCD RGB print"ブロックを使用して、指定した位置に文字列をLCDに表示できます。このブロックもGrove I2Cタブにあります。

**目的**

LCDのバックライトの色を好きな色に変更し、"hello, world!"とシステムの稼働時間を表示します。

**ハードウェア**

**ステップ 1.** Groveケーブルを使用して、Grove - LCD バックライトをSeeeduinoのI2Cポートに接続します。Arduinoを使用している場合は、Base Shieldを利用してください。

**ステップ 2.** USBケーブルを使用して、Seeeduino/ArduinoをPCに接続します。

**ソフトウェア**

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

**ステップ 2.** "LCD RGB setColor"ブロックと"LCD RGB print"ブロックをセットアップサブプロシージャにドラッグし、自動的に結合させます。

![lcd_setup](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_setup.png)

setColorブロックのR、G、B値を変更し、printブロックで"hello, world!"を1行目の1列目に表示させます。

**ステップ 3.** 別の"LCD RGB print"ブロックをループサブプロシージャにドラッグし、行と列を2と1に変更します。その後、Inputタブにある"System running time"ブロックをドラッグします。

"System running time"ブロックは、Seeeduino/Arduinoが電源オンされてから現在までの時間をミリ秒単位で返します。この時間を秒単位で取得したい場合は、1000で割ることができます。割り算ブロックはOperatorsタブにあります。

![lcd_demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_demo.png)

:::tip success
コードのアップロードが完了すると、LCDのバックライトの色が設定した色に変わり、"hello, world!"とシステムの稼働時間が表示されます。
:::

### レッスン 2. Grove - リレーの使用

![Grove - Relay](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_relay.jpg)

リレーは、Arduinoの制御能力を拡張するための便利なツールです！Groveインターフェースを介して制御信号を送信すると、リレーが接続された外部回路を開閉します。外部回路の電圧は最大220Vまで対応可能です。このリレーを使って、本格的なプロジェクトを始めましょう！

![relay block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_block.png)

リレーブロックを使用して、リレーをONまたはOFFに制御できます。このブロックはGrove Digitalタブにあります。

**目的**

Grove - ボタンを使用してGrove - リレーを制御します。ボタンが押されたときにリレーをオンにし、それ以外の場合はリレーをオフにします。

**ハードウェア**

![relay demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_demo.jpg)

**ステップ 1.** 2本のGroveケーブルを使用して、Grove - ボタンをポートD3に接続し、Grove - リレーをポートD8に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** USBケーブルを使用して、Seeeduino/ArduinoをPCに接続します。

**ソフトウェア**

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

**ステップ 2.** ボタンの状態を保存する変数を作成します。Variablesタブに移動し、"Make a Variable"ボタンをクリックして変数を作成します。変数名をbuttonStateなどに設定します。

![create variable](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/create_variable.png)

OKをクリックすると、buttonStateブロックがVariablesタブに表示されます。

**ステップ 3.** "set buttonState to 0"ブロックをループサブプロシージャにドラッグし、Buttonブロックをそれにドラッグします。

![button variable](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_buttonState.png)

**ステップ 4.** ボタンが押されたときにリレーをオンにし、それ以外の場合はオフにする必要があります。そのため、Controlタブにある"if...then...else"ブロックとOperatorタブにあるEqualブロックをループサブプロシージャにドラッグし、buttonState変数と結合させます。

![relay if](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_if.png)

**ステップ 5.** 最後にリレーブロックをドラッグして結合し、Arduinoにアップロードします。これですべて完了です。

![relay demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_demo.png)

:::tip success
コードのアップロードが完了すると、ボタンを押すとリレーがオンになり、それ以外の場合はリレーがオフになります。
:::

### レッスン 3. Grove - サウンドセンサーの使用

![Grove - Sound Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_sound.jpg)

サウンドセンサーモジュールはシンプルなマイクロフォンです。LM358アンプとエレクトレットマイクロフォンを基にしており、環境内の音量を検出するために使用できます。

![sound block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_block.png)

サウンドブロックを使用して、環境内の音の大きさを検知できます。このブロックはGrove Analogタブにあります。

**目的**

環境内の音量を監視します。音が大きすぎる場合、LEDを点滅させて警告を出します。

**ハードウェア**

![sound demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_demo.jpg)

**ステップ 1.** 2本のGroveケーブルを使用して、Grove - Sound SensorをポートA0に接続し、Grove - Red LEDをポートD7にBase Shieldに接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** Seeeduino/ArduinoをUSBケーブルを介してPCに接続します。

**ソフトウェア**

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

**ステップ 2.** 「Grove - Relay」セクションを参照して、音量を保存する変数を作成し、Controlタブの「if...then」ブロックを使用して音量が閾値を超えるかどうかを判断します。

![sound loop](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_loop.png)

**ステップ 3.** 音量が閾値を超えた場合、LEDを点滅させます。

![sound demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_demo.png)

:::tip success
コードのアップロードが完了すると、環境内の音が大きすぎる場合、LEDが点滅します。
:::

### レッスン 4. Grove - Touch Sensorの使用

![Grove - Touch Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_touch.jpg)

Grove - Touch Sensorは、ボタンの押圧を検知面への接触に置き換えることができます。指が近くにあるときの静電容量の変化を検知します。そのため、指がパッドに直接触れる場合でも、近くに留まるだけの場合でも、Grove - Touch SensorはHIGHを出力します。

![touch block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/touch_block.png)

Touchブロックはタッチの状態を読み取るために使用でき、Grove Digitalタブにあります。

**目的**

Grove - Touch Sensorを使用してGrove - Red LEDを制御します。センサーが触れられた場合、LEDを点灯し、そうでない場合はLEDを消灯します。

**ハードウェア**

**ステップ 1.** 2本のGroveケーブルを使用して、Grove - Touch SensorをポートD3に接続し、Grove - Red LEDをポートD7にBase Shieldに接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** Seeeduino/ArduinoをUSBケーブルを介してPCに接続します。

**ソフトウェア**

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

**ステップ 2.** プログラムは「Grove - Relay」セクションのプログラムに似ており、変数を使用せずに構築できます。

![touch demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/touch_demo.png)

:::tip success
コードのアップロードが完了すると、センサーが触れられた場合、LEDが点灯します。そうでない場合はLEDが消灯します。
:::

### レッスン 5. Grove - Rotary Angle Sensorの使用

![Grove - Rotary Angle Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_rotary.jpg)

Groveポテンショメーターは、0からVCC（3.3または5 VDC）の間でアナログ出力を生成します。角度範囲は300度で、値が線形に変化します。抵抗値は10kオームで、Arduinoでの使用に最適です。「回転角センサー」とも呼ばれることがあります。

![rotary block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_block.png)

Rotationブロックは回転の状態を読み取るために使用でき、Grove Analogタブにあります。

**目的**

Grove - Rotary Angle Sensorの回転をSerialに表示します。

**ハードウェア**

![rotary demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_demo.jpg)

**ステップ 1.** Groveケーブルを使用して、Grove - Rotary Angle SensorをBase ShieldのポートA0に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** Seeeduino/ArduinoをUSBケーブルを介してPCに接続します。

**ソフトウェア**

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

**ステップ 2.** Serialポートを使用する前に、そのボーレートを設定する必要があります。Serial Portタブから「Serial baud rate」ブロックをsetupサブプロシージャにドラッグし、9600bpsを選択します。

![rotary setup](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_setup.png)

**ステップ 3.** 「Serial println」ブロックはSerialポートに新しい行を表示するために使用でき、Rotationブロックと組み合わせることができます。

![rotary demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_demo.png)

**ステップ 4.** プログラムがアップロードされた後、Codecraftの左側にあるConnectボタンをクリックし、Arduinoのポートを選択して接続します。

![connect serial](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/connect_serial.png)

![serial monitor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/serial_monitor.png)

:::tip success
Grove - Rotary Angle Sensorを回転させると、モニターでデータの変化を見ることができます。
:::

### レッスン 6. Grove - LEDの使用

![Grove - LED](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_led.jpg)

Grove - LEDは、Arduino/Seeeduino初心者向けにデジタルポートからの制御を監視するために設計されています。ボックスや机の表面に簡単に取り付けることができ、電源や信号のパイロットランプとして使用できます。

![led block digital](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_block_digital.png)

![led block analog](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_block_analog.png)

LEDブロックはデジタルOUTPUTまたはアナログOUTPUTとして動作するために使用でき、アナログOUTPUTとして動作する場合は明るさを制御できます。

**目的**

呼吸するLEDを作成します。

**ハードウェア**

![led demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_demo.jpg)

**ステップ 1.** Groveケーブルを使用して、Grove - Red LEDをBase ShieldのポートD3に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** Seeeduino/ArduinoをUSBケーブルを介してPCに接続します。

**ソフトウェア**

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

**ステップ 2.** Grove AnalogタブのLEDブロックを使用して、LEDを呼吸するようにするのは非常に簡単です。

それ以外にも、LEDの明るさを計算するために、Controlタブの「count with...from...to...step」ブロックが必要です。このブロックをドラッグしてループのサブプロシージャと組み合わせます。

![led count](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_count.png)

**ステップ 3.** 変数 i を 0（暗い）から 255（最も明るい）まで設定し、「LED」ブロックと「Delay ms」ブロックを追加します。そして、LEDの明るさを変数 i に設定します。

![led loop](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_loop.png)

**ステップ 4.** 上記のプログラムはLEDを暗い状態から明るい状態にしますが、今度は明るい状態から暗い状態にするプログラムを追加します。

![led demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_demo.png)

:::tip success
コードのアップロードが完了すると、LEDが呼吸するように点滅するのが見えます。
:::

### レッスン 8. Grove - 光センサーの使用

![Grove - Light Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_light.jpg)

光センサーは、光依存抵抗（LDR）とも呼ばれます。通常、光センサーの抵抗は周囲の光の強度が増加すると減少します。

![light block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_block.png)

光ブロックは、アナログ入力を介して環境の光強度を検出するために使用されます。「Grove Analog」タブで見つけることができます。

**目的**

スマートハウスのようなプログラムを作成します。光強度が設定した閾値を下回ると、LEDを点灯させます。

**ハードウェア**

![light demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_demo.jpg)

**ステップ 1.** 2本のGroveケーブルを使用して、Grove - Red LEDをポートD7に接続し、Grove - 光センサーをポートA0に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

**ソフトウェア**

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

**ステップ 2.** Grove - タッチセンサーセクションで「if」ブロックを使用しましたので、このプログラムを構築するのは難しくありません。

![lighe demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_demo.png)

:::tip success
コードのアップロードが完了すると、光センサーに光を遮るとLEDが点灯します。
:::

### レッスン 9. Grove - ボタンの使用

![Grove - Button](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_button.jpg)

この新しいバージョンのボタンGroveモジュールには、独立したボタンが1つ含まれており、プルダウン抵抗が構成されています。これにより、マイクロコントローラーでデジタル入力としてすぐに使用できます。このボタンはSIGワイヤを信号として使用し、このGroveモジュールではNCは使用されません。

![button block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_block.png)

ボタンブロックは、デジタル入力を介して一時的な押しボタンの状態を検出するために使用されます。「Grove Digital」タブで見つけることができます。

**目的**

Grove - ボタンを使用してGrove - Red LEDを制御します。ボタンが押されたときにLEDを点灯させ、それ以外の場合は消灯させます。

**ハードウェア**

![button demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_demo.jpg)

**ステップ 1.** 2本のGroveケーブルを使用して、Grove - ボタンをポートD3に接続し、Grove - Red LEDをポートD7に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

**ソフトウェア**

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

**ステップ 2.** Grove - リレーセクションでボタンを使用しましたので、リレーをLEDに変更し、ボタンで制御します。

![button demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_demo.png)

:::tip success
コードのアップロードが完了すると、ボタンが押された場合はLEDが点灯し、それ以外の場合は消灯します。
:::

### レッスン 10. Grove - サーボの使用

![Grove - Servo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_servo.png)

これは、位置を正確に制御できるアクチュエータです。

![servo block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_block.png)

サーボブロックは、回転量と各回転間の遅延を割り当てることでサーボを制御するために使用されます。「Grove Analog」タブで見つけることができます。

**目的**

Grove - ロータリー角度センサーを使用してGrove - サーボを制御します。

**ハードウェア**

![servo demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_demo.jpg)

**ステップ 1.** Grove - サーボをBase Shieldに接続し、Groveケーブルを使用してGrove - ロータリー角度センサーをBase ShieldのポートA0に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

**ソフトウェア**

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

**ステップ 2.** ロータリー角度センサーを使用してサーボを制御できますが、「Rotation」ブロックの値が0から1023であるため、数値を割る必要があります。これにより、値を0から180に調整します。

![servo demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_demo.png)

:::tip success
コードのアップロードが完了すると、ロータリー角度センサーを回転させると、サーボモーターの角度が変化します。
:::

私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>