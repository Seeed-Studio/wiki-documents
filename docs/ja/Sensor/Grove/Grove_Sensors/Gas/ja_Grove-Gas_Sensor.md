---
description: Grove - ガスセンサー
title: Grove - ガスセンサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Gas_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/img/Twig-Gas_Sensor.bmp" alt="pir" width={600} height="auto" /></p>

Grove - ガスセンサーモジュールは、家庭や産業におけるガス漏れ検知に役立ちます。このモジュールは、LPG、イソブタン、メタン、アルコール、水素、煙などを検出することができます。高速応答時間により、可能な限り迅速に測定を行うことができます。また、ポテンショメータを使用して感度を調整することが可能です。

各 Grove - ガスセンサーキットは、1つのガスセンサーベースと4つの検出器で構成されています。特定のターゲットガスに応じて、ベース上の検出器を切り替えることができます。

-   [Grove - ガスセンサー(MQ2)](/ja/Grove-Gas_Sensor-MQ2)：可燃性ガス、煙
-   [Grove - ガスセンサー(MQ3)](/ja/Grove-Gas_Sensor-MQ3)：アルコール蒸気
-   [Grove - ガスセンサー(MQ5)](/ja/Grove-Gas_Sensor-MQ5)：LPG、天然ガス、都市ガス
-   [Grove - ガスセンサー(MQ9)](/ja/Grove-Gas_Sensor-MQ9)：一酸化炭素、石炭ガス、液化ガス

仕様
-------------

-   動作電圧: 4.9-5.1V
-   ヒーター消費電力: 0.5-800mW
-   負荷抵抗: 調整可能
-   ヒーター抵抗: 33Ω
-   検知抵抗: 3-30kΩ
-   動作温度: -25~70 ℃

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::   

はじめに
-------------

以下の図のように、Grove Shieldを使用してA0にモジュールを接続し、以下のプログラムを使用して電圧を取得します。ガス濃度が高いほど、SIGピンの出力電圧が大きくなります。ポテンショメータを回転させることで感度を調整できます。センサーの最適な予熱時間は約24時間であることに注意してください。センサーの詳細情報については、データシートをご参照ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/img/Read_Gas_Sensor_data.jpg" alt="pir" width={600} height="auto" /></p>

リソース
---------

-   [MQ-2 データシート](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/MQ-2.pdf)
-   [MQ-3 データシート](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/MQ-3.pdf)
-   [MQ-5 データシート](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/MQ-5.pdf)
-   [MQ-9 データシート](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/MQ-9.pdf)
-   [GitHub上のデモコード](https://github.com/Seeed-Studio/Grove_Gas_Sensor)

このMarkdownファイルは、https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor から作成されました。

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