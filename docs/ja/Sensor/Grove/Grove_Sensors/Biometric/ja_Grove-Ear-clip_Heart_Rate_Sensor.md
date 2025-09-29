---
description: Grove - 耳クリップ型心拍センサー
title: Grove - 耳クリップ型心拍センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Ear-clip_Heart_Rate_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/Heart_rate_ear_clip_kit.jpg" /></div>

心拍センサーキットには耳クリップと受信モジュールが含まれています。この心拍測定キットは、患者やアスリートの心拍数を監視するために使用できます。結果はシリアルポートを介して画面に表示され、分析のために保存することができます。システム全体は高感度、低消費電力、携帯性に優れています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Ear-clip-Heart-Rate-Sensor-p-1116.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

特徴
--------

- 低消費電力
- 使いやすい
- 高感度
- 完全なRoHS準拠

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

仕様
-------------

<table border="1" cellspacing="0" width="60%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小値
</th>
<th scope="col">
標準値
</th>
<th scope="col">
最大値
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
電圧
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
動作電流
</th>
<td colspan="3">
6.5
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
耳クリップワイヤーの長さ
</th>
<td colspan="3">
120
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
測定範囲
</th>
<td colspan="3">
≥30/min
</td>
<td>
-
</td>
</tr>
</table>

応用例
-----------------

- 心拍モニター

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使用方法
-----

以下のスケッチは、耳クリップ型心拍センサーを使用して心拍数を測定する簡単なアプリケーションを示しています。

- このモジュールをデジタルポートD2に接続します。[Grove-Base shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132)を使用してください。そして、Grove-LEDをデジタルポート4に接続します。
- Base ShieldをArduino/Seeeduinoに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/with_ardu.jpg" /></div>

- 以下のコードを新しいArduinoスケッチにコピー＆ペーストしてください。

```
    // 機能: このプログラムは心拍数を測定するために使用できます。プログラム内の最低脈拍数は30に設定されています。
    //         外部割り込みを使用して測定します。
    // ハードウェア: Grove - 耳クリップ型心拍センサー, Grove - Base Shield, Grove - LED
    // Arduino IDE: Arduino-1.0
    // 作成者: FrankieChu       
    // 日付: 2013年1月22日
    // バージョン: v1.0
    // by www.seeedstudio.com
    #define LED 4//インジケーター、Grove - LEDはArduinoのD4に接続されています
    boolean led_state = LOW;//LEDの状態、外部割り込みが発生するたびにLEDの状態が変わります
    unsigned char counter;
    unsigned long temp[21];
    unsigned long sub;
    bool data_effect=true;
    unsigned int heart_rate;//心拍数の測定結果

    const int max_heartpluse_duty = 2000;//システムの要求に応じて変更できます。
                            //2000は2秒を意味します。デューティが2秒を超えるとシステムはエラーを返します。
    void setup()
    {
        pinMode(LED, OUTPUT);
        Serial.begin(9600);
        Serial.println("胸ベルトを準備してください。");
        delay(5000);
        arrayInit();
        Serial.println("心拍数テストを開始します。");
        attachInterrupt(0, interrupt, RISING);//割り込み0を設定、デジタルポート2
    }
    void loop()
    {
        digitalWrite(LED, led_state);//インジケーターの状態を更新
    }
    /*機能: 心拍数を計算する*/
    void sum()
    {
     if(data_effect)
        {
          heart_rate=1200000/(temp[20]-temp[0]);//60*20*1000/20_total_time 
          Serial.print("心拍数は:\t");
          Serial.println(heart_rate);
        }
       data_effect=1;//フラグビット
    }
    /*機能: 割り込みサービスルーチン。外部割り込みから信号を取得*/
    void interrupt()
    {
        temp[counter]=millis();
        Serial.println(counter,DEC);
        Serial.println(temp[counter]);
        switch(counter)
        {
            case 0:
                sub=temp[counter]-temp[20];
                Serial.println(sub);
                break;
            default:
                sub=temp[counter]-temp[counter-1];
                Serial.println(sub);
                break;
        }
        if(sub>max_heartpluse_duty)//最大心拍デューティを2秒に設定
        {
            data_effect=0;//フラグビット
            counter=0;
            Serial.println("心拍数測定エラー、テストを再開します！" );
            arrayInit();
        }
        if (counter==20&&data_effect)
        {
            counter=0;
            sum();
        }
        else if(counter!=20&&data_effect)
        counter++;
        else 
        {
            counter=0;
            data_effect=1;
        }
        
    }
    /*機能: 配列(temp)の初期化*/
    void arrayInit()
    {
        for(unsigned char i=0;i < 20;i ++)
        {
            temp[i]=0;
        }
        temp[20]=millis();
    }
```

- コードをアップロードしてください。  
- センサーが耳の皮膚に接触していることを確認してください。心拍数を測定している際の信号は以下の通りです：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/ardu_serial1.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/ardu_serial2.jpg" /></div>

最初の図は検出された心拍の波形図で、心拍があるときに高いパルスが現れます。

:::note
シリアルモニターがエラーメッセージを返す場合は、センサーの位置を変更してください。
:::

リソース
---------

- [Grove - Ear-clip Heart Rate Sensor デモコード](https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0.zip)
- [PPG センサーシステム](https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/res/PPG%20Sensor%20System.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Ear-clip_Heart_Rate_Sensor から作成されました -->

## プロジェクト

**Google Map を使用した交通データの可視化**：Wio LTE cat.1 を使用して交通のGPSやその他の情報を監視します。コールドチェーンでは、GPS位置情報とともに温度や湿度を監視できます。自転車の場合、GPS位置情報と心拍数を一緒に監視できます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/atmospheric-pollution-visualization-1940f4/' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>