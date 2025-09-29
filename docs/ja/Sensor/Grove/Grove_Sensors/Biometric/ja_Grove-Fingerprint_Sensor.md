---
description: Grove - 指紋センサー
title: Grove - 指紋センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Fingerprint_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Print_Sensor.jpg" /></div>

指紋センサーは、指紋の検出と認証を非常に簡単にする光学式指紋センサーです。高性能DSPチップAS601が搭載されており、画像のレンダリング、計算、特徴抽出、検索を行います。また、新しい指紋を直接登録することも可能で、最大162個の指紋をオンボードのフラッシュメモリに保存できます。レンズには赤色LEDが内蔵されており、写真撮影中に点灯することで動作状態を確認できます。このセンサーは使いやすく、現在入手可能な中で最も優れた指紋センサーです。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Fingerprint-Sensor-p-1424.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

仕様
-------------

- 電源電圧: 3.6~6.0 V
- 動作電流(最大): 120 mA
- 指紋画像取得時間: 1.0 秒
- マッチモード: 比較モード 1:1
- 検索モード: 1:N
- 保存容量: 162 テンプレート
- 誤受入率 (FAR): 0.001% (セキュリティレベル3)
- 誤拒否率 (FRR): 1.0% (セキュリティレベル3)
- ボーレート: 9600, 19200, 28800, 38400, 57600bps (デフォルトは57600)
- インターフェース: TTL シリアル
- 動作温度: -20 ~ +50 ℃
- インターフェース

| ピン番号 | 名前 | タイプ | 機能説明                                                   |
|----------|------|--------|----------------------------------------------------------|
| 1        | Vin  | 入力   | 正電源入力端子 (線の色: 赤)                              |
| 2        | TD   | 出力   | シリアルデータ出力、TTLロジックレベル (線の色: 黄)       |
| 3        | RD   | 入力   | シリアルデータ入力、TTLロジックレベル (線の色: 白)       |
| 4        | GND  | -      | 信号グラウンド (線の色: 黒)                              |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記に記載されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべてのMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

はじめに
-------------

指紋センサーモジュールは通常、金庫などで使用されます。このセンサーには高性能DSPチップが搭載されており、画像のレンダリング、計算、特徴抽出、検索を行います。TTLシリアルを使用して任意のマイクロコントローラーやシステムに接続し、データパケットを送信して写真を撮影し、指紋を検出し、ハッシュ化および検索を行います。また、新しい指紋を直接登録することも可能で、最大162個の指紋をオンボードのフラッシュメモリに保存できます。レンズには赤色LEDが内蔵されており、写真撮影中に点灯することで動作状態を確認できます。

- センサーをGrove - Base Shieldのデジタルポート2に接続します。
- Grove - Base ShieldをArduinoに接続し、USBケーブルを使用してArduinoをPCに接続します。

電源を接続すると、赤色LEDが点滅し、センサーが動作していることを示します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/FingerPrint_Sensor1.jpg" /></div>

- [指紋センサーライブラリ](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/Fingerprint_library.rar)をダウンロードし、Arduino IDEのライブラリフォルダに解凍します。パスは次の通りです: ..\\arduino-1.0.1\\libraries。

このライブラリは指紋の登録と検索が可能で、どのプロジェクトにも最適です。10分以内に動作させることができます。光学式指紋センサーを使用するには基本的に2つの要件があります。1つ目は指紋を登録することです。これは、各指紋にID番号を割り当て、後で照会できるようにすることを意味します。すべての指紋を登録した後、センサーを簡単に「検索」して、現在撮影された指紋がどのID（該当する場合）に一致するかを特定できます。

- **File->Example->FingerPrint->Enroll**のパスから登録コードを直接開きます。
- コードをArduinoにアップロードします。
- シリアルツールを起動し、Arduinoで使用されているComNumとボーレートを選択します。
- 「SendNew」オプションを選択します。使用したいID番号を送信します。最大162個のID番号を使用できます。その後、センサーに指を押すように求められます。この時点で赤色LEDが点滅するのが確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/FingerPrint_Sensor3.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger1.jpg" /></div>

- 押した指紋が正常であれば、以下のメッセージが表示されます。その後、同じ指を使用して再度プロセスを繰り返し、2回目のきれいな指紋を取得する必要があります。成功すると、以下のメッセージが表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger2.jpg" /></div>

- 指紋や画像が不鮮明などの問題がある場合は、再度試す必要があります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger_Print_Score_2.jpg" /></div>

指紋が登録されたら、データベース内で見つけられるかどうかを確認するために簡単なテストを行うことをお勧めします。

- デモコード「fingerprint」を開き、アップロードします。
- センサーに異なる指または同じ指を押してください。同じ指の場合、以下のようにID番号と一致するはずです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger_Print_Score_3.jpg" /></div>

- データベースに登録されていない指の場合、シリアルポートには何も出力されません。

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

リソース
--------

- **[ライブラリ]** [指紋センサーライブラリファイル](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/Fingerprint_library.rar)
- **[データシート]** [ZhianTec ZFM-206シリーズデータシート（このバージョン用、簡体字中国語）](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/ZFM206用户手册V2.1.pdf)
- **[データシート]** [ZhianTec ZFM-20シリーズデータシート（旧シリーズ用、英語）](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/ZFM-user-manualV15.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Fingerprint_Sensor から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>