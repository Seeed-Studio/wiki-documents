---
description: Grove - 胸部ストラップ心拍センサー
title: Grove - 胸部ストラップ心拍センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Chest_Strap_Heart_Rate_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Heart_rate_chest_belt_kit.jpg" /></div>

この心拍センサーキットには、胸部ストラップと5.3 KHz AM受信モジュールが含まれています。この心拍測定キットは、患者やアスリートの心拍数を監視するために使用でき、結果をシリアルポート経由で画面に表示したり、分析のために保存することができます。このシステムは、高感度、低消費電力、携帯性など多くの利点を持っています。モジュール間の通信はAMを介して行われるため、移動が非常に便利です（有効距離は30cmであることに注意してください）。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Chest-Strap-Heart-Rate-Sensor-p-1115.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

特徴
--------

- 低消費電力
- ワイヤレス
- 使いやすい
- 内蔵フェライトアンテナ
- 高感度
- 完全RoHS準拠

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

仕様
--------------

<table border="1" cellspacing="0" width="80%">
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
5.5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
胸囲範囲
</th>
<td>
65
</td>
<td>
-
</td>
<td>
145
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
変調方式
</th>
<td colspan="3">
5.3KHz AM変調
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
バッテリー寿命
</th>
<td colspan="3">
半年以上（使用状況による）
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
有効受信距離
</th>
<td colspan="3">
30
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
受信モジュールサイズ
</th>
<td colspan="3">
48 X 25 X 10
</td>
<td>
mm
</td>
</tr>
</table>

応用例
-----------------

- 心拍モニター

:::caution
**1**. 胸部ストラップはCR2032コイン電池で動作します。コインを使って裏蓋を開けて交換してください。

**2**. 長期間使用しない場合は、電池を取り外してください。
:::

使用方法
-----

以下のスケッチは、胸部ストラップ心拍センサーを使用して心拍数を測定する簡単なアプリケーションを示しています。

- このモジュールを[ベースシールド](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132)のデジタルポートD2に接続します。そしてGrove-LEDをデジタルポート4に接続します。
- ベースシールドをArduino/Seeeduinoに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Grove-Chest_Strap_Heart_Rate_Sensor.jpg" /></div>

- 以下のコードを新しいArduinoスケッチにコピー＆ペーストします。

```
    #define LED 4//インジケーター、Grove - LEDはArduinoのD4に接続されています
    boolean led_state = LOW;//LEDの状態、外部割り込みが発生するたびにLEDの状態が変わります
    unsigned char counter;
    unsigned long temp[21];
    unsigned long sub;
    bool data_effect=true;
    unsigned int heart_rate;//心拍数の測定結果

    const int max_heartpluse_duty = 2000;//システムの要求に応じて変更可能。
                            //2000は2秒を意味します。デューティが2秒を超えると
                            //システムはエラーを返します。
    void setup()
    {
        pinMode(LED, OUTPUT);
        Serial.begin(9600);
        Serial.println("胸部ストラップを準備してください。");
        delay(5000);
        arrayInit();
        Serial.println("心拍数テストを開始します。");
        attachInterrupt(0, interrupt, RISING);//割り込み0を設定、デジタルポート2
    }
    void loop()
    {
        digitalWrite(LED, led_state);//インジケーターの状態を更新
    }
    /*関数: 心拍数を計算する*/
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
    /*関数: 割り込みサービスルーチン。外部割り込みから信号を取得*/
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
    /*関数: 配列(temp)の初期化*/
    void arrayInit()
    {
        for(unsigned char i=0;i < 20;i ++)
        {
            temp[i]=0;
        }
        temp[20]=millis();
    }
```

- コードをアップロードします。
- 心拍数を測定している際の信号は以下の通りです：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/GROVE_heart_rate_chest_belt.bmp" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Grove-heart_rate_serial.jpg" /></div>

最初の図は検出された心拍の波形図であり、心拍が発生すると高いパルスが現れます。

:::note
**1**. 胸部ベルトのウィング部分は高精度を得るために肌に接触している必要があります。

**2**. 胸部ベルトと受信モジュールの最大距離は30cm未満でなければなりません。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Grove - Chest Strap Heart Rate Sensor EAGLE ファイル](https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip)
- [Chest Strap Heart Rate Sensor デモコード](https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/MeasureHeartRate.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Chest_Strap_Heart_Rate_Sensor から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>