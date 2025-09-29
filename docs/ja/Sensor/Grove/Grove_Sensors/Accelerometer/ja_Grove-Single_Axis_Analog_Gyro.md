---
description: Grove-Single Axis Analog Gyro
title: Grove-Single Axis Analog Gyro
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Single_Axis_Analog_Gyro
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Axis_Analog_Gyro_01.jpg)

Grove – Single Axis Analog Gyro は、コリオリ力の現象を利用した角速度センサー（Murata-ENC-03R）を基にしています。このセンサーは X 軸の角速度のみを測定でき、他の 3 軸ジャイロとは異なりますが、より高速です。自律型 2WD のような位置制御や姿勢制御に使用できます。

モデル: [SEN05091P](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip)

## 特徴

- 入力電圧: 3.3V/5V

- 標準 Grove インターフェース

- 軽量

- 高速

- X 軸の角速度を測定

## デモンストレーション

### [Arduino](https://www.arduino.cc/) を使用する場合

このモジュールはアナログ信号で 1 軸の回転を検出します。
温度ドリフトを減少させ、出力ノイズを抑えるためにハイパスフィルターとローパスフィルター回路が適用されています。
角速度を測定する前に、基準値（角速度=0 のときのセンサー出力）が必要です。
この値はデフォルトで 1.35V ですが、より正確な基準値を得るために測定前にキャリブレーションが必要です。
このキャリブレーションでは、角速度=0 のときの出力電圧を 200 回サンプリングし、それらのデータの平均値を基準値として扱います。

1. [Grove - Base Shield](https://seeeddoc.github.io/Grove-Base_Shield/) の A0 ポートに接続します。もちろん、アナログピンの任意のピンでも問題ありません。

2. Grove - Base Shield を Arduino/Seeeduino に差し込み、USB ケーブルを使用して PC に接続します。

3. 以下のコードをアップロードします。アップロード方法がわからない場合は [こちら](https://seeeddoc.github.io/Upload_Code/) をクリックしてください。

``` c++
    int sensorPin = A0; // センサーの入力ピンを選択

    float reference_Value=0;

    int sensorValue = 0; // センサーからの値を格納する変数

    void setup()
    {

        int i;
        float sum=0;
        pinMode(sensorPin, INPUT);
        Serial.begin(9600);
        Serial.println("キャリブレーション前に回転させないでください！");
        Serial.println("基準値を取得中:");

    for(i=0;i<1000;i++)
    {
        // センサーから値を読み取る:
        sensorValue = analogRead(sensorPin);
        sum += sensorValue;
        delay(5);
    }
    reference_Value = sum/1000.0;
    Serial.println(reference_Value);
    Serial.println("テストを開始できます！");
    }

    void loop()
    {
        double angularVelocity;
        sensorValue = analogRead(sensorPin);
        angularVelocity =((double)(sensorValue-reference_Value)*4930.0)/1023.0/0.67; // 角速度を取得
        Serial.print(angularVelocity);
        Serial.println("deg/s");
        Serial.println(" ");
        delay(10);
    }
```

4. 次にキャリブレーションを行います。<font color="#DC143C" face>センサーを机の上に水平に置いてください</font>。その後、Seeeduino のリセットボタンを押し、シリアルツールを開きます。

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Gyro_Result.jpg)

5. 「テストを開始できます」と表示されたら、キャリブレーションが完了したことを意味します。センサーを使用できます。回転方向は以下の図を参考にしてください。

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Rotate_direction.jpg)

### [Raspberry Pi](https://seeeddoc.github.io/GrovePiPlus/) を使用する場合

1. Raspberry Pi と GrovePi または GrovePi+ を用意してください。

2. 開発環境の設定を完了している必要があります。設定が未完了の場合は [こちら](https://seeeddoc.github.io/GrovePiPlus/#Introducing_the_GrovePi.2B) を参照してください。

3. 接続

- Grove ケーブルを使用してセンサーを GrovePi の A0 ソケットに接続します。

4. デモディレクトリに移動します:

  `cd yourpath/GrovePi/Software/Python/
`

- コードを確認する

```
    nano grovesingleaxisanaloggyro.py # "Ctrl+x" で終了 #

    import time
    import grovepi

    # Grove Single Axis Analog Gyro をアナログポート A0 に接続
    # SIG,NC,VCC,GND
    sensor = 0

    grovepi.pinMode(sensor,"INPUT")

    # キャリブレーション
    print "キャリブレーション中..."

    sum = 0

    errors = 0

    for x in range(0, 100):

      try:
          # センサー値を取得
          v = grovepi.analogRead(sensor)
          sum += v
          #time.sleep(.05)
      except IOError:
          print "エラー"
          errors += 1

    if errors == 100:

       print "キャリブレーションできません"

       raise SystemExit

    reference_value = sum / (100 - errors)

    print "キャリブレーション完了"
    print "基準値 =", reference_value

    # 準備完了

    while True:
        try:
            # センサー値を取得
            sensor_value = grovepi.analogRead(sensor)

            # 角速度を計算 (deg/s)
            velocity = ((float)(sensor_value - reference_value) * 4930.0) / 1023.0 / 0.67

            print "センサー値 =", sensor_value, " 速度 =", velocity
            time.sleep(.5)

        except IOError:
        print "エラー"
```

5. デモを実行します。

` sudo python grovesingleaxisanaloggyro.py
`

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

**[Eagle]**  [Grove - Signal Axis Analog Gyro Eagle](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip)

**[PDF]**  [Grove - Signal Axis Analog Gyro Sch](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20Sch.pdf)

**[PDF]**  [Grove - Signal Axis Analog Gyro PCB](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20PCB.pdf)

**[データシート]** [File Signal Axis Analog Gyro datasheet](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Analog_Gyro_datasheet.pdf)

**[コード]** [GitHub上のデモコード](https://github.com/Seeed-Studio/Grove_Single_Axis_Analog_Gyro)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>