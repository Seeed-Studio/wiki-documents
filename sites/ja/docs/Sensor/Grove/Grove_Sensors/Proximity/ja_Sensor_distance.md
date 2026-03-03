---
title: センサー - 距離（概要）
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Sensor_distance/
slug: /ja/Sensor_distance
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Seeed 距離センサー選択ガイド

近年、さまざまな種類の距離センサーをリリースしてきました。それらの中から選択するのが難しいと感じるかもしれません。その悩みを解決するために、これらのセンサーを詳しく見て、どれがあなたに最適かを見極めましょう！

すべての距離センサーについては、[Bazaar Distance タグ](https://www.seeedstudio.com/tag/Distance.html)をクリックして確認してください。

## 距離センサーとは

距離センサーは、超音波やレーザーを使用して物体間の距離を測定します。主に、物体の位置が時間とともに変化する法則を測定するために使用され、さまざまな運動学および動力学の測定を完了するために使用できます。主な製品には、携帯電話の距離センサー、長距離測定センサーなどがあり、スマートベルトや航空機の追跡にも使用されています。

#### ELEM-DP 10k（ダイオードポンプ）

ダイオードポンプ式ERBUMのおかげで、ガラス固体レーザーの高効率を実現し、ELEM-DP 10kレーザー距離計モジュールは10 Hzまたは20 Hzの連続的な高パルス繰り返し率を提供します。この機能により、このコンパクトなレーザー距離計は、航空機などの高速移動物体の距離を測定または追跡するのに理想的です。

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_distance/IMG/distance-sensor.png" />
  <figcaption><b>図1</b>. <i>距離センサー（Direct Industry, 2020より引用）</i></figcaption>
</div>

### 距離センサーはどのように動作するか

距離センサーは、物体の物理的変化（時間差、角度差、パルス速度など）の量を検出し、これらの変化量を距離に変換して、センサーから物体までの距離と変位を測定します。

## 応用分野

これらの距離センサーには多くの用途があります。特に、この種のセンサーを使用することで、人間を監視し、利益をもたらしたり、さまざまな状況から救助することができます。そのため、距離センサーは日常生活、産業、医療、軍事などのさまざまな分野で重要な役割を果たしています。

| 応用分野                                          | 内容 |
|--------------------------------|-----------------------------------------|
| 日常生活  | 距離センサーは一般的に携帯電話の両側や溝に配置されています。ユーザーが電話を受けたりかけたりする際、携帯電話が頭に近づくと、距離センサーがある程度の距離を測定し、画面のバックライトをオフにするよう通知します。そして、携帯電話が離れるとバックライトを再びオンにします。これにより、ユーザーにとって便利で、より多くの電力を節約できます。|
| 産業 | 鉄道接触網の測定；建物の制限測定；不適切な物体の測定；産業オートメーションと生産のインテリジェント管理；自動車の速度と流量統計；産業監視信号のトリガー制御；タワークレーンのXY位置決め；船舶の安全な停泊位置の監視；コンテナの位置決め；架空ケーブルの測定、高さ制限測定；コンベアベルト上の箱の幅を測定。|
| 医療 | 遠隔手術ツールの位置決めやX線/CTスキャンでのベッド位置決めのためのロープ変位センサー。|
| 軍事 | 主に野外環境（山岳条件、峡谷の深さなど）、航空機の高度検出、鉱山の深さや材料の高さ測定に使用されます。航空機の高度測定は主に離着陸時に地面からの高さを検出し、リアルタイムで制御パネルに表示されます。|

## Seeed における距離センサー

### あなたの好みはどれですか

|名前|サムネイル|動作電圧|測定範囲|動作温度|購入リンク|
|----|-----|-----|------|------|------|
|[Grove - Time of Flight Distance Sensor(VL53L0X)](https://wiki.seeedstudio.com/ja/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/)|<img src="https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/thumbnail.jpg"/>|3.3V-5V|30mm-1000mm|-20℃ - 70℃|[購入する](https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html)|
|[Grove - Ultrasonic Ranger](https://wiki.seeedstudio.com/ja/Grove-Ultrasonic_Ranger/)|<img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg" />|3.2V~5.2V|2cm-350cm|-10℃ - 60℃ |[購入する](https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html)|
|[Grove - Infrared Reflective Sensor](https://wiki.seeedstudio.com/ja/Grove-Infrared_Reflective_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" />|3.3V-5V|4mm–15 mm|/|[購入する](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1-2.html)|
|[Grove - Digital Distance Interrupter 0.5 to 5cm(GP2Y0D805Z0F)(P)](https://wiki.seeedstudio.com/ja/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F_P/)|<img src="https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/thumbnail_p.jpg" />|3.3v-5v|0.5cm - 5cm|-10℃ -60℃|[購入する](https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0-5-to-5cm-GP2Y0D805Z0F-P.html)|
|[Grove - Digital Distance Interrupter 0.5 to 5cm(GP2Y0D805Z0F)](https://wiki.seeedstudio.com/ja/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/)|<img src="https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/thumnail.jpg" />|3.3v-5v|0.5cm - 5cm|-10℃ -60℃|[購入する](https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0-5-to-5cm-GP2Y0D805Z0F.html)|
|[Grove - IR Distance Interrupter v1.2](https://wiki.seeedstudio.com/ja/Grove-IR_Distance_Interrupter_v1.2/)|<img src="https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/IR.png" />|3.3v-5v|7.5cm–40 cm|/|[購入する](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
|[Grove-TF Mini LiDAR](https://wiki.seeedstudio.com/ja/Grove-TF_Mini_LiDAR/)|<img src="https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR_S.JPG" />|4.5V-6V|0.3m-12m|-20℃-60℃|[購入する](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR.html)|

### 注意事項

上記の表は、各距離センサーの動作電圧、測定範囲、動作温度などのさまざまな属性を示しています。あなたに最も適したものを選択してください。

個々のセンサーに関する詳細情報については、製品画像の横にあるリンクをクリックして、それぞれのページをご覧ください。

## リソース

- 参考資料
  - [Distance Sensor: ELEM-DP 10k](https://www.directindustry-china.cn/prod/jenoptik-i-defense-civil-systems/product-65823-2021371.html)

## プロジェクト

**Seeedの新オフィスで階段をハッキング**: オフィスの階段をインタラクティブなインスタレーションに変え、訪問者に「STAFF ONLY」というメッセージを伝えるクールな方法を実現します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

## 技術サポート & 製品に関するディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>