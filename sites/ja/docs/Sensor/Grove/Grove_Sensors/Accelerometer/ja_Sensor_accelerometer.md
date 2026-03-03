---
description: センサー - 加速度計
title: センサー - 加速度計
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor_accelerometer
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Seeed 加速度計選択ガイド

近年、さまざまな種類の加速度計センサーをリリースしてきました。それらの中から選ぶのが難しいと感じるかもしれません。その悩みを解消するために、それぞれを詳しく見て、どれが最適かを見極めてみましょう！

当社のバザールにあるすべての加速度計センサーについては、[Bazaar Accelerometer tag](https://www.seeedstudio.com/tag/Accelerometer.html) をクリックしてご確認ください。

## 加速度計とは

加速度計は、物体の加速度を測定することができるセンサーです。運動プロセス中に、質量の慣性力とニュートンの第二法則を測定することで加速度値を取得します。センサーの異なる感度要素に基づき、一般的な加速度センサーには、静電容量型、誘導型、ひずみ型、ピエゾ抵抗型、圧電型などがあります。重力による加速度を測定することで、デバイスが水平面に対して傾いている角度を計算できます。また、動的加速度を分析することで、デバイスの動きを把握することも可能です。

例えば、最近、90歳のアメリカ人女性が交通事故を経験した際、スマートウォッチの転倒検出機能が彼女の命を救ったという話があります。彼女が店を出て家に帰る途中、車を運転していた女性に倒されました。その時、彼女は緊急サービスに電話をかけることができませんでしたが、着用していたスマートウォッチが転倒を検知し、家族に助けを求め始めました。これは、新世代の3軸MEMS加速度センサーとジャイロスコープチップ技術のおかげで、現在の一部のスマートウォッチがさまざまな転倒姿勢を認識できるようになったためです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Accelerometer.png" /><figcaption><b>図1</b>. <i>3軸加速度計を搭載したスマートウォッチ（Sensorexpert, 2015より）</i></figcaption></div>

### 加速度計の仕組み

加速度計が動作する方法には、圧電効果と静電容量の変化の2つがあります。以下にその説明を示します。

#### 圧電効果

<div align="center"><img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Piezoelectric effect.png" /><figcaption><b>図2</b>. <i>圧電効果の動作原理（explainthatstuff, 2019より）</i></figcaption></div>

上記の図に示されているモデルのように、加速度計には微小な結晶構造が含まれており、振動が発生すると電圧を生成します。その後、生成された電圧が加速度の大きさを読み取るためのデータを作成します。

#### 静電容量の変化

<div align="center"><img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Change in Capacitance.png" /><figcaption><b>図3</b>. <i>静電容量の変化の動作原理（explainthatstuff, 2019より）</i></figcaption></div>

この方法では、加速度を求めるための公式を利用します。力 = 質量 × 加速度という公式を知っているため、加速度を求めるには、物体にかかる力をその質量で割ります。

MEMS加速度計における静電容量効果の仕組みは以下の通りです：

1. 2つの静電容量プレートが存在します。
2. 物体の質量が1つの静電容量プレートに圧力をかけ、静電容量が変化し、力を測定できるようになります。
3. 力と物体の質量が分かれば、最終的に加速度が測定されます。

## 適用分野

これらの加速度センサーには多くの用途があります。特に、この種のセンサーを使用することで、人間の動きを監視し、さまざまな状況から利益を得たり、場合によっては救命することも可能です。そのため、加速度センサーは産業、医療、社会的応用、家庭内応用など、さまざまな分野で重要な役割を果たしています。

| 適用分野                                          | 機能 |
|--------------------------------|-----------------------------------------|
| 自動車の安全性  | 加速度センサーは主に自動車のエアバッグ、アンチロックブレーキシステム、トラクションコントロールシステムなどの安全性能に使用されます。 |
| ゲームコントロール | 加速度センサーは上下左右の傾斜角度の変化を検出できるため、ハンドヘルドデバイスを前後に傾けるだけで、ゲーム内のオブジェクトの前後左右の方向を簡単に制御できます。 |
| 自動画像回転 | 加速度センサーを使用してハンドヘルドデバイスの回転と方向を検出し、表示される画像を正規化します。 |
| 手ぶれ補正機能 | 加速度センサーを使用してハンドヘルドデバイスの振動/揺れの振幅を検出します。振動/揺れの振幅が大きすぎる場合、カメラのシャッターをロックして、常に鮮明な画像を撮影できるようにします。 |
| 電子コンパスの傾き補正 | 磁気センサーは磁束の大きさを測定することで方向を決定します。磁気センサーが傾くと、磁気センサーを通過する地磁気フラックスが変化し、方向に誤差が生じます。加速度センサーが傾斜角を測定できる原理を利用して、電子コンパスの傾きを補正します。 |
| 歩数計機能 | 加速度センサーはAC信号とオブジェクトの振動を検出できます。人が歩くと、一定の規則的な振動が発生し、加速度センサーはその振動のゼロクロッシングを検出して、歩数やランナーの歩数を計算します。これにより、人が移動した距離を計算できます。また、特定の式を使用してカロリー消費量を計算することも可能です。 |
| GPSナビゲーションシステムの死角補正 | GPSシステムは、120度に分布する3つの衛星信号を受信してオブジェクトの位置を決定します。トンネル、高層ビル、ジャングルエリアなどの特殊な状況や地形では、GPS信号が弱くなったり完全に失われたりすることがあります。これがいわゆる死角です。加速度センサーと以前使用した慣性航法を組み合わせることで、システムの死角を測定できます。加速度センサーを1回積分すると、単位時間あたりの速度変化量が得られ、死角内でのオブジェクトの移動を測定できます。 |

## Seeed の加速度センサー
Seeed ではさまざまな加速度センサーを取り扱っており、以下の画像は典型的な Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400) を示しています：

