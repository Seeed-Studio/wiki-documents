---
description: Grove温度センサーの比較
title: Grove温度センサーの比較

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/A_Comparison_of_Different_Grove_Temperature_Sensors
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---


温度は私たちの日常生活において非常に重要な物理的パラメータです。温度の測定は、産業用途や実験室での試験において重要であり、一部の家庭用電化製品でも温度制御のために測定が必要です。  
Groveファミリーは、温度を測定するために使用できる最大10種類のセンサーを提供しています。これらはすべて高い信頼性と使いやすいGroveインターフェースを備えていますが、それぞれに違いがあり、異なるプロジェクトや用途に適しています。  
このWikiでは、Grove温度センサーの主要な特徴を一覧にまとめています。これには、コスト、測定範囲、精度、感度、応答時間、長期安定性などが含まれます。この表は、プロジェクトに最適なセンサーを選ぶ際の参考資料となります。

# 最適な温度センサーの選び方

表を見る前に、プロジェクトに適したセンサーを選ぶために考慮すべきいくつかのポイントがあります。

### まず、測定対象は何ですか？

測定対象は部屋や特定のエンクロージャ内の周囲空気温度ですか？それとも空気の流れを測定するための通気口や液体を測定するための水槽ですか？または、高電圧にさらされて加熱する可能性のある電子システムですか？これらの要素は、コスト予算、消費電力、安全性、応答時間、センサーから機器までの距離などに基づいてセンサーの選択に影響を与えます。  
例えば、部屋の温度を測定する場合、非常に敏感である必要のない安価な温度計で十分かもしれません。しかし、植物を育てる温室が対象の場合、温度と湿度を正確に測定する高精度で敏感なセンサーが必要になるかもしれません。

### 次に、測定する温度の予想範囲は何ですか？

測定する温度の予想範囲は非常に重要です。対象物の温度がセンサーの測定範囲を超えると、センサーモジュールやセンサーに接続されたシステムに不可逆的な損傷を与える可能性があります。

### もう一つの考慮事項は、どれくらいの精度が必要ですか？

熱電対のような温度センサーは非常に広い測定範囲を持ち、過酷な環境で使用するのに適していますが、通常は精度や長期安定性に欠けます。測定の精度は、医療機器、ウェアラブルデバイス、一部の家庭設備などのケースでは非常に重要です。精度の高いセンサーは通常コストが高く、物理的な損傷を避けるために非常に慎重に使用する必要があります（一部は素手で触れることを禁止される場合があります）。

# 仕様

|温度センサー名|インターフェース|範囲|精度|感度|データシート|
|-----------------------|---------|----|---------|-----------|----|
|[Temp&Humi Sensor](https://wiki.seeedstudio.com/ja/Grove-TemperatureAndHumidity_Sensor/) | デジタル | 0~50C|+-2C|1C|[DHT11](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/DHT11.pdf)|
|[Temp&Humi Sensor Pro](https://wiki.seeedstudio.com/ja/Grove-Temperature_and_Humidity_Sensor_Pro/) | デジタル | -40~80C|+-0.5C|0.1C| [DHT22/AM2302](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302.pdf) |
|[Temperature Sensor](https://wiki.seeedstudio.com/ja/Grove-Temperature_Sensor_V1.2/) | アナログ | -40~125C|+-1.5C|N/A|[NCP18WF104F03RC](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf) |
|[One Wire Temperature Sensor](http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf) | ワイヤー1本 | -55~125C|+-0.5C|0.5C|[DS18B20](http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf) |
|[High Temperature Sensor](https://wiki.seeedstudio.com/ja/Grove-High_Temperature_Sensor/) |アナログ|-50~600C|2%|N/A|Kタイプ熱電対|
|[Temperature&Humidity Sensor (High-Accuracy & Mini)](https://wiki.seeedstudio.com/ja/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/) |I2C|0~70C|+-0.5C|1C|[TH02](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/TH02_SENSOR.pdf) |
|[DIGITAL INFRARED TEMPERATURE SENSOR](https://wiki.seeedstudio.com/ja/Grove-Digital_Infrared_Temperature_Sensor/) |I2C|-40~85C|+-0.5C|0.02C|[MLX90615](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf) |
|[Temperature&Humidity Sensor(SHT31)](https://wiki.seeedstudio.com/ja/Grove-TempAndHumi_Sensor-SHT31/) |I2C|-40~125C|+-0.3C|0.01C|[SHT31](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip) |
|[INFRARED TEMPERATURE SENSOR](https://wiki.seeedstudio.com/ja/Grove-Infrared_Temperature_Sensor/) |アナログ|-10~100C|N/A|N/A|[OTP-538U](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/OTP-538Udatasheet.zip) |
|[Temperature&Humidity Sensor(HDC1000)](https://wiki.seeedstudio.com/ja/Grove-TemperatureAndHumidity_Sensor-HDC1000/) |I2C|-40~125C|+-0.2C|0.01C|[HDC1000](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf) |
|[Barometer Sensor(BMP180)](https://wiki.seeedstudio.com/ja/Grove-Barometer_Sensor-BMP180/) |I2C|-40~85C|+-0.5C|0.1C|[BMP180](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/BMP180.pdf) |
|[Barometer Sensor(BMP280)](https://wiki.seeedstudio.com/ja/Grove-Barometer_Sensor-BMP280/) |I2C|-40~85C|+-0.5C|0.01C|[BMP280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf) |
|[Temp&Humi&Barometer Sensor(BME280)](https://wiki.seeedstudio.com/ja/Grove-Barometer_Sensor-BME280/) |I2C|-40~85C|+-0.5C|0.01C|[BME280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf) |

詳細については、以下のリストをダウンロードしてください。

[![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/list.png)](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/res/temperature%C2%A0sensor%20v2.xlsx)

# Groves

| Temp&Humi Sensor | Temp&Humi Sensor Pro | Thermistor |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/1.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/2.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/3.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

| Thermocouple | TH02 | Digital Infrared |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/4.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/5.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/6.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/depot/Grove-High-Temperature-Sensor-p-1810.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

| SHT31 | Infrared | HDC1000 |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/7.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/8.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/9.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html)|[今すぐ購入！](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html)|[今すぐ購入！](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)|

| BMP180 | BMP280 | BME280 |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/10.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/11.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/12.jpg)|
|[今すぐ購入！](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|[今すぐ購入！](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|[今すぐ購入！](https://www.seeedstudio.com/depot/Grove-TempHumiBarometer-Sensor-BME280-p-2653.html)|

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なるニーズや好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>