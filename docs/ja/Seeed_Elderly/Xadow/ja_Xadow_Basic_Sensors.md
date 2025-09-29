---
description: Xadow - 基本センサー
title: Xadow - 基本センサー
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Basic_Sensors
last_update:
  date: 05/15/2025
  author: shuxu hu
---


---
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors.JPG)

Xadow Basic Sensorsは、1枚の基板上に3種類の異なるセンサーを統合しています：
- 動作検知、活動モニタリング、速度追跡のための3軸加速度センサー
- 赤外線、全スペクトル、または人間が見える光を個別に測定できるデュアルダイオードデジタル光センサー
- 温度モニタリングのための温度センサー

[![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)

## 特徴
---
- 3-in-1センサーボード
- RePhone Kit Createに接続すればプラグアンドプレイ
- オープンソースでモジュール設計
- スリムでコンパクト
- 他のXadowモジュールと完全に柔軟に接続可能な11ピンXadowコネクタ内蔵
- 他のXadowモジュールと積み重ね可能、チェーン接続可能、縫い付け可能

## 仕様
---
**概要**

|項目|値|
|---|---|
|マイクロコントローラー|STM32F030F4|
|コア|ARM® 32-bit Cortex® -M0 CPU|
|電源供給|3.3 ~ 6 V (ブレークアウトピン経由)|
|フラッシュ|16 KB|
|SRAM|4 KB|
|クロックスピード|48 MHz|
|動作温度範囲|-30°C ～ 70°C|
|インターフェース|I2C (7ビットアドレス 0x03) を介してXadow GSM+BLEとインターフェース|
|寸法|25.37mm × 20.30mm / 1” × 0.8”|

**3軸加速度センサー (ADXL345)**

|項目|値|
|---|---|
|テストg範囲|±2g (デフォルト)、±4g、±8g、または±16g|
|解像度|g範囲に応じて増加、±16gで最大13ビット解像度|

**デジタル光センサー (TSL2561) -- 人間の目の反応を近似**

|項目|値|
|---|---|
|ダイナミックレンジ (Lux)|0.1 ～ 40,000 Lux|
|デュアルフォトダイオード|赤外線および全スペクトル|

**温度センサー (LM75ADP)**

|項目|値|
|---|---|
|温度範囲|-55°C ～ 125°C|
|精度|-25°C ～ 100°Cの温度範囲で±2°C / -55°C ～ 25°Cおよび100°C ～ 125°Cの温度範囲で±3°C|

## ハードウェア概要
---
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors.png)

## RePhone Kit Createとの使用
---
**センサーデータの取得**

プログラミングなしで、‘RePhone Kit Create’のコアモジュール (Xadow GSM+BLE) に接続することで、センサーからすべてのデータを読み取ることができます。
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors_Sensor_Value.png)

**「もしこれならあれ」を設定**

センサーデータを条件として設定し、オーディオ、LEDマトリックス、LEDストリップなどのアクチュエータをトリガーしたり、電話をかけたりメッセージを送信したりするアクションをトリガーすることができます。
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors_Set_Sensor_Condition.png)

## RePhoneコミュニティ
---
[![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

私たちは、支援者（RePhoneユーザー）が集まり、温かく快適に会話をしたり、RePhoneについて議論したり、技術的な問題を共有したり、アイデアやプロジェクトを共有したり、将来のモジュール開発に関するフィードバックを提供したりするためのより良い場所を探してきました。そして、[RePhoneコミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone)が誕生しました。

今すぐ[RePhoneコミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone)に参加しましょう！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

**よくある質問**

[RePhoneコミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone)で収集されたよくある質問は、「RePhoneのよくある質問 (FAQ)」というトピックに回答されています。このトピックは、新しいFAQが出るたびに更新され続けます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
ソースコードはGitHubページで随時更新していきます：
- [Xadow Basic Sensorsのソースコード](https://github.com/WayenWeng/Xadow_Basic_Sensors/)

Xadow Basic Sensorsの回路図は以下のリンクから提供されています：
- [Xadow Duino回路図ファイル](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip)

各センサーのデータシートに関する詳細情報はこちらをご覧ください：
- [ADXL345 - 3軸加速度センサー](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/ADXL345-3_Axis_Acceserometer.pdf)
- [LM75A NXP - 温度センサー](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/LM75A_NXP-Temperature_Sensor_.pdf)
- [TSL2561 - 光センサー](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/TSL2561-Light_Sensor_.pdf)

およびMCU STM32F030F4：
- [STM32F030F4](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/STM32F030F4.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートを用意しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>