![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra_low_Power-BMA400/img/pin_out.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra_low_Power-BMA400/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra_low_Power-BMA400/img/pin_out_back.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra_low_Power-BMA400/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>

### あなたの好みはどれですか？

| 名前 | サムネイル | 動作電圧 | 測定範囲 | 感度 | 入力インターフェース | 消費電力 | 購入リンク |
|----|-----|-----|------|------|------|-----|------|
|[Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400)](https://wiki.seeedstudio.com/ja/Grove-3-Axis_Digital_Accelerometer%C2%B116g_Ultra-low_Power-BMA400/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra_low_Power-BMA400/img/thumbnail.jpg"/>|3.3V-5V|±2g,±4g,±8g,±16g|1024LSB/g@±2g 512LSB/g@±4g 256LSB/g@±8g 128LSB/g@±16g|I2C|18uA@5V 14uA@3.3V|[購入する](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g-Ultra-low-Power-BMA400.html)|
|[Grove - 3 Axis Digital Accelerometer(±16g)](https://wiki.seeedstudio.com/ja/Grove-3-Axis_Digital_Accelerometer-16g/)|<img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Thumb.png" />|3V-5.5V|±16g|3.9mg / LSB|I2C|/|[購入する](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html)|
|[Grove - 3-Axis Compass V1.0](https://wiki.seeedstudio.com/ja/Grove-3-Axis_Compass_V1.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/thumbnail.jpg" />|3.3V-5V|/|/|I2C|/|[購入する](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass.html)|
|[Grove - 3-Axis Digitial Compass v2.0](https://wiki.seeedstudio.com/ja/Grove-3-Axis_Digitial_Compass_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" />|3.3V-5V|/|/|I2C, SPI|/|[購入する](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2.html)|
|[Grove - 3-Axis Digital Accelerometer(±1.5g)](https://wiki.seeedstudio.com/ja/Grove-3-Axis_Digital_Accelerometer-1.5g/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg" />|3V-5.5V|±1.5g|21LSB/g|I2C|47μA@1 ODR|[購入する](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)|
|[Grove - 3-Axis Digital Accelerometer(±400g)](https://wiki.seeedstudio.com/ja/Grove-3-Axis_Digital_Accelerometer-400g/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/45d_small.jpg" />|3.3V-5V|±100g,±200g,±400g|/|I2C|300μA@3.3V|[購入する](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-400g.html)|
|[Grove - 3-Axis Analog Accelerometer](https://wiki.seeedstudio.com/ja/Grove-3-Axis_Analog_Accelerometer/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/thumb1.png" />|3V-5V|±3g|/|Analog|350μA@3V|[購入する](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html)|
| [Grove - 3-Axis Digital Gyro](https://wiki.seeedstudio.com/ja/Grove-3-Axis_Digital_Gyro/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Thumb3.png" />|3.3V-5V|/|14 LSBs per °/sec|I2C|/|[購入する](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro.html)|
|[Grove - 6-Axis Accelerometer&Gyroscope](https://wiki.seeedstudio.com/ja/Grove-6-Axis_AccelerometerAndGyroscope/)|<img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Thumb4.png" />|3.3V-5V|±2,±4,±8,±16g|0.061(FS=±2) 0.122(FS=±4) 0.244(FS=±8) 0.488(FS=±16)mg/LSB|I2C|0.9μA3.3V 1.25μA@5V|[購入する](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Gyroscope.html)|
|[Grove - 6-Axis Accelerometer&Compass V2.0](https://wiki.seeedstudio.com/ja/Grove-6-Axis_AccelerometerAndCompass_V2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/45d_small.JPG" />|5V|±2g,±4g,±8g,±16g|/|I2C,SPI|/|[購入する](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Compass-v2-0.html)|
|[Grove - IMU 9DOF v2.0](https://wiki.seeedstudio.com/ja/Grove-IMU_9DOF_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg" />|3.3V-5V|±2,±4,±8,±16g|/|I2C,SPI|/|[購入する](https://www.seeedstudio.com/Grove-IMU-9DOF-v2-0.html)|
|[Grove - IMU 10DOF ](https://wiki.seeedstudio.com/ja/Grove-IMU_10DOF/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/45d_small.jpg" />|3.3V-5V|±2,±4,±8,±16g|/|I2C|/|[購入する](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|[Grove - IMU 10DOF v2.0](https://wiki.seeedstudio.com/ja/Grove-IMU_10DOF_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg" />|3.3V-5V|±2g,±4g,±8g,±16g|/|I2C|2.7μA@1Hz|[購入する](https://www.seeedstudio.com/Grove-IMU-10DOF-v2-0.html)|

### 注意事項

上記の表は、各加速度センサーのさまざまな特性を示しており、測定範囲、感度、消費電力が異なります。これらの中から、最も適したものを選択することができます。さらに、選択時に通信インターフェースが考慮事項の一つである場合、SPI通信はI2Cよりも高速に動作できるため、特定の条件下では利点となる可能性があります。

個々の製品に関する詳細情報については、製品画像の横にあるリンクをクリックして、それぞれのページをご覧ください。

## リソース

  - 参考資料
      - [電子製品の歩数計測における3軸加速度センサーの応用履歴](http://old.sensorexpert.com.cn/Article/qiantansanzhoujiasud_1.html)
      - [加速度センサー](https://www.explainthatstuff.com/accelerometers.html)

## プロジェクト

**プラグアンドプレイ リモートコントロールセイルボート**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed' width='350'></iframe>    

**モーターサイクルデータアプリ**: プロのようにライディングデータを学びましょう！ モーターサイクルレースチームは長年にわたりIMUデータを使用してきましたが、RideData+Arduinoを使用すれば、同じことを簡単に行うことができます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！ 製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>