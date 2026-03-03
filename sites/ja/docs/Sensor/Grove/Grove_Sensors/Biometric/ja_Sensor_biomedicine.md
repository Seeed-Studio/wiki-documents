---
description: センサー - バイオメディスン（概要）
title: センサー - バイオメディスン（概要）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor_biomedicine
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Seeed バイオメディカルセンサー選定ガイド

近年、さまざまな種類のバイオメディカルセンサーをリリースしてきました。それらの中からどれを選ぶべきか迷うことがあるかもしれません。その悩みを解消するために、これらのセンサーを詳しく見ていき、あなたに最適なものを見つけましょう！

すべてのバイオメディカルセンサーについては、[Seeed Studio Bazaar](https://www.seeedstudio.com/)をご覧ください。

## バイオメディカルセンサーとは

バイオメディカルセンサーは、校正されたバイオメディスン分野におけるセンサーの一部であり、人間の生理情報をそれに関連する一定の機能関係を持つ電気情報に変換する変換装置です。このセンサーが取得する情報は人間の生理情報であり、その出力はしばしば電気信号として表されます。

<div align="center">
<img src="https://files.seeedstudio.com/wiki/Sensor_biomedical/IMG/Biomedicine.png" />
<figcaption><b>図1</b>. <i> バイオメディカルセンサーの応用例 </i></figcaption>
</div>

## 実績

<table>
<tr>
<th>センサーのカテゴリ</th>
<th>原理</th>
</tr>
<tr>
<td>GSR</td>
<td>GSRセンサーは、感情的な興奮に関連する汗腺活動を測定するのに役立ちます。皮膚の電気的特性を利用してGSRを測定します。つまり、汗腺活動に伴い皮膚抵抗が変化します。汗腺活動が増加すると、汗が多くなり、皮膚抵抗が小さくなります。</td>
</tr>
<tr>
<td>EMG</td>
<td>EMG検出器は人体と電気を接続する橋渡し役です。このセンサーは小さな筋肉信号を収集し、2次増幅とフィルタリングを行った後、出力信号をArduinoで認識できるようにします。</td>
</tr>
<tr>
<td>心拍数</td>
<td>心拍数センサーは光学技術を使用して皮下毛細血管内の血中酸素量を検出し、それに基づいて対応する心拍数を測定します。このモジュールは簡単かつ便利に心拍数を測定できます。心拍数センサーは光学技術を使用して、皮下毛細血管内の血中酸素量の変化を通じて人体の心拍数を検出します。心拍数検出は、ウェアラブルデバイスやフィットネス補助機器などのシナリオで広く使用できます。</td>
</tr>
<tr>
<td>指紋</td>
<td>指紋センサーは光学指紋センサーおよび半導体指紋センサーに属する感知装置であり、自動指紋収集のための重要なデバイスです。</td>
</tr>
</table>

## 適用分野

これらの健康関連センサーには多くの用途があります。特に、この種のセンサーを使用することで、人間を監視し潜在的な危険から守ることができます。そのため、生体医療センサーは産業、医療、社会的応用、家庭内応用など、さまざまな分野で重要な役割を果たしており、人々の身体的特徴を監視するために使用されています。

| 適用分野                                          | 機能                                                                                                                                                                                                                                       | 検出されるセンサーの例                                      |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| 病院  | 患者の心拍数を監視し、危険を回避し健康に関するアドバイスを提供する。 | 心拍数、EMG、GSR|
| ジム | フィットネスや体の健康に関するアドバイスを提供するため、運動中の人々の心拍数を監視する。  | 心拍数、EMG、GSR|
| 精神病院| 心拍数、感情的な行動、身体の健康を監視する。| 心拍数、EMG、GSR|
| 屋内入口（銀行、政府機関、企業、私有地など） | 安定したセキュリティ方法を提供する。 | 指紋センサー|
| 研究室 | 実験データを収集・分析し、人類や社会の発展に役立つアドバイスを提供する。| 心拍数、EMG、GSR |

## Seeed 生体医療センサー

当社のバザールにあるすべての製品については、[Products in Bazaar](https://www.seeedstudio.com/) をクリックしてご確認ください。

|名前|サムネイル|動作電圧|入力インターフェース|購入リンク|
|----|-----|-----|------|------|
|[Grove - 指紋センサー](https://wiki.seeedstudio.com/ja/Grove-Fingerprint_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/45d_small.jpg" />|3.6V-6V|TTL シリアル|[購入する](https://www.seeedstudio.com/Grove-Fingerprint-Sensor.html)|
|[Grove - 静電容量式指紋スキャナー/センサー](https://wiki.seeedstudio.com/ja/Grove-Capacitive-Fingerprint-Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/fingerprint.png" />|3.3V-5V|/|[購入する](https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html)|
|[Grove - 耳クリップ心拍センサー](https://wiki.seeedstudio.com/ja/Grove-Ear-clip_Heart_Rate_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/45d_small.jpg" />|3V-5.25V|TTL シリアル|[購入する](https://www.seeedstudio.com/Grove-Ear-clip-Heart-Rate-Sensor.html)|
|[Grove - 胸ストラップ心拍センサー](https://wiki.seeedstudio.com/ja/Grove-Chest_Strap_Heart_Rate_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/45d_small.jpg" />|3V-5.5V|TTL シリアル|[購入する](https://www.seeedstudio.com/Grove-Chest-Strap-Heart-Rate-Sensor-p-1115.html)|
|[Grove - 指クリップ心拍センサー](https://wiki.seeedstudio.com/ja/Grove-Finger-clip_Heart_Rate_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Grove-Finger-clip_Heart_Rate_Sensor (1).jpg" />|5V|I2C|[購入する](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor.html)|
|[Grove - シェル付き指クリップ心拍センサー](https://wiki.seeedstudio.com/ja/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/)|<img src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/1.jpg" />|5V|I2C|[購入する](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell.html)|
|[Grove - GSRセンサー](https://wiki.seeedstudio.com/ja/Grove-GSR_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/4.png" />|3.3-5V|アナログ|[購入する](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|
|[Grove - EMG検出器](https://wiki.seeedstudio.com/ja/Grove-EMG_Detector/)|<img src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/45d_small.jpg" />|3.3-5V|アナログ|[購入する](https://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html)|

### 注意事項

上記の表は各生体医療センサーのさまざまな属性を示しています。最も適したものを選択してください。

指紋センサーについては、Grove - 静電容量式指紋スキャナー/センサーは生体特性を識別し、高い安全性、小型、低消費電力、高精度で生体のみを識別します。一方、Grove - 指紋センサーは強い耐摩耗性を持ち、優れた環境適応性と安定性を備えています。心拍センサーについては、耳、胸、指のどの部位を測定するかによって選択が異なります。

より詳細な情報が必要な場合は、製品画像の横にあるリンクをクリックして、それぞれのページをご覧ください。

## プロジェクト

**eMotion - より良い未来に向けて**：私たちは、生体センサー、Helium プラットフォームのセキュリティ、そして Google Cloud の強力な機能を活用して、不安状態の可能性を浮き彫りにできると信じています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/factoryeight/emotion-towards-a-better-future-a01489/embed' width='350'></iframe>

**Google Map を使用した輸送データの可視化**：Wio LTE cat.1 を使用して輸送の GPS やその他の情報を監視します。コールドチェーンでは、GPS の位置情報とともに温度や湿度を監視できます。自転車利用の場合、GPS の位置情報とともに心拍数を監視することが可能です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>