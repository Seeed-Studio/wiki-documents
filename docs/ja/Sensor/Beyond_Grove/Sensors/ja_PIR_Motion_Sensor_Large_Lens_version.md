---
title: PIRモーションセンサーモジュール
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/PIR_Motion_Sensor_Large_Lens_version/
slug: /ja/PIR_Motion_Sensor_Large_Lens_version
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/Pir_motion_sensor_v1.0.jpg)

PIR（受動赤外線検出）は、人間の動きを検出するために使用されます。このバージョンは大きなレンズを備えており、長距離および広角をサポートします。2.54mmの標準コネクタにより、どこにでも簡単に固定できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/pir-motion-sensor-module-p-74.html?cPath=84_88&zenid=020999c566d2f31841dc54602b7d02ef)

## 特徴
---
* 長距離対応

* 広角対応

* 低消費電力

* DC 3.0-5.5Vの電源供給

## 仕様
---
* 入力電圧: DC3.0-5.5V

* 電流: 最大100uA

* 検出距離: 最大9m

* 出力信号: 0,3 VCC（動きを検出すると出力がHIGH）

* 検出角度: 120°

* コネクタ: 3ピン 2.54mmピッチ

* サイズ：L36×W26×H21(mm)

## 使用方法
---
以下のスケッチは、動きを検知する簡単なアプリケーションを示しています。検出範囲内で誰かが動くと、SIGピンを通じてHIGHを出力し、LEDが点灯します。それ以外の場合はLOWを出力します。このようにして、人の動きを検出することができます。

![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/PIR_motion_sensor_module_connection.JPG)

### プログラミング

重要なコードスニペットを含みます。
デモコード例：
```
/*******************************************************************************/
/*PIRモーションセンサーのピンとLEDピンのマクロ定義*/
#define PIR_MOTION_SENSOR 8//モジュールからの信号を受信するためにピン8を使用
#define LED    4//Grove - LEDはArduinoのD4に接続

void setup()
{
    pinsInit();
}

void loop()
{
    if(isPeopleDetected())//動いている人を検出した場合
    turnOnLED();
    else
    turnOffLED();
}
void pinsInit()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
/***************************************************************/
/*関数: 検出範囲内で誰かが動いているかどうかを検出*/
/*戻り値: - boolean、trueは誰かが検出された場合*/
boolean isPeopleDetected()
{
    int sensorValue = digitalRead(PIR_MOTION_SENSOR);
    if(sensorValue == HIGH)//センサー値がHIGHの場合
    {
        return true;//はい、trueを返す
    }
    else
    {
        return false;//いいえ、falseを返す
    }
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [PIRモーションセンサー Eagleファイル](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip)

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>