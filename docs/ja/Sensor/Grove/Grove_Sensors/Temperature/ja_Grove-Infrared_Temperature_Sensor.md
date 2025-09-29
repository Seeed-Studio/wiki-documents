---
description: Grove - 赤外線温度センサー
title: Grove - 赤外線温度センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Infrared_Temperature_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/main.jpg" /></div>

赤外線温度センサーは非接触型の温度測定モジュールです。このセンサーは、浮遊マイクロ膜上に直列に配置された116個の熱電対素子で構成されています。センサーの黒い表面は入射する熱赤外線を吸収しやすく、それによって出力で電圧応答を引き起こす可能性があります。このセンサーは、対象物の温度に応じてアナログ電圧（0～1.1V）を出力します。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## バージョン

製品バージョン | 変更点 | リリース日
--|--|--
Grove - 赤外線温度センサー v1.0 | 初版 | 2015年12月11日
Grove - 赤外線温度センサー v1.1 | レイアウトの最適化 | 2016年7月24日
Grove - 赤外線温度センサー v1.2 | 電源チップを変更し、電源をより安定化 | 2018年2月10日

## 仕様

- 電圧: 3-5V
- 測定電流供給: 160-200 μA
- 測定範囲: -10～100°C
- 保持時間: 2秒
- 動作温度: -10～80°C
- 保存温度: -35～80°C

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記に記載されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

以下のスケッチは、センサー周辺の温度とセンサーの前にある対象物の温度を測定し、その結果をシリアルモニターに表示する簡単なアプリケーションを示しています。

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ 1.** 以下の材料を準備してください：

| Seeeduino V4.2 | ベースシールド | Grove - 赤外線温度センサー |
|----------------|----------------|-----------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/JUH4jM8D85pxTHah3QXYxhe7.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html)|

- **ステップ 2.** Grove - 赤外線温度センサーをGrove-Base Shieldのポート **A0** に接続します。

- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/connect.jpg" /></div>

:::note
Grove Base Shieldがない場合は、以下のようにGrove - 温度および湿度センサーProをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove - 赤外線温度センサー |
|-----------------|---------------------------|
| 5V              | 赤                        |
| GND             | 黒                        |
| A1              | 白                        |
| A0              | 黄                        |

#### ソフトウェア

- **ステップ 1.** [デモコード](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/MeasureTemperature.zip)をダウンロードし、ダブルクリックしてデモを開きます。

温度を測定する前に簡単な設定が必要です。以下の手順に従ってテストを行うことで、正確な結果を得ることができます。

- **ステップ 2.** センサー電圧を調整する

デモプログラムをアップロードした後、センサーを通常の環境に5分以上置き、センサーの温度を周囲温度と同じにします。その後、シリアルモニターを開いてセンサーが出力する電圧を確認します。理想的には、周囲温度が温度センサーと等しい場合、赤外線センサー（TP-538U）の出力は0Vです。ハードウェアで基準電圧を0.5Vにオフセットする必要があります。以下のように、センサー電圧が0.014Vの場合、シリアルモニターから取得した値をプログラム内のoffset_vol値として変更するだけです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Infrared_Temperature_Sensor_code2.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Serialmonitor.jpg" /></div>

- **ステップ 3.** センサー検出距離を調整する

実験によると、センサーの公称測定距離は9CMですが、すべてのセンサーが同じ特性を持つとは限りません。正確な結果を得るためには、氷と水の混合物を使用して0℃を測定し、沸騰した水を使用して100℃を調整する必要があります。その後、センサーの有効距離を取得できます。

測定の具体的な方法は、暗い容器に氷と水を入れ、平らな表面を持つ状態で0℃まで冷却します。センサーを対象物から9CM離して保持し、センサーを前後に動かして結果を確認します。出力が0℃の場合、距離値を記録します。同じ方法で沸騰した水を確認します。一対の値を取得したら、平均計算を行います。これで、取得した定格距離で測定を開始できます。

センサー周辺の温度を測定することができます。センサーは公称距離で適用されますが、他の距離でも試すことができます。ただし、センサーの製造元や私たちが取得した距離-温度図はありません。上記の2つの手順に従って図を描くことができます。デモコードには変数 **"temperature_range"** が予約されています。対象距離が3cmであると仮定し、測定した係数は5前後になる可能性があります。楽しい試みをお楽しみください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Infrared_Temperature_Sensor_Code_1.jpg" /></div>

:::note
**1**. デモコードはAtmega168をサポートしていません。

**2**. 正確な測定値を得るためには、距離(D)と対象物の直径(S)の比率D:Sが0.5未満である必要があります。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Dsdiagram.jpg" /></div>

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

- **ステップ 5.** Arduino IDEの**シリアルモニター**を開きます。**ツール->シリアルモニター**をクリックするか、++ctrl+shift+m++キーを同時に押します。すべてが正常に動作していれば、温度が表示されます。

結果は以下のようになります：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/result_arduino.png" /></div>

# Grove-赤外線温度センサー V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-赤外線温度センサー V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Grove-Infrared_Temperature_Sensor_v1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove-赤外線温度センサー V1.2 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Grove-Infrared_Temperature_Sensor_v1.2.zip)
- **[Zip]** [Grove-赤外線温度センサー V1.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip)
- **[Zip]** [OTP-538U データシート](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/OTP-538Udatasheet.zip)
- **[Zip]** [デモコード](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/MeasureTemperature.zip)
- **[Zip]** [SerialLCD付き赤外線温度デモコード](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_temperature_demo_code_with_serialLCD.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Infrared_Temperature_Sensor から作成されました -->

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>