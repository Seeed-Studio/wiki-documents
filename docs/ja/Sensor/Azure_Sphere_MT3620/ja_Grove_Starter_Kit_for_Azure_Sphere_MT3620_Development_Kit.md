---
description: Azure Sphere MT3620 開発キット用 Grove スターターキット
title: Azure Sphere MT3620 開発キット用 Grove スターターキット
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Starter_KIT_for_Azure_Sphere_MT3620_Development_Kit/img/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit.jpg)

この製品は、[Azure Sphere MT3620 開発キット](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html)用の基本的なスターターキットです。このキットは、SeeedStudio の最も人気のあるモジュール式プラットフォーム [Grove](https://www.seeedstudio.com/grove.html) を統合しており、開発者が迅速に開始し、Azure Sphere ソリューションを体験できるように設計されています。

Microsoft Azure Sphere は、高度にセキュアで接続された MCU 搭載デバイスを作成するためのソリューションです。Azure Sphere は、Microsoft のクラウド、ソフトウェア、シリコンにおける専門知識を結集し、シリコンからクラウドまでセキュリティを拡張する独自のアプローチを提供します。Azure Sphere 認定 MCU、Azure Sphere OS、および Azure Sphere Security Service を組み合わせることで、ビジネスを再構築し、未来を創造するための自信と力を提供します。

:::caution
Azure Sphere MT3620 開発キットは必要ですが、このスターターキットには含まれていません。こちらから購入できます：[こちら](https://www.seeedstudio.com/s/Azure%20Sphere%20MT3620.html)。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Starter-Kit-for-Azure-Sphere-MT3620-Development-Kit-p-3150.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 特徴

- Azure Sphere: IoT デバイスのエンドツーエンドセキュリティ
- Microsoft Visual Studio 開発環境
- デバイスのライフタイムにわたるオンライン認証と更新

## ハードウェア概要

**MT3620 Grove シールド**

[Azure Sphere SDK](http://aka.ms/AzureSphereSDK) はまだ MT3620 上で ADC と I2C をサポートしていないため、このシールドは MT3620 の UART ポートと外部 I2C デバイス（例: I2C 温度センサー）とのインターフェースとして機能します。このシールドの基本的な機能は、I2C 外部デバイスへの接続を支援することです。I2C 対応の ADC チップを使用することで、開発者はアナログポートからアナログデータを読み取ることもできます。

[MT3620 Grove シールド](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) には、AD7992（アナログから I2C への変換）と SC18IM700（I2C から UART への変換）の 2 つのチップが含まれており、ハードウェア側から ADC と I2C 機能を有効にします。そのため、アナログセンサーの信号は AD7992 を通り、次に SC18IM700 を通って開発ボードの UART に送られます。I2C センサーも SC18IM700 を通って開発ボードの UART に送られます。

[AD7992](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/AD7992.pdf) は、I2C 対応インターフェースを備えた 12 ビットの低消費電力逐次近似型 ADC です。アナログ信号 A0、A1 を I2C データに変換します。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/ADC_2_I2C.png)

[SC18IM700](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/SC18IM700.pdf) は、マイクロコントローラーまたはマイクロプロセッサの標準 UART ポートとシリアル I2C バスとの間のインターフェースとして機能するように設計されています。これにより、マイクロコントローラーまたはマイクロプロセッサが他の I2C バスデバイスと直接通信できるようになります。SDA/SCL 信号を GPIO26_TXD0 および GPIO28_RXD0 に変換します。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/I2C_2_UART.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_Grove_Shield-2018-09-11.png)

<div style={{textAlign: 'center'}}>MT3620 Grove シールド ハードウェア概要</div>

**部品リスト**

<table class="tg">
  <tr>
    <th class="tg-xldj">カテゴリ</th>
    <th class="tg-xldj">モジュール</th>
    <th class="tg-0pky">説明</th>
  </tr>
  <tr>
    <td class="tg-xldj">シールド</td>
    <td class="tg-xldj">MT3620 Grove シールド</td>
    <td class="tg-0pky">1 x UART、2 x I2C、1 x アナログ、4 x GPIO を提供</td>
  </tr>
  <tr>
    <td class="tg-xldj" rowspan="2">アナログ入力</td>
    <td class="tg-xldj">Grove - ロータリーアングルセンサー</td>
    <td class="tg-0pky">アナログ値を生成し、ADC で読み取ることが可能</td>
  </tr>
  <tr>
    <td class="tg-xldj">Grove - ライトセンサー v1.2</td>
    <td class="tg-0pky">光レベルを測定</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="2">デジタル出力</td>
    <td class="tg-0pky">Grove – ブザー</td>
    <td class="tg-0pky">デジタル信号で駆動され、音を発する</td>
  </tr>
  <tr>
    <td class="tg-0pky">Grove - リレー</td>
    <td class="tg-0pky">デジタル信号で駆動され、より高い電圧を切り替える</td>
  </tr>
  <tr>
    <td class="tg-0pky">デジタル I/O</td>
    <td class="tg-0pky">Grove - 青色 LED ボタン</td>
    <td class="tg-0pky">ボタンは入力として、LED は出力デバイスとして機能</td>
  </tr>
  <tr>
    <td class="tg-0pky">センサー</td>
    <td class="tg-0pky">Grove - 温湿度センサー (SHT31)</td>
    <td class="tg-0pky">温度を収集し、I2C インターフェースで読み取ることが可能</td>
  </tr>
  <tr>
    <td class="tg-0pky">ディスプレイ</td>
    <td class="tg-0pky">Grove - OLED ディスプレイ 1.12'' V2</td>
    <td class="tg-0pky">OLED は文字や画像を表示可能</td>
  </tr>
</table>

## アプリケーションアイデア

- 家庭/建物/施設
- 自動化
- セキュリティ
- 機器管理
- 公共サービス
- 公共安全

:::tip
Azure Sphere が実際の環境でどのように機能するかを理解するには、[Contoso, Ltd のシナリオ](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere)を参照してください。
:::

## はじめに

### 前提条件

**Azure Sphere のインストール**

Azure Sphere 開発キットを初めて使用する場合は、[こちらの手順](https://docs.microsoft.com/en-us/azure-sphere/install/overview)を完了してセットアップを行ってください。

**MT3620 Grove Shield ライブラリ**

これは Azure Sphere MT3620 Grove Shield 用のライブラリです。このシールドは、I2C インターフェースとアナログ入力を追加することで Azure Sphere を強化します。[MT3620 Grove Shield ライブラリ](https://github.com/Seeed-Studio/MT3620_Grove_Shield)の使用方法については、[チュートリアル](https://github.com/Seeed-Studio/MT3620_Grove_Shield/blob/master/README.md)をご覧ください。

### アナログ入力

以下は、MT3620 Base Shield を使用してアナログ信号を読み取る例です。

**ハードウェア接続**

| MT3620 開発キット | MT3620 Grove Shield | Grove - Rotary Angle Sensor |
|--------------|-------------|-----------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/rotation.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[今すぐ購入](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/Rotation_shield.jpg)

- ステップ 1. Grove - Rotary Angle Sensor を MT3620 Grove Shield のアナログポートに接続します。
- ステップ 2. MT3620 Base Shield を Azure Sphere MT3620 開発ボードに接続します。
- ステップ 3. USB ケーブルを Azure Sphere MT3620 開発ボードと PC に接続します。

**ソフトウェア**

- ステップ 1. [MT3620 Grove Shield ライブラリ](https://github.com/Seeed-Studio/MT3620_Grove_Shield)をダウンロードします。
- ステップ 2. MT3620 Grove Shield 内の **Samples/GroveRotaryAngleSensor** を開きます。
- ステップ 3. **GroveRotaryAngleSensor.sln** をダブルクリックします。
- ステップ 4. アプリケーションのプロジェクト名を右クリックし、**Properties > C/C++ > General > Additional Include Directories** を選択します。
- ステップ 5. **下矢印 > Edit... > New Line** アイコンをクリックし、**MT3620_Grove_Shield_Library** のパスを修正して **Select Folder > OK > OK** をクリックします。
- ステップ 6. アプリケーションプロジェクトで **References** を右クリックし、**Add References** を選択します。**Projects** を選択し、**MT3620_Grove_Shield_Library** のチェックボックスをオンにして **OK** をクリックします。
- ステップ 7. アプリケーションのプロジェクト名を右クリックし、**General > Target API Set** を選択します。**Visual Studio Community バージョン**を使用している場合はチェックボックスをオンにして **1** に設定します（Enterprise バージョンを使用している場合はこのステップをスキップしてください）。
- ステップ 8. **Remote GDB Debugger** をクリックし、センサーを回転させると以下のような出力が表示されます。

```
Remote debugging from host 192.168.35.1
Application starting
Angle Value 0.85
Angle Value 0.85
Angle Value 0.94
Angle Value 1.00
Angle Value 0.41
Angle Value 0.31
Angle Value 0.00
Angle Value 0.11
Angle Value 0.39
```

### デジタル出力

以下は、MT3620 Base Shield を使用してデジタル信号を書き込む例です。

**ハードウェア接続**

| MT3620 開発キット | MT3620 Grove Shield | Grove - Buzzer |
|--------------|-------------|-----------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/buzzer.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[今すぐ購入](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/buzzer_shield.jpg)

- ステップ 1. Grove - Buzzer を MT3620 Grove Shield の GPIO ポートに接続します。
- ステップ 2. MT3620 Base Shield を Azure Sphere MT3620 開発ボードに接続します。
- ステップ 3. USB ケーブルを Azure Sphere MT3620 開発ボードと PC に接続します。

**ソフトウェア**

- ステップ 1. [MT3620 Grove Shield ライブラリ](https://github.com/Seeed-Studio/MT3620_Grove_Shield)をダウンロードします。
- ステップ 2. MT3620 Grove Shield 内の **Samples/Grove_Buzzer** を開きます。
- ステップ 3. **Grove_Buzzer.sln** をダブルクリックします。
- ステップ 4. アプリケーションのプロジェクト名を右クリックし、**Properties > C/C++ > General > Additional Include Directories** を選択します。
- ステップ 5. **下矢印 > Edit... > New Line** アイコンをクリックし、**MT3620_Grove_Shield_Library** のパスを修正して **Select Folder > OK > OK** をクリックします。
- ステップ 6. アプリケーションプロジェクトで **References** を右クリックし、**Add References** を選択します。**Projects** を選択し、**MT3620_Grove_Shield_Library** のチェックボックスをオンにして **OK** をクリックします。
- ステップ 7. アプリケーションのプロジェクト名を右クリックし、**General > Target API Set** を選択します。**Visual Studio Community バージョン**を使用している場合はチェックボックスをオンにして **1** に設定します（Enterprise バージョンを使用している場合はこのステップをスキップしてください）。
- ステップ 8. **Remote GDB Debugger** をクリックすると、以下のような出力が表示されます。

```
Remote debugging from host 192.168.35.1
Application starting
Relay on
Relay off
Relay on
Relay off
```

### I2C

以下は、MT3620 Base Shield を使用して Grove - Temp&Humi Sensor(SHT31) の I2C 信号を読み取る例です。

**ハードウェア接続**

| MT3620 開発キット | MT3620 Grove Shield | Grove - Temp&Humi Sensor(SHT31) |
|--------------|-------------|-----------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/SHT3_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[今すぐ購入](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/sht31_shield.jpg)

- ステップ 1. Grove - Temp&Humi Sensor(SHT31) を MT3620 Grove Shield の I2C ポートに接続します。
- ステップ 2. MT3620 ベースシールドを Azure Sphere MT3620 開発ボードに接続します。
- ステップ 3. USB ケーブルを Azure Sphere MT3620 開発ボードと PC に接続します。

**ソフトウェア**

- ステップ 1. [MT3620 Grove Shield ライブラリ](https://github.com/Seeed-Studio/MT3620_Grove_Shield) をダウンロードします。
- ステップ 2. MT3620 Grove Shield の **Samples/Temp_and_Humidity_SHT31** を開きます。
- ステップ 3. **Temp_and_Humidity_SHT31.sln** をダブルクリックします。
- ステップ 4. アプリケーションのプロジェクト名を右クリックし、**Properties > C/C++ > General > Additional Include Directories** を選択します。
- ステップ 5. **下矢印 > Edit... > New Line** アイコンをクリックし、**MT3620_Grove_Shield_Library** のパスを修正して **Select Folder > OK > OK** をクリックします。
- ステップ 6. アプリケーションプロジェクトで **References** を右クリックし、**Add References** を選択します。**Projects** を選択し、**MT3620_Grove_Shield_Library** のチェックボックスをクリックして **OK** をクリックします。
- ステップ 7. アプリケーションのプロジェクト名を右クリックし、**General > Target API Set** を選択します。**Visual Studio Community バージョン**を使用している場合はチェックボックスをクリックして **1** に設定します（Enterprise バージョンを使用している場合はこのステップをスキップしてください）。
- ステップ 8. **Remote GDB Debugger** をクリックすると、以下のような出力が表示されます。

```
Remote debugging from host 192.168.35.1
Application starting
Hello world
Temperature: 19.2C
Humidity: 53.7%
Hello world
Temperature: 19.2C
Humidity: 53.7%
Hello world
Temperature: 19.1C
Humidity: 53.7%
Hello world
Temperature: 19.2C
Humidity: 53.8%
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/res/MT3620GroveShield%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [MT3620 Grove Shield v1.0 Sch and PCB](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/res/MT3620GroveShield%20v1.0.zip)
- **[Library]** [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Product]** [Azure Sphere MT3620 Development Kit Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[Product]** [Welcome to Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[DataSheet]]** [MediaTek MT3620 Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[DataSheet]** [DS_FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)
- **[Mechanical]** [Azure Sphere MT3620 Development Board-2D-Drawing](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[FAQ Web]** [Azure Sphere Forum](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Azure Sphere Github issues](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！お客様が製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